import React from "react";
import CssSelectors from "../CssSelectors";
import { archiveTagFor } from "./ArchiveTitleView";
import { archiveCountText } from "./ArchiveCountView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `archiveCount` block: the text around the count
	("Showing " + 24 + " results"), its tag, then its `*` classes. (This panel
	used to be a copy of the archive title's, with Tag and Prefix only.)
*/
const ArchiveCountOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('archiveCount', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Before the count</label>
					<input type="text" placeholder="Showing " className={inputClass} value={options?.prefix ?? ''} onChange={ev => setOption('prefix', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">After the count</label>
					<input type="text" placeholder=" results" className={inputClass} value={options?.suffix ?? ''} onChange={ev => setOption('suffix', ev.target.value)} />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">After the count, for 1 (optional)</label>
					<input type="text" placeholder=" result" className={inputClass} value={options?.singularSuffix ?? ''} onChange={ev => setOption('singularSuffix', ev.target.value)} />
				</div>
				<p className="text-xs text-gray-500">Shows as “{archiveCountText(24, options)}” and “{archiveCountText(1, options)}”. Include the spaces you want.</p>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={archiveTagFor(options, 'div')} onChange={ev => setOption('tag', ev.target.value)}>
						<option value="div">Block (div)</option>
						<option value="p">Paragraph</option>
						<option value="span">Inline (span)</option>
						<option value="h2">H2</option>
						<option value="h3">H3</option>
					</select>
				</div>

				<p className="text-xs text-gray-500">Shows the item count of the category, tag or brand page it is placed on.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ArchiveCountOptions;
