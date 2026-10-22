"use client";

import React from "react";
import * as TablerIcons from "@tabler/icons-react";
import { usePost } from "../../../components/PageBuilder/context/PostContext";

/*
	An extension's block renderer.

	The contract is the same as a core element's (see
	components/PageBuilder/elements/*): BlockPreview spreads the block onto this
	component and adds the editor props, so the root has to carry `draggable`,
	the block id, the hover outline, the drag-over marker and the selected
	outline. Dropping any of those makes the block unselectable or
	undraggable on the canvas while looking fine on the page.

	It reads from PostContext exactly as a core element would, so an extension
	block inside a product loop sees the product it is rendered for.
*/
const PointsBadge = (props) => {

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

	var options = props?.options;
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var label = options?.label ?? "Earn";
	var suffix = options?.suffix ?? "points";
	/* Points per unit of currency. A string arrives here when the options panel
	   writes it from a number input, so it is coerced before the sum. */
	var rate = Number(options?.rate ?? 1);

	const product = usePost();

	/* The canvas renders without a product when the block sits outside a loop,
	   so there is a figure to style against either way. */
	const price = Number(product?.price ?? 500);
	const points = Number.isFinite(price * rate) ? Math.max(0, Math.round(price * rate)) : 0;

	const IconX = TablerIcons[icon];

	return (
		<div
			draggable
			id={id}
			index={index}
			type={type}
			className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}>

			{IconX && (
				<div className={`${cssSelectors['icon']?.classes ?? ''}`}>
					<IconX size={iconSize} />
				</div>
			)}

			<div className={`${cssSelectors['label']?.classes ?? ''}`}>{label}</div>
			<div className={`${cssSelectors['points']?.classes ?? ''}`}>{points}</div>
			<div className={`${cssSelectors['suffix']?.classes ?? ''}`}>{suffix}</div>

		</div>
	);
};

export default PointsBadge;
