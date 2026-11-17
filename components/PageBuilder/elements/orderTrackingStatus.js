/*
	Status words and the progress bar for the Order Tracking element.

	TRACKING_STATUS_LABELS are the delivery update statuses staff choose from
	on the order screen (components/OrderTrackings.jsx, TRACKING_STATUSES) -
	kept in step with that list. A status missing from it is shown title-cased
	("held_at_customs" -> "Held at customs") rather than dropped.
*/

export const ORDER_STATUS_LABELS = {
	pending: "Order placed",
	hold: "On hold",
	scheduled: "Scheduled",
	confirmed: "Confirmed",
	processing: "Processing",
	delivered: "Delivered",
	completed: "Completed",
	canceled: "Canceled",
	failed: "Failed",
	refunded: "Refunded",
	returned: "Returned",
};

export const PAYMENT_STATUS_LABELS = {
	paid: "Paid",
	pending: "Payment pending",
	due: "Payment due",
	refunded: "Refunded",
	delayed: "Payment delayed",
	failed: "Payment failed",
	partial: "Partly paid",
};

export const TRACKING_STATUS_LABELS = {
	order_placed: "Order placed",
	packed: "Packed",
	shipped: "Shipped",
	in_transit: "In transit",
	out_for_delivery: "Out for delivery",
	delivered: "Delivered",
	delivery_attempted: "Delivery attempted",
	returned_to_seller: "Returned to seller",
	wait_for_customer: "Waiting for you",
	call_to_customer: "Calling you",
	call_to_seller: "Contacting the seller",
	confirming_with_kitchen: "Confirming with the kitchen",
	preparing_food: "Preparing your food",
	ready_for_pickup: "Ready for pickup",
	picked_up_by_rider: "Picked up by the rider",
	on_the_way: "On the way",
	label_generated: "Label created",
	picked_up_from_sender: "Picked up",
	at_sorting_facility: "At the sorting facility",
	departed_facility: "Left the facility",
	in_transit_logistics: "In transit",
	arrived_at_destination_hub: "Arrived at the local hub",
	out_for_delivery_logistics: "Out for delivery",
	delivered_logistics: "Delivered",
	held_at_customs: "Held at customs",
	/* cstore_deliveries.status when a delivery is first created. */
	started: "Shipped",
};

export const COURIER_LABELS = {
	steadfast: "Steadfast",
	pathao: "Pathao",
	redx: "RedX",
	combostore: "Our delivery team",
};

export function titleCase(value) {
	const text = String(value ?? "").replace(/[_-]+/g, " ").trim();
	return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
}

export const statusLabel = (map, value) => map[value] ?? titleCase(value);

/* Orders that stopped: shown as a notice instead of the progress bar. */
export const STOPPED_STATUSES = ["canceled", "failed", "refunded", "returned"];

/* Delivery updates that need the shopper's attention. */
export const ATTENTION_STATUSES = ["delivery_attempted", "returned_to_seller", "wait_for_customer", "call_to_customer", "held_at_customs"];

/*
	How far along the order is, 0-3: placed, confirmed, shipped, delivered.

	Taken from the furthest of the order's own status and every delivery's
	status and updates - staff may move one without the other (mark it
	shipped on the delivery, leave the order "processing").
*/
const ORDER_RANK = { pending: 0, hold: 0, scheduled: 0, confirmed: 1, processing: 1, delivered: 3, completed: 3 };

function trackingRank(status) {
	const s = String(status ?? "");
	if (s.startsWith("delivered")) return 3;
	if (["order_placed"].includes(s)) return 0;
	if (["packed", "confirming_with_kitchen", "preparing_food", "ready_for_pickup", "label_generated"].includes(s)) return 1;
	if (s) return 2; /* anything else with a parcel moving: shipped, in transit, out for delivery, picked up... */
	return 0;
}

export function progressRank(order, deliveries) {
	let rank = ORDER_RANK[order?.status] ?? 0;
	for (const delivery of deliveries ?? []) {
		rank = Math.max(rank, trackingRank(delivery?.status));
		for (const event of delivery?.events ?? []) rank = Math.max(rank, trackingRank(event?.status));
	}
	return rank;
}

/* "2026-11-16 02:34:17" (store time) as a readable date, or "" when empty or unparseable. */
export function formatOrderDate(value, withTime = false) {
	if (!value || String(value).startsWith("0000")) return "";
	const date = new Date(String(value).replace(" ", "T"));
	if (!Number.isFinite(date.getTime())) return "";
	return date.toLocaleString(undefined, withTime
		? { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" }
		: { day: "numeric", month: "short", year: "numeric" });
}
