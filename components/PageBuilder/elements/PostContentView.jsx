import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The post's body as HTML: post_content_html, which the API sends for blog
	posts and products alike (the Markdown body converted to HTML). The
	builder used to read `content` instead, which most endpoints send as raw
	Markdown, or not at all.
*/
export function postContentHtml(post) {
	return String(post?.post_content_html ?? '');
}

/*
	The content's markup, shared with the builder preview (PostContent.jsx): an
	<article> carrying the `*` classes, holding the HTML. Style what is inside
	it with arbitrary variants on `*`, such as [&_p]:mb-4 or [&_a]:underline.
*/
export function PostContentMarkup({ cls, id, index, type, html, rootClassName = '', rootProps = {} }) {
	return (
		<article id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

/*
	The body of the post or product it sits in. A post with no content now
	renders nothing; it used to print the words "Post Content" on the shop.
*/
const PostContentView = (props) => {

	/* A key the block lacks falls back to the postContent defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postContent', props?.cssSelectors);

	const post = usePost();
	var html = postContentHtml(post);
	if (!html.trim()) return null;

	return <PostContentMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} html={html} />;
};

PostContentView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
};

export default PostContentView;
