"use client"
import { useState, useEffect } from "react";
import BlockRender from '../BlockRender';
import { PostGridProvider } from "../context/PostGridContext";
import { usePost } from "../context/PostContext";

import { elementCssClasses } from "../ElementsDefinition";
/*
	The products query for "related products": the block's own query, limited
	to the current product's post type and to products sharing one of its
	categories. It builds a new object. It used to write post_type and
	taxQuery into the saved options.queryPrams (an array by default) on every
	render, and crashed on a product with no categories (categories.map of
	undefined). With no product - the builder - it is just the block's query
	for products.
*/
export function relatedProductsQuery(queryPrams, product) {
	var base = queryPrams && typeof queryPrams === 'object' && !Array.isArray(queryPrams) ? queryPrams : {};
	var query = { ...base, post_type: [product?.post_type || 'product'] };
	var slugs = (Array.isArray(product?.categories) ? product.categories : []).map(item => item?.slug).filter(Boolean);
	if (slugs.length > 0) {
		query.taxQuery = [{
			"title": "",
			"collections": [{ "taxonomy": "product_cat", "field": "slug", "terms": slugs, "operator": "IN" }],
			"relation": "OR"
		}];
	}
	return query;
}

const RelatedProductsView = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var queryPrams = options?.queryPrams ?? [];
	var id = props?.id;

	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};
	/* A key the block lacks falls back to the relatedProducts defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('relatedProducts', cssSelectors);




	var sliderOptions = options?.sliderOptions


	const product = usePost();
	var query = relatedProductsQuery(options?.queryPrams, product);

	return (
		<div
			id={id}
			type={type}
			className={`${cls('*')}  `}

		>



			<PostGridProvider value={{ queryPrams: query, cssSelectors: cssSelectors }}>

				{children != undefined && children.map((child, indexZ) => {


					return (

						<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />

					)

				})}

			</PostGridProvider>





		</div>
	);
};

export default RelatedProductsView;
