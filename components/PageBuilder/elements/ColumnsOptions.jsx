import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const addButtonClass = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit";

/*
	Settings panel for the `columns` block.

	`*` lays out the row (flex, gap, alignment); `column` is added to every
	Column Item, so it styles them all at once. A single column's width or
	surface goes on that Column Item's own `*`.
*/
const ColumnsOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;
	var id = props?.id;

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('columns', props?.cssSelectors);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className={addButtonClass} onClick={() => handleMoveBlock({ paletteType: 'columnItem' }, id, 'inside')}>Add Item</div>

				<p className="text-xs text-gray-500">
					<code>*</code> lays out the row; <code>column</code> is added to every column. Style a single column on its Column Item.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ColumnsOptions;
