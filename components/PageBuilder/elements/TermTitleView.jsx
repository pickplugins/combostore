import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { useCategory } from "../context/CategoryContext";
import { termArchiveHref } from "./ProductCategoriesView";
import { elementCssClasses } from "../ElementsDefinition";

/* The shop's archive page for each product taxonomy (app/categories, app/brands, app/tags). */
const archiveBase = { product_cat: 'categories', product_brand: 'brands', product_tag: 'tags' };

/*
	A term's archive page, or null when it has none: categories, brands and
	tags of products link to /categories/<slug>/, /brands/<slug>/ and
	/tags/<slug>/. The old link glued the store URL straight onto the path,
	gave product tags href="" (the page already open), and sent blog
	categories to /category/<slug>, a page that does not exist.
*/
export function termUrlFor(term) {
	var base = archiveBase[term?.taxonomy];
	return base && term?.slug ? termArchiveHref(base, term.slug) : null;
}

/* Tags the title may be drawn as; anything else is a div. */
const titleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'];

/*
	The title's markup, shared with the builder preview (TermTitle.jsx): the
	term's name in options.tag (a div when unset - it used to default to h1,
	which would give a page of category cards one h1 each), carrying the `*`
	classes. With options.linkTo 'termUrl' and an archive page, the name is a
	link inside that tag: the tag was dropped for linked titles, so a linked
	h3 was a bare <a>.
*/
export function TermTitleMarkup({ cls, id, index, type, options, name, href, onLinkClick, rootClassName = '', rootProps = {} }) {

	var Tag = titleTags.includes(options?.tag) ? options.tag : 'div';
	var linked = options?.linkTo === 'termUrl' && href;

	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{linked
				? <Link href={href} onClick={onLinkClick} dangerouslySetInnerHTML={{ __html: name }} />
				: <span dangerouslySetInnerHTML={{ __html: name }} />}
		</Tag>
	);
}

/* The name of the term (category, brand, tag) it sits in; nothing outside a terms loop or for a nameless term. */
const TermTitleView = (props) => {

	/* A key the block lacks falls back to the termTitle defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('termTitle', props?.cssSelectors);

	const term = useCategory();
	if (!String(term?.name ?? '').trim()) return null;

	return <TermTitleMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} name={term.name} href={termUrlFor(term)} />;
};

TermTitleView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default TermTitleView;
