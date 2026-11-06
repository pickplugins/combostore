"use client"
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import * as TablerIcons from '@tabler/icons-react';
import { IconArrowNarrowLeftDashed, IconArrowNarrowRightDashed } from "@tabler/icons-react";
import { usePostGrid } from "../context/PostGridContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The page numbers to show around the current one: always the first and
	last, two either side of the current, and null where pages are skipped
	(drawn as an ellipsis). [1, null, 4, 5, 6, 7, 8, null, 20].
*/
export function pageWindow(current, maxPages, around = 2) {
	if (!maxPages || maxPages < 1) return [];
	var pages = [];
	for (var p = 1; p <= maxPages; p++) {
		if (p === 1 || p === maxPages || Math.abs(p - current) <= around) pages.push(p);
		else if (pages[pages.length - 1] !== null) pages.push(null);
	}
	return pages;
}

/*
	The pagination's display settings: options.style 'numbers' (page number
	buttons) or 'input' (a page-number box between Previous and Next). A
	block without a style gets numbers when it styles `pagination-item` (the
	EhansMart templates did, for buttons that were never drawn), else the
	input it always had. The labels and icons are read from the options, or
	from options.sliderOptions, where the definition used to put them; 32
	template blocks saved "Previous" / "Next" that were never shown.
*/
export function paginationSettings(options, cssSelectors) {
	var o = options ?? {};
	var legacy = o.sliderOptions ?? {};
	var pick = (key) => o[key] ?? legacy[key] ?? '';
	var style = o.style === 'numbers' || o.style === 'input' ? o.style
		: (String(cssSelectors?.['pagination-item']?.classes ?? '').trim() ? 'numbers' : 'input');
	return { style, prevText: pick('prevText'), nextText: pick('nextText'), prevIcon: pick('prevIcon'), nextIcon: pick('nextIcon') };
}

/*
	The pagination's markup, shared with the builder preview
	(PostGridPagination.jsx) and the terms grid's pagination: the `*` wrapper
	with a `previous` and a `next` button (each an icon in `previous-icon` /
	`next-icon` and its label) around either the page numbers
	(`pagination-item`, the current one `pagination-item-active`, gaps
	`ellipsis`) or a `current` page box with "of N" (`total`) once the page
	count is known.

	Previous and Next are real buttons (they were divs: no keyboard access),
	disabled on the first and last page - Next used to page on past the end
	into an empty grid. The page box takes a number on Enter or leaving it,
	limited to the pages there are; clearing it used to send paged: NaN.
*/
export function PaginationMarkup({ cls, id, index, type, settings, paged, maxPages, onPage, rootClassName = '', rootProps = {} }) {

	var known = maxPages > 0;
	var [draft, setDraft] = useState(String(paged));
	useEffect(() => { setDraft(String(paged)); }, [paged]);

	var go = (page) => {
		var p = Math.max(1, Math.min(known ? maxPages : Infinity, parseInt(page) || 1));
		if (p !== paged) onPage(p);
		else setDraft(String(paged));
	};

	var PrevIcon = TablerIcons[settings?.prevIcon] ?? IconArrowNarrowLeftDashed;
	var NextIcon = TablerIcons[settings?.nextIcon] ?? IconArrowNarrowRightDashed;

	return (
		<nav id={id} index={index} type={type} aria-label="Pagination" className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			<button type="button" className={cls('previous')} disabled={paged <= 1} onClick={() => go(paged - 1)} aria-label={settings?.prevText || 'Previous page'}>
				<span className="inline-flex items-center gap-1.5">
					<span className={cls('previous-icon')}><PrevIcon /></span>
					{settings?.prevText && <span>{settings.prevText}</span>}
				</span>
			</button>

			{settings?.style === 'numbers' && known
				? pageWindow(paged, maxPages).map((p, i) => p === null
					? <span key={`gap-${i}`} className={cls('ellipsis')} aria-hidden="true">…</span>
					: <button key={p} type="button" className={cls(p === paged ? 'pagination-item-active' : 'pagination-item')} aria-current={p === paged ? 'page' : undefined} onClick={() => go(p)}>{p}</button>)
				: (
					<span className="contents">
						<input name="paged" aria-label="Page" className={cls('current')} type="number" min={1} max={known ? maxPages : undefined} value={draft}
							onChange={ev => setDraft(ev.target.value)}
							onBlur={() => go(draft)}
							onKeyDown={ev => { if (ev.key === 'Enter') { ev.preventDefault(); go(draft); } }} />
						{known && <span className={cls('total')}>of {maxPages}</span>}
					</span>
				)}

			<button type="button" className={cls('next')} disabled={known && paged >= maxPages} onClick={() => go(paged + 1)} aria-label={settings?.nextText || 'Next page'}>
				<span className="inline-flex items-center gap-1.5">
					{settings?.nextText && <span>{settings.nextText}</span>}
					<span className={cls('next-icon')}><NextIcon /></span>
				</span>
			</button>
		</nav>
	);
}

/*
	Pages through the post grid it sits in: it reads the grid's query and
	page count from PostGridContext and changes the page through the grid's
	onChangeQuery, then scrolls the grid into view. Hidden when the grid has
	a single page. (It kept its own copy of the query, synced back and forth
	with the grid.)
*/
const PostGridPaginationView = (props) => {

	const grid = usePostGrid();

	/* A key the block lacks falls back to the postGridPagination defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postGridPagination', props?.cssSelectors);

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
				if (typeof document !== 'undefined') document.getElementById(props?.id)?.closest('[type="postGrid"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}}
		/>
	);
};

PostGridPaginationView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default PostGridPaginationView;
