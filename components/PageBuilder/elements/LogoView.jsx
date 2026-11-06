import PropTypes from "prop-types";
import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { isExternal } from "./ImageView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Which logo to draw: options.logoType 'text', 'image' or 'both'. Anything
	else - the panel's "Choose" saved '' and drew an empty logo - is 'image'
	when there is an image, else 'text'. An image mode without a src shows
	the text instead: next/image was handed an empty src.
*/
export function logoMode(options) {
	var src = String(options?.src ?? '').trim();
	var type = ['text', 'image', 'both'].includes(options?.logoType) ? options.logoType : (src ? 'image' : 'text');
	if (type !== 'text' && !src) return 'text';
	return type;
}

/*
	The logo's markup, shared with the builder preview (Logo.jsx): a `*`
	wrapper holding a `link` to options.link (the home page, "/", when unset)
	with the `img` and/or the `text` - a <span> in text mode, a <div> beside
	the image in both mode, as before.

	options.link was read but never used (the image modes linked to "#" in
	the builder). The image's alt text is options.altText, else the logo
	text: it was always empty, which left an image-only logo's home link with
	no name for screen readers.
*/
export function LogoMarkup({ cls, id, index, type, options, onLinkClick, rootClassName = '', rootProps = {} }) {

	var mode = logoMode(options);
	var src = String(options?.src ?? '').trim();
	var logoText = String(options?.logoText ?? '');
	var href = String(options?.link ?? '').trim() || '/';
	var alt = String(options?.altText ?? '').trim() || logoText.trim();

	var image = mode !== 'text' && (
		<NextImage src={src} width={500} height={500} alt={alt} className={cls('img')} unoptimized />
	);
	var text = mode === 'text'
		? <span className={cls('text')}>{logoText}</span>
		: (mode === 'both' ? <div className={cls('text')}>{logoText}</div> : null);

	var inner = <>{image}{text}</>;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{isExternal(href)
				? <a className={cls('link')} href={href} onClick={onLinkClick}>{inner}</a>
				: <Link className={cls('link')} href={href} onClick={onLinkClick}>{inner}</Link>}
		</div>
	);
}

/* The store's logo, linking home. Nothing when it has neither text nor an image. */
const LogoView = (props) => {

	/* A key the block lacks falls back to the logo defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('logo', props?.cssSelectors);

	var options = props?.options;
	if (!String(options?.logoText ?? '').trim() && !String(options?.src ?? '').trim()) return null;

	return <LogoMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={options} />;
};

LogoView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default LogoView;
