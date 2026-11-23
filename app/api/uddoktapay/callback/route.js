import { NextResponse } from "next/server";

import { settleUddoktaPayPayment } from "@/lib/uddoktapay-server";

/**
 * Where UddoktaPay sends the buyer back to: redirect_url + "?invoice_id=..."
 * after a payment, or cancel_url (?result=cancel&hash=...) from the cancel
 * link. Only the invoice id is taken from the URL - anyone can open it - and
 * the outcome comes from the verify-payment API. The webhook (../ipn) settles
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

/** The invoice id, also when a panel appends "?invoice_id=" to a URL that already had a query. */
function invoiceIdFrom(request, fields) {
  const match = String(request.url).match(/[?&]invoice_id=([^&?#]+)/);

  if (match) {
    return decodeURIComponent(match[1]).trim();
  }

  return String(fields?.invoice_id || "").trim();
}

async function handle(request, fields) {
  const params = request.nextUrl.searchParams;
  const invoiceId = invoiceIdFrom(request, fields);

  if (!invoiceId) {
    if (params.get("result") === "cancel") {
      const hash = String(params.get("hash") || "").trim();

      return redirect(
        `payment/uddoktapay/cancelled${hash ? `?hash=${encodeURIComponent(hash)}` : ""}`,
        request
      );
    }

    console.error("UddoktaPay return arrived without an invoice id", {
      query: [...params.keys()],
      body: Object.keys(fields || {}),
    });

    return redirect("payment/uddoktapay/failed?reason=order", request);
  }

  const { outcome, orderHash } = await settleUddoktaPayPayment(invoiceId);
  const hashQuery = orderHash ? `hash=${encodeURIComponent(orderHash)}` : "";

  switch (outcome) {
    /* record_failed: the money is taken, so telling the buyer it failed would
       invite a second payment. The mismatch is in the log for the store. */
    case "paid":
    case "already_paid":
    case "record_failed":
      return redirect(`thank-you/${orderHash}`, request);
    case "pending":
      return redirect(`payment/uddoktapay/pending?${hashQuery}`, request);
    case "unverified":
      return redirect(`payment/uddoktapay/failed?${hashQuery}&reason=unverified`, request);
    case "no_order":
      return redirect("payment/uddoktapay/failed?reason=order", request);
    default:
      return redirect(`payment/uddoktapay/failed?${hashQuery}`, request);
  }
}

export async function GET(request) {
  return handle(request, {});
}

/* For a panel set to return_type POST. */
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
