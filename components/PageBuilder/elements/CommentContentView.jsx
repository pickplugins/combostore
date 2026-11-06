import PropTypes from "prop-types";
import React from "react";
import { useComment } from "../context/CommentContext";
import { commentText } from "./CommentAuthorView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	A comment's text as paragraphs of lines, safe to print as text.

	Comments come from a plain textarea and submit_comment stores them as
	sent, without filtering - and this block printed them with
	dangerouslySetInnerHTML, so a logged-in visitor could post markup (an
	<img onerror=...>, say) that ran in the browser of everyone who opened
	the product page. Now: <br> and paragraph ends become line breaks, every
	other tag is removed, entities are decoded, and the text is rendered as
	text. Blank lines separate paragraphs.
*/
export function commentParagraphs(value) {
	var text = String(value ?? '')
		.replace(/\r\n?/g, '\n')
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(/<\/p\s*>/gi, '\n\n');
	return text.split(/\n{2,}/)
		.map(block => block.split('\n').map(line => commentText(line)).filter(Boolean))
		.filter(lines => lines.length > 0);
}

/* Tags the text may be drawn in; anything else is a div. */
const contentTags = ['div', 'p', 'blockquote'];

/*
	The text's markup, shared with the builder preview (CommentContent.jsx):
	options.tag (a div when unset - the builder defaulted to h1) carrying the
	`*` classes; one paragraph is its lines with <br>s, several are a
	`paragraph` <p> each (a <p> tag becomes a div then, as <p> cannot hold
	<p>).
*/
export function CommentContentMarkup({ cls, id, index, type, options, paragraphs, rootClassName = '', rootProps = {} }) {

	var lines = (ls) => ls.map((line, i) => <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>);
	var several = paragraphs.length > 1;
	var Tag = contentTags.includes(options?.tag) ? (several && options.tag === 'p' ? 'div' : options.tag) : 'div';

	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{several
				? paragraphs.map((ls, i) => <p key={i} className={cls('paragraph')}>{lines(ls)}</p>)
				: lines(paragraphs[0] ?? [])}
		</Tag>
	);
}

/* The text of the comment it sits in; nothing outside a comments loop or for an empty comment. */
const CommentContentView = (props) => {

	/* A key the block lacks falls back to the commentContent defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('commentContent', props?.cssSelectors);

	const comment = useComment();
	var paragraphs = commentParagraphs(comment?.comment_content);
	if (paragraphs.length === 0) return null;

	return <CommentContentMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} paragraphs={paragraphs} />;
};

CommentContentView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CommentContentView;
