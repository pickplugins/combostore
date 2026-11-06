"use client"
import React from "react";
import BlockRender from '../BlockRender';
import { PostGridProvider } from "../context/PostGridContext";
import { usePost } from "../context/PostContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	What the "linked products" blocks share - productUpsells and
	productCrosssells: each shows the products picked on the product being
	viewed under one of its fields (`upsells`, `crosssells`; saved as
	[{ id, title }] from the product editor's Upsells & Cross-sells), through
	the post loop inside it, like relatedProducts. Each block's files only say
	which field and type it is.
*/

/* How many linked products show when options.limit is unset. */
export const defaultLinkedProductsLimit = 4;

/* The ids saved on the product under `field`, in their saved order, without repeats. */
export function linkedProductIds(product, field) {
	var items = Array.isArray(product?.[field]) ? product[field] : [];
	return [...new Set(items.map(item => parseInt(item?.id ?? item, 10)).filter(n => n > 0))];
}

/*
	The products query: the product's linked products (post__in, in their
	saved order) of its post type, at most options.limit of them. Null when it
	has none - a post__in-less query would return every product.

	With no product - the builder - it is the latest products of the store, so
	the block's loop has something to preview.
*/
export function linkedProductsQuery(options, product, field) {
	var limit = parseInt(options?.limit, 10) || defaultLinkedProductsLimit;

	if (!product) {
		return { post_type: ['cmb_product'], order: 'DESC', orderby: 'date', posts_per_page: limit, taxQuery: [] };
	}

	var ids = linkedProductIds(product, field).slice(0, limit);
	if (ids.length < 1) return null;

	return {
		post_type: [product?.post_type || 'cmb_product'],
		post__in: ids,
		orderby: 'post__in',
		order: 'ASC',
		posts_per_page: ids.length,
		taxQuery: [],
	};
}

/*
	The block's markup, shared by the shop view and the builder preview: a `*`
	div holding the children - usually a post loop, which reads the query and
	the `loop-items` / `loop-item` classes through PostGridProvider.
*/
export function LinkedProductsMarkup({ cls, id, index, type, query, cssSelectors, children, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>

			<PostGridProvider value={{ queryPrams: query, cssSelectors: cssSelectors ?? {} }}>
				{children}
			</PostGridProvider>
		</div>
	);
}

/*
	The shop's block, for `blockType` reading the product's `field`. Renders
	nothing without a product (a PostContext) or when it has none linked.
*/
export function LinkedProductsView({ blockType, field, ...props }) {

	/* A key the block lacks falls back to the block type's defaults in ElementsDefinition.js. */
	var cls = elementCssClasses(blockType, props?.cssSelectors);

	const product = usePost();
	var query = product ? linkedProductsQuery(props?.options, product, field) : null;

	if (!query) return null;

	var children = Array.isArray(props?.children) ? props.children : [];
	var index = props?.index;

	return (
		<LinkedProductsMarkup cls={cls} id={props?.id} index={index} type={props?.type} query={query} cssSelectors={props?.cssSelectors}>
			{children.map((child, indexZ) => (
				<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />
			))}
		</LinkedProductsMarkup>
	);
}

