"use client";

import React, { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";

/*
	Shared by the Deliveries list (Deliveries.jsx) and a delivery's page
	(DeliveryEdit.jsx): status badges, courier names, dates and copyable
	values, so both show a delivery the same way.
*/

export const BADGE_BASE =
	"inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

/*
	Delivery statuses. A delivery starts as `started` (start_delivery, or a
	courier booking); after that a courier's webhook writes its own status
	(Steadfast: pending, delivered, partial_delivered, cancelled, hold, ...).
*/
export const STATUS_BADGES = {
	started: { label: "Started", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
	pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	in_review: { label: "In review", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	hold: { label: "On hold", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
	paused: { label: "Paused", classes: "bg-gray-100 text-gray-700 ring-gray-200" },
	resumed: { label: "Resumed", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
	in_transit: { label: "In transit", classes: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
	delivered: { label: "Delivered", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	partial_delivered: { label: "Partly delivered", classes: "bg-lime-50 text-lime-700 ring-lime-200" },
	delivered_approval_pending: { label: "Delivered (approval pending)", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	partial_delivered_approval_pending: { label: "Partly delivered (approval pending)", classes: "bg-lime-50 text-lime-700 ring-lime-200" },
	cancelled_approval_pending: { label: "Cancelled (approval pending)", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	returned: { label: "Returned", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	cancelled: { label: "Cancelled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	canceled: { label: "Cancelled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	unknown: { label: "Unknown", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
	publish: { label: "Published", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	draft: { label: "Draft", classes: "bg-gray-100 text-gray-700 ring-gray-200" },
};
const FALLBACK_BADGE_CLASSES = "bg-gray-100 text-gray-600 ring-gray-200";

export const titleCase = (value) => String(value || "").replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/* A status's badge; unknown statuses get a readable neutral one, empty gets null. */
export function statusBadge(status) {
	var value = String(status ?? "").trim();
	return STATUS_BADGES[value.toLowerCase()] ?? (value ? { label: titleCase(value), classes: FALLBACK_BADGE_CLASSES } : null);
}

export function StatusBadge({ status, className = "" }) {
	var badge = statusBadge(status);
	return badge
		? <span className={`${BADGE_BASE} ${badge.classes} ${className}`}>{badge.label}</span>
		: <span className="text-gray-300">—</span>;
}

const COURIER_LABELS = { steadfast: "Steadfast", pathao: "Pathao", redx: "RedX", courrierfast: "Courrierfast", paperfly: "Paperfly" };

export const hasId = (value) => value !== null && value !== undefined && value !== "" && String(value) !== "0";

/* The courier's name, "Own rider" for a rider delivery, or "". */
export function courierName(delivery) {
	var courier = String(delivery?.courier ?? "").trim();
	if (courier) return COURIER_LABELS[courier.toLowerCase()] ?? titleCase(courier);
	return hasId(delivery?.rider_id) ? "Own rider" : "";
}

/* The tracking link, only when it is a web address. */
export function trackingLink(delivery) {
	var link = String(delivery?.tracking_link ?? "");
	return /^https?:\/\//i.test(link) ? link : "";
}

/* "2026-10-18 17:18:40" -> Date, or null for anything unreadable. */
export function parseDate(value) {
	if (!value) return null;
	const date = new Date(String(value).replace(" ", "T"));
	return isNaN(date) ? null : date;
}

export function timeAgo(date) {
	const seconds = Math.round((Date.now() - date.getTime()) / 1000);
	const units = [["year", 31536000], ["month", 2592000], ["week", 604800], ["day", 86400], ["hour", 3600], ["minute", 60]];
	for (const [unit, size] of units) {
		if (Math.abs(seconds) >= size) {
			return new Intl.RelativeTimeFormat(undefined, { numeric: "auto" }).format(-Math.round(seconds / size), unit);
		}
	}
	return "just now";
}

/* A value with a one-click copy (tracking codes are long and get pasted into the courier's site). */
export function CopyValue({ value, label, className = "text-xs" }) {
	const [copied, setCopied] = useState(false);
	return (
		<span className="inline-flex min-w-0 items-center gap-1">
			<span className={`truncate font-mono text-gray-700 ${className}`} title={value}>{value}</span>
			<button type="button" title={`Copy ${label}`} aria-label={`Copy ${label}`} className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
				onClick={() => {
					navigator.clipboard?.writeText(String(value)).then(() => {
						setCopied(true);
						setTimeout(() => setCopied(false), 1500);
					}).catch(() => { });
				}}>
				{copied ? <IconCheck size={14} className="text-emerald-600" /> : <IconCopy size={14} />}
			</button>
		</span>
	);
}
