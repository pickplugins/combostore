import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `postContent` block. It has no options (its Classes
	field saved options.classes, which nothing read), so just a note and its
	`*` classes.
*/
const PostContentOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('postContent', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<p className="text-xs text-gray-500">
					Shows the content of the post or product it sits in. Style what is inside it from <code>*</code> with
					variants such as <code>[&amp;_p]:mb-4</code>, <code>[&amp;_h2]:text-xl</code> or <code>[&amp;_a]:underline</code>.
				</p>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostContentOptions;
