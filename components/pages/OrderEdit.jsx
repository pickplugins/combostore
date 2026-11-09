'use client'
import React from 'react'
import { useState, useEffect } from "react";
import Link from "next/link";

import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';
import { IconClipboardText, IconRouteSquare, IconTruckDelivery, IconRepeat, IconFileInvoice, IconReceipt, IconShoppingBag, IconRefresh, IconAlertTriangle, IconArrowLeft, IconArrowUpRight, IconCalendarTime, IconUser, IconCash, IconCreditCard } from "@tabler/icons-react";
import { BADGE_BASE, titleCase, parseDate, timeAgo, hasId } from "./deliveryUi";

import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import ReceiptLabel from '../../components/ReceiptLabel';
import OrderInvoice from '../../components/OrderInvoice';
import OrderTrackings from '../../components/OrderTrackings';
import OrderNotes from '../../components/OrderNotes';
import OrderSubscription from '../../components/OrderSubscription';
import OrderUpdate from '../../components/OrderUpdate';
import OrderDelivery from '../../components/OrderDelivery';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same toolbar button, card and summary look as DeliveryEdit. */
const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const LINK = "font-medium text-gray-800 hover:text-[#634FE5] hover:underline";
const CARD = "rounded-xl border border-gray-200 bg-white";

const ORDER_STATUS_TONES = {
  confirmed: "bg-blue-50 text-blue-700 ring-blue-200",
  processing: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
  hold: "bg-orange-50 text-orange-700 ring-orange-200",
  scheduled: "bg-violet-50 text-violet-700 ring-violet-200",
  incomplete: "bg-rose-50 text-rose-700 ring-rose-200",
  delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const PAYMENT_STATUS_TONES = {
  paid: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
  due: "bg-amber-50 text-amber-700 ring-amber-200",
  delayed: "bg-orange-50 text-orange-700 ring-orange-200",
  refunded: "bg-gray-100 text-gray-700 ring-gray-200",
  failed: "bg-rose-50 text-rose-700 ring-rose-200",
};

const NEUTRAL_TONE = "bg-gray-100 text-gray-600 ring-gray-200";

/* One labelled fact in the summary strip. */
function Fact({ icon, label, children }) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{icon}{label}</span>
      <div className="min-w-0 text-sm text-gray-800">{children}</div>
    </div>
  );
}

const Dash = () => <span className="text-gray-300">—</span>;

function Badge({ value, labels, tones }) {
  if (!value) return null;
  var label = labels?.[value]?.label ?? titleCase(value);
  return <span className={`${BADGE_BASE} ${tones[value] ?? NEUTRAL_TONE}`}>{label}</span>;
}


/*
  An order: a heading with its status, a summary (customer, total, payment,
  created), then the order's editors as tabs.

  It used to show only "Order #id" over the tabs, whatever the order's state,
  including for an order that does not exist. The summary is read once here;
  the tabs keep their own state, so Refresh re-reads it after a change in them.
*/
/* variant="drawer" (the Orders list's Edit drawer): no page padding, a link to
   the page instead of back to the list, and a tab rail that does not stick at
   the page header's offset inside the drawer. */
const OrderEdit = ({ id, variant = "page" }) => {

  var drawer = variant === "drawer";

  const { wrapCurrency } = useUtilsStore()

  const { token, orderStatusArgs, paymentStatusArgs, privacyMode } = useCounterStore()

  var [orderData, setorderData] = useState(null);
  /* loading | ready | missing | error */
  var [state, setstate] = useState("loading");
  var [errorMessage, seterrorMessage] = useState("");
  var [refreshing, setrefreshing] = useState(false);


  function get_order({ quiet = false } = {}) {

    if (!id) {
      setstate("missing");
      return;
    }

    if (quiet) setrefreshing(true);
    else setstate("loading");

    fetch(serverUrl + "wp-json/combo-store/v2/get_order", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        var order = res?.order;
        if (order && order.id != null) {
          setorderData(order);
          setstate("ready");
        } else {
          setorderData(null);
          setstate("missing");
        }
      })
      .catch((error) => {
        seterrorMessage(error?.message ?? "");
        /* A failed refresh keeps the order on screen. */
        if (!quiet) setstate("error");
      })
      .finally(() => setrefreshing(false));
  }

  useEffect(() => {
    get_order();
  }, [id]);


  var created = parseDate(orderData?.created_at);
  var blur = privacyMode ? "blur-[3px]" : "";


  return (
    <div className={drawer ? "flex w-full flex-col gap-4" : "mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6"}>

      {/* ---------- heading ---------- */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#634FE5]/10 text-[#634FE5]">
            <IconShoppingBag size={20} />
          </div>
          <div>
            <h1 className="flex flex-wrap items-center gap-2 text-xl font-semibold text-gray-900">
              {("Order")} <span className="font-normal text-gray-400">#{id}</span>
              {state === "ready" && <Badge value={orderData?.status} labels={orderStatusArgs} tones={ORDER_STATUS_TONES} />}
            </h1>
            {state === "ready" && created && (
              <p className="mt-0.5 text-xs text-gray-500" title={created.toLocaleString()}>
                {("Placed")} {created.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })} · {timeAgo(created)}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {drawer ? (
            <Link href={`/dashboard/orders/${id}`} className={TOOLBAR_BUTTON}>
              <IconArrowUpRight size={16} /> {("Open page")}
            </Link>
          ) : (
            <Link href="/dashboard/orders" className={TOOLBAR_BUTTON}>
              <IconArrowLeft size={16} /> {("All orders")}
            </Link>
          )}
          {state === "ready" && (
            <button type="button" className={TOOLBAR_BUTTON} disabled={refreshing} onClick={() => get_order({ quiet: true })}
              title={("Re-read the summary after saving in a tab")}>
              <IconRefresh size={16} className={refreshing ? "animate-spin" : ""} /> {("Refresh")}
            </button>
          )}
        </div>
      </div>


      {/* ---------- loading / missing / error ---------- */}
      {state === "loading" && (
        <div className={`${CARD} grid animate-pulse gap-5 p-5 sm:grid-cols-2 lg:grid-cols-4`} aria-busy="true" aria-label="Loading order">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <div className="h-2.5 w-20 rounded bg-gray-200" />
              <div className="h-4 w-32 rounded bg-gray-100" />
            </div>
          ))}
        </div>
      )}

      {state === "missing" && (
        <div className={`${CARD} flex flex-col items-center gap-2 px-6 py-12 text-center`}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconShoppingBag size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("Order not found")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("It may have been deleted, or the link is wrong.")}</p>
          <Link href="/dashboard/orders" className={`${TOOLBAR_BUTTON} mt-2`}>{("All orders")}</Link>
        </div>
      )}

      {state === "error" && (
        <div className="flex flex-col items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-amber-800">
            <IconAlertTriangle size={16} /> {("Could not load this order")}
          </div>
          {errorMessage && <p className="text-xs text-amber-700">{errorMessage}</p>}
          <button type="button" className={TOOLBAR_BUTTON} onClick={() => get_order()}>
            <IconRefresh size={16} /> {("Try again")}
          </button>
        </div>
      )}


      {/* ---------- summary + editors ---------- */}
      {state === "ready" && (
        <>
          <div className={`${CARD} grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-4`}>

            <Fact icon={<IconUser size={13} />} label="Customer">
              {orderData?.billing_name || hasId(orderData?.userid) ? (
                <div className="flex flex-col gap-0.5">
                  {hasId(orderData?.userid)
                    ? <Link className={`${LINK} ${blur}`} href={`/dashboard/customers/${orderData.userid}`}>{orderData?.billing_name || `Customer #${orderData.userid}`}</Link>
                    : <span className={`font-medium ${blur}`}>{orderData.billing_name}</span>}
                  {orderData?.billing_phone && <span className={`text-xs text-gray-500 ${blur}`}>{orderData.billing_phone}</span>}
                </div>
              ) : <span className="text-gray-400">{("Guest")}</span>}
            </Fact>

            <Fact icon={<IconCash size={13} />} label="Total">
              {orderData?.total_amount != null && orderData?.total_amount !== ""
                ? <span className="text-base font-semibold tabular-nums text-gray-900">{wrapCurrency(orderData.total_amount)}</span>
                : <Dash />}
            </Fact>

            <Fact icon={<IconCreditCard size={13} />} label="Payment">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{titleCase(orderData?.payment_method || "cod").replace(/^Cod$/, "Cash on delivery")}</span>
                <Badge value={orderData?.payment_status} labels={paymentStatusArgs} tones={PAYMENT_STATUS_TONES} />
              </div>
            </Fact>

            <Fact icon={<IconCalendarTime size={13} />} label="Created">
              {created
                ? <span title={created.toLocaleString()}>{created.toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}</span>
                : <Dash />}
            </Fact>
          </div>


          <Tabs activeTab={'order'}
            orientation="vertical"
            activeClass="active-tab "
            navsItemClass="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            navsItemActiveClass="!bg-[#634FE5] !text-white shadow-sm"
            navsWrapperClass={`gap-1 rounded-xl border border-gray-200 bg-white p-2 lg:mb-0 lg:w-52 lg:shrink-0 lg:self-start ${drawer ? "" : "lg:sticky lg:top-[86px]"}`}
            wrapperClass="gap-5"

            tabs={[
              { label: "Order", id: 'order', icon: <IconShoppingBag size={18} /> },
              { label: "Invoice", id: 'invoice', icon: <IconFileInvoice size={18} /> },
              { label: "Receipt", id: 'receipt', icon: <IconReceipt size={18} /> },
              { label: "Subscription", id: 'subscription', icon: <IconRepeat size={18} /> },
              { label: "Delivery", id: 'delivery', icon: <IconTruckDelivery size={18} /> },
              { label: "Trackings", id: 'trackings', icon: <IconRouteSquare size={18} /> },
              { label: "Order Notes", id: 'notes', icon: <IconClipboardText size={18} /> },
            ]}>

            <Tab index={0} id="order">
              <OrderUpdate order_id={id} />
            </Tab>
            <Tab index={1} id="invoice">
              <OrderInvoice order_id={id} />
            </Tab>
            <Tab index={2} id="receipt">
              <ReceiptLabel order_id={id} />
            </Tab>
            <Tab index={3} id="subscription">
              <OrderSubscription order_id={id} />
            </Tab>
            <Tab index={4} id="delivery">
              <OrderDelivery order_id={id} orderData={orderData} />
            </Tab>
            <Tab index={5} id="trackings">
              <OrderTrackings order_id={id} />
            </Tab>
            <Tab index={6} id="notes">
              <OrderNotes order_id={id} />
            </Tab>

          </Tabs>
        </>
      )}

    </div>
  )
}

export default OrderEdit
