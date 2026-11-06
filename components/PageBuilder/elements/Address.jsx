import React from "react";
import { AddressMarkup, addressItems } from "./AddressView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the address: AddressView's own markup and
	classes. Its phone and email links used to be live, so clicking one in
	the canvas opened the dialer or the mail app; links never leave the
	builder now. With nothing filled in it shows a dimmed note so it can
	still be selected. (It was named Button.)
*/
const Address = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('address', props?.cssSelectors);

	var items = addressItems(props?.options);
	var empty = items.length === 0;

	return (
		<AddressMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			items={empty ? [{ kind: 'location', value: 'Add a phone, email or location in the panel' }] : items}
			onLinkClick={ev => ev.preventDefault()}
			rootClassName={`${empty ? 'opacity-60' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
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

export default Address;
