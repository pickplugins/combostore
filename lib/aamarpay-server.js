/**
 * aamarPay, from the server's side.
 *
 * Everything that decides money lives here, never in the browser: the amount
 * is read off the order row in WordPress, the credentials stay in the server
 * env, and a payment is only believed once aamarPay's own verification API has
 * been asked about it. The storefront is told an order hash and nothing more.
 *
 *   createAamarPayPayment   an order in, a hosted payment URL out
 *   verifyAamarPayPayment   a merchant transaction id in, aamarPay's record out
 *   markOrderPaid           writes that record back onto the order
 *
 * This module reads AAMARPAY_SIGNATURE_KEY and API_TOKEN, so it must only ever
 * be imported from a route handler - never from a "use client" component.
 */

const ENDPOINTS = {
	sandbox: {
		initiate: 'https://sandbox.aamarpay.com/jsonpost.php',
		verify: 'https://sandbox.aamarpay.com/api/v1/trxcheck/request.php',
	},
	live: {
		initiate: 'https://secure.aamarpay.com/jsonpost.php',
		verify: 'https://secure.aamarpay.com/api/v1/trxcheck/request.php',
	},
};

/** What aamarPay will take. Anything else is charged in BDT instead. */
const SUPPORTED_CURRENCIES = ['BDT', 'USD'];

/**
 * What the env says about the gateway.
 *
 * `configured` is the one thing worth checking before offering aamarPay at
 * all - without both credentials every call below would fail at the gateway.
 */
export function aamarPayConfig() {
	const sandbox = String(process.env.AAMARPAY_SANDBOX).toLowerCase() === 'true';
	const storeId = process.env.AAMARPAY_STORE_ID || '';
	const signatureKey = process.env.AAMARPAY_SIGNATURE_KEY || '';

	return {
		sandbox,
		storeId,
		signatureKey,
		configured: Boolean(storeId && signatureKey),
		...(sandbox ? ENDPOINTS.sandbox : ENDPOINTS.live),
	};
}

/** The storefront's own origin. The env value carries a trailing slash. */
function appUrl(path) {
	const base = String(process.env.NEXT_PUBLIC_APP_URL || '').replace(/\/+$/, '');

	return `${base}/${String(path).replace(/^\/+/, '')}`;
}

function wpUrl(route) {
	const base = String(process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/?$/, '/');

	return `${base}wp-json/combo-store/v2/${route}`;
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
 * aamarPay will not take the same id twice, so a buyer who fails once and
 * tries again needs a fresh one - which is why the order hash travels in
 * `opt_a` rather than being reused as the id.
 */
function buildTransactionId(order) {
	const stamp = Date.now().toString(36).toUpperCase();
	const noise = Math.random().toString(36).slice(2, 7).toUpperCase();

	return `AP${order?.id ?? 0}-${stamp}-${noise}`.slice(0, 32);
}

function orderCurrency(order) {
	const currency = String(order?.currency || 'BDT').toUpperCase();

	return SUPPORTED_CURRENCIES.includes(currency) ? currency : 'BDT';
}

/**
 * Start a hosted payment for an order that already exists.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @returns {Promise<{paymentUrl:string, transactionId:string, amount:number, currency:string}>}
 */
export async function createAamarPayPayment(order, orderHash) {
	const config = aamarPayConfig();

	if (!config.configured) {
		throw new Error('aamarPay is not configured for this store.');
	}

	const amount = Number(order?.total_amount);

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error('This order has nothing to pay for.');
	}

	const transactionId = buildTransactionId(order);

	const callback = (result) => appUrl(
		`api/aamarpay/callback?result=${result}`
		+ `&hash=${encodeURIComponent(orderHash)}`
		+ `&tran_id=${encodeURIComponent(transactionId)}`
	);

	const payload = {
		store_id: config.storeId,
		signature_key: config.signatureKey,
		tran_id: transactionId,
		amount: amount.toFixed(2),
		currency: orderCurrency(order),
		desc: `Order #${order?.id ?? ''}`.trim(),

		cus_name: order?.billing_name || 'Customer',
		cus_email: order?.billing_email || 'customer@example.com',
		cus_phone: order?.billing_phone || '01700000000',
		cus_add1: order?.billing_address || order?.billing_address1 || 'N/A',
		cus_add2: order?.billing_address2 || '',
		cus_city: order?.billing_city || 'N/A',
		cus_state: order?.billing_city || 'N/A',
		cus_postcode: order?.billing_postcode || '',
		cus_country: order?.billing_country || 'Bangladesh',

		/*
			Carried through the gateway and handed back on the callback. This is
			what lets the callback find the order even when the redirect arrives
			without the query string it was given.
		*/
		opt_a: orderHash,
		opt_b: String(order?.id ?? ''),

		success_url: callback('success'),
		fail_url: callback('failed'),
		cancel_url: callback('cancelled'),

		/*
			The same handler, called by aamarPay rather than by the browser.
			It is what settles an order whose buyer closed the tab on the
			gateway's page, and it needs a publicly reachable host - on
			localhost it simply never arrives, which costs nothing.
		*/
		ipn_url: `${callback('success')}&ipn=1`,

		type: 'json',
	};

	const response = await fetch(config.initiate, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload),
		cache: 'no-store',
	});

	const data = await response.json().catch(() => null);

	if (String(data?.result) !== 'true' || !data?.payment_url) {
		/*
			A rejected request answers with the field it objected to rather than
			a message, so the raw body is the only useful detail - it is logged,
			not shown, because it echoes the request back.
		*/
		console.error('aamarPay refused the payment request', data);

		throw new Error('aamarPay could not start this payment.');
	}

	return {
		paymentUrl: data.payment_url,
		transactionId,
		amount,
		currency: payload.currency,
	};
}

/**
 * What aamarPay says about a transaction.
 *
 * The browser - and the callback body aamarPay posts - can both be forged, so
 * this is the only account of a payment that is acted on.
 *
 * @param {string} transactionId The merchant transaction id (`mer_txnid`).
 * @returns {Promise<object|null>}
 */
export async function verifyAamarPayPayment(transactionId) {
	const config = aamarPayConfig();

	if (!config.configured || !transactionId) {
		return null;
	}

	const url = new URL(config.verify);

	url.searchParams.set('request_id', transactionId);
	url.searchParams.set('store_id', config.storeId);
	url.searchParams.set('signature_key', config.signatureKey);
	url.searchParams.set('type', 'json');

	const response = await fetch(url, { cache: 'no-store' });

	if (!response.ok) {
		return null;
	}

	return response.json().catch(() => null);
}

/**
 * Whether a verification describes a payment that was actually taken, for this
 * order and for the right amount.
 *
 * `status_code` 2 is aamarPay's "Successful Transaction". The amount is
 * checked as well, because a hosted page the buyer reached through a link of
 * their own making is not a promise about how much was charged.
 */
export function isPaymentSettled(verification, order) {
	const settled = String(verification?.status_code) === '2'
		|| String(verification?.pay_status).toLowerCase() === 'successful';

	if (!settled) {
		return false;
	}

	const paid = Number(verification?.amount);
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
			payment_method: 'aamarpay',
			payment_status: 'paid',
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
