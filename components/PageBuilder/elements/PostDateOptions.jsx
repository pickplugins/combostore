import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";
import { formatPostDate, defaultDateFormat } from "./PostDateView";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/* Ready-made formats; each label is the format applied to a sample date, so it can never disagree with the output. */
const exampleDate = '2025-03-14 09:30:00';
const dateFormats = ['DD-MM-YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD', 'MMMM DD, YYYY', 'MMM DD, YYYY', 'DD MMMM, YYYY', 'DD MMM YYYY', 'ddd, MMM D, YYYY', 'dddd, MMMM D, YYYY', 'MMM D, YYYY [at] h:mm A'];

/*
	Settings panel for the `postDate` block: the date format (a ready-made one
	or any custom format), whether it links to the post, then its `*` classes.
	(Its Classes field saved options.classes, which nothing reads.)
*/
const PostDateOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('postDate', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	var current = options?.dateFormat || defaultDateFormat;
	var isPreset = dateFormats.includes(current);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Date Format</label>
					<select className={inputClass} value={isPreset ? current : '__custom'} onChange={ev => ev.target.value !== '__custom' && setOption('dateFormat', ev.target.value)} >
						{dateFormats.map(format => (
							<option key={format} value={format}>{formatPostDate(exampleDate, format)}</option>
						))}
						<option value="__custom">Custom{isPreset ? '' : `: ${formatPostDate(exampleDate, current)}`}</option>
					</select>
					<input type="text" className={inputClass} placeholder={defaultDateFormat} value={options?.dateFormat ?? ''} onChange={ev => setOption('dateFormat', ev.target.value || undefined)} />
					<p className="text-xs text-gray-500">
						Tokens: <code>YYYY</code> year, <code>MM</code>/<code>MMM</code>/<code>MMMM</code> month, <code>DD</code>/<code>D</code> day, <code>ddd</code>/<code>dddd</code> weekday, <code>HH</code>/<code>h</code>:<code>mm</code> <code>A</code> time; text in <code>[brackets]</code> is kept as is. PHP-style formats (<code>d-m-Y</code>, <code>M d, Y</code>) also work.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link To</label>
					<select className={inputClass} value={(options?.linkTo ?? 'postUrl') === 'postUrl' ? 'postUrl' : ''} onChange={ev => setOption('linkTo', ev.target.value)} >
						<option value="postUrl">The post's page</option>
						<option value="">No link</option>
					</select>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostDateOptions;
