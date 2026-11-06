import React from "react";
import CssSelectors from "../CssSelectors";
import { archiveTagFor } from "./ArchiveTitleView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `archiveDescription` block: the word limit, its
	tag, then its `*` classes. (This panel used to be a copy of the archive
	title's, with Tag and Prefix only.)
*/
const ArchiveDescriptionOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('archiveDescription', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Maximum words (0 for all)</label>
					<input type="number" min="0" placeholder="40" className={inputClass} value={options?.maxWord ?? ''} onChange={ev => setOption('maxWord', ev.target.value === '' ? undefined : Number(ev.target.value))} />
					<p className="text-xs text-gray-500">A limit shows a plain-text excerpt; 0 shows the whole description with its paragraphs (styled by <code>paragraph</code>).</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={archiveTagFor(options, 'div')} onChange={ev => setOption('tag', ev.target.value)}>
						<option value="div">Block (div)</option>
						<option value="p">Paragraph</option>
					</select>
				</div>

				<p className="text-xs text-gray-500">Shows the description of the category, tag or brand page it is placed on. The builder shows a sample.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ArchiveDescriptionOptions;
