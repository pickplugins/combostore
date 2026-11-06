import React from "react";
import { headingTagFor } from "./HeadingView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of a heading: the same tag (with the same
	fallback), text and classes as HeadingView, plus the canvas's selection
	and drag handlers.
*/
const Heading = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var type = props?.type;
	var options = props?.options;
	const Tag = headingTagFor(options);

	var cls = elementCssClasses('heading', props?.cssSelectors);

	return (
		<Tag draggable id={id} index={index} type={type} className={`${cls('*')} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>
			{options?.text}
		</Tag>
	);
};

export default Heading;
