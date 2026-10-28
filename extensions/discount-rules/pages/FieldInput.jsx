"use client";

import React from "react";
import { IconPlus, IconX } from "@tabler/icons-react";

import { DAY_NAMES } from "../lib/schema";

/*
	One input per field descriptor from lib/schema.js.

	This is what keeps the builder free of a branch per condition and action
	type: a new entry in the catalogue declares `fields`, and its inputs appear
	here. Both the condition rows and the action panel render through it, so a
	`target` picker looks and behaves the same whether it is selecting what to
	test or what to discount.

	Form controls are marked important because globals.css styles `input` and
	`select` in unlayered rules that otherwise win - the same reason the core
	settings and page-builder panels do it.
*/

export const FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const CHIP =
	"inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-700";

const MINI_BUTTON =
	"inline-flex items-center gap-1 rounded-md !border !border-gray-300 !bg-white !px-2 !py-1 !text-[11px] !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand";

/** A list field edited as chips plus an add box. */
function ListField({ value, onChange, placeholder, numeric }) {

	const list = Array.isArray(value) ? value : [];
	const [draft, setDraft] = React.useState("");

	const commit = () => {
		/* One box accepts a paste of several, because that is how a merchant
		   arrives with ids: copied out of a spreadsheet, comma separated. */
		const added = draft.split(",").map((s) => s.trim()).filter(Boolean)
			.map((s) => (numeric && /^\d+$/.test(s) ? Number(s) : s));
		if (added.length === 0) return;
		const next = [...list];
		for (const item of added) {
			if (!next.some((v) => String(v) === String(item))) next.push(item);
		}
		onChange(next);
		setDraft("");
	};

	return (
		<div className="flex flex-col gap-1.5">
			{list.length > 0 && (
				<div className="flex flex-wrap gap-1">
					{list.map((item) => (
						<span key={String(item)} className={CHIP}>
							{String(item)}
							<IconX
								size={11}
								className="cursor-pointer text-gray-400 hover:text-red-500"
								onClick={() => onChange(list.filter((v) => String(v) !== String(item)))}
							/>
						</span>
					))}
				</div>
			)}
			<div className="flex gap-1">
				<input
					type="text"
					className={`${FIELD} w-full`}
					placeholder={placeholder}
					value={draft}
					onChange={(ev) => setDraft(ev.target.value)}
					/* Enter adds rather than submitting anything, because this sits
					   inside the dashboard shell and a stray submit reloads it. */
					onKeyDown={(ev) => {
						if (ev.key === "Enter") { ev.preventDefault(); commit(); }
					}}
				/>
				<button type="button" className={MINI_BUTTON} onClick={commit}>
					<IconPlus size={12} /> Add
				</button>
			</div>
		</div>
	);
}

/** The "applies to" picker, shared by every item-scoped condition and action. */
function TargetField({ value, onChange }) {

	const target = value ?? { mode: "all" };
	const set = (patch) => onChange({ ...target, ...patch });

	return (
		<div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-gray-50/60 p-2">

			<select
				className={`${FIELD} w-full`}
				value={target.mode ?? "all"}
				onChange={(ev) => set({ mode: ev.target.value })}>
				<option value="all">Every item in the cart</option>
				<option value="products">Only these products</option>
				<option value="categories">Only these categories</option>
				<option value="tags">Only these tags</option>
			</select>

			{target.mode === "products" && (
				<ListField
					numeric
					value={target.products}
					onChange={(v) => set({ products: v })}
					placeholder="Product ids, comma separated"
				/>
			)}

			{target.mode === "categories" && (
				<ListField
					value={target.categories}
					onChange={(v) => set({ categories: v })}
					placeholder="Category slugs, comma separated"
				/>
			)}

			{target.mode === "tags" && (
				<ListField
					value={target.tags}
					onChange={(v) => set({ tags: v })}
					placeholder="Tag slugs, comma separated"
				/>
			)}

			<div className="flex flex-col gap-1">
				<span className="text-[11px] text-gray-500">Never discount these products</span>
				<ListField
					numeric
					value={target.exclude}
					onChange={(v) => set({ exclude: v })}
					placeholder="Product ids to exclude"
				/>
			</div>

		</div>
	);
}

/** The quantity ladder for the tiered action. */
function TiersField({ value, onChange }) {

	const tiers = Array.isArray(value) ? value : [];

	const update = (i, patch) =>
		onChange(tiers.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));

	return (
		<div className="flex flex-col gap-1.5">

			{tiers.length === 0 && (
				<p className="text-[11px] text-gray-400">No tiers yet - nothing will be discounted.</p>
			)}

			{tiers.map((tier, i) => (
				<div key={i} className="flex items-center gap-1.5">
					<span className="text-[11px] text-gray-500">from</span>
					<input
						type="number"
						className={`${FIELD} w-16`}
						value={tier?.minQty ?? 0}
						onChange={(ev) => update(i, { minQty: ev.target.value })}
					/>
					<span className="text-[11px] text-gray-500">units, take</span>
					<input
						type="number"
						className={`${FIELD} w-16`}
						value={tier?.value ?? 0}
						onChange={(ev) => update(i, { value: ev.target.value })}
					/>
					<select
						className={`${FIELD} w-24`}
						value={tier?.kind ?? "percent"}
						onChange={(ev) => update(i, { kind: ev.target.value })}>
						<option value="percent">percent</option>
						<option value="fixed">fixed</option>
					</select>
					<IconX
						size={14}
						className="cursor-pointer text-gray-400 hover:text-red-500"
						onClick={() => onChange(tiers.filter((_, idx) => idx !== i))}
					/>
				</div>
			))}

			<button
				type="button"
				className={`${MINI_BUTTON} w-fit`}
				onClick={() => onChange([...tiers, { minQty: 0, kind: "percent", value: 0 }])}>
				<IconPlus size={12} /> Add tier
			</button>

			<p className="text-[11px] text-gray-400">
				Only the highest tier the cart reaches is applied - they do not add up.
			</p>

		</div>
	);
}

/**
 * Render one field.
 *
 * `onlyWhen` lets a descriptor hide itself against the rest of the object it
 * belongs to - the second operand of a `between` comparison is the only user
 * so far, and a visible "and" box beside "is at least" reads as a bug.
 */
const FieldInput = ({ field, source, onChange }) => {

	if (field?.onlyWhen) {
		for (const [key, expected] of Object.entries(field.onlyWhen)) {
			if (source?.[key] !== expected) return null;
		}
	}

	const value = source?.[field.key];
	const set = (v) => onChange(field.key, v);

	const label = (
		<span className="text-[11px] font-medium text-gray-500">{field.label}</span>
	);

	const hint = field.hint
		? <span className="text-[11px] text-gray-400">{field.hint}</span>
		: null;

	switch (field.kind) {

		case "number":
			return (
				<label className="flex flex-col gap-1">
					{label}
					<div className="flex items-center gap-1">
						<input
							type="number"
							step="any"
							className={`${FIELD} w-24`}
							value={value ?? ""}
							onChange={(ev) => set(ev.target.value)}
						/>
						{field.suffix && <span className="text-[11px] text-gray-500">{field.suffix}</span>}
					</div>
					{hint}
				</label>
			);

		case "text":
			return (
				<label className="flex flex-col gap-1">
					{label}
					<input
						type="text"
						className={`${FIELD} w-44`}
						value={value ?? ""}
						onChange={(ev) => set(ev.target.value)}
					/>
					{hint}
				</label>
			);

		case "select":
			return (
				<label className="flex flex-col gap-1">
					{label}
					<select
						className={`${FIELD} w-44`}
						value={value ?? field.options?.[0]?.value ?? ""}
						onChange={(ev) => set(ev.target.value)}>
						{(field.options ?? []).map((o) => (
							<option key={o.value} value={o.value}>{o.label}</option>
						))}
					</select>
					{hint}
				</label>
			);

		case "toggle":
			return (
				<label className="flex items-center gap-2 pt-4">
					<input
						type="checkbox"
						checked={value !== false}
						onChange={(ev) => set(ev.target.checked)}
					/>
					<span className="text-[11px] font-medium text-gray-600">{field.label}</span>
				</label>
			);

		case "date":
			return (
				<label className="flex flex-col gap-1">
					{label}
					<input
						type="date"
						className={`${FIELD} w-36`}
						value={value ?? ""}
						onChange={(ev) => set(ev.target.value)}
					/>
				</label>
			);

		case "time":
			return (
				<label className="flex flex-col gap-1">
					{label}
					<input
						type="time"
						className={`${FIELD} w-28`}
						value={value ?? ""}
						onChange={(ev) => set(ev.target.value)}
					/>
				</label>
			);

		case "days": {
			const days = Array.isArray(value) ? value.map(Number) : [];
			return (
				<div className="flex flex-col gap-1">
					{label}
					<div className="flex flex-wrap gap-1">
						{DAY_NAMES.map((name, d) => {
							const on = days.includes(d);
							return (
								<button
									key={d}
									type="button"
									onClick={() => set(on ? days.filter((x) => x !== d) : [...days, d].sort())}
									className={`!rounded-md !border !px-2 !py-1 !text-[11px] !font-medium !shadow-none transition-colors ${on
										? '!border-brand !bg-brand/10 !text-brand'
										: '!border-gray-300 !bg-white !text-gray-500 hover:!bg-gray-50'}`}>
									{name}
								</button>
							);
						})}
					</div>
				</div>
			);
		}

		case "idList":
			return (
				<div className="flex min-w-56 flex-col gap-1">
					{label}
					<ListField numeric value={value} onChange={set} placeholder="Product ids, comma separated" />
				</div>
			);

		case "slugList":
			return (
				<div className="flex min-w-56 flex-col gap-1">
					{label}
					<ListField value={value} onChange={set} placeholder="Comma separated" />
				</div>
			);

		case "target":
			return (
				<div className="flex min-w-64 flex-col gap-1">
					{label}
					<TargetField value={value} onChange={set} />
				</div>
			);

		case "tiers":
			return (
				<div className="flex w-full flex-col gap-1">
					{label}
					<TiersField value={value} onChange={set} />
				</div>
			);

		default:
			return null;
	}
};

export default FieldInput;
