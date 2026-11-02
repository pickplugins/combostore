"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconEyeShare, IconPhoto, IconX } from "@tabler/icons-react";

import Image from "next/image";


const ICON_BUTTON =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const FILTER_INPUT =
  "!w-40 !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !px-3 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FILTER_CHIP = "flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700";

const FILTER_CHIP_CLOSE = "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5";

const META_PILL = "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide";


const TopSellingProducts = (props) => {

  const { token, addNotification } = useCounterStore()
  const { wrapCurrency } = useUtilsStore()

  var [queryPrams, setqueryPrams] = useState({ keyword: "", start_date: "", end_date: "", paged: 1, order: "DESC", per_page: 20 });

  var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });

  var [loading, setloading] = useState(false);


  /* No `check` column: a ranking has nothing to act on in bulk. */
  var columns = {
    id: { id: "id", label: ("Product"), callback: callbackProduct, classes: "w-96 text-left text-gray-600" },
    total_orders: { id: "total_orders", label: ("Orders"), callback: callbackOrders, classes: "text-center text-gray-600" },
    total_units_sold: { id: "total_units_sold", label: ("Units sold"), callback: callbackUnits, classes: "text-center text-gray-600" },
    total_revenue: { id: "total_revenue", label: ("Revenue"), callback: callbackRevenue, classes: "text-center text-gray-600" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };


  async function fetchPosts() {

    if (queryPrams.paged < 0) {
      return;
    }

    var request = queryPrams;

    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_top_selling_products", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(request),
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {

            /* The API returns products in rank order, so a row's rank comes from its page. */
            var first = (request.paged - 1) * Number(request.per_page);
            var ascending = request.order === "ASC";
            var total = parseInt(res?.total) || 0;

            var products = (res?.products ?? []).map((product, index) => {
              var rank = ascending ? total - first - index : first + index + 1;

              return { ...product, id: rank, rank: rank };
            });

            setproductsData({ posts: products, total: total, maxPages: parseInt(res?.max_pages) || 0 })
            setloading(false);
          });
        }
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Top products not loaded', content: "The list could not be loaded. Please try again." })
      });

  }


  const [debouncedQuery, setDebouncedQuery] = useState(queryPrams);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(queryPrams);
    }, 1000);

    return () => clearTimeout(handler);
  }, [queryPrams]);


  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. */
    if (!token) {
      return;
    }

    fetchPosts();

  }, [debouncedQuery, token]);


  function onChangeQueryPrams(queryPrams) {
    if (queryPrams) {
      setqueryPrams(queryPrams)
    }
  }

  function onRefreshRequest(rows) {
    fetchPosts();
  }


  function callbackProduct(entry, columnIndex) {

    var productId = parseInt(entry?.product_id);
    var isCustom = !(productId > 0);
    var exists = !isCustom && Boolean(entry?.product_exists);
    var name = entry?.product_name || ("Unknown product");

    return (
      <td data-label="Product" className="!px-5 py-3 text-left"
        key={columnIndex}>

        <div className="flex min-w-0 flex-1 items-center gap-3">

          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold tabular-nums ${entry?.rank <= 3 ? "bg-amber-50 text-amber-700" : "bg-gray-100 text-gray-500"}`}>
            {entry?.rank}
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-300">
            {entry?.product_image && (
              <Image unoptimized className="h-12 w-12 object-cover" src={entry.product_image} width={100} height={100} alt={``} />
            )}
            {!entry?.product_image && (
              <IconPhoto size={20} stroke={1.5} />
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
            {exists && (
              <Link className="text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/products/${productId}`}>
                {name}
              </Link>
            )}
            {!exists && (
              <div className="text-left text-sm font-medium text-gray-900">{name}</div>
            )}

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              {!isCustom && (
                <span className="font-mono text-[11px] text-gray-400">#{productId}</span>
              )}
              {entry?.sku && (
                <span>{entry.sku}</span>
              )}
              {isCustom && (
                <span className={`${META_PILL} bg-gray-100 text-gray-600`}>Custom</span>
              )}
              {!isCustom && !exists && (
                <span className={`${META_PILL} bg-rose-100 text-rose-700`}>Deleted</span>
              )}
            </div>
          </div>
        </div>
      </td>

    );
  }


  function callbackOrders(entry, columnIndex) {

    return (
      <td data-label="Orders" className="!px-5 py-3 text-center"
        key={columnIndex}>
        <span className="text-sm tabular-nums text-gray-700">{entry?.total_orders}</span>
      </td>

    );
  }


  function callbackUnits(entry, columnIndex) {

    return (
      <td data-label="Units sold" className="!px-5 py-3 text-center"
        key={columnIndex}>
        <span className="text-sm font-semibold tabular-nums text-gray-900">{Number(entry?.total_units_sold)}</span>
      </td>

    );
  }


  function callbackRevenue(entry, columnIndex) {

    return (
      <td data-label="Revenue" className="!px-5 py-3 text-center"
        key={columnIndex}>
        <span className="text-sm tabular-nums text-gray-600">{wrapCurrency(Number(entry?.total_revenue).toFixed(2))}</span>
      </td>

    );
  }


  function callbackActions(entry, columnIndex) {

    var productId = parseInt(entry?.product_id);

    return (
      <td data-label="Actions" className="!px-5 py-3 text-sm"
        key={columnIndex}>
        <div className="flex items-center justify-end gap-1 text-sm">
          {productId > 0 && entry?.product_exists && (
            <Link title="View product" aria-label="View product" className={ICON_BUTTON} href={`/dashboard/products/${productId}`}>
              <IconEyeShare size={18} />
            </Link>
          )}
        </div>
      </td>

    );
  }


  return (
    <div className="page-shell">

      {/* Page heading: this screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Top Selling Products")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {productsData?.total ?? 0} {("products, ranked by units sold on paid completed orders")}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">

        <input
          type="date"
          aria-label="From date"
          title="From date"
          className={FILTER_INPUT}
          value={queryPrams?.start_date ?? ""}
          max={queryPrams?.end_date || undefined}
          onChange={ev => {
            setqueryPrams({ ...queryPrams, start_date: ev.target.value, paged: 1 });
          }}
        />

        <input
          type="date"
          aria-label="To date"
          title="To date"
          className={FILTER_INPUT}
          value={queryPrams?.end_date ?? ""}
          min={queryPrams?.start_date || undefined}
          onChange={ev => {
            setqueryPrams({ ...queryPrams, end_date: ev.target.value, paged: 1 });
          }}
        />

        {(queryPrams?.start_date || queryPrams?.end_date) && (
          <div className={FILTER_CHIP}>
            <div className="whitespace-nowrap">{('Dates')}: {queryPrams.start_date || "…"} – {queryPrams.end_date || "…"}</div>
            <div className={FILTER_CHIP_CLOSE} onClick={ev => {
              setqueryPrams({ ...queryPrams, start_date: "", end_date: "", paged: 1 })
            }}><IconX /></div>
          </div>
        )}

      </div>


      <EntriesTable
        queryPrams={queryPrams}
        columns={columns}
        entries={productsData}
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

export default TopSellingProducts;
