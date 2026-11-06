"use client"
import React from "react";
import BlockPreview from '../BlockPreview';
import CssSelectors from "../CssSelectors";
import { usePost } from "../context/PostContext";
import { elementCssClasses, withElementCssDefaults } from "../ElementsDefinition";
import { LinkedProductsMarkup, linkedProductsQuery, defaultLinkedProductsLimit } from "./linkedProducts";

/* The builder-only parts of the linked products blocks (kept out of linkedProducts.jsx, which the shop loads). */

/*
	The builder (canvas) preview: the same markup, with its children rendered
	by BlockPreview with the drag and select props. The builder has no
	product, so the loop previews the store's latest products, and `note`
	says what the shop shows.
*/
export function LinkedProductsCanvas({ blockType, field, note, ...props }) {

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var handleMoveBlock = props?.handleMoveBlock
	var index = props?.index
	var id = props?.id;
	var children = Array.isArray(props?.children) ? props.children : [];

	var cls = elementCssClasses(blockType, props?.cssSelectors);

	/* A product only when one is around (it never is on the canvas today); its linked products, or the preview query. */
	var product = usePost();
	var query = linkedProductsQuery(props?.options, product, field) ?? linkedProductsQuery(props?.options, null, field);

	return (
		<LinkedProductsMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			query={query}
			cssSelectors={props?.cssSelectors}
			rootClassName={`relative ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''}`}
			rootProps={{
				draggable: true,
				onClick: (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); },
				onDragStart: (e) => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); },
				onDrop: (e) => {
					e.preventDefault();
					e.stopPropagation();
					const paletteType = e.dataTransfer.getData("paletteType");
					const canvasBlockId = e.dataTransfer.getData("canvasBlock");
					handleMoveBlock?.({ paletteType, canvasBlockId }, id, 'inside');
				},
			}}
		>
			{!product && (
				<div className="pointer-events-none mb-2 rounded-md bg-yellow-100/95 px-2 py-1 text-[11px] text-yellow-900">
					{note}
				</div>
			)}
			{children.map((child, indexZ) => (
				<BlockPreview index={`${index}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
			))}
		</LinkedProductsMarkup>
	);
}

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	The settings panel: `intro` (where the products are picked), how many to
	show, then the block's cssSelectors keys.
*/
export function LinkedProductsOptions({ blockType, intro, ...props }) {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults(blockType, props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">{intro}</p>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Maximum products</label>
					<input type="number" min={1} placeholder={String(defaultLinkedProductsLimit)} className={inputClass} value={options?.limit ?? ''} onChange={ev => updateBlock('options', { ...options, limit: ev.target.value })} />
				</div>

				<p className="text-xs text-gray-500">
					<code>loop-items</code> lays out the products (e.g. <code>grid grid-cols-4 gap-5</code>) and <code>loop-item</code> styles each one, unless the post loop sets its own.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
}
