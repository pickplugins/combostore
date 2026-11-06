import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `customerAccountLogged` block.

	It has no options: it is the container for the signed-in half of the
	account area. Its cssSelectors keys are declared with their defaults in
	ElementsDefinition.js.
*/
const CustomerAccountLoggedOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('customerAccountLogged', props?.cssSelectors);

	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					Shown on the shop only to signed-in customers; to everyone else it renders nothing, wrapper included. Put the account blocks (orders, profile, tabs) inside it.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default CustomerAccountLoggedOptions;
