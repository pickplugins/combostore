'use client'

/*
	Shared pieces for the customer account blocks (orders, subscriptions,
	profile). Kept in one place so the account tabs look like one page.
*/

import Link from "next/link";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export const accountInputClass = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500";

export const accountPrimaryButtonClass = "inline-flex items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

export const accountSecondaryButtonClass = "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/30 disabled:cursor-not-allowed disabled:opacity-50";

/* Status colours by meaning rather than by exact word, so "canceled" and
	 "cancelled" (both are in the data) look the same. */
const statusTones = {
	green: "bg-green-50 text-green-700 ring-green-600/20",
	blue: "bg-blue-50 text-blue-700 ring-blue-600/20",
	amber: "bg-amber-50 text-amber-800 ring-amber-600/20",
	red: "bg-red-50 text-red-700 ring-red-600/20",
	gray: "bg-gray-50 text-gray-600 ring-gray-500/20",
};

const statusToneByValue = {
	completed: "green", delivered: "green", paid: "green", active: "green", confirmed: "green",
	processing: "blue", scheduled: "blue", shipped: "blue",
	pending: "amber", hold: "amber", incomplete: "amber", unpaid: "amber", paused: "amber",
	canceled: "red", cancelled: "red", failed: "red", refunded: "red", returned: "red", expired: "red",
};

export function StatusBadge({ value, label }) {
	const key = String(value || "pending").toLowerCase();
	const tone = statusTones[statusToneByValue[key] ?? "gray"];
	const text = label || (key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, " ");

	return (
		<span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tone}`}>
			{text}
		</span>
	);
}

export function AccountEmptyState({ icon: Icon, title, children, actionHref, actionLabel }) {
	return (
		<div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
			{Icon && (
				<span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
					<Icon size={24} />
				</span>
			)}
			<div className="text-base font-semibold text-gray-900">{title}</div>
			{children && <p className="max-w-sm text-sm text-gray-500">{children}</p>}
			{actionHref && (
				<Link href={actionHref} className={`${accountPrimaryButtonClass} mt-1`}>{actionLabel}</Link>
			)}
		</div>
	);
}

/* Placeholder rows while a list loads, shaped like the cards they stand in for. */
export function AccountListSkeleton({ rows = 3 }) {
	return (
		<div className="flex flex-col gap-3" aria-hidden="true">
			{Array.from({ length: rows }).map((_, index) => (
				<div key={index} className="animate-pulse rounded-xl border border-gray-200 bg-white p-4">
					<div className="flex items-center justify-between gap-4">
						<div className="h-4 w-32 rounded bg-gray-200" />
						<div className="h-5 w-20 rounded-full bg-gray-200" />
					</div>
					<div className="mt-4 h-3 w-2/3 rounded bg-gray-100" />
					<div className="mt-2 h-3 w-1/3 rounded bg-gray-100" />
				</div>
			))}
		</div>
	);
}

export function AccountPager({ page, maxPages, loading, onChange }) {
	if (!maxPages || maxPages <= 1) return null;

	return (
		<nav className="flex items-center justify-between gap-3 pt-2" aria-label="Pagination">
			<button
				type="button"
				className={accountSecondaryButtonClass}
				disabled={loading || page <= 1}
				onClick={() => onChange(page - 1)}
			>
				<IconChevronLeft size={16} /> Previous
			</button>
			<span className="text-sm text-gray-500">Page {page} of {maxPages}</span>
			<button
				type="button"
				className={accountSecondaryButtonClass}
				disabled={loading || page >= maxPages}
				onClick={() => onChange(page + 1)}
			>
				Next <IconChevronRight size={16} />
			</button>
		</nav>
	);
}

export function AccountNotice({ tone = "error", children }) {
	const tones = {
		error: "border-red-200 bg-red-50 text-red-700",
		info: "border-blue-200 bg-blue-50 text-blue-800",
	};
	return (
		<div className={`rounded-lg border px-4 py-3 text-sm ${tones[tone] ?? tones.info}`}>{children}</div>
	);
}

/* "2026-11-05 01:30:07" -> "5 Nov 2026". Unparseable input is shown as is
	 instead of throwing, which the old date column did. */
export function formatAccountDate(value) {
	if (!value) return "";
	const date = new Date(String(value).replace(" ", "T"));
	if (isNaN(date)) return String(value);
	return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
