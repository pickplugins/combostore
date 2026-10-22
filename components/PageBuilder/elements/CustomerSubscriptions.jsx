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


	var [subscriptionsData, setsubscriptionsData] = useState(null);
	var [queryPrams, setqueryPrams] = useState({
		keyword: "",
		page: 1,
		order: "DESC",
		per_page: 10,
		first_date: "",
		last_date: "",
	});


	var [loading, setloading] = useState(false);

	var [selectedRows, setselectedRows] = useState([]);

	function onSelectRows(rows) {
		setselectedRows(rows);
	}
	function onRefreshRequest(rows) {
		get_subscriptions();
	}

	function delete_subscriptions() {


		// if (!token) {
		// 	throw new Error("No token found");
		// }

		if (queryPrams.page < 0) {
			return;
		}

		var postData = {
			ids: selectedRows,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/delete_subscriptions",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: postData,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						var errors = res?.errors;
						var success = res?.success;

						setloading(false);

						get_subscriptions();

						// setaddTask({ ...addTask, loading: false, errors: errors, success: success })

						// setTimeout(() => {
						// 	setaddTask({ ...addTask, title: "", success: null, errors: null })

						// }, 3000);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	function get_subscriptions() {

		if (!token) {
			return null;
		}

		var postData = JSON.stringify(queryPrams);

		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_subscriptions", {
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




						var posts = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;

						setsubscriptionsData({
							posts: posts,
							total: total,
							maxPages: max_pages,
						});
						setloading(false);

						setTimeout(() => { }, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	// useEffect(() => {
	// 	get_subscriptions();
	// }, []);

	useEffect(() => {
		get_subscriptions();
	}, [queryPrams]);

	var columns = {
		// check: { label: ("Check") },
		id: { label: ("ID"), callback: callbackTitleLinkTo, classes: "w-30" },
		order_id: { label: "Order id", callback: callbackOrder, },
		status: { label: ("Status"), callback: callbackStatus, },
		total_amount: { label: ("Total"), callback: callbackTotal, },
		subtotal_amount: { label: ("Sub Total"), callback: callbackSubTotal, },
		renewal_interval: { label: ("Interval"), callback: callbackInterval, },
		interval_count: { label: "Interval Count", callback: callbackIntervalCount, },
		start_date: { label: ("Start Date"), callback: callbackStartDate, },
		next_billing_date: { label: ("Next Billing Date"), callback: callbackNextBillingDate, },
		// total: { label: ("Total") },

		// datetime: { label: ("Datetime"), callback: callbackFormatDate },
	};

	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams);
			get_subscriptions();
		}
	}

	function callbackTitleLinkTo(entry, columnIndex) {

		return (
			<td data-label="ID" className="text-center pl-5 py-3"
				key={columnIndex}>
				<Link className="  font-bold" href={`/subscriptions/${entry.id}`}>
					{"#" + entry.id}
				</Link>
			</td>

		);
	}



	function callbackOrder(entry, columnIndex) {

		return (
			<td data-label="Order ID" className="text-center pl-5"
				key={columnIndex}>
				<Link className="  font-bold" href={`/orders/${entry.order_id}`}>
					{"#" + entry.order_id}
				</Link>
			</td>

		);
	}


	function callbackStatus(entry, columnIndex) {

		return (
			<td data-label="Status" className="text-center pl-5"
				key={columnIndex}>
				{entry.status}
			</td>

		);
	}
	function callbackTotal(entry, columnIndex) {

		return (
			<td data-label="Total" className="text-center pl-5"
				key={columnIndex}>
				{entry.total_amount}Tk
			</td>

		);
	}
	function callbackSubTotal(entry, columnIndex) {

		return (
			<td data-label="Sub Total" className="text-center pl-5"
				key={columnIndex}>
				{entry.subtotal_amount}TK
			</td>

		);
	}
	function callbackInterval(entry, columnIndex) {

		return (
			<td data-label="Interval" className="text-center pl-5"
				key={columnIndex}>
				{entry.renewal_interval}
			</td>

		);
	}
	function callbackIntervalCount(entry, columnIndex) {

		return (
			<td data-label="Interval Count" className="text-center pl-5"
				key={columnIndex}>
				{entry.interval_count}
			</td>

		);
	}
	function callbackStartDate(entry, columnIndex) {

		return (
			<td data-label="Start Date" className="text-center pl-5"
				key={columnIndex}>
				{entry.start_date}
			</td>

		);
	}
	function callbackNextBillingDate(entry, columnIndex) {

		return (
			<td data-label="Next Billing Date" className="text-center pl-5"
				key={columnIndex}>
				{entry.next_billing_date}
			</td>

		);
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
				entries={subscriptionsData}
				itemPath={"subscriptions"}
				onChange={onChangeQueryPrams}
				loading={loading}
				selectedRows={selectedRows}
				onSelectRows={onSelectRows}
				onRefreshRequest={onRefreshRequest}
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
