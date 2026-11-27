'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Link from "next/link";
import {
  IconArrowLeft, IconArrowUpRight, IconRefresh, IconDeviceFloppy, IconMail, IconPhone, IconCalendar,
  IconTicket, IconCircleCheck, IconHourglass, IconAlertTriangle, IconArrowRight, IconActivity,
  IconUserPlus, IconX, IconLanguage, IconClock, IconFlame, IconInbox,
} from "@tabler/icons-react";

import Spinner from '../../components/Spinner';
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore'
import { timeAgo, parseDate } from "./deliveryUi";
import { BADGE_BASE, TOOLBAR_BUTTON, PRIMARY_BUTTON, FIELD, FIELD_INVALID, FIELD_ERROR, LABEL, CARD, FILTER_SELECT, postApi } from "./affiliateUi";
import { PasswordCard } from "./AffiliateEdit";


/*
	A support agent: their ticket queue now (with tickets waiting for an owner,
	to assign from), how they have been doing, and their agent details
	(availability, skills, languages, shift, capacity). Data from
	ComboStoreSupportAgents (get_support_agent_overview,
	update_support_agent_details, assign_ticket); contact details save through
	update_user_profile, sending only name, email and phone.

	This used to be the shared user editor (via the rider screen), whose billing
	address and delivery map are a customer's.
*/

export const AVAILABILITY = {
  online: { label: "Online", dot: "bg-emerald-500", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  away: { label: "Away", dot: "bg-amber-500", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  offline: { label: "Offline", dot: "bg-gray-400", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

/* Same as the ticket screen (TicketEdit). */
export const TICKET_PRIORITIES = {
  1: { label: "Normal", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
  10: { label: "High", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  90: { label: "Urgent", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

export const TICKET_STATUSES = {
  open: { label: "Open", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  closed: { label: "Closed", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

const RANGES = [
  { value: 7, label: "Last 7 days" },
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
  { value: 0, label: "All time" },
];

const DETAIL_KEYS = ["skills", "languages", "shift", "max_open", "notes"];

/* Accounts registered by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;

function rangeDates(days) {
  if (!days) return { from_date: "", to_date: "" };
  var ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  var to = new Date(), from = new Date();
  from.setDate(to.getDate() - (days - 1));
  return { from_date: ymd(from), to_date: ymd(to) };
}

export function duration(minutes) {
  if (minutes === null || minutes === undefined) return "—";
  if (minutes < 60) return `${minutes} min`;
  var h = Math.floor(minutes / 60), m = minutes % 60;
  if (h < 48) return m ? `${h} h ${m} min` : `${h} h`;
  return `${Math.round(h / 24)} days`;
}

export const AvailabilityBadge = ({ value }) => {
  var a = AVAILABILITY[value] ?? AVAILABILITY.offline;
  return (
    <span className={`${BADGE_BASE} ${a.classes} gap-1.5`}>
      <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} /> {a.label}
    </span>
  );
};

export const PriorityBadge = ({ value }) => {
  var p = TICKET_PRIORITIES[parseInt(value, 10)] ?? TICKET_PRIORITIES[1];
  return <span className={`${BADGE_BASE} ${p.classes}`}>{p.label}</span>;
};

export const TicketStatusBadge = ({ value }) => {
  var s = TICKET_STATUSES[value] ?? TICKET_STATUSES.open;
  return <span className={`${BADGE_BASE} ${s.classes}`}>{s.label}</span>;
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

const SMALL_BUTTON =
  "inline-flex !h-7 shrink-0 items-center gap-1 !rounded-md !border !border-gray-300 !bg-white !px-2 !py-0 !text-xs !font-medium !text-gray-700 !shadow-none transition-colors hover:!bg-gray-50 disabled:opacity-50 cursor-pointer";


/* One ticket: title, priority, status and how long it has been waiting. */
const TicketRow = ({ t, action, closed }) => {
  var since = parseDate(closed ? t.closed_at : (t.assigned_at || t.created));
  var created = parseDate(t.created);
  return (
    <div className="flex items-start justify-between gap-3 py-3">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href={`/dashboard/tickets/${t.id}`} className="font-mono text-xs font-semibold text-blue-600 hover:underline">#{t.id}</Link>
          <PriorityBadge value={t.priority} />
          {!closed && t.status === "processing" && <TicketStatusBadge value="processing" />}
        </div>
        <Link href={`/dashboard/tickets/${t.id}`} className="truncate text-sm text-gray-800 hover:text-blue-600 hover:underline" title={t.title}>{t.title || ("(no subject)")}</Link>
        <div className="text-[11px] text-gray-400">
          {closed
            ? <>{("Closed")} {since ? timeAgo(since) : ""}{created && since ? ` · ${("took")} ${duration(Math.max(0, Math.round((since - parseDate(t.assigned_at || t.created)) / 60000)))}` : ""}</>
            : t.assigned_at
              ? <>{("Assigned")} {timeAgo(since)} · {("opened")} {created ? timeAgo(created) : ""}</>
              : <>{("Opened")} {created ? timeAgo(created) : ""}</>}
        </div>
      </div>
      {action}
    </div>
  );
};


const SupportAgentEdit = ({ id, variant = "page" }) => {

  const { token, addNotification } = useCounterStore();
  const { formatDate } = useUtilsStore();
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
  /* The server's refusal of the phone number (update_user_profile field: "phone"), shown under the field. */
  var [phoneError, setphoneError] = useState(null);

  function load() {
    if (!token || !id) return;
    setloading(true);
    setloadError(false);
    postApi("get_support_agent_overview", token, { agent_id: id, ...rangeDates(days) })
      .then((res) => {
        setloading(false);
        if (res?.status !== "success") { setloadError(true); return; }
        setdata(res);
        /* Only filled once, so changing the date range keeps unsaved edits. */
        setdetails((prev) => prev ?? Object.fromEntries(DETAIL_KEYS.map((k) => [k, res.agent?.[k] ?? ""])));
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
    if (value === data?.agent?.availability) return;
    setsavingAvailability(true);
    postApi("update_support_agent_details", token, { id, availability: value })
      .then((res) => {
        setsavingAvailability(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "Availability could not be saved." });
          return;
        }
        setdata((prev) => ({ ...prev, agent: { ...prev.agent, availability: value } }));
        addNotification({ type: "success", title: "Availability", content: `Marked ${AVAILABILITY[value].label.toLowerCase()}.` });
      })
      .catch((error) => { setsavingAvailability(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  /* agentId: this agent to assign, 0 to unassign. */
  function assign(ticketId, agentId) {
    setassigning(ticketId);
    postApi("assign_ticket", token, { ticket_id: ticketId, agent_id: agentId })
      .then((res) => {
        setassigning(null);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not assigned", content: res?.message ?? "The ticket could not be assigned." });
          return;
        }
        addNotification({ type: "success", title: agentId ? "Ticket assigned" : "Ticket unassigned", content: agentId ? `Ticket #${ticketId} is now ${data?.agent?.name || "this agent"}'s.` : `Ticket #${ticketId} is back in the unassigned queue.` });
        load();
      })
      .catch((error) => { setassigning(null); addNotification({ type: "error", title: "Not assigned", content: error.message }); });
  }

  function saveDetails() {
    setsavingDetails(true);
    postApi("update_support_agent_details", token, { id, ...details })
      .then((res) => {
        setsavingDetails(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "Agent details could not be saved." });
          return;
        }
        setdata((prev) => ({ ...prev, agent: { ...prev.agent, ...res.details } }));
        setdetails(Object.fromEntries(DETAIL_KEYS.map((k) => [k, res.details?.[k] ?? ""])));
        addNotification({ type: "success", title: "Saved", content: "Agent details updated." });
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

  const agent = data?.agent;
  const detailsDirty = useMemo(() => agent && details && DETAIL_KEYS.some((k) => String(details[k] ?? "") !== String(agent[k] ?? "")), [agent, details]);
  const profileDirty = useMemo(() => profile && profileForm && Object.keys(profileForm).some((k) => String(profileForm[k] ?? "") !== String(profile[k] ?? "")), [profile, profileForm]);
  var setD = (key) => (ev) => setdetails({ ...details, [key]: ev.target.value });
  var setP = (key) => (ev) => setprofileForm({ ...profileForm, [key]: ev.target.value });

  const wrap = drawer ? "flex w-full flex-col gap-4" : "page-shell";

  if (loadError && !data) {
    return (
      <div className={wrap}>
        <div className={`${CARD} flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500`}>
          {("This support agent could not be loaded.")}
          <div className="flex gap-2">
            <Link href="/dashboard/support-agents" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All support agents")}</Link>
            <button type="button" className={TOOLBAR_BUTTON} onClick={load}><IconRefresh size={16} /> {("Try again")}</button>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className={wrap}><div className="flex items-center gap-2 text-sm text-gray-500"><Spinner size={16} /> {("Loading support agent")}</div></div>;
  }

  const lastActive = parseDate(agent.last_activity);
  const phone = profile?.phone || agent.phone;
  const queue = data.queue;
  const capacity = parseInt(agent.max_open, 10) || 0;
  const load_pct = capacity ? Math.min(100, Math.round(queue.length / capacity * 100)) : null;
  const overCapacity = capacity > 0 && queue.length >= capacity;
  const oldest = parseDate(data.oldest_in_queue);

  return (
    <div className={wrap}>

      {/* ---------- Header ---------- */}
      <div className={CARD}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {agent.avatar && <img src={agent.avatar} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full bg-gray-100" />}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-xl font-semibold text-gray-900">{agent.name || `Support agent #${id}`}</h1>
                <AvailabilityBadge value={agent.availability} />
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                {agent.email && !PHONE_EMAIL.test(agent.email) && <a href={`mailto:${agent.email}`} className="inline-flex items-center gap-1 hover:text-gray-800"><IconMail size={13} /> {agent.email}</a>}
                {phone && <a href={`tel:${phone}`} className="inline-flex items-center gap-1 tabular-nums hover:text-gray-800"><IconPhone size={13} /> {phone}</a>}
                {agent.languages && <span className="inline-flex items-center gap-1"><IconLanguage size={13} /> {agent.languages}</span>}
                {agent.shift && <span className="inline-flex items-center gap-1"><IconClock size={13} /> {agent.shift}</span>}
                <span className="inline-flex items-center gap-1"><IconActivity size={13} /> {lastActive ? `${("Last active")} ${timeAgo(lastActive)}` : ("No ticket activity yet")}</span>
                {agent.registered && <span className="inline-flex items-center gap-1"><IconCalendar size={13} /> {("Joined")} {formatDate(agent.registered, "DD-MM-YYYY")}</span>}
              </div>
              {agent.skills && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {agent.skills.split(",").map((s) => s.trim()).filter(Boolean).map((s) => (
                    <span key={s} className="inline-flex items-center rounded-md bg-[#634FE5]/10 px-2 py-0.5 text-[11px] font-medium text-[#634FE5]">{s}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
          {drawer ? (
            <Link href={`/dashboard/support-agents/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
          ) : (
            <Link href="/dashboard/support-agents" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All support agents")}</Link>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
          <span className="text-xs text-gray-500">{("Availability")}</span>
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-0.5">
            {Object.entries(AVAILABILITY).map(([value, a]) => (
              <button key={value} type="button" disabled={savingAvailability} onClick={() => setAvailability(value)}
                className={`inline-flex items-center gap-1.5 !rounded-md !border-0 px-3 py-1 text-xs font-medium !shadow-none transition-colors disabled:opacity-60 ${agent.availability === value ? "!bg-white !text-gray-900 ring-1 ring-gray-200" : "!bg-transparent !text-gray-500 hover:!text-gray-800"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} /> {a.label}
              </button>
            ))}
          </div>
          {savingAvailability && <Spinner size={14} />}
          {!agent.is_agent && (
            <span className="inline-flex items-center gap-1 text-xs text-amber-700"><IconAlertTriangle size={14} /> {("This user doesn't have the support agent role, so tickets can't be assigned to them.")}</span>
          )}
        </div>
      </div>

      {/* ---------- Queue ---------- */}
      <div className={CARD}>
        <CardTitle action={
          capacity ? (
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                <div className={`h-full rounded-full ${overCapacity ? "bg-rose-500" : load_pct >= 75 ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${load_pct}%` }} />
              </div>
              <span className={`text-xs tabular-nums ${overCapacity ? "font-semibold text-rose-700" : "text-gray-500"}`}>{queue.length} / {capacity}</span>
            </div>
          ) : null
        }>
          {("Their queue")} <span className="font-normal text-gray-400">· {queue.length}</span>
        </CardTitle>
        {queue.length > 0 && (
          <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
            {data.queue_by_priority["90"] > 0 && <span className="inline-flex items-center gap-1 font-medium text-rose-700"><IconFlame size={13} /> {data.queue_by_priority["90"]} {("urgent")}</span>}
            {data.queue_by_priority["10"] > 0 && <span>{data.queue_by_priority["10"]} {("high")}</span>}
            {data.queue_by_status.processing > 0 && <span>{data.queue_by_status.processing} {("processing")}</span>}
            {oldest && <span>{("oldest assigned")} {timeAgo(oldest)}</span>}
          </div>
        )}
        {queue.length ? (
          <div className="flex flex-col divide-y divide-gray-100">
            {queue.map((t) => (
              <TicketRow key={t.id} t={t} action={
                <button type="button" className={SMALL_BUTTON} disabled={assigning === t.id} onClick={() => assign(t.id, 0)} title={("Put back in the unassigned queue")}>
                  <IconX size={13} /> {("Unassign")}
                </button>
              } />
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400">{("No tickets assigned right now.")}</p>
        )}
        {overCapacity && <p className="mt-2 text-[11px] text-rose-700">{("At or over their capacity. Consider giving new tickets to someone else.")}</p>}
      </div>

      {/* ---------- Unassigned ---------- */}
      {data.unassigned_total > 0 && agent.is_agent && (
        <div className={CARD}>
          <CardTitle action={<Link href="/dashboard/tickets" className="inline-flex items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">{("All tickets")} <IconArrowRight size={14} /></Link>}>
            {("Waiting for an agent")} <span className="font-normal text-gray-400">· {data.unassigned_total}</span>
          </CardTitle>
          <div className="flex flex-col divide-y divide-gray-100">
            {data.unassigned.map((t) => (
              <TicketRow key={t.id} t={t} action={
                <button type="button" className={SMALL_BUTTON} disabled={assigning === t.id} onClick={() => assign(t.id, id)}>
                  <IconUserPlus size={13} /> {("Assign")}
                </button>
              } />
            ))}
          </div>
          {data.unassigned_total > data.unassigned.length && (
            <p className="mt-2 text-[11px] text-gray-400">{("Showing the")} {data.unassigned.length} {("most urgent and oldest.")}</p>
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

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi icon={<IconInbox size={14} />} label={("Assigned")} value={data.assigned} hint={("tickets given to them")} />
        <Kpi icon={<IconCircleCheck size={14} />} label={("Closed")} value={data.closed} tone="text-emerald-700" hint={data.closed_urgent ? `${data.closed_urgent} urgent` : null} />
        <Kpi icon={<IconHourglass size={14} />} label={("Avg. time to close")} value={duration(data.avg_minutes)} hint={("assigned → closed")} />
        <Kpi icon={<IconTicket size={14} />} label={("Open now")} value={queue.length} tone={overCapacity ? "text-rose-700" : ""} hint={capacity ? `${("capacity")} ${capacity}` : null} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {/* ---------- Left ---------- */}
        <div className="flex min-w-0 flex-col gap-4 lg:col-span-2">
          <div className={CARD}>
            <CardTitle>{("Recently closed")}</CardTitle>
            {data.recent_closed.length ? (
              <div className="flex flex-col divide-y divide-gray-100">
                {data.recent_closed.map((t) => <TicketRow key={t.id} t={t} closed />)}
              </div>
            ) : (
              <p className="text-xs text-gray-400">{days ? ("No tickets closed in this range.") : ("No tickets closed yet.")}</p>
            )}
            <p className="mt-3 text-[11px] text-gray-400">{("Closing times are recorded from now on; tickets closed before this page existed aren't credited to anyone.")}</p>
          </div>
        </div>

        {/* ---------- Right ---------- */}
        <div className="flex min-w-0 flex-col gap-4">

          {details && (
            <div className={CARD}>
              <CardTitle>{("Agent details")}</CardTitle>
              <div className="flex flex-col gap-3">
                <div>
                  <label className={LABEL}>{("Skills")}</label>
                  <input className={FIELD} value={details.skills} onChange={setD("skills")} placeholder={("e.g. Refunds, Payments, Delivery")} />
                  <p className="mt-1 text-[11px] text-gray-400">{("Separate with commas.")}</p>
                </div>
                <div>
                  <label className={LABEL}>{("Languages")}</label>
                  <input className={FIELD} value={details.languages} onChange={setD("languages")} placeholder={("e.g. Bangla, English")} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={LABEL}>{("Shift")}</label>
                    <input className={FIELD} value={details.shift} onChange={setD("shift")} placeholder={("e.g. 10am–6pm")} />
                  </div>
                  <div>
                    <label className={LABEL}>{("Capacity")}</label>
                    <input type="number" min={1} max={999} className={FIELD} value={details.max_open} onChange={setD("max_open")} placeholder={("open tickets")} />
                  </div>
                </div>
                <div>
                  <label className={LABEL}>{("Notes")}</label>
                  <textarea rows={3} className={FIELD} value={details.notes} onChange={setD("notes")} placeholder={("Training, escalation contact, anything the team should know")} />
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
                  <label className={LABEL}>{("Email")}</label>
                  <input type="email" className={FIELD} value={profileForm.email} onChange={setP("email")} />
                  {PHONE_EMAIL.test(profileForm.email) && <p className="mt-1 text-[11px] text-gray-400">{("Registered by phone, so this is a placeholder address.")}</p>}
                </div>
                <div>
                  <label className={LABEL}>{("Phone")}</label>
                  <input type="tel" className={phoneError ? FIELD_INVALID : FIELD} aria-invalid={phoneError ? true : undefined} aria-describedby={phoneError ? "profile-phone-error" : undefined} value={profileForm.phone} onChange={(e) => { setphoneError(null); setP("phone")(e); }} />
                  {phoneError && <p id="profile-phone-error" role="alert" className={FIELD_ERROR}>{phoneError}</p>}
                </div>
                <div className="flex justify-end">
                  <button type="button" className={PRIMARY_BUTTON} disabled={savingProfile || !profileDirty} onClick={saveProfile}>
                    <IconDeviceFloppy size={16} /> {savingProfile ? ("Saving...") : ("Save contact details")}
                  </button>
                </div>
              </div>
            </div>
          )}

          <PasswordCard userId={id} user={{ roles: agent.roles }} who="support agent" />
        </div>
      </div>
    </div>
  );
};

export default SupportAgentEdit;
