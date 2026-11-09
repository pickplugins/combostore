"use client";
import { useState, useEffect, useMemo } from "react";
import { IconTrash, IconPlus, IconMinus, IconMail, IconPhone, IconCopy, IconDeviceFloppy, IconBuildingStore, IconInfoCircle, IconX, IconPackage } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same card shell, fields and buttons as the expense editor and OrderUpdate. */
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

/* Purchase statuses, as the Purchases list shows and filters them. "Order
   status" options were offered here before. Completed, Canceled and Refunded
   move stock (ComboStorePurchases::update_purchase). */
const PURCHASE_STATUSES = [["pending", "Pending"], ["processing", "Processing"], ["completed", "Completed"], ["hold", "On hold"], ["canceled", "Canceled"], ["refunded", "Refunded"], ["failed", "Failed"]];
const PAYMENT_STATUSES = [["pending", "Pending"], ["paid", "Paid"], ["partial", "Partial"], ["due", "Due"], ["delayed", "Delayed"], ["failed", "Failed"], ["refunded", "Refunded"]];

const num = (value) => parseFloat(value) || 0;
const lineTotal = (item) => num(item?.price) * num(item?.quantity);

/* Only what update_purchase stores, so "unsaved" means a real difference. */
const SAVED_FIELDS = ["status", "category", "note", "discount_amount", "shipping_amount", "advance_payment", "advance_payment_note", "payment_method", "payment_status", "transaction_id", "supplier_id", "billing_name", "billing_email", "billing_phone", "billing_address"];
const snapshot = (purchase, items) => JSON.stringify({
  ...Object.fromEntries(SAVED_FIELDS.map(key => [key, String(purchase?.[key] ?? "")])),
  items: (items ?? []).map(item => [String(item?.product_id ?? ""), String(item?.product_name ?? ""), String(num(item?.quantity)), String(num(item?.price))]),
});


/*
  A purchase's editor: its status, the products bought, the supplier, and the
  payment. Used in the Purchase tab of PurchaseEdit; `onSaved` lets that page
  refresh its summary.

  It used to offer order statuses (confirmed, delivered...) instead of purchase
  ones - which now matters, since completing, cancelling or refunding a
  purchase moves stock; leave the discount out of the total it showed and
  saved, though the list subtracts it; read the picked supplier as `args.ID`
  (the picker sends `id`), so choosing one did nothing; save a picked
  variation's own id as the product; offer a transport "method" that is not
  stored; and report every save as "Order update".
*/
const EditPurchase = (props) => {
  const { wrapCurrency } = useUtilsStore()
  const { token, addNotification, inHousePaymentMethods, privacyMode } = useCounterStore()

  var purchaseId = props?.purchase_id
  var [loading, setloading] = useState(false);
  var [saving, setsaving] = useState(false);
  var [loadError, setloadError] = useState("");

  var [purchaseData, setpurchaseData] = useState(null);
  var [lineItems, setlineItems] = useState([]);
  var [supplier, setsupplier] = useState(null);
  var [saved, setsaved] = useState("");
  var [savedStatus, setsavedStatus] = useState("");

  var subtotal = useMemo(() => (lineItems ?? []).reduce((sum, item) => sum + lineTotal(item), 0), [lineItems]);

  /* The same total as the Purchases list: subtotal + delivery - discount - advance. */
  var total = subtotal + num(purchaseData?.shipping_amount) - num(purchaseData?.discount_amount) - num(purchaseData?.advance_payment);

  var dirty = purchaseData ? snapshot(purchaseData, lineItems) !== saved : false;
  var status = purchaseData?.status ?? "";


  function get_purchase() {

    if (!purchaseId) return;

    setloading(true);
    setloadError("");

    fetch(serverUrl + "wp-json/combo-store/v2/get_purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: purchaseId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);

        var purchase = res?.purchase;
        var items = Array.isArray(res?.lineItems) ? res.lineItems : [];

        if (!purchase?.id) {
          setloadError("This purchase could not be found.");
          return;
        }

        setpurchaseData(purchase);
        setlineItems(items);
        setsaved(snapshot(purchase, items));
        setsavedStatus(purchase.status ?? "");
      })
      .catch((error) => {
        setloading(false);
        setloadError(error?.message ?? "The purchase could not be loaded.");
      });
  }

  useEffect(() => {
    if (!token) return;
    get_purchase();
  }, [purchaseId, token]);


  /* The supplier, for the card. */
  useEffect(() => {
    if (!purchaseData?.supplier_id || String(purchaseData.supplier_id) === "0" || !token) {
      setsupplier(null);
      return;
    }

    fetch(serverUrl + "wp-json/combo-store/v2/get_customer", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id: purchaseData.supplier_id }),
    })
      .then((response) => response.ok ? response.json() : null)
      .then((res) => {
        /* For non-staff the API sends their own profile back; only show the person asked for. */
        var person = res?.customer;
        setsupplier(person && String(person.id) === String(purchaseData.supplier_id) ? person : null);
      })
      .catch(() => setsupplier(null));
  }, [purchaseData?.supplier_id, token]);


  function update_purchase() {

    if (!purchaseData || saving) return;

    /* Stock moves on these, so say so before it happens. */
    var becoming = status !== savedStatus ? status : "";
    if (becoming === "completed" && !confirm("Mark this purchase completed? Its tracked products are added to stock.")) return;
    if ((becoming === "canceled" || becoming === "refunded") && savedStatus === "completed" && !confirm(`Mark this purchase ${becoming}? What completing it added to stock is taken back out.`)) return;

    setsaving(true);

    var payload = { ...purchaseData, subtotal_amount: subtotal, total_amount: total, lineItems: lineItems };

    fetch(serverUrl + "wp-json/combo-store/v2/update_purchase", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("You are not allowed to change purchases.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setsaving(false);

        if (res?.status === 'failed') {
          addNotification({ type: 'error', title: 'Purchase not saved', content: res?.message ?? "" })
          return;
        }

        addNotification({ type: 'success', title: 'Purchase saved', content: becoming === "completed" ? `Purchase #${purchaseId} completed; tracked products were added to stock.` : `Purchase #${purchaseId} saved.` })
        /* Re-read: saving re-creates the lines, with new ids. */
        get_purchase();
        props?.onSaved?.();
      })
      .catch((error) => {
        setsaving(false);
        addNotification({ type: 'error', title: 'Purchase not saved', content: error?.message ?? "" })
      });
  }


  function onPickSupplier(args) {

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

        setpurchaseData(prev => ({
          ...prev,
          supplier_id: person.id,
          billing_name: person.name ?? "",
          billing_phone: person.phone || person.billing_phone || "",
          billing_email: person.email ?? "",
          billing_address: [person.billing_address1, person.billing_address2].filter(Boolean).join(" "),
        }));
      })
      .catch(() => { });
  }


  /* A product, or a variation of one. A variation is the variation row (its
     own id, with product_id = the parent); purchase lines have no variation
     field, so it is stored against the parent product, named for both. */
  function onAddProduct(item) {
    var isVariation = Boolean(item?.product_title);

    setlineItems(prev => [...(prev ?? []), {
      purchase_id: purchaseData?.id,
      product_id: isVariation ? (item?.product_id ?? 0) : (item?.id ?? 0),
      product_name: isVariation ? `${item.product_title} - ${item?.title ?? ""}` : (item?.title ?? ""),
      sku: item?.sku ?? "",
      quantity: 1,
      /* What it costs to buy, when known; else the selling price to start from. */
      price: num(item?.trade_price) || num(item?.price) || num(item?.sale_price) || num(item?.regular_price),
      subtotal: 0, tax: 0, total: 0, meta: null,
    }]);
  }

  function addCustomItem() {
    setlineItems(prev => [...(prev ?? []), { purchase_id: purchaseData?.id, product_id: 0, product_name: "", sku: "", quantity: 1, price: 0, subtotal: 0, tax: 0, total: 0, meta: null }]);
  }

  function setItem(index, patch) {
    setlineItems(prev => prev.map((item, i) => i === index ? { ...item, ...patch } : item));
  }

  function removeItem(index) {
    setlineItems(prev => prev.filter((_, i) => i !== index));
  }

  function setField(key, value) {
    setpurchaseData(prev => ({ ...prev, [key]: value }));
  }

  function copy(value, what) {
    navigator.clipboard?.writeText(value)
      .then(() => addNotification({ type: 'success', title: `${what} copied`, content: value }))
      .catch(() => { });
  }


  if (loading && !purchaseData) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-500">
        <Spinner size={16} /> {("Loading purchase")}
      </div>
    );
  }

  if (loadError && !purchaseData) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        {loadError}
        <button type="button" className={SECONDARY_BUTTON} onClick={get_purchase}>{("Try again")}</button>
      </div>
    );
  }

  if (!purchaseData) return null;

  var blur = privacyMode ? "blur-[3px]" : "";
  var unlinked = (lineItems ?? []).filter(item => !num(item?.product_id)).length;

  return (
    <div className="flex flex-col gap-4">

      {/* ---------- status ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Status">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`purchase-${purchaseId}-status`} className={LABEL}>{("Purchase status")}</label>
              <select id={`purchase-${purchaseId}-status`} className={FIELD} value={status} onChange={ev => setField("status", ev.target.value)}>
                <option value="">{("Choose")}</option>
                {/* A legacy spelling stays selectable if a purchase has it. */}
                {status && !PURCHASE_STATUSES.some(([value]) => value === status) && <option value={status}>{status}</option>}
                {PURCHASE_STATUSES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor={`purchase-${purchaseId}-category`} className={LABEL}>{("Category")}</label>
              <input id={`purchase-${purchaseId}-category`} type="text" className={FIELD} placeholder={("e.g. Diapers restock")}
                value={purchaseData?.category ?? ""} onChange={ev => setField("category", ev.target.value)} />
            </div>
          </div>
          <p className="flex items-start gap-1.5 text-xs text-gray-500">
            <IconInfoCircle size={14} className="mt-px shrink-0" />
            {("Completed adds the products below to stock (those that track it). Canceling or refunding a completed purchase takes them back out.")}
          </p>
        </div>
      </WidgetWrapper>


      {/* ---------- products ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Products">
        <div className="flex flex-col gap-4">

          <div className="flex flex-wrap items-center justify-between gap-2">
            <ProductsPicker placeholder={("Search product...")} onPick={onAddProduct} />
            <button type="button" className={SECONDARY_BUTTON} onClick={addCustomItem}>
              <IconPlus size={16} /> {("Custom line")}
            </button>
          </div>

          {lineItems?.length > 0 ? (
            <div className="flex flex-col divide-y divide-gray-100 rounded-lg border border-gray-200">
              {lineItems.map((item, index) => (
                <div key={index} className="flex flex-wrap items-center gap-3 px-3 py-2.5">
                  <div className="flex min-w-48 flex-1 items-center gap-2">
                    <span title={num(item?.product_id) ? "Linked to a product" : "Custom line - does not change stock"}>
                      <IconPackage size={16} className={`shrink-0 ${num(item?.product_id) ? "text-[#634FE5]" : "text-gray-300"}`} />
                    </span>
                    <input type="text" aria-label={("Product")} className={FIELD} placeholder={("Product name")}
                      value={item?.product_name ?? ""} onChange={ev => setItem(index, { product_name: ev.target.value })} />
                  </div>

                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button type="button" aria-label={("Fewer")} className={ICON_BUTTON} onClick={() => setItem(index, { quantity: Math.max(1, num(item?.quantity) - 1) })}><IconMinus size={14} /></button>
                    <input type="number" min="1" step="1" aria-label={("Quantity")} className="w-14 border-0 bg-transparent text-center text-sm tabular-nums focus:outline-none"
                      value={item?.quantity ?? 1} onChange={ev => setItem(index, { quantity: ev.target.value })} />
                    <button type="button" aria-label={("More")} className={ICON_BUTTON} onClick={() => setItem(index, { quantity: num(item?.quantity) + 1 })}><IconPlus size={14} /></button>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <span>×</span>
                    <input type="number" min="0" step="0.01" aria-label={("Unit cost")} className={`${FIELD} w-28 text-right tabular-nums`}
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
            <div className="rounded-lg border border-dashed border-gray-200 px-4 py-6 text-center text-xs text-gray-500">{("No products yet. Search above, or add a custom line.")}</div>
          )}

          {unlinked > 0 && (
            <p className="flex items-start gap-1.5 text-xs text-amber-700">
              <IconInfoCircle size={14} className="mt-px shrink-0" />
              {unlinked} {unlinked === 1 ? ("line is") : ("lines are")} {("not linked to a product and will not change stock.")}
            </p>
          )}

          {/* Totals: the same sum the Purchases list shows. */}
          <div className="flex flex-col gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm">
            <div className="flex justify-between text-gray-600"><span>{("Subtotal")}</span><span className="tabular-nums">{wrapCurrency(subtotal)}</span></div>
            {[["shipping_amount", "Delivery charge", "+"], ["discount_amount", "Discount", "-"], ["advance_payment", "Advance paid", "-"]].map(([key, label, sign]) => (
              <div key={key} className="flex items-center justify-between gap-3 text-gray-600">
                <label htmlFor={`purchase-${purchaseId}-${key}`}>{label} <span className="text-gray-400">({sign})</span></label>
                <input id={`purchase-${purchaseId}-${key}`} type="number" min="0" step="0.01" className={`${FIELD} w-32 text-right tabular-nums`}
                  value={purchaseData?.[key] ?? ""} onChange={ev => setField(key, ev.target.value)} />
              </div>
            ))}
            {num(purchaseData?.advance_payment) > 0 && (
              <input type="text" aria-label={("Advance note")} className={FIELD} placeholder={("Advance note, e.g. paid by bKash")}
                value={purchaseData?.advance_payment_note ?? ""} onChange={ev => setField("advance_payment_note", ev.target.value)} />
            )}
            <div className="mt-1 flex justify-between border-t border-dashed border-gray-200 pt-2 text-base font-bold text-gray-900">
              <span>{("Total to pay")}</span><span className="tabular-nums">{wrapCurrency(total)}</span>
            </div>
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- supplier ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Supplier">
        <div className="flex flex-col gap-4">

          {supplier ? (
            <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-gray-200 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#634FE5]/10 text-[#634FE5]">
                  {supplier?.avatar ? <img className="h-full w-full object-cover" src={supplier.avatar} alt="" width={40} height={40} /> : <IconBuildingStore size={18} />}
                </div>
                <div className="min-w-0">
                  <div className={`text-sm font-semibold text-gray-900 ${blur}`}>{supplier?.name}</div>
                  <div className="flex flex-wrap gap-x-3 text-xs text-gray-500">
                    {supplier?.email && <span className={`inline-flex items-center gap-1 ${blur}`}><IconMail size={12} /> {supplier.email} <IconCopy size={12} className="cursor-pointer hover:text-gray-800" onClick={() => copy(supplier.email, "Email")} /></span>}
                    {supplier?.phone && <span className={`inline-flex items-center gap-1 ${blur}`}><IconPhone size={12} /> {supplier.phone} <IconCopy size={12} className="cursor-pointer hover:text-gray-800" onClick={() => copy(supplier.phone, "Phone")} /></span>}
                  </div>
                </div>
              </div>
              <button type="button" className={CHIP_BUTTON} onClick={() => setField("supplier_id", 0)}><IconX size={14} /> {("Change")}</button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <UsersPicker placeholder={("Search supplier")} role={`supplier`} onPick={onPickSupplier} />
              <span className="text-xs text-gray-500">{("Picking one fills in the contact details below.")}</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[["billing_name", "Name", "text"], ["billing_phone", "Phone", "tel"], ["billing_email", "Email", "email"]].map(([key, label, type]) => (
              <div key={key}>
                <label htmlFor={`purchase-${purchaseId}-${key}`} className={LABEL}>{label}</label>
                <input id={`purchase-${purchaseId}-${key}`} type={type} className={FIELD}
                  value={purchaseData?.[key] ?? ""} onChange={ev => setField(key, ev.target.value)} />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor={`purchase-${purchaseId}-billing_address`} className={LABEL}>{("Address")}</label>
              <textarea id={`purchase-${purchaseId}-billing_address`} className={`${FIELD} min-h-20`}
                value={purchaseData?.billing_address ?? ""} onChange={ev => setField("billing_address", ev.target.value)} />
            </div>
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- payment ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Payment">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor={`purchase-${purchaseId}-pstatus`} className={LABEL}>{("Status")}</label>
            <select id={`purchase-${purchaseId}-pstatus`} className={FIELD} value={purchaseData?.payment_status ?? ""} onChange={ev => setField("payment_status", ev.target.value)}>
              <option value="">{("Choose")}</option>
              {PAYMENT_STATUSES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor={`purchase-${purchaseId}-pmethod`} className={LABEL}>{("Method")}</label>
            <select id={`purchase-${purchaseId}-pmethod`} className={FIELD} value={purchaseData?.payment_method ?? ""} onChange={ev => setField("payment_method", ev.target.value)}>
              <option value="">{("Choose")}</option>
              {Object.keys(inHousePaymentMethods ?? {}).map(key => <option key={key} value={key}>{inHousePaymentMethods[key].label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor={`purchase-${purchaseId}-txn`} className={LABEL}>{("Transaction ID")}</label>
            <input id={`purchase-${purchaseId}-txn`} type="text" className={FIELD}
              value={purchaseData?.transaction_id ?? ""} onChange={ev => setField("transaction_id", ev.target.value)} />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor={`purchase-${purchaseId}-note`} className={LABEL}>{("Note")}</label>
            <textarea id={`purchase-${purchaseId}-note`} className={`${FIELD} min-h-20`}
              value={purchaseData?.note ?? ""} onChange={ev => setField("note", ev.target.value)} />
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
          {dirty && <button type="button" className={SECONDARY_BUTTON} disabled={saving} onClick={get_purchase}>{("Discard")}</button>}
          <button type="button" className={PRIMARY_BUTTON} disabled={saving || !dirty} onClick={update_purchase}>
            {saving ? <Spinner /> : <IconDeviceFloppy size={16} />} {("Save purchase")}
          </button>
        </div>
      </div>

    </div>
  );
};

export default EditPurchase;
