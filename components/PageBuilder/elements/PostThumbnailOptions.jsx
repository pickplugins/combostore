import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `postThumbnail` block: whether the image links to
	the post, then its cssSelectors keys. A block saved without linkTo links,
	as it always did on the shop - this panel used to show "None" for it.
*/
const PostThumbnailOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('postThumbnail', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link To</label>
					<select className={inputClass} value={(options?.linkTo ?? 'postUrl') === 'postUrl' ? 'postUrl' : ''} onChange={ev => updateBlock('options', { ...options, linkTo: ev.target.value })} >
						<option value="postUrl">The post's page</option>
						<option value="">No link</option>
					</select>
				</div>

				<p className="text-xs text-gray-500"><code>*</code> wraps it, <code>link</code> is the link (when linked) and <code>image</code> the image. With no featured image a placeholder shows.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostThumbnailOptions;
