"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../components/EntriesTable";

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import Image from "next/image";

import { IconDotsVertical, IconEyeShare, IconPlus, IconTrash, IconStarFilled, IconStar } from "@tabler/icons-react";
import PopoverButton from "../../components/PopoverButton";


const ICON_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const PILL = "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold";

const CHIP = "inline-flex max-w-full items-center truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700";

/* The server decides; this only hides Delete from people it would refuse. */
const STAFF_ROLES = ["administrator", "support_agent", "shop_manager", "store_manager"];

/* The ticket's own state, not the WordPress post status: every ticket is "pending". */
const STATUS_PILLS = {
	open: { label: "Open", classes: "bg-emerald-50 text-emerald-700" },
	processing: { label: "Processing", classes: "bg-blue-50 text-blue-700" },
	closed: { label: "Closed", classes: "bg-gray-100 text-gray-600" },
};

const PRIORITY_PILLS = {
	1: { label: "Normal", classes: "bg-gray-100 text-gray-600" },
	10: { label: "High", classes: "bg-amber-50 text-amber-700" },
	90: { label: "Urgent", classes: "bg-rose-50 text-rose-700" },
};






// const res = await fetch(`http://localhost/wp/wp-json/combo-store/v2/get_products`, {
// 	method: "POST",
// 	headers: {
// 		'Content-Type': 'application/json',
// 	}
// });
// const data = await res.json();




const Tickets = () => {



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

	var isStaff = userRoles?.some((role) => STAFF_ROLES.includes(role)) ?? false;

	var columns = {
		check: { label: ("Check"), },
		id: { label: ("Ticket"), callback: callbackTitle, classes: "w-96 text-left text-gray-600" },
		categories: { label: ("Categories"), callback: callbackCategories, classes: "text-left text-gray-600" },
		tags: { label: ("Tags"), callback: callbackTags, classes: "text-left text-gray-600" },

		status: { label: ("Status"), callback: callbackStatus, classes: "text-center text-gray-600" },
		priority: { label: ("Priority"), callback: callbackPriority, classes: "text-center text-gray-600" },
		// markedAs: { label: ("Marked As"), callback: callbackMarkedAs, classes: "text-left" },
		author: { label: ("Author"), callback: callbackAuthor, classes: "text-left text-gray-600" },
		actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
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
				setloading(false);
				addNotification({ type: 'error', title: 'Tickets not deleted', content: "You may not have permission to delete tickets." })
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

		/* After a reload the token arrives from an effect above this page. */
		if (!token) {
			return;
		}

		fetchPosts();

	}, [queryPrams, token]);


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
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



	function confirmDelete(ids) {
		if (confirm("Please confirm?")) {
			delete_tickets(ids);
		}
	}


	function callbackTitle(entry, columnIndex) {

		return (
			<td data-label="Ticket" className="!px-5 py-3 text-left"
				key={columnIndex}>

				<div className="flex min-w-0 flex-1 items-center gap-3">

					{entry?.featured && (
						<div className="text-amber-500" title="Featured"><IconStarFilled size={16} /></div>
					)}
					{!entry?.featured && (
						<div className="text-gray-300"><IconStar size={16} /></div>
					)}

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
						<Link className="text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/tickets/${entry?.id}/`}>
							{entry?.title}
						</Link>

						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
						</div>
					</div>
				</div>
			</td>

		);
	}


	function renderChips(items) {

		if (!items?.length) {
			return <span className="text-sm text-gray-300">—</span>;
		}

		return (
			<div className="flex flex-wrap gap-1.5">
				{items.map((item, index) => {

					return (
						<span key={index} className={CHIP}>
							<span dangerouslySetInnerHTML={{ __html: item.name }}></span>
						</span>
					)

				})}
			</div>
		);
	}


	function callbackCategories(entry, columnIndex) {

		return (
			<td data-label="Categories" className="!px-5 py-3 text-left"
				key={columnIndex}>
				{renderChips(entry?.categories)}
			</td>

		);
	}

	function callbackTags(entry, columnIndex) {

		return (
			<td data-label="Tags" className="!px-5 py-3 text-left"
				key={columnIndex}>
				{renderChips(entry?.tags)}
			</td>

		);
	}


	function renderPill(pill) {

		if (!pill) {
			return <span className="text-sm text-gray-300">—</span>;
		}

		return <span className={`${PILL} ${pill.classes}`}>{pill.label}</span>;
	}


	function callbackStatus(entry, columnIndex) {

		return (
			<td data-label="Status" className="!px-5 py-3 text-center"
				key={columnIndex}>
				<div className="flex justify-center">
					{renderPill(STATUS_PILLS[entry?.markedAs])}
				</div>
			</td>

		);
	}

	function callbackPriority(entry, columnIndex) {

		return (
			<td data-label="Priority" className="!px-5 py-3 text-center"
				key={columnIndex}>
				<div className="flex justify-center">
					{renderPill(PRIORITY_PILLS[entry?.priority])}
				</div>
			</td>

		);
	}


	function callbackAuthor(entry, columnIndex) {

		var name = entry?.author?.name;

		return (
			<td data-label="Author" className="!px-5 py-3 text-left"
				key={columnIndex}>

				<div className="flex items-center gap-2 text-sm">

					<div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
						{entry?.author?.avatar && (
							<Image unoptimized className="h-8 w-8 object-cover" src={entry.author.avatar} width={40} height={40} alt={``} />
						)}
					</div>

					{/* Tickets sent without a matching account have no author. */}
					<div className={`truncate ${name ? "text-gray-700" : "text-gray-400"}`}>{name || ("Guest")}</div>

				</div>

			</td>

		);
	}


	function callbackActions(entry, columnIndex) {

		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm"
				key={columnIndex}>
				<div className="flex items-center justify-end gap-1 text-sm">

					<PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

						<div className="p-1.5">
							<div className="flex flex-col gap-0.5">
								<Link className={MENU_ITEM} href={`/dashboard/tickets/${entry?.id}/`}>
									<IconEyeShare size={16} /> View
								</Link>
								{isStaff && (
									<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
										confirmDelete([entry?.id]);
									}}>
										<IconTrash size={16} /> Delete
									</div>
								)}
							</div>
						</div>

					</PopoverButton>

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

				<Link className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer" href={`/dashboard/create-tickets/`}>
					<IconPlus size={16} />{("Create Ticket")}
				</Link>
			</div>

			{isStaff && selectedRows.length > 0 && (
				<div className="flex items-center justify-end gap-3">
					<div
						className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
						onClick={() => {
							confirmDelete();
						}}>
						{("Delete Tickets")}
					</div>
				</div>
			)}

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

export default Tickets;
