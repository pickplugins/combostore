"use client";

import { useEffect, useState } from "react";

export default function NagadCallbackPage() {
  const [message, setMessage] = useState("Verifying your payment...");

  useEffect(() => {
    async function verifyPayment() {
      const queryString = window.location.search;

      try {
        const response = await fetch(
          `/api/payments/nagad/verify${queryString}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Payment verification failed.");
        }

        if (window.opener) {
          window.opener.postMessage(
            {
              type: "NAGAD_PAYMENT_SUCCESS",
              orderId: data.orderId,
              transactionId: data.transactionId,
            },
            window.location.origin
          );
        }

        setMessage("Payment successful. This window will close now.");

        setTimeout(() => {
          window.close();
        }, 1200);
      } catch (error) {
        if (window.opener) {
          window.opener.postMessage(
            {
              type: "NAGAD_PAYMENT_FAILED",
              message: error.message,
            },
            window.location.origin
          );
        }

        setMessage("Payment could not be verified.");
      }
    }

    verifyPayment();
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-gray-50 p-6">
      <div className="rounded-xl bg-white p-6 text-center shadow">
        <h1 className="text-xl font-bold">Nagad Payment</h1>
        <p className="mt-3 text-gray-600">{message}</p>
      </div>
    </main>
  );
}