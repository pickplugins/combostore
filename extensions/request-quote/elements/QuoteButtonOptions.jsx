"use client";

import React from "react";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import IconPicker from "../../../components/IconPicker";

/*
	Options for the quoteButton block.

	Which products get a quote button is not a per-block setting - the same
	rules apply wherever the block is placed - so this panel holds only the
	wording and the behaviour of this instance, and links to the screen that
	owns the rules rather than duplicating them.

	The field classes are marked important because globals.css styles `input`
	and `select` in unlayered rules that otherwise win, the same reason the
	core panels do it.
*/
export const FIELD =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const QuoteButtonOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => updateBlock("options", { ...options, [key]: value });

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<Link
					href="/dashboard/quotes"
					target="_blank"
					className="inline-flex w-fit items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand">
					<IconExternalLink size={13} />
					Quote rules and inbox
				</Link>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Label</label>
					<input
						type="text"
						className={FIELD}
						placeholder="Use the wording from the rule"
						value={options?.label ?? ""}
						onChange={(ev) => setOption("label", ev.target.value)}
					/>
					<p className="text-[11px] text-gray-400">
						Left empty, the button uses the matching rule&apos;s wording, then the
						store-wide default.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">After adding</label>
					<select
						className={FIELD}
						value={options?.afterAdd ?? "stay"}
						onChange={(ev) => setOption("afterAdd", ev.target.value)}>
						<option value="stay">Stay on the product</option>
						<option value="redirect">Go to the quote list</option>
					</select>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Confirmation text</label>
					<input
						type="text"
						className={FIELD}
						value={options?.addedText ?? ""}
						onChange={(ev) => setOption("addedText", ev.target.value)}
					/>
				</div>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showQuantity === true}
						onChange={(ev) => setOption("showQuantity", ev.target.checked)}
					/>
					Ask for a quantity
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
						value={options?.iconSize ?? 16}
						onChange={(ev) => setOption("iconSize", ev.target.value)}
					/>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default QuoteButtonOptions;
