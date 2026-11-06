import React from "react";
import { useCategory } from "../context/CategoryContext";
import { TermTitleMarkup, termUrlFor } from "./TermTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the term title: TermTitleView's own markup and
	classes. Inside a terms loop it shows the term's name and real link;
	outside one, "Term Title" (it was an empty, invisible element). Links
	never navigate away from the builder.
*/
const TermTitle = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('termTitle', props?.cssSelectors);

	const term = useCategory();
	var name = String(term?.name ?? '').trim() ? term.name : 'Term Title';

	return (
		<TermTitleMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			name={name}
			href={termUrlFor(term) || '#'}
			onLinkClick={ev => ev.preventDefault()}
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

export default TermTitle;
