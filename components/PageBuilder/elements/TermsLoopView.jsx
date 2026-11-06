"use client"
import { useState, useEffect } from "react";
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import BlockRender from '../BlockRender';
import { CategoryProvider } from "../context/CategoryContext";
import { useTermsSlider } from "../context/TermsSliderContext";
import { useTermsGrid } from "../context/TermsGridContext";
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The loop's classes: `loop-items` (the list) and `loop-item` (each card).

	The parent's key (the terms grid's or slider's, through its context) wins
	whenever it is set, as it always has - the opposite of Post Loop, on
	purpose: in 27 template and preset cards the loop's own copy is a stale,
	shorter version of the parent's (usually without its hover and
	transition classes), so letting it win would strip those. Where the
	parent leaves a key empty, the loop's own value is used now (it never
	was), then the termsLoop defaults.
*/
export function termsLoopClasses(ownSelectors, parentSelectors) {
	var merged = {};
	for (const key of ['loop-items', 'loop-item']) {
		var parent = String(parentSelectors?.[key]?.classes ?? '').trim();
		var own = String(ownSelectors?.[key]?.classes ?? '').trim();
		if (parent) merged[key] = parentSelectors[key];
		else if (own) merged[key] = ownSelectors[key];
	}
	return elementCssClasses('termsLoop', merged);
}

/*
	Fetches the loop's terms from combo-store/v2/get_terms, again whenever
	the query's content changes (the grid's pagination, the builder's query
	editor). A reply to an older query is dropped, so a slow page 1 can no
	longer overwrite page 2. { terms, loading, total, maxPages }; get_terms
	sends terms as an object, so they are turned into a list.
*/
export function useTermsLoopTerms(query) {
	var queryKey = query ? JSON.stringify(query) : '';
	var [state, setState] = useState({ terms: [], loading: !!queryKey });

	useEffect(() => {
		if (!queryKey) { setState({ terms: [], loading: false }); return; }
		var current = true;
		setState(s => ({ ...s, loading: true }));
		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: queryKey,
		})
			.then(response => response.ok ? response.json() : Promise.reject(response.status))
			.then(res => {
				if (!current) return;
				var terms = res?.terms ? Object.values(res.terms) : [];
				setState({ terms, loading: false, total: Number(res?.total) || 0, maxPages: Number(res?.max_pages) || 0 });
			})
			.catch(() => { if (current) setState({ terms: [], loading: false }); });
		return () => { current = false; };
	}, [queryKey]);

	return state;
}

/* Tells the terms grid how many terms and pages the query has, for its pagination. A slider has no onResults. */
export function useReportTermsLoopResults(parent, total, maxPages) {
	var onResults = parent?.onResults;
	useEffect(() => {
		if (onResults && total != null) onResults({ total, maxPages });
	}, [onResults, total, maxPages]);
}

/*
	The loop's markup, shared with the builder preview (TermsLoop.jsx). In a
	terms grid: a `loop-items` div of `loop-item` cards. In a terms slider:
	one SplideSlide per card, with no list wrapper - Splide's track is the
	list. Each card's blocks (renderItem) read the term through
	CategoryProvider.

	SplideSlide was used here without being imported, so a terms loop inside
	a terms slider threw on the shop and broke the page.
*/
export function TermsLoopMarkup({ cls, id, index, type, items, inSlider, renderItem, itemKey, rootClassName = '', rootProps = {} }) {

	var card = (item, i, key) => (
		<div key={key} className={cls('loop-item')}>
			<CategoryProvider value={item}>{renderItem(item, i)}</CategoryProvider>
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

const TermsLoopView = (props) => {

	const termsSliderAttr = useTermsSlider();
	const termsGridAttr = useTermsGrid();
	var parent = termsGridAttr ?? termsSliderAttr;

	/* A key the parent leaves empty falls back to the loop's own, then the termsLoop defaults in ElementsDefinition.js. */
	var cls = termsLoopClasses(props?.cssSelectors, parent?.cssSelectors);

	var { terms, total, maxPages } = useTermsLoopTerms(parent?.queryPrams ?? null);
	useReportTermsLoopResults(termsGridAttr, total, maxPages);

	/* A loop outside a terms grid or slider has no query, so nothing to show (as before). */
	if (!parent) return null;

	var children = props?.children;

	return (
		<TermsLoopMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			items={terms}
			inSlider={!termsGridAttr && !!termsSliderAttr}
			itemKey={(item, i) => item?.term_id ?? item?.id ?? i}
			renderItem={(item, i) => Array.isArray(children) && children.map((child, indexZ) => (
				<BlockRender index={`${i}${indexZ}`} key={child.id} block={child} />
			))}
		/>
	);
};

export default TermsLoopView;
