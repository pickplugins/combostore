"use client";

import React from "react";
import { IconPlus, IconX, IconFlask } from "@tabler/icons-react";

import { FIELD } from "./FieldInput";

/*
	A cart to test the rules against.

	Without it the only way to find out what a rule does is to put a real
	order through the storefront, and the rules that most need checking - a
	tier ladder, two offers that stack, a window that opens at six - are
	exactly the ones that are awkward to reproduce by shopping.

	It owns the test cart; the screen above owns the engine run, so the result
	shown here is the same object the cart would get.
*/

const BUTTON =
	"inline-flex items-center gap-1 !rounded-md !border !border-gray-300 !bg-white !px-2 !py-1 !text-[11px] !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand";

export function blankTestItem() {
	return {
		id: Math.floor(Math.random() * 9000) + 1000,
		title: "Test product",
		price: 500,
		quantity: 1,
		categories: [],
	};
}

const Simulator = (props) => {

	const cart = props?.cart;
	const setCart = props?.setCart;
	const result = props?.result;
	const wrapCurrency = props?.wrapCurrency ?? ((v) => String(v));

	const items = cart?.items ?? [];

	const setItem = (index, patch) =>
		setCart({ ...cart, items: items.map((it, i) => (i === index ? { ...it, ...patch } : it)) });

	return (
		<div className="flex flex-col gap-3">

			<div className="flex items-center gap-2">
				<IconFlask size={16} className="text-brand" />
				<h2 className="text-sm font-semibold text-gray-900">Test cart</h2>
			</div>

			{/* ---- items ---- */}
			<div className="flex flex-col gap-2">
				{items.map((item, index) => (
					<div key={index} className="flex flex-wrap items-end gap-2 rounded-lg border border-gray-100 bg-gray-50/60 p-2">

						<label className="flex flex-col gap-1">
							<span className="text-[11px] font-medium text-gray-500">Product id</span>
							<input
								type="number"
								className={`${FIELD} w-20`}
								value={item.id ?? ""}
								onChange={(ev) => setItem(index, { id: ev.target.value })}
							/>
						</label>

						<label className="flex flex-col gap-1">
							<span className="text-[11px] font-medium text-gray-500">Unit price</span>
							<input
								type="number"
								className={`${FIELD} w-24`}
								value={item.price ?? ""}
								onChange={(ev) => setItem(index, { price: ev.target.value })}
							/>
						</label>

						<label className="flex flex-col gap-1">
							<span className="text-[11px] font-medium text-gray-500">Qty</span>
							<input
								type="number"
								className={`${FIELD} w-16`}
								value={item.quantity ?? 1}
								onChange={(ev) => setItem(index, { quantity: ev.target.value })}
							/>
						</label>

						<label className="flex flex-col gap-1">
							<span className="text-[11px] font-medium text-gray-500">Categories</span>
							<input
								type="text"
								className={`${FIELD} w-44`}
								placeholder="slug, slug"
								value={(item.categories ?? []).join(", ")}
								onChange={(ev) => setItem(index, {
									categories: ev.target.value.split(",").map((s) => s.trim()).filter(Boolean),
								})}
							/>
						</label>

						<IconX
							size={14}
							className="mb-2 ml-auto cursor-pointer text-gray-400 hover:text-red-500"
							onClick={() => setCart({ ...cart, items: items.filter((_, i) => i !== index) })}
						/>
					</div>
				))}

				<button
					type="button"
					className={`${BUTTON} w-fit`}
					onClick={() => setCart({ ...cart, items: [...items, blankTestItem()] })}>
					<IconPlus size={12} /> Add a line
				</button>
			</div>

			{/* ---- context ---- */}
			<div className="flex flex-wrap items-end gap-3 border-t border-gray-100 pt-3">

				<label className="flex flex-col gap-1">
					<span className="text-[11px] font-medium text-gray-500">Shipping cost</span>
					<input
						type="number"
						className={`${FIELD} w-24`}
						value={cart?.shippingCost ?? 0}
						onChange={(ev) => setCart({ ...cart, shippingCost: ev.target.value })}
					/>
				</label>

				<label className="flex flex-col gap-1">
					<span className="text-[11px] font-medium text-gray-500">Shipping method</span>
					<input
						type="text"
						className={`${FIELD} w-28`}
						value={cart?.shippingMethod ?? ""}
						onChange={(ev) => setCart({ ...cart, shippingMethod: ev.target.value })}
					/>
				</label>

				<label className="flex flex-col gap-1">
					<span className="text-[11px] font-medium text-gray-500">Past orders</span>
					<input
						type="number"
						className={`${FIELD} w-20`}
						placeholder="guest"
						value={cart?.ordersCount ?? ""}
						onChange={(ev) => setCart({ ...cart, ordersCount: ev.target.value })}
					/>
				</label>

				<label className="flex flex-col gap-1">
					<span className="text-[11px] font-medium text-gray-500">Pretend it is</span>
					<input
						type="datetime-local"
						className={`${FIELD} w-48`}
						value={cart?.now ?? ""}
						onChange={(ev) => setCart({ ...cart, now: ev.target.value })}
					/>
				</label>

				<label className="flex items-center gap-2 pb-1.5">
					<input
						type="checkbox"
						checked={cart?.loggedIn === true}
						onChange={(ev) => setCart({ ...cart, loggedIn: ev.target.checked })}
					/>
					<span className="text-[11px] font-medium text-gray-600">Signed in</span>
				</label>

				<label className="flex items-center gap-2 pb-1.5">
					<input
						type="checkbox"
						checked={cart?.couponApplied === true}
						onChange={(ev) => setCart({ ...cart, couponApplied: ev.target.checked })}
					/>
					<span className="text-[11px] font-medium text-gray-600">Coupon applied</span>
				</label>
			</div>

			{/* ---- result ---- */}
			<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">

				<div className="flex items-center justify-between text-sm">
					<span className="text-gray-600">Subtotal</span>
					<span className="font-medium text-gray-900 tabular-nums">{wrapCurrency(result?.subtotal ?? 0)}</span>
				</div>

				{(result?.lines ?? []).map((line) => (
					<div key={line.ruleId} className="mt-1 flex items-center justify-between text-sm">
						<span className="truncate text-gray-600">{line.label}</span>
						<span className="font-medium text-green-700 tabular-nums">
							{line.freeShipping && line.amount <= 0 ? "free shipping" : `-${wrapCurrency(line.amount)}`}
						</span>
					</div>
				))}

				{(result?.lines ?? []).length === 0 && (
					<p className="mt-1 text-xs text-gray-400">No rule fires on this cart.</p>
				)}

				<div className="mt-1 flex items-center justify-between text-sm">
					<span className="text-gray-600">
						Shipping
						{result?.freeShipping && result?.shippingWaived > 0 && (
							<span className="ml-1 text-[11px] text-green-700">
								(waived {wrapCurrency(result.shippingWaived)})
							</span>
						)}
					</span>
					<span className="font-medium text-gray-900 tabular-nums">{wrapCurrency(result?.shipping ?? 0)}</span>
				</div>

				<div className="mt-2 flex items-center justify-between border-t border-gray-200 pt-2 text-sm">
					<span className="font-semibold text-gray-900">Payable</span>
					<span className="font-bold text-gray-900 tabular-nums">{wrapCurrency(result?.total ?? 0)}</span>
				</div>

			</div>

			{/* Why a rule did not fire is the question the simulator exists to
			    answer, so the misses are listed rather than only the hits. */}
			{(result?.skipped ?? []).length > 0 && (
				<details className="text-xs text-gray-500">
					<summary className="cursor-pointer select-none">
						{result.skipped.length} rule(s) did not apply
					</summary>
					<ul className="mt-1 flex flex-col gap-0.5 pl-4">
						{result.skipped.map(({ rule, reason }, i) => (
							<li key={`${rule?.id}-${i}`}>
								<span className="text-gray-700">{rule?.title || "Untitled"}</span>
								<span className="text-gray-400"> - {reason}</span>
							</li>
						))}
					</ul>
				</details>
			)}

		</div>
	);
};

export default Simulator;
