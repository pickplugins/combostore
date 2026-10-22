import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { orderId, amount, items } = await request.json();

    if (!orderId || !amount || Number(amount) <= 0) {
      return NextResponse.json(
        { message: "Invalid order information." },
        { status: 400 }
      );
    }

    // Save a PENDING order in your database first.
    // await db.order.create({
    //   data: {
    //     orderId,
    //     amount,
    //     status: "PENDING",
    //     items: JSON.stringify(items),
    //   },
    // });

    const baseUrl = process.env.NEXT_PUBLIC_STORE_URL;

    const callbackUrl = `${baseUrl}/payment/nagad/callback`;
    const cancelUrl = `${baseUrl}/payment/nagad/cancel`;

    /*
      IMPORTANT:
      Replace this sample body, endpoint, encryption, and signature logic
      with the exact Nagad merchant API specification given to you.

      Never expose:
      - NAGAD_MERCHANT_ID
      - NAGAD_MERCHANT_PRIVATE_KEY
      - NAGAD_GATEWAY_PUBLIC_KEY
    */

    const paymentPayload = {
      merchantId: process.env.NAGAD_MERCHANT_ID,
      orderId,
      amount: String(amount),
      currencyCode: "050",
      challenge: crypto.randomUUID(),
      callbackUrl,
      cancelUrl,
    };

    /*
      Example only:
      Nagad commonly requires encrypted/signed payloads.
      Your actual integration may use RSA encryption and a signature
      generated with your merchant private key.
    */

    const nagadResponse = await fetch(
      process.env.NAGAD_INITIALIZE_PAYMENT_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentPayload),
      }
    );

    const nagadData = await nagadResponse.json();

    if (!nagadResponse.ok) {

      return NextResponse.json(
        { message: "Nagad payment initialization failed." },
        { status: 500 }
      );
    }

    /*
      Change this based on Nagad’s real response.
      It may be `callBackUrl`, `paymentUrl`, or another field.
    */
    const paymentUrl = nagadData.paymentUrl;

    if (!paymentUrl) {
      return NextResponse.json(
        { message: "Nagad did not return a payment URL." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      paymentUrl,
    });
  } catch (error) {

    return NextResponse.json(
      { message: "Unable to create Nagad payment." },
      { status: 500 }
    );
  }
}