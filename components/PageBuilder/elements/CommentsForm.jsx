'use client'
import React, { useState } from "react";
import { CommentsFormMarkup } from "./CommentsFormView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the comment form: CommentsFormView's own
	markup and classes, with a sample 4-star rating. The stars and the text
	box respond, so their hover and focus styles can be seen, but nothing is
	ever posted from the builder.
*/
const CommentsForm = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('commentsForm', props?.cssSelectors);

	var [content, setContent] = useState('');
	var [rate, setRate] = useState(4);
	var [hoverRate, setHoverRate] = useState(null);

	return (
		<CommentsFormMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			state={{ content, rate, hoverRate, loading: false, success: false, errors: [] }}
			actions={{ setContent, setRate, setHoverRate, submit: () => { } }}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 relative ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => { if (e.target.closest('button, textarea')) return; e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default CommentsForm;
