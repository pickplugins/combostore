import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `productPrice` block. The price itself comes from
	the product, so the only settings are its styles. (The Link To and Classes
	controls this panel used to show saved options nothing reads.)
*/
const ProductPriceOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productPrice', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<p className="text-xs text-gray-500">
					<code>simple-price-sale</code> is the price the customer pays and <code>simple-price-regular</code> the struck-through original, shown only on sale. Products with variations show <code>variable-price-*</code> until one is picked; pay-what-you-want products show the <code>pwyw-*</code> controls. Outside a product loop the builder shows a sample sale price.
				</p>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductPriceOptions;
