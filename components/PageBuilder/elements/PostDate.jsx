import React from "react";
import { usePost } from "../context/PostContext";
import { PostDateMarkup, formatPostDate, postDateIso } from "./PostDateView";
import { postUrlFor } from "./PostTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown outside a loop, or for a post without a date. */
const sampleDate = '2025-03-14 09:30:00';

/*
	Builder (canvas) preview of the post date: PostDateView's own markup,
	formatter and classes. Inside a loop it shows the post's date (it used to
	read post.date, which the API does not send, and passed the format to
	toLocaleDateString as a locale, which throws); otherwise a dimmed sample
	date in the chosen format. Links never navigate away from the builder.
*/
const PostDate = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('postDate', props?.cssSelectors);

	const post = usePost();
	var format = props?.options?.dateFormat;
	var realText = formatPostDate(post?.post_date, format);
	var value = realText ? post.post_date : sampleDate;

	return (
		<PostDateMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			text={realText || formatPostDate(sampleDate, format)}
			iso={postDateIso(value)}
			href={(post && postUrlFor(post)) || '#'}
			linkTo={props?.options?.linkTo}
			onLinkClick={ev => ev.preventDefault()}
			rootClassName={`${realText ? '' : 'opacity-60'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: realText ? undefined : 'Sample date: the post\'s own date shows here',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default PostDate;
