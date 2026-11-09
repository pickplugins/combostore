"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IconPlus, IconFilter, IconDotsVertical, IconTrash, IconX, IconEdit, IconEyeShare, IconCircleCheck, IconRefresh, IconReportMoney } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../../components/PopoverButton';
import ExpenseEdit from '../../components/pages/ExpenseEdit';
import DropDown from '../../components/DropDown';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


/* Status pills. Tones match the Orders and Purchases lists. */
const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

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


const Expenses = (props) => {

  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, paymentGateways, addNotification } = useCounterStore()

  const router = useRouter()

  var [expensesData, setexpensesData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: '', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);
  var [sumData, setsumData] = useState(null);

  function onSelectRows(rows) {
    setselectedRows(rows);
  }


  var columns = {
    check: { label: ("Check"), },
    id: { label: ("ID"), callback: callbackID, classes: "px-5 py-2 text-gray-600 w-64" },
    title: { label: ("Expense"), callback: callbackTitle, classes: "text-left text-gray-600" },
    billing_name: { label: ("Created By"), callback: callbackUserName, classes: "text-left text-gray-600 w-40" },
    payment_status: { label: ("Payment"), callback: callbackPaymentStatus, classes: "text-left text-gray-600 w-40" },
    total_amount: { label: "Amount", callback: callbackTotal, classes: "text-right text-gray-600 w-48" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };

  var [newExpensePrams, setnewExpensePrams] = useState({ total_amount: "", category: "", subcategory: "", payment_method: "", payment_status: "", transaction_id: "", created_by: "", created_for: "", note: "", });


  /* Creates an empty expense; it is filled in from the Edit drawer. */
  async function add_expense() {

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/create_expense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newExpensePrams),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        return response.json();
      })
      .then((res) => {
        setloading(false);

        if (res?.status !== 'success') {
          addNotification({ type: 'error', title: 'Expense not added', content: res?.message ?? "The expense could not be added." })
          return;
        }

        /* create_expense answers with the new expense's id: open it to fill in,
           rather than leaving an empty row somewhere in the list. */
        var newId = parseInt(res?.id, 10);

        if (newId > 0) {
          addNotification({ type: 'success', title: 'Expense added', content: `Expense #${newId} created. Add its amount, category and payment, then save.` })
          router.push(`/dashboard/expenses/${newId}`);
          return;
        }

        addNotification({ type: 'success', title: 'Expense added', content: "Expense added." })
        fetchPosts();
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Expense not added', content: "The request failed. Please try again." })
      });
  }


  function delete_expenses(ids) {

    ids = ids ? ids : selectedRows;

    if (!ids?.length) {
      return;
    }

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ids: ids }),
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("You are not allowed to delete expenses.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);

        if (res?.success === false) {
          addNotification({ type: 'error', title: 'Delete failed', content: "The server did not delete the expense(s)." })
          return;
        }

        addNotification({ type: 'success', title: 'Deleted', content: ids.length === 1 ? `Expense #${ids[0]} deleted.` : `${ids.length} expenses deleted.` })
        setselectedRows([]);
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Delete failed', content: error?.message ?? "Could not delete the selected expense(s)." })
      });
  }


  function fetchPosts() {

    if (queryPrams.paged < 0) {
      return;
    }

    var requestId = ++requestRef.current;
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_expenses", {
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
        var expenses = Array.isArray(res?.posts) ? res.posts : [];
        var total = parseInt(res?.total) || 0;
        var max_pages = parseInt(res?.max_pages) || 1;

        setexpensesData({ posts: expenses, total: total, maxPages: max_pages })
        setsumData(sumExpenseAmounts(expenses));
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;

        setloading(false);
        addNotification({ type: 'error', title: 'Expenses not loaded', content: error?.message ?? "The list could not be loaded. Please try again." })
      });
  }


  /*
    What get_expenses actually reads, from what the page keeps:
    - the product filter as `product_id` (the page kept `product: {id, title}`,
      which the server ignores, so picking a product filtered nothing);
    - dates as plain days: the server adds 00:00:00 / 23:59:59 itself and only
      filters when both ends are set, so a missing end is filled in. Full
      date-times used to be sent, and a lone From or To did nothing.
  */
  function serverQuery(query) {
    var from = query?.from_date ? String(query.from_date).slice(0, 10) : "";
    var to = query?.to_date ? String(query.to_date).slice(0, 10) : "";

    if (from || to) {
      from = from || "1970-01-01";
      to = to || "2999-12-31";
    }

    return { ...query, product_id: query?.product?.id ?? "", from_date: from, to_date: to };
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


  function sumExpenseAmounts(expenses) {

    if (!expenses || !Array.isArray(expenses)) {
      return { total_amount: 0, discount_amount: 0 };
    }

    return expenses.reduce((acc, post) => {
      acc.total_amount += parseFloat(post.total_amount) || 0;
      acc.discount_amount += parseFloat(post.discount_amount) || 0;
      return acc;
    }, { total_amount: 0, discount_amount: 0 });
  }


  function callbackID(entry, columnIndex) {

    return (
      <td data-label="ID" className="text-left !px-5"
        key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Link className="font-mono text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline" href={`/dashboard/expenses/${entry.id}`}>
              {"#" + entry.id}
            </Link>

            <PopoverButton buttonLabel={""} buttonIcon={<IconEdit size={16} />} title={`Edit expense #${entry.id}`} drawer={"right"} buttonClass={ICON_BUTTON}>

              <div className="p-5 bg-gray-50 text-left">
                <ExpenseEdit id={entry.id} variant="drawer" />
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


  /* Title and line items in one cell: the items were a column of their own
     that was empty on most rows. */
  function callbackTitle(entry, columnIndex) {

    var items = entry?.lineItems ?? [];
    var shown = items.slice(0, 3);

    return (
      <td data-label="Expense" className="!px-5 py-3 text-left"
        key={columnIndex}>
        <div className="flex min-w-0 flex-col gap-1.5">
          <Link className="truncate text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/expenses/${entry.id}`}>
            {entry?.title || <span className="font-normal text-gray-400">{("Untitled expense")}</span>}
          </Link>

          {shown.length > 0 && (
            <div className="flex flex-col gap-1">
              {shown.map((item, index) => (
                <div key={item.id ?? index} className="flex items-center gap-1.5 text-[11px] text-gray-500">
                  <IconCircleCheck size={13} className="shrink-0 text-gray-300" />
                  <span className="truncate" dangerouslySetInnerHTML={{ __html: `${item.product_name ?? ""}` }}></span>
                </div>
              ))}
              {items.length > shown.length && (
                <div className="text-[11px] text-gray-400">+{items.length - shown.length} {("more")}</div>
              )}
            </div>
          )}
        </div>
      </td>
    );
  }


  function callbackUserName(entry, columnIndex) {

    var name = entry?.created_by?.name;

    return (
      <td data-label="Created By" className="!px-5 py-3 text-left"
        key={columnIndex}>
        {name ? (
          <span className="text-sm text-gray-700">{name}</span>
        ) : (
          <span className="text-sm text-gray-300">—</span>
        )}
      </td>
    );
  }


  function callbackActions(entry, columnIndex) {

    return (
      <td data-label="Actions" className="text-sm"
        key={columnIndex}>
        <div className="flex justify-end sm:pr-5 text-sm">

          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">
              <div className="flex flex-col gap-0.5">
                <Link className={MENU_ITEM} href={`/dashboard/expenses/${entry.id}`}>
                  <IconEyeShare size={16} /> Open
                </Link>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                  if (confirm(`Permanently delete expense #${entry.id}? There is no trash, so this cannot be undone.`)) {
                    delete_expenses([entry.id]);
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


  /*
    The amount is `total_amount`. The old cell also printed a "Total" built
    from subtotal/shipping/advance - fields expenses do not carry - so it was
    hidden on almost every row and wrong on the rest.
  */
  function callbackTotal(entry, columnIndex) {

    var amount = parseFloat(entry.total_amount || 0);
    var discount = parseFloat(entry.discount_amount || 0);

    return (
      <td data-label="Amount" className="text-right !px-5"
        key={columnIndex}>
        <div className="flex flex-col items-end gap-1 py-3">
          {discount > 0 && (
            <div className="flex w-full justify-between gap-3 text-[11px] text-gray-500"><span>Discount</span> <span className="tabular-nums text-rose-600">-{wrapCurrency(discount)}</span></div>
          )}
          <span className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(amount)}</span>
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


  /* DropDown hands back the whole option; only its value belongs in the query. */
  function onFilterByPaymentMethod(args) {
    setqueryPrams({ ...queryPrams, payment_method: args?.value ?? "", paged: 1 })
  }

  function onAddProducts(item) {
    setqueryPrams({ ...queryPrams, product: { id: item?.id, title: item?.title }, paged: 1 })
  }


  const moreFilterCount = [
    queryPrams?.payment_method,
    queryPrams?.product?.title,
    queryPrams?.from_date,
    queryPrams?.to_date,
  ].filter(Boolean).length;
  const activeFilterCount = moreFilterCount + [queryPrams?.payment_status].filter(Boolean).length;

  const paymentStatusLabel = (value) => PAYMENT_STATUS_OPTIONS.find((o) => o.value === value)?.label ?? titleCase(value);


  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Expenses")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {expensesData?.total ?? 0} {activeFilterCount > 0 ? ("expenses match the filters") : ("expenses")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>
          <button type="button" className={PRIMARY_BUTTON} disabled={loading} onClick={() => add_expense()}>
            <IconPlus size={16} /> {("Add Expense")}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3">

        <div className="flex flex-wrap items-center gap-2">

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
                  <div className="text-sm font-medium text-gray-700">Product</div>
                  <div>
                    <ProductsPicker placeholder="Search product..." onPick={onAddProducts} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">From</div>
                  <div>
                    {/* Whole days: the server ignores the time and covers the full day. */}
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
                if (confirm(`Permanently delete ${selectedRows.length} ${selectedRows.length === 1 ? "expense" : "expenses"}? There is no trash, so this cannot be undone.`)) {
                  delete_expenses()
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
            setqueryPrams({ ...queryPrams, payment_method: "", payment_status: "", product: {}, from_date: "", to_date: "", paged: 1 });
          }}>{("Clear all")}</button>
        </div>
      )}


      {expensesData && !loading && activeFilterCount === 0 && !queryPrams?.keyword && (expensesData?.total ?? 0) === 0 && (expensesData?.posts ?? []).length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconReportMoney size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("No expenses yet")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("Record what the shop spends - rent, delivery, packaging, salaries - so profit reports show the real picture.")}</p>
          <button type="button" className={`${PRIMARY_BUTTON} mt-2`} disabled={loading} onClick={() => add_expense()}>
            <IconPlus size={16} /> {("Add Expense")}
          </button>
        </div>
      ) : (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={expensesData}
          itemPath={""}
          onChange={onChangeQueryPrams}
          loading={loading}
          selectedRows={selectedRows}
          onSelectRows={onSelectRows}
          onRefreshRequest={onRefreshRequest}
        />
      )}


      {sumData && expensesData?.posts?.length > 0 && (
        <div className="flex justify-end">
          {/* Sum of the expenses on this page only, not of every matching one. */}
          <div className="flex w-full max-w-sm flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {("This page")} · {expensesData.posts.length} {("expenses")}
            </div>

            {sumData.discount_amount > 0 && (
              <div className="flex justify-between text-xs text-gray-500"><span>Discount</span><span className="tabular-nums text-rose-600">-{wrapCurrency(sumData.discount_amount)}</span></div>
            )}

            <div className="mt-1 flex justify-between border-t border-dashed border-gray-200 pt-2 text-sm font-semibold text-gray-900">
              <span>Total</span><span className="tabular-nums">{wrapCurrency(sumData.total_amount)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
