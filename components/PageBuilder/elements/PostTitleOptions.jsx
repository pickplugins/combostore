import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `postTitle` block: whether the title links to the
	post, which tag wraps it, then its `*` classes. (Its Classes field saved
	options.classes, which nothing reads.)
*/
const PostTitleOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('postTitle', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link To</label>
					<select className={inputClass} value={(options?.linkTo ?? 'postUrl') === 'postUrl' ? 'postUrl' : ''} onChange={ev => setOption('linkTo', ev.target.value)} >
						<option value="postUrl">The post's page</option>
						<option value="">No link</option>
					</select>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<select className={inputClass} value={options?.tag ?? ''} onChange={ev => setOption('tag', ev.target.value || undefined)} >
						<option value="">None (just the link or text)</option>
						<option value="h1">H1 (a product or post page's own title)</option>
						<option value="h2">H2</option>
						<option value="h3">H3 (cards in a grid)</option>
						<option value="h4">H4</option>
						<option value="p">Paragraph</option>
					</select>
					<p className="text-xs text-gray-500">With a tag, the <code>*</code> classes go on the tag and the link sits inside it.</p>
				</div>

				<p className="text-xs text-gray-500">Blog posts link to their blog page and products to their product page; other content is never linked.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostTitleOptions;
