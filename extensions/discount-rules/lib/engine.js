/**
 * The rule engine.
 *
 * Pure: it takes rules and a snapshot of the cart and returns what the cart
 * should cost. It reads no store and touches no DOM, so the same function
 * backs the live cart, the dashboard simulator and any test.
 *
 * The result is a *breakdown*, not a number. A customer who cannot see which
 * rule took which amount off assumes the total is wrong, and a merchant
 * debugging an overlapping pair of rules needs the same list.
 */

import { ACTIONS, CONDITIONS, toNumber, lineTotal } from "./schema";

/**
 * Build the context the conditions read from the pieces the cart has.
 *
 * Totals are derived here rather than taken from the caller: the cart keeps
 * its own `cartTotal` in a store that updates in an effect, so reading it
 * would evaluate one render behind whenever a quantity changed.
 */
export function buildContext({ items, shippingCost, shippingMethod, coupon, customer, now } = {}) {
	const list = Array.isArray(items) ? items : [];

	let subtotal = 0;
	let quantity = 0;

	for (const item of list) {
		subtotal += lineTotal(item);
		quantity += toNumber(item?.quantity, 1);
	}

	return {
		items: list,
		subtotal,
		quantity,
		lineCount: list.length,
		shippingCost: toNumber(shippingCost),
		shippingMethod: shippingMethod ?? null,
		coupon: coupon ?? { applied: false, code: "" },
		customer: customer ?? { loggedIn: false, roles: [], ordersCount: null },
		now: now instanceof Date ? now : new Date(),
	};
}

/**
 * Does a rule's condition list pass?
 *
 * Returns the per-condition results too, because the builder shows a tick or a
 * cross beside each row against the simulated cart - which is the only way a
 * merchant can tell *which* clause is keeping a rule from firing.
 */
export function evaluateConditions(rule, context) {
	const conditions = Array.isArray(rule?.conditions) ? rule.conditions : [];

	const results = conditions.map((condition) => {
		const def = CONDITIONS[condition?.type];
		if (!def) return { condition, passed: false, unknown: true };
		try {
			return { condition, passed: Boolean(def.evaluate(condition, context)) };
		} catch (e) {
			/* A condition that throws is an authoring bug in this catalogue, not
			   something the shopper should see as a broken cart. It fails, the
			   rule does not fire, and the reason is carried in the result. */
			return { condition, passed: false, error: e?.message ?? String(e) };
		}
	});

	/* No conditions means "always", which is how a storewide sale is written. */
	const passed = conditions.length === 0
		? true
		: rule?.match === "any"
			? results.some((r) => r.passed)
			: results.every((r) => r.passed);

	return { passed, results };
}

const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

/**
 * Run every rule over a cart.
 *
 * Order is `priority` ascending, and it matters for two reasons: an exclusive
 * rule stops the ones after it, and with compounding on each rule discounts
 * what the previous ones left. Ties fall back to the order they were written,
 * so a list the merchant has arranged by hand behaves the way it reads.
 *
 * @param rules   the rule list, in any order
 * @param context from buildContext()
 * @param options { compound, maxTotalDiscount }
 */
export function evaluateRules(rules, context, options = {}) {
	const ctx = context ?? buildContext();
	const compound = options.compound === true;
	const maxTotalDiscount = toNumber(options.maxTotalDiscount);

	const ordered = (Array.isArray(rules) ? rules : [])
		.map((rule, index) => ({ rule, index }))
		.sort((a, b) => (toNumber(a.rule?.priority, 10) - toNumber(b.rule?.priority, 10)) || (a.index - b.index));

	const lines = [];
	const skipped = [];
	let discountTotal = 0;
	let freeShipping = false;
	let stopped = false;

	for (const { rule } of ordered) {
		if (stopped) {
			skipped.push({ rule, reason: "an earlier exclusive rule stopped the stack" });
			continue;
		}
		if (rule?.enabled === false) {
			skipped.push({ rule, reason: "disabled" });
			continue;
		}

		const { passed, results } = evaluateConditions(rule, ctx);
		if (!passed) {
			skipped.push({ rule, reason: "conditions not met", results });
			continue;
		}

		const action = rule?.action ?? {};
		const def = ACTIONS[action?.type];
		if (!def) {
			skipped.push({ rule, reason: `unknown action "${action?.type}"` });
			continue;
		}

		/* What this rule discounts against. Without compounding every rule sees
		   the same original subtotal, so two 10% rules take 20% and not 19% -
		   the arithmetic a merchant expects from a list of offers, and the one
		   that does not change meaning when a rule is reordered. */
		const base = Math.max(0, compound ? ctx.subtotal - discountTotal : ctx.subtotal);

		let outcome;
		try {
			outcome = def.apply(action, ctx, base) ?? {};
		} catch (e) {
			skipped.push({ rule, reason: `action failed: ${e?.message ?? String(e)}` });
			continue;
		}

		/* Never more than is left to discount: a cart cannot go negative, and a
		   free-shipping rule contributes nothing here by design. */
		const headroom = Math.max(0, ctx.subtotal - discountTotal);
		let amount = Math.max(0, Math.min(toNumber(outcome.amount), headroom));

		if (maxTotalDiscount > 0) {
			amount = Math.min(amount, Math.max(0, maxTotalDiscount - discountTotal));
		}

		const gotFreeShipping = outcome.freeShipping === true;

		/* A rule that ends up taking nothing off is reported as skipped rather
		   than shown to the shopper as a 0 line. The merchant still sees it in
		   the simulator, with the note the action returned. */
		if (amount <= 0 && !gotFreeShipping) {
			skipped.push({ rule, reason: outcome.note ? `no discount (${outcome.note})` : "no discount" });
			continue;
		}

		discountTotal += amount;
		if (gotFreeShipping) freeShipping = true;

		lines.push({
			ruleId: rule?.id,
			title: rule?.title || "Discount",
			label: rule?.cartLabel || rule?.title || "Discount",
			actionType: action.type,
			amount: round2(amount),
			freeShipping: gotFreeShipping,
			note: outcome.note ?? "",
			conditions: results,
		});

		if (rule?.exclusive === true) stopped = true;
	}

	const shipping = freeShipping ? 0 : toNumber(ctx.shippingCost);

	return {
		subtotal: round2(ctx.subtotal),
		shipping: round2(shipping),
		shippingWaived: freeShipping ? round2(toNumber(ctx.shippingCost)) : 0,
		discountTotal: round2(discountTotal),
		freeShipping,
		/* The payable figure *this extension* is responsible for. Any coupon the
		   core cart applies is subtracted by the core cart on top of it; the
		   engine deliberately does not touch the coupon, so the two discount
		   systems stay independent and a coupon can still be removed. */
		total: round2(Math.max(0, ctx.subtotal - discountTotal + shipping)),
		lines,
		skipped,
	};
}

/** An empty result, for a cart with nothing in it or rules not loaded yet. */
export function emptyResult(subtotal = 0, shipping = 0) {
	return {
		subtotal: round2(subtotal),
		shipping: round2(shipping),
		shippingWaived: 0,
		discountTotal: 0,
		freeShipping: false,
		total: round2(subtotal + shipping),
		lines: [],
		skipped: [],
	};
}
