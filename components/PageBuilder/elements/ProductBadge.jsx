import React from "react";
import { usePost } from "../context/PostContext";
import { ProductBadgeMarkup, badgesFor } from "./ProductBadgeView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown outside a product loop, or for a product without badges, where the shop shows nothing. */
const sampleBadges = [{ slug: 'new', name: 'New' }, { slug: 'best-seller', name: 'Best Seller' }];

/*
	Builder (canvas) preview of the product badges: ProductBadgeView's own
	markup and classes. With real badges it shows them; without, a dimmed
	sample "New, Best Seller" (the old placeholder read "Tag Name"), so the
	block stays visible and styleable.
*/
const ProductBadge = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productBadge', props?.cssSelectors);

	const product = usePost();
	var real = badgesFor(product);

	return (
		<ProductBadgeMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			badges={real.length ? real : sampleBadges}
			rootClassName={`${real.length ? '' : 'opacity-60'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: real.length ? undefined : 'Sample: shows only on products that have badges',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductBadge;
