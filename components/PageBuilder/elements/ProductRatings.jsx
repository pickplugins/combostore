import React from "react";
import { usePost } from "../context/PostContext";
import { ProductRatingsMarkup, productRating } from "./ProductRatingsView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown outside a product loop, or for a product with no reviews yet, so every part can be styled. */
const sampleRating = { average: 4.3, filled: 4, total: 120 };

/*
	Builder (canvas) preview of the rating: ProductRatingsView's own markup
	and classes. Inside a product loop it shows that product's real rating;
	with no product, or one nobody has reviewed, a sample 4.3 from 120
	reviews. (It used to show a hardcoded 3.5 and "(120 reviews)" whatever the
	product, and logged the product to the console on every render.)
*/
const ProductRatings = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productRatings', props?.cssSelectors);

	const post = usePost();
	var real = productRating(post);

	return (
		<ProductRatingsMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			rating={post && real.total > 0 ? real : sampleRating}
			hideIfEmpty={false}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductRatings;
