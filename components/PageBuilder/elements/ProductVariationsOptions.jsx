import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `productVariations` block: the attribute tiles
	come from the product, so the only settings are its styles. (The Link To
	control it used to show saved an option nothing reads.)
*/
const ProductVariationsOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productVariations', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<p className="text-xs text-gray-500">
					One row per attribute: <code>attr-item</code> holds its <code>attr-title</code> and the <code>attr-items-wrap</code> of option tiles. A tile is <code>variation-item</code>, plus <code>variation-selected</code> when picked and <code>variation-disabled</code> when that combination is out of stock; left blank, these tile keys use their default look. Only shown for products with attributes; the builder shows sample options otherwise.
				</p>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductVariationsOptions;
