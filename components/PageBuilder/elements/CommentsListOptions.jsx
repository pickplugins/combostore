import React from "react";
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";

const ColumnsOptions = (props) => {
	const { updateBlock } = props;

	var cssSelectors = props?.cssSelectors ?? {};



	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>

	);
};

export default ColumnsOptions;
