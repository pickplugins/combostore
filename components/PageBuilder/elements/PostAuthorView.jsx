import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { usePost } from "../context/PostContext";
import { postUrlFor } from "./PostTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The post's author as { name, avatar }, or null. The API sends author as
	{ name, id, avatar }; the builder used to render that object itself as
	HTML ("[object Object]").
*/
export function postAuthorFor(post) {
	var author = post?.author;
	var name = typeof author === 'string' ? author : author?.name;
	if (!String(name ?? '').trim()) return null;
	return { name: String(name), avatar: typeof author === 'object' ? (author?.avatar || '') : '' };
}

/*
	The author's markup, shared with the builder preview (PostAuthor.jsx). The
	root (`*`) is a link to the post's page (options.linkTo 'postUrl', the
	default, when the post has a page) or a div. Inside it: the avatar
	(`avatar`) when options.showAvatar is on and the author has one, a label
	(`label`, e.g. "By") when options.label is set, and the name (`name`).
	There is no author page, so 'postUrl' links to the post itself; it used
	to link to "#".
*/
export function PostAuthorMarkup({ cls, id, index, type, options, author, href, onLinkClick, rootClassName = '', rootProps = {} }) {

	var className = `${cls('*')} ${rootClassName}`;
	var label = options?.label;

	var inner = (
		<>
			{options?.showAvatar && author?.avatar && (
				<img className={cls('avatar')} src={author.avatar} width={24} height={24} alt="" loading="lazy" />
			)}
			{label && <span className={cls('label')}>{label}</span>}
			<span className={cls('name')} dangerouslySetInnerHTML={{ __html: author?.name ?? '' }} />
		</>
	);

	if ((options?.linkTo ?? 'postUrl') === 'postUrl' && href) {
		return <Link href={href} onClick={onLinkClick} id={id} index={index} type={type} className={className} {...rootProps}>{inner}</Link>;
	}
	return <div id={id} index={index} type={type} className={className} {...rootProps}>{inner}</div>;
}

/* The author of the post it sits in; nothing when it has none (it used to print "Author Name"). */
const PostAuthorView = (props) => {

	/* A key the block lacks falls back to the postAuthor defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postAuthor', props?.cssSelectors);

	const post = usePost();
	var author = postAuthorFor(post);
	if (!author) return null;

	return (
		<PostAuthorMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			author={author}
			href={postUrlFor(post)}
		/>
	);
};

PostAuthorView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default PostAuthorView;
