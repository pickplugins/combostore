import React from "react";
import { LinkListMarkup } from "./LinkListView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the link list: LinkListView's own markup and
	classes. Links never navigate away from the builder. A list without items
	shows a dimmed note so it can still be selected.
*/
const LinkList = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('linkList', props?.cssSelectors);
	var empty = !Array.isArray(props?.options?.items) || props.options.items.length === 0;

	return (
		<LinkListMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={empty ? { ...props?.options, items: [{ text: 'No links yet: add them in the panel' }] } : props?.options}
			onLinkClick={ev => ev.preventDefault()}
			rootClassName={`${empty ? 'opacity-60' : ''} cursor-pointer hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
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

export default LinkList;
