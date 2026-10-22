"use client";

import React from "react";
import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import IconPicker from "../../../components/IconPicker";

/*
	The options panel for the pointsBadge block.

	ElementOptions renders this for the selected block and passes the same props
	a core panel gets: `options`, `cssSelectors` and `updateBlock`. `updateBlock`
	takes a top-level block key and its new value, so an option change rewrites
	the whole options object rather than one field.

	Mounting <CssSelectors> is what gives the block the per-selector class
	editor every core element has. Without it an extension's block can only be
	styled by whatever this panel chooses to expose.

	The field classes are marked important because globals.css styles `input` and
	`select` in unlayered rules that otherwise win - the same reason the core
	panels do it.
*/
const FIELD =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const PointsBadgeOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => {
		updateBlock("options", { ...options, [key]: value });
	};

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

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Suffix</label>
					<input
						type="text"
						className={FIELD}
						value={options?.suffix ?? ""}
						onChange={(ev) => setOption("suffix", ev.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Points per unit</label>
					<input
						type="number"
						step="0.1"
						className={FIELD}
						value={options?.rate ?? 1}
						onChange={(ev) => setOption("rate", ev.target.value)}
					/>
				</div>

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
					<label className="text-xs font-medium text-gray-600">Icon Size</label>
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

export default PointsBadgeOptions;
