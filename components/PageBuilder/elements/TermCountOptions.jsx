import React from "react";
import CssSelectors from "../CssSelectors";
import { termCountText } from "./TermCountView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `termCount` block: the text before and after the
	number (and a singular form), its tag, then its `*` classes. The block
	had only the generic style panel; this file was an unused copy of the
	heading panel.
*/
const TermCountOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('termCount', props?.cssSelectors);

	const setOption = (key, value) => {
		var next = { ...options, [key]: value };
		if (key === 'label') delete next.prefix; /* the older name for the label */
		updateBlock('options', next);
	};

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Before the number</label>
					<input type="text" placeholder="e.g. (" className={inputClass} value={options?.label || options?.prefix || ''} onChange={ev => setOption('label', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">After the number</label>
					<input type="text" placeholder=" items" className={inputClass} value={options?.suffix ?? ''} onChange={ev => setOption('suffix', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">After the number, for 1 (optional)</label>
					<input type="text" placeholder=" item" className={inputClass} value={options?.singularSuffix ?? ''} onChange={ev => setOption('singularSuffix', ev.target.value)} />
				</div>

				<p className="text-xs text-gray-500">Shows as “{termCountText(12, options)}” and “{termCountText(1, options)}”. Include the spaces you want.</p>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={options?.tag ?? 'span'} onChange={ev => setOption('tag', ev.target.value)}>
						<option value="span">SPAN (inline)</option>
						<option value="div">DIV</option>
						<option value="p">Paragraph</option>
					</select>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default TermCountOptions;
