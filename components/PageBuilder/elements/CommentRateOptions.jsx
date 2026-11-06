import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `commentRate` block: the star size, whether the
	"4/5" text shows, then its cssSelectors keys. It was a copy of the image
	panel (a gallery picker and an alt text field), none of which this block
	reads.
*/
const CommentRateOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('commentRate', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Star size</label>
					<input type="number" min="8" placeholder="24" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>
				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={options?.showValue !== false} onChange={ev => setOption('showValue', ev.target.checked)} />
					Show the rating as text (4/5)
				</label>
				<p className="text-xs text-gray-500">The comment's star rating; comments without one (plain blog comments) show nothing. Colour the stars on <code>star-loop</code>, e.g. <code>text-amber-500</code>.</p>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default CommentRateOptions;
