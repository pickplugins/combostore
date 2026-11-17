'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Link from "next/link";
import {
  IconArrowLeft, IconArrowUpRight, IconRefresh, IconDeviceFloppy, IconMail, IconPhone, IconCalendar,
  IconShoppingBag, IconCircleCheck, IconHourglass, IconAlertTriangle, IconArrowRight, IconActivity,
  IconUserPlus, IconX, IconClock, IconMapPin, IconCash, IconPercentage, IconPackage, IconTicket, IconTruckLoading,
} from "@tabler/icons-react";

import Spinner from '../../components/Spinner';
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore'
import { timeAgo, parseDate } from "./deliveryUi";
import { BADGE_BASE, FALLBACK_BADGE_CLASSES, titleCase, TOOLBAR_BUTTON, PRIMARY_BUTTON, FIELD, LABEL, CARD, FILTER_SELECT, postApi } from "./affiliateUi";
import { PasswordCard } from "./AffiliateEdit";
import { duration } from "./SupportAgentEdit";


/*
	A store manager: the orders assigned to them now (with open orders nobody
	has, to assign from), how those orders went, what they have added to the
	store (products, coupons, purchases), and their manager details
	(availability, area, shift, capacity). Data from ComboStoreStoreManagers
	(get_store_manager_overview, update_store_manager_details, assign_order);
	contact details save through update_user_profile, sending only name, email
	and phone.

	A store manager sees only the orders assigned to them (get_orders), so the
	queue here is exactly their Orders list. This used to be the shared user
	editor (via the rider screen), whose billing address and delivery map are a
	customer's.
*/

export const AVAILABILITY = {
  on_duty: { label: "On duty", dot: "bg-emerald-500", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  busy: { label: "Busy", dot: "bg-amber-500", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  off_duty: { label: "Off duty", dot: "bg-gray-400", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

/* Same tones as the Orders list. */
const ORDER_STATUS_BADGES = {
  confirmed: { label: "Confirmed", classes: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  completed: { label: "Completed", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  incomplete: { label: "Incomplete", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
  scheduled: { label: "Scheduled", classes: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200" },
  cancelled: { label: "Cancelled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  canceled: { label: "Canceled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  refunded: { label: "Refunded", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  hold: { label: "Hold", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
  delivered: { label: "Delivered", classes: "bg-lime-50 text-lime-700 ring-lime-200" },
};

export const OrderStatusBadge = ({ status }) => {
  var b = ORDER_STATUS_BADGES[status] ?? (status ? { label: titleCase(status), classes: FALLBACK_BADGE_CLASSES } : null);
  return b ? <span className={`${BADGE_BASE} ${b.classes}`}>{b.label}</span> : <span className="text-gray-300">—</span>;
};

export const AvailabilityBadge = ({ value }) => {
  var a = AVAILABILITY[value] ?? AVAILABILITY.on_duty;
  return (
    <span className={`${BADGE_BASE} ${a.classes} gap-1.5`}>
      <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} /> {a.label}
    </span>
  );
};

const RANGES = [
  { value: 7, label: "Last 7 days" },
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
  { value: 0, label: "All time" },
];

const DETAIL_KEYS = ["area", "shift", "max_open", "notes"];

/* Accounts registered by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;

function rangeDates(days) {
  if (!days) return { from_date: "", to_date: "" };
  var ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  var to = new Date(), from = new Date();
  from.setDate(to.getDate() - (days - 1));
  return { from_date: ymd(from), to_date: ymd(to) };
}

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

const SMALL_BUTTON =
  "inline-flex !h-7 shrink-0 items-center gap-1 !rounded-md !border !border-gray-300 !bg-white !px-2 !py-0 !text-xs !font-medium !text-gray-700 !shadow-none transition-colors hover:!bg-gray-50 disabled:opacity-50 cursor-pointer";


/* One order: id, status, customer, amount and age. */
const OrderRow = ({ o, wrapCurrency, action }) => {
  var created = parseDate(o.created_at);
  return (
    <div className="flex items-start justify-between gap-3 py-3">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href={`/dashboard/orders/${o.id}`} className="font-mono text-xs font-semibold text-blue-600 hover:underline">#{o.id}</Link>
          <OrderStatusBadge status={o.status} />
          {o.payment_status === "paid" && <span className={`${BADGE_BASE} bg-emerald-50 text-emerald-700 ring-emerald-200`}>{("Paid")}</span>}
        </div>
        {(o.billing_name || o.billing_phone) && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-gray-700">
            {o.billing_name && <span className="font-medium">{o.billing_name}</span>}
            {o.billing_phone && <a href={`tel:${o.billing_phone}`} className="inline-flex items-center gap-1 tabular-nums hover:text-blue-600"><IconPhone size={12} /> {o.billing_phone}</a>}
          </div>
        )}
        <div className="text-[11px] text-gray-400">{("Placed")} {created ? timeAgo(created) : "—"}</div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(parseFloat(o.total_amount) || 0)}</span>
        {action}
      </div>
    </div>
  );
};


const StoreManagerEdit = ({ id, variant = "page" }) => {

  const { token, addNotification } = useCounterStore();
  const { wrapCurrency, formatDate } = useUtilsStore();
  const drawer = variant === "drawer";

  var [days, setdays] = useState(30);
  var [data, setdata] = useState(null);
  var [loading, setloading] = useState(false);
  var [loadError, setloadError] = useState(false);

  var [details, setdetails] = useState(null);
  var [savingDetails, setsavingDetails] = useState(false);
  var [savingAvailability, setsavingAvailability] = useState(false);
  var [assigning, setassigning] = useState(null);

  var [profile, setprofile] = useState(null);
  var [profileForm, setprofileForm] = useState(null);
  var [savingProfile, setsavingProfile] = useState(false);

  function load() {
    if (!token || !id) return;
    setloading(true);
    setloadError(false);
    postApi("get_store_manager_overview", token, { manager_id: id, ...rangeDates(days) })
      .then((res) => {
        setloading(false);
        if (res?.status !== "success") { setloadError(true); return; }
        setdata(res);
        /* Only filled once, so changing the date range keeps unsaved edits. */
        setdetails((prev) => prev ?? Object.fromEntries(DETAIL_KEYS.map((k) => [k, res.manager?.[k] ?? ""])));
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

  function setAvailability(value) {
    if (value === data?.manager?.availability) return;
    setsavingAvailability(true);
    postApi("update_store_manager_details", token, { id, availability: value })
      .then((res) => {
        setsavingAvailability(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "Availability could not be saved." });
          return;
        }
        setdata((prev) => ({ ...prev, manager: { ...prev.manager, availability: value } }));
        addNotification({ type: "success", title: "Availability", content: `Marked ${AVAILABILITY[value].label.toLowerCase()}.` });
      })
      .catch((error) => { setsavingAvailability(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  function assign(orderId, on) {
    setassigning(orderId);
    postApi("assign_order", token, { order_id: orderId, manager_id: id, assign: on })
      .then((res) => {
        setassigning(null);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not assigned", content: res?.message ?? "The order could not be assigned." });
          return;
        }
        addNotification({ type: "success", title: on ? "Order assigned" : "Order unassigned", content: on ? `Order #${orderId} is now in ${data?.manager?.name || "this manager"}'s list.` : `Order #${orderId} was taken off their list.` });
        load();
      })
      .catch((error) => { setassigning(null); addNotification({ type: "error", title: "Not assigned", content: error.message }); });
  }

  function saveDetails() {
    setsavingDetails(true);
    postApi("update_store_manager_details", token, { id, ...details })
      .then((res) => {
        setsavingDetails(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "Manager details could not be saved." });
          return;
        }
        setdata((prev) => ({ ...prev, manager: { ...prev.manager, ...res.details } }));
        setdetails(Object.fromEntries(DETAIL_KEYS.map((k) => [k, res.details?.[k] ?? ""])));
        addNotification({ type: "success", title: "Saved", content: "Manager details updated." });
      })
      .catch((error) => { setsavingDetails(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  function saveProfile() {
    setsavingProfile(true);
    postApi("update_user_profile", token, { id, userData: profileForm })
      .then((res) => {
        setsavingProfile(false);
        if (res?.error) {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "The contact details could not be saved." });
          return;
        }
        addNotification({ type: "success", title: "Saved", content: "Contact details updated." });
        loadProfile();
        load();
      })
      .catch((error) => { setsavingProfile(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  const manager = data?.manager;
  const detailsDirty = useMemo(() => manager && details && DETAIL_KEYS.some((k) => String(details[k] ?? "") !== String(manager[k] ?? "")), [manager, details]);
  const profileDirty = useMemo(() => profile && profileForm && Object.keys(profileForm).some((k) => String(profileForm[k] ?? "") !== String(profile[k] ?? "")), [profile, profileForm]);
  var setD = (key) => (ev) => setdetails({ ...details, [key]: ev.target.value });
  var setP = (key) => (ev) => setprofileForm({ ...profileForm, [key]: ev.target.value });

  const wrap = drawer ? "flex w-full flex-col gap-4" : "page-shell";

  if (loadError && !data) {
    return (
      <div className={wrap}>
        <div className={`${CARD} flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500`}>
          {("This store manager could not be loaded.")}
          <div className="flex gap-2">
            <Link href="/dashboard/store-managers" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All store managers")}</Link>
            <button type="button" className={TOOLBAR_BUTTON} onClick={load}><IconRefresh size={16} /> {("Try again")}</button>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className={wrap}><div className="flex items-center gap-2 text-sm text-gray-500"><Spinner size={16} /> {("Loading store manager")}</div></div>;
  }

  const lastActive = parseDate(manager.last_activity);
  const phone = profile?.phone || manager.phone;
  const queue = data.queue;
  const queueValue = queue.reduce((sum, o) => sum + (parseFloat(o.total_amount) || 0), 0);
  const capacity = parseInt(manager.max_open, 10) || 0;
  const loadPct = capacity ? Math.min(100, Math.round(queue.length / capacity * 100)) : null;
  const overCapacity = capacity > 0 && queue.length >= capacity;
  const authored = data.authored;

  return (
    <div className={wrap}>

      {/* ---------- Header ---------- */}
      <div className={CARD}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {manager.avatar && <img src={manager.avatar} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full bg-gray-100" />}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-xl font-semibold text-gray-900">{manager.name || `Store manager #${id}`}</h1>
                <AvailabilityBadge value={manager.availability} />
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                {manager.email && !PHONE_EMAIL.test(manager.email) && <a href={`mailto:${manager.email}`} className="inline-flex items-center gap-1 hover:text-gray-800"><IconMail size={13} /> {manager.email}</a>}
                {phone && <a href={`tel:${phone}`} className="inline-flex items-center gap-1 tabular-nums hover:text-gray-800"><IconPhone size={13} /> {phone}</a>}
                {manager.area && <span className="inline-flex items-center gap-1"><IconMapPin size={13} /> {manager.area}</span>}
                {manager.shift && <span className="inline-flex items-center gap-1"><IconClock size={13} /> {manager.shift}</span>}
                <span className="inline-flex items-center gap-1"><IconActivity size={13} /> {lastActive ? `${("Last active")} ${timeAgo(lastActive)}` : ("No activity yet")}</span>
                {manager.registered && <span className="inline-flex items-center gap-1"><IconCalendar size={13} /> {("Joined")} {formatDate(manager.registered, "DD-MM-YYYY")}</span>}
              </div>
            </div>
          </div>
          {drawer ? (
            <Link href={`/dashboard/store-managers/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
          ) : (
            <Link href="/dashboard/store-managers" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All store managers")}</Link>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
          <span className="text-xs text-gray-500">{("Availability")}</span>
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-0.5">
            {Object.entries(AVAILABILITY).map(([value, a]) => (
              <button key={value} type="button" disabled={savingAvailability} onClick={() => setAvailability(value)}
                className={`inline-flex items-center gap-1.5 !rounded-md !border-0 px-3 py-1 text-xs font-medium !shadow-none transition-colors disabled:opacity-60 ${manager.availability === value ? "!bg-white !text-gray-900 ring-1 ring-gray-200" : "!bg-transparent !text-gray-500 hover:!text-gray-800"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} /> {a.label}
              </button>
            ))}
          </div>
          {savingAvailability && <Spinner size={14} />}
          {!manager.is_manager && (
            <span className="inline-flex items-center gap-1 text-xs text-amber-700"><IconAlertTriangle size={14} /> {("This user doesn't have the store manager role, so orders can't be assigned to them.")}</span>
          )}
        </div>
      </div>

      {/* ---------- Their orders ---------- */}
      <div className={CARD}>
        <CardTitle action={
          capacity ? (
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                <div className={`h-full rounded-full ${overCapacity ? "bg-rose-500" : loadPct >= 75 ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${loadPct}%` }} />
              </div>
              <span className={`text-xs tabular-nums ${overCapacity ? "font-semibold text-rose-700" : "text-gray-500"}`}>{queue.length} / {capacity}</span>
            </div>
          ) : null
        }>
          {("Their open orders")} <span className="font-normal text-gray-400">· {queue.length}{queue.length ? ` · ${wrapCurrency(queueValue)}` : ""}</span>
        </CardTitle>
        {queue.length ? (
          <div className="flex flex-col divide-y divide-gray-100">
            {queue.map((o) => (
              <OrderRow key={o.id} o={o} wrapCurrency={wrapCurrency} action={
                <button type="button" className={SMALL_BUTTON} disabled={assigning === o.id} onClick={() => assign(o.id, false)} title={("Take off their list")}>
                  <IconX size={13} /> {("Unassign")}
                </button>
              } />
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400">{("No open orders assigned. A store manager only sees the orders assigned to them.")}</p>
        )}
        {overCapacity && <p className="mt-2 text-[11px] text-rose-700">{("At or over their capacity. Consider giving new orders to someone else.")}</p>}
      </div>

      {/* ---------- Unassigned ---------- */}
      {data.unassigned_total > 0 && manager.is_manager && (
        <div className={CARD}>
          <CardTitle action={<Link href="/dashboard/orders" className="inline-flex items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">{("All orders")} <IconArrowRight size={14} /></Link>}>
            {("Not assigned to anyone")} <span className="font-normal text-gray-400">· {data.unassigned_total}</span>
          </CardTitle>
          <div className="flex flex-col divide-y divide-gray-100">
            {data.unassigned.map((o) => (
              <OrderRow key={o.id} o={o} wrapCurrency={wrapCurrency} action={
                <button type="button" className={SMALL_BUTTON} disabled={assigning === o.id} onClick={() => assign(o.id, true)}>
                  <IconUserPlus size={13} /> {("Assign")}
                </button>
              } />
            ))}
          </div>
          {data.unassigned_total > data.unassigned.length && (
            <p className="mt-2 text-[11px] text-gray-400">{("Showing the")} {data.unassigned.length} {("oldest.")}</p>
          )}
        </div>
      )}

      {/* ---------- Performance ---------- */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-gray-900">{("Performance")}</h2>
        <div className="flex items-center gap-2">
          {loading && <Spinner size={16} />}
          <select className={FILTER_SELECT} value={days} onChange={(ev) => setdays(parseInt(ev.target.value))}>
            {RANGES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Kpi icon={<IconShoppingBag size={14} />} label={("Orders handled")} value={data.orders} hint={("assigned, placed in range")} />
        <Kpi icon={<IconCircleCheck size={14} />} label={("Completed")} value={data.done} tone="text-emerald-700" hint={data.void ? `${data.void} cancelled / failed` : null} />
        <Kpi icon={<IconCash size={14} />} label={("Revenue")} value={wrapCurrency(data.revenue)} hint={("completed orders")} />
        <Kpi icon={<IconPercentage size={14} />} label={("Completion rate")} value={data.completion_rate === null ? "—" : `${data.completion_rate}%`} hint={("of finished orders")} />
        <Kpi icon={<IconHourglass size={14} />} label={("Avg. time to complete")} value={duration(data.avg_minutes)} hint={("placed → completed")} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {/* ---------- Left ---------- */}
        <div className="flex min-w-0 flex-col gap-4 lg:col-span-2">
          <div className={CARD}>
            <CardTitle>{("Recent orders")}</CardTitle>
            {data.recent.length ? (
              <div className="flex flex-col divide-y divide-gray-100">
                {data.recent.map((o) => <OrderRow key={o.id} o={o} wrapCurrency={wrapCurrency} />)}
              </div>
            ) : (
              <p className="text-xs text-gray-400">{days ? ("No assigned orders placed in this range.") : ("No orders assigned yet.")}</p>
            )}
          </div>

          <div className={CARD}>
            <CardTitle>{("Added to the store")}</CardTitle>
            <div className="mb-3 grid grid-cols-3 gap-3">
              <Link href="/dashboard/products" className="flex flex-col gap-0.5 rounded-lg border border-gray-100 p-3 hover:border-gray-200">
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><IconPackage size={13} /> {("Products")}</span>
                <span className="text-lg font-semibold tabular-nums text-gray-900">{authored.products}</span>
              </Link>
              <Link href="/dashboard/coupons" className="flex flex-col gap-0.5 rounded-lg border border-gray-100 p-3 hover:border-gray-200">
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><IconTicket size={13} /> {("Coupons")}</span>
                <span className="text-lg font-semibold tabular-nums text-gray-900">{authored.coupons}</span>
              </Link>
              <Link href="/dashboard/purchases" className="flex flex-col gap-0.5 rounded-lg border border-gray-100 p-3 hover:border-gray-200">
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><IconTruckLoading size={13} /> {("Purchases")}</span>
                <span className="text-lg font-semibold tabular-nums text-gray-900">{authored.purchases}</span>
              </Link>
            </div>
            {data.recent_authored.length ? (
              <div className="flex flex-col divide-y divide-gray-100">
                {data.recent_authored.map((p) => {
                  var isCoupon = p.type === "coupon";
                  var created = parseDate(p.created);
                  return (
                    <div key={p.id} className="flex items-center justify-between gap-3 py-2 text-sm">
                      <Link href={`/dashboard/${isCoupon ? "coupons" : "products"}/${p.id}`} className="inline-flex min-w-0 items-center gap-2 text-gray-800 hover:text-blue-600 hover:underline">
                        {isCoupon ? <IconTicket size={14} className="shrink-0 text-gray-400" /> : <IconPackage size={14} className="shrink-0 text-gray-400" />}
                        <span className="truncate">{p.title || ("(untitled)")}</span>
                      </Link>
                      <span className="shrink-0 text-[11px] text-gray-400">{p.status !== "publish" ? `${titleCase(p.status)} · ` : ""}{created ? timeAgo(created) : ""}</span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-gray-400">{days ? ("Nothing added in this range.") : ("Nothing added yet.")}</p>
            )}
          </div>

          {Object.keys(data.statuses ?? {}).length > 0 && (
            <div className={CARD}>
              <CardTitle>{("By status")}</CardTitle>
              <div className="flex flex-wrap gap-3">
                {Object.entries(data.statuses).sort((a, b) => b[1] - a[1]).map(([status, n]) => (
                  <span key={status} className="inline-flex items-center gap-1.5"><OrderStatusBadge status={status} /> <span className="text-xs tabular-nums text-gray-500">{n}</span></span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ---------- Right ---------- */}
        <div className="flex min-w-0 flex-col gap-4">

          {details && (
            <div className={CARD}>
              <CardTitle>{("Manager details")}</CardTitle>
              <div className="flex flex-col gap-3">
                <div>
                  <label className={LABEL}>{("Area")}</label>
                  <input className={FIELD} value={details.area} onChange={setD("area")} placeholder={("e.g. Online orders, Dhaka branch")} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LABEL}>{("Shift")}</label>
                    <input className={FIELD} value={details.shift} onChange={setD("shift")} placeholder={("e.g. 9am–5pm")} />
                  </div>
                  <div>
                    <label className={LABEL}>{("Capacity")}</label>
                    <input type="number" min={1} max={999} className={FIELD} value={details.max_open} onChange={setD("max_open")} placeholder={("open orders")} />
                  </div>
                </div>
                <div>
                  <label className={LABEL}>{("Notes")}</label>
                  <textarea rows={3} className={FIELD} value={details.notes} onChange={setD("notes")} placeholder={("Responsibilities, who covers for them, anything the team should know")} />
                  <p className="mt-1 text-[11px] text-gray-400">{("Only administrators see these.")}</p>
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
                  <label className={LABEL}>{("Email")}</label>
                  <input type="email" className={FIELD} value={profileForm.email} onChange={setP("email")} />
                  {PHONE_EMAIL.test(profileForm.email) && <p className="mt-1 text-[11px] text-gray-400">{("Registered by phone, so this is a placeholder address.")}</p>}
                </div>
                <div>
                  <label className={LABEL}>{("Phone")}</label>
                  <input type="tel" className={FIELD} value={profileForm.phone} onChange={setP("phone")} />
                </div>
                <div className="flex justify-end">
                  <button type="button" className={PRIMARY_BUTTON} disabled={savingProfile || !profileDirty} onClick={saveProfile}>
                    <IconDeviceFloppy size={16} /> {savingProfile ? ("Saving...") : ("Save contact details")}
                  </button>
                </div>
              </div>
            </div>
          )}

          <PasswordCard userId={id} user={{ roles: manager.roles }} who="store manager" />
        </div>
      </div>
    </div>
  );
};

export default StoreManagerEdit;
