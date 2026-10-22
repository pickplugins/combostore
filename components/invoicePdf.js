import he from "he";

import {
	getInvoiceTemplate,
	getPaper,
	getDensity,
	PDF_CURRENCY_FALLBACK,
} from "./invoiceTemplates";


/*
	The invoice, drawn into a PDF.

	It is a second renderer rather than a picture of the first one on purpose:
	jsPDF draws text as text, so the file that lands in a customer's inbox can
	be searched, copied and read by a screen reader. Rasterising the preview
	would have been less code and a worse document.

	What it does share with the preview is everything that decides how the
	invoice looks - see invoiceTemplates. The two had drifted badly: the screen
	drew a bordered table with an Advance line while this drew a different
	table that subtracted the advance without ever printing it, so the numbers
	on the PDF did not add up to the total beside them.

	Three things it now does that it did not:

	  - pages. The item rows were drawn down the sheet with no check against
	    the bottom of it, so an order of any length ran off the page and the
	    totals went with it.
	  - the whole of the money. Discount, delivery, advance and what is left to
	    pay are all on it, in the order the preview puts them.
	  - the shop's own currency, rather than the string "Tk" in the source.
*/


/* jsPDF's built-in fonts only carry Latin-1, so a taka or rupee sign drawn
	 straight comes out as a pair of accented letters. */
function pdfSafeCurrency(symbol) {

	if (!symbol) {
		return "";
	}

	if (PDF_CURRENCY_FALLBACK[symbol]) {
		return PDF_CURRENCY_FALLBACK[symbol];
	}

	/* Anything that survives a Latin-1 round trip is drawable as it is. */
	return [...symbol].every(character => character.charCodeAt(0) <= 0xff) ? symbol : "";
}


function moneyFormatter(currency) {

	const symbol = pdfSafeCurrency(currency?.symbol);
	const position = currency?.position === "before" ? "before" : "after";

	return (value) => {
		const amount = Number(value ?? 0);
		const text = Number.isFinite(amount) ? `${amount}` : "0";

		return position === "before" ? `${symbol}${text}` : `${text}${symbol}`;
	};
}


/* Item names arrive as the markup a product title is stored in. */
function plainText(html) {

	const withoutTags = `${html ?? ""}`.replace(/<[^>]*>/g, " ");

	try {
		return he.decode(withoutTags).replace(/\s+/g, " ").trim();
	} catch {
		return withoutTags.replace(/\s+/g, " ").trim();
	}
}


function hexToRgb(hex) {

	const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(`${hex ?? ""}`);

	if (!match) {
		return [17, 24, 39];
	}

	return [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];
}


/**
 * The logo as something jsPDF can draw, or null.
 *
 * `crossOrigin` is what makes the canvas readable; media served without CORS
 * headers fails to load at all under it, which is the case this returns null
 * for. A missing logo is not worth failing a download over - the PDF is drawn
 * without it, exactly as the templates that never ask for one.
 */
async function loadLogo(url) {

	if (!url || typeof document === "undefined") {
		return null;
	}

	try {
		const image = await new Promise((resolve, reject) => {
			const element = new window.Image();

			element.crossOrigin = "anonymous";
			element.onload = () => resolve(element);
			element.onerror = reject;
			element.src = url;
		});

		const canvas = document.createElement("canvas");

		canvas.width = image.naturalWidth;
		canvas.height = image.naturalHeight;
		canvas.getContext("2d").drawImage(image, 0, 0);

		return {
			data: canvas.toDataURL("image/png"),
			ratio: image.naturalWidth / image.naturalHeight,
		};
	} catch {
		return null;
	}
}


/**
 * Draw the invoice and hand the browser the file.
 *
 * @param {object} args
 * @param {object} args.invoice  A normalised invoice - see normalizeInvoice.
 * @param {object|string} args.template  Template, or its id.
 * @param {object|string} args.paper  Paper size, or its id.
 * @param {object} [args.currency]  `{ symbol, position }` from the store.
 * @returns {Promise<string>} The file name it saved under.
 */
export async function downloadInvoicePdf(args) {

	const template = getInvoiceTemplate(args?.template);
	const paper = getPaper(args?.paper);
	const density = getDensity(template);
	const invoice = args?.invoice;
	const money = moneyFormatter(args?.currency);

	const jsPDF = (await import("jspdf")).default;

	const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: paper.id === "letter" ? "letter" : "a4" });

	const pageWidth = pdf.internal.pageSize.getWidth();
	const pageHeight = pdf.internal.pageSize.getHeight();
	const margin = template.pageMargin;
	const contentWidth = pageWidth - (margin * 2);
	const right = pageWidth - margin;

	const accent = hexToRgb(template.accent);
	const accentText = hexToRgb(template.accentText);
	const muted = hexToRgb(template.muted);
	const rule = hexToRgb(template.ruleColor);
	const ink = [17, 24, 39];

	const base = template.pdfFontSize;
	const gap = density.pdfBlockGap;
	const rowGap = density.pdfRowGap;

	/* Point to millimetre, which is what every vertical step here is in. */
	const lineHeight = (size = base) => size * 0.3528 * 1.15;

	/* The last line the body may use before a new page is needed. The footer
		 sits under it. */
	const pageBottom = pageHeight - margin - lineHeight(base) * 2;

	var y = margin;

	function setText(size, style = "normal", color = ink) {
		pdf.setFontSize(size);
		pdf.setFont("helvetica", style);
		pdf.setTextColor(color[0], color[1], color[2]);
	}

	function write(text, x, options = {}) {
		pdf.text(`${text ?? ""}`, x, y, options);
	}


	/* ---- header ---------------------------------------------------- */

	const logo = template.logo ? await loadLogo(invoice?.from?.logo) : null;

	function drawHeaderBand() {

		const bandHeight = gap * 3.2;

		pdf.setFillColor(accent[0], accent[1], accent[2]);
		pdf.rect(0, 0, pageWidth, bandHeight, "F");

		var left = margin;
		var cursor = margin * 0.7;

		if (logo) {
			const logoHeight = 12;
			const logoWidth = Math.min(45, logoHeight * (logo.ratio || 1));

			/* A white plate behind it, because a logo drawn for white paper
				 disappears into a coloured band. */
			pdf.setFillColor(255, 255, 255);
			pdf.roundedRect(left - 1.5, cursor - 1.5, logoWidth + 3, logoHeight + 3, 1.5, 1.5, "F");
			pdf.addImage(logo.data, "PNG", left, cursor, logoWidth, logoHeight);

			cursor += logoHeight + 5;
		}

		y = cursor + lineHeight(base + 4);

		setText(base + 4, "bold", accentText);
		write(invoice?.from?.name, left);

		setText(base - 1, "normal", accentText);

		[invoice?.from?.address, invoice?.from?.city].filter(Boolean).forEach(line => {
			y += lineHeight(base - 1);
			write(line, left);
		});

		/* The right-hand side is drawn from its own cursor: the two columns of
			 a header do not have the same number of lines. */
		var metaY = cursor + lineHeight(base + 6);

		setText(base + 6, "bold", accentText);
		pdf.text("INVOICE", right, metaY, { align: "right" });

		setText(base - 1, "normal", accentText);

		[`#${invoice?.number ?? ""}`, invoice?.date, invoice?.paymentStatus ? `Payment: ${invoice.paymentStatus}` : null]
			.filter(Boolean)
			.forEach(line => {
				metaY += lineHeight(base - 1);
				pdf.text(`${line}`, right, metaY, { align: "right" });
			});

		y = Math.max(y, metaY, bandHeight) + gap;
	}

	function drawHeaderColumns(stacked) {

		var left = margin;
		var cursor = margin;

		if (logo) {
			const logoHeight = 14;
			const logoWidth = Math.min(50, logoHeight * (logo.ratio || 1));

			pdf.addImage(logo.data, "PNG", left, cursor, logoWidth, logoHeight);
			cursor += logoHeight + 4;
		}

		var fromY = cursor + lineHeight(base + 5);

		setText(base + 5, "bold");
		pdf.text(`${invoice?.from?.name ?? ""}`, left, fromY);

		setText(base - 1, "normal", muted);

		[invoice?.from?.address, invoice?.from?.city, invoice?.from?.email, invoice?.from?.phone]
			.filter(Boolean)
			.forEach(line => {
				fromY += lineHeight(base - 1);
				pdf.text(`${line}`, left, fromY);
			});

		if (stacked) {

			/* Title under the shop rather than beside it, over a full-width
				 rule - the arrangement the Minimal template previews. */
			y = fromY + gap;

			pdf.setDrawColor(rule[0], rule[1], rule[2]);
			pdf.setLineWidth(0.2);
			pdf.line(margin, y, right, y);

			y += gap * 0.8;

			setText(base + 9, "bold");
			write("INVOICE", margin);

			var metaY = y - lineHeight(base - 1);

			setText(base - 1, "normal", muted);

			[`#${invoice?.number ?? ""}`, invoice?.date, invoice?.paymentStatus ? `Payment: ${invoice.paymentStatus}` : null]
				.filter(Boolean)
				.forEach(line => {
					metaY += lineHeight(base - 1);
					pdf.text(`${line}`, right, metaY, { align: "right" });
				});

			y = Math.max(y, metaY) + gap;

			return;
		}

		var metaY = cursor + lineHeight(base + 4);

		setText(base + 4, "bold");
		pdf.text("INVOICE", right, metaY, { align: "right" });

		setText(base - 1, "normal", muted);

		[
			`#${invoice?.number ?? ""}`,
			invoice?.date,
			invoice?.paymentMethod,
			invoice?.paymentStatus ? `Payment: ${invoice.paymentStatus}` : null,
		]
			.filter(Boolean)
			.forEach(line => {
				metaY += lineHeight(base - 1);
				pdf.text(`${line}`, right, metaY, { align: "right" });
			});

		y = Math.max(fromY, metaY) + gap;
	}

	if (template.header === "band") {
		drawHeaderBand();
	} else {
		drawHeaderColumns(template.header === "stacked");
	}


	/* ---- bill to ----------------------------------------------------- */

	setText(base - 2, "bold", muted);
	write("BILL TO", margin);

	y += lineHeight(base);

	setText(base, "bold");
	write(invoice?.to?.name, margin);

	setText(base - 1, "normal", muted);

	[invoice?.to?.address, invoice?.to?.city, invoice?.to?.phone].filter(Boolean).forEach(line => {
		y += lineHeight(base - 1);
		write(line, margin);
	});

	y += gap;


	/* ---- items ------------------------------------------------------- */

	/* Description takes what the three number columns leave. */
	const columns = [
		{ key: "name", align: "left", width: contentWidth - 60 },
		{ key: "qty", align: "center", width: 16 },
		{ key: "price", align: "right", width: 22 },
		{ key: "total", align: "right", width: 22 },
	];

	const columnX = [];
	var runningX = margin;

	columns.forEach(column => {
		columnX.push(runningX);
		runningX += column.width;
	});

	const cellPadding = 2;
	const headerHeight = lineHeight(base) + rowGap;

	function cellX(index, align) {

		if (align === "right") {
			return columnX[index] + columns[index].width - cellPadding;
		}

		if (align === "center") {
			return columnX[index] + (columns[index].width / 2);
		}

		return columnX[index] + cellPadding;
	}

	function drawTableHeader() {

		if (template.table === "zebra") {
			pdf.setFillColor(accent[0], accent[1], accent[2]);
			pdf.rect(margin, y, contentWidth, headerHeight, "F");
			setText(base - 2, "bold", accentText);
		} else if (template.table === "bordered") {
			pdf.setFillColor(245, 245, 245);
			pdf.rect(margin, y, contentWidth, headerHeight, "F");
			setText(base - 2, "bold", muted);
		} else {
			setText(base - 2, "bold", muted);
		}

		const textY = y + headerHeight - rowGap * 0.55;

		pdf.text("DESCRIPTION", cellX(0, "left"), textY);
		pdf.text("QTY", cellX(1, "center"), textY, { align: "center" });
		pdf.text("UNIT PRICE", cellX(2, "right"), textY, { align: "right" });
		pdf.text("TOTAL", cellX(3, "right"), textY, { align: "right" });

		pdf.setDrawColor(rule[0], rule[1], rule[2]);
		pdf.setLineWidth(template.table === "lines" ? 0.4 : 0.2);

		if (template.table === "bordered") {
			pdf.rect(margin, y, contentWidth, headerHeight);
		} else {
			pdf.line(margin, y + headerHeight, right, y + headerHeight);
		}

		y += headerHeight;
	}

	drawTableHeader();

	const items = invoice?.items ?? [];

	items.forEach((item, index) => {

		setText(base, "normal");

		const name = plainText(item.name) || "-";
		const lines = pdf.splitTextToSize(name, columns[0].width - (cellPadding * 2));
		const rowHeight = Math.max(lines.length * lineHeight(base), lineHeight(base)) + rowGap;

		/* A row that will not fit starts the next page, under a repeat of the
			 column heads - a table whose header is only on page one is a puzzle
			 by page two. */
		if (y + rowHeight > pageBottom) {
			pdf.addPage();
			y = margin;
			drawTableHeader();
			setText(base, "normal");
		}

		if (template.table === "zebra" && index % 2 === 1) {
			pdf.setFillColor(249, 250, 251);
			pdf.rect(margin, y, contentWidth, rowHeight, "F");
		}

		const textY = y + lineHeight(base) * 0.85;

		setText(base, "normal");
		pdf.text(lines, cellX(0, "left"), textY);
		pdf.text(`${item.qty}`, cellX(1, "center"), textY, { align: "center" });
		pdf.text(money(item.price), cellX(2, "right"), textY, { align: "right" });
		pdf.text(money(item.qty * item.price), cellX(3, "right"), textY, { align: "right" });

		pdf.setDrawColor(rule[0], rule[1], rule[2]);
		pdf.setLineWidth(0.2);

		if (template.table === "bordered") {
			pdf.rect(margin, y, contentWidth, rowHeight);

			columnX.slice(1).forEach(x => pdf.line(x, y, x, y + rowHeight));
		} else {
			pdf.line(margin, y + rowHeight, right, y + rowHeight);
		}

		y += rowHeight;
	});

	y += gap;


	/* ---- totals ------------------------------------------------------ */

	const totalsRows = [
		{ label: "Subtotal", value: money(invoice?.subtotal) },
		invoice?.discount > 0 ? { label: "Discount", value: `- ${money(invoice.discount)}` } : null,
		invoice?.shipping > 0 ? { label: "Delivery charge", value: money(invoice.shipping) } : null,
		{ label: "Total", value: money(invoice?.total), strong: true },
		invoice?.advance > 0 ? { label: "Advance paid", value: `- ${money(invoice.advance)}` } : null,
		invoice?.advance > 0 ? { label: "Amount due", value: money(invoice.due), strong: true, accent: true } : null,
	].filter(Boolean);

	const totalsWidth = 78;
	const totalsX = right - totalsWidth;
	const totalsHeight = (totalsRows.length * lineHeight(base + 1)) + (rowGap * 2);

	/* The totals are one block: it moves to the next page whole rather than
		 leaving "Total" stranded under a page break. */
	if (y + totalsHeight > pageBottom) {
		pdf.addPage();
		y = margin;
	}

	if (template.totals === "box") {
		pdf.setFillColor(249, 250, 251);
		pdf.setDrawColor(rule[0], rule[1], rule[2]);
		pdf.setLineWidth(0.2);
		pdf.roundedRect(totalsX, y, totalsWidth, totalsHeight, 1.5, 1.5, "FD");
	}

	y += rowGap;

	totalsRows.forEach(row => {

		y += lineHeight(base + 1);

		if (row.label === "Total") {
			pdf.setDrawColor(accent[0], accent[1], accent[2]);
			pdf.setLineWidth(0.5);
			pdf.line(totalsX + 3, y - lineHeight(base + 1) + 1.5, right - 3, y - lineHeight(base + 1) + 1.5);
		}

		setText(row.strong ? base + 1 : base, row.strong ? "bold" : "normal", row.accent ? accent : ink);

		pdf.text(`${row.label}`, totalsX + 4, y);
		pdf.text(`${row.value}`, right - 4, y, { align: "right" });
	});

	y += gap;


	/* ---- footer ------------------------------------------------------ */

	if (template.note) {

		if (y > pageBottom) {
			pdf.addPage();
			y = margin;
		}

		setText(base - 1, "normal", muted);
		write(template.note, margin);
	}

	/* Page numbers are stamped at the end, when there is a count to stamp. A
		 single page gets none - "Page 1 of 1" is noise. */
	const pages = pdf.getNumberOfPages();

	if (pages > 1) {
		for (var page = 1; page <= pages; page++) {
			pdf.setPage(page);
			setText(base - 2, "normal", muted);
			pdf.text(`Page ${page} of ${pages}`, right, pageHeight - (margin * 0.5), { align: "right" });
		}
	}

	const fileName = `invoice-${invoice?.number || "export"}.pdf`;

	pdf.save(fileName);

	return fileName;
}
