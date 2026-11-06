"use client"
import { useState, useMemo, useCallback } from "react";
import { PostGridProvider } from "../context/PostGridContext";
import BlockRender from '../BlockRender';
import { elementCssClasses, withElementCssDefaults } from "../ElementsDefinition";

/* The query a grid without one shows: the latest blog posts, one row of the default four columns. */
export const defaultPostGridQuery = { post_type: ['post'], order: 'DESC', orderby: 'date', posts_per_page: '4', taxQuery: [] };

/*
	The grid's query - options.queryPrams (that spelling is what every saved
	block and the query editor use) - as a fresh object. The definition
	declared `queryParams: []` instead, so a grid from the palette had no
	query: its loop posted an empty body, and on a category page it crashed
	setting categories on undefined. An empty or array value falls back to
	the definition's old queryParams, then options.query (where the Post
	Slider's panel used to save it), then `fallback`.
*/
export function postGridQuery(options, fallback = defaultPostGridQuery) {
	var isQuery = (q) => q && typeof q === 'object' && !Array.isArray(q) && Object.keys(q).length > 0;
	var q = [options?.queryPrams, options?.queryParams, options?.query].find(isQuery) ?? fallback;
	return { ...q };
}

/*
	What the grid shares with its children (postLoop, postGridPagination)
	through PostGridContext: the query, the selectors, onChangeQuery, and the
	loop's results ({ total, maxPages }, reported through onResults) for the
	pagination.

	The selectors are the grid's own `loop-items` / `loop-item` keys, which
	PostLoop styles its list and cards from. They are filled from the
	postGrid defaults first: a grid lacking a key used to fall back to the
	postLoop defaults instead.

	The query is passed on as the same object, never copied here: the shop's
	pagination hands it back through onChangeQuery whenever it changes, and
	only React skipping a same-object update stops that from looping. It is
	the grid's own state - a copy of the saved options made by postGridQuery -
	so PostLoopView writing the archive's term into it no longer writes into
	the block's saved options, as it did.
*/
export function usePostGridContextValue(cssSelectors, query, onChangeQuery) {
	var selectors = useMemo(() => withElementCssDefaults('postGrid', cssSelectors), [cssSelectors]);
	var [results, setResults] = useState(null);
	var onResults = useCallback((r) => setResults(prev => (prev?.total === r?.total && prev?.maxPages === r?.maxPages) ? prev : r), []);
	return useMemo(() => ({ queryPrams: query, cssSelectors: selectors, onChangeQuery, results, onResults }), [query, selectors, onChangeQuery, results, onResults]);
}

/*
	The grid's wrapper, shared with the builder preview (PostGrid.jsx): a div
	carrying the `*` classes. Its children - normally a postLoop, then
	optionally a postGridPagination - are rendered by the caller (BlockRender
	on the shop, BlockPreview in the builder).
*/
export function PostGridMarkup({ cls, id, index, type, children, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{children}
		</div>
	);
}

const PostGridView = (props) => {

	var children = props?.children;
	var index = props?.index;

	/* A key the block lacks falls back to the postGrid defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postGrid', props?.cssSelectors);

	/* Pagination changes the page through onChangeQuery; the saved options are never touched. */
	var [query, setQuery] = useState(() => postGridQuery(props?.options));
	var onChangeQuery = useCallback((next) => setQuery(next ?? postGridQuery(props?.options)), [props?.options]);

	var contextValue = usePostGridContextValue(props?.cssSelectors, query, onChangeQuery);

	return (
		<PostGridMarkup cls={cls} id={props?.id} index={index} type={props?.type}>
			<PostGridProvider value={contextValue}>
				{Array.isArray(children) && children.map((child, indexZ) => (
					<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />
				))}
			</PostGridProvider>
		</PostGridMarkup>
	);
};

export default PostGridView;
