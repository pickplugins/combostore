import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `gridItem` block: its own `*` classes, which add to
	the parent grid's `grid-item` classes. Spans (col-span-*, row-span-*) go here.
*/
const GridItemOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('gridItem', props?.cssSelectors);

	return (
		<div className="p-3" >
			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					These classes add to the grid's <code>grid-item</code> classes. Put this cell's spans here.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default GridItemOptions;
