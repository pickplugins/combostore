import { NextResponse } from "next/server";

import { invoiceIdFrom, settlePortWalletPayment } from "@/lib/portwallet-server";

/**
 * PortWallet's IPN: after a payment its server POSTs the invoice id and
 * amount ("invoice", "amount") to the ipn_url sent with the invoice. It
 * settles an order whose buyer closed the tab before coming back.
 *
 * The IPN is unsigned, so nothing in it is believed: the invoice id is taken
 * from it and the payment is settled through PortWallet's invoice API,
 * exactly as the buyer's return is.
 *
 * Answers 200 once there is a verdict, so PortWallet stops retrying, and 500
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
  const invoiceId = invoiceIdFrom(request.url, fields);

  if (!invoiceId) {
    console.error("PortWallet IPN arrived without an invoice id", {
      keys: fields && typeof fields === "object" ? Object.keys(fields) : [],
    });

    return NextResponse.json({ received: true, settled: false, reason: "no invoice id" });
  }

  const { outcome } = await settlePortWalletPayment(invoiceId);

  if (outcome === "record_failed") {
    return NextResponse.json({ received: true, settled: false, outcome }, { status: 500 });
  }

  return NextResponse.json({
    received: true,
    settled: outcome === "paid" || outcome === "already_paid",
    outcome,
  });
}
