import { NextResponse } from "next/server";

import {
  resolveUddoktaPayConfig,
  sameSecret,
  settleUddoktaPayPayment,
} from "@/lib/uddoktapay-server";

/**
 * UddoktaPay's webhook (the webhook_url sent with every payment): it POSTs
 * the payment as JSON - the same shape verify-payment answers - with the
 * store's API key in the RT-UDDOKTAPAY-API-KEY header. It settles an order
 * whose buyer closed the tab before coming back, and one the merchant
 * approved later from PENDING.
 *
 * A wrong key is refused. Even with the right one the body is not believed:
 * only its invoice_id is used, and the payment is settled through the
 * verify-payment API, exactly as the buyer's return is.
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
  const config = await resolveUddoktaPayConfig();

  if (!config.configured) {
    return NextResponse.json({ received: false, reason: "not configured" }, { status: 503 });
  }

  if (!sameSecret(request.headers.get("rt-uddoktapay-api-key"), config.apiKey)) {
    console.error("UddoktaPay webhook refused: API key header missing or wrong");

    return NextResponse.json({ received: false, reason: "unauthorised" }, { status: 401 });
  }

  const fields = await readBody(request);
  const invoiceId = String(fields?.invoice_id || "").trim();

  if (!invoiceId) {
    console.error("UddoktaPay webhook arrived without an invoice id", {
      keys: fields && typeof fields === "object" ? Object.keys(fields) : [],
    });

    return NextResponse.json({ received: true, settled: false, reason: "no invoice id" });
  }

  const { outcome } = await settleUddoktaPayPayment(invoiceId);

  if (outcome === "record_failed") {
    return NextResponse.json({ received: true, settled: false, outcome }, { status: 500 });
  }

  return NextResponse.json({
    received: true,
    settled: outcome === "paid" || outcome === "already_paid",
    outcome,
  });
}
