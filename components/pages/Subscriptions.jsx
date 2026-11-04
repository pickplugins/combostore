"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect } from "react";
import { IconDotsVertical, IconExternalLink, IconRotateRectangle, IconTrash, IconUser } from "@tabler/icons-react";

import PopoverButton from '../../components/PopoverButton';
import SubscriptionEdit from '../../components/pages/SubscriptionEdit';

import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Subscriptions list, styled to match Products.

	This screen used to list *orders* (get_orders) under a Subscriptions title:
	its bulk delete called delete_orders, and its Edit drawer opened
	SubscriptionEdit with an order ID. It now reads the cstore_subscriptions
	table through get_subscriptions, which also returns the linked order's
	billing details and per-status counts.
*/

const ICON_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
	"xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const STATUSES = {
	active: { label: "Active", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	paused: { label: "Paused", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	canceled: { label: "Canceled", classes: "bg-red-50 text-red-700 ring-red-200" },
	expired: { label: "Expired", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

const INTERVALS = { day: "day", week: "week", month: "month", year: "year" };

/* "2026-07-04" -> "04 Jul 2026"; dates here are plain DATE columns, no time. */
function formatDay(value) {
	if (!value) return null;
	const date = new Date(`${String(value).slice(0, 10)}T00:00:00`);
	if (isNaN(date)) return null;
	return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

/* Whole days from today to `value`; negative when it is in the past. */
function daysFromToday(value) {
	if (!value) return null;
	const date = new Date(`${String(value).slice(0, 10)}T00:00:00`);
	if (isNaN(date)) return null;
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return Math.round((date - today) / 86400000);
}

function billingCycle(entry) {
	const unit = INTERVALS[entry?.renewal_interval] ?? entry?.renewal_interval ?? "month";
	const count = parseInt(entry?.interval_count) || 1;
	return count === 1 ? `Every ${unit}` : `Every ${count} ${unit}s`;
}


const Subscriptions = () => {

	const { wrapCurrency } = useUtilsStore()
	const { token, addNotification } = useCounterStore()

	var [ordersData, setordersData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [statusCounts, setstatusCounts] = useState({});
	var [queryPrams, setqueryPrams] = useState({ keyword: "", status: "", paged: 1, order: "DESC", per_page: 10 });
	var [debouncedQuery, setDebouncedQuery] = useState(queryPrams);

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);

	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Subscription"), callback: callbackTitle, classes: "text-left text-gray-600" },
		customer: { id: "customer", label: ("Customer"), callback: callbackCustomer, classes: "text-left text-gray-600" },
		status: { id: "status", label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600" },
		total_amount: { id: "total_amount", label: ("Amount"), callback: callbackAmount, classes: "text-left text-gray-600" },
		next_billing_date: { id: "next_billing_date", label: ("Next Billing"), callback: callbackNextBilling, classes: "text-left text-gray-600" },
		actions: { id: "actions", label: (""), callback: callbackActions, classes: "text-right" },
	};


	/* delete_subscriptions takes one `id`, so a bulk delete is one call each. */
	function delete_subscriptions(ids) {

		ids = ids != undefined ? ids : selectedRows;
		if (!ids?.length) return;

		setloading(true);
		Promise.all(ids.map(id =>
			fetch(serverUrl + "wp-json/combo-store/v2/delete_subscriptions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ id }),
			})
				.then(response => response.ok ? response.json() : { status: "failed" })
				.then(res => res?.status === "success")
				.catch(() => false)
		)).then(results => {
			const deleted = results.filter(Boolean).length;
			const failed = results.length - deleted;
			setselectedRows([]);
			if (deleted) addNotification({ type: 'success', title: 'Deleted', content: `${deleted} subscription(s) deleted.` });
			if (failed) addNotification({ type: 'error', title: 'Delete failed', content: `${failed} subscription(s) could not be deleted.` });
			fetchPosts();
		});
	}

	function fetchPosts() {

		if (!token) return;

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/get_subscriptions", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(queryPrams),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Token validation failed');
				}
				return response.json();
			})
			.then((res) => {
				setordersData({ posts: res?.posts ?? [], total: parseInt(res?.total) || 0, maxPages: parseInt(res?.max_pages) || 1 });
				setstatusCounts(res?.status_counts ?? {});
				setloading(false);
			})
			.catch(() => {
				setloading(false);
			});
	}


	/* Typing in the search box should not fire a request per keystroke. */
	useEffect(() => {
		const handler = setTimeout(() => setDebouncedQuery(queryPrams), 400);
		return () => clearTimeout(handler);
	}, [queryPrams]);

	/* `token` too: after a reload it arrives from an effect after first render. */
	useEffect(() => {
		fetchPosts();
	}, [debouncedQuery, token]);


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
		}
	}

	function onRefreshRequest(rows) {
		fetchPosts();
	}

	function confirmDelete(ids, label) {
		if (confirm(`Delete ${label}? This removes the subscription record; the original order is kept.`)) {
			delete_subscriptions(ids);
		}
	}


	function callbackTitle(entry, columnIndex) {
		return (
			<td data-label="Subscription" className="!px-5 py-3 text-left"
				key={columnIndex}>
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-400">
						<IconRotateRectangle size={18} stroke={1.5} />
					</div>
					<div className="flex min-w-0 flex-col gap-1">
						<PopoverButton buttonLabel={`#${entry.id}`} buttonIcon={null} title={"Subscription"} drawer={"right"} buttonClass={`cursor-pointer text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline`}>
							<div className="p-5 bg-gray-50 text-left">
								<SubscriptionEdit id={entry.id} onSaved={fetchPosts} />
							</div>
						</PopoverButton>
						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span>{billingCycle(entry)}</span>
							{entry?.order_id > 0 && (
								<>
									<span className="text-gray-300">·</span>
									<Link className="font-mono text-[11px] text-gray-400 hover:text-gray-700 hover:underline" href={`/dashboard/orders/${entry.order_id}`}>
										Order #{entry.order_id}
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</td>
		);
	}

	function callbackCustomer(entry, columnIndex) {
		/* The order's billing name is what the customer typed at checkout; the
		   account name is the fallback (and the only name if the order is gone). */
		const name = entry?.billing_name || entry?.customer_name;
		const contact = entry?.billing_phone || entry?.billing_email || entry?.customer_email;
		return (
			<td data-label="Customer" className="!px-5 py-3 text-left text-sm"
				key={columnIndex}>
				{name ? (
					<div className="flex min-w-0 flex-col gap-0.5">
						<span className="truncate font-medium text-gray-900">{name}</span>
						{contact && <span className="truncate text-xs text-gray-500">{contact}</span>}
					</div>
				) : (
					<span className="inline-flex items-center gap-1 text-xs text-gray-400"><IconUser size={14} /> User #{entry?.userid}</span>
				)}
			</td>
		);
	}

	function callbackStatus(entry, columnIndex) {
		const status = STATUSES[entry?.status] ?? { label: entry?.status || "—", classes: "bg-gray-100 text-gray-600 ring-gray-200" };
		const cancelling = entry?.status === "active" && String(entry?.cancel_at_period_end) === "1";
		return (
			<td data-label="Status" className="!px-5 py-3 text-left text-sm"
				key={columnIndex}>
				<div className="flex flex-col items-start gap-1">
					<span className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${status.classes}`}>{status.label}</span>
					{cancelling && <span className="text-[11px] text-amber-600">Cancels at period end</span>}
				</div>
			</td>
		);
	}

	function callbackAmount(entry, columnIndex) {
		const amount = parseFloat(entry?.total_amount) || 0;
		const unit = INTERVALS[entry?.renewal_interval] ?? "month";
		const count = parseInt(entry?.interval_count) || 1;
		return (
			<td data-label="Amount" className="!px-5 py-3 text-left text-sm"
				key={columnIndex}>
				{amount > 0 ? (
					<div className="flex flex-col">
						<span className="font-medium text-gray-900">{wrapCurrency(amount)}</span>
						<span className="text-xs text-gray-500">/ {count === 1 ? unit : `${count} ${unit}s`}</span>
					</div>
				) : (
					<span className="text-gray-400">—</span>
				)}
			</td>
		);
	}

	function callbackNextBilling(entry, columnIndex) {
		const trialDays = daysFromToday(entry?.trial_end);
		const next = formatDay(entry?.next_billing_date);
		const days = daysFromToday(entry?.next_billing_date);
		const ended = formatDay(entry?.end_date);
		const isActive = entry?.status === "active";

		return (
			<td data-label="Next Billing" className="!px-5 py-3 text-left text-sm"
				key={columnIndex}>
				<div className="flex flex-col gap-0.5">
					{isActive && next ? (
						<>
							<span className="text-gray-900">{next}</span>
							<span className={`text-xs ${days < 0 ? "font-medium text-red-600" : "text-gray-500"}`}>
								{days < 0 ? `Overdue by ${-days} day${days === -1 ? "" : "s"}` : days === 0 ? "Today" : `In ${days} day${days === 1 ? "" : "s"}`}
							</span>
						</>
					) : !isActive && ended ? (
						<span className="text-xs text-gray-500">Ended {ended}</span>
					) : (
						<span className="text-gray-400">—</span>
					)}
					{trialDays !== null && trialDays >= 0 && (
						<span className="text-[11px] text-blue-600">Trial until {formatDay(entry.trial_end)}</span>
					)}
					<span className="text-[11px] text-gray-400">Started {formatDay(entry?.start_date) ?? "—"}</span>
				</div>
			</td>
		);
	}

	function callbackActions(entry, columnIndex) {
		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm"
				key={columnIndex}>
				<div className="flex items-center justify-end gap-1">
					<PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>
						<div className="p-1.5">
							<div className="flex flex-col gap-0.5">
								{entry?.order_id > 0 && (
									<Link className={MENU_ITEM} href={`/dashboard/orders/${entry.order_id}`}>
										<IconExternalLink size={16} /> Open order #{entry.order_id}
									</Link>
								)}
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									confirmDelete([entry.id], `subscription #${entry.id}`);
								}}>
									<IconTrash size={16} /> Delete
								</div>
							</div>
						</div>
					</PopoverButton>
				</div>
			</td>
		);
	}


	const allCount = Object.values(statusCounts).reduce((sum, n) => sum + (parseInt(n) || 0), 0);

	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Subscriptions")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{allCount} {("subscriptions")}
						{statusCounts?.active > 0 && <> · <span className="text-emerald-600">{statusCounts.active} {("active")}</span></>}
					</p>
				</div>
			</div>

			<div className="flex flex-wrap justify-between gap-3">

				<div className="flex flex-wrap gap-2">
					<select className={FILTER_SELECT} value={queryPrams?.status ?? ""} onChange={ev => {
						setselectedRows([]);
						setqueryPrams({ ...queryPrams, status: ev.target.value, paged: 1 });
					}}>
						<option value="">{("All Statuses")} ({allCount})</option>
						{Object.entries(STATUSES).map(([value, { label }]) => (
							<option value={value} key={value}>{label} ({statusCounts?.[value] ?? 0})</option>
						))}
					</select>
				</div>

				<div className="flex gap-3 items-center justify-end">
					{selectedRows?.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
							onClick={() => {
								confirmDelete(selectedRows, `${selectedRows.length} selected subscription(s)`);
							}}>
							<IconTrash size={16} /> {("Delete")} ({selectedRows.length})
						</div>
					)}
				</div>
			</div>

			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={ordersData}
				itemPath={""}
				onChange={onChangeQueryPrams}
				loading={loading}
				selectedRows={selectedRows}
				onSelectRows={onSelectRows}
				onRefreshRequest={onRefreshRequest}
			/>
		</div>

	);
};

export default Subscriptions;
