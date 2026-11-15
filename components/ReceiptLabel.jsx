import React, { useRef, useState, useEffect } from "react";
import { IconPrinter, IconLayoutGrid, IconChevronDown, IconCheck } from "@tabler/icons-react";
import PopoverButton from "./PopoverButton";

import Spinner from '../components/Spinner';
import ReceiptPaper from './ReceiptPaper';
import {
	RECEIPT_TEMPLATES,
	PAPER_PRESETS,
	DEFAULT_TEMPLATE_ID,
	MIN_WIDTH,
	MAX_WIDTH,
	getTemplate,
	clampWidth,
	readReceiptPrefs,
	writeReceiptPrefs,
	receiptPrintCss,
} from './receiptTemplates';

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


/* Global CSS styles `button` and `input` with unlayered rules, so they beat
	 Tailwind utilities and anything that has to differ marks itself important. */
const OPTION_BUTTON =
	"!rounded-lg !border !border-gray-200 !bg-white !px-3 !py-1.5 !text-xs !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-gray-300 hover:!bg-gray-50 hover:!text-gray-900";

const SECONDARY_BUTTON =
	"inline-flex h-9 items-center gap-2 !rounded-lg !border !border-gray-200 !bg-white !px-3.5 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-300 hover:!bg-gray-50";

const OPTION_BUTTON_ACTIVE =
	"!border-brand !bg-brand/5 !text-brand";


/**
 * A sketch of what a template puts on the paper.
 *
 * Four names in a row say nothing about what is being chosen between, and the
 * preview underneath can only show one at a time. These are deliberately
 * crude - bars in the arrangement the real thing uses - because they have to
 * read at 46 pixels wide.
 */
function TemplateThumb(props) {

	const template = props?.template;

	const bar = (barWidth, extra = {}) => (
		<div style={{ height: 3, width: barWidth, borderRadius: 2, background: "#d1d5db", ...extra }} />
	);

	const ruleStyle = template.rule === "none" ? "solid" : template.rule;

	return (
		<div
			aria-hidden="true"
			style={{
				width: 46,
				height: 58,
				padding: 5,
				borderRadius: 4,
				background: "#ffffff",
				border: "1px solid #e5e7eb",
				display: "flex",
				flexDirection: "column",
				gap: 4,
				overflow: "hidden",
				flexShrink: 0,
			}}>

			{template.heading === "split" ? (
				<div style={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
					<div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
						{bar(12, { background: template.accent })}
						{bar(10)}
					</div>
					<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
						{bar(10, { background: template.accent })}
						{bar(7)}
					</div>
				</div>
			) : (
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
					{bar(template.heading === "store" ? 22 : 16, { background: template.accent, height: 4 })}
					{bar(13)}
				</div>
			)}

			<div style={{ borderTop: `1px ${ruleStyle} #d1d5db` }} />

			{/* Items: narrower first column for the table layout, a single bar
			    per line for the 58mm roll, a bar over a short second line for
			    the rest. */}
			<div style={{ display: "flex", flexDirection: "column", gap: template.items === "line" ? 3 : 4 }}>
				{[0, 1].map(index => (
					<div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 4 }}>
						<div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
							{bar(template.items === "table" ? 14 : 18)}
							{template.items === "stacked" && bar(9, { background: "#e5e7eb" })}
						</div>
						{bar(7)}
					</div>
				))}
			</div>

			<div style={{ marginTop: "auto" }}>
				{template.totalsBox ? (
					<div style={{ border: "1px solid #e5e7eb", background: "#f9fafb", borderRadius: 3, padding: 3, display: "flex", flexDirection: "column", gap: 2 }}>
						{bar(26)}
						{bar(18, { background: template.accent })}
					</div>
				) : (
					<div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
						<div style={{ borderTop: `1px ${ruleStyle} #d1d5db`, marginBottom: 2 }} />
						{bar(28)}
						{bar(20, { background: template.accent })}
					</div>
				)}
			</div>

		</div>
	);
}


export default function ReceiptLabel(props) {

	const { token, settings, addNotification, privacyMode } = useCounterStore()
	const { wrapCurrency } = useUtilsStore();

	const printRef = useRef();
	var order_id = props?.order_id

	var hidePrintButton = props?.hidePrintButton;
	var [orderData, setorderData] = useState(props?.orderData);
	var [lineItems, setlineItems] = useState(props?.lineItems);
	var [loadFailed, setloadFailed] = useState(false);

	/*
		Which template the receipt is printed with, and how wide the paper is.

		A caller can pin both - the bulk print screen can hand every slip in a
		run the same pair - and otherwise they are what was picked last time.
		The printer on the counter does not change between orders, so asking
		again on every receipt is a question with a known answer.

		The stored pair is read after mount and never during the first render,
		which is the part that is easy to get wrong: this screen is rendered on
		the server, where there is no storage, so a first client render that
		already knew the saved template would contradict the markup it is
		hydrating - and React answers that by throwing the tree away and
		building it again. The cost is that the default shows for one frame.
	*/
	const [prefs, setPrefs] = useState({
		templateId: DEFAULT_TEMPLATE_ID,
		width: getTemplate(DEFAULT_TEMPLATE_ID).width,
	});

	useEffect(() => {
		setPrefs(readReceiptPrefs());
	}, []);

	const template = getTemplate(props?.template ?? prefs.templateId);
	const width = clampWidth(props?.width ?? prefs.width);

	/* The width box keeps its own half-finished value, so that emptying the
		 field to type 300 does not snap the paper to the minimum on the way. */
	const [widthDraft, setWidthDraft] = useState(String(width));

	useEffect(() => {
		setWidthDraft(String(width));
	}, [width]);


	/*
		Loads the order unless the caller passed it. Waits for the login token:
		it is restored from storage after the first render, and asking before
		then sent "Bearer null", failed, and was never asked again - so the
		receipt stayed on "Loading the order…" and Print receipt stayed off.
	*/
	useEffect(() => {

		if (!props?.orderData && token && order_id) {
			get_order();
		}

	}, [token, order_id]);


	function applyPrefs(next) {

		const merged = {
			templateId: next.templateId ?? prefs.templateId,
			width: clampWidth(next.width ?? prefs.width),
		};

		setPrefs(merged);
		writeReceiptPrefs(merged);
	}


	/*
		A width typed into the box is taken when the field is left - but the
		box sits in a popover, and closing that by clicking outside unmounts the
		box without a blur. So closing it takes the typed width too. Through a
		ref: the popover's outside-click handler keeps the callback from the
		render it opened in, which would see a stale draft.
	*/
	const latestWidth = useRef(null);
	latestWidth.current = () => {
		if (widthDraft !== String(width)) {
			applyPrefs({ width: widthDraft });
		}
	};


	function selectTemplate(id) {

		/* The width follows the template it belongs to - a 58mm layout picked
			 at 420px is not the thing the thumbnail showed - and the box below is
			 right there to set it to something else. */
		applyPrefs({ templateId: id, width: getTemplate(id).width });
	}


	function get_order() {


		// if (!token) {
		//   //throw new Error("No token found");
		// }
		var postData = {
			id: order_id,
		};
		postData = JSON.stringify(postData);

		setloadFailed(false);

		fetch(serverUrl + "wp-json/combo-store/v2/get_order", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						var order = res?.order;
						var line_items = res?.line_items;

						setorderData(order)
						setlineItems(line_items)

					});
				}
			})
			.catch((_error) => {
				/* Said on screen, instead of "Loading the order…" for ever. */
				setloadFailed(true);
			});

	}


	/**
	 * Print the slip that is on screen.
	 *
	 * The markup goes into a blank frame with the template's own stylesheet -
	 * see receiptPrintCss - because the preview is styled by the dashboard and
	 * the paper copy cannot be.
	 *
	 * It used to call `print()` in the same breath as writing the document,
	 * which asks the browser to print a page whose images have not arrived: a
	 * branded template would print with a hole where the logo goes. Waiting
	 * for them costs nothing on a slip that has none, and the timeout is there
	 * so that an image which never loads still prints the receipt.
	 */
	const handlePrint = () => {

		const node = printRef.current;

		if (!node) {
			return;
		}

		/*
			Printed from a hidden frame in this page, not a pop-up window. The
			pop-up was opened, printed and closed by this page's script: Chrome
			can return from a print() called on another window before its dialog
			is done, so the close() that followed shut the window - and the
			print - straight away. Pop-up blockers stopped it too. A frame needs
			neither, and is removed once its print dialog closes.
		*/
		document.getElementById("receipt-print-frame")?.remove();

		const frame = document.createElement("iframe");
		frame.id = "receipt-print-frame";
		frame.setAttribute("aria-hidden", "true");
		frame.setAttribute("tabindex", "-1");
		/* Off screen but laid out: a display:none frame can print blank. */
		frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;";
		document.body.appendChild(frame);

		const win = frame.contentWindow;

		if (!win) {
			frame.remove();
			addNotification({
				type: 'error',
				title: 'Could not print the receipt',
				content: 'Try again, or reload the page.',
			})

			return;
		}

		win.document.open();
		win.document.write(`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Receipt ${orderData?.id ?? ""}</title>
<style>${receiptPrintCss(template, width)}</style>
</head>
<body>${node.innerHTML}</body>
</html>`);

		win.document.close();

		var printed = false;

		const cleanup = () => frame.remove();

		const run = () => {

			if (printed || !frame.isConnected) {
				return;
			}

			printed = true;

			/* Removed after the dialog, not straight after print(), for the same reason as above; a minute's fallback for browsers without afterprint. */
			win.addEventListener("afterprint", () => window.setTimeout(cleanup, 500));
			window.setTimeout(cleanup, 60000);

			try {
				win.focus();
				win.print();
			} catch (error) {
				cleanup();
				addNotification({
					type: 'error',
					title: 'Could not print the receipt',
					content: error?.message ?? 'Try again, or reload the page.',
				})
			}
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


	const ready = Boolean(orderData?.id);


	return (
		<div className="flex flex-col gap-4">

			{/*
				The toolbar used to be a bare number box and a blue rectangle
				floated to the right of an otherwise empty row, with the one real
				decision - what the receipt should look like - not offered at all.
				It is a card now: the templates as thumbnails that can be compared,
				the paper width with the roll sizes it is usually one of, and Print
				as a labelled primary button.
			*/}
			{!hidePrintButton && (
				<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

					<div className="flex flex-wrap items-start justify-between gap-3">

						<div className="min-w-0">
							<h3 className="text-sm font-semibold text-gray-900">Receipt template</h3>
							<p className="mt-0.5 text-xs text-gray-500">
								Pick a layout and paper width under Template, check the preview below, then print. The choice is kept for the next order.
							</p>
						</div>

						<div className="flex flex-wrap items-center gap-2">

						{/* The templates and the paper width, in a popover: as a grid they took most of the card. */}
						<PopoverButton
							title="Receipt template & paper"
							position="bottomRight"
							closeOnOutsideClick
							onTriggerOpen={wasOpen => { if (wasOpen) latestWidth.current?.(); }}
							buttonClass={`${SECONDARY_BUTTON} cursor-pointer`}
							buttonIcon={<IconLayoutGrid size={18} />}
							buttonLabel={<span className="flex items-center gap-1">Template: <span className="font-semibold text-gray-900">{template.name}</span><span className="text-gray-400">·</span><span className="font-semibold text-gray-900">{width}px</span><IconChevronDown size={16} className="text-gray-400" /></span>}
							popoverClass="absolute z-[60] mt-2 w-[min(92vw,560px)] max-h-[70vh] overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl">

					<div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2">
						{RECEIPT_TEMPLATES.map(item => {

							const active = item.id === template.id;

							return (
								<button
									key={item.id}
									type="button"
									aria-pressed={active}
									title={item.hint}
									onClick={() => selectTemplate(item.id)}
									className={`flex items-start gap-3 !rounded-xl !border !p-3 !text-left !shadow-none transition-colors ${active
										? "!border-brand !bg-brand/5"
										: "!border-gray-200 !bg-white hover:!border-gray-300 hover:!bg-gray-50"}`}>

									<TemplateThumb template={item} />

									<span className="min-w-0 flex-1">
										<span className={`flex items-center gap-1 text-xs font-semibold ${active ? "text-brand" : "text-gray-900"}`}>
											{item.name}
											{active && <IconCheck size={14} />}
										</span>
										<span className="mt-1 block text-[11px] leading-snug text-gray-500">
											{item.hint}
										</span>
										<span className="mt-1 block text-[11px] text-gray-400">
											{item.width}px paper
										</span>
									</span>

								</button>
							);
						})}
					</div>

					<div className="flex flex-wrap items-center gap-2 border-t border-gray-100 px-3 py-3">

						<label htmlFor="receipt-width" className="text-xs font-medium text-gray-600">
							Paper width
						</label>

						{PAPER_PRESETS.map(preset => (
							<button
								key={preset.label}
								type="button"
								aria-pressed={width === preset.width}
								onClick={() => applyPrefs({ width: preset.width })}
								className={`${OPTION_BUTTON} ${width === preset.width ? OPTION_BUTTON_ACTIVE : ""}`}>
								{preset.label}
							</button>
						))}

						<div className="flex items-center gap-1.5">
							<input
								id="receipt-width"
								type="number"
								min={MIN_WIDTH}
								max={MAX_WIDTH}
								value={widthDraft}
								onChange={ev => setWidthDraft(ev.target.value)}
								/* Taken once the field is left or entered, so a
								   half-typed number is never the paper. */
								onBlur={ev => applyPrefs({ width: ev.target.value })}
								onKeyDown={ev => {
									if (ev.key === "Enter") {
										applyPrefs({ width: ev.target.value });
									}
								}}
								className="w-[84px] !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" />
							<span className="text-xs text-gray-500">px</span>
						</div>

						<span className="text-[11px] text-gray-400">
							58mm ≈ 220px · 80mm ≈ 300px
						</span>

					</div>

						</PopoverButton>

						<button
							type="button"
							disabled={!ready}
							onClick={handlePrint}
							className="inline-flex h-9 items-center gap-2 !rounded-lg !border-0 !bg-brand !px-4 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-brand-600 disabled:!cursor-not-allowed disabled:!opacity-60">
							<IconPrinter size={18} />
							Print receipt
						</button>

						</div>

					</div>

				</div>
			)}


			{!ready && loadFailed && (
				<div className="flex flex-col items-center justify-center gap-2 py-10 text-sm text-gray-600">
					<span>Couldn&apos;t load the order for this receipt.</span>
					<button type="button" onClick={get_order} className={`${SECONDARY_BUTTON} cursor-pointer`}>Try again</button>
				</div>
			)}

			{!ready && !loadFailed && (
				<div className="flex items-center justify-center gap-2 py-10 text-sm text-gray-500">
					<Spinner size={18} fill="#9ca3af" />
					<span>Loading the order…</span>
				</div>
			)}

			{ready && (
				/* The slip sits on a backdrop rather than floating on the page, so
				   that the edge of the paper - the thing being sized - can be seen.
				   The bulk print screen brings its own frame, hence the plain
				   wrapper when the toolbar is hidden. */
				<div className={hidePrintButton ? "flex justify-center" : "flex justify-center rounded-xl bg-gray-100 p-6"}>
					<div ref={printRef} className={hidePrintButton ? "" : "shadow-lg"}>
						<ReceiptPaper
							template={template}
							width={width}
							order={orderData}
							items={lineItems}
							settings={settings}
							money={wrapCurrency}
							privacyMode={privacyMode}
							/>
					</div>
				</div>
			)}

		</div>
	);
}
