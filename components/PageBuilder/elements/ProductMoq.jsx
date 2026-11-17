import React from "react";
import { usePost } from "../context/PostContext";
import { ProductMoqMarkup, moqFor } from "./ProductMoqView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the MOQ: ProductMoqView's own markup and
	classes. With a real minimum (above 1) it shows it; where the shop would
	show nothing - outside a product loop, or a product without a minimum -
	it shows a dimmed sample "5", so the block stays visible and styleable.
*/
const ProductMoq = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productMoq', props?.cssSelectors);

	const product = usePost();
	var moq = moqFor(product, null);
	var sample = moq <= 1 && props?.options?.hideWhenOne !== false;

	return (
		<ProductMoqMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			moq={sample ? 5 : moq}
			rootClassName={`${sample ? 'opacity-60' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: sample ? 'Sample: shows only on products with a minimum order quantity above 1' : undefined,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductMoq;
