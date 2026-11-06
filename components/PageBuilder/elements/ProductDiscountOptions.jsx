import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `productDiscount` block: the label after the
	percentage, then its cssSelectors keys. The Icon and Icon Size controls it
	used to show were never drawn by either renderer, so they are gone.
*/
const ProductDiscountOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productDiscount', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label (after the %)</label>
					<input type="text" placeholder="OFF" className={inputClass} value={options?.label ?? ''} onChange={ev => updateBlock('options', { ...options, label: ev.target.value })} />
				</div>

				<p className="text-xs text-gray-500">Shows only on discounted products; the builder shows a dimmed sample otherwise.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductDiscountOptions;
