import React from "react";
import { NotifyMarkup, notifyDefaults, notifyPositions } from "./NotifyView";
import { elementCssClasses } from "../ElementsDefinition";

/* What the canvas shows: one of each common kind, so their styles can be seen. */
const sampleToasts = [
	{ key: 1, type: 'success', title: 'Coupon applied', content: 'Your discount has been added to the cart.' },
	{ key: 2, type: 'error', title: "Can't add to cart", content: "Sorry, this product doesn't have a price." },
];

/*
	Builder (canvas) preview of the notifications: NotifyView's own
	NotifyMarkup with sample toasts, drawn in place rather than fixed to the
	screen corner (it used to sit fixed over the editor), with a note saying
	where the shop shows them. Its close buttons do nothing here.
*/
const Notify = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('notify', props?.cssSelectors);
	var position = notifyPositions[props?.options?.position] ?? notifyPositions[notifyDefaults.position];

	return (
		<div
			draggable
			className={`inline-flex flex-col gap-1 hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			onClick={e => { e.stopPropagation(); setSelectedId(selectedId != id ? id : null); }}
			onDragStart={e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id); }}
			onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}
			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>
			<div className="pointer-events-none text-[11px] text-gray-500">
				Notifications - on the shop, messages such as &ldquo;added to cart&rdquo; appear here as toasts, {position.toLowerCase()}.
			</div>
			<NotifyMarkup cls={cls} id={id} type={props?.type} toasts={sampleToasts} />
		</div>
	);
};

export default Notify;
