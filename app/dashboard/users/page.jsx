"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";

import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import PopoverButton from '../../../components/PopoverButton';
import Image from "next/image";

import { IconChevronDown, IconChevronUp, IconSquare, IconUsersPlus, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";




const page = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	// 

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ role: "", keyword: "", paged: 1, order: "DESC", number: 10, });
	var [newUserPrams, setnewUserPrams] = useState({ role: "customer", name: "", email: "", mobile: "", registerBy: "mobile", });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Name"), callback: callbackTitle, classes: "w-96  text-left px-5!" },
		user_login: { id: "user_login", label: ("Login"), callback: callbackUserLogin, classes: "text-left px-5!" },
		user_email: { id: "user_email", label: ("Email"), callback: callbackUserEmail, classes: "text-left px-5!" },
		mobile: { id: "mobile", label: ("Mobile"), callback: callbackMobile, classes: "text-left px-5!" },
		// total_order: { id: "total_order", label: ("Total Order"), callback: callbackTotalOrder, classes: "text-left px-5!" },
		roles: { id: "roles", label: ("Roles"), callback: callbackRoles, classes: "text-left px-5!" },

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
			search: queryPrams.keyword,
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
							addNotification({ type: 'error', title: 'User added failed', content: `Sorry, user added failed.${JSON.stringify(messages)}` })
						}

						if (!error) {
							addNotification({ type: 'success', title: 'User added', content: "Csutomer added scuccessful." })
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





	// useEffect(() => {
	// 	console.log(queryPrams);

	// 	fetchPosts();
	// }, [queryPrams?.keyword]);


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



	function callbackTitle(entry, columnIndex) {



		return (
			<td className="text-center pl-5 py-3 px-5!"
				key={`title-${entry?.id}`}>

				<div className="flex gap-3 items-center">


					{entry?.thumbnail?.src && (
						<div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
							<Link className=" font-medium" href={`/dashboard/customers/${entry?.id}`}>
								<Image src={entry?.thumbnail?.src} width={30} height={30} alt={``} />
							</Link>
						</div>
					)}



					<div className="text-left">
						<Link className="text-left text-gray-600 font-medium" href={`/dashboard/customers/${entry?.id}`}>
							{entry?.display_name}
						</Link>

						<div className="flex gap-3 text-sm text-gray-500">

							<div>#{entry?.id}</div>
							<Link className="" href={`/dashboard/customers/${entry?.id}`}>
								View
							</Link>
							{/* <div className=" ">{entry?.sku}</div> */}
							{/* <div className="text-red-400 hover:text-red-500 cursor-pointer" onClick={() => {
								delete_users([entry?.id]);
							}}>Delete</div> */}


						</div>
					</div>
				</div>
			</td>

		);
	}




	function callbackTotalOrder(entry, columnIndex) {


		return (
			<td className="text-center px-5!"
				key={`category-${entry?.id}`}
			>
				<div className="flex text-sm ">
					{entry?.total_order}
				</div>
			</td>

		);
	}
	function callbackRoles(entry, columnIndex) {


		return (
			<td className="text-center px-5!"
				key={`category-${entry?.id}`}
			>
				<div className="flex text-sm ">
					{entry?.roles.join(", ")}
				</div>
			</td>

		);
	}

	function callbackUserLogin(entry, columnIndex) {


		return (
			<td className="text-center pl-5 px-5!"
				key={columnIndex}>
				<div className="flex text-sm ">
					{entry?.user_login}
				</div>
			</td>

		);
	}
	function callbackUserEmail(entry, columnIndex) {


		return (
			<td className="text-center pl-5 px-5!"
				key={columnIndex}>
				<div className="flex text-sm ">
					{entry?.user_email}
				</div>
			</td>

		);
	}
	function callbackMobile(entry, columnIndex) {


		return (
			<td className="text-center pl-5 px-5!"
				key={columnIndex}>
				<div className="flex text-sm ">
					{entry?.mobile}
				</div>
			</td>

		);
	}







	return (

		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("All Users")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("users")}
					</p>
				</div>
			</div>

			<div className="flex flex-wrap gap-3 w-full justify-between items-center ">



				<div className="flex gap-3 items-center">

					<PopoverButton wrapperClass={`bg-white`} buttonLabel={("Add User")} buttonIcon={<IconUsersPlus />} title={"Add User"} position={""}>

						<div className="grid  grid-cols-1 2xl:grid-cols-2 gap-4 p-5 bg-gray-800 text-white">
							<div>
								<div htmlFor="">Name</div>
								<input
									type="text"
									placeholder="Jhon"
									className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm "
									value={newUserPrams?.name}
									onChange={(ev) => {
										setnewUserPrams({
											...newUserPrams,
											name: ev.target.value,
										});
									}}
								/>
							</div>
							<div>
								<div htmlFor="">Email</div>
								<input
									type="text"
									placeholder=""
									className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm "
									value={newUserPrams?.email}
									onChange={(ev) => {
										setnewUserPrams({
											...newUserPrams,
											email: ev.target.value,
										});
									}}
								/>
							</div>


							<div>
								<div htmlFor="">Role</div>

								<select className="w-full" name="" id="" value={newUserPrams?.role}
									onChange={(ev) => {
										setnewUserPrams({
											...newUserPrams,
											role: ev.target.value,
										});
									}}>

									<option value={`customer`}>Customer</option>
									<option value={`rider`}>Rider</option>
									<option value={`seller`}>Seller</option>
									<option value={`supplier`}>Supplier</option>
								</select>

							</div>
							<div>
								<div htmlFor="">Mobile</div>
								<input
									type="text"
									placeholder=""
									className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm "
									value={newUserPrams?.mobile}
									onChange={(ev) => {
										setnewUserPrams({
											...newUserPrams,
											mobile: ev.target.value,
										});
									}}
								/>
							</div>


							<div>
								<div htmlFor="">Register By</div>

								<select className="w-full" name="" id="" value={newUserPrams?.registerBy}
									onChange={(ev) => {
										setnewUserPrams({
											...newUserPrams,
											registerBy: ev.target.value,
										});
									}}>

									<option value={`email`}>Email</option>
									<option value={`mobile`}>Mobile</option>

								</select>

							</div>






							{/* 
							<div>
								<div htmlFor="">Type</div>

								<select
									name=""
									id=""
									className=" !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm"
									value={addCredits?.type}
									onChange={(ev) => {
										setaddCredits({
											...addCredits,
											type: ev.target.value,
										});
									}}>
									<option value="">{("Type")}</option>
									<option value="credit">{("Credit")}</option>
									<option value="debit">{("Debit")}</option>
								</select>
							</div> */}

							<div
								onClick={(ev) => {
									add_user();
									setnewUserPrams({ ...newUserPrams, loading: true });
								}}
								className="col-span-2 inline-flex items-center justify-center gap-2 !rounded-lg !border !border-gray-300 !bg-white px-3 py-2 text-sm font-medium text-gray-700 !shadow-sm transition-colors hover:!bg-gray-50 cursor-pointer">


								{loading && (
									<>Wait...</>
								)}
								{!loading && (
									<>{("Submit")}</>
								)}


							</div>
						</div>

					</PopoverButton>

				</div>
				<div className="flex gap-3 justify-end ">
					{selectedRows.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
							onClick={() => {
								delete_users();
							}}>
							{("Delete users")}
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
