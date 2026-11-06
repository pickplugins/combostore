import React from "react";
import { usePost } from "../context/PostContext";
import { PostAuthorMarkup, postAuthorFor } from "./PostAuthorView";
import { postUrlFor } from "./PostTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown outside a loop, or for a post without an author. The avatar is an inline SVG, so the preview needs no network. */
const sampleAuthor = {
	name: 'Author Name',
	avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" fill="#e5e7eb"/><circle cx="12" cy="9.5" r="4" fill="#9ca3af"/><path d="M4 22c1-4.5 4.5-7 8-7s7 2.5 8 7z" fill="#9ca3af"/></svg>'),
};

/*
	Builder (canvas) preview of the post author: PostAuthorView's own markup
	and classes. Inside a loop it shows the post's author; otherwise a dimmed
	sample. Links never navigate away from the builder.
*/
const PostAuthor = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('postAuthor', props?.cssSelectors);

	const post = usePost();
	var real = postAuthorFor(post);

	return (
		<PostAuthorMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			author={real ?? sampleAuthor}
			href={(post && postUrlFor(post)) || '#'}
			onLinkClick={ev => ev.preventDefault()}
			rootClassName={`${real ? '' : 'opacity-60'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: real ? undefined : 'Sample author: the post\'s own author shows here',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default PostAuthor;
