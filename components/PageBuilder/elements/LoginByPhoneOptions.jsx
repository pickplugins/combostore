import React from "react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `loginByPhone` block.

	The four labels, the resend cooldown, then every part of the form through
	its cssSelectors keys, declared with their defaults in ElementsDefinition.js.
	In the builder, "Send code" switches the preview to the code step and
	"Change" goes back, so both steps can be styled.
*/
const LoginByPhoneOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	/* Every current key, filled from defaults where the block lacks it (older
	   blocks, presets), so all of them show up for editing. */
	var cssSelectors = withElementCssDefaults('loginByPhone', props?.cssSelectors);

	const setOption = (key, value) => {
		var optionsX = { ...options }
		optionsX[key] = value
		updateBlock('options', optionsX)
	};

	const labelFields = [
		['phoneLabel', 'Phone label', 'Phone number'],
		['sendOtpLabel', 'Send button text', 'Send code'],
		['otpLabel', 'Code label', 'Code'],
		['verifyOtpLabel', 'Verify button text', 'Verify & sign in'],
	];

	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				{labelFields.map(([key, label, placeholder]) => (
					<div key={key} className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">{label}</label>
						<input type="text" className={inputClass} placeholder={placeholder} value={options?.[key] ?? ''} onChange={ev => setOption(key, ev.target.value)} />
					</div>
				))}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Resend cooldown (seconds)</label>
					<input type="number" min="0" className={inputClass} placeholder="60" value={options?.otpResendCooldown ?? ''} onChange={ev => setOption('otpResendCooldown', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<p className="text-xs text-gray-500">
					Restyle any part of the form with the selectors below. Click <em>Send code</em> in the preview to style the code step.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>
	);
};

export default LoginByPhoneOptions;
