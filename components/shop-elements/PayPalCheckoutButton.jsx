"use client";

import { useEffect, useRef, useState } from "react";

import {
	loadPayPalSdk,
	createPayPalOrder,
	capturePayPalOrder,
	paypalAmountPreview,
} from "../../lib/paypal";

/**
 * The PayPal buttons at checkout.
 *
 * The buyer stays on the store: the SDK renders PayPal's own buttons, and the
 * two server routes do the rest. The order has to exist before PayPal is asked
 * for anything, because `paypal_create_order` reads the amount off the order
 * row - that is what `ensureOrder` is for, and it is called when the buyer
 * clicks, not on mount, so an order is only created for someone who means it.
 *
 * Props:
 *   serverUrl   WordPress base URL (trailing slash, as elsewhere in the app).
 *   config      From getPayPalConfig(): enabled, currency, exchange_rate, sdk_url.
 *   total       Order total in the store's currency, for the amount shown.
 *   currency    The store's currency code, e.g. "BDT".
 *   ensureOrder async () => ({ order_id, order_hash }) - creates or reuses the order.
 *   onPaid      async (result) => void - the payment is recorded server-side.
 *   onError     (message) => void - for a notification; the component shows its own text too.
 */
export default function PayPalCheckoutButton({
	serverUrl,
	config,
	total,
	currency,
	ensureOrder,
	onPaid,
	onError,
}) {
	const containerRef = useRef(null);
	const buttonsRef = useRef(null);
	const orderHashRef = useRef("");

	/*
		PayPal's Buttons are rendered once and keep the callbacks they were
		given, so anything that changes between renders - the cart total, the
		customer's details, the order created a moment ago - has to be read
		through a ref. Closing over the props directly is how this kind of
		widget ends up paying for a stale cart.
	*/
	const handlers = useRef({ ensureOrder, onPaid, onError });
	handlers.current = { ensureOrder, onPaid, onError };

	const [status, setStatus] = useState("loading"); // loading | ready | paying | paid | error
	const [message, setMessage] = useState("");

	const preview = paypalAmountPreview(total, config, currency);

	useEffect(() => {
		let cancelled = false;

		if (!config?.enabled || !config?.sdk_url) {
			setStatus("error");
			setMessage("PayPal is not available right now.");

			return undefined;
		}

		loadPayPalSdk(config.sdk_url)
			.then((paypal) => {
				if (cancelled || !containerRef.current) {
					return;
				}

				/* A remount can leave the previous render behind. */
				containerRef.current.innerHTML = "";

				const buttons = paypal.Buttons({
					style: { layout: "vertical", shape: "rect", label: "paypal" },

					createOrder: async () => {
						setMessage("");

						try {
							const order = await handlers.current.ensureOrder();

							if (!order?.order_hash) {
								throw new Error("The order could not be prepared.");
							}

							orderHashRef.current = order.order_hash;

							const started = await createPayPalOrder(serverUrl, order.order_hash);

							return started.paypal_order_id;
						} catch (error) {
							/* PayPal swallows this, so say it here as well. */
							setMessage(error.message);
							handlers.current.onError?.(error.message);

							throw error;
						}
					},

					onApprove: async (data) => {
						setStatus("paying");
						setMessage("");

						try {
							const result = await capturePayPalOrder(
								serverUrl,
								data.orderID,
								orderHashRef.current
							);

							setStatus("paid");

							await handlers.current.onPaid?.({
								...result,
								order_hash: result?.order_hash || orderHashRef.current,
							});
						} catch (error) {
							/*
								The buyer has approved by this point, so the money may
								well be taken even though this call failed. The webhook
								settles it server-side either way, which is what this
								message has to reflect - telling someone the payment
								failed when it did not is worse than telling them to
								wait.
							*/
							setStatus("error");
							setMessage(
								"We could not confirm the payment automatically. If it was taken, your order will update shortly - please do not pay again."
							);
							handlers.current.onError?.(error.message);
						}
					},

					onCancel: () => {
						setStatus("ready");
						setMessage("Payment cancelled. Your order is saved and still unpaid.");
					},

					onError: (error) => {
						setStatus("ready");
						setMessage("PayPal could not complete this payment. Please try again.");
						handlers.current.onError?.(error?.message || "PayPal reported an error.");
					},
				});

				if (!buttons.isEligible()) {
					setStatus("error");
					setMessage("PayPal is not available for this browser or region.");

					return;
				}

				buttonsRef.current = buttons;

				buttons
					.render(containerRef.current)
					.then(() => {
						if (!cancelled) {
							setStatus("ready");
						}
					})
					.catch((error) => {
						if (!cancelled) {
							setStatus("error");
							setMessage(error?.message || "The PayPal buttons could not be shown.");
						}
					});
			})
			.catch((error) => {
				if (!cancelled) {
					setStatus("error");
					setMessage(error.message);
				}
			});

		return () => {
			cancelled = true;

			try {
				buttonsRef.current?.close();
			} catch (error) {
				/* Closing a widget that is already gone is not worth reporting. */
			}
		};
	}, [config?.enabled, config?.sdk_url, serverUrl]);

	return (
		<div className="flex flex-col gap-3">
			{preview && (
				<div className="text-sm text-gray-600">
					PayPal will charge{" "}
					<span className="font-semibold text-gray-900">
						{preview.value} {preview.currency}
					</span>
					{String(currency || "").toUpperCase() !== preview.currency && (
						<> for this order, converted at checkout.</>
					)}
				</div>
			)}

			{!preview && status !== "error" && (
				<div className="text-sm text-amber-700">
					The PayPal amount for this order cannot be worked out - the store needs an
					exchange rate for {String(currency || "").toUpperCase()} to{" "}
					{String(config?.currency || "USD").toUpperCase()}.
				</div>
			)}

			{/* PayPal renders its own buttons in here. */}
			<div ref={containerRef} className={status === "paying" || status === "paid" ? "hidden" : ""} />

			{status === "loading" && (
				<div className="text-sm text-gray-500">Loading PayPal…</div>
			)}

			{status === "paying" && (
				<div className="text-sm text-gray-700">Confirming your payment…</div>
			)}

			{status === "paid" && (
				<div className="text-sm font-semibold text-green-700">
					Payment received. Taking you to your order…
				</div>
			)}

			{message && (
				<div className={`text-sm ${status === "error" ? "text-red-600" : "text-gray-600"}`}>
					{message}
				</div>
			)}
		</div>
	);
}
