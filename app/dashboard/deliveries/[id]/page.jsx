"use client";

import Link from "next/link";
import React, { use } from 'react'
import { useState, useEffect, useContext } from "react";
import Tabs from "../../../../components/Tabs";
import Tab from "../../../../components/Tab";
import { useCounterStore } from '../../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


import { IconChevronDown, IconChevronUp, IconSquare, IconUsersPlus, IconTrash, IconTrolley, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconRouteSquare, IconTruckDelivery, IconRss, IconFileDollar } from "@tabler/icons-react";

import OrderTrackings from '../../../../components/OrderTrackings';
import OrderDelivery from '../../../../components/OrderDelivery';







const page = ({ params }) => {

	const { id } = use(params)





	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var [orderData, setorderData] = useState({});
	var [deliveryData, setdeliveryData] = useState();

	var [loading, setloading] = useState(false);



	useEffect(() => {
		get_delivery();
	}, []);



	function get_delivery() {


		// if (!token) {
		//   throw new Error("No token found");
		// }

		// if (!delivery_id) {
		// 	addNotification({ type: 'error', title: 'Delivery ID not found', content: 'Please provide a delivery ID' })
		// 	return;
		// }


		var postData = {
			delivery_id: id,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/get_delivery",
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
						var delivery = res?.delivery;




						setloading(false);

						if (delivery.id != null) {

							setdeliveryData(delivery)

						}








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



	return (

		<div className="mx-auto flex w-full max-w-[1000px] flex-col gap-4 px-4 py-6 sm:px-6">

			{/* Page heading: these detail screens showed no title at all. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<h1 className="text-xl font-semibold text-gray-900">
					{("Delivery")} <span className="font-normal text-gray-400">#{id}</span>
				</h1>
			</div>


			<Tabs activeTab={0}
				orientation="horizontal"
				activeClass="active-tab "
				navsItemClass="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
				navsItemActiveClass="bg-[#634FE5] text-white shadow-sm"

				navsWrapperClass="mb-5 flex gap-1 border-b border-gray-200 pb-2"

				tabs={[
					{ label: "Delivery", id: 'delivery', icon: <IconTruckDelivery size={18} /> },
					{ label: "Trackings", id: 'trackings', icon: <IconRouteSquare size={18} /> },


				]}>


				<Tab index={0} id="delivery">
					{deliveryData?.order_id && (
						<OrderDelivery order_id={deliveryData?.order_id} />
					)}
				</Tab>
				<Tab index={1} id="trackings">
					{deliveryData?.order_id && (
						<OrderTrackings order_id={deliveryData?.order_id} />

					)}




				</Tab>


				<Tab index={2}>




				</Tab>
				<Tab index={3}>








				</Tab>

				<Tab index={4}>





				</Tab>



			</Tabs>












		</div>



	);
};

export default page;
