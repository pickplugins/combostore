import React from "react";
import CssSelectors from "../CssSelectors";
import { ChatButtonMessageFields } from "./chatButton";
import { defaultWhatsappLabel, whatsappPhone } from "./WhatsappButtonView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `whatsappButton` block: the phone number, the
	label, the message (with product placeholders), the icon, then every part
	through its cssSelectors keys, declared with their defaults in
	ElementsDefinition.js.

	The label field used to read and save options.text, which neither renderer
	reads (they read options.label), so label edits never showed; its
	placeholder also said "Order On Messenger". An old options.text is dropped
	on the next label edit.
*/
const WhatsappButtonOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it, so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('whatsappButton', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	var phone = whatsappPhone(options?.phone);
	/* A number starting with 0 is a local one: wa.me needs the country code in front. */
	var looksLocal = phone.startsWith('0');

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">WhatsApp number</label>
					<input type="tel" placeholder="8801XXXXXXXXX" className={inputClass} value={options?.phone ?? ''} onChange={ev => setOption('phone', ev.target.value)} />
					<p className={`text-xs ${looksLocal ? 'text-amber-600' : 'text-gray-500'}`}>
						{!phone && 'With the country code, e.g. 8801XXXXXXXXX. Until it is set, the button is hidden on the shop.'}
						{phone && looksLocal && <>This looks like a local number. Add the country code (e.g. <code>88{phone}</code>), or the chat will not open.</>}
						{phone && !looksLocal && <>Links to <code>wa.me/{phone}</code>.</>}
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<input type="text" placeholder={defaultWhatsappLabel} className={inputClass} value={options?.label ?? ''} onChange={ev => {
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

export default WhatsappButtonOptions;
