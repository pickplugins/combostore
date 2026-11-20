"use client";

import { useState } from "react";

import { paddleAmountPreview } from "../../lib/paddle";

/**
 * The Paddle (Classic) button at checkout.
 *
 * Paddle hosts the checkout, so this is a redirect, like Stripe's: the order
 * is created first, the server asks Paddle for a pay link for that order's
 * total, and the buyer leaves for it. Paddle sends them back to
 * /api/paddle/callback, which asks Paddle whether the checkout really
 * completed before marking the order paid; Paddle's signed webhook does the
 * same for a buyer who closes the tab.
 *
 * Props:
 *   total         Order total, in the store's currency.
 *   currency      Currency symbol to show beside it.
 *   config        From getPaddleConfig() - the charge currency and rate.
 *   orderCurrency The store's currency code, for the conversion preview.
 *   ensureOrder   async () => ({ order_id, order_hash }) - creates or reuses the order.
 *   onError       (message) => void - for a notification.
 */
export default function PaddleCheckoutButton({
	total,
	currency = "৳",
	config,
	orderCurrency,
	ensureOrder,
	onError,
}) {
	const [status, setStatus] = useState("ready"); // ready | starting | redirecting
	const [message, setMessage] = useState("");

	const amount = Number(total);
	const payable = Number.isFinite(amount) && amount > 0;
	const busy = status !== "ready";

	/* What Paddle will charge, which differs from the cart whenever the store prices in a currency Paddle does not take (BDT). */
	const charge = paddleAmountPreview(total, config, orderCurrency);
	const converted = charge && String(orderCurrency || "").toUpperCase() !== charge.currency;

	async function payWithPaddle() {
		if (busy || !payable || !charge) {
			return;
		}

		setStatus("starting");
		setMessage("");

		try {
			const order = await ensureOrder();

			if (!order?.order_hash) {
				throw new Error("The order could not be prepared.");
			}

			const response = await fetch("/api/paddle/create-payment", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ order_hash: order.order_hash }),
			});

			const data = await response.json().catch(() => null);

			if (response.status === 409) {
				window.location.href = `/thank-you/${order.order_hash}`;

				return;
			}

			if (!response.ok || !data?.paymentUrl) {
				throw new Error(data?.message || "Could not start the Paddle payment.");
			}

			setStatus("redirecting");

			/* Lets the thank-you page empty the cart on the way back, for this order only. */
			try {
				window.sessionStorage.setItem("paddle:pending_order", order.order_hash);
			} catch (error) {
				/* Private mode: the cart survives the trip, which is harmless. */
			}

			window.location.href = data.paymentUrl;
		} catch (error) {
			setStatus("ready");
			setMessage(error.message);
			onError?.(error.message);
		}
	}

	return (
		<div className="flex flex-col gap-2">
			<button
				type="button"
				onClick={payWithPaddle}
				disabled={busy || !payable || !charge}
				className={`w-full rounded-sm px-4 py-3 text-center font-semibold text-white ${busy || !payable || !charge
					? "cursor-not-allowed bg-gray-400"
					: "cursor-pointer bg-[#2E3A59] hover:bg-[#232c44]"
					}`}
			>
				{status === "starting" && "Preparing secure payment…"}
				{status === "redirecting" && "Taking you to Paddle…"}
				{status === "ready" && (payable ? `Pay ${currency} ${amount.toFixed(2)} with Paddle` : "Nothing to pay")}
			</button>

			<div className="text-xs text-gray-500">
				You will be taken to Paddle&apos;s secure checkout to pay by card or PayPal, and brought back here afterwards.
				{converted && (
					<>
						{" "}You will be charged{" "}
						<span className="font-semibold">{charge.currency} {charge.value}</span>
						{" "}plus any sales tax Paddle applies.
					</>
				)}
			</div>

			{payable && !charge && (
				<div className="text-sm text-red-500">
					Paddle is not available for this currency. Please choose another payment method.
				</div>
			)}

			{message && <div className="text-sm text-red-500">{message}</div>}
		</div>
	);
}
