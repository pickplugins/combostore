/**
 * Paddle Classic, from the server's side.
 *
 * The store's Paddle account is a Paddle Classic vendor account (vendor id +
 * auth code, RSA-signed webhooks) - not Paddle Billing, whose client tokens,
 * `pri_` ids and v2 Paddle.js do not apply to it.
 *
 * Everything that decides money lives here, never in the browser: the amount
 * is read off the order row in WordPress, the auth code never leaves this
 * module, and a payment is only believed once Paddle has said so - either its
 * Order Information API (for the buyer coming back) or an RSA-signed webhook.
 *
 *   resolvePaddleConfig     the credentials in force, from settings
 *   redactPaddleSettings    strips the secrets out of a settings blob
 *   createPaddlePayLink     an order in, a hosted Paddle checkout URL out
 *   getPaddleCheckout       a checkout id in, Paddle's own record out
 *   settlePaddleCheckout    the buyer came back: verify and mark the order paid
 *   settlePaddleWebhook     Paddle called in: verify and mark the order paid
 *   verifyPaddleSignature   whether a webhook really came from Paddle
 *
 * The pay link is Classic's "custom" checkout (product/generate_pay_link): a
 * one-off price for one order, with no catalog product behind it. Paddle
 * hosts the checkout, so this is a redirect gateway like Stripe Checkout and
 * no card number touches this origin. A custom link has to name a
 * webhook_url, which is /api/paddle/webhook here.
 *
 * Paddle is the merchant of record and charges in its own currencies - not
 * BDT - so an order in the store's currency is converted at the rate set in
 * the dashboard, rounded up, exactly as Stripe's is.
 *
 * This module reads the store's auth code and API_TOKEN, so it must only ever
 * be imported from a route handler - never from a "use client" component.
 */

import crypto from 'crypto';

const HOSTS = {
	live: { vendors: 'https://vendors.paddle.com', checkout: 'https://checkout.paddle.com' },
	sandbox: { vendors: 'https://sandbox-vendors.paddle.com', checkout: 'https://sandbox-checkout.paddle.com' },
};

/** Currencies Paddle prices with no minor unit. */
const ZERO_DECIMAL_CURRENCIES = ['JPY', 'KRW'];

/** The settings fields that hold a secret (see redactPaddleSettings). */
export const PADDLE_SECRET_FIELDS = ['vendor_auth_code', 'public_key'];

/** The storefront's own origin. The env value may carry a trailing slash. */
function appUrl(path) {
	const base = String(process.env.NEXT_PUBLIC_APP_URL || '').replace(/\/+$/, '');

	return `${base}/${String(path).replace(/^\/+/, '')}`;
}

function wpUrl(route) {
	const base = String(process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/?$/, '/');

	return `${base}wp-json/combo-store/v2/${route}`;
}

/* The settings blob, cached for a minute - see stripe-server.js for why. */
const SETTINGS_TTL_MS = 60_000;

let settingsCache = { at: 0, value: null };

/**
 * `paymentGateways.paddle` from the store's settings, or null. A failed fetch
 * answers with the last good value, so a blip between a buyer paying and the
 * callback verifying them cannot leave a paid order unrecorded.
 */
async function paddleSettings(fresh = false) {
	const now = Date.now();

	if (!fresh && settingsCache.value && now - settingsCache.at < SETTINGS_TTL_MS) {
		return settingsCache.value;
	}

	try {
		const response = await fetch(wpUrl('get_settings_public'), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': process.env.API_TOKEN || '',
			},
			body: JSON.stringify({}),
			cache: 'no-store',
		});

		if (!response.ok) {
			return settingsCache.value;
		}

		const payload = await response.json().catch(() => null);
		const settings = payload?.settings ?? payload;
		const value = settings?.paymentGateways?.paddle ?? null;

		settingsCache = { at: now, value };

		return value;
	} catch (error) {
		return settingsCache.value;
	}
}

function settingsValue(settings, field) {
	const value = settings?.[field];

	return typeof value === 'string' ? value.trim() : (value ?? '');
}

/**
 * A public key as PEM. The dashboard's Developer Tools > Public Key is copied
 * with its BEGIN/END lines, but pasting into a one-line field can flatten the
 * line breaks, which Node then refuses to parse - so the body is re-wrapped.
 */
export function normalizePublicKey(key) {
	const text = String(key || '').trim();

	if (!text) {
		return '';
	}

	const body = text
		.replace(/-----BEGIN PUBLIC KEY-----/, '')
		.replace(/-----END PUBLIC KEY-----/, '')
		.replace(/\s+/g, '');

	if (!body) {
		return '';
	}

	return `-----BEGIN PUBLIC KEY-----\n${body.match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----\n`;
}

/** Whether a PEM key is one Node can actually use. */
function usablePublicKey(pem) {
	if (!pem) {
		return false;
	}

	try {
		crypto.createPublicKey(pem);

		return true;
	} catch (error) {
		return false;
	}
}

/**
 * The credentials and currency in force, from the dashboard's settings.
 *
 * `configured` (vendor id + auth code) is what it takes to create a pay link,
 * and so whether Paddle is offered at checkout at all. The public key only
 * matters to the webhook.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache.
 */
export async function resolvePaddleConfig({ fresh = false } = {}) {
	const settings = await paddleSettings(fresh);

	const vendorId = String(settingsValue(settings, 'vendor_id')).replace(/\D/g, '');
	const authCode = settingsValue(settings, 'vendor_auth_code');
	const publicKey = normalizePublicKey(settingsValue(settings, 'public_key'));
	const sandbox = settings?.sandbox === true || settings?.sandbox === 'true' || settings?.sandbox === 1;
	const currency = String(settingsValue(settings, 'currency') || 'USD').toUpperCase();
	const rate = Number(settingsValue(settings, 'exchange_rate'));

	return {
		vendorId,
		authCode,
		publicKey,
		publicKeyUsable: usablePublicKey(publicKey),
		sandbox,
		hosts: sandbox ? HOSTS.sandbox : HOSTS.live,
		currency,
		/* Units of the store's currency per one unit of Paddle's. */
		exchangeRate: Number.isFinite(rate) && rate > 0 ? rate : 0,
		configured: Boolean(vendorId && authCode),
	};
}

/**
 * A settings blob with Paddle's secrets taken out, for `/api/settings`, which
 * any browser can request. The vendor id is not secret (it is in every
 * Paddle checkout URL) and is left in. Returns a copy.
 */
export function redactPaddleSettings(settings) {
	const paddle = settings?.paymentGateways?.paddle;

	if (!paddle || typeof paddle !== 'object') {
		return settings;
	}

	const safe = { ...paddle };

	for (const field of PADDLE_SECRET_FIELDS) {
		delete safe[field];
	}

	safe.configured = Boolean(String(paddle.vendor_id || '').trim() && String(paddle.vendor_auth_code || '').trim());

	return {
		...settings,
		paymentGateways: {
			...settings.paymentGateways,
			paddle: safe,
		},
	};
}

/** The order a payment belongs to, read from WordPress by its hash. */
export async function getOrderByHash(orderHash) {
	if (!orderHash) {
		return null;
	}

	const response = await fetch(wpUrl('get_order_by_hash'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': process.env.API_TOKEN || '',
		},
		body: JSON.stringify({ slug: orderHash }),
		cache: 'no-store',
	});

	if (!response.ok) {
		return null;
	}

	const payload = await response.json().catch(() => null);

	return payload?.order ?? null;
}

/**
 * What Paddle will charge for an order, in Paddle's currency: converted at the
 * dashboard's rate and rounded up to the smallest unit, so conversion never
 * charges a fraction less than the order is worth. Null when it cannot be
 * worked out (a missing rate across two currencies) - refuse, don't guess.
 *
 * @returns {{value:number, currency:string, display:string}|null}
 */
export function paddleChargeAmount(total, orderCurrency, config) {
	const amount = Number(total);

	if (!Number.isFinite(amount) || amount <= 0) {
		return null;
	}

	const from = String(orderCurrency || '').toUpperCase();
	const target = String(config?.currency || '').toUpperCase();

	if (!target) {
		return null;
	}

	let value = amount;

	if (from && from !== target) {
		if (!(config?.exchangeRate > 0)) {
			return null;
		}

		value = amount / config.exchangeRate;
	}

	const decimals = ZERO_DECIMAL_CURRENCIES.includes(target) ? 0 : 2;
	const factor = Math.pow(10, decimals);
	const rounded = Math.ceil(value * factor - 1e-9) / factor;

	if (!(rounded > 0)) {
		return null;
	}

	return { value: rounded, currency: target, display: rounded.toFixed(decimals) };
}

/** The checkout title, which is also how a checkout is tied back to its order. */
function checkoutTitle(order) {
	return `Order #${order?.id ?? ''}`;
}

/**
 * A Paddle Classic pay link for an order that already exists.
 *
 * The order is one line at the order's total: the order row is the authority
 * on what is owed. `passthrough` carries the order hash and id through Paddle
 * to the webhook; the return URL carries the hash plus `{checkout_hash}`,
 * which Paddle fills in with the checkout id so the callback can ask Paddle
 * what happened.
 *
 * @returns {Promise<{paymentUrl:string, amount:string, currency:string}>}
 */
export async function createPaddlePayLink(order, orderHash, config) {
	const resolved = config ?? await resolvePaddleConfig();

	if (!resolved.configured) {
		throw new Error('Paddle is not configured for this store.');
	}

	const charge = paddleChargeAmount(order?.total_amount, order?.currency, resolved);

	if (!charge) {
		throw new Error('This order cannot be paid with Paddle.');
	}

	const body = new URLSearchParams();

	body.set('vendor_id', resolved.vendorId);
	body.set('vendor_auth_code', resolved.authCode);
	body.set('title', checkoutTitle(order));
	body.set('webhook_url', appUrl('api/paddle/webhook'));
	body.set('prices[0]', `${charge.currency}:${charge.display}`);
	body.set('quantity_variable', '0');
	body.set('discountable', '0');
	/*
		What the link was priced from rides along too, so a payment still
		verifies if the exchange rate is changed while the buyer is on Paddle's
		page (see covers()). Paddle hands passthrough back signed.
	*/
	body.set('passthrough', JSON.stringify({
		order_hash: orderHash,
		order_id: String(order?.id ?? ''),
		order_total: String(order?.total_amount ?? ''),
		order_currency: String(order?.currency || '').toUpperCase(),
		charge: charge.display,
		charge_currency: charge.currency,
	}));
	body.set(
		'return_url',
		appUrl(`api/paddle/callback?hash=${encodeURIComponent(orderHash)}&checkout={checkout_hash}`)
	);

	/* A link for one order should not stay payable for ever. */
	const expires = new Date(Date.now() + 2 * 86400000).toISOString().slice(0, 10);
	body.set('expires', expires);

	const email = order?.billing_email ? String(order.billing_email).trim() : '';

	/* Paddle rejects a malformed address outright, and the order may hold a phone-only placeholder. */
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		body.set('customer_email', email);
	}

	const response = await fetch(`${resolved.hosts.vendors}/api/2.0/product/generate_pay_link`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: body.toString(),
		cache: 'no-store',
	});

	const payload = await response.json().catch(() => null);

	if (!response.ok || !payload?.success || !payload?.response?.url) {
		/* Paddle's message is logged, not shown: it can name the vendor account. */
		console.error('Paddle refused to create a pay link', {
			status: response.status,
			code: payload?.error?.code,
			message: payload?.error?.message,
			sandbox: resolved.sandbox,
		});

		throw new Error('Paddle could not start this payment.');
	}

	return { paymentUrl: payload.response.url, amount: charge.display, currency: charge.currency };
}

/**
 * Paddle's record of a checkout, from the Classic Order Information API - or
 * null. `state` is "processed" once the payment is complete, "processing"
 * for a moment before that.
 */
export async function getPaddleCheckout(checkoutId, config) {
	if (!checkoutId || !/^[A-Za-z0-9-]+$/.test(checkoutId)) {
		return null;
	}

	try {
		const resolved = config ?? await resolvePaddleConfig();
		const response = await fetch(
			`${resolved.hosts.checkout}/api/1.0/order?checkout_id=${encodeURIComponent(checkoutId)}`,
			{ cache: 'no-store' }
		);

		if (!response.ok) {
			return null;
		}

		return await response.json().catch(() => null);
	} catch (error) {
		return null;
	}
}

/**
 * Whether a paid amount covers an order. Paddle may add tax on top of the
 * price (it is the merchant of record), so a total at or above the charge in
 * the same currency counts; less never does.
 *
 * The charge is first worked out again from the order at today's rate. If the
 * rate (or Paddle currency) was changed in the dashboard while the buyer was
 * paying, that no longer matches, so the passthrough the link was created
 * with - written by this server, handed back by Paddle - is the fallback: when
 * the order total and currency it records still match the order, the price it
 * records is what the order was worth. A cart changed since does not match.
 */
function covers(paid, paidCurrency, order, config, passthrough = null) {
	const value = Number(paid);
	const currency = String(paidCurrency || '').toUpperCase();

	if (!Number.isFinite(value)) {
		return false;
	}

	const expected = paddleChargeAmount(order?.total_amount, order?.currency, config);

	if (expected && currency === expected.currency && value + 0.005 >= expected.value) {
		return true;
	}

	const priced = Number(passthrough?.charge);

	return Boolean(passthrough)
		&& Number.isFinite(priced) && priced > 0
		&& Math.abs(Number(passthrough?.order_total) - Number(order?.total_amount)) < 0.005
		&& String(passthrough?.order_currency || '').toUpperCase() === String(order?.currency || '').toUpperCase()
		&& String(passthrough?.charge_currency || '').toUpperCase() === currency
		&& value + 0.005 >= priced;
}

/** passthrough as an object, from a JSON string or an object; null otherwise. */
function parsePassthrough(value) {
	if (value && typeof value === 'object') {
		return value;
	}

	try {
		const parsed = JSON.parse(String(value || ''));

		return parsed && typeof parsed === 'object' ? parsed : null;
	} catch (error) {
		return null;
	}
}

/**
 * Write a settled payment onto the order.
 *
 * Sent to WordPress's record_gateway_payment with the store's API key: it
 * sets only the payment fields (paid, processing, the transaction id) and
 * leaves an order already paid alone. update_order needs a staff login,
 * which a gateway callback or webhook does not have.
 */
export async function markOrderPaid(order, transactionId) {
	const response = await fetch(wpUrl('record_gateway_payment'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': process.env.API_TOKEN || '',
		},
		body: JSON.stringify({
			order_id: order?.id,
			payment_method: 'paddle',
			transaction_id: transactionId || '',
		}),
		cache: 'no-store',
	});

	if (!response.ok) {
		throw new Error(`The store answered ${response.status} when recording the payment.`);
	}

	const payload = await response.json().catch(() => null);

	if (payload?.status && payload.status !== 'success') {
		throw new Error(payload?.message || 'The payment could not be recorded.');
	}

	return payload;
}

/**
 * The shared tail of the callback and the webhook, which race by design:
 * whichever arrives first records the payment; the second finds the order
 * paid. A different Paddle order id on an already-paid order means the buyer
 * paid twice, which only a human can put right, so it is logged loudly.
 */
async function settle(order, paddleOrderId) {
	if (String(order.payment_status).toLowerCase() === 'paid') {
		const recorded = String(order.transaction_id || '');

		if (paddleOrderId && recorded && recorded !== String(paddleOrderId)) {
			console.error('A second Paddle payment was taken for an order already paid - refund needed', {
				orderId: order.id,
				recordedTransaction: recorded,
				secondTransaction: paddleOrderId,
			});

			return { status: 'already-paid', order, duplicate: true };
		}

		return { status: 'already-paid', order };
	}

	await markOrderPaid(order, String(paddleOrderId || ''));

	return { status: 'paid', order };
}

/**
 * The buyer came back from Paddle with a checkout id. Paddle is asked about
 * it - the URL proves nothing - and the checkout must be complete, be for
 * this order (its title names the order id) and cover the order's total.
 *
 * "processing" is waited out briefly; past that the webhook will settle it.
 *
 * @returns {Promise<{status:'paid'|'already-paid'|'processing'|'unverified'|'no-order', order?:object}>}
 */
export async function settlePaddleCheckout(orderHash, checkoutId) {
	const config = await resolvePaddleConfig();
	const order = await getOrderByHash(orderHash);

	if (!order?.id) {
		return { status: 'no-order' };
	}

	let record = await getPaddleCheckout(checkoutId, config);

	for (let i = 0; i < 4 && record?.state === 'processing'; i++) {
		await new Promise((resolve) => setTimeout(resolve, 1500));
		record = await getPaddleCheckout(checkoutId, config);
	}

	if (record?.state === 'processing') {
		return { status: 'processing', order };
	}

	const sameOrder = String(record?.checkout?.title || '') === checkoutTitle(order);
	const passthrough = parsePassthrough(record?.order?.passthrough ?? record?.checkout?.passthrough);

	if (record?.state !== 'processed' || !sameOrder || !covers(record?.order?.total, record?.order?.currency, order, config, passthrough)) {
		console.error('Paddle checkout did not verify against the order', {
			checkoutId,
			orderHash,
			state: record?.state,
			title: record?.checkout?.title,
			total: record?.order?.total,
			currency: record?.order?.currency,
			due: order?.total_amount,
		});

		return { status: 'unverified', order };
	}

	return settle(order, record?.order?.order_id);
}

/*
	PHP's serialize() of a flat array of strings: what Paddle Classic signs.
	Lengths are in bytes, not characters, so non-ASCII values still match.
*/
function phpSerialize(fields) {
	const keys = Object.keys(fields).sort();
	const str = (value) => `s:${Buffer.byteLength(value, 'utf8')}:"${value}";`;

	return `a:${keys.length}:{${keys.map((key) => str(key) + str(String(fields[key] ?? ''))).join('')}}`;
}

/**
 * Whether a webhook's fields really came from Paddle Classic: `p_signature`
 * is an RSA-SHA1 signature, with the vendor's public key, over the other
 * fields sorted by name and PHP-serialized. Unsigned, the webhook would let
 * anyone mark any order paid.
 *
 * @param {Record<string,string>} fields The form fields as received.
 * @param {string} publicKeyPem From resolvePaddleConfig().publicKey.
 */
export function verifyPaddleSignature(fields, publicKeyPem) {
	const signature = fields?.p_signature;

	if (!signature || !publicKeyPem) {
		return false;
	}

	const rest = { ...fields };
	delete rest.p_signature;

	try {
		return crypto.verify(
			'sha1',
			Buffer.from(phpSerialize(rest), 'utf8'),
			publicKeyPem,
			Buffer.from(String(signature), 'base64')
		);
	} catch (error) {
		return false;
	}
}

/**
 * Paddle called in, with fields already signature-checked. Two shapes arrive:
 *
 * - the custom pay link's fulfillment webhook (webhook_url): p_order_id,
 *   p_sale_gross, p_currency, passthrough;
 * - the account's `payment_succeeded` alert, if the vendor has subscribed
 *   their alert URL to it: order_id, sale_gross, currency, passthrough.
 *
 * Both name the order through `passthrough` and carry Paddle's signed
 * account of what was paid, which is checked against the order.
 *
 * @returns {Promise<{status:string, order?:object}>}
 */
export async function settlePaddleWebhook(fields) {
	const alert = String(fields?.alert_name || '');

	if (alert && alert !== 'payment_succeeded') {
		return { status: 'ignored' };
	}

	const passthrough = parsePassthrough(fields?.passthrough);

	const orderHash = String(passthrough?.order_hash || '');

	if (!orderHash) {
		/* A sale this storefront did not start - another integration on the account. */
		return { status: 'ignored' };
	}

	const config = await resolvePaddleConfig();
	const order = await getOrderByHash(orderHash);

	if (!order?.id) {
		return { status: 'no-order' };
	}

	const paddleOrderId = alert ? fields?.order_id : fields?.p_order_id;
	const gross = alert ? fields?.sale_gross : fields?.p_sale_gross;
	const currency = alert ? fields?.currency : fields?.p_currency;

	if (String(passthrough?.order_id || '') !== String(order.id) || !covers(gross, currency, order, config, passthrough)) {
		console.error('A signed Paddle webhook did not match its order', {
			orderHash,
			orderId: order.id,
			passthroughOrderId: passthrough?.order_id,
			gross,
			currency,
			due: order?.total_amount,
		});

		return { status: 'unverified', order };
	}

	return settle(order, paddleOrderId);
}
