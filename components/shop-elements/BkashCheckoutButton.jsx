"use client";

import { useEffect, useState } from "react";

export default function BkashCheckoutButton({ total, orderId, onPaymentSuccess }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function handleBkashResult(event) {
      // Only accept messages from your own site.
      if (event.origin !== window.location.origin) return;

      const result = event.data;

      if (result?.type !== "BKASH_PAYMENT_RESULT") return;

      setLoading(false);

      if (result.status === "success") {


        onPaymentSuccess?.(result);

        // Example:
        // clearCart();
        // closeSlideCart();
        // router.push(`/order-success?paymentID=${result.paymentID}`);
      } else {
        alert(result.message || "bKash payment was not completed.");
      }
    }

    window.addEventListener("message", handleBkashResult);

    return () => {
      window.removeEventListener("message", handleBkashResult);
    };
  }, [onPaymentSuccess]);

  async function payWithBkash() {
    setLoading(true);

    // Open first to avoid browser popup blockers.
    const popup = window.open(
      "",
      "bkashPayment",
      "width=500,height=720,scrollbars=yes,resizable=yes"
    );

    if (!popup) {
      setLoading(false);
      alert("Please allow popups to continue with bKash.");
      return;
    }

    popup.document.write("<p>Opening bKash payment...</p>");

    try {
      const response = await fetch("/api/bkash/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
          invoiceNumber: orderId,
        }),
      });

      const data = await response.json();




      if (!response.ok) {
        throw new Error(data.error || "Could not start bKash payment");
      }



      //popup.location.href = data.bkashURL;
    } catch (error) {
      popup.close();
      setLoading(false);
      alert(error.message || "Unable to start bKash payment.");
    }
  }

  return (
    <div
      type="button"
      onClick={payWithBkash}
      disabled={loading || Number(total) <= 0}
      className="w-full rounded-lg text-center cursor-pointer bg-pink-600 px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Opening bKash..." : `Pay ৳${Number(total).toFixed(2)} with bKash`}
    </div>
  );
}