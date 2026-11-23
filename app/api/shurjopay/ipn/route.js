import { NextResponse } from "next/server";

import { settleShurjoPayOrder, spOrderIdFrom } from "@/lib/shurjopay-server";

/**
 * shurjoPay's IPN: its server telling ours about a payment, which is what
 * settles an order whose buyer closed the tab on shurjoPay's page. The URL is
 * set in the shurjoPay merchant panel, not per payment.
 *
 * shurjoPay does not publish the IPN's payload or a signature for it, so
 * nothing in the body is believed: only shurjoPay's order id is taken from it,
 * and the payment is settled through the verification API exactly as the
 * buyer's return trip is. A forged call can at most make us ask shurjoPay
 * about an order id.
 *
 * Answers 200 once there is a verdict (paid, unpaid, unknown order) so
 * shurjoPay stops retrying, and 500 when the payment was confirmed but could
 * not be written to the order, so its retry gets another go at it.
 */

async function readBody(request) {
  const type = request.headers.get("content-type") || "";

  try {
    if (type.includes("application/json")) {
      return await request.json();
    }

    if (type.includes("form")) {
      return Object.fromEntries((await request.formData()).entries());
    }

    /* Unlabelled: try JSON, then a query-string body. */
    const text = await request.text();

    try {
      return JSON.parse(text);
    } catch {
      return Object.fromEntries(new URLSearchParams(text).entries());
    }
  } catch {
    return {};
  }
}

async function handle(request, fields) {
  const spOrderId = spOrderIdFrom(request.url, fields);

  if (!spOrderId) {
    console.error("shurjoPay IPN arrived without an order id", {
      keys: fields && typeof fields === "object" ? Object.keys(fields) : [],
    });

    return NextResponse.json({ received: true, settled: false, reason: "no order id" });
  }

  const { outcome } = await settleShurjoPayOrder(spOrderId);

  if (outcome === "record_failed") {
    return NextResponse.json({ received: true, settled: false, reason: outcome }, { status: 500 });
  }

  return NextResponse.json({
    received: true,
    settled: outcome === "paid" || outcome === "already_paid",
    outcome,
  });
}

export async function POST(request) {
  return handle(request, await readBody(request));
}

/* Some IPN setups call with GET and the id in the query string. */
export async function GET(request) {
  return handle(request, {});
}
