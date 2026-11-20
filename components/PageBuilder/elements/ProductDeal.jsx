import React, { useState } from "react";
import { ProductDealMarkup } from "./ProductDealView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the deal waitlist: ProductDealView's own
	markup and classes over a sample deal, so the block is visible and
	styleable on any template - the shop only shows it on products with the
	"Deals" addon on.
*/
const SAMPLE_DEAL = {
	label: 'Upcoming deal',
	message: "Join the waitlist and we'll tell you the moment the price drops.",
	status: 'upcoming',
	starts_in: 2 * 86400 + 4 * 3600 + 10 * 60,
	waitlist: true,
	collect: 'phone',
	showCount: true,
	showJoiners: true,
	count: 128,
	recent: [
		{ name: 'Rahim K.', initials: 'RK' },
		{ name: 'Nusrat A.', initials: 'NA' },
		{ name: 'Tanvir H.', initials: 'TH' },
		{ name: 'Farhana S.', initials: 'FS' },
	],
};

const ProductDeal = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('productDeal', props?.cssSelectors);
	var [form, setForm] = useState({ name: '', phone: '', email: '' });

	return (
		<ProductDealMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			deal={SAMPLE_DEAL}
			secondsLeft={SAMPLE_DEAL.starts_in}
			joined={false}
			signedIn={false}
			form={form}
			setForm={setForm}
			busy={false}
			message=""
			onJoin={() => { }}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: 'Sample deal: the shop shows this only on products with the Deals addon on',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductDeal;
