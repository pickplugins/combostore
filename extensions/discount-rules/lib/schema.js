/**
 * The catalogue of condition and action types.
 *
 * Everything the rule builder draws comes from here: the editor has no branch
 * per condition type, it reads `CONDITIONS[type].fields` and renders those. A
 * new condition is one entry in this file plus its `evaluate`, and it appears
 * in the dropdown, gets its inputs, and starts matching - no UI edit.
 *
 * `evaluate` and `apply` live beside their metadata on purpose. Splitting them
 * into a parallel switch in engine.js is how a catalogue drifts: a type gets
 * added to one half and silently never matches in the other.
 *
 * Nothing here imports React or a store. The engine runs while the cart
 * renders and inside the dashboard simulator, so it is plain data and pure
 * functions.
 */

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

export function toNumber(value, fallback = 0) {
	const n = typeof value === "number" ? value : parseFloat(value);
	return Number.isFinite(n) ? n : fallback;
}

/* Ids arrive as numbers from the product picker and as strings from a text
   field, and `[12].includes("12")` is false. Everything is compared as a
   trimmed string so the two spellings of the same id match. */
function sameId(a, b) {
	return String(a ?? "").trim() === String(b ?? "").trim();
}

function asList(value) {
	if (Array.isArray(value)) return value;
	if (value == null || value === "") return [];
	/* A comma-separated string is what a hand-typed field gives. */
	return String(value).split(",").map((s) => s.trim()).filter(Boolean);
}

/** The category slugs on a cart line, however the line happens to carry them. */
export function itemCategories(item) {
	const raw = item?.categories ?? item?.product?.categories ?? [];
	if (!Array.isArray(raw)) return [];
	return raw.map((c) => (typeof c === "string" ? c : c?.slug ?? c?.name)).filter(Boolean);
}

/** The tag slugs on a cart line. Same shape tolerance as the categories. */
export function itemTags(item) {
	const raw = item?.tags ?? item?.product?.tags ?? [];
	if (!Array.isArray(raw)) return [];
	return raw.map((t) => (typeof t === "string" ? t : t?.slug ?? t?.name)).filter(Boolean);
}

export function lineTotal(item) {
	return toNumber(item?.price) * toNumber(item?.quantity, 1);
}

/**
 * Which cart lines a target selects.
 *
 * Shared by every item-scoped action and by the "quantity of matching items"
 * condition, so a rule that discounts a category and one that tests it agree
 * on what "in that category" means.
 */
export function selectItems(items, target) {
	const mode = target?.mode ?? "all";
	const products = asList(target?.products);
	const categories = asList(target?.categories);
	const tags = asList(target?.tags);
	const excluded = asList(target?.exclude);

	return (items ?? []).filter((item) => {
		if (excluded.some((id) => sameId(id, item?.id))) return false;

		if (mode === "all") return true;
		if (mode === "products") return products.some((id) => sameId(id, item?.id));
		if (mode === "categories") {
			const own = itemCategories(item);
			return categories.some((slug) => own.includes(slug));
		}
		if (mode === "tags") {
			const own = itemTags(item);
			return tags.some((slug) => own.includes(slug));
		}
		return false;
	});
}

/* Field descriptors the editor renders. `kind` picks the input. */
const F = {
	number: (key, label, extra = {}) => ({ key, label, kind: "number", ...extra }),
	text: (key, label, extra = {}) => ({ key, label, kind: "text", ...extra }),
	idList: (key, label, extra = {}) => ({ key, label, kind: "idList", ...extra }),
	slugList: (key, label, extra = {}) => ({ key, label, kind: "slugList", ...extra }),
	select: (key, label, options, extra = {}) => ({ key, label, kind: "select", options, ...extra }),
	toggle: (key, label, extra = {}) => ({ key, label, kind: "toggle", ...extra }),
	date: (key, label, extra = {}) => ({ key, label, kind: "date", ...extra }),
	time: (key, label, extra = {}) => ({ key, label, kind: "time", ...extra }),
	days: (key, label, extra = {}) => ({ key, label, kind: "days", ...extra }),
	target: (key, label, extra = {}) => ({ key, label, kind: "target", ...extra }),
	tiers: (key, label, extra = {}) => ({ key, label, kind: "tiers", ...extra }),
};

/* Numeric comparisons. Kept as one list because every numeric condition
   offers the same set, and `between` is the only one that needs a second
   operand - which is why the editor keys the extra input off this value. */
export const NUMBER_OPERATORS = [
	{ value: "gte", label: "is at least" },
	{ value: "gt", label: "is more than" },
	{ value: "lte", label: "is at most" },
	{ value: "lt", label: "is less than" },
	{ value: "eq", label: "equals" },
	{ value: "between", label: "is between" },
];

export function compareNumber(actual, operator, value, value2) {
	const a = toNumber(actual);
	const b = toNumber(value);
	switch (operator) {
		case "gt": return a > b;
		case "lte": return a <= b;
		case "lt": return a < b;
		case "eq": return a === b;
		case "between": {
			const hi = toNumber(value2);
			return a >= Math.min(b, hi) && a <= Math.max(b, hi);
		}
		case "gte":
		default: return a >= b;
	}
}

const SET_OPERATORS = [
	{ value: "any", label: "contains any of" },
	{ value: "all", label: "contains all of" },
	{ value: "none", label: "contains none of" },
];

function compareSet(present, operator, wanted) {
	const list = asList(wanted);
	/* An empty list is a condition still being written, not a claim about the
	   cart. Failing it would make a half-typed rule look broken; passing it
	   lets the preview show what the rest of the rule does. */
	if (list.length === 0) return true;
	const has = (v) => present.some((p) => sameId(p, v));
	if (operator === "all") return list.every(has);
	if (operator === "none") return !list.some(has);
	return list.some(has);
}

/* ------------------------------------------------------------------ */
/* conditions                                                          */
/* ------------------------------------------------------------------ */

/**
 * `evaluate(condition, context)` returns a boolean and must never throw: a
 * half-filled condition is the normal state of a rule being written, and the
 * builder previews the result live while the merchant types.
 */
export const CONDITIONS = {

	cart_subtotal: {
		label: "Cart subtotal",
		group: "Cart",
		operators: NUMBER_OPERATORS,
		fields: [F.number("value", "Amount"), F.number("value2", "and", { onlyWhen: { operator: "between" } })],
		defaults: { operator: "gte", value: 1000 },
		summary: (c, fmt) => `Subtotal ${opLabel(c.operator)} ${fmt(c.value)}${c.operator === "between" ? ` and ${fmt(c.value2)}` : ""}`,
		evaluate: (c, ctx) => compareNumber(ctx.subtotal, c.operator, c.value, c.value2),
	},

	cart_quantity: {
		label: "Total items in cart",
		group: "Cart",
		operators: NUMBER_OPERATORS,
		fields: [F.number("value", "Quantity"), F.number("value2", "and", { onlyWhen: { operator: "between" } })],
		defaults: { operator: "gte", value: 3 },
		summary: (c) => `Cart quantity ${opLabel(c.operator)} ${c.value}`,
		evaluate: (c, ctx) => compareNumber(ctx.quantity, c.operator, c.value, c.value2),
	},

	cart_lines: {
		label: "Distinct products in cart",
		group: "Cart",
		operators: NUMBER_OPERATORS,
		fields: [F.number("value", "Count"), F.number("value2", "and", { onlyWhen: { operator: "between" } })],
		defaults: { operator: "gte", value: 2 },
		summary: (c) => `Distinct products ${opLabel(c.operator)} ${c.value}`,
		evaluate: (c, ctx) => compareNumber(ctx.lineCount, c.operator, c.value, c.value2),
	},

	products_in_cart: {
		label: "Products in cart",
		group: "Products",
		operators: SET_OPERATORS,
		fields: [F.idList("products", "Products")],
		defaults: { operator: "any", products: [] },
		summary: (c) => `Cart ${setLabel(c.operator)} ${asList(c.products).length} product(s)`,
		evaluate: (c, ctx) => compareSet((ctx.items ?? []).map((i) => i?.id), c.operator, c.products),
	},

	categories_in_cart: {
		label: "Categories in cart",
		group: "Products",
		operators: SET_OPERATORS,
		fields: [F.slugList("categories", "Category slugs")],
		defaults: { operator: "any", categories: [] },
		summary: (c) => `Cart ${setLabel(c.operator)} category ${asList(c.categories).join(", ") || "-"}`,
		evaluate: (c, ctx) => compareSet((ctx.items ?? []).flatMap(itemCategories), c.operator, c.categories),
	},

	tags_in_cart: {
		label: "Tags in cart",
		group: "Products",
		operators: SET_OPERATORS,
		fields: [F.slugList("tags", "Tag slugs")],
		defaults: { operator: "any", tags: [] },
		summary: (c) => `Cart ${setLabel(c.operator)} tag ${asList(c.tags).join(", ") || "-"}`,
		evaluate: (c, ctx) => compareSet((ctx.items ?? []).flatMap(itemTags), c.operator, c.tags),
	},

	matching_quantity: {
		label: "Quantity of matching items",
		group: "Products",
		operators: NUMBER_OPERATORS,
		fields: [F.target("target", "Applies to"), F.number("value", "Quantity"), F.number("value2", "and", { onlyWhen: { operator: "between" } })],
		defaults: { operator: "gte", value: 2, target: { mode: "all" } },
		summary: (c) => `Matching quantity ${opLabel(c.operator)} ${c.value}`,
		evaluate: (c, ctx) => {
			const qty = selectItems(ctx.items, c.target).reduce((sum, i) => sum + toNumber(i?.quantity, 1), 0);
			return compareNumber(qty, c.operator, c.value, c.value2);
		},
	},

	matching_subtotal: {
		label: "Subtotal of matching items",
		group: "Products",
		operators: NUMBER_OPERATORS,
		fields: [F.target("target", "Applies to"), F.number("value", "Amount"), F.number("value2", "and", { onlyWhen: { operator: "between" } })],
		defaults: { operator: "gte", value: 500, target: { mode: "all" } },
		summary: (c, fmt) => `Matching subtotal ${opLabel(c.operator)} ${fmt(c.value)}`,
		evaluate: (c, ctx) => {
			const amount = selectItems(ctx.items, c.target).reduce((sum, i) => sum + lineTotal(i), 0);
			return compareNumber(amount, c.operator, c.value, c.value2);
		},
	},

	customer_logged_in: {
		label: "Customer is signed in",
		group: "Customer",
		operators: [{ value: "is", label: "is" }],
		fields: [F.toggle("value", "Signed in")],
		defaults: { operator: "is", value: true },
		summary: (c) => (c.value === false ? "Customer is a guest" : "Customer is signed in"),
		evaluate: (c, ctx) => Boolean(ctx.customer?.loggedIn) === (c.value !== false),
	},

	customer_role: {
		label: "Customer role",
		group: "Customer",
		operators: [
			{ value: "any", label: "is one of" },
			{ value: "none", label: "is none of" },
		],
		fields: [F.slugList("roles", "Roles")],
		defaults: { operator: "any", roles: ["customer"] },
		summary: (c) => `Role ${c.operator === "none" ? "is none of" : "is one of"} ${asList(c.roles).join(", ") || "-"}`,
		evaluate: (c, ctx) => compareSet(ctx.customer?.roles ?? [], c.operator, c.roles),
	},

	customer_orders: {
		label: "Customer's past orders",
		group: "Customer",
		operators: NUMBER_OPERATORS,
		fields: [F.number("value", "Orders"), F.number("value2", "and", { onlyWhen: { operator: "between" } })],
		defaults: { operator: "eq", value: 0 },
		summary: (c) => `Past orders ${opLabel(c.operator)} ${c.value}`,
		/* `ordersCount` is unknown for a guest, and reading unknown as 0 would
		   hand every guest a first-order discount. Unknown fails instead. */
		evaluate: (c, ctx) => {
			const count = ctx.customer?.ordersCount;
			if (count == null) return false;
			return compareNumber(count, c.operator, c.value, c.value2);
		},
	},

	coupon_applied: {
		label: "A coupon is applied",
		group: "Cart",
		operators: [{ value: "is", label: "is" }],
		fields: [F.toggle("value", "Applied"), F.text("code", "Specific code (optional)")],
		defaults: { operator: "is", value: true, code: "" },
		summary: (c) => `${c.value === false ? "No coupon" : "Coupon"}${c.code ? ` "${c.code}"` : ""} applied`,
		evaluate: (c, ctx) => {
			const applied = Boolean(ctx.coupon?.applied);
			const wanted = c.value !== false;
			if (applied !== wanted) return false;
			if (!applied || !c.code) return true;
			return String(ctx.coupon?.code ?? "").trim().toLowerCase() === String(c.code).trim().toLowerCase();
		},
	},

	shipping_method: {
		label: "Shipping method",
		group: "Delivery",
		operators: [
			{ value: "any", label: "is one of" },
			{ value: "none", label: "is none of" },
		],
		fields: [F.slugList("methods", "Methods")],
		defaults: { operator: "any", methods: ["free"] },
		summary: (c) => `Shipping ${c.operator === "none" ? "is none of" : "is one of"} ${asList(c.methods).join(", ") || "-"}`,
		evaluate: (c, ctx) => compareSet([ctx.shippingMethod].filter(Boolean), c.operator, c.methods),
	},

	date_range: {
		label: "Date range",
		group: "Schedule",
		operators: [{ value: "between", label: "between" }],
		fields: [F.date("from", "From"), F.date("to", "To")],
		defaults: { operator: "between", from: "", to: "" },
		summary: (c) => `Between ${c.from || "any"} and ${c.to || "any"}`,
		/* An empty end is an open-ended campaign, not "never". The end date
		   covers its whole day, which is what a merchant typing a last day
		   means. */
		evaluate: (c, ctx) => {
			const now = ctx.now ?? new Date();
			if (c.from) {
				const from = new Date(`${c.from}T00:00:00`);
				if (Number.isFinite(from.getTime()) && now < from) return false;
			}
			if (c.to) {
				const to = new Date(`${c.to}T23:59:59.999`);
				if (Number.isFinite(to.getTime()) && now > to) return false;
			}
			return true;
		},
	},

	day_of_week: {
		label: "Day of the week",
		group: "Schedule",
		operators: [{ value: "any", label: "is one of" }],
		fields: [F.days("days", "Days")],
		defaults: { operator: "any", days: [5, 6] },
		summary: (c) => `On ${(c.days ?? []).map((d) => DAY_NAMES[d]).join(", ") || "-"}`,
		evaluate: (c, ctx) => {
			const days = asList(c.days).map((d) => toNumber(d, -1));
			if (days.length === 0) return true;
			return days.includes((ctx.now ?? new Date()).getDay());
		},
	},

	time_of_day: {
		label: "Time of day",
		group: "Schedule",
		operators: [{ value: "between", label: "between" }],
		fields: [F.time("from", "From"), F.time("to", "To")],
		defaults: { operator: "between", from: "18:00", to: "23:59" },
		summary: (c) => `Between ${c.from || "00:00"} and ${c.to || "23:59"}`,
		/* A window that wraps midnight (22:00 to 02:00) is the normal way to
		   write a late-night offer, so it is read as two spans rather than an
		   empty one. */
		evaluate: (c, ctx) => {
			const now = ctx.now ?? new Date();
			const minutes = now.getHours() * 60 + now.getMinutes();
			const from = parseClock(c.from, 0);
			const to = parseClock(c.to, 24 * 60 - 1);
			if (from <= to) return minutes >= from && minutes <= to;
			return minutes >= from || minutes <= to;
		},
	},
};

export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseClock(value, fallback) {
	const match = /^(\d{1,2}):(\d{2})$/.exec(String(value ?? "").trim());
	if (!match) return fallback;
	return toNumber(match[1]) * 60 + toNumber(match[2]);
}

function opLabel(operator) {
	return NUMBER_OPERATORS.find((o) => o.value === operator)?.label ?? operator;
}

function setLabel(operator) {
	return SET_OPERATORS.find((o) => o.value === operator)?.label ?? operator;
}

/* ------------------------------------------------------------------ */
/* actions                                                             */
/* ------------------------------------------------------------------ */

/** One entry per unit in the cart, holding that unit's price. */
function expandUnits(items) {
	const out = [];
	for (const item of items ?? []) {
		const qty = Math.max(0, Math.floor(toNumber(item?.quantity, 1)));
		const price = toNumber(item?.price);
		for (let i = 0; i < qty; i++) out.push(price);
	}
	return out;
}

/**
 * `apply(action, context, base)` returns `{ amount, freeShipping, note }`.
 *
 * `base` is the subtotal this rule discounts against, which is not always the
 * cart subtotal: with compounding on it is what is left after the rules that
 * ran before.
 *
 * The amount is always positive - the engine subtracts it - and the engine
 * clamps it, so an action never has to worry about driving a cart negative.
 */
export const ACTIONS = {

	cart_percent: {
		label: "Percentage off the cart",
		fields: [F.number("value", "Percent", { suffix: "%" }), F.number("maxDiscount", "Cap the discount at", { hint: "0 for no cap" })],
		defaults: { value: 10, maxDiscount: 0 },
		summary: (a) => `${toNumber(a.value)}% off the cart`,
		apply: (a, ctx, base) => {
			let amount = (base * toNumber(a.value)) / 100;
			const cap = toNumber(a.maxDiscount);
			if (cap > 0) amount = Math.min(amount, cap);
			return { amount };
		},
	},

	cart_fixed: {
		label: "Fixed amount off the cart",
		fields: [F.number("value", "Amount")],
		defaults: { value: 100 },
		summary: (a, fmt) => `${fmt(a.value)} off the cart`,
		apply: (a) => ({ amount: toNumber(a.value) }),
	},

	item_percent: {
		label: "Percentage off matching items",
		fields: [
			F.target("target", "Applies to"),
			F.number("value", "Percent", { suffix: "%" }),
			F.number("maxQty", "Discount at most this many units", { hint: "0 for every unit" }),
			F.number("maxDiscount", "Cap the discount at", { hint: "0 for no cap" }),
		],
		defaults: { value: 10, target: { mode: "all" }, maxQty: 0, maxDiscount: 0 },
		summary: (a) => `${toNumber(a.value)}% off ${targetSummary(a.target)}`,
		apply: (a, ctx) => {
			const units = expandUnits(selectItems(ctx.items, a.target));
			const limit = toNumber(a.maxQty);
			/* Cheapest first, so a unit cap gives the smaller discount - the
			   conservative reading, and the one a merchant writing "up to N
			   items" is held to if a customer argues. */
			const chosen = limit > 0 ? units.slice().sort((x, y) => x - y).slice(0, limit) : units;
			let amount = chosen.reduce((sum, price) => sum + (price * toNumber(a.value)) / 100, 0);
			const cap = toNumber(a.maxDiscount);
			if (cap > 0) amount = Math.min(amount, cap);
			return { amount, note: `${chosen.length} unit(s)` };
		},
	},

	item_fixed: {
		label: "Fixed amount off matching items",
		fields: [
			F.target("target", "Applies to"),
			F.number("value", "Amount"),
			F.select("per", "Taken off", [
				{ value: "unit", label: "each unit" },
				{ value: "line", label: "each product line" },
				{ value: "once", label: "once, if anything matches" },
			]),
		],
		defaults: { value: 50, per: "unit", target: { mode: "all" } },
		summary: (a, fmt) => `${fmt(a.value)} off ${targetSummary(a.target)} (${a.per ?? "unit"})`,
		apply: (a, ctx) => {
			const matching = selectItems(ctx.items, a.target);
			if (matching.length === 0) return { amount: 0 };
			const value = toNumber(a.value);
			const per = a.per ?? "unit";
			if (per === "once") return { amount: value };
			if (per === "line") return { amount: value * matching.length };
			/* Per unit, and never more than the unit costs - otherwise 50 off a
			   30 item pays the customer to take it. */
			const amount = matching.reduce((sum, item) => {
				const qty = toNumber(item?.quantity, 1);
				return sum + Math.min(value, toNumber(item?.price)) * qty;
			}, 0);
			return { amount };
		},
	},

	fixed_price: {
		label: "Set matching items to a fixed unit price",
		fields: [F.target("target", "Applies to"), F.number("value", "New unit price")],
		defaults: { value: 99, target: { mode: "products", products: [] } },
		summary: (a, fmt) => `${targetSummary(a.target)} at ${fmt(a.value)} each`,
		/* An item already cheaper than the fixed price keeps its price rather
		   than being marked up, so this can only ever be a discount. */
		apply: (a, ctx) => {
			const price = toNumber(a.value);
			const amount = selectItems(ctx.items, a.target).reduce((sum, item) => {
				const diff = toNumber(item?.price) - price;
				return sum + (diff > 0 ? diff * toNumber(item?.quantity, 1) : 0);
			}, 0);
			return { amount };
		},
	},

	bulk_tier: {
		label: "Tiered discount by quantity",
		fields: [F.target("target", "Counted and discounted"), F.tiers("tiers", "Tiers")],
		defaults: {
			target: { mode: "all" },
			tiers: [
				{ minQty: 3, kind: "percent", value: 5 },
				{ minQty: 6, kind: "percent", value: 10 },
				{ minQty: 12, kind: "percent", value: 15 },
			],
		},
		summary: (a) => `${(a.tiers ?? []).length} quantity tier(s) on ${targetSummary(a.target)}`,
		/* Only the best qualifying tier pays out. Tiers are written as a ladder,
		   and summing them would mean a 12-item cart quietly collecting 5, 10
		   and 15 percent at once. */
		apply: (a, ctx) => {
			const matching = selectItems(ctx.items, a.target);
			const qty = matching.reduce((sum, i) => sum + toNumber(i?.quantity, 1), 0);
			const matchingTotal = matching.reduce((sum, i) => sum + lineTotal(i), 0);

			const tier = (a.tiers ?? [])
				.filter((t) => qty >= toNumber(t?.minQty))
				.sort((x, y) => toNumber(y?.minQty) - toNumber(x?.minQty))[0];

			if (!tier) return { amount: 0, note: "no tier reached" };

			const amount = tier.kind === "fixed"
				? toNumber(tier.value)
				: (matchingTotal * toNumber(tier.value)) / 100;

			return { amount, note: `${qty} unit(s), tier ${tier.minQty}+` };
		},
	},

	buy_x_get_y: {
		label: "Buy X get Y",
		fields: [
			F.target("target", "Buy from"),
			F.number("buyQty", "Buy"),
			F.number("getQty", "Get"),
			F.number("value", "Discount on the free units", { suffix: "%", hint: "100 is free" }),
			F.number("maxSets", "At most this many sets", { hint: "0 for unlimited" }),
		],
		defaults: { target: { mode: "all" }, buyQty: 2, getQty: 1, value: 100, maxSets: 0 },
		summary: (a) => `Buy ${toNumber(a.buyQty)} get ${toNumber(a.getQty)} at ${toNumber(a.value)}% off`,
		/* The discount lands on the cheapest units in the set, which is what
		   "get one free" means everywhere a customer has met it, and is the
		   reading that cannot be gamed by adding one expensive item. */
		apply: (a, ctx) => {
			const buyQty = Math.max(1, toNumber(a.buyQty, 1));
			const getQty = Math.max(1, toNumber(a.getQty, 1));
			const units = expandUnits(selectItems(ctx.items, a.target)).sort((x, y) => x - y);

			let sets = Math.floor(units.length / (buyQty + getQty));
			const maxSets = toNumber(a.maxSets);
			if (maxSets > 0) sets = Math.min(sets, maxSets);
			if (sets < 1) return { amount: 0, note: "not enough units" };

			const freeUnits = units.slice(0, sets * getQty);
			const percent = toNumber(a.value, 100);
			const amount = freeUnits.reduce((sum, price) => sum + (price * percent) / 100, 0);

			return { amount, note: `${sets} set(s), ${freeUnits.length} unit(s) discounted` };
		},
	},

	free_shipping: {
		label: "Free shipping",
		fields: [],
		defaults: {},
		summary: () => "Free shipping",
		/* Shipping is not part of the subtotal the other actions work on, so
		   this reports no `amount` and the engine zeroes the shipping line. */
		apply: () => ({ amount: 0, freeShipping: true }),
	},
};

export function targetSummary(target) {
	const mode = target?.mode ?? "all";
	if (mode === "all") return "every item";
	if (mode === "products") return `${asList(target?.products).length} product(s)`;
	if (mode === "categories") return `category ${asList(target?.categories).join(", ") || "-"}`;
	if (mode === "tags") return `tag ${asList(target?.tags).join(", ") || "-"}`;
	return mode;
}

export const CONDITION_OPTIONS = Object.entries(CONDITIONS).map(([value, def]) => ({
	value, label: def.label, group: def.group,
}));

export const ACTION_OPTIONS = Object.entries(ACTIONS).map(([value, def]) => ({
	value, label: def.label,
}));
