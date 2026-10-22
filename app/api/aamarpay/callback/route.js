import { NextResponse } from "next/server";

import {
  getOrderByHash,
  isPaymentSettled,
  markOrderPaid,
  verifyAamarPayPayment,
} from "@/lib/aamarpay-server";

/**
 * Where aamarPay sends the buyer back to.
 *
 * It arrives as a form POST from the gateway's own page, which is why this is
 * a route handler and not a page - and why the body it carries is read only
 * for the transaction id. Whether the money was taken is settled by asking
 * aamarPay directly, since anyone can post to this URL.
 *
 * Success ends on the usual thank-you page; anything else on a short page
 * saying what happened, with the order left unpaid and still payable.
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

  /*
    aamarPay's own server calling in, not the buyer's browser. The work is
    identical - the order is settled from the verification either way - but
    there is nobody to send anywhere, so it gets a plain answer.
  */
  const isIpn = query.get("ipn") === "1";

  const done = (path) =>
    isIpn ? NextResponse.json({ received: true }) : redirect(path, request);

  /*
    The query string is the first source because this route wrote it, but a
    gateway redirect does not always keep it - so opt_a and mer_txnid from the
    posted body stand in for it.
  */
  const orderHash = query.get("hash") || fields?.opt_a || "";
  const transactionId = query.get("tran_id") || fields?.mer_txnid || "";

  if (result !== "success") {
    return done(`payment/aamarpay/${result}?hash=${encodeURIComponent(orderHash)}`);
  }

  const order = await getOrderByHash(orderHash);

  if (!order?.id) {
    return done("payment/aamarpay/failed?reason=order");
  }

  /* A second visit to this URL - the first one already recorded it. */
  if (String(order.payment_status).toLowerCase() === "paid") {
    return done(`thank-you/${orderHash}`);
  }

  const verification = await verifyAamarPayPayment(transactionId);

  if (!isPaymentSettled(verification, order)) {
    console.error("aamarPay reported success but verification did not agree", {
      transactionId,
      orderHash,
      pay_status: verification?.pay_status,
      status_code: verification?.status_code,
      amount: verification?.amount,
      due: order?.total_amount,
    });

    return done(`payment/aamarpay/failed?hash=${encodeURIComponent(orderHash)}&reason=unverified`);
  }

  try {
    await markOrderPaid(order, { transactionId, verification });
  } catch (error) {
    /*
      The money is taken but the order still says unpaid. Telling the buyer it
      failed would be wrong - and would invite a second payment - so they are
      sent to the thank-you page and the mismatch is left in the log for the
      store to settle.
    */
    console.error("aamarPay payment taken but the order was not updated", {
      transactionId,
      orderHash,
      error: error?.message,
    });
  }

  return done(`thank-you/${orderHash}`);
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
