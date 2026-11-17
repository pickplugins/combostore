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
import { useDiscountRulesStore, parseRules, parseOptions, SETTINGS_KEY, SETTINGS_OPTIONS_KEY } from "./store";
import { buildContext, evaluateRules, emptyResult } from "./engine";

export function useCartDiscounts() {

	const cartItems = useCounterStore((s) => s.cartItems);
	const shippingCost = useCounterStore((s) => s.shippingCost);
	const cartShippingMethod = useCounterStore((s) => s.shippingMethod);
	const checkoutShippingMethod = useCounterStore((s) => s.checkoutShippingMethod);
	const coupons = useCounterStore((s) => s.coupons);
	const userDataX = useCounterStore((s) => s.userDataX);
	const settings = useCounterStore((s) => s.settings);
	const setcartDiscount = useCounterStore((s) => s.setcartDiscount);

	/*
		The published rules, read straight from the store settings - never from
		the editor's state in useDiscountRulesStore, and never from the local
		mirror. The editor shares that store, so reading it here priced the cart
		with whatever was on the Discount Rules screen, unsaved edits included,
		and with no `discountRules` key saved yet it fell back to localStorage -
		rules a shopper could write into their own browser.

		Settings arrive asynchronously. Until they do there are no rules and the
		cart shows no discount, which is the right failing side.
	*/
	const hydrated = Boolean(settings);
	const rules = useMemo(() => parseRules(settings?.[SETTINGS_KEY]), [settings]);
	const options = useMemo(() => parseOptions(settings?.[SETTINGS_OPTIONS_KEY]), [settings]);

	/*
		The method chosen at checkout once there is one, else the cart drawer's
		own free / normal / express switch. A rule's methods match either the
		checkout method's id or its name.
	*/
	const shippingMethod = checkoutShippingMethod ?? cartShippingMethod;

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
