/**
 * PayStation, from the server's side.
 *
 * The same rules as the other redirect gateways: the amount is read off the
 * order row in WordPress, the credentials come from the dashboard's settings
 * and never reach a browser, and a payment is only believed once PayStation's
 * transaction-status API has been asked about it.
 *
 *   resolvePaystationConfig   the credentials in force, from settings
 *   createPaystationPayment   an order in, a hosted payment URL out
 *   settlePaystationPayment   an invoice number in, a verdict (and the order marked paid) out
 *   redactPaystationSettings  strips the credentials out of a settings blob
 *
 * The flow (checked against the live and sandbox hosts on 2026-11-23):
 *   1. POST {base}/initiate-payment, form-encoded, with merchantId and
 *      password in the body. Success is status_code "200" and a payment_url.
 *   2. The buyer is sent back to callback_url. PayStation does not publish the
 *      parameters it adds, so the callback accepts several spellings.
 *   3. POST {base}/transaction-status with a `merchantId` header and the
 *      invoice_number in the body. data.trx_status "Success" is paid, and
 *      data.reference is what we sent - the order hash.
 *   4. After a successful payment PayStation also POSTs JSON to the merchant's
 *      IPN URL, which is set with PayStation rather than per payment.
 *
 * (The older grant-token / create-payment / retrive-transaction flow still
 * answers, but needs a token round trip; this module does not use it.)
 *
 * This module reads the merchant password, so it must only ever be imported
 * from a route handler - never from a "use client" component.
 */

const ENDPOINTS = {
	sandbox: 'https://sandbox.paystation.com.bd',
	live: 'https://api.paystation.com.bd',
};

/** The settings fields that hold a credential. */
export const PAYSTATION_CREDENTIAL_FIELDS = ['merchant_id', 'password'];

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

async function paystationSettings(fresh = false) {
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
		const value = settings?.paymentGateways?.paystation ?? null;

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
export async function resolvePaystationConfig({ fresh = false } = {}) {
	const settings = await paystationSettings(fresh);

	const merchantId = settingsValue(settings, 'merchant_id');
	const password = settingsValue(settings, 'password');
	const sandbox = settings?.sandbox === true;
	const base = sandbox ? ENDPOINTS.sandbox : ENDPOINTS.live;

	return {
		sandbox,
		merchantId,
		password,
		/* Who pays PayStation's charge: the buyer (1) or the store (0, the default). */
		payWithCharge: settings?.pay_with_charge === true,
		configured: Boolean(merchantId && password),
		has: {
			merchantId: Boolean(merchantId),
			password: Boolean(password),
		},
		initiate: `${base}/initiate-payment`,
		status: `${base}/transaction-status`,
	};
}

/** A settings blob with PayStation's credentials taken out, plus `configured`. */
export function redactPaystationSettings(settings) {
	const paystation = settings?.paymentGateways?.paystation;

	if (!paystation || typeof paystation !== 'object') {
		return settings;
	}

	const safe = { ...paystation };

	for (const field of PAYSTATION_CREDENTIAL_FIELDS) {
		delete safe[field];
	}

	safe.configured = Boolean(
		String(paystation.merchant_id || '').trim() && String(paystation.password || '').trim()
	);

	return {
		...settings,
		paymentGateways: {
			...settings.paymentGateways,
			paystation: safe,
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
 * A fresh invoice number per attempt - PayStation refuses one it has seen
 * (status_code 1008). It starts with the order id so isPaymentSettled can tie
 * PayStation's record back to the order.
 */
function buildInvoiceNumber(order) {
	const stamp = Date.now().toString(36).toUpperCase();
	const noise = Math.random().toString(36).slice(2, 6).toUpperCase();

	return `CS${order?.id ?? 0}-${stamp}${noise}`;
}

/** The order id an invoice number was built for, or '' for one we did not build. */
function orderIdFromInvoice(invoiceNumber) {
	const match = String(invoiceNumber || '').match(/^CS(\d+)-/);

	return match ? match[1] : '';
}

function filled(value, fallback) {
	const text = String(value ?? '').trim();

	return text || fallback;
}

/**
 * Start a hosted payment for an order that already exists. PayStation settles
 * in taka only, so an order in another currency is refused here - the checkout
 * already hides the method for one.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @returns {Promise<{paymentUrl:string, invoiceNumber:string, amount:number, currency:string}>}
 */
export async function createPaystationPayment(order, orderHash) {
	const config = await resolvePaystationConfig();

	if (!config.configured) {
		throw new Error('PayStation is not configured for this store.');
	}

	const amount = Number(order?.total_amount);

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error('This order has nothing to pay for.');
	}

	if (String(order?.currency || 'BDT').toUpperCase() !== 'BDT') {
		throw new Error('PayStation only takes payments in BDT.');
	}

	const invoiceNumber = buildInvoiceNumber(order);

	const fields = {
		merchantId: config.merchantId,
		password: config.password,
		invoice_number: invoiceNumber,
		currency: 'BDT',
		payment_amount: amount.toFixed(2),
		pay_with_charge: config.payWithCharge ? '1' : '0',
		/* Echoed back by transaction-status: this is how a return finds its order. */
		reference: orderHash,
		cust_name: filled(order?.billing_name, 'Customer'),
		cust_phone: filled(order?.billing_phone, '01700000000'),
		cust_email: filled(order?.billing_email, 'customer@example.com'),
		cust_address: filled(order?.billing_address || order?.billing_address1 || order?.billing_city, 'N/A'),
		/* No query string: PayStation adds its own parameters to it. */
		callback_url: appUrl('api/paystation/callback'),
		checkout_items: `Order #${order?.id ?? ''}`.trim(),
	};

	const response = await fetch(config.initiate, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
		body: new URLSearchParams(fields).toString(),
		cache: 'no-store',
	});

	const data = await response.json().catch(() => null);

	if (String(data?.status_code) !== '200' || !data?.payment_url) {
		console.error('PayStation refused the payment request', {
			status: response.status,
			status_code: data?.status_code,
			message: data?.message,
		});

		throw new Error(data?.message
			? `PayStation could not start this payment: ${data.message}`
			: 'PayStation could not start this payment.');
	}

	return {
		paymentUrl: data.payment_url,
		invoiceNumber,
		amount,
		currency: 'BDT',
	};
}

/** PayStation's record of an invoice (the `data` object), or null. */
async function transactionStatus(config, invoiceNumber) {
	const response = await fetch(config.status, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'application/json',
			merchantId: config.merchantId,
		},
		body: new URLSearchParams({ invoice_number: invoiceNumber }).toString(),
		cache: 'no-store',
	});

	const payload = response.ok ? await response.json().catch(() => null) : null;

	if (String(payload?.status_code) !== '200' || !payload?.data) {
		return null;
	}

	return payload.data;
}

/** PayStation's trx_status, normalised: success | failed | cancelled | pending | refunded | ''. */
export function normaliseStatus(value) {
	const status = String(value || '').trim().toLowerCase();

	if (['success', 'successful', 'completed', 'paid'].includes(status)) return 'success';
	if (['failed', 'failure', 'declined'].includes(status)) return 'failed';
	if (['canceled', 'cancelled', 'cancel', 'aborted', 'user cancel', 'user cancelled', 'user canceled', 'payment cancelled', 'payment canceled'].includes(status)) return 'cancelled';
	if (['processing', 'pending', 'initiated'].includes(status)) return 'pending';
	if (['refund', 'refunded'].includes(status)) return 'refunded';

	return status;
}

/**
 * Whether PayStation's record is a successful payment for this order, for at
 * least its total. The amount can be higher when the buyer pays the charge.
 */
export function isPaymentSettled(record, order) {
	if (normaliseStatus(record?.trx_status) !== 'success') {
		return false;
	}

	if (orderIdFromInvoice(record?.invoice_number) !== String(order?.id)) {
		return false;
	}

	const paid = Number(record?.payment_amount);
	const due = Number(order?.total_amount);

	if (!Number.isFinite(paid) || !Number.isFinite(due)) {
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
			payment_method: 'paystation',
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
 * PayStation's invoice number out of whatever reached us. The callback's
 * parameters are not published, so the common spellings are all tried, in
 * the query string and the body alike. It is only ever used to ask the
 * transaction-status API.
 */
export function invoiceNumberFrom(rawUrl, fields = {}) {
	const KEYS = ['invoice_number', 'invoiceNumber', 'invoice_no', 'invoiceno', 'invoice', 'invoiceId', 'inv'];

	for (const key of KEYS) {
		const match = String(rawUrl || '').match(new RegExp(`[?&]${key}=([^&?#]+)`));

		if (match) {
			return decodeURIComponent(match[1].replace(/\+/g, ' ')).trim();
		}
	}

	const bodies = [fields, fields?.data, Array.isArray(fields) ? fields[0] : null];

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

/**
 * Settle one PayStation invoice: look it up, find our order from the record
 * (reference = order hash) and mark it paid if it checks out. Shared by the
 * buyer's return and the IPN, so both reach the same verdict, and running it
 * twice is harmless.
 *
 * @param {string} invoiceNumber
 * @returns {Promise<{outcome:'paid'|'already_paid'|'pending'|'cancelled'|'failed'|'unverified'|'no_order'|'record_failed', orderHash:string}>}
 */
export async function settlePaystationPayment(invoiceNumber) {
	const config = await resolvePaystationConfig();

	if (!config.configured || !invoiceNumber) {
		return { outcome: 'no_order', orderHash: '' };
	}

	const record = await transactionStatus(config, invoiceNumber);
	const orderHash = String(record?.reference || '').trim();
	const order = orderHash ? await getOrderByHash(orderHash) : null;

	if (!order?.id) {
		console.error('PayStation invoice could not be matched to an order', {
			invoiceNumber,
			trx_status: record?.trx_status,
		});

		return { outcome: 'no_order', orderHash: '' };
	}

	if (String(order.payment_status).toLowerCase() === 'paid') {
		return { outcome: 'already_paid', orderHash };
	}

	if (!isPaymentSettled(record, order)) {
		const status = normaliseStatus(record?.trx_status);

		if (status === 'cancelled') {
			return { outcome: 'cancelled', orderHash };
		}

		if (status === 'pending') {
			return { outcome: 'pending', orderHash };
		}

		console.error('PayStation payment not settled', {
			invoiceNumber,
			orderHash,
			trx_status: record?.trx_status,
			amount: record?.payment_amount,
			due: order?.total_amount,
		});

		/* Success that failed our checks is suspicious; anything else is a plain failure. */
		return { outcome: status === 'success' ? 'unverified' : 'failed', orderHash };
	}

	try {
		await markOrderPaid(order, { transactionId: record?.trx_id || invoiceNumber });
	} catch (error) {
		console.error('PayStation payment taken but the order was not updated', {
			invoiceNumber,
			orderHash,
			error: error?.message,
		});

		return { outcome: 'record_failed', orderHash };
	}

	return { outcome: 'paid', orderHash };
}
