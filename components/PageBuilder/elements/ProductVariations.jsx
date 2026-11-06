"use client"
import React from "react";
import { useState } from "react";
import { usePost } from "../context/PostContext";
import { VariationsMarkup } from './ProductVariationsView';
import { elementCssClasses } from "../ElementsDefinition";

/* Shown when the product has no attributes, or outside a product loop: two attributes, one option unavailable. */
const sampleAttributes = [
	{ title: 'Color', attr: 'color', items: [{ slug: 'red', name: 'Red' }, { slug: 'blue', name: 'Blue' }, { slug: 'green', name: 'Green' }] },
	{ title: 'Size', attr: 'size', items: [{ slug: 'small', name: 'Small' }, { slug: 'medium', name: 'Medium' }, { slug: 'large', name: 'Large' }] },
];

/*
	Builder (canvas) preview of the variation picker. It renders
	ProductVariationsView's own VariationsMarkup with the same
	classes, so the canvas shows the tiles as the shop does. Clicking a tile
	selects it here, so the selected look can be styled; the last sample
	option is shown unavailable for the disabled look. Nothing reaches the
	product store or the cart.

	The old builder version crashed outside a product loop (it read
	productData.attributes with no product), and its sample options were
	plain strings the tiles cannot show.
*/
const ProductVariations = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('productVariations', cssSelectors);
	/* Same "blank means the default look" for the tiles as the shop. */
	var defaultCls = elementCssClasses('productVariations', {});
	var tileCls = (key) => {
		var value = cssSelectors?.[key]?.classes;
		return typeof value === 'string' && value.trim() !== '' ? value : defaultCls(key);
	};

	var productData = usePost();
	var hasReal = Array.isArray(productData?.attributes) && productData.attributes.length > 0;
	var attributes = hasReal ? productData.attributes : sampleAttributes;

	const [selected, setselected] = useState({});

	return (
		<VariationsMarkup
			cls={cls}
			tileCls={tileCls}
			id={id}
			index={index}
			type={props?.type}
			attributes={attributes}
			isSelected={(attrSlug, itemSlug) => selected[attrSlug] === itemSlug}
			isAvailable={(attrSlug, itemSlug) => hasReal || !(attrSlug === 'size' && itemSlug === 'large')}
			onPick={(attrSlug, itemSlug) => setselected(current => ({ ...current, [attrSlug]: current[attrSlug] === itemSlug ? undefined : itemSlug }))}
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

export default ProductVariations;
