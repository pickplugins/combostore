/*
  Receipt templates.

  The receipt used to be one hard-coded layout: monospace, dashed rules, store
  details at the bottom, a width box in the toolbar and nothing else. That is
  the right slip for a thermal till printer and the wrong one for everything
  else the shop prints - a 58mm roll where paper is the scarce thing, a
  branded 80mm slip to put in a parcel, an A5 sheet that has to read as a
  document.

  So a template is a set of design tokens plus a handful of layout switches,
  and ReceiptPaper renders whichever one is picked. Tokens rather than four
  copies of the markup: the data on a receipt is the same data every time, and
  four copies would drift the moment a field is added. The switches are what
  keep the four genuinely different rather than four sizes of the same thing.

  Everything a template sets has to survive being printed. Both print paths -
  this component's own Print button and the bulk "Print all receipts" screen -
  work by copying the rendered markup into a blank window, where the
  dashboard's stylesheet does not exist, so ReceiptPaper styles every node
  inline from these tokens and nothing here may rely on a class name.

  Widths are CSS pixels, which a browser prints at 1/96in: 220px is roughly
  the 58mm roll, 300px the 80mm one. PAPER_PRESETS is what the toolbar offers.
*/


export const RECEIPT_TEMPLATES = [

	{
		id: "classic",
		name: "Classic",
		hint: "Monospace till slip with dashed rules",
		width: 280,

		fontFamily: '"Courier New", ui-monospace, SFMono-Regular, monospace',
		fontSize: 12,
		lineGap: 8,
		titleSize: 18,
		accent: "#000000",
		/* Thermal heads print black or nothing, so a grey secondary line comes
			 out dithered and faint - these two keep everything one colour. */
		mutedColor: "#000000",

		rule: "dashed",
		ruleColor: "#000000",

		/* RECEIPT over the order number, with who the shop is left to the
			 bottom of the slip - the till-roll convention. */
		heading: "title",
		storeBlock: "bottom",
		logo: false,
		items: "stacked",
		totalsBox: false,
		fieldLabels: false,
		pageMargin: "0",
		footerNote: "Thank you for shopping with us!",
	},

	{
		id: "compact",
		name: "Compact",
		hint: "58mm roll, one line per item, least paper",
		width: 220,

		fontFamily: '"Courier New", ui-monospace, SFMono-Regular, monospace',
		fontSize: 11,
		lineGap: 5,
		titleSize: 13,
		accent: "#000000",
		mutedColor: "#000000",

		rule: "dashed",
		ruleColor: "#9ca3af",

		/* Shop name instead of the word RECEIPT: on a 58mm roll the line is
			 worth more as branding than as a label nobody needs. */
		heading: "store",
		storeBlock: "bottom",
		logo: false,
		items: "line",
		totalsBox: false,
		fieldLabels: false,
		pageMargin: "0",
		footerNote: "Thank you!",
	},

	{
		id: "modern",
		name: "Modern",
		hint: "80mm branded slip with logo and boxed totals",
		width: 320,

		fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
		fontSize: 12.5,
		lineGap: 9,
		titleSize: 16,
		accent: "#634fe5",
		mutedColor: "#6b7280",

		rule: "solid",
		ruleColor: "#e5e7eb",

		heading: "store",
		storeBlock: "top",
		logo: true,
		items: "stacked",
		totalsBox: true,
		fieldLabels: true,
		pageMargin: "0",
		footerNote: "Thank you for shopping with us!",
	},

	{
		id: "detailed",
		name: "Detailed",
		hint: "A5 sheet with an itemised table - for parcels and records",
		width: 420,

		fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
		fontSize: 12,
		lineGap: 10,
		titleSize: 20,
		accent: "#111827",
		mutedColor: "#6b7280",

		rule: "solid",
		ruleColor: "#d1d5db",

		heading: "split",
		storeBlock: "top",
		logo: true,
		items: "table",
		totalsBox: true,
		fieldLabels: true,
		/* A sheet rather than a roll, so it gets a margin to print inside. */
		pageMargin: "10mm",
		footerNote: "Thank you for your order. Keep this receipt for your records.",
	},

];


export const DEFAULT_TEMPLATE_ID = "classic";


/* Thermal roll sizes, and the two sheet widths the detailed template is for.
	 The custom box stays, so an odd printer is still somebody's to set. */
export const PAPER_PRESETS = [
	{ label: "58mm", width: 220 },
	{ label: "80mm", width: 300 },
	{ label: "Wide", width: 420 },
];


/* Where the picked template and width are remembered. A printer does not
	 change between orders, so asking again every time is a question with a
	 known answer. */
export const RECEIPT_PREFS_KEY = "combo_receipt_prefs";


/**
 * The template with this id, or the default one.
 *
 * Takes an id or a template object, so a caller that already resolved one can
 * pass it straight back in.
 */
export function getTemplate(template) {

	if (template && typeof template === "object") {
		return template;
	}

	return RECEIPT_TEMPLATES.find(item => item.id === template)
		?? RECEIPT_TEMPLATES.find(item => item.id === DEFAULT_TEMPLATE_ID);
}


/**
 * Read the remembered template and width.
 *
 * Storage can be empty, stale or unreadable - a private window throws on
 * access - so every field is checked against what the templates actually
 * offer rather than trusted.
 */
export function readReceiptPrefs() {

	const fallback = { templateId: DEFAULT_TEMPLATE_ID, width: getTemplate(DEFAULT_TEMPLATE_ID).width };

	if (typeof window === "undefined") {
		return fallback;
	}

	try {
		const stored = JSON.parse(window.localStorage.getItem(RECEIPT_PREFS_KEY) ?? "null");

		if (!stored) {
			return fallback;
		}

		const template = RECEIPT_TEMPLATES.find(item => item.id === stored.templateId);
		const width = Number(stored.width);

		return {
			templateId: template?.id ?? fallback.templateId,
			width: Number.isFinite(width) && width > 0 ? clampWidth(width) : (template?.width ?? fallback.width),
		};
	} catch {
		return fallback;
	}
}


/**
 * Remember the template and width for the next receipt.
 *
 * Failing to store a preference is not worth telling anyone about: the
 * receipt still prints, it just asks again next time.
 */
export function writeReceiptPrefs(prefs) {

	if (typeof window === "undefined") {
		return;
	}

	try {
		window.localStorage.setItem(RECEIPT_PREFS_KEY, JSON.stringify(prefs));
	} catch {
		/* private window, or storage turned off */
	}
}


/* Narrower than this and the totals wrap into nonsense; wider and it is not a
	 receipt any more. Both ends are checked because the width box takes typed
	 input. */
export const MIN_WIDTH = 160;
export const MAX_WIDTH = 800;

export function clampWidth(value) {

	const width = Math.round(Number(value));

	if (!Number.isFinite(width)) {
		return getTemplate(DEFAULT_TEMPLATE_ID).width;
	}

	return Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, width));
}


/**
 * The stylesheet for the window a receipt is printed from.
 *
 * It carries the page setup and the template's own typography, because the
 * print window gets the markup and nothing else - no dashboard stylesheet, no
 * Tailwind. The markup styles itself inline; this is only what cannot be said
 * on an element: `@page`, and the defaults the copied nodes inherit.
 *
 * `filter: none` is deliberate. Privacy mode blurs the customer's details on
 * screen, and a blurred receipt is a wasted sheet of paper.
 */
export function receiptPrintCss(template, width) {

	const resolved = getTemplate(template);
	const paper = clampWidth(width ?? resolved.width);

	return `
		@page {
			size: auto;
			margin: ${resolved.pageMargin};
		}

		html, body {
			margin: 0;
			padding: 0;
			background: #ffffff;
		}

		body {
			font-family: ${resolved.fontFamily};
			font-size: ${resolved.fontSize}px;
			color: #000000;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}

		.receipt-sheet {
			width: ${paper}px;
			margin: 0 auto;
		}

		img {
			max-width: 100%;
		}

		* {
			filter: none !important;
		}
	`;
}
