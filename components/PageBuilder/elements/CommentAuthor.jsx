import React from "react";
import { useComment } from "../context/CommentContext";
import { CommentAuthorMarkup, commentText } from "./CommentAuthorView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the comment author: CommentAuthorView's own
	markup and classes. Inside a comments loop it shows the comment's author
	(or a sample one's); outside, "Author Name" - it said "Post Title".
*/
const CommentAuthor = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('commentAuthor', props?.cssSelectors);

	const comment = useComment();
	var name = commentText(comment?.comment_author) || 'Author Name';

	return (
		<CommentAuthorMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			name={name}
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

export default CommentAuthor;
