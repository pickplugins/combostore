"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useRef } from "react";
import { IconFilter, IconEyeShare, IconTrash, IconCopy, IconDotsVertical, IconPackages, IconX, IconEdit, IconRefresh, IconReceiptRefund } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../../components/PopoverButton';
import OrderCourier from '../../components/OrderCourier';
import CheckPhoneFraud from '../../components/CheckPhoneFraud';
import UsersPicker from '../../components/shop-elements/UsersPicker';
import DropDown from '../../components/DropDown';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';
import OrderEdit from '../../components/pages/OrderEdit';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


/* Status pills. Keys and tones match the Orders list. */
const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

/* Same as the Incomplete screen. */
const PAYMENT_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  paid: { label: "Paid", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  delayed: { label: "Delayed", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  due: { label: "Due", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  partial: { label: "Partial", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  refunded: { label: "Refunded", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

const FALLBACK_BADGE_CLASSES = "bg-gray-100 text-gray-600 ring-gray-200";
const titleCase = (value) => String(value || "").replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/* Same as the Orders screen. */
const ICON_BUTTON =
  "inline-flex h-8 min-w-8 px-1.5 items-center justify-center rounded-lg border border-transparent !py-0 text-gray-400 !shadow-none transition-colors hover:border-gray-300 hover:!bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
  "xl:w-48 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FILTER_CHIP =
  "flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700";

const FILTER_CHIP_X =
  "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800";

const MENU_ITEM =
  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer";

const DATE_INPUT =
  "w-44 !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 focus:!border-[#634FE5] focus:!outline-none";

/* The query keeps dates as "yyyy-MM-dd HH:mm:ss" strings (that is what is
   sent); react-datepicker needs a Date. */
function toPickerDate(value) {
  if (!value) return null;
  var date = new Date(String(value).replace(" ", "T"));
  return isNaN(date) ? null : date;
}


const Refunds = () => {

  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, paymentGateways, addNotification, privacyMode, paymentStatusArgs } = useCounterStore()

  /*
    This page is the orders list pinned to order `status: refunded` - the
    status staff set when they refund an order. It used to be pinned to
    `payment_status: refunded`, which no order has (refunded orders keep a
    payment status of paid, pending or none), so the page was always empty
    while every refunded order sat unseen in Orders. The pin is not a filter
    the operator can change; payment status is, since it is what varies here.
  */
  var [ordersData, setordersData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: 'refunded', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);
  var [sumData, setsumData] = useState(null);

  function onSelectRows(rows) {
    setselectedRows(rows);
  }


  var columns = {
    check: { label: ("Check"), },
    id: { label: ("ID"), callback: callbackTitle, classes: "px-5 py-2 text-gray-600 w-64" },
    billing_name: { label: ("Customer"), callback: callbackUserName, classes: "text-left text-gray-600 w-48" },
    /* No refund amount is stored anywhere, so this is the order's total - it
       was headed "Refunded", which it is not necessarily. */
    total_amount: { label: "Order total", callback: callbackTotal, classes: "text-left text-gray-600 w-64" },
    /* Every row's status is "refunded"; payment is what varies (a paid one may
       not have had the money sent back yet). */
    payment_status: { label: ("Payment"), callback: callbackPaymentStatus, classes: "text-left text-gray-600 w-48" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };


  function orderTotal(entry) {
    return (parseFloat(entry.subtotal_amount || 0) + parseFloat(entry.shipping_amount || 0)) - (parseFloat(entry.discount_amount || 0) + parseFloat(entry.advance_payment || 0));
  }


  function delete_orders(ids) {

    ids = ids ? ids : selectedRows;

    if (!ids?.length) {
      return;
    }

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ids: ids }),
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("Only administrators and store managers can delete orders.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);

        if (res?.success === false) {
          addNotification({ type: 'error', title: 'Delete failed', content: "The server did not delete the order(s)." })
          return;
        }

        var deleted = parseInt(res?.deleted, 10);
        if (Number.isNaN(deleted)) deleted = ids.length;

        addNotification({ type: 'success', title: 'Deleted', content: deleted === 1 ? (ids.length === 1 ? `Order #${ids[0]} deleted.` : "1 order deleted.") : `${deleted} orders deleted.` })
        setselectedRows([]);
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Delete failed', content: error?.message ?? "Could not delete the selected order(s)." })
      });
  }


  function fetchPosts() {

    if (queryPrams.paged < 0) {
      return;
    }

    var requestId = ++requestRef.current;
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      /* Re-pinned on every request, so no query change can drop it. */
      body: JSON.stringify({ ...queryPrams, status: 'refunded' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        /* An older, slower request must not replace a newer one's results. */
        if (requestId !== requestRef.current) return;

        /* With no matches the API can leave out `posts`, `total` and `max_pages`. */
        var orders = Array.isArray(res?.posts) ? res.posts : [];
        var total = parseInt(res?.total) || 0;
        var max_pages = parseInt(res?.max_pages) || 1;

        setordersData({ posts: orders, total: total, maxPages: max_pages })
        setsumData({
          count: orders.length,
          value: orders.reduce((sum, entry) => sum + orderTotal(entry), 0),
        });
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;

        setloading(false);
        addNotification({ type: 'error', title: 'Refunds not loaded', content: error?.message ?? "The list could not be loaded. Please try again." })
      });
  }


  /*
    Typing in the search box waits a moment; every other change (a page, a
    filter) loads at once. The whole query used to wait half a second, so
    paging felt stuck. Only the newest request's answer is shown.
  */
  const requestRef = useRef(0);
  const lastKeyword = useRef(queryPrams.keyword);

  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. */
    if (!token) {
      return;
    }

    var typing = queryPrams.keyword !== lastKeyword.current;
    lastKeyword.current = queryPrams.keyword;

    if (!typing) {
      fetchPosts();
      return;
    }

    const handler = setTimeout(fetchPosts, 400);
    return () => clearTimeout(handler);

  }, [queryPrams, token]);


  function onChangeQueryPrams(queryPrams) {
    if (queryPrams) {
      setqueryPrams(queryPrams)
    }
  }

  function onRefreshRequest(rows) {
    fetchPosts();
  }


  function callbackTitle(entry, columnIndex) {

    return (
      <td data-label="ID" className="text-left !px-5"
        key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            {/* Was /orders/{id}, which the store does not have. */}
            <Link className="font-mono text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline" href={`/dashboard/orders/${entry.id}`}>
              {"#" + entry.id}
            </Link>

            <PopoverButton buttonLabel={""} buttonIcon={<IconEdit size={16} />} title={`Edit order #${entry.id}`} drawer={"right"} buttonClass={ICON_BUTTON}>

              <div className="p-5 bg-gray-50 text-left">
                <OrderEdit id={entry.id} variant="drawer" />
              </div>

            </PopoverButton>
          </div>

          <div className="flex flex-col gap-0.5 text-[11px] text-gray-500 sm:pr-5">
            <div className="flex gap-1"><span className="text-gray-400">Created</span> <span className="tabular-nums">{entry.created_at ? formatDate(entry.created_at) : "—"}</span></div>
            <div className="flex gap-1"><span className="text-gray-400">Updated</span> <span className="tabular-nums">{entry.updated_at ? formatDate(entry.updated_at) : "—"}</span></div>
          </div>
        </div>
      </td>
    );
  }

  function callbackUserName(entry, columnIndex) {

    return (
      <td data-label="Customer" className="!px-5 py-3"
        key={columnIndex}>
        <div className={`group flex cursor-pointer flex-col gap-1 rounded-lg py-1 text-right text-sm transition-colors hover:bg-gray-100 lg:text-left ${privacyMode ? 'blur-[3px]' : ""}`}
          title="Click to copy customer details"
          onClick={() => {
            navigator.clipboard.writeText([entry?.billing_name, entry?.billing_address, entry?.billing_phone].filter(Boolean).join("\n"))
            addNotification({ type: 'success', title: 'Info Copied', content: "Customer details copied" })
          }}>
          <div className="flex items-center gap-1.5 font-medium text-gray-900">
            <span className="truncate">{entry.billing_name || "—"}</span>
            <IconCopy size={13} className="shrink-0 text-gray-300 transition-colors group-hover:text-gray-500" />
          </div>
          {entry.billing_address && <div className="text-[11px] text-gray-500">{entry.billing_address}</div>}
          {entry?.billing_phone && <div className="text-[11px] tabular-nums text-gray-500">{entry.billing_phone}</div>}
        </div>
      </td>
    );
  }


  /* Courier and fraud check had a column each; they sit with the other row
     actions, as on Orders. */
  function callbackActions(entry, columnIndex) {

    var orderItems = entry?.order_items

    return (
      <td data-label="Actions" className="text-sm"
        key={columnIndex}>
        <div className="flex flex-wrap gap-2 justify-end sm:pr-5 text-sm">
          <div className="flex justify-end">
            <OrderCourier order_id={entry.id} deliveryData={entry?.delivery} />
          </div>
          <div className="flex justify-end">
            <CheckPhoneFraud phone={entry?.billing_phone} order_id={entry.id} />
          </div>

          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconPackages size={18} />} title={"Order Items"} position={""} buttonClass={ICON_BUTTON} popoverClass={`max-h-[600px] w-[360px] bg-white overflow-y-auto z-50 rounded-xl border border-gray-200 shadow-lg top-full right-0 absolute`}>

            <div className="p-3 flex flex-col gap-2">
              {orderItems?.map((item, index) => (
                <div key={item.id ?? index} className="flex text-left flex-col gap-1 rounded-lg border border-gray-200 bg-gray-50 p-2.5">
                  <div className="text-xs font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: `${item.product_name}` }}></div>
                  <div className="flex gap-3 text-[11px] text-gray-500">
                    <div>Quantity: {item.quantity}</div>
                    <div>Price: {item.price}</div>
                  </div>
                </div>
              ))}

              {!orderItems?.length && (
                <div className="rounded-lg border border-dashed border-gray-200 p-3 text-center text-xs text-gray-400">No items on this order.</div>
              )}

              {orderItems?.length > 0 && (
                <div className="inline-flex h-8 w-fit cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-xs font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50" onClick={() => {
                  var copyText = orderItems.map(item => `${item.product_name} \nQuantity: ${item.quantity} \nUnit Price: ${item.price} \n`).join("\n");
                  navigator.clipboard.writeText(copyText)
                  addNotification({ type: 'success', title: 'Info Copied', content: "Order items copied." })
                }}>
                  <IconCopy size={16} /> Copy
                </div>
              )}
            </div>

          </PopoverButton>

          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">
              <div className="flex flex-col gap-0.5">
                <Link className={MENU_ITEM} href={`/dashboard/orders/${entry.id}`}>
                  <IconEyeShare size={16} /> Open order
                </Link>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                  if (confirm(`Permanently delete refunded order #${entry.id}? There is no trash for orders, and the refund record goes with it.`)) {
                    delete_orders([entry.id]);
                  }
                }}>
                  <IconTrash size={16} /> Delete
                </div>
              </div>
            </div>

          </PopoverButton>

        </div>
      </td>
    );
  }

  function callbackTotal(entry, columnIndex) {

    var total = orderTotal(entry);

    return (
      <td data-label="Refunded" className="text-left !px-5"
        key={columnIndex}>
        <div className="flex flex-col gap-1 text-[11px] py-3">

          {entry.subtotal_amount > 0 && (
            <div className="flex justify-between gap-3 text-gray-500"><span>Sub Total</span> <span className="tabular-nums text-gray-700">{wrapCurrency(entry.subtotal_amount)}</span></div>
          )}
          {entry.discount_amount > 0 && (
            <div className="flex justify-between gap-3 text-gray-500"><span>Discount</span> <span className="tabular-nums text-rose-600">-{wrapCurrency(entry.discount_amount)}</span></div>
          )}
          {entry.shipping_amount > 0 && (
            <div className="flex justify-between gap-3 text-gray-500"><span>Delivery Charge</span> <span className="tabular-nums text-emerald-600">+{wrapCurrency(entry.shipping_amount)}</span></div>
          )}
          {entry.advance_payment > 0 && (
            <div className="flex justify-between gap-3 text-gray-500"><span>Advance Payment</span> <span className="tabular-nums text-rose-600">-{wrapCurrency(entry.advance_payment)}</span></div>
          )}

          <div className="mt-1 flex justify-between gap-3 border-t border-dashed border-gray-200 pt-1.5 text-xs font-semibold text-gray-900"><span>Total</span> <span className="tabular-nums">{wrapCurrency(total)}</span></div>
        </div>
      </td>
    );
  }


  function callbackPaymentStatus(entry, columnIndex) {

    var paymentKey = entry.payment_status || "";
    var badge = paymentKey
      ? (PAYMENT_STATUS_BADGES[paymentKey] ?? { label: paymentStatusArgs?.[paymentKey]?.label ?? titleCase(paymentKey), classes: FALLBACK_BADGE_CLASSES })
      : null;
    var method = entry.payment_method ? (paymentGateways?.[entry.payment_method]?.label ?? entry.payment_method) : "";

    return (
      <td data-label="Payment" className="!px-5 py-3 text-left text-sm"
        key={columnIndex}>
        <div className="flex flex-col items-start gap-1.5">
          <div className="text-xs">
            {badge ? <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span> : <span className="text-gray-400">{("Not set")}</span>}
          </div>
          {method && <div className="text-[11px] text-gray-500">{method}</div>}
        </div>
      </td>
    );
  }


  /* get_users returns `id`; this read `args.ID`, so the filter never sent an id. */
  function onPickCustomer(args) {
    setqueryPrams({ ...queryPrams, customer: { id: args?.id ?? args?.ID, display_name: args?.display_name, avatar: args?.avatar }, paged: 1 })
  }

  /* DropDown hands back the whole option; only its value belongs in the query. */
  function onFilterByPaymentMethod(args) {
    setqueryPrams({ ...queryPrams, payment_method: args?.value ?? "", paged: 1 })
  }

  function onAddProducts(item) {
    setqueryPrams({ ...queryPrams, product: { id: item?.id, title: item?.title }, paged: 1 })
  }


  const moreFilterCount = [
    queryPrams?.payment_method,
    queryPrams?.customer?.display_name,
    queryPrams?.product?.title,
    queryPrams?.from_date,
    queryPrams?.to_date,
  ].filter(Boolean).length;
  const activeFilterCount = moreFilterCount + [queryPrams?.payment_status].filter(Boolean).length;


  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Refunds")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {ordersData?.total ?? 0} {activeFilterCount > 0 ? ("refunded orders match the filters") : ("refunded orders")}
            {" · "}{("Orders whose status is Refunded. Check the payment status to see whether the money has gone back.")}
          </p>
        </div>

        <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
          <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-3">

        <div className="flex flex-wrap items-center gap-2">

          {/* Order status is pinned to "refunded", so choosing another one here
              used to empty the list. Payment status is what tells refunds apart. */}
          <select aria-label="Payment status" className={FILTER_SELECT} value={queryPrams?.payment_status ?? ""} onChange={ev => {
            setqueryPrams({ ...queryPrams, payment_status: ev.target.value, paged: 1 });
          }}>
            <option value="">{("All Payments")}</option>
            {Object.values(paymentStatusArgs ?? {}).map(item => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>

          <PopoverButton wrapperClass={``} enableCloseBtn={false} buttonClass={TOOLBAR_BUTTON} buttonLabel={moreFilterCount > 0 ? `${("More Filters")} (${moreFilterCount})` : ("More Filters")} buttonIcon={<IconFilter size={16} />} title={"More Filters"} position={"bottomLeft"} popoverClass={`absolute z-[999] w-[380px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

            <div className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Payment Method</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.payment_method} options={paymentGateways} label={`Payment Method`} onOptionsChoose={onFilterByPaymentMethod} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Customer</div>
                  <div>
                    <UsersPicker placeholder={"Search Customer"} role={`customer`} onPick={onPickCustomer} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Product</div>
                  <div>
                    <ProductsPicker placeholder="Search product..." onPick={onAddProducts} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">From</div>
                  <div>
                    <DatePicker
                      showTimeSelect
                      isClearable
                      placeholderText="Any date"
                      dateFormat="yyyy-MM-dd HH:mm"
                      className={DATE_INPUT}
                      selected={toPickerDate(queryPrams?.from_date)}
                      onChange={(date) => {
                        setqueryPrams({ ...queryPrams, from_date: date ? format(date, "yyyy-MM-dd HH:mm:ss") : "", paged: 1 });
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">To</div>
                  <div>
                    <DatePicker
                      showTimeSelect
                      isClearable
                      placeholderText="Any date"
                      dateFormat="yyyy-MM-dd HH:mm"
                      className={DATE_INPUT}
                      selected={toPickerDate(queryPrams?.to_date)}
                      minDate={toPickerDate(queryPrams?.from_date)}
                      onChange={(date) => {
                        setqueryPrams({ ...queryPrams, to_date: date ? format(date, "yyyy-MM-dd HH:mm:ss") : "", paged: 1 });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </PopoverButton>

        </div>

        {selectedRows?.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
            <span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
            <button type="button" className="!h-8 rounded-md !border-0 !bg-transparent px-2 text-sm !text-gray-500 !shadow-none hover:!bg-white hover:!text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>
            <button type="button"
              className="inline-flex !h-8 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50"
              disabled={loading}
              onClick={() => {
                if (confirm(`Permanently delete ${selectedRows.length} refunded ${selectedRows.length === 1 ? "order" : "orders"}? There is no trash for orders, and the refund record goes with them.`)) {
                  delete_orders()
                }
              }}>
              <IconTrash size={15} /> {("Delete")}
            </button>
          </div>
        )}
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {queryPrams?.payment_status?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Payment')}: {paymentStatusArgs?.[queryPrams.payment_status]?.label ?? titleCase(queryPrams.payment_status)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, payment_status: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.payment_method?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Method')}: {paymentGateways?.[queryPrams.payment_method]?.label ?? queryPrams.payment_method}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, payment_method: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.customer?.display_name?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Customer')}: {queryPrams.customer.display_name}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, customer: {}, paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.product?.title?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Product')}: {queryPrams.product.title}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, product: {}, paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.from_date && (
            <div className={FILTER_CHIP}>
              <span>{('From')}: {String(queryPrams.from_date).slice(0, 16)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, from_date: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.to_date && (
            <div className={FILTER_CHIP}>
              <span>{('To')}: {String(queryPrams.to_date).slice(0, 16)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, to_date: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          <button type="button" className="!border-0 !bg-transparent !p-0 !text-xs !font-medium !text-gray-500 !shadow-none hover:!text-red-600" onClick={() => {
            setqueryPrams({ ...queryPrams, payment_status: "", payment_method: "", customer: {}, product: {}, from_date: "", to_date: "", paged: 1 });
          }}>{("Clear all")}</button>
        </div>
      )}


      {ordersData && !loading && activeFilterCount === 0 && !queryPrams?.keyword && (ordersData?.total ?? 0) === 0 && (ordersData?.posts ?? []).length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconReceiptRefund size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("No refunded orders")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("An order shows up here when its status is set to Refunded on the order's page.")}</p>
        </div>
      ) : (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={ordersData}
          itemPath={""}
          onChange={onChangeQueryPrams}
          loading={loading}
          selectedRows={selectedRows}
          onSelectRows={onSelectRows}
          onRefreshRequest={onRefreshRequest}
        />
      )}


      {sumData && ordersData?.posts?.length > 0 && (
        <div className="flex justify-end">
          {/* Sum of the orders on this page only, using the same total as each row. */}
          <div className="flex w-full max-w-sm flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {("This page")} · {sumData.count} {("refunded orders")}
            </div>
            <div className="mt-1 flex justify-between border-t border-dashed border-gray-200 pt-2 text-sm font-semibold text-gray-900">
              {/* "Total refunded" before; no refund amount is recorded, only the order totals. */}
              <span>Order value</span><span className="tabular-nums">{wrapCurrency(sumData.value)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Refunds;
