import { NextResponse } from "next/server";

import {
  createEpsPayment,
  getOrderByHash,
  resolveEpsConfig,
} from "@/lib/eps-server";

/**
 * Start an EPS payment for an order that already exists.
 *
 * The browser sends an order hash and nothing else. The amount and the
 * customer are read from the order row, so there is no total here to tamper
 * with - the same rule aamarPay and PayPal follow.
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const orderHash = String(body?.order_hash || "").trim();

    if (!(await resolveEpsConfig()).configured) {
      return NextResponse.json(
        { message: "EPS is not configured for this store." },
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

    /* Already settled - sending them to the gateway would charge twice. */
    if (String(order.payment_status).toLowerCase() === "paid") {
      return NextResponse.json(
        { message: "This order has already been paid.", alreadyPaid: true },
        { status: 409 }
      );
    }

    const payment = await createEpsPayment(order, orderHash);

    return NextResponse.json({
      paymentUrl: payment.paymentUrl,
      transactionId: payment.transactionId,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    console.error("EPS create-payment failed", error);

    return NextResponse.json(
      { message: error?.message || "Payment initialization failed" },
      { status: 500 }
    );
  }
}
