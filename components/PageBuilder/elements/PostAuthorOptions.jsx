import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `postAuthor` block: a label before the name, the
	avatar toggle, whether it links to the post, then its cssSelectors keys.
	(Its Classes field saved options.classes, which nothing reads.)
*/
const PostAuthorOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('postAuthor', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label (empty for none)</label>
					<input type="text" placeholder="By" className={inputClass} value={options?.label ?? ''} onChange={ev => setOption('label', ev.target.value)} />
				</div>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={!!options?.showAvatar} onChange={ev => setOption('showAvatar', ev.target.checked)} />
					Show the author's avatar
				</label>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link To</label>
					<select className={inputClass} value={(options?.linkTo ?? 'postUrl') === 'postUrl' ? 'postUrl' : ''} onChange={ev => setOption('linkTo', ev.target.value)} >
						<option value="postUrl">The post's page</option>
						<option value="">No link</option>
					</select>
				</div>

				<p className="text-xs text-gray-500">With the avatar or a label, give <code>*</code> <code>inline-flex items-center gap-2</code> to line them up. Size the avatar from <code>avatar</code>.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostAuthorOptions;
