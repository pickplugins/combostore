import React from "react";
import { usePost } from "../context/PostContext";
import { ProductSkuMarkup, skuFor } from "./ProductSkuView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the SKU: ProductSkuView's own markup and
	classes. With a real SKU it shows it; with none - outside a product loop,
	or a product without a SKU, where the shop shows nothing - it shows a
	dimmed sample "SKU-12345", so the block stays visible and styleable.
*/
const ProductSku = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productSku', props?.cssSelectors);

	const product = usePost();
	var real = skuFor(product, null);

	return (
		<ProductSkuMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			sku={real || 'SKU-12345'}
			rootClassName={`${real ? '' : 'opacity-60'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: real ? undefined : 'Sample: shows only on products that have a SKU',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductSku;
