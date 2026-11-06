import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `accordionItem` block: one item's content. Its `*`
	classes wrap the blocks inside it, within the parent accordion's
	`accordion-content`. The item's header label is set on the accordion.
*/
const AccordionItemOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('accordionItem', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					This is one item's content. Its header label is set on the Accordion block.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default AccordionItemOptions;
