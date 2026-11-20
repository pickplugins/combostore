import React from "react";
import { usePost } from "../context/PostContext";
import { warrantyFor, WarrantyContent } from "./ProductWarrantyView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown where the product has no warranty, so the block stays visible and styleable. */
const SAMPLE = {
	type: 'brand',
	duration: 12,
	period: 'months',
	provider: 'Brand service centre',
	coverage: 'Manufacturing defects and hardware faults under normal use.',
	exclusions: 'Physical or liquid damage, and repairs by unauthorised technicians.',
	claim: 'Bring the product with its invoice to any service centre.',
	contact: '',
	summary: '12 months brand warranty',
};

/*
	Builder (canvas) preview, with ProductWarrantyView's own markup and
	classes. With no warranty on the product it shows a dimmed sample, where
	the shop shows nothing.
*/
const ProductWarranty = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var options = props?.options ?? {};

	var cls = elementCssClasses('productWarranty', props?.cssSelectors);

	const product = usePost();
	var real = warrantyFor(product);
	var sample = !real;
	var warranty = real ?? SAMPLE;
	var selected = selectedId == id;

	return (
		<div
			id={id}
			index={index}
			type={props?.type}
			className={`${cls('*')} ${sample ? 'opacity-60' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selected ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			draggable={true}
			title={sample ? 'Sample: shows only on products with a warranty' : undefined}
			onClick={e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); }}
			onDragStart={e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); }}
			onDragEnd={() => { setDraggingBlock?.(null); setDragOverIndex?.(null); }}
			onDragOver={e => { e.preventDefault(); setDragOverIndex?.(index); }}
			onDragLeave={() => setDragOverIndex?.(null)}
		>
			<WarrantyContent cls={cls} warranty={warranty} options={options} />
		</div>
	);
};

export default ProductWarranty;
