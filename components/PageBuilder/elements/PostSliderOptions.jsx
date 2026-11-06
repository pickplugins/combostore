import React from "react";
import CssSelectors from "../CssSelectors";
import PostQueryPrams from "../PostQueryPrams";
import SliderOptionsFields from "../SliderOptionsFields";
import { postSliderQuery } from "./PostSliderView";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `postSlider` block: the query, the Splide settings,
	then its cssSelectors keys.

	The query is saved as options.queryPrams, which the slider reads. This
	panel used to read and save options.query, so query edits never reached
	the slider, and the editor always opened empty. An old options.query is
	dropped on the next save. The settings editor's direction, focus and type
	had a stray checkbox that set them to true/false.
*/
const PostSliderOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('postSlider', props?.cssSelectors);

	function onChangeQuery(queryPrams) {
		var optionsX = { ...options, queryPrams: queryPrams };
		delete optionsX.query;
		delete optionsX.queryParams;
		updateBlock('options', optionsX);
	}

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<PostQueryPrams key={props?.id} queryPrams={postSliderQuery(options)} onChangeQuery={onChangeQuery} />

				<SliderOptionsFields sliderOptions={options?.sliderOptions} onChange={(sliderOptions) => updateBlock('options', { ...options, sliderOptions })} />

				<p className="text-xs text-gray-500">
					<code>perPage</code> and <code>breakpoints</code> set the columns. <code>arrows-wrap</code>, <code>arrow-item</code> (both arrows), <code>arrow-prev</code>/<code>arrow-next</code>, <code>pagination</code> and <code>page-item</code> style the controls; <code>loop-item</code> styles each card unless the Post Loop sets its own.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default PostSliderOptions;
