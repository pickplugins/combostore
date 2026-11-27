import React from "react";
import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";
import { SIGNUP_ROLES, blockSignupRole } from "./registerRoles";

/*
	Settings panel for the `register` block.

	Options: hideTitle (for pages that show their own heading above the form)
	and role - who this form signs people up as. The form itself offers no
	choice, so a separate page (and block) is used per role. The server
	enforces the role itself; affiliate sign-ups also need Settings >
	Affiliates > Affiliate sign-up. Every part of the form is styled through
	its cssSelectors keys, declared with their defaults in ElementsDefinition.js.
*/
const RegisterOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options ?? {};
	var hideTitle = !!options?.hideTitle;
	var role = blockSignupRole(options).value;
	var showPhone = !!options?.showPhone;
	var phoneRequired = !!options?.phoneRequired;

	function toggleOption(key) {
		var next = { ...options, [key]: !options?.[key] };
		/* Hiding the field also drops "required", so a hidden field can never block sign-up. */
		if (key === 'showPhone' && !next.showPhone) next.phoneRequired = false;
		updateBlock('options', next);
	}

	/* Saving the role drops the old list/preselection keys, so nothing else can override it. */
	function setRole(value) {
		var next = { ...options, role: value };
		delete next.roles;
		delete next.defaultRole;
		updateBlock('options', next);
	}
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

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Show phone field</label>
					<div className="cursor-pointer" onClick={() => toggleOption('showPhone')}>
						{showPhone ? <IconCheckbox /> : <IconSquare />}
					</div>
				</div>

				{showPhone && (
					<div className="flex justify-between items-center">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Phone required</label>
						<div className="cursor-pointer" onClick={() => toggleOption('phoneRequired')}>
							{phoneRequired ? <IconCheckbox /> : <IconSquare />}
						</div>
					</div>
				)}

				<div className="flex flex-col gap-2">
					<div className="flex justify-between items-center gap-2">
						<label htmlFor="register-sign-up-as" className="text-xs font-medium text-gray-600">Sign up as</label>
						<select id="register-sign-up-as" className="text-xs border border-gray-300 rounded px-2 py-1" value={role} onChange={(ev) => setRole(ev.target.value)}>
							{SIGNUP_ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
						</select>
					</div>
					<p className="text-xs text-gray-500">
						Visitors don't see this choice: everyone who uses this form signs up as the role picked here. Use a separate page for each kind of sign-up. Affiliate sign-ups only work while Settings &gt; Affiliates &gt; Affiliate sign-up is on.
					</p>
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
