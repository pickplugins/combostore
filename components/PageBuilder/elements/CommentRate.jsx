import React from "react";
import { useComment } from "../context/CommentContext";
import { CommentRateMarkup, commentRating } from "./CommentRateView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the comment rating: CommentRateView's own
	markup and classes. It shows the comment's rating, or a sample 4 stars
	when there is none (outside a loop, or a comment without a rating) so it
	can be styled.
*/
const CommentRate = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('commentRate', props?.cssSelectors);

	const comment = useComment();
	var rate = commentRating(comment?.rate) || 4;

	return (
		<CommentRateMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			rate={rate}
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

export default CommentRate;
