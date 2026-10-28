"use client";

import React from "react";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import IconPicker from "../../../components/IconPicker";

/*
	Options for the quickViewButton block.

	What the modal contains is not a per-block setting - there is one modal
	for the whole site - so this panel holds the trigger's own wording and
	look, and links to the screen that owns the rest.

	The field classes are marked important because globals.css styles `input`
	and `select` in unlayered rules that otherwise win, the same reason the
	core panels do it.
*/
const FIELD =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const QuickViewButtonOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => updateBlock("options", { ...options, [key]: value });

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<Link
					href="/dashboard/quick-view"
					target="_blank"
					className="inline-flex w-fit items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand">
					<IconExternalLink size={13} />
					What the modal shows
				</Link>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Label</label>
					<input
						type="text"
						className={FIELD}
						placeholder="Use the store-wide wording"
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
					Show the label
				</label>
				<p className="-mt-1 text-[11px] text-gray-400">
					Unchecked leaves the icon alone, and the label becomes its accessible name.
				</p>

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

export default QuickViewButtonOptions;
