import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import { useComment } from "../context/CommentContext";
import { commentText } from "./CommentAuthorView";
import { elementCssClasses } from "../ElementsDefinition";

/* The commenter's website, when they gave one and it is a web address. */
export function commentAuthorUrl(comment) {
	var url = String(comment?.comment_author_url ?? '').trim();
	return /^https?:\/\//i.test(url) ? url : null;
}

/*
	The avatar's markup, shared with the builder preview (CommentAvatar.jsx):
	a `*` wrapper holding the `image` - inside a `link` to the commenter's
	website with options.linkToAuthor, when they gave one (the declared
	`link` key was never used). Unoptimized, as the shop had it: WordPress
	serves gravatars from hosts next.config does not list (on a plain-http
	site, 0.gravatar.com), and an optimized next/image throws on those - the
	builder's did, and it also ignored the `image` classes.
*/
export function CommentAvatarMarkup({ cls, id, index, type, options, src, name, href, onLinkClick, rootClassName = '', rootProps = {} }) {

	var image = <Image className={cls('image')} src={src} alt={name ? `${name}'s avatar` : ''} width={80} height={80} unoptimized />;
	var linked = options?.linkToAuthor && href;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{linked ? <a href={href} onClick={onLinkClick} className={cls('link')} target="_blank" rel="nofollow ugc noopener noreferrer">{image}</a> : image}
		</div>
	);
}

/* The avatar of whoever wrote the comment it sits in; nothing without one (next/image throws on an empty src). */
const CommentAvatarView = (props) => {

	/* A key the block lacks falls back to the commentAvatar defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('commentAvatar', props?.cssSelectors);

	const comment = useComment();
	var src = String(comment?.avatar ?? '').trim();
	if (!src) return null;

	return <CommentAvatarMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} src={src} name={commentText(comment?.comment_author)} href={commentAuthorUrl(comment)} />;
};

CommentAvatarView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CommentAvatarView;
