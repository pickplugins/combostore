"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useContext, useRef } from "react";
import { IconFileDollar, IconAlertTriangle, IconTruckDelivery, IconClipboardTextFilled, IconDotsVertical, IconTrolley, IconX } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../../components/PopoverButton';
import SubscriptionEdit from '../../components/pages/SubscriptionEdit';
import ToggleContent from '../../components/ToggleContent';
import OrderCourier from '../../components/OrderCourier';
import SendToCourier from '../../components/SendToCourier';
import CheckPhoneFraud from '../../components/CheckPhoneFraud';
import OrderItemsList from '../../components/OrderItemsList';
import UsersPicker from '../../components/shop-elements/UsersPicker';
import DropDown from '../../components/DropDown';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


const Subscriptions = () => {

	const { wrapCurrency, formatDate } = useUtilsStore()

	const { token, paymentGateways, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


	var [newUserPrams, setnewUserPrams] = useState({ role: "customer", name: "", email: "", mobile: "" });

	var [ordersData, setordersData] = useState(null);
	var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: '', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });
	var [courierPrams, setcourierPrams] = useState({ courier: "" });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);

	const hasFetched = useRef(false);

	function onSelectRows(rows) {
		setselectedRows(rows);
	}



	var columns = {
		check: { label: ("Check"), },
		id: { label: ("ID"), callback: callbackTitle, classes: "w-20 text-center px-5 py-2 text-gray-600" },
		billing_name: { label: ("Customer"), callback: callbackUserName, classes: "text-left text-gray-600" },
		status: { label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600" },
		total_amount: { label: "Total", callback: callbackTotal, classes: "text-left text-gray-600" },
		phone: { label: "Phone", callback: callbackPhone, classes: "text-left text-gray-600" },
		payment_status: { label: ("Payment"), callback: callbackPaymentStatus, classes: "text-left text-gray-600" },

		updated_at: { label: ("Datetime"), callback: callbackFormatDate, classes: "text-center pr-2 text-gray-600" },
		actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },

	};




	function delete_orders() {


		if (!token) {
			//throw new Error("No token found");
		}

		if (queryPrams.paged < 0) {
			return;
		}

		var postData = {
			ids: selectedRows,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_orders", {
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

						setselectedRows([]);



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	function fetchPosts() {




		// if (!token) {
		// 	//throw new Error("No token found");
		// }


		if (queryPrams.paged < 0) {
			return;
		}


		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_orders", {
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




						var orders = res?.posts;
						var total = parseInt(res?.total);
						var max_pages = parseInt(res?.max_pages);




						setordersData({ posts: orders, total: total, maxPages: max_pages })
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

	useEffect(() => {
		if (hasFetched.current) return;

		hasFetched.current = true;
		fetchPosts();
	}, []);


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
		var dateInput = entry.updated_at;
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
				<div className="text-center  text-xs px-5!">
					<div className="flex flex-col"><div>Created:</div> <div>{formatDate(entry.created_at)}</div></div>
					<div className="flex flex-col"><div>Updated:</div> <div>{formatDate(entry.updated_at)}</div></div>
				</div>
			</td>

		);

	}



	function callbackTitle(entry, columnIndex) {

		return (
			<td className="text-center py-3 text-sm px-5!"
				key={columnIndex}>
				<Link className=" text-gray-600 font-bold" href={`/orders/${entry.id}`}>
					{"#" + entry.id}
				</Link>

				<div className="flex justify-center gap-3 text-xs text-gray-500">

					<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit Subscription"} drawer={"right"} buttonClass={`cursor-pointer hover:text-gray-700`}>

						<div className="p-5 bg-gray-50 text-left">
							<SubscriptionEdit id={entry.id} />
						</div>

					</PopoverButton>
				</div>
			</td>

		);
	}
	function callbackUserName(entry, columnIndex) {

		return (
			<td className="text-left text-sm px-5!"
				key={columnIndex}>
				<div className="flex flex-col gap-2 py-2">
					<div>{entry.billing_name}</div>
					<div className="text-xs italic">{entry.billing_address}</div>
					<div className="text-xs italic">{entry?.billing_phone}</div>
				</div>
			</td>

		);
	}


	function callbackActions(entry, columnIndex) {

		return (
			<td className="text-sm px-5!"
				key={columnIndex}>

				<PopoverButton wrapperClass={`bg-white flex justify-end px-2`} buttonLabel={" "} buttonIcon={<IconDotsVertical />} title={"Actions"} position={"bottomRight"} buttonClass={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>

					<div className="p-3 w-[400px]">



						<ToggleContent title={`Order Items`} contentClass={`bg-white p-2`}>
							<OrderItemsList order_id={entry.id} orderItems={entry?.order_items} />
						</ToggleContent>


					</div>

				</PopoverButton>
			</td>

		);
	}

	function callbackTotal(entry, columnIndex) {

		var total = (parseFloat(entry.subtotal_amount || 0) + parseFloat(entry.shipping_amount || 0)) - (parseFloat(entry.discount_amount || 0) + parseFloat(entry.advance_payment || 0));



		return (
			<td className="text-left px-5!"
				key={columnIndex}>
				<div className="flex flex-col gap-2 text-xs py-3">

					{entry.subtotal_amount > 0 && (
						<div>Sub Total: {wrapCurrency(entry.subtotal_amount)}</div>
					)}
					{entry.discount_amount > 0 && (
						<div>Discount: -{wrapCurrency(entry.discount_amount)}</div>
					)}
					{entry.shipping_amount > 0 && (
						<div>Delivery Charge: +{wrapCurrency(entry.shipping_amount)}</div>
					)}
					{entry.advance_payment > 0 && (
						<div>Advance Payment: -{wrapCurrency(entry.advance_payment)}</div>
					)}


					{total > 0 && (
						<div className="font-bold border-t border-dashed  border-gray-300 pt-2">Total: {wrapCurrency(total)}</div>
					)}

				</div>
			</td>

		);
	}

	function callbackPhone(entry, columnIndex) {

		return (
			<td className="text-left px-5!"
				key={columnIndex}>
				<div className="flex gap-2 items-center text-sm">
					<CheckPhoneFraud phone={entry?.billing_phone} order_id={entry.id} />
				</div>
			</td>

		);
	}





	function callbackStatus(entry, columnIndex) {



		return (
			<td className="text-left text-sm px-5!"
				key={columnIndex}>

				<div className={` text-xs `}>
					{(entry.status == 'pending') && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-yellow-50 px-2.5 py-1 text-[11px] font-semibold text-yellow-700 ring-1 ring-inset ring-yellow-200">Pending</span>
					)}
					{entry.status == 'completed' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-inset ring-green-200">Completed</span>
					)}
					{entry.status == 'cancelled' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">Cancelled</span>
					)}
					{entry.status == 'refunded' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">Refunded</span>
					)}
					{entry.status == 'failed' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">Failed</span>
					)}
					{entry.status == 'processing' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">Processing</span>
					)}
					{entry.status == 'canceled' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">Canceled</span>
					)}
					{entry.status == 'hold' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-700 ring-1 ring-inset ring-orange-200">Hold</span>
					)}


				</div>





			</td>

		);
	}
	function callbackPaymentStatus(entry, columnIndex) {



		return (
			<td className="text-left text-sm px-5!"
				key={columnIndex}>


				<div className="flex flex-col gap-2">

					<div className={` text-xs `}>
						{(entry.payment_status == 'pending' || entry.payment_status == '') && (
							<span className="inline-flex items-center whitespace-nowrap rounded-full bg-yellow-50 px-2.5 py-1 text-[11px] font-semibold text-yellow-700 ring-1 ring-inset ring-yellow-200">Pending</span>
						)}
						{entry.payment_status == 'paid' && (
							<span className="inline-flex items-center whitespace-nowrap rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-inset ring-green-200">Paid</span>
						)}
						{entry.payment_status == 'failed' && (
							<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">failed</span>
						)}
						{entry.payment_status == 'delayed' && (
							<span className="inline-flex items-center whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">Delayed</span>
						)}
						{entry.payment_status == 'due' && (
							<span className="inline-flex items-center whitespace-nowrap rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 ring-1 ring-inset ring-red-200">Due</span>
						)}
						{entry.payment_status == 'partial' && (
							<span className="inline-flex items-center whitespace-nowrap rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">Partial</span>
						)}
						{entry.payment_status == 'refunded' && (
							<span className="inline-flex items-center whitespace-nowrap rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">Refunded</span>
						)}

					</div>

					{entry.payment_method?.length > 0 && (
						<div className="text-xs">Method: {paymentGateways[entry.payment_method]?.label}</div>
					)}

				</div>

			</td>

		);
	}






	function onPickCustomer(args) {

		setqueryPrams({ ...queryPrams, customer: { id: args?.ID, display_name: args?.display_name, avatar: args?.avatar }, paged: 1 })
	}
	function onFilterByStatus(args) {


		setqueryPrams({ ...queryPrams, status: args, paged: 1 })
	}
	function onFilterByPaymentMethod(args) {


		setqueryPrams({ ...queryPrams, payment_method: args, paged: 1 })
	}
	function onFilterByPaymentStatus(args) {


		setqueryPrams({ ...queryPrams, payment_status: args, paged: 1 })
	}


	var orderStatusPrams = [
		{ label: 'All', value: '' },
		{ label: 'Pending', value: 'pending' },
		{ label: 'Completed', value: 'completed' },
		{ label: 'Canceled', value: 'canceled' },
		{ label: 'Refunded', value: 'refunded' },
		{ label: 'Failed', value: 'failed' },
		{ label: 'Processing', value: 'processing' },
		{ label: 'Hold', value: 'hold' }
	]

	var paymentStatusPrams = [

		{
			"label": "All",
			"value": "",

		},
		{
			"label": "Pending",
			"value": "pending",

		},
		{
			"label": "Paid",
			"value": "paid",

		},
		{
			"label": "Failed",
			"value": "failed",

		},
		{
			"label": "Delayed",
			"value": "delayed",
		},
		{
			"label": "Due",
			"value": "due",
		},

	]


	function onAddProducts(item) {



		setqueryPrams({ ...queryPrams, product: { id: item?.id, title: item?.title }, paged: 1 })


	}


	return (

		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Subscriptions")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{ordersData?.total ?? 0} {("subscriptions")}
					</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-3 w-full justify-between items-center ">



				<div className="flex flex-wrap gap-3 items-center">



					<PopoverButton wrapperClass={`bg-white `} enableCloseBtn={false} buttonLabel={("Filter ")} buttonIcon={<IconFileDollar />} title={"Filter "} position={"leftTop"}>

						<div className="p-4 w-[400px]">
							<div className="flex flex-col gap-3 ">
								<div className="flex justify-between">
									<div>Order Status</div>
									<div>
										<DropDown multiple={false} value={queryPrams?.status} options={orderStatusPrams} label={`Choose Status`} onOptionsChoose={onFilterByStatus} />
									</div>
								</div>
								<div className="flex justify-between">
									<div>Payment Method</div>
									<div>
										<DropDown multiple={false} value={queryPrams?.payment_method} options={paymentGateways} label={`Choose Payment Method`} onOptionsChoose={onFilterByPaymentMethod} />
									</div>
								</div>
								<div className="flex justify-between">
									<div>Payment Status</div>
									<div>
										<DropDown multiple={false} value={queryPrams?.payment_status} options={paymentStatusPrams} label={`ChoosePayment Status`} onOptionsChoose={onFilterByPaymentStatus} />
									</div>
								</div>
								<div className="flex justify-between ">
									<div>Customer</div>
									<div>
										<UsersPicker placeholder={"Search Customer"} role={`customer`} onPick={onPickCustomer} />
									</div>
								</div>
								<div className="flex justify-between">
									<div>Products</div>
									<div>
										<ProductsPicker placeholder="Search product..." onPick={onAddProducts} />
									</div>
								</div>
								<div className="flex justify-between">
									<div>Start Date</div>
									<div>
										<DatePicker
											showTimeSelect
											dateFormat="yyyy-MM-dd HH:mm:ss"
											selected={queryPrams?.from_date}
											onChange={(date) => {
												if (!date) return;

												const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");



												setqueryPrams({
													...queryPrams,
													from_date: formattedDate
												});
											}}
										/>
									</div>
								</div>
								<div className="flex justify-between">
									<div>End Date</div>
									<div>
										<DatePicker
											showTimeSelect
											dateFormat="yyyy-MM-dd HH:mm:ss"
											selected={queryPrams?.to_date}
											onChange={(date) => {
												if (!date) return;

												const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");



												setqueryPrams({
													...queryPrams,
													to_date: formattedDate
												});
											}}
										/>
									</div>
								</div>





							</div>
						</div>

					</PopoverButton>


				</div>
				<div>


					<div className=" px-4  flex gap-2">




						{queryPrams?.payment_method?.length > 0 && (
							<div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
								<div className="whitespace-nowrap">{('Payment Method')}: {queryPrams?.payment_method}</div>
								<div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
									setqueryPrams({ ...queryPrams, payment_method: "" })
								}}><IconX /></div>
							</div>
						)}

						{queryPrams?.payment_status?.length > 0 && (
							<div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
								<div className="whitespace-nowrap">{('Payment Status')}: {queryPrams?.payment_status}</div>
								<div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
									setqueryPrams({ ...queryPrams, payment_status: "" })
								}}><IconX /></div>
							</div>
						)}



						{queryPrams?.product?.title?.length > 0 && (
							<div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
								<div className="whitespace-nowrap">{('Product')}: {queryPrams?.product?.title}</div>
								<div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
									setqueryPrams({ ...queryPrams, product: {} })
								}}><IconX /></div>
							</div>
						)}



						{queryPrams?.customer?.display_name?.length > 0 && (
							<div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
								<div className="whitespace-nowrap">{('Customer')}: {queryPrams?.customer?.display_name}</div>
								<div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
									setqueryPrams({ ...queryPrams, customer: "" })
								}}><IconX /></div>
							</div>
						)}

						{queryPrams?.status?.length > 0 && (
							<div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
								<div className="whitespace-nowrap">{('Status')}: {queryPrams?.status}</div>
								<div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
									setqueryPrams({ ...queryPrams, status: "" })
								}}><IconX /></div>
							</div>
						)}

					</div>


					{selectedRows.length > 0 && (
						<div className="flex gap-2">

							{/* <PopoverButton wrapperClass={`bg-white`} buttonLabel={("Send to Courier")} buttonIcon={<IconTruckDelivery />} title={"Send to Courier"} position={""}>

									<div className="p-5 bg-white">


										<div className=" lg:flex flex-wrap gap-3 py-3 items-center ">
											<div className="  py-2 lg:w-60 ">{('Select courier')}</div>


											<select name="shipping_method" value={courierPrams?.courier} id="" onChange={ev => {
												var value = ev.target.value;
												setcourierPrams({ ...courierPrams, courier: value })
											}}>

												<option value="">Choose</option>
												<option value="kidobazar">KidoBazar Courier</option>
												<option value="steadfast">Steadfast Courier</option>
												<option value="pathao">Pathao Courier</option>
												<option value="karatoa">Karatoa Courier</option>
												<option value="sundarban">Sundarban Courier</option>
											</select>




										</div>


									</div>

								</PopoverButton>
								<PopoverButton wrapperClass={`bg-white`} buttonLabel={("Fraud Check")} buttonIcon={<IconAlertTriangle />} title={"Fraud Check"} position={""}>

									<div className="p-5 bg-white">




									</div>

								</PopoverButton>


								<PopoverButton wrapperClass={`bg-white`} buttonLabel={("Add Note")} buttonIcon={<IconClipboardTextFilled />} title={"Add Note"} position={""}>

									<div className="p-5 bg-white">


										<div className=" lg:flex flex-wrap gap-3 py-3 items-center ">
											<div className="  py-2 lg:w-60 ">{('Select courier')}</div>


											<select name="shipping_method" value={courierPrams?.courier} id="" onChange={ev => {
												var value = ev.target.value;
												setcourierPrams({ ...courierPrams, courier: value })
											}}>

												<option value="">Choose</option>
												<option value="kidobazar">KidoBazar Courier</option>
												<option value="steadfast">Steadfast Courier</option>
												<option value="pathao">Pathao Courier</option>
												<option value="karatoa">Karatoa Courier</option>
												<option value="sundarban">Sundarban Courier</option>
											</select>




										</div>


									</div>

								</PopoverButton> */}

							<div
								className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
								onClick={() => {
									delete_orders();
								}}>
								{("Delete Orders")}
							</div>
						</div>
					)}
				</div>


			</div>



			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={ordersData}
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

export default Subscriptions;
