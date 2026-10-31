"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../components/EntriesTable";
import { useCounterStore } from '../../store/useCounterStore'
import DropDown from '../../components/DropDown';
import PopoverButton from '../../components/PopoverButton';
import Spinner from '../../components/Spinner';
import BadgeEdit from '../../components/pages/BadgeEdit';
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import Image from "next/image";

import { IconChevronDown, IconChevronUp, IconBrowserPlus, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";





const Badges = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var [newPage, setnewPage] = useState({ name: '', slug: '', taxonomy: 'product_badge', description: '', parent: '' });

	var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ taxonomy: "product_badge", keyword: "", paged: 1, order: "DESC", per_page: 10, });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { label: ("Check"), },
		id: { label: ("Title"), callback: callbackTitle, classes: "w-96 text-left" },
		count: { label: ("Total Post"), callback: callbackCount, classes: "" },
		slug: { label: ("Slug"), callback: callbackSlug, classes: "" },

		// expiryDate: { label: "Expiry Date", callback: callbackExpiryDate },
		// status: { label: ("Status"), callback: callbackStatus },
	};

	function delete_terms(ids) {


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
		fetch(serverUrl + "wp-json/combo-store/v2/delete_terms", {
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

	function add_term() {




		if (queryPrams.taxonomy < 0) {
			return;
		}


		var postData = JSON.stringify({ ...newPage, taxonomy: queryPrams?.taxonomy });
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/add_term", {
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

		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
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




						var posts = res?.terms;
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



	function callbackExpiryDate(entry, columnIndex) {

		var format = "d/m/Y";
		var dateInput = entry.expiryDate;
		// Ensure date is in a proper format for parsing
		const dateObj = new Date(dateInput?.replace(" ", "T"));

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
				key={`title-${entry?.term_id}`}>
				<div className="flex gap-3 items-center">


					{entry?.thumbnail?.src && (
						<div style={{ width: "40px", height: "40px", overflow: "hidden" }} className="rounded-lg border border-gray-200 bg-gray-50">
							<Image src={entry?.thumbnail?.src} width={40} height={40} alt={``} />
						</div>
					)}



					<div className="text-left">
						<Link className="text-left text-gray-600 font-medium" href={`/badges/${entry?.term_id}`}>
							{entry?.name}
						</Link>

						<div className="flex gap-3 text-sm text-gray-500">

							<div>#{entry?.term_id}</div>
							<Link className="" href={`/badges/${entry?.term_id}`}>
								View
							</Link>

							<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit Badge"} drawer={"right"} buttonClass={`cursor-pointer hover:text-gray-700`}>

								<div className="p-5 bg-gray-50 text-left">
									<BadgeEdit id={entry?.term_id} />
								</div>

							</PopoverButton>
							{/* <div className=" ">{entry?.sku}</div> */}
							<div className="text-red-400 hover:text-red-500 cursor-pointer" onClick={() => {
								delete_terms([entry?.term_id]);
							}}>Delete</div>


						</div>
					</div>
				</div>
			</td>

		);
	}








	function callbackCount(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.term_id}`}>

				{entry.count}

			</td>

		);
	}
	function callbackSlug(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.term_id}`}
			>


				<span className="">{entry.slug}</span>

			</td>

		);
	}
	function callbackAmount(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.term_id}`}
			>


				<span className="">{entry.amount}</span>

			</td>

		);
	}






	function callbackLimit(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.term_id}`}
			>
				{entry.limit}
			</td>

		);
	}
	function callbackStatus(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.term_id}`}
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
	function callbackStock(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.term_id}`}
			>

				{entry?.stock_count}
			</td>

		);
	}
	function callbackType(entry, columnIndex) {

		return (
			<td className="text-center pl-5"
				key={`title-${entry?.term_id}`}
			>

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
					<h1 className="text-xl font-semibold text-gray-900">{("Badges")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("badges")}
					</p>
				</div>
			</div>

			<div className="flex justify-between px-5 py-3">

				<PopoverButton wrapperClass={` flex justify-end`} buttonLabel={null} buttonIcon={<IconBrowserPlus size={16} />} title={"Create"} position={"bottomLeft"} buttonClass={`inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer`}>


					<div className="p-2 flex flex-col gap-3 w-full bg-gray-50">
						<div className="flex flex-col gap-2">


							<input className="" type="text" placeholder="Name" value={newPage?.name} onChange={ev => {

								var value = ev.target.value;

								setnewPage({ ...newPage, name: value, slug: value.toLowerCase().replace(/\s+/g, '-') })
							}} />
							<input className="" type="text" placeholder="Name" value={newPage?.slug} onChange={ev => {

								var value = ev.target.value;

								setnewPage({ ...newPage, slug: value })
							}} />

						</div>

						<div className="flex items-center gap-3">
							<div className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer w-fit" onClick={ev => {

								if (newPage.name.length == 0) {
									addNotification({ type: 'error', title: 'Title is empty', content: `Please add title text.` })
									return;

								}

								add_term()
							}}>

								Create
							</div>

							{loading && (
								<Spinner />
							)}
						</div>

					</div>

				</PopoverButton>



				<div className="flex gap-3 md:justify-end p-4">
					{selectedRows.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
							onClick={() => {
								delete_terms();
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

export default Badges;
