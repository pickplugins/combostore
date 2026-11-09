"use client";

import Link from "next/link";
import React from 'react'
import { useState, useEffect } from "react";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tab";
import { useCounterStore } from '../../store/useCounterStore'
import { IconRouteSquare, IconTruckDelivery, IconRefresh, IconExternalLink, IconReceipt, IconUser, IconMotorbike, IconAlertTriangle, IconArrowUpRight, IconCalendarTime, IconPackage } from "@tabler/icons-react";
import { StatusBadge, CopyValue, courierName, trackingLink, parseDate, timeAgo, hasId } from "./deliveryUi";

import OrderTrackings from '../../components/OrderTrackings';
import OrderDelivery from '../../components/OrderDelivery';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const TOOLBAR_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const LINK = "font-medium text-gray-800 hover:text-[#634FE5] hover:underline";
const CARD = "rounded-xl border border-gray-200 bg-white";

/* One labelled fact in the summary grid. */
function Fact({ icon, label, children }) {
	return (
		<div className="flex min-w-0 flex-col gap-1">
			<span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">{icon}{label}</span>
			<div className="min-w-0 text-sm text-gray-800">{children}</div>
		</div>
	);
}

const Dash = () => <span className="text-gray-300">—</span>;

/*
	A delivery: a summary of it (status, courier and tracking, order, customer,
	rider, when it was created), then its two editors - Delivery (OrderDelivery:
	rider and courier, start/update) and Trackings (OrderTrackings). Used as a
	page (/dashboard/deliveries/[id]) and in the Deliveries list's Edit drawer
	(variant="drawer": no page padding, with a link to the page).

	It used to show only a heading and the two tabs (plus three empty ones),
	with nothing at all while loading, on an error, for a delivery that does
	not exist (get_delivery answers with id null - that crashed on a null
	delivery) or one without an order.
*/
const DeliveryEdit = ({ id, variant = "page" }) => {

	const { token, addNotification } = useCounterStore()

	var [deliveryData, setdeliveryData] = useState(null);
	/* loading | ready | missing | error */
	var [state, setstate] = useState("loading");
	var [errorMessage, seterrorMessage] = useState("");
	var [refreshing, setrefreshing] = useState(false);

	useEffect(() => {
		get_delivery();
	}, [id]);

	function get_delivery({ quiet = false } = {}) {

		if (!id) {
			setstate("missing");
			return;
		}

		if (quiet) setrefreshing(true);
		else setstate("loading");

		fetch(serverUrl + "wp-json/combo-store/v2/get_delivery", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ delivery_id: id }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then((res) => {
				var delivery = res?.delivery;
				if (delivery && delivery.id != null) {
					setdeliveryData(delivery);
					setstate("ready");
				} else {
					setdeliveryData(null);
					setstate("missing");
				}
			})
			.catch((error) => {
				seterrorMessage(error?.message ?? "");
				if (quiet) {
					addNotification?.({ type: 'error', title: 'Could not refresh', content: error?.message ?? '' });
				} else {
					setstate("error");
				}
			})
			.finally(() => setrefreshing(false));
	}

	var drawer = variant === "drawer";
	var wrapper = drawer
		? "flex w-full flex-col gap-4"
		: "mx-auto flex w-full max-w-[1000px] flex-col gap-4 px-4 py-6 sm:px-6";

	var created = parseDate(deliveryData?.datetime);
	var courier = courierName(deliveryData);
	var link = trackingLink(deliveryData);

	return (

		<div className={wrapper}>

			{/* ---------- heading ---------- */}
			<div className="flex flex-wrap items-start justify-between gap-3">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#634FE5]/10 text-[#634FE5]">
						<IconTruckDelivery size={20} />
					</div>
					<div>
						<h1 className="flex flex-wrap items-center gap-2 text-xl font-semibold text-gray-900">
							{("Delivery")} <span className="font-normal text-gray-400">#{id}</span>
							{state === "ready" && <StatusBadge status={deliveryData?.status} />}
						</h1>
						{state === "ready" && created && (
							<p className="mt-0.5 text-xs text-gray-500" title={created.toLocaleString()}>
								{("Created")} {created.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })} · {timeAgo(created)}
							</p>
						)}
					</div>
				</div>

				{state === "ready" && (
					<div className="flex flex-wrap items-center gap-2">
						<button type="button" className={TOOLBAR_BUTTON} disabled={refreshing} onClick={() => get_delivery({ quiet: true })}>
							<IconRefresh size={16} className={refreshing ? "animate-spin" : ""} /> {("Refresh")}
						</button>
						{drawer && (
							<Link href={`/dashboard/deliveries/${id}`} className={TOOLBAR_BUTTON}>
								<IconArrowUpRight size={16} /> {("Open page")}
							</Link>
						)}
					</div>
				)}
			</div>

			{/* ---------- loading / missing / error ---------- */}
			{state === "loading" && (
				<div className={`${CARD} grid animate-pulse gap-5 p-5 sm:grid-cols-3`} aria-busy="true" aria-label="Loading delivery">
					{[0, 1, 2, 3, 4, 5].map(i => (
						<div key={i} className="flex flex-col gap-2">
							<div className="h-2.5 w-20 rounded bg-gray-200" />
							<div className="h-4 w-32 rounded bg-gray-100" />
						</div>
					))}
				</div>
			)}

			{state === "missing" && (
				<div className={`${CARD} flex flex-col items-center gap-2 px-6 py-12 text-center`}>
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconPackage size={24} /></div>
					<div className="text-sm font-semibold text-gray-800">{("Delivery not found")}</div>
					<p className="max-w-sm text-xs text-gray-500">{("It may have been deleted, or the link is wrong.")}</p>
					<Link href="/dashboard/deliveries" className={`${TOOLBAR_BUTTON} mt-2`}>{("All deliveries")}</Link>
				</div>
			)}

			{state === "error" && (
				<div className="flex flex-col items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
					<div className="flex items-center gap-2 text-sm font-medium text-amber-800">
						<IconAlertTriangle size={16} /> {("Could not load this delivery")}
					</div>
					{errorMessage && <p className="text-xs text-amber-700">{errorMessage}</p>}
					<button type="button" className={TOOLBAR_BUTTON} onClick={() => get_delivery()}>
						<IconRefresh size={16} /> {("Try again")}
					</button>
				</div>
			)}

			{/* ---------- summary + editors ---------- */}
			{state === "ready" && (
				<>
					<div className={`${CARD} grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3`}>

						<Fact icon={<IconTruckDelivery size={13} />} label="Courier">
							{courier ? <span className="font-medium">{courier}</span> : <Dash />}
						</Fact>

						<Fact icon={<IconPackage size={13} />} label="Consignment">
							{deliveryData?.consignment_id ? <CopyValue value={deliveryData.consignment_id} label="consignment id" className="text-sm" /> : <Dash />}
						</Fact>

						<Fact icon={<IconRouteSquare size={13} />} label="Tracking">
							{deliveryData?.tracking_code || link ? (
								<div className="flex flex-col gap-1">
									{deliveryData?.tracking_code && <CopyValue value={deliveryData.tracking_code} label="tracking code" className="text-sm" />}
									{link && (
										<a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">
											{("Track parcel")} <IconExternalLink size={12} />
										</a>
									)}
								</div>
							) : <Dash />}
						</Fact>

						<Fact icon={<IconReceipt size={13} />} label="Order">
							{hasId(deliveryData?.order_id)
								? <Link className={LINK} href={`/dashboard/orders/${deliveryData.order_id}`}>Order #{deliveryData.order_id}</Link>
								: <Dash />}
						</Fact>

						<Fact icon={<IconUser size={13} />} label="Customer">
							{hasId(deliveryData?.customer_id)
								? <Link className={LINK} href={`/dashboard/customers/${deliveryData.customer_id}`}>Customer #{deliveryData.customer_id}</Link>
								: <Dash />}
						</Fact>

						<Fact icon={<IconMotorbike size={13} />} label="Rider">
							{hasId(deliveryData?.rider_id)
								? <Link className={LINK} href={`/dashboard/riders/${deliveryData.rider_id}`}>Rider #{deliveryData.rider_id}</Link>
								: <span className="text-gray-400">{("Not assigned")}</span>}
						</Fact>

						{!created && (
							<Fact icon={<IconCalendarTime size={13} />} label="Created"><Dash /></Fact>
						)}
					</div>

					{hasId(deliveryData?.order_id) ? (
						<Tabs activeTab={0}
							orientation="horizontal"
							activeClass="active-tab "
							navsItemClass="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
							navsItemActiveClass="bg-[#634FE5] text-white shadow-sm"
							navsWrapperClass="mb-4 flex gap-1 border-b border-gray-200 pb-2"
							tabs={[
								{ label: "Delivery", id: 'delivery', icon: <IconTruckDelivery size={18} /> },
								{ label: "Trackings", id: 'trackings', icon: <IconRouteSquare size={18} /> },
							]}>

							{/* The editors keep their own state; Refresh above re-reads the summary after a change here. */}
							<Tab index={0} id="delivery">
								<OrderDelivery order_id={deliveryData.order_id} />
							</Tab>
							<Tab index={1} id="trackings">
								<OrderTrackings order_id={deliveryData.order_id} />
							</Tab>
						</Tabs>
					) : (
						<div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center text-xs text-gray-500">
							{("This delivery is not linked to an order, so there is no delivery or tracking to edit.")}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default DeliveryEdit;
