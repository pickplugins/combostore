'use client'
import React, { useEffect, useState, useMemo } from 'react'
import Link from "next/link";
import {
  IconArrowLeft, IconArrowUpRight, IconDeviceFloppy, IconCopy, IconRefresh, IconClick, IconShoppingCart,
  IconPercentage, IconCoins, IconWallet, IconArrowRight, IconPlus, IconAlertTriangle, IconCalendar, IconMail, IconPhone,
  IconEye, IconEyeOff, IconLock,
} from "@tabler/icons-react";

import Spinner from '../../components/Spinner';
import PopoverButton from '../../components/PopoverButton';
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore'
import {
  SALE_STATUS_BADGES, PAYOUT_STATUS_BADGES, StatusBadge, RequestedTag, BADGE_BASE,
  TOOLBAR_BUTTON, PRIMARY_BUTTON, FIELD, LABEL, CARD, FILTER_SELECT, postApi, useAffiliateAccountsInfo,
} from "./affiliateUi";
import { PayoutForm } from "./AffiliatePayoutEdit";
import { referralLink } from "../../lib/affiliateRef";


/*
  One affiliate, for the store: who they are, how they perform, what they are
  owed, and the settings that decide it. Replaces the customer profile this
  page used to show (kids, customer category, billing / shipping addresses,
  delivery map) - none of which applies to an affiliate. Contact details are
  saved through the same update_user_profile route, sending only name, email
  and phone, so nothing else on the user is touched.

  A page (/dashboard/affiliates/[id], id = the WordPress user id) and a drawer
  (variant="drawer").
*/

const RANGES = [
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
  { value: 365, label: "Last 12 months" },
  { value: 0, label: "All time" },
];

function rangeDates(days) {
  var ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  var to = new Date();
  if (!days) return { from_date: "2000-01-01", to_date: ymd(to) };
  var from = new Date();
  from.setDate(to.getDate() - (days - 1));
  return { from_date: ymd(from), to_date: ymd(to) };
}

const Kpi = ({ icon, label, value, hint }) => (
  <div className={`${CARD} !p-4 flex min-w-0 flex-col gap-1.5`}>
    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#634FE5]/10 text-[#634FE5]">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
    <div className="truncate text-lg font-semibold tabular-nums text-gray-900">{value}</div>
    {hint && <div className="truncate text-[11px] text-gray-400">{hint}</div>}
  </div>
);

const Row = ({ label, value, strong }) => (
  <div className={`flex justify-between gap-3 ${strong ? "border-t border-dashed border-gray-200 pt-2 text-sm font-semibold text-gray-900" : "text-xs text-gray-500"}`}>
    <span>{label}</span><span className="tabular-nums">{value}</span>
  </div>
);

const CardTitle = ({ children, action }) => (
  <div className="mb-3 flex items-center justify-between gap-2">
    <h2 className="text-sm font-semibold text-gray-900">{children}</h2>
    {action}
  </div>
);

const SeeAll = ({ href, children }) => (
  <Link href={href} className="inline-flex items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">{children} <IconArrowRight size={14} /></Link>
);


/* 16 characters from an unambiguous set (no 0/O, 1/l/I), from the browser's crypto RNG. */
function generatePassword(length = 16) {
  var chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%*-_";
  var bytes = new Uint32Array(length);
  window.crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => chars[b % chars.length]).join("");
}

/*
  Set a new password for the affiliate. update_user_password lets only an
  administrator set someone else's password (never another administrator's),
  so store managers get a note instead of the box. Setting it ends every
  sign-in the affiliate has (ComboStoreTokenRevocation refuses tokens issued
  before the change).
*/
/* `who`: how to name the person in the messages (affiliate, rider...). Also used by RiderEdit. */
export const PasswordCard = ({ userId, user, who = "affiliate" }) => {
  const { token, addNotification, userDataX } = useCounterStore();
  var [pass1, setpass1] = useState("");
  var [pass2, setpass2] = useState("");
  var [show, setshow] = useState(false);
  var [saving, setsaving] = useState(false);

  const isAdmin = (userDataX?.roles ?? []).includes("administrator");
  const targetIsAdmin = (user?.roles ?? []).includes("administrator");
  const isSelf = String(userId) === String(userDataX?.id);

  if (isSelf) return null; /* your own password is changed from your profile, with the current one */

  if (!isAdmin || targetIsAdmin) {
    return (
      <div className={CARD}>
        <CardTitle>{("Password")}</CardTitle>
        <p className="text-xs text-gray-500">
          {targetIsAdmin
            ? ("This user is an administrator. Only they can change their password.")
            : `Only an administrator can set a ${who}'s password. The ${who} can also reset it from the sign-in page.`}
        </p>
      </div>
    );
  }

  var problem =
    pass1.length > 0 && pass1.length < 8 ? "Use at least 8 characters." :
      pass2.length > 0 && pass1 !== pass2 ? "The two passwords don't match." : null;
  var ready = pass1.length >= 8 && pass1 === pass2;

  function save() {
    setsaving(true);
    postApi("update_user_password", token, { id: userId, old_password: "", new_password: pass1 })
      .then((res) => {
        setsaving(false);
        if (res?.errors?.length) {
          addNotification({ type: "error", title: "Password not set", content: res.errors });
          return;
        }
        addNotification({ type: "success", title: "Password set", content: `The ${who} has been signed out everywhere and can sign in with the new password. Let them know it privately.` });
        setpass1(""); setpass2(""); setshow(false);
      })
      .catch((error) => { setsaving(false); addNotification({ type: "error", title: "Password not set", content: error.message }); });
  }

  return (
    <div className={CARD}>
      <CardTitle action={
        <button type="button" className="!border-0 !bg-transparent !p-0 !text-xs !font-medium !text-[#634FE5] !shadow-none hover:underline"
          onClick={() => { var p = generatePassword(); setpass1(p); setpass2(p); setshow(true); }}>
          {("Generate")}
        </button>
      }>{("Set a new password")}</CardTitle>
      <div className="flex flex-col gap-3">
        <div>
          <label className={LABEL}>{("New password")}</label>
          <div className="flex gap-2">
            <input type={show ? "text" : "password"} autoComplete="new-password" className={`${FIELD} font-mono`} value={pass1} onChange={(ev) => setpass1(ev.target.value)} />
            <button type="button" className={TOOLBAR_BUTTON} onClick={() => setshow(!show)} title={show ? "Hide" : "Show"}>
              {show ? <IconEyeOff size={16} /> : <IconEye size={16} />}
            </button>
            {show && pass1 && (
              <button type="button" className={TOOLBAR_BUTTON} title={("Copy")} onClick={() => navigator.clipboard?.writeText(pass1).then(() => addNotification({ type: "success", title: "Copied", content: "Password copied." }), () => { })}>
                <IconCopy size={16} />
              </button>
            )}
          </div>
        </div>
        <div>
          <label className={LABEL}>{("Confirm password")}</label>
          <input type={show ? "text" : "password"} autoComplete="new-password" className={`${FIELD} font-mono`} value={pass2} onChange={(ev) => setpass2(ev.target.value)} />
        </div>
        {problem
          ? <p className="text-xs text-rose-600">{problem}</p>
          : <p className="text-[11px] text-gray-400">{`At least 8 characters. Setting it signs the ${who} out on every device. Send it to them privately.`}</p>}
        <div className="flex justify-end">
          <button type="button" className={PRIMARY_BUTTON} disabled={saving || !ready} onClick={save}>
            <IconLock size={16} /> {saving ? ("Setting...") : ("Set password")}
          </button>
        </div>
      </div>
    </div>
  );
};


const AffiliateEdit = ({ id, variant = "page" }) => {

  const { token, addNotification, paymentGateways } = useCounterStore()
  const { wrapCurrency, formatDate } = useUtilsStore()
  const drawer = variant === "drawer";

  var [account, setaccount] = useState(null);
  var [user, setuser] = useState(null);
  var [profile, setprofile] = useState(null);
  var [loadError, setloadError] = useState(false);

  var [days, setdays] = useState(30);
  var [stats, setstats] = useState(null);
  var [payouts, setpayouts] = useState(null);
  var [statsLoading, setstatsLoading] = useState(false);

  var [accountForm, setaccountForm] = useState(null);
  var [profileForm, setprofileForm] = useState(null);
  var [savingAccount, setsavingAccount] = useState(false);
  var [savingProfile, setsavingProfile] = useState(false);

  /* `available` per account and the minimum, for the Add payout form. */
  const { accounts: allAccounts, minPayout } = useAffiliateAccountsInfo(token, !!account);
  const accountWithBalance = allAccounts.find((a) => String(a.id) === String(account?.id));

  function loadAccount() {
    if (!token || !id) return;
    setloadError(false);
    postApi("get_affiliate_account", token, { user_id: id })
      .then((res) => {
        if (res?.status !== "success" || !res?.account) { setloadError(true); return; }
        var a = res.account;
        setaccount(a);
        setuser(res.user ?? null);
        setaccountForm({
          affiliate_code: a.affiliate_code, status: a.status, commission_type: a.commission_type, commission_value: a.commission_value,
          payout_method: a.payout_method ?? "", payout_details: a.payout_details ?? "",
        });
      })
      .catch(() => setloadError(true));

    postApi("get_customer", token, { id })
      .then((res) => {
        var c = res?.customer ?? null;
        setprofile(c);
        setprofileForm(c ? { first_name: c.first_name ?? "", last_name: c.last_name ?? "", name: c.name ?? "", email: c.email ?? "", phone: c.phone ?? "" } : null);
      })
      .catch(() => { });
  }

  function loadActivity() {
    if (!token || !account?.id) return;
    setstatsLoading(true);
    Promise.all([
      postApi("get_affiliate_stats", token, { ...rangeDates(days), affiliate_id: account.id }),
      postApi("get_affiliate_payouts", token, { affiliate_id: account.id, per_page: 5, paged: 1 }),
      postApi("get_affiliate_payouts", token, { affiliate_id: account.id, status: "requested", per_page: 5, paged: 1 }),
    ])
      .then(([s, p, r]) => {
        setstats(s?.status === "success" ? s : null);
        setpayouts({ recent: p?.posts ?? [], total: parseInt(p?.total) || 0, waiting: r?.posts ?? [] });
        setstatsLoading(false);
      })
      .catch((error) => {
        setstatsLoading(false);
        addNotification({ type: "error", title: "Affiliate activity not loaded", content: error.message });
      });
  }

  useEffect(loadAccount, [token, id]);
  useEffect(loadActivity, [token, account?.id, days]);

  function saveAccount() {
    setsavingAccount(true);
    postApi("update_affiliate_account", token, { id: account.id, ...accountForm })
      .then((res) => {
        setsavingAccount(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "The account could not be saved." });
          return;
        }
        addNotification({ type: "success", title: "Saved", content: "Affiliate settings updated." });
        loadAccount();
      })
      .catch((error) => { setsavingAccount(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
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
        loadAccount();
      })
      .catch((error) => { setsavingProfile(false); addNotification({ type: "error", title: "Not saved", content: error.message }); });
  }

  function copy(text) {
    navigator.clipboard?.writeText(text).then(
      () => addNotification({ type: "success", title: "Copied", content: text }),
      () => { }
    );
  }

  var setA = (key) => (ev) => setaccountForm({ ...accountForm, [key]: ev.target.value });
  var setP = (key) => (ev) => setprofileForm({ ...profileForm, [key]: ev.target.value });

  const accountDirty = useMemo(() => account && accountForm && ["affiliate_code", "status", "commission_type", "commission_value", "payout_method", "payout_details"]
    .some((k) => String(accountForm[k] ?? "") !== String(account[k] ?? "")), [account, accountForm]);
  const profileDirty = useMemo(() => profile && profileForm && Object.keys(profileForm)
    .some((k) => String(profileForm[k] ?? "") !== String(profile[k] ?? "")), [profile, profileForm]);

  const gatewayOptions = Object.entries(paymentGateways ?? {}).map(([value, g]) => ({ value, label: g?.label ?? value }));
  const link = account ? referralLink(account.affiliate_code) : "";
  const sales = stats?.sales;
  const balance = stats?.balance;
  const qs = account ? `?affiliate_id=${account.id}` : "";
  const commissionText = account
    ? (account.commission_type === "flat" ? `${wrapCurrency(parseFloat(account.commission_value || 0))} per order` : `${parseFloat(account.commission_value || 0)}% of orders`)
    : "";


  if (loadError) {
    return (
      <div className={drawer ? "flex w-full flex-col gap-4" : "page-shell"}>
        <div className={`${CARD} flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500`}>
          {("This affiliate could not be loaded.")}
          <div className="flex gap-2">
            <Link href="/dashboard/affiliates" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All affiliates")}</Link>
            <button type="button" className={TOOLBAR_BUTTON} onClick={loadAccount}><IconRefresh size={16} /> {("Try again")}</button>
          </div>
        </div>
      </div>
    );
  }

  if (!account || !accountForm) {
    return (
      <div className={drawer ? "flex w-full flex-col gap-4" : "page-shell"}>
        <div className="flex items-center gap-2 text-sm text-gray-500"><Spinner size={16} /> {("Loading affiliate")}</div>
      </div>
    );
  }


  return (
    <div className={drawer ? "flex w-full flex-col gap-4" : "page-shell"}>

      {/* ---------- Header: who, their link, their terms ---------- */}
      <div className={CARD}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {user?.avatar && <img src={user.avatar} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full bg-gray-100" />}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-xl font-semibold text-gray-900">{user?.name || `Affiliate #${id}`}</h1>
                <span className={`${BADGE_BASE} ${account.status === "active" ? "bg-emerald-50 text-emerald-700 ring-emerald-200" : "bg-gray-100 text-gray-600 ring-gray-200"}`}>
                  {account.status === "active" ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                {user?.email && <a href={`mailto:${user.email}`} className="inline-flex items-center gap-1 hover:text-gray-800"><IconMail size={13} /> {user.email}</a>}
                {profile?.phone && <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-1 hover:text-gray-800"><IconPhone size={13} /> {profile.phone}</a>}
                {user?.registered && <span className="inline-flex items-center gap-1"><IconCalendar size={13} /> {("Joined")} {formatDate(user.registered, "DD-MM-YYYY")}</span>}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {drawer ? (
              <Link href={`/dashboard/affiliates/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
            ) : (
              <Link href="/dashboard/affiliates" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All affiliates")}</Link>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4 text-sm">
          <span className="text-xs text-gray-500">{("Referral link")}</span>
          <button type="button" disabled={account.status !== "active"} onClick={() => copy(link)} title={account.status === "active" ? "Copy" : "Inactive: visits through this link are not tracked"}
            className="inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-lg !border !border-gray-200 !bg-gray-50 px-2.5 py-1 font-mono text-xs !text-gray-800 hover:!bg-gray-100 disabled:opacity-50">
            <span className="truncate">{link}</span> <IconCopy size={14} className="shrink-0 text-gray-400" />
          </button>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-600">{commissionText}</span>
          {!user?.is_affiliate && (
            <span className="inline-flex items-center gap-1 text-xs text-amber-700"><IconAlertTriangle size={14} /> {("This user doesn't have the affiliate role, so they can't sign in to the affiliate dashboard.")}</span>
          )}
        </div>
      </div>

      {/* ---------- A request waiting for the store ---------- */}
      {payouts?.waiting?.length > 0 && payouts.waiting.map((p) => (
        <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
          <div className="text-sm text-violet-900">
            <span className="font-semibold">{("Payout request")}: {wrapCurrency(parseFloat(p.amount || 0))}</span>
            <span className="text-violet-700"> · {("since")} {formatDate(p.requested_at || p.created_at)}</span>
            {p.notes && <div className="mt-0.5 whitespace-pre-line text-xs text-violet-800">{("Send to")}: {p.notes}</div>}
          </div>
          <Link href={`/dashboard/affiliate-payouts/${p.id}`} className={PRIMARY_BUTTON}>{("Review request")} <IconArrowRight size={16} /></Link>
        </div>
      ))}

      {/* ---------- Performance ---------- */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-gray-900">{("Performance")}</h2>
        <div className="flex items-center gap-2">
          {statsLoading && <Spinner size={16} />}
          <select className={FILTER_SELECT} value={days} onChange={(ev) => setdays(parseInt(ev.target.value))}>
            {RANGES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          <Kpi icon={<IconClick size={14} />} label={("Clicks")} value={stats.clicks.toLocaleString()} />
          <Kpi icon={<IconShoppingCart size={14} />} label={("Referred sales")} value={sales.count.toLocaleString()} hint={(sales.by_status?.rejected?.count ?? 0) > 0 ? `${sales.by_status.rejected.count} rejected, not counted` : null} />
          <Kpi icon={<IconPercentage size={14} />} label={("Conversion")} value={`${stats.conversion_rate}%`} />
          <Kpi icon={<IconCoins size={14} />} label={("Referred revenue")} value={wrapCurrency(sales.revenue)} />
          <Kpi icon={<IconWallet size={14} />} label={("Commission")} value={wrapCurrency(sales.commission)} hint={`${wrapCurrency(sales.by_status?.pending?.commission ?? 0)} ${("pending approval")}`} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {/* ---------- Left: activity ---------- */}
        <div className="flex min-w-0 flex-col gap-4 lg:col-span-2">

          <div className={CARD}>
            <CardTitle action={<SeeAll href={`/dashboard/affiliate-sales${qs}`}>{("All sales")}</SeeAll>}>{("Recent sales")}</CardTitle>
            {stats?.recent_sales?.length ? (
              <div className="flex flex-col divide-y divide-gray-100">
                {stats.recent_sales.map((s) => (
                  <Link key={s.id} href={`/dashboard/affiliate-sales/${s.id}`} className="flex items-center justify-between gap-3 py-2.5 hover:bg-gray-50">
                    <div className="flex min-w-0 flex-col">
                      <span className="text-sm text-gray-800">{("Order")} #{s.order_id} <span className="text-gray-400">· {wrapCurrency(parseFloat(s.order_total || 0))}</span></span>
                      <span className="text-[11px] text-gray-500">{s.created_at ? formatDate(s.created_at) : ""}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <StatusBadge badges={SALE_STATUS_BADGES} status={s.status} />
                      <span className="w-24 text-right text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(parseFloat(s.commission_amount || 0))}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-400">{days ? ("No referred sales in this range.") : ("No referred sales yet.")}</p>
            )}
          </div>

          <div className={CARD}>
            <CardTitle action={
              <div className="flex items-center gap-3">
                <SeeAll href={`/dashboard/affiliate-payouts${qs}`}>{("All payouts")}{payouts?.total ? ` (${payouts.total})` : ""}</SeeAll>
                <PopoverButton buttonLabel={("Add payout")} buttonIcon={<IconPlus size={14} />} title={("Add payout")} drawer={"right"}
                  buttonClass={TOOLBAR_BUTTON.replace("!h-9", "!h-8")}>
                  <div className="p-5 text-left">
                    <PayoutForm
                      accounts={accountWithBalance ? [accountWithBalance] : []}
                      minPayout={minPayout}
                      initial={{ affiliate_id: account.id, payment_method: account.payout_method, notes: account.payout_details }}
                      onSaved={() => { loadActivity(); }}
                    />
                  </div>
                </PopoverButton>
              </div>
            }>{("Payouts")}</CardTitle>
            {payouts?.recent?.length ? (
              <div className="flex flex-col divide-y divide-gray-100">
                {payouts.recent.map((p) => (
                  <Link key={p.id} href={`/dashboard/affiliate-payouts/${p.id}`} className="flex items-center justify-between gap-3 py-2.5 hover:bg-gray-50">
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="flex flex-wrap items-center gap-1.5 text-sm text-gray-800">
                        #{p.id}
                        {p.payment_method && <span className="text-gray-400">· {paymentGateways?.[p.payment_method]?.label ?? p.payment_method}</span>}
                        {p.requested_at && <RequestedTag at={p.requested_at} />}
                      </span>
                      <span className="text-[11px] text-gray-500">{formatDate(p.paid_at || p.created_at)}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <StatusBadge badges={PAYOUT_STATUS_BADGES} status={p.status} />
                      <span className="w-24 text-right text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(parseFloat(p.amount || 0))}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-400">{("No payouts yet.")}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <SeeAll href={`/dashboard/affiliate-clicks${qs}`}>{("See their clicks")}</SeeAll>
          </div>
        </div>

        {/* ---------- Right: money and settings ---------- */}
        <div className="flex min-w-0 flex-col gap-4">

          {balance && (
            <div className={`${CARD} flex flex-col gap-1.5`}>
              <CardTitle>{("Balance · all time")}</CardTitle>
              <Row label={("Earned (approved + paid)")} value={wrapCurrency(balance.earned)} />
              <Row label={("Paid out")} value={wrapCurrency(balance.paid_out)} />
              <Row label={("Requested / in progress")} value={wrapCurrency(balance.pending_payouts)} />
              <Row label={("Available for payout")} value={wrapCurrency(Math.max(0, balance.available ?? 0))} strong />
              {balance.min_payout > 0 && (
                <div className={`mt-1 text-[11px] ${(balance.available ?? 0) >= balance.min_payout ? "text-emerald-700" : "text-gray-500"}`}>
                  {(balance.available ?? 0) >= balance.min_payout ? ("Above the minimum payout of") : ("Below the minimum payout of")} {wrapCurrency(balance.min_payout)}
                </div>
              )}
            </div>
          )}

          <div className={CARD}>
            <CardTitle>{("Affiliate settings")}</CardTitle>
            <div className="flex flex-col gap-3">
              <div>
                <label className={LABEL}>{("Referral code")}</label>
                <input className={`${FIELD} font-mono`} value={accountForm.affiliate_code} onChange={setA("affiliate_code")} />
                <p className="mt-1 text-[11px] text-gray-400">{("Changing it breaks links already shared with the old code.")}</p>
              </div>
              <div>
                <label className={LABEL}>{("Status")}</label>
                <select className={FIELD} value={accountForm.status} onChange={setA("status")}>
                  <option value="active">{("Active: links are tracked")}</option>
                  <option value="inactive">{("Inactive: links are not tracked")}</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={LABEL}>{("Commission")}</label>
                  <select className={FIELD} value={accountForm.commission_type} onChange={setA("commission_type")}>
                    <option value="percentage">{("Percentage")}</option>
                    <option value="flat">{("Flat per order")}</option>
                  </select>
                </div>
                <div>
                  <label className={LABEL}>{accountForm.commission_type === "flat" ? ("Amount") : ("Rate (%)")}</label>
                  <input type="number" step="0.01" min="0" className={FIELD} value={accountForm.commission_value} onChange={setA("commission_value")} />
                </div>
              </div>
              <p className="text-[11px] text-gray-400">{("A percentage is of the order total less shipping and tax. Changes apply to new orders.")}</p>

              <div className="mt-1 border-t border-gray-100 pt-3">
                <label className={LABEL}>{("Payout method")}</label>
                <input list="affiliate-edit-methods" className={FIELD} value={accountForm.payout_method} onChange={setA("payout_method")} placeholder={("bKash, bank transfer...")} />
                <datalist id="affiliate-edit-methods">
                  {gatewayOptions.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}
                </datalist>
              </div>
              <div>
                <label className={LABEL}>{("Payout account")}</label>
                <textarea rows={2} className={FIELD} value={accountForm.payout_details} onChange={setA("payout_details")} placeholder={("Wallet number, or bank account name and number")} />
                <p className="mt-1 text-[11px] text-gray-400">{("Filled in for you when adding a payout, and on the affiliate's own payout request form.")}</p>
              </div>

              <div className="flex justify-end">
                <button type="button" className={PRIMARY_BUTTON} disabled={savingAccount || !accountDirty} onClick={saveAccount}>
                  <IconDeviceFloppy size={16} /> {savingAccount ? ("Saving...") : ("Save settings")}
                </button>
              </div>
            </div>
          </div>

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

          <PasswordCard userId={id} user={user} />

        </div>
      </div>
    </div>
  )
}

export default AffiliateEdit
