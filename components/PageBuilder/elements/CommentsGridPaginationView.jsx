"use client"
import PropTypes from "prop-types";
import React from "react";
import { useCommentsGrid } from "../context/CommentsGridContext";
import { PaginationMarkup, paginationSettings } from "./PostGridPaginationView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Pages through the comments grid it sits in - the post grid pagination's
	markup and settings (PaginationMarkup), reading the grid's query and
	changing the page through its onChangeQuery, then scrolling the grid into
	view. It read the *post* grid's context (usePostGrid), so inside a
	comments grid it had no query and paged nothing.

	get_comments sends no page count, so the last page is known only once the
	loop gets a page shorter than per_page: until then Next stays enabled,
	and the numbers style shows the page box (it cannot number pages it does
	not know of). It hides when the first page is also the last.
*/
const CommentsGridPaginationView = (props) => {

	const grid = useCommentsGrid();

	/* A key the block lacks falls back to the commentsGridPagination defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('commentsGridPagination', props?.cssSelectors);

	var paged = parseInt(grid?.queryPrams?.paged) || 1;
	var maxPages = Number(grid?.results?.maxPages) || 0;

	if (!grid?.onChangeQuery) return null;
	if (maxPages === 1 && paged <= 1) return null;

	return (
		<PaginationMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			settings={paginationSettings(props?.options, props?.cssSelectors)}
			paged={paged}
			maxPages={maxPages}
			onPage={(p) => {
				grid.onChangeQuery({ ...grid.queryPrams, paged: p });
				if (typeof document !== 'undefined') document.getElementById(props?.id)?.closest('[type="commentsGrid"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}}
		/>
	);
};

CommentsGridPaginationView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CommentsGridPaginationView;
