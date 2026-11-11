import PropTypes from "prop-types";
import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { elementCssClasses } from "../ElementsDefinition";
import { useAboveTheFold, imageLoadingProps } from "../aboveTheFold";
import { canOptimizeImage, sizesAuto } from "@/lib/imageOptimization.mjs";

/* A link that leaves the site (or opens a mail / phone app): no client-side navigation for it. */
export const isExternal = (href) => /^(https?:)?\/\//i.test(href) || /^(mailto|tel):/i.test(href);

/*
	The image's markup, shared with the builder preview (Image.jsx): a `*`
	wrapper holding the image (`img`), inside a link (`link`) when
	options.link is set - in a new tab with options.newTab.

	The alt text is options.altText. The panel always saved it (76 template
	images have one), but the image was rendered with alt="", so none of it
	reached screen readers or search engines. The width/height attributes are
	options.width / options.height when set, else 500x500 (what the builder
	used; the shop used 200x200 - both square, and every template sizes its
	images with classes). The element's id is on the wrapper; it was on the
	<img>.

	Images on the store's server and the site's own files are resized by
	next/image (lib/imageOptimization.mjs); banners were sent as the
	full-size upload. They may be shown at any width, so the size is picked
	from the laid-out width where the browser can ("auto"), else the screen
	width - never smaller than shown, so never blurry.
*/
export function ImageMarkup({ cls, id, index, type, options, onLinkClick, children, loadingProps = {}, rootClassName = '', rootProps = {} }) {

	var src = String(options?.src ?? '').trim();
	var alt = String(options?.altText ?? options?.alt ?? '');
	var link = String(options?.link ?? '').trim();
	var newTab = !!options?.newTab;

	var image = src ? (
		<NextImage src={src} width={parseInt(options?.width) || 500} height={parseInt(options?.height) || 500} alt={alt} className={cls('img')} unoptimized={!canOptimizeImage(src)} sizes={sizesAuto('100vw')} {...loadingProps} />
	) : children;

	var linkProps = { className: cls('link'), onClick: onLinkClick, ...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}) };

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{link && src
				? (isExternal(link) ? <a href={link} {...linkProps}>{image}</a> : <Link href={link} {...linkProps}>{image}</Link>)
				: image}
		</div>
	);
}

/* The image, linked when the block has a link. An image without a src renders nothing, as before. */
const ImageView = (props) => {

	/* A key the block lacks falls back to the image defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('image', props?.cssSelectors);

	/* Eager in the header, eager and high priority in the hero: see aboveTheFold.js. */
	var loadingProps = imageLoadingProps(useAboveTheFold());

	if (!String(props?.options?.src ?? '').trim()) return null;

	return <ImageMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} loadingProps={loadingProps} />;
};

ImageView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ImageView;
