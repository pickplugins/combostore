import React from "react";
import { useComment } from "../context/CommentContext";
import { CommentContentMarkup, commentParagraphs } from "./CommentContentView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown outside a comments loop. */
const sampleText = 'Great quality and fast delivery. I would buy this again.';

/*
	Builder (canvas) preview of the comment text: CommentContentView's own
	markup and classes, with the same text cleaning (it printed the comment
	as HTML too, and said "Post Title" outside a loop).
*/
const CommentContent = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('commentContent', props?.cssSelectors);

	const comment = useComment();
	var paragraphs = commentParagraphs(comment?.comment_content);
	if (paragraphs.length === 0) paragraphs = commentParagraphs(sampleText);

	return (
		<CommentContentMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			paragraphs={paragraphs}
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

export default CommentContent;
