"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../../components/EntriesTable";
import { useState, useEffect, useContext } from "react";

import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../../store/useUtilsStore';


const page = () => {

	const { wrapCurrency } = useUtilsStore()

	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var [ordersData, setordersData] = useState(null);
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}



	var columns = {
		check: { label: ("Check"), },
		id: { label: ("ID"), callback: callbackTitle, classes: "w-30 text-center" },
		event: { label: ("Event"), classes: "text-center" },
		value: { label: "Value", callback: callbackValue, classes: "text-center" },

		source: { label: ("Status"), classes: "text-center" },
		device: { label: ("Device"), classes: "text-center" },
		browser: { label: ("Browser"), classes: "text-center" },
		platform: { label: ("Platform"), classes: "text-center" },
		city: { label: ("City"), classes: "text-center" },




		updated_at: { label: ("Datetime"), callback: callbackFormatDate, classes: "text-center" },
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
						var errors = res?.errors;
						var success = res?.success;

						setloading(false);

						get_activities();




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
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
			get_activities();
		}

	}

	function onRefreshRequest(rows) {
		get_activities();
	}

	useEffect(() => {
		//checkUser();
	}, []);



	function callbackFormatDate(entry, columnIndex) {

		var format = "d/m/Y";
		var dateInput = entry.datetime;

		if (!dateInput) {

			return (
				<td
					key={columnIndex}>

				</td>

			);

		}


		// Ensure date is in a proper format for parsing
		const dateObj = new Date(dateInput.replace(" ", "T"));

		if (isNaN(dateObj)) {
			throw new Error("Invalid date format");
		}

		// Extract date components
		const day = String(dateObj.getDate()).padStart(2, '0');
		const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const year = dateObj.getFullYear();

		// Replace format placeholders with actual values
		//return ;

		return (
			<td
				key={columnIndex}>
				{format.replace("d", day).replace("m", month).replace("Y", year)}
			</td>

		);

	}



	function callbackTitle(entry, columnIndex) {

		return (
			<td className="text-center py-3"
				key={columnIndex}>
				<Link className=" text-gray-600 font-bold" href={`/orders/${entry.id}`}>
					{"#" + entry.id}
				</Link>
			</td>

		);
	}
	function callbackValue(entry, columnIndex) {

		return (
			<td className="text-center py-3"
				key={columnIndex}>
				{entry.value}
			</td>

		);
	}






	function callbackUserName(entry, columnIndex) {

		return (
			<td className="text-center "
				key={columnIndex}>
				{entry.billing_name}
			</td>

		);
	}

	function callbackTotal(entry, columnIndex) {

		return (
			<td className="text-center "
				key={columnIndex}>
				<span>{wrapCurrency(entry.total_amount)}</span>
			</td>

		);
	}
	function callbackSubtotal(entry, columnIndex) {

		return (
			<td className="text-center "
				key={columnIndex}>
				<span>{wrapCurrency(entry.subtotal_amount)}</span>
			</td>

		);
	}
	function callbackDiscount(entry, columnIndex) {

		return (
			<td className="text-center "
				key={columnIndex}>
				<span>{wrapCurrency(entry.discount_amount)}</span>
			</td>

		);
	}





	function callbackStatus(entry, columnIndex) {

		return (
			<td className="text-center "
				key={columnIndex}>

				<div className={` text-sm `}>
					{(entry.payment_status == 'pending' || entry.payment_status == '') && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200">Pending</span>
					)}
					{entry.payment_status == 'completed' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">Completed</span>
					)}
					{entry.payment_status == 'cancelled' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">Cancelled</span>
					)}
					{entry.payment_status == 'refunded' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">Refunded</span>
					)}
					{entry.payment_status == 'failed' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">Failed</span>
					)}
					{entry.payment_status == 'processing' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">Processing</span>
					)}
					{entry.payment_status == 'on-hold' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-700 ring-1 ring-inset ring-orange-200">Hold</span>
					)}


				</div>

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
			<div className="flex gap-3 w-full md:justify-end ">
				{selectedRows.length > 0 && (
					<div
						className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
						onClick={() => {
							delete_activities();
						}}>
						{("Delete Activities")}
					</div>
				)}


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

export default page;
