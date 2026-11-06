"use client"
import React, { useState, useMemo, useCallback } from "react";
import BlockRender from '../BlockRender';
import { CommentsGridProvider } from "../context/CommentsGridContext";
import { usePost } from "../context/PostContext";
import { PostGridMarkup } from "./PostGridView";
import { elementCssClasses, withElementCssDefaults } from "../ElementsDefinition";

/* The query keys get_comments reads; anything else saved on the block is left out. */
const commentQueryKeys = ['per_page', 'paged', 'order', 'orderby', 'hierarchical'];

/*
	The get_comments query: the page's post, 20 a page, oldest first, with
	the block's own per_page / order / orderby / hierarchical on top.

	The post id is post_id, else product_id, else id: blog pages provide the
	post as `id`, so the grid sent post_id null there - and get_comments with
	no post_id returns every approved comment on the site. A grid on a page
	with no post (a home-page testimonials strip) still shows the site's
	comments, as before. The panel used to be the posts query editor, so a
	saved query could hold post_type, taxQuery and the like; only the keys
	get_comments reads are taken.
*/
export function commentsGridQuery(options, post) {
	var saved = options?.queryPrams && typeof options.queryPrams === 'object' && !Array.isArray(options.queryPrams) ? options.queryPrams : {};
	var query = { post_id: post?.post_id ?? post?.product_id ?? post?.id ?? null, paged: 1, order: 'ASC', per_page: 20 };
	for (const key of commentQueryKeys) if (saved[key] !== undefined && saved[key] !== '') query[key] = saved[key];
	return query;
}

/*
	The grid's state and what it shares with its commentsLoop, commentsForm
	and commentsGridPagination through CommentsGridContext:
	- queryPrams: the query, rebuilt only when its content changes (it was a
	  new object on every render, so the loop refetched on every re-render);
	- onChangeQuery: for the pagination, which changes the page (the context
	  had none, so pagination had nothing to call);
	- refresh / onCommentSubmitted: a comment posted through the form reloads
	  the list (the counter now always moves on, even after quick posts);
	- results / onResults: the loop's counts, for the pagination;
	- cssSelectors: the grid's own, filled from the commentsGrid defaults - the
	  loop styles its list and cards from `loop-items` / `loop-item`.
*/
export function useCommentsGridState(options, post, cssSelectors) {
	var baseKey = JSON.stringify(commentsGridQuery(options, post));
	var [paged, setPaged] = useState(1);
	var [pagedFor, setPagedFor] = useState(baseKey);
	if (pagedFor !== baseKey) { setPagedFor(baseKey); setPaged(1); }

	var queryPrams = useMemo(() => ({ ...JSON.parse(baseKey), paged }), [baseKey, paged]);
	var onChangeQuery = useCallback((next) => setPaged(Math.max(1, parseInt(next?.paged) || 1)), []);

	var [refresh, setRefresh] = useState(0);
	var onCommentSubmitted = useCallback(() => setRefresh(r => r + 1), []);

	var [results, setResults] = useState(null);
	var onResults = useCallback((r) => setResults(prev => (prev?.total === r?.total && prev?.maxPages === r?.maxPages) ? prev : r), []);

	var selectors = useMemo(() => withElementCssDefaults('commentsGrid', cssSelectors), [cssSelectors]);

	return useMemo(() => ({ queryPrams, onChangeQuery, refresh, onCommentSubmitted, results, onResults, cssSelectors: selectors }),
		[queryPrams, onChangeQuery, refresh, onCommentSubmitted, results, onResults, selectors]);
}

/* The grid's wrapper (`*`), the same as Post Grid's; shared with the builder preview (CommentsGrid.jsx). */
export const CommentsGridMarkup = PostGridMarkup;

/*
	The comments (reviews) of the post or product on the page, with whatever
	is inside it - normally a commentsLoop, a commentsForm and a
	commentsGridPagination, often inside a grid layout.
*/
const CommentsGridView = (props) => {

	var children = props?.children;
	var index = props?.index;

	/* A key the block lacks falls back to the commentsGrid defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('commentsGrid', props?.cssSelectors);

	const post = usePost();
	var contextValue = useCommentsGridState(props?.options, post, props?.cssSelectors);

	return (
		<CommentsGridMarkup cls={cls} id={props?.id} index={index} type={props?.type}>
			<CommentsGridProvider value={contextValue}>
				{Array.isArray(children) && children.map((child, indexZ) => (
					<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />
				))}
			</CommentsGridProvider>
		</CommentsGridMarkup>
	);
};

export default CommentsGridView;
