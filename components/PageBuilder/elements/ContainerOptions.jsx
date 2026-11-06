import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `container` block: its `*` classes, which set the
	width, padding and layout of whatever is dropped inside it.
*/
const ContainerOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('container', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					<code>*</code> sets the container's width (e.g. <code>max-w-6xl mx-auto</code>), padding and how its content is laid out.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ContainerOptions;
