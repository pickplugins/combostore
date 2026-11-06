import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `termTitle` block: whether the name links to the
	term's archive page, its tag, then its `*` classes. (Its Classes field
	saved options.classes, which nothing reads; it was named HeadingOptions.)
*/
const TermTitleOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('termTitle', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link To</label>
					<select className={inputClass} value={options?.linkTo === 'termUrl' ? 'termUrl' : ''} onChange={ev => setOption('linkTo', ev.target.value)}>
						<option value="termUrl">The term's page</option>
						<option value="">No link</option>
					</select>
					<p className="text-xs text-gray-500">Product categories, brands and tags link to their shop page; other terms are never linked.</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={options?.tag ?? 'div'} onChange={ev => setOption('tag', ev.target.value)}>
						<option value="h2">H2</option>
						<option value="h3">H3 (cards in a grid)</option>
						<option value="h4">H4</option>
						<option value="p">Paragraph</option>
						<option value="div">DIV</option>
						<option value="span">SPAN (inline)</option>
						<option value="h1">H1 (a category page's own title)</option>
					</select>
					<p className="text-xs text-gray-500">The <code>*</code> classes go on the tag; a link sits inside it.</p>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default TermTitleOptions;
