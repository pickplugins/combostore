import React from "react";
import { usePost } from "../context/PostContext";
import { PostExcerptMarkup } from "./PostExcerptView";
import { postUrlFor } from "./PostTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown outside a loop, or for a post without an excerpt, at a realistic length. */
const sampleExcerpt = 'Premium-quality essentials designed for everyday comfort and convenience. Soft, safe and reliable materials make this a practical choice for the whole family, at home or on the go.';

/*
	Builder (canvas) preview of the excerpt: PostExcerptView's own markup and
	classes, with the same word limit and read-more link. Inside a loop it
	shows the post's excerpt; otherwise a sample sentence. Links never
	navigate away from the builder.
*/
const PostExcerpt = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('postExcerpt', props?.cssSelectors);

	const post = usePost();
	var real = String(post?.excerpt ?? '').trim();

	return (
		<PostExcerptMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			source={real ? post.excerpt : sampleExcerpt}
			href={(post && postUrlFor(post)) || '#'}
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

export default PostExcerpt;
