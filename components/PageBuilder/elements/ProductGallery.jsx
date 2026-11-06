"use client"
import React from "react";
import { usePost } from "../context/PostContext";
import { ProductGalleryMarkup, productGalleryImages } from './ProductGalleryView';
import { elementCssClasses } from "../ElementsDefinition";

/* Outside a product loop: three placeholder images, so the slider, arrows, dots and thumbnails all show. */
const sampleProduct = { gallery: [{ id: 's1' }, { id: 's2' }, { id: 's3' }] };

/*
	Builder (canvas) preview of the product gallery. It renders
	ProductGalleryView's own ProductGalleryMarkup with the same images and
	classes, so the canvas shows what the shop shows.

	The old builder version (named TermTitle) wrote its arrow classes into the
	block's saved slider options on every render, crashed on a block saved
	without options, never synced the thumbnails, showed a `label` the shop
	never renders, and drew images without `unoptimized`, which the shop needs
	for the store's own image server.
*/
const ProductGallery = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var dragOverIndex = props?.dragOverIndex
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productGallery', props?.cssSelectors);
	var product = usePost() ?? sampleProduct;

	return (
		<ProductGalleryMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options ?? {}}
			images={productGalleryImages(product)}
			title={product?.title}
			activeImageId={null}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => {
					e.preventDefault();
					e.stopPropagation();
					setSelectedId(selectedId != id ? id : null);
				},
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductGallery;
