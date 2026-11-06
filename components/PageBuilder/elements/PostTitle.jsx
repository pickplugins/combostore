import React from "react";
import { usePost } from "../context/PostContext";
import { PostTitleMarkup, postUrlFor } from "./PostTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the post title: PostTitleView's own markup and
	classes. Inside a loop it shows that post's title and real link; outside
	one, "Post Title" with a placeholder link. Links never navigate away from
	the builder.
*/
const PostTitle = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('postTitle', props?.cssSelectors);

	const post = usePost();

	return (
		<PostTitleMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			title={post?.title ?? 'Post Title'}
			href={post ? postUrlFor(post) : '#'}
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

export default PostTitle;
