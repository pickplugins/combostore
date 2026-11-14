"use client";

import React, { useMemo, useState } from "react";
import {
  IconCopy,
  IconCheck,
  IconPhone,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";

import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';

const SEPARATOR = "-----------------------";

const toNumber = (value) => parseFloat(value || 0) || 0;

const orderTotal = (entry) =>
  (toNumber(entry.subtotal_amount) + toNumber(entry.shipping_amount)) -
  (toNumber(entry.discount_amount) + toNumber(entry.advance_payment));

// phones may arrive as an array, a JSON string, an object map, or be empty.
const getPhones = (entry) => {
  let phones = entry?.phones;
  if (typeof phones === "string") {
    try { phones = JSON.parse(phones); } catch { return []; }
  }
  if (phones && !Array.isArray(phones) && typeof phones === "object") {
    phones = Object.values(phones);
  }
  if (!Array.isArray(phones)) return [];
  return phones
    .filter((p) => p && typeof p === "object" && p.phone)
    .map((p) => ({ label: String(p.label ?? ""), phone: String(p.phone) }));
};

// product_name can carry HTML entities/markup; turn it into plain text for copying.
const htmlToText = (html) => {
  if (typeof window === "undefined") return String(html ?? "");
  const doc = new DOMParser().parseFromString(String(html ?? ""), "text/html");
  return doc.body.textContent || "";
};

const OrdersOverview = (props) => {
  const ordersData = props?.ordersData || [];

  const { wrapCurrency } = useUtilsStore();
  const { addNotification, privacyMode } = useCounterStore();

  const [copied, setCopied] = useState(false);

  const blur = privacyMode ? "blur-[3px] select-none" : "";

  const summary = useMemo(() => {
    let items = 0;
    let total = 0;
    ordersData.forEach((entry) => {
      total += orderTotal(entry);
      (entry.order_items || []).forEach((item) => {
        items += Number(item.quantity || 0);
      });
    });
    return { orders: ordersData.length, items, total };
  }, [ordersData]);

  // Builds the same plain-text layout the old innerText copy produced.
  const buildCopyText = () =>
    ordersData
      .map((entry) => {
        const lines = [`#${entry?.id}`];
        if (entry.billing_name) lines.push(entry.billing_name);
        if (entry.billing_address) lines.push(entry.billing_address);
        if (entry.billing_phone) lines.push(entry.billing_phone);
        getPhones(entry).forEach((p) => lines.push(p.label ? `${p.label}: ${p.phone}` : p.phone));
        lines.push(SEPARATOR);
        (entry?.order_items || []).forEach((item, index) => {
          lines.push(`#${index + 1}. ${htmlToText(item.product_name)}`);
          lines.push(`Quantity: ${item.quantity}\tPrice: ${item.price}`);
        });
        if (toNumber(entry?.discount_amount) > 0) {
          lines.push(`Discount: -${wrapCurrency(entry.discount_amount)}`);
        }
        lines.push(SEPARATOR);
        lines.push(`Total: ${wrapCurrency(orderTotal(entry))}`);
        return lines.join("\n");
      })
      .join("\n\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildCopyText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      addNotification({ type: 'success', title: 'Data copied', content: "Order details copied to clipboard." });
    } catch (err) {
      addNotification({ type: 'error', title: 'Copy failed', content: "Could not access the clipboard." });
    }
  };

  if (!ordersData.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-gray-300 bg-white px-6 py-10 text-center">
        <div className="text-sm font-medium text-gray-700">No orders selected</div>
        <div className="text-xs text-gray-500">Select one or more orders to see an overview.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Header: summary + copy */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-gray-700 ring-1 ring-gray-200">
            {summary.orders} {summary.orders === 1 ? "order" : "orders"}
          </span>
          <span className="rounded-full bg-white px-3 py-1 font-medium text-gray-700 ring-1 ring-gray-200">
            {summary.items} {summary.items === 1 ? "item" : "items"}
          </span>
          <span className="rounded-full bg-gray-900 px-3 py-1 font-semibold text-white">
            {wrapCurrency(summary.total)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 cursor-pointer"
        >
          {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
          {copied ? "Copied" : "Copy Data"}
        </button>
      </div>

      {/* Order cards */}
      <div className="flex flex-col gap-3">
        {ordersData.map((entry) => {
          const total = orderTotal(entry);
          const orderItems = entry?.order_items || [];
          const phones = getPhones(entry);
          const discount = toNumber(entry?.discount_amount);
          const advance = toNumber(entry?.advance_payment);
          const shipping = toNumber(entry?.shipping_amount);

          return (
            <div
              key={entry?.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              {/* Card header */}
              <div className="flex items-center justify-between gap-3 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
                <span className="font-mono text-sm font-semibold text-gray-900">#{entry?.id}</span>
                <span className="text-sm font-bold text-gray-900">{wrapCurrency(total)}</span>
              </div>

              <div className="flex flex-col gap-4 p-4">
                {/* Customer */}
                <div className={`flex flex-col gap-1.5 text-sm ${blur}`}>
                  {entry.billing_name && (
                    <div className="flex items-center gap-2 font-medium text-gray-900">
                      <IconUser size={14} className="shrink-0 text-gray-400" />
                      {entry.billing_name}
                    </div>
                  )}
                  {entry.billing_address && (
                    <div className="flex items-start gap-2 text-xs text-gray-600">
                      <IconMapPin size={14} className="mt-px shrink-0 text-gray-400" />
                      <span>{entry.billing_address}</span>
                    </div>
                  )}
                  {(entry?.billing_phone || phones.length > 0) && (
                    <div className="flex items-start gap-2 text-xs text-gray-600">
                      <IconPhone size={14} className="mt-px shrink-0 text-gray-400" />
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                        {entry?.billing_phone && <span>{entry?.billing_phone}</span>}
                        {phones.map((p, i) => (
                          <span key={`${p.phone}-${i}`}>
                            {p.label && <span className="text-gray-400">{p.label}:</span>} {p.phone}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Items */}
                {orderItems.length > 0 && (
                  <div className="divide-y divide-gray-100 rounded-md border border-gray-100">
                    {orderItems.map((item, index) => (
                      <div key={item.id ?? index} className="flex items-start justify-between gap-3 px-3 py-2 text-xs">
                        <div className="flex min-w-0 gap-2">
                          <span className="text-gray-400 tabular-nums">{index + 1}.</span>
                          <span
                            className="font-medium text-gray-800"
                            dangerouslySetInnerHTML={{ __html: item.product_name }}
                          />
                        </div>
                        <div className="shrink-0 text-right tabular-nums text-gray-600">
                          <span className="text-gray-400">{item.quantity} ×</span> {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Totals */}
                {(shipping > 0 || discount > 0 || advance > 0) && (
                  <div className="flex flex-col gap-1 text-xs text-gray-600">
                    {shipping > 0 && (
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="tabular-nums">{wrapCurrency(shipping)}</span>
                      </div>
                    )}
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-700">
                        <span>Discount</span>
                        <span className="tabular-nums">-{wrapCurrency(discount)}</span>
                      </div>
                    )}
                    {advance > 0 && (
                      <div className="flex justify-between">
                        <span>Advance paid</span>
                        <span className="tabular-nums">-{wrapCurrency(advance)}</span>
                      </div>
                    )}
                    <div className="mt-1 flex justify-between border-t border-gray-100 pt-2 text-sm font-semibold text-gray-900">
                      <span>Total</span>
                      <span className="tabular-nums">{wrapCurrency(total)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersOverview;
