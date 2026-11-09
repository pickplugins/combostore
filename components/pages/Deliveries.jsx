"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import PopoverButton from '../../components/PopoverButton';
import DeliveryEdit from '../../components/pages/DeliveryEdit';
import { useCounterStore } from '../../store/useCounterStore'
import { IconTrash, IconRefresh, IconTruckDelivery, IconExternalLink, IconPencil, IconMotorbike, IconUser, IconReceipt } from "@tabler/icons-react";
import { StatusBadge, CopyValue, courierName, trackingLink, parseDate, timeAgo, hasId } from "./deliveryUi";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same toolbar, select and badge styles as the Orders screen. */
const TOOLBAR_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const DANGER_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50";
const FILTER_SELECT =
	"w-full sm:w-auto !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-8 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";
const LINK = "font-medium text-gray-800 hover:text-[#634FE5] hover:underline";

const Deliveries = () => {

	const { token, addNotification } = useCounterStore()

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 20, });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}

	/* Columns: Notes is gone - deliveries have no notes field, so it was always empty. */
	var columns = {
		check: { label: ("Check"), },
		delivery_id: { label: ("Delivery"), callback: callbackDelivery, classes: "text-left" },
		order_id: { label: ("Order"), callback: callbackOrder, classes: "text-left" },
		courier: { label: ("Courier & tracking"), callback: callbackCourier, classes: "text-left" },
		rider_id: { label: ("Rider"), callback: callbackRider, classes: "text-left" },
		status: { label: ("Status"), callback: callbackStatus, classes: "text-left" },
		datetime: { label: ("Created"), callback: callbackDatetime, classes: "text-left" },
	};

	function delete_deliveries(ids) {

		ids = ids != undefined ? ids : selectedRows;
		if (!ids?.length) return;

		if (!confirm(ids.length === 1 ? `Delete delivery #${ids[0]}?` : `Delete ${ids.length} deliveries?`)) {
			return;
		}

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_deliveries", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ ids: ids }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then(() => {
				addNotification({ type: 'success', title: 'Deleted', content: ids.length === 1 ? `Delivery #${ids[0]} deleted.` : `${ids.length} deliveries deleted.` });
				setselectedRows([]);
				fetchPosts();
			})
			.catch((error) => {
				/* It used to fail silently, with the spinner left on. */
				setloading(false);
				addNotification({ type: 'error', title: 'Not deleted', content: error?.message ?? '' });
			});
	}

	function fetchPosts() {

		if (queryPrams.paged < 0) {
			return;
		}

		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_deliveries", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(queryPrams),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then((res) => {
				setproductsData({ posts: Array.isArray(res?.posts) ? res.posts : [], total: parseInt(res?.total, 10) || 0, maxPages: parseInt(res?.max_pages, 10) || 1 })
				setloading(false);
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Could not load deliveries', content: error?.message ?? '' });
			});
	}

	useEffect(() => {
		fetchPosts();
	}, [queryPrams]);

	/* The effect above refetches when the query changes; this used to fetch a second time with the old query. */
	function onChangeQueryPrams(next) {
		if (next) {
			setqueryPrams(next)
		}
	}

	function onRefreshRequest() {
		fetchPosts();
	}

	/* ---------------- cells ---------------- */

	function callbackDelivery(entry, columnIndex) {
		return (
			<td data-label="Delivery" className="!px-5 py-3 text-left" key={columnIndex}>
				<div className="flex items-start gap-3">
					<div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#634FE5]/10 text-[#634FE5] sm:flex">
						<IconTruckDelivery size={18} />
					</div>
					<div className="flex min-w-0 flex-col gap-1">
						<Link className={`${LINK} text-sm`} href={`/dashboard/deliveries/${entry?.id}`}>
							Delivery #{entry?.id}
						</Link>
						<div className="flex items-center gap-3 text-xs">
							<PopoverButton buttonLabel={"Edit"} buttonIcon={<IconPencil size={13} />} title={`Edit delivery #${entry?.id}`} drawer={"right"} buttonClass={`inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-900 cursor-pointer`}>
								<div className="p-5 bg-gray-50 text-left">
									<DeliveryEdit id={entry?.id} variant="drawer" />
								</div>
							</PopoverButton>
							<button type="button" className="inline-flex items-center gap-1 text-red-500 transition-colors hover:text-red-700" onClick={() => delete_deliveries([entry?.id])}>
								<IconTrash size={13} /> Delete
							</button>
						</div>
					</div>
				</div>
			</td>
		);
	}

	/* The order and customer, linked to their own pages (both used to link to /dashboard/deliveries/<id>). */
	function callbackOrder(entry, columnIndex) {
		return (
			<td data-label="Order" className="!px-5 py-3 text-left text-sm" key={columnIndex}>
				{hasId(entry?.order_id) ? (
					<div className="flex flex-col gap-1">
						<Link className={`${LINK} inline-flex items-center gap-1.5`} href={`/dashboard/orders/${entry.order_id}`}>
							<IconReceipt size={14} className="text-gray-400" /> Order #{entry.order_id}
						</Link>
						{hasId(entry?.customer_id) && (
							<Link className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#634FE5] hover:underline" href={`/dashboard/customers/${entry.customer_id}`}>
								<IconUser size={13} className="text-gray-400" /> Customer #{entry.customer_id}
							</Link>
						)}
					</div>
				) : <span className="text-gray-300">—</span>}
			</td>
		);
	}

	function callbackCourier(entry, columnIndex) {
		var name = courierName(entry);
		var link = trackingLink(entry);

		return (
			<td data-label="Courier" className="!px-5 py-3 text-left text-sm" key={columnIndex}>
				{name || entry?.consignment_id || entry?.tracking_code ? (
					<div className="flex min-w-0 max-w-[260px] flex-col gap-1">
						{name && <span className="font-medium text-gray-800">{name}</span>}
						{entry?.consignment_id && (
							<div className="flex items-center gap-1.5 text-xs text-gray-500">
								<span className="shrink-0">Consignment</span>
								<CopyValue value={entry.consignment_id} label="consignment id" />
							</div>
						)}
						{entry?.tracking_code && (
							<div className="flex items-center gap-1.5 text-xs text-gray-500">
								<span className="shrink-0">Tracking</span>
								<CopyValue value={entry.tracking_code} label="tracking code" />
							</div>
						)}
						{link && (
							<a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">
								Track parcel <IconExternalLink size={12} />
							</a>
						)}
					</div>
				) : <span className="text-gray-300">—</span>}
			</td>
		);
	}

	function callbackRider(entry, columnIndex) {
		return (
			<td data-label="Rider" className="!px-5 py-3 text-left text-sm" key={columnIndex}>
				{hasId(entry?.rider_id) ? (
					<Link className={`${LINK} inline-flex items-center gap-1.5`} href={`/dashboard/riders/${entry.rider_id}`}>
						<IconMotorbike size={14} className="text-gray-400" /> Rider #{entry.rider_id}
					</Link>
				) : <span className="text-gray-300">—</span>}
			</td>
		);
	}

	function callbackStatus(entry, columnIndex) {
		return (
			<td data-label="Status" className="!px-5 py-3 text-left" key={columnIndex}>
				<StatusBadge status={entry?.status} />
			</td>
		);
	}

	function callbackDatetime(entry, columnIndex) {
		var date = parseDate(entry?.datetime);
		return (
			<td data-label="Created" className="!px-5 py-3 text-left text-sm" key={columnIndex}>
				{date ? (
					<div className="flex flex-col">
						<span className="whitespace-nowrap text-gray-800">{date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}</span>
						<span className="whitespace-nowrap text-xs text-gray-500" title={date.toLocaleString()}>
							{date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })} · {timeAgo(date)}
						</span>
					</div>
				) : <span className="text-gray-300">—</span>}
			</td>
		);
	}

	var total = productsData?.total ?? 0;

	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Deliveries")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{total} {total === 1 ? ("delivery") : ("deliveries")} · {("Shipments booked with a courier or handed to a rider.")}
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
						<IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
					</button>
				</div>
			</div>

			<div className="flex flex-wrap items-center justify-between gap-3">
				{/* Sorting and page size are what get_deliveries supports; it has no search or status filter. */}
				<div className="flex flex-wrap items-center gap-2">
					<select aria-label="Sort" className={FILTER_SELECT} value={queryPrams?.order ?? "DESC"} onChange={ev => setqueryPrams({ ...queryPrams, order: ev.target.value, paged: 1 })}>
						<option value="DESC">{("Newest first")}</option>
						<option value="ASC">{("Oldest first")}</option>
					</select>
					<select aria-label="Per page" className={FILTER_SELECT} value={queryPrams?.per_page ?? 20} onChange={ev => setqueryPrams({ ...queryPrams, per_page: parseInt(ev.target.value, 10), paged: 1 })}>
						{[10, 20, 50, 100].map(n => <option key={n} value={n}>{n} {("per page")}</option>)}
					</select>
				</div>

				{selectedRows.length > 0 && (
					<div className="flex items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
						<span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
						<button type="button" className="!h-8 rounded-md px-2 text-sm text-gray-500 hover:bg-white hover:text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>
						{/* Labelled "Delete Products" before. */}
						<button type="button" className={`${DANGER_BUTTON} !h-8`} disabled={loading} onClick={() => delete_deliveries()}>
							<IconTrash size={15} /> {("Delete")}
						</button>
					</div>
				)}
			</div>

			{!loading && total === 0 && (productsData?.posts ?? []).length === 0 ? (
				<div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconTruckDelivery size={24} /></div>
					<div className="text-sm font-semibold text-gray-800">{("No deliveries yet")}</div>
					<p className="max-w-sm text-xs text-gray-500">{("A delivery is created when an order is sent to a courier or assigned to a rider, from the order's page.")}</p>
					<Link href="/dashboard/orders" className={`${TOOLBAR_BUTTON} mt-2`}>{("Go to orders")}</Link>
				</div>
			) : (
				<EntriesTable
					queryPrams={queryPrams}
					columns={columns}
					entries={productsData}
					itemPath={""}
					onChange={onChangeQueryPrams}
					loading={loading}
					selectedRows={selectedRows}
					onSelectRows={onSelectRows}
					onRefreshRequest={onRefreshRequest}
				/>
			)}
		</div>
	);
};

export default Deliveries;
