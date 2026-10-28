"use client";

import React from "react";
import {
	IconChevronDown, IconChevronRight, IconCopy, IconTrash, IconPlus,
	IconArrowUp, IconArrowDown, IconCheck, IconX, IconAlertTriangle,
} from "@tabler/icons-react";

import { ACTIONS, ACTION_OPTIONS, CONDITIONS, CONDITION_OPTIONS } from "../lib/schema";
import { blankAction, blankCondition } from "../lib/defaults";
import FieldInput, { FIELD } from "./FieldInput";

/*
	One rule, open or folded.

	Folded it reads as a sentence - name, what it does, whether it would fire
	against the simulated cart - because a merchant scanning twenty rules for
	the one that is giving too much away is reading, not editing. Everything
	that changes the rule is behind the fold.

	`verdict` is the engine's own result for this rule against the simulator's
	cart, passed down rather than recomputed, so the card and the simulator
	can never disagree about whether a rule fired.
*/

const BUTTON =
	"inline-flex items-center gap-1 !rounded-md !border !border-gray-300 !bg-white !px-2 !py-1 !text-[11px] !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand";

const DANGER =
	"inline-flex items-center gap-1 !rounded-md !border !border-gray-300 !bg-white !px-2 !py-1 !text-[11px] !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-red-300 hover:!bg-red-50 hover:!text-red-600";

const RuleCard = (props) => {

	const rule = props?.rule;
	const verdict = props?.verdict;
	const wrapCurrency = props?.wrapCurrency ?? ((v) => String(v));
	const onChange = props?.onChange;
	const onRemove = props?.onRemove;
	const onDuplicate = props?.onDuplicate;
	const onMove = props?.onMove;

	const [open, setOpen] = React.useState(false);
	const [confirmRemove, setConfirmRemove] = React.useState(false);

	/* An armed delete disarms itself, so a stray click cannot sit waiting for
	   a second one minutes later - the same guard the settings screen uses on
	   its reset. */
	React.useEffect(() => {
		if (!confirmRemove) return;
		const timer = setTimeout(() => setConfirmRemove(false), 8000);
		return () => clearTimeout(timer);
	}, [confirmRemove]);

	const actionDef = ACTIONS[rule?.action?.type];
	const conditions = rule?.conditions ?? [];

	const setAction = (key, value) =>
		onChange({ action: { ...rule.action, [key]: value } });

	const setCondition = (id, key, value) =>
		onChange({
			conditions: conditions.map((c) => (c.id === id ? { ...c, [key]: value } : c)),
		});

	const changeConditionType = (id, type) =>
		onChange({
			conditions: conditions.map((c) => (c.id === id ? { ...blankCondition(type), id } : c)),
		});

	/* Grouped so a dropdown of fourteen reads as four short lists. */
	const conditionGroups = React.useMemo(() => {
		const out = new Map();
		for (const option of CONDITION_OPTIONS) {
			if (!out.has(option.group)) out.set(option.group, []);
			out.get(option.group).push(option);
		}
		return [...out.entries()];
	}, []);

	return (
		<div className={`rounded-xl border bg-white transition-colors ${rule?.enabled === false ? 'border-gray-200 opacity-60' : 'border-gray-200'}`}>

			{/* ---- header ---- */}
			<div className="flex items-start gap-3 p-3">

				<button
					type="button"
					className="mt-0.5 text-gray-400 hover:text-gray-700"
					onClick={() => setOpen(!open)}>
					{open ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />}
				</button>

				<div className="min-w-0 flex-1">
					<div className="flex flex-wrap items-center gap-2">
						<span className="truncate text-sm font-semibold text-gray-900">
							{rule?.title || "Untitled rule"}
						</span>

						{rule?.exclusive && (
							<span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-purple-700">
								exclusive
							</span>
						)}

						{rule?.enabled === false && (
							<span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
								off
							</span>
						)}

						{verdict?.state === "applied" && (
							<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
								<IconCheck size={11} />
								{verdict.freeShipping && verdict.amount <= 0
									? "free shipping"
									: `-${wrapCurrency(verdict.amount)}`}
							</span>
						)}
						{verdict?.state === "skipped" && (
							<span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-500">
								<IconX size={11} /> {verdict.reason}
							</span>
						)}
					</div>

					<p className="mt-0.5 truncate text-xs text-gray-500">
						{actionDef
							? actionDef.summary(rule.action, wrapCurrency)
							: <span className="text-red-500">unknown action &quot;{rule?.action?.type}&quot;</span>}
						{conditions.length > 0 && ` · ${conditions.length} condition${conditions.length === 1 ? "" : "s"} (${rule?.match === "any" ? "any" : "all"})`}
						{conditions.length === 0 && " · always"}
					</p>
				</div>

				<div className="flex shrink-0 items-center gap-1">

					<label className="mr-1 inline-flex cursor-pointer items-center gap-1 text-[11px] text-gray-500">
						<input
							type="checkbox"
							checked={rule?.enabled !== false}
							onChange={(ev) => onChange({ enabled: ev.target.checked })}
						/>
						On
					</label>

					<button type="button" className={BUTTON} title="Move up" onClick={() => onMove(-1)}>
						<IconArrowUp size={12} />
					</button>
					<button type="button" className={BUTTON} title="Move down" onClick={() => onMove(1)}>
						<IconArrowDown size={12} />
					</button>
					<button type="button" className={BUTTON} title="Duplicate" onClick={onDuplicate}>
						<IconCopy size={12} />
					</button>

					{!confirmRemove && (
						<button type="button" className={DANGER} title="Delete" onClick={() => setConfirmRemove(true)}>
							<IconTrash size={12} />
						</button>
					)}
					{confirmRemove && (
						<button
							type="button"
							className="inline-flex items-center gap-1 !rounded-md !border-0 !bg-red-600 !px-2 !py-1 !text-[11px] !font-semibold !text-white !shadow-none hover:!bg-red-700"
							onClick={onRemove}>
							<IconTrash size={12} /> Confirm
						</button>
					)}
				</div>
			</div>

			{/* ---- body ---- */}
			{open && (
				<div className="flex flex-col gap-4 border-t border-gray-100 p-4">

					<div className="flex flex-wrap gap-3">
						<label className="flex flex-col gap-1">
							<span className="text-[11px] font-medium text-gray-500">Rule name (internal)</span>
							<input
								type="text"
								className={`${FIELD} w-64`}
								value={rule?.title ?? ""}
								onChange={(ev) => onChange({ title: ev.target.value })}
							/>
						</label>

						<label className="flex flex-col gap-1">
							<span className="text-[11px] font-medium text-gray-500">Shown in the cart</span>
							<input
								type="text"
								className={`${FIELD} w-64`}
								placeholder={rule?.title || "Discount"}
								value={rule?.cartLabel ?? ""}
								onChange={(ev) => onChange({ cartLabel: ev.target.value })}
							/>
						</label>

						<label className="flex flex-col gap-1">
							<span className="text-[11px] font-medium text-gray-500">Priority</span>
							<input
								type="number"
								className={`${FIELD} w-20`}
								value={rule?.priority ?? 10}
								onChange={(ev) => onChange({ priority: ev.target.value })}
							/>
						</label>

						<label className="flex items-center gap-2 pt-5">
							<input
								type="checkbox"
								checked={rule?.exclusive === true}
								onChange={(ev) => onChange({ exclusive: ev.target.checked })}
							/>
							<span className="text-[11px] font-medium text-gray-600">
								Stop after this rule
							</span>
						</label>
					</div>

					{/* ---- conditions ---- */}
					<div className="rounded-lg border border-gray-200">
						<div className="flex items-center justify-between gap-3 border-b border-gray-100 px-3 py-2">
							<div className="flex items-center gap-2">
								<span className="text-xs font-semibold text-gray-700">Apply when</span>
								<select
									className={`${FIELD} w-28`}
									value={rule?.match ?? "all"}
									onChange={(ev) => onChange({ match: ev.target.value })}>
									<option value="all">all match</option>
									<option value="any">any match</option>
								</select>
							</div>
							<select
								className={`${FIELD} w-52`}
								value=""
								onChange={(ev) => {
									if (!ev.target.value) return;
									onChange({ conditions: [...conditions, blankCondition(ev.target.value)] });
									/* Back to the placeholder, so the same condition can be
									   added twice in a row - two price bands, two categories. */
									ev.target.value = "";
								}}>
								<option value="">+ Add a condition</option>
								{conditionGroups.map(([group, options]) => (
									<optgroup key={group} label={group}>
										{options.map((o) => (
											<option key={o.value} value={o.value}>{o.label}</option>
										))}
									</optgroup>
								))}
							</select>
						</div>

						<div className="flex flex-col gap-2 p-3">

							{conditions.length === 0 && (
								<p className="text-xs text-gray-400">
									No conditions - this rule applies to every cart.
								</p>
							)}

							{conditions.map((condition) => {
								const def = CONDITIONS[condition.type];
								const result = verdict?.conditions?.find((r) => r.condition?.id === condition.id);

								if (!def) {
									return (
										<div key={condition.id} className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2 text-xs text-amber-800">
											<IconAlertTriangle size={14} />
											Unknown condition &quot;{condition.type}&quot; - it will never match.
											<IconX
												size={14}
												className="ml-auto cursor-pointer hover:text-red-600"
												onClick={() => onChange({ conditions: conditions.filter((c) => c.id !== condition.id) })}
											/>
										</div>
									);
								}

								return (
									<div key={condition.id} className="flex flex-wrap items-start gap-2 rounded-lg border border-gray-100 bg-gray-50/60 p-2">

										{result && (
											<span className="mt-4" title={result.passed ? "Matches the test cart" : "Does not match the test cart"}>
												{result.passed
													? <IconCheck size={14} className="text-green-600" />
													: <IconX size={14} className="text-gray-300" />}
											</span>
										)}

										<label className="flex flex-col gap-1">
											<span className="text-[11px] font-medium text-gray-500">Condition</span>
											<select
												className={`${FIELD} w-52`}
												value={condition.type}
												onChange={(ev) => changeConditionType(condition.id, ev.target.value)}>
												{conditionGroups.map(([group, options]) => (
													<optgroup key={group} label={group}>
														{options.map((o) => (
															<option key={o.value} value={o.value}>{o.label}</option>
														))}
													</optgroup>
												))}
											</select>
										</label>

										{def.operators.length > 1 && (
											<label className="flex flex-col gap-1">
												<span className="text-[11px] font-medium text-gray-500">Comparison</span>
												<select
													className={`${FIELD} w-36`}
													value={condition.operator ?? def.operators[0].value}
													onChange={(ev) => setCondition(condition.id, "operator", ev.target.value)}>
													{def.operators.map((o) => (
														<option key={o.value} value={o.value}>{o.label}</option>
													))}
												</select>
											</label>
										)}

										{def.fields.map((field) => (
											<FieldInput
												key={field.key}
												field={field}
												source={condition}
												onChange={(key, value) => setCondition(condition.id, key, value)}
											/>
										))}

										<IconX
											size={14}
											className="ml-auto mt-4 cursor-pointer text-gray-400 hover:text-red-500"
											onClick={() => onChange({ conditions: conditions.filter((c) => c.id !== condition.id) })}
										/>
									</div>
								);
							})}

						</div>
					</div>

					{/* ---- action ---- */}
					<div className="rounded-lg border border-gray-200">
						<div className="flex items-center gap-2 border-b border-gray-100 px-3 py-2">
							<span className="text-xs font-semibold text-gray-700">Then</span>
							<select
								className={`${FIELD} w-64`}
								value={rule?.action?.type ?? ""}
								/* Switching type rebuilds the action from that type's
								   defaults. Keeping the old keys would leave a percent
								   rule carrying a stale `tiers` array that the next
								   reader has no reason to expect. */
								onChange={(ev) => onChange({ action: blankAction(ev.target.value) })}>
								{ACTION_OPTIONS.map((o) => (
									<option key={o.value} value={o.value}>{o.label}</option>
								))}
							</select>
						</div>

						{actionDef && (
							<div className="flex flex-wrap items-start gap-3 p-3">
								{actionDef.fields.length === 0 && (
									<p className="text-xs text-gray-400">Nothing to configure.</p>
								)}
								{actionDef.fields.map((field) => (
									<FieldInput
										key={field.key}
										field={field}
										source={rule.action}
										onChange={setAction}
									/>
								))}
							</div>
						)}
					</div>

				</div>
			)}
		</div>
	);
};

export default RuleCard;
