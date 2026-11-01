import { NextResponse } from "next/server";

import {
  createNagadPayment,
  getOrderByHash,
  resolveNagadConfig,
} from "@/lib/nagad-server";

/** The buyer's IPv4 address, which Nagad asks for, if the request carries one. */
function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const address = String(forwarded || request.headers.get("x-real-ip") || "")
    .replace(/^::ffff:/, "");

  return /^\d{1,3}(\.\d{1,3}){3}$/.test(address) ? address : undefined;
}

/**
 * Start a Nagad payment for an order that already exists.
 *
 * The browser sends an order hash and nothing else. The amount is read from the
 * order row, so there is no total here to tamper with.
 */
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const orderHash = String(body?.order_hash || "").trim();

    if (!(await resolveNagadConfig()).configured) {
      return NextResponse.json(
        { message: "Nagad is not configured for this store." },
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

    /* Already settled - sending them to Nagad would charge twice. */
    if (String(order.payment_status).toLowerCase() === "paid") {
      return NextResponse.json(
        { message: "This order has already been paid.", alreadyPaid: true },
        { status: 409 }
      );
    }

    const payment = await createNagadPayment(order, orderHash, clientIp(request));

    return NextResponse.json({ paymentUrl: payment.paymentUrl });
  } catch (error) {
    console.error("Nagad create failed", error);

    return NextResponse.json(
      { message: error?.message || "Unable to start payment" },
      { status: 500 }
    );
  }
}
