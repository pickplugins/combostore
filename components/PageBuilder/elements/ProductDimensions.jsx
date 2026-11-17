import React from "react";
import { usePost } from "../context/PostContext";
import { ProductDimensionsMarkup, dimensionsFor, hasDimensions } from "./ProductDimensionsView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown where the product has no dimensions, so the block stays visible and styleable. */
const SAMPLE = { weight: 1.2, length: 30, width: 20, height: 10 };

/*
	Builder (canvas) preview of the dimensions: ProductDimensionsView's own
	markup and classes. With real dimensions it shows them; with none -
	outside a product loop, or a product without any, where the shop shows
	nothing - it shows dimmed sample values.
*/
const ProductDimensions = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productDimensions', props?.cssSelectors);

	const product = usePost();
	var real = dimensionsFor(product, null);
	var sample = !hasDimensions(real);

	return (
		<ProductDimensionsMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			dimensions={sample ? SAMPLE : real}
			rootClassName={`${sample ? 'opacity-60' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: sample ? 'Sample: shows only on products that have dimensions' : undefined,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductDimensions;
