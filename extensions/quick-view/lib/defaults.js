/**
 * What the modal shows, and how it behaves.
 *
 * All of it is store-wide rather than per-block, because there is one modal
 * for the whole site. Two triggers that opened differently-shaped modals
 * would be a bug the merchant could not see coming - they would style one,
 * and the other would be wrong everywhere else.
 */

/**
 * The sections, in the order the modal draws them.
 *
 * Declared as a list rather than checked off one `if` at a time so the
 * settings screen can render its own switches from the same source. A
 * section added here appears on the screen with no change there.
 */
export const SECTIONS = [
	{ key: "gallery", label: "Images", hint: "The product gallery, with its own arrows and dots." },
	{ key: "categories", label: "Categories", hint: "Links back into the catalogue." },
	{ key: "price", label: "Price", hint: "The same price block the product page uses." },
	{ key: "stock", label: "Stock status", hint: "In stock, out of stock." },
	{ key: "sku", label: "SKU", hint: "" },
	{ key: "excerpt", label: "Short description", hint: "Trimmed to the length set below." },
	{ key: "variations", label: "Variation picker", hint: "Only drawn for products that have variations." },
	{ key: "addToCart", label: "Quantity and Add to Cart", hint: "The real one, so it behaves exactly as it does on the product page." },
	{ key: "fullLink", label: "Link to the full page", hint: "The way out of the modal for anything it does not show." },
];

export const WIDTHS = [
	{ value: "sm", label: "Narrow", classes: "max-w-xl" },
	{ value: "md", label: "Medium", classes: "max-w-3xl" },
	{ value: "lg", label: "Wide", classes: "max-w-5xl" },
];

export function widthClasses(value) {
	return (WIDTHS.find((w) => w.value === value) ?? WIDTHS[1]).classes;
}

export const DEFAULT_SETTINGS = {

	show: {
		gallery: true,
		categories: false,
		price: true,
		stock: true,
		sku: false,
		excerpt: true,
		variations: true,
		addToCart: true,
		fullLink: true,
	},

	excerptWords: 45,

	buttonLabel: "Quick view",
	fullLinkLabel: "View full details",

	width: "md",

	/* Off by default. A shopper who adds from a quick view is usually
	   browsing a grid and about to add another thing; closing on them makes
	   the second add a second round trip through the modal. */
	closeAfterAdd: false,

	closeOnBackdrop: true,
};
