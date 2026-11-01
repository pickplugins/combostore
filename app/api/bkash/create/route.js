import { NextResponse } from "next/server";

import {
  createBkashPayment,
  getOrderByHash,
  resolveBkashConfig,
} from "@/lib/bkash-server";

/**
 * Start a bKash payment for an order that already exists.
 *
 * The browser sends an order hash and nothing else. The amount is read from the
 * order row, so there is no total here to tamper with.
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const orderHash = String(body?.order_hash || "").trim();

    if (!(await resolveBkashConfig()).configured) {
      return NextResponse.json(
        { message: "bKash is not configured for this store." },
        { status: 503 }
      );
    }

    if (!orderHash) {
      return NextResponse.json(
        { message: "No order was given to pay for." },
        { status: 400 }
      );
    }

    const order = await getOrderByHash(orderHash);

    if (!order?.id) {
      return NextResponse.json(
        { message: "That order could not be found." },
        { status: 404 }
      );
    }

    /* Already settled - sending them to bKash would charge twice. */
    if (String(order.payment_status).toLowerCase() === "paid") {
      return NextResponse.json(
        { message: "This order has already been paid.", alreadyPaid: true },
        { status: 409 }
      );
    }

    const payment = await createBkashPayment(order, orderHash);

    return NextResponse.json({
      paymentID: payment.paymentID,
      bkashURL: payment.bkashURL,
    });
  } catch (error) {
    console.error("bKash create failed", error);

    return NextResponse.json(
      { message: error?.message || "Unable to start payment" },
      { status: 500 }
    );
  }
}
