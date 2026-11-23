/**
 * PortWallet, from the browser's side. Only asks whether PortWallet is usable;
 * everything that decides money is in lib/portwallet-server.js.
 *
 * @param {{fresh?:boolean}} [options] `fresh` makes the server re-read the
 *        store's settings (the dashboard, right after a save).
 * @returns {Promise<object|null>} Null when the question could not be asked.
 */
export async function getPortWalletConfig({ fresh = false } = {}) {
	try {
		const response = await fetch(
			fresh ? '/api/portwallet/config?fresh=1' : '/api/portwallet/config',
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
