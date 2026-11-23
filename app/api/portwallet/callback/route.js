import { NextResponse } from "next/server";

import { invoiceIdFrom, normaliseStatus, settlePortWalletPayment } from "@/lib/portwallet-server";

/**
 * Where PortWallet sends the buyer back to: redirect_url with ?invoice=...
 * added (a status may come with it, but it is not believed). Only the invoice
 * id is taken - anyone can open this URL - and the outcome comes from
 * PortWallet's invoice API. The IPN (../ipn) settles the same way for a buyer
 * who never comes back.
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
  const invoiceId = invoiceIdFrom(request.url, fields);

  if (!invoiceId) {
    console.error("PortWallet return arrived without an invoice id", {
      query: [...request.nextUrl.searchParams.keys()],
      body: Object.keys(fields || {}),
    });

    return redirect("payment/portwallet/failed?reason=order", request);
  }

  const { outcome, orderHash } = await settlePortWalletPayment(invoiceId);
  const hashQuery = orderHash ? `hash=${encodeURIComponent(orderHash)}` : "";

  /*
    PortWallet adds a status to the return. A buyer who backs out comes back
    to an invoice PortWallet still lists as PENDING, so the returned status is
    used to word the page - it only ever chooses between unpaid pages and can
    never mark anything paid.
  */
  const reported = normaliseStatus(request.nextUrl.searchParams.get("status") || fields?.status);
  const unpaidPage = reported === "cancelled" ? "cancelled" : reported === "rejected" ? "failed" : null;

  switch (outcome) {
    /* record_failed: the money is taken, so telling the buyer it failed would
       invite a second payment. The mismatch is in the log for the store. */
    case "paid":
    case "already_paid":
    case "record_failed":
      return redirect(`thank-you/${orderHash}`, request);
    case "cancelled":
      return redirect(`payment/portwallet/cancelled?${hashQuery}`, request);
    case "pending":
      return redirect(`payment/portwallet/${unpaidPage || "pending"}?${hashQuery}`, request);
    case "unverified":
      return redirect(`payment/portwallet/failed?${hashQuery}&reason=unverified`, request);
    case "no_order":
      return redirect("payment/portwallet/failed?reason=order", request);
    default:
      return redirect(`payment/portwallet/${unpaidPage === "cancelled" ? "cancelled" : "failed"}?${hashQuery}`, request);
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
