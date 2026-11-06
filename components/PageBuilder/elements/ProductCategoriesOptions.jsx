import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `productCategories` block: the label before the
	categories, the separator between them, then its cssSelectors keys. (Its
	Icon and Icon Size controls were never drawn, and its Classes field saved
	options.classes, which nothing reads.)
*/
const ProductCategoriesOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productCategories', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<input type="text" placeholder="Categories:" className={inputClass} value={options?.label ?? ''} onChange={ev => setOption('label', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Separator</label>
					<input type="text" placeholder=", " className={inputClass} value={options?.separator ?? ', '} onChange={ev => setOption('separator', ev.target.value)} />
				</div>

				<p className="text-xs text-gray-500">Each category links to its category page; nothing shows for a product without categories. The builder shows a dimmed sample then.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductCategoriesOptions;
