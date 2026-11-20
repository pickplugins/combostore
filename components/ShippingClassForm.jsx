"use client";
import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";

import DropDown from '../components/DropDown';
import { useCounterStore } from '../store/useCounterStore'
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import { shippingClassRequest, shippingClassCostLabel } from '../lib/shippingClasses';

/*
  New / edit form for one shipping class (cstore_shipping_classes, saved
  with save_shipping_class). Laid out like ShippingCreate and
  ShippingMethodEdit. With `entry` it edits that class; without, it creates.
  The slug is set by the server on create and never changes.
*/

const FIELD =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition-colors hover:border-gray-400";

const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max";

const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

const STATUS_BADGES = {
  "1": { label: "Active", classes: "bg-green-50 text-green-700 ring-green-200" },
  "0": { label: "Inactive", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

const Row = ({ label, hint, children }) => (
  <div className="flex flex-col gap-2 border-b border-gray-200 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4">
    <div className="text-sm font-semibold text-gray-700 lg:w-56 lg:shrink-0">{label}</div>
    <div className="min-w-0 lg:flex-1">
      {children}
      {hint && (
        <p className="mt-1 text-xs text-gray-400">{hint}</p>
      )}
    </div>
  </div>
);

var statusArgs = { "1": { "label": "Active", "value": "1" }, "0": { "label": "Inactive", "value": "0" } }
var typeArgs = { "fixed": { "label": "Fixed amount", "value": "fixed" }, "percent": { "label": "Percent of subtotal", "value": "percent" } }

const ShippingClassForm = (props) => {

  var entry = props?.entry
  var onSaved = props?.onSaved
  var isEdit = !!entry?.id

  const { token, addNotification } = useCounterStore()

  var [loading, setloading] = useState(false);
  var [classData, setclassData] = useState({
    id: entry?.id ?? 0,
    name: entry?.name ?? '',
    description: entry?.description ?? '',
    cost: entry?.cost ?? '',
    type: entry?.type ?? 'fixed',
    status: String(entry?.status ?? 1),
    priority: entry?.priority ?? 0,
  });

  function save_shipping_class() {
    if (!classData.name.trim()) {
      addNotification({ type: 'error', title: 'Give the shipping class a name', content: '' })
      return;
    }
    setloading(true)
    shippingClassRequest('save_shipping_class', token, {
      ...classData,
      id: classData.id || undefined,
      cost: classData.cost === '' ? 0 : classData.cost,
      status: classData.status == '1',
    })
      .then(res => {
        addNotification({ type: 'success', title: isEdit ? 'Shipping class saved' : 'Shipping class added', content: '' })
        /* A new class starts a fresh form, ready for the next one. */
        if (!isEdit) setclassData({ id: 0, name: '', description: '', cost: '', type: 'fixed', status: '1', priority: 0 })
        if (onSaved) onSaved(res.class);
      })
      .catch(error => addNotification({ type: 'error', title: 'Could not save shipping class', content: error.message }))
      .finally(() => setloading(false));
  }

  const statusBadge = STATUS_BADGES[classData?.status];

  var details = (
    <WidgetWrapper title="Class Details">

      <div className="flex flex-col">

        <Row label={("Class Name")}>
          <input type="text" className={FIELD} placeholder="e.g. Bulky" value={classData?.name || ""} onChange={ev => {
            setclassData({ ...classData, name: ev.target.value })
          }} />
        </Row>

        <Row label={("Description")}>
          <textarea className={`${FIELD} min-h-24`} placeholder="e.g. Furniture and large appliances" value={classData?.description || ""} onChange={ev => {
            setclassData({ ...classData, description: ev.target.value })
          }} />
        </Row>

        <Row label={("Default Cost")} hint={("Added once per order when this is the most expensive class in the cart. A shipping method can set its own cost under its Class costs.")}>
          <input type="number" min={0} step="any" className={`${FIELD} tabular-nums`} placeholder="0" value={classData?.cost ?? ""} onChange={ev => {
            setclassData({ ...classData, cost: ev.target.value })
          }} />
        </Row>

        <Row label={("Cost Type")}>
          <DropDown multiple={false} value={classData?.type} options={typeArgs} label={`Cost Type`} onOptionsChoose={(args) => {
            setclassData({ ...classData, type: args?.value })
          }} />
        </Row>

        <Row label={("Status")} hint={("An inactive class adds nothing at checkout.")}>
          <DropDown multiple={false} value={classData?.status} options={statusArgs} label={`Status`} onOptionsChoose={(args) => {
            setclassData({ ...classData, status: args?.value })
          }} />
        </Row>

        <Row label={("Priority")} hint={("Lower numbers are listed first.")}>
          <input type="number" className={`${FIELD} tabular-nums`} value={classData?.priority ?? ""} onChange={ev => {
            setclassData({ ...classData, priority: ev.target.value })
          }} />
        </Row>

      </div>

    </WidgetWrapper>
  );

  if (!isEdit) {
    return (
      <div className="flex w-full flex-col gap-4 lg:w-[760px]">

        {details}

        <div className="flex flex-wrap items-center gap-3">

          <div className={PRIMARY_BUTTON} onClick={ev => {
            save_shipping_class()
          }}><IconPlus size={16} /> {("Create Class")}</div>

          {loading && (
            <span className="inline-flex items-center gap-2 text-xs text-amber-600">
              <Spinner size={14} /> {("Please wait...")}
            </span>
          )}

        </div>

      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4 lg:w-[760px]">

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-sm bg-white px-5 py-4 shadow-sm">

        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-2">

            <h2 className="truncate text-base font-semibold text-gray-900">
              {classData?.name || ("Shipping class")}
            </h2>

            <span className="font-mono text-xs text-gray-400">#{entry.id}</span>

            {statusBadge && (
              <span className={`${BADGE_BASE} ${statusBadge.classes}`}>{statusBadge.label}</span>
            )}

          </div>

          <p className="mt-0.5 text-xs text-gray-500">
            Slug <span className="font-mono">{entry.slug}</span> · {shippingClassCostLabel(classData)}
          </p>

        </div>

        <div className="flex items-center gap-3">

          {loading && (
            <span className="inline-flex items-center gap-2 text-xs text-amber-600">
              <Spinner size={14} /> {("Please wait...")}
            </span>
          )}

          <div className={PRIMARY_BUTTON} onClick={ev => {
            save_shipping_class()
          }}>{("Update")}</div>

        </div>

      </div>

      {details}

    </div>
  );
};

export default ShippingClassForm;
