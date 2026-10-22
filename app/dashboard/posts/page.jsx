"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";
import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import Image from "next/image";

import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";









const page = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	// 

	var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 10, });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Post Title"), callback: callbackTitle, classes: "w-120 text-gray-600" },
		categories: { id: "categories", label: ("Categories"), callback: callbackCategories, classes: " text-gray-600" },
		tags: { id: "tags", label: ("Tags"), callback: callbackTags, classes: " text-gray-600" },

		// refunded_total: { id:"check",label: "Refunded" },
		status: { id: "status", label: ("Status"), callback: callbackStatus, classes: " text-gray-600" },
	};



	async function fetchPosts() {



		// if (!token) {
		// 	//throw new Error("No token found");
		// }


		if (queryPrams.paged < 0) {
			return;
		}


		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_posts", {
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

	async function delete_products(ids) {


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
		fetch(serverUrl + "wp-json/combo-store/v2/delete_products", {
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

	async function add_product() {


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
		fetch(serverUrl + "wp-json/combo-store/v2/add_product", {
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













	useEffect(() => {

		fetchPosts();
	}, [queryPrams]);


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
			//fetchPosts();
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
				key={`title-${entry?.id}`}>

				<div className="flex gap-2 items-center">

					{entry?.featured && (
						<div className="text-amber-500"><IconStarFilled /></div>
					)}
					{!entry?.featured && (
						<div className="text-gray-400"><IconStar /></div>
					)}

					{entry?.post_thumbnail_url && (
						<div className="w-18 h-18 overflow-hidden border">
							<Image src={entry?.post_thumbnail_url} width={80} height={80} alt={``} />
						</div>
					)}



					<div className="text-left">
						<Link className="text-left text-gray-600 font-medium text-sm" href={`/dashboard/posts/${entry?.id}`}>
							{entry?.title}posts
						</Link>

						<div className="flex gap-3 text-xs text-gray-500">

							<div>#{entry?.id}</div>
							<Link className="" href={`/dashboard/posts/${entry?.id}`}>
								View
							</Link>
							{/* <div className=" ">{entry?.sku}</div> */}
							<div className="text-red-400 hover:text-red-500 cursor-pointer" onClick={() => {
								delete_products([entry?.id]);
							}}>Delete</div>


						</div>
					</div>
				</div>
			</td>

		);
	}





	function callbackCategories(entry, columnIndex) {


		return (
			<td className="text-center pl-5"
				key={`category-${entry?.id}`}
			>


				{entry?.categories && (
					<div className="flex text-xs justify-center flex-wrap">
						{entry?.categories?.map((item, index) => {
							return (
								<div key={index}>
									<span>{item.name}</span>
									{entry?.categories.length > (index + 1) && (
										<span className="pr-1">, </span>
									)}
								</div>
							)
						})}
					</div>
				)}


			</td>

		);
	}
	function callbackTags(entry, columnIndex) {


		return (
			<td className="text-center pl-5"
				key={`tags-${entry?.id}`}

			>

				<div className="flex text-xs justify-center flex-wrap">
					{entry?.tags.map((item, index) => {
						return (
							<div key={index}>
								<span>{item.name}</span>
								{entry?.tags.length > (index + 1) && (
									<span className="pr-1">, </span>
								)}
							</div>
						)
					})}
				</div>
			</td>

		);
	}





	function callbackStatus(entry, columnIndex) {

		return (
			<td className="text-center pl-5 text-xs"
				key={`status-${entry?.id}`}
			>
				{/* {JSON.stringify(entry.status)} */}


				{entry.status == 'publish' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-inset ring-green-200">Published</span>
				)}

				{entry.status == 'draft' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">Draft</span>
				)}
			</td>

		);
	}
	// function callbackStock(entry, columnIndex) {

	// 	return (
	// 		<td className="text-center pl-5"
	// 			key={columnIndex}>

	// 			{entry?.stock_count}
	// 		</td>

	// 	);
	// }
	function callbackType(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={columnIndex}>

				{entry.type == 'physical' && (
					<span className="">Physical</span>
				)}

				{entry.type == 'digital' && (
					<span className="">Digital</span>
				)}
			</td>

		);
	}











	return (

		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Posts")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("posts")}
					</p>
				</div>

				<div className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer" onClick={ev => {
					add_product();
				}}>Add Post</div>
			</div>

			<div className="flex justify-end ">
				<div className="flex gap-3">
					{selectedRows.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
							onClick={() => {
								delete_products();
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
