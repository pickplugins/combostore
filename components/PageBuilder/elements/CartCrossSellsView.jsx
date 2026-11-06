"use client"
import React, { useEffect, useMemo, useState } from "react";
import BlockRender from '../BlockRender';
import { LinkedProductsMarkup, linkedProductIds } from "./linkedProducts";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const defaultCartCrossSellsTitle = 'Frequently bought together';
export const defaultCartCrossSellsLimit = 4;

/*
	The cart's "Frequently bought together": the cross-sells of the products
	in the cart (each product's Cross-sells, picked in the product editor),
	shown with the productCrosssells block's own markup and post loop
	(linkedProducts.jsx).

	Cart items keep only a product's id, title and price, so the cart's
	products are fetched (get_posts by id) for their cross-sells. Their
	cross-sells are then listed in cart order, without repeats and without
	what is already in the cart, up to the limit.
*/

/* The products in the cart, by id, in cart order. */
export function cartProductIds(cartItems) {
	return [...new Set((Array.isArray(cartItems) ? cartItems : []).map(item => parseInt(item?.id, 10)).filter(n => n > 0))];
}

/* The cross-sell ids of the cart's products, in cart order, without repeats or products already in the cart. */
export function cartCrossSellIds(cartProducts, cartIds, limit = defaultCartCrossSellsLimit) {
	var inCart = new Set(cartIds);
	var byId = new Map((cartProducts ?? []).map(p => [parseInt(p?.id, 10), p]));
	var ids = [];
	cartIds.forEach(id => {
		linkedProductIds(byId.get(id), 'crosssells').forEach(crossId => {
			if (!inCart.has(crossId) && !ids.includes(crossId)) ids.push(crossId);
		});
	});
	return ids.slice(0, Math.max(1, parseInt(limit, 10) || defaultCartCrossSellsLimit));
}

/* The cart's products, fetched once per set of ids for the whole visit. */
const productsByKey = new Map();

function fetchCartProducts(ids) {
	var key = [...ids].sort((a, b) => a - b).join(',');
	if (!productsByKey.has(key)) {
		productsByKey.set(key, fetch(serverUrl + "wp-json/combo-store/v2/get_posts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ post_type: ['cmb_product'], post__in: ids, posts_per_page: ids.length, taxQuery: [] }),
		})
			.then(res => res.ok ? res.json() : Promise.reject(res.status))
			.then(res => Array.isArray(res?.posts) ? res.posts : [])
			.catch(error => { productsByKey.delete(key); throw error; }));
	}
	return productsByKey.get(key);
}

/* The post loop's query for the cart's cross-sells, or null when there are none (or while loading). */
export function useCartCrossSellsQuery(cartItems, limit, enabled = true) {
	var cartIds = cartProductIds(cartItems);
	var idsKey = cartIds.join(',');
	var [products, setProducts] = useState([]);

	useEffect(() => {
		if (!enabled || cartIds.length < 1) { setProducts([]); return; }
		var current = true;
		fetchCartProducts(cartIds)
			.then(list => { if (current) setProducts(list); })
			.catch(() => { if (current) setProducts([]); });
		return () => { current = false; };
	}, [idsKey, enabled]);

	return useMemo(() => {
		if (!enabled) return null;
		var ids = cartCrossSellIds(products, cartIds, limit);
		if (ids.length < 1) return null;
		var postType = products.find(p => p?.post_type)?.post_type || 'cmb_product';
		return { post_type: [postType], post__in: ids, orderby: 'post__in', order: 'ASC', posts_per_page: ids.length, taxQuery: [] };
	}, [products, idsKey, limit, enabled]);
}

/*
	The cards: the productCrosssells block's post loop (thumbnail, title,
	price), sized for the drawer, with an Add button (the addToCart block,
	without its quantity stepper). A product with variations links to its page
	from the title and image, where its options are chosen.
*/
const CROSS_SELL_BLOCKS = [{
	id: 'cart-xs-loop',
	type: 'postLoop',
	options: {},
	cssSelectors: { '*': { classes: '' }, 'loop-items': { classes: '' }, 'loop-item': { classes: '' } },
	children: [
		{
			id: 'cart-xs-thumb', type: 'postThumbnail', options: { linkTo: 'postUrl' },
			cssSelectors: { '*': { classes: '' }, 'link': { classes: 'block' }, 'image': { classes: 'aspect-square w-full rounded-md object-cover bg-gray-100' } },
		},
		{
			id: 'cart-xs-title', type: 'postTitle', options: { linkTo: 'postUrl', tag: 'h4' },
			cssSelectors: { '*': { classes: 'line-clamp-2 text-xs font-medium text-gray-800' } },
		},
		{ id: 'cart-xs-price', type: 'productPrice', options: {}, cssSelectors: { '*': { classes: 'text-xs' } } },
		{
			id: 'cart-xs-add', type: 'addToCart', options: { buttonText: 'Add', hideQuantity: true },
			cssSelectors: {
				'*': { classes: 'mt-auto flex' },
				'button-wrapper': { classes: 'flex w-full items-center justify-center rounded-md bg-gray-900 text-white transition-colors hover:bg-gray-700 cursor-pointer' },
				'button-label': { classes: 'px-3 py-1.5 text-xs font-medium text-white cursor-pointer' },
			},
		},
	],
}];

/*
	The section, for CartView to put in the drawer under the items. `cls` is
	the cart block's lookup: cross-sells (the section), cross-sells-title,
	cross-sells-items (the grid) and cross-sells-item (a card). Renders nothing
	when the cart's products have no cross-sells.
*/
export default function CartCrossSells({ cls, cartItems, title = defaultCartCrossSellsTitle, limit = defaultCartCrossSellsLimit }) {
	var query = useCartCrossSellsQuery(cartItems, limit);

	console.log('CartCrossSells query:', query, 'cartItems:', cartItems, 'title:', title, 'limit:', limit);


	if (!query) return null;

	/* The loop takes its grid and card classes from the provider, as inside a productCrosssells block. */
	var loopSelectors = {
		'loop-items': { classes: cls('cross-sells-items') },
		'loop-item': { classes: cls('cross-sells-item') },
	};

	return (
		<section className={cls('cross-sells')} aria-label={title || defaultCartCrossSellsTitle}>


			{title && <h3 className={cls('cross-sells-title')}>{title}</h3>}
			<LinkedProductsMarkup cls={() => ''} query={query} cssSelectors={loopSelectors}>
				{CROSS_SELL_BLOCKS.map((block, i) => <BlockRender key={block.id} index={`cart-xs-${i}`} block={block} />)}
			</LinkedProductsMarkup>
		</section>
	);
}
