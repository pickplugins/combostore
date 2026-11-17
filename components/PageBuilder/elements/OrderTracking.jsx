"use client"
import React, { useState } from "react";
import { OrderTrackingForm, OrderTrackingHeader, OrderTrackingResult } from "./OrderTrackingView";
import { elementCssClasses } from "../ElementsDefinition";
import { useUtilsStore } from "../../../store/useUtilsStore";

/* A made-up order for the canvas, so every part of the result can be seen and styled. */
const SAMPLE = {
	order: { id: 1024, status: "processing", payment_status: "pending", total_amount: 1250, currency: "BDT", shipping_method: "Inside Dhaka", created_at: "2026-11-14 10:20:00" },
	items: [{ name: "Cotton T-shirt", quantity: 2 }, { name: "Canvas tote bag", quantity: 1 }],
	deliveries: [{
		courier: "steadfast", tracking_code: "SFR0000SAMPLE", tracking_link: "#", status: "in_transit", datetime: "2026-11-15 09:00:00",
		events: [
			{ status: "out_for_delivery", notes: "Your parcel is with the rider.", datetime: "2026-11-16 09:30:00" },
			{ status: "in_transit", notes: "", datetime: "2026-11-15 18:05:00" },
			{ status: "packed", notes: "We're preparing your order.", datetime: "2026-11-15 09:00:00" },
		],
	}],
};

/*
	Builder (canvas) preview of Order Tracking: the shop's own markup and
	classes - header, the form (inert: typing works, submitting does not
	look anything up), and a dimmed sample result below it, labelled as one.
	options.previewResult false hides the sample, to see the block as a
	shopper first meets it.
*/
const OrderTracking = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var options = props?.options ?? {};

	var cls = elementCssClasses('orderTracking', props?.cssSelectors);
	const { wrapCurrency } = useUtilsStore();

	const [orderId, setOrderId] = useState('');
	const [contact, setContact] = useState('');

	var rootClassName = `${cls('*')} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`;

	return (
		<div
			id={id}
			type={props?.type}
			className={rootClassName}
			draggable
			onClick={e => { e.stopPropagation(); setSelectedId(selectedId != id ? id : null); }}
			onDragStart={e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); }}
			onDragEnd={() => { setDraggingBlock?.(null); setDragOverIndex?.(null); }}
			onDragOver={e => { e.preventDefault(); setDragOverIndex?.(index); }}
			onDragLeave={() => setDragOverIndex?.(null)}
		>
			<OrderTrackingHeader cls={cls} options={options} />
			<OrderTrackingForm cls={cls} id={id} options={options} orderId={orderId} contact={contact} setOrderId={setOrderId} setContact={setContact} onSubmit={e => e.preventDefault()} loading={false} signedIn={false} />

			{options?.previewResult !== false && (
				<div className="opacity-70" title="Sample result - shoppers see their own order here">
					<p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-orange-500">Sample result</p>
					<OrderTrackingResult cls={cls} options={options} data={SAMPLE} wrapCurrency={wrapCurrency} />
				</div>
			)}
		</div>
	);
};

export default OrderTracking;
