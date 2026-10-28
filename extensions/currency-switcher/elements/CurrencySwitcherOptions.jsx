"use client";

import React from "react";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";

/*
	Options for the currencySwitcher block.

	Which currencies exist and what they are worth is not a per-block
	setting - two switchers offering different currencies would be a bug the
	merchant could not see coming - so this panel holds only how this one
	looks, and links to the screen that owns the rest.

	The field classes are marked important because globals.css styles
	`input` and `select` in unlayered rules that otherwise win, the same
	reason the core panels do it.
*/
export const FIELD =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const CurrencySwitcherOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => updateBlock("options", { ...options, [key]: value });

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<Link
					href="/dashboard/currencies"
					target="_blank"
					className="inline-flex w-fit items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand">
					<IconExternalLink size={13} />
					Currencies and rates
				</Link>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Style</label>
					<select
						className={FIELD}
						value={options?.variant ?? "dropdown"}
						onChange={(ev) => setOption("variant", ev.target.value)}>
						<option value="dropdown">Dropdown</option>
						<option value="inline">All of them in a row</option>
					</select>
					<p className="text-[11px] text-gray-400">
						A row is quicker to use and only fits two or three. A dropdown holds
						as many as you like.
					</p>
				</div>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showSymbol !== false}
						onChange={(ev) => setOption("showSymbol", ev.target.checked)}
					/>
					Show the symbol next to the code
				</label>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showNote === true}
						onChange={(ev) => setOption("showNote", ev.target.checked)}
					/>
					Show the charged-in note under it
				</label>
				<p className="-mt-1 text-[11px] text-gray-400">
					Off in a tight header. Put the separate <strong>Currency Note</strong>{" "}
					block on the cart and the checkout instead, where it matters most.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default CurrencySwitcherOptions;
