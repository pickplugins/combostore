import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { usePost } from "../context/PostContext";
import { elementCssClasses } from "../ElementsDefinition";

const appUrl = process.env.NEXT_PUBLIC_STORE_URL;

/*
	A post's own page: /blog/<slug>/ for a blog post, /product/<slug>/ for a
	product, or null for any other post type (or no slug) - there is no page
	to link to. Joined from trimmed parts: the old string glued the store URL
	straight onto "blog/", and other post types got href="", a link to the
	page already open.
*/
export function postUrlFor(post) {
	var base = post?.post_type === 'post' ? 'blog' : (post?.post_type === 'cmb_product' ? 'product' : null);
	var slug = String(post?.slug ?? '').replace(/^\/+|\/+$/g, '');
	if (!base || !slug) return null;
	return `${String(appUrl ?? '').replace(/\/+$/, '')}/${base}/${slug}/`;
}

/* Tags the title may be wrapped in; anything else (including none, the default) leaves it unwrapped. */
const titleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'];

/*
	The title's markup, shared with the builder preview (PostTitle.jsx).

	With no options.tag - every block saved so far - it is exactly what it was:
	a link carrying the `*` classes (options.linkTo 'postUrl', the default) or a
	plain div. With a tag, the title is wrapped in that tag, which takes the
	`*` classes, and the link sits inside it. options.tag was read but never
	used, so a title could not be a heading.
*/
export function PostTitleMarkup({ cls, id, index, type, options, title, href, onLinkClick, rootClassName = '', rootProps = {} }) {

	var linked = (options?.linkTo ?? 'postUrl') === 'postUrl' && href;
	var Tag = titleTags.includes(options?.tag) ? options.tag : null;
	var className = `${cls('*')} ${rootClassName}`;

	if (Tag) {
		return (
			<Tag id={id} index={index} type={type} className={className} {...rootProps}>
				{linked
					? <Link href={href} onClick={onLinkClick} dangerouslySetInnerHTML={{ __html: title }} />
					: <span dangerouslySetInnerHTML={{ __html: title }} />}
			</Tag>
		);
	}

	if (linked) {
		return <Link href={href} onClick={onLinkClick} id={id} index={index} type={type} className={className} {...rootProps} dangerouslySetInnerHTML={{ __html: title }} />;
	}

	return <div id={id} index={index} type={type} className={className} {...rootProps} dangerouslySetInnerHTML={{ __html: title }} />;
}

const PostTitleView = (props) => {

	/* A key the block lacks falls back to the postTitle defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postTitle', props?.cssSelectors);

	const post = usePost();
	if (!post?.title) return null;

	return (
		<PostTitleMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			title={post.title}
			href={postUrlFor(post)}
		/>
	);
};

PostTitleView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default PostTitleView;
