import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const addButtonClass = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit";

/*
	Settings panel for the `grid` block.

	`*` holds the tracks (grid-cols-*, gap-*, auto-rows-*); `grid-item` is
	added to every cell, so it styles them all at once. Spans (col-span-*,
	row-span-*) belong on each Grid Item's own `*`.
*/
const GridOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;
	var id = props?.id;

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('grid', props?.cssSelectors);

	return (
		<div className="p-3" >
			<div className="flex flex-col gap-3">

				<div className={addButtonClass} onClick={() => handleMoveBlock({ paletteType: 'gridItem' }, id, 'inside')}>Add Item</div>

				<p className="text-xs text-gray-500">
					<code>*</code> sets the columns and gap; <code>grid-item</code> is added to every cell. Put spans on each Grid Item.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default GridOptions;
