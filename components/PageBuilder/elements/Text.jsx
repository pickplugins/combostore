import React from "react";
import { TextMarkup } from "./TextView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the text: TextView's own markup and classes.
	It used to show the text of a surrounding featurebox or collections loop
	(useLoop) instead of its own, which the shop never did; and an empty text
	was an empty, unclickable tag - it now shows a dimmed prompt.
*/
const Text = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('text', props?.cssSelectors);
	var empty = !String(props?.options?.text ?? '').trim();

	return (
		<TextMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={empty ? { ...props?.options, text: 'Write some text in the panel' } : props?.options}
			rootClassName={`${empty ? 'opacity-50 italic' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
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

export default Text;
