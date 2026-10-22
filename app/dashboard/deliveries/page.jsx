"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";
import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";









const page = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 10, });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { label: ("Check"), },
		delivery_id: { label: ("ID"), callback: callbackDeliveryId, classes: "w-96 text-left" },
		order_id: { label: ("Order id"), callback: callbackOrderId, classes: "text-center" },
		rider_id: { label: ("Rider"), callback: callbackRiderId, classes: "text-center" },
		// type: { label: ("Type"), callback: callbackType, classes: "text-center" },
		status: { label: ("Status"), callback: callbackStatus, classes: "text-center" },
		// latlang: { label: ("Lat-Lang"), callback: callbackLatlang, classes: "text-center" },

		notes: { label: ("Notes"), callback: callbackNotes, classes: "text-center" },
		datetime: { label: ("Datetime"), callback: callbackDatetime, classes: "text-center" },
		// expiryDate: { label: "Expiry Date", callback: callbackExpiryDate },
	};

	function delete_deliveries(ids) {


		if (!token) {
			//throw new Error("No token found");
		}

		if (queryPrams.paged < 0) {
			return;
		}

		ids = ids != undefined ? ids : selectedRows;



		var postData = {
			ids: ids,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_deliveries", {
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

						fetchPosts();




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	function start_delivery() {


		// if (!token) {
		// 	//throw new Error("No token found");
		// }

		if (queryPrams.paged < 0) {
			return;
		}

		var postData = {
			ids: selectedRows,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/start_delivery", {
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

						fetchPosts();




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}












	function fetchPosts() {



		if (!token) {
			//throw new Error("No token found");
		}


		if (queryPrams.paged < 0) {
			return;
		}


		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_deliveries", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {



						var posts = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;

						setproductsData({ posts: posts, total: total, maxPages: max_pages })
						//setqueryPrams({ ...queryPrams, loading: false })
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

		fetchPosts();
	}, [queryPrams]);


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
			fetchPosts();
		}

	}

	function onRefreshRequest(rows) {
		fetchPosts();
	}

	useEffect(() => {
		//checkUser();
	}, []);



	function callbackDatetime(entry, columnIndex) {

		var format = "d/m/Y";
		var dateInput = entry.datetime;
		// Ensure date is in a proper format for parsing
		const dateObj = new Date(dateInput?.replace(" ", "T"));

		if (!dateObj) {
			return (
				<td
					key={columnIndex}>
				</td>

			);

		}

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



	function callbackDeliveryId(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.id}`}
			>

				<div className="flex gap-5 items-center">



					<div className="text-left flex flex-col gap-4">
						<Link className="text-left text-gray-600 font-medium" href={`/dashboard/deliveries/${entry?.id}`}>
							#{entry?.id}
						</Link>

						<div className="flex gap-5 text-sm text-gray-500">

							<div className="text-red-400 hover:text-red-500 cursor-pointer" onClick={() => {
								delete_deliveries([entry?.id]);
							}}>Delete</div>


						</div>
					</div>
				</div>
			</td>

		);
	}

	function callbackOrderId(entry, columnIndex) {

		return (
			<td className="text-center "
				key={`title-${entry?.order_id}`}
			>

				<Link className=" text-gray-600 font-medium" href={`/dashboard/deliveries/${entry?.order_id}`}>
					{entry?.order_id}
				</Link>
			</td>

		);
	}
	function callbackRiderId(entry, columnIndex) {

		return (
			<td className="text-center "
				key={`title-${entry?.rider_id}`}
			>

				<Link className=" text-gray-600 font-medium" href={`/dashboard/deliveries/${entry?.rider_id}`}>
					{entry?.rider_id}
				</Link>
			</td>

		);
	}





	function callbackType(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.id}`}
			>


				{entry.type}

			</td>

		);
	}
	function callbackNotes(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.id}`}
			>


				{entry.notes}

			</td>

		);
	}






	function callbackLatlang(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.id}`}
			>
				{entry.latlang}
			</td>

		);
	}
	function callbackStatus(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.id}`}
			>


				{entry.status == 'publish' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">Publish</span>
				)}

				{entry.status == 'paused' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">Paused</span>
				)}
				{entry.status == 'draft' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">Draft</span>
				)}
				{entry.status == 'pending' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-yellow-50 px-2.5 py-1 text-[11px] font-semibold text-yellow-700 ring-1 ring-inset ring-yellow-200">Pending</span>
				)}
				{entry.status == 'resumed' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-inset ring-green-200">Resumed</span>
				)}
				{entry.status == 'delivered' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-inset ring-green-200">Delivered</span>
				)}
				{entry.status == 'canceled' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">Canceled</span>
				)}








			</td>

		);
	}




	return (

		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Deliveries")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("deliveries")}
					</p>
				</div>
			</div>

			<div className="flex flex-wrap gap-3 w-full justify-between items-center ">

				{/* <div className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer" onClick={ev => {
						start_delivery();
					}}>Add Delivery</div> */}


				<div className="flex gap-3 md:justify-end p-4">
					{selectedRows.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
							onClick={() => {
								delete_deliveries();
							}}>
							{("Delete Products")}
						</div>
					)}


				</div>
			</div>
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
		</div>



	);
};

export default page;
