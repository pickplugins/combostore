"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";

import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import Image from "next/image";

import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";






// const res = await fetch(`http://localhost/wp/wp-json/combo-store/v2/get_products`, {
// 	method: "POST",
// 	headers: {
// 		'Content-Type': 'application/json',
// 	}
// });
// const data = await res.json();




const page = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var [ticketsData, setticketsData] = useState(null);
	var [userRoles, setuserRoles] = useState(null);




	var queryPramsDefault = { keyword: "", paged: 1, orderby: "date", order: "DESC", per_page: 10, };
	var [queryPrams, setqueryPrams] = useState(queryPramsDefault);

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	useEffect(() => {
		if (userDataX != undefined || userDataX != null) {

			var roles = [];
			Object.entries(userDataX?.roles).map(args => {

				var role = args[1]
				roles.push(role)
			})

			setuserRoles(roles);
		}
	}, [userDataX]);

	var columns = {
		check: { label: ("Check"), },
		id: { label: ("Ticket"), callback: callbackTitle, classes: "w-96 text-left" },
		categories: { label: ("Categories"), callback: callbackCategories, classes: "text-left" },
		tags: { label: ("Tags"), callback: callbackTags, classes: "text-left" },

		status: { label: ("Status"), callback: callbackStatus, classes: "text-center" },
		priority: { label: ("Priority"), callback: callbackPriority, classes: "text-center" },
		// markedAs: { label: ("Marked As"), callback: callbackMarkedAs, classes: "text-left" },
		author: { label: ("Author"), callback: callbackAuthor, classes: "text-right" },
	};

	function delete_tickets(ids) {


		if (!token) {
			//throw new Error("No token found");
		}

		if (queryPrams.paged < 0) {
			return;
		}

		ids = ids != undefined ? ids : selectedRows;

		//

		var postData = {
			ids: ids,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_tickets", {
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

	function add_ticket() {


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
		fetch(serverUrl + "wp-json/combo-store/v2/add_ticket", {
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

		var postData = {
			per_page: queryPrams.per_page,
			paged: queryPrams.paged,
			order: queryPrams.order,
			keyword: queryPrams.keyword,
		};
		postData = JSON.stringify(postData);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_tickets", {
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

						//

						var posts = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;




						setticketsData({ posts: posts, total: total, maxPages: max_pages })
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
			<td className=" py-3 pl-5"
				key={columnIndex}>

				<div className="flex gap-3 items-center ">

					{entry?.featured && (
						<div className="text-amber-500 "><IconStarFilled /></div>
					)}
					{!entry?.featured && (
						<div className="text-gray-400"><IconStar /></div>
					)}

					<div className="w-12 h-12 overflow-hidden ">
						{entry?.post_thumbnail_url && (
							<Image src={entry?.post_thumbnail_url} width={40} height={40} alt={``} />

						)}
					</div>

					<div className="text-left flex-1">
						<Link className="text-left  font-medium" href={`/dashboard/tickets/${entry?.id}/`}>
							{entry?.title} - {markedAsLabel(entry.markedAs)}
						</Link>

						<div className="flex gap-3 text-sm ">

							<div>#{entry?.id}</div>
							<Link className="" href={`/dashboard/tickets/${entry?.id}/`}>
								{("View")}
							</Link>
							{/* <div className=" ">{entry?.sku}</div> */}
							<div className="text-red-400 hover:text-red-500 cursor-pointer" onClick={() => {
								delete_tickets([entry?.id]);
							}}>{("Delete")}</div>


						</div>
					</div>
				</div>
			</td>

		);
	}




	function callbackCategories(entry, columnIndex) {


		return (
			<td className=" pl-5"
				key={columnIndex}>
				<div className="flex text-sm flex-wrap ">
					{entry?.categories.map((item, index) => {

						return (
							<div >
								<span>{item.name}</span>
								{entry?.categories.length > (index + 1) && (
									<span className="pr-1">, </span>
								)}
							</div>
						)

					})}
				</div>
			</td>

		);
	}
	function callbackTags(entry, columnIndex) {


		return (
			<td className=" pl-5"
				key={columnIndex}>
				<div className="flex text-sm flex-wrap ">
					{entry?.tags.map((item, index) => {

						return (
							<div >
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
			<td className=" pl-5"
				key={columnIndex}>
				{entry.status == 'publish' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">{("Publish")}</span>
				)}

				{entry.status == 'draft' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">{("Draft")}</span>
				)}
				{entry.status == 'pending' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">{("Pending")}</span>
				)}


			</td>

		);
	}

	function callbackPriority(entry, columnIndex) {

		return (
			<td className=" pl-5"
				key={columnIndex}>
				{entry.priority == '1' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">{("Normal")}</span>
				)}

				{entry.priority == '10' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">{("High")}</span>
				)}
				{entry.priority == '90' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">{("Urgent")}</span>
				)}


			</td>

		);
	}

	function markedAsLabel(markedAs) {

		return (
			<>
				{markedAs == 'open' && (
					/* Had `text-white` with no background, so it rendered invisible. */
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">{("Open")}</span>
				)}

				{markedAs == 'closed' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600 ring-1 ring-inset ring-gray-200">{("Closed")}</span>
				)}
				{markedAs == 'processing' && (
					<span className="inline-flex items-center whitespace-nowrap rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">{("Processing")}</span>
				)}


			</>

		);
	}











	function callbackAuthor(entry, columnIndex) {

		return (
			<td className=" px-5 text-right "
				key={columnIndex}>

				<div className="flex  gap-2 items-center justify-end text-sm">

					<div className="w-8 h-8 rounded-full overflow-hidden">
						<Image src={entry?.author?.avatar} width={40} height={40} alt={``} />
					</div>
					<div>{entry?.author?.name}</div>

				</div>




			</td>

		);
	}










	return (



		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Tickets")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{ticketsData?.total ?? 0} {("tickets")}
					</p>
				</div>
			</div>



			<div className="flex justify-between ">

				<div>
					{/* <div className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer" onClick={ev => {
								add_ticket();
							}}>{("Add ticket")}</div> */}

					<Link className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer" href={`/dashboard/create-tickets/`} >Create Ticket</Link>

				</div>
				<div className="flex gap-3 justify-end ">

					{userRoles?.includes("administrator") && (
						<>
							{selectedRows.length > 0 && (
								<div
									className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
									onClick={() => {
										delete_tickets();
									}}>
									{("Delete tickets")}
								</div>
							)}
						</>
					)}





				</div>
			</div>
			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={ticketsData}
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
