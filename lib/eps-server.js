/**
 * EPS (Easy Payment System, eps.com.bd), from the server's side.
 *
 * Everything that decides money lives here, never in the browser: the amount
 * is read off the order row in WordPress, the credentials are resolved on the
 * server, and a payment is only believed once EPS's own status API has been
 * asked about it. The storefront is told an order hash and nothing more.
 *
 *   resolveEpsConfig    the credentials in force, from settings
 *   createEpsPayment    an order in, a hosted payment URL out
 *   verifyEpsPayment    a merchant transaction id in, EPS's record out
 *   markOrderPaid       writes that record back onto the order
 *   redactEpsSettings   strips the credentials out of a settings blob
 *
 * The credentials and the sandbox switch come only from the dashboard's
 * payment-gateway settings; nothing here reads `.env`. That means they travel
 * in the settings blob, so `redactEpsSettings` has to take them out again
 * before `/api/settings` hands that blob to a browser.
 *
 * EPS differs from aamarPay in three ways worth knowing before reading on:
 *
 *   - Every call is authenticated twice. A short-lived bearer token from
 *     /v1/Auth/GetToken, and an `x-hash` header that is an HMAC-SHA512 of one
 *     field of the request - the username for the token call, the merchant
 *     transaction id for everything after it.
 *   - There is no currency field anywhere in the API. EPS settles in BDT, so
 *     an order in another currency is refused here rather than sent over as a
 *     bare number and charged as though it were taka.
 *   - The gateway is not documented to put anything on the return URL. So the
 *     transaction id travels in the URL this module builds, and `valueA` -
 *     which EPS echoes back in the status response - carries the order hash as
 *     a second way home.
 *
 * This module reads the store's password and hash key, so it must only ever be
 * imported from a route handler - never from a "use client" component.
 */

import crypto from 'node:crypto';

const HOSTS = {
	sandbox: 'https://sandboxpgapi.eps.com.bd',
	live: 'https://pgapi.eps.com.bd',
};

const PATHS = {
	token: '/v1/Auth/GetToken',
	initiate: '/v1/EPSEngine/InitializeEPS',
	verify: '/v1/EPSEngine/CheckMerchantTransactionStatus',
};

/** EPS settles in taka and takes no currency field. Anything else is refused. */
const SETTLEMENT_CURRENCY = 'BDT';

/** `transactionTypeId` 1 is EPS's "web" checkout. */
const TRANSACTION_TYPE_WEB = 1;

/**
 * The settings fields that hold a credential.
 *
 * Named once because two places need the same list for opposite reasons:
 * `resolveEpsConfig` reads them, and `redactEpsSettings` removes them before a
 * settings blob is allowed near a browser.
 *
 * All five come out, not just the password and the hash key. The storefront
 * never needs any of them - it only needs to know whether EPS is usable, which
 * `configured` says - so there is nothing to weigh against keeping them out.
 */
export const EPS_CREDENTIAL_FIELDS = [
	'merchant_id',
	'store_id',
	'username',
	'password',
	'hash_key',
];

/** The storefront's own origin. The env value carries a trailing slash. */
function appUrl(path) {
	const base = String(process.env.NEXT_PUBLIC_APP_URL || '').replace(/\/+$/, '');

	return `${base}/${String(path).replace(/^\/+/, '')}`;
}

function wpUrl(route) {
	const base = String(process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/?$/, '/');

	return `${base}wp-json/combo-store/v2/${route}`;
}

/*
	The settings blob, cached briefly.

	Every EPS call would otherwise fetch it from WordPress first - two extra
	round trips for one payment, in front of a buyer who is waiting. A minute
	is short enough that a credential changed in the dashboard takes effect
	while someone is still looking at the page, and long enough to keep a
	burst to one fetch.
*/
const SETTINGS_TTL_MS = 60_000;

let settingsCache = { at: 0, value: null };

/**
 * `paymentGateways.eps` from the store's settings, or null.
 *
 * This is the server asking WordPress directly, with the API token - not the
 * `/api/settings` route the storefront uses, which has the credentials
 * stripped out of it on purpose.
 *
 * A failed fetch answers with the last good value, however old, so a blip
 * between a buyer paying and the callback verifying them cannot leave a paid
 * order unrecorded. With nothing cached it is null, which reads as unconfigured.
 */
async function epsSettings(fresh = false) {
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

		/* The route has been seen both wrapped and bare; accept either. */
		const settings = payload?.settings ?? payload;
		const value = settings?.paymentGateways?.eps ?? null;

		settingsCache = { at: now, value };

		return value;
	} catch (error) {
		return settingsCache.value;
	}
}

/** A settings field, trimmed, or '' when absent. */
function settingsValue(settings, field) {
	const value = settings?.[field];

	return typeof value === 'string' ? value.trim() : (value ?? '');
}

/**
 * The credentials in force, from the dashboard's settings.
 *
 * `configured` is the one thing worth checking before offering EPS at all:
 * without all five credentials the token call would be refused and the buyer
 * would meet an error at the last step of checkout.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache, for the
 *        dashboard asking what is in force right after a save.
 * @returns {Promise<object>}
 */
export async function resolveEpsConfig({ fresh = false } = {}) {
	const settings = await epsSettings(fresh);

	const merchantId = settingsValue(settings, 'merchant_id');
	const storeId = settingsValue(settings, 'store_id');
	const username = settingsValue(settings, 'username');
	const password = settingsValue(settings, 'password');
	const hashKey = settingsValue(settings, 'hash_key');

	/* Never-ticked is absent, and shows as off in the dashboard: that is live. */
	const sandbox = settings?.sandbox === true;

	const host = sandbox ? HOSTS.sandbox : HOSTS.live;

	return {
		sandbox,
		merchantId,
		storeId,
		username,
		password,
		hashKey,
		configured: Boolean(merchantId && storeId && username && password && hashKey),
		/* Enough to tell an admin which field is still missing. */
		has: {
			merchantId: Boolean(merchantId),
			storeId: Boolean(storeId),
			username: Boolean(username),
			password: Boolean(password),
			hashKey: Boolean(hashKey),
		},
		token: `${host}${PATHS.token}`,
		initiate: `${host}${PATHS.initiate}`,
		verify: `${host}${PATHS.verify}`,
	};
}

/**
 * A settings blob with EPS's credentials taken out.
 *
 * The storefront is served its settings through `/api/settings`, which any
 * browser can request - so anything secret has to be removed on the way
 * through. The fields are deleted rather than blanked, because a blank would
 * read as "configured with an empty password" to anything merging these
 * settings.
 *
 * Returns a copy; the input is left alone.
 *
 * @param {object} settings
 * @returns {object}
 */
export function redactEpsSettings(settings) {
	const eps = settings?.paymentGateways?.eps;

	if (!eps || typeof eps !== 'object') {
		return settings;
	}

	const safe = { ...eps };

	for (const field of EPS_CREDENTIAL_FIELDS) {
		delete safe[field];
	}

	/*
		The storefront still needs to know whether EPS is usable, and it cannot
		work that out from credentials it is not allowed to see.
	*/
	safe.configured = EPS_CREDENTIAL_FIELDS.every(
		(field) => Boolean(String(eps[field] || '').trim())
	);

	return {
		...settings,
		paymentGateways: {
			...settings.paymentGateways,
			eps: safe,
		},
	};
}

/**
 * The `x-hash` header EPS checks every request against.
 *
 * One field, not the whole body: HMAC-SHA512 of that value under the merchant
 * hash key, base64. Signing the body would be stronger, but this is what the
 * gateway verifies, and a hash it does not expect is rejected outright.
 *
 * @param {string} value The username, or the merchant transaction id.
 * @param {string} hashKey From resolveEpsConfig().
 */
function signatureFor(value, hashKey) {
	return crypto
		.createHmac('sha512', Buffer.from(String(hashKey), 'utf8'))
		.update(Buffer.from(String(value), 'utf8'))
		.digest('base64');
}

/**
 * The bearer token, kept between requests.
 *
 * Asking for a fresh token on every call would work, but it doubles the number
 * of round trips a buyer waits through at the one moment they are least
 * patient. The cache is per server process and dropped a minute before EPS
 * says the token expires, so a token is never used on the edge of its life.
 *
 * `key` is what the token was issued for. Credentials can change under this
 * cache now that they come from the dashboard - a token from the old ones, or
 * from the sandbox after a switch to live, would be refused - so a change in
 * either retires the cached token rather than being found out at the gateway.
 */
let tokenCache = { key: '', value: '', expiresAt: 0 };

const TOKEN_SAFETY_MARGIN_MS = 60 * 1000;

async function getEpsToken(config, { fresh = false } = {}) {
	if (!config?.configured) {
		throw new Error('EPS is not configured for this store.');
	}

	const key = `${config.token}|${config.username}|${config.password}`;

	if (!fresh && tokenCache.value && tokenCache.key === key && Date.now() < tokenCache.expiresAt) {
		return tokenCache.value;
	}

	const response = await fetch(config.token, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-hash': signatureFor(config.username, config.hashKey),
		},
		body: JSON.stringify({
			userName: config.username,
			password: config.password,
		}),
		cache: 'no-store',
	});

	const data = await response.json().catch(() => null);

	if (!response.ok || !data?.token) {
		/*
			Logged rather than shown: the body names the credential EPS
			objected to, which is not something to put in front of a buyer.
		*/
		console.error('EPS refused the token request', {
			status: response.status,
			errorCode: data?.errorCode,
			errorMessage: data?.errorMessage,
		});

		throw new Error('EPS could not authenticate this store.');
	}

	/*
		`expireDate` is an ISO timestamp. An unparseable one is treated as a
		short life rather than no cache at all, so a change in its format
		costs round trips instead of breaking checkout.
	*/
	const expiry = Date.parse(data?.expireDate);

	tokenCache = {
		key,
		value: data.token,
		expiresAt: Number.isFinite(expiry)
			? expiry - TOKEN_SAFETY_MARGIN_MS
			: Date.now() + 5 * 60 * 1000,
	};

	return tokenCache.value;
}

/**
 * The order a payment belongs to, read from WordPress.
 *
 * The hash is all the browser ever sends; the total and the customer come from
 * here, so a tampered cart cannot change what is charged.
 *
 * @param {string} orderHash
 * @returns {Promise<object|null>}
 */
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
 * A merchant transaction id for this attempt.
 *
 * EPS keys its status API on this value and will not take the same one twice,
 * so a buyer who fails once and tries again needs a fresh one - which is why
 * the order hash travels in `valueA` rather than being reused as the id.
 */
function buildTransactionId(order) {
	const stamp = Date.now().toString(36).toUpperCase();
	const noise = crypto.randomBytes(3).toString('hex').toUpperCase();

	return `EPS${order?.id ?? 0}-${stamp}-${noise}`.slice(0, 32);
}

/**
 * The cart, in the shape EPS's `ProductList` wants.
 *
 * Optional to the gateway and only ever shown back to the merchant, so a line
 * it cannot read is not worth failing a payment over: an order whose items did
 * not come back with it gets one summary line instead.
 */
function productList(order) {
	const lines = Array.isArray(order?.line_items)
		? order.line_items
		: Array.isArray(order?.cartItems)
			? order.cartItems
			: [];

	const items = lines
		.map((line) => ({
			ProductName: String(line?.product_name || line?.name || 'Item').slice(0, 100),
			NoOfItem: String(line?.quantity ?? line?.qty ?? 1),
			ProductProfile: 'general',
			ProductCategory: 'general',
			ProductPrice: String(line?.price ?? line?.unit_price ?? 0),
		}))
		.filter((item) => item.ProductName);

	if (items.length) {
		return items;
	}

	return [
		{
			ProductName: `Order #${order?.id ?? ''}`.trim(),
			NoOfItem: '1',
			ProductProfile: 'general',
			ProductCategory: 'general',
			ProductPrice: String(order?.total_amount ?? 0),
		},
	];
}

/**
 * Falls back rather than sends an empty string: EPS rejects blank customer
 * fields, and an order with no city should still be payable.
 */
function field(value, fallback) {
	const text = String(value ?? '').trim();

	return text || fallback;
}

/**
 * Start a hosted payment for an order that already exists.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @returns {Promise<{paymentUrl:string, transactionId:string, epsTransactionId:string, amount:number, currency:string}>}
 */
export async function createEpsPayment(order, orderHash) {
	const config = await resolveEpsConfig();

	if (!config.configured) {
		throw new Error('EPS is not configured for this store.');
	}

	const amount = Number(order?.total_amount);

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error('This order has nothing to pay for.');
	}

	/*
		There is no currency field in the EPS API at all - the amount is a bare
		number settled in taka. Sending a total that is not in taka would charge
		the figure as though it were, so this stops instead of guessing at a
		conversion the store has not asked for.
	*/
	const currency = String(order?.currency || SETTLEMENT_CURRENCY).toUpperCase();

	if (currency !== SETTLEMENT_CURRENCY) {
		throw new Error(`EPS settles in ${SETTLEMENT_CURRENCY}, and this order is in ${currency}.`);
	}

	const transactionId = buildTransactionId(order);
	const token = await getEpsToken(config);

	const callback = (result) => appUrl(
		`api/eps/callback?result=${result}`
		+ `&hash=${encodeURIComponent(orderHash)}`
		+ `&tran=${encodeURIComponent(transactionId)}`
	);

	const city = field(order?.billing_city || order?.city, 'Dhaka');
	const items = productList(order);

	const payload = {
		merchantId: config.merchantId,
		storeId: config.storeId,

		/*
			EPS's own reference for the order, distinct from the id it keys the
			status API on - that is `merchantTransactionId`, which changes with
			every attempt while this does not.
		*/
		CustomerOrderId: String(order?.id ?? orderHash),
		merchantTransactionId: transactionId,
		transactionTypeId: TRANSACTION_TYPE_WEB,
		financialEntityId: 0,
		transitionStatusId: 0,
		totalAmount: Number(amount.toFixed(2)),
		transactionDate: new Date().toISOString(),
		version: '1',
		ipAddress: field(order?.customer_ip, '0.0.0.0'),

		successUrl: callback('success'),
		failUrl: callback('failed'),
		cancelUrl: callback('cancelled'),

		customerName: field(order?.billing_name, 'Customer'),
		customerEmail: field(order?.billing_email, 'customer@example.com'),
		customerPhone: field(order?.billing_phone, '01700000000'),
		customerAddress: field(order?.billing_address || order?.billing_address1, 'N/A'),
		customerAddress2: String(order?.billing_address2 ?? ''),
		customerCity: city,
		customerState: field(order?.billing_state, city),
		customerPostcode: field(order?.billing_postcode, '1000'),
		customerCountry: field(order?.billing_country, 'BD'),

		shipmentName: field(order?.shipping_name || order?.billing_name, 'Customer'),
		shipmentAddress: field(order?.shipping_address || order?.billing_address || order?.billing_address1, 'N/A'),
		shipmentAddress2: String(order?.shipping_address2 ?? ''),
		shipmentCity: field(order?.shipping_city, city),
		shipmentState: field(order?.shipping_state || order?.billing_state, city),
		shipmentPostcode: field(order?.shipping_postcode || order?.billing_postcode, '1000'),
		shipmentCountry: field(order?.shipping_country || order?.billing_country, 'BD'),
		shippingMethod: field(order?.shipping_method, 'NO'),

		/*
			Carried through the gateway and handed back in the status response.
			This is what lets the callback find the order even when the redirect
			arrives without the query string it was given.
		*/
		valueA: orderHash,
		valueB: String(order?.id ?? ''),
		valueC: '',
		valueD: '',

		productName: `Order #${order?.id ?? ''}`.trim(),
		productProfile: 'general',
		productCategory: 'general',
		noOfItem: String(items.length),
		ProductList: items,
	};

	const request = (bearer) => fetch(config.initiate, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-hash': signatureFor(transactionId, config.hashKey),
			Authorization: `Bearer ${bearer}`,
		},
		body: JSON.stringify(payload),
		cache: 'no-store',
	});

	let response = await request(token);

	/*
		A cached token EPS has already retired. Worth one retry with a fresh
		one, because the alternative is a buyer told the payment failed when
		nothing was wrong with it.
	*/
	if (response.status === 401) {
		response = await request(await getEpsToken(config, { fresh: true }));
	}

	const data = await response.json().catch(() => null);

	if (!response.ok || !data?.RedirectURL || data?.ErrorCode || data?.ErrorMessage) {
		console.error('EPS refused the payment request', {
			status: response.status,
			transactionId,
			ErrorCode: data?.ErrorCode,
			ErrorMessage: data?.ErrorMessage,
		});

		throw new Error('EPS could not start this payment.');
	}

	return {
		paymentUrl: data.RedirectURL,
		transactionId,
		epsTransactionId: data?.TransactionId || '',
		amount,
		currency,
	};
}

/**
 * What EPS says about a transaction.
 *
 * The browser - and anything posted to the callback URL - can both be forged,
 * so this is the only account of a payment that is acted on.
 *
 * @param {string} transactionId The merchant transaction id.
 * @returns {Promise<object|null>}
 */
export async function verifyEpsPayment(transactionId) {
	const config = await resolveEpsConfig();

	if (!config.configured || !transactionId) {
		return null;
	}

	const url = new URL(config.verify);

	url.searchParams.set('merchantTransactionId', transactionId);

	const request = (bearer) => fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-hash': signatureFor(transactionId, config.hashKey),
			Authorization: `Bearer ${bearer}`,
		},
		cache: 'no-store',
	});

	let response = await request(await getEpsToken(config));

	if (response.status === 401) {
		response = await request(await getEpsToken(config, { fresh: true }));
	}

	if (!response.ok) {
		return null;
	}

	return response.json().catch(() => null);
}

/**
 * Whether a verification describes a payment that was actually taken, for this
 * order and for the right amount.
 *
 * The amount is checked as well, because a hosted page the buyer reached
 * through a link of their own making is not a promise about how much was
 * charged.
 */
export function isPaymentSettled(verification, order) {
	if (String(verification?.Status ?? '').toLowerCase() !== 'success') {
		return false;
	}

	const paid = Number(verification?.TotalAmount);
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
 * @param {{transactionId:string, verification:object}} payment
 */
export async function markOrderPaid(order, payment) {
	/*
		EPS's own reference is the useful one to keep: it is what a merchant
		searches the EPS portal by. The id this module generated is already
		recoverable from the logs.
	*/
	const reference = payment?.verification?.EpsTransactionId
		|| payment?.verification?.EPSTransactionId
		|| payment?.transactionId
		|| '';

	const response = await fetch(wpUrl('update_order'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': process.env.API_TOKEN || '',
		},
		body: JSON.stringify({
			...order,
			id: order?.id,
			status: 'processing',
			payment_method: 'eps',
			payment_status: 'paid',
			transaction_id: reference,
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
