/**
 * Stripe, from the server's side.
 *
 * Everything that decides money lives here, never in the browser: the amount
 * is read off the order row in WordPress, the secret key never leaves this
 * module, and a payment is only believed once Stripe's own API has been asked
 * about the session. The storefront is told an order hash and nothing more.
 *
 *   resolveStripeConfig     the credentials in force - settings over env
 *   createStripeSession     an order in, a hosted Checkout URL out
 *   retrieveStripeSession   a session id in, Stripe's own record out
 *   isPaymentSettled        whether that record describes a real payment
 *   markOrderPaid           writes the payment back onto the order
 *   verifyWebhookSignature  whether a webhook really came from Stripe
 *   redactStripeSettings    strips the secrets out of a settings blob
 *
 * Stripe Checkout is hosted, so this is a redirect gateway like aamarPay
 * rather than a widget: Stripe owns the card form, which keeps card numbers
 * off this origin entirely and leaves 3-D Secure to them.
 *
 * The REST API is called with plain fetch rather than the `stripe` package -
 * the other gateways here do the same, and it keeps the dependency out of the
 * bundle for one POST and one GET.
 *
 * This module reads the store's secret key and API_TOKEN, so it must only ever
 * be imported from a route handler - never from a "use client" component.
 */

import crypto from 'crypto';

const API_BASE = 'https://api.stripe.com/v1';

/**
 * The API version this code was written against. Pinning it means Stripe
 * rolling their default forward cannot change the shape of what arrives here.
 */
const API_VERSION = '2026-10-28.endive';

/** Currencies with no minor unit: the amount is the charge, unmultiplied. */
const ZERO_DECIMAL_CURRENCIES = [
	'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF', 'KRW', 'MGA',
	'PYG', 'RWF', 'UGX', 'VND', 'VUV', 'XAF', 'XOF', 'XPF',
];

/** Currencies billed in thousandths, where Stripe wants the last digit zero. */
const THREE_DECIMAL_CURRENCIES = ['BHD', 'JOD', 'KWD', 'OMR', 'TND'];

/**
 * The settings fields that hold a secret.
 *
 * Named once because two places need the same list for opposite reasons:
 * `resolveStripeConfig` reads them, and `redactStripeSettings` removes them
 * before a settings blob is allowed near a browser.
 */
export const STRIPE_SECRET_FIELDS = ['secret_key', 'webhook_secret'];

/**
 * What the env says about the gateway.
 *
 * The fallback for every field in `resolveStripeConfig`, and on its own what a
 * deployment that configures Stripe through `.env` alone runs on.
 */
export function stripeEnvConfig() {
	const rate = Number(process.env.STRIPE_EXCHANGE_RATE);

	return {
		secretKey: process.env.STRIPE_SECRET_KEY || '',
		webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
		currency: String(process.env.STRIPE_CURRENCY || 'USD').toUpperCase(),
		exchangeRate: Number.isFinite(rate) && rate > 0 ? rate : 0,
	};
}

/** The storefront's own origin. The env value may carry a trailing slash. */
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

	Every Stripe call would otherwise fetch it from WordPress first - two round
	trips for one payment, and a webhook storm would multiply it. A minute is
	short enough that a key changed in the dashboard takes effect while someone
	is still looking at the page, and long enough to keep a burst to one fetch.
*/
const SETTINGS_TTL_MS = 60_000;

let settingsCache = { at: 0, value: null };

/**
 * `paymentGateways.stripe` from the store's settings, or null.
 *
 * This is the server asking WordPress directly, with the API token - not the
 * `/api/settings` route the storefront uses, which has the secrets stripped
 * out of it on purpose.
 *
 * A failure here is deliberately not fatal: it returns null and the env
 * fallback takes over, so an unreachable WordPress cannot take a working
 * env-configured gateway down with it.
 */
async function stripeSettings(fresh = false) {
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
			return null;
		}

		const payload = await response.json().catch(() => null);

		/* The route has been seen both wrapped and bare; accept either. */
		const settings = payload?.settings ?? payload;
		const value = settings?.paymentGateways?.stripe ?? null;

		settingsCache = { at: now, value };

		return value;
	} catch (error) {
		return null;
	}
}

/** A settings field, trimmed, or '' when absent - so a blank falls through. */
function settingsValue(settings, field) {
	const value = settings?.[field];

	return typeof value === 'string' ? value.trim() : (value ?? '');
}

/**
 * The credentials and currency in force, dashboard settings over env.
 *
 * Settings win because that is where a store is expected to configure Stripe;
 * env remains the fallback, both for deployments that were set up that way and
 * for the case where WordPress cannot be reached. A blank field in the
 * dashboard is not a value - it falls through to env rather than switching the
 * gateway off, so clearing one field cannot silently unconfigure the rest.
 *
 * `configured` is the one thing worth checking before offering Stripe at all:
 * without a secret key every call below would be refused at the API.
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the settings cache, for the
 *        dashboard asking what is in force right after a save.
 * @returns {Promise<object>}
 */
export async function resolveStripeConfig({ fresh = false } = {}) {
	const env = stripeEnvConfig();
	const settings = await stripeSettings(fresh);

	const secretKey = settingsValue(settings, 'secret_key') || env.secretKey;
	const webhookSecret = settingsValue(settings, 'webhook_secret') || env.webhookSecret;

	const currency = String(
		settingsValue(settings, 'currency') || env.currency || 'USD'
	).toUpperCase();

	const rate = Number(settingsValue(settings, 'exchange_rate'));

	return {
		secretKey,
		webhookSecret,
		currency,
		/* Units of the store's currency per one unit of Stripe's. */
		exchangeRate: Number.isFinite(rate) && rate > 0 ? rate : env.exchangeRate,
		configured: Boolean(secretKey),
		/* A live key means real money; worth being able to say so in a log. */
		livemode: secretKey.startsWith('sk_live_'),
		/* Which side the key came from, for the dashboard to show. */
		source: settingsValue(settings, 'secret_key') ? 'settings' : (env.secretKey ? 'env' : ''),
	};
}

/**
 * A settings blob with Stripe's secrets taken out.
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
export function redactStripeSettings(settings) {
	const stripe = settings?.paymentGateways?.stripe;

	if (!stripe || typeof stripe !== 'object') {
		return settings;
	}

	const safe = { ...stripe };

	for (const field of STRIPE_SECRET_FIELDS) {
		delete safe[field];
	}

	/*
		The storefront still needs to know whether cards are usable, and it
		cannot work that out from a key it is not allowed to see.
	*/
	safe.configured = Boolean(
		String(stripe.secret_key || '').trim() || process.env.STRIPE_SECRET_KEY
	);

	return {
		...settings,
		paymentGateways: {
			...settings.paymentGateways,
			stripe: safe,
		},
	};
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

/** How many decimal places Stripe bills a currency in. */
function decimalsFor(currency) {
	const code = String(currency || '').toUpperCase();

	if (ZERO_DECIMAL_CURRENCIES.includes(code)) {
		return 0;
	}

	return THREE_DECIMAL_CURRENCIES.includes(code) ? 3 : 2;
}

/**
 * What Stripe will charge for an order, in Stripe's currency.
 *
 * Rounding is up, to the smallest unit Stripe bills in, so conversion can
 * never charge a fraction less than the order is worth. Three-decimal
 * currencies are rounded to the ten, which is Stripe's own rule for them.
 *
 * Returns null when it cannot be worked out - a missing rate across two
 * currencies - which is the signal to refuse the payment rather than guess at
 * an amount.
 *
 * @param {number|string} total Order total, in the store's currency.
 * @param {string} orderCurrency The store's currency, e.g. "BDT".
 * @param {object} config From resolveStripeConfig().
 * @returns {{amount:number, currency:string, display:string}|null}
 */
export function stripeChargeAmount(total, orderCurrency, config) {
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

	const decimals = decimalsFor(target);
	const factor = Math.pow(10, decimals);

	/* Minor units, rounded up - and to the ten for three-decimal currencies. */
	let minor = Math.ceil(value * factor - 1e-9);

	if (decimals === 3) {
		minor = Math.ceil(minor / 10) * 10;
	}

	if (minor <= 0) {
		return null;
	}

	return {
		amount: minor,
		currency: target,
		display: (minor / factor).toFixed(decimals),
	};
}

/**
 * POST form-encoded to Stripe and unwrap the answer.
 *
 * Stripe's API is form-encoded, not JSON, and reports its own failures in an
 * `error` object rather than only in the status code - so both are checked.
 *
 * The config is passed in rather than resolved here, so that one payment
 * cannot straddle a credential change halfway through.
 */
async function stripeRequest(path, { method = 'GET', body, idempotencyKey, config } = {}) {
	if (!config?.configured) {
		throw new Error('Stripe is not configured for this store.');
	}

	const headers = {
		Authorization: `Bearer ${config.secretKey}`,
		'Stripe-Version': API_VERSION,
	};

	if (body) {
		headers['Content-Type'] = 'application/x-www-form-urlencoded';
	}

	/*
		A buyer who double-clicks, or a retried request, would otherwise leave
		two sessions behind. The key makes the second call return the first
		session instead of creating another.
	*/
	if (idempotencyKey) {
		headers['Idempotency-Key'] = idempotencyKey;
	}

	const response = await fetch(`${API_BASE}${path}`, {
		method,
		headers,
		body: body ? body.toString() : undefined,
		cache: 'no-store',
	});

	const payload = await response.json().catch(() => null);

	if (!response.ok || payload?.error) {
		/* Stripe's message names the field it objected to; it is logged rather
			 than shown, because it echoes the request back. */
		console.error('Stripe refused a request', {
			path,
			status: response.status,
			type: payload?.error?.type,
			code: payload?.error?.code,
			message: payload?.error?.message,
		});

		throw new Error(payload?.error?.message || `Stripe answered ${response.status}.`);
	}

	return payload;
}

/**
 * Start a hosted Stripe Checkout payment for an order that already exists.
 *
 * The line item is the order total as one amount rather than the cart line by
 * line: the order row is the authority on what is owed, and re-deriving lines
 * here would risk a sum that disagrees with it. The order id is carried in
 * `client_reference_id` and the hash in `metadata`, which is how the callback
 * and the webhook find their way back to the right order.
 *
 * @param {object} order From getOrderByHash().
 * @param {string} orderHash
 * @param {object} [config] From resolveStripeConfig(); resolved if omitted.
 * @returns {Promise<{paymentUrl:string, sessionId:string, amount:number, currency:string}>}
 */
export async function createStripeSession(order, orderHash, config) {
	const resolved = config ?? await resolveStripeConfig();

	if (!resolved.configured) {
		throw new Error('Stripe is not configured for this store.');
	}

	const charge = stripeChargeAmount(order?.total_amount, order?.currency, resolved);

	if (!charge) {
		/*
			Either the order is empty or the store prices in a currency Stripe
			is not set up to charge in and no rate was given. Both are the
			store's to fix, so the buyer gets a plain message and no session.
		*/
		throw new Error('This order cannot be paid with Stripe.');
	}

	const body = new URLSearchParams();

	body.set('mode', 'payment');
	body.set('client_reference_id', String(order?.id ?? ''));

	body.set('line_items[0][quantity]', '1');
	body.set('line_items[0][price_data][currency]', charge.currency.toLowerCase());
	body.set('line_items[0][price_data][unit_amount]', String(charge.amount));
	body.set(
		'line_items[0][price_data][product_data][name]',
		`Order #${order?.id ?? ''}`.trim()
	);

	/*
		`{CHECKOUT_SESSION_ID}` is substituted by Stripe on the way back. The
		callback needs it to ask Stripe what actually happened - the hash alone
		would say which order, but nothing about whether it was paid.
	*/
	body.set(
		'success_url',
		appUrl(
			`api/stripe/callback?result=success&hash=${encodeURIComponent(orderHash)}`
			+ '&session_id={CHECKOUT_SESSION_ID}'
		)
	);

	body.set(
		'cancel_url',
		appUrl(`api/stripe/callback?result=cancelled&hash=${encodeURIComponent(orderHash)}`)
	);

	/* Carried through Stripe and handed back on the session and the webhook. */
	body.set('metadata[order_hash]', orderHash);
	body.set('metadata[order_id]', String(order?.id ?? ''));
	body.set('metadata[order_total]', String(order?.total_amount ?? ''));
	body.set('metadata[order_currency]', String(order?.currency || ''));

	/* So the receipt and the Stripe record match the order's own customer. */
	const email = order?.billing_email ? String(order.billing_email) : '';

	if (email) {
		body.set('customer_email', email);
		body.set('payment_intent_data[receipt_email]', email);
	}

	body.set(
		'payment_intent_data[description]',
		`Order #${order?.id ?? ''} - ${order?.billing_name || 'Customer'}`
	);
	body.set('payment_intent_data[metadata][order_hash]', orderHash);
	body.set('payment_intent_data[metadata][order_id]', String(order?.id ?? ''));

	/*
		Keyed on the order and what it is worth, not on the attempt: a buyer who
		clicks twice reuses one session, while a buyer who comes back after
		changing the cart gets a new one for the new total.

		One live session per order is worth the trouble. Two would both be
		payable at Stripe, and a buyer who paid both would be charged twice for
		an order that can only record one payment.
	*/
	const key = `order-${order?.id ?? 0}-${charge.currency}-${charge.amount}`;

	let session = await stripeRequest('/checkout/sessions', {
		method: 'POST',
		body,
		idempotencyKey: key,
		config: resolved,
	});

	/*
		Stripe keeps an idempotency record for 24 hours and a Checkout session
		lives about as long, so a buyer returning at the edge of that window can
		be handed back the expired session rather than a new one. An expired
		session has no URL to send them to, so the key is retired and one fresh
		session is made - the thing the key guards against is a double click
		seconds apart, and that cannot be what this is.
	*/
	if (!session?.url && String(session?.status).toLowerCase() === 'expired') {
		session = await stripeRequest('/checkout/sessions', {
			method: 'POST',
			body,
			idempotencyKey: `${key}-${Math.floor(Date.now() / 86400000)}`,
			config: resolved,
		});
	}

	if (!session?.url || !session?.id) {
		throw new Error('Stripe could not start this payment.');
	}

	return {
		paymentUrl: session.url,
		sessionId: session.id,
		amount: charge.amount,
		currency: charge.currency,
	};
}

/**
 * What Stripe says about a Checkout Session.
 *
 * The browser - and anything posted to the callback - can both be forged, so
 * this is the only account of a payment that is acted on.
 *
 * @param {string} sessionId
 * @param {object} [config] From resolveStripeConfig(); resolved if omitted.
 * @returns {Promise<object|null>}
 */
export async function retrieveStripeSession(sessionId, config) {
	if (!sessionId) {
		return null;
	}

	try {
		const resolved = config ?? await resolveStripeConfig();

		return await stripeRequest(`/checkout/sessions/${encodeURIComponent(sessionId)}`, {
			config: resolved,
		});
	} catch (error) {
		return null;
	}
}

/**
 * Whether a session describes a payment that was actually taken, for this
 * order and for the right amount.
 *
 * `payment_status: "paid"` is Stripe's own word for settled. The amount is
 * checked as well, and against what this order is worth now - a session
 * created before the cart changed must not settle the order it no longer
 * matches. The comparison happens in Stripe's currency, by converting the
 * order again with the same rule that created the session.
 *
 * @param {object} session From retrieveStripeSession().
 * @param {object} order From getOrderByHash(), carrying `order_hash`.
 * @param {object} config From resolveStripeConfig().
 */
export function isPaymentSettled(session, order, config) {
	if (String(session?.payment_status).toLowerCase() !== 'paid') {
		return false;
	}

	const hash = String(order?.order_hash || order?.hash || '');
	const sessionHash = String(session?.metadata?.order_hash || '');

	/* A session for a different order would otherwise settle this one. */
	if (sessionHash && hash && sessionHash !== hash) {
		return false;
	}

	if (String(session?.metadata?.order_id || '') !== String(order?.id ?? '')) {
		return false;
	}

	const expected = stripeChargeAmount(order?.total_amount, order?.currency, config);

	if (!expected) {
		return false;
	}

	const paid = Number(session?.amount_total);

	if (!Number.isFinite(paid)) {
		return false;
	}

	const sameCurrency = String(session?.currency || '').toUpperCase()
		=== expected.currency.toUpperCase();

	return sameCurrency && paid === expected.amount;
}

/**
 * The transaction id worth recording: Stripe's PaymentIntent, which is what a
 * refund or a dispute is looked up by, falling back to the session id.
 */
export function stripeTransactionId(session) {
	const intent = session?.payment_intent;

	if (typeof intent === 'string' && intent) {
		return intent;
	}

	return intent?.id || session?.id || '';
}

/**
 * Write a settled payment onto the order.
 *
 * `update_order` replaces the row from what it is given, so the order is read
 * first and sent back with only the payment fields changed - posting a bare
 * patch here would blank everything else.
 *
 * @param {object} order From getOrderByHash().
 * @param {{transactionId:string, session:object}} payment
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
			payment_method: 'stripe',
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

/**
 * Settle an order from a session Stripe says was paid.
 *
 * Shared by the callback and the webhook, which race each other by design -
 * whichever arrives first does the work, and the second finds the order
 * already paid and leaves it alone.
 *
 * @param {string} orderHash
 * @param {string} sessionId
 * @returns {Promise<{status:'paid'|'already-paid'|'unverified'|'no-order', order?:object, duplicate?:boolean}>}
 *          `duplicate` marks a second payment taken against an order already
 *          paid - the one case here a store has to act on.
 */
export async function settleStripeOrder(orderHash, sessionId) {
	/* Resolved once, so every check below is made against the same credentials. */
	const config = await resolveStripeConfig();

	const order = await getOrderByHash(orderHash);

	if (!order?.id) {
		return { status: 'no-order' };
	}

	if (String(order.payment_status).toLowerCase() === 'paid') {
		/*
			Usually the other half of the callback/webhook race, which is
			nothing to report. But if this payment is not the one already on the
			order, the buyer has been charged twice - once against a session the
			order has no room to record - and only a human can put that right.
		*/
		const session = await retrieveStripeSession(sessionId, config);
		const paid = String(session?.payment_status).toLowerCase() === 'paid';
		const recorded = String(order.transaction_id || '');
		const incoming = stripeTransactionId(session);

		if (paid && incoming && recorded && incoming !== recorded) {
			console.error(
				'A second Stripe payment was taken for an order already paid - refund needed',
				{
					orderHash,
					orderId: order.id,
					recordedTransaction: recorded,
					secondTransaction: incoming,
					amount: session?.amount_total,
					currency: session?.currency,
				}
			);

			return { status: 'already-paid', order, duplicate: true };
		}

		return { status: 'already-paid', order };
	}

	const session = await retrieveStripeSession(sessionId, config);

	if (!isPaymentSettled(session, { ...order, order_hash: orderHash }, config)) {
		console.error('Stripe reported success but the session did not agree', {
			sessionId,
			orderHash,
			payment_status: session?.payment_status,
			amount_total: session?.amount_total,
			currency: session?.currency,
			due: order?.total_amount,
		});

		return { status: 'unverified', order };
	}

	await markOrderPaid(order, {
		transactionId: stripeTransactionId(session),
		session,
	});

	return { status: 'paid', order };
}

/**
 * Whether a webhook body really came from Stripe.
 *
 * The signature is an HMAC of `<timestamp>.<raw body>` with the endpoint
 * secret, so the body has to be the bytes Stripe sent - not a re-serialized
 * object. Unsigned, this endpoint would let anyone mark any order paid.
 *
 * The timestamp is checked too: a signature stays valid forever, so without a
 * window an old capture could be replayed back at us.
 *
 * The secret is a parameter rather than read from the config here, so this
 * stays a pure function of its inputs - which is what makes it testable
 * without a store behind it.
 *
 * @param {string} rawBody The request body, exactly as received.
 * @param {string} signatureHeader The `Stripe-Signature` header.
 * @param {string} secret The endpoint's signing secret.
 * @param {number} [toleranceSeconds] How old a signature may be.
 * @returns {boolean}
 */
export function verifyWebhookSignature(rawBody, signatureHeader, secret, toleranceSeconds = 300) {
	if (!secret || !rawBody || !signatureHeader) {
		return false;
	}

	const parts = String(signatureHeader)
		.split(',')
		.map((part) => part.split('='));

	const timestamp = parts.find(([key]) => key === 't')?.[1];

	/* More than one v1 can arrive while a secret is being rotated. */
	const signatures = parts
		.filter(([key]) => key === 'v1')
		.map(([, value]) => value)
		.filter(Boolean);

	if (!timestamp || !signatures.length) {
		return false;
	}

	const age = Math.floor(Date.now() / 1000) - Number(timestamp);

	if (!Number.isFinite(age) || Math.abs(age) > toleranceSeconds) {
		return false;
	}

	const expected = crypto
		.createHmac('sha256', secret)
		.update(`${timestamp}.${rawBody}`, 'utf8')
		.digest('hex');

	const expectedBuffer = Buffer.from(expected, 'utf8');

	return signatures.some((signature) => {
		const given = Buffer.from(signature, 'utf8');

		/* Equal length first: timingSafeEqual throws on a mismatch. */
		return given.length === expectedBuffer.length
			&& crypto.timingSafeEqual(given, expectedBuffer);
	});
}
