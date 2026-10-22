import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const paymentRefId = searchParams.get("payment_ref_id");
    const orderId = searchParams.get("order_id");

    if (!paymentRefId || !orderId) {
      return NextResponse.json(
        { message: "Missing payment reference." },
        { status: 400 }
      );
    }

    /*
      Call Nagad's official verify endpoint here.

      Important:
      Do not trust only callback query parameters.
      Ask Nagad's server whether this transaction is successful.
    */

    const verifyResponse = await fetch(
      process.env.NAGAD_VERIFY_PAYMENT_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentRefId,
          orderId,
          merchantId: process.env.NAGAD_MERCHANT_ID,
        }),
      }
    );

    const verifyData = await verifyResponse.json();

    const isPaid =
      verifyResponse.ok &&
      verifyData.status === "Success";

    if (!isPaid) {
      return NextResponse.json(
        { success: false, message: "Nagad payment was not successful." },
        { status: 400 }
      );
    }

    // Update your database only after successful server-side verification.
    // await db.order.update({
    //   where: { orderId },
    //   data: {
    //     status: "PAID",
    //     transactionId: verifyData.issuerPaymentRefNo,
    //   },
    // });

    return NextResponse.json({
      success: true,
      orderId,
      transactionId: verifyData.issuerPaymentRefNo || paymentRefId,
    });
  } catch (error) {

    return NextResponse.json(
      { success: false, message: "Payment verification failed." },
      { status: 500 }
    );
  }
}