"use client";
import { useState, useEffect, useMemo } from "react";
import { IconTrash, IconPlus, IconMinus, IconMail, IconPhone, IconCopy, IconDeviceFloppy, IconUser, IconInfoCircle, IconX } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ExpensesItemsPicker from '../components/shop-elements/ExpensesItemsPicker';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same card shell, fields and buttons as OrderUpdate and the user editor. */
const CARD_CLASSES =
  "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";
const FIELD = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";
const LABEL = "mb-1.5 block text-sm font-medium text-gray-700";
const PRIMARY_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const SECONDARY_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const ICON_BUTTON = "inline-flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";
const CHIP_BUTTON = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 cursor-pointer";

/* The payment statuses the expenses list filters by. */
const PAYMENT_STATUSES = [["pending", "Pending"], ["paid", "Paid"], ["partial", "Partial"], ["due", "Due"], ["delayed", "Delayed"], ["failed", "Failed"], ["refunded", "Refunded"]];

const lineTotal = (item) => (parseFloat(item?.price) || 0) * (parseFloat(item?.quantity) || 0);

/* Only what update_expense stores, so "unsaved" means a real difference. */
const SAVED_FIELDS = ["title", "category", "note", "total_amount", "payment_method", "payment_status", "transaction_id", "created_for", "billing_name", "billing_email", "billing_phone", "billing_address"];
const snapshot = (expense, items) => JSON.stringify({
  ...Object.fromEntries(SAVED_FIELDS.map(key => [key, String(expense?.[key] ?? "")])),
  items: (items ?? []).map(item => [String(item?.product_name ?? ""), String(parseFloat(item?.quantity) || 0), String(parseFloat(item?.price) || 0)]),
});


/*
  An expense's editor: what it was for, its lines (or a single amount),
  who it was paid to, and the payment. Used in the Expense tab of ExpenseEdit;
  `onSaved` lets that page refresh its summary after a save.

  It used to show a Status dropdown and a Discount card for fields expenses do
  not have (neither was ever saved, and the discount was shown as taken off a
  total that never subtracted it); force the total to the items' sum even when
  there were none, so an expense entered as one amount could only ever be 0;
  read the picked person as \`args.ID\` (the picker sends \`id\`), so choosing who
  it was paid to did nothing; save a picked line with its row id as a product;
  and report every save as "Order update". Category and note, which are saved,
  had no field at all.
*/
const EditExpense = (props) => {
  const { wrapCurrency } = useUtilsStore()
  const { token, addNotification, inHousePaymentMethods, privacyMode } = useCounterStore()

  var expenseId = props?.id
  var [loading, setloading] = useState(false);
  var [saving, setsaving] = useState(false);
  var [loadError, setloadError] = useState("");

  var [expenseData, setexpenseData] = useState(null);
  var [lineItems, setlineItems] = useState([]);
  var [paidTo, setpaidTo] = useState(null);
  var [saved, setsaved] = useState("");

  var itemsTotal = useMemo(() => (lineItems ?? []).reduce((sum, item) => sum + lineTotal(item), 0), [lineItems]);
  var hasItems = (lineItems?.length ?? 0) > 0;

  /* With lines, the total is their sum; without, it is the amount typed in. */
  var total = hasItems ? itemsTotal : (parseFloat(expenseData?.total_amount) || 0);

  var dirty = expenseData ? snapshot({ ...expenseData, total_amount: total }, lineItems) !== saved : false;


  function get_expense() {

    if (!expenseId) return;

    setloading(true);
    setloadError("");

    fetch(serverUrl + "wp-json/combo-store/v2/get_expense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: expenseId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        var expense = res?.expense;
        var items = Array.isArray(res?.lineItems) ? res.lineItems : [];

        setloading(false);

        if (!expense?.id) {
          setloadError("This expense could not be found.");
          return;
        }

        var itemsSum = items.reduce((sum, item) => sum + lineTotal(item), 0);
        var normalised = { ...expense, total_amount: items.length ? itemsSum : (parseFloat(expense.total_amount) || 0) };

        setexpenseData(normalised);
        setlineItems(items);
        setsaved(snapshot(expense, items));
      })
      .catch((error) => {
        setloading(false);
        setloadError(error?.message ?? "The expense could not be loaded.");
      });
  }

  useEffect(() => {
    if (!token) return;
    get_expense();
  }, [expenseId, token]);


  /* Who it was paid to, for the card. */
  useEffect(() => {
    if (!expenseData?.created_for || !token) {
      setpaidTo(null);
      return;
    }

    fetch(serverUrl + "wp-json/combo-store/v2/get_customer", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id: expenseData.created_for }),
    })
      .then((response) => response.ok ? response.json() : null)
      .then((res) => {
        /* For non-staff the API sends their own profile back; only show the person asked for. */
        var person = res?.customer;
        setpaidTo(person && String(person.id) === String(expenseData.created_for) ? person : null);
      })
      .catch(() => setpaidTo(null));
  }, [expenseData?.created_for, token]);


  function update_expense() {

    if (!expenseData || saving) return;

    setsaving(true);

    var payload = { ...expenseData, total_amount: total, lineItems: lineItems };

    fetch(serverUrl + "wp-json/combo-store/v2/update_expense", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("You are not allowed to change expenses.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setsaving(false);

        if (res?.status === 'failed') {
          addNotification({ type: 'error', title: 'Expense not saved', content: res?.message ?? "" })
          return;
        }

        addNotification({ type: 'success', title: 'Expense saved', content: `Expense #${expenseId} saved.` })
        setsaved(snapshot({ ...expenseData, total_amount: total }, lineItems));
        props?.onSaved?.();
      })
      .catch((error) => {
        setsaving(false);
        addNotification({ type: 'error', title: 'Expense not saved', content: error?.message ?? "" })
      });
  }


  /* A person picked as the payee fills in their billing details. */
  function onPickPayee(args) {

    var id = args?.id ?? args?.ID;
    if (!id) return;

    fetch(serverUrl + "wp-json/combo-store/v2/get_customer", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.ok ? response.json() : null)
      .then((res) => {
        var person = res?.customer;
        if (!person?.id) return;

        setexpenseData(prev => ({
          ...prev,
          created_for: person.id,
          billing_name: person.name ?? prev?.billing_name ?? "",
          billing_phone: person.phone || person.billing_phone || "",
          billing_email: person.email ?? "",
          billing_address: [person.billing_address1, person.billing_address2].filter(Boolean).join(" "),
        }));
      })
      .catch(() => { });
  }

  function clearPayee() {
    setexpenseData(prev => ({ ...prev, created_for: "" }));
  }


  /* A past expense line, reused: its name and price. These are free-text
     lines, not products, so it carries no product link. */
  function onAddPastItem(item) {
    setlineItems(prev => [...(prev ?? []), {
      expense_id: expenseData?.id,
      product_id: 0,
      product_name: item?.product_name ?? "",
      sku: "",
      quantity: 1,
      price: parseFloat(item?.price) || 0,
      subtotal: 0, tax: 0, total: 0, meta: null,
    }]);
  }

  function addBlankItem() {
    setlineItems(prev => [...(prev ?? []), { expense_id: expenseData?.id, product_id: 0, product_name: "", sku: "", quantity: 1, price: 0, subtotal: 0, tax: 0, total: 0, meta: null }]);
  }

  function setItem(index, patch) {
    setlineItems(prev => prev.map((item, i) => i === index ? { ...item, ...patch } : item));
  }

  function removeItem(index) {
    setlineItems(prev => prev.filter((_, i) => i !== index));
  }

  function setField(key, value) {
    setexpenseData(prev => ({ ...prev, [key]: value }));
  }

  function copy(value, what) {
    navigator.clipboard?.writeText(value)
      .then(() => addNotification({ type: 'success', title: `${what} copied`, content: value }))
      .catch(() => { });
  }


  if (loading && !expenseData) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-500">
        <Spinner size={16} /> {("Loading expense")}
      </div>
    );
  }

  if (loadError && !expenseData) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        {loadError}
        <button type="button" className={SECONDARY_BUTTON} onClick={get_expense}>{("Try again")}</button>
      </div>
    );
  }

  if (!expenseData) return null;

  var blur = privacyMode ? "blur-[3px]" : "";

  return (
    <div className="flex flex-col gap-4">

      {/* ---------- what it was for ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Details">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor={`expense-${expenseId}-title`} className={LABEL}>{("Title")}</label>
            <input id={`expense-${expenseId}-title`} type="text" className={FIELD} placeholder={("e.g. Bike servicing")}
              value={expenseData?.title ?? ""} onChange={ev => setField("title", ev.target.value)} />
          </div>
          <div>
            <label htmlFor={`expense-${expenseId}-category`} className={LABEL}>{("Category")}</label>
            <input id={`expense-${expenseId}-category`} type="text" className={FIELD} placeholder={("e.g. Delivery, Rent, Salary")}
              value={expenseData?.category ?? ""} onChange={ev => setField("category", ev.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor={`expense-${expenseId}-note`} className={LABEL}>{("Note")}</label>
            <textarea id={`expense-${expenseId}-note`} className={`${FIELD} min-h-20`}
              value={expenseData?.note ?? ""} onChange={ev => setField("note", ev.target.value)} />
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- lines, or one amount ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Amount">
        <div className="flex flex-col gap-4">

          <div className="flex flex-wrap items-center justify-between gap-2">
            <ExpensesItemsPicker placeholder={("Reuse a past line...")} onPick={onAddPastItem} />
            <button type="button" className={SECONDARY_BUTTON} onClick={addBlankItem}>
              <IconPlus size={16} /> {("Add line")}
            </button>
          </div>

          {hasItems ? (
            <div className="flex flex-col divide-y divide-gray-100 rounded-lg border border-gray-200">
              {lineItems.map((item, index) => (
                <div key={index} className="flex flex-wrap items-center gap-3 px-3 py-2.5">
                  <input type="text" aria-label={("Line")} className={`${FIELD} min-w-48 flex-1`} placeholder={("What was paid for")}
                    value={item?.product_name ?? ""} onChange={ev => setItem(index, { product_name: ev.target.value })} />

                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button type="button" aria-label={("Fewer")} className={ICON_BUTTON} onClick={() => setItem(index, { quantity: Math.max(1, (parseFloat(item?.quantity) || 1) - 1) })}><IconMinus size={14} /></button>
                    <input type="number" min="1" step="1" aria-label={("Quantity")} className="w-14 border-0 bg-transparent text-center text-sm tabular-nums focus:outline-none"
                      value={item?.quantity ?? 1} onChange={ev => setItem(index, { quantity: ev.target.value })} />
                    <button type="button" aria-label={("More")} className={ICON_BUTTON} onClick={() => setItem(index, { quantity: (parseFloat(item?.quantity) || 0) + 1 })}><IconPlus size={14} /></button>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <span>×</span>
                    <input type="number" min="0" step="0.01" aria-label={("Price")} className={`${FIELD} w-28 text-right tabular-nums`}
                      value={item?.price ?? 0} onChange={ev => setItem(index, { price: ev.target.value })} />
                  </div>

                  <span className="w-28 text-right text-sm font-medium tabular-nums text-gray-900">{wrapCurrency(lineTotal(item))}</span>

                  <button type="button" title={("Remove line")} aria-label={("Remove line")} className={`${ICON_BUTTON} hover:!bg-red-50 hover:!text-red-600`} onClick={() => removeItem(index)}>
                    <IconTrash size={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <label htmlFor={`expense-${expenseId}-amount`} className={LABEL}>{("Amount")}</label>
              <input id={`expense-${expenseId}-amount`} type="number" min="0" step="0.01" className={`${FIELD} max-w-xs text-right tabular-nums`}
                value={expenseData?.total_amount ?? ""} onChange={ev => setField("total_amount", ev.target.value)} />
              <p className="mt-1.5 flex items-start gap-1.5 text-xs text-gray-500">
                <IconInfoCircle size={14} className="mt-px shrink-0" />
                {("A single amount - or add lines above, and the total becomes their sum.")}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
            <span className="text-sm font-semibold text-gray-900">{("Total")}</span>
            <span className="text-lg font-bold tabular-nums text-gray-900">{wrapCurrency(total)}</span>
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- paid to ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Paid to">
        <div className="flex flex-col gap-4">

          {paidTo ? (
            <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-gray-200 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#634FE5]/10 text-[#634FE5]">
                  {paidTo?.avatar ? <img className="h-full w-full object-cover" src={paidTo.avatar} alt="" width={40} height={40} /> : <IconUser size={18} />}
                </div>
                <div className="min-w-0">
                  <div className={`text-sm font-semibold text-gray-900 ${blur}`}>{paidTo?.name}</div>
                  <div className="flex flex-wrap gap-x-3 text-xs text-gray-500">
                    {paidTo?.email && <span className={`inline-flex items-center gap-1 ${blur}`}><IconMail size={12} /> {paidTo.email} <IconCopy size={12} className="cursor-pointer hover:text-gray-800" onClick={() => copy(paidTo.email, "Email")} /></span>}
                    {paidTo?.phone && <span className={`inline-flex items-center gap-1 ${blur}`}><IconPhone size={12} /> {paidTo.phone} <IconCopy size={12} className="cursor-pointer hover:text-gray-800" onClick={() => copy(paidTo.phone, "Phone")} /></span>}
                  </div>
                </div>
              </div>
              <button type="button" className={CHIP_BUTTON} onClick={clearPayee}><IconX size={14} /> {("Remove")}</button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <UsersPicker placeholder={("Search a person or supplier")} role={``} onPick={onPickPayee} />
              <span className="text-xs text-gray-500">{("Optional. Picking someone fills in the billing details below.")}</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[["billing_name", "Name", "text"], ["billing_phone", "Phone", "tel"], ["billing_email", "Email", "email"]].map(([key, label, type]) => (
              <div key={key}>
                <label htmlFor={`expense-${expenseId}-${key}`} className={LABEL}>{label}</label>
                <input id={`expense-${expenseId}-${key}`} type={type} className={FIELD}
                  value={expenseData?.[key] ?? ""} onChange={ev => setField(key, ev.target.value)} />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor={`expense-${expenseId}-billing_address`} className={LABEL}>{("Address")}</label>
              <textarea id={`expense-${expenseId}-billing_address`} className={`${FIELD} min-h-20`}
                value={expenseData?.billing_address ?? ""} onChange={ev => setField("billing_address", ev.target.value)} />
            </div>
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- payment ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Payment">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor={`expense-${expenseId}-pstatus`} className={LABEL}>{("Status")}</label>
            <select id={`expense-${expenseId}-pstatus`} className={FIELD} value={expenseData?.payment_status ?? ""} onChange={ev => setField("payment_status", ev.target.value)}>
              <option value="">{("Choose")}</option>
              {PAYMENT_STATUSES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor={`expense-${expenseId}-pmethod`} className={LABEL}>{("Method")}</label>
            <select id={`expense-${expenseId}-pmethod`} className={FIELD} value={expenseData?.payment_method ?? ""} onChange={ev => setField("payment_method", ev.target.value)}>
              <option value="">{("Choose")}</option>
              {Object.keys(inHousePaymentMethods ?? {}).map(key => <option key={key} value={key}>{inHousePaymentMethods[key].label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor={`expense-${expenseId}-txn`} className={LABEL}>{("Transaction ID")}</label>
            <input id={`expense-${expenseId}-txn`} type="text" className={FIELD}
              value={expenseData?.transaction_id ?? ""} onChange={ev => setField("transaction_id", ev.target.value)} />
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- save ---------- */}
      <div className={`sticky bottom-4 z-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3 shadow-lg ${dirty ? "border-[#634FE5]/30" : "border-gray-200"}`}>
        <span className="text-sm text-gray-600">
          {dirty ? ("Unsaved changes") : ("All changes saved")}
          <span className="ml-2 font-semibold tabular-nums text-gray-900">{wrapCurrency(total)}</span>
        </span>
        <div className="flex items-center gap-2">
          {dirty && <button type="button" className={SECONDARY_BUTTON} disabled={saving} onClick={get_expense}>{("Discard")}</button>}
          <button type="button" className={PRIMARY_BUTTON} disabled={saving || !dirty} onClick={update_expense}>
            {saving ? <Spinner /> : <IconDeviceFloppy size={16} />} {("Save expense")}
          </button>
        </div>
      </div>

    </div>
  );
};

export default EditExpense;
