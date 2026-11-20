/**
 * Paddle (Classic), from the browser's side.
 *
 * Everything that decides money happens in `lib/paddle-server.js`; these
 * helpers only carry messages, so they are safe in a client component - there
 * is no credential here.
 *
 *   getPaddleConfig      is it on, and what currency will Paddle charge in
 *   paddleAmountPreview  what to print next to the button
 */

const ZERO_DECIMAL_CURRENCIES = ['JPY', 'KRW'];

/**
 * Whether Paddle can take payments (the server has a vendor id and auth
 * code), and its charge currency and rate. Null when it could not be asked,
 * which reads as "off".
 *
 * @param {{fresh?:boolean}} [options] `fresh` skips the server's settings cache (the dashboard, right after a save).
 */
export async function getPaddleConfig({ fresh = false } = {}) {
	try {
		const response = await fetch(fresh ? '/api/paddle/config?fresh=1' : '/api/paddle/config', { cache: 'no-store' });

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
 * What Paddle will charge, for display only - the same conversion the server
 * uses (divide by the rate, round up). Null when it cannot be worked out.
 * Paddle may add sales tax on top at its checkout.
 */
export function paddleAmountPreview(total, config, orderCurrency) {
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

	const decimals = ZERO_DECIMAL_CURRENCIES.includes(target) ? 0 : 2;
	const factor = Math.pow(10, decimals);

	return { value: (Math.ceil(value * factor - 1e-9) / factor).toFixed(decimals), currency: target };
}
