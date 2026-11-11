import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { usePost } from "../context/PostContext";
import { postUrlFor } from "./PostTitleView";
import { elementCssClasses } from "../ElementsDefinition";
import { canOptimizeImage, sizesAuto } from "@/lib/imageOptimization.mjs";

/* The post's title as plain text, for the image's alt text (titles may contain HTML entities or tags). */
const plainTitle = (post) => String(post?.title ?? '')
	.replace(/<[^>]*>/g, '')
	.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&nbsp;/g, ' ')
	.trim();

/*
	The thumbnail's markup, shared with the builder preview (PostThumbnail.jsx):
	a wrapper (`*`) holding the image (`image`), inside a link (`link`) to the
	post's page when options.linkTo is 'postUrl' - the default - and the post
	has a page.

	The builder used to default to no link while the shop defaulted to a link,
	so the panel said "None" for thumbnails that linked on the shop. Other post
	types got href="" (a link to the page already open). The image had an
	empty alt; it now uses the image's own alt text or the post title. With no
	featured image it shows /thumb.png, as before.
*/
export function PostThumbnailMarkup({ cls, id, index, type, options, post, href, onLinkClick, rootClassName = '', rootProps = {} }) {

	var linked = (options?.linkTo ?? 'postUrl') === 'postUrl' && href;
	var src = post?.post_thumbnail?.src || '/thumb.png';
	var alt = post?.post_thumbnail?.alt || plainTitle(post);

	/*
		Resized by next/image when it is on the store's server (see
		lib/imageOptimization.mjs): product cards drew the full-size upload -
		1024px PNGs of over a megabyte for a ~250px card. Chrome picks the size
		from the laid-out width ("auto"); other browsers assume up to half the
		screen, so a large blog thumbnail stays sharp.
	*/
	var image = <Image className={cls('image')} unoptimized={!canOptimizeImage(src)} sizes={sizesAuto('(max-width: 640px) 100vw, 50vw')} src={src} width={400} height={400} alt={alt} />;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{linked ? <Link href={href} onClick={onLinkClick} className={cls('link')}>{image}</Link> : image}
		</div>
	);
}

const PostThumbnailView = (props) => {

	/* A key the block lacks falls back to the postThumbnail defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postThumbnail', props?.cssSelectors);

	const post = usePost();

	return (
		<PostThumbnailMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			post={post}
			href={postUrlFor(post)}
		/>
	);
};

PostThumbnailView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default PostThumbnailView;
