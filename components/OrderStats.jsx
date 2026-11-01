"use client";
import { useState, useEffect, useRef } from "react";
import NumberFlow from '@number-flow/react'

import { IconAlertTriangle } from "@tabler/icons-react";
import ChartComponent from '../components/ChartComponent';
import { useCounterStore } from '../store/useCounterStore'


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Sent with every request; the filters only decide what is in `query`. */
const REQUEST_DEFAULTS = { keyword: "", page: 1, order: "DESC", per_page: 10 };

/*
  One colour per metric, in this order, whatever is filtered or hidden. The order
  and hexes are a palette checked for colourblind and normal-vision separation
  between neighbours; the previous one failed, with gross and net profit almost
  the same green. Changing a colour or reordering means checking it again.
*/
const SERIES = [
  { id: "total_amount", label: "Total amount", color: "#2a78d6", source: "orders", field: "total_amount" },
  { id: "discount_amount", label: "Discount", color: "#eb6834", source: "orders", field: "discount_amount" },
  { id: "gross_profit", label: "Gross profit", color: "#1baf7a", source: "orders", field: "gross_profit" },
  { id: "shipping_amount", label: "Shipping", color: "#eda100", source: "orders", field: "shipping_amount" },
  { id: "subtotal_amount", label: "Subtotal", color: "#e87ba4", source: "orders", field: "subtotal_amount" },
  { id: "net_profit", label: "Net profit", color: "#008300", source: "orders", field: "net_profit" },
  { id: "purchases", label: "Purchases", color: "#6250d6", source: "purchases", field: "total_amount" },
  { id: "expenses", label: "Expenses", color: "#e34948", source: "expenses", field: "total_amount" },
];

/* Eight lines at once is unreadable, so the chart opens on the three that tell
   the story. The rest are one click away in its legend. */
const INITIAL_LINES = ["total_amount", "net_profit", "expenses"];

/* Tiles read as an income statement; the chart keeps the palette's order. */
const TILE_ORDER = [
  "total_amount",
  "subtotal_amount",
  "gross_profit",
  "net_profit",
  "discount_amount",
  "shipping_amount",
  "expenses",
  "purchases",
];

const MONEY_FORMAT = { minimumFractionDigits: 2, maximumFractionDigits: 2 };

const CARD_CLASSES = "rounded-xl border border-gray-200 bg-white shadow-sm";

const TEXT_BUTTON_CLASSES =
  "inline-flex h-9 items-center gap-1.5 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 hover:!text-gray-900";


const StatTile = ({ label, color, value, moneyPrefix, moneySuffix, blurred }) => (
  <div className={`${CARD_CLASSES} min-w-0 p-3.5`}>
    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
      <span className="truncate">{label}</span>
    </div>

    <div className={`mt-1.5 truncate text-lg font-semibold tabular-nums text-gray-900 ${blurred ? "blur-[5px]" : ""}`}>
      {value === undefined
        ? <span className="text-gray-300">—</span>
        : <NumberFlow format={MONEY_FORMAT} prefix={moneyPrefix} suffix={moneySuffix} value={value} />}
    </div>
  </div>
);


/**
 * Sales totals and their trend for whatever the Dashboard asks for.
 *
 * Props:
 *   query       What to show: the date range and the `OrderStatsFilters` fields.
 *   refreshKey  Change it to load the same query again.
 */
const OrderStats = ({ query, refreshKey }) => {

  const { token, privacyMode, currencySymbole, currencyPosition } = useCounterStore()

  var [loading, setloading] = useState(false);
  var [failed, setfailed] = useState(false);
  var [chartData, setchartData] = useState({ labels: [], datasets: [] });
  var [totals, settotals] = useState({});

  /* Filters can change faster than the server answers. Only the newest request
     may touch the screen, or a slow old one could overwrite the current view. */
  const latestRequest = useRef(0);

  var waitingForDates = query.range == 'custom' && !(query.first_date && query.last_date);

  /* The screen builds a new `query` object on every render, so the request
     follows what is in it rather than which object it is. */
  var requestBody = JSON.stringify({ ...REQUEST_DEFAULTS, ...query });

  useEffect(() => {
    if (!waitingForDates) {
      get_stats_all()
    }
  }, [requestBody, refreshKey]);


  function get_stats_all() {

    const request = ++latestRequest.current;
    const isCurrent = () => request === latestRequest.current;

    setloading(true);
    setfailed(false);

    fetch(serverUrl + "wp-json/combo-store/v2/get_stats_all", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: requestBody,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        return response.json();
      })
      .then((res) => {

        if (!isCurrent()) {
          return;
        }

        const rows = { orders: res?.orders || [], expenses: res?.expenses || [], purchases: res?.purchases || [] };
        const labels = rows.orders.map(row => row.order_date);

        /* A single day has no line to draw, so its points have to show. */
        const pointRadius = labels.length < 2 ? 4 : 0;

        const datasets = SERIES.map((series) => ({
          id: series.id,
          label: series.label,
          borderColor: series.color,
          backgroundColor: series.color,
          borderWidth: 2,
          borderCapStyle: "round",
          borderJoinStyle: "round",
          tension: .3,
          pointRadius: pointRadius,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 2,
          pointHoverBorderColor: "#ffffff",
          hidden: !INITIAL_LINES.includes(series.id),
          data: rows[series.source].map(row => row[series.field]),
        }));

        setchartData({ labels: labels, datasets: datasets });

        settotals(datasets.reduce((result, dataset) => {
          result[dataset.id] = dataset.data.reduce((sum, value) => sum + (Number(value) || 0), 0);

          return result;
        }, {}));
      })
      .catch(() => {
        if (isCurrent()) {
          setfailed(true);
        }
      })
      .finally(() => {
        if (isCurrent()) {
          setloading(false);
        }
      });
  }


  var hasLoaded = totals.total_amount !== undefined;

  var moneyPrefix = currencyPosition == 'before' ? currencySymbole : undefined;
  var moneySuffix = currencyPosition == 'after' ? ` ${currencySymbole}` : undefined;


  if (!token) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">

      {waitingForDates && (
        <div className="text-xs text-gray-500">{("Choose both dates to see stats.")}</div>
      )}


      {failed && (
        <div role="alert" className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          <span className="flex items-center gap-2">
            <IconAlertTriangle size={16} />
            {hasLoaded
              ? ("Stats could not be refreshed. The figures below may be out of date.")
              : ("Stats could not be loaded.")}
          </span>

          <button type="button" className={TEXT_BUTTON_CLASSES} onClick={() => get_stats_all()}>
            {("Try again")}
          </button>
        </div>
      )}


      {/* A reload dims the last figures instead of blanking them, so the page
          keeps its shape while the numbers change. */}
      <div className={`flex flex-col gap-4 transition-opacity ${loading ? "opacity-60" : ""}`} aria-busy={loading}>

        {/* <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {TILE_ORDER.map((id) => {

            var series = SERIES.find(item => item.id == id);

            return (
              <StatTile
                key={id}
                label={series.label}
                color={series.color}
                value={totals[id]}
                moneyPrefix={moneyPrefix}
                moneySuffix={moneySuffix}
                blurred={privacyMode}
              />
            )
          })}
        </div> */}

        {/* With nothing loaded the chart would say nothing was recorded, which
            neither a failed request nor a half-chosen range shows. */}
        {(hasLoaded || !(failed || waitingForDates)) && (
          <div className={`${CARD_CLASSES} p-3`}>
            <ChartComponent chartData={chartData} />

            <div className="mt-2 text-xs text-gray-500">{("Click a name in the legend to show or hide its line.")}</div>
          </div>
        )}
      </div>

    </div>
  );
};

export default OrderStats;
