import { NextResponse } from "next/server";

import { settleShurjoPayOrder, spOrderIdFrom } from "@/lib/shurjopay-server";

/**
 * Where shurjoPay sends the buyer back to, paid or cancelled alike (one URL is
 * given for both). The URL carries only shurjoPay's own order id; which of our
 * orders it belongs to, and whether it was paid, both come from the
 * verification API - anyone can open this URL. The IPN (../ipn) settles the
 * same way for a buyer who never comes back.
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
  const { outcome, orderHash } = await settleShurjoPayOrder(spOrderIdFrom(request.url, fields));
  const hashQuery = orderHash ? `hash=${encodeURIComponent(orderHash)}` : "";

  switch (outcome) {
    /* record_failed: the money is taken, so telling the buyer it failed would
       invite a second payment. The mismatch is in the log for the store. */
    case "paid":
    case "already_paid":
    case "record_failed":
      return redirect(`thank-you/${orderHash}`, request);
    case "cancelled":
      return redirect(`payment/shurjopay/cancelled?${hashQuery}`, request);
    case "unverified":
      return redirect(`payment/shurjopay/failed?${hashQuery}&reason=unverified`, request);
    case "no_order":
      return redirect("payment/shurjopay/failed?reason=order", request);
    default:
      return redirect(`payment/shurjopay/failed?${hashQuery}`, request);
  }
}

export async function GET(request) {
  return handle(request, {});
}

export async function POST(request) {
  let fields = {};

  try {
    const form = await request.formData();

    fields = Object.fromEntries(form.entries());
  } catch (error) {
    /* The query string has what is needed. */
  }

  return handle(request, fields);
}
