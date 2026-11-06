"use client"
import React from "react";
import BlockPreview from '../BlockPreview';
import { PostGridProvider } from "../context/PostGridContext";
import { relatedProductsQuery } from "./RelatedProductsView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of "related products". BlockPreview registered it
	under `related_products` while the type is `relatedProducts`, so the canvas
	drew nothing for the 11 templates that use it. It also could not be dragged
	or dropped into. Like the builder's PostGrid, it gives its children
	(usually a post loop) the products query through PostGridProvider; with no
	product being viewed in the builder, that is the block's own query for
	products.
*/
const RelatedProducts = (props) => {

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var handleMoveBlock = props?.handleMoveBlock
	var index = props?.index
	var id = props?.id;
	var children = props?.children ?? [];
	var cssSelectors = props?.cssSelectors ?? {};

	/* Same lookup as RelatedProductsView: a missing key falls back to the relatedProducts defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('relatedProducts', cssSelectors);
	var query = relatedProductsQuery(props?.options?.queryPrams, null);

	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");
		if (handleMoveBlock) handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
	};

	return (
		<div
			draggable
			id={id}
			type={props?.type}
			className={`${cls('*')} ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''} `}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}
			onDragStart={(e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
			onDrop={onDrop}
		>
			<PostGridProvider value={{ queryPrams: query, cssSelectors: cssSelectors }}>
				{children.map((child, indexZ) => (
					<BlockPreview index={`${index}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
				))}
			</PostGridProvider>
		</div>
	);
};

export default RelatedProducts;
