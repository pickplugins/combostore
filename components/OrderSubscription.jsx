"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IconRepeat, IconCalendarEvent, IconCalendarTime, IconCash, IconReceiptRefund, IconArrowUpRight, IconInfoCircle } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import Spinner from '../components/Spinner';
import { useCan } from '../lib/useCan';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Subscription tab of OrderEdit.

	Subscriptions are per product: each order line bought with "Subscribe"
	becomes one subscription when the order is paid or completed. On its
	billing date a daily job creates a pending renewal order; "Create renewal
	order now" does the same on demand. A renewal order shows which order it
	renews. Older whole-order subscriptions (no product) still show and edit,
	but do not renew.

	This tab used to show one whole-order subscription and a "Start
	Subscription" button that subscribed the entire order monthly.
*/

const FIELD = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";
const PRIMARY_BUTTON = "inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";
const SECONDARY_BUTTON = "inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const STATUS_TONES = {
	active: "bg-emerald-50 text-emerald-700 ring-emerald-200",
	paused: "bg-amber-50 text-amber-700 ring-amber-200",
	canceled: "bg-rose-50 text-rose-700 ring-rose-200",
	expired: "bg-gray-100 text-gray-600 ring-gray-200",
};

const INTERVALS = ["day", "week", "month", "year"];
const STAFF_ROLES = ["administrator", "store_manager"];

const day = (value) => (value && !String(value).startsWith("0000") ? String(value).slice(0, 10) : "");

function cycle(subscription) {
	var count = Math.max(1, parseInt(subscription?.interval_count) || 1);
	var unit = subscription?.renewal_interval || "month";
	return count === 1 ? `Every ${unit}` : `Every ${count} ${unit}s`;
}

function toForm(subscription) {
	return {
		status: subscription?.status ?? "active",
		renewal_interval: subscription?.renewal_interval ?? "month",
		interval_count: String(Math.max(1, parseInt(subscription?.interval_count) || 1)),
		next_billing_date: day(subscription?.next_billing_date),
		cancel_at_period_end: String(subscription?.cancel_at_period_end ?? "0") === "1",
	};
}

const EDITABLE = ["status", "renewal_interval", "interval_count", "next_billing_date", "cancel_at_period_end"];


function post(route, token, body) {
	return fetch(serverUrl + "wp-json/combo-store/v2/" + route, {
		method: "POST",
		headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
		body: JSON.stringify(body),
	}).then((response) => {
		if (!response.ok) {
			return response.json().catch(() => ({})).then((res) => {
				throw new Error(res?.message || `Request failed (HTTP ${response.status}).`);
			});
		}
		return response.json();
	});
}


function SubscriptionCard({ subscription, canEdit, onChanged }) {

	const { token, addNotification } = useCounterStore()
	const permit = useCan(["orders", "incomplete", "refunds"]); /* Roles & Permissions */
	const { wrapCurrency, formatDate } = useUtilsStore()

	var [form, setform] = useState(toForm(subscription));
	var [saving, setsaving] = useState(false);
	var [renewing, setrenewing] = useState(false);

	useEffect(() => { setform(toForm(subscription)); }, [subscription]);

	var original = toForm(subscription);
	var changed = EDITABLE.filter((key) => form[key] !== original[key]);
	var perProduct = !!subscription?.product_id;
	var name = subscription?.product_name || subscription?.product_title || (perProduct ? `Product #${subscription.product_id}` : "Whole order (older subscription)");
	var tone = STATUS_TONES[subscription?.status] ?? STATUS_TONES.expired;

	const showDate = (value) => {
		var d = day(value);
		if (!d) return null;
		var formatted = formatDate ? formatDate(d) : d;
		return formatted == "Invalid Date" ? d : formatted;
	};

	function save() {
		if (!permit.allowed(["cstore_edit_subscriptions","cstore_edit_orders","cstore_edit_incomplete","cstore_edit_refunds"])) return permit.denied();
		if (!changed.length) return;
		var payload = { id: subscription.id };
		for (var key of changed) {
			payload[key] = key === "cancel_at_period_end" ? (form[key] ? 1 : 0)
				: key === "interval_count" ? Math.max(1, parseInt(form[key]) || 1)
					: form[key];
		}

		setsaving(true);
		post("update_subscription", token, payload)
			.then((res) => {
				if (res?.status !== "success") throw new Error(res?.message || "Save failed.");
				addNotification({ type: 'success', title: 'Subscription updated', content: `#${subscription.id} saved.` });
				onChanged?.();
			})
			.catch((err) => addNotification({ type: 'error', title: 'Update failed', content: err.message }))
			.finally(() => setsaving(false));
	}

	function renewNow() {
		if (!confirm(`Create a pending renewal order for subscription #${subscription.id} now? Its next billing date moves forward one period.`)) return;

		setrenewing(true);
		post("run_subscription_renewals", token, { subscription_ids: [subscription.id] })
			.then((res) => {
				var orderId = res?.orders?.[0];
				if (!orderId) throw new Error(res?.skipped?.[0] || "No renewal order was created.");
				addNotification({ type: 'success', title: 'Renewal order created', content: `Order #${orderId} is waiting for payment.` });
				onChanged?.();
			})
			.catch((err) => addNotification({ type: 'error', title: 'Renewal failed', content: err.message }))
			.finally(() => setrenewing(false));
	}

	return (
		<div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-5 py-3">
				<div className="flex min-w-0 items-center gap-3">
					<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#634FE5]/10 text-[#634FE5]">
						<IconRepeat size={18} />
					</div>
					<div className="min-w-0">
						<div className="truncate text-sm font-semibold text-gray-900">{name}</div>
						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span>#{subscription.id}</span>
							<span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ring-1 ring-inset ${tone}`}>{subscription.status}</span>
							<span>{cycle(subscription)}</span>
							{subscription?.quantity > 1 && <span>· Qty {subscription.quantity}</span>}
							{String(subscription?.cancel_at_period_end) === "1" && subscription?.status === "active" && <span className="text-amber-600">· Ends at period end</span>}
						</div>
					</div>
				</div>
				{canEdit && perProduct && subscription?.status === "active" && (
					<button type="button" className={SECONDARY_BUTTON} disabled={renewing} onClick={renewNow}>
						{renewing ? <Spinner /> : <IconReceiptRefund size={16} />} Create renewal order now
					</button>
				)}
			</div>

			<div className="grid grid-cols-2 gap-px bg-gray-100 sm:grid-cols-4">
				<div className="bg-white px-5 py-3">
					<div className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-gray-500"><IconCash size={13} /> Amount</div>
					<div className="mt-0.5 text-sm font-semibold tabular-nums text-gray-900">{parseFloat(subscription?.total_amount) > 0 ? wrapCurrency(subscription.total_amount) : "—"}</div>
				</div>
				<div className="bg-white px-5 py-3">
					<div className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-gray-500"><IconCalendarEvent size={13} /> Next billing</div>
					<div className="mt-0.5 text-sm font-semibold text-gray-900">{subscription?.status === "active" ? (showDate(subscription?.next_billing_date) ?? "—") : "Not billing"}</div>
				</div>
				<div className="bg-white px-5 py-3">
					<div className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-gray-500"><IconCash size={13} /> Last payment</div>
					<div className="mt-0.5 text-sm font-semibold text-gray-900">{showDate(subscription?.last_payment_date) ?? "—"}</div>
				</div>
				<div className="bg-white px-5 py-3">
					<div className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-gray-500"><IconCalendarTime size={13} /> Started</div>
					<div className="mt-0.5 text-sm font-semibold text-gray-900">{showDate(subscription?.start_date) ?? "—"}</div>
				</div>
			</div>

			{subscription?.renewal_orders?.length > 0 && (
				<div className="flex flex-wrap items-center gap-2 border-t border-gray-100 px-5 py-3 text-xs text-gray-600">
					<span className="font-medium">Renewal orders:</span>
					{subscription.renewal_orders.map(id => (
						<Link key={id} href={`/dashboard/orders/${id}`} className="inline-flex items-center gap-0.5 rounded-md bg-gray-100 px-2 py-0.5 font-medium text-gray-700 hover:bg-gray-200">
							#{id} <IconArrowUpRight size={12} />
						</Link>
					))}
				</div>
			)}

			{canEdit && (
				<div className="flex flex-col gap-4 border-t border-gray-100 px-5 py-4">
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Status</span>
							<select className={FIELD} value={form.status} onChange={ev => setform({ ...form, status: ev.target.value })}>
								{Object.keys(STATUS_TONES).map(value => <option key={value} value={value} className="capitalize">{value.charAt(0).toUpperCase() + value.slice(1)}</option>)}
							</select>
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Bill every</span>
							<input className={FIELD} type="number" min="1" value={form.interval_count} onChange={ev => setform({ ...form, interval_count: ev.target.value })} />
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">&nbsp;</span>
							<select className={FIELD} value={form.renewal_interval} onChange={ev => setform({ ...form, renewal_interval: ev.target.value })}>
								{INTERVALS.map(unit => <option key={unit} value={unit}>{unit}{(parseInt(form.interval_count) || 1) > 1 ? "s" : ""}</option>)}
							</select>
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Next billing date</span>
							<input className={FIELD} type="date" value={form.next_billing_date} onChange={ev => setform({ ...form, next_billing_date: ev.target.value })} />
						</label>
					</div>

					<label className="flex items-center gap-2 text-sm text-gray-700">
						<input type="checkbox" className="h-4 w-4 accent-[#634FE5]" checked={form.cancel_at_period_end} onChange={ev => setform({ ...form, cancel_at_period_end: ev.target.checked })} />
						End at the next billing date (no more renewal orders)
					</label>

					{(changed.includes("renewal_interval") || changed.includes("interval_count")) && !changed.includes("next_billing_date") && (
						<p className="text-xs text-gray-500">The next billing date will be recalculated from today for the new cycle unless you pick one.</p>
					)}

					<div className="flex items-center gap-3">
						<button type="button" className={PRIMARY_BUTTON} disabled={!changed.length || saving} {...permit.hide(["cstore_edit_subscriptions","cstore_edit_orders","cstore_edit_incomplete","cstore_edit_refunds"])} onClick={save}>
							{saving ? "Saving…" : "Save changes"}
						</button>
						{changed.length > 0 && !saving && (
							<button type="button" className="text-sm text-gray-500 hover:text-gray-800" onClick={() => setform(original)}>Discard</button>
						)}
					</div>
				</div>
			)}
		</div>
	);
}


/*
	A subscribed line of an order that is not paid or completed yet: what
	will start when it is. Nothing to edit until then.
*/
function PendingSubscriptionCard({ line }) {
	const { wrapCurrency } = useUtilsStore()
	var count = Math.max(1, parseInt(line?.interval_count) || 1);
	var unit = line?.interval || "month";

	return (
		<div className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-dashed border-amber-300 bg-amber-50/50 px-5 py-4">
			<div className="flex min-w-0 items-start gap-3">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
					<IconRepeat size={20} />
				</div>
				<div className="min-w-0">
					<div className="flex flex-wrap items-center gap-2">
						<span className="text-sm font-semibold text-gray-900">{line?.product_name || `Product #${line?.product_id}`}</span>
						<span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 ring-1 ring-amber-200">Starts when paid</span>
					</div>
					<div className="mt-0.5 text-xs text-gray-500">
						{line?.enabled
							? <>{count === 1 ? `Every ${unit}` : `Every ${count} ${unit}s`} · qty {line?.quantity}</>
							: "Subscriptions are now turned off for this product, so paying this order will not start one."}
					</div>
					<div className="mt-1 text-xs text-gray-500">The subscription is created when this order is marked paid or completed.</div>
				</div>
			</div>
			<div className="text-right">
				<div className="text-xs text-gray-500">Each renewal</div>
				<div className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(line?.amount)}</div>
			</div>
		</div>
	);
}


const OrderSubscription = (props) => {

	const { token, userDataX } = useCounterStore()
	const permit = useCan(["orders", "incomplete", "refunds"]); /* Roles & Permissions */

	var order_id = props?.order_id
	var [data, setdata] = useState(null);
	var [loading, setloading] = useState(false);
	var [error, seterror] = useState("");

	var canEdit = STAFF_ROLES.some(role => userDataX?.roles?.includes(role));

	function load() {
		if (!order_id || !token) return;
		setloading(true);
		seterror("");
		post("get_subscription", token, { id: order_id, by: "order_id" })
			.then((res) => setdata(res))
			.catch((err) => seterror(err.message))
			.finally(() => setloading(false));
	}

	useEffect(() => { load(); }, [order_id, token]);

	var subscriptions = data?.subscriptions ?? [];
	var pending = data?.pending ?? [];

	if (loading && !data) {
		return <div className="flex items-center gap-2 px-4 py-10 text-sm text-gray-500"><Spinner /> Loading subscriptions…</div>;
	}

	if (error && !data) {
		return <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">{error}</div>;
	}

	return (
		<div className="flex flex-col gap-4">

			{data?.renewal_of_order && (
				<div className="flex flex-wrap items-center gap-2 rounded-xl border border-[#634FE5]/20 bg-[#634FE5]/5 px-4 py-3 text-sm text-gray-700">
					<IconReceiptRefund size={18} className="text-[#634FE5]" />
					<span>This is a <strong>renewal order</strong> for subscription{data.renewal_of_subscription?.length > 1 ? "s" : ""} #{(data.renewal_of_subscription ?? []).join(", #")}, from</span>
					<Link href={`/dashboard/orders/${data.renewal_of_order}`} className="inline-flex items-center gap-0.5 font-medium text-[#634FE5] hover:underline">
						order #{data.renewal_of_order} <IconArrowUpRight size={14} />
					</Link>
					<span className="text-gray-500">Once it is paid or completed, the subscription is marked paid and its license keys are extended.</span>
				</div>
			)}

			{subscriptions.length === 0 && pending.length === 0 && !data?.renewal_of_order && (
				<div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-10 text-center">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#634FE5]/10 text-[#634FE5]">
						<IconRepeat size={24} />
					</div>
					<div>
						<div className="text-sm font-semibold text-gray-900">No subscriptions on this order</div>
						<div className="mx-auto mt-1 max-w-md text-xs text-gray-500">
							Products bought with “Subscribe” start a subscription when the order is paid or completed. Turn on subscriptions for a product in its editor (Subscription Management).
						</div>
					</div>
				</div>
			)}

			{pending.map((line, index) => (
				<PendingSubscriptionCard key={`pending-${line.product_id}-${line.variation_id}-${index}`} line={line} />
			))}

			{subscriptions.map(subscription => (
				<SubscriptionCard key={subscription.id} subscription={subscription} canEdit={canEdit} onChanged={load} />
			))}

			{subscriptions.some(s => !s.product_id) && (
				<p className="flex items-start gap-1.5 text-xs text-gray-500">
					<IconInfoCircle size={14} className="mt-0.5 shrink-0" />
					Older whole-order subscriptions are kept as records you can edit; they do not create renewal orders.
				</p>
			)}
		</div>
	);
};

export default OrderSubscription;
