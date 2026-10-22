/*
  Invoice templates.

  Same idea as the receipt's (see receiptTemplates.js), and the same reason:
  the invoice was one fixed layout with a Download PDF button and no say in
  what came out. An invoice goes to a customer, a supplier or an accountant,
  and the shop printing it has a view about how it should look.

  A template is tokens plus a few layout switches, read by two renderers that
  have to agree:

    - InvoicePaper, which draws the document in the browser for the preview
      and for printing, styled inline so it survives being copied into a print
      window with no stylesheet.
    - invoicePdf, which draws the same document into a jsPDF page. It is a
      separate renderer because a PDF is drawn, not laid out - so the tokens
      carry both sides: `fontSize` in px for the screen, `pdfFontSize` in pt,
      millimetres for the page margins.

  Keeping both renderers on one set of tokens is what stops the PDF drifting
  from the preview, which is exactly what had happened: the screen showed a
  bordered table with an Advance line and the PDF drew a different table that
  subtracted the advance without ever printing it.
*/


/* jsPDF's built-in fonts are Latin-1. A currency symbol outside that - the
	 taka sign, the rupee sign - comes out as mojibake, so the PDF side asks for
	 an ASCII stand-in rather than drawing a symbol nobody can read. */
export const PDF_CURRENCY_FALLBACK = {
	"৳": "Tk",
	"₹": "Rs",
	"₨": "Rs",
	"₦": "N",
	"₱": "P",
	"₩": "W",
	"₫": "d",
	"฿": "B",
	"₴": "UAH",
	"₸": "KZT",
};


export const INVOICE_TEMPLATES = [

	{
		id: "classic",
		name: "Classic",
		hint: "Bordered table, plain header - the usual invoice",

		accent: "#111827",
		accentText: "#ffffff",
		muted: "#6b7280",
		ruleColor: "#9ca3af",

		fontFamily: 'Arial, Helvetica, ui-sans-serif, system-ui, sans-serif',
		fontSize: 13,
		pdfFontSize: 10,

		/* Store on one side, INVOICE and its number on the other. */
		header: "split",
		logo: false,
		table: "bordered",
		totals: "plain",
		density: "comfortable",

		pageMargin: 20,
		note: "",
	},

	{
		id: "modern",
		name: "Modern",
		hint: "Brand band, logo, striped rows, boxed totals",

		accent: "#634fe5",
		accentText: "#ffffff",
		muted: "#6b7280",
		ruleColor: "#e5e7eb",

		fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
		fontSize: 13,
		pdfFontSize: 10,

		/* A coloured band across the top carrying both sides of the header. */
		header: "band",
		logo: true,
		table: "zebra",
		totals: "box",
		density: "comfortable",

		pageMargin: 16,
		note: "Thank you for your business.",
	},

	{
		id: "minimal",
		name: "Minimal",
		hint: "Hairline rules, lots of air, no table borders",

		accent: "#111827",
		accentText: "#ffffff",
		muted: "#9ca3af",
		ruleColor: "#e5e7eb",

		fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
		fontSize: 13,
		pdfFontSize: 10,

		header: "stacked",
		logo: true,
		table: "lines",
		totals: "plain",
		density: "airy",

		pageMargin: 24,
		note: "",
	},

	{
		id: "compact",
		name: "Compact",
		hint: "Denser type - a long order on fewer pages",

		accent: "#111827",
		accentText: "#ffffff",
		muted: "#6b7280",
		ruleColor: "#d1d5db",

		fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
		fontSize: 11.5,
		pdfFontSize: 8.5,

		header: "split",
		logo: false,
		table: "lines",
		totals: "box",
		density: "compact",

		pageMargin: 14,
		note: "",
	},

];


export const DEFAULT_INVOICE_TEMPLATE_ID = "classic";


/* The two sheet sizes a shop actually owns. jsPDF names them the same way,
	 and `css` is what `@page size` wants when the browser does the printing. */
export const PAPER_SIZES = [
	{ id: "a4", label: "A4", css: "A4", width: 210, height: 297 },
	{ id: "letter", label: "Letter", css: "letter", width: 215.9, height: 279.4 },
];

export const DEFAULT_PAPER_ID = "a4";


export const INVOICE_PREFS_KEY = "combo_invoice_prefs";


/* Row heights and gaps, in the units each renderer works in. Held here rather
	 than in either renderer so the PDF cannot quietly become denser than the
	 preview it was chosen from. */
export const DENSITY = {
	comfortable: { rowPadding: 12, blockGap: 28, pdfRowGap: 7, pdfBlockGap: 12 },
	airy: { rowPadding: 14, blockGap: 36, pdfRowGap: 8, pdfBlockGap: 16 },
	compact: { rowPadding: 7, blockGap: 18, pdfRowGap: 5.5, pdfBlockGap: 8 },
};


export function getInvoiceTemplate(template) {

	if (template && typeof template === "object") {
		return template;
	}

	return INVOICE_TEMPLATES.find(item => item.id === template)
		?? INVOICE_TEMPLATES.find(item => item.id === DEFAULT_INVOICE_TEMPLATE_ID);
}


export function getPaper(paper) {

	if (paper && typeof paper === "object") {
		return paper;
	}

	return PAPER_SIZES.find(item => item.id === paper)
		?? PAPER_SIZES.find(item => item.id === DEFAULT_PAPER_ID);
}


export function getDensity(template) {
	return DENSITY[getInvoiceTemplate(template).density] ?? DENSITY.comfortable;
}


/**
 * Read the remembered template and paper size.
 *
 * Checked against what exists rather than trusted: storage can hold the id of
 * a template that has since been renamed, and reading it can throw outright in
 * a private window.
 */
export function readInvoicePrefs() {

	const fallback = { templateId: DEFAULT_INVOICE_TEMPLATE_ID, paperId: DEFAULT_PAPER_ID };

	if (typeof window === "undefined") {
		return fallback;
	}

	try {
		const stored = JSON.parse(window.localStorage.getItem(INVOICE_PREFS_KEY) ?? "null");

		if (!stored) {
			return fallback;
		}

		return {
			templateId: INVOICE_TEMPLATES.find(item => item.id === stored.templateId)?.id ?? fallback.templateId,
			paperId: PAPER_SIZES.find(item => item.id === stored.paperId)?.id ?? fallback.paperId,
		};
	} catch {
		return fallback;
	}
}


export function writeInvoicePrefs(prefs) {

	if (typeof window === "undefined") {
		return;
	}

	try {
		window.localStorage.setItem(INVOICE_PREFS_KEY, JSON.stringify(prefs));
	} catch {
		/* private window, or storage turned off */
	}
}


/**
 * Everything the document needs, from whatever the caller passed.
 *
 * The six screens that render an invoice each build this object themselves
 * and they do not all build it the same way: items arrive as `qty` from some
 * and `quantity` from others, and the shop's own details are hard-coded in
 * every one of them. The shop's name, address and logo fall back to the store
 * settings, so a caller that stops hard-coding them gets the right answer and
 * one that has not yet is left alone.
 *
 * Totals are computed here, once, for both renderers. The advance is the part
 * that had gone wrong twice over: it was subtracted inside a number labelled
 * "Total" and then never shown, so an invoice with a deposit on it did not
 * add up on the page. Total is the order; what is left to pay is its own
 * line, and it only appears when there is an advance to account for.
 */
export function normalizeInvoice(invoice, settings) {

	const items = (invoice?.items ?? []).map((item, index) => ({
		id: item?.id ?? index,
		name: item?.product_name ?? item?.title ?? item?.name ?? "",
		qty: Number(item?.qty ?? item?.quantity ?? 0),
		price: Number(item?.price ?? 0),
	}));

	const subtotal = Number(invoice?.subtotal ?? 0)
		|| items.reduce((sum, item) => sum + (item.qty * item.price), 0);

	const discount = Number(invoice?.discount ?? 0) || 0;
	const shipping = Number(invoice?.shipping ?? 0) || 0;
	const advance = Number(invoice?.advance ?? 0) || 0;

	const total = subtotal + shipping - discount;

	return {
		from: {
			name: invoice?.from?.name || settings?.site_title || "",
			address: invoice?.from?.address || settings?.address || "",
			city: invoice?.from?.city || "",
			email: settings?.email || "",
			phone: settings?.whatsapp || "",
			logo: settings?.site_logo?.src || "",
		},
		to: {
			name: invoice?.to?.name || "",
			address: invoice?.to?.address || "",
			city: invoice?.to?.city || "",
			phone: invoice?.to?.phone || "",
		},
		items,
		number: invoice?.invoiceNumber ?? "",
		date: invoice?.date ?? "",
		paymentMethod: invoice?.payment_method ?? "",
		paymentStatus: invoice?.payment_status ?? "",
		subtotal,
		discount,
		shipping,
		advance,
		total,
		due: total - advance,
	};
}


/**
 * The stylesheet for the window an invoice is printed from.
 *
 * The document styles itself inline, so this is only the page setup and the
 * defaults the copied nodes inherit. `filter: none` keeps privacy mode's blur
 * on the screen where it belongs and off the sheet.
 */
export function invoicePrintCss(template, paper) {

	const resolved = getInvoiceTemplate(template);
	const sheet = getPaper(paper);

	return `
		@page {
			size: ${sheet.css};
			margin: ${resolved.pageMargin}mm;
		}

		html, body {
			margin: 0;
			padding: 0;
			background: #ffffff;
		}

		body {
			font-family: ${resolved.fontFamily};
			font-size: ${resolved.fontSize}px;
			color: #111827;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}

		.invoice-sheet {
			/* The page box already carries the margin, so the sheet fills it. */
			width: 100%;
			padding: 0;
			box-shadow: none;
		}

		table {
			page-break-inside: auto;
		}

		tr {
			page-break-inside: avoid;
		}

		thead {
			display: table-header-group;
		}

		img {
			max-width: 100%;
		}

		* {
			filter: none !important;
		}
	`;
}
