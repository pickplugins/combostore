import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `commentAuthor` block: text before the name, its
	tag, then its `*` classes. It was a copy of the image panel (a gallery
	picker and an alt text field), none of which this block reads.
*/
const CommentAuthorOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('commentAuthor', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Before the name (optional)</label>
					<input type="text" placeholder="By " className={inputClass} value={options?.label ?? ''} onChange={ev => setOption('label', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={options?.tag ?? 'div'} onChange={ev => setOption('tag', ev.target.value)}>
						<option value="div">DIV</option>
						<option value="span">SPAN (inline)</option>
						<option value="strong">STRONG</option>
						<option value="cite">CITE (a quote's author)</option>
						<option value="h3">H3</option>
						<option value="h4">H4</option>
						<option value="p">Paragraph</option>
					</select>
				</div>

				<p className="text-xs text-gray-500">The name of whoever wrote the comment; place it inside a Comments Loop.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default CommentAuthorOptions;
