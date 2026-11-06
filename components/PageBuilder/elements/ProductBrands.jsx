import React from "react";
import { usePost } from "../context/PostContext";
import { ProductTermLinksMarkup, productTermsFor, termArchiveHref } from "./ProductCategoriesView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown outside a product loop, or for a product without a brand, where the shop shows nothing. */
const sampleBrands = [{ slug: 'acme', name: 'Acme' }, { slug: 'northwind', name: 'Northwind' }];

/*
	Builder (canvas) preview of the product brands: ProductBrandsView's own
	markup and classes. With real brands it shows them; without, a dimmed
	sample "Acme, Northwind", so the block stays visible and styleable. Links
	never navigate away from the builder.
*/
const ProductBrands = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productBrands', props?.cssSelectors);

	const product = usePost();
	var real = productTermsFor(product, 'brands');

	return (
		<ProductTermLinksMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			terms={real.length ? real : sampleBrands}
			hrefFor={term => termArchiveHref('brands', term.slug)}
			onLinkClick={ev => ev.preventDefault()}
			rootClassName={`${real.length ? '' : 'opacity-60'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: real.length ? undefined : 'Sample: shows the brand of the product it is placed on',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductBrands;
