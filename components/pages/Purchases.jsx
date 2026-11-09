"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IconPlus, IconFilter, IconDotsVertical, IconTrash, IconX, IconEdit, IconEyeShare, IconCopy, IconPackages, IconRefresh, IconTruckLoading } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../../components/PopoverButton';
import PurchaseEdit from '../../components/pages/PurchaseEdit';
import UsersPicker from '../../components/shop-elements/UsersPicker';
import DropDown from '../../components/DropDown';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


/* Status pills. Tones match the Orders list. */
const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

const PURCHASE_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  completed: { label: "Completed", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  hold: { label: "Hold", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
  cancelled: { label: "Cancelled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  canceled: { label: "Canceled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  refunded: { label: "Refunded", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

const PAYMENT_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  paid: { label: "Paid", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  delayed: { label: "Delayed", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  due: { label: "Due", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  partial: { label: "Partial", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  refunded: { label: "Refunded", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

/* Unknown statuses still get a neutral pill instead of an empty cell. */
const FALLBACK_BADGE_CLASSES = "bg-gray-100 text-gray-600 ring-gray-200";
const titleCase = (value) => String(value || "").replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const STATUS_OPTIONS = [
  { label: 'Pending', value: 'pending' },
  { label: 'Processing', value: 'processing' },
  { label: 'Completed', value: 'completed' },
  { label: 'Hold', value: 'hold' },
  { label: 'Canceled', value: 'canceled' },
  { label: 'Refunded', value: 'refunded' },
  { label: 'Failed', value: 'failed' },
];

const PAYMENT_STATUS_OPTIONS = [
  { label: "Pending", value: "pending" },
  { label: "Paid", value: "paid" },
  { label: "Partial", value: "partial" },
  { label: "Due", value: "due" },
  { label: "Delayed", value: "delayed" },
  { label: "Failed", value: "failed" },
];

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
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";

/*  because the global `button` rule in globals.css is unlayered and
   otherwise wins (grey text, border) - same as the Products screen. */
const PRIMARY_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-50 cursor-pointer";

const DATE_INPUT =
  "w-44 !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 focus:!border-[#634FE5] focus:!outline-none";

/* The query keeps dates as "yyyy-MM-dd HH:mm:ss" strings (that is what is
   sent); react-datepicker needs a Date. */
function toPickerDate(value) {
  if (!value) return null;
  var date = new Date(String(value).replace(" ", "T"));
  return isNaN(date) ? null : date;
}


const Purchases = (props) => {

  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, paymentGateways, addNotification, privacyMode } = useCounterStore()

  const router = useRouter()

  var [ordersData, setordersData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: '', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);
  var [sumData, setsumData] = useState(null);

  function onSelectRows(rows) {
    setselectedRows(rows);
  }


  var columns = {
    check: { label: ("Check"), },
    id: { label: ("ID"), callback: callbackTitle, classes: "px-5 py-2 text-gray-600 w-64" },
    billing_name: { label: ("Supplier"), callback: callbackUserName, classes: "text-left text-gray-600 w-48" },
    status: { label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600 w-32" },
    total_amount: { label: "Total", callback: callbackTotal, classes: "text-left text-gray-600 w-64" },
    payment_status: { label: ("Payment"), callback: callbackPaymentStatus, classes: "text-left text-gray-600 w-48" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };

  var [newPurchasePrams, setnewPurchasePrams] = useState({ total_amount: "", category: "", subcategory: "", payment_method: "", payment_status: "", transaction_id: "", created_by: "", created_for: "", note: "", });


  /* Creates an empty purchase; it is filled in from the Edit drawer. */
  async function add_purchase() {

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/create_purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPurchasePrams),
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("You are not allowed to create purchases.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }

        return response.json();
      })
      .then((res) => {
        setloading(false);

        if (res?.status !== 'success') {
          addNotification({ type: 'error', title: 'Purchase not added', content: res?.message ?? "The purchase could not be added." })
          return;
        }

        /* create_purchase answers with the new purchase's id: open it to fill in,
           rather than leaving an empty row somewhere in the list. */
        var newId = parseInt(res?.id, 10);

        if (newId > 0) {
          addNotification({ type: 'success', title: 'Purchase added', content: `Purchase #${newId} created. Add its supplier, items and payment, then save.` })
          router.push(`/dashboard/purchases/${newId}`);
          return;
        }

        addNotification({ type: 'success', title: 'Purchase added', content: "Purchase added." })
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Purchase not added', content: error?.message ?? "The request failed. Please try again." })
      });
  }


  function delete_purchases(ids) {

    ids = ids ? ids : selectedRows;

    if (!ids?.length) {
      return;
    }

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ids: ids }),
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("You are not allowed to delete purchases.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);

        if (res?.success === false) {
          addNotification({ type: 'error', title: 'Delete failed', content: "The server did not delete the purchase(s)." })
          return;
        }

        var deleted = parseInt(res?.deleted, 10);
        if (Number.isNaN(deleted)) deleted = ids.length;

        addNotification({ type: 'success', title: 'Deleted', content: deleted === 1 && ids.length === 1 ? `Purchase #${ids[0]} deleted.` : `${deleted} ${deleted === 1 ? "purchase" : "purchases"} deleted.` })
        setselectedRows([]);
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Delete failed', content: error?.message ?? "Could not delete the selected purchase(s)." })
      });
  }


  function fetchPosts() {

    if (queryPrams.paged < 0) {
      return;
    }

    var requestId = ++requestRef.current;
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_purchases", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(serverQuery(queryPrams)),
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
        setsumData(sumPurchaseAmounts(orders));
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;

        setloading(false);
        addNotification({ type: 'error', title: 'Purchases not loaded', content: error?.message ?? "The list could not be loaded. Please try again." })
      });
  }


  /*
    What get_purchases reads, from what the page keeps:
    - the supplier filter as `supplier_id` (it was a customer picker, and the
      server filtered on a column purchases do not have);
    - the product filter as `product_id` (`product: {id, title}` was ignored);
    - dates as plain days, with a missing end filled in: the server adds the
      times itself and only filters when both ends are set.
  */
  function serverQuery(query) {
    var from = query?.from_date ? String(query.from_date).slice(0, 10) : "";
    var to = query?.to_date ? String(query.to_date).slice(0, 10) : "";

    if (from || to) {
      from = from || "1970-01-01";
      to = to || "2999-12-31";
    }

    return { ...query, supplier_id: query?.customer?.id ?? "", product_id: query?.product?.id ?? "", from_date: from, to_date: to };
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


  function sumPurchaseAmounts(orders) {

    if (!orders || !Array.isArray(orders)) {
      return {
        subtotal_amount: 0,
        total_amount: 0,
        discount_amount: 0,
        tax_amount: 0,
        shipping_amount: 0
      };
    }

    return orders.reduce((acc, post) => {
      acc.total_amount += parseFloat(post.total_amount) || 0;
      acc.subtotal_amount += parseFloat(post.subtotal_amount) || 0;
      acc.discount_amount += parseFloat(post.discount_amount) || 0;
      acc.tax_amount += parseFloat(post.tax_amount) || 0;
      acc.shipping_amount += parseFloat(post.shipping_amount) || 0;
      return acc;
    }, {
      subtotal_amount: 0,
      total_amount: 0,
      discount_amount: 0,
      tax_amount: 0,
      shipping_amount: 0
    });
  }


  function callbackTitle(entry, columnIndex) {

    return (
      <td data-label="ID" className="text-left !px-5"
        key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Link className="font-mono text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline" href={`/dashboard/purchases/${entry.id}`}>
              {"#" + entry.id}
            </Link>

            <PopoverButton buttonLabel={""} buttonIcon={<IconEdit size={16} />} title={"Edit Purchase"} drawer={"right"} buttonClass={ICON_BUTTON}>

              <div className="p-5 bg-gray-50 text-left">
                <PurchaseEdit id={entry.id} variant="drawer" />
              </div>

            </PopoverButton>
          </div>

          {/* The dates had a column of their own; they sit under the ID as on Orders. */}
          <div className="flex flex-col gap-0.5 text-[11px] text-gray-500 sm:pr-5">
            <div className="flex gap-1"><span className="text-gray-400">Created</span> <span className="tabular-nums">{entry.created_at ? formatDate(entry.created_at) : "—"}</span></div>
            <div className="flex gap-1"><span className="text-gray-400">Updated</span> <span className="tabular-nums">{entry.updated_at ? formatDate(entry.updated_at) : "—"}</span></div>
          </div>
        </div>
      </td>
    );
  }

  function callbackUserName(entry, columnIndex) {

    if (!entry?.billing_name && !entry?.billing_address && !entry?.billing_phone) {
      return (
        <td data-label="Supplier" className="!px-5 py-3" key={columnIndex}>
          <span className="text-sm text-gray-300">—</span>
        </td>
      );
    }

    return (
      <td data-label="Supplier" className="!px-5 py-3"
        key={columnIndex}>
        <div className={`group flex cursor-pointer flex-col gap-1 rounded-lg py-1 text-right text-sm transition-colors hover:bg-gray-100 lg:text-left ${privacyMode ? 'blur-[3px]' : ""}`}
          title="Click to copy supplier details"
          onClick={() => {
            navigator.clipboard.writeText([entry?.billing_name, entry?.billing_address, entry?.billing_phone].filter(Boolean).join("\n"))
            addNotification({ type: 'success', title: 'Info Copied', content: "Supplier details copied" })
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

  function callbackActions(entry, columnIndex) {

    var orderItems = entry?.order_items

    return (
      <td data-label="Actions" className="text-sm"
        key={columnIndex}>
        <div className="flex flex-wrap gap-2 justify-end sm:pr-5 text-sm">

          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconPackages size={18} />} title={"Purchase Items"} position={""} buttonClass={ICON_BUTTON} popoverClass={`max-h-[600px] w-[360px] bg-white overflow-y-auto z-50 rounded-xl border border-gray-200 shadow-lg top-full right-0 absolute`}>

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
                <div className="rounded-lg border border-dashed border-gray-200 p-3 text-center text-xs text-gray-400">No items on this purchase.</div>
              )}

              {orderItems?.length > 0 && (
                <div className="inline-flex h-8 w-fit cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-xs font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50" onClick={() => {
                  var copyText = orderItems.map(item => `${item.product_name} \nQuantity: ${item.quantity} \nUnit Price: ${item.price} \n`).join("\n");
                  navigator.clipboard.writeText(copyText)
                  addNotification({ type: 'success', title: 'Info Copied', content: "Purchase items copied." })
                }}>
                  <IconCopy size={16} /> Copy
                </div>
              )}
            </div>

          </PopoverButton>

          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">
              <div className="flex flex-col gap-0.5">
                <Link className={MENU_ITEM} href={`/dashboard/purchases/${entry.id}`}>
                  <IconEyeShare size={16} /> Open
                </Link>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                  if (confirm(`Permanently delete purchase #${entry.id} and its items? There is no trash, so this cannot be undone.`)) {
                    delete_purchases([entry.id]);
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

    var total = (parseFloat(entry.subtotal_amount || 0) + parseFloat(entry.shipping_amount || 0)) - (parseFloat(entry.discount_amount || 0) + parseFloat(entry.advance_payment || 0));

    return (
      <td data-label="Total" className="text-left !px-5"
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


  function callbackStatus(entry, columnIndex) {

    var badge = PURCHASE_STATUS_BADGES[entry.status]
      ?? (entry.status ? { label: titleCase(entry.status), classes: FALLBACK_BADGE_CLASSES } : null);

    return (
      <td data-label="Status" className="!px-5 py-3 text-left text-sm"
        key={columnIndex}>
        <div className="text-xs">
          {badge ? (
            <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>
          ) : (
            <span className="text-gray-300">—</span>
          )}
        </div>
      </td>
    );
  }

  function callbackPaymentStatus(entry, columnIndex) {

    var paymentKey = entry.payment_status || "pending";
    var badge = PAYMENT_STATUS_BADGES[paymentKey] ?? { label: titleCase(paymentKey), classes: FALLBACK_BADGE_CLASSES };

    return (
      <td data-label="Payment Status" className="!px-5 py-3 text-left text-sm"
        key={columnIndex}>
        <div className="flex flex-col items-start gap-1.5">
          <div className="text-xs">
            <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>
          </div>

          {entry.payment_method?.length > 0 && (
            <div className="text-[11px] text-gray-500">{paymentGateways?.[entry.payment_method]?.label ?? entry.payment_method}</div>
          )}
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


  /* Filters inside the "More Filters" popover, and every active filter (for the chips). */
  const moreFilterCount = [
    queryPrams?.payment_method,
    queryPrams?.customer?.display_name,
    queryPrams?.product?.title,
    queryPrams?.from_date,
    queryPrams?.to_date,
  ].filter(Boolean).length;
  const activeFilterCount = moreFilterCount + [queryPrams?.status, queryPrams?.payment_status].filter(Boolean).length;

  const statusLabel = (value) => STATUS_OPTIONS.find((o) => o.value === value)?.label ?? titleCase(value);
  const paymentStatusLabel = (value) => PAYMENT_STATUS_OPTIONS.find((o) => o.value === value)?.label ?? titleCase(value);


  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Purchases")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {ordersData?.total ?? 0} {activeFilterCount > 0 ? ("purchases match the filters") : ("purchases")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>
          <button type="button" className={PRIMARY_BUTTON} disabled={loading} onClick={() => add_purchase()}>
            <IconPlus size={16} /> {("Add Purchase")}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3">

        <div className="flex flex-wrap items-center gap-2">

          <select className={FILTER_SELECT} value={queryPrams?.status ?? ""} onChange={ev => {
            setqueryPrams({ ...queryPrams, status: ev.target.value, paged: 1 });
          }}>
            <option value="">{("All Statuses")}</option>
            {STATUS_OPTIONS.map(item => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>

          <select className={FILTER_SELECT} value={queryPrams?.payment_status ?? ""} onChange={ev => {
            setqueryPrams({ ...queryPrams, payment_status: ev.target.value, paged: 1 });
          }}>
            <option value="">{("All Payments")}</option>
            {PAYMENT_STATUS_OPTIONS.map(item => (
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
                  <div className="text-sm font-medium text-gray-700">Supplier</div>
                  <div>
                    <UsersPicker placeholder={"Search Supplier"} role={`supplier`} onPick={onPickCustomer} />
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
                      isClearable
                      placeholderText="Any date"
                      dateFormat="yyyy-MM-dd"
                      className={DATE_INPUT}
                      selected={toPickerDate(queryPrams?.from_date)}
                      maxDate={toPickerDate(queryPrams?.to_date)}
                      onChange={(date) => {
                        setqueryPrams({ ...queryPrams, from_date: date ? format(date, "yyyy-MM-dd") : "", paged: 1 });
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">To</div>
                  <div>
                    <DatePicker
                      isClearable
                      placeholderText="Any date"
                      dateFormat="yyyy-MM-dd"
                      className={DATE_INPUT}
                      selected={toPickerDate(queryPrams?.to_date)}
                      minDate={toPickerDate(queryPrams?.from_date)}
                      onChange={(date) => {
                        setqueryPrams({ ...queryPrams, to_date: date ? format(date, "yyyy-MM-dd") : "", paged: 1 });
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
                if (confirm(`Permanently delete ${selectedRows.length} ${selectedRows.length === 1 ? "purchase" : "purchases"} and their items? There is no trash, so this cannot be undone.`)) {
                  delete_purchases()
                }
              }}>
              <IconTrash size={15} /> {("Delete")}
            </button>
          </div>
        )}
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {queryPrams?.status?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Status')}: {statusLabel(queryPrams.status)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, status: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.payment_status?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Payment')}: {paymentStatusLabel(queryPrams.payment_status)}</span>
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
              <span>{('Supplier')}: {queryPrams.customer.display_name}</span>
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
              <span>{('From')}: {String(queryPrams.from_date).slice(0, 10)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, from_date: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.to_date && (
            <div className={FILTER_CHIP}>
              <span>{('To')}: {String(queryPrams.to_date).slice(0, 10)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, to_date: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          <button type="button" className="!border-0 !bg-transparent !p-0 !text-xs !font-medium !text-gray-500 !shadow-none hover:!text-red-600" onClick={() => {
            setqueryPrams({ ...queryPrams, status: "", payment_method: "", payment_status: "", customer: {}, product: {}, from_date: "", to_date: "", paged: 1 });
          }}>{("Clear all")}</button>
        </div>
      )}


      {ordersData && !loading && activeFilterCount === 0 && !queryPrams?.keyword && (ordersData?.total ?? 0) === 0 && (ordersData?.posts ?? []).length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconTruckLoading size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("No purchases yet")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("Record the stock you buy from suppliers, so what you paid is on record against each supplier and product.")}</p>
          <button type="button" className={`${PRIMARY_BUTTON} mt-2`} disabled={loading} onClick={() => add_purchase()}>
            <IconPlus size={16} /> {("Add Purchase")}
          </button>
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
          {/* Sums of the purchases on this page only, not of every matching one. */}
          <div className="flex w-full max-w-sm flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {("This page")} · {ordersData.posts.length} {("purchases")}
            </div>

            <div className="flex justify-between text-xs text-gray-500"><span>Items Total</span><span className="tabular-nums text-gray-700">{wrapCurrency(sumData?.subtotal_amount)}</span></div>
            <div className="flex justify-between text-xs text-gray-500"><span>Shipping</span><span className="tabular-nums text-emerald-600">+{wrapCurrency(sumData?.shipping_amount)}</span></div>
            <div className="flex justify-between text-xs text-gray-500"><span>Tax</span><span className="tabular-nums text-gray-700">+{wrapCurrency(sumData?.tax_amount)}</span></div>
            <div className="flex justify-between text-xs text-gray-500"><span>Discount</span><span className="tabular-nums text-rose-600">-{wrapCurrency(sumData?.discount_amount)}</span></div>

            <div className="mt-1 flex justify-between border-t border-dashed border-gray-200 pt-2 text-sm font-semibold text-gray-900">
              <span>Total</span><span className="tabular-nums">{wrapCurrency(sumData?.total_amount - sumData?.discount_amount)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchases;
