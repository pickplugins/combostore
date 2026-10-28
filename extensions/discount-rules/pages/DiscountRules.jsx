"use client";

import React from "react";
import {
	IconRosetteDiscount, IconPlus, IconDeviceFloppy, IconSparkles,
	IconAlertTriangle, IconCloudCheck, IconDeviceDesktop,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useUtilsStore } from "../../../store/useUtilsStore";
import Spinner from "../../../components/Spinner";

import { useDiscountRulesStore } from "../lib/store";
import { buildContext, evaluateRules } from "../lib/engine";
import RuleCard from "./RuleCard";
import Simulator, { blankTestItem } from "./Simulator";

/*
	The extension's dashboard screen.

	Rendered by app/dashboard/[...slug]/page.jsx, which already sits inside
	app/dashboard/layout.jsx - so the sidebar, header and shell are there and
	this draws only the page body, exactly like a core screen under
	app/dashboard/<name>/page.jsx.

	The screen holds the simulated cart and runs the engine once per render,
	then hands each rule its own slice of the result. Letting every card
	evaluate itself would run the rules once per card and, worse, would let a
	card disagree with the totals: an exclusive rule changes whether the rules
	after it fire, which no card can know on its own.
*/

const PRIMARY_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:!opacity-50";

const GHOST_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand";

const FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const DEFAULT_TEST_CART = {
	items: [
		{ id: 1001, title: "Test product", price: 800, quantity: 2, categories: ["sale"] },
		{ id: 1002, title: "Second product", price: 450, quantity: 1, categories: [] },
	],
	shippingCost: 60,
	shippingMethod: "normal",
	loggedIn: true,
	ordersCount: "",
	couponApplied: false,
	now: "",
};

const DiscountRules = () => {

	const { token, settings, addNotification } = useCounterStore();
	const { wrapCurrency } = useUtilsStore();

	const rules = useDiscountRulesStore((s) => s.rules);
	const options = useDiscountRulesStore((s) => s.options);
	const hydrated = useDiscountRulesStore((s) => s.hydrated);
	const saving = useDiscountRulesStore((s) => s.saving);
	const source = useDiscountRulesStore((s) => s.source);
	const storeError = useDiscountRulesStore((s) => s.error);

	const {
		hydrateFromSettings, hydrateLocal, addRule, updateRule, removeRule,
		duplicateRule, moveRule, setOptions, loadStarterRules, save,
	} = useDiscountRulesStore();

	const [testCart, setTestCart] = React.useState(DEFAULT_TEST_CART);

	/*
		Settings arrive asynchronously, and on a hard load of this URL they may
		never arrive at all - fetchSettings runs from the shell. The local
		mirror is adopted after a beat so the merchant is not left staring at
		an empty list, and is replaced the moment real settings land.
	*/
	React.useEffect(() => {
		if (settings) { hydrateFromSettings(settings); return; }
		const timer = setTimeout(() => hydrateLocal(), 1200);
		return () => clearTimeout(timer);
	}, [settings, hydrateFromSettings, hydrateLocal]);

	/* One engine run per render, shared by the simulator and every card. */
	const result = React.useMemo(() => {
		const when = testCart.now ? new Date(testCart.now) : new Date();

		const context = buildContext({
			items: (testCart.items ?? []).map((it) => ({
				...it,
				price: Number(it.price) || 0,
				quantity: Number(it.quantity) || 0,
			})),
			shippingCost: Number(testCart.shippingCost) || 0,
			shippingMethod: testCart.shippingMethod,
			coupon: { applied: testCart.couponApplied === true, code: "" },
			customer: {
				loggedIn: testCart.loggedIn === true,
				roles: testCart.loggedIn ? ["customer"] : [],
				/* Blank means guest, which is not the same as zero past orders -
				   the condition treats unknown as a miss. */
				ordersCount: testCart.ordersCount === "" ? null : Number(testCart.ordersCount),
			},
			now: Number.isFinite(when.getTime()) ? when : new Date(),
		});

		return evaluateRules(rules, context, options);
	}, [rules, options, testCart]);

	/* Rule id -> what happened to it, so a card can show its own verdict. */
	const verdicts = React.useMemo(() => {
		const out = {};
		for (const line of result.lines) {
			out[line.ruleId] = { state: "applied", amount: line.amount, freeShipping: line.freeShipping, conditions: line.conditions };
		}
		for (const { rule, reason, results } of result.skipped) {
			if (!out[rule?.id]) out[rule?.id] = { state: "skipped", reason, conditions: results };
		}
		return out;
	}, [result]);

	const onSave = async () => {
		const res = await save(token);
		addNotification({
			type: res.ok ? "success" : "error",
			title: res.ok ? "Discount rules saved" : "Could not save to the store",
			content: res.message,
		});
	};

	return (
		<div className="p-5">

			{/* ---- header ---- */}
			<div className="mb-5 flex flex-wrap items-center justify-between gap-3">

				<div className="flex items-center gap-3">
					<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
						<IconRosetteDiscount size={20} />
					</span>
					<div>
						<h1 className="text-lg font-semibold text-gray-900">Discount Rules</h1>
						<p className="text-sm text-gray-500">
							Conditional discounts applied to the cart automatically - no coupon code needed.
						</p>
					</div>
				</div>

				<div className="flex items-center gap-2">
					{rules.length === 0 && (
						<button type="button" className={GHOST_BUTTON} onClick={loadStarterRules}>
							<IconSparkles size={16} /> Load examples
						</button>
					)}
					<button type="button" className={GHOST_BUTTON} onClick={() => addRule()}>
						<IconPlus size={16} /> New rule
					</button>
					<button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={onSave}>
						{saving ? <Spinner /> : <IconDeviceFloppy size={16} />}
						Save
					</button>
				</div>
			</div>

			{/* Where the rules on screen came from. A merchant who edits in one
			    browser and finds the storefront unchanged needs to be told that
			    the save never reached the store, not left to guess. */}
			{hydrated && source !== "settings" && (
				<div className="mb-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
					<IconDeviceDesktop size={16} className="mt-0.5 shrink-0" />
					<div>
						<p className="font-medium">These rules are only in this browser.</p>
						<p className="text-xs">
							{storeError
								? `The store copy could not be reached: ${storeError}`
								: "Press Save to publish them to the store, where the storefront reads them from."}
						</p>
					</div>
				</div>
			)}
			{hydrated && source === "settings" && (
				<div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
					<IconCloudCheck size={14} className="text-green-600" />
					Live from the store settings.
				</div>
			)}

			<div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">

				{/* ---- rules ---- */}
				<div className="flex flex-col gap-3">

					{!hydrated && (
						<div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-500">
							<Spinner /> Loading rules...
						</div>
					)}

					{hydrated && rules.length === 0 && (
						<div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
							<IconRosetteDiscount size={28} className="mx-auto text-gray-300" />
							<p className="mt-2 text-sm font-medium text-gray-700">No discount rules yet</p>
							<p className="mt-1 text-sm text-gray-500">
								A rule is a set of conditions and one discount to apply when they all hold.
							</p>
							<div className="mt-4 flex items-center justify-center gap-2">
								<button type="button" className={GHOST_BUTTON} onClick={loadStarterRules}>
									<IconSparkles size={16} /> Load examples
								</button>
								<button type="button" className={PRIMARY_BUTTON} onClick={() => addRule()}>
									<IconPlus size={16} /> New rule
								</button>
							</div>
						</div>
					)}

					{rules.map((rule) => (
						<RuleCard
							key={rule.id}
							rule={rule}
							verdict={verdicts[rule.id]}
							wrapCurrency={wrapCurrency}
							onChange={(patch) => updateRule(rule.id, patch)}
							onRemove={() => removeRule(rule.id)}
							onDuplicate={() => duplicateRule(rule.id)}
							onMove={(direction) => moveRule(rule.id, direction)}
						/>
					))}

					{/* ---- stacking ---- */}
					{rules.length > 0 && (
						<div className="rounded-xl border border-gray-200 bg-white p-4">
							<h2 className="text-sm font-semibold text-gray-900">How rules stack</h2>

							<label className="mt-3 flex items-start gap-2">
								<input
									type="checkbox"
									className="mt-0.5"
									checked={options.compound === true}
									onChange={(ev) => setOptions({ compound: ev.target.checked })}
								/>
								<span className="text-xs text-gray-600">
									<span className="font-medium text-gray-800">Compound the discounts.</span>{" "}
									Each rule takes its cut of what is left rather than of the original
									subtotal, so two 10% rules give 19% instead of 20%.
								</span>
							</label>

							<label className="mt-3 flex flex-col gap-1">
								<span className="text-[11px] font-medium text-gray-500">
									Never discount a cart by more than
								</span>
								<div className="flex items-center gap-2">
									<input
										type="number"
										className={`${FIELD} w-28`}
										value={options.maxTotalDiscount ?? 0}
										onChange={(ev) => setOptions({ maxTotalDiscount: ev.target.value })}
									/>
									<span className="text-[11px] text-gray-400">0 for no ceiling</span>
								</div>
							</label>

							<p className="mt-3 flex items-start gap-1.5 text-[11px] text-gray-400">
								<IconAlertTriangle size={13} className="mt-px shrink-0" />
								Rules run in priority order, lowest first. A rule marked
								&quot;stop after this rule&quot; keeps the ones below it from applying.
							</p>
						</div>
					)}
				</div>

				{/* ---- simulator ---- */}
				<div className="h-fit rounded-xl border border-gray-200 bg-white p-4 xl:sticky xl:top-4">
					<Simulator
						cart={testCart}
						setCart={setTestCart}
						result={result}
						wrapCurrency={wrapCurrency}
					/>
					<button
						type="button"
						className={`${GHOST_BUTTON} mt-3 w-full justify-center`}
						onClick={() => setTestCart({ ...DEFAULT_TEST_CART, items: [blankTestItem()] })}>
						Reset the test cart
					</button>
				</div>

			</div>
		</div>
	);
};

export default DiscountRules;
