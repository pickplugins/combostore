/**
 * shurjoPay, from the browser's side. Only asks whether shurjoPay is usable;
 * everything that decides money is in lib/shurjopay-server.js.
 *
 * @param {{fresh?:boolean}} [options] `fresh` makes the server re-read the
 *        store's settings (the dashboard, right after a save).
 * @returns {Promise<object|null>} Null when the question could not be asked.
 */
export async function getShurjoPayConfig({ fresh = false } = {}) {
	try {
		const response = await fetch(
			fresh ? '/api/shurjopay/config?fresh=1' : '/api/shurjopay/config',
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
