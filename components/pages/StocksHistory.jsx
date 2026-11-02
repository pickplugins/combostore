"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect } from "react";
import { IconArrowDownRight, IconArrowUpRight, IconArrowsExchange, IconFileDollar, IconPhoto, IconX } from "@tabler/icons-react";

import Image from "next/image";

import PopoverButton from '../../components/PopoverButton';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


const FILTER_INPUT =
  "!w-40 !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !px-3 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FILTER_CHIP = "flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700";

const FILTER_CHIP_CLOSE = "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5";

const EMPTY = <span className="text-sm text-gray-300">—</span>;


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


const StocksHistory = (props) => {

  const { wrapCurrency } = useUtilsStore()

  const { token, addNotification } = useCounterStore()

  var [historyData, sethistoryData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", product: {}, from_date: "", to_date: "", paged: 1, order: "DESC", per_page: 10 });

  var [loading, setloading] = useState(false);


  /* No `check` column: this is an audit log, and there is nothing to delete rows with. */
  var columns = {
    product_id: { label: ("Product"), callback: callbackProduct, classes: "w-96 text-left text-gray-600" },
    event_type: { label: ("Event"), callback: callbackEvent, classes: "text-left text-gray-600" },
    quantity: { label: ("Change"), callback: callbackChange, classes: "text-center text-gray-600" },
    stock_after: { label: ("Stock"), callback: callbackStock, classes: "text-center text-gray-600" },
    unit_cost: { label: ("Unit cost"), callback: callbackUnitCost, classes: "text-center text-gray-600" },
    note: { label: ("Note"), callback: callbackNote, classes: "text-left text-gray-600" },
    created_at: { label: ("Datetime"), callback: callbackDatetime, classes: "text-right pr-2 text-gray-600" },
  };


  function get_stocks_histories() {

    if (queryPrams.paged < 0) {
      return;
    }

    var { product, ...filters } = queryPrams;

    var postData = JSON.stringify({
      ...filters,
      product_id: product?.product_id ?? "",
      variation_id: product?.variation_id ?? "",
    });

    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_stocks_histories", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {

            sethistoryData({ posts: res?.posts ?? [], total: parseInt(res?.total) || 0, maxPages: parseInt(res?.max_pages) || 0 })
            setloading(false);
          });
        }
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Stock history not loaded', content: "The list could not be loaded. Please try again." })
      });

  }


  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. */
    if (!token) {
      return;
    }

    get_stocks_histories();
  }, [queryPrams, token]);


  function onChangeQueryPrams(queryPrams) {
    if (queryPrams) {
      setqueryPrams(queryPrams)
    }
  }

  function onRefreshRequest(rows) {
    get_stocks_histories();
  }


  function callbackProduct(entry, columnIndex) {

    return (
      <td data-label="Product" className="!px-5 py-3 text-left"
        key={columnIndex}>

        <div className="flex min-w-0 flex-1 items-center gap-3">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-300">
            {entry?.product_thumbnail && (
              <Image unoptimized className="h-12 w-12 object-cover" src={entry.product_thumbnail} width={100} height={100} alt={``} />
            )}
            {!entry?.product_thumbnail && (
              <IconPhoto size={20} stroke={1.5} />
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
            <Link className="text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/products/${entry?.product_id}`}>
              {entry?.product_title || `${("Product")} #${entry?.product_id}`}
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="font-mono text-[11px] text-gray-400">#{entry?.product_id}</span>
              {entry?.variation_id && (
                <span>{entry?.variation_title || `${("Variation")} #${entry.variation_id}`}</span>
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

    return (
      <td data-label="Event" className="!px-5 py-3 text-left"
        key={columnIndex}>

        <div className="flex min-w-0 flex-1 items-center gap-3" title={entry?.event_id ?? undefined}>

          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tone}`}>
            <Icon size={18} stroke={1.75} />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
            <div className="text-sm font-medium text-gray-900">{humanize(entry?.event_type) || ("Unknown event")}</div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
              {entry?.created_by_name && (
                <span>{entry.created_by_name}</span>
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

    return (
      <td data-label="Unit cost" className="!px-5 py-3 text-center"
        key={columnIndex}>
        {hasValue(entry?.unit_cost) ? <span className="text-sm tabular-nums text-gray-600">{wrapCurrency(Number(entry.unit_cost))}</span> : EMPTY}
      </td>

    );
  }


  function callbackNote(entry, columnIndex) {

    return (
      <td data-label="Note" className="!px-5 py-3 text-left"
        key={columnIndex}>
        {entry?.note ? <span className="text-sm text-gray-600">{entry.note}</span> : EMPTY}
      </td>

    );
  }


  function callbackDatetime(entry, columnIndex) {

    /* A row with a bad date should show a dash, not take the whole table down. */
    var date = new Date(String(entry?.created_at ?? "").replace(" ", "T"));
    var valid = !isNaN(date);

    return (
      <td data-label="Datetime" className="!px-5 py-3 text-right"
        key={columnIndex}>

        {!valid && EMPTY}

        {valid && (
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
  }


  return (
    <div className="page-shell">

      {/* Page heading: this screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Stocks History")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {historyData?.total ?? 0} {("stock movements")}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">

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

        <PopoverButton wrapperClass={``} enableCloseBtn={false} closeOnOutsideClick={true} buttonLabel={("Filter by Product")} buttonIcon={<IconFileDollar size={16} />} title={"Filter by Product"} position={"leftTop"} buttonClass={`inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer`} popoverClass={`absolute z-[999] w-[360px] rounded-xl border border-gray-200 bg-white shadow-lg`}>

          <div className="p-4">
            <ProductsPicker placeholder="Search product..." onPick={onPickProduct} />
          </div>

        </PopoverButton>

        {queryPrams?.product?.title?.length > 0 && (
          <div className={FILTER_CHIP}>
            <div className="whitespace-nowrap">{('Product')}: {queryPrams.product.title}</div>
            <div className={FILTER_CHIP_CLOSE} onClick={ev => {
              setqueryPrams({ ...queryPrams, product: {}, paged: 1 })
            }}><IconX /></div>
          </div>
        )}

        {(queryPrams?.from_date || queryPrams?.to_date) && (
          <div className={FILTER_CHIP}>
            <div className="whitespace-nowrap">{('Dates')}: {queryPrams.from_date || "…"} – {queryPrams.to_date || "…"}</div>
            <div className={FILTER_CHIP_CLOSE} onClick={ev => {
              setqueryPrams({ ...queryPrams, from_date: "", to_date: "", paged: 1 })
            }}><IconX /></div>
          </div>
        )}

      </div>


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

    </div>
  );
};

export default StocksHistory;
