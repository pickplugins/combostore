import { NextResponse } from "next/server";

import { settleAamarPayPayment } from "@/lib/aamarpay-server";

/**
 * Where aamarPay sends the buyer back to.
 *
 * It arrives as a form POST from the gateway's own page, which is why this is
 * a route handler and not a page - and why the body it carries is read only
 * for the transaction id. Whether the money was taken, and which order it
 * was for, is settled by asking aamarPay directly (settleAamarPayPayment),
 * since anyone can post to this URL or edit its query string.
 *
 * Success ends on the usual thank-you page; anything else on a short page
 * saying what happened, with the order left unpaid and still payable.
 *
 * Payments started before ../ipn existed were given this URL with &ipn=1 as
 * their IPN; those calls get a JSON answer instead of a redirect.
 */

const RESULTS = ["success", "failed", "cancelled"];

function storefrontUrl(path, request) {
  const base = String(process.env.NEXT_PUBLIC_STORE_URL || "").replace(/\/+$/, "");

  return new URL(
    String(path).replace(/^\/+/, ""),
    base ? `${base}/` : request.nextUrl.origin
  );
}

/** A POST redirect has to become a GET, or the browser reposts the form. */
function redirect(url, request) {
  return NextResponse.redirect(storefrontUrl(url, request), 303);
}

async function handle(request, fields) {
  const query = request.nextUrl.searchParams;

  const result = RESULTS.includes(query.get("result"))
    ? query.get("result")
    : "failed";

  const isIpn = query.get("ipn") === "1";

  /*
    The query string is the first source because this route wrote it, but a
    gateway redirect does not always keep it - so mer_txnid and opt_a from the
    posted body stand in for it. Neither is trusted: the transaction id is
    only used to ask aamarPay, and the order comes from aamarPay's answer.
  */
  const transactionId = query.get("tran_id") || fields?.mer_txnid || "";
  const hintHash = query.get("hash") || fields?.opt_a || "";

  if (result !== "success" && !isIpn) {
    return redirect(`payment/aamarpay/${result}?hash=${encodeURIComponent(hintHash)}`, request);
  }

  const { outcome, orderHash } = await settleAamarPayPayment(transactionId);

  if (isIpn) {
    return NextResponse.json(
      { received: true, settled: outcome === "paid" || outcome === "already_paid", outcome },
      { status: outcome === "record_failed" ? 500 : 200 }
    );
  }

  const hashQuery = `hash=${encodeURIComponent(orderHash)}`;

  switch (outcome) {
    /* record_failed: the money is taken, so telling the buyer it failed would
       invite a second payment. The mismatch is in the log for the store. */
    case "paid":
    case "already_paid":
    case "record_failed":
      return redirect(`thank-you/${orderHash}`, request);
    case "held":
      return redirect(`payment/aamarpay/review?${hashQuery}`, request);
    case "unverified":
      return redirect(`payment/aamarpay/failed?${hashQuery}&reason=unverified`, request);
    case "no_order":
      return redirect("payment/aamarpay/failed?reason=order", request);
    default:
      return redirect(`payment/aamarpay/failed?${hashQuery}`, request);
  }
}

export async function POST(request) {
  let fields = {};

  try {
    const form = await request.formData();

    fields = Object.fromEntries(form.entries());
  } catch (error) {
    /* Some flows come back without a body; the query string still has enough. */
  }

  return handle(request, fields);
}

export async function GET(request) {
  return handle(request, {});
}
