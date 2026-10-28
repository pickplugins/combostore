"use client";

import React from "react";
import {
	IconPlus, IconTrash, IconChevronUp, IconChevronDown, IconDeviceFloppy,
	IconSparkles, IconCloudCheck, IconAlertTriangle, IconFlask,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";

import { useQuoteStore } from "../lib/store";
import { SCOPES, SCOPE_OPTIONS, MODES, quoteModeFor, scopeSummary } from "../lib/rules";
import { blankRule, STARTER_RULES, FORM_FIELDS, FIELD_STATES } from "../lib/defaults";
import { PRIMARY_BUTTON, GHOST_BUTTON, FIELD, SMALL_FIELD, CARD } from "./ui";

/*
	The rules, the wording and the form.

	Rules are first-match-wins, so the order on screen is the order of
	evaluation and moving a row is a real edit, not a cosmetic one. That is
	why each row shows its position and the arrows sit next to it rather than
	in a menu: a merchant writing "all of Machinery, except these three" has
	to be able to see that the exception is above the general rule.
*/

const QuoteSettings = () => {

	const { token, settings: storeSettings, addNotification } = useCounterStore();

	const settings = useQuoteStore((s) => s.settings);
	const saving = useQuoteStore((s) => s.saving);
	const source = useQuoteStore((s) => s.source);
	const {
		hydrateFromSettings, setSettings, addRule, updateRule, removeRule, moveRule, saveSettings,
	} = useQuoteStore();

	React.useEffect(() => {
		if (storeSettings) hydrateFromSettings(storeSettings);
	}, [storeSettings, hydrateFromSettings]);

	const [test, setTest] = React.useState({ id: "", categories: "", tags: "", price: "", inStock: true });

	/* The real matcher, on a made-up product. Checking a rule by loading a
	   product page means checking it against whatever that page happens to
	   be; this lets the awkward cases be tried deliberately. */
	const verdict = React.useMemo(() => {
		const product = {
			id: test.id || "0",
			categories: test.categories.split(",").map((s) => s.trim()).filter(Boolean),
			tags: test.tags.split(",").map((s) => s.trim()).filter(Boolean),
			price: test.price === "" ? undefined : test.price,
			stock_status: test.inStock ? "instock" : "outofstock",
		};
		return quoteModeFor(product, settings);
	}, [test, settings]);

	async function onSave() {
		const result = await saveSettings(token);
		addNotification?.({
			type: result.ok ? "success" : "error",
			title: result.ok ? "Settings saved" : "Not saved",
			content: result.message,
		});
	}

	return (
		<div className="flex flex-col gap-4">

			{source !== "settings" && (
				<div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
					<IconAlertTriangle size={17} className="mt-0.5 shrink-0" />
					<div>
						<div className="font-semibold">These settings have not come from the store.</div>
						<div className="mt-0.5 text-amber-700">
							Either nothing has been saved yet, or the store is not keeping the
							<code className="mx-1 rounded bg-amber-100 px-1">quoteSettings</code>
							key. Until it does, no shopper sees these rules.
						</div>
					</div>
				</div>
			)}

			{source === "settings" && (
				<div className="flex items-center gap-2 text-xs text-green-700">
					<IconCloudCheck size={15} />
					Live on the storefront.
				</div>
			)}

			{/* ---------------- rules ---------------- */}

			<div className="flex items-center justify-between">
				<div>
					<h3 className="text-sm font-semibold text-gray-900">Which products are quoted</h3>
					<p className="text-xs text-gray-500">
						The first rule that matches a product decides. Nothing is quoted until a rule says so.
					</p>
				</div>
				<div className="flex gap-2">
					{settings.rules.length === 0 && (
						<button
							type="button"
							className={GHOST_BUTTON}
							onClick={() => STARTER_RULES.forEach((r) => addRule({ ...r, id: blankRule().id }))}>
							<IconSparkles size={15} /> Start with examples
						</button>
					)}
					<button type="button" className={PRIMARY_BUTTON} onClick={() => addRule(blankRule())}>
						<IconPlus size={15} /> Add rule
					</button>
				</div>
			</div>

			{settings.rules.length === 0 && (
				<div className={`${CARD} py-8 text-center text-sm text-gray-500`}>
					No rules yet, so every product is bought the usual way.
				</div>
			)}

			{settings.rules.map((rule, index) => {
				const scope = SCOPES[rule.scope];
				return (
					<div key={rule.id} className={`${CARD} flex flex-col gap-3`}>

						<div className="flex flex-wrap items-center gap-2">
							<span className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-500">
								{index + 1}
							</span>

							<input
								type="text"
								placeholder="Name this rule"
								className={`${FIELD} flex-1 min-w-48`}
								value={rule.label ?? ""}
								onChange={(ev) => updateRule(rule.id, { label: ev.target.value })}
							/>

							<label className="flex items-center gap-1.5 text-xs text-gray-600">
								<input
									type="checkbox"
									checked={rule.enabled !== false}
									onChange={(ev) => updateRule(rule.id, { enabled: ev.target.checked })}
								/>
								On
							</label>

							<button type="button" className={GHOST_BUTTON} disabled={index === 0}
								onClick={() => moveRule(rule.id, -1)} aria-label="Move up">
								<IconChevronUp size={15} />
							</button>
							<button type="button" className={GHOST_BUTTON} disabled={index === settings.rules.length - 1}
								onClick={() => moveRule(rule.id, 1)} aria-label="Move down">
								<IconChevronDown size={15} />
							</button>
							<button type="button" className={`${GHOST_BUTTON} !text-red-600 hover:!bg-red-50`}
								onClick={() => removeRule(rule.id)} aria-label="Delete">
								<IconTrash size={15} />
							</button>
						</div>

						<div className="flex flex-wrap items-end gap-3">

							<Labelled label="Applies to">
								<select
									className={FIELD}
									value={rule.scope}
									onChange={(ev) => updateRule(rule.id, { scope: ev.target.value })}>
									{SCOPE_OPTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
								</select>
							</Labelled>

							{/* Rendered from the scope's own `fields`, so a scope added
							    to lib/rules.js gets its inputs with no change here. */}
							{(scope?.fields ?? []).map((field) => (
								<Labelled key={field.key} label={field.label}>
									{field.kind === "number" ? (
										<input
											type="number"
											className={`${FIELD} w-32`}
											value={rule[field.key] ?? 0}
											onChange={(ev) => updateRule(rule.id, { [field.key]: ev.target.value })}
										/>
									) : (
										<input
											type="text"
											placeholder={field.kind === "idList" ? "12, 48, 97" : "machinery, bulk"}
											className={`${FIELD} w-64`}
											value={(rule[field.key] ?? []).join(", ")}
											onChange={(ev) => updateRule(rule.id, {
												[field.key]: ev.target.value.split(",").map((s) => s.trim()).filter(Boolean),
											})}
										/>
									)}
								</Labelled>
							))}

							<Labelled label="Then">
								<select
									className={FIELD}
									value={rule.mode}
									onChange={(ev) => updateRule(rule.id, { mode: ev.target.value })}>
									{Object.values(MODES).map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
								</select>
							</Labelled>

							{rule.mode === "only" && (
								<label className="flex items-center gap-1.5 pb-2 text-xs text-gray-600">
									<input
										type="checkbox"
										checked={rule.hidePrice === true}
										onChange={(ev) => updateRule(rule.id, { hidePrice: ev.target.checked })}
									/>
									Hide the price
								</label>
							)}

							{rule.mode !== "off" && (
								<Labelled label="Button wording">
									<input
										type="text"
										placeholder="Use the default"
										className={`${FIELD} w-56`}
										value={rule.buttonLabel ?? ""}
										onChange={(ev) => updateRule(rule.id, { buttonLabel: ev.target.value })}
									/>
								</Labelled>
							)}

						</div>

						<p className="text-xs text-gray-400">
							{rule.mode === "off"
								? `Leaves ${scopeSummary(rule)} alone.`
								: `${scopeSummary(rule)} → ${MODES[rule.mode]?.label.toLowerCase()}.`}
						</p>

					</div>
				);
			})}

			{/* ---------------- tester ---------------- */}

			<div className={`${CARD} flex flex-col gap-3`}>
				<h3 className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
					<IconFlask size={16} /> Try a product
				</h3>

				<div className="flex flex-wrap items-end gap-3">
					<Labelled label="Product id">
						<input type="text" className={`${SMALL_FIELD} w-24`} value={test.id}
							onChange={(ev) => setTest({ ...test, id: ev.target.value })} />
					</Labelled>
					<Labelled label="Categories">
						<input type="text" placeholder="machinery" className={`${SMALL_FIELD} w-48`} value={test.categories}
							onChange={(ev) => setTest({ ...test, categories: ev.target.value })} />
					</Labelled>
					<Labelled label="Tags">
						<input type="text" className={`${SMALL_FIELD} w-40`} value={test.tags}
							onChange={(ev) => setTest({ ...test, tags: ev.target.value })} />
					</Labelled>
					<Labelled label="Price">
						<input type="text" placeholder="blank = no price" className={`${SMALL_FIELD} w-32`} value={test.price}
							onChange={(ev) => setTest({ ...test, price: ev.target.value })} />
					</Labelled>
					<label className="flex items-center gap-1.5 pb-1.5 text-xs text-gray-600">
						<input type="checkbox" checked={test.inStock}
							onChange={(ev) => setTest({ ...test, inStock: ev.target.checked })} />
						In stock
					</label>
				</div>

				<div className={`rounded-xl border px-4 py-3 text-sm ${verdict.mode === "off" ? "border-gray-200 bg-gray-50 text-gray-600" : "border-[#634FE5]/30 bg-[#634FE5]/5 text-gray-800"}`}>
					<span className="font-semibold">
						{verdict.mode === "off" && "Bought normally"}
						{verdict.mode === "also" && "Quote offered alongside Add to Cart"}
						{verdict.mode === "only" && `Quote only${verdict.hidePrice ? ", price hidden" : ""}`}
					</span>
					<span className="text-gray-500"> — {verdict.reason}</span>
				</div>
			</div>

			{/* ---------------- wording and form ---------------- */}

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

				<div className={`${CARD} flex flex-col gap-3`}>
					<h3 className="text-sm font-semibold text-gray-900">Wording and links</h3>

					<Labelled label="Quote list page">
						<input type="text" className={FIELD} value={settings.quotePageUrl ?? ""}
							onChange={(ev) => setSettings({ quotePageUrl: ev.target.value })} />
					</Labelled>
					<p className="-mt-1 text-[11px] text-gray-400">
						Where the buttons and the badge send people. Put the Quote List block on
						that page, or they arrive nowhere.
					</p>

					<Labelled label="Default button (quote only)">
						<input type="text" className={FIELD} value={settings.buttonLabel ?? ""}
							onChange={(ev) => setSettings({ buttonLabel: ev.target.value })} />
					</Labelled>

					<Labelled label="Default button (alongside buying)">
						<input type="text" className={FIELD} value={settings.addLabel ?? ""}
							onChange={(ev) => setSettings({ addLabel: ev.target.value })} />
					</Labelled>

					<Labelled label="Shown in place of a hidden price">
						<input type="text" className={FIELD} value={settings.hiddenPriceText ?? ""}
							onChange={(ev) => setSettings({ hiddenPriceText: ev.target.value })} />
					</Labelled>

					<Labelled label="Reply time">
						<input type="text" className={FIELD} value={settings.replyTime ?? ""}
							onChange={(ev) => setSettings({ replyTime: ev.target.value })} />
					</Labelled>

					<Labelled label="Thank-you heading">
						<input type="text" className={FIELD} value={settings.successTitle ?? ""}
							onChange={(ev) => setSettings({ successTitle: ev.target.value })} />
					</Labelled>

					<Labelled label="Thank-you message">
						<textarea rows={2} className={FIELD} value={settings.successMessage ?? ""}
							onChange={(ev) => setSettings({ successMessage: ev.target.value })} />
					</Labelled>

					<label className="flex items-center gap-2 text-sm text-gray-700">
						<input
							type="checkbox"
							checked={settings.requireLogin === true}
							onChange={(ev) => setSettings({ requireLogin: ev.target.checked })}
						/>
						Only signed-in customers may request a quote
					</label>
				</div>

				<div className={`${CARD} flex flex-col gap-3`}>
					<h3 className="text-sm font-semibold text-gray-900">The request form</h3>
					<p className="-mt-1 text-xs text-gray-500">
						Asking for less gets more requests; asking for more gets better ones.
					</p>

					{FORM_FIELDS.map((field) => (
						<div key={field.key} className="flex items-center justify-between gap-3">
							<span className="text-sm text-gray-700">{field.label}</span>
							{field.locked ? (
								<span className="text-xs text-gray-400">Always required</span>
							) : (
								<select
									className={SMALL_FIELD}
									value={settings.fields?.[field.key] ?? "optional"}
									onChange={(ev) => setSettings({
										fields: { ...settings.fields, [field.key]: ev.target.value },
									})}>
									{FIELD_STATES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
								</select>
							)}
						</div>
					))}

					<p className="text-[11px] leading-relaxed text-gray-400">
						Whatever is set here, a request has to carry an email address or a phone
						number - a quote nobody can reply to is not worth collecting.
					</p>
				</div>

			</div>

			<div className="sticky bottom-4 flex justify-end">
				<button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={onSave}>
					<IconDeviceFloppy size={16} />
					{saving ? "Saving..." : "Save settings"}
				</button>
			</div>

		</div>
	);
};

const Labelled = ({ label, children }) => (
	<div className="flex flex-col gap-1.5">
		<label className="text-xs font-medium text-gray-600">{label}</label>
		{children}
	</div>
);

export default QuoteSettings;
