import { NextResponse } from "next/server";

import {
  getOrderByHash,
  isPaymentSettled,
  markOrderPaid,
  verifyEpsPayment,
} from "@/lib/eps-server";

/**
 * Where EPS sends the buyer back to.
 *
 * It may arrive as a form POST from the gateway's own page, which is why this
 * is a route handler and not a page - and why the body it carries is read only
 * for the transaction id. Whether the money was taken is settled by asking EPS
 * directly, since anyone can post to this URL.
 *
 * EPS does not document what it puts on the return URL, so nothing is assumed:
 * the transaction id this route wrote into its own query string is the first
 * source, and the names the gateway's own SDKs look for stand in behind it.
 * The order hash has a third way home - EPS echoes `valueA` back in the status
 * response - so a redirect that arrives stripped of everything still settles.
 *
 * There is no IPN here because EPS publishes none: an order whose buyer closed
 * the tab on the gateway's page stays pending until they return to this URL.
 * The amount is checked on the way in, so that costs a reconciliation in the
 * EPS portal rather than a wrong charge.
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

/** The first of several spellings that actually carries a value. */
function pick(sources, keys) {
  for (const source of sources) {
    for (const key of keys) {
      const value = source?.[key];

      if (value) {
        return String(value);
      }
    }
  }

  return "";
}

async function handle(request, fields) {
  const query = request.nextUrl.searchParams;
  const fromQuery = Object.fromEntries(query.entries());

  const result = RESULTS.includes(query.get("result"))
    ? query.get("result")
    : "failed";

  const sources = [fromQuery, fields || {}];

  /* `tran` is this route's own; the rest are what EPS's SDKs read. */
  const transactionId = pick(sources, [
    "tran",
    "merchantTransactionId",
    "MerchantTransactionId",
    "transactionId",
    "TransactionId",
  ]);

  let orderHash = pick(sources, ["hash", "valueA", "ValueA"]);

  const fail = (reason) =>
    redirect(
      `payment/eps/failed?hash=${encodeURIComponent(orderHash)}`
        + (reason ? `&reason=${reason}` : ""),
      request
    );

  if (result !== "success") {
    return redirect(
      `payment/eps/${result}?hash=${encodeURIComponent(orderHash)}`,
      request
    );
  }

  if (!transactionId) {
    console.error("EPS returned success with no transaction id to verify", {
      query: fromQuery,
    });

    return fail("unverified");
  }

  /*
    Asked before the order is read, because the answer is also where the order
    hash comes from when the redirect arrived without one.
  */
  const verification = await verifyEpsPayment(transactionId);

  orderHash = orderHash || String(verification?.ValueA || "");

  const order = await getOrderByHash(orderHash);

  if (!order?.id) {
    return redirect("payment/eps/failed?reason=order", request);
  }

  /* A second visit to this URL - the first one already recorded it. */
  if (String(order.payment_status).toLowerCase() === "paid") {
    return redirect(`thank-you/${orderHash}`, request);
  }

  if (!isPaymentSettled(verification, order)) {
    console.error("EPS reported success but verification did not agree", {
      transactionId,
      orderHash,
      Status: verification?.Status,
      ErrorCode: verification?.ErrorCode,
      ErrorMessage: verification?.ErrorMessage,
      TotalAmount: verification?.TotalAmount,
      due: order?.total_amount,
    });

    return fail("unverified");
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
    console.error("EPS payment taken but the order was not updated", {
      transactionId,
      orderHash,
      error: error?.message,
    });
  }

  return redirect(`thank-you/${orderHash}`, request);
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
