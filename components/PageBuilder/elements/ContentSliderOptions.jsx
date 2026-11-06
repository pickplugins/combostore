import React from "react";
import CssSelectors from "../CssSelectors";
import SliderOptionsFields from "../SliderOptionsFields";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `contentSlider` block: the Splide settings, then its
	cssSelectors keys. Slides are the block's children - add, reorder and
	remove them on the canvas or in the block tree.

	This used to be its own copy of the slider settings editor (with stray
	checkboxes that set direction, focus and type to true/false) and had no
	style editor. options.items, which nothing could fill, is dropped on the
	next save.
*/
const ContentSliderOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('contentSlider', props?.cssSelectors);

	function onChangeSliderOptions(sliderOptions) {
		var optionsX = { ...options, sliderOptions };
		delete optionsX.items;
		updateBlock('options', optionsX);
	}

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<SliderOptionsFields sliderOptions={options?.sliderOptions} onChange={onChangeSliderOptions} />

				<p className="text-xs text-gray-500">
					Each block inside the slider is one slide. <code>slide</code> styles every slide; <code>arrows-wrap</code>, <code>arrow-item</code> (both arrows), <code>arrow-prev</code>/<code>arrow-next</code>, <code>pagination</code> and <code>page-item</code> style the controls.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ContentSliderOptions;
