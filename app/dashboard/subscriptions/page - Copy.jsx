"use client";
import Link from "next/link";
import React from "react";
import { useContext, useEffect, useState } from "react";

import EntriesTable from "../../../components/EntriesTable";
import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const page = () => {


	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


	var [subscriptionsData, setsubscriptionsData] = useState(null);
	var [queryPrams, setqueryPrams] = useState({
		keyword: "",
		paged: 1,
		order: "DESC",
		per_page: 10,
		first_date: "",
		last_date: "",
	});


	var [loading, setloading] = useState(false);

	var [selectedRows, setselectedRows] = useState([]);

	function onSelectRows(rows) {
		setselectedRows(rows);
	}
	function onRefreshRequest(rows) {
		fetchPosts();
	}

	function delete_subscriptions() {


		if (!token) {
			////throw new Error("No token found");
		}

		if (queryPrams.paged < 0) {
			return;
		}

		var postData = {
			ids: selectedRows,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/delete_subscriptions",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: postData,
			}
		)
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

		var postData = JSON.stringify(queryPrams);

		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_subscriptions", {
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
						var posts = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;

						setsubscriptionsData({
							posts: posts,
							total: total,
							maxPages: max_pages,
						});
						setloading(false);

						setTimeout(() => { }, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	// useEffect(() => {
	// 	fetchPosts();
	// }, []);

	useEffect(() => {
		fetchPosts();
	}, [queryPrams]);

	var columns = {
		check: { label: ("Check") },
		id: { label: ("ID"), callback: callbackTitleLinkTo, classes: "w-30" },
		// order_id: { label: "Order id" },
		user_name: { label: ("User name") },
		user_email: { label: ("Email") },
		// test_mode: { label: "Test Mode" },
		trial_ends_at: { label: ("Trial Ends") },
		renews_at: { label: ("Renews") },
		// total: { label: ("Total") },

		datetime: { label: ("Datetime"), callback: callbackFormatDate },
	};

	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams);
			fetchPosts();
		}
	}

	function callbackTitleLinkTo(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={columnIndex}>
				<Link className="text-left text-emerald-600 font-bold" href={`/apikeys/${entry.id}`}>
					{"#" + entry.id}
				</Link>
			</td>

		);
	}


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

	return (
		<div>
			<div>
				<div className="flex w-full gap-2 md:justify-end p-4">
					{selectedRows.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
							onClick={() => {
								delete_subscriptions();
							}}>
							{("Delete Subscriptions")}
						</div>
					)}


				</div>

				<EntriesTable
					queryPrams={queryPrams}
					columns={columns}
					entries={subscriptionsData}
					itemPath={"subscriptions"}
					onChange={onChangeQueryPrams}
					loading={loading}
					selectedRows={selectedRows}
					onSelectRows={onSelectRows}
					onRefreshRequest={onRefreshRequest}
				/>
			</div>
		</div>
	);
};

export default page;
