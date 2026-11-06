import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { paginationSettings } from "./PostGridPaginationView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const smallButton = 'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit';

/*
	Settings panel for a grid pagination (`postGridPagination`, and the terms
	grid's, which shares it through the `type` prop): page numbers or a page
	box, the Previous / Next labels and icons, then its cssSelectors keys. It
	had only the style editor, so the labels and icons the definition
	declared could not be set. Saving moves them out of options.sliderOptions,
	where they used to live, to the top level.
*/
const PostGridPaginationOptions = (props) => {

	var type = props?.type ?? 'postGridPagination';
	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults(type, props?.cssSelectors);
	var settings = paginationSettings(options, props?.cssSelectors);

	const setOption = (key, value) => {
		var next = { ...options, ...settings, [key]: value };
		delete next.sliderOptions;
		updateBlock('options', next);
	};

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Style</label>
					<select className={inputClass} value={settings.style} onChange={ev => setOption('style', ev.target.value)}>
						<option value="numbers">Page numbers (1 2 3 … 9)</option>
						<option value="input">Page box (Page [2] of 9)</option>
					</select>
				</div>

				{[['prev', 'Previous', 'previous'], ['next', 'Next', 'next']].map(([key, title, sel]) => (
					<div key={key} className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
						<div className="text-xs font-semibold text-gray-700">{title} button</div>
						<input type="text" placeholder={`Label (empty for the arrow only)`} className={inputClass} value={settings[`${key}Text`]} onChange={ev => setOption(`${key}Text`, ev.target.value)} />
						<div className="flex items-center justify-between gap-2">
							<span className="text-xs text-gray-600">Icon{settings[`${key}Icon`] ? `: ${settings[`${key}Icon`]}` : ' (default arrow)'}</span>
							<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={smallButton} onOptionsChoose={(args) => setOption(`${key}Icon`, args)} />
						</div>
						<p className="text-xs text-gray-500">Styled by <code>{sel}</code> and <code>{sel}-icon</code>; add <code>disabled:opacity-40</code> for the first / last page.</p>
					</div>
				))}

				<p className="text-xs text-gray-500">Page numbers use <code>pagination-item</code>, the current page <code>pagination-item-active</code> and the gaps <code>ellipsis</code>; the page box uses <code>current</code> and <code>total</code>. On the shop it hides when there is only one page.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostGridPaginationOptions;
