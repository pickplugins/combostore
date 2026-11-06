import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { ProductTermLinksMarkup, productTermsFor, termArchiveHref } from "./ProductCategoriesView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The product's brands, each linking to its /brands/<slug>/ page, through the
	same ProductTermLinksMarkup the categories and tags blocks use. The shop
	used to fall back to two placeholders, "Brand Name" and "Brand Name 2", so
	every product without a brand showed fake ones; it now shows nothing. The
	separator option was declared but the text was hardcoded to ", ".
*/
const ProductBrandsView = (props) => {

	/* A key the block lacks falls back to the productBrands defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productBrands', props?.cssSelectors);

	const product = usePost();
	var brands = productTermsFor(product, 'brands');
	if (brands.length === 0) return null;

	return (
		<ProductTermLinksMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			terms={brands}
			hrefFor={term => termArchiveHref('brands', term.slug)}
		/>
	);
};

ProductBrandsView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductBrandsView;
