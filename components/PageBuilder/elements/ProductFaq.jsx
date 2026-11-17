import React, { useEffect, useState } from "react";
import { usePost } from "../context/PostContext";
import { ProductFaqMarkup, faqItemsFor, initialOpenItems } from "./ProductFaqView";
import { toggleOpenItem } from "./AccordionView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown where the product has no FAQ, so the block stays visible and styleable. */
const SAMPLE = [
	{ question: 'How long does delivery take?', answer: 'Orders inside the city arrive in 1-2 days, and elsewhere in 3-5 days.' },
	{ question: 'Can I return it if it does not fit?', answer: 'Yes. Unused items can be returned within 7 days of delivery.' },
	{ question: 'Is it covered by a warranty?', answer: 'Every item carries the manufacturer\'s warranty.' },
];

/*
	Builder (canvas) preview, with ProductFaqView's own markup and classes.
	Clicking a question toggles it (to style the open state); clicking
	elsewhere on the block selects it. With no FAQ on the product it shows a
	dimmed sample, where the shop shows nothing.
*/
const ProductFaq = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var options = props?.options ?? {};

	var cls = elementCssClasses('productFaq', props?.cssSelectors);

	const product = usePost();
	var real = faqItemsFor(product);
	var sample = !real.length;
	var items = sample ? SAMPLE : real;

	const [openItems, setOpenItems] = useState(() => initialOpenItems(items, options));

	/* Follow the display / openFirst options as they are changed. */
	useEffect(() => {
		setOpenItems(initialOpenItems(items, options));
	}, [options?.display, options?.openFirst, items.length]);

	return (
		<ProductFaqMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={options}
			items={items}
			openItems={openItems}
			onToggle={idx => setOpenItems(current => toggleOpenItem(current, idx, options?.multiple))}
			rootClassName={`${sample ? 'opacity-60' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: sample ? 'Sample: shows only on products with FAQs' : undefined,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductFaq;
