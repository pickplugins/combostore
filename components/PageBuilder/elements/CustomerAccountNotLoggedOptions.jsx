import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `customerAccountNotLogged` block.

	It has no options: it is the container for the signed-out half of the
	account area. Its cssSelectors keys are declared with their defaults in
	ElementsDefinition.js.
*/
const CustomerAccountNotLoggedOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('customerAccountNotLogged', props?.cssSelectors);

	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					Shown on the shop only to visitors who are not signed in; to a signed-in customer it renders nothing, wrapper included. Put the sign-in and register forms inside it.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default CustomerAccountNotLoggedOptions;
