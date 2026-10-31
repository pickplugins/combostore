import { NextResponse } from "next/server";

import {
  createStripeSession,
  getOrderByHash,
  resolveStripeConfig,
} from "@/lib/stripe-server";

/**
 * Start a Stripe Checkout payment for an order that already exists.
 *
 * The browser sends an order hash and nothing else. The amount, the currency
 * and the customer are read from the order row, so there is no total here to
 * tamper with - the same rule aamarPay and PayPal follow.
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const orderHash = String(body?.order_hash || "").trim();

    /* Resolved once and passed down, so the whole attempt uses one set of
       credentials even if the dashboard is saved mid-request. */
    const config = await resolveStripeConfig();

    if (!config.configured) {
      return NextResponse.json(
        { message: "Stripe is not configured for this store." },
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

    /* Already settled - sending them to Stripe would charge twice. */
    if (String(order.payment_status).toLowerCase() === "paid") {
      return NextResponse.json(
        { message: "This order has already been paid.", alreadyPaid: true },
        { status: 409 }
      );
    }

    const payment = await createStripeSession(order, orderHash, config);

    return NextResponse.json({
      paymentUrl: payment.paymentUrl,
      sessionId: payment.sessionId,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    console.error("Stripe create-payment failed", error);

    return NextResponse.json(
      { message: error?.message || "Payment initialization failed" },
      { status: 500 }
    );
  }
}
