"use client";

import React from "react";
import * as TablerIcons from "@tabler/icons-react";

import { useUtilsStore } from "../../../store/useUtilsStore";
import { useDiscountRulesStore } from "../lib/store";

/*
	The cart-facing half of the extension: the breakdown of which rules fired
	and what each one took off.

	The editor contract is the same as a core element's (see
	components/PageBuilder/elements/*): BlockPreview spreads the block onto
	this component and adds the editor props, so the root carries `draggable`,
	the block id, the hover outline, the drag-over marker and the selected
	outline. Dropping any of them leaves a block that looks right on the page
	and cannot be picked up on the canvas.

	One component serves the canvas and the live page, unlike core's paired
	`Cart` / `CartView`, because a manifest registers a single `render` per
	type. The editor props are the tell: BlockPreview passes `setSelectedId`,
	BlockRender passes only the block. On the canvas there is no cart to price,
	so it draws sample lines - a block that renders as nothing until a shopper
	with a qualifying cart loads it cannot be positioned or styled.
*/

const SAMPLE = {
	discountTotal: 310,
	freeShipping: true,
	shippingWaived: 60,
	lines: [
		{ ruleId: "sample-1", label: "10% off orders over 2000", amount: 250, freeShipping: false },
		{ ruleId: "sample-2", label: "Bulk discount", amount: 60, freeShipping: false },
		{ ruleId: "sample-3", label: "Free delivery", amount: 0, freeShipping: true },
	],
};

const CartDiscounts = (props) => {

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
	var heading = options?.heading ?? "Discounts applied";
	var emptyText = options?.emptyText ?? "";
	var showTotal = options?.showTotal !== false;
	var totalLabel = options?.totalLabel ?? "Total savings";
	var freeShippingText = options?.freeShippingText ?? "Free delivery";
	var icon = options?.icon;
	var iconSize = Number(options?.iconSize ?? 14);

	const { wrapCurrency } = useUtilsStore();

	/* Read, not computed. The runtime component mounted from the root layout
	   prices the cart and publishes the result; this block only displays it,
	   so two copies on a page cannot disagree and deleting the block does not
	   turn the discounts off. */
	const live = useDiscountRulesStore((s) => s.result);

	const isEditor = typeof setSelectedId === "function";
	const result = isEditor ? SAMPLE : live;

	const lines = result?.lines ?? [];
	const IconX = icon ? TablerIcons[icon] : null;

	/* Nothing qualified. Rendering an empty heading would leave a stray label
	   in the cart on most visits, so the block collapses unless the merchant
	   has written something to say in that case. */
	if (!isEditor && lines.length === 0 && !emptyText) return null;

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

			{(heading && (lines.length > 0 || isEditor)) && (
				<div className={`${cssSelectors['heading']?.classes ?? ''}`}>
					{IconX && <IconX size={iconSize} />}
					<span>{heading}</span>
				</div>
			)}

			{lines.length === 0 && emptyText && (
				<div className={`${cssSelectors['empty']?.classes ?? ''}`}>{emptyText}</div>
			)}

			{lines.map((line) => (
				<div key={line.ruleId} className={`${cssSelectors['line']?.classes ?? ''}`}>
					<div className={`${cssSelectors['lineLabel']?.classes ?? ''}`}>{line.label}</div>
					<div className={`${cssSelectors['lineAmount']?.classes ?? ''}`}>
						{line.freeShipping && line.amount <= 0
							? freeShippingText
							: `-${wrapCurrency(line.amount)}`}
					</div>
				</div>
			))}

			{(showTotal && lines.length > 0) && (
				<div className={`${cssSelectors['total']?.classes ?? ''}`}>
					<div className={`${cssSelectors['totalLabel']?.classes ?? ''}`}>{totalLabel}</div>
					<div className={`${cssSelectors['totalAmount']?.classes ?? ''}`}>
						-{wrapCurrency(result?.discountTotal ?? 0)}
					</div>
				</div>
			)}

		</div>
	);
};

export default CartDiscounts;
