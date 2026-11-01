/**
 * aamarPay, from the browser's side.
 *
 * Everything that decides money happens in `lib/aamarpay-server.js`: the
 * amount is read off the order row, and whether a payment was taken is read
 * from aamarPay's own verification API. This helper only carries a message, so
 * it is safe to call from a client component - there is no credential here to
 * leak.
 */

/**
 * Whether aamarPay is usable, and in which mode.
 *
 * `enabled` is whether the dashboard's settings hold a store id and a signature
 * key, so this is worth asking before showing aamarPay at checkout even when
 * the tile is switched on.
 *
 * @param {{fresh?:boolean}} [options] `fresh` makes the server re-read the
 *        store's settings instead of using its short-lived cache. The
 *        dashboard wants this right after a save; the storefront does not.
 * @returns {Promise<object|null>} Null when the question could not be asked,
 *          which is treated the same as "off".
 */
export async function getAamarPayConfig({ fresh = false } = {}) {
	try {
		const response = await fetch(
			fresh ? '/api/aamarpay/config?fresh=1' : '/api/aamarpay/config',
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
