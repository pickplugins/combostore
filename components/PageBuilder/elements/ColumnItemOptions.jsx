import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `columnItem` block: its own `*` classes, which add
	to the parent columns block's `column` classes.
*/
const ColumnItemOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('columnItem', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					These classes add to the columns block's <code>column</code> classes. Set this column's width or surface here.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ColumnItemOptions;
