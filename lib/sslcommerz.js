/**
 * SSLCOMMERZ, from the browser's side. Only asks whether SSLCOMMERZ is usable;
 * everything that decides money is in lib/sslcommerz-server.js.
 *
 * @param {{fresh?:boolean}} [options] `fresh` makes the server re-read the
 *        store's settings (the dashboard, right after a save).
 * @returns {Promise<object|null>} Null when the question could not be asked.
 */
export async function getSslcommerzConfig({ fresh = false } = {}) {
	try {
		const response = await fetch(
			fresh ? '/api/sslcommerz/config?fresh=1' : '/api/sslcommerz/config',
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
