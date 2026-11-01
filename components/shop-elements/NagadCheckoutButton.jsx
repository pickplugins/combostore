"use client";

import { useState } from "react";

/**
 * The Nagad button at checkout.
 *
 * Nagad hosts the payment itself, so this is a redirect and not a widget: the
 * order is created first, the server asks Nagad for a payment URL against that
 * order, and the buyer leaves for it. They come back to /api/nagad/callback,
 * which verifies the payment and marks the order paid - nothing on this side of
 * the redirect decides anything about money.
 *
 * Props:
 *   total       Order total, for the amount on the button.
 *   ensureOrder async () => ({ order_id, order_hash }) - creates or reuses the order.
 *   onError     (message) => void - for a notification; the button shows its own text too.
 */
export default function NagadCheckoutButton({ total, ensureOrder, onError }) {
  const [status, setStatus] = useState("ready"); // ready | starting | redirecting
  const [message, setMessage] = useState("");

  const amount = Number(total);
  const payable = Number.isFinite(amount) && amount > 0;
  const busy = status !== "ready";

  async function payWithNagad() {
    if (busy || !payable) {
      return;
    }

    setStatus("starting");
    setMessage("");

    try {
      const order = await ensureOrder();

      if (!order?.order_hash) {
        throw new Error("The order could not be prepared.");
      }

      const response = await fetch("/api/nagad/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_hash: order.order_hash }),
      });

      const data = await response.json().catch(() => null);

      /* Already paid - send them to the order rather than charge twice. */
      if (response.status === 409) {
        window.location.href = `/thank-you/${order.order_hash}`;

        return;
      }

      if (!response.ok || !data?.paymentUrl) {
        throw new Error(data?.message || "Could not start the Nagad payment.");
      }

      setStatus("redirecting");

      /*
        The cart cannot be emptied here - the payment has not happened yet, and
        the buyer may well come back unpaid. This marker is what lets the
        thank-you page empty it on the way back, and only for the order this
        browser was actually sent off to pay for.
      */
      try {
        window.sessionStorage.setItem("nagad:pending_order", order.order_hash);
      } catch (error) {
        /* Private mode: the cart survives the trip, which is harmless. */
      }

      /* A top-level navigation: the gateway owns the page from here. */
      window.location.href = data.paymentUrl;
    } catch (error) {
      setStatus("ready");
      setMessage(error.message);
      onError?.(error.message);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        role="button"
        tabIndex={0}
        onClick={payWithNagad}
        onKeyDown={(ev) => {
          if (ev.key === "Enter" || ev.key === " ") {
            payWithNagad();
          }
        }}
        aria-disabled={busy || !payable}
        className={`w-full rounded-lg px-4 py-3 text-center font-semibold text-white ${
          busy || !payable
            ? "cursor-not-allowed bg-gray-400"
            : "cursor-pointer bg-orange-500"
        }`}
      >
        {status === "starting" && "Preparing secure payment…"}
        {status === "redirecting" && "Taking you to Nagad…"}
        {status === "ready"
          && (payable
            ? `Pay ৳${amount.toFixed(2)} with Nagad`
            : "Nothing to pay")}
      </div>

      <div className="text-xs text-gray-500">
        You will be taken to Nagad to pay, and brought back here afterwards.
      </div>

      {message && <div className="text-sm text-red-500">{message}</div>}
    </div>
  );
}
