/**
 * Rule shapes: the blank one the New button makes, and a few worked examples.
 *
 * The starter rules are not decoration. A rule builder with an empty list and
 * fourteen condition types is a blank page; one filled example of each common
 * offer is how a merchant learns what the thing does, and they are written to
 * be edited rather than used as-is.
 */

import { ACTIONS, CONDITIONS } from "./schema";

/* `crypto.randomUUID` is unavailable over plain http on some hosts and in
   older Safari, and a rule with no id is a rule the list cannot key or
   delete - so there is a fallback rather than a crash. */
function newId() {
	const rand = typeof crypto !== "undefined" && crypto.randomUUID
		? crypto.randomUUID().slice(0, 8)
		: Math.random().toString(36).slice(2, 10);
	return `rule_${rand}`;
}

export function blankRule() {
	return {
		id: newId(),
		title: "New discount rule",
		/* What the shopper reads in the cart. Separate from `title`, which is
		   the merchant's own name for the rule and often says things like
		   "clearance - oct only" that no customer should see. */
		cartLabel: "",
		enabled: true,
		priority: 10,
		/* A rule that stops the stack. Off by default, because a merchant who
		   has not thought about stacking is better served by every qualifying
		   offer applying than by the first one silently winning. */
		exclusive: false,
		match: "all",
		conditions: [],
		action: { type: "cart_percent", ...ACTIONS.cart_percent.defaults },
	};
}

/** A condition prefilled with its type's defaults, as the Add button makes it. */
export function blankCondition(type) {
	const def = CONDITIONS[type];
	return {
		id: `cond_${Math.random().toString(36).slice(2, 8)}`,
		type,
		...(def?.defaults ?? {}),
	};
}

/** An action prefilled with its type's defaults, for when the type changes. */
export function blankAction(type) {
	const def = ACTIONS[type];
	return { type, ...(def?.defaults ?? {}) };
}

export const STARTER_RULES = [

	{
		id: "rule_spend_save",
		title: "Spend 2000, save 10%",
		cartLabel: "10% off orders over 2000",
		enabled: true,
		priority: 10,
		exclusive: false,
		match: "all",
		conditions: [
			{ id: "c1", type: "cart_subtotal", operator: "gte", value: 2000 },
		],
		action: { type: "cart_percent", value: 10, maxDiscount: 500 },
	},

	{
		id: "rule_free_shipping",
		title: "Free shipping over 1500",
		cartLabel: "Free delivery",
		enabled: true,
		priority: 20,
		exclusive: false,
		match: "all",
		conditions: [
			{ id: "c1", type: "cart_subtotal", operator: "gte", value: 1500 },
		],
		action: { type: "free_shipping" },
	},

	{
		id: "rule_bulk",
		title: "Buy more, pay less",
		cartLabel: "Bulk discount",
		enabled: true,
		priority: 30,
		exclusive: false,
		match: "all",
		conditions: [
			{ id: "c1", type: "cart_quantity", operator: "gte", value: 3 },
		],
		action: {
			type: "bulk_tier",
			target: { mode: "all" },
			tiers: [
				{ minQty: 3, kind: "percent", value: 5 },
				{ minQty: 6, kind: "percent", value: 10 },
				{ minQty: 12, kind: "percent", value: 15 },
			],
		},
	},

	{
		id: "rule_bogo",
		title: "Buy 2 get 1 free",
		cartLabel: "Buy 2 get 1 free",
		enabled: false,
		priority: 40,
		exclusive: false,
		match: "all",
		conditions: [
			{ id: "c1", type: "categories_in_cart", operator: "any", categories: [] },
		],
		action: { type: "buy_x_get_y", target: { mode: "categories", categories: [] }, buyQty: 2, getQty: 1, value: 100, maxSets: 0 },
	},

	{
		id: "rule_weekend",
		title: "Weekend flash sale",
		cartLabel: "Weekend sale",
		enabled: false,
		priority: 50,
		/* Exclusive: a flash sale is the offer, not one more on the pile. */
		exclusive: true,
		match: "all",
		conditions: [
			{ id: "c1", type: "day_of_week", operator: "any", days: [5, 6] },
			{ id: "c2", type: "cart_subtotal", operator: "gte", value: 500 },
		],
		action: { type: "cart_percent", value: 15, maxDiscount: 0 },
	},

	{
		id: "rule_first_order",
		title: "First order welcome",
		cartLabel: "Welcome discount",
		enabled: false,
		priority: 60,
		exclusive: false,
		match: "all",
		conditions: [
			{ id: "c1", type: "customer_logged_in", operator: "is", value: true },
			{ id: "c2", type: "customer_orders", operator: "eq", value: 0 },
		],
		action: { type: "cart_fixed", value: 150 },
	},
];
