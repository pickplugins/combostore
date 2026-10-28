/**
 * The one hook the storefront needs.
 *
 * It wires the cart in `useCounterStore` to the engine and keeps the result in
 * `useDiscountRulesStore.result`, so a component that only wants the number -
 * the core cart totals, a checkout summary - can read it without evaluating
 * anything itself:
 *
 *     const discounts = useDiscountRulesStore((s) => s.result);
 *     totalPay = total + shipping - coupons.discountAmount - discounts.discountTotal;
 *
 * Mounting it twice is harmless: both copies compute the same result from the
 * same cart and write the same value.
 */

"use client";

import { useEffect, useMemo } from "react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useDiscountRulesStore } from "./store";
import { buildContext, evaluateRules, emptyResult } from "./engine";

export function useCartDiscounts() {

	const cartItems = useCounterStore((s) => s.cartItems);
	const shippingCost = useCounterStore((s) => s.shippingCost);
	const shippingMethod = useCounterStore((s) => s.shippingMethod);
	const coupons = useCounterStore((s) => s.coupons);
	const userDataX = useCounterStore((s) => s.userDataX);
	const settings = useCounterStore((s) => s.settings);
	const setcartDiscount = useCounterStore((s) => s.setcartDiscount);

	const rules = useDiscountRulesStore((s) => s.rules);
	const options = useDiscountRulesStore((s) => s.options);
	const hydrated = useDiscountRulesStore((s) => s.hydrated);
	const hydrateFromSettings = useDiscountRulesStore((s) => s.hydrateFromSettings);

	/*
		Rules come from the settings blob, which arrives asynchronously. Until
		it does there are no rules and the cart shows no discount, which is the
		right failing side: inventing a discount from a stale local copy and
		then withdrawing it once the server answers is worse than showing it a
		moment late.
	*/
	useEffect(() => {
		if (settings) hydrateFromSettings(settings);
	}, [settings, hydrateFromSettings]);

	/*
		`cartItems` is replaced on every change, so the memo re-runs when it
		should. The clock is deliberately *not* a dependency: a scheduled rule
		whose window closes mid-session is re-read on the shopper's next cart
		change, and ticking a timer to re-price a cart under someone would be
		worse than the few minutes of drift.
	*/
	const result = useMemo(() => {
		if (!hydrated || !Array.isArray(cartItems) || cartItems.length === 0) {
			const subtotal = (cartItems ?? []).reduce(
				(sum, i) => sum + Number(i?.price ?? 0) * Number(i?.quantity ?? 1), 0);
			return emptyResult(subtotal, shippingCost);
		}

		const context = buildContext({
			items: cartItems,
			shippingCost,
			shippingMethod,
			coupon: { applied: Boolean(coupons?.applied), code: coupons?.couponCode ?? "" },
			customer: {
				loggedIn: Boolean(userDataX?.id),
				roles: userDataX?.roles ?? [],
				/* Left null when unknown rather than guessed at 0, which is what
				   keeps a guest from passing a "no past orders" condition. */
				ordersCount: userDataX?.ordersCount ?? userDataX?.orders_count ?? null,
			},
		});

		return evaluateRules(rules, context, options);

	}, [hydrated, rules, options, cartItems, shippingCost, shippingMethod, coupons?.applied, coupons?.couponCode, userDataX]);

	/*
		Published twice, for two different readers.

		`useDiscountRulesStore.result` is the whole breakdown, for anything in
		this extension that wants the detail. `cartDiscount` in the core cart
		store is the neutral slot the cart totals read - core does not know
		this extension exists, it just prices in whatever is in that slot.

		Written from an effect, not during render: setting store state while
		rendering is what makes React warn about updating one component while
		rendering another.
	*/
	useEffect(() => {
		useDiscountRulesStore.setState({ result });

		setcartDiscount({
			amount: result.discountTotal,
			freeShipping: result.freeShipping,
			lines: result.lines,
		});
	}, [result, setcartDiscount]);

	return result;
}
