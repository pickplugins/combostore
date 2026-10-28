/**
 * Which products are quoted rather than bought, and on what terms.
 *
 * Pure: no React, no stores, no fetch. The same function decides what the
 * product page shows a shopper, what the dashboard preview shows a merchant,
 * and what a test asserts - a rule that can only be checked by loading a
 * product page is a rule nobody checks.
 *
 * Rules are an ordered list and the FIRST enabled match wins. Not "the most
 * specific", because specificity is a judgement call a merchant cannot see:
 * with first-match the order on screen is the order of evaluation, and
 * "everything in Machinery is quote-only, except these three" is written the
 * way it is said - the exception above the general rule.
 */

/* ------------------------------------------------------------------ */
/* reading a product                                                    */
/* ------------------------------------------------------------------ */

export function toNumber(value, fallback = 0) {
	const n = parseFloat(value);
	return Number.isFinite(n) ? n : fallback;
}

function asList(value) {
	return Array.isArray(value) ? value : [];
}

/* Ids arrive as numbers from the API and as strings from an input. */
function sameId(a, b) {
	if (a == null || b == null) return false;
	return String(a) === String(b);
}

/**
 * Terms as plain slugs.
 *
 * `categories` is `[{ slug, name }]` on a product from `get_products`, but a
 * cart line or a hand-written test carries bare strings. Both are accepted
 * rather than normalised at every call site, because the one that gets
 * forgotten is the one that silently never matches.
 */
function termSlugs(value) {
	return asList(value)
		.map((t) => (typeof t === "string" ? t : t?.slug ?? t?.name))
		.filter(Boolean)
		.map((s) => String(s).toLowerCase());
}

export function productCategories(product) {
	return termSlugs(product?.categories ?? product?.product_cat);
}

export function productTags(product) {
	return termSlugs(product?.tags ?? product?.product_tag);
}

/**
 * What the shopper would pay, as a number, or null when there is no price.
 *
 * "No price" is the whole point of one of the scopes, so the distinction
 * between absent and zero has to survive. A product priced at 0 is priced;
 * `toNumber(undefined, 0)` would call both of them free.
 */
export function productPrice(product) {
	const candidates = [product?.price, product?.sale_price, product?.regular_price];
	for (const c of candidates) {
		if (c === null || c === undefined || c === "") continue;
		const n = parseFloat(c);
		if (Number.isFinite(n)) return n;
	}
	return null;
}

/**
 * `stock_count` is what this app's product records actually carry; the
 * string forms are accepted too because a cart line or a hand-written test
 * may use them.
 *
 * Unknown counts as in stock. A product whose stock is simply not tracked
 * must not be swept into an "out of stock" rule and taken off sale.
 */
export function productInStock(product) {
	const stock = product?.stock_status ?? product?.stockStatus;
	if (typeof stock === "string") return stock.toLowerCase() !== "outofstock";
	const qty = product?.stock_count ?? product?.stock ?? product?.stock_quantity;
	if (qty === null || qty === undefined || qty === "") return true;
	return toNumber(qty, 0) > 0;
}

/* ------------------------------------------------------------------ */
/* scopes                                                              */
/* ------------------------------------------------------------------ */

/**
 * The scope catalogue.
 *
 * `match` lives beside the label and the fields it needs, so the settings
 * screen renders a scope's inputs from the same object that decides whether
 * it matched. Split across two files, one half gets a new scope and the
 * other quietly never matches it.
 */
export const SCOPES = {

	all: {
		label: "Every product",
		fields: [],
		summary: () => "every product",
		match: () => true,
	},

	products: {
		label: "These products",
		fields: [{ key: "products", kind: "idList", label: "Product ids" }],
		summary: (r) => `${asList(r?.products).length} chosen product(s)`,
		match: (r, product) => asList(r?.products).some((id) => sameId(id, product?.id)),
	},

	categories: {
		label: "Products in these categories",
		fields: [{ key: "categories", kind: "slugList", label: "Category slugs" }],
		summary: (r) => asList(r?.categories).join(", ") || "no category chosen",
		match: (r, product) => {
			const own = productCategories(product);
			return asList(r?.categories).some((slug) => own.includes(String(slug).toLowerCase()));
		},
	},

	tags: {
		label: "Products with these tags",
		fields: [{ key: "tags", kind: "slugList", label: "Tag slugs" }],
		summary: (r) => asList(r?.tags).join(", ") || "no tag chosen",
		match: (r, product) => {
			const own = productTags(product);
			return asList(r?.tags).some((slug) => own.includes(String(slug).toLowerCase()));
		},
	},

	no_price: {
		label: "Products with no price set",
		fields: [],
		summary: () => "anything with an empty price",
		/* The common way a store already marks "ask us": leave the price
		   blank. This turns that existing convention into the button without
		   the merchant tagging a thing. */
		match: (r, product) => productPrice(product) === null,
	},

	price_above: {
		label: "Products priced above",
		fields: [{ key: "value", kind: "number", label: "Amount" }],
		summary: (r) => `over ${toNumber(r?.value)}`,
		match: (r, product) => {
			const price = productPrice(product);
			return price !== null && price > toNumber(r?.value);
		},
	},

	price_below: {
		label: "Products priced below",
		fields: [{ key: "value", kind: "number", label: "Amount" }],
		summary: (r) => `under ${toNumber(r?.value)}`,
		match: (r, product) => {
			const price = productPrice(product);
			return price !== null && price < toNumber(r?.value);
		},
	},

	out_of_stock: {
		label: "Products that are out of stock",
		fields: [],
		summary: () => "anything out of stock",
		match: (r, product) => productInStock(product) === false,
	},
};

export const SCOPE_OPTIONS = Object.entries(SCOPES).map(([value, s]) => ({
	value,
	label: s.label,
}));

/* ------------------------------------------------------------------ */
/* the decision                                                        */
/* ------------------------------------------------------------------ */

/**
 * `only` replaces buying, `also` sits beside it, `off` is an ordinary
 * product. A rule set to `off` is how an exception is written - put it above
 * the broad rule and those products stay buyable.
 */
export const MODES = {
	only: { label: "Quote only - no Add to Cart", value: "only" },
	also: { label: "Quote as well as Add to Cart", value: "also" },
	off: { label: "Normal - never quote", value: "off" },
};

export const NO_QUOTE = Object.freeze({
	mode: "off",
	hidePrice: false,
	buttonLabel: "",
	ruleId: null,
	reason: "no rule matched",
});

/**
 * Decide how one product is sold.
 *
 * Returns the frozen `NO_QUOTE` when nothing matches, so a caller can compare
 * `.mode` without guarding for null.
 */
export function quoteModeFor(product, settings) {
	if (!product) return NO_QUOTE;

	const rules = asList(settings?.rules);

	for (const rule of rules) {
		if (rule?.enabled === false) continue;

		const scope = SCOPES[rule?.scope];
		/* An unknown scope is a rule written by a newer version of this
		   extension, or a typo. Skipping it is right either way: matching
		   everything would hide the Add to Cart button across the store. */
		if (!scope) continue;

		let matched = false;
		try {
			matched = scope.match(rule, product) === true;
		} catch (e) {
			matched = false;
		}
		if (!matched) continue;

		const mode = MODES[rule?.mode] ? rule.mode : "only";
		if (mode === "off") return { ...NO_QUOTE, ruleId: rule.id, reason: `excluded by "${rule.label || rule.scope}"` };

		return {
			mode,
			/* Only meaningful when the product is quote-only: a price shown
			   beside an "Add to Quote" button that still sells at that price
			   is information, not a leak. */
			hidePrice: mode === "only" && rule?.hidePrice === true,
			buttonLabel: rule?.buttonLabel || "",
			ruleId: rule?.id ?? null,
			reason: `matched "${rule.label || scope.label}"`,
		};
	}

	return NO_QUOTE;
}

/**
 * What core's `purchaseGate` slot expects, or null to leave core alone.
 *
 * Only `only` gates anything. A product quoted *as well as* sold still has
 * its price and its Add to Cart button - that is the whole difference
 * between the two modes.
 */
export function gateFor(product, settings) {
	const decision = quoteModeFor(product, settings);
	if (decision.mode !== "only") return null;
	return {
		hideAddToCart: true,
		hidePrice: decision.hidePrice === true,
		/* Core prints this where the price was. It comes from here because
		   core has no opinion about what replaces a price, and "Price on
		   request" is the merchant's wording to change. */
		priceText: settings?.hiddenPriceText || "Price on request",
		reason: decision.reason,
	};
}

export function scopeSummary(rule) {
	const scope = SCOPES[rule?.scope];
	if (!scope) return "unknown rule";
	try {
		return scope.summary(rule);
	} catch (e) {
		return scope.label;
	}
}
