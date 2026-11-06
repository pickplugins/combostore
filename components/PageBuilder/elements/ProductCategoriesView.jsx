import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { usePost } from "../context/PostContext";
import { elementCssClasses } from "../ElementsDefinition";

const appUrl = process.env.NEXT_PUBLIC_STORE_URL;

/* A product's terms from one field (categories, tags, brands): only entries with a name, or an empty list. */
export function productTermsFor(product, field) {
	return (Array.isArray(product?.[field]) ? product[field] : []).filter(term => term && term.name);
}

/*
	A term archive URL under the store: /<base>/<slug>/. Joined from trimmed
	parts - the old string glued the store URL straight onto "categories/",
	so a store URL without a trailing slash produced a broken link.
*/
export function termArchiveHref(base, slug) {
	var root = String(appUrl ?? '').replace(/\/+$/, '');
	var cleanSlug = String(slug ?? '').replace(/^\/+|\/+$/g, '');
	return `${root}/${base}/${cleanSlug}/`;
}

/*
	The markup for a product's term links, shared by the categories block here
	and its builder preview (ProductCategories.jsx): an optional label, then
	one `item` link per term holding its name (`category-name`) and, between
	terms, options.separator (", " by default) in `separator`. `hrefFor(term)`
	builds each link; `onLinkClick` lets the builder stop navigation.
*/
export function ProductTermLinksMarkup({ cls, id, index, type, options, terms, hrefFor, onLinkClick, rootClassName = '', rootProps = {} }) {

	var separator = options?.separator ?? ', ';

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{options?.label && <div className={cls('label')}>{options.label}</div>}
			<div className={cls('items')}>
				{terms.map((item, itemIndex) => (
					<Link key={item.slug ?? itemIndex} href={hrefFor(item)} onClick={onLinkClick} className={cls('item')}>
						<span className={cls('category-name')} dangerouslySetInnerHTML={{ __html: item.name }} />
						{itemIndex < terms.length - 1 && separator !== '' && (
							<span className={cls('separator')}>{separator}</span>
						)}
					</Link>
				))}
			</div>
		</div>
	);
}

/*
	The product's categories, each linking to its category page. The shop used
	to fall back to two placeholders, "Category Name" and "Category Name 2", so
	every product without categories showed fake ones; it now shows nothing.
	The separator option was declared but the text was hardcoded to ", ".
*/
const ProductCategoriesView = (props) => {

	/* A key the block lacks falls back to the productCategories defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productCategories', props?.cssSelectors);

	const product = usePost();
	var categories = productTermsFor(product, 'categories');
	if (categories.length === 0) return null;

	return (
		<ProductTermLinksMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			terms={categories}
			hrefFor={term => termArchiveHref('categories', term.slug)}
		/>
	);
};

ProductCategoriesView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductCategoriesView;
