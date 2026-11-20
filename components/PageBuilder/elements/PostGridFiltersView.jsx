"use client"
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";
import { usePostGrid } from "../context/PostGridContext";
import { usePage } from "../context/PageContext";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Filters for the post grid it sits in (`postGridFilters`): a keyword box,
	categories and a price range. They write into the grid's query through
	PostGridContext's onChangeQuery, back to page 1, and the grid's postLoop
	fetches again:

	- keyword            -> get_posts `keyword` (WordPress search)
	- categories         -> `filter_categories`, slugs. Kept apart from the
	                        grid's own `categories` because PostLoopView sets
	                        those to the archive's term on a category page;
	                        the server requires both to match.
	- price (products)   -> `min_price` / `max_price`, the effective price
	                        (sale price when set). Its placeholders show the
	                        store's range from get_price_range.

	The query keys these own: an empty filter removes its key again.
*/
export const FILTER_FIELDS = ['keyword', 'categories', 'price'];
const QUERY_KEYS = ['keyword', 'filter_categories', 'min_price', 'max_price'];

/* The filters' settings, with defaults for whatever the block lacks. */
export function filtersSettings(options) {
	var o = options ?? {};
	var fields = Array.isArray(o.fields) ? o.fields.filter(f => FILTER_FIELDS.includes(f)) : FILTER_FIELDS;
	return {
		fields,
		keywordLabel: o.keywordLabel ?? 'Search',
		keywordPlaceholder: o.keywordPlaceholder ?? 'Search products…',
		categoriesLabel: o.categoriesLabel ?? 'Categories',
		categoryDisplay: ['checkbox', 'chips', 'select'].includes(o.categoryDisplay) ? o.categoryDisplay : 'checkbox',
		categoryParent: o.categoryParent ?? '',
		showSubcategories: o.showSubcategories ?? true,
		hideEmpty: o.hideEmpty ?? true,
		showCounts: o.showCounts ?? true,
		priceLabel: o.priceLabel ?? 'Price',
		applyOn: o.applyOn === 'button' ? 'button' : 'change',
		applyText: o.applyText ?? 'Apply',
		resetText: o.resetText ?? 'Clear all',
		syncUrl: o.syncUrl ?? true,
	};
}

/* "&amp;" in term names, as get_terms sends them. */
function decodeName(name) {
	return String(name ?? '').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

/* Empty categories dropped, unless a child under them has products. */
function pruneEmpty(nodes) {
	return (nodes ?? []).map(n => ({ ...n, children: pruneEmpty(n.children) }))
		.filter(n => Number(n.count) > 0 || n.children.length > 0);
}

function findNode(nodes, slug) {
	for (const n of nodes ?? []) {
		if (n.slug === slug) return n;
		var found = findNode(n.children, slug);
		if (found) return found;
	}
	return null;
}

/* The category tree of the grid's taxonomy (product_cat, or category for posts), fetched once per taxonomy. */
const termsCache = {};
export function useFilterCategories(taxonomy, enabled) {
	var [terms, setTerms] = useState(() => termsCache[taxonomy] ?? null);
	useEffect(() => {
		if (!enabled || !taxonomy) return;
		if (termsCache[taxonomy]) { setTerms(termsCache[taxonomy]); return; }
		var current = true;
		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ taxonomy, hierarchical: true, order: 'ASC', orderby: 'name' }),
		})
			.then(r => r.ok ? r.json() : Promise.reject(r.status))
			.then(res => { termsCache[taxonomy] = Array.isArray(res?.terms) ? res.terms : []; if (current) setTerms(termsCache[taxonomy]); })
			.catch(() => { if (current) setTerms([]); });
		return () => { current = false; };
	}, [taxonomy, enabled]);
	return terms;
}

/* The lowest and highest product price, within the archive's category when there is one. */
export function usePriceRange(enabled, categories) {
	var key = JSON.stringify(categories ?? []);
	var [range, setRange] = useState(null);
	useEffect(() => {
		if (!enabled) return;
		var current = true;
		fetch(serverUrl + "wp-json/combo-store/v2/get_price_range", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ categories: JSON.parse(key) }),
		})
			.then(r => r.ok ? r.json() : Promise.reject(r.status))
			.then(res => { if (current) setRange({ min: Number(res?.min) || 0, max: Number(res?.max) || 0 }); })
			.catch(() => { if (current) setRange(null); });
		return () => { current = false; };
	}, [enabled, key]);
	return range;
}

/* The filter values a query holds. */
export function filtersFromQuery(query) {
	return {
		keyword: String(query?.keyword ?? ''),
		categories: Array.isArray(query?.filter_categories) ? query.filter_categories : [],
		min: query?.min_price ?? '',
		max: query?.max_price ?? '',
	};
}

/* The query with these filter values: their keys replaced, empty ones removed, back to page 1. */
export function queryWithFilters(query, values) {
	var next = { ...(query ?? {}) };
	QUERY_KEYS.forEach(k => delete next[k]);
	var keyword = String(values?.keyword ?? '').trim();
	if (keyword) next.keyword = keyword;
	if (values?.categories?.length) next.filter_categories = [...values.categories];
	var min = values?.min === '' || values?.min == null ? NaN : Number(values.min);
	var max = values?.max === '' || values?.max == null ? NaN : Number(values.max);
	if (Number.isFinite(min) && min > 0) next.min_price = min;
	if (Number.isFinite(max) && max > 0) next.max_price = max;
	next.paged = 1;
	return next;
}

function sameFilters(a, b) {
	return a.keyword.trim() === b.keyword.trim() && a.categories.join(',') === b.categories.join(',') && String(a.min) === String(b.min) && String(a.max) === String(b.max);
}

/* ?q=…&category=a,b&min_price=…&max_price=… - shareable filter links. */
function filtersFromUrl() {
	if (typeof window === 'undefined') return null;
	var p = new URLSearchParams(window.location.search);
	if (!['q', 'category', 'min_price', 'max_price'].some(k => p.has(k))) return null;
	return {
		keyword: p.get('q') ?? '',
		categories: (p.get('category') ?? '').split(',').map(s => s.trim()).filter(Boolean),
		min: p.get('min_price') ?? '',
		max: p.get('max_price') ?? '',
	};
}

function writeUrl(values) {
	if (typeof window === 'undefined') return;
	var url = new URL(window.location.href);
	['q', 'category', 'min_price', 'max_price'].forEach(k => url.searchParams.delete(k));
	if (values.keyword.trim()) url.searchParams.set('q', values.keyword.trim());
	if (values.categories.length) url.searchParams.set('category', values.categories.join(','));
	if (Number(values.min) > 0) url.searchParams.set('min_price', String(values.min));
	if (Number(values.max) > 0) url.searchParams.set('max_price', String(values.max));
	window.history.replaceState(window.history.state, '', url.toString());
}

/* Checkbox rows, nested for subcategories. */
function CategoryCheckboxes({ cls, nodes, selected, toggle, showCounts, showSub, depth = 0 }) {
	return (
		<ul className={depth ? 'ml-4' : cls('category-list')}>
			{nodes.map(n => (
				<li key={n.slug}>
					<label className={cls('category-item')}>
						<input type="checkbox" className={cls('category-checkbox')} checked={selected.includes(n.slug)} onChange={() => toggle(n.slug)} />
						<span>{decodeName(n.name)}</span>
						{showCounts && <span className={cls('category-count')}>({Number(n.count) || 0})</span>}
					</label>
					{showSub && n.children?.length > 0 && (
						<CategoryCheckboxes cls={cls} nodes={n.children} selected={selected} toggle={toggle} showCounts={showCounts} showSub={showSub} depth={depth + 1} />
					)}
				</li>
			))}
		</ul>
	);
}

function flatten(nodes, showSub, depth = 0) {
	var out = [];
	(nodes ?? []).forEach(n => {
		out.push({ ...n, depth });
		if (showSub) out.push(...flatten(n.children, showSub, depth + 1));
	});
	return out;
}

/*
	The filters' markup, shared with the builder preview (PostGridFilters.jsx).
	values / onChange are the fields' current values; onApply and onReset are
	the buttons (Apply only when settings.applyOn is 'button').
*/
export function FiltersMarkup({ cls, id, index, type, settings, categories, priceRange, showPrice, values, onChange, onApply, onReset, wrapCurrency, rootClassName = '', rootProps = {} }) {

	var set = (patch) => onChange({ ...values, ...patch });
	var toggle = (slug) => set({ categories: values.categories.includes(slug) ? values.categories.filter(s => s !== slug) : [...values.categories, slug] });
	var active = values.keyword.trim() || values.categories.length || Number(values.min) > 0 || Number(values.max) > 0;
	var money = (v) => wrapCurrency ? wrapCurrency(v) : v;

	var field = (name) => {
		if (name === 'keyword') return (
			<div key="keyword" className={cls('field')}>
				{settings.keywordLabel && <label htmlFor={`${id}-keyword`} className={cls('label')}>{settings.keywordLabel}</label>}
				<div className={cls('keyword-wrap')}>
					<IconSearch size={16} className={cls('keyword-icon')} aria-hidden="true" />
					<input id={`${id}-keyword`} type="search" className={cls('keyword-input')} placeholder={settings.keywordPlaceholder} value={values.keyword}
						onChange={ev => set({ keyword: ev.target.value })}
						onKeyDown={ev => { if (ev.key === 'Enter') { ev.preventDefault(); onApply?.(true); } }} />
				</div>
			</div>
		);

		if (name === 'categories') {
			if (!categories || categories.length === 0) return null;
			return (
				<div key="categories" className={cls('field')}>
					{settings.categoriesLabel && <div className={cls('label')}>{settings.categoriesLabel}</div>}
					{settings.categoryDisplay === 'select' ? (
						<select aria-label={settings.categoriesLabel || 'Category'} className={cls('category-select')} value={values.categories[0] ?? ''} onChange={ev => set({ categories: ev.target.value ? [ev.target.value] : [] })}>
							<option value="">All</option>
							{flatten(categories, settings.showSubcategories).map(n => (
								<option key={n.slug} value={n.slug}>{'  '.repeat(n.depth)}{decodeName(n.name)}{settings.showCounts ? ` (${Number(n.count) || 0})` : ''}</option>
							))}
						</select>
					) : settings.categoryDisplay === 'chips' ? (
						<div className={cls('category-chips')}>
							{flatten(categories, settings.showSubcategories).map(n => (
								<button key={n.slug} type="button" aria-pressed={values.categories.includes(n.slug)} className={cls(values.categories.includes(n.slug) ? 'category-chip-active' : 'category-chip')} onClick={() => toggle(n.slug)}>
									{decodeName(n.name)}{settings.showCounts && <span className={cls('category-count')}>({Number(n.count) || 0})</span>}
								</button>
							))}
						</div>
					) : (
						<CategoryCheckboxes cls={cls} nodes={categories} selected={values.categories} toggle={toggle} showCounts={settings.showCounts} showSub={settings.showSubcategories} />
					)}
				</div>
			);
		}

		if (name === 'price') {
			if (!showPrice) return null;
			var lo = priceRange?.min ?? 0;
			var hi = priceRange?.max ?? 0;
			return (
				<div key="price" className={cls('field')}>
					{settings.priceLabel && <div className={cls('label')}>{settings.priceLabel}</div>}
					<div className={cls('price-inputs')}>
						<input type="number" min={0} inputMode="decimal" aria-label="Minimum price" className={cls('price-input')} placeholder={hi > 0 ? `Min ${Math.floor(lo)}` : 'Min'} value={values.min}
							onChange={ev => set({ min: ev.target.value })}
							onKeyDown={ev => { if (ev.key === 'Enter') { ev.preventDefault(); onApply?.(true); } }} />
						<span className={cls('price-separator')}>–</span>
						<input type="number" min={0} inputMode="decimal" aria-label="Maximum price" className={cls('price-input')} placeholder={hi > 0 ? `Max ${Math.ceil(hi)}` : 'Max'} value={values.max}
							onChange={ev => set({ max: ev.target.value })}
							onKeyDown={ev => { if (ev.key === 'Enter') { ev.preventDefault(); onApply?.(true); } }} />
					</div>
					{hi > 0 && <div className={cls('price-hint')}>{money(Math.floor(lo))} – {money(Math.ceil(hi))}</div>}
				</div>
			);
		}
		return null;
	};

	return (
		<div id={id} index={index} type={type} role="search" className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{settings.fields.map(field)}
			{(settings.applyOn === 'button' || active) && (
				<div className={cls('actions')}>
					{settings.applyOn === 'button' && <button type="button" className={cls('apply-button')} onClick={() => onApply?.(true)}>{settings.applyText || 'Apply'}</button>}
					{active && settings.resetText && (
						<button type="button" className={cls('reset-button')} onClick={onReset}>
							<IconX size={14} aria-hidden="true" /> {settings.resetText}
						</button>
					)}
				</div>
			)}
		</div>
	);
}

/*
	The categories to list: the tree below `categoryParent` when one is set,
	on a category archive the archive's subcategories (the archive already
	limits the grid to it), else the whole tree. Empty ones pruned when
	hideEmpty is on.
*/
export function useFilterCategoryNodes(settings, query, pageAttr) {
	var isProduct = (Array.isArray(query?.post_type) ? query.post_type : [query?.post_type]).includes('cmb_product');
	var taxonomy = isProduct ? 'product_cat' : 'category';
	var tree = useFilterCategories(taxonomy, settings.fields.includes('categories'));

	var nodes = useMemo(() => {
		if (!tree) return null;
		var list = tree;
		var archiveSlug = pageAttr?.taxonomy === taxonomy ? (Array.isArray(pageAttr.slug) ? pageAttr.slug[0] : pageAttr.slug) : null;
		var root = settings.categoryParent || archiveSlug;
		if (root) list = findNode(tree, root)?.children ?? [];
		return settings.hideEmpty ? pruneEmpty(list) : list;
	}, [tree, settings.categoryParent, settings.hideEmpty, pageAttr?.taxonomy, pageAttr?.slug, taxonomy]);

	var archiveCategories = isProduct && pageAttr?.taxonomy === 'product_cat' && pageAttr?.slug != null ? [].concat(pageAttr.slug) : [];
	return { nodes, isProduct, archiveCategories };
}

const PostGridFiltersView = (props) => {

	const grid = usePostGrid();
	const pageAttr = usePage();
	const { wrapCurrency } = useUtilsStore();

	var cls = elementCssClasses('postGridFilters', props?.cssSelectors);
	var settings = filtersSettings(props?.options);

	var query = grid?.queryPrams;
	var { nodes, isProduct, archiveCategories } = useFilterCategoryNodes(settings, query, pageAttr);
	var priceRange = usePriceRange(isProduct && settings.fields.includes('price'), archiveCategories);

	var [values, setValues] = useState(() => filtersFromQuery(query));
	var applied = useRef(filtersFromQuery(query));

	var apply = (next) => {
		if (!grid?.onChangeQuery || sameFilters(next, applied.current)) return;
		applied.current = next;
		grid.onChangeQuery(queryWithFilters(grid.queryPrams, next));
		if (settings.syncUrl) writeUrl(next);
	};

	/* A filter link (?q=, ?category=, ...) fills and applies the filters once. */
	useEffect(() => {
		if (!settings.syncUrl) return;
		var fromUrl = filtersFromUrl();
		if (fromUrl) { setValues(fromUrl); apply(fromUrl); }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/* Applied as they change: at once for categories, after a pause for typing. */
	var latest = useRef(values);
	latest.current = values;
	useEffect(() => {
		if (settings.applyOn !== 'change') return;
		var typing = values.keyword !== applied.current.keyword || String(values.min) !== String(applied.current.min) || String(values.max) !== String(applied.current.max);
		var t = setTimeout(() => apply(latest.current), typing ? 500 : 0);
		return () => clearTimeout(t);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values, settings.applyOn]);

	if (!grid?.onChangeQuery) return null;

	var reset = () => {
		var empty = { keyword: '', categories: [], min: '', max: '' };
		setValues(empty);
		apply(empty);
	};

	return (
		<FiltersMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			settings={settings}
			categories={nodes}
			priceRange={priceRange}
			showPrice={isProduct}
			values={values}
			onChange={setValues}
			onApply={() => apply(latest.current)}
			onReset={reset}
			wrapCurrency={wrapCurrency}
		/>
	);
};

PostGridFiltersView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default PostGridFiltersView;
