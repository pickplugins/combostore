/**
 * UddoktaPay, from the server's side.
 *
 * The same rules as the other redirect gateways: the amount is read off the
 * order row in WordPress, the API key comes from the dashboard's settings and
 * never reaches a browser, and a payment is only believed once UddoktaPay's
 * verify-payment API has been asked about it.
 *
 *   resolveUddoktaPayConfig   the key and panel URL in force, from settings
 *   createUddoktaPayPayment   an order in, a hosted payment URL out
 *   settleUddoktaPayPayment   an invoice id in, a verdict (and the order marked paid) out
 *   redactUddoktaPaySettings  strips the API key out of a settings blob
 *
 * UddoktaPay is self-hosted: every merchant has their own panel, and the API
 * lives under it. The flow (checked against the sandbox on 2026-11-23, with a
 * test payment carried through to COMPLETED):
 *   1. POST {panel}/api/checkout-v2 (JSON, header RT-UDDOKTAPAY-API-KEY) with
 *      full_name, email, amount, metadata, redirect_url, cancel_url,
 *      webhook_url. Answers {status:true, payment_url}.
 *   2. Paid, the buyer is sent to redirect_url + "?invoice_id=...". The
 *      cancel link goes to cancel_url exactly as given.
 *   3. POST {panel}/api/verify-payment {invoice_id} answers the payment:
 *      status COMPLETED | PENDING | ERROR, amount, charged_amount, metadata
 *      (what we sent), transaction_id, payment_method.
 *   4. UddoktaPay also POSTs the same JSON to webhook_url, with the API key in
 *      the RT-UDDOKTAPAY-API-KEY header.
 *
 * This module reads the API key, so it must only ever be imported from a
 * route handler - never from a "use client" component.
 */

const SANDBOX = {
	panel: 'https://sandbox.uddoktapay.com',
	/* UddoktaPay's published sandbox key; used when sandbox is on and no key is saved. */
	apiKey: '982d381360a69d419689740d9f2e26ce36fb7a50',
};

/** The settings fields that hold a credential. */
export const UDDOKTAPAY_CREDENTIAL_FIELDS = ['api_key'];

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

async function uddoktaPaySettings(fresh = false) {
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
		const value = settings?.paymentGateways?.uddoktapay ?? null;

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
 * The panel's root URL from whatever was pasted: "pay.example.com",
 * "https://pay.example.com/", or the API base ".../api" or ".../api/checkout-v2"
 * all become "https://pay.example.com". Empty for something that is not a URL.
 */
export function normalisePanelUrl(value) {
	let text = String(value || '').trim();

	if (!text) {
		return '';
	}

	if (!/^https?:\/\//i.test(text)) {
		text = `https://${text}`;
	}

	try {
		const url = new URL(text);
		const path = url.pathname.replace(/\/+$/, '').replace(/\/api(\/.*)?$/i, '');

		return `${url.origin}${path}`;
	} catch (error) {
		return '';
	}
}

/**
 * The key and panel in force, from the dashboard's settings.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache.
 */
export async function resolveUddoktaPayConfig({ fresh = false } = {}) {
	const settings = await uddoktaPaySettings(fresh);

	const sandbox = settings?.sandbox === true;
	const savedKey = settingsValue(settings, 'api_key');
	const savedPanel = normalisePanelUrl(settingsValue(settings, 'base_url'));

	const apiKey = savedKey || (sandbox ? SANDBOX.apiKey : '');
	const panel = sandbox ? SANDBOX.panel : savedPanel;

	return {
		sandbox,
		apiKey,
		panel,
		configured: Boolean(apiKey && panel),
		has: {
			apiKey: Boolean(savedKey),
			panel: Boolean(savedPanel),
		},
		usingSandboxKey: sandbox && !savedKey,
		checkout: `${panel}/api/checkout-v2`,
		verify: `${panel}/api/verify-payment`,
	};
}

/** A settings blob with UddoktaPay's API key taken out, plus `configured`. */
export function redactUddoktaPaySettings(settings) {
	const uddoktapay = settings?.paymentGateways?.uddoktapay;

	if (!uddoktapay || typeof uddoktapay !== 'object') {
		return settings;
	}

	const safe = { ...uddoktapay };

	for (const field of UDDOKTAPAY_CREDENTIAL_FIELDS) {
		delete safe[field];
	}

	safe.configured = uddoktapay.sandbox === true || Boolean(
		String(uddoktapay.api_key || '').trim() && normalisePanelUrl(uddoktapay.base_url)
	);

	return {
		...settings,
		paymentGateways: {
			...settings.paymentGateways,
			uddoktapay: safe,
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

function filled(value, fallback) {
	const text = String(value ?? '').trim();

	return text || fallback;
}

/** A usable email for the checkout - UddoktaPay requires one. */
function buyerEmail(order) {
	const email = String(order?.billing_email || order?.email || '').trim();

	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : 'customer@example.com';
}

function apiHeaders(config) {
	return {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'RT-UDDOKTAPAY-API-KEY': config.apiKey,
	};
}

/**
 * Start a hosted payment for an order that already exists. UddoktaPay takes
 * taka, so an order in another currency is refused here - the checkout
 * already hides the method for one.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @returns {Promise<{paymentUrl:string, amount:number, currency:string}>}
 */
export async function createUddoktaPayPayment(order, orderHash) {
	const config = await resolveUddoktaPayConfig();

	if (!config.configured) {
		throw new Error('UddoktaPay is not configured for this store.');
	}

	const amount = Number(order?.total_amount);

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error('This order has nothing to pay for.');
	}

	if (String(order?.currency || 'BDT').toUpperCase() !== 'BDT') {
		throw new Error('UddoktaPay only takes payments in BDT.');
	}

	const body = {
		full_name: filled(order?.billing_name, 'Customer'),
		email: buyerEmail(order),
		amount: amount.toFixed(2),
		/* Echoed back by verify-payment: this is how a return finds its order. */
		metadata: {
			order_hash: orderHash,
			order_id: String(order?.id ?? ''),
		},
		/* No query string: UddoktaPay appends "?invoice_id=" to it as-is. */
		redirect_url: appUrl('api/uddoktapay/callback'),
		return_type: 'GET',
		/* The cancel link is followed exactly as given, with nothing added. */
		cancel_url: appUrl(`api/uddoktapay/callback?result=cancel&hash=${encodeURIComponent(orderHash)}`),
		webhook_url: appUrl('api/uddoktapay/ipn'),
	};

	const response = await fetch(config.checkout, {
		method: 'POST',
		headers: apiHeaders(config),
		body: JSON.stringify(body),
		cache: 'no-store',
	});

	const data = await response.json().catch(() => null);

	if (data?.status !== true || !data?.payment_url) {
		console.error('UddoktaPay refused the payment request', {
			status: response.status,
			message: data?.message,
		});

		throw new Error(data?.message
			? `UddoktaPay could not start this payment: ${data.message}`
			: 'UddoktaPay could not start this payment.');
	}

	return {
		paymentUrl: data.payment_url,
		amount,
		currency: 'BDT',
	};
}

/** UddoktaPay's record of an invoice, or null when it has none. */
async function verifyPayment(config, invoiceId) {
	const response = await fetch(config.verify, {
		method: 'POST',
		headers: apiHeaders(config),
		body: JSON.stringify({ invoice_id: invoiceId }),
		cache: 'no-store',
	});

	const payload = response.ok ? await response.json().catch(() => null) : null;

	/* An unknown invoice answers {status:"ERROR", message:"No Data Found"} and no invoice_id. */
	if (!payload?.invoice_id) {
		return null;
	}

	return payload;
}

/** The metadata UddoktaPay echoes back - an object, or a JSON string on some panels. */
function metadataOf(record) {
	const meta = record?.metadata;

	if (meta && typeof meta === 'object') {
		return meta;
	}

	try {
		return JSON.parse(String(meta || '')) || {};
	} catch (error) {
		return {};
	}
}

/**
 * Whether UddoktaPay's record is a completed payment for this order, for at
 * least its total. `amount` is what we asked for; the fee is on top of it.
 */
export function isPaymentSettled(record, order) {
	if (String(record?.status || '').toUpperCase() !== 'COMPLETED') {
		return false;
	}

	if (String(metadataOf(record).order_id ?? '') !== String(order?.id)) {
		return false;
	}

	const paid = Number(record?.amount);
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
			payment_method: 'uddoktapay',
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

/** Constant-time string comparison, for the webhook's API key header. */
export function sameSecret(a, b) {
	const x = String(a || '');
	const y = String(b || '');

	if (!x || !y || x.length !== y.length) {
		return false;
	}

	let diff = 0;

	for (let i = 0; i < x.length; i += 1) {
		diff |= x.charCodeAt(i) ^ y.charCodeAt(i);
	}

	return diff === 0;
}

/**
 * Settle one UddoktaPay invoice: verify it, find our order from the echoed
 * metadata (order_hash) and mark it paid if it checks out. Shared by the
 * buyer's return and the webhook, so both reach the same verdict, and running
 * it twice is harmless.
 *
 * @param {string} invoiceId
 * @returns {Promise<{outcome:'paid'|'already_paid'|'pending'|'failed'|'unverified'|'no_order'|'record_failed', orderHash:string}>}
 */
export async function settleUddoktaPayPayment(invoiceId) {
	const config = await resolveUddoktaPayConfig();

	if (!config.configured || !invoiceId) {
		return { outcome: 'no_order', orderHash: '' };
	}

	const record = await verifyPayment(config, invoiceId);
	const orderHash = String(metadataOf(record).order_hash || '').trim();
	const order = orderHash ? await getOrderByHash(orderHash) : null;

	if (!order?.id) {
		console.error('UddoktaPay invoice could not be matched to an order', {
			invoiceId,
			status: record?.status,
		});

		return { outcome: 'no_order', orderHash: '' };
	}

	if (String(order.payment_status).toLowerCase() === 'paid') {
		return { outcome: 'already_paid', orderHash };
	}

	if (!isPaymentSettled(record, order)) {
		const status = String(record?.status || '').toUpperCase();

		/* PENDING: the merchant has to approve it in the panel; the webhook follows. */
		if (status === 'PENDING') {
			return { outcome: 'pending', orderHash };
		}

		console.error('UddoktaPay payment not settled', {
			invoiceId,
			orderHash,
			status: record?.status,
			amount: record?.amount,
			due: order?.total_amount,
		});

		/* Completed but failing our checks is suspicious; anything else is a plain failure. */
		return { outcome: status === 'COMPLETED' ? 'unverified' : 'failed', orderHash };
	}

	try {
		await markOrderPaid(order, { transactionId: record?.transaction_id || invoiceId });
	} catch (error) {
		console.error('UddoktaPay payment taken but the order was not updated', {
			invoiceId,
			orderHash,
			error: error?.message,
		});

		return { outcome: 'record_failed', orderHash };
	}

	return { outcome: 'paid', orderHash };
}
