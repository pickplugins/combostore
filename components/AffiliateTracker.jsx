"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { REF_PARAMS, saveAffiliateRef, readAffiliateRef, affiliateSessionId } from "../lib/affiliateRef";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
  Records a visit through an affiliate link (?ref=CODE) and remembers the
  referral for checkout. Renders nothing. Dashboard pages are skipped.

  The same code arriving again in this tab (a reload, a back button) is not
  sent twice; the server also folds repeat clicks from one visitor together.
*/
export default function AffiliateTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/dashboard")) return;

    var code = null;
    for (var key of REF_PARAMS) {
      var value = searchParams?.get(key);
      if (value && /^[A-Za-z0-9_-]{1,100}$/.test(value.trim())) {
        code = value.trim();
        break;
      }
    }
    if (!code) return;

    var seenKey = `cs_affiliate_seen_${code}`;
    try {
      if (window.sessionStorage.getItem(seenKey) && readAffiliateRef()?.code === code) return;
      window.sessionStorage.setItem(seenKey, "1");
    } catch (_e) { }

    fetch(serverUrl + "wp-json/combo-store/v2/track_affiliate_click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        landing_url: window.location.href,
        referrer_url: document.referrer || "",
        session_id: affiliateSessionId(),
      }),
      keepalive: true,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((res) => {
        if (res?.status === "success") {
          saveAffiliateRef({ code: res.affiliate_code ?? code, click_id: res.click_id, cookie_days: res.cookie_days });
        }
      })
      .catch(() => { });
  }, [pathname, searchParams]);

  return null;
}
