"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";

import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import Image from "next/image";

import { IconChevronDown, IconChevronUp, IconSquare, IconUsersPlus, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";




const page = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	// 

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ role: "rider", keyword: "", paged: 1, order: "DESC", number: 10, });
	var [newUserPrams, setnewUserPrams] = useState({ role: "rider", name: "", email: "", });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Name"), callback: callbackTitle, classes: "w-96 text-left" },
		user_login: { id: "user_login", label: ("Login"), callback: callbackUserLogin, classes: "text-left" },
		total_order: { id: "total_order", label: ("Total Delivery"), callback: callbackTotalOrder, classes: "text-left" },
		roles: { id: "roles", label: ("Roles"), callback: callbackRoles, classes: "text-left" },
		// brands: { id:"brands",label: ("Brands"), callback: callbackBrands, classes: "text-left" },
		// sku: { id:"sku",label: ("SKU"), },
		// type: { id:"check",label: "Type", callback: callbackType },

		// refunded_total: { id:"check",label: "Refunded" },
	};



	async function fetchPosts() {



		// if (!token) {
		// 	//throw new Error("No token found");
		// }


		if (queryPrams.paged < 0) {
			return;
		}

		var postData = {
			number: queryPrams.number,
			paged: queryPrams.paged,
			order: queryPrams.order,
			role: queryPrams.role,
		};
		postData = JSON.stringify(postData);




		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_users", {
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

	async function delete_users(ids) {


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
		fetch(serverUrl + "wp-json/combo-store/v2/delete_users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// Authorization: `Bearer ${token}`,
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

	async function add_user() {



		var postData = JSON.stringify(newUserPrams);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						var resObj = JSON.parse(res)

						var error = resObj?.error;
						var messages = resObj?.messages;



						if (error) {
							addNotification({ type: 'error', title: 'Rider added failed', content: `Sorry, riders added failed.${JSON.stringify(messages)}` })
						}

						if (!error) {
							addNotification({ type: 'success', title: 'Rider added', content: "Csutomer added scuccessful." })
						}


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
		fetchPosts();
	}, []);



	function callbackFormatDate(entry, columnIndex) {

		var format = "d/m/Y";
		var dateInput = entry.order_date;
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
			<td className="text-center pl-5 py-3"
				key={`title-${entry?.ID}`}>

				<div className="flex gap-3 items-center">

					{entry?.featured && (
						<div className="text-amber-500"><IconStarFilled /></div>
					)}
					{!entry?.featured && (
						<div className="text-gray-400"><IconStar /></div>
					)}

					{entry?.thumbnail?.src && (
						<div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
							<Link className=" font-medium" href={`/riders/${entry?.ID}`}>
								<Image src={entry?.thumbnail?.src} width={30} height={30} alt={``} />
							</Link>
						</div>
					)}



					<div className="text-left">
						<Link className="text-left text-gray-600 font-medium" href={`/riders/${entry?.ID}`}>
							{entry?.display_name}
						</Link>

						<div className="flex gap-3 text-sm text-gray-500">

							<div>#{entry?.ID}</div>
							<Link className="" href={`/riders/${entry?.ID}`}>
								View
							</Link>
							{/* <div className=" ">{entry?.sku}</div> */}
							{/* <div className="text-red-400 hover:text-red-500 cursor-pointer" onClick={() => {
								delete_users([entry?.ID]);
							}}>Delete</div> */}


						</div>
					</div>
				</div>
			</td>

		);
	}




	function callbackTotalOrder(entry, columnIndex) {


		return (
			<td className="text-center "
				key={`category-${entry?.ID}`}
			>
				<div className="flex text-sm ">
					{entry?.total_order}
				</div>
			</td>

		);
	}
	function callbackRoles(entry, columnIndex) {


		return (
			<td className="text-center "
				key={`category-${entry?.ID}`}
			>
				<div className="flex text-sm ">
					{entry?.roles.join(", ")}
				</div>
			</td>

		);
	}

	function callbackUserLogin(entry, columnIndex) {


		return (
			<td className="text-center pl-5"
				key={columnIndex}>
				<div className="flex text-sm ">
					{entry?.user_login}
				</div>
			</td>

		);
	}




	function callbackStatus(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`status-${entry?.ID}`}
			>
				{entry.status == 'publish' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">Publish</span>
				)}

				{entry.status == 'draft' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">Draft</span>
				)}
			</td>

		);
	}



	return (

		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Riders")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("riders")}
					</p>
				</div>
			</div>

			<div className="flex flex-wrap gap-3 w-full justify-between items-center ">









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
