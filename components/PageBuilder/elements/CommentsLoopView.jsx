"use client"
import React, { useState, useEffect } from "react";
import BlockRender from '../BlockRender';
import { CommentProvider } from "../context/CommentContext";
import { useCommentsGrid } from "../context/CommentsGridContext";
import { postLoopClasses } from "./PostLoopView";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The loop's classes: `loop-items` (the list) and `loop-item` (each card),
	the loop's own when set, else the comments grid's, else the commentsLoop
	defaults - Post Loop's rule (postLoopClasses). They used to come from the
	grid only, so editing a selected loop changed nothing; no template or
	preset sets them differently on the two.
*/
export function commentsLoopClasses(ownSelectors, parentSelectors) {
	return postLoopClasses(ownSelectors, parentSelectors, 'commentsLoop');
}

/*
	Fetches the grid's comments from combo-store/v2/get_comments, again when
	the query's content changes (pagination) or the grid's `refresh` moves (a
	comment was posted). A reply to an older query is dropped. { comments,
	loading, maxPages }: get_comments sends no totals, so a short page (fewer
	than per_page) tells the pagination it is the last; until then maxPages
	is 0, unknown.
*/
export function useCommentsLoopComments(query, refresh) {
	var queryKey = query ? JSON.stringify(query) : '';
	var [state, setState] = useState({ comments: [], loading: !!queryKey });

	useEffect(() => {
		if (!queryKey) { setState({ comments: [], loading: false }); return; }
		var current = true;
		setState(s => ({ ...s, loading: true }));
		fetch(serverUrl + "wp-json/combo-store/v2/get_comments", {
			cache: "no-store",
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: queryKey,
		})
			.then(response => response.ok ? response.json() : Promise.reject(response.status))
			.then(res => {
				if (!current) return;
				var comments = Array.isArray(res?.comments) ? res.comments : (res?.comments ? Object.values(res.comments) : []);
				var perPage = parseInt(query?.per_page) || 20;
				var paged = parseInt(query?.paged) || 1;
				var maxPages = Number(res?.max_pages) || (comments.length < perPage ? paged : 0);
				setState({ comments, loading: false, total: Number(res?.total) || null, maxPages });
			})
			.catch(() => { if (current) setState({ comments: [], loading: false }); });
		return () => { current = false; };
	}, [queryKey, refresh]);

	return state;
}

/*
	The loop's markup, shared with the builder preview (CommentsLoop.jsx): a
	`loop-items` list of `loop-item` cards, each card's blocks reading the
	comment through CommentProvider. (The builder put `*` on the list where
	the shop put `loop-items`.)
*/
export function CommentsLoopMarkup({ cls, id, index, type, items, renderItem, itemKey, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} index={index} type={type} className={`${cls('loop-items')} ${rootClassName}`} {...rootProps}>
			{items.map((item, i) => (
				<div key={itemKey(item, i)} className={cls('loop-item')}>
					<CommentProvider value={item}>{renderItem(item, i)}</CommentProvider>
				</div>
			))}
		</div>
	);
}

/*
	The comments of the grid it sits in. It fetched only when the page had a
	product_id, so on blog posts - and on a site-wide testimonials grid - it
	never fetched; the grid now decides the post.
*/
const CommentsLoopView = (props) => {

	const grid = useCommentsGrid();

	var cls = commentsLoopClasses(props?.cssSelectors, grid?.cssSelectors);

	var { comments, total, maxPages } = useCommentsLoopComments(grid?.queryPrams ?? null, grid?.refresh);
	var onResults = grid?.onResults;
	useEffect(() => { if (onResults && maxPages != null) onResults({ total, maxPages }); }, [onResults, total, maxPages]);

	if (!grid) return null;

	var children = props?.children;

	return (
		<CommentsLoopMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			items={comments}
			itemKey={(item, i) => item?.comment_ID ?? item?.comment_id ?? item?.id ?? i}
			renderItem={(item, i) => Array.isArray(children) && children.map((child, indexY) => (
				<BlockRender index={`${i}${indexY}`} key={child.id} block={child} />
			))}
		/>
	);
};

export default CommentsLoopView;
