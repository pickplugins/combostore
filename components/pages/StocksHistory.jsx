"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useRef } from "react";
import { IconArrowDownRight, IconArrowUpRight, IconArrowsExchange, IconPackage, IconPhoto, IconX, IconRefresh, IconArrowLeft, IconDownload } from "@tabler/icons-react";

import Image from "next/image";

import PopoverButton from '../../components/PopoverButton';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


/* Same toolbar and filter styles as the Stocks and Orders screens. */
const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";

const FILTER_INPUT =
  "!w-40 !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !px-3 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FILTER_SELECT =
  "!w-44 !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FILTER_CHIP = "flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700";

const FILTER_CHIP_CLOSE = "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5";

const EMPTY = <span className="text-sm text-gray-300">—</span>;


/* What each event means to someone reading the log. Anything new falls back to humanize(). */
const EVENT_LABELS = {
  sale: "Sold",
  return: "Returned by customer",
  purchase: "Received from supplier",
  purchase_return: "Returned to supplier",
  adjustment_in: "Added by hand",
  adjustment_out: "Removed by hand",
  adjustment: "Set by hand",
  set_stock: "Set by hand",
};

/* Where a movement came from - reference_type in the table. */
const SOURCE_OPTIONS = [
  ["", "All sources"],
  ["order", "Orders"],
  ["purchase", "Purchases"],
  ["manual", "By hand"],
];

const DIRECTION_OPTIONS = [
  ["", "In and out"],
  ["in", "Stock in"],
  ["out", "Stock out"],
];

/* New event types appear here without a code change: "stock_adjustment" reads "Stock adjustment". */
function humanize(text) {

  if (!text) {
    return "";
  }

  const words = String(text).replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").toLowerCase();

  return words.charAt(0).toUpperCase() + words.slice(1);
}

/* Quantities are decimal(12,3) in the table, so "2.000" is really 2. */
function formatQuantity(value) {

  var number = Number(value);

  return isNaN(number) ? "" : String(number);
}

function hasValue(value) {
  return value !== "" && value !== null && value !== undefined && !isNaN(Number(value));
}

/* The order or purchase a movement belongs to, as a link - or nothing for a hand adjustment. */
function referenceLink(entry) {

  var id = parseInt(entry?.reference_id, 10);

  if (!id) return null;

  if (entry?.reference_type === "order") return { href: `/dashboard/orders/${id}`, label: `Order #${id}` };
  if (entry?.reference_type === "purchase") return { href: `/dashboard/purchases/${id}`, label: `Purchase #${id}` };

  return null;
}

function parseDate(value) {
  var date = new Date(String(value ?? "").replace(" ", "T"));
  return isNaN(date) ? null : date;
}


/*
  The stock movement log.

  It could only be narrowed by product and date - not by where a movement
  came from or which way it went - and nothing said what an event like
  "adjustment_out" meant or linked to the order or purchase behind it.
  The Stocks screen had no way to jump to one product's history.
*/
const StocksHistory = (props) => {

  const { wrapCurrency } = useUtilsStore()

  const { token, addNotification } = useCounterStore()

  var [historyData, sethistoryData] = useState(null);
  var [summary, setsummary] = useState({ units_in: 0, units_out: 0 });
  var [queryPrams, setqueryPrams] = useState({ product: {}, reference_type: "", direction: "", from_date: "", to_date: "", paged: 1, order: "DESC", per_page: 20 });

  var [loading, setloading] = useState(false);
  var [failed, setfailed] = useState(false);
  var [ready, setready] = useState(false);

  /* PopoverButton cannot be closed from outside; remounting it after a pick closes it. */
  var [pickerKey, setpickerKey] = useState(0);


  /* No `check` column: this is an audit log, and there is nothing to delete rows with. */
  var columns = {
    product_id: { label: ("Product"), callback: callbackProduct, classes: "w-96 text-left text-gray-600" },
    event_type: { label: ("Event"), callback: callbackEvent, classes: "text-left text-gray-600" },
    quantity: { label: ("Change"), callback: callbackChange, classes: "text-center text-gray-600" },
    stock_after: { label: ("Stock"), callback: callbackStock, classes: "text-center text-gray-600" },
    unit_cost: { label: ("Unit cost"), callback: callbackUnitCost, classes: "text-center text-gray-600" },
    note: { label: ("Note"), callback: callbackNote, classes: "text-left text-gray-600" },
    created_at: { label: ("Date"), callback: callbackDatetime, classes: "text-right pr-2 text-gray-600" },
  };


  /* The Stocks screen links here with ?product_id=&product_name= for one product's history. */
  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product_id");

    if (productId) {
      setqueryPrams(prev => ({ ...prev, product: { product_id: productId, variation_id: "", title: params.get("product_name") || `#${productId}` }, paged: 1 }));
    }

    setready(true);
  }, []);


  function serverQuery(query) {
    var { product, ...filters } = query;
    return { ...filters, product_id: product?.product_id ?? "", variation_id: product?.variation_id ?? "" };
  }


  const requestRef = useRef(0);

  function get_stocks_histories() {

    if (queryPrams.paged < 0) {
      return;
    }

    var requestId = ++requestRef.current;
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_stocks_histories", {
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

        sethistoryData({ posts: Array.isArray(res?.posts) ? res.posts : [], total: parseInt(res?.total) || 0, maxPages: parseInt(res?.max_pages) || 0 })
        setsummary({ units_in: Number(res?.units_in) || 0, units_out: Number(res?.units_out) || 0 });
        setfailed(false);
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;

        setloading(false);
        setfailed(true);
        addNotification({ type: 'error', title: 'Stock history not loaded', content: error?.message ?? "The list could not be loaded. Please try again." })
      });
  }


  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. Wait
       for the URL to be read too, so a product link does not load everything first. */
    if (!token || !ready) {
      return;
    }

    get_stocks_histories();
  }, [queryPrams, token, ready]);


  function onChangeQueryPrams(next) {
    if (next) {
      setqueryPrams(next)
    }
  }

  function onRefreshRequest() {
    get_stocks_histories();
  }


  /* The rows on this page as a CSV - for a recount sheet or the accountant. */
  function downloadCsv() {

    var rows = historyData?.posts ?? [];
    if (!rows.length) return;

    var cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    var head = ["Date", "Product ID", "Product", "Variation", "Event", "Change", "Stock before", "Stock after", "Unit cost", "Reference", "By", "Note"];

    var lines = rows.map(e => {
      var change = Number(e.stock_after) - Number(e.stock_before);
      var ref = referenceLink(e);
      return [e.created_at, e.product_id, e.product_title, e.variation_title, EVENT_LABELS[e.event_type] ?? humanize(e.event_type), isNaN(change) ? "" : change, formatQuantity(e.stock_before), formatQuantity(e.stock_after), hasValue(e.unit_cost) ? Number(e.unit_cost) : "", ref?.label ?? "", e.created_by_name, e.note].map(cell).join(",");
    });

    var blob = new Blob(["﻿" + [head.map(cell).join(","), ...lines].join("\r\n")], { type: "text/csv;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = `stock-history-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }


  /* ---------------- cells ---------------- */

  function callbackProduct(entry, columnIndex) {

    return (
      <td data-label="Product" className="!px-5 py-3 text-left"
        key={columnIndex}>

        <div className="flex min-w-0 flex-1 items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-300">
            {entry?.product_thumbnail && (
              <Image unoptimized className="h-10 w-10 object-cover" src={entry.product_thumbnail} width={100} height={100} alt={``} />
            )}
            {!entry?.product_thumbnail && (
              <IconPhoto size={18} stroke={1.5} />
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
            <Link className="text-left text-sm font-medium text-gray-900 transition-colors hover:text-[#634FE5] hover:underline" href={`/dashboard/products/${entry?.product_id}`}>
              {entry?.product_title
                ? <span dangerouslySetInnerHTML={{ __html: entry.product_title }} />
                : `${("Deleted product")} #${entry?.product_id}`}
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="font-mono text-[11px] text-gray-400">#{entry?.product_id}</span>
              {Number(entry?.variation_id) > 0 && (
                <span>{entry?.variation_title || `${("Variation")} #${entry.variation_id}`}</span>
              )}
              {/* Narrow the log to this product without leaving the page. */}
              {String(queryPrams?.product?.product_id ?? "") !== String(entry?.product_id) && (
                <button type="button" className="!h-auto !border-0 !bg-transparent !p-0 text-xs !text-[#634FE5] !shadow-none hover:underline"
                  onClick={() => setqueryPrams({ ...queryPrams, product: { product_id: entry.product_id, variation_id: "", title: entry?.product_title || `#${entry.product_id}` }, paged: 1 })}>
                  {("Only this product")}
                </button>
              )}
            </div>
          </div>
        </div>
      </td>

    );
  }


  function callbackEvent(entry, columnIndex) {

    var change = Number(entry?.stock_after) - Number(entry?.stock_before);
    var Icon = change > 0 ? IconArrowUpRight : change < 0 ? IconArrowDownRight : IconArrowsExchange;
    var tone = change > 0 ? "bg-emerald-50 text-emerald-600" : change < 0 ? "bg-rose-50 text-rose-600" : "bg-gray-100 text-gray-500";
    var ref = referenceLink(entry);

    return (
      <td data-label="Event" className="!px-5 py-3 text-left"
        key={columnIndex}>

        <div className="flex min-w-0 flex-1 items-center gap-3" title={entry?.event_id ?? undefined}>

          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tone}`}>
            <Icon size={18} stroke={1.75} />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
            <div className="text-sm font-medium text-gray-900">{EVENT_LABELS[entry?.event_type] ?? (humanize(entry?.event_type) || ("Unknown event"))}</div>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-gray-500">
              {ref && (
                <Link href={ref.href} className="font-medium text-[#634FE5] hover:underline">{ref.label}</Link>
              )}
              {entry?.created_by_name && (
                <span>{("by")} {entry.created_by_name}</span>
              )}
            </div>
          </div>
        </div>
      </td>

    );
  }


  function callbackChange(entry, columnIndex) {

    var known = hasValue(entry?.stock_after) && hasValue(entry?.stock_before);
    var change = Number(entry?.stock_after) - Number(entry?.stock_before);

    /* The stored quantity is always positive, so the direction comes from the two stock levels. */
    return (
      <td data-label="Change" className="!px-5 py-3 text-center"
        key={columnIndex}>

        {!known && EMPTY}

        {known && (
          <span className={`text-sm font-semibold tabular-nums ${change > 0 ? "text-emerald-700" : change < 0 ? "text-rose-700" : "text-gray-500"}`}>
            {change > 0 ? "+" : change < 0 ? "−" : ""}{formatQuantity(Math.abs(change))}
          </span>
        )}
      </td>

    );
  }


  function callbackStock(entry, columnIndex) {

    var known = hasValue(entry?.stock_before) && hasValue(entry?.stock_after);

    return (
      <td data-label="Stock" className="!px-5 py-3 text-center"
        key={columnIndex}>

        {!known && EMPTY}

        {known && (
          <span className="whitespace-nowrap text-sm tabular-nums">
            <span className="text-gray-400">{formatQuantity(entry.stock_before)}</span>
            <span className="px-1 text-gray-300">→</span>
            <span className="font-semibold text-gray-900">{formatQuantity(entry.stock_after)}</span>
          </span>
        )}
      </td>

    );
  }


  function callbackUnitCost(entry, columnIndex) {

    /* 0 means no cost was recorded (sales and hand adjustments), not "free". */
    return (
      <td data-label="Unit cost" className="!px-5 py-3 text-center"
        key={columnIndex}>
        {hasValue(entry?.unit_cost) && Number(entry.unit_cost) > 0 ? <span className="text-sm tabular-nums text-gray-600">{wrapCurrency(Number(entry.unit_cost))}</span> : EMPTY}
      </td>

    );
  }


  function callbackNote(entry, columnIndex) {

    return (
      <td data-label="Note" className="!px-5 py-3 text-left"
        key={columnIndex}>
        {entry?.note ? <span className="line-clamp-2 max-w-xs text-sm text-gray-600" title={entry.note}>{entry.note}</span> : EMPTY}
      </td>

    );
  }


  function callbackDatetime(entry, columnIndex) {

    /* A row with a bad date should show a dash, not take the whole table down. */
    var date = parseDate(entry?.created_at);

    return (
      <td data-label="Date" className="!px-5 py-3 text-right"
        key={columnIndex}>

        {!date && EMPTY}

        {date && (
          <div className="flex flex-col items-end">
            <span className="whitespace-nowrap text-sm tabular-nums text-gray-700">{date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
            <span className="whitespace-nowrap text-xs tabular-nums text-gray-500">{date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</span>
          </div>
        )}
      </td>

    );
  }


  /* The picker hands back either a product, or a variation with the parent's title added. */
  function onPickProduct(item) {

    var isVariation = Boolean(item?.product_title);

    setqueryPrams({
      ...queryPrams,
      product: {
        product_id: isVariation ? item?.product_id : item?.id,
        variation_id: isVariation ? item?.id : "",
        title: isVariation ? `${item.product_title} - ${item?.title}` : item?.title,
      },
      paged: 1,
    })
    setpickerKey(k => k + 1);
  }


  var total = historyData?.total ?? 0;
  var net = summary.units_in - summary.units_out;
  var hasFilters = Boolean(queryPrams?.product?.product_id || queryPrams.reference_type || queryPrams.direction || queryPrams.from_date || queryPrams.to_date);
  var showEmpty = historyData && total === 0 && !loading;

  function clearFilters() {
    setqueryPrams({ ...queryPrams, product: {}, reference_type: "", direction: "", from_date: "", to_date: "", paged: 1 });
  }

  /* "1 Nov 2026" rather than 2026-11-01. */
  var showDay = (value) => {
    var date = parseDate(value);
    return date ? date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "…";
  };


  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Stocks History")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {total} {total === 1 ? ("stock movement") : ("stock movements")}
            {hasFilters ? ` ${("matching the filters")}` : ""} · {("Every sale, return, purchase and hand adjustment, newest first.")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link href="/dashboard/stocks" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("Stocks")}</Link>
          <button type="button" className={TOOLBAR_BUTTON} disabled={!historyData?.posts?.length} onClick={downloadCsv} title={("Download the rows on this page as a spreadsheet")}>
            <IconDownload size={16} /> {("CSV")}
          </button>
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={get_stocks_histories}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>
        </div>
      </div>


      {/* Totals across every matching movement, not just this page. */}
      {historyData && total > 0 && (
        <div className="grid grid-cols-3 gap-3 sm:max-w-xl">
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
            <div className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{("Units in")}</div>
            <div className="text-lg font-semibold tabular-nums text-emerald-700">+{formatQuantity(summary.units_in)}</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
            <div className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{("Units out")}</div>
            <div className="text-lg font-semibold tabular-nums text-rose-700">−{formatQuantity(summary.units_out)}</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
            <div className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{("Net")}</div>
            <div className={`text-lg font-semibold tabular-nums ${net > 0 ? "text-emerald-700" : net < 0 ? "text-rose-700" : "text-gray-900"}`}>{net > 0 ? "+" : net < 0 ? "−" : ""}{formatQuantity(Math.abs(net))}</div>
          </div>
        </div>
      )}


      <div className="flex flex-wrap items-center gap-2">

        <PopoverButton key={`picker-${pickerKey}`} wrapperClass={``} enableCloseBtn={false} closeOnOutsideClick={true} buttonLabel={("Product")} buttonIcon={<IconPackage size={16} />} title={"Filter by product"} position={"bottomLeft"} buttonClass={TOOLBAR_BUTTON} popoverClass={`absolute z-[999] mt-1 w-[360px] rounded-xl border border-gray-200 bg-white shadow-lg`}>
          <div className="p-4">
            <ProductsPicker placeholder="Search product..." onPick={onPickProduct} />
          </div>
        </PopoverButton>

        <select aria-label="Source" className={FILTER_SELECT} value={queryPrams.reference_type} onChange={ev => setqueryPrams({ ...queryPrams, reference_type: ev.target.value, paged: 1 })}>
          {SOURCE_OPTIONS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>

        <select aria-label="Direction" className={FILTER_SELECT} value={queryPrams.direction} onChange={ev => setqueryPrams({ ...queryPrams, direction: ev.target.value, paged: 1 })}>
          {DIRECTION_OPTIONS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>

        <input
          type="date"
          aria-label="From date"
          title="From date"
          className={FILTER_INPUT}
          value={queryPrams?.from_date ?? ""}
          max={queryPrams?.to_date || undefined}
          onChange={ev => {
            setqueryPrams({ ...queryPrams, from_date: ev.target.value, paged: 1 });
          }}
        />

        <span className="text-xs text-gray-400">{("to")}</span>

        <input
          type="date"
          aria-label="To date"
          title="To date"
          className={FILTER_INPUT}
          value={queryPrams?.to_date ?? ""}
          min={queryPrams?.from_date || undefined}
          onChange={ev => {
            setqueryPrams({ ...queryPrams, to_date: ev.target.value, paged: 1 });
          }}
        />

        {hasFilters && (
          <button type="button" className="!h-9 rounded-lg !border-0 !bg-transparent px-2 text-sm !text-gray-500 !shadow-none hover:!bg-gray-100 hover:!text-gray-800" onClick={clearFilters}>
            {("Clear filters")}
          </button>
        )}
      </div>

      {(queryPrams?.product?.title || queryPrams?.from_date || queryPrams?.to_date) && (
        <div className="flex flex-wrap items-center gap-2">
          {queryPrams?.product?.title && (
            <div className={FILTER_CHIP}>
              <div className="whitespace-nowrap">{('Product')}: <span dangerouslySetInnerHTML={{ __html: queryPrams.product.title }} /></div>
              <div className={FILTER_CHIP_CLOSE} onClick={() => setqueryPrams({ ...queryPrams, product: {}, paged: 1 })}><IconX /></div>
            </div>
          )}

          {(queryPrams?.from_date || queryPrams?.to_date) && (
            <div className={FILTER_CHIP}>
              <div className="whitespace-nowrap">{('Dates')}: {queryPrams.from_date ? showDay(queryPrams.from_date) : ("start")} – {queryPrams.to_date ? showDay(queryPrams.to_date) : ("today")}</div>
              <div className={FILTER_CHIP_CLOSE} onClick={() => setqueryPrams({ ...queryPrams, from_date: "", to_date: "", paged: 1 })}><IconX /></div>
            </div>
          )}
        </div>
      )}


      {failed && !historyData && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-500">
          {("The stock history could not be loaded.")}
          <button type="button" className={TOOLBAR_BUTTON} onClick={get_stocks_histories}><IconRefresh size={16} /> {("Try again")}</button>
        </div>
      )}

      {showEmpty && (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white px-5 py-10 text-center">
          <div className="text-sm font-medium text-gray-700">{hasFilters ? ("No stock movements match these filters.") : ("No stock movements yet.")}</div>
          <p className="mt-1 text-xs text-gray-500">
            {hasFilters ? ("Try a wider date range, or clear the filters.") : ("They appear here when an order is completed or refunded, a purchase is received, or stock is adjusted on the Stocks screen.")}
          </p>
          {hasFilters && (
            <button type="button" className={`${TOOLBAR_BUTTON} mt-3`} onClick={clearFilters}>{("Clear filters")}</button>
          )}
        </div>
      )}

      {!showEmpty && (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={historyData}
          itemPath={""}
          onChange={onChangeQueryPrams}
          loading={loading}
          selectedRows={[]}
          onSelectRows={() => { }}
          onRefreshRequest={onRefreshRequest}

        />
      )}

    </div>
  );
};

export default StocksHistory;
