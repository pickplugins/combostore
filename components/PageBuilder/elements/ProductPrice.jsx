"use client"
import React from "react";
import { usePost } from "../context/PostContext";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { ProductPriceMarkup, productPriceDisplay } from './ProductPriceView';
import { elementCssClasses } from "../ElementsDefinition";

/* Shown when the block is not inside a product loop: on sale, so every price selector is visible. */
const sampleProduct = { price_type: 'simple', price: 80, sale_price: 80, regular_price: 150 };

/*
	Builder (canvas) preview of the price. It renders ProductPriceView's own
	ProductPriceMarkup from the same productPriceDisplay, so the canvas shows
	what the shop shows for the same product, with the same selectors. The old
	builder version had its own markup: an older variable-price list with
	hardcoded colours that the shop never shows, and handlers that called an
	onChangePrice nothing passed.
*/
const ProductPrice = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productPrice', props?.cssSelectors);
	const { wrapCurrency } = useUtilsStore();
	var productData = usePost() ?? sampleProduct;

	return (
		<ProductPriceMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			display={productPriceDisplay(productData, null)}
			wrapCurrency={wrapCurrency}
			gateText={null}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id); },
				onDragEnd: () => { setDraggingBlock(null); setDragOverIndex(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex(index); },
				onDragLeave: () => setDragOverIndex(null),
			}}
		/>
	);
};

export default ProductPrice;
