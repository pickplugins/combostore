import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `customerProfile` block.

	hideTitle drops the "Your profile" heading, for a tab or page that already
	labels the panel. Every part of the profile card is styled through its
	cssSelectors keys, declared with their defaults in ElementsDefinition.js.
*/
const CustomerProfileOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	var hideTitle = !!options?.hideTitle;
	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('customerProfile', props?.cssSelectors);

	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Hide title</label>

					<div className="cursor-pointer" onClick={() => {
						/* options may be saved as [] on older blocks; spread into an object either way. */
						var optionsX = { ...(Array.isArray(options) ? {} : options) }
						optionsX.hideTitle = !hideTitle
						updateBlock('options', optionsX)
					}}>
						{hideTitle ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				<p className="text-xs text-gray-500">
					Read-only. The builder shows sample details; the shop shows the signed-in customer's own. Use the Profile Edit block to let customers change them. The loading and error states are shared by all the account blocks and are not styled here.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default CustomerProfileOptions;
