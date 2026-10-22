"use client";

import { useState } from "react";

export default function NagadCheckoutButton({ cartItems, totalAmount }) {
  const [loading, setLoading] = useState(false);

  async function handleNagadPayment() {
    try {
      setLoading(true);

      const orderId = `ORDER-${Date.now()}`;

      const response = await fetch("/api/payments/nagad/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          amount: totalAmount,
          items: cartItems,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not start Nagad payment.");
      }

      const popupWidth = 500;
      const popupHeight = 720;

      const left = window.screenX + (window.outerWidth - popupWidth) / 2;
      const top = window.screenY + (window.outerHeight - popupHeight) / 2;

      const paymentPopup = window.open(
        data.paymentUrl,
        "nagad-payment",
        `width=${popupWidth},height=${popupHeight},left=${left},top=${top},popup=yes`
      );

      if (!paymentPopup) {
        throw new Error("Popup was blocked. Please allow popups and try again.");
      }

      const receivePaymentResult = async (event) => {
        if (event.origin !== window.location.origin) return;

        if (event.data?.type === "NAGAD_PAYMENT_SUCCESS") {
          window.removeEventListener("message", receivePaymentResult);

          // Refresh cart/order state here
          // Example: clearCart(), router.push(`/order-success/${orderId}`)

          alert("Payment successful!");
        }

        if (event.data?.type === "NAGAD_PAYMENT_FAILED") {
          window.removeEventListener("message", receivePaymentResult);

          alert("Payment was cancelled or failed.");
        }
      };

      window.addEventListener("message", receivePaymentResult);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleNagadPayment}
      disabled={loading || !totalAmount}
      className="w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Opening Nagad..." : "Pay with Nagad"}
    </button>
  );
}