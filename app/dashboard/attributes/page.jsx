"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";
import { useCounterStore } from '../../../store/useCounterStore'
import DropDown from '../../../components/DropDown';
import PopoverButton from '../../../components/PopoverButton';
import Spinner from '../../../components/Spinner';

import Image from "next/image";

import { IconChevronDown, IconChevronUp, IconBrowserPlus, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



const page = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX, settings } = useCounterStore()


	var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ taxonomy: "", keyword: "", paged: 1, order: "DESC", per_page: 10, hide_empty: false });
	var [newPage, setnewPage] = useState({ name: '', slug: '', taxonomy: '', description: '', parent: '' });

	var [attributes, setattributes] = useState([]);
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





	useEffect(() => {

		const result = settings?.productAttributes?.map(item => ({
			label: item.label,
			value: item.slug
		}));

		setattributes(result ?? []);

	}, [settings?.productAttributes]);




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
			taxonomy: queryPrams?.taxonomy
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


		if (queryPrams.taxonomy == undefined || queryPrams.taxonomy == "") {
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






	function callbackTitle(entry, columnIndex) {



		return (
			<td className="text-center pl-5 py-3 px-5!"
				key={`title-${entry?.term_id}`}>
				<div className="flex gap-3 items-center">



					{entry?.thumbnail?.src && (
						<div style={{ width: "40px", height: "40px", overflow: "hidden" }} className="rounded-lg border border-gray-200 bg-gray-50">
							<Image unoptimized src={entry?.thumbnail?.src} width={40} height={40} alt={``} />
						</div>
					)}


					<div className="text-left">
						<Link className="text-left text-gray-600 font-medium" href={`/dashboard/attributes/${entry?.term_id}`}>
							{entry?.name}
						</Link>

						<div className="flex gap-3 text-sm text-gray-500">

							<div>#{entry?.term_id}</div>
							<Link className="" href={`/dashboard/attributes/${entry?.term_id}`}>
								View
							</Link>
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
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.term_id}`}>

				{entry.count}

			</td>

		);
	}
	function callbackSlug(entry, columnIndex) {

		return (
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.term_id}`}
			>


				<span className="">{entry.slug}</span>

			</td>

		);
	}














	return (



		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Attributes")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("attributes")}
					</p>
				</div>
			</div>

			<div className="flex justify-between ">

				<div className="flex gap-3 items-center">
















					{attributes && (
						<DropDown multiple={false} value={queryPrams?.taxonomy} options={attributes} label={`Choose`} onOptionsChoose={(args) => {

							console.log('args', args)


							setqueryPrams({ ...queryPrams, taxonomy: args.value })


						}} />
					)}

					{queryPrams?.taxonomy && (
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
					)}








				</div>







				<div className="flex gap-3 md:justify-end p-4">
					{selectedRows.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
							onClick={() => {
								delete_terms();
							}}>
							{("Delete Terms")}
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
