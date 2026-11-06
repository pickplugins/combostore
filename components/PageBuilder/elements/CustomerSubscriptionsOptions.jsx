import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `customerSubscriptions` block.

	hideTitle drops the "Subscriptions" heading and count, for a tab or page
	that already labels the panel. Every part of the list is styled through its
	cssSelectors keys, declared with their defaults in ElementsDefinition.js.
*/
const CustomerSubscriptionsOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	var hideTitle = !!options?.hideTitle;
	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('customerSubscriptions', props?.cssSelectors);

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
					The builder shows sample subscriptions; the shop shows the signed-in customer's own. The status badge, pager and the empty, loading and error states are shared by all the account blocks and are not styled here.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default CustomerSubscriptionsOptions;
