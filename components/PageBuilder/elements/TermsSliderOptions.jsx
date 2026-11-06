import React from "react";
import CssSelectors from "../CssSelectors";
import TermsQueryPrams from "../TermsQueryPrams";
import SliderOptionsFields from "../SliderOptionsFields";
import { termsSliderQuery } from "./TermsSliderView";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `termsSlider` block: the terms query (saved as
	options.queryPrams), the Splide settings - the shared editor, which also
	edits breakpoints, saves numbers as numbers and no longer writes into the
	saved settings or flips direction/focus/type to true/false - then its
	cssSelectors keys.
*/
const TermsSliderOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('termsSlider', props?.cssSelectors);

	function onChangeQuery(queryPrams) {
		var optionsX = { ...options, queryPrams: queryPrams };
		delete optionsX.classes; /* the definition's old option, never read */
		updateBlock('options', optionsX);
	}

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<TermsQueryPrams key={props?.id} queryPrams={termsSliderQuery(options)} onChangeQuery={onChangeQuery} />

				<SliderOptionsFields sliderOptions={options?.sliderOptions} onChange={(sliderOptions) => updateBlock('options', { ...options, sliderOptions })} />

				<p className="text-xs text-gray-500">
					<code>perPage</code> (1 when unset) and <code>breakpoints</code> set the columns. <code>arrows-wrap</code>, <code>arrow-item</code> (both arrows), <code>arrow-prev</code>/<code>arrow-next</code>, <code>pagination</code> and <code>page-item</code> style the controls; <code>loop-item</code> styles each card.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default TermsSliderOptions;
