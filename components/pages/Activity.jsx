"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useContext } from "react";

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconActivity, IconCreditCard, IconDeviceDesktop, IconDeviceMobile, IconShoppingCartPlus } from "@tabler/icons-react";


const CHIP = "inline-flex max-w-full items-center truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

const EVENTS = {
	addToCart: { label: "Add to cart", icon: IconShoppingCartPlus, classes: "bg-emerald-50 text-emerald-600" },
	goToCheckout: { label: "Go to checkout", icon: IconCreditCard, classes: "bg-indigo-50 text-indigo-600" },
};

/* New events and sources appear here without a code change: "cartButton" reads "Cart button". */
function humanize(text) {

	if (!text) {
		return "";
	}

	const words = String(text).replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").toLowerCase();

	return words.charAt(0).toUpperCase() + words.slice(1);
}

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


const Activity = () => {

	const { token, addNotification } = useCounterStore()



	var [ordersData, setordersData] = useState(null);
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}



	var columns = {
		check: { label: ("Check"), },
		id: { label: ("Event"), callback: callbackEvent, classes: "text-left text-gray-600" },
		value: { label: ("Details"), callback: callbackDetails, classes: "text-left text-gray-600" },
		userid: { label: ("User"), callback: callbackUser, classes: "text-left text-gray-600" },
		device: { label: ("Device"), callback: callbackDevice, classes: "text-left text-gray-600" },
		city: { label: ("City"), callback: callbackCity, classes: "text-left text-gray-600" },
		updated_at: { label: ("Datetime"), callback: callbackDatetime, classes: "text-right pr-2 text-gray-600" },
	};


	function delete_activities() {


		if (!token) {
			//throw new Error("No token found");
		}

		if (queryPrams.paged < 0) {
			return;
		}

		var postData = {
			ids: selectedRows,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_activities", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						setloading(false);

						get_activities();




					});
				}
			})
			.catch((_error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Activities not deleted', content: "Your change could not be saved. Please try again." })
			});
	}

	function get_activities() {




		// if (!token) {
		// 	//throw new Error("No token found");
		// }


		if (queryPrams.paged < 0) {
			return;
		}


		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_activities", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {




						var orders = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;




						setordersData({ posts: orders, total: total, maxPages: max_pages })
						setloading(false);


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}


	useEffect(() => {

		get_activities();
	}, [queryPrams]);


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
		}

	}

	function onRefreshRequest(rows) {
		get_activities();
	}

	useEffect(() => {
		//checkUser();
	}, []);



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
						<div className="text-sm font-medium text-gray-900">{event?.label ?? (humanize(entry?.event) || ("Unknown event"))}</div>

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
								{("Product")} <span className="font-mono text-[11px] text-gray-400">#{productId}</span>
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
			<td data-label="User" className="!px-5 py-3 text-left"
				key={columnIndex}>

				{userId > 0 && (
					<span className="text-sm text-gray-700">
						{("User")} <span className="font-mono text-[11px] text-gray-400">#{userId}</span>
					</span>
				)}
				{!(userId > 0) && (
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
						<span className="text-sm text-gray-700">{entry?.browser || ("Unknown")}</span>
						{entry?.platform && (
							<span className="text-xs text-gray-500">{entry.platform}</span>
						)}
					</div>
				</div>
			</td>

		);
	}


	function callbackCity(entry, columnIndex) {

		return (
			<td data-label="City" className="!px-5 py-3 text-left"
				key={columnIndex}>
				{entry?.city ? <span className="text-sm text-gray-700">{entry.city}</span> : EMPTY}
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


	return (
		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Activity")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{ordersData?.total ?? 0} {("activity entries")}
					</p>
				</div>
			</div>
			{selectedRows.length > 0 && (
				<div className="flex items-center justify-end gap-3">
					<div
						className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
						onClick={() => {
							if (confirm("Please confirm?")) {
								delete_activities();
							}
						}}>
						{("Delete Activities")}
					</div>
				</div>
			)}

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

export default Activity;
