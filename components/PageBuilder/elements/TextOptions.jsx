"use client"
import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/* The tags offered, with what each is for. */
const tagChoices = [
	['p', 'Paragraph'],
	['span', 'Inline text (span)'],
	['div', 'Block (div)'],
	['small', 'Small print'],
	['strong', 'Strong'],
	['blockquote', 'Quote'],
	['h1', 'Heading 1'],
	['h2', 'Heading 2'],
	['h3', 'Heading 3'],
	['h4', 'Heading 4'],
	['h5', 'Heading 5'],
	['h6', 'Heading 6'],
];

/*
	Settings panel for the `text` block: the text and its tag, then its `*`
	classes. The tag list offered only P and DIV, so the 61 template texts
	saved as span or h3 showed the wrong tag here.
*/
const TextOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('text', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });
	var tag = tagChoices.some(([t]) => t === options?.tag) ? options.tag : 'p';

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
					<textarea rows={4} className={inputClass} value={options?.text ?? ''} onChange={ev => setOption('text', ev.target.value)} />
					<p className="text-xs text-gray-500">Line breaks are kept. For a section title use the Heading block.</p>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={tag} onChange={ev => setOption('tag', ev.target.value)}>
						{tagChoices.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
					</select>
				</div>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default TextOptions;
