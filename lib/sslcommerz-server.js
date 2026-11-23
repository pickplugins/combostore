/**
 * SSLCOMMERZ (API v4), from the server's side.
 *
 * The same rules as the other redirect gateways: the amount is read off the
 * order row in WordPress, the credentials come from the dashboard's settings
 * and never reach a browser, and a payment is only believed once SSLCOMMERZ's
 * validation API has been asked about it.
 *
 *   resolveSslcommerzConfig   the credentials in force, from settings
 *   createSslcommerzPayment   an order in, a hosted gateway URL out
 *   settleSslcommerzPayment   val_id / tran_id in, a verdict (and the order marked paid) out
 *   redactSslcommerzSettings  strips the credentials out of a settings blob
 *
 * The flow, as SSLCOMMERZ defines it:
 *   1. POST the session (form-encoded) to gwprocess/v4/api.php; the answer
 *      carries `GatewayPageURL`.
 *   2. The buyer's browser is POSTed back to success_url / fail_url /
 *      cancel_url, and SSLCOMMERZ's server POSTs the same fields to ipn_url.
 *      Both carry `val_id` on success and `tran_id` always.
 *   3. GET validator/api/validationserverAPI.php with that val_id. VALID or
 *      VALIDATED (already validated once) is a payment.
 *
 * This module reads the store password, so it must only ever be imported from
 * a route handler - never from a "use client" component.
 */

const ENDPOINTS = {
	sandbox: 'https://sandbox.sslcommerz.com',
	live: 'https://securepay.sslcommerz.com',
};

/** What SSLCOMMERZ will charge in. An order in anything else is not offered it. */
export const SSLCOMMERZ_CURRENCIES = ['BDT', 'USD', 'EUR', 'GBP', 'AUD', 'CAD', 'SGD', 'INR', 'MYR'];

/**
 * The settings fields that hold a credential. `token` is where the dashboard's
 * old SSLCOMMERZ panel put the store password, so it is read and redacted too.
 */
export const SSLCOMMERZ_CREDENTIAL_FIELDS = ['store_id', 'store_passwd', 'token'];

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

async function sslcommerzSettings(fresh = false) {
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
		const value = settings?.paymentGateways?.sslcommerz ?? null;

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
 * The credentials in force, from the dashboard's settings.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache.
 */
export async function resolveSslcommerzConfig({ fresh = false } = {}) {
	const settings = await sslcommerzSettings(fresh);

	const storeId = settingsValue(settings, 'store_id');
	const storePasswd = settingsValue(settings, 'store_passwd') || settingsValue(settings, 'token');
	const sandbox = settings?.sandbox === true;
	const base = sandbox ? ENDPOINTS.sandbox : ENDPOINTS.live;

	return {
		sandbox,
		storeId,
		storePasswd,
		configured: Boolean(storeId && storePasswd),
		has: {
			storeId: Boolean(storeId),
			storePasswd: Boolean(storePasswd),
		},
		initiate: `${base}/gwprocess/v4/api.php`,
		validate: `${base}/validator/api/validationserverAPI.php`,
		transaction: `${base}/validator/api/merchantTransIDvalidationAPI.php`,
	};
}

/** A settings blob with SSLCOMMERZ's credentials taken out, plus `configured`. */
export function redactSslcommerzSettings(settings) {
	const sslcommerz = settings?.paymentGateways?.sslcommerz;

	if (!sslcommerz || typeof sslcommerz !== 'object') {
		return settings;
	}

	const safe = { ...sslcommerz };

	for (const field of SSLCOMMERZ_CREDENTIAL_FIELDS) {
		delete safe[field];
	}

	safe.configured = Boolean(
		String(sslcommerz.store_id || '').trim()
		&& (String(sslcommerz.store_passwd || '').trim() || String(sslcommerz.token || '').trim())
	);

	return {
		...settings,
		paymentGateways: {
			...settings.paymentGateways,
			sslcommerz: safe,
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

/** A fresh tran_id per attempt: SSLCOMMERZ will not take the same one twice. */
function buildTransactionId(order) {
	const stamp = Date.now().toString(36).toUpperCase();
	const noise = Math.random().toString(36).slice(2, 6).toUpperCase();

	return `SC${order?.id ?? 0}-${stamp}${noise}`.slice(0, 30);
}

function filled(value, fallback) {
	const text = String(value ?? '').trim();

	return text || fallback;
}

/**
 * Start a hosted payment for an order that already exists.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @returns {Promise<{paymentUrl:string, transactionId:string, amount:number, currency:string}>}
 */
export async function createSslcommerzPayment(order, orderHash) {
	const config = await resolveSslcommerzConfig();

	if (!config.configured) {
		throw new Error('SSLCOMMERZ is not configured for this store.');
	}

	const amount = Number(order?.total_amount);

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error('This order has nothing to pay for.');
	}

	const currency = String(order?.currency || 'BDT').toUpperCase();

	if (!SSLCOMMERZ_CURRENCIES.includes(currency)) {
		throw new Error(`SSLCOMMERZ does not take payments in ${currency}.`);
	}

	const transactionId = buildTransactionId(order);
	const callback = (result) => appUrl(`api/sslcommerz/callback?result=${result}`);

	const fields = {
		store_id: config.storeId,
		store_passwd: config.storePasswd,
		total_amount: amount.toFixed(2),
		currency,
		tran_id: transactionId,

		success_url: callback('success'),
		fail_url: callback('failed'),
		cancel_url: callback('cancelled'),
		/*
			Server to server, per payment - nothing to set in the merchant panel.
			It needs a publicly reachable host; on localhost it never arrives.
		*/
		ipn_url: appUrl('api/sslcommerz/ipn'),

		cus_name: filled(order?.billing_name, 'Customer'),
		cus_email: filled(order?.billing_email, 'customer@example.com'),
		cus_add1: filled(order?.billing_address || order?.billing_address1, 'N/A'),
		cus_add2: filled(order?.billing_address2, ''),
		cus_city: filled(order?.billing_city, 'Dhaka'),
		cus_state: filled(order?.billing_city, ''),
		cus_postcode: filled(order?.billing_postcode, '1000'),
		cus_country: filled(order?.billing_country, 'Bangladesh'),
		cus_phone: filled(order?.billing_phone, '01700000000'),

		/* The store ships its own orders; SSLCOMMERZ need not ask for an address. */
		shipping_method: 'NO',
		num_of_item: '1',
		product_name: `Order #${order?.id ?? ''}`.trim(),
		product_category: 'General',
		product_profile: 'general',

		/* Handed back on every callback, the IPN and the validation. */
		value_a: orderHash,
		value_b: String(order?.id ?? ''),
	};

	const response = await fetch(config.initiate, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(fields).toString(),
		cache: 'no-store',
	});

	const data = await response.json().catch(() => null);

	if (String(data?.status).toUpperCase() !== 'SUCCESS' || !data?.GatewayPageURL) {
		console.error('SSLCOMMERZ refused the payment request', {
			status: response.status,
			sslStatus: data?.status,
			failedreason: data?.failedreason,
		});

		throw new Error(data?.failedreason
			? `SSLCOMMERZ could not start this payment: ${data.failedreason}`
			: 'SSLCOMMERZ could not start this payment.');
	}

	return {
		paymentUrl: data.GatewayPageURL,
		transactionId,
		amount,
		currency,
	};
}

/** What SSLCOMMERZ's validation API says about a val_id. */
async function validateByValId(config, valId) {
	const url = new URL(config.validate);

	url.searchParams.set('val_id', valId);
	url.searchParams.set('store_id', config.storeId);
	url.searchParams.set('store_passwd', config.storePasswd);
	url.searchParams.set('format', 'json');
	url.searchParams.set('v', '1');

	const response = await fetch(url, { cache: 'no-store' });

	return response.ok ? response.json().catch(() => null) : null;
}

/**
 * The val_id of a successful payment for a tran_id, for a call that arrives
 * without one. Only SSLCOMMERZ's own record is used.
 */
async function valIdForTransaction(config, tranId) {
	const url = new URL(config.transaction);

	url.searchParams.set('tran_id', tranId);
	url.searchParams.set('store_id', config.storeId);
	url.searchParams.set('store_passwd', config.storePasswd);
	url.searchParams.set('format', 'json');

	const response = await fetch(url, { cache: 'no-store' });
	const data = response.ok ? await response.json().catch(() => null) : null;
	const elements = Array.isArray(data?.element) ? data.element : [];
	const paid = elements.find((item) => ['VALID', 'VALIDATED'].includes(String(item?.status).toUpperCase()));

	return paid?.val_id || '';
}

/**
 * Whether a validation describes a payment taken for this order, in its
 * currency, for the right amount. A converted payment reports the original
 * currency and figure in currency_type / currency_amount.
 */
export function isPaymentSettled(validation, order) {
	if (!['VALID', 'VALIDATED'].includes(String(validation?.status).toUpperCase())) {
		return false;
	}

	/*
		value_b is the order id we sent, and every tran_id we build starts
		SC{order id}-: both have to name this order. Required, not just checked
		when present, so a record missing them cannot settle anything.
	*/
	if (String(validation?.value_b ?? '') !== String(order?.id)) {
		return false;
	}

	if (!String(validation?.tran_id || '').startsWith(`SC${order?.id}-`)) {
		return false;
	}

	const due = Number(order?.total_amount);
	const orderCurrency = String(order?.currency || 'BDT').toUpperCase();
	const paidCurrency = String(validation?.currency_type || validation?.currency || '').toUpperCase();
	const paid = Number(validation?.currency_amount ?? validation?.amount);

	if (paidCurrency !== orderCurrency || !Number.isFinite(paid) || !Number.isFinite(due)) {
		return false;
	}

	return paid + 0.01 >= due;
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
			payment_method: 'sslcommerz',
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

/**
 * Settle one SSLCOMMERZ payment from what a callback or the IPN carried:
 * validate it, find our order from the validation (value_a = order hash) and
 * mark it paid if it checks out. Shared by the buyer's return and the IPN, so
 * both reach the same verdict, and running it twice is harmless.
 *
 * `held` is SSLCOMMERZ flagging the payment as risky (risk_level 1): the money
 * is taken but SSLCOMMERZ advises checking it first, so the order is left
 * unpaid for the store to confirm by hand.
 *
 * @param {{valId?:string, tranId?:string}} ids
 * @returns {Promise<{outcome:'paid'|'already_paid'|'held'|'failed'|'unverified'|'no_order'|'record_failed', orderHash:string}>}
 */
export async function settleSslcommerzPayment({ valId = '', tranId = '' } = {}) {
	const config = await resolveSslcommerzConfig();

	if (!config.configured) {
		return { outcome: 'failed', orderHash: '' };
	}

	let id = String(valId || '').trim();

	if (!id && tranId) {
		id = await valIdForTransaction(config, String(tranId).trim());
	}

	if (!id) {
		return { outcome: 'failed', orderHash: '' };
	}

	const validation = await validateByValId(config, id);
	const orderHash = String(validation?.value_a || '').trim();
	const order = orderHash ? await getOrderByHash(orderHash) : null;

	if (!order?.id) {
		console.error('SSLCOMMERZ payment could not be matched to an order', {
			valId: id,
			status: validation?.status,
		});

		return { outcome: 'no_order', orderHash: '' };
	}

	if (String(order.payment_status).toLowerCase() === 'paid') {
		return { outcome: 'already_paid', orderHash };
	}

	if (!isPaymentSettled(validation, order)) {
		const valid = ['VALID', 'VALIDATED'].includes(String(validation?.status).toUpperCase());

		console.error('SSLCOMMERZ payment not settled', {
			valId: id,
			orderHash,
			status: validation?.status,
			amount: validation?.currency_amount ?? validation?.amount,
			currency: validation?.currency_type ?? validation?.currency,
			due: order?.total_amount,
		});

		/* VALID that failed our checks is suspicious; anything else is a plain failure. */
		return { outcome: valid ? 'unverified' : 'failed', orderHash };
	}

	if (String(validation?.risk_level) === '1') {
		console.error('SSLCOMMERZ flagged a payment as risky; the order is left unpaid for review', {
			valId: id,
			orderHash,
			tran_id: validation?.tran_id,
			risk_title: validation?.risk_title,
		});

		return { outcome: 'held', orderHash };
	}

	try {
		await markOrderPaid(order, {
			transactionId: validation?.bank_tran_id || validation?.tran_id || id,
		});
	} catch (error) {
		console.error('SSLCOMMERZ payment taken but the order was not updated', {
			valId: id,
			orderHash,
			error: error?.message,
		});

		return { outcome: 'record_failed', orderHash };
	}

	return { outcome: 'paid', orderHash };
}
