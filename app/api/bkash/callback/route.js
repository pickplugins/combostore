import { executeBkashPayment } from "@/lib/bkash";

function popupPage({ status, message, paymentID }) {
  const safeStatus = JSON.stringify(status);
  const safeMessage = JSON.stringify(message);
  const safePaymentID = JSON.stringify(paymentID || "");

  return new Response(
    `<!doctype html>
    <html>
      <head>
        <title>bKash Payment</title>
      </head>
      <body>
        <script>
          const result = {
            type: "BKASH_PAYMENT_RESULT",
            status: ${safeStatus},
            message: ${safeMessage},
            paymentID: ${safePaymentID}
          };

          if (window.opener) {
            window.opener.postMessage(result, window.location.origin);
          }

          window.close();
        </script>

        <p>${message}</p>
      </body>
    </html>`,
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  );
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const paymentID = searchParams.get("paymentID");
  const status = searchParams.get("status");

  if (status === "success" && paymentID) {
    try {
      const result = await executeBkashPayment(paymentID);

      // Save result to DB here.
      // Example: update order status using result.merchantInvoiceNumber.

      if (result.transactionStatus === "Completed") {
        return popupPage({
          status: "success",
          message: "Payment completed successfully.",
          paymentID,
        });
      }

      return popupPage({
        status: "failed",
        message: result.statusMessage || "Payment was not completed.",
        paymentID,
      });
    } catch (error) {
      return popupPage({
        status: "failed",
        message: error.message || "Payment verification failed.",
        paymentID,
      });
    }
  }

  if (status === "cancel") {
    return popupPage({
      status: "cancelled",
      message: "Payment was cancelled.",
      paymentID,
    });
  }

  return popupPage({
    status: "failed",
    message: "Payment failed or was declined.",
    paymentID,
  });
}