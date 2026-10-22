'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import EntriesTable from "../../../components/EntriesTable";
import { useCounterStore } from '../../../store/useCounterStore';
import { useUtilsStore } from '../../../store/useUtilsStore';
import Spinner from "../../../components/Spinner";
import Link from "next/link";



const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const CustomerOrders = (props) => {

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors;
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var handleMoveBlock = props?.handleMoveBlock

	var type = props?.type
	var options = props?.options;
	var id = props?.id;

	var index = props?.index





	const children = props?.children || [];



	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");







		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};

	const onDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};


	var [ordersData, setordersData] = useState(null);
	var [queryPrams, setqueryPrams] = useState({ keyword: "", page: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });

	var [loading, setloading] = useState(false);

	var [selectedRows, setselectedRows] = useState([]);
	const { wrapCurrency } = useUtilsStore()

	function get_orders() {

		// const token = localStorage.getItem("token");



		if (!token) {
			return null;
		}


		// if (!token) {
		// 	//throw new Error("No token found");
		// }


		if (queryPrams.page < 0) {
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
						var total = res?.total;
						var max_pages = res?.max_pages;

						setordersData({ posts: orders, total: total, maxPages: max_pages })
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

		setTimeout(() => {

			get_orders();
		}, 500)
	}, [queryPrams]);


	var columns = {
		// check: { label: ("Check"), },
		id: { label: ("ID"), callback: callbackTitle, classes: "w-30 text-left pl-4 py-2 text-sm text-gray-500" },
		billing_name: { label: ("User"), callback: callbackUserName, classes: "text-sm text-left text-gray-500" },
		payment_status: { label: ("Status"), callback: callbackStatus, classes: "text-sm text-gray-500 text-left " },


		total_amount: { label: "Total", callback: callbackTotal, classes: "text-sm text-gray-500 text-left " },
		subtotal_amount: { label: "Sub Total", callback: callbackSubtotal, classes: "text-sm text-gray-500 text-left " },
		discount_amount: { label: "Discount", callback: callbackDiscount, classes: "text-sm text-gray-500 text-left " },
		payment_method: { label: "Payment Method", callback: callbackPaymentMethod, classes: "text-sm text-gray-500 text-center " },

		updated_at: { label: ("Datetime"), callback: callbackFormatDate, classes: "text-sm text-gray-500 text-right pr-4 " },
	};


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
				data-label="Datetime"
				className="text-right pr-4"
				key={columnIndex}>
				{format.replace("d", day).replace("m", month).replace("Y", year)}
			</td>

		);

	}



	function callbackTitle(entry, columnIndex) {

		return (
			<td data-label="ID" className="text-left text-sm text-gray-600 pl-4 py-3"
				key={columnIndex}>
				<Link className=" text-gray-600 font-bold" href={`/orders/${entry.id}`}>
					{"#" + entry.id}
				</Link>
			</td>

		);
	}
	function callbackUserName(entry, columnIndex) {

		return (
			<td data-label="User" className="text-left text-sm text-gray-600 "
				key={columnIndex}>
				{entry.billing_name}
			</td>

		);
	}

	function callbackTotal(entry, columnIndex) {

		return (
			<td data-label="Total" className="text-left text-sm "
				key={columnIndex}>
				<span>{wrapCurrency(entry.total_amount)}</span>
			</td>

		);
	}
	function callbackSubtotal(entry, columnIndex) {

		return (
			<td data-label="Sub Total" className="text-left text-sm "
				key={columnIndex}>
				<span>{wrapCurrency(entry.subtotal_amount)}</span>
			</td>

		);
	}
	function callbackDiscount(entry, columnIndex) {

		return (
			<td data-label="Discount" className="text-left text-sm "
				key={columnIndex}>
				<span>{wrapCurrency(entry.discount_amount)}</span>
			</td>

		);
	}
	function callbackPaymentMethod(entry, columnIndex) {

		return (
			<td data-label="Payment Method" className="text-center text-sm "
				key={columnIndex}>
				<span>{entry.payment_method}</span>
			</td>

		);
	}





	function callbackStatus(entry, columnIndex) {

		return (
			<td data-label="Status" className="text-left text-sm "
				key={columnIndex}>


				<div className={` text-sm `}>
					{(entry.status == 'pending' || entry.status == '') && (
						<span className="bg-indigo-400 px-3 py-1 rounded-sm text-white">Pending</span>
					)}
					{entry.status == 'completed' && (
						<span className="bg-amazon-400 px-3 py-1 rounded-sm text-white">Completed</span>
					)}
					{entry.status == 'cancelled' && (
						<span className="bg-red-400 px-3 py-1 rounded-sm text-white">Cancelled</span>
					)}
					{entry.status == 'refunded' && (
						<span className="bg-amber-400 px-3 py-1 rounded-sm text-white">Refunded</span>
					)}
					{entry.status == 'failed' && (
						<span className="bg-red-600 px-3 py-1 rounded-sm text-white">Failed</span>
					)}
					{entry.status == 'processing' && (
						<span className="bg-blue-400 px-3 py-1 rounded-sm text-white">Processing</span>
					)}
					{entry.status == 'hold' && (
						<span className="bg-orange-400 px-3 py-1 rounded-sm text-white">Hold</span>
					)}


				</div>





			</td>

		);
	}


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
			get_orders();
		}

	}

	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	return (
		<div
			draggable
			id={id}
			className={` ${cssSelectors['*']?.classes ?? ''}  hover:outline-orange-200 hover:outline-solid hover:outline-1 relative   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
				${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}
			`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}
			onDragStart={(e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={onDragOver}
			onDrop={onDrop}
		>



			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={ordersData}
				itemPath={""}
				onChange={onChangeQueryPrams}
				loading={loading}
				selectedRows={selectedRows}
				onSelectRows={onSelectRows}
			/>


			{/* {children.length > 0 ? (
				children.map((child, idx) => (
					<BlockPreview
						key={child.id}
						index={`${index}-${idx}`}
						block={child}
						draggingBlock={draggingBlock}
						dragOverIndex={dragOverIndex}
						setDragOverIndex={setDragOverIndex}
						setDraggingBlock={setDraggingBlock}
						setSelectedId={setSelectedId}
						selectedId={selectedId}
						handleMoveBlock={handleMoveBlock}
					/>
				))
			) : (
				<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">Empty CustomerOrders - Drop elements here</span>
				</div>
			)} */}
		</div>
	);
};

CustomerOrders.propTypes = {
	block: PropTypes.object,
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	handleDropInto: PropTypes.func,
};

export default CustomerOrders;
