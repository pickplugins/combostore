"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import EntriesTable from "../../components/EntriesTable";
import PopoverButton from "../../components/PopoverButton";
import { useCounterStore } from "../../store/useCounterStore";
import { IconCheck, IconMail, IconPhone, IconUserCheck, IconX } from "@tabler/icons-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Sign-ups waiting for a decision: Affiliates > Applications and
	Riders > Applications (`kind` = "affiliate" | "rider").

	Applicants are customer accounts with user meta cstore_{kind}_application
	- affiliates: ComboStoreAffiliates.php get_affiliate_applications /
	  decide_affiliate_application;
	- riders: ComboStoreRiderApplications.php get_rider_applications /
	  decide_rider_application.
	Managers only. Approving adds the role; rejecting keeps the customer
	account. Both email the applicant.
*/
const KINDS = {
	affiliate: {
		list: "get_affiliate_applications",
		decide: "decide_affiliate_application",
		noun: "affiliate",
		emptyHint: "People who sign up as affiliates on the storefront appear here while Settings > Affiliates > Approve new affiliate sign-ups is on.",
	},
	rider: {
		list: "get_rider_applications",
		decide: "decide_rider_application",
		noun: "rider",
		emptyHint: "People who sign up through a Register block set to Rider appear here while Settings > Riders > Rider sign-up is on. They can't see any orders until you approve them.",
	},
};

const FILTER_SELECT =
	"w-full sm:w-auto !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-8 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const APPROVE_BUTTON =
	"inline-flex !h-8 items-center gap-1.5 !rounded-lg !border-0 !bg-emerald-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-emerald-700 cursor-pointer disabled:opacity-50";

const REJECT_BUTTON =
	"inline-flex !h-8 items-center gap-1.5 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-red-300 hover:!bg-red-50 hover:!text-red-700 cursor-pointer disabled:opacity-50";

const DANGER_BUTTON =
	"inline-flex !h-8 items-center justify-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50";

const STATUS_BADGE = {
	pending: "bg-amber-50 text-amber-700 ring-amber-200",
	approved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
	rejected: "bg-red-50 text-red-700 ring-red-200",
};

const EMPTY = <span className="text-sm text-gray-300">—</span>;

/* Phone sign-ups get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;

const SEARCH_DELAY_MS = 400;

/* One array for EntriesTable: a new [] every render would re-run its selection effect. */
const NO_ROWS = [];

/* "2026-11-27 10:15:00" (site time) as a short date. */
function formatDate(value) {
	if (!value) return "";
	var date = new Date(String(value).replace(" ", "T"));
	return isNaN(date) ? value : date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

const AffiliateApplications = ({ onPendingChange, kind = "affiliate" }) => {

	const { token, addNotification } = useCounterStore();
	var K = KINDS[kind] ?? KINDS.affiliate;

	var [queryPrams, setqueryPrams] = useState({ status: "pending", keyword: "", paged: 1, order: "DESC", per_page: 20 });
	var [data, setdata] = useState({ posts: [], total: 0, maxPages: 1 });
	var [loading, setloading] = useState(false);
	var [busyId, setbusyId] = useState(null);
	var [rejectNote, setrejectNote] = useState("");
	/* Bumped after a decision so an open reject popover remounts closed. */
	var [popoverKey, setpopoverKey] = useState(0);

	const requestRef = useRef(0);

	function fetchApplications() {
		if (!token) return;
		var requestId = ++requestRef.current;
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/" + K.list, {
			method: "POST",
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
			body: JSON.stringify({ status: queryPrams.status, keyword: queryPrams.keyword, paged: queryPrams.paged, per_page: queryPrams.per_page, order: queryPrams.order }),
		})
			.then((response) => {
				if (response.status === 403) throw new Error(`You are not allowed to review ${K.noun} applications.`);
				if (!response.ok) throw new Error(`Server answered ${response.status}.`);
				return response.json();
			})
			.then((res) => {
				if (requestId !== requestRef.current) return;
				if (res?.status !== "success") throw new Error(res?.message || "The list could not be loaded.");
				setdata({ posts: Array.isArray(res.posts) ? res.posts : [], total: parseInt(res.total, 10) || 0, maxPages: parseInt(res.max_pages, 10) || 1 });
				onPendingChange?.(parseInt(res.pending, 10) || 0);
				setloading(false);
			})
			.catch((error) => {
				if (requestId !== requestRef.current) return;
				setloading(false);
				addNotification({ type: 'error', title: 'Applications not loaded', content: error?.message ?? "Please try again." });
			});
	}

	function decide(entry, decision, message) {
		setbusyId(entry.id);

		fetch(serverUrl + "wp-json/combo-store/v2/" + K.decide, {
			method: "POST",
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
			body: JSON.stringify({ user_id: entry.id, decision, message: message ?? "" }),
		})
			.then((response) => {
				if (!response.ok) throw new Error(`Server answered ${response.status}.`);
				return response.json();
			})
			.then((res) => {
				if (res?.status !== "success") throw new Error(res?.message || "The application could not be updated.");
				var name = entry.name || entry.email;
				addNotification({
					type: 'success',
					title: decision === "approve" ? (kind === "rider" ? "Rider approved" : "Affiliate approved") : "Application rejected",
					content: decision === "approve" ? `${name} is now ${kind === "rider" ? "a rider" : "an affiliate"}.` : `${name} keeps their customer account.`,
				});
				setrejectNote("");
				setpopoverKey((k) => k + 1);
				fetchApplications();
			})
			.catch((error) => {
				addNotification({ type: 'error', title: 'Not saved', content: error?.message ?? "Please try again." });
				/* Someone else may have decided it: show the current state. */
				fetchApplications();
			})
			.finally(() => setbusyId(null));
	}

	/* Typing in the search box waits; the other filters load at once. */
	const lastKeyword = useRef(queryPrams.keyword);
	useEffect(() => {
		if (lastKeyword.current === queryPrams.keyword) {
			fetchApplications();
			return;
		}
		lastKeyword.current = queryPrams.keyword;
		var timer = setTimeout(fetchApplications, SEARCH_DELAY_MS);
		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [queryPrams, token]);

	function onChangeQueryPrams(next) {
		if (!next) return;
		var same = ["status", "keyword", "paged", "order", "per_page"].every((k) => next[k] === queryPrams[k]);
		if (same) return;
		setqueryPrams(next.keyword !== queryPrams.keyword ? { ...queryPrams, ...next, paged: 1 } : { ...queryPrams, ...next });
	}

	function callbackApplicant(entry, columnIndex) {
		var name = entry?.name || entry?.email || "Unknown";
		return (
			<td data-label="Applicant" className="!px-5 py-3 text-left" key={columnIndex}>
				<div className="flex min-w-0 items-center gap-3">
					<div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
						{entry?.avatar && <img src={entry.avatar} alt="" className="h-9 w-9 object-cover" />}
					</div>
					<div className="flex min-w-0 flex-col">
						<Link href={`/dashboard/customers/${entry?.id}`} className="truncate text-sm font-medium text-gray-900 hover:text-[#634FE5] hover:underline">{name}</Link>
						<div className="flex flex-wrap items-center gap-2">
							<span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
							{/* source "account": an existing customer applied from their account (apply_for_affiliate). */}
							{entry?.source === "account" && (
								<span className="rounded-full bg-indigo-50 px-1.5 py-0.5 text-[11px] font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">Existing customer</span>
							)}
							{/* A re-application: the earlier one was rejected on this date. */}
							{entry?.previously_rejected_at && (
								<span title={`Earlier application rejected on ${formatDate(entry.previously_rejected_at)}`} className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[11px] font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
									Reapplied · rejected {formatDate(entry.previously_rejected_at)}
								</span>
							)}
						</div>
						{entry?.note && (
							<p title={entry.note} className="mt-1 line-clamp-2 max-w-xs whitespace-pre-line text-xs text-gray-500">{entry.note}</p>
						)}
					</div>
				</div>
			</td>
		);
	}

	function callbackContact(entry, columnIndex) {
		var email = entry?.email && !PHONE_EMAIL.test(entry.email) ? entry.email : "";
		var phone = entry?.phone || "";
		return (
			<td data-label="Contact" className="!px-5 py-3 text-left text-sm text-gray-600" key={columnIndex}>
				{!email && !phone && EMPTY}
				<div className="flex flex-col gap-1">
					{email && <a href={`mailto:${email}`} className="inline-flex items-center gap-1.5 hover:text-gray-900"><IconMail size={14} className="text-gray-400" />{email}</a>}
					{phone && <a href={`tel:${phone}`} className="inline-flex items-center gap-1.5 hover:text-gray-900"><IconPhone size={14} className="text-gray-400" />{phone}</a>}
				</div>
			</td>
		);
	}

	function callbackApplied(entry, columnIndex) {
		return (
			<td data-label="Applied" className="!px-5 py-3 text-left text-sm text-gray-600" key={columnIndex}>
				{entry?.applied_at ? formatDate(entry.applied_at) : EMPTY}
			</td>
		);
	}

	function callbackStatus(entry, columnIndex) {
		var status = entry?.status || "pending";
		return (
			<td data-label="Status" className="!px-5 py-3 text-left" key={columnIndex}>
				<span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize ring-1 ring-inset ${STATUS_BADGE[status] ?? STATUS_BADGE.pending}`}>{status}</span>
				{status !== "pending" && entry?.decided_at && (
					<div className="mt-1 text-xs text-gray-400">{formatDate(entry.decided_at)}{entry?.decided_by ? ` · ${entry.decided_by}` : ""}</div>
				)}
				{/* What the applicant was told (also shown in their account notice). */}
				{status === "rejected" && entry?.rejection_message && (
					<p title={entry.rejection_message} className="mt-1 line-clamp-2 max-w-xs whitespace-pre-line text-xs italic text-gray-500">"{entry.rejection_message}"</p>
				)}
			</td>
		);
	}

	function callbackActions(entry, columnIndex) {
		var busy = busyId === entry.id;
		var status = entry?.status;
		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm" key={columnIndex}>
				<div className="flex items-center justify-end gap-2">
					{(status === "pending" || status === "rejected") && (
						<button type="button" className={APPROVE_BUTTON} disabled={busy} onClick={() => decide(entry, "approve")}>
							<IconCheck size={15} /> {status === "rejected" ? "Approve anyway" : "Approve"}
						</button>
					)}
					{status === "pending" && (
						<PopoverButton
							key={`reject-${entry.id}-${popoverKey}`}
							buttonLabel={"Reject"}
							buttonIcon={<IconX size={15} />}
							title={"Reject application"}
							position={"bottomRight"}
							buttonClass={REJECT_BUTTON}
							popoverClass={`absolute z-[999] mt-2 w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>
							<div className="flex flex-col gap-2 p-3 text-left">
								<label htmlFor={`reject-note-${entry.id}`} className="text-xs font-medium text-gray-600">Message to the applicant (optional)</label>
								<textarea id={`reject-note-${entry.id}`} rows={3} className="w-full rounded-lg !border !border-gray-300 px-2 py-1.5 text-sm !shadow-none" value={rejectNote} onChange={(ev) => setrejectNote(ev.target.value)} />
								<p className="text-xs text-gray-500">They keep their customer account and get an email with this message.</p>
								<button type="button" className={DANGER_BUTTON} disabled={busy} onClick={() => decide(entry, "reject", rejectNote)}>
									{busy ? "Please wait…" : "Reject application"}
								</button>
							</div>
						</PopoverButton>
					)}
					{status === "approved" && <span className="inline-flex items-center gap-1 text-xs text-gray-400"><IconUserCheck size={14} /> {kind === "rider" ? "Rider" : "Affiliate"}</span>}
				</div>
			</td>
		);
	}

	var columns = {
		id: { id: "id", label: "Applicant", callback: callbackApplicant, classes: "w-80 text-left text-gray-600" },
		contact: { id: "contact", label: "Contact", callback: callbackContact, classes: "text-left text-gray-600" },
		applied_at: { id: "applied_at", label: "Applied", callback: callbackApplied, classes: "text-left text-gray-600" },
		status: { id: "status", label: "Status", callback: callbackStatus, classes: "text-left text-gray-600" },
		actions: { label: "Actions", callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
	};

	var empty = !loading && !queryPrams.keyword && data.total === 0;

	return (
		<div className="flex flex-col gap-3">
			<div className="flex flex-wrap gap-2">
				<select aria-label="Status" className={FILTER_SELECT} value={queryPrams.status} onChange={(ev) => setqueryPrams({ ...queryPrams, status: ev.target.value, paged: 1 })}>
					<option value="pending">Waiting for approval</option>
					<option value="approved">Approved</option>
					<option value="rejected">Rejected</option>
					<option value="all">All applications</option>
				</select>
				<select aria-label="Sort" className={FILTER_SELECT} value={queryPrams.order} onChange={(ev) => setqueryPrams({ ...queryPrams, order: ev.target.value, paged: 1 })}>
					<option value="DESC">Newest first</option>
					<option value="ASC">Oldest first</option>
				</select>
			</div>

			{empty ? (
				<div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconUserCheck size={24} /></div>
					<div className="text-sm font-semibold text-gray-800">{queryPrams.status === "pending" ? "No applications waiting" : "No applications here"}</div>
					<p className="max-w-sm text-xs text-gray-500">{K.emptyHint}</p>
				</div>
			) : (
				<EntriesTable
					queryPrams={queryPrams}
					columns={columns}
					entries={data}
					itemPath={""}
					onChange={onChangeQueryPrams}
					loading={loading}
					selectedRows={NO_ROWS}
					onRefreshRequest={fetchApplications}
				/>
			)}
		</div>
	);
};

export default AffiliateApplications;
