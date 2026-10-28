"use client";

import React from "react";
import { IconInfoCircle } from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useCurrencyStore, activeCurrency } from "../lib/store";
import { noteText } from "../lib/defaults";

/*
	"Prices shown in USD. You will be charged in BDT."

	A separate block from the switcher because it is needed where the
	switcher is not: the cart and the checkout, where a shopper is about to
	commit and the amount their bank shows will not be the amount on screen.
	Converted prices without this somewhere are a surprise on a statement.

	It renders nothing while the shopper is in the store's own currency -
	there is nothing approximate to warn about then.
*/

const CurrencyNote = (props) => {

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
	var textOverride = options?.text ?? "";
	var showIcon = options?.showIcon !== false;
	var iconSize = Number(options?.iconSize ?? 14);

	const baseCode = useCounterStore((s) => s.currency);

	const settings = useCurrencyStore((s) => s.settings);
	const code = useCurrencyStore((s) => s.code);

	const isEditor = typeof setSelectedId === "function";

	const current = activeCurrency({ code, settings });

	/* On the canvas it always draws, against a sample currency, so it can be
	   placed and styled before anyone has switched to anything. */
	const shown = isEditor ? (current ?? { code: "USD", symbol: "$" }) : current;

	if (!shown) return null;

	const message = textOverride
		? noteText(textOverride, baseCode, shown)
		: noteText(settings?.noteTemplate, baseCode, shown);

	if (!message) return null;

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
			id={id}
			index={index}
			type={type}
			{...editorProps}
			className={`${cssSelectors['*']?.classes ?? ''} ${isEditor ? `hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}` : ''}`}>

			{showIcon && <IconInfoCircle size={iconSize} className={`${cssSelectors['icon']?.classes ?? ''}`} />}
			<span className={`${cssSelectors['text']?.classes ?? ''}`}>{message}</span>

		</div>
	);
};

export default CurrencyNote;
