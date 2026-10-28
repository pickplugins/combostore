"use client";

import React from "react";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import { FIELD } from "./QuoteButtonOptions";

/*
	Options for the quoteList block.

	Which fields the form asks for, and whether they are required, is a
	store-wide decision rather than a property of this block - two copies of
	the form asking for different things would produce two shapes of request
	in one inbox. Those live on the Quotes screen; this panel holds wording
	and the parts that are genuinely about this placement.
*/
const QuoteListOptions = (props) => {

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

				<Link
					href="/dashboard/quotes"
					target="_blank"
					className="inline-flex w-fit items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand">
					<IconExternalLink size={13} />
					Form fields and wording
				</Link>

				{text("heading", "Heading")}
				{text("submitLabel", "Submit button")}
				{text("emptyText", "When the list is empty")}
				{text("emptyLinkLabel", "Empty-state link text")}
				{text("emptyLinkUrl", "Empty-state link url", "/")}

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showNotes !== false}
						onChange={(ev) => setOption("showNotes", ev.target.checked)}
					/>
					A note box on each line
				</label>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showPrices === true}
						onChange={(ev) => setOption("showPrices", ev.target.checked)}
					/>
					Show catalogue prices
				</label>
				<p className="text-[11px] text-gray-400">
					These are the listed prices, not the quote. Showing them on a list of
					quote-only products reads as a price the shopper has been given.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default QuoteListOptions;
