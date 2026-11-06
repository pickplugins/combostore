import React from "react";
import CssSelectors from "../CssSelectors";
import PostQueryPrams from "../PostQueryPrams";
import { postGridQuery } from "./PostGridView";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `postGrid` block: the query (saved as
	options.queryPrams), then its cssSelectors keys. The editor starts from
	the query the grid actually shows - the default one for a grid saved
	without a query - so what is listed matches the canvas.
*/
const PostGridOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('postGrid', props?.cssSelectors);

	function onChangeQuery(queryPrams) {
		var optionsX = { ...options, queryPrams: queryPrams };
		delete optionsX.queryParams; /* the definition's old misspelt key, never read */
		updateBlock('options', optionsX);
	}

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<PostQueryPrams key={props?.id} queryPrams={postGridQuery(options)} onChangeQuery={onChangeQuery} />
				<p className="text-xs text-gray-500">
					<code>*</code> is the grid's wrapper; <code>loop-items</code> is the list of cards (set its columns here, e.g. <code>grid grid-cols-2 md:grid-cols-4 gap-5</code>) and <code>loop-item</code> each card. The cards' contents are the blocks inside the Post Loop.
				</p>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostGridOptions;
