import { NextResponse } from "next/server";

import {
  completeBkashPayment,
  getOrderByHash,
  isPaymentSettled,
  markOrderPaid,
} from "@/lib/bkash-server";

/**
 * Where bKash sends the buyer back to.
 *
 * The order is named in the path, which this code wrote when it created the
 * payment, and bKash adds `paymentID` and `status` to the query string. Anyone
 * can visit this URL, so those two are only a reason to ask: whether the money
 * was taken, and for this order, is settled by bKash's own record.
 *
 * Success ends on the usual thank-you page; anything else on a short page
 * saying what happened, with the order left unpaid and still payable.
 */

function storefrontUrl(path, request) {
  const base = String(
    process.env.NEXT_PUBLIC_STORE_URL || process.env.NEXT_PUBLIC_APP_URL || ""
  ).replace(/\/+$/, "");

  return new URL(path, base ? `${base}/` : request.nextUrl.origin);
}

function redirect(path, request) {
  return NextResponse.redirect(storefrontUrl(path, request), 303);
}

export async function GET(request, { params }) {
  const { hash } = await params;
  const query = request.nextUrl.searchParams;

  const paymentID = query.get("paymentID");
  const status = query.get("status");
  const orderHash = encodeURIComponent(hash);

  if (status === "cancel") {
    return redirect(`payment/bkash/cancelled?hash=${orderHash}`, request);
  }

  if (status !== "success" || !paymentID) {
    return redirect(`payment/bkash/failed?hash=${orderHash}`, request);
  }

  let order;
  let record;

  try {
    order = await getOrderByHash(hash);

    if (!order?.id) {
      return redirect("payment/bkash/failed?reason=order", request);
    }

    /* A second visit to this URL - the first one already recorded it. */
    if (String(order.payment_status).toLowerCase() === "paid") {
      return redirect(`thank-you/${orderHash}`, request);
    }

    record = await completeBkashPayment(paymentID);
  } catch (error) {
    console.error("bKash callback could not settle a payment", {
      paymentID,
      orderHash: hash,
      error: error?.message,
    });

    return redirect(`payment/bkash/failed?hash=${orderHash}&reason=unverified`, request);
  }

  if (!isPaymentSettled(record, order)) {
    console.error("bKash reported success but its record did not agree", {
      paymentID,
      orderHash: hash,
      transactionStatus: record?.transactionStatus,
      amount: record?.amount,
      invoice: record?.merchantInvoiceNumber ?? record?.merchantInvoice,
      due: order?.total_amount,
    });

    return redirect(`payment/bkash/failed?hash=${orderHash}&reason=unverified`, request);
  }

  try {
    await markOrderPaid(order, { transactionId: record?.trxID || paymentID });
  } catch (error) {
    /*
      The money is taken but the order still says unpaid. Telling the buyer it
      failed would be wrong - and would invite a second payment - so they are
      sent to the thank-you page and the mismatch is left in the log for the
      store to settle.
    */
    console.error("bKash payment taken but the order was not updated", {
      paymentID,
      trxID: record?.trxID,
      orderHash: hash,
      error: error?.message,
    });
  }

  return redirect(`thank-you/${orderHash}`, request);
}
