import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
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

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productRatings', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Hide when there are no reviews</label>
					<div className="cursor-pointer" onClick={() => updateBlock('options', { ...options, hideIfEmpty: !hideIfEmpty })}>
						{hideIfEmpty ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				<p className="text-xs text-gray-500">
					Five stars, each a <code>rate-count</code> holding an <code>icon</code>, inside <code>star-rate</code>; then <code>avg-rating</code> and, when there are reviews, <code>total-reviews</code>. The builder shows a sample rating outside a product loop.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductRatingsOptions;
