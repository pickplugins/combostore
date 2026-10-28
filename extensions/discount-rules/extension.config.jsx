import React from "react";
import { IconRosetteDiscount } from "@tabler/icons-react";

import DiscountRules from "./pages/DiscountRules";
import DiscountRulesRuntime from "./lib/DiscountRulesRuntime";
import CartDiscounts from "./elements/CartDiscounts";
import CartDiscountsOptions from "./elements/CartDiscountsOptions";
import cartDiscountsLayouts from "./elements/cartDiscountsLayouts";

/**
 * Discount Rules.
 *
 * Automatic cart discounts: a merchant writes rules in the dashboard, and a
 * cart that satisfies one is priced down without the shopper entering
 * anything. It is deliberately separate from the coupon the core cart already
 * has - a coupon is something the shopper types, a rule is something the cart
 * qualifies for - and the two stack, each reported on its own line.
 *
 * The file is .jsx because `nav[].icon` and `elements[].definition.icon` are
 * rendered elements, matching how core writes them in Sidebar.jsx's NAVS and
 * in ElementsDefinition.js.
 */
const manifest = {

	id: "discount-rules",
	name: "Discount Rules",
	version: "1.0.0",
	description: "Conditional discounts applied to the cart automatically - spend thresholds, bulk tiers, buy X get Y, free shipping and scheduled offers.",

	enabled: false,

	/*
		`parent` names a core group from Sidebar.jsx's NAVS; an entry whose
		parent is not found is dropped, because ToggleNavs only pushes a child
		when `map[item.parent]` exists.

		`value` has to be unique across core and every other extension, since
		the nav tree is keyed on it, and `roles` is required - ToggleNavs calls
		`.includes` on it with no guard.
	*/
	nav: [
		{
			label: "Discount Rules",
			value: "discount-rules",
			icon: <IconRosetteDiscount />,
			parent: "store",
			roles: ["administrator", "store_manager"],
		},
	],

	/*
		`/dashboard/discount-rules`. A file under app/dashboard/ would win over
		this, because Next matches the static route before the catch-all - so
		the slug is one core is unlikely to take.
	*/
	routes: {
		"discount-rules": DiscountRules,
	},

	/*
		Mounted once per page by components/ExtensionsRuntime.jsx and renders
		nothing. It is what makes the rules apply: the cart is priced wherever
		a cart exists, rather than only on a page where the merchant happened
		to place the Cart Discounts block.
	*/
	runtime: DiscountRulesRuntime,

	/*
		The cart-side readout. `definition` is the same shape as an entry in
		ElementsDefinition.js, including the `ai` block the layout prompt reads
		and the `cssSelectors` the options panel exposes.

		Grouped under `shop`, which is where the cart and checkout blocks live
		and the only place a merchant would look for this one.
	*/
	elements: [
		{
			definition: {
				type: "cartDiscounts",
				label: "Cart Discounts",
				icon: <IconRosetteDiscount />,
				description: "Lists the discount rules a cart has qualified for, and what each one takes off.",
				ai: {
					purpose: "Show the shopper which automatic discounts their cart has earned.",
					useFor: ["Cart summary", "Checkout summary", "Savings breakdown"],
					keywords: ["discount", "savings", "offer", "promotion", "deal", "cart total"],
					rules: [
						"Place inside a cart or checkout summary, above the total.",
						"It renders nothing when no rule applies, so it is safe to leave in place.",
						"One per page - two copies list the same discounts twice.",
					],
				},
				options: {
					heading: "Discounts applied",
					totalLabel: "Total savings",
					freeShippingText: "Free delivery",
					emptyText: "",
					showTotal: true,
					icon: "IconRosetteDiscount",
					iconSize: 14,
				},
				/* Declaring every selector the renderer reads is what makes them
					 editable: the options panel lists these keys. */
				cssSelectors: {
					'*': { classes: 'flex flex-col gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3' },
					'heading': { classes: 'flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-green-700' },
					'empty': { classes: 'text-xs text-green-700' },
					'line': { classes: 'flex items-center justify-between gap-3' },
					'lineLabel': { classes: 'text-sm text-green-900' },
					'lineAmount': { classes: 'text-sm font-semibold text-green-700 tabular-nums' },
					'total': { classes: 'flex items-center justify-between gap-3 border-t border-green-200 pt-2' },
					'totalLabel': { classes: 'text-sm font-semibold text-green-900' },
					'totalAmount': { classes: 'text-sm font-bold text-green-700 tabular-nums' },
				},
				/* Must be one of ElementsList's groups or the tile never renders. */
				group: ['shop'],
			},
			render: CartDiscounts,
			options: CartDiscountsOptions,
			layouts: cartDiscountsLayouts,
		},
	],
};

export default manifest;
