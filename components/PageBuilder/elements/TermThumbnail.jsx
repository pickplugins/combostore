import React from "react";
import { useCategory } from "../context/CategoryContext";
import { TermThumbnailMarkup } from "./TermThumbnailView";
import { termUrlFor } from "./TermTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the term thumbnail: TermThumbnailView's own
	markup and classes. Inside a terms loop it shows the term's image and
	real link; outside one, the placeholder image. Links never navigate away
	from the builder.
*/
const TermThumbnail = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('termThumbnail', props?.cssSelectors);

	const term = useCategory();

	return (
		<TermThumbnailMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			term={term ?? { name: 'Term' }}
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

export default TermThumbnail;
