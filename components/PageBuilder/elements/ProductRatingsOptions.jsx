import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { ratingsSettings } from "./ProductRatingsView";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `productRatings` block. The rating comes from the
	product; the one setting is whether to hide the block for a product with
	no reviews. (The Label, Icon and Icon Size controls it used to show saved
	options nothing reads.)
*/
const ProductRatingsOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var hideIfEmpty = options?.hideIfEmpty === true;
	var settings = ratingsSettings(options);

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productRatings', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Layout</label>
					<select className={inputClass} value={settings.layout} onChange={ev => updateBlock('options', { ...options, layout: ev.target.value })}>
						<option value="inline">Stars (★★★★☆ 4.3/5 (120 reviews))</option>
						<option value="summary">Summary with rating bars</option>
						<option value="bars">Rating bars only</option>
					</select>
					<p className="text-xs text-gray-500">The bars need the product page's data: on a card in a product loop they fall back to the stars.</p>
				</div>

				{settings.layout !== 'inline' && (
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Beside each bar</label>
						<select className={inputClass} value={settings.barValue} onChange={ev => updateBlock('options', { ...options, barValue: ev.target.value })}>
							<option value="count">Number of reviews</option>
							<option value="percent">Percentage</option>
						</select>
					</div>
				)}

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Hide when there are no reviews</label>
					<div className="cursor-pointer" onClick={() => updateBlock('options', { ...options, hideIfEmpty: !hideIfEmpty })}>
						{hideIfEmpty ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				<p className="text-xs text-gray-500">
					Five stars, each a <code>rate-count</code> holding an <code>icon</code>, inside <code>star-rate</code>; then <code>avg-rating</code> and, when there are reviews, <code>total-reviews</code>. The summary adds <code>summary</code>, <code>summary-score</code> and <code>summary-average</code>; the bars are <code>bars</code> with a <code>bar-row</code> each (<code>bar-label</code> with its <code>bar-star</code>, <code>bar-track</code>, <code>bar-fill</code>, <code>bar-count</code>). The builder shows a sample rating outside a product loop.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductRatingsOptions;
