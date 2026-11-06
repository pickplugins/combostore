import React from "react";
import IconPicker from "../../../components/IconPicker";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `postExcerpt` block: the word limit (which had no
	field), the read-more text, icon and icon size, then its cssSelectors keys.
*/
const PostExcerptOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('postExcerpt', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });
	const setNumber = (key) => (ev) => setOption(key, ev.target.value === '' ? undefined : Number(ev.target.value));

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Maximum words (0 for the whole excerpt)</label>
					<input type="number" min="0" placeholder="20" className={inputClass} value={options?.maxWord ?? ''} onChange={setNumber('maxWord')} />
					<p className="text-xs text-gray-500">A limit shows the excerpt as plain text; 0 keeps its formatting.</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Read more text (empty for none)</label>
					<input type="text" placeholder="Read more" className={inputClass} value={options?.readMoreText ?? ''} onChange={ev => setOption('readMoreText', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Read more icon</label>
					<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('readMoreIcon', args)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon size</label>
					<input type="number" placeholder="25" className={inputClass} value={options?.readMoreIconSize ?? ''} onChange={setNumber('readMoreIconSize')} />
				</div>

				<p className="text-xs text-gray-500">Read more links to the post's page. On a product page with a variation picked, that variation's description shows in place of the excerpt.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostExcerptOptions;
