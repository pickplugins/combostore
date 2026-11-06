import React from "react";
import CssSelectors from "../CssSelectors";
import { ChatButtonMessageFields } from "./chatButton";
import { defaultMessengerLabel, messengerUsername } from "./MessengerButtonView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `messengerButton` block: the Messenger page, the
	label, the message (with product placeholders), the icon, then every part
	through its cssSelectors keys, declared with their defaults in
	ElementsDefinition.js.

	The label field used to read and save options.text, which neither renderer
	reads (they read options.label), so label edits never showed. An old
	options.text is dropped on the next label edit.
*/
const MessengerButtonOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('messengerButton', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	var username = messengerUsername(options?.username);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Messenger page username</label>
					<input type="text" placeholder="yourpage" className={inputClass} value={options?.username ?? ''} onChange={ev => setOption('username', ev.target.value)} />
					<p className="text-xs text-gray-500">
						{username
							? <>Links to <code>m.me/{username}</code>.</>
							: 'The page name from m.me/yourpage. Until it is set, the button is hidden on the shop.'}
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<input type="text" placeholder={defaultMessengerLabel} className={inputClass} value={options?.label ?? ''} onChange={ev => {
						var optionsX = { ...options, label: ev.target.value };
						delete optionsX.text;
						updateBlock('options', optionsX);
					}} />
				</div>

				<ChatButtonMessageFields options={options} setOption={setOption} inputClass={inputClass} />

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default MessengerButtonOptions;
