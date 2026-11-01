import { NextResponse } from "next/server";

import {
  getOrderByHash,
  isPaymentSettled,
  markOrderPaid,
  verifyNagadPayment,
} from "@/lib/nagad-server";

/**
 * Where Nagad sends the buyer back to.
 *
 * The order is named in the path, which this code wrote when it created the
 * payment, and Nagad adds `payment_ref_id` and `status` to the query string.
 * Anyone can visit this URL, so those are only a reason to ask: whether the
 * money was taken, and for this order, is settled by Nagad's own record. The
 * reference is checked whatever `status` says, so a payment that did go through
 * is never lost to a misleading redirect.
 *
 * Success ends on the usual thank-you page; anything else on a short page
 * saying what happened, with the order left unpaid and still payable.
 */

const CANCELLED = ["aborted", "cancelled", "canceled"];

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

  const paymentRefId = query.get("payment_ref_id");
  const status = String(query.get("status") || "").toLowerCase();
  const orderHash = encodeURIComponent(hash);

  const notPaid = CANCELLED.includes(status)
    ? `payment/nagad/cancelled?hash=${orderHash}`
    : `payment/nagad/failed?hash=${orderHash}`;

  if (!paymentRefId) {
    return redirect(notPaid, request);
  }

  let order;
  let record;

  try {
    order = await getOrderByHash(hash);

    if (!order?.id) {
      return redirect("payment/nagad/failed?reason=order", request);
    }

    /* A second visit to this URL - the first one already recorded it. */
    if (String(order.payment_status).toLowerCase() === "paid") {
      return redirect(`thank-you/${orderHash}`, request);
    }

    record = await verifyNagadPayment(paymentRefId);
  } catch (error) {
    console.error("Nagad callback could not verify a payment", {
      paymentRefId,
      orderHash: hash,
      error: error?.message,
    });

    return redirect(`payment/nagad/failed?hash=${orderHash}&reason=unverified`, request);
  }

  if (!isPaymentSettled(record, order)) {
    /* Nagad said no and its record agrees: an ordinary unpaid order. */
    if (status !== "success") {
      return redirect(notPaid, request);
    }

    console.error("Nagad reported success but its record did not agree", {
      paymentRefId,
      orderHash: hash,
      recordStatus: record?.status,
      amount: record?.amount,
      nagadOrderId: record?.orderId,
      due: order?.total_amount,
    });

    return redirect(`payment/nagad/failed?hash=${orderHash}&reason=unverified`, request);
  }

  try {
    await markOrderPaid(order, { transactionId: record.issuerPaymentRefNo });
  } catch (error) {
    /*
      The money is taken but the order still says unpaid. Telling the buyer it
      failed would be wrong - and would invite a second payment - so they are
      sent to the thank-you page and the mismatch is left in the log for the
      store to settle.
    */
    console.error("Nagad payment taken but the order was not updated", {
      paymentRefId,
      issuerPaymentRefNo: record.issuerPaymentRefNo,
      orderHash: hash,
      error: error?.message,
    });
  }

  return redirect(`thank-you/${orderHash}`, request);
}
