import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `commentsGrid` block: how many comments a page
	and in which order, then its cssSelectors keys. It used to show the posts
	query editor (post type, taxonomy filters...), none of which
	get_comments reads, and it saved that query on every open.
*/
const CommentsGridOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var query = options?.queryPrams && typeof options.queryPrams === 'object' && !Array.isArray(options.queryPrams) ? options.queryPrams : {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('commentsGrid', props?.cssSelectors);

	const setQuery = (key, value) => {
		var next = { ...query, [key]: value };
		if (value === '' || value === undefined) delete next[key];
		updateBlock('options', { ...options, queryPrams: next });
	};

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Comments per page</label>
					<input type="number" min="1" placeholder="20" className={inputClass} value={query?.per_page ?? ''} onChange={ev => setQuery('per_page', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Order</label>
					<select className={inputClass} value={query?.order ?? 'ASC'} onChange={ev => setQuery('order', ev.target.value)}>
						<option value="ASC">Oldest first</option>
						<option value="DESC">Newest first</option>
					</select>
				</div>

				<p className="text-xs text-gray-500">Shows the comments (reviews) of the post or product on the page; on a page without one, the latest comments from the whole site. Put a Comments Loop inside for the list, a Comments Form to post, and Comments Pagination to page through them. <code>loop-items</code> and <code>loop-item</code> here style the loop's list and cards.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default CommentsGridOptions;
