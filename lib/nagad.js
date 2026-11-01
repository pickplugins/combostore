/**
 * Nagad, from the browser's side.
 *
 * Everything that touches a credential happens in `lib/nagad-server.js`. This
 * helper only carries a message, so it is safe to call from a client component
 * - there is no credential here to leak.
 */

/**
 * Whether Nagad is usable, and in which mode.
 *
 * `enabled` is whether the dashboard's settings hold the merchant details and
 * two working keys, so this is worth asking before showing Nagad at checkout
 * even when the tile is switched on.
 *
 * @param {{fresh?:boolean}} [options] `fresh` makes the server re-read the
 *        store's settings instead of using its short-lived cache. The
 *        dashboard wants this right after a save; the storefront does not.
 * @returns {Promise<object|null>} Null when the question could not be asked,
 *          which is treated the same as "off".
 */
export async function getNagadConfig({ fresh = false } = {}) {
  try {
    const response = await fetch(
      fresh ? "/api/nagad/config?fresh=1" : "/api/nagad/config",
      { cache: "no-store" }
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
