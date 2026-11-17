"use client";
import React, { useEffect, useState } from "react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
  Shared by the Affiliates dashboard, sales, clicks and payouts screens.
  Class strings are the ones the Expenses / Orders screens use, so the
  affiliate screens look the same.
*/

export const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

export const FALLBACK_BADGE_CLASSES = "bg-gray-100 text-gray-600 ring-gray-200";

export const SALE_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  approved: { label: "Approved", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  paid: { label: "Paid", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  rejected: { label: "Rejected", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

export const PAYOUT_STATUS_BADGES = {
  requested: { label: "Requested", classes: "bg-violet-50 text-violet-700 ring-violet-200" },
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  paid: { label: "Paid", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  cancelled: { label: "Cancelled", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

export const toOptions = (badges) => Object.entries(badges).map(([value, b]) => ({ value, label: b.label }));

export const titleCase = (value) => String(value || "").replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const StatusBadge = ({ badges, status }) => {
  var key = status || "pending";
  var badge = badges[key] ?? { label: titleCase(key), classes: FALLBACK_BADGE_CLASSES };
  return <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>;
};

/* Marks a payout that began as the affiliate's request (payouts.requested_at). */
export const RequestedTag = ({ at }) => (
  <span title={at ? `Requested ${at}` : undefined} className="inline-flex items-center whitespace-nowrap rounded-full bg-violet-50/60 px-2 py-0.5 text-[10px] font-medium text-violet-600 ring-1 ring-inset ring-violet-100">
    From affiliate request
  </span>
);

export const ICON_BUTTON =
  "inline-flex h-8 min-w-8 px-1.5 items-center justify-center rounded-lg border border-transparent !py-0 text-gray-400 !shadow-none transition-colors hover:border-gray-300 hover:!bg-gray-100 hover:text-gray-900 cursor-pointer";

export const FILTER_SELECT =
  "xl:w-48 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

export const FILTER_CHIP =
  "flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700";

export const FILTER_CHIP_X =
  "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800";

export const MENU_ITEM =
  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

export const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";

export const PRIMARY_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-50 cursor-pointer";

export const DANGER_BUTTON =
  "inline-flex !h-8 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50";

export const DATE_INPUT =
  "w-44 !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 focus:!border-[#634FE5] focus:!outline-none";

export const FIELD =
  "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";

export const LABEL = "mb-1.5 block text-sm font-medium text-gray-700";

export const CARD = "rounded-xl border border-gray-200 bg-white p-5 shadow-sm";

/* Writes are for these roles; affiliates get the same screens read-only. */
export const MANAGER_ROLES = ["administrator", "store_manager"];
export const isManager = (userDataX) => (userDataX?.roles ?? []).some((r) => MANAGER_ROLES.includes(r));


/* The query keeps dates as "yyyy-MM-dd"; react-datepicker needs a Date. */
export function toPickerDate(value) {
  if (!value) return null;
  var date = new Date(String(value).replace(" ", "T"));
  return isNaN(date) ? null : date;
}


/*
  POST to a combo-store/v2 route. Resolves with the JSON body, rejects with
  an Error whose message is fit for a notification.
*/
export async function postApi(route, token, body = {}) {
  var response = await fetch(serverUrl + "wp-json/combo-store/v2/" + route, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });

  var data = null;
  try { data = await response.json(); } catch (_e) { data = null; }

  if (!response.ok) {
    throw new Error(data?.message ?? (response.status === 403 ? "You are not allowed to do that." : `Server answered ${response.status}.`));
  }

  return data;
}


/* Who the row belongs to: name, then code / email underneath. */
export const AffiliateCell = ({ entry }) => (
  <div className="flex min-w-0 flex-col gap-0.5">
    <span className="truncate text-sm font-medium text-gray-800">
      {entry?.affiliate_name || <span className="font-normal text-gray-400">{`Affiliate #${entry?.affiliate_id ?? "?"}`}</span>}
    </span>
    <span className="truncate text-[11px] text-gray-500">
      {[entry?.affiliate_code, entry?.affiliate_email].filter(Boolean).join(" · ")}
    </span>
  </div>
);


/*
  Affiliate accounts for a <select>. Loaded once per mount, managers only
  (the route is closed to affiliates, who have no use for the filter).
*/
export function useAffiliateAccountsInfo(token, enabled) {
  var [info, setinfo] = useState({ accounts: [], minPayout: 0 });

  useEffect(() => {
    if (!token || !enabled) return;
    var alive = true;
    postApi("get_affiliate_accounts", token, {})
      .then((res) => {
        if (alive) setinfo({ accounts: Array.isArray(res?.accounts) ? res.accounts : [], minPayout: parseFloat(res?.min_payout) || 0 });
      })
      .catch(() => { });
    return () => { alive = false; };
  }, [token, enabled]);

  return info;
}

export function useAffiliateAccounts(token, enabled) {
  return useAffiliateAccountsInfo(token, enabled).accounts;
}

/*
  ?affiliate_id=N on a list page (the affiliate page links there) pre-sets
  the affiliate filter. Read after mount from window.location rather than
  useSearchParams, which would need a Suspense boundary around each page.
*/
export function useAffiliateIdFromUrl(apply) {
  useEffect(() => {
    try {
      var value = new URLSearchParams(window.location.search).get("affiliate_id");
      if (value && /^\d+$/.test(value)) apply(value);
    } catch (_e) { }
  }, []);
}

export const accountLabel =(a) => `${a?.affiliate_name || "Affiliate #" + a?.id}${a?.affiliate_code ? ` (${a.affiliate_code})` : ""}`;

export const AffiliateSelect = ({ accounts, value, onChange, className = FILTER_SELECT, placeholder = "All affiliates" }) => (
  <select className={className} value={value ?? ""} onChange={(ev) => onChange(ev.target.value)}>
    <option value="">{placeholder}</option>
    {accounts.map((a) => (
      <option key={a.id} value={a.id}>{accountLabel(a)}</option>
    ))}
  </select>
);
