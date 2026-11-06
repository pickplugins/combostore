import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `commentAvatar` block: whether the avatar links to
	the commenter's website, then its cssSelectors keys. It was a copy of the
	image panel (a gallery picker and an alt text field), none of which this
	block reads.
*/
const CommentAvatarOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('commentAvatar', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input type="checkbox" checked={!!options?.linkToAuthor} onChange={ev => updateBlock('options', { ...options, linkToAuthor: ev.target.checked })} />
					Link to the commenter's website (when they gave one)
				</label>
				<p className="text-xs text-gray-500">The commenter's Gravatar. <code>*</code> wraps it, <code>link</code> is the link (when linked) and <code>image</code> the picture: size and round it there, e.g. <code>w-12 h-12 rounded-full object-cover</code>.</p>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default CommentAvatarOptions;
