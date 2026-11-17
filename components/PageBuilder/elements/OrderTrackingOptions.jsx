import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";
import { ORDER_TRACKING_DEFAULTS } from "./OrderTrackingView";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const labelClass = "text-xs font-medium text-gray-600";

/*
	Settings panel for the `orderTracking` block: the words on the form, the
	parts of the result to show, the progress step names, then its
	cssSelectors keys. An emptied title or subtitle hides it.
*/
const OrderTrackingOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('orderTracking', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	const field = (key, label) => (
		<div className="flex flex-col gap-2">
			<label htmlFor="" className={labelClass}>{label}</label>
			<input type="text" placeholder={ORDER_TRACKING_DEFAULTS[key]} className={inputClass} value={options?.[key] ?? ORDER_TRACKING_DEFAULTS[key] ?? ''} onChange={ev => setOption(key, ev.target.value)} />
		</div>
	);

	const check = (key, label) => (
		<label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-600">
			<input type="checkbox" checked={options?.[key] !== false} onChange={ev => setOption(key, ev.target.checked)} />
			{label}
		</label>
	);

	var steps = Array.isArray(options?.stepLabels) && options.stepLabels.length === 4 ? options.stepLabels : ORDER_TRACKING_DEFAULTS.stepLabels;
	const setStep = (index, value) => setOption('stepLabels', steps.map((s, i) => (i === index ? value : s)));

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				{field('title', 'Title')}
				{field('subtitle', 'Subtitle')}

				<div className="grid grid-cols-2 gap-3">
					{field('orderLabel', 'Order field label')}
					{field('orderPlaceholder', 'Order placeholder')}
					{field('contactLabel', 'Contact field label')}
					{field('contactPlaceholder', 'Contact placeholder')}
				</div>

				{field('buttonText', 'Button text')}

				{check('showProgress', 'Show the progress bar')}
				{check('showItems', 'Show the items')}
				{check('showTimeline', 'Show delivery updates')}

				{options?.showProgress !== false && (
					<div className="flex flex-col gap-2">
						<label htmlFor="" className={labelClass}>Progress steps</label>
						<div className="grid grid-cols-2 gap-2">
							{steps.map((step, index) => (
								<input key={index} type="text" className={inputClass} value={step} placeholder={ORDER_TRACKING_DEFAULTS.stepLabels[index]} onChange={ev => setStep(index, ev.target.value)} />
							))}
						</div>
					</div>
				)}

				{check('previewResult', 'Show a sample result in the builder')}

				<p className="text-xs text-gray-500">
					Shoppers enter the order number and the phone or email they ordered with; signed-in customers only need the number for their own orders. Link here with <code>?order=1024</code> to fill the number in.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default OrderTrackingOptions;
