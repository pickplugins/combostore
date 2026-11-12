import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { usePost } from "../context/PostContext";
import { useActiveVariation } from "../context/VariationScope";
import { postUrlFor } from "./PostTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The excerpt to show, as { html } for the full formatted text or { text }
	for a word-limited plain one. options.maxWord above 0 cuts it to that many
	words (tags stripped first, so the count is of words people see); 0 or
	empty shows the whole formatted excerpt. maxWord was declared, and set by
	the templates, but never applied.
*/
export function excerptContent(html, maxWord) {
	var source = String(html ?? '');
	var limit = parseInt(maxWord) || 0;
	if (limit <= 0) return { html: source };
	var words = source.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').split(/\s+/).filter(Boolean);
	return { text: words.length > limit ? words.slice(0, limit).join(' ') + '…' : words.join(' ') };
}

/*
	The excerpt's markup, shared with the builder preview (PostExcerpt.jsx):
	the excerpt (`excerpt`) and, when options.readMoreText is set and the post
	has a page, a read-more link (`read-more`, holding `read-more-icon` and
	`read-more-label`) to that page. It used to link to "#".
*/
export function PostExcerptMarkup({ cls, id, index, type, options, source, href, onLinkClick, rootClassName = '', rootProps = {} }) {

	var content = excerptContent(source, options?.maxWord ?? 20);
	var readMoreText = options?.readMoreText ?? 'Read more';
	var IconX = tablerIcon(options?.readMoreIcon);
	var iconSize = Number(options?.readMoreIconSize) || 25;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{content.html != null
				? <div className={cls('excerpt')} dangerouslySetInnerHTML={{ __html: content.html }} />
				: <div className={cls('excerpt')}>{content.text}</div>}
			{readMoreText && href && (
				<Link href={href} onClick={onLinkClick} className={cls('read-more')}>
					{IconX && (
						<div className={cls('read-more-icon')}><IconX size={iconSize} /></div>
					)}
					<div className={cls('read-more-label')}>{readMoreText}</div>
				</Link>
			)}
		</div>
	);
}

/*
	The post's excerpt - or, on a product page with a variation picked that
	has its own description, that description.

	It used to show anything only while a variation was picked: both branches
	tested activeVariation, so blog posts, simple products and variable
	products before a pick rendered an empty box, and a pick showed the
	description and the excerpt together. The picked variation lives in a
	global store, so it is only used when it belongs to this product.
*/
const PostExcerptView = (props) => {


	/* A key the block lacks falls back to the postExcerpt defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postExcerpt', props?.cssSelectors);

	const post = usePost();

	var activeVariation = useActiveVariation(post);
	var source = String(activeVariation?.description ?? '').trim() ? activeVariation.description : (post?.excerpt ?? '');

	if (!String(source).trim()) return null;

	return (
		<PostExcerptMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			source={source}
			href={postUrlFor(post)}
		/>
	);
};

PostExcerptView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default PostExcerptView;
