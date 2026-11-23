/**
 * PortWallet (now PortPos), from the server's side.
 *
 * The same rules as the other redirect gateways: the amount is read off the
 * order row in WordPress, the app key and secret come from the dashboard's
 * settings and never reach a browser, and a payment is only believed once
 * PortWallet's own API has been asked about it.
 *
 *   resolvePortWalletConfig   the keys in force, from settings
 *   createPortWalletPayment   an order in, a hosted payment URL out
 *   settlePortWalletPayment   an invoice id in, a verdict (and the order marked paid) out
 *   redactPortWalletSettings  strips the keys out of a settings blob
 *
 * API v2 (from PortWallet's own Node/PHP SDKs and the PortPos docs; hosts
 * probed 2026-11-23 - PortWallet rebranded as PortPos, and the old
 * api-sandbox.portwallet.com host's certificate no longer matches, so the
 * portpos.com hosts are used):
 *   - Every call: Authorization "Bearer " + base64(appKey + ":" + md5(secret + unixTime)).
 *   - POST {api}/payment/v2/invoice with order {amount, currency, redirect_url,
 *     ipn_url, reference}, product, billing.customer. Answers data.invoice_id
 *     (and data.action.url on some versions); the payment page is
 *     {pay}/payment/?invoice={invoice_id}.
 *   - The buyer comes back to redirect_url with ?invoice=...; PortWallet POSTs
 *     invoice + amount to ipn_url.
 *   - GET {api}/payment/v2/invoice/{invoice_id} answers the invoice:
 *     data.order.status ACCEPTED is paid, data.order.amount/currency, and
 *     data.reference is what we sent - the order hash.
 *
 * The SDKs disagree on the IPN-validate call (GET invoice/ipn/{id}/{amount}
 * vs POST invoice/ipn-validate), so settling uses the invoice retrieve every
 * version has.
 *
 * This module reads the secret key, so it must only ever be imported from a
 * route handler - never from a "use client" component.
 */

import { createHash } from 'node:crypto';

const ENDPOINTS = {
	sandbox: { api: 'https://api-sandbox.portpos.com', pay: 'https://payment-sandbox.portpos.com' },
	live: { api: 'https://api.portpos.com', pay: 'https://payment.portpos.com' },
};

/** What PortWallet's invoice API accepts. */
export const PORTWALLET_CURRENCIES = ['BDT', 'USD', 'GBP', 'EUR'];

/** The settings fields that hold a credential. */
export const PORTWALLET_CREDENTIAL_FIELDS = ['app_key', 'secret_key'];

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

async function portWalletSettings(fresh = false) {
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
		const value = settings?.paymentGateways?.portwallet ?? null;

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
 * The keys in force, from the dashboard's settings.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache.
 */
export async function resolvePortWalletConfig({ fresh = false } = {}) {
	const settings = await portWalletSettings(fresh);

	const appKey = settingsValue(settings, 'app_key');
	const secretKey = settingsValue(settings, 'secret_key');
	const sandbox = settings?.sandbox === true;
	const hosts = sandbox ? ENDPOINTS.sandbox : ENDPOINTS.live;

	return {
		sandbox,
		appKey,
		secretKey,
		configured: Boolean(appKey && secretKey),
		has: {
			appKey: Boolean(appKey),
			secretKey: Boolean(secretKey),
		},
		invoice: `${hosts.api}/payment/v2/invoice`,
		payPage: `${hosts.pay}/payment/`,
	};
}

/** A settings blob with PortWallet's keys taken out, plus `configured`. */
export function redactPortWalletSettings(settings) {
	const portwallet = settings?.paymentGateways?.portwallet;

	if (!portwallet || typeof portwallet !== 'object') {
		return settings;
	}

	const safe = { ...portwallet };

	for (const field of PORTWALLET_CREDENTIAL_FIELDS) {
		delete safe[field];
	}

	safe.configured = Boolean(
		String(portwallet.app_key || '').trim() && String(portwallet.secret_key || '').trim()
	);

	return {
		...settings,
		paymentGateways: {
			...settings.paymentGateways,
			portwallet: safe,
		},
	};
}

/** The Authorization header: fresh per request, since the token is timestamped. */
export function authorization(config, now = Date.now()) {
	const stamp = Math.floor(now / 1000);
	const digest = createHash('md5').update(`${config.secretKey}${stamp}`).digest('hex');

	return `Bearer ${Buffer.from(`${config.appKey}:${digest}`).toString('base64')}`;
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

function filled(value, fallback, max = 200) {
	const text = String(value ?? '').trim();

	return (text || fallback).slice(0, max);
}

/** A usable email - PortWallet requires one. */
function buyerEmail(order) {
	const email = String(order?.billing_email || order?.email || '').trim();

	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 50 ? email : 'customer@example.com';
}

/** A phone PortWallet accepts: 9-15 digits, spaces or "+". */
function buyerPhone(order) {
	const phone = String(order?.billing_phone || '').replace(/[^0-9+ ]/g, '').trim();

	return phone.length >= 9 && phone.length <= 15 ? phone : '01700000000';
}

/** The order's currency, upper-cased ('BDT' when the order has none). */
function orderCurrency(order) {
	return String(order?.currency || 'BDT').toUpperCase();
}

/** PortWallet's error message out of an error answer, if it has one. */
function errorText(data) {
	return data?.error?.explanation || data?.error?.message || data?.message || '';
}

/**
 * Start a hosted payment for an order that already exists.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @returns {Promise<{paymentUrl:string, invoiceId:string, amount:number, currency:string}>}
 */
export async function createPortWalletPayment(order, orderHash) {
	const config = await resolvePortWalletConfig();

	if (!config.configured) {
		throw new Error('PortWallet is not configured for this store.');
	}

	const amount = Number(order?.total_amount);

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error('This order has nothing to pay for.');
	}

	const currency = orderCurrency(order);

	if (!PORTWALLET_CURRENCIES.includes(currency)) {
		throw new Error(`PortWallet does not take payments in ${currency}.`);
	}

	const city = filled(order?.billing_city, 'Dhaka');

	const body = {
		order: {
			amount: Number(amount.toFixed(2)),
			currency,
			/* No query string: PortWallet adds ?invoice= itself. */
			redirect_url: appUrl('api/portwallet/callback'),
			ipn_url: appUrl('api/portwallet/ipn'),
			/* Echoed back on the invoice: this is how a return finds its order. */
			reference: orderHash,
		},
		product: {
			name: `Order #${order?.id ?? ''}`,
			description: `Payment for order #${order?.id ?? ''}`,
		},
		billing: {
			customer: {
				name: filled(order?.billing_name, 'Customer', 50).padEnd(2, '.'),
				email: buyerEmail(order),
				phone: buyerPhone(order),
				address: {
					street: filled(order?.billing_address || order?.billing_address1, city).padEnd(2, '.'),
					city: city.padEnd(2, '.'),
					state: filled(order?.billing_state, city).padEnd(2, '.'),
					zipcode: filled(order?.billing_postcode || order?.billing_zip, '1000', 20),
					country: filled(order?.billing_country, 'BD', 50).padEnd(2, '.'),
				},
			},
		},
	};

	const response = await fetch(config.invoice, {
		method: 'POST',
		headers: {
			Authorization: authorization(config),
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(body),
		cache: 'no-store',
	});

	const data = await response.json().catch(() => null);
	const invoiceId = String(data?.data?.invoice_id || '').trim();

	if (!response.ok || !invoiceId) {
		console.error('PortWallet refused the payment request', {
			status: response.status,
			cause: data?.error?.cause,
			property: data?.error?.property,
			message: errorText(data),
		});

		throw new Error(errorText(data)
			? `PortWallet could not start this payment: ${errorText(data)}`
			: 'PortWallet could not start this payment.');
	}

	const actionUrl = String(data?.data?.action?.url || '').trim();

	return {
		paymentUrl: /^https:\/\//i.test(actionUrl)
			? actionUrl
			: `${config.payPage}?invoice=${encodeURIComponent(invoiceId)}`,
		invoiceId,
		amount,
		currency,
	};
}

/** PortWallet's record of an invoice (the `data` object), or null. */
async function retrieveInvoice(config, invoiceId) {
	const response = await fetch(`${config.invoice}/${encodeURIComponent(invoiceId)}`, {
		method: 'GET',
		headers: {
			Authorization: authorization(config),
			Accept: 'application/json',
		},
		cache: 'no-store',
	});

	const payload = response.ok ? await response.json().catch(() => null) : null;

	if (!payload?.data?.invoice_id) {
		return null;
	}

	return payload.data;
}

/** The invoice's status, normalised: accepted | pending | rejected | cancelled | refunded | ''. */
export function normaliseStatus(value) {
	const status = String(value || '').toUpperCase();

	if (['ACCEPTED', 'APPROVED', 'PAID', 'SUCCESS'].includes(status)) return 'accepted';
	if (['CANCELLED', 'CANCELED', 'CANCEL'].includes(status)) return 'cancelled';
	if (['REJECTED', 'FAILED', 'DECLINED', 'ERROR', 'EXPIRED'].includes(status)) return 'rejected';
	if (['PENDING', 'UNPAID', 'INITIATED', 'PROCESSING'].includes(status)) return 'pending';
	if (['REFUNDED', 'REFUND', 'REVERSED'].includes(status)) return 'refunded';

	return status.toLowerCase();
}

/**
 * Whether PortWallet's invoice is a paid one for this order, in its currency,
 * for at least its total.
 */
export function isPaymentSettled(invoice, order, orderHash) {
	if (normaliseStatus(invoice?.order?.status) !== 'accepted') {
		return false;
	}

	if (String(invoice?.reference || '') !== String(orderHash || '')) {
		return false;
	}

	if (String(invoice?.order?.currency || '').toUpperCase() !== orderCurrency(order)) {
		return false;
	}

	const paid = Number(invoice?.order?.amount);
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
			payment_method: 'portwallet',
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
 * The invoice id out of whatever reached us: "invoice" is what PortWallet
 * sends to both the redirect and the IPN; "invoice_id" is accepted too. It is
 * only ever used to ask PortWallet's API.
 */
export function invoiceIdFrom(rawUrl, fields = {}) {
	for (const key of ['invoice', 'invoice_id']) {
		const match = String(rawUrl || '').match(new RegExp(`[?&]${key}=([^&?#]+)`));

		if (match) {
			return decodeURIComponent(match[1].replace(/\+/g, ' ')).trim();
		}

		const value = fields && typeof fields === 'object' ? (fields[key] ?? fields?.data?.[key]) : null;

		if (value) {
			return String(value).trim();
		}
	}

	return '';
}

/**
 * Settle one PortWallet invoice: retrieve it, find our order from its
 * reference (the order hash) and mark it paid if it checks out. Shared by the
 * buyer's return and the IPN, so both reach the same verdict, and running it
 * twice is harmless.
 *
 * @param {string} invoiceId
 * @returns {Promise<{outcome:'paid'|'already_paid'|'pending'|'cancelled'|'failed'|'unverified'|'no_order'|'record_failed', orderHash:string}>}
 */
export async function settlePortWalletPayment(invoiceId) {
	const config = await resolvePortWalletConfig();

	if (!config.configured || !invoiceId) {
		return { outcome: 'no_order', orderHash: '' };
	}

	const invoice = await retrieveInvoice(config, invoiceId);
	const orderHash = String(invoice?.reference || '').trim();
	const order = orderHash ? await getOrderByHash(orderHash) : null;

	if (!order?.id) {
		console.error('PortWallet invoice could not be matched to an order', {
			invoiceId,
			status: invoice?.order?.status,
		});

		return { outcome: 'no_order', orderHash: '' };
	}

	if (String(order.payment_status).toLowerCase() === 'paid') {
		return { outcome: 'already_paid', orderHash };
	}

	if (!isPaymentSettled(invoice, order, orderHash)) {
		const status = normaliseStatus(invoice?.order?.status);

		if (status === 'cancelled') {
			return { outcome: 'cancelled', orderHash };
		}

		/* An invoice that was never paid stays PENDING; the IPN settles it if it is paid later. */
		if (status === 'pending') {
			return { outcome: 'pending', orderHash };
		}

		console.error('PortWallet payment not settled', {
			invoiceId,
			orderHash,
			status: invoice?.order?.status,
			amount: invoice?.order?.amount,
			currency: invoice?.order?.currency,
			due: order?.total_amount,
		});

		/* Accepted but failing our checks is suspicious; anything else is a plain failure. */
		return { outcome: status === 'accepted' ? 'unverified' : 'failed', orderHash };
	}

	try {
		/* The invoice id is what the PortWallet panel looks payments up by. */
		await markOrderPaid(order, { transactionId: invoiceId });
	} catch (error) {
		console.error('PortWallet payment taken but the order was not updated', {
			invoiceId,
			orderHash,
			error: error?.message,
		});

		return { outcome: 'record_failed', orderHash };
	}

	return { outcome: 'paid', orderHash };
}
