import { NextResponse } from "next/server";

import { settleAamarPayPayment } from "@/lib/aamarpay-server";

/**
 * aamarPay's IPN (the ipn_url sent with every payment): its server POSTs the
 * same fields the buyer's return carries. It settles an order whose buyer
 * closed the tab before coming back.
 *
 * The IPN is unsigned, so nothing in it is believed: only mer_txnid is taken
 * from it, and the payment is settled through aamarPay's trxcheck API,
 * exactly as the buyer's return is.
 *
 * Answers 200 once there is a verdict, and 500 when the payment was confirmed
 * but could not be written to the order, so a retry gets another go at it.
 */

async function readBody(request) {
  try {
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

export async function POST(request) {
  const fields = await readBody(request);
  const transactionId = String(
    fields?.mer_txnid || request.nextUrl.searchParams.get("tran_id") || ""
  ).trim();

  if (!transactionId) {
    console.error("aamarPay IPN arrived without a transaction id", {
      keys: fields && typeof fields === "object" ? Object.keys(fields) : [],
    });

    return NextResponse.json({ received: true, settled: false, reason: "no transaction id" });
  }

  const { outcome } = await settleAamarPayPayment(transactionId);

  if (outcome === "record_failed") {
    return NextResponse.json({ received: true, settled: false, outcome }, { status: 500 });
  }

  return NextResponse.json({
    received: true,
    settled: outcome === "paid" || outcome === "already_paid",
    outcome,
  });
}
