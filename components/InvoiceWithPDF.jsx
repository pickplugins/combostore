"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { IconFileTypePdf, IconPrinter } from "@tabler/icons-react";

import Spinner from "./Spinner";
import InvoicePaper from "./InvoicePaper";
import { downloadInvoicePdf } from "./invoicePdf";
import {
	INVOICE_TEMPLATES,
	PAPER_SIZES,
	DEFAULT_INVOICE_TEMPLATE_ID,
	DEFAULT_PAPER_ID,
	getInvoiceTemplate,
	getPaper,
	normalizeInvoice,
	readInvoicePrefs,
	writeInvoicePrefs,
	invoicePrintCss,
} from "./invoiceTemplates";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';


/* Global CSS styles `button` with unlayered rules, so it beats Tailwind
	 utilities and anything that has to differ marks itself important. */
const SECONDARY_BUTTON =
	"inline-flex h-9 items-center gap-2 !rounded-lg !border !border-gray-200 !bg-white !px-3.5 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-300 hover:!bg-gray-50 disabled:!cursor-not-allowed disabled:!opacity-60";

const PRIMARY_BUTTON =
	"inline-flex h-9 items-center gap-2 !rounded-lg !border-0 !bg-brand !px-4 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-brand-600 disabled:!cursor-not-allowed disabled:!opacity-60";

const OPTION_BUTTON =
	"!rounded-lg !border !border-gray-200 !bg-white !px-3 !py-1.5 !text-xs !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-gray-300 hover:!bg-gray-50 hover:!text-gray-900";

const OPTION_BUTTON_ACTIVE = "!border-brand !bg-brand/5 !text-brand";


/**
 * A sketch of what the template puts on the sheet.
 *
 * The same idea as the receipt picker's: four names say nothing about what is
 * being chosen between, and the preview can only show one at a time.
 */
function TemplateThumb(props) {

	const template = props?.template;

	const bar = (width, extra = {}) => (
		<div style={{ height: 3, width, borderRadius: 2, background: "#d1d5db", ...extra }} />
	);

	const row = () => (
		<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
			{bar(16)}
			{bar(4)}
			{bar(6)}
		</div>
	);

	return (
		<div
			aria-hidden="true"
			style={{
				width: 46,
				height: 58,
				borderRadius: 4,
				background: "#ffffff",
				border: "1px solid #e5e7eb",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				flexShrink: 0,
			}}>

			{/* Header: a full-width coloured band, a stacked title, or two
			    columns facing each other. */}
			{template.header === "band" ? (
				<div style={{ background: template.accent, padding: "5px 5px 6px", display: "flex", justifyContent: "space-between", gap: 4 }}>
					{bar(14, { background: "rgba(255,255,255,0.9)" })}
					{bar(8, { background: "rgba(255,255,255,0.6)" })}
				</div>
			) : template.header === "stacked" ? (
				<div style={{ padding: "5px 5px 0", display: "flex", flexDirection: "column", gap: 2 }}>
					{bar(16, { background: template.accent })}
					{bar(10)}
					<div style={{ borderTop: "1px solid #e5e7eb", margin: "2px 0" }} />
					{bar(20, { background: template.accent, height: 4 })}
				</div>
			) : (
				<div style={{ padding: "5px 5px 0", display: "flex", justifyContent: "space-between", gap: 4 }}>
					<div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
						{bar(14, { background: template.accent })}
						{bar(10)}
					</div>
					<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
						{bar(10, { background: template.accent })}
						{bar(6)}
					</div>
				</div>
			)}

			{/* Table: a grid, striped rows, or rules only. */}
			<div style={{ padding: 5, display: "flex", flexDirection: "column", gap: template.density === "compact" ? 2 : 3 }}>
				{[0, 1, 2].map(index => (
					<div
						key={index}
						style={{
							padding: template.table === "bordered" ? 1 : 0,
							border: template.table === "bordered" ? "1px solid #e5e7eb" : undefined,
							background: template.table === "zebra" && index % 2 === 1 ? "#f3f4f6" : undefined,
							borderBottom: template.table === "lines" ? "1px solid #e5e7eb" : undefined,
						}}>
						{row()}
					</div>
				))}
			</div>

			<div style={{ marginTop: "auto", padding: 5, display: "flex", justifyContent: "flex-end" }}>
				{template.totals === "box" ? (
					<div style={{ border: "1px solid #e5e7eb", background: "#f9fafb", borderRadius: 2, padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
						{bar(16)}
						{bar(11, { background: template.accent })}
					</div>
				) : (
					<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
						{bar(16)}
						{bar(11, { background: template.accent })}
					</div>
				)}
			</div>

		</div>
	);
}


export default function InvoiceWithPDF({ invoice = null, template: pinnedTemplate = null, paper: pinnedPaper = null, hideToolbar = false }) {

	const { settings, addNotification, currencySymbole, currencyPosition, privacyMode } = useCounterStore()
	const { wrapCurrency } = useUtilsStore();

	const paperRef = useRef(null);
	const [working, setWorking] = useState(false);

	/*
		Which template the invoice is drawn with, and what it is printed on.

		Read after mount and never during the first render: these screens are
		server-rendered, the server has no storage, and a first client render
		that already knew the saved template would contradict the markup it is
		hydrating - which React answers by throwing the tree away and building
		it again.
	*/
	const [prefs, setPrefs] = useState({ templateId: DEFAULT_INVOICE_TEMPLATE_ID, paperId: DEFAULT_PAPER_ID });

	useEffect(() => {
		setPrefs(readInvoicePrefs());
	}, []);

	const template = getInvoiceTemplate(pinnedTemplate ?? prefs.templateId);
	const paper = getPaper(pinnedPaper ?? prefs.paperId);

	/*
		One shape for both renderers.

		The six screens that show an invoice each assemble their own object and
		they do not agree with each other - `qty` here, `quantity` there, the
		shop's own name hard-coded in all of them. Normalising once means the
		preview, the print window and the PDF are drawing the same invoice.
	*/
	const document_ = useMemo(() => normalizeInvoice(invoice, settings), [invoice, settings]);

	/* An invoice with neither a number nor a line on it has not arrived yet.
		 This used to fall back to a sample invoice for "Widget A" and "Service
		 B", so a slow order looked briefly like somebody else's. */
	const ready = Boolean(invoice) && Boolean(document_.number || document_.items.length);


	function applyPrefs(next) {

		const merged = {
			templateId: next.templateId ?? prefs.templateId,
			paperId: next.paperId ?? prefs.paperId,
		};

		setPrefs(merged);
		writeInvoicePrefs(merged);
	}


	/**
	 * Print the invoice that is on screen.
	 *
	 * The markup goes into a blank window with the template's own page setup -
	 * see invoicePrintCss - because the preview is styled by the dashboard and
	 * the printed copy cannot be. It waits for the images, so a template with
	 * a logo does not print the hole where one goes.
	 */
	const handlePrint = () => {

		const node = paperRef.current;

		if (!node) {
			return;
		}

		const win = window.open("", "", "width=900,height=1100");

		if (!win) {
			addNotification({
				type: 'error',
				title: 'Could not open the print window',
				content: 'Allow pop-ups for this site and try again.',
			})

			return;
		}

		win.document.write(`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Invoice ${document_.number ?? ""}</title>
<style>${invoicePrintCss(template, paper)}</style>
</head>
<body>${node.innerHTML}</body>
</html>`);

		win.document.close();

		var printed = false;

		const run = () => {

			if (printed || win.closed) {
				return;
			}

			printed = true;

			win.focus();
			win.print();
			win.close();
		};

		const images = Array.from(win.document.images ?? []);

		Promise.all(images.map(image => image.complete
			? Promise.resolve()
			: new Promise(resolve => {
				image.onload = resolve;
				image.onerror = resolve;
			})))
			.then(run)
			.catch(run);

		window.setTimeout(run, 2000);
	};


	/**
	 * Draw the PDF and hand it over.
	 *
	 * The failure used to be an `alert()` carrying a sentence that stopped in
	 * the middle of itself; this reports through the dashboard's own
	 * notifications, and the button says it is working while it is.
	 */
	const handleDownload = async () => {

		if (working) {
			return;
		}

		setWorking(true);

		try {
			await downloadInvoicePdf({
				invoice: document_,
				template,
				paper,
				currency: { symbol: currencySymbole, position: currencyPosition },
			});
		} catch (error) {
			addNotification({
				type: 'error',
				title: 'Could not create the PDF',
				content: error?.message ?? 'Try again, or print the invoice instead.',
			})
		} finally {
			setWorking(false);
		}
	};


	return (
		<div className="flex flex-col gap-4">

			{/*
				The toolbar was a single blue rectangle reading "Download PDF",
				floated right, with no say in what the PDF would look like and no
				way to print the thing at all. It is a card now: the templates as
				thumbnails that can be compared, the sheet it is going on, and the
				two things anyone does with a finished invoice.
			*/}
			{!hideToolbar && (
				<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

					<div className="flex flex-wrap items-start justify-between gap-3">

						<div className="min-w-0">
							<h3 className="text-sm font-semibold text-gray-900">Invoice template</h3>
							<p className="mt-0.5 text-xs text-gray-500">
								Pick a layout, check the preview below, then print or download. The choice is kept for the next invoice.
							</p>
						</div>

						<div className="flex items-center gap-2">
							<button
								type="button"
								disabled={!ready}
								onClick={handlePrint}
								className={SECONDARY_BUTTON}>
								<IconPrinter size={18} />
								Print
							</button>

							<button
								type="button"
								disabled={!ready || working}
								onClick={handleDownload}
								className={PRIMARY_BUTTON}>
								{working
									? <Spinner size={16} fill="#ffffff" />
									: <IconFileTypePdf size={18} />}
								{working ? "Preparing…" : "Download PDF"}
							</button>
						</div>

					</div>

					<div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
						{INVOICE_TEMPLATES.map(item => {

							const active = item.id === template.id;

							return (
								<button
									key={item.id}
									type="button"
									aria-pressed={active}
									title={item.hint}
									onClick={() => applyPrefs({ templateId: item.id })}
									className={`flex items-start gap-3 !rounded-xl !border !p-3 !text-left !shadow-none transition-colors ${active
										? "!border-brand !bg-brand/5"
										: "!border-gray-200 !bg-white hover:!border-gray-300 hover:!bg-gray-50"}`}>

									<TemplateThumb template={item} />

									<span className="min-w-0 flex-1">
										<span className={`block text-xs font-semibold ${active ? "text-brand" : "text-gray-900"}`}>
											{item.name}
										</span>
										<span className="mt-1 block text-[11px] leading-snug text-gray-500">
											{item.hint}
										</span>
									</span>

								</button>
							);
						})}
					</div>

					<div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">

						<span className="text-xs font-medium text-gray-600">Paper</span>

						{PAPER_SIZES.map(size => (
							<button
								key={size.id}
								type="button"
								aria-pressed={size.id === paper.id}
								onClick={() => applyPrefs({ paperId: size.id })}
								className={`${OPTION_BUTTON} ${size.id === paper.id ? OPTION_BUTTON_ACTIVE : ""}`}>
								{size.label}
							</button>
						))}

						<span className="text-[11px] text-gray-400">
							{paper.width}×{paper.height}mm · {template.pageMargin}mm margin
						</span>

					</div>

				</div>
			)}


			{!ready && (
				<div className="flex items-center justify-center gap-2 py-12 text-sm text-gray-500">
					<Spinner size={18} fill="#9ca3af" />
					<span>Preparing the invoice…</span>
				</div>
			)}

			{ready && (
				/* The sheet on a backdrop rather than floating on the page, so the
				   edge of the paper can be seen. */
				<div className={hideToolbar ? "" : "rounded-xl bg-gray-100 p-6"}>
					<div
						ref={paperRef}
						className={hideToolbar ? "" : "mx-auto bg-white shadow-lg"}
						style={{ maxWidth: `${paper.width * 3}px` }}>
						<InvoicePaper
							invoice={document_}
							template={template}
							paper={paper}
							money={wrapCurrency}
							privacyMode={privacyMode}
							/>
					</div>
				</div>
			)}

		</div>
	);
}
