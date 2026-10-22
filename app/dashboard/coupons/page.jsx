"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";
import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;





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
		id: { label: ("Title"), callback: callbackTitle, classes: "w-96 text-left" },
		couponCode: { label: ("Coupon Code"), callback: callbackCouponCode, classes: "" },
		couponType: { label: ("Coupon Type"), callback: callbackCouponType, classes: "" },
		amount: { label: ("Amount"), callback: callbackAmount, classes: "" },

		limit: { label: ("Limit"), callback: callbackLimit, classes: "" },
		startDate: { label: "Expiry Date", callback: callbackStartDate },
		endDate: { label: "Expiry Date", callback: callbackEndDate },
		// status: { label: ("Status"), callback: callbackStatus },
	};

	function delete_products(ids) {


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

	function add_product() {


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
		fetch(serverUrl + "wp-json/combo-store/v2/add_coupon", {
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

		fetch(serverUrl + "wp-json/combo-store/v2/get_coupons", {
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

	const copyData = (data) => {
		navigator.clipboard
			.writeText(data)
			.then(() => {
			})
			.catch((err) => { });
	};

	function callbackStartDate(entry, columnIndex) {

		var format = "d/m/Y";
		var dateInput = entry?.startDate;

		if (!dateInput) {
			return (
				<td key={columnIndex}>
				</td>

			);
		}

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

	function callbackEndDate(entry, columnIndex) {

		var format = "d/m/Y";
		var dateInput = entry?.endDate;

		if (!dateInput) {
			return (
				<td key={columnIndex}>
				</td>

			);
		}


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
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.id}`}
			>

				<div className="flex gap-2 items-center">



					<div className="text-left">
						<Link className="text-left text-gray-600 font-medium" href={`/dashboard/coupons/${entry?.id}`}>
							{entry?.title}
						</Link>

						<div className="flex gap-2 text-sm text-gray-500">

							<div>#{entry?.id}</div>

							<div className="text-red-400 hover:text-red-500 cursor-pointer" onClick={() => {
								delete_products([entry?.id]);
							}}>Delete</div>


						</div>
					</div>
				</div>
			</td>

		);
	}






	function callbackCouponCode(entry, columnIndex) {

		return (
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.id}`}>

				{entry.couponCode && (
					<span onClick={ev => {

						copyData(entry.couponCode)
						addNotification({ type: 'success', title: 'Coupon copied', content: "Coupon copied successfull." })

					}} className="inline-flex items-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" >


						{entry.couponCode}</span>

				)}

			</td>

		);
	}
	function callbackCouponType(entry, columnIndex) {

		return (
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.id}`}
			>


				<span className="">{entry.couponType}</span>

			</td>

		);
	}
	function callbackAmount(entry, columnIndex) {

		return (
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.id}`}
			>


				<span className="">{entry.amount}</span>

			</td>

		);
	}






	function callbackLimit(entry, columnIndex) {

		return (
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.id}`}
			>
				{entry.limit}
			</td>

		);
	}
	function callbackStatus(entry, columnIndex) {

		return (
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.id}`}
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
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.id}`}
			>

				{entry?.stock_count}
			</td>

		);
	}
	function callbackType(entry, columnIndex) {

		return (
			<td className="text-center pl-5 px-5!"
				key={`title-${entry?.id}`}
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
					<h1 className="text-xl font-semibold text-gray-900">{("Coupons")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("coupons")}
					</p>
				</div>

				<div className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer" onClick={ev => {
					add_product();
				}}>Add Coupon</div>
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
