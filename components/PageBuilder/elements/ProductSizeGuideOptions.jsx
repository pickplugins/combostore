import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `productSizeGuide` block: popup or inline, the
	trigger's text and icon, the heading, which parts of the guide to show,
	then its cssSelectors keys.
*/
const ProductSizeGuideOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('productSizeGuide', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	const field = (key, label, placeholder) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className="text-xs font-medium text-gray-600">{label}</label>
			<input type="text" placeholder={placeholder} className={inputClass} value={options?.[key] ?? ''} onChange={ev => setOption(key, ev.target.value)} />
		</div>
	);

	const toggle = (key, label) => (
		<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
			<input type="checkbox" checked={options?.[key] !== false} onChange={ev => setOption(key, ev.target.checked)} />
			{label}
		</label>
	);

	var isPopup = options?.display !== 'inline';

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Display</label>
					<select className={inputClass} value={isPopup ? 'popup' : 'inline'} onChange={ev => setOption('display', ev.target.value)}>
						<option value="popup">Link that opens a popup</option>
						<option value="inline">Chart on the page</option>
					</select>
				</div>

				{isPopup && (
					<>
						{field('buttonText', 'Link text', 'Size guide')}

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Link icon</label>
							<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('icon', args)} />
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
							<input type="number" placeholder="18" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
						</div>
					</>
				)}

				{!isPopup && toggle('showHeading', 'Show heading')}
				{field('heading', 'Heading', 'Size guide')}

				{toggle('showUnit', 'Show the unit (e.g. “Measurements in cm”)')}
				{options?.showUnit !== false && field('unitPrefix', 'Unit text', 'Measurements in')}
				{toggle('showNote', 'Show “How to measure” note')}
				{toggle('showImage', 'Show measuring diagram')}

				<p className="text-xs text-gray-500">The chart comes from the product's Size Guide addon; its own title replaces the heading. Products without a size guide show nothing (the builder shows a dimmed sample). In popup display, select the block to preview and style the popup.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ProductSizeGuideOptions;
