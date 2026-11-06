import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `commentContent` block: its tag, then its
	cssSelectors keys. It was a copy of the image panel (a gallery picker and
	an alt text field), none of which this block reads.
*/
const CommentContentOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('commentContent', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={options?.tag ?? 'div'} onChange={ev => updateBlock('options', { ...options, tag: ev.target.value })}>
						<option value="div">DIV</option>
						<option value="p">Paragraph</option>
						<option value="blockquote">BLOCKQUOTE (a testimonial)</option>
					</select>
				</div>
				<p className="text-xs text-gray-500">The comment's text, shown as plain text with its line breaks. <code>paragraph</code> styles each paragraph when there are several (e.g. <code>mt-2 first:mt-0</code>); clamp long reviews on <code>*</code> with <code>line-clamp-4</code>.</p>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default CommentContentOptions;
