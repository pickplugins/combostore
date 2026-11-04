'use client'
import React from 'react'
import Link from "next/link";
import { useState, useEffect } from "react";
import { IconExternalLink, IconFidgetSpinner, IconRotateRectangle } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Subscription details drawer, built on the cstore_subscriptions row and its
	linked order (both from get_subscription).

	The previous version showed fields from an old payment-provider integration
	(setup fee, card last four, renews_at, customer portal URLs) that this table
	does not have, so nearly every value was blank - and it then crashed on
	JSON.parse(undefined) for the missing `urls`.

	Saving sends only the fields changed here; update_subscription applies a
	partial update and recomputes the next billing date only when the billing
	cycle changes and no date was set explicitly.
*/

const STATUSES = {
	active: { label: "Active", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	paused: { label: "Paused", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	canceled: { label: "Canceled", classes: "bg-red-50 text-red-700 ring-red-200" },
	expired: { label: "Expired", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

const INTERVALS = ["day", "week", "month", "year"];

const CARD = "form-card rounded-xl border border-gray-200 bg-white shadow-sm";
const CARD_TITLE = "border-b border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900";
const ROW = "flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-2.5 text-sm last:border-b-0";
const LABEL = "shrink-0 text-gray-500";
const INPUT = "w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !text-sm !text-gray-700 !shadow-none transition-colors focus:!border-[#634FE5] focus:!outline-none focus:!ring-2 focus:!ring-[#634FE5]/20";
const PRIMARY_BUTTON = "inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-50 cursor-pointer";

const day = (value) => (value ? String(value).slice(0, 10) : "");

function formatDay(value) {
	if (!value) return null;
	const date = new Date(`${day(value)}T00:00:00`);
	if (isNaN(date)) return null;
	return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function daysFromToday(value) {
	if (!value) return null;
	const date = new Date(`${day(value)}T00:00:00`);
	if (isNaN(date)) return null;
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return Math.round((date - today) / 86400000);
}

function cycleLabel(interval, count) {
	const n = parseInt(count) || 1;
	return n === 1 ? `every ${interval}` : `every ${n} ${interval}s`;
}

const EDITABLE = ["status", "cancel_at_period_end", "next_billing_date", "renewal_interval", "interval_count"];

function toForm(subscription) {
	return {
		status: subscription?.status ?? "active",
		cancel_at_period_end: String(subscription?.cancel_at_period_end ?? "0") === "1",
		next_billing_date: day(subscription?.next_billing_date),
		renewal_interval: subscription?.renewal_interval ?? "month",
		interval_count: String(parseInt(subscription?.interval_count) || 1),
	};
}


const SubscriptionEdit = ({ id, onSaved }) => {

	const { token, addNotification, paymentGateways } = useCounterStore()
	const { wrapCurrency } = useUtilsStore()

	var [subscription, setsubscription] = useState(null);
	var [order, setorder] = useState(null);
	var [form, setform] = useState(toForm(null));
	var [loading, setloading] = useState(false);
	var [saving, setsaving] = useState(false);
	var [error, seterror] = useState("");


	function fetchPost() {
		if (!token || !id) return;

		setloading(true);
		seterror("");
		fetch(serverUrl + "wp-json/combo-store/v2/get_subscription", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({ id }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status === 403 ? "You do not have access to this subscription." : `Could not load subscription (HTTP ${response.status}).`);
				}
				return response.json();
			})
			.then((res) => {
				const row = res?.subscription && Object.keys(res.subscription).length ? res.subscription : null;
				setsubscription(row);
				setorder(res?.order && Object.keys(res.order).length ? res.order : null);
				setform(toForm(row));
				if (!row) seterror(`Subscription #${id} was not found.`);
				setloading(false);
			})
			.catch((err) => {
				seterror(err.message);
				setloading(false);
			});
	}

	useEffect(() => {
		fetchPost();
	}, [id, token]);


	const original = toForm(subscription);
	const changed = EDITABLE.filter((key) => form[key] !== original[key]);

	function save() {
		if (!changed.length) return;

		/* Only what changed, so nothing else on the row is touched. */
		const payload = { id };
		for (const key of changed) {
			payload[key] = key === "cancel_at_period_end" ? (form[key] ? 1 : 0)
				: key === "interval_count" ? Math.max(1, parseInt(form[key]) || 1)
					: form[key];
		}

		setsaving(true);
		fetch(serverUrl + "wp-json/combo-store/v2/update_subscription", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(payload),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status === 403 ? "Only store staff can update subscriptions." : `Save failed (HTTP ${response.status}).`);
				}
				return response.json();
			})
			.then((res) => {
				setsaving(false);
				if (res?.status !== "success") throw new Error(res?.message || "Save failed.");
				addNotification({ type: 'success', title: 'Subscription updated', content: `#${id} saved.` });
				fetchPost();
				onSaved?.();
			})
			.catch((err) => {
				setsaving(false);
				addNotification({ type: 'error', title: 'Update failed', content: err.message });
			});
	}


	if (loading && !subscription) {
		return (
			<div className="flex items-center gap-2 px-4 py-10 text-sm text-gray-500">
				<span className="animate-spin"><IconFidgetSpinner size={18} /></span> Loading subscription…
			</div>
		);
	}

	if (error && !subscription) {
		return (
			<div className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6">
				<div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">{error}</div>
			</div>
		);
	}

	if (!subscription) return null;


	const status = STATUSES[subscription.status] ?? { label: subscription.status, classes: "bg-gray-100 text-gray-600 ring-gray-200" };
	const amount = parseFloat(subscription.total_amount) || 0;
	const nextDays = daysFromToday(subscription.next_billing_date);
	const trialDays = daysFromToday(subscription.trial_end);
	const isActive = subscription.status === "active";
	const cancelling = isActive && String(subscription.cancel_at_period_end) === "1";
	const customerName = order?.billing_name || null;
	const gateway = order?.payment_method ? (paymentGateways?.[order.payment_method]?.label || order.payment_method) : null;


	return (
		<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

			{/* Heading */}
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400">
						<IconRotateRectangle size={20} stroke={1.5} />
					</div>
					<div>
						<h1 className="text-xl font-semibold text-gray-900">
							{("Subscription")} <span className="font-normal text-gray-400">#{subscription.id}</span>
						</h1>
						<div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${status.classes}`}>{status.label}</span>
							{cancelling && <span className="text-amber-600">Cancels at period end</span>}
							{customerName && <span>· {customerName}</span>}
						</div>
					</div>
				</div>
				{order?.id && (
					<Link href={`/dashboard/orders/${order.id}`} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
						<IconExternalLink size={16} /> Order #{order.id}
					</Link>
				)}
			</div>

			{/* Summary */}
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
				<div className={`${CARD} px-5 py-4`}>
					<div className="text-xs font-medium uppercase tracking-wide text-gray-500">Amount</div>
					<div className="mt-1 text-lg font-semibold text-gray-900">{amount > 0 ? wrapCurrency(amount) : "—"}</div>
					<div className="text-xs text-gray-500">{cycleLabel(subscription.renewal_interval, subscription.interval_count)}</div>
				</div>
				<div className={`${CARD} px-5 py-4`}>
					<div className="text-xs font-medium uppercase tracking-wide text-gray-500">Next billing</div>
					<div className="mt-1 text-lg font-semibold text-gray-900">{isActive && formatDay(subscription.next_billing_date) ? formatDay(subscription.next_billing_date) : "—"}</div>
					{isActive && nextDays !== null && (
						<div className={`text-xs ${nextDays < 0 ? "font-medium text-red-600" : "text-gray-500"}`}>
							{nextDays < 0 ? `Overdue by ${-nextDays} day${nextDays === -1 ? "" : "s"}` : nextDays === 0 ? "Today" : `In ${nextDays} day${nextDays === 1 ? "" : "s"}`}
						</div>
					)}
					{!isActive && <div className="text-xs text-gray-500">Not billing while {status.label.toLowerCase()}</div>}
				</div>
				<div className={`${CARD} px-5 py-4`}>
					<div className="text-xs font-medium uppercase tracking-wide text-gray-500">Last payment</div>
					<div className="mt-1 text-lg font-semibold text-gray-900">{formatDay(subscription.last_payment_date) ?? "—"}</div>
					<div className="text-xs text-gray-500">{gateway ? `via ${gateway}` : "No payment recorded"}</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

				{/* Manage */}
				<div className={CARD}>
					<div className={CARD_TITLE}>Manage</div>
					<div className="flex flex-col gap-4 p-5">
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Status</span>
							<select className={INPUT} value={form.status} onChange={ev => setform({ ...form, status: ev.target.value })}>
								{Object.entries(STATUSES).map(([value, { label }]) => <option key={value} value={value}>{label}</option>)}
							</select>
						</label>

						<label className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 px-3 py-2.5">
							<span className="flex flex-col">
								<span className="text-sm font-medium text-gray-700">Cancel at period end</span>
								<span className="text-xs text-gray-500">Stops renewing after the current period.</span>
							</span>
							<input type="checkbox" className="h-4 w-4 accent-[#634FE5]" checked={form.cancel_at_period_end} onChange={ev => setform({ ...form, cancel_at_period_end: ev.target.checked })} />
						</label>

						<div className="grid grid-cols-[1fr_auto] gap-2">
							<label className="flex flex-col gap-1">
								<span className="text-xs font-medium text-gray-600">Bill every</span>
								<input className={INPUT} type="number" min="1" value={form.interval_count} onChange={ev => setform({ ...form, interval_count: ev.target.value })} />
							</label>
							<label className="flex flex-col gap-1">
								<span className="text-xs font-medium text-gray-600">&nbsp;</span>
								<select className={INPUT} value={form.renewal_interval} onChange={ev => setform({ ...form, renewal_interval: ev.target.value })}>
									{INTERVALS.map(unit => <option key={unit} value={unit}>{unit}{(parseInt(form.interval_count) || 1) > 1 ? "s" : ""}</option>)}
								</select>
							</label>
						</div>

						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Next billing date</span>
							<input className={INPUT} type="date" value={form.next_billing_date} onChange={ev => setform({ ...form, next_billing_date: ev.target.value })} />
							{(changed.includes("renewal_interval") || changed.includes("interval_count")) && !changed.includes("next_billing_date") && (
								<span className="text-xs text-gray-500">Will be recalculated from today for the new cycle unless you pick a date.</span>
							)}
						</label>

						<div className="flex items-center gap-3">
							<button type="button" className={PRIMARY_BUTTON} disabled={!changed.length || saving} onClick={save}>
								{saving ? "Saving…" : "Save changes"}
							</button>
							{changed.length > 0 && !saving && (
								<button type="button" className="text-sm text-gray-500 hover:text-gray-800" onClick={() => setform(original)}>Discard</button>
							)}
						</div>
					</div>
				</div>

				{/* Timeline */}
				<div className={CARD}>
					<div className={CARD_TITLE}>Timeline</div>
					<div className={ROW}><span className={LABEL}>Started</span><span className="text-gray-900">{formatDay(subscription.start_date) ?? "—"}</span></div>
					{(subscription.trial_start || subscription.trial_end) && (
						<div className={ROW}>
							<span className={LABEL}>Trial</span>
							<span className="text-right text-gray-900">
								{formatDay(subscription.trial_start) ?? "—"} → {formatDay(subscription.trial_end) ?? "—"}
								{trialDays !== null && trialDays >= 0 && <span className="block text-xs text-blue-600">{trialDays} day{trialDays === 1 ? "" : "s"} left</span>}
							</span>
						</div>
					)}
					<div className={ROW}><span className={LABEL}>Last payment</span><span className="text-gray-900">{formatDay(subscription.last_payment_date) ?? "—"}</span></div>
					<div className={ROW}><span className={LABEL}>Next billing</span><span className="text-gray-900">{formatDay(subscription.next_billing_date) ?? "—"}</span></div>
					<div className={ROW}><span className={LABEL}>Ended</span><span className="text-gray-900">{formatDay(subscription.end_date) ?? "—"}</span></div>
					<div className={ROW}><span className={LABEL}>Created</span><span className="text-gray-500">{subscription.created_at ?? "—"}</span></div>
					<div className={ROW}><span className={LABEL}>Last updated</span><span className="text-gray-500">{subscription.updated_at ?? "—"}</span></div>
				</div>

				{/* Customer & order */}
				<div className={`${CARD} lg:col-span-2`}>
					<div className={CARD_TITLE}>Customer &amp; original order</div>
					{order ? (
						<div className="grid grid-cols-1 lg:grid-cols-2">
							<div>
								<div className={ROW}><span className={LABEL}>Name</span><span className="text-right text-gray-900">{order.billing_name || "—"}</span></div>
								<div className={ROW}><span className={LABEL}>Phone</span><span className="text-right text-gray-900">{order.billing_phone || "—"}</span></div>
								<div className={ROW}><span className={LABEL}>Email</span><span className="truncate text-right text-gray-900">{order.billing_email || "—"}</span></div>
								<div className={ROW}><span className={LABEL}>Address</span><span className="text-right text-gray-900">{order.billing_address || "—"}</span></div>
							</div>
							<div className="lg:border-l lg:border-gray-100">
								<div className={ROW}>
									<span className={LABEL}>Order</span>
									<Link className="text-right font-medium text-blue-600 hover:underline" href={`/dashboard/orders/${order.id}`}>#{order.id}</Link>
								</div>
								<div className={ROW}><span className={LABEL}>Order status</span><span className="text-right capitalize text-gray-900">{order.status || "—"}</span></div>
								<div className={ROW}><span className={LABEL}>Payment</span><span className="text-right capitalize text-gray-900">{order.payment_status || "—"}{gateway ? ` · ${gateway}` : ""}</span></div>
								<div className={ROW}><span className={LABEL}>Order total</span><span className="text-right font-medium text-gray-900">{parseFloat(order.total_amount) > 0 ? wrapCurrency(order.total_amount) : "—"}</span></div>
							</div>
						</div>
					) : (
						<div className="px-5 py-4 text-sm text-gray-500">
							The original order (#{subscription.order_id}) no longer exists. Customer user ID: {subscription.userid}.
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default SubscriptionEdit
