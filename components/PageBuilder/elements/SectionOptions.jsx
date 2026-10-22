import React from "react";
import CssSelectors from "../CssSelectors";

const SectionOptions = (props) => {
	const { updateBlock } = props;
	const cssSelectors = props?.cssSelectors;



	return (
		<div className="" >
			<div className="flex flex-col gap-3">


				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>

	);
};

export default SectionOptions;
