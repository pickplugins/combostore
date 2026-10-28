import React from "react";
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";

const ColumnsOptions = (props) => {
	const { updateBlock } = props;

	var id = props?.id;
	var cssSelectors = props?.cssSelectors ?? {};
	var handleMoveBlock = props?.handleMoveBlock;



	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">
				<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {

					console.log(props);

					handleMoveBlock({ paletteType: 'columnItem' }, id, 'inside')

				}}>Add Item</div>
				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>

	);
};

export default ColumnsOptions;
