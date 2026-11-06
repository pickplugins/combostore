import React from "react";
import CssSelectors from "../CssSelectors";
import { headingTagFor } from "./HeadingView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `heading` block: its text and level, then its `*`
	classes, declared with their default in ElementsDefinition.js.
*/
const HeadingOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('heading', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
					<textarea className={`${inputClass} !min-h-20`} value={options?.text ?? ''} onChange={ev => setOption('text', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Level</label>
					{/* Shows the tag the heading actually renders, so a missing or unknown one reads as H1. */}
					<select className={inputClass} value={headingTagFor(options)} onChange={ev => setOption('tag', ev.target.value)} >
						<option value="h1">H1</option>
						<option value="h2">H2</option>
						<option value="h3">H3</option>
						<option value="h4">H4</option>
						<option value="h5">H5</option>
						<option value="h6">H6</option>
						<option value="p">Paragraph (styled as a heading)</option>
						<option value="div">Plain block</option>
					</select>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default HeadingOptions;
