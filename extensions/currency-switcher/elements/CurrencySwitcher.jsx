"use client";

import React from "react";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useCurrencyStore, activeCurrency } from "../lib/store";
import { noteText } from "../lib/defaults";

/*
	The switcher.

	Same editor contract as a core element: the root carries `draggable`,
	the block id, the hover outline, the drag-over marker and the selected
	outline. Drop any of them and the block looks right on the page but
	cannot be picked up on the canvas.

	On the canvas it always draws, with sample currencies if the merchant
	has not added any yet - a block that renders nothing until currencies
	exist cannot be positioned, and looks broken rather than unconfigured.
*/

const SAMPLE = [
	{ code: "USD", symbol: "$", enabled: true },
	{ code: "EUR", symbol: "€", enabled: true },
];

const CurrencySwitcher = (props) => {

	var draggingBlock = props?.draggingBlock;
	var setDraggingBlock = props?.setDraggingBlock;

	var dragOverIndex = props?.dragOverIndex;
	var setDragOverIndex = props?.setDragOverIndex;

	var setSelectedId = props?.setSelectedId;
	var selectedId = props?.selectedId;
	var index = props?.index;
	var cssSelectors = props?.cssSelectors ?? {};

	var id = props?.id;
	var type = props?.type;

	var options = props?.options ?? {};
	var variant = options?.variant ?? "dropdown";
	var showSymbol = options?.showSymbol !== false;
	var showNote = options?.showNote === true;

	const baseCode = useCounterStore((s) => s.currency);
	const baseSymbol = useCounterStore((s) => s.currencySymbole);

	const settings = useCurrencyStore((s) => s.settings);
	const code = useCurrencyStore((s) => s.code);
	const hydrated = useCurrencyStore((s) => s.hydrated);
	const choose = useCurrencyStore((s) => s.choose);

	const [openList, setOpenList] = React.useState(false);
	const rootRef = React.useRef(null);

	/* A dropdown that only closes on its own options is a dropdown left open
	   over the page the shopper went back to reading. */
	React.useEffect(() => {
		if (!openList) return;
		const onDown = (event) => {
			if (!rootRef.current?.contains(event.target)) setOpenList(false);
		};
		const onKey = (event) => { if (event.key === "Escape") setOpenList(false); };
		document.addEventListener("mousedown", onDown);
		window.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onDown);
			window.removeEventListener("keydown", onKey);
		};
	}, [openList]);

	const isEditor = typeof setSelectedId === "function";

	const configured = (settings?.currencies ?? []).filter((c) => c.enabled !== false);
	const extras = isEditor && configured.length === 0 ? SAMPLE : configured;

	/* The store's own currency is always an option and is never in the
	   merchant's list - it is the one everything is priced in. */
	const base = { code: baseCode, symbol: baseSymbol, isBase: true };
	const all = [base, ...extras];

	/* Nothing to switch between. One currency and a picker containing it is
	   furniture, so on the live page the block stands down. */
	if (!isEditor && extras.length === 0) return null;

	const current = activeCurrency({ code, settings }) ?? base;

	function pick(entry) {
		if (isEditor) return;
		choose(entry.isBase ? null : entry.code);
		setOpenList(false);
	}

	const label = (entry) => (showSymbol && entry.symbol ? `${entry.code} ${entry.symbol}` : entry.code);

	const editorProps = isEditor
		? {
			draggable: true,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId != id ? id : null);
			},
			onDragStart: (e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			},
			onDragEnd: () => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			},
			onDragOver: (e) => { e.preventDefault(); setDragOverIndex(index); },
			onDragLeave: () => setDragOverIndex(null),
		}
		: {};

	return (
		<div
			ref={rootRef}
			id={id}
			index={index}
			type={type}
			{...editorProps}
			className={`${cssSelectors['*']?.classes ?? ''} ${isEditor ? `hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}` : ''}`}>

			{variant === "inline" ? (
				<div className={`${cssSelectors['inline']?.classes ?? ''}`}>
					{all.map((entry) => {
						const selected = entry.code === current.code;
						return (
							<button
								key={entry.code}
								type="button"
								onClick={(e) => { e.stopPropagation(); pick(entry); }}
								aria-pressed={selected}
								className={`${cssSelectors['inlineItem']?.classes ?? ''} ${selected ? cssSelectors['inlineSelected']?.classes ?? '' : ''}`}>
								{label(entry)}
							</button>
						);
					})}
				</div>
			) : (
				<div className={`${cssSelectors['dropdown']?.classes ?? ''}`}>
					<button
						type="button"
						onClick={(e) => { e.stopPropagation(); if (!isEditor) setOpenList((v) => !v); }}
						aria-haspopup="listbox"
						aria-expanded={openList}
						className={`${cssSelectors['trigger']?.classes ?? ''}`}>
						{/*
							Before the stored choice has been read the base is
							shown, which is also what the server rendered - so
							the first paint matches and there is nothing for
							React to disagree about. A shopper who chose
							another currency sees it a frame later.
						*/}
						<span>{label(hydrated ? current : base)}</span>
						<IconChevronDown size={14} />
					</button>

					{openList && (
						<div role="listbox" className={`${cssSelectors['list']?.classes ?? ''}`}>
							{all.map((entry) => {
								const selected = entry.code === current.code;
								return (
									<button
										key={entry.code}
										type="button"
										role="option"
										aria-selected={selected}
										onClick={(e) => { e.stopPropagation(); pick(entry); }}
										className={`${cssSelectors['item']?.classes ?? ''} ${selected ? cssSelectors['itemSelected']?.classes ?? '' : ''}`}>
										<span>{label(entry)}</span>
										{selected && <IconCheck size={14} />}
									</button>
								);
							})}
						</div>
					)}
				</div>
			)}

			{/* The honesty line. Only worth saying while a converted currency
			    is actually in use - under the base currency there is nothing
			    approximate about the prices. */}
			{showNote && settings?.showNote !== false && current.isBase !== true && (
				<div className={`${cssSelectors['note']?.classes ?? ''}`}>
					{noteText(settings?.noteTemplate, baseCode, current)}
				</div>
			)}

		</div>
	);
};

export default CurrencySwitcher;
