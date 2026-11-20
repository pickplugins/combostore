"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useCounterStore, cartLineKey } from "../store/useCounterStore";
import { saveCheckoutDraft } from "../lib/checkoutDraft";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Lands from the abandoned-cart email (ComboStoreMarketing::abandoned_cart_context
	builds the link). Asks the public mkt_cart route for that checkout's cart -
	rebuilt at today's prices, since the server takes a cart's prices as sent -
	puts it in the cart in place of whatever is there, saves the details they
	had typed as the checkout draft, and opens the cart drawer on the home page.
*/
const RecoverCart = () => {
	const router = useRouter();
	const userDataX = useCounterStore((s) => s.userDataX);
	const [error, setError] = useState(null);
	const ran = useRef(false);

	useEffect(() => {
		if (ran.current) return;
		ran.current = true;

		const params = new URLSearchParams(window.location.search);
		const o = params.get("o");
		const s = params.get("s");
		if (!o || !s) {
			setError("This link is incomplete.");
			return;
		}

		fetch(serverUrl + "wp-json/combo-store/v2/mkt_cart", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ o, s }),
		})
			.then(async (response) => {
				let res = null;
				try { res = await response.json(); } catch { res = null; }

				if (!response.ok || res?.status !== "success" || !Array.isArray(res?.lines) || !res.lines.length) {
					setError(res?.message || "We couldn't restore this cart.");
					return;
				}

				/* Saved first: the checkout step reads the draft when it mounts. */
				if (res.customer && Object.keys(res.customer).length) {
					saveCheckoutDraft(userDataX?.id, res.customer);
				}

				/* Checkout is a step of the cart drawer, which lives in the store header
				   (this bare page has none): go home with the drawer open on their items,
				   one click from checkout with their details filled in. */
				const lines = res.lines.map((line) => ({ ...line, key: cartLineKey(line) }));
				useCounterStore.setState({ cartItems: lines, cartStep: 0, cartToggle: true });

				router.replace("/");
			})
			.catch(() => setError("We couldn't restore this cart just now. Please try again."));
	}, []);

	return (
		<div className="mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center gap-3 px-4 py-16 text-center">
			{!error ? (
				<>
					<span className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-700" aria-hidden="true" />
					<p className="text-sm text-gray-600" role="status">Restoring your cart…</p>
				</>
			) : (
				<>
					<h1 className="text-lg font-semibold text-gray-900">{error}</h1>
					<p className="text-sm text-gray-600">Your items may have sold out or changed. You can still find them in the shop.</p>
					<Link href="/shop" className="mt-2 inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700">Go to the shop</Link>
				</>
			)}
		</div>
	);
};

export default RecoverCart;
