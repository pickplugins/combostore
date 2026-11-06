import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `customerAccount` block.

	hideWelcome drops the welcome card (avatar, name, email, log-out button)
	that signed-in customers see above the account area. Every part of the card
	is styled through its cssSelectors keys, declared with their defaults in
	ElementsDefinition.js; '*' is the container that also holds the child blocks.
*/
const CustomerAccountOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	var hideWelcome = !!options?.hideWelcome;
	/* Every current key, filled from defaults where the block lacks it (older
	   blocks, presets), so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('customerAccount', props?.cssSelectors);

	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Hide welcome card</label>

					<div className="cursor-pointer" onClick={() => {
						/* options may be saved as [] on older blocks; spread into an object either way. */
						var optionsX = { ...(Array.isArray(options) ? {} : options) }
						optionsX.hideWelcome = !hideWelcome
						updateBlock('options', optionsX)
					}}>
						{hideWelcome ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				<p className="text-xs text-gray-500">
					The welcome card shows only to signed-in customers on the shop; the builder always shows it with sample details so it can be styled.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default CustomerAccountOptions;
