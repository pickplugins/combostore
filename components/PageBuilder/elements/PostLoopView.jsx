"use client"
import { useState, useEffect } from "react";
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import BlockRender from '../BlockRender';
import { PostProvider } from "../context/PostContext";
import { usePostGrid } from "../context/PostGridContext";
import { usePostSlider } from "../context/PostSliderContext";
import { usePage } from "../context/PageContext";
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The card class every palette grid, slider and related-products block used
	to give its loop. It was never shown (the loop ignored its own selectors),
	so it is still ignored now that they count - otherwise every grid made
	from the palette would turn into indigo cards overnight.
*/
const legacyPaletteLoopItem = 'flex flex-col gap-5 bg-gray-100 bg-indigo-300 p-3 rounded-sm';

/*
	The loop's classes. `loop-items` (the list) and `loop-item` (each card)
	come from the loop's own selectors when they are set - so editing a
	selected Post Loop in the panel now does something - and otherwise from
	its parent's (postGrid, postSlider or relatedProducts, through their
	context), then the postLoop defaults. They used to come only from the
	parent, so the loop's own panel changed nothing. Every template sets the
	same values on both, so none of them change.
*/
/* `type` picks whose defaults fill an empty key; the comments loop shares this rule. */
export function postLoopClasses(ownSelectors, parentSelectors, type = 'postLoop') {
	var merged = { ...(parentSelectors ?? {}) };
	for (const [key, value] of Object.entries(ownSelectors ?? {})) {
		var classes = String(value?.classes ?? '').trim();
		if (classes && classes !== legacyPaletteLoopItem) merged[key] = value;
	}
	return elementCssClasses(type, merged);
}

/*
	The query to post, as a copy: on a category, brand or tag archive the
	archive's term is added. It used to be written into the query object it
	was given - the parent's state, and before that the block's saved options.
*/
export function archiveQuery(query, pageAttr) {
	var q = { ...(query ?? {}) };
	var slugs = pageAttr?.slug == null ? [] : (Array.isArray(pageAttr.slug) ? pageAttr.slug : [pageAttr.slug]);
	if (pageAttr?.taxonomy == 'product_cat') q.categories = slugs;
	if (pageAttr?.taxonomy == 'product_brand') q.brands = slugs;
	if (pageAttr?.taxonomy == 'product_tag') q.tags = slugs;
	return q;
}

/*
	Fetches the loop's posts from combo-store/v2/get_posts, again whenever
	the query's content changes (pagination's page, the builder's query
	editor). A reply to an older query is dropped, so a slow page 1 can no
	longer overwrite page 2. { posts, loading, total, maxPages }; posts is []
	on an error. The builder used to fetch twice on mount.
*/
export function usePostLoopPosts(query) {
	var queryKey = query ? JSON.stringify(query) : '';
	var [state, setState] = useState({ posts: [], loading: !!queryKey });

	useEffect(() => {
		if (!queryKey) { setState({ posts: [], loading: false }); return; }
		var current = true;
		setState(s => ({ ...s, loading: true }));
		fetch(serverUrl + "wp-json/combo-store/v2/get_posts", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: queryKey,
		})
			.then(response => response.ok ? response.json() : Promise.reject(response.status))
			.then(res => { if (current) setState({ posts: Array.isArray(res?.posts) ? res.posts : [], loading: false, total: Number(res?.total) || 0, maxPages: Number(res?.max_pages) || 0 }); })
			.catch(() => { if (current) setState({ posts: [], loading: false }); });
		return () => { current = false; };
	}, [queryKey]);

	return state;
}

/*
	Tells the parent grid how many posts and pages the query has, so its
	pagination can stop at the last page (get_posts sends total and
	max_pages; nothing used them). A slider or related products has no
	onResults and is told nothing.
*/
export function useReportPostLoopResults(parent, total, maxPages) {
	var onResults = parent?.onResults;
	useEffect(() => {
		if (onResults && total != null) onResults({ total, maxPages });
	}, [onResults, total, maxPages]);
}

/*
	The loop's markup, shared with the builder preview (PostLoop.jsx). In a
	grid (and related products): a `loop-items` div of `loop-item` cards. In
	a slider: one SplideSlide per card, with no list wrapper - the slider's
	own track is the list. renderItem(item, i) gives each card's blocks; each
	card is wrapped in a PostProvider for that item (null for a builder
	sample card, so its blocks show their samples).
*/
export function PostLoopMarkup({ cls, id, index, type, items, inSlider, renderItem, itemKey, rootClassName = '', rootProps = {} }) {

	var card = (item, i, key) => (
		<div key={key} className={cls('loop-item')}>
			<PostProvider value={item}>{renderItem(item, i)}</PostProvider>
		</div>
	);

	if (inSlider) {
		return <>{items.map((item, i) => <SplideSlide key={itemKey(item, i)}>{card(item, i)}</SplideSlide>)}</>;
	}

	return (
		<div id={id} index={index} type={type} className={`${cls('loop-items')} ${rootClassName}`} {...rootProps}>
			{items.map((item, i) => card(item, i, itemKey(item, i)))}
		</div>
	);
}

const PostLoopView = (props) => {

	const postGridAttr = usePostGrid();
	const postSliderAttr = usePostSlider();
	const pageAttr = usePage();

	var parent = postGridAttr ?? postSliderAttr;

	/* A key the block lacks falls back to its parent's, then the postLoop defaults in ElementsDefinition.js. */
	var cls = postLoopClasses(props?.cssSelectors, parent?.cssSelectors);

	var { posts, total, maxPages } = usePostLoopPosts(parent?.queryPrams ? archiveQuery(parent.queryPrams, pageAttr) : null);
	useReportPostLoopResults(postGridAttr, total, maxPages);

	/* A loop outside a grid or slider has no query, so nothing to show (as before). */
	if (!parent) return null;

	var children = props?.children;
	var index = props?.index;

	return (
		<PostLoopMarkup
			cls={cls}
			id={props?.id}
			index={index}
			type={props?.type}
			items={posts}
			inSlider={!postGridAttr && !!postSliderAttr}
			itemKey={(item, i) => item?.id ?? i}
			renderItem={(item, i) => Array.isArray(children) && children.map((child, indexZ) => (
				<BlockRender index={`${i}${indexZ}`} key={child.id} block={child} />
			))}
		/>
	);
};

export default PostLoopView;
