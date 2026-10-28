"use client";

import React from "react";
import Link from "next/link";
import * as TablerIcons from "@tabler/icons-react";

import { useQuoteStore } from "../lib/store";

/*
	A header badge: how many products are waiting to be quoted, linking to
	the page that holds the list.

	Without it a shopper who adds three things to a quote has no sign the
	list exists anywhere - the cart badge beside it counts a different
	basket and will say zero.

	Same editor contract as a core element. On the canvas it shows a count
	so the badge can be positioned; on the page it is the real one.
*/

const QuoteCount = (props) => {

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
	var label = options?.label ?? "Quote list";
	var showLabel = options?.showLabel !== false;
	var hideWhenEmpty = options?.hideWhenEmpty === true;
	var icon = options?.icon ?? "IconFileInvoice";
	var iconSize = Number(options?.iconSize ?? 20);

	const settings = useQuoteStore((s) => s.settings);
	const items = useQuoteStore((s) => s.items);
	const itemsHydrated = useQuoteStore((s) => s.itemsHydrated);

	const isEditor = typeof setSelectedId === "function";

	const count = isEditor
		? 2
		: items.reduce((sum, item) => sum + (parseInt(item?.quantity, 10) || 0), 0);

	/*
		Held back until the list has been read from storage. Rendering a zero
		first and the real number a frame later makes the badge flicker on
		every page load for exactly the shoppers who are using it.
	*/
	if (!isEditor && !itemsHydrated) return null;
	if (!isEditor && hideWhenEmpty && count === 0) return null;

	const IconX = icon ? TablerIcons[icon] : null;

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

			<Link
				href={settings?.quotePageUrl || "/request-a-quote"}
				onClick={(e) => isEditor && e.preventDefault()}
				className={`${cssSelectors['link']?.classes ?? ''}`}>

				{IconX && <IconX size={iconSize} />}
				{showLabel && <span className={`${cssSelectors['label']?.classes ?? ''}`}>{label}</span>}
				{count > 0 && <span className={`${cssSelectors['badge']?.classes ?? ''}`}>{count}</span>}

			</Link>

		</div>
	);
};

export default QuoteCount;
