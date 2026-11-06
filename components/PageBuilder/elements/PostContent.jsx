import React from "react";
import { usePost } from "../context/PostContext";
import { PostContentMarkup, postContentHtml } from "./PostContentView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Shown outside a loop, or for a post without content: a heading, paragraphs,
	a list and a link, so styles aimed at each of them can be seen while
	editing.
*/
const sampleContent = `<h2>Sample heading</h2>
<p>This is where the post's content appears. Style the paragraphs, headings, lists and <a href="#">links</a> inside it from the <code>*</code> classes, for example <code>[&amp;_p]:mb-4</code>.</p>
<ul><li>A first list item</li><li>A second list item</li></ul>
<p>A second paragraph, to show the spacing between them.</p>`;

/*
	Builder (canvas) preview of the post content: PostContentView's own markup
	and classes, with the post's real content inside a loop or a dimmed sample
	otherwise. Links inside it never navigate away from the builder.
*/
const PostContent = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('postContent', props?.cssSelectors);

	const post = usePost();
	var html = postContentHtml(post);
	var real = html.trim() !== '';

	return (
		<PostContentMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			html={real ? html : sampleContent}
			rootClassName={`${real ? '' : 'opacity-60'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: real ? undefined : 'Sample content: the post\'s own content shows here',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default PostContent;
