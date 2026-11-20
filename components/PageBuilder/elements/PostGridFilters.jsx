import React, { useState } from "react";
import { usePostGrid } from "../context/PostGridContext";
import { usePage } from "../context/PageContext";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { FiltersMarkup, filtersSettings, filtersFromQuery, queryWithFilters, useFilterCategoryNodes, usePriceRange } from "./PostGridFiltersView";
import { elementCssClasses } from "../ElementsDefinition";

/* Shown when the store has no categories yet, so the field can still be styled. */
const sampleCategories = [
	{ slug: 'sample-1', name: 'Category one', count: 12, children: [] },
	{ slug: 'sample-2', name: 'Category two', count: 8, children: [{ slug: 'sample-3', name: 'Subcategory', count: 3, children: [] }] },
];

/*
	Builder (canvas) preview of the grid filters: PostGridFiltersView's own
	markup and classes. Filtering here changes the grid's preview (through
	the builder grid's onChangeQuery, which saves nothing) and never writes
	the page address. Outside a Post Grid it is dimmed: it has nothing to
	filter.
*/
const PostGridFilters = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	const grid = usePostGrid();
	const pageAttr = usePage();
	const { wrapCurrency } = useUtilsStore();

	var cls = elementCssClasses('postGridFilters', props?.cssSelectors);
	var settings = filtersSettings(props?.options);

	var query = grid?.queryPrams ?? { post_type: ['cmb_product'] };
	var { nodes, isProduct, archiveCategories } = useFilterCategoryNodes(settings, query, pageAttr);
	var priceRange = usePriceRange(isProduct && settings.fields.includes('price'), archiveCategories);

	var [values, setValues] = useState(() => filtersFromQuery(grid?.queryPrams));

	var apply = (next) => grid?.onChangeQuery?.(queryWithFilters(grid.queryPrams, next ?? values));
	var onChange = (next) => {
		setValues(next);
		/* Typing waits for Enter / Apply here; the rest previews at once. */
		if (settings.applyOn === 'change' && next.keyword === values.keyword && next.min === values.min && next.max === values.max) apply(next);
	};

	return (
		<FiltersMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			settings={settings}
			categories={nodes && nodes.length ? nodes : (nodes ? sampleCategories : null)}
			priceRange={priceRange}
			showPrice={isProduct}
			values={values}
			onChange={onChange}
			onApply={() => apply(values)}
			onReset={() => { var empty = { keyword: '', categories: [], min: '', max: '' }; setValues(empty); apply(empty); }}
			wrapCurrency={wrapCurrency}
			rootClassName={`${grid ? '' : 'opacity-60'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: grid ? undefined : 'Place this inside a Post Grid',
				onClick: e => { if (e.target.closest('button, input, select, label')) return; e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default PostGridFilters;
