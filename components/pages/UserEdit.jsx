'use client'
import React from 'react'
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

import { useCounterStore } from '../../store/useCounterStore'
import Spinner from '../../components/Spinner';
import WidgetWrapper from '../../components/WidgetWrapper';
import LocationPicker from '../../components/LocationPicker';
import countries from '../../lib/Countries';
import states from '../../lib/States';
import { BADGE_BASE, titleCase } from "./deliveryUi";

import { IconUser, IconRefresh, IconAlertTriangle, IconArrowLeft, IconArrowUpRight, IconMail, IconPhone, IconCopy, IconDeviceFloppy, IconLock, IconMapPin } from "@tabler/icons-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same card shell, fields and buttons as OrderUpdate and the other editors. */
const CARD_CLASSES =
  "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";
const FIELD_CLASSES = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";
const LABEL_CLASSES = "mb-1.5 block text-sm font-medium text-gray-700";
const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const PRIMARY_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const CHIP_BUTTON = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer";
const CARD = "rounded-xl border border-gray-200 bg-white";

/* How each role's screen names the person and where its list is. */
const ROLE_SCREENS = {
  user: { label: "User", list: "users", listLabel: "All users" },
  customer: { label: "Customer", list: "customers", listLabel: "All customers" },
  rider: { label: "Rider", list: "riders", listLabel: "All riders" },
  store_manager: { label: "Store manager", list: "store-managers", listLabel: "All store managers" },
  support_agent: { label: "Support agent", list: "support-agents", listLabel: "All support agents" },
  seller: { label: "Seller", list: "sellers", listLabel: "All sellers" },
  supplier: { label: "Supplier", list: "suppliers", listLabel: "All suppliers" },
};

/* Each role's own list and page in the dashboard. */
const ROLE_PAGES = {
  customer: "customers",
  rider: "riders",
  store_manager: "store-managers",
  support_agent: "support-agents",
  seller: "sellers",
  supplier: "suppliers",
};

const ROLE_TONES = {
  administrator: "bg-[#634FE5]/10 text-[#634FE5] ring-[#634FE5]/30",
  store_manager: "bg-blue-50 text-blue-700 ring-blue-200",
  support_agent: "bg-sky-50 text-sky-700 ring-sky-200",
  rider: "bg-amber-50 text-amber-700 ring-amber-200",
  customer: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

/* The fields this screen edits, all of which update_user_profile accepts.
   Only the ones that changed are sent, and it writes only what it is sent. */
const ACCOUNT_FIELDS = [
  ["name", "Display name", "text"],
  ["first_name", "First name", "text"],
  ["last_name", "Last name", "text"],
  ["email", "Email", "email"],
  ["phone", "Phone", "tel"],
];

const BILLING_FIELDS = [
  ["billing_name", "Name", "text"],
  ["billing_phone", "Phone", "tel"],
  ["billing_email", "Email", "email"],
  ["billing_address1", "Address line 1", "text"],
  ["billing_address2", "Address line 2", "text"],
  ["zip_code", "Postcode", "text"],
];

const EDITABLE = [...ACCOUNT_FIELDS, ...BILLING_FIELDS].map(([key]) => key).concat(["billing_country", "billing_city", "delivery_location"]);

/* delivery_location is { lat, lng }, stored as an object or as its JSON. */
function toLatLng(value) {
  if (!value) return "";
  var point = value;
  if (typeof value === "string") {
    try { point = JSON.parse(value); } catch { return ""; }
  }
  var lat = parseFloat(point?.lat), lng = parseFloat(point?.lng);
  return Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : "";
}

const pick = (data) => Object.fromEntries(EDITABLE.map(key => [key, key === "delivery_location" ? toLatLng(data?.[key]) : (data?.[key] ?? "")]));

/* Compares objects (the location) by value, everything else as text. */
const same = (a, b) => (a && typeof a === "object") || (b && typeof b === "object")
  ? JSON.stringify(a || "") === JSON.stringify(b || "")
  : String(a ?? "") === String(b ?? "");


/*
  A user: who they are and their roles, then the account and billing details
  staff can change. Used as a page (/dashboard/users/[id]) and in the Users
  list's Edit drawer (variant="drawer").

  The rider, seller and supplier screens (RiderEdit, SellerEdit, SupplierEdit)
  are this editor with their role's heading and list link (`role`).

  It used to be a copy of the coupon editor: it loaded the user's ID through
  get_coupon (so it read the post that had that number) and showed "no profile
  view wired up". It never saved.

  Two things the API does quietly, which this guards against:
  - get_customer answers a non-staff user with *their own* profile, whatever
    id they ask for, and update_user_profile saves to their own account. So
    the user that comes back must be the one asked for, or nothing is editable.
  - Roles and passwords cannot be changed through the API, so they are shown,
    not offered.
*/
const UserEdit = ({ id, variant = "page", role = "user" }) => {

  var screen = ROLE_SCREENS[role] ?? ROLE_SCREENS.user;

  const { token, addNotification, privacyMode } = useCounterStore()

  var [userData, setuserData] = useState(null);
  var [form, setform] = useState(pick(null));
  /* loading | ready | missing | forbidden | error */
  var [state, setstate] = useState("loading");
  var [errorMessage, seterrorMessage] = useState("");
  var [saving, setsaving] = useState(false);

  var countryOptions = useMemo(() => countries.map(country => ({ value: country.code2, label: country.name })).sort((a, b) => a.label.localeCompare(b.label)), []);
  var cityOptions = useMemo(() => Object.entries(states[form.billing_country || "BD"] ?? {}).map(([value, label]) => ({ value, label })), [form.billing_country]);


  function get_user() {

    if (!id) {
      setstate("missing");
      return;
    }

    setstate("loading");

    fetch(serverUrl + "wp-json/combo-store/v2/get_customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        var user = res?.customer;

        if (!user || user.id == null) {
          setuserData(null);
          setstate("missing");
          return;
        }

        /* Not staff: the API sent back the viewer's own profile. */
        if (String(user.id) !== String(id)) {
          setuserData(null);
          setstate("forbidden");
          return;
        }

        setuserData(user);
        setform(pick(user));
        setstate("ready");
      })
      .catch((error) => {
        seterrorMessage(error?.message ?? "");
        setstate("error");
      });
  }

  useEffect(() => {
    if (!token) return;
    get_user();
  }, [id, token]);


  var original = useMemo(() => pick(userData), [userData]);
  var changes = useMemo(() => Object.fromEntries(Object.entries(form).filter(([key, value]) => !same(value, original[key]))), [form, original]);
  var dirty = Object.keys(changes).length > 0;


  function save() {

    if (!dirty || saving) return;

    if ("email" in changes && !String(changes.email).trim()) {
      addNotification({ type: 'error', title: 'Email is required', content: "An account's email is its login, so it cannot be left empty." });
      return;
    }

    setsaving(true);

    fetch(serverUrl + "wp-json/combo-store/v2/update_user_profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: id, userData: changes }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setsaving(false);

        if (res?.error) {
          addNotification({ type: 'error', title: 'Not saved', content: res?.message ?? '' });
          return;
        }

        addNotification({ type: 'success', title: 'User saved', content: `${Object.keys(changes).length} ${Object.keys(changes).length === 1 ? "field" : "fields"} updated.` });
        /* Re-read, so what is shown is what was stored (the API trims and
           ignores some values, an empty display name for one). */
        get_user();
      })
      .catch((error) => {
        setsaving(false);
        addNotification({ type: 'error', title: 'Not saved', content: error?.message ?? '' });
      });
  }

  function copy(value, what) {
    navigator.clipboard?.writeText(value)
      .then(() => addNotification({ type: 'success', title: `${what} copied`, content: value }))
      .catch(() => { });
  }


  var drawer = variant === "drawer";
  var wrapper = drawer
    ? "flex w-full flex-col gap-4"
    : "mx-auto flex w-full max-w-[1000px] flex-col gap-4 px-4 py-6 sm:px-6";
  var roles = Array.isArray(userData?.roles) ? userData.roles : [];
  var rolePage = roles.map(role => ROLE_PAGES[role]).find(Boolean);
  var blur = privacyMode ? "blur-[3px]" : "";

  function field([key, label, type]) {
    return (
      <div key={key}>
        <label htmlFor={`user-${id}-${key}`} className={LABEL_CLASSES}>
          {label}
          {key in changes && <span className="ml-1.5 text-[11px] font-medium text-[#634FE5]">{("edited")}</span>}
        </label>
        <input id={`user-${id}-${key}`} type={type} className={FIELD_CLASSES}
          value={form[key] ?? ""}
          onChange={ev => setform({ ...form, [key]: ev.target.value })} />
      </div>
    );
  }


  return (
    <div className={wrapper}>

      {/* ---------- heading ---------- */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#634FE5]/10 text-[#634FE5]">
            {userData?.avatar ? <img className="h-full w-full object-cover" src={userData.avatar} alt="" width={48} height={48} /> : <IconUser size={22} />}
          </div>
          <div className="min-w-0">
            <h1 className="flex flex-wrap items-center gap-2 text-xl font-semibold text-gray-900">
              <span className={blur}>{state === "ready" ? (userData?.name || `Unnamed ${screen.label.toLowerCase()}`) : screen.label}</span>
              <span className="font-normal text-gray-400">#{id}</span>
            </h1>
            {state === "ready" && roles.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1.5">
                {roles.map(role => (
                  <span key={role} className={`${BADGE_BASE} ${ROLE_TONES[role] ?? "bg-gray-100 text-gray-600 ring-gray-200"}`}>{titleCase(role)}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {!drawer && (
            <Link href={`/dashboard/${screen.list}`} className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {screen.listLabel}</Link>
          )}
          {drawer && (
            <Link href={`/dashboard/${screen.list}/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
          )}
          {state === "ready" && rolePage && rolePage !== screen.list && (
            <Link href={`/dashboard/${rolePage}/${id}`} className={TOOLBAR_BUTTON}>{titleCase(rolePage.replace(/s$/, ""))} {("page")}</Link>
          )}
          {state === "ready" && (
            <button type="button" className={PRIMARY_BUTTON} disabled={!dirty || saving} onClick={save}>
              {saving ? <Spinner /> : <IconDeviceFloppy size={16} />}
              {dirty ? ("Save changes") : ("Saved")}
            </button>
          )}
        </div>
      </div>


      {/* ---------- loading / missing / forbidden / error ---------- */}
      {state === "loading" && (
        <div className={`${CARD} grid animate-pulse gap-5 p-5 sm:grid-cols-2`} aria-busy="true" aria-label="Loading user">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <div className="h-2.5 w-20 rounded bg-gray-200" />
              <div className="h-9 w-full rounded-lg bg-gray-100" />
            </div>
          ))}
        </div>
      )}

      {state === "missing" && (
        <div className={`${CARD} flex flex-col items-center gap-2 px-6 py-12 text-center`}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconUser size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{screen.label} {("not found")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("They may have been deleted, or the link is wrong.")}</p>
          <Link href={`/dashboard/${screen.list}`} className={`${TOOLBAR_BUTTON} mt-2`}>{screen.listLabel}</Link>
        </div>
      )}

      {state === "forbidden" && (
        <div className={`${CARD} flex flex-col items-center gap-2 px-6 py-12 text-center`}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconLock size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("You can't view this user")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("Only administrators, store managers and support agents can open other people's accounts.")}</p>
        </div>
      )}

      {state === "error" && (
        <div className="flex flex-col items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-amber-800">
            <IconAlertTriangle size={16} /> {("Could not load this user")}
          </div>
          {errorMessage && <p className="text-xs text-amber-700">{errorMessage}</p>}
          <button type="button" className={TOOLBAR_BUTTON} onClick={get_user}>
            <IconRefresh size={16} /> {("Try again")}
          </button>
        </div>
      )}


      {/* ---------- editor ---------- */}
      {state === "ready" && (
        <>
          {(userData?.email || userData?.phone) && (
            <div className={`${CARD} flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-3 text-sm`}>
              {userData?.email && (
                <div className="flex flex-wrap items-center gap-2">
                  <IconMail size={16} className="text-gray-400" />
                  <span className={`text-gray-700 ${blur}`}>{userData.email}</span>
                  <a href={`mailto:${userData.email}`} className={CHIP_BUTTON}>{("Email")}</a>
                  <span className={CHIP_BUTTON} onClick={() => copy(userData.email, "Email")}><IconCopy size={14} /></span>
                </div>
              )}
              {userData?.phone && (
                <div className="flex flex-wrap items-center gap-2">
                  <IconPhone size={16} className="text-gray-400" />
                  <span className={`text-gray-700 ${blur}`}>{userData.phone}</span>
                  <a href={`tel:${userData.phone}`} className={CHIP_BUTTON}>{("Call")}</a>
                  <span className={CHIP_BUTTON} onClick={() => copy(userData.phone, "Phone")}><IconCopy size={14} /></span>
                </div>
              )}
            </div>
          )}

          <div className={`grid grid-cols-1 gap-4 ${drawer ? "" : "lg:grid-cols-2"}`}>

            <WidgetWrapper className={CARD_CLASSES} title="Account">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {ACCOUNT_FIELDS.map(field)}
              </div>
              <p className="mt-4 flex items-start gap-1.5 text-xs text-gray-500">
                <IconLock size={14} className="mt-px shrink-0" />
                {("Roles and passwords can't be changed here. The email is the login, so it can be changed but not emptied.")}
              </p>
            </WidgetWrapper>

            <WidgetWrapper className={CARD_CLASSES} title="Billing">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {BILLING_FIELDS.map(field)}

                <div>
                  <label htmlFor={`user-${id}-billing_country`} className={LABEL_CLASSES}>
                    {("Country")}
                    {"billing_country" in changes && <span className="ml-1.5 text-[11px] font-medium text-[#634FE5]">{("edited")}</span>}
                  </label>
                  <select id={`user-${id}-billing_country`} className={FIELD_CLASSES} value={form.billing_country || ""}
                    onChange={ev => setform({ ...form, billing_country: ev.target.value, billing_city: "" })}>
                    <option value="">{("Choose")}</option>
                    {countryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor={`user-${id}-billing_city`} className={LABEL_CLASSES}>
                    {("City")}
                    {"billing_city" in changes && <span className="ml-1.5 text-[11px] font-medium text-[#634FE5]">{("edited")}</span>}
                  </label>
                  {cityOptions.length > 0 ? (
                    <select id={`user-${id}-billing_city`} className={FIELD_CLASSES} value={form.billing_city || ""}
                      onChange={ev => setform({ ...form, billing_city: ev.target.value })}>
                      <option value="">{("Choose")}</option>
                      {/* A stored city this country's list does not have is kept, not dropped. */}
                      {form.billing_city && !cityOptions.some(option => option.value === form.billing_city) && <option value={form.billing_city}>{form.billing_city}</option>}
                      {cityOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                  ) : (
                    <input id={`user-${id}-billing_city`} type="text" className={FIELD_CLASSES} value={form.billing_city || ""}
                      onChange={ev => setform({ ...form, billing_city: ev.target.value })} />
                  )}
                </div>
              </div>
            </WidgetWrapper>

          </div>

          <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Delivery Location">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                {form.delivery_location
                  ? <span className="inline-flex items-center gap-1 font-medium text-emerald-600"><IconMapPin size={14} /> {form.delivery_location.lat.toFixed(5)}, {form.delivery_location.lng.toFixed(5)}</span>
                  : <span className="text-gray-500">{("No location set. Pick a point on the map.")}</span>}
                <div className="flex items-center gap-2">
                  {"delivery_location" in changes && <span className="font-medium text-[#634FE5]">{("edited")}</span>}
                  {form.delivery_location && (
                    <a className={CHIP_BUTTON} href={`https://www.google.com/maps?q=${form.delivery_location.lat},${form.delivery_location.lng}`} target="_blank" rel="noopener noreferrer">{("Open in Maps")}</a>
                  )}
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <LocationPicker markerDraggable={true} latlng={form.delivery_location || undefined}
                  onLocationSelect={(coords) => setform(prev => ({ ...prev, delivery_location: toLatLng(coords) }))} />
              </div>
            </div>
          </WidgetWrapper>

          {dirty && (
            <div className="sticky bottom-4 z-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#634FE5]/30 bg-white px-4 py-3 shadow-lg">
              <span className="text-sm text-gray-700">
                {Object.keys(changes).length} {Object.keys(changes).length === 1 ? ("unsaved change") : ("unsaved changes")}
              </span>
              <div className="flex items-center gap-2">
                <button type="button" className={TOOLBAR_BUTTON} disabled={saving} onClick={() => setform(original)}>{("Discard")}</button>
                <button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={save}>
                  {saving ? <Spinner /> : <IconDeviceFloppy size={16} />} {("Save changes")}
                </button>
              </div>
            </div>
          )}
        </>
      )}

    </div>
  )
}

export default UserEdit
