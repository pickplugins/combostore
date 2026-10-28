"use client";

import React from "react";
import Link from "next/link";
import { IconExternalLink, IconAlertTriangle } from "@tabler/icons-react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import IconPicker from "../../../components/IconPicker";
import { useCountdownStore } from "../lib/store";

/*
	Options for the countdown block.

	When a campaign ends, and what happens then, belongs to the campaign and
	not to this block - a sale shown in four places should not need its end
	date typing four times, and four slightly different end dates is exactly
	what that produces. So this panel picks a campaign and styles it, and
	links to the screen that owns the rest.

	The field classes are marked important because globals.css styles
	`input` and `select` in unlayered rules that otherwise win, the same
	reason the core panels do it.
*/
export const FIELD =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/** Shared by both blocks' panels - the one thing they genuinely have in common. */
export const CampaignPicker = ({ value, onChange }) => {

	const campaigns = useCountdownStore((s) => s.settings.campaigns);

	const missing = value && !campaigns.some((c) => c.id === value);

	return (
		<div className="flex flex-col gap-2">
			<label className="text-xs font-medium text-gray-600">Campaign</label>

			<select
				className={FIELD}
				value={value ?? ""}
				onChange={(ev) => onChange(ev.target.value)}>
				<option value="">Choose a campaign...</option>
				{campaigns.map((c) => (
					<option key={c.id} value={c.id}>
						{c.label || c.id}{c.enabled === false ? " (off)" : ""}
					</option>
				))}
			</select>

			{/* A campaign deleted after the block was placed leaves a block
			    that renders nothing, with nothing on screen to say why. */}
			{missing && (
				<p className="inline-flex items-start gap-1 text-[11px] text-amber-700">
					<IconAlertTriangle size={13} className="mt-0.5 shrink-0" />
					That campaign no longer exists, so this block shows nothing. Pick
					another.
				</p>
			)}

			{campaigns.length === 0 && (
				<p className="text-[11px] text-gray-400">
					No campaigns yet. Make one first, or this block has nothing to count to.
				</p>
			)}

			<Link
				href="/dashboard/countdowns"
				target="_blank"
				className="inline-flex w-fit items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand">
				<IconExternalLink size={13} />
				Manage campaigns
			</Link>
		</div>
	);
};

const CountdownOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => updateBlock("options", { ...options, [key]: value });

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<CampaignPicker
					value={options?.campaignId}
					onChange={(value) => setOption("campaignId", value)}
				/>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Shape</label>
					<select
						className={FIELD}
						value={options?.layout ?? "boxes"}
						onChange={(ev) => setOption("layout", ev.target.value)}>
						<option value="boxes">Boxes</option>
						<option value="inline">Inline, colon separated</option>
						<option value="compact">One line of text</option>
					</select>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Text in front</label>
					<input
						type="text"
						className={FIELD}
						placeholder="Ends in"
						value={options?.prefix ?? ""}
						onChange={(ev) => setOption("prefix", ev.target.value)}
					/>
				</div>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showDays !== false}
						onChange={(ev) => setOption("showDays", ev.target.checked)}
					/>
					Show days
				</label>
				<p className="-mt-1 text-[11px] text-gray-400">
					Off, the days are rolled into the hours — a three-day sale reads as
					72 hours, not eight.
				</p>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showSeconds !== false}
						onChange={(ev) => setOption("showSeconds", ev.target.checked)}
					/>
					Show seconds
				</label>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showLabels !== false}
						onChange={(ev) => setOption("showLabels", ev.target.checked)}
					/>
					Show unit labels
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
						value={options?.iconSize ?? 15}
						onChange={(ev) => setOption("iconSize", ev.target.value)}
					/>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default CountdownOptions;
