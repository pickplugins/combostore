"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect } from "react";

import { useCounterStore } from '../../store/useCounterStore'
import DateRangeFilter, { dateRangeLabel } from "../DateRangeFilter";
import countries from "../../lib/Countries";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconActivity, IconCreditCard, IconNumbers, IconDeviceDesktop, IconDeviceMobile, IconShoppingCartPlus, IconShoppingCartMinus, IconRefresh, IconTrash, IconWorld, IconX } from "@tabler/icons-react";
import { useCan } from '../../lib/useCan';


const CHIP = "inline-flex max-w-full items-center truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700";
const TOOLBAR_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const DANGER_BUTTON =
	"inline-flex !h-8 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50";
const FILTER_SELECT =
	"w-full sm:w-auto !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-8 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";
const FILTER_CHIP = "flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700";
const FILTER_CHIP_X = "inline-flex h-5 w-5 items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-800 cursor-pointer";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

const EVENTS = {
	addToCart: { label: "Add to cart", icon: IconShoppingCartPlus, classes: "bg-emerald-50 text-emerald-600" },
	removeFromCart: { label: "Remove from cart", icon: IconShoppingCartMinus, classes: "bg-rose-50 text-rose-600" },
	goToCheckout: { label: "Go to checkout", icon: IconCreditCard, classes: "bg-indigo-50 text-indigo-600" },
	quantityChange: { label: "Quantity change", icon: IconNumbers, classes: "bg-amber-50 text-amber-600" },
};

const COUNTRY_NAMES = Object.fromEntries((countries ?? []).map(c => [c.code2, c.name]));

/* New events and sources appear here without a code change: "cartButton" reads "Cart button". */
function humanize(text) {

	if (!text) {
		return "";
	}

	const words = String(text).replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").toLowerCase();

	return words.charAt(0).toUpperCase() + words.slice(1);
}

const eventLabel = (event) => EVENTS[event]?.label ?? (humanize(event) || "Unknown event");

/* `value` is whatever the storefront logged, so nothing here can assume valid JSON. */
function parseValue(value) {

	if (!value) {
		return null;
	}

	try {
		return JSON.parse(value);
	} catch (_error) {
		return value;
	}
}

/* The server sends {} as [] when a facet is empty. */
const asCounts = (value) => (value && !Array.isArray(value) && typeof value === "object" ? value : {});

const EMPTY_FILTERS = { keyword: "", event: "", country: "", visitor: "", from_date: "", to_date: "" };


/*
	The storefront's activity log (add to cart, go to checkout, ...), filtered
	by event, country, visitor and date. get_activities is staff only and
	sends the counts per event and per country for the current filters, so
	each dropdown shows what picking it would leave.
*/
const Activity = () => {

	const { token, addNotification } = useCounterStore()
	const permit = useCan("activity"); /* Roles & Permissions */

	var [ordersData, setordersData] = useState(null);
	var [queryPrams, setqueryPrams] = useState({ paged: 1, order: "DESC", per_page: 20, ...EMPTY_FILTERS });
	var [eventCounts, seteventCounts] = useState({});
	var [countryCounts, setcountryCounts] = useState({});
	var [dateResetKey, setdateResetKey] = useState(0);
	var [errorMessage, seterrorMessage] = useState("");

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { label: ("Check"), },
		id: { label: ("Event"), callback: callbackEvent, classes: "text-left text-gray-600" },
		value: { label: ("Details"), callback: callbackDetails, classes: "text-left text-gray-600" },
		userid: { label: ("Visitor"), callback: callbackUser, classes: "text-left text-gray-600" },
		device: { label: ("Device"), callback: callbackDevice, classes: "text-left text-gray-600" },
		country: { label: ("Country"), callback: callbackCountry, classes: "text-left text-gray-600" },
		updated_at: { label: ("Datetime"), callback: callbackDatetime, classes: "text-right pr-2 text-gray-600" },
	};


	function delete_activities() {
if (!permit.allowed("delete")) return permit.denied();

		if (!selectedRows.length) return;
		if (!confirm(`Delete ${selectedRows.length} activity ${selectedRows.length === 1 ? "entry" : "entries"}? This cannot be undone.`)) return;

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_activities", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ ids: selectedRows }),
		})
			.then(async (response) => {
				const res = await response.json().catch(() => null);
				if (!response.ok || res?.status !== "success") {
					throw new Error(res?.message || `Server answered ${response.status}.`);
				}
				return res;
			})
			.then((res) => {
				addNotification({ type: 'success', title: 'Activity deleted', content: res?.message ?? "" });
				setselectedRows([]);
				get_activities();
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Activities not deleted', content: error?.message ?? "" });
			});
	}

	function get_activities() {

		if (queryPrams.paged < 0) {
			return;
		}

		setloading(true);
		seterrorMessage("");

		fetch(serverUrl + "wp-json/combo-store/v2/get_activities", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(queryPrams),
		})
			.then(async (response) => {
				const res = await response.json().catch(() => null);
				if (!response.ok) {
					throw new Error(res?.message || `Server answered ${response.status}.`);
				}
				return res;
			})
			.then((res) => {
				setordersData({ posts: Array.isArray(res?.posts) ? res.posts : [], total: parseInt(res?.total, 10) || 0, maxPages: parseInt(res?.max_pages, 10) || 1 });
				seteventCounts(asCounts(res?.events));
				setcountryCounts(asCounts(res?.countries));
				setloading(false);
			})
			.catch((error) => {
				/* It used to fail silently, with the spinner left on. */
				setloading(false);
				seterrorMessage(error?.message ?? "");
			});
	}

	/* The token is restored after the first render; asking without it is refused now. */
	useEffect(() => {
		if (!token) return;
		get_activities();
	}, [queryPrams, token]);


	function onChangeQueryPrams(next) {
		if (next) {
			setqueryPrams(next)
		}
	}

	function onRefreshRequest() {
		get_activities();
	}

	function setFilter(patch) {
		setqueryPrams({ ...queryPrams, ...patch, paged: 1 });
	}

	function clearFilters() {
		setdateResetKey((k) => k + 1);
		setqueryPrams({ ...queryPrams, ...EMPTY_FILTERS, paged: 1 });
	}


	function callbackEvent(entry, columnIndex) {

		var event = EVENTS[entry?.event];
		var Icon = event?.icon ?? IconActivity;

		return (
			<td data-label="Event" className="!px-5 py-3 text-left"
				key={columnIndex}>

				<div className="flex min-w-0 flex-1 items-center gap-3">

					<div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${event?.classes ?? "bg-gray-100 text-gray-500"}`}>
						<Icon size={18} stroke={1.75} />
					</div>

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
						<div className="text-sm font-medium text-gray-900">{eventLabel(entry?.event)}</div>

						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
							{entry?.source && (
								<span>{humanize(entry.source)}</span>
							)}
						</div>
					</div>
				</div>
			</td>

		);
	}


	function callbackDetails(entry, columnIndex) {

		var value = parseValue(entry?.value);
		var isObject = value && typeof value === "object";
		var isEmpty = !value || (isObject && Object.keys(value).length === 0);
		var { productId, ...rest } = isObject ? value : {};

		return (
			<td data-label="Details" className="!px-5 py-3 text-left"
				key={columnIndex}>

				{isEmpty && EMPTY}

				{!isEmpty && (
					<div className="flex flex-wrap items-center gap-1.5">

						{productId && (
							<Link className="text-sm text-gray-700 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/products/${productId}`}>
								{entry?.product_title || ("Product")} <span className="font-mono text-[11px] text-gray-400">#{productId}</span>
							</Link>
						)}

						{!isObject && (
							<span className={CHIP}>{String(value)}</span>
						)}

						{Object.entries(rest).map(([key, item]) => {
							return (
								<span key={key} className={CHIP}>{humanize(key)}: {typeof item === "object" ? JSON.stringify(item) : String(item)}</span>
							)
						})}

					</div>
				)}
			</td>

		);
	}


	function callbackUser(entry, columnIndex) {

		var userId = parseInt(entry?.userid);

		return (
			<td data-label="Visitor" className="!px-5 py-3 text-left"
				key={columnIndex}>

				{userId > 0 ? (
					<Link className="text-sm text-gray-700 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/customers/${userId}`}>
						{entry?.user_name || ("User")} <span className="font-mono text-[11px] text-gray-400">#{userId}</span>
					</Link>
				) : (
					<span className="text-sm text-gray-400">{("Guest")}</span>
				)}
			</td>

		);
	}


	function callbackDevice(entry, columnIndex) {

		/* The device field holds the whole user agent, kept as a tooltip. */
		var isMobile = /Mobi|Android|iPhone|iPad/i.test(entry?.device ?? "");
		var Icon = isMobile ? IconDeviceMobile : IconDeviceDesktop;

		return (
			<td data-label="Device" className="!px-5 py-3 text-left"
				key={columnIndex}>

				<div className="flex items-center gap-2" title={entry?.device}>
					<Icon size={16} stroke={1.75} className="shrink-0 text-gray-400" />
					<div className="flex min-w-0 flex-col text-left">
						<span className="text-sm text-gray-700">{entry?.browser && entry.browser !== "unknown" ? entry.browser : ("Unknown")}</span>
						{entry?.platform && entry.platform !== "unknown" && (
							<span className="text-xs text-gray-500">{entry.platform}</span>
						)}
					</div>
				</div>
			</td>

		);
	}


	function callbackCountry(entry, columnIndex) {

		var code = entry?.country ?? "";

		return (
			<td data-label="Country" className="!px-5 py-3 text-left"
				key={columnIndex}>
				{code ? (
					<span className="inline-flex items-center gap-1.5 text-sm text-gray-700" title={entry?.ip ? `IP ${entry.ip}` : undefined}>
						{COUNTRY_NAMES[code] ?? code}
					</span>
				) : (
					/* Older rows have a city from geoPlugin, when it still answered. */
					entry?.city ? <span className="text-sm text-gray-700">{entry.city}</span> : EMPTY
				)}
			</td>

		);
	}


	function callbackDatetime(entry, columnIndex) {

		/* A row with a bad date should show a dash, not take the whole table down. */
		var date = new Date(String(entry?.datetime ?? "").replace(" ", "T"));
		var valid = !isNaN(date);

		return (
			<td data-label="Datetime" className="!px-5 py-3 text-right"
				key={columnIndex}>

				{!valid && EMPTY}

				{valid && (
					<div className="flex flex-col items-end">
						<span className="whitespace-nowrap text-sm tabular-nums text-gray-700">{date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
						<span className="whitespace-nowrap text-xs tabular-nums text-gray-500">{date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</span>
					</div>
				)}
			</td>

		);
	}


	var total = ordersData?.total ?? 0;
	var hasDates = !!(queryPrams.from_date || queryPrams.to_date);
	var filtered = !!(queryPrams.keyword || queryPrams.event || queryPrams.country || queryPrams.visitor || hasDates);
	var eventTotal = Object.values(eventCounts).reduce((a, b) => a + b, 0);
	var countryTotal = Object.values(countryCounts).reduce((a, b) => a + b, 0);
	var countryOptions = Object.entries(countryCounts).filter(([code]) => code !== "");

	return (
		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Activity")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{total} {filtered ? ("entries match the filters") : ("activity entries")} · {("What shoppers do on the store: add to cart, go to checkout, and more.")}
					</p>
				</div>

				<button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={get_activities}>
					<IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
				</button>
			</div>


			{/* One card per event for the current filters; a click filters to it. */}
			{eventTotal > 0 && (
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
					{Object.entries(eventCounts).map(([event, count]) => {
						var meta = EVENTS[event];
						var Icon = meta?.icon ?? IconActivity;
						var active = queryPrams.event === event;
						return (
							<button key={event} type="button" onClick={() => setFilter({ event: active ? "" : event })}
								className={`flex items-center gap-3 rounded-xl border bg-white p-3 text-left transition-colors ${active ? "border-[#634FE5] ring-1 ring-[#634FE5]" : "border-gray-200 hover:border-gray-300"}`}>
								<div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${meta?.classes ?? "bg-gray-100 text-gray-500"}`}>
									<Icon size={18} stroke={1.75} />
								</div>
								<div className="min-w-0">
									<div className="truncate text-xs text-gray-500">{eventLabel(event)}</div>
									<div className="text-lg font-semibold tabular-nums text-gray-900">{count}</div>
								</div>
							</button>
						);
					})}
				</div>
			)}


			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap items-center gap-2">

					<select aria-label="Event" className={FILTER_SELECT} value={queryPrams.event} onChange={ev => setFilter({ event: ev.target.value })}>
						<option value="">{("All events")}{eventTotal ? ` (${eventTotal})` : ""}</option>
						{Object.entries(eventCounts).map(([event, count]) => (
							<option key={event} value={event}>{eventLabel(event)} ({count})</option>
						))}
						{queryPrams.event && !(queryPrams.event in eventCounts) && <option value={queryPrams.event}>{eventLabel(queryPrams.event)}</option>}
					</select>

					<select aria-label="Country" className={FILTER_SELECT} value={queryPrams.country} onChange={ev => setFilter({ country: ev.target.value })}>
						<option value="">{("All countries")}{countryTotal ? ` (${countryTotal})` : ""}</option>
						{countryOptions.map(([code, count]) => (
							<option key={code} value={code}>{COUNTRY_NAMES[code] ?? code} ({count})</option>
						))}
						{countryCounts[""] > 0 && <option value="none">{("Unknown")} ({countryCounts[""]})</option>}
					</select>

					<select aria-label="Visitor" className={FILTER_SELECT} value={queryPrams.visitor} onChange={ev => setFilter({ visitor: ev.target.value })}>
						<option value="">{("All visitors")}</option>
						<option value="user">{("Signed in")}</option>
						<option value="guest">{("Guests")}</option>
					</select>

					<DateRangeFilter
						from={queryPrams.from_date}
						to={queryPrams.to_date}
						resetKey={dateResetKey}
						selectClass={FILTER_SELECT}
						onChange={(from, to) => setFilter({ from_date: from, to_date: to })}
					/>

					<select aria-label="Sort" className={FILTER_SELECT} value={queryPrams.order} onChange={ev => setFilter({ order: ev.target.value })}>
						<option value="DESC">{("Newest first")}</option>
						<option value="ASC">{("Oldest first")}</option>
					</select>
				</div>

				{selectedRows.length > 0 && (
					<div className="flex items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
						<span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
						<button type="button" className="!h-8 rounded-md px-2 text-sm text-gray-500 hover:bg-white hover:text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>
						<button type="button" className={DANGER_BUTTON} disabled={loading} {...permit.hide("delete")} onClick={delete_activities}>
							<IconTrash size={15} /> {("Delete")}
						</button>
					</div>
				)}
			</div>


			{filtered && (
				<div className="flex flex-wrap items-center gap-2">
					{queryPrams.event && (
						<span className={FILTER_CHIP}>{eventLabel(queryPrams.event)}
							<span className={FILTER_CHIP_X} aria-label="Clear event filter" onClick={() => setFilter({ event: "" })}><IconX size={13} /></span></span>
					)}
					{queryPrams.country && (
						<span className={FILTER_CHIP}><IconWorld size={13} />{queryPrams.country === "none" ? ("Unknown country") : (COUNTRY_NAMES[queryPrams.country] ?? queryPrams.country)}
							<span className={FILTER_CHIP_X} aria-label="Clear country filter" onClick={() => setFilter({ country: "" })}><IconX size={13} /></span></span>
					)}
					{queryPrams.visitor && (
						<span className={FILTER_CHIP}>{queryPrams.visitor === "guest" ? ("Guests") : ("Signed in")}
							<span className={FILTER_CHIP_X} aria-label="Clear visitor filter" onClick={() => setFilter({ visitor: "" })}><IconX size={13} /></span></span>
					)}
					{hasDates && (
						<span className={FILTER_CHIP}>{dateRangeLabel(queryPrams.from_date, queryPrams.to_date)}
							<span className={FILTER_CHIP_X} aria-label="Clear date filter" onClick={() => { setdateResetKey((k) => k + 1); setFilter({ from_date: "", to_date: "" }); }}><IconX size={13} /></span></span>
					)}
					<button type="button" className="!border-0 !bg-transparent !p-0 !text-xs !font-medium !text-gray-500 !shadow-none hover:!text-red-600" onClick={clearFilters}>{("Clear all")}</button>
				</div>
			)}


			{errorMessage && (
				<div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
					{("Could not load activity.")} {errorMessage}
				</div>
			)}

			{!loading && !errorMessage && total === 0 ? (
				<div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconActivity size={24} /></div>
					<div className="text-sm font-semibold text-gray-800">{filtered ? ("No activity matches these filters") : ("No activity yet")}</div>
					<p className="max-w-sm text-xs text-gray-500">{filtered ? ("Try a wider date range or clear a filter.") : ("Add to cart and other shopper actions on the store will show up here.")}</p>
					{filtered && <button type="button" className={`${TOOLBAR_BUTTON} mt-2`} onClick={clearFilters}>{("Clear filters")}</button>}
				</div>
			) : (
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
			)}
		</div>
	);
};

export default Activity;
