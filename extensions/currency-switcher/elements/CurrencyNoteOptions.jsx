"use client";

import React from "react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import { FIELD } from "./CurrencySwitcherOptions";

/* Options for the currencyNote block. */
const CurrencyNoteOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => updateBlock("options", { ...options, [key]: value });

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Wording</label>
					<textarea
						rows={2}
						className={FIELD}
						placeholder="Use the store-wide wording"
						value={options?.text ?? ""}
						onChange={(ev) => setOption("text", ev.target.value)}
					/>
					<p className="text-[11px] text-gray-400">
						<code className="rounded bg-gray-100 px-1">{"{display}"}</code> is the
						currency being shown,{" "}
						<code className="rounded bg-gray-100 px-1">{"{base}"}</code> the one
						you are paid in. Left empty, the wording from the Currencies screen
						is used.
					</p>
				</div>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showIcon !== false}
						onChange={(ev) => setOption("showIcon", ev.target.checked)}
					/>
					Show the information icon
				</label>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Icon size</label>
					<input
						type="number"
						className={FIELD}
						value={options?.iconSize ?? 14}
						onChange={(ev) => setOption("iconSize", ev.target.value)}
					/>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default CurrencyNoteOptions;
