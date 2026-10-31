/**
 * Stripe, from the browser's side.
 *
 * Everything that decides money happens in `lib/stripe-server.js`: the amount
 * is derived from the order row, and whether a payment was taken is read from
 * Stripe's own API. These helpers only carry messages, so they are safe to
 * call from a client component - there is no key here to leak.
 *
 *   getStripeConfig      is it on, and what currency will the card be charged in
 *   stripeAmountPreview  what to print next to the button
 */

/** Currencies with no minor unit - must match the server's list. */
const ZERO_DECIMAL_CURRENCIES = [
	'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF', 'KRW', 'MGA',
	'PYG', 'RWF', 'UGX', 'VND', 'VUV', 'XAF', 'XOF', 'XPF',
];

/** Currencies billed in thousandths - must match the server's list. */
const THREE_DECIMAL_CURRENCIES = ['BHD', 'JOD', 'KWD', 'OMR', 'TND'];

/**
 * Whether Stripe is switched on, and what it will charge in.
 *
 * `enabled` here is whether the server has a secret key, so this is worth
 * asking before showing Stripe at checkout even when the dashboard has the
 * tile switched on.
 *
 * @param {{fresh?:boolean}} [options] `fresh` makes the server re-read the
 *        store's settings instead of using its short-lived cache. The
 *        dashboard wants this right after a save; the storefront does not.
 * @returns {Promise<object|null>} Null when the question could not be asked,
 *          which is treated the same as "off".
 */
export async function getStripeConfig({ fresh = false } = {}) {
	try {
		const response = await fetch(
			fresh ? '/api/stripe/config?fresh=1' : '/api/stripe/config',
			{ cache: 'no-store' }
		);

		if (!response.ok) {
			return null;
		}

		const payload = await response.json();

		return payload?.config ?? null;
	} catch (error) {
		return null;
	}
}

/**
 * What the buyer will be charged, for display only.
 *
 * The cart may be in a currency Stripe does not take - BDT among them - so the
 * amount shown next to the button is converted here with the same rule the
 * server uses: divide by the rate, round up to the smallest unit. The server
 * still decides the real amount; this is a label, not an input.
 *
 * @param {number|string} total Order total, in the store's currency.
 * @param {object} config From getStripeConfig().
 * @param {string} orderCurrency The store's currency, e.g. "BDT".
 * @returns {{value:string, currency:string}|null} Null when it cannot be
 *          worked out, which is the signal to say nothing rather than guess.
 */
export function stripeAmountPreview(total, config, orderCurrency) {
	const target = String(config?.currency || 'USD').toUpperCase();
	const amount = Number(total);

	if (!Number.isFinite(amount) || amount <= 0) {
		return null;
	}

	const from = String(orderCurrency || '').toUpperCase();
	const rate = Number(config?.exchange_rate);

	let value = amount;

	if (from && from !== target) {
		if (!(rate > 0)) {
			return null;
		}

		value = amount / rate;
	}

	let decimals = 2;

	if (ZERO_DECIMAL_CURRENCIES.includes(target)) {
		decimals = 0;
	} else if (THREE_DECIMAL_CURRENCIES.includes(target)) {
		decimals = 3;
	}

	const factor = Math.pow(10, decimals);

	return {
		value: (Math.ceil(value * factor - 1e-9) / factor).toFixed(decimals),
		currency: target,
	};
}
