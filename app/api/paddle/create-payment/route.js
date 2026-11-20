import { NextResponse } from "next/server";

import {
  createPaddlePayLink,
  getOrderByHash,
  resolvePaddleConfig,
} from "@/lib/paddle-server";

/**
 * Start a Paddle (Classic) payment for an order that already exists.
 *
 * The browser sends an order hash and nothing else; the amount, currency and
 * customer come from the order row, so there is no total here to tamper with.
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const orderHash = String(body?.order_hash || "").trim();

    const config = await resolvePaddleConfig();

    if (!config.configured) {
      return NextResponse.json({ message: "Paddle is not configured for this store." }, { status: 503 });
    }

    if (!orderHash) {
      return NextResponse.json({ message: "No order was given to pay for." }, { status: 400 });
    }

    const order = await getOrderByHash(orderHash);

    if (!order?.id) {
      return NextResponse.json({ message: "That order could not be found." }, { status: 404 });
    }

    if (String(order.payment_status).toLowerCase() === "paid") {
      return NextResponse.json({ message: "This order has already been paid.", alreadyPaid: true }, { status: 409 });
    }

    const payment = await createPaddlePayLink(order, orderHash, config);

    return NextResponse.json({
      paymentUrl: payment.paymentUrl,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    console.error("Paddle create-payment failed", error);

    return NextResponse.json({ message: error?.message || "Payment initialization failed" }, { status: 500 });
  }
}
