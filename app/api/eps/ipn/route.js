import { NextResponse } from "next/server";

import { readEpsIpn, settleEpsPayment } from "@/lib/eps-server";

/**
 * EPS's IPN (eps.com.bd/ipn): EPS POSTs {"Data": "IV:CipherText"} - JSON
 * encrypted with AES-256-CBC under the merchant's Secret Key - to the IPN URL
 * registered with EPS for the merchant. It settles an order whose buyer
 * closed the tab on the gateway's page before coming back.
 *
 * Nothing in the payload is believed: only the merchant transaction id is
 * taken from it, and the payment is settled through EPS's status API exactly
 * as the buyer's return is.
 *
 * Answers in EPS's documented shape - {status:"OK"} once there is a verdict,
 * {status:"ERROR"} with 400 for a body we cannot read, and 500 when the payment
 * was confirmed but could not be written to the order, so a retry gets
 * another go at it.
 */

export async function POST(request) {
  let body = null;

  try {
    const text = await request.text();

    try {
      body = JSON.parse(text);
    } catch {
      body = Object.fromEntries(new URLSearchParams(text).entries());
    }
  } catch {
    body = null;
  }

  const { transactionId, decrypted } = await readEpsIpn(body);

  if (!transactionId) {
    console.error("EPS IPN could not be read", {
      keys: body && typeof body === "object" ? Object.keys(body) : [],
      encrypted: typeof (body?.Data ?? body?.data) === "string",
      decrypted,
    });

    return NextResponse.json({ status: "ERROR", message: "Invalid payload" }, { status: 400 });
  }

  const { outcome } = await settleEpsPayment(transactionId);

  if (outcome === "record_failed") {
    return NextResponse.json(
      { status: "ERROR", message: "Payment confirmed but not recorded yet" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    status: "OK",
    message: "IPN received",
    settled: outcome === "paid" || outcome === "already_paid",
    outcome,
  });
}
