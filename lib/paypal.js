/**
 * PayPal, from the browser's side.
 *
 * Everything that decides money happens on the WordPress server
 * (ComboStorePayPal): the amount is derived from the order row, and which order
 * a capture belongs to is read from PayPal's own response. These helpers only
 * carry messages:
 *
 *   paypal_config         what the browser may know - is it on, the client id
 *                         for the SDK, the currency, the SDK URL
 *   paypal_create_order   order hash in, PayPal order id out
 *   paypal_capture_order  PayPal order id in, a paid order out
 *
 * None of them takes an amount, which is why they can be called straight from
 * the storefront without a token, the same way create_order already is.
 */

/** Currencies PayPal sends without decimals - must match the server's list. */
const ZERO_DECIMAL_CURRENCIES = ['HUF', 'JPY', 'TWD'];

/**
 * One in-flight load per SDK URL. The PayPal SDK can only be on a page once
 * per currency, and React will mount this component more than once (a remount,
 * a strict-mode double effect), so the promise is what gets shared.
 */
const sdkLoads = new Map();

function apiUrl(serverUrl, route) {
	const base = String(serverUrl || '').replace(/\/?$/, '/');

	return `${base}wp-json/combo-store/v2/${route}`;
}

/**
 * POST JSON and unwrap the plugin's `{ status, message, ... }` envelope.
 *
 * The REST routes answer business failures with HTTP 200 and
 * `status: "failed"`, so the status field matters as much as the status code.
 */
async function postJson(url, body) {
	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body ?? {}),
	});

	let payload = null;

	try {
		payload = await response.json();
	} catch (error) {
		throw new Error('The store did not answer with JSON.');
	}

	if (!response.ok) {
		throw new Error(payload?.message || `The store answered ${response.status}.`);
	}

	if (payload?.status && payload.status !== 'success') {
		throw new Error(payload?.message || 'The request was refused.');
	}

	return payload;
}

/**
 * Whether PayPal is switched on, and what the SDK needs to start.
 *
 * `enabled` here is the gateway's own switch on the server - credentials
 * included - so this is the only thing worth asking before showing PayPal at
 * checkout.
 *
 * @param {string} serverUrl
 * @returns {Promise<object|null>}
 */
export async function getPayPalConfig(serverUrl) {
	const response = await fetch(apiUrl(serverUrl, 'paypal_config'), { cache: 'no-store' });

	if (!response.ok) {
		return null;
	}

	const payload = await response.json();

	return payload?.config ?? null;
}

/**
 * Start a PayPal payment for an order that already exists.
 *
 * @param {string} serverUrl
 * @param {string} orderHash
 * @returns {Promise<{paypal_order_id:string, approve_url:string, amount:string, currency:string}>}
 */
export async function createPayPalOrder(serverUrl, orderHash) {
	const payload = await postJson(apiUrl(serverUrl, 'paypal_create_order'), { order_hash: orderHash });

	if (!payload?.paypal_order_id) {
		throw new Error('PayPal did not return a payment to approve.');
	}

	return payload;
}

/**
 * Capture an approved payment. Safe to call twice - the server answers success
 * for a payment it has already recorded.
 *
 * @param {string} serverUrl
 * @param {string} paypalOrderId
 * @param {string} [orderHash] Cross-check only; the server trusts PayPal, not this.
 */
export async function capturePayPalOrder(serverUrl, paypalOrderId, orderHash) {
	return postJson(apiUrl(serverUrl, 'paypal_capture_order'), {
		paypal_order_id: paypalOrderId,
		order_hash: orderHash || '',
	});
}

/**
 * Load the PayPal JS SDK.
 *
 * @param {string} sdkUrl From `paypal_config`, so the client id and currency
 *                        are the ones the server will charge with.
 * @returns {Promise<object>} window.paypal
 */
export function loadPayPalSdk(sdkUrl) {
	if (typeof window === 'undefined') {
		return Promise.reject(new Error('The PayPal SDK can only load in a browser.'));
	}

	if (!sdkUrl) {
		return Promise.reject(new Error('PayPal is not configured.'));
	}

	if (sdkLoads.has(sdkUrl)) {
		return sdkLoads.get(sdkUrl);
	}

	const loading = new Promise((resolve, reject) => {
		if (window.paypal) {
			resolve(window.paypal);

			return;
		}

		const existing = document.querySelector(`script[data-paypal-sdk="${sdkUrl}"]`);
		const script = existing || document.createElement('script');

		const onLoad = () => {
			if (window.paypal) {
				resolve(window.paypal);
			} else {
				reject(new Error('The PayPal SDK loaded but did not start.'));
			}
		};

		script.addEventListener('load', onLoad);
		script.addEventListener('error', () => {
			/* Forget the failure so a retry can load it again. */
			sdkLoads.delete(sdkUrl);
			reject(new Error('Could not reach PayPal. Check the connection and try again.'));
		});

		if (!existing) {
			script.src = sdkUrl;
			script.async = true;
			script.dataset.paypalSdk = sdkUrl;

			document.head.appendChild(script);
		}
	});

	sdkLoads.set(sdkUrl, loading);

	return loading;
}

/**
 * What the buyer will be charged, for display only.
 *
 * The cart is in the store's currency and PayPal will not take BDT, so the
 * amount shown next to the button is converted here with the same rule the
 * server uses - divide by the rate, round up to the smallest unit - to avoid
 * promising a figure that differs from the charge. The server still decides the
 * real amount; this is a label, not an input.
 *
 * @param {number|string} total Order total, in the store's currency.
 * @param {object} config From `getPayPalConfig`.
 * @param {string} orderCurrency The store's currency, e.g. "BDT".
 * @returns {{value:string, currency:string}|null} Null when it cannot be worked
 *          out, which is the signal to say nothing rather than guess.
 */
export function paypalAmountPreview(total, config, orderCurrency) {
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

	return {
		value: (Math.ceil(value * factor) / factor).toFixed(decimals),
		currency: target,
	};
}
