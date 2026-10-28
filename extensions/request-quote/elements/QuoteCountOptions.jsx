"use client";

import React from "react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import IconPicker from "../../../components/IconPicker";
import { FIELD } from "./QuoteButtonOptions";

/* Options for the quoteCount badge. Where it links is the store-wide quote
   page url on the Quotes screen, not a per-block setting - a badge pointing
   somewhere the quote list is not would be a dead end. */
const QuoteCountOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => updateBlock("options", { ...options, [key]: value });

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Label</label>
					<input
						type="text"
						className={FIELD}
						value={options?.label ?? ""}
						onChange={(ev) => setOption("label", ev.target.value)}
					/>
				</div>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showLabel !== false}
						onChange={(ev) => setOption("showLabel", ev.target.checked)}
					/>
					Show the label beside the icon
				</label>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.hideWhenEmpty === true}
						onChange={(ev) => setOption("hideWhenEmpty", ev.target.checked)}
					/>
					Hide while the list is empty
				</label>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Icon</label>
					<div>
						<IconPicker
							allowReset={true}
							value={''}
							position={`right`}
							label={`Choose`}
							labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'}
							onOptionsChoose={(args) => setOption("icon", args)}
						/>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Icon size</label>
					<input
						type="number"
						className={FIELD}
						value={options?.iconSize ?? 20}
						onChange={(ev) => setOption("iconSize", ev.target.value)}
					/>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default QuoteCountOptions;
