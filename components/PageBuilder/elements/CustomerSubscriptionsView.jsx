'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import EntriesTable from "../../../components/EntriesTable";

const ColumnsView = (props) => {
	const {
		block,

		index,
		id,
		type,
		prams,
		handleMoveBlock // New prop for recursive drops
	} = props;

	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors;


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
	function onRefreshRequest(entry) {


	}




	return (
		<div

			id={id}
			type={type}
			className={`${cssSelectors['*']?.classes}   
			`}

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

		</div>
	);
};

ColumnsView.propTypes = {
	block: PropTypes.object,

	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	prams: PropTypes.object,
	handleDropInto: PropTypes.func,
};

export default ColumnsView;
