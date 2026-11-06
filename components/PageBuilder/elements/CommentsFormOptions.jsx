import React from "react";
import CssSelectors from "../CssSelectors";
import { commentsFormTexts } from "./CommentsFormView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const fields = [
	['rateLabel', 'Rating label'],
	['commentLabel', 'Comment label'],
	['placeholder', 'Comment placeholder'],
	['submitLabel', 'Button text'],
	['loadingLabel', 'Button text while sending'],
	['successText', 'Message after posting'],
	['loginRequiredText', 'Message when not logged in'],
];

/*
	Settings panel for the `commentsForm` block: whether it asks for a star
	rating, all its texts, then its cssSelectors keys. It had only the style
	editor, so none of the texts the definition declares could be changed.
	(It was named ColumnsOptions.)
*/
const CommentsFormOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var texts = commentsFormTexts(options);

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('commentsForm', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={!!texts.showRate} onChange={ev => setOption('showRate', ev.target.checked)} />
					Ask for a star rating
				</label>

				{fields.filter(([key]) => key !== 'rateLabel' || texts.showRate).map(([key, label]) => (
					<div key={key} className="flex flex-col gap-1">
						<label htmlFor="" className="text-xs font-medium text-gray-600">{label}</label>
						<input type="text" className={inputClass} value={options?.[key] ?? texts[key]} onChange={ev => setOption(key, ev.target.value)} />
					</div>
				))}

				<p className="text-xs text-gray-500">Visitors must be logged in to post. Inside a Comments Loop the form posts a reply to that comment. On a page without a post or product the form is hidden.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default CommentsFormOptions;
