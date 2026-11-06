"use client"
import React from "react";
import { usePost } from "../context/PostContext";
import { ProductDiscountMarkup, discountPercent } from "./ProductDiscountView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the discount badge: ProductDiscountView's own
	markup and classes. When there is no real discount to show - outside a
	product loop, or a product that is not on sale - it shows a dimmed sample
	"20%" instead of nothing, so the block stays visible, selectable and
	styleable. (It used to vanish, and showed Infinity% or NaN% for a regular
	price of 0.)
*/
const ProductDiscount = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productDiscount', props?.cssSelectors);

	const product = usePost();
	var real = discountPercent(product);

	return (
		<ProductDiscountMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			percent={real ?? 20}
			label={props?.options?.label}
			rootClassName={`${real == null ? 'opacity-60' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: real == null ? 'Sample: shows on discounted products only' : undefined,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id); },
				onDragEnd: () => { setDraggingBlock(null); setDragOverIndex(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex(index); },
				onDragLeave: () => setDragOverIndex(null),
			}}
		/>
	);
};

export default ProductDiscount;
