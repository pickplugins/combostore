import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `customerProfileEdit` block.

	It has no options. Every part of the editor - the three cards, their
	fields and buttons, the map frame and the loading placeholder - is styled
	through its cssSelectors keys, declared with their defaults in
	ElementsDefinition.js.
*/
const CustomerProfileEditOptions = (props) => {

	var updateBlock = props?.updateBlock;

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('customerProfileEdit', props?.cssSelectors);

	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<p className="text-xs text-gray-500">
					The card keys (card, card-header, card-title...) style all three cards: personal details, address and delivery location. The builder shows sample details and a placeholder for the map; the shop shows the signed-in customer's own, with the real map inside <code>map</code>. The error notice is shared by all the account blocks and is not styled here.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default CustomerProfileEditOptions;
