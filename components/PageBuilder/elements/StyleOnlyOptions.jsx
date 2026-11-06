import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for an element whose only settings are its styles: every
	cssSelectors key it declares in ElementsDefinition.js, filled from the
	defaults where the block lacks it. `type` is the element type. Blocks that
	had no panel at all - postLoop, termsLoop, termCount, featureboxTitle,
	featureboxDetails, productBadge - use this, so their styles can be edited.
*/
const StyleOnlyOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var cssSelectors = withElementCssDefaults(props?.type, props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				{props?.note && <p className="text-xs text-gray-500">{props.note}</p>}
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default StyleOnlyOptions;
