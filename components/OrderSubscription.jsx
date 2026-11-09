"use client";
import { useState, useEffect } from "react";
import { IconRepeat, IconPlayerPlay, IconCalendarEvent, IconCalendarTime, IconCash } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import Spinner from '../components/Spinner';

import WidgetWrapper from '../components/WidgetWrapper';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same card shell as OrderUpdate / OrderDelivery and the other editor screens.
   `form-card` also opts the fields inside into the shared input styling. */
const CARD_CLASSES =
  "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";

const FIELD_CLASSES = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";
const ROW_CLASSES = "flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1";
const ROW_LABEL = "block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0";
const PRIMARY_BUTTON = "inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const STATUS_TONES = {
  active: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  paused: "bg-amber-50 text-amber-700 ring-amber-200",
  canceled: "bg-rose-50 text-rose-700 ring-rose-200",
};

const INTERVAL_LABELS = { day: "day", week: "week", month: "month", year: "year" };


const OrderSubscription = (props) => {
  const { formatDate, wrapCurrency } = useUtilsStore()

  const { token, addNotification, userDataX } = useCounterStore()

  var order_id = props?.order_id
  var [loading, setloading] = useState(false);

  var [subscriptionData, setsubscriptionData] = useState(props?.subscriptionData);
  var [orderData, setorderData] = useState(null);


  useEffect(() => {
    get_order();
    get_subscription();
  }, [order_id]);

  function get_subscription() {

    if (!order_id) {
      return;
    }

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/get_subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: order_id, by: 'order_id' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);
        setsubscriptionData(res?.subscription)
      })
      .catch((_error) => {
        setloading(false);
      });
  }

  function get_order() {

    fetch(serverUrl + "wp-json/combo-store/v2/get_order", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id: order_id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Token validation failed');
        }
        return response.json();
      })
      .then((res) => {
        setorderData(res?.order)
      })
      .catch((_error) => {
      });
  }

  function update_subscription() {

    setloading(true)

    fetch(serverUrl + "wp-json/combo-store/v2/update_subscription", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(subscriptionData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Token validation failed');
        }
        return response.json();
      })
      .then((res) => {
        var status = res?.status;
        var message = res?.message;

        if (status == 'success') {
          addNotification({ type: 'success', title: 'Subscription update', content: message })
        }
        if (status == 'failed') {
          addNotification({ type: 'error', title: 'Subscription update failed', content: message })
        }

        setloading(false)
      })
      .catch((_error) => {
        setloading(false)
        addNotification({ type: 'error', title: 'Subscription update failed', content: 'Could not reach the server' })
      });
  }

  function create_subscriptions() {

    if (!orderData?.userid) {
      addNotification({ type: 'error', title: 'No customer on this order', content: 'Assign a customer to the order before starting a subscription.' })
      return;
    }

    setloading(true)

    var postData = JSON.stringify({
      /* The subscriber is the order's customer, not whoever is logged in. */
      user_id: orderData?.userid,
      order_id: order_id,
      status: 'active',
      next_billing_date: '',
      renewal_interval: 'month',
      last_payment_amount: orderData?.total_amount,
      total_amount: orderData?.total_amount,
      subtotal_amount: orderData?.subtotal_amount,
    });

    fetch(serverUrl + "wp-json/combo-store/v2/create_subscriptions", {
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
        return response.json();
      })
      .then((res) => {
        var status = res?.status;
        var message = res?.message;

        if (status == 'success') {
          addNotification({ type: 'success', title: 'Subscription created', content: message })
        }
        if (status == 'failed') {
          addNotification({ type: 'error', title: 'Subscription creation failed', content: message })
        }

        setloading(false)
        get_subscription()
      })
      .catch((_error) => {
        setloading(false)
        addNotification({ type: 'error', title: 'Subscription creation failed', content: 'Could not reach the server' })
      });
  }


  const requiredRoles = ["administrator", "rider", ""];
  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));

  const showDate = (value) => {
    if (typeof value !== "string" || !value || value.startsWith("0000")) return null;
    var formatted = formatDate(value);
    return formatted == "Invalid Date" ? value : formatted;
  }

  const statusTone = STATUS_TONES[subscriptionData?.status] ?? "bg-gray-100 text-gray-600 ring-gray-200";
  const intervalCount = parseInt(subscriptionData?.interval_count) || 1;
  const intervalUnit = INTERVAL_LABELS[subscriptionData?.renewal_interval];
  const intervalText = intervalUnit ? (intervalCount > 1 ? `Every ${intervalCount} ${intervalUnit}s` : `Every ${intervalUnit}`) : null;
  const amount = subscriptionData?.total_amount ?? orderData?.total_amount;
  const nextBilling = subscriptionData?.status == 'active' ? showDate(subscriptionData?.next_billing_date) : null;
  const created = showDate(subscriptionData?.created_at);


  return (
    <div className="flex flex-col gap-4">

      {!subscriptionData?.id && (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#634FE5]/10 text-[#634FE5]">
            <IconRepeat size={24} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">{("Subscription hasn't started")}</div>
            <div className="mt-1 text-xs text-gray-500">{("Start a subscription to bill this order again on a monthly schedule. You can change the interval afterwards.")}</div>
          </div>
          <button type="button" disabled={loading} onClick={() => create_subscriptions()} className={PRIMARY_BUTTON}>
            {loading ? <Spinner /> : <IconPlayerPlay size={16} />}
            {("Start Subscription")}
          </button>
        </div>
      )}


      {subscriptionData?.id && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-gray-900">{("Subscription")} #{subscriptionData?.id}</span>
              {subscriptionData?.status && (
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ring-1 ring-inset ${statusTone}`}>{subscriptionData.status}</span>
              )}
              {intervalText && (
                <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-[11px] font-semibold text-gray-600 ring-1 ring-inset ring-gray-200">{intervalText}</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {loading && <Spinner />}
              {hasAccess && (
                <button type="button" disabled={loading} onClick={() => update_subscription()} className={PRIMARY_BUTTON}>
                  {("Update")}
                </button>
              )}
            </div>
          </div>


          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-500"><IconCash size={14} /> {("Amount")}</div>
              <div className="mt-1 text-xl font-semibold tabular-nums text-gray-900">{amount != null && amount !== "" ? wrapCurrency(amount) : <span className="text-gray-300">—</span>}</div>
            </div>
            <div className="rounded-xl border border-[#634FE5]/20 bg-[#634FE5]/5 p-4">
              <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-500"><IconCalendarEvent size={14} /> {("Next Billing")}</div>
              <div className="mt-1 text-base font-semibold tabular-nums text-gray-900">
                {nextBilling ?? <span className="text-sm font-normal text-gray-400">{subscriptionData?.status == 'active' ? ("Not scheduled") : ("Not active")}</span>}
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-500"><IconCalendarTime size={14} /> {("Created")}</div>
              <div className="mt-1 text-base font-semibold tabular-nums text-gray-900">{created ?? <span className="text-gray-300">—</span>}</div>
            </div>
          </div>


          <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Subscription Settings">

            <div>

              <div className={ROW_CLASSES}>
                <label htmlFor="subscription-status" className={ROW_LABEL}>{('Status')}</label>
                <div>
                  <select id="subscription-status" name="status" className={FIELD_CLASSES} value={subscriptionData?.status ?? ""} onChange={ev => {
                    setsubscriptionData({ ...subscriptionData, status: ev.target.value })
                  }}>
                    <option value="">{("Choose")}</option>
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="canceled">Canceled</option>
                  </select>
                </div>
              </div>

              <div className={ROW_CLASSES}>
                <label htmlFor="subscription-interval" className={ROW_LABEL}>{('Interval')}</label>
                <div>
                  <select id="subscription-interval" name="renewal_interval" className={FIELD_CLASSES} value={subscriptionData?.renewal_interval ?? ""} onChange={ev => {
                    setsubscriptionData({ ...subscriptionData, renewal_interval: ev.target.value })
                  }}>
                    <option value="">{("Choose")}</option>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>

              <div className={ROW_CLASSES}>
                <label htmlFor="subscription-interval-count" className={ROW_LABEL}>
                  {("Interval Count")}
                  <span className="mt-0.5 block text-xs font-normal text-gray-500">{("e.g. 2 with Month bills every 2 months")}</span>
                </label>
                <div>
                  <input id="subscription-interval-count" type="number" min="1" step="1" className={FIELD_CLASSES} value={subscriptionData?.interval_count ?? ""} onChange={ev => {
                    setsubscriptionData({ ...subscriptionData, interval_count: ev.target.value })
                  }} />
                </div>
              </div>

            </div>

          </WidgetWrapper>
        </>
      )}

    </div>
  );
};

export default OrderSubscription;
