import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `icon` block: the icon, its size, an optional name
	for screen readers, then its `*` classes. (It was named HeadingOptions.)
*/
const IconOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('icon', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });
	var Current = TablerIcons[options?.iconName];

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex items-center justify-between gap-2">
					<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
						Icon {Current ? <Current size={16} /> : null} <span className="font-normal text-gray-400">{options?.iconName || 'none'}</span>
					</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('iconName', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Size (px)</label>
					<input type="number" min="8" placeholder="20" className={inputClass} value={options?.size ?? ''} onChange={ev => setOption('size', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Name for screen readers (optional)</label>
					<input type="text" placeholder="e.g. Free delivery" className={inputClass} value={options?.label ?? ''} onChange={ev => setOption('label', ev.target.value)} />
					<p className="text-xs text-gray-500">Only when the icon means something on its own; beside text, leave it empty so it is skipped.</p>
				</div>

				<p className="text-xs text-gray-500">Inside a Featurebox item, the item's own icon and size are used when it sets them. Colour the icon with a <code>text-*</code> class on <code>*</code>.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default IconOptions;
