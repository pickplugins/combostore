import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `productFaq` block: accordion or open list, how the
	accordion behaves, the heading, then its cssSelectors keys.
*/
const ProductFaqOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productFaq', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	var isList = options?.display === 'list';

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Display</label>
					<select className={inputClass} value={isList ? 'list' : 'accordion'} onChange={ev => setOption('display', ev.target.value)}>
						<option value="accordion">Accordion (click a question to open it)</option>
						<option value="list">List (every answer shown)</option>
					</select>
				</div>

				{!isList && (
					<>
						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Toggle icon</label>
							<select className={inputClass} value={options?.toggleIcon === 'plus' ? 'plus' : 'chevron'} onChange={ev => setOption('toggleIcon', ev.target.value)}>
								<option value="chevron">Chevron</option>
								<option value="plus">Plus / minus</option>
							</select>
						</div>

						<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
							<input type="checkbox" checked={!!options?.openFirst} onChange={ev => setOption('openFirst', ev.target.checked)} />
							Open the first question
						</label>

						<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
							<input type="checkbox" checked={options?.multiple !== false} onChange={ev => setOption('multiple', ev.target.checked)} />
							Allow several open at once
						</label>
					</>
				)}

				<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={options?.showHeading !== false} onChange={ev => setOption('showHeading', ev.target.checked)} />
					Show heading
				</label>

				{options?.showHeading !== false && (
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Heading</label>
						<input type="text" placeholder="Frequently asked questions" className={inputClass} value={options?.heading ?? ''} onChange={ev => setOption('heading', ev.target.value)} />
					</div>
				)}

				<p className="text-xs text-gray-500">The questions come from the product's FAQ addon. Products without any show nothing (the builder shows dimmed samples). In the builder, click a question to open it and style the open state.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductFaqOptions;
