"use client";

import { useCartDiscounts } from "./useCartDiscounts";

/*
	The extension's runtime component.

	Mounted once per page by components/ExtensionsRuntime.jsx, from the root
	layout. All it does is run the hook, which prices the cart and publishes
	the result into `cartDiscount` on the core cart store.

	It lives here rather than inside the Cart Discounts block because the
	rules have to be in effect whether or not the merchant placed that block:
	the block shows the breakdown, it does not decide the price. A shopper
	reaching checkout on a layout without the block still pays the discounted
	total, and a merchant who deletes the block does not quietly turn every
	offer off.

	Renders nothing. The hook does its work in effects.
*/
const DiscountRulesRuntime = () => {
	useCartDiscounts();
	return null;
};

export default DiscountRulesRuntime;
