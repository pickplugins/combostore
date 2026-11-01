/**
 * bKash, from the browser's side.
 *
 * Everything that touches a credential happens in `lib/bkash-server.js`. This
 * helper only carries a message, so it is safe to call from a client component
 * - there is no credential here to leak.
 */

/**
 * Whether bKash is usable, and in which mode.
 *
 * `enabled` is whether the dashboard's settings hold the four credentials bKash
 * needs, so this is worth asking before showing bKash at checkout even when the
 * tile is switched on.
 *
 * @param {{fresh?:boolean}} [options] `fresh` makes the server re-read the
 *        store's settings instead of using its short-lived cache. The
 *        dashboard wants this right after a save; the storefront does not.
 * @returns {Promise<object|null>} Null when the question could not be asked,
 *          which is treated the same as "off".
 */
export async function getBkashConfig({ fresh = false } = {}) {
  try {
    const response = await fetch(
      fresh ? "/api/bkash/config?fresh=1" : "/api/bkash/config",
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
