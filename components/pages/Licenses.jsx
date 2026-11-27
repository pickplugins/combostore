"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect } from "react";
import { IconCopy, IconDotsVertical, IconExternalLink, IconKey, IconPlus, IconRefresh, IconTrash, IconUser } from "@tabler/icons-react";

import PopoverButton from '../../components/PopoverButton';
import LicenseEdit, { LicenseCreate, LICENSE_STATUSES, formatDay, daysFromToday, copyText } from '../../components/pages/LicenseEdit';

import { useCounterStore } from '../../store/useCounterStore'
import { useCan } from '../../lib/useCan';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Licenses list, built like Subscriptions.

	Reads cstore_licenses through get_licenses, which returns the rows with
	`domains`/`meta` decoded, the owner's name, the product title, expiry flags
	and per-status counts. Staff see every license; anyone else only their own.
*/

const ICON_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
	"xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const TOOLBAR_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer";

const PRIMARY_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-50 cursor-pointer";


/* "6B426F80-77F0FBAC-49367E5E-3CCFF1DF" -> "6B426F80…3CCFF1DF" so the column stays narrow. */
function shortKey(key) {
	if (!key) return "—";
	return key.length > 20 ? `${key.slice(0, 8)}…${key.slice(-8)}` : key;
}


const Licenses = () => {

	const { token, addNotification } = useCounterStore()
	const permit = useCan("licenses"); /* Roles & Permissions */

	var [licensesData, setlicensesData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [statusCounts, setstatusCounts] = useState({});
	var [queryPrams, setqueryPrams] = useState({ keyword: "", status: "", expired: "", paged: 1, order: "DESC", per_page: 10 });
	var [debouncedQuery, setDebouncedQuery] = useState(queryPrams);

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);

	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("License"), callback: callbackTitle, classes: "text-left text-gray-600" },
		customer: { id: "customer", label: ("Customer"), callback: callbackCustomer, classes: "text-left text-gray-600" },
		status: { id: "status", label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600" },
		activations: { id: "activations", label: ("Activations"), callback: callbackActivations, classes: "text-left text-gray-600" },
		expires_at: { id: "expires_at", label: ("Expires"), callback: callbackExpires, classes: "text-left text-gray-600" },
		actions: { id: "actions", label: (""), callback: callbackActions, classes: "text-right" },
	};


	function delete_licenses(ids) {
if (!permit.allowed("delete")) return permit.denied();

		ids = ids != undefined ? ids : selectedRows;
		if (!ids?.length) return;

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_licenses", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ ids }),
		})
			.then(response => response.ok ? response.json() : { status: "failed", failed: ids })
			.catch(() => ({ status: "failed", failed: ids }))
			.then(res => {
				const deleted = res?.deleted?.length ?? 0;
				const failed = res?.failed?.length ?? (deleted ? 0 : ids.length);
				setselectedRows([]);
				if (deleted) addNotification({ type: 'success', title: 'Deleted', content: `${deleted} license(s) deleted.` });
				if (failed) addNotification({ type: 'error', title: 'Delete failed', content: `${failed} license(s) could not be deleted.` });
				fetchPosts();
			});
	}

	function fetchPosts() {

		if (!token) return;

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/get_licenses", {
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
				setlicensesData({ posts: res?.posts ?? [], total: parseInt(res?.total) || 0, maxPages: parseInt(res?.max_pages) || 1 });
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
		if (confirm(`Delete ${label}? Sites using the key will stop validating. This cannot be undone.`)) {
			delete_licenses(ids);
		}
	}

	function copyKey(key) {
		copyText(key).then(ok => addNotification(ok
			? { type: 'success', title: 'Copied', content: 'License key copied to clipboard.' }
			: { type: 'error', title: 'Copy failed', content: 'Select the key and copy it manually.' }));
	}


	function callbackTitle(entry, columnIndex) {
		return (
			<td data-label="License" className="!px-5 py-3 text-left"
				key={columnIndex}>
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-400">
						<IconKey size={18} stroke={1.5} />
					</div>
					<div className="flex min-w-0 flex-col gap-1">
						<div className="flex items-center gap-1.5">
							<PopoverButton buttonLabel={`#${entry.id}`} buttonIcon={null} title={"License"} drawer={"right"} buttonClass={`cursor-pointer text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline`}>
								<div className="p-5 bg-gray-50 text-left">
									<LicenseEdit id={entry.id} onSaved={fetchPosts} />
								</div>
							</PopoverButton>
							<span className="font-mono text-[11px] text-gray-500" title={entry.license_key}>{shortKey(entry.license_key)}</span>
							<button type="button" className="text-gray-300 transition-colors hover:text-gray-700" title="Copy key" onClick={() => copyKey(entry.license_key)}>
								<IconCopy size={14} />
							</button>
						</div>
						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="truncate">{entry?.product_title || (entry?.product_id ? `Product #${entry.product_id}` : "No product")}</span>
							{entry?.variation_title && <span className="text-gray-400">· {entry.variation_title}</span>}
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
		const name = entry?.user?.name;
		const email = entry?.user_email || entry?.user?.email;
		return (
			<td data-label="Customer" className="!px-5 py-3 text-left text-sm"
				key={columnIndex}>
				{name || email ? (
					<div className="flex min-w-0 flex-col gap-0.5">
						<span className="truncate font-medium text-gray-900">{name || email}</span>
						{name && email && <span className="truncate text-xs text-gray-500">{email}</span>}
					</div>
				) : (
					<span className="inline-flex items-center gap-1 text-xs text-gray-400"><IconUser size={14} /> {entry?.userid ? `User #${entry.userid}` : "No customer"}</span>
				)}
			</td>
		);
	}

	function callbackStatus(entry, columnIndex) {
		const status = LICENSE_STATUSES[entry?.status] ?? { label: entry?.status || "—", classes: "bg-gray-100 text-gray-600 ring-gray-200" };
		return (
			<td data-label="Status" className="!px-5 py-3 text-left text-sm"
				key={columnIndex}>
				<div className="flex flex-col items-start gap-1">
					<span className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${status.classes}`}>{status.label}</span>
					{entry?.status === "active" && entry?.is_expired && <span className="text-[11px] text-red-600">Past expiry date</span>}
				</div>
			</td>
		);
	}

	function callbackActivations(entry, columnIndex) {
		const used = entry?.domains?.length ?? entry?.activation_count ?? 0;
		const limit = parseInt(entry?.activation_limit) || 0;
		const full = limit > 0 && used >= limit;
		return (
			<td data-label="Activations" className="!px-5 py-3 text-left text-sm"
				key={columnIndex}>
				<div className="flex flex-col gap-0.5">
					<span className={`tabular-nums ${full ? "font-medium text-amber-700" : "text-gray-900"}`}>
						{used} / {limit > 0 ? limit : "∞"}
					</span>
					{entry?.domains?.length > 0 && (
						<span className="max-w-[180px] truncate text-xs text-gray-500" title={entry.domains.join(", ")}>
							{entry.domains[0]}{entry.domains.length > 1 ? ` +${entry.domains.length - 1}` : ""}
						</span>
					)}
				</div>
			</td>
		);
	}

	function callbackExpires(entry, columnIndex) {
		const days = daysFromToday(entry?.expires_at);
		return (
			<td data-label="Expires" className="!px-5 py-3 text-left text-sm"
				key={columnIndex}>
				<div className="flex flex-col gap-0.5">
					{entry?.is_lifetime ? (
						<span className="text-gray-900">Lifetime</span>
					) : (
						<>
							<span className="text-gray-900">{formatDay(entry?.expires_at) ?? "—"}</span>
							{days !== null && (
								<span className={`text-xs ${days < 0 ? "font-medium text-red-600" : days <= 14 ? "text-amber-600" : "text-gray-500"}`}>
									{days < 0 ? `Expired ${-days} day${days === -1 ? "" : "s"} ago` : days === 0 ? "Today" : `In ${days} day${days === 1 ? "" : "s"}`}
								</span>
							)}
						</>
					)}
					<span className="text-[11px] text-gray-400">Issued {formatDay(entry?.created_at) ?? "—"}</span>
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
								<div className={MENU_ITEM} onClick={() => copyKey(entry.license_key)}>
									<IconCopy size={16} /> Copy key
								</div>
								<Link className={MENU_ITEM} href={`/dashboard/licenses/${entry.id}`}>
									<IconExternalLink size={16} /> Open license
								</Link>
								{entry?.order_id > 0 && (
									<Link className={MENU_ITEM} href={`/dashboard/orders/${entry.order_id}`}>
										<IconExternalLink size={16} /> Open order #{entry.order_id}
									</Link>
								)}
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									confirmDelete([entry.id], `license #${entry.id}`);
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
					<h1 className="text-xl font-semibold text-gray-900">{("Licenses")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{allCount} {("licenses")}
						{statusCounts?.active > 0 && <> · <span className="text-emerald-600">{statusCounts.active} {("active")}</span></>}
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
						<IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
					</button>
					{permit.canCreate && (<PopoverButton buttonLabel={("Add License")} buttonIcon={<IconPlus size={16} />} title={"Add License"} drawer={"right"} drawerClass={"w-full sm:w-[600px]"} buttonClass={PRIMARY_BUTTON}>
						<div className="p-5 bg-gray-50 text-left">
							<LicenseCreate onCreated={fetchPosts} />
						</div>
					</PopoverButton>)}
				</div>
			</div>

			<div className="flex flex-wrap justify-between gap-3">

				<div className="flex flex-wrap gap-2">
					<select className={FILTER_SELECT} value={queryPrams?.status ?? ""} onChange={ev => {
						setselectedRows([]);
						setqueryPrams({ ...queryPrams, status: ev.target.value, paged: 1 });
					}}>
						<option value="">{("All Statuses")} ({allCount})</option>
						{Object.entries(LICENSE_STATUSES).map(([value, { label }]) => (
							<option value={value} key={value}>{label} ({statusCounts?.[value] ?? 0})</option>
						))}
					</select>

					<select className={FILTER_SELECT} value={queryPrams?.expired ?? ""} onChange={ev => {
						setselectedRows([]);
						setqueryPrams({ ...queryPrams, expired: ev.target.value, paged: 1 });
					}}>
						<option value="">{("Any expiry")}</option>
						<option value="false">{("Not expired")}</option>
						<option value="true">{("Past expiry date")}</option>
					</select>
				</div>

				<div className="flex gap-3 items-center justify-end">
					{selectedRows?.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
							onClick={() => {
								confirmDelete(selectedRows, `${selectedRows.length} selected license(s)`);
							}}>
							<IconTrash size={16} /> {("Delete")} ({selectedRows.length})
						</div>
					)}
				</div>
			</div>

			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={licensesData}
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

export default Licenses;
