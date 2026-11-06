"use client"
import PropTypes from "prop-types";
import React from "react";
import { useTermsGrid } from "../context/TermsGridContext";
import { PaginationMarkup, paginationSettings } from "./PostGridPaginationView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Pages through the terms grid it sits in - the same markup, settings and
	behaviour as the post grid's pagination (PaginationMarkup): it reads the
	grid's query and page count from TermsGridContext, changes the page
	through the grid's onChangeQuery, then scrolls the grid into view, and
	hides when there is a single page. It was a copy of the old post
	pagination: Next paged on past the last page, clearing the box sent
	paged: NaN, the arrows were divs, and it kept its own copy of the query.
*/
const TermsGridPaginationView = (props) => {

	const grid = useTermsGrid();

	/* A key the block lacks falls back to the termsGridPagination defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('termsGridPagination', props?.cssSelectors);

	var paged = parseInt(grid?.queryPrams?.paged) || 1;
	var maxPages = Number(grid?.results?.maxPages) || 0;

	if (!grid?.onChangeQuery) return null;
	if (grid?.results && maxPages <= 1 && paged <= 1) return null;

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
				if (typeof document !== 'undefined') document.getElementById(props?.id)?.closest('[type="termsGrid"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}}
		/>
	);
};

TermsGridPaginationView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default TermsGridPaginationView;
