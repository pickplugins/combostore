'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconArrowLeft, IconArrowUpRight, IconRefresh, IconDeviceFloppy, IconMail, IconPhone, IconCalendar,
  IconShoppingCart, IconCash, IconCircleCheck, IconReceipt, IconAlertTriangle, IconArrowRight,
  IconBuildingStore, IconPackage, IconClockHour4, IconPlus, IconTruck, IconWallet,
} from "@tabler/icons-react";

import Spinner from '../../components/Spinner';
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore'
import { timeAgo, parseDate } from "./deliveryUi";
import { BADGE_BASE, FALLBACK_BADGE_CLASSES, titleCase, TOOLBAR_BUTTON, PRIMARY_BUTTON, FIELD, FIELD_INVALID, FIELD_ERROR, LABEL, CARD, FILTER_SELECT, postApi } from "./affiliateUi";


/*
	A supplier: what the store owes them, what it has bought from them and how
	often, and their supplier details (company, what they supply, payment terms,
	lead time, address, tax number). Data from ComboStoreSuppliers
	(get_supplier_overview, update_supplier_details); contact details save
	through update_user_profile, sending only name, email and phone.

	This used to be the shared user editor, whose billing address, delivery map
	and order history are a customer's, not a supplier's.
*/

export const SUPPLIER_STATES = {
  active: { label: "Active", dot: "bg-emerald-500", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  inactive: { label: "Inactive", dot: "bg-gray-400", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

/* Payment terms; `days` is how long after the purchase payment falls due. */
export const PAYMENT_TERMS = {
  advance: { label: "Pay in advance", days: 0 },
  on_delivery: { label: "Pay on delivery", days: 0 },
  net_7: { label: "Net 7 days", days: 7 },
  net_15: { label: "Net 15 days", days: 15 },
  net_30: { label: "Net 30 days", days: 30 },
  consignment: { label: "Pay after sale (consignment)", days: null },
};

/* Same tones as the Purchases list. */
export const PURCHASE_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  completed: { label: "Completed", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  hold: { label: "Hold", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
  cancelled: { label: "Cancelled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  canceled: { label: "Canceled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  refunded: { label: "Refunded", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

/* The same list as ComboStoreSuppliers::VOID_STATUSES: these count for nothing. */
export const VOID_STATUSES = ["cancelled", "canceled", "refunded", "failed"];

const RANGES = [
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
  { value: 365, label: "Last 12 months" },
  { value: 0, label: "All time" },
];

const DETAIL_KEYS = ["company", "contact_person", "supplies", "payment_terms", "lead_days", "address", "tax_id", "notes"];

/* Accounts registered by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;

function rangeDates(days) {
  if (!days) return { from_date: "", to_date: "" };
  var ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  var to = new Date(), from = new Date();
  from.setDate(to.getDate() - (days - 1));
  return { from_date: ymd(from), to_date: ymd(to) };
}

export function initialsOf(name) {
  return String(name || "").split(/\s+/).filter(Boolean).slice(0, 2).map((part) => Array.from(part)[0]).join("").toUpperCase();
}

/* Days a purchase's payment is past its due date under these terms, or 0. */
export function overdueDays(createdAt, terms) {
  var days = PAYMENT_TERMS[terms]?.days;
  var created = parseDate(createdAt);
  if (days === null || days === undefined || !created) return 0;
  var due = new Date(created.getTime() + days * 86400000);
  var late = Math.floor((Date.now() - due.getTime()) / 86400000);
  return late > 0 ? late : 0;
}

export const PurchaseStatusBadge = ({ status }) => {
  var b = PURCHASE_STATUS_BADGES[status] ?? (status ? { label: titleCase(status), classes: FALLBACK_BADGE_CLASSES } : null);
  return b ? <span className={`${BADGE_BASE} ${b.classes}`}>{b.label}</span> : <span className="text-gray-300">—</span>;
};

export const SupplierStateBadge = ({ value }) => {
  var s = SUPPLIER_STATES[value] ?? SUPPLIER_STATES.active;
  return (
    <span className={`${BADGE_BASE} ${s.classes} gap-1.5`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} /> {s.label}
    </span>
  );
};

const Kpi = ({ icon, label, value, hint, tone = "" }) => (
  <div className={`${CARD} !p-4 flex min-w-0 flex-col gap-1.5`}>
    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#634FE5]/10 text-[#634FE5]">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
    <div className={`truncate text-lg font-semibold tabular-nums ${tone || "text-gray-900"}`}>{value}</div>
    {hint && <div className="truncate text-[11px] text-gray-400">{hint}</div>}
  </div>
);

const CardTitle = ({ children, action }) => (
  <div className="mb-3 flex items-center justify-between gap-2">
    <h2 className="text-sm font-semibold text-gray-900">{children}</h2>
    {action}
  </div>
);


/* One purchase row, for both the "to pay" and the "recent" lists. */
const PurchaseRow = ({ p, wrapCurrency, formatDate, terms, showDue }) => {
  var items = parseInt(p.item_count, 10) || 0;
  var due = parseFloat(p.due) || 0;
  var late = showDue ? overdueDays(p.created_at, terms) : 0;
  var created = parseDate(p.created_at);
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 py-3">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href={`/dashboard/purchases/${p.id}`} className="font-mono font-semibold text-blue-600 hover:underline">#{p.id}</Link>
          <PurchaseStatusBadge status={p.status} />
          {late > 0 && (
            <span className={`${BADGE_BASE} bg-rose-50 text-rose-700 ring-rose-200`}>{("Overdue")} {late} {late === 1 ? ("day") : ("days")}</span>
          )}
        </div>
        <div className="truncate text-xs text-gray-600">
          {items ? (
            <>{p.first_item || ("Item")}{items > 1 ? <span className="text-gray-400"> {("and")} {items - 1} {("more")}</span> : null}</>
          ) : (
            <span className="text-gray-400">{("No items added")}</span>
          )}
        </div>
        <div className="text-[11px] text-gray-400">
          {formatDate(p.created_at, "DD-MM-YYYY")}{created ? ` · ${timeAgo(created)}` : ""}
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-0.5">
        <span className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(parseFloat(p.total_amount) || 0)}</span>
        {showDue ? (
          <span className="text-[11px] tabular-nums text-rose-700">{wrapCurrency(due)} {("to pay")}{parseFloat(p.paid) > 0 ? <span className="text-gray-400"> · {wrapCurrency(parseFloat(p.paid))} {("paid")}</span> : null}</span>
        ) : (
          <span className={`text-[11px] ${due > 0 ? "text-rose-700" : "text-emerald-700"}`}>
            {VOID_STATUSES.includes(p.status)
              ? <span className="text-gray-400">{("not counted")}</span>
              : due > 0 ? `${wrapCurrency(due)} ${("due")}` : ("paid")}
          </span>
        )}
      </div>
    </div>
  );
};


const SupplierEdit = ({ id, variant = "page" }) => {

  const { token, addNotification } = useCounterStore();
  const { wrapCurrency, formatDate } = useUtilsStore();
  const router = useRouter();
  const drawer = variant === "drawer";

  var [days, setdays] = useState(90);
  var [data, setdata] = useState(null);
  var [loading, setloading] = useState(false);
  var [loadError, setloadError] = useState(false);

  var [details, setdetails] = useState(null);
  var [savingDetails, setsavingDetails] = useState(false);
  var [savingState, setsavingState] = useState(false);

  var [profile, setprofile] = useState(null);
  var [profileForm, setprofileForm] = useState(null);
  var [savingProfile, setsavingProfile] = useState(false);
  /* The server's refusal of the phone number (update_user_profile field: "phone"), shown under the field. */
  var [phoneError, setphoneError] = useState(null);

  var [creating, setcreating] = useState(false);

  function load() {
    if (!token || !id) return;
    setloading(true);
    setloadError(false);
    postApi("get_supplier_overview", token, { supplier_id: id, ...rangeDates(days) })
      .then((res) => {
        setloading(false);
        if (res?.status !== "success") { setloadError(true); return; }
        setdata(res);
        /* Only filled once, so changing the date range keeps unsaved edits. */
        setdetails((prev) => prev ?? Object.fromEntries(DETAIL_KEYS.map((k) => [k, res.supplier?.[k] ?? ""])));
      })
      .catch(() => { setloading(false); setloadError(true); });
  }

  function loadProfile() {
    if (!token || !id) return;
    postApi("get_customer", token, { id })
      .then((res) => {
        var c = res?.customer ?? null;
        setprofile(c);
        setprofileForm(c ? { first_name: c.first_name ?? "", last_name: c.last_name ?? "", name: c.name ?? "", email: c.email ?? "", phone: c.phone ?? "" } : null);
      })
      .catch(() => { });
  }

  useEffect(load, [token, id, days]);
  useEffect(loadProfile, [token, id]);

  function setState(value) {
    if (value === data?.supplier?.state) return;
    setsavingState(true);
    postApi("update_supplier_details", token, { id, state: value })
      .then((res) => {
        setsavingState(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "The supplier could not be updated." });
          return;
        }
        setdata((prev) => ({ ...prev, supplier: { ...prev.supplier, state: value } }));
        addNotification({ type: "success", title: "Supplier", content: `Marked ${SUPPLIER_STATES[value].label.toLowerCase()}.` });
      })
      .catch((error) => { setsavingState(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  function saveDetails() {
    setsavingDetails(true);
    postApi("update_supplier_details", token, { id, ...details })
      .then((res) => {
        setsavingDetails(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "Supplier details could not be saved." });
          return;
        }
        setdata((prev) => ({ ...prev, supplier: { ...prev.supplier, ...res.details } }));
        setdetails(Object.fromEntries(DETAIL_KEYS.map((k) => [k, res.details?.[k] ?? ""])));
        addNotification({ type: "success", title: "Saved", content: "Supplier details updated." });
      })
      .catch((error) => { setsavingDetails(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  function saveProfile() {
    setsavingProfile(true);
    postApi("update_user_profile", token, { id, userData: profileForm })
      .then((res) => {
        setsavingProfile(false);
        if (res?.error) {
          if (res?.field === "phone") setphoneError(res?.message || "This phone number can't be used.");
          else addNotification({ type: "error", title: "Not saved", content: res?.message ?? "The contact details could not be saved." });
          return;
        }
        setphoneError(null);
        addNotification({ type: "success", title: "Saved", content: "Contact details updated." });
        loadProfile();
        load();
      })
      .catch((error) => { setsavingProfile(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  /* A new purchase with this supplier already on it, opened to add the items. */
  function newPurchase() {
    var s = data?.supplier;
    var email = s?.email && !PHONE_EMAIL.test(s.email) ? s.email : "";
    setcreating(true);
    postApi("create_purchase", token, {
      supplier_id: id,
      billing_name: s?.company || s?.name || "",
      billing_phone: profile?.phone || s?.phone || "",
      billing_email: email,
      billing_address: s?.address || "",
    })
      .then((res) => {
        setcreating(false);
        var newId = parseInt(res?.id, 10);
        if (res?.status !== "success" || !(newId > 0)) {
          addNotification({ type: "error", title: "Purchase not added", content: res?.message ?? "The purchase could not be added." });
          return;
        }
        addNotification({ type: "success", title: "Purchase added", content: `Purchase #${newId} created for this supplier. Add the items and payment, then save.` });
        router.push(`/dashboard/purchases/${newId}`);
      })
      .catch((error) => { setcreating(false); addNotification({ type: "error", title: "Purchase not added", content: error.message }); });
  }

  const supplier = data?.supplier;
  const detailsDirty = useMemo(() => supplier && details && DETAIL_KEYS.some((k) => String(details[k] ?? "") !== String(supplier[k] ?? "")), [supplier, details]);
  const profileDirty = useMemo(() => profile && profileForm && Object.keys(profileForm).some((k) => String(profileForm[k] ?? "") !== String(profile[k] ?? "")), [profile, profileForm]);
  var setD = (key) => (ev) => setdetails({ ...details, [key]: ev.target.value });
  var setP = (key) => (ev) => setprofileForm({ ...profileForm, [key]: ev.target.value });

  const wrap = drawer ? "flex w-full flex-col gap-4" : "page-shell";

  if (loadError && !data) {
    return (
      <div className={wrap}>
        <div className={`${CARD} flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500`}>
          {("This supplier could not be loaded.")}
          <div className="flex gap-2">
            <Link href="/dashboard/suppliers" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All suppliers")}</Link>
            <button type="button" className={TOOLBAR_BUTTON} onClick={load}><IconRefresh size={16} /> {("Try again")}</button>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className={wrap}><div className="flex items-center gap-2 text-sm text-gray-500"><Spinner size={16} /> {("Loading supplier")}</div></div>;
  }

  const counts = data.counts;
  const lastPurchase = parseDate(supplier.last_purchase);
  const phone = profile?.phone || supplier.phone;
  const name = supplier.name || `Supplier #${id}`;
  const terms = supplier.payment_terms;
  const overdue = data.unpaid.filter((p) => overdueDays(p.created_at, terms) > 0);
  const overdueTotal = overdue.reduce((sum, p) => sum + (parseFloat(p.due) || 0), 0);
  const purchasesLink = `/dashboard/purchases?supplier_id=${id}&supplier_name=${encodeURIComponent(supplier.company || name)}`;

  return (
    <div className={wrap}>

      {/* ---------- Header ---------- */}
      <div className={CARD}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-500">
              {initialsOf(supplier.company || name) || <IconBuildingStore size={20} />}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-xl font-semibold text-gray-900">{supplier.company || name}</h1>
                <SupplierStateBadge value={supplier.state} />
              </div>
              {supplier.company && (
                <div className="mt-0.5 text-xs text-gray-500">{supplier.contact_person || name}</div>
              )}
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                {phone && <a href={`tel:${phone}`} className="inline-flex items-center gap-1 tabular-nums hover:text-gray-800"><IconPhone size={13} /> {phone}</a>}
                {supplier.email && !PHONE_EMAIL.test(supplier.email) && <a href={`mailto:${supplier.email}`} className="inline-flex items-center gap-1 hover:text-gray-800"><IconMail size={13} /> {supplier.email}</a>}
                {supplier.supplies && <span className="inline-flex items-center gap-1"><IconPackage size={13} /> {supplier.supplies}</span>}
                {terms && PAYMENT_TERMS[terms] && <span className="inline-flex items-center gap-1"><IconWallet size={13} /> {PAYMENT_TERMS[terms].label}</span>}
                {supplier.lead_days !== "" && supplier.lead_days !== undefined && <span className="inline-flex items-center gap-1"><IconTruck size={13} /> {supplier.lead_days === "0" ? ("Same-day delivery") : `${supplier.lead_days} ${supplier.lead_days === "1" ? ("day") : ("days")} ${("to deliver")}`}</span>}
                <span className="inline-flex items-center gap-1"><IconShoppingCart size={13} /> {lastPurchase ? `${("Last purchase")} ${timeAgo(lastPurchase)}` : ("No purchases yet")}</span>
                {supplier.registered && <span className="inline-flex items-center gap-1"><IconCalendar size={13} /> {("Added")} {formatDate(supplier.registered, "DD-MM-YYYY")}</span>}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {drawer ? (
              <Link href={`/dashboard/suppliers/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
            ) : (
              <Link href="/dashboard/suppliers" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All suppliers")}</Link>
            )}
            <button type="button" className={PRIMARY_BUTTON} disabled={creating} onClick={newPurchase}>
              <IconPlus size={16} /> {creating ? ("Creating...") : ("New purchase")}
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
          <span className="text-xs text-gray-500">{("Status")}</span>
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-0.5">
            {Object.entries(SUPPLIER_STATES).map(([value, s]) => (
              <button key={value} type="button" disabled={savingState} onClick={() => setState(value)}
                className={`inline-flex items-center gap-1.5 !rounded-md !border-0 px-3 py-1 text-xs font-medium !shadow-none transition-colors disabled:opacity-60 ${supplier.state === value ? "!bg-white !text-gray-900 ring-1 ring-gray-200" : "!bg-transparent !text-gray-500 hover:!text-gray-800"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} /> {s.label}
              </button>
            ))}
          </div>
          {savingState && <Spinner size={14} />}
          {supplier.state === "inactive" && <span className="text-xs text-gray-400">{("Not buying from them at the moment.")}</span>}
          {!supplier.is_supplier && (
            <span className="inline-flex items-center gap-1 text-xs text-amber-700"><IconAlertTriangle size={14} /> {("This user doesn't have the supplier role, so they won't show in the supplier picker on purchases.")}</span>
          )}
        </div>
      </div>

      {/* ---------- What we owe ---------- */}
      <div className={CARD}>
        <CardTitle action={
          data.due > 0
            ? <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-800 ring-1 ring-inset ring-rose-200"><IconCash size={14} /> {wrapCurrency(data.due)} {("to pay")}</span>
            : null
        }>
          {("To pay")} <span className="font-normal text-gray-400">· {data.unpaid.length}</span>
        </CardTitle>
        {overdue.length > 0 && (
          <div className="mb-2 flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-xs text-rose-800">
            <IconAlertTriangle size={14} className="shrink-0" />
            {overdue.length} {overdue.length === 1 ? ("purchase is") : ("purchases are")} {("past the")} {PAYMENT_TERMS[terms].label.toLowerCase()} {("terms")}: {wrapCurrency(overdueTotal)} {("overdue")}.
          </div>
        )}
        {data.unpaid.length ? (
          <div className="flex flex-col divide-y divide-gray-100">
            {data.unpaid.map((p) => <PurchaseRow key={p.id} p={p} wrapCurrency={wrapCurrency} formatDate={formatDate} terms={terms} showDue />)}
          </div>
        ) : (
          <p className="text-xs text-gray-400">{counts.total || data.open_all ? ("Nothing owed to this supplier.") : ("Nothing owed. Purchases you record against this supplier show here until they are paid.")}</p>
        )}
        {!terms && data.unpaid.length > 0 && (
          <p className="mt-2 text-[11px] text-gray-400">{("Set payment terms in Supplier details to see which purchases are overdue.")}</p>
        )}
      </div>

      {/* ---------- Activity ---------- */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-gray-900">{("Purchasing")}</h2>
        <div className="flex items-center gap-2">
          {loading && <Spinner size={16} />}
          <select className={FILTER_SELECT} value={days} onChange={(ev) => setdays(parseInt(ev.target.value))}>
            {RANGES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Kpi icon={<IconReceipt size={14} />} label={("Purchases")} value={counts.total} hint={[counts.open ? `${counts.open} open` : null, counts.void ? `${counts.void} cancelled` : null].filter(Boolean).join(" · ") || null} />
        <Kpi icon={<IconShoppingCart size={14} />} label={("Spent")} value={wrapCurrency(data.spent)} hint={("cancelled not counted")} />
        <Kpi icon={<IconCircleCheck size={14} />} label={("Paid")} value={wrapCurrency(data.paid)} tone="text-emerald-700" hint={data.spent > data.paid ? `${wrapCurrency(Math.max(data.spent - data.paid, 0))} ${("of these unpaid")}` : null} />
        <Kpi icon={<IconCash size={14} />} label={("Avg. purchase")} value={data.avg_value === null ? "—" : wrapCurrency(data.avg_value)} />
        <Kpi icon={<IconClockHour4 size={14} />} label={("Owed, all time")} value={wrapCurrency(data.due)} tone={data.due > 0 ? "text-rose-700" : ""} hint={data.open_all ? `${data.open_all} ${("open purchases")}` : null} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {/* ---------- Left ---------- */}
        <div className="flex min-w-0 flex-col gap-4 lg:col-span-2">
          <div className={CARD}>
            <CardTitle action={<Link href={purchasesLink} className="inline-flex items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">{("All their purchases")} <IconArrowRight size={14} /></Link>}>
              {("Recent purchases")}
            </CardTitle>
            {data.recent.length ? (
              <div className="flex flex-col divide-y divide-gray-100">
                {data.recent.map((p) => <PurchaseRow key={p.id} p={p} wrapCurrency={wrapCurrency} formatDate={formatDate} terms={terms} />)}
              </div>
            ) : (
              <p className="text-xs text-gray-400">{days ? ("No purchases in this range.") : ("No purchases yet.")}</p>
            )}
          </div>

          <div className={CARD}>
            <CardTitle>{("Products bought")}</CardTitle>
            {data.products.length ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-[11px] font-medium uppercase tracking-wide text-gray-400">
                      <th className="pb-2 pr-3 font-medium">{("Product")}</th>
                      <th className="pb-2 px-3 text-right font-medium">{("Qty")}</th>
                      <th className="pb-2 px-3 text-right font-medium">{("Last price")}</th>
                      <th className="pb-2 pl-3 text-right font-medium">{("Total")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.products.map((item, i) => (
                      <tr key={`${item.product_id}-${i}`}>
                        <td className="py-2 pr-3">
                          {parseInt(item.product_id, 10) > 0 ? (
                            <Link href={`/dashboard/products/${item.product_id}`} className="text-gray-800 hover:text-blue-600 hover:underline">{item.product_name || `Product #${item.product_id}`}</Link>
                          ) : (
                            <span className="text-gray-800">{item.product_name || ("Unnamed item")}</span>
                          )}
                          <div className="text-[11px] text-gray-400">{item.purchases} {parseInt(item.purchases, 10) === 1 ? ("purchase") : ("purchases")}</div>
                        </td>
                        <td className="py-2 px-3 text-right tabular-nums text-gray-700">{parseInt(item.quantity, 10) || 0}</td>
                        <td className="py-2 px-3 text-right tabular-nums text-gray-700">{wrapCurrency(parseFloat(item.last_price) || 0)}</td>
                        <td className="py-2 pl-3 text-right font-medium tabular-nums text-gray-900">{wrapCurrency(parseFloat(item.value) || 0)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-xs text-gray-400">{days ? ("No products bought in this range.") : ("No products bought yet.")}</p>
            )}
          </div>

          {Object.keys(data.statuses ?? {}).length > 0 && (
            <div className={CARD}>
              <CardTitle>{("By status")}</CardTitle>
              <div className="flex flex-wrap gap-3">
                {Object.entries(data.statuses).sort((a, b) => b[1] - a[1]).map(([status, n]) => (
                  <span key={status} className="inline-flex items-center gap-1.5"><PurchaseStatusBadge status={status} /> <span className="text-xs tabular-nums text-gray-500">{n}</span></span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ---------- Right ---------- */}
        <div className="flex min-w-0 flex-col gap-4">

          {details && (
            <div className={CARD}>
              <CardTitle>{("Supplier details")}</CardTitle>
              <div className="flex flex-col gap-3">
                <div>
                  <label className={LABEL}>{("Company")}</label>
                  <input className={FIELD} value={details.company} onChange={setD("company")} placeholder={("Business name")} />
                </div>
                <div>
                  <label className={LABEL}>{("Contact person")}</label>
                  <input className={FIELD} value={details.contact_person} onChange={setD("contact_person")} placeholder={("Who you deal with")} />
                </div>
                <div>
                  <label className={LABEL}>{("Supplies")}</label>
                  <input className={FIELD} value={details.supplies} onChange={setD("supplies")} placeholder={("e.g. Baby diapers, bike parts")} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LABEL}>{("Payment terms")}</label>
                    <select className={FIELD} value={details.payment_terms} onChange={setD("payment_terms")}>
                      <option value="">{("Not set")}</option>
                      {Object.entries(PAYMENT_TERMS).map(([v, t]) => <option key={v} value={v}>{t.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>{("Lead time (days)")}</label>
                    <input type="number" min={0} max={365} className={FIELD} value={details.lead_days} onChange={setD("lead_days")} placeholder={("e.g. 3")} />
                  </div>
                </div>
                <div>
                  <label className={LABEL}>{("Address")}</label>
                  <textarea rows={2} className={FIELD} value={details.address} onChange={setD("address")} placeholder={("Warehouse or office")} />
                </div>
                <div>
                  <label className={LABEL}>{("Tax / trade licence no.")}</label>
                  <input className={`${FIELD} font-mono`} value={details.tax_id} onChange={setD("tax_id")} />
                </div>
                <div>
                  <label className={LABEL}>{("Notes")}</label>
                  <textarea rows={3} className={FIELD} value={details.notes} onChange={setD("notes")} placeholder={("Minimum order, delivery days, anything the team should know")} />
                  <p className="mt-1 text-[11px] text-gray-400">{("Only staff see these.")}</p>
                </div>
                <div className="flex justify-end">
                  <button type="button" className={PRIMARY_BUTTON} disabled={savingDetails || !detailsDirty} onClick={saveDetails}>
                    <IconDeviceFloppy size={16} /> {savingDetails ? ("Saving...") : ("Save details")}
                  </button>
                </div>
              </div>
            </div>
          )}

          {profileForm && (
            <div className={CARD}>
              <CardTitle>{("Contact details")}</CardTitle>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LABEL}>{("First name")}</label>
                    <input className={FIELD} value={profileForm.first_name} onChange={setP("first_name")} />
                  </div>
                  <div>
                    <label className={LABEL}>{("Last name")}</label>
                    <input className={FIELD} value={profileForm.last_name} onChange={setP("last_name")} />
                  </div>
                </div>
                <div>
                  <label className={LABEL}>{("Display name")}</label>
                  <input className={FIELD} value={profileForm.name} onChange={setP("name")} />
                </div>
                <div>
                  <label className={LABEL}>{("Phone")}</label>
                  <input type="tel" className={phoneError ? FIELD_INVALID : FIELD} aria-invalid={phoneError ? true : undefined} aria-describedby={phoneError ? "profile-phone-error" : undefined} value={profileForm.phone} onChange={(e) => { setphoneError(null); setP("phone")(e); }} />
                  {phoneError && <p id="profile-phone-error" role="alert" className={FIELD_ERROR}>{phoneError}</p>}
                </div>
                <div>
                  <label className={LABEL}>{("Email")}</label>
                  <input type="email" className={FIELD} value={profileForm.email} onChange={setP("email")} />
                  {PHONE_EMAIL.test(profileForm.email) && <p className="mt-1 text-[11px] text-gray-400">{("Registered by phone, so this is a placeholder address.")}</p>}
                </div>
                <div className="flex justify-end">
                  <button type="button" className={PRIMARY_BUTTON} disabled={savingProfile || !profileDirty} onClick={saveProfile}>
                    <IconDeviceFloppy size={16} /> {savingProfile ? ("Saving...") : ("Save contact details")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplierEdit;
