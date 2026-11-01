/**
 * bKash, from the server's side.
 *
 * Everything that decides money lives here, never in the browser: the amount
 * is read off the order row in WordPress, and a payment is only believed once
 * bKash's own API has said so, for this order and for the right amount. The
 * storefront is told an order hash and nothing more.
 *
 *   resolveBkashConfig     the credentials in force, from settings
 *   createBkashPayment     an order in, a hosted payment URL out
 *   completeBkashPayment   a payment id in, bKash's final record out
 *   isPaymentSettled       whether that record pays for this order
 *   markOrderPaid          writes the payment back onto the order
 *   redactBkashSettings    strips the credentials out of a settings blob
 *
 * The credentials and the sandbox switch come only from the dashboard's
 * payment-gateway settings; nothing here reads `.env`. That means they travel
 * in the settings blob, so `redactBkashSettings` has to take them out again
 * before `/api/settings` hands that blob to a browser.
 *
 * This module reads the store's password and app secret, so it must only ever
 * be imported from a route handler - never from a "use client" component.
 */

const HOSTS = {
  sandbox: "https://tokenized.sandbox.bka.sh/v1.2.0-beta",
  live: "https://tokenized.pay.bka.sh/v1.2.0-beta",
};

/**
 * The settings fields a payment cannot start without.
 *
 * The dashboard calls the app key and secret `client_id` and `client_secret`.
 */
const BKASH_REQUIRED_FIELDS = ["client_id", "client_secret", "username", "password"];

/**
 * The settings fields that hold a credential.
 *
 * `resolveBkashConfig` reads them, and `redactBkashSettings` removes them
 * before a settings blob is allowed near a browser. `store_id` is on the
 * dashboard's panel but bKash has no use for it; it comes out all the same,
 * because the storefront has no use for it either.
 */
export const BKASH_CREDENTIAL_FIELDS = [...BKASH_REQUIRED_FIELDS, "store_id"];

/** bKash charges in taka. An order in anything else is refused, not converted. */
const SETTLEMENT_CURRENCY = "BDT";

/** bKash asks merchants to allow 30 seconds before treating a call as lost. */
const EXECUTE_TIMEOUT_MS = 30_000;

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
 * `paymentGateways.bkash` from the store's settings, or null.
 *
 * This is the server asking WordPress directly, with the API token - not the
 * `/api/settings` route the storefront uses, which has the credentials
 * stripped out of it on purpose.
 *
 * A failed fetch answers with the last good value, however old, so a blip
 * between a buyer paying and the callback executing the payment cannot lose it.
 * With nothing cached it is null, which reads as unconfigured.
 */
async function bkashSettings(fresh = false) {
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
    const value = settings?.paymentGateways?.bkash ?? null;

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
 * The credentials in force, from the dashboard's settings.
 *
 * `configured` is the one thing worth checking before offering bKash at all:
 * without all four credentials the token call would be refused and the buyer
 * would meet an error at the last step of checkout.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache, for the
 *        dashboard asking what is in force right after a save.
 * @returns {Promise<object>}
 */
export async function resolveBkashConfig({ fresh = false } = {}) {
  const settings = await bkashSettings(fresh);

  const appKey = settingsValue(settings, "client_id");
  const appSecret = settingsValue(settings, "client_secret");
  const username = settingsValue(settings, "username");
  const password = settingsValue(settings, "password");

  /* Never-ticked is absent, and shows as off in the dashboard: that is live. */
  const sandbox = settings?.sandbox === true;

  return {
    sandbox,
    appKey,
    appSecret,
    username,
    password,
    configured: Boolean(appKey && appSecret && username && password),
    /* Enough to tell an admin which field is still missing. */
    has: {
      appKey: Boolean(appKey),
      appSecret: Boolean(appSecret),
      username: Boolean(username),
      password: Boolean(password),
    },
    baseUrl: sandbox ? HOSTS.sandbox : HOSTS.live,
  };
}

/**
 * A settings blob with bKash's credentials taken out.
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
export function redactBkashSettings(settings) {
  const bkash = settings?.paymentGateways?.bkash;

  if (!bkash || typeof bkash !== "object") {
    return settings;
  }

  const safe = { ...bkash };

  for (const field of BKASH_CREDENTIAL_FIELDS) {
    delete safe[field];
  }

  /*
    The storefront still needs to know whether bKash is usable, and it cannot
    work that out from credentials it is not allowed to see.
  */
  safe.configured = BKASH_REQUIRED_FIELDS.every(
    (field) => Boolean(String(bkash[field] || "").trim())
  );

  return {
    ...settings,
    paymentGateways: {
      ...settings.paymentGateways,
      bkash: safe,
    },
  };
}

/*
  The grant token, with whose it is. A token only works for the account and
  environment that asked for it, so changing either in the dashboard has to
  retire it rather than leave it in use until it expires.
*/
let tokenCache = { owner: "", token: null, expiresAt: 0 };

async function getBkashToken(config) {
  const now = Date.now();
  const owner = `${config.baseUrl}|${config.username}|${config.appKey}`;

  if (tokenCache.token && tokenCache.owner === owner && now < tokenCache.expiresAt) {
    return tokenCache.token;
  }

  const response = await fetch(`${config.baseUrl}/tokenized/checkout/token/grant`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      username: config.username,
      password: config.password,
    },
    body: JSON.stringify({
      app_key: config.appKey,
      app_secret: config.appSecret,
    }),
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok || !data.id_token) {
    throw new Error(data.statusMessage || "Could not get bKash token");
  }

  tokenCache = {
    owner,
    token: data.id_token,
    // bKash typically returns expires_in in seconds.
    expiresAt: now + (Number(data.expires_in || 300) - 30) * 1000,
  };

  return data.id_token;
}

async function configuredBkash() {
  const config = await resolveBkashConfig();

  if (!config.configured) {
    throw new Error("bKash is not configured for this store.");
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
 * A merchant invoice number for this attempt: the order id, then something
 * unique, because a buyer who fails once and tries again needs a fresh one.
 * The id at the front is what `isPaymentSettled` checks a payment against.
 */
function buildInvoiceNumber(order) {
  return `${order.id}-${Date.now().toString(36).toUpperCase()}`;
}

/**
 * Start a hosted payment for an order that already exists.
 *
 * The order hash goes in the callback's path because bKash adds its own query
 * string to this URL.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @returns {Promise<object>} bKash's answer: `paymentID` and `bkashURL`.
 */
export async function createBkashPayment(order, orderHash) {
  const config = await configuredBkash();

  const amount = Number(order?.total_amount);

  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("This order has nothing to pay for.");
  }

  const currency = String(order?.currency || SETTLEMENT_CURRENCY).toUpperCase();

  if (currency !== SETTLEMENT_CURRENCY) {
    throw new Error(`bKash settles in ${SETTLEMENT_CURRENCY}, and this order is in ${currency}.`);
  }

  const token = await getBkashToken(config);

  const response = await fetch(`${config.baseUrl}/tokenized/checkout/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "X-App-Key": config.appKey,
    },
    body: JSON.stringify({
      mode: "0011",
      payerReference: "customer",
      callbackURL: appUrl(`api/bkash/callback/${encodeURIComponent(orderHash)}`),
      amount: amount.toFixed(2),
      currency: SETTLEMENT_CURRENCY,
      intent: "sale",
      merchantInvoiceNumber: buildInvoiceNumber(order),
    }),
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok || !data.bkashURL) {
    throw new Error(data.statusMessage || "Could not create bKash payment");
  }

  return data;
}

/** A signed call to bKash about one payment. */
async function bkashPaymentCall(path, paymentID, options = {}) {
  const config = await configuredBkash();
  const token = await getBkashToken(config);

  const response = await fetch(`${config.baseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "X-App-Key": config.appKey,
    },
    body: JSON.stringify({ paymentID }),
    cache: "no-store",
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.statusMessage || "bKash did not answer for this payment");
  }

  return data;
}

/**
 * Take the payment the buyer just approved, and say how it ended.
 *
 * Executing is what moves the money, and a lost answer does not mean it failed:
 * bKash may have taken it and the reply gone missing, and a second execute is
 * refused. So anything short of "Completed" is checked against bKash's own
 * record of the payment before it is believed.
 *
 * @param {string} paymentID
 * @returns {Promise<object|null>} bKash's record, or null if it never answered.
 */
export async function completeBkashPayment(paymentID) {
  let executed = null;

  try {
    executed = await bkashPaymentCall("/tokenized/checkout/execute", paymentID, {
      signal: AbortSignal.timeout(EXECUTE_TIMEOUT_MS),
    });
  } catch (error) {
    console.error("bKash execute did not answer; asking for the payment status", {
      paymentID,
      error: error?.message,
    });
  }

  if (executed?.transactionStatus === "Completed") {
    return executed;
  }

  const queried = await bkashPaymentCall("/tokenized/checkout/payment/status", paymentID)
    .catch(() => null);

  return queried ?? executed;
}

/**
 * Whether bKash's record pays for this order.
 *
 * The callback URL can be visited by anyone with a payment id, so the record
 * has to be tied to the order: without the invoice check, one completed payment
 * could be replayed against any other order for the same amount. bKash names
 * the invoice field differently in its execute and status answers.
 */
export function isPaymentSettled(record, order) {
  if (record?.transactionStatus !== "Completed") {
    return false;
  }

  const invoice = String(record?.merchantInvoiceNumber ?? record?.merchantInvoice ?? "");

  if (!order?.id || !invoice.startsWith(`${order.id}-`)) {
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
      payment_method: "bkash",
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
