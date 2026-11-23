import { NextResponse } from "next/server";

import { invoiceNumberFrom, normaliseStatus, settlePaystationPayment } from "@/lib/paystation-server";

/**
 * Where PayStation sends the buyer back to. PayStation does not publish the
 * parameters it adds, so only the invoice number is taken (in any of its
 * usual spellings, query or body) and the outcome comes from the
 * transaction-status API - anyone can open this URL. The IPN (../ipn) settles
 * the same way for a buyer who never comes back.
 */

function storefrontUrl(path, request) {
  const base = String(process.env.NEXT_PUBLIC_STORE_URL || "").replace(/\/+$/, "");

  return new URL(
    String(path).replace(/^\/+/, ""),
    base ? `${base}/` : request.nextUrl.origin
  );
}

/** 303 so a POSTed return becomes a GET. */
function redirect(path, request) {
  return NextResponse.redirect(storefrontUrl(path, request), 303);
}

async function handle(request, fields) {
  const invoiceNumber = invoiceNumberFrom(request.url, fields);

  if (!invoiceNumber) {
    console.error("PayStation return arrived without an invoice number", {
      query: [...request.nextUrl.searchParams.keys()],
      body: Object.keys(fields || {}),
    });

    return redirect("payment/paystation/failed?reason=order", request);
  }

  const { outcome, orderHash } = await settlePaystationPayment(invoiceNumber);

  /*
    PayStation's lookup reports some abandoned checkouts as a plain failure
    while the buyer's return says they cancelled. The returned status only ever
    picks the wording of an unpaid page - it never marks anything paid - so it
    is safe to listen to here.
  */
  const reported = [
    request.nextUrl.searchParams.get("trx_status"),
    request.nextUrl.searchParams.get("status"),
    fields?.trx_status,
    fields?.status,
  ].find(Boolean);
  const buyerCancelled = normaliseStatus(reported) === "cancelled";
  const hashQuery = orderHash ? `hash=${encodeURIComponent(orderHash)}` : "";

  switch (outcome) {
    /* record_failed: the money is taken, so telling the buyer it failed would
       invite a second payment. The mismatch is in the log for the store. */
    case "paid":
    case "already_paid":
    case "record_failed":
      return redirect(`thank-you/${orderHash}`, request);
    case "cancelled":
      return redirect(`payment/paystation/cancelled?${hashQuery}`, request);
    case "failed":
      return redirect(`payment/paystation/${buyerCancelled ? "cancelled" : "failed"}?${hashQuery}`, request);
    case "pending":
      return redirect(`payment/paystation/pending?${hashQuery}`, request);
    case "unverified":
      return redirect(`payment/paystation/failed?${hashQuery}&reason=unverified`, request);
    case "no_order":
      return redirect("payment/paystation/failed?reason=order", request);
    default:
      return redirect(`payment/paystation/failed?${hashQuery}`, request);
  }
}

export async function GET(request) {
  return handle(request, {});
}

export async function POST(request) {
  let fields = {};

  try {
    const type = request.headers.get("content-type") || "";

    fields = type.includes("application/json")
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
  } catch (error) {
    /* The query string may have what is needed. */
  }

  return handle(request, fields);
}
