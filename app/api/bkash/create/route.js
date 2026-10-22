import { NextResponse } from "next/server";
import { createBkashPayment } from "@/lib/bkash";

export async function POST(request) {
  try {
    const { amount, invoiceNumber } = await request.json();


    // Important: calculate/verify the cart total from your database/session.
    // Do not trust a price sent directly from the browser.
    if (!amount || Number(amount) <= 0) {
      return NextResponse.json(
        { error: "Invalid payment amount" },
        { status: 400 }
      );
    }

    const payment = await createBkashPayment({
      amount: Number(amount).toFixed(2),
      invoiceNumber:
        invoiceNumber || `ORDER-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    });

    return NextResponse.json({
      paymentID: payment.paymentID,
      bkashURL: payment.bkashURL,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to start payment" },
      { status: 500 }
    );
  }
}