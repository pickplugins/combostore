"use client";

import { useState } from "react";

import { stripeAmountPreview } from "../../lib/stripe";

/**
 * The Stripe button at checkout.
 *
 * Stripe Checkout hosts the card form itself, so this is a redirect and not a
 * widget: the order is created first, the server asks Stripe for a session
 * against that order, and the buyer leaves for it. They come back to
 * /api/stripe/callback, which verifies the payment with Stripe and marks the
 * order paid - nothing on this side of the redirect decides anything about
 * money, and no card number ever touches this origin.
 *
 * The hosted page is not framed on purpose: Stripe sets frame-ancestors, so
 * an iframe would show an empty box for exactly the buyers who are furthest
 * into paying. (Stripe's embedded form is a different integration, with its
 * own SDK; this is the hosted one.)
 *
 * Props:
 *   total       Order total, in the store's currency.
 *   currency    Currency symbol or code to show beside it.
 *   config      From getStripeConfig() - the charge currency and rate.
 *   orderCurrency The store's currency code, for the conversion preview.
 *   ensureOrder async () => ({ order_id, order_hash }) - creates or reuses the order.
 *   onError     (message) => void - for a notification; the button shows its own text too.
 */
export default function StripeCheckoutButton({
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

	/*
		What Stripe will actually charge. It differs from the cart total
		whenever the store prices in a currency Stripe does not take, and a
		buyer should see that figure before they commit, not after.
	*/
	const charge = stripeAmountPreview(total, config, orderCurrency);
	const converted = charge
		&& String(orderCurrency || "").toUpperCase() !== charge.currency;

	async function payWithStripe() {
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

			const response = await fetch("/api/stripe/create-payment", {
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
				throw new Error(data?.message || "Could not start the Stripe payment.");
			}

			setStatus("redirecting");

			/*
				The cart cannot be emptied here - the payment has not happened
				yet, and the buyer may well come back unpaid. This marker is
				what lets the thank-you page empty it on the way back, and only
				for the order this browser was actually sent off to pay for.
			*/
			try {
				window.sessionStorage.setItem("stripe:pending_order", order.order_hash);
			} catch (error) {
				/* Private mode: the cart survives the trip, which is harmless. */
			}

			/* A top-level navigation: Stripe owns the page from here. */
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
				onClick={payWithStripe}
				onKeyDown={(ev) => {
					if (ev.key === "Enter" || ev.key === " ") {
						payWithStripe();
					}
				}}
				aria-disabled={busy || !payable}
				className={`w-full rounded-sm px-4 py-3 text-center font-semibold text-white ${
					busy || !payable
						? "cursor-not-allowed bg-gray-400"
						: "cursor-pointer bg-[#635BFF]"
				}`}
			>
				{status === "starting" && "Preparing secure payment…"}
				{status === "redirecting" && "Taking you to Stripe…"}
				{status === "ready"
					&& (payable
						? `Pay ${currency} ${amount.toFixed(2)} by card`
						: "Nothing to pay")}
			</div>

			<div className="text-xs text-gray-500">
				You will be taken to Stripe to pay by card, and brought back here
				afterwards.
				{converted && (
					<>
						{" "}
						Your card will be charged{" "}
						<span className="font-semibold">
							{charge.currency} {charge.value}
						</span>
						.
					</>
				)}
			</div>

			{/*
				A store priced in a currency Stripe cannot take, with no rate
				set for it. The server would refuse this payment, so saying so
				here is better than a failure one click later.
			*/}
			{payable && !charge && (
				<div className="text-sm text-red-500">
					Card payment is not available for this currency. Please choose
					another payment method.
				</div>
			)}

			{message && <div className="text-sm text-red-500">{message}</div>}
		</div>
	);
}
