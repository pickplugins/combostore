import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

/*
	Settings panel for the `register` block.

	The only option is hideTitle (for pages that show their own heading above
	the form). Every part of the form is styled through its cssSelectors keys,
	declared with their defaults in ElementsDefinition.js.
*/
const RegisterOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	var hideTitle = !!options?.hideTitle;
	/* Every current key, filled from defaults where the block lacks it (older
	   blocks, presets), so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('register', props?.cssSelectors);

	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Hide title</label>

					<div className="cursor-pointer" onClick={() => {
						var optionsX = { ...options }
						optionsX.hideTitle = !hideTitle
						updateBlock('options', optionsX)
					}}>
						{hideTitle ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				<p className="text-xs text-gray-500">
					Restyle any part of the form with the selectors below. Keep <code>relative</code> on <code>field-control</code> so the icons stay inside the fields.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default RegisterOptions;
