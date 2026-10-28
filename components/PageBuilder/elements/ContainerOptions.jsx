import React from "react";
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";

const ContainerOptions = (props) => {
	const { updateBlock } = props;

	var cssSelectors = props?.cssSelectors ?? {};

	const handleChange = (key, value) => {
		const newOptions = { ...options, [key]: value };
		updateBlock('options', newOptions);
	};

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">



				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>

	);
};

export default ContainerOptions;
