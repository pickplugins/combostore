'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Link from "next/link";
import {
  IconArrowLeft, IconArrowUpRight, IconRefresh, IconDeviceFloppy, IconMail, IconPhone, IconCalendar,
  IconTruckDelivery, IconCircleCheck, IconArrowBackUp, IconPercentage, IconHourglass, IconCash, IconAlertTriangle,
  IconMapPin, IconArrowRight, IconBike, IconActivity,
} from "@tabler/icons-react";

import UserEdit from './UserEdit';
import Spinner from '../../components/Spinner';
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore'
import { StatusBadge, titleCase, timeAgo, parseDate } from "./deliveryUi";
import { BADGE_BASE, TOOLBAR_BUTTON, PRIMARY_BUTTON, FIELD, LABEL, CARD, FILTER_SELECT, postApi } from "./affiliateUi";
import { PasswordCard } from "./AffiliateEdit";


/*
	A rider: availability, the deliveries in their hands right now and the cash
	on them, how they have been doing, and their rider details (vehicle, zone,
	emergency contact). Data from ComboStoreRiders (get_rider_overview,
	update_rider_details); contact details save through update_user_profile,
	sending only name, email and phone.

	This used to be the shared user editor, whose billing address and delivery
	map do not apply to a rider. Store managers and support agents share the
	Riders list and this component, so for those roles it still is.
*/

export const AVAILABILITY = {
  available: { label: "Available", dot: "bg-emerald-500", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  busy: { label: "Busy", dot: "bg-amber-500", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  off_duty: { label: "Off duty", dot: "bg-gray-400", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

export const VEHICLES = {
  bike: "Motorbike", bicycle: "Bicycle", car: "Car", van: "Van", on_foot: "On foot", other: "Other",
};

const RANGES = [
  { value: 7, label: "Last 7 days" },
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
  { value: 0, label: "All time" },
];

const DETAIL_KEYS = ["vehicle", "vehicle_no", "zone", "emergency_name", "emergency_phone", "notes"];

/* Accounts registered by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;

function rangeDates(days) {
  if (!days) return { from_date: "", to_date: "" };
  var ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  var to = new Date(), from = new Date();
  from.setDate(to.getDate() - (days - 1));
  return { from_date: ymd(from), to_date: ymd(to) };
}

function duration(minutes) {
  if (minutes === null || minutes === undefined) return "—";
  if (minutes < 60) return `${minutes} min`;
  var h = Math.floor(minutes / 60), m = minutes % 60;
  if (h < 48) return m ? `${h} h ${m} min` : `${h} h`;
  return `${Math.round(h / 24)} days`;
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

export const AvailabilityBadge = ({ value }) => {
  var a = AVAILABILITY[value] ?? AVAILABILITY.available;
  return (
    <span className={`${BADGE_BASE} ${a.classes} gap-1.5`}>
      <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} /> {a.label}
    </span>
  );
};


/* One delivery row, for both the "in hand" and the "recent" lists. */
const DeliveryRow = ({ d, wrapCurrency, formatDate, showCash }) => {
  var address = d.shipping_address || d.billing_address;
  var city = d.shipping_city || d.billing_city;
  var orderGone = !d.order_exists;
  var updated = parseDate(d.last_update || d.datetime);
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 py-3">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href={`/dashboard/deliveries/${d.id}`} className="font-mono font-semibold text-blue-600 hover:underline">#{d.id}</Link>
          {orderGone ? (
            <span className="text-xs text-gray-400">{("Order")} #{d.order_id} {("(deleted)")}</span>
          ) : (
            <Link href={`/dashboard/orders/${d.order_id}`} className="text-xs text-gray-500 hover:text-blue-600 hover:underline">{("Order")} #{d.order_id}</Link>
          )}
          <StatusBadge status={d.status} />
        </div>
        {!orderGone && (d.billing_name || d.billing_phone) && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-gray-700">
            {d.billing_name && <span className="font-medium">{d.billing_name}</span>}
            {d.billing_phone && <a href={`tel:${d.billing_phone}`} className="inline-flex items-center gap-1 tabular-nums hover:text-blue-600"><IconPhone size={12} /> {d.billing_phone}</a>}
          </div>
        )}
        {!orderGone && (address || city) && (
          <div className="flex items-start gap-1 text-xs text-gray-500"><IconMapPin size={12} className="mt-0.5 shrink-0" /> <span>{[address, city].filter(Boolean).join(", ")}</span></div>
        )}
        <div className="text-[11px] text-gray-400">
          {d.last_step ? `${titleCase(d.last_step)} · ` : ""}{updated ? `${("updated")} ${timeAgo(updated)}` : formatDate(d.datetime)}
        </div>
      </div>
      {showCash && !orderGone && (
        <div className="flex shrink-0 flex-col items-end">
          {parseFloat(d.cod_due) > 0 ? (
            <>
              <span className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(parseFloat(d.cod_due))}</span>
              <span className="text-[11px] text-amber-700">{("cash to collect")}</span>
            </>
          ) : (
            <span className="text-[11px] text-emerald-700">{d.payment_status === "paid" ? ("prepaid") : ("nothing to collect")}</span>
          )}
        </div>
      )}
    </div>
  );
};


const RiderProfile = ({ id, variant }) => {

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

  var [profile, setprofile] = useState(null);
  var [profileForm, setprofileForm] = useState(null);
  var [savingProfile, setsavingProfile] = useState(false);

  function load() {
    if (!token || !id) return;
    setloading(true);
    setloadError(false);
    postApi("get_rider_overview", token, { rider_id: id, ...rangeDates(days) })
      .then((res) => {
        setloading(false);
        if (res?.status !== "success") { setloadError(true); return; }
        setdata(res);
        /* Only filled once, so changing the date range keeps unsaved edits. */
        setdetails((prev) => prev ?? Object.fromEntries(DETAIL_KEYS.map((k) => [k, res.rider?.[k] ?? ""])));
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
    if (value === data?.rider?.availability) return;
    setsavingAvailability(true);
    postApi("update_rider_details", token, { id, availability: value })
      .then((res) => {
        setsavingAvailability(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "Availability could not be saved." });
          return;
        }
        setdata((prev) => ({ ...prev, rider: { ...prev.rider, availability: value } }));
        addNotification({ type: "success", title: "Availability", content: `Marked ${AVAILABILITY[value].label.toLowerCase()}.` });
      })
      .catch((error) => { setsavingAvailability(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  function saveDetails() {
    setsavingDetails(true);
    postApi("update_rider_details", token, { id, ...details })
      .then((res) => {
        setsavingDetails(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "Rider details could not be saved." });
          return;
        }
        setdata((prev) => ({ ...prev, rider: { ...prev.rider, ...res.details } }));
        setdetails(Object.fromEntries(DETAIL_KEYS.map((k) => [k, res.details?.[k] ?? ""])));
        addNotification({ type: "success", title: "Saved", content: "Rider details updated." });
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

  const rider = data?.rider;
  const detailsDirty = useMemo(() => rider && details && DETAIL_KEYS.some((k) => String(details[k] ?? "") !== String(rider[k] ?? "")), [rider, details]);
  const profileDirty = useMemo(() => profile && profileForm && Object.keys(profileForm).some((k) => String(profileForm[k] ?? "") !== String(profile[k] ?? "")), [profile, profileForm]);
  var setD = (key) => (ev) => setdetails({ ...details, [key]: ev.target.value });
  var setP = (key) => (ev) => setprofileForm({ ...profileForm, [key]: ev.target.value });

  const wrap = drawer ? "flex w-full flex-col gap-4" : "page-shell";

  if (loadError && !data) {
    return (
      <div className={wrap}>
        <div className={`${CARD} flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500`}>
          {("This rider could not be loaded.")}
          <div className="flex gap-2">
            <Link href="/dashboard/riders" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All riders")}</Link>
            <button type="button" className={TOOLBAR_BUTTON} onClick={load}><IconRefresh size={16} /> {("Try again")}</button>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className={wrap}><div className="flex items-center gap-2 text-sm text-gray-500"><Spinner size={16} /> {("Loading rider")}</div></div>;
  }

  const counts = data.counts;
  const lastActive = parseDate(rider.last_activity);
  const phone = profile?.phone || rider.phone;

  return (
    <div className={wrap}>

      {/* ---------- Header ---------- */}
      <div className={CARD}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {rider.avatar && <img src={rider.avatar} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full bg-gray-100" />}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-xl font-semibold text-gray-900">{rider.name || `Rider #${id}`}</h1>
                <AvailabilityBadge value={rider.availability} />
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                {phone && <a href={`tel:${phone}`} className="inline-flex items-center gap-1 tabular-nums hover:text-gray-800"><IconPhone size={13} /> {phone}</a>}
                {rider.email && !PHONE_EMAIL.test(rider.email) && <a href={`mailto:${rider.email}`} className="inline-flex items-center gap-1 hover:text-gray-800"><IconMail size={13} /> {rider.email}</a>}
                {rider.vehicle && <span className="inline-flex items-center gap-1"><IconBike size={13} /> {VEHICLES[rider.vehicle] ?? rider.vehicle}{rider.vehicle_no ? ` · ${rider.vehicle_no}` : ""}</span>}
                {rider.zone && <span className="inline-flex items-center gap-1"><IconMapPin size={13} /> {rider.zone}</span>}
                <span className="inline-flex items-center gap-1"><IconActivity size={13} /> {lastActive ? `${("Last active")} ${timeAgo(lastActive)}` : ("No activity yet")}</span>
                {rider.registered && <span className="inline-flex items-center gap-1"><IconCalendar size={13} /> {("Joined")} {formatDate(rider.registered, "DD-MM-YYYY")}</span>}
              </div>
            </div>
          </div>
          {drawer ? (
            <Link href={`/dashboard/riders/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
          ) : (
            <Link href="/dashboard/riders" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All riders")}</Link>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
          <span className="text-xs text-gray-500">{("Availability")}</span>
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-0.5">
            {Object.entries(AVAILABILITY).map(([value, a]) => (
              <button key={value} type="button" disabled={savingAvailability} onClick={() => setAvailability(value)}
                className={`inline-flex items-center gap-1.5 !rounded-md !border-0 px-3 py-1 text-xs font-medium !shadow-none transition-colors disabled:opacity-60 ${rider.availability === value ? "!bg-white !text-gray-900 ring-1 ring-gray-200" : "!bg-transparent !text-gray-500 hover:!text-gray-800"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} /> {a.label}
              </button>
            ))}
          </div>
          {savingAvailability && <Spinner size={14} />}
          {!rider.is_rider && (
            <span className="inline-flex items-center gap-1 text-xs text-amber-700"><IconAlertTriangle size={14} /> {("This user doesn't have the rider role, so they can't use the rider app.")}</span>
          )}
        </div>
      </div>

      {/* ---------- In hand now ---------- */}
      <div className={CARD}>
        <CardTitle action={
          data.cod_to_collect > 0
            ? <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-200"><IconCash size={14} /> {wrapCurrency(data.cod_to_collect)} {("to collect")}</span>
            : null
        }>
          {("In hand now")} <span className="font-normal text-gray-400">· {data.active.length}</span>
        </CardTitle>
        {data.active.length ? (
          <div className="flex flex-col divide-y divide-gray-100">
            {data.active.map((d) => <DeliveryRow key={d.id} d={d} wrapCurrency={wrapCurrency} formatDate={formatDate} showCash />)}
          </div>
        ) : (
          <p className="text-xs text-gray-400">{("No deliveries in progress.")}</p>
        )}
      </div>

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

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
        <Kpi icon={<IconTruckDelivery size={14} />} label={("Deliveries")} value={counts.total} hint={counts.active ? `${counts.active} in progress` : null} />
        <Kpi icon={<IconCircleCheck size={14} />} label={("Delivered")} value={counts.done} tone="text-emerald-700" />
        <Kpi icon={<IconArrowBackUp size={14} />} label={("Returned / cancelled")} value={counts.failed} tone={counts.failed ? "text-rose-700" : ""} />
        <Kpi icon={<IconPercentage size={14} />} label={("Success rate")} value={data.success_rate === null ? "—" : `${data.success_rate}%`} hint={("of finished deliveries")} />
        <Kpi icon={<IconHourglass size={14} />} label={("Avg. delivery time")} value={duration(data.avg_minutes)} hint={("assigned → delivered")} />
        <Kpi icon={<IconCash size={14} />} label={("Cash collected")} value={wrapCurrency(data.cod_collected)} hint={("cash on delivery, delivered")} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {/* ---------- Left ---------- */}
        <div className="flex min-w-0 flex-col gap-4 lg:col-span-2">
          <div className={CARD}>
            <CardTitle action={<Link href={`/dashboard/deliveries?rider_id=${id}`} className="inline-flex items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">{("All their deliveries")} <IconArrowRight size={14} /></Link>}>
              {("Recent deliveries")}
            </CardTitle>
            {data.recent.length ? (
              <div className="flex flex-col divide-y divide-gray-100">
                {data.recent.map((d) => <DeliveryRow key={d.id} d={d} wrapCurrency={wrapCurrency} formatDate={formatDate} />)}
              </div>
            ) : (
              <p className="text-xs text-gray-400">{days ? ("No deliveries in this range.") : ("No deliveries yet.")}</p>
            )}
          </div>

          {Object.keys(data.statuses ?? {}).length > 0 && (
            <div className={CARD}>
              <CardTitle>{("By status")}</CardTitle>
              <div className="flex flex-wrap gap-3">
                {Object.entries(data.statuses).sort((a, b) => b[1] - a[1]).map(([status, n]) => (
                  <span key={status} className="inline-flex items-center gap-1.5"><StatusBadge status={status} /> <span className="text-xs tabular-nums text-gray-500">{n}</span></span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ---------- Right ---------- */}
        <div className="flex min-w-0 flex-col gap-4">

          {details && (
            <div className={CARD}>
              <CardTitle>{("Rider details")}</CardTitle>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LABEL}>{("Vehicle")}</label>
                    <select className={FIELD} value={details.vehicle} onChange={setD("vehicle")}>
                      <option value="">{("Not set")}</option>
                      {Object.entries(VEHICLES).map(([v, label]) => <option key={v} value={v}>{label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>{("Vehicle number")}</label>
                    <input className={`${FIELD} font-mono`} value={details.vehicle_no} onChange={setD("vehicle_no")} />
                  </div>
                </div>
                <div>
                  <label className={LABEL}>{("Zone / area")}</label>
                  <input className={FIELD} value={details.zone} onChange={setD("zone")} placeholder={("e.g. Mirpur, Uttara")} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LABEL}>{("Emergency contact")}</label>
                    <input className={FIELD} value={details.emergency_name} onChange={setD("emergency_name")} placeholder={("Name")} />
                  </div>
                  <div>
                    <label className={LABEL}>{("Their phone")}</label>
                    <input type="tel" className={FIELD} value={details.emergency_phone} onChange={setD("emergency_phone")} />
                  </div>
                </div>
                <div>
                  <label className={LABEL}>{("Notes")}</label>
                  <textarea rows={3} className={FIELD} value={details.notes} onChange={setD("notes")} placeholder={("Shifts, documents checked, anything the team should know")} />
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
                  <input type="tel" className={FIELD} value={profileForm.phone} onChange={setP("phone")} />
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

          <PasswordCard userId={id} user={{ roles: rider.roles }} who="rider" />
        </div>
      </div>
    </div>
  );
};


/*
	The rider screen. Riders get RiderProfile; Store managers and Support
	agents (which share the Riders list) keep the shared user editor.
*/
const RiderEdit = ({ id, variant = "page", role = "rider" }) => {
  if (role === "rider") return <RiderProfile id={id} variant={variant} />;
  return <UserEdit id={id} variant={variant} role={role} />;
};

export default RiderEdit;
