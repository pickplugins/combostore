import { NextResponse } from "next/server";

import { settleSslcommerzPayment } from "@/lib/sslcommerz-server";

/**
 * SSLCOMMERZ's IPN: its server POSTing the payment's fields to the ipn_url
 * sent with each payment. It settles an order whose buyer closed the tab on
 * the gateway's page.
 *
 * Nothing in the body is believed: val_id (or tran_id) is taken from it and
 * the payment is settled through the validation API, exactly as the buyer's
 * return is. A forged call can at most make us ask SSLCOMMERZ about an id.
 *
 * Answers 200 once there is a verdict, and 500 when the payment was confirmed
 * but could not be written to the order, so a retry gets another go at it.
 */

async function readFields(request) {
  const type = request.headers.get("content-type") || "";

  try {
    if (type.includes("application/json")) {
      return await request.json();
    }

    return Object.fromEntries((await request.formData()).entries());
  } catch {
    return {};
  }
}

export async function POST(request) {
  const fields = await readFields(request);
  const status = String(fields?.status || "").toUpperCase();

  /* A failed or cancelled payment: nothing to record. */
  if (status === "FAILED" || status === "CANCELLED" || status === "UNATTEMPTED" || status === "EXPIRED") {
    return NextResponse.json({ received: true, settled: false, outcome: status.toLowerCase() });
  }

  if (!fields?.val_id && !fields?.tran_id) {
    console.error("SSLCOMMERZ IPN arrived without val_id or tran_id", {
      keys: Object.keys(fields || {}),
    });

    return NextResponse.json({ received: true, settled: false, reason: "no id" });
  }

  const { outcome } = await settleSslcommerzPayment({
    valId: fields.val_id || "",
    tranId: fields.tran_id || "",
  });

  if (outcome === "record_failed") {
    return NextResponse.json({ received: true, settled: false, outcome }, { status: 500 });
  }

  return NextResponse.json({
    received: true,
    settled: outcome === "paid" || outcome === "already_paid",
    outcome,
  });
}
