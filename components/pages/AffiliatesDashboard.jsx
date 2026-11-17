"use client";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { IconRefresh, IconClick, IconShoppingCart, IconPercentage, IconCoins, IconWallet, IconArrowRight, IconCopy } from "@tabler/icons-react";

import ChartComponent from "../../components/ChartComponent";
import Spinner from "../../components/Spinner";
import { useCounterStore } from "../../store/useCounterStore";
import { useUtilsStore } from "../../store/useUtilsStore";
import { referralLink } from "../../lib/affiliateRef";
import AffiliatePayoutRequest from "./AffiliatePayoutRequest";
import { SALE_STATUS_BADGES, StatusBadge, AffiliateCell, AffiliateSelect, useAffiliateAccounts, TOOLBAR_BUTTON, FILTER_SELECT, CARD, isManager, postApi } from "./affiliateUi";

const RANGES = [
  { value: 7, label: "Last 7 days" },
  { value: 30, label: "Last 30 days" },
  { value: 90, label: "Last 90 days" },
  { value: 365, label: "Last 12 months" },
];

function rangeDates(days) {
  var to = new Date();
  var from = new Date();
  from.setDate(to.getDate() - (days - 1));
  var ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return { from_date: ymd(from), to_date: ymd(to) };
}

const Kpi = ({ icon, label, value, hint }) => (
  <div className={`${CARD} !p-4 flex flex-col gap-2`}>
    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#634FE5]/10 text-[#634FE5]">{icon}</span>
      {label}
    </div>
    <div className="text-xl font-semibold tabular-nums text-gray-900">{value}</div>
    {hint && <div className="text-[11px] text-gray-400">{hint}</div>}
  </div>
);

const Row = ({ label, value, strong }) => (
  <div className={`flex justify-between gap-3 ${strong ? "border-t border-dashed border-gray-200 pt-2 text-sm font-semibold text-gray-900" : "text-xs text-gray-500"}`}>
    <span>{label}</span><span className="tabular-nums">{value}</span>
  </div>
);


/*
  Affiliates overview. Managers see every affiliate (or one, via the filter);
  an affiliate sees their own figures - the server scopes the numbers.
*/
const AffiliatesDashboard = () => {

  const { wrapCurrency, formatDate } = useUtilsStore();
  const { token, addNotification, userDataX } = useCounterStore();

  const manager = isManager(userDataX);
  const accounts = useAffiliateAccounts(token, manager);

  var [days, setdays] = useState(30);
  var [affiliateId, setaffiliateId] = useState("");
  var [stats, setstats] = useState(null);
  var [loading, setloading] = useState(false);

  function load() {
    if (!token) return;
    setloading(true);
    postApi("get_affiliate_stats", token, { ...rangeDates(days), affiliate_id: affiliateId })
      .then((res) => {
        setstats(res?.status === "success" ? res : null);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: "error", title: "Affiliate stats not loaded", content: error.message });
      });
  }

  useEffect(load, [token, days, affiliateId]);

  const chartData = useMemo(() => {
    var series = stats?.series ?? [];
    return {
      labels: series.map((d) => d.date.slice(5)),
      datasets: [{
        label: "Commission",
        data: series.map((d) => d.commission),
        borderColor: "rgb(99, 79, 229)",
        backgroundColor: "rgba(99, 79, 229, 0.12)",
        fill: true,
        tension: 0.3,
        pointRadius: 0,
      }],
    };
  }, [stats]);

  const sales = stats?.sales;
  const balance = stats?.balance;

  function copy(text) {
    navigator.clipboard?.writeText(text).then(
      () => addNotification({ type: "success", title: "Copied", content: `${text} copied.` }),
      () => { }
    );
  }

  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Affiliates Dashboard")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {stats ? `${stats.from_date} – ${stats.to_date}` : ("Clicks, referred sales, commission and payouts")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {manager && (
            <AffiliateSelect accounts={accounts} value={affiliateId} onChange={setaffiliateId} />
          )}
          <select className={FILTER_SELECT} value={days} onChange={(ev) => setdays(parseInt(ev.target.value))}>
            {RANGES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={load}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>
        </div>
      </div>

      {!stats && loading && (
        <div className="flex items-center gap-2 text-sm text-gray-500"><Spinner size={16} /> {("Loading")}</div>
      )}

      {/* An affiliate's own code, so they know what to share. */}
      {stats?.accounts?.length > 0 && (
        <div className={`${CARD} !p-4 flex flex-wrap items-center gap-3`}>
          <span className="text-sm text-gray-600">{("Your referral link")}</span>
          {stats.accounts.map((a) => a.status === "active" ? (
            <button key={a.id} type="button" onClick={() => copy(referralLink(a.affiliate_code))} className="inline-flex max-w-full items-center gap-1.5 rounded-lg !border !border-gray-200 !bg-gray-50 px-2.5 py-1 font-mono text-sm !text-gray-800 hover:!bg-gray-100">
              <span className="truncate">{referralLink(a.affiliate_code)}</span> <IconCopy size={14} className="shrink-0 text-gray-400" />
            </button>
          ) : (
            <span key={a.id} className="text-xs text-amber-700">{("Your affiliate account is inactive, so referrals are not tracked.")}</span>
          ))}
          <span className="text-[11px] text-gray-400">{("Add ?ref=")}{stats.accounts[0]?.affiliate_code}{(" to any shop link.")}</span>
          {stats.accounts[0]?.commission_type === "percentage" && parseFloat(stats.accounts[0]?.commission_value) > 0 && (
            <span className="text-xs text-gray-500">{parseFloat(stats.accounts[0].commission_value)}% {("commission")}</span>
          )}
        </div>
      )}

      {stats && (
        <>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            <Kpi icon={<IconClick size={16} />} label={("Clicks")} value={stats.clicks.toLocaleString()} />
            <Kpi icon={<IconShoppingCart size={16} />} label={("Referred sales")} value={sales.count.toLocaleString()} hint={(sales.by_status?.rejected?.count ?? 0) > 0 ? `${sales.by_status.rejected.count} rejected, not counted` : null} />
            <Kpi icon={<IconPercentage size={16} />} label={("Conversion")} value={`${stats.conversion_rate}%`} hint={("Sales ÷ clicks")} />
            <Kpi icon={<IconCoins size={16} />} label={("Referred revenue")} value={wrapCurrency(sales.revenue)} />
            <Kpi icon={<IconWallet size={16} />} label={("Commission")} value={wrapCurrency(sales.commission)} hint={`${wrapCurrency(stats.payouts_paid)} ${("paid out in range")}`} />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className={`${CARD} lg:col-span-2`}>
              <div className="mb-3 text-sm font-semibold text-gray-900">{("Commission per day")}</div>
              <ChartComponent chartData={chartData} />
            </div>

            <div className="flex flex-col gap-4">
              <div className={`${CARD} flex flex-col gap-1.5`}>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{("Commission by status")}</div>
                {Object.entries(sales.by_status ?? {}).map(([key, s]) => (
                  <div key={key} className="flex items-center justify-between gap-3 py-0.5">
                    <span className="flex items-center gap-2"><StatusBadge badges={SALE_STATUS_BADGES} status={key} /> <span className="text-xs text-gray-400">{s.count}</span></span>
                    <span className="text-sm tabular-nums text-gray-700">{wrapCurrency(s.commission)}</span>
                  </div>
                ))}
              </div>

              <div className={`${CARD} flex flex-col gap-1.5`}>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{("Balance · all time")}</div>
                <Row label={("Earned (approved + paid)")} value={wrapCurrency(balance.earned)} />
                <Row label={("Paid out")} value={wrapCurrency(balance.paid_out)} />
                <Row label={("Payouts in progress")} value={wrapCurrency(balance.pending_payouts)} />
                <Row label={("Due")} value={wrapCurrency(balance.due)} />
                {/* Due less in-progress payouts: the most a new payout may be. */}
                <Row label={("Available for payout")} value={wrapCurrency(Math.max(0, balance.available ?? balance.due))} strong />
                {balance.min_payout > 0 && (
                  <div className={`mt-1 text-[11px] ${(balance.available ?? balance.due) >= balance.min_payout ? "text-emerald-700" : "text-gray-500"}`}>
                    {(balance.available ?? balance.due) >= balance.min_payout
                      ? `${("Ready for payout")} · ${("minimum")} ${wrapCurrency(balance.min_payout)}`
                      : `${wrapCurrency(Math.max(0, balance.min_payout - (balance.available ?? balance.due)))} ${("more to reach the")} ${wrapCurrency(balance.min_payout)} ${("minimum payout")}`}
                  </div>
                )}
                {!manager && (
                  <div className="mt-3">
                    <AffiliatePayoutRequest available={Math.max(0, balance.available ?? 0)} minPayout={balance.min_payout ?? 0} openRequest={stats.open_request} defaults={stats.accounts?.[0]} onChanged={load} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-4 ${manager ? "lg:grid-cols-2" : ""}`}>
            {manager && (
              <div className={CARD}>
                <div className="mb-3 text-sm font-semibold text-gray-900">{("Top affiliates")}</div>
                {stats.top_affiliates?.length ? (
                  <div className="flex flex-col divide-y divide-gray-100">
                    {stats.top_affiliates.map((a) => (
                      <div key={a.affiliate_id} className="flex items-center justify-between gap-3 py-2.5">
                        <AffiliateCell entry={a} />
                        <div className="flex shrink-0 flex-col items-end">
                          <span className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(parseFloat(a.commission || 0))}</span>
                          <span className="text-[11px] text-gray-500">{a.sales} {("sales")} · {wrapCurrency(parseFloat(a.revenue || 0))}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400">{("No referred sales in this range.")}</p>
                )}
              </div>
            )}

            <div className={CARD}>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">{("Recent sales")}</span>
                <Link href="/dashboard/affiliate-sales" className="inline-flex items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">{("All sales")} <IconArrowRight size={14} /></Link>
              </div>
              {stats.recent_sales?.length ? (
                <div className="flex flex-col divide-y divide-gray-100">
                  {stats.recent_sales.map((s) => (
                    <Link key={s.id} href={`/dashboard/affiliate-sales/${s.id}`} className="flex items-center justify-between gap-3 py-2.5 hover:bg-gray-50">
                      <div className="flex min-w-0 flex-col">
                        <span className="text-sm text-gray-800">{("Order")} #{s.order_id}{manager && s.affiliate_name ? ` · ${s.affiliate_name}` : ""}</span>
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
                <p className="text-xs text-gray-400">{("No referred sales in this range.")}</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AffiliatesDashboard;
