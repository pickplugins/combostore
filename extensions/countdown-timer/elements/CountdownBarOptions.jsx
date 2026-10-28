"use client";

import React from "react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import { FIELD, CampaignPicker } from "./CountdownOptions";

/* Options for the countdownBar block. */
const CountdownBarOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => updateBlock("options", { ...options, [key]: value });

	const text = (key, label, placeholder) => (
		<div className="flex flex-col gap-2">
			<label className="text-xs font-medium text-gray-600">{label}</label>
			<input
				type="text"
				className={FIELD}
				placeholder={placeholder ?? ""}
				value={options?.[key] ?? ""}
				onChange={(ev) => setOption(key, ev.target.value)}
			/>
		</div>
	);

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<CampaignPicker
					value={options?.campaignId}
					onChange={(value) => setOption("campaignId", value)}
				/>

				{text("message", "Message", "Sale ends in")}
				{text("linkLabel", "Button text", "Leave empty for no button")}
				{text("linkUrl", "Button goes to", "/shop")}

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showSeconds !== false}
						onChange={(ev) => setOption("showSeconds", ev.target.checked)}
					/>
					Show seconds
				</label>
				<p className="-mt-1 text-[11px] text-gray-400">
					Worth turning off for a sale days away, where a ticking second is
					just movement in the corner of the eye.
				</p>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.dismissible !== false}
						onChange={(ev) => setOption("dismissible", ev.target.checked)}
					/>
					Let shoppers close it
				</label>
				<p className="-mt-1 text-[11px] text-gray-400">
					Closing it hides the bar for the rest of the visit, on every page.
					It comes back next time.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default CountdownBarOptions;
