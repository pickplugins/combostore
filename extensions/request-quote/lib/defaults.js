/**
 * Default settings, the request form's field catalogue, and the status map.
 */

/* ------------------------------------------------------------------ */
/* the request form                                                     */
/* ------------------------------------------------------------------ */

/**
 * The fields the shopper fills in, and where each one lands on the order.
 *
 * `orderField` is the key `create_order` already understands, so a quote
 * arrives as an ordinary order record and every screen that reads orders can
 * read it. The ones with no `orderField` are quote-specific and are written
 * into the order note, which is the only free-text field on the order that
 * survives the round trip.
 */
export const FORM_FIELDS = [
	{ key: "name", label: "Name", kind: "text", orderField: "billing_name", locked: true },
	{ key: "email", label: "Email", kind: "email", orderField: "billing_email" },
	{ key: "phone", label: "Phone", kind: "tel", orderField: "billing_phone" },
	{ key: "company", label: "Company", kind: "text", orderField: null },
	{ key: "address", label: "Delivery address", kind: "textarea", orderField: "billing_address" },
	{ key: "neededBy", label: "Needed by", kind: "date", orderField: null },
	{ key: "message", label: "Message", kind: "textarea", orderField: null },
];

export const FIELD_STATES = [
	{ value: "required", label: "Required" },
	{ value: "optional", label: "Optional" },
	{ value: "off", label: "Hidden" },
];

/* ------------------------------------------------------------------ */
/* statuses                                                            */
/* ------------------------------------------------------------------ */

/**
 * A quote's life, expressed in the order statuses the store already has.
 *
 * No new status is invented, because `create_order` hands WordPress whatever
 * string it is given and an unregistered one would either be rejected or
 * land somewhere nothing lists. These four are already in the Orders filter.
 *
 * Accepting a quote is what graduates it: the marker on `payment_method` is
 * cleared, so it leaves this inbox and joins the ordinary order pipeline
 * rather than being tracked in two places.
 */
export const QUOTE_STATUSES = {
	hold: { label: "New request", tone: "amber", description: "Waiting for you to price it." },
	pending: { label: "Quoted", tone: "blue", description: "Sent to the customer, waiting on them." },
	processing: { label: "Accepted", tone: "green", description: "Became an order." },
	canceled: { label: "Declined", tone: "gray", description: "Turned down or expired." },
};

export const QUOTE_STATUS_OPTIONS = Object.entries(QUOTE_STATUSES).map(([value, s]) => ({
	value,
	label: s.label,
}));

/**
 * The marker that tells a quote apart from a sale.
 *
 * It goes on `payment_method` because that is a free string that
 * `get_orders` already filters on server side - the alternative, fetching
 * orders and filtering in the browser, gets the paging wrong the moment
 * there is more than one page.
 */
export const QUOTE_MARKER = "quote_request";

/* ------------------------------------------------------------------ */
/* settings                                                            */
/* ------------------------------------------------------------------ */

export function blankRule() {
	return {
		id: `qr_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`,
		enabled: true,
		label: "",
		scope: "categories",
		products: [],
		categories: [],
		tags: [],
		value: 0,
		mode: "only",
		hidePrice: true,
		buttonLabel: "",
	};
}

export const DEFAULT_SETTINGS = {

	/* Empty on purpose: installing the extension must not silently stop a
	   store selling. Nothing is quoted until a rule says so. */
	rules: [],

	/* Where the Quote List block was placed. The button needs somewhere to
	   send people and cannot discover the page on its own. */
	quotePageUrl: "/request-a-quote",

	requireLogin: false,

	buttonLabel: "Request a Quote",
	addLabel: "Add to Quote",
	hiddenPriceText: "Price on request",

	fields: {
		name: "required",
		email: "required",
		phone: "optional",
		company: "optional",
		address: "optional",
		neededBy: "optional",
		message: "optional",
	},

	successTitle: "Request received",
	successMessage: "Thanks - we will send you a price shortly.",

	/* Shown on the quote list so a shopper knows what they are signing up
	   for. Not enforced anywhere; it is wording, not a promise core keeps. */
	replyTime: "within 1 business day",
};

export const STARTER_RULES = [
	{
		...blankRule(),
		id: "qr_starter_noprice",
		label: "Anything without a price",
		scope: "no_price",
		mode: "only",
		hidePrice: true,
		buttonLabel: "Request a Quote",
	},
	{
		...blankRule(),
		id: "qr_starter_bulk",
		label: "Bulk enquiries on expensive items",
		scope: "price_above",
		value: 50000,
		mode: "also",
		hidePrice: false,
		buttonLabel: "Ask for a bulk price",
	},
];
