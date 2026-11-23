import { NextResponse } from "next/server";

import { invoiceNumberFrom, settlePaystationPayment } from "@/lib/paystation-server";

/**
 * PayStation's IPN: after a successful payment its server POSTs JSON
 * (invoice_number, trx_status, trx_id, trx_amount, ...) to the merchant's IPN
 * URL, which is set with PayStation rather than per payment. It settles an
 * order whose buyer closed the tab before coming back.
 *
 * The IPN is unsigned, so nothing in it is believed: the invoice number is
 * taken from it and the payment is settled through the transaction-status
 * API, exactly as the buyer's return is.
 *
 * Answers 200 once there is a verdict, so PayStation stops retrying, and 500
 * when the payment was confirmed but could not be written to the order, so
 * its retry gets another go at it.
 */

async function readBody(request) {
  const type = request.headers.get("content-type") || "";

  try {
    if (type.includes("form")) {
      return Object.fromEntries((await request.formData()).entries());
    }

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
  const invoiceNumber = invoiceNumberFrom(request.url, fields);

  if (!invoiceNumber) {
    console.error("PayStation IPN arrived without an invoice number", {
      keys: fields && typeof fields === "object" ? Object.keys(fields) : [],
    });

    return NextResponse.json({ received: true, settled: false, reason: "no invoice number" });
  }

  const { outcome } = await settlePaystationPayment(invoiceNumber);

  if (outcome === "record_failed") {
    return NextResponse.json({ received: true, settled: false, outcome }, { status: 500 });
  }

  return NextResponse.json({
    received: true,
    settled: outcome === "paid" || outcome === "already_paid",
    outcome,
  });
}
