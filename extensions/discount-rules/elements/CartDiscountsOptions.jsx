"use client";

import React from "react";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

import CssSelectors from "../../../components/PageBuilder/CssSelectors";
import IconPicker from "../../../components/IconPicker";

/*
	The options panel for the cartDiscounts block.

	ElementOptions renders this for the selected block with the props a core
	panel gets: `options`, `cssSelectors` and `updateBlock`. `updateBlock`
	replaces a top-level block key, so an option change rewrites the whole
	options object rather than one field.

	Only the wording lives here. Which discounts exist is not a per-block
	setting - the same rules price every cart - so the panel links to the
	screen that owns them instead of duplicating the builder.

	The field classes are marked important because globals.css styles `input`
	and `select` in unlayered rules that otherwise win, the same reason the
	core panels do it.
*/
const FIELD =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const CartDiscountsOptions = (props) => {

	const updateBlock = props?.updateBlock;
	const options = props?.options ?? {};
	const cssSelectors = props?.cssSelectors;

	const setOption = (key, value) => {
		updateBlock("options", { ...options, [key]: value });
	};

	return (
		<div className="px-3">
			<div className="flex flex-col gap-3">

				<Link
					href="/dashboard/discount-rules"
					target="_blank"
					className="inline-flex w-fit items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand">
					<IconExternalLink size={13} />
					Manage discount rules
				</Link>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Heading</label>
					<input
						type="text"
						className={FIELD}
						value={options?.heading ?? ""}
						onChange={(ev) => setOption("heading", ev.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Free shipping wording</label>
					<input
						type="text"
						className={FIELD}
						value={options?.freeShippingText ?? ""}
						onChange={(ev) => setOption("freeShippingText", ev.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">When nothing qualifies</label>
					<input
						type="text"
						className={FIELD}
						placeholder="Leave empty to hide the block"
						value={options?.emptyText ?? ""}
						onChange={(ev) => setOption("emptyText", ev.target.value)}
					/>
					<p className="text-[11px] text-gray-400">
						Empty hides the block on carts with no discount, which is most of them.
					</p>
				</div>

				<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
					<input
						type="checkbox"
						checked={options?.showTotal !== false}
						onChange={(ev) => setOption("showTotal", ev.target.checked)}
					/>
					Show a total savings row
				</label>

				{options?.showTotal !== false && (
					<div className="flex flex-col gap-2">
						<label className="text-xs font-medium text-gray-600">Total row label</label>
						<input
							type="text"
							className={FIELD}
							value={options?.totalLabel ?? ""}
							onChange={(ev) => setOption("totalLabel", ev.target.value)}
						/>
					</div>
				)}

				<div className="flex flex-col gap-2">
					<label className="text-xs font-medium text-gray-600">Heading icon</label>
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
						value={options?.iconSize ?? 14}
						onChange={(ev) => setOption("iconSize", ev.target.value)}
					/>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>
		</div>
	);
};

export default CartDiscountsOptions;
