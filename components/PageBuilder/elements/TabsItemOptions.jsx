import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `tabsItem` block: one tab's content area. Its `*`
	classes wrap the blocks inside the tab, within the parent tabs block's
	`nav-item-content`. The tab's label and icon are set on the tabs block.
*/
const TabsItemOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('tabsItem', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					This is one tab's content. Its label and icon are set on the Tabs block.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default TabsItemOptions;
