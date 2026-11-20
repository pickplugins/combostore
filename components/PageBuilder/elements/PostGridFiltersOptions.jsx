"use client"
import React from "react";
import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { FILTER_FIELDS, filtersSettings, useFilterCategories } from "./PostGridFiltersView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const iconButton = "inline-flex h-6 w-6 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-30 cursor-pointer disabled:cursor-default";

const FIELD_NAMES = { keyword: 'Keyword search', categories: 'Categories', price: 'Price range (products)' };

function flattenTree(nodes, depth = 0) {
	var out = [];
	(nodes ?? []).forEach(n => { out.push({ ...n, depth }); out.push(...flattenTree(n.children, depth + 1)); });
	return out;
}

function Check({ label, checked, onChange }) {
	return (
		<label className="flex cursor-pointer items-center gap-2 text-xs text-gray-700">
			<input type="checkbox" checked={!!checked} onChange={ev => onChange(ev.target.checked)} />
			{label}
		</label>
	);
}

function Text({ label, value, onChange, placeholder }) {
	return (
		<div className="flex flex-col gap-1">
			<label className="text-xs font-medium text-gray-600">{label}</label>
			<input type="text" className={inputClass} value={value ?? ''} placeholder={placeholder} onChange={ev => onChange(ev.target.value)} />
		</div>
	);
}

/*
	Settings panel for the grid filters (`postGridFilters`): which fields and
	in what order, their labels, how categories are listed, when filters
	apply, then its cssSelectors keys.
*/
const PostGridFiltersOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var settings = filtersSettings(options);
	var cssSelectors = withElementCssDefaults('postGridFilters', props?.cssSelectors);

	var productCats = useFilterCategories('product_cat', settings.fields.includes('categories'));

	const setOption = (key, value) => updateBlock('options', { ...options, ...settings, [key]: value });

	/* Enabled fields in their order, then the disabled ones. */
	var order = [...settings.fields, ...FILTER_FIELDS.filter(f => !settings.fields.includes(f))];
	var toggleField = (f, on) => setOption('fields', on ? order.filter(x => x === f || settings.fields.includes(x)) : settings.fields.filter(x => x !== f));
	var move = (f, dir) => {
		var list = [...settings.fields];
		var i = list.indexOf(f), j = i + dir;
		if (i < 0 || j < 0 || j >= list.length) return;
		[list[i], list[j]] = [list[j], list[i]];
		setOption('fields', list);
	};

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
					<div className="text-xs font-semibold text-gray-700">Fields</div>
					{order.map(f => {
						var on = settings.fields.includes(f);
						var i = settings.fields.indexOf(f);
						return (
							<div key={f} className="flex items-center justify-between gap-2">
								<Check label={FIELD_NAMES[f]} checked={on} onChange={v => toggleField(f, v)} />
								{on && (
									<span className="flex items-center">
										<button type="button" title="Move up" className={iconButton} disabled={i === 0} onClick={() => move(f, -1)}><IconArrowUp size={14} /></button>
										<button type="button" title="Move down" className={iconButton} disabled={i === settings.fields.length - 1} onClick={() => move(f, 1)}><IconArrowDown size={14} /></button>
									</span>
								)}
							</div>
						);
					})}
					<p className="text-xs text-gray-500">The price field shows only when the grid lists products.</p>
				</div>

				{settings.fields.includes('keyword') && (
					<div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
						<div className="text-xs font-semibold text-gray-700">Keyword search</div>
						<Text label="Label" value={settings.keywordLabel} onChange={v => setOption('keywordLabel', v)} placeholder="Empty for no label" />
						<Text label="Placeholder" value={settings.keywordPlaceholder} onChange={v => setOption('keywordPlaceholder', v)} />
					</div>
				)}

				{settings.fields.includes('categories') && (
					<div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
						<div className="text-xs font-semibold text-gray-700">Categories</div>
						<Text label="Label" value={settings.categoriesLabel} onChange={v => setOption('categoriesLabel', v)} placeholder="Empty for no label" />
						<div className="flex flex-col gap-1">
							<label className="text-xs font-medium text-gray-600">Show as</label>
							<select className={inputClass} value={settings.categoryDisplay} onChange={ev => setOption('categoryDisplay', ev.target.value)}>
								<option value="checkbox">Checkboxes (choose several)</option>
								<option value="chips">Buttons (choose several)</option>
								<option value="select">Dropdown (choose one)</option>
							</select>
						</div>
						<div className="flex flex-col gap-1">
							<label className="text-xs font-medium text-gray-600">Categories to list</label>
							<select className={inputClass} value={settings.categoryParent} onChange={ev => setOption('categoryParent', ev.target.value)}>
								<option value="">All (on a category page: its subcategories)</option>
								{flattenTree(productCats).filter(n => n.children?.length).map(n => (
									<option key={n.slug} value={n.slug}>{'  '.repeat(n.depth)}Under “{String(n.name).replace(/&amp;/g, '&')}”</option>
								))}
							</select>
						</div>
						<Check label="Show subcategories" checked={settings.showSubcategories} onChange={v => setOption('showSubcategories', v)} />
						<Check label="Hide empty categories" checked={settings.hideEmpty} onChange={v => setOption('hideEmpty', v)} />
						<Check label="Show product counts" checked={settings.showCounts} onChange={v => setOption('showCounts', v)} />
					</div>
				)}

				{settings.fields.includes('price') && (
					<div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
						<div className="text-xs font-semibold text-gray-700">Price range</div>
						<Text label="Label" value={settings.priceLabel} onChange={v => setOption('priceLabel', v)} placeholder="Empty for no label" />
						<p className="text-xs text-gray-500">Filters by the price shoppers pay: the sale price when set, else the regular price.</p>
					</div>
				)}

				<div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
					<div className="text-xs font-semibold text-gray-700">Applying</div>
					<select className={inputClass} value={settings.applyOn} onChange={ev => setOption('applyOn', ev.target.value)}>
						<option value="change">As shoppers change them</option>
						<option value="button">With an Apply button</option>
					</select>
					{settings.applyOn === 'button' && <Text label="Apply button" value={settings.applyText} onChange={v => setOption('applyText', v)} />}
					<Text label="Clear button" value={settings.resetText} onChange={v => setOption('resetText', v)} placeholder="Empty to hide it" />
					<Check label="Keep filters in the page address (shareable links)" checked={settings.syncUrl} onChange={v => setOption('syncUrl', v)} />
				</div>

				<p className="text-xs text-gray-500">Place it inside a Post Grid, next to its Post Loop. Styled by <code>field</code>, <code>label</code>, <code>keyword-input</code>, <code>category-*</code>, <code>price-*</code>, <code>apply-button</code> and <code>reset-button</code>.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostGridFiltersOptions;
