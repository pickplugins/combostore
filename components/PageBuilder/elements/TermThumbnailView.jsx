import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCategory } from "../context/CategoryContext";
import { termUrlFor } from "./TermTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The term's image: thumbnail.src, else the thumbnail_url get_terms
	resolves from an attachment id (which was ignored, so such terms showed
	the placeholder), else /thumb.png.
*/
export function termImageSrc(term) {
	return String(term?.thumbnail?.src || term?.thumbnail_url || '').trim() || '/thumb.png';
}

/*
	The thumbnail's markup, shared with the builder preview
	(TermThumbnail.jsx): a `*` wrapper holding the `image`, inside a `link`
	to the term's archive page with options.linkTo 'termUrl' (product
	categories, brands and tags; termUrlFor). The linked version had no
	/thumb.png fallback, so a term without an image was an empty link; the
	element's id was on both the wrapper and the link; the image had an
	empty alt, and now has the term's name.
*/
export function TermThumbnailMarkup({ cls, id, index, type, options, term, href, onLinkClick, rootClassName = '', rootProps = {} }) {

	var alt = String(term?.name ?? '').replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim();
	var image = <Image className={cls('image')} unoptimized src={termImageSrc(term)} width={400} height={400} alt={alt} />;
	var linked = options?.linkTo === 'termUrl' && href;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{linked ? <Link href={href} onClick={onLinkClick} className={cls('link')}>{image}</Link> : image}
		</div>
	);
}

/* The image of the term (category, brand, tag) it sits in; nothing outside a terms loop. */
const TermThumbnailView = (props) => {

	/* A key the block lacks falls back to the termThumbnail defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('termThumbnail', props?.cssSelectors);

	const term = useCategory();
	if (!term) return null;

	return <TermThumbnailMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} term={term} href={termUrlFor(term)} />;
};

TermThumbnailView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default TermThumbnailView;
