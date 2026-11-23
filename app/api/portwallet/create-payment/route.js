import { NextResponse } from "next/server";

import {
  createPortWalletPayment,
  getOrderByHash,
  resolvePortWalletConfig,
} from "@/lib/portwallet-server";

/**
 * Start a PortWallet payment for an order that already exists. The browser
 * sends an order hash and nothing else; the amount and the customer are read
 * from the order row.
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const orderHash = String(body?.order_hash || "").trim();

    if (!(await resolvePortWalletConfig()).configured) {
      return NextResponse.json(
        { message: "PortWallet is not configured for this store." },
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

    const payment = await createPortWalletPayment(order, orderHash);

    return NextResponse.json({
      paymentUrl: payment.paymentUrl,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    console.error("PortWallet create-payment failed", error);

    return NextResponse.json(
      { message: error?.message || "Payment initialization failed" },
      { status: 500 }
    );
  }
}
