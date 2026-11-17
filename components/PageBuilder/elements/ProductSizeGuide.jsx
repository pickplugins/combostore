import React from "react";
import { usePost } from "../context/PostContext";
import { sizeGuideFor, SizeGuideInline, SizeGuidePanel, SizeGuideTrigger } from "./ProductSizeGuideView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown where the product has no size guide, so the block stays visible and styleable. */
const SAMPLE = {
	title: '',
	unit: 'cm',
	columns: ['Size', 'Chest', 'Waist', 'Length'],
	rows: [['S', '86-91', '71-76', '69'], ['M', '96-101', '81-86', '71'], ['L', '106-111', '91-96', '74']],
	note: 'Measure around the fullest part of your chest, keeping the tape level.',
	image: null,
};

/*
	Builder (canvas) preview, with ProductSizeGuideView's own markup and
	classes. Popup display: the trigger, plus - while the block is selected -
	the panel drawn in place under it (no overlay, so it does not cover the
	canvas) to style it. With no guide on the product it shows a dimmed
	sample, where the shop shows nothing.
*/
const ProductSizeGuide = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var options = props?.options ?? {};

	var cls = elementCssClasses('productSizeGuide', props?.cssSelectors);

	const product = usePost();
	var real = sizeGuideFor(product);
	var sample = !real;
	var guide = real ?? SAMPLE;
	var isPopup = options?.display !== 'inline';
	var selected = selectedId == id;

	return (
		<div
			id={id}
			index={index}
			type={props?.type}
			className={`${cls('*')} ${sample ? 'opacity-60' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selected ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			draggable={true}
			title={sample ? 'Sample: shows only on products with a size guide' : undefined}
			onClick={e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); }}
			onDragStart={e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); }}
			onDragEnd={() => { setDraggingBlock?.(null); setDragOverIndex?.(null); }}
			onDragOver={e => { e.preventDefault(); setDragOverIndex?.(index); }}
			onDragLeave={() => setDragOverIndex?.(null)}
		>
			{isPopup ? (
				<>
					<SizeGuideTrigger cls={cls} options={options} expanded={selected} onClick={() => { }} />
					{selected && (
						<SizeGuidePanel cls={cls} guide={guide} options={options} titleId={`${id}-title`} onClose={() => { }} dialog={false} />
					)}
				</>
			) : (
				<SizeGuideInline cls={cls} guide={guide} options={options} />
			)}
		</div>
	);
};

export default ProductSizeGuide;
