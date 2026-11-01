/**
 * Nagad, from the server's side.
 *
 * Everything that decides money lives here, never in the browser: the amount
 * is read off the order row in WordPress, and a payment is only believed once
 * Nagad's own verify API has said so, for this order and for the right amount.
 * The storefront is told an order hash and nothing more.
 *
 *   resolveNagadConfig     the credentials in force, from settings
 *   createNagadPayment     an order in, a hosted payment URL out
 *   verifyNagadPayment     a payment reference in, Nagad's record out
 *   isPaymentSettled       whether that record pays for this order
 *   markOrderPaid          writes the payment back onto the order
 *   redactNagadSettings    strips the credentials out of a settings blob
 *
 * The credentials and the sandbox switch come only from the dashboard's
 * payment-gateway settings; nothing here reads `.env`. That means they travel
 * in the settings blob, so `redactNagadSettings` has to take them out again
 * before `/api/settings` hands that blob to a browser.
 *
 * Nagad differs from the other gateways in being RSA at both ends: requests are
 * encrypted to Nagad's public key and signed with the merchant's private key,
 * and its answer to initialize is encrypted to the merchant's public key.
 *
 * This module reads the store's private key, so it must only ever be imported
 * from a route handler - never from a "use client" component.
 */

import crypto from "node:crypto";

const HOSTS = {
  sandbox: "http://sandbox.mynagad.com:10080/remote-payment-gateway-1.0/api/dfs",
  live: "https://api.mynagad.com/api/dfs",
};

const API_VERSION = "v-0.2.0";

/** ISO 4217 numeric for taka, which is what Nagad's API asks for. */
const CURRENCY_CODE = "050";

/** Nagad charges in taka. An order in anything else is refused, not converted. */
const SETTLEMENT_CURRENCY = "BDT";

/** Dhaka has no daylight saving, so a fixed offset is the whole of the rule. */
const DHAKA_OFFSET_MS = 6 * 60 * 60 * 1000;

/**
 * The settings fields that hold a credential.
 *
 * `resolveNagadConfig` reads them, and `redactNagadSettings` removes them
 * before a settings blob is allowed near a browser.
 */
export const NAGAD_CREDENTIAL_FIELDS = [
  "merchant_id",
  "merchant_number",
  "merchant_private_key",
  "gateway_public_key",
];

/** The storefront's own origin. The env value carries a trailing slash. */
function appUrl(path) {
  const base = String(process.env.NEXT_PUBLIC_APP_URL || "").replace(/\/+$/, "");

  return `${base}/${String(path).replace(/^\/+/, "")}`;
}

function wpUrl(route) {
  const base = String(process.env.NEXT_PUBLIC_SERVER_URL || "").replace(/\/?$/, "/");

  return `${base}wp-json/combo-store/v2/${route}`;
}

/*
  The settings blob, cached briefly. A minute is short enough that a credential
  changed in the dashboard takes effect while someone is still looking at the
  page, and long enough to keep a burst to one fetch.
*/
const SETTINGS_TTL_MS = 60_000;

let settingsCache = { at: 0, value: null };

/**
 * `paymentGateways.nagad` from the store's settings, or null.
 *
 * This is the server asking WordPress directly, with the API token - not the
 * `/api/settings` route the storefront uses, which has the credentials
 * stripped out of it on purpose.
 *
 * A failed fetch answers with the last good value, however old, so a blip
 * between a buyer paying and the callback verifying them cannot lose it. With
 * nothing cached it is null, which reads as unconfigured.
 */
async function nagadSettings(fresh = false) {
  const now = Date.now();

  if (!fresh && settingsCache.value && now - settingsCache.at < SETTINGS_TTL_MS) {
    return settingsCache.value;
  }

  try {
    const response = await fetch(wpUrl("get_settings_public"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_TOKEN || "",
      },
      body: JSON.stringify({}),
      cache: "no-store",
    });

    if (!response.ok) {
      return settingsCache.value;
    }

    const payload = await response.json().catch(() => null);

    /* The route has been seen both wrapped and bare; accept either. */
    const settings = payload?.settings ?? payload;
    const value = settings?.paymentGateways?.nagad ?? null;

    settingsCache = { at: now, value };

    return value;
  } catch (error) {
    return settingsCache.value;
  }
}

/** A settings field, trimmed, or '' when absent. */
function settingsValue(settings, field) {
  const value = settings?.[field];

  return typeof value === "string" ? value.trim() : (value ?? "");
}

/**
 * The key's bytes, whatever it was pasted as.
 *
 * Nagad hands keys out as bare base64 and merchants often keep them as PEM, and
 * either may lose its line breaks on the way through a settings form. So the
 * armour and all whitespace come off, and only the base64 is trusted.
 */
function keyBytes(text) {
  const body = String(text || "")
    .replace(/-----[^-]*-----/g, "")
    .replace(/\s+/g, "");

  return Buffer.from(body, "base64");
}

/** The first of these encodings the bytes parse as, or null. */
function parseKey(make, bytes, types) {
  for (const type of types) {
    try {
      return make({ key: bytes, format: "der", type });
    } catch (error) {
      /* Not this encoding; the next may be. */
    }
  }

  return null;
}

function parsePrivateKey(text) {
  return parseKey(crypto.createPrivateKey, keyBytes(text), ["pkcs8", "pkcs1"]);
}

function parsePublicKey(text) {
  return parseKey(crypto.createPublicKey, keyBytes(text), ["spki", "pkcs1"]);
}

/**
 * The credentials in force, from the dashboard's settings.
 *
 * `configured` is the one thing worth checking before offering Nagad at all.
 * A key counts only if it parses: a mangled one would otherwise read as present
 * and fail in front of a buyer.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache, for the
 *        dashboard asking what is in force right after a save.
 * @returns {Promise<object>}
 */
export async function resolveNagadConfig({ fresh = false } = {}) {
  const settings = await nagadSettings(fresh);

  const merchantId = settingsValue(settings, "merchant_id");
  const merchantNumber = settingsValue(settings, "merchant_number");
  const privateKey = parsePrivateKey(settingsValue(settings, "merchant_private_key"));
  const publicKey = parsePublicKey(settingsValue(settings, "gateway_public_key"));

  /* Never-ticked is absent, and shows as off in the dashboard: that is live. */
  const sandbox = settings?.sandbox === true;

  return {
    sandbox,
    merchantId,
    merchantNumber,
    privateKey,
    publicKey,
    configured: Boolean(merchantId && merchantNumber && privateKey && publicKey),
    /* Enough to tell an admin which field is still missing. */
    has: {
      merchantId: Boolean(merchantId),
      merchantNumber: Boolean(merchantNumber),
      privateKey: Boolean(privateKey),
      publicKey: Boolean(publicKey),
    },
    baseUrl: sandbox ? HOSTS.sandbox : HOSTS.live,
  };
}

/**
 * A settings blob with Nagad's credentials taken out.
 *
 * The storefront is served its settings through `/api/settings`, which any
 * browser can request - so anything secret has to be removed on the way
 * through. The fields are deleted rather than blanked, because a blank would
 * read as "configured with an empty key" to anything merging these settings.
 *
 * Returns a copy; the input is left alone.
 *
 * @param {object} settings
 * @returns {object}
 */
export function redactNagadSettings(settings) {
  const nagad = settings?.paymentGateways?.nagad;

  if (!nagad || typeof nagad !== "object") {
    return settings;
  }

  const safe = { ...nagad };

  for (const field of NAGAD_CREDENTIAL_FIELDS) {
    delete safe[field];
  }

  /*
    The storefront still needs to know whether Nagad is usable, and it cannot
    work that out from credentials it is not allowed to see.
  */
  safe.configured = NAGAD_CREDENTIAL_FIELDS.every(
    (field) => Boolean(String(nagad[field] || "").trim())
  );

  return {
    ...settings,
    paymentGateways: {
      ...settings.paymentGateways,
      nagad: safe,
    },
  };
}

/** Now in Dhaka, as the YYYYMMDDHHmmss Nagad expects. */
function dhakaTimestamp() {
  return new Date(Date.now() + DHAKA_OFFSET_MS)
    .toISOString()
    .replace(/\D/g, "")
    .slice(0, 14);
}

function encryptForNagad(plain, config) {
  return crypto
    .publicEncrypt(
      { key: config.publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
      Buffer.from(plain)
    )
    .toString("base64");
}

function signForNagad(plain, config) {
  return crypto.sign("sha256", Buffer.from(plain), config.privateKey).toString("base64");
}

/**
 * Open what Nagad encrypted to the merchant's key.
 *
 * Nagad uses PKCS#1 v1.5, and Node refuses that padding for private decryption
 * (CVE-2023-46809): the error it would raise can be used as an oracle against a
 * server that decrypts whatever it is sent. Here the ciphertext only ever comes
 * from the answer to our own request to Nagad, and a failure is not reported to
 * whoever could have tampered with it - so the RSA is done unpadded and the
 * padding, 00 02 <random non-zero bytes> 00 <message>, is taken off by hand.
 */
function decryptFromNagad(encoded, config) {
  const block = crypto.privateDecrypt(
    { key: config.privateKey, padding: crypto.constants.RSA_NO_PADDING },
    Buffer.from(String(encoded), "base64")
  );

  const separator = block.indexOf(0, 2);

  if (block[0] !== 0 || block[1] !== 2 || separator < 10) {
    throw new Error("Nagad's answer could not be read.");
  }

  return block.subarray(separator + 1).toString("utf8");
}

function nagadHeaders(clientIp) {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-KM-Api-Version": API_VERSION,
    "X-KM-IP-V4": clientIp || "127.0.0.1",
    "X-KM-Client-Type": "PC_WEB",
  };
}

/** A JSON POST to Nagad. It reports refusals as `reason` and `message` fields. */
async function postToNagad(url, body, clientIp) {
  const response = await fetch(url, {
    method: "POST",
    headers: nagadHeaders(clientIp),
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data || data.reason) {
    console.error("Nagad refused a request", {
      status: response.status,
      reason: data?.reason,
      message: data?.message,
    });

    throw new Error(data?.message || "Nagad could not start this payment.");
  }

  return data;
}

async function configuredNagad() {
  const config = await resolveNagadConfig();

  if (!config.configured) {
    throw new Error("Nagad is not configured for this store.");
  }

  return config;
}

/**
 * The order a payment belongs to, read from WordPress.
 *
 * The hash is all the browser ever sends; the total comes from here, so a
 * tampered cart cannot change what is charged.
 *
 * @param {string} orderHash
 * @returns {Promise<object|null>}
 */
export async function getOrderByHash(orderHash) {
  if (!orderHash) {
    return null;
  }

  const response = await fetch(wpUrl("get_order_by_hash"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.API_TOKEN || "",
    },
    body: JSON.stringify({ slug: orderHash }),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const payload = await response.json().catch(() => null);

  return payload?.order ?? null;
}

/**
 * Nagad's order id for this attempt: letters and digits only, and unique,
 * because a buyer who fails once and tries again needs a fresh one. The order
 * id at the front is what `isPaymentSettled` checks a payment against.
 */
function buildNagadOrderId(order) {
  return `${order.id}T${Date.now().toString(36).toUpperCase()}`;
}

/**
 * Start a hosted payment for an order that already exists.
 *
 * Two calls: initialize hands back a payment reference and a challenge, and
 * complete sends the amount with that challenge and answers with the URL.
 *
 * The order hash goes in the callback's path because Nagad adds its own query
 * string to this URL.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @param {string} [clientIp] The buyer's address, which Nagad asks for.
 * @returns {Promise<{paymentUrl:string, nagadOrderId:string}>}
 */
export async function createNagadPayment(order, orderHash, clientIp) {
  const config = await configuredNagad();

  const amount = Number(order?.total_amount);

  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("This order has nothing to pay for.");
  }

  const currency = String(order?.currency || SETTLEMENT_CURRENCY).toUpperCase();

  if (currency !== SETTLEMENT_CURRENCY) {
    throw new Error(`Nagad settles in ${SETTLEMENT_CURRENCY}, and this order is in ${currency}.`);
  }

  const nagadOrderId = buildNagadOrderId(order);
  const dateTime = dhakaTimestamp();

  const initializePlain = JSON.stringify({
    merchantId: config.merchantId,
    datetime: dateTime,
    orderId: nagadOrderId,
    challenge: crypto.randomBytes(20).toString("hex"),
  });

  const initialized = await postToNagad(
    `${config.baseUrl}/check-out/initialize/${config.merchantId}/${nagadOrderId}?locale=EN`,
    {
      accountNumber: config.merchantNumber,
      dateTime,
      sensitiveData: encryptForNagad(initializePlain, config),
      signature: signForNagad(initializePlain, config),
    },
    clientIp
  );

  if (!initialized.sensitiveData) {
    throw new Error("Nagad could not start this payment.");
  }

  const { paymentReferenceId, challenge } = JSON.parse(
    decryptFromNagad(initialized.sensitiveData, config)
  );

  if (!paymentReferenceId || !challenge) {
    throw new Error("Nagad could not start this payment.");
  }

  const completePlain = JSON.stringify({
    merchantId: config.merchantId,
    orderId: nagadOrderId,
    currencyCode: CURRENCY_CODE,
    amount: amount.toFixed(2),
    challenge,
  });

  const completed = await postToNagad(
    `${config.baseUrl}/check-out/complete/${paymentReferenceId}`,
    {
      sensitiveData: encryptForNagad(completePlain, config),
      signature: signForNagad(completePlain, config),
      merchantCallbackURL: appUrl(`api/nagad/callback/${encodeURIComponent(orderHash)}`),
      additionalMerchantInfo: {},
    },
    clientIp
  );

  if (completed.status !== "Success" || !completed.callBackUrl) {
    throw new Error("Nagad could not start this payment.");
  }

  return { paymentUrl: completed.callBackUrl, nagadOrderId };
}

/**
 * What Nagad says about a payment.
 *
 * The callback's query string can be forged, so this is the only account of a
 * payment that is acted on.
 *
 * @param {string} paymentRefId
 * @returns {Promise<object|null>}
 */
export async function verifyNagadPayment(paymentRefId) {
  const config = await resolveNagadConfig();

  if (!config.configured || !paymentRefId) {
    return null;
  }

  const response = await fetch(
    `${config.baseUrl}/verify/payment/${encodeURIComponent(paymentRefId)}`,
    { headers: nagadHeaders(), cache: "no-store" }
  );

  if (!response.ok) {
    return null;
  }

  return response.json().catch(() => null);
}

/**
 * Whether Nagad's record pays for this order.
 *
 * The callback URL can be visited by anyone with a payment reference, so the
 * record has to be tied to the order: without the order id check, one completed
 * payment could be replayed against any other order for the same amount.
 */
export function isPaymentSettled(record, order) {
  if (record?.status !== "Success" || !record?.issuerPaymentRefNo) {
    return false;
  }

  if (!order?.id || !String(record?.orderId ?? "").startsWith(`${order.id}T`)) {
    return false;
  }

  const paid = Number(record?.amount);
  const due = Number(order?.total_amount);

  if (!Number.isFinite(paid) || !Number.isFinite(due)) {
    return false;
  }

  return Math.abs(paid - due) < 0.01;
}

/**
 * Write a settled payment onto the order.
 *
 * `update_order` replaces the row from what it is given, so the order is read
 * first and sent back with only the payment fields changed - posting a bare
 * patch here would blank everything else.
 *
 * @param {object} order From getOrderByHash().
 * @param {{transactionId:string}} payment
 */
export async function markOrderPaid(order, payment) {
  const response = await fetch(wpUrl("update_order"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.API_TOKEN || "",
    },
    body: JSON.stringify({
      ...order,
      id: order?.id,
      status: "processing",
      payment_method: "nagad",
      payment_status: "paid",
      transaction_id: payment?.transactionId || "",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`The store answered ${response.status} when recording the payment.`);
  }

  const payload = await response.json().catch(() => null);

  if (payload?.status && payload.status !== "success") {
    throw new Error(payload?.message || "The payment could not be recorded.");
  }

  return payload;
}
