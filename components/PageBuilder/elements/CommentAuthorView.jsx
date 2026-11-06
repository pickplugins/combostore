import PropTypes from "prop-types";
import React from "react";
import { useComment } from "../context/CommentContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Text a visitor wrote, made safe to print as text: tags removed and the
	common HTML entities WordPress may have stored turned back into
	characters ("Tom &amp; Jerry" -> "Tom & Jerry"). The comment blocks
	rendered such text with dangerouslySetInnerHTML, so markup in a display
	name went straight into the page.
*/
export function commentText(value) {
	return String(value ?? '')
		.replace(/<[^>]*>/g, '')
		.replace(/&#0*39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
		.replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n))
		.replace(/&amp;/g, '&')
		.trim();
}

/* Tags the name may be drawn as; anything else is a div. */
const authorTags = ['div', 'span', 'p', 'h3', 'h4', 'h5', 'h6', 'strong', 'cite'];

/*
	The author's markup, shared with the builder preview (CommentAuthor.jsx):
	options.label (e.g. "By ") before the name, in options.tag, carrying the
	`*` classes. (The builder always drew a div.)
*/
export function CommentAuthorMarkup({ cls, id, index, type, options, name, rootClassName = '', rootProps = {} }) {
	var Tag = authorTags.includes(options?.tag) ? options.tag : 'div';
	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{options?.label ? `${options.label}${name}` : name}
		</Tag>
	);
}

/* The name of whoever wrote the comment it sits in; nothing outside a comments loop. */
const CommentAuthorView = (props) => {

	/* A key the block lacks falls back to the commentAuthor defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('commentAuthor', props?.cssSelectors);

	const comment = useComment();
	var name = commentText(comment?.comment_author);
	if (!name) return null;

	return <CommentAuthorMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} name={name} />;
};

CommentAuthorView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CommentAuthorView;
