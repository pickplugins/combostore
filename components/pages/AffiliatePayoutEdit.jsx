"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IconArrowLeft, IconArrowUpRight, IconRefresh, IconDeviceFloppy, IconCreditCard, IconPlus } from "@tabler/icons-react";

import Spinner from "../../components/Spinner";
import { useCounterStore } from "../../store/useCounterStore";
import { useUtilsStore } from "../../store/useUtilsStore";
import {
  PAYOUT_STATUS_BADGES, StatusBadge, RequestedTag, toOptions, AffiliateCell, accountLabel,
  TOOLBAR_BUTTON, PRIMARY_BUTTON, FIELD, LABEL, CARD, postApi, useAffiliateAccountsInfo,
} from "./affiliateUi";

const STATUS_OPTIONS = toOptions(PAYOUT_STATUS_BADGES);

const Figure = ({ label, value, strong }) => (
  <div className="flex min-w-0 flex-col gap-0.5">
    <span className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{label}</span>
    <span className={`truncate tabular-nums ${strong ? "text-lg font-semibold text-gray-900" : "text-sm text-gray-700"}`}>{value}</span>
  </div>
);


/*
  The payout fields. Used to create a payout (no `id`: affiliate required,
  calls create_affiliate_payout) and to edit one (calls update_affiliate_payout).
*/
export const PayoutForm = ({ id, initial, accounts = [], minPayout = 0, onSaved }) => {
  const { token, addNotification, paymentGateways } = useCounterStore();
  const { wrapCurrency } = useUtilsStore();
  var creating = !id;

  var [form, setform] = useState(() => ({
    affiliate_id: initial?.affiliate_id ?? "",
    amount: initial?.amount ?? "",
    payment_method: initial?.payment_method ?? "",
    transaction_id: initial?.transaction_id ?? "",
    status: initial?.status ?? "pending",
    notes: initial?.notes ?? "",
  }));
  var [saving, setsaving] = useState(false);

  /* Turning down an affiliate's request: the server emails them, with this message if given. */
  var [cancelMessage, setcancelMessage] = useState("");
  /* Same rule as the server: began as a request, not already cancelled or paid. */
  var cancellingRequest = !creating && !!initial?.requested_at && !["cancelled", "paid"].includes(initial?.status) && form.status === "cancelled";

  var set = (key) => (ev) => setform({ ...form, [key]: ev.target.value });

  function save() {
    setsaving(true);
    postApi(creating ? "create_affiliate_payout" : "update_affiliate_payout", token, creating ? form : { id, ...form, ...(cancellingRequest ? { cancel_message: cancelMessage } : {}) })
      .then((res) => {
        setsaving(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Payout not saved", content: res?.message ?? "The payout could not be saved." });
          return;
        }
        addNotification({ type: "success", title: creating ? "Payout added" : "Saved", content: creating ? `Payout #${res.id} created.` : `Payout #${id} updated.` });
        onSaved?.(res.id);
      })
      .catch((error) => {
        setsaving(false);
        addNotification({ type: "error", title: "Payout not saved", content: error.message });
      });
  }

  /*
    What this payout may be at most, as the server checks it: the affiliate's
    available balance, plus this payout's own amount when editing a live one
    (the balance already has it taken out). Null until the accounts load.
  */
  var DRAWING = ["requested", "pending", "processing", "paid"];
  var account = accounts.find((a) => String(a.id) === String(form.affiliate_id || initial?.affiliate_id));
  var maxAmount = account
    ? (parseFloat(account.available) || 0) + (!creating && DRAWING.includes(initial?.status) && String(initial?.affiliate_id) === String(account.id) ? parseFloat(initial?.amount) || 0 : 0)
    : null;
  var overBalance = maxAmount !== null && DRAWING.includes(form.status) && form.amount !== "" && parseFloat(form.amount) > maxAmount + 0.005;

  var gatewayOptions =Object.entries(paymentGateways ?? {}).map(([value, g]) => ({ value, label: g?.label ?? value }));

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {creating && (
          <div className="sm:col-span-2">
            <label className={LABEL}>{("Affiliate")}</label>
            <select className={FIELD} value={form.affiliate_id} onChange={set("affiliate_id")}>
              <option value="">{("Choose an affiliate")}</option>
              {accounts.map((a) => <option key={a.id} value={a.id}>{accountLabel(a)}</option>)}
            </select>
          </div>
        )}
        <div>
          <label className={LABEL}>{("Amount")}</label>
          <input type="number" step="0.01" min={minPayout || 0} className={FIELD} value={form.amount} onChange={set("amount")} />
          {maxAmount !== null && (
            <p className={`mt-1 text-xs ${overBalance ? "text-rose-600" : "text-gray-500"}`}>
              {("Available to pay")}: {wrapCurrency(Math.max(0, maxAmount))}
              {maxAmount > 0 && (
                <button type="button" className="ml-2 !border-0 !bg-transparent !p-0 !text-xs !font-medium !text-[#634FE5] !shadow-none hover:underline" onClick={() => setform({ ...form, amount: maxAmount.toFixed(2) })}>{("Use full amount")}</button>
              )}
            </p>
          )}
          {minPayout > 0 && (
            <p className={`mt-1 text-xs ${form.amount !== "" && parseFloat(form.amount) < minPayout ? "text-rose-600" : "text-gray-500"}`}>
              {("Minimum payout")}: {wrapCurrency(minPayout)}
            </p>
          )}
        </div>
        <div>
          <label className={LABEL}>{("Status")}</label>
          <select className={FIELD} value={form.status} onChange={set("status")}>
            {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div>
          <label className={LABEL}>{("Payment method")}</label>
          <input list="affiliate-payout-methods" className={FIELD} value={form.payment_method} onChange={set("payment_method")} placeholder={("bKash, bank transfer...")} />
          <datalist id="affiliate-payout-methods">
            {gatewayOptions.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}
          </datalist>
        </div>
        <div>
          <label className={LABEL}>{("Transaction ID")}</label>
          <input className={FIELD} value={form.transaction_id} onChange={set("transaction_id")} />
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL}>{("Notes")}</label>
          <textarea rows={3} className={FIELD} value={form.notes} onChange={set("notes")} />
        </div>
        {cancellingRequest && (
          <div className="sm:col-span-2 rounded-lg border border-violet-200 bg-violet-50 p-3">
            <label className={LABEL}>{("Message to the affiliate (optional)")}</label>
            <textarea rows={3} className={FIELD} value={cancelMessage} onChange={(ev) => setcancelMessage(ev.target.value)} placeholder={("Why the request was cancelled, or what to do next")} />
            <p className="mt-1.5 text-xs text-violet-800">{("Saving cancels this request and emails the affiliate (unless switched off in Settings › Affiliates). Notes above are not included.")}</p>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <button type="button" className={PRIMARY_BUTTON} disabled={saving || (creating && !form.affiliate_id) || overBalance} onClick={save}>
          {creating ? <IconPlus size={16} /> : <IconDeviceFloppy size={16} />}
          {saving ? ("Saving...") : creating ? ("Add payout") : ("Save")}
        </button>
      </div>
    </div>
  );
};


/* One payout: a page (/dashboard/affiliate-payouts/[id]) and the list's Edit drawer. */
const AffiliatePayoutEdit = ({ id, variant = "page", onSaved }) => {

  const { wrapCurrency, formatDate } = useUtilsStore();
  const { token, paymentGateways } = useCounterStore();

  var [loading, setloading] = useState(false);
  var [payout, setpayout] = useState(null);
  var [canEdit, setcanEdit] = useState(false);
  var [version, setversion] = useState(0);

  /* Only managers edit, and only they may read the accounts route that carries the minimum. */
  const { accounts, minPayout } = useAffiliateAccountsInfo(token, canEdit);

  function load() {
    if (!id || !token) return;
    setloading(true);
    postApi("get_affiliate_payout", token, { id })
      .then((res) => {
        setpayout(res?.payout?.id ? res.payout : null);
        setcanEdit(!!res?.can_edit);
        setversion((v) => v + 1);
        setloading(false);
      })
      .catch(() => setloading(false));
  }

  useEffect(load, [id, token]);

  var drawer = variant === "drawer";

  return (
    <div className={drawer ? "flex w-full flex-col gap-4" : "mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6"}>

      <div className={CARD}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-gray-900">
              {("Payout")} <span className="font-normal text-gray-400">#{id}</span>
            </h1>
            {payout && <div className="mt-2"><AffiliateCell entry={payout} /></div>}
          </div>
          {drawer ? (
            <Link href={`/dashboard/affiliate-payouts/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
          ) : (
            <Link href="/dashboard/affiliate-payouts" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All payouts")}</Link>
          )}
        </div>

        {loading && !payout && (
          <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500"><Spinner size={16} /> {("Loading payout")}</div>
        )}

        {!loading && !payout && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 text-sm text-gray-500">
            {("This payout could not be loaded.")}
            <button type="button" className={TOOLBAR_BUTTON} onClick={load}><IconRefresh size={16} /> {("Try again")}</button>
          </div>
        )}

        {payout && (
          <>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <StatusBadge badges={PAYOUT_STATUS_BADGES} status={payout.status} />
              {payout.requested_at && <RequestedTag at={payout.requested_at} />}
              {payout.payment_method && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                  <IconCreditCard size={13} /> {paymentGateways?.[payout.payment_method]?.label ?? payout.payment_method}
                </span>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 sm:grid-cols-4">
              <Figure label={("Amount")} value={wrapCurrency(parseFloat(payout.amount || 0))} strong />
              <Figure label={("Created")} value={payout.created_at ? formatDate(payout.created_at) : "—"} />
              <Figure label={("Paid")} value={payout.paid_at ? formatDate(payout.paid_at) : "—"} />
              <Figure label={("Transaction")} value={payout.transaction_id || "—"} />
            </div>

            {payout.notes && <p className="mt-4 whitespace-pre-line rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">{payout.notes}</p>}
          </>
        )}
      </div>

      {payout && canEdit && (
        <div className={CARD}>
          <h2 className="mb-4 text-sm font-semibold text-gray-900">{("Edit payout")}</h2>
          {/* Keyed on each load so the form picks up the saved values. */}
          <PayoutForm key={version} id={id} initial={payout} accounts={accounts} minPayout={minPayout} onSaved={() => { load(); onSaved?.(); }} />
        </div>
      )}
    </div>
  );
};

export default AffiliatePayoutEdit;
