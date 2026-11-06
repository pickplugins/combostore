import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { ProductTermLinksMarkup, productTermsFor, termArchiveHref } from "./ProductCategoriesView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The product's tags, each linking to its /tags/<slug>/ page, through the
	same ProductTermLinksMarkup the categories block uses. The shop used to
	fall back to two placeholders, "Tag Name" and "Tag Name 2", so every
	product without tags showed fake ones; it now shows nothing. The separator
	option was declared but the text was hardcoded to ", ".
*/
const ProductTagsView = (props) => {

	/* A key the block lacks falls back to the productTags defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productTags', props?.cssSelectors);

	const product = usePost();
	var tags = productTermsFor(product, 'tags');
	if (tags.length === 0) return null;

	return (
		<ProductTermLinksMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			terms={tags}
			hrefFor={term => termArchiveHref('tags', term.slug)}
		/>
	);
};

ProductTagsView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductTagsView;
