"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IconArrowLeft, IconArrowUpRight, IconRefresh, IconDeviceFloppy, IconReceipt } from "@tabler/icons-react";

import Spinner from "../../components/Spinner";
import { useCounterStore } from "../../store/useCounterStore";
import { useUtilsStore } from "../../store/useUtilsStore";
import { SALE_STATUS_BADGES, StatusBadge, toOptions, AffiliateCell, TOOLBAR_BUTTON, PRIMARY_BUTTON, FIELD, LABEL, CARD, postApi } from "./affiliateUi";

const STATUS_OPTIONS = toOptions(SALE_STATUS_BADGES);

const Figure = ({ label, value, strong }) => (
  <div className="flex min-w-0 flex-col gap-0.5">
    <span className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{label}</span>
    <span className={`truncate tabular-nums ${strong ? "text-lg font-semibold text-gray-900" : "text-sm text-gray-700"}`}>{value}</span>
  </div>
);

/*
  One affiliate sale. A page (/dashboard/affiliate-sales/[id]) and the list's
  Edit drawer (variant="drawer"). Managers can edit; affiliates only see it.
*/
const AffiliateSaleEdit = ({ id, variant = "page", onSaved }) => {

  const { wrapCurrency, formatDate } = useUtilsStore();
  const { token, addNotification } = useCounterStore();

  var [loading, setloading] = useState(false);
  var [saving, setsaving] = useState(false);
  var [sale, setsale] = useState(null);
  var [canEdit, setcanEdit] = useState(false);
  var [form, setform] = useState(null);

  function load() {
    if (!id || !token) return;
    setloading(true);
    postApi("get_affiliate_sale", token, { id })
      .then((res) => {
        var row = res?.sale?.id ? res.sale : null;
        setsale(row);
        setcanEdit(!!res?.can_edit);
        setform(row ? { order_total: row.order_total, commission_rate: row.commission_rate, commission_amount: row.commission_amount, status: row.status } : null);
        setloading(false);
      })
      .catch(() => setloading(false));
  }

  useEffect(load, [id, token]);

  function save() {
    setsaving(true);
    postApi("update_affiliate_sale", token, { id, ...form })
      .then((res) => {
        setsaving(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Not saved", content: res?.message ?? "The sale could not be saved." });
          return;
        }
        addNotification({ type: "success", title: "Saved", content: `Affiliate sale #${id} updated.` });
        load();
        onSaved?.();
      })
      .catch((error) => {
        setsaving(false);
        addNotification({ type: "error", title: "Not saved", content: error.message });
      });
  }

  var set = (key) => (ev) => setform({ ...form, [key]: ev.target.value });

  /* Recompute the amount from total × rate, on request rather than on every keystroke. */
  function recalc() {
    var amount = (parseFloat(form?.order_total) || 0) * (parseFloat(form?.commission_rate) || 0) / 100;
    setform({ ...form, commission_amount: amount.toFixed(2) });
  }

  var drawer = variant === "drawer";

  return (
    <div className={drawer ? "flex w-full flex-col gap-4" : "mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6"}>

      <div className={CARD}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-gray-900">
              {("Affiliate sale")} <span className="font-normal text-gray-400">#{id}</span>
            </h1>
            {sale && <div className="mt-2"><AffiliateCell entry={sale} /></div>}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {drawer ? (
              <Link href={`/dashboard/affiliate-sales/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
            ) : (
              <Link href="/dashboard/affiliate-sales" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All sales")}</Link>
            )}
          </div>
        </div>

        {loading && !sale && (
          <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500"><Spinner size={16} /> {("Loading sale")}</div>
        )}

        {!loading && !sale && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 text-sm text-gray-500">
            {("This sale could not be loaded.")}
            <button type="button" className={TOOLBAR_BUTTON} onClick={load}><IconRefresh size={16} /> {("Try again")}</button>
          </div>
        )}

        {sale && (
          <>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <StatusBadge badges={SALE_STATUS_BADGES} status={sale.status} />
              {canEdit ? (
                <Link href={`/dashboard/orders/${sale.order_id}`} className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-blue-600 ring-1 ring-inset ring-gray-200 hover:underline">
                  <IconReceipt size={13} /> {("Order")} #{sale.order_id}
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                  <IconReceipt size={13} /> {("Order")} #{sale.order_id}
                </span>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 sm:grid-cols-3 lg:grid-cols-6">
              <Figure label={("Commission")} value={wrapCurrency(parseFloat(sale.commission_amount || 0))} strong />
              <Figure label={("Order total")} value={wrapCurrency(parseFloat(sale.order_total || 0))} />
              <Figure label={("Rate")} value={`${parseFloat(sale.commission_rate || 0)}%`} />
              <Figure label={("Created")} value={sale.created_at ? formatDate(sale.created_at) : "—"} />
              <Figure label={("Approved")} value={sale.approved_at ? formatDate(sale.approved_at) : "—"} />
              <Figure label={("Paid")} value={sale.paid_at ? formatDate(sale.paid_at) : "—"} />
            </div>
          </>
        )}
      </div>

      {sale && canEdit && form && (
        <div className={CARD}>
          <h2 className="mb-4 text-sm font-semibold text-gray-900">{("Edit sale")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={LABEL}>{("Status")}</label>
              <select className={FIELD} value={form.status} onChange={set("status")}>
                {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label className={LABEL}>{("Order total")}</label>
              <input type="number" step="0.01" min="0" className={FIELD} value={form.order_total} onChange={set("order_total")} />
            </div>
            <div>
              <label className={LABEL}>{("Commission rate (%)")}</label>
              <input type="number" step="0.01" min="0" className={FIELD} value={form.commission_rate} onChange={set("commission_rate")} />
            </div>
            <div>
              <label className={LABEL}>{("Commission amount")}</label>
              <div className="flex gap-2">
                <input type="number" step="0.01" min="0" className={FIELD} value={form.commission_amount} onChange={set("commission_amount")} />
                <button type="button" className={TOOLBAR_BUTTON} onClick={recalc} title={("Order total × rate")}>{("Recalculate")}</button>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={save}>
              <IconDeviceFloppy size={16} /> {saving ? ("Saving...") : ("Save")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateSaleEdit;
