"use client"
import { useState, useMemo, useCallback } from "react";
import BlockRender from '../BlockRender';
import { TermsGridProvider } from "../context/TermsGridContext";
import { PostGridMarkup, postGridQuery } from "./PostGridView";
import { elementCssClasses, withElementCssDefaults } from "../ElementsDefinition";

/*
	The query a terms grid without one shows: eight product categories with
	products, by name. get_terms takes the count from `number` (per_page only
	counts together with paged).
*/
export const defaultTermsGridQuery = { taxonomy: 'product_cat', number: '8', hide_empty: true, order: 'ASC', orderby: 'name' };

/*
	The grid's query (options.queryPrams), as a fresh object: an empty or
	array value - every grid from the palette had none, so its loop posted
	"[]" - falls back to defaultTermsGridQuery. See postGridQuery.
*/
export function termsGridQuery(options) {
	return postGridQuery(options, defaultTermsGridQuery);
}

/*
	What the grid shares with its termsLoop and termsGridPagination through
	TermsGridContext: the query, the selectors (filled from the termsGrid
	defaults: a grid lacking `loop-items` used to fall back to the termsLoop
	defaults, losing the grid's columns), onChangeQuery, and the loop's
	results ({ total, maxPages }, reported through onResults). The query is
	passed on as the same object: pagination hands it back through
	onChangeQuery, and only React skipping a same-object update stops that
	from looping.
*/
export function useTermsGridContextValue(cssSelectors, query, onChangeQuery) {
	var selectors = useMemo(() => withElementCssDefaults('termsGrid', cssSelectors), [cssSelectors]);
	var [results, setResults] = useState(null);
	var onResults = useCallback((r) => setResults(prev => (prev?.total === r?.total && prev?.maxPages === r?.maxPages) ? prev : r), []);
	return useMemo(() => ({ queryPrams: query, cssSelectors: selectors, onChangeQuery, results, onResults }), [query, selectors, onChangeQuery, results, onResults]);
}

/* The grid's wrapper (`*`), the same as Post Grid's; shared with the builder preview (TermsGrid.jsx). */
export const TermsGridMarkup = PostGridMarkup;

/* A grid of terms (categories, brands, tags) from its query; each card is laid out by the termsLoop inside. */
const TermsGridView = (props) => {

	var children = props?.children;
	var index = props?.index;

	/* A key the block lacks falls back to the termsGrid defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('termsGrid', props?.cssSelectors);

	/* Pagination changes the page through onChangeQuery; the saved options are never touched. */
	var [query, setQuery] = useState(() => termsGridQuery(props?.options));
	var onChangeQuery = useCallback((next) => setQuery(next ?? termsGridQuery(props?.options)), [props?.options]);

	var contextValue = useTermsGridContextValue(props?.cssSelectors, query, onChangeQuery);

	return (
		<TermsGridMarkup cls={cls} id={props?.id} index={index} type={props?.type}>
			<TermsGridProvider value={contextValue}>
				{Array.isArray(children) && children.map((child, indexZ) => (
					<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />
				))}
			</TermsGridProvider>
		</TermsGridMarkup>
	);
};

export default TermsGridView;
