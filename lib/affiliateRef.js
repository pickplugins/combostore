/*
  Affiliate referral, as remembered in this browser.

  A visit with ?ref=CODE (or ?aff=CODE) is recorded as a click by
  AffiliateTracker, which then stores what the server answered here. Checkout
  sends it with create_order, and the server credits the order to the affiliate.

  Last click wins: a newer referral link replaces an older one. The entry lapses
  after the number of days the server sends (cookie_days).
*/

const STORAGE_KEY = "cs_affiliate_ref";

export const REF_PARAMS = ["ref", "aff"];

export function readAffiliateRef() {
  try {
    var raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    var ref = JSON.parse(raw);
    if (!ref?.code || (ref.expires && Date.now() > ref.expires)) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return ref;
  } catch (_e) {
    return null;
  }
}

export function saveAffiliateRef({ code, click_id, cookie_days }) {
  try {
    var days = parseInt(cookie_days) || 30;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      code,
      click_id: click_id ?? null,
      saved: Date.now(),
      expires: Date.now() + days * 86400000,
    }));
  } catch (_e) { }
}

/* A per-browser id, so the server can tell repeat clicks from new visitors. */
export function affiliateSessionId() {
  try {
    var key = "cs_affiliate_sid";
    var sid = window.localStorage.getItem(key);
    if (!sid) {
      sid = (window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`);
      window.localStorage.setItem(key, sid);
    }
    return sid;
  } catch (_e) {
    return "";
  }
}

/* The storefront home page with ?ref=CODE. Any storefront URL works with ?ref= added. */
export function referralLink(code) {
  var base = process.env.NEXT_PUBLIC_STORE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  return `${String(base).replace(/\/+$/, "")}/?ref=${encodeURIComponent(code ?? "")}`;
}

/* The create_order body with the referral added, when there is one. */
export function withAffiliateRef(body) {
  if (typeof window === "undefined") return body;
  var ref = readAffiliateRef();
  if (!ref) return body;
  return { ...body, affiliate_ref: ref.code, affiliate_click_id: ref.click_id ?? "" };
}
