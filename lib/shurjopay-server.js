/**
 * shurjoPay (API v2), from the server's side.
 *
 * The same rules as the other redirect gateways: the amount is read off the
 * order row in WordPress, the credentials come from the dashboard's settings
 * and never reach a browser, and a payment is only believed once shurjoPay's
 * own verification API has been asked about it.
 *
 *   resolveShurjoPayConfig   the credentials in force, from settings
 *   createShurjoPayPayment   an order in, a hosted checkout URL out
 *   verifyShurjoPayPayment   a shurjoPay order id in, shurjoPay's record out
 *   isPaymentSettled         whether that record is a payment for this order
 *   markOrderPaid            writes the payment back onto the order
 *   redactShurjoPaySettings  strips the credentials out of a settings blob
 *
 * The flow, as shurjoPay defines it:
 *   1. POST {base}/api/get_token with the merchant username and password. The
 *      answer carries a bearer token, the store id and the execute URL.
 *   2. POST the payment to that execute URL (api/secret-pay) with the token;
 *      the answer is a `checkout_url` and shurjoPay's own `sp_order_id`.
 *   3. The buyer comes back to return_url / cancel_url with `?order_id=` set to
 *      that sp_order_id - shurjoPay appends it whether or not the URL already
 *      has a query string, which is why ours carry none.
 *   4. POST {base}/api/verification with that order id. `sp_code` 1000 is paid.
 *
 * This module reads the merchant password, so it must only ever be imported
 * from a route handler - never from a "use client" component.
 */

const ENDPOINTS = {
	sandbox: 'https://sandbox.shurjopayment.com',
	live: 'https://engine.shurjopayment.com',
};

/** The settings fields that hold a credential; read by the config, removed by the redaction. */
export const SHURJOPAY_CREDENTIAL_FIELDS = ['username', 'password'];

/** shurjoPay's answer for a successful transaction. */
const SP_CODE_SUCCESS = '1000';

function appUrl(path) {
	const base = String(process.env.NEXT_PUBLIC_APP_URL || '').replace(/\/+$/, '');

	return `${base}/${String(path).replace(/^\/+/, '')}`;
}

function wpUrl(route) {
	const base = String(process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/?$/, '/');

	return `${base}wp-json/combo-store/v2/${route}`;
}

/* The settings blob, cached for a minute - see aamarpay-server.js for why. */
const SETTINGS_TTL_MS = 60_000;

let settingsCache = { at: 0, value: null };

/**
 * `paymentGateways.shurjopay` from the store's settings, or null. A failed
 * fetch answers with the last good value so a blip during the return trip
 * cannot leave a paid order unrecorded.
 */
async function shurjoPaySettings(fresh = false) {
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
		const value = settings?.paymentGateways?.shurjopay ?? null;

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
 * The transaction prefix shurjoPay puts in front of its order ids. Letters and
 * digits only, at most five; shurjoPay's own sandbox uses "NOK", so that is the
 * fallback when the field is left empty.
 */
function cleanPrefix(value) {
	const prefix = String(value || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 5).toUpperCase();

	return prefix || 'NOK';
}

/**
 * The credentials in force, from the dashboard's settings.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache.
 * @returns {Promise<object>}
 */
export async function resolveShurjoPayConfig({ fresh = false } = {}) {
	const settings = await shurjoPaySettings(fresh);

	const username = settingsValue(settings, 'username');
	const password = settingsValue(settings, 'password');

	/* Never-ticked is absent, and shows as off in the dashboard: that is live. */
	const sandbox = settings?.sandbox === true;

	return {
		sandbox,
		username,
		password,
		prefix: cleanPrefix(settingsValue(settings, 'prefix')),
		configured: Boolean(username && password),
		has: {
			username: Boolean(username),
			password: Boolean(password),
		},
		base: sandbox ? ENDPOINTS.sandbox : ENDPOINTS.live,
	};
}

/**
 * A settings blob with shurjoPay's credentials taken out, plus a `configured`
 * flag so the storefront can still tell whether the method is usable.
 * Returns a copy.
 */
export function redactShurjoPaySettings(settings) {
	const shurjopay = settings?.paymentGateways?.shurjopay;

	if (!shurjopay || typeof shurjopay !== 'object') {
		return settings;
	}

	const safe = { ...shurjopay };

	for (const field of SHURJOPAY_CREDENTIAL_FIELDS) {
		delete safe[field];
	}

	safe.configured = Boolean(
		String(shurjopay.username || '').trim() && String(shurjopay.password || '').trim()
	);

	return {
		...settings,
		paymentGateways: {
			...settings.paymentGateways,
			shurjopay: safe,
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

/*
	The bearer token, cached until shortly before it expires. shurjoPay hands
	out a fresh one per call happily, but the return trip is the moment a buyer
	is waiting, so one round trip fewer there is worth the few lines.
	Keyed by account and mode, so a credential change in the dashboard is a miss.
*/
let tokenCache = { key: '', at: 0, ttl: 0, value: null };

async function getToken(config) {
	const key = `${config.sandbox ? 's' : 'l'}:${config.username}:${config.password}`;
	const now = Date.now();

	if (tokenCache.value && tokenCache.key === key && now - tokenCache.at < tokenCache.ttl) {
		return tokenCache.value;
	}

	const response = await fetch(`${config.base}/api/get_token`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify({ username: config.username, password: config.password }),
		cache: 'no-store',
	});

	const data = await response.json().catch(() => null);

	if (!data?.token || String(data?.sp_code ?? '200') !== '200') {
		console.error('shurjoPay refused the token request', {
			status: response.status,
			sp_code: data?.sp_code,
			message: data?.message,
		});

		throw new Error('shurjoPay rejected the merchant credentials.');
	}

	const value = {
		token: data.token,
		tokenType: data.token_type || 'Bearer',
		storeId: data.store_id,
		executeUrl: data.execute_url || `${config.base}/api/secret-pay`,
	};

	/* expires_in is in seconds; keep a minute's margin. */
	const seconds = Number(data.expires_in);
	const ttl = Number.isFinite(seconds) && seconds > 120 ? (seconds - 60) * 1000 : 0;

	tokenCache = { key, at: now, ttl, value };

	return value;
}

/** Our own order id for this attempt; shurjoPay echoes it back as customer_order_id. */
function buildOrderId(order) {
	const stamp = Date.now().toString(36).toUpperCase();

	return `CS${order?.id ?? 0}-${stamp}`;
}

/** Whatever is in a field, or the stand-in shurjoPay needs because it insists on one. */
function filled(value, fallback) {
	const text = String(value ?? '').trim();

	return text || fallback;
}

/**
 * Start a hosted payment for an order that already exists.
 *
 * shurjoPay settles in taka only, so an order in another currency is refused
 * here rather than charged as though its figure were taka - the checkout
 * already hides the method for such an order.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @param {{clientIp?:string}} [context]
 * @returns {Promise<{paymentUrl:string, spOrderId:string, amount:number, currency:string}>}
 */
export async function createShurjoPayPayment(order, orderHash, { clientIp = '' } = {}) {
	const config = await resolveShurjoPayConfig();

	if (!config.configured) {
		throw new Error('shurjoPay is not configured for this store.');
	}

	const amount = Number(order?.total_amount);

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error('This order has nothing to pay for.');
	}

	const currency = String(order?.currency || 'BDT').toUpperCase();

	if (currency !== 'BDT') {
		throw new Error('shurjoPay only takes payments in BDT.');
	}

	const auth = await getToken(config);

	/* No query string on purpose: shurjoPay appends "?order_id=" regardless. */
	const returnUrl = appUrl('api/shurjopay/callback');

	const payload = {
		prefix: config.prefix,
		token: auth.token,
		store_id: auth.storeId,
		return_url: returnUrl,
		cancel_url: returnUrl,
		amount: Number(amount.toFixed(2)),
		order_id: buildOrderId(order),
		currency: 'BDT',

		customer_name: filled(order?.billing_name, 'Customer'),
		customer_address: filled(order?.billing_address || order?.billing_address1, 'N/A'),
		customer_phone: filled(order?.billing_phone, '01700000000'),
		customer_city: filled(order?.billing_city, 'Dhaka'),
		customer_post_code: filled(order?.billing_postcode, '1000'),
		customer_email: filled(order?.billing_email, ''),
		customer_country: filled(order?.billing_country, 'Bangladesh'),
		customer_state: filled(order?.billing_city, ''),
		client_ip: filled(clientIp, '127.0.0.1'),

		/*
			Carried through and handed back by the verification. This is what
			ties shurjoPay's record to our order, since the return URL carries
			nothing of ours.
		*/
		value1: orderHash,
		value2: String(order?.id ?? ''),
		value3: '',
		value4: '',

		discount_amount: 0,
		disc_percent: 0,
	};

	const response = await fetch(auth.executeUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `${auth.tokenType} ${auth.token}`,
		},
		body: JSON.stringify(payload),
		cache: 'no-store',
	});

	const data = await response.json().catch(() => null);

	if (!data?.checkout_url) {
		/* Logged, not shown: the body can echo the request back. */
		console.error('shurjoPay refused the payment request', {
			status: response.status,
			sp_code: data?.sp_code,
			message: data?.message,
		});

		/* A token that expired early is the one failure a retry fixes. */
		tokenCache = { key: '', at: 0, ttl: 0, value: null };

		throw new Error('shurjoPay could not start this payment.');
	}

	return {
		paymentUrl: data.checkout_url,
		spOrderId: data.sp_order_id || '',
		amount: payload.amount,
		currency: 'BDT',
	};
}

/**
 * What shurjoPay says about a payment. The return redirect can be forged by
 * anyone, so this is the only account of a payment that is acted on.
 *
 * @param {string} spOrderId shurjoPay's order id (the `order_id` on the return URL).
 * @returns {Promise<object|null>}
 */
export async function verifyShurjoPayPayment(spOrderId) {
	const config = await resolveShurjoPayConfig();

	if (!config.configured || !spOrderId) {
		return null;
	}

	const ask = async () => {
		const auth = await getToken(config);

		const response = await fetch(`${config.base}/api/verification`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `${auth.tokenType} ${auth.token}`,
			},
			body: JSON.stringify({ order_id: spOrderId }),
			cache: 'no-store',
		});

		return response.json().catch(() => null);
	};

	let data = await ask();

	/* An expired token answers with no record; one retry with a fresh token. */
	if (!Array.isArray(data) && !data?.sp_code) {
		tokenCache = { key: '', at: 0, ttl: 0, value: null };
		data = await ask();
	}

	/* The answer is a list with one record; some versions send it bare. */
	const record = Array.isArray(data) ? data[0] : data;

	return record && typeof record === 'object' ? record : null;
}

/**
 * Whether a verification describes a payment taken for this order, in taka,
 * for the right amount.
 */
export function isPaymentSettled(verification, order) {
	if (String(verification?.sp_code) !== SP_CODE_SUCCESS) {
		return false;
	}

	if (String(verification?.currency || 'BDT').toUpperCase() !== 'BDT') {
		return false;
	}

	/*
		value2 is the order id we sent, and every order_id we build starts
		CS{order id}- (shurjoPay echoes it as customer_order_id): both have to
		name this order. Required, not just checked when present, so a record
		missing them cannot settle anything.
	*/
	if (String(verification?.value2 ?? '') !== String(order?.id)) {
		return false;
	}

	if (!String(verification?.customer_order_id || '').startsWith(`CS${order?.id}-`)) {
		return false;
	}

	const paid = Number(verification?.amount);
	const due = Number(order?.total_amount);

	if (!Number.isFinite(paid) || !Number.isFinite(due)) {
		return false;
	}

	return paid + 0.01 >= due;
}

/**
 * sp_code values shurjoPay uses for a buyer who backed out. The sandbox's
 * cancel button gives 1061 "Cancel" (checked 2026-11-23); 1002 is the code
 * shurjoPay's docs list.
 */
const CANCELLED_CODES = ['1002', '1061'];

/**
 * Settle one shurjoPay order id: verify it, find our order from the
 * verification (value1 = order hash) and mark it paid if the payment checks
 * out. Shared by the buyer's return trip and the IPN, so both reach the same
 * verdict, and running it twice is harmless.
 *
 * @param {string} spOrderId
 * @returns {Promise<{outcome:'paid'|'already_paid'|'cancelled'|'failed'|'unverified'|'no_order'|'record_failed', orderHash:string}>}
 */
export async function settleShurjoPayOrder(spOrderId) {
	if (!spOrderId) {
		return { outcome: 'no_order', orderHash: '' };
	}

	const verification = await verifyShurjoPayPayment(spOrderId);
	const orderHash = String(verification?.value1 || '').trim();
	const order = orderHash ? await getOrderByHash(orderHash) : null;

	if (!order?.id) {
		console.error('shurjoPay order id could not be matched to an order', {
			spOrderId,
			sp_code: verification?.sp_code,
		});

		return { outcome: 'no_order', orderHash: '' };
	}

	if (String(order.payment_status).toLowerCase() === 'paid') {
		return { outcome: 'already_paid', orderHash };
	}

	if (!isPaymentSettled(verification, order)) {
		const code = String(verification?.sp_code ?? '');

		if (CANCELLED_CODES.includes(code) || /^cancel/i.test(String(verification?.sp_message || ''))) {
			return { outcome: 'cancelled', orderHash };
		}

		console.error('shurjoPay payment not settled', {
			spOrderId,
			orderHash,
			sp_code: verification?.sp_code,
			sp_message: verification?.sp_message,
			amount: verification?.amount,
			due: order?.total_amount,
		});

		/* 1000 that failed our checks is suspicious; anything else is a plain failure. */
		return { outcome: code === SP_CODE_SUCCESS ? 'unverified' : 'failed', orderHash };
	}

	try {
		await markOrderPaid(order, { transactionId: verification?.bank_trx_id || spOrderId });
	} catch (error) {
		console.error('shurjoPay payment taken but the order was not updated', {
			spOrderId,
			orderHash,
			error: error?.message,
		});

		return { outcome: 'record_failed', orderHash };
	}

	return { outcome: 'paid', orderHash };
}

/**
 * shurjoPay's order id out of whatever reached us. shurjoPay appends
 * "?order_id=" blindly (so a second "?" is tolerated), and its IPN format is
 * not documented, so the common spellings are all tried, in the query string
 * and the body alike. The id is only ever used to ask the verification API.
 *
 * @param {string} rawUrl The full request URL.
 * @param {object} [fields] The parsed body (JSON or form), if any.
 */
export function spOrderIdFrom(rawUrl, fields = {}) {
	const KEYS = ['order_id', 'sp_order_id', 'orderId', 'spOrderId'];

	for (const key of KEYS) {
		const match = String(rawUrl || '').match(new RegExp(`[?&]${key}=([^&?#]+)`));

		if (match) {
			return decodeURIComponent(match[1]).trim();
		}
	}

	/* Some notifications nest the record, or send it as a one-item list. */
	const bodies = [fields, fields?.data, Array.isArray(fields) ? fields[0] : null, Array.isArray(fields?.data) ? fields.data[0] : null];

	for (const body of bodies) {
		for (const key of KEYS) {
			const value = body && typeof body === 'object' ? body[key] : null;

			if (value) {
				return String(value).trim();
			}
		}
	}

	return '';
}

/** Write a settled payment onto the order through record_gateway_payment. */
export async function markOrderPaid(order, payment) {
	const response = await fetch(wpUrl('record_gateway_payment'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': process.env.API_TOKEN || '',
		},
		body: JSON.stringify({
			order_id: order?.id,
			payment_method: 'shurjopay',
			transaction_id: payment?.transactionId || '',
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
