import React from "react";
import { useComment } from "../context/CommentContext";
import { CommentAvatarMarkup, commentAuthorUrl } from "./CommentAvatarView";
import { commentText } from "./CommentAuthorView";
import { elementCssClasses } from "../ElementsDefinition";

/* A grey person silhouette, for outside a comments loop or a comment without an avatar. */
const placeholderAvatar = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" fill="#e5e7eb"/><circle cx="12" cy="9.5" r="4" fill="#9ca3af"/><path d="M4 22c1-4.5 4.5-7 8-7s7 2.5 8 7z" fill="#9ca3af"/></svg>');

/*
	Builder (canvas) preview of the comment avatar: CommentAvatarView's own
	markup and classes, with the placeholder where there is no avatar - it
	passed an undefined src to an optimized next/image, which throws.
	Links never navigate away from the builder.
*/
const CommentAvatar = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('commentAvatar', props?.cssSelectors);

	const comment = useComment();
	var src = String(comment?.avatar ?? '').trim() || placeholderAvatar;

	return (
		<CommentAvatarMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			src={src}
			name={commentText(comment?.comment_author)}
			href={commentAuthorUrl(comment) || '#'}
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

export default CommentAvatar;
