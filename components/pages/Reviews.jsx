"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import { useCounterStore } from '../../store/useCounterStore'
import { BADGE_BASE, parseDate, timeAgo } from "./deliveryUi";

import { IconTrash, IconRefresh, IconCheck, IconBan, IconStar, IconStarFilled, IconArrowBackUp, IconClockPause, IconMail } from "@tabler/icons-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same toolbar, select and link styles as the Posts and Deliveries screens. */
const TOOLBAR_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const DANGER_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50";
const FILTER_SELECT =
	"w-full sm:w-auto !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-8 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";
const LINK = "font-medium text-gray-800 hover:text-[#634FE5] hover:underline";
const ROW_ACTION = "inline-flex items-center gap-1 transition-colors cursor-pointer";

/* A review's rating is the "rate" comment meta, 1 to 5; older reviews may have none. */
function Stars({ value }) {
	var rate = Math.max(0, Math.min(5, Math.round(parseFloat(value) || 0)));
	if (!rate) return <span className="text-gray-300">—</span>;

	return (
		<span className="inline-flex items-center gap-0.5 text-amber-500" title={`${rate} out of 5`} aria-label={`${rate} out of 5 stars`}>
			{[1, 2, 3, 4, 5].map(i => i <= rate
				? <IconStarFilled key={i} size={14} />
				: <IconStar key={i} size={14} className="text-gray-300" />)}
		</span>
	);
}

/* get_comments' moderator-only `status` values. */
const STATUS_FILTERS = [["all", "All"], ["hold", "Pending"], ["approve", "Approved"], ["spam", "Spam"], ["trash", "Trash"]];

/* comment_approved is "1", "0", "spam" or "trash". */
const COMMENT_STATUS = {
	"1": { label: "Approved", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	"0": { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	spam: { label: "Spam", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	trash: { label: "Trash", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

const ACTION_DONE = { approve: "approved", hold: "unapproved", spam: "marked as spam", unspam: "restored from spam", trash: "moved to the trash", untrash: "restored" };


/*
	Product reviews: comments on products (post_type cmb_product). Blog comments
	have their own screen; order notes and ticket replies are never listed or
	touched here.

	This screen was a copy of the old Comments screen and had its faults:
	- "Delete Products" sent the selected IDs to delete_products, which is
	  wp_delete_post. Rows carried no `id` (reviews have comment_ID), so the
	  IDs were empty and nothing was deleted - but once they were real it
	  would have trashed the post or product with the review's number;
	- "Add Review" created a coupon (add_coupon);
	- Edit opened an empty drawer;
	- it sent `number` (get_comments reads per_page) and got no total back,
	  so page size, search and paging did nothing, and it listed blog
	  comments and order notes alongside the reviews.
*/
const Reviews = () => {

	const { token, addNotification } = useCounterStore()

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 20, status: "all" });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}

	var columns = {
		check: { label: ("Check"), },
		content: { label: ("Review"), callback: callbackCommentContent, classes: "text-left" },
		rate: { label: ("Rating"), callback: callbackRating, classes: "text-left" },
		comment_author: { label: ("Author"), callback: callbackAuthor, classes: "text-left" },
		post: { label: ("Product"), callback: callbackPost, classes: "text-left" },
		status: { label: ("Status"), callback: callbackStatus, classes: "text-left" },
		comment_date: { label: ("Date"), callback: callbackDate, classes: "text-left" },
	};


	function fetchPosts() {

		if (queryPrams.paged < 0) {
			return;
		}

		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_comments", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				post_type: "cmb_product",
				type: "comment",
				status: queryPrams.status || "all",
				keyword: queryPrams.keyword,
				per_page: parseInt(queryPrams.per_page, 10) || 20,
				paged: queryPrams.paged,
				order: queryPrams.order,
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then((res) => {
				/* EntriesTable selects and keys rows by `id`; comments carry comment_ID. */
				var comments = Array.isArray(res?.comments) ? res.comments.map(comment => ({ ...comment, id: parseInt(comment.comment_ID, 10) })) : [];

				setproductsData({ posts: comments, total: parseInt(res?.total, 10) || 0, maxPages: parseInt(res?.max_pages, 10) || 1 })
				setloading(false);
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Could not load reviews', content: error?.message ?? '' });
			});
	}


	function moderate(ids, action) {

		ids = ids != undefined ? ids : selectedRows;
		if (!ids?.length) return;

		if (action === 'trash' && !confirm(ids.length === 1 ? "Move this review to the trash?" : `Move ${ids.length} reviews to the trash?`)) {
			return;
		}

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/moderate_comments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ ids: ids, action: action }),
		})
			.then((response) => {
				if (response.status === 403) {
					throw new Error("Only administrators and store managers can moderate reviews.");
				}
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then((res) => {
				var done = parseInt(res?.done, 10) || 0;
				addNotification({ type: done ? 'success' : 'error', title: done ? 'Reviews updated' : 'Nothing changed', content: `${done} ${done === 1 ? "review" : "reviews"} ${ACTION_DONE[action] ?? "updated"}.` });
				setselectedRows([]);
				fetchPosts();
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Not updated', content: error?.message ?? '' });
			});
	}


	useEffect(() => {
		if (!token) return;
		fetchPosts();
	}, [queryPrams, token]);

	/* The effect above refetches when the query changes; this used to fetch a second time with the old query. */
	function onChangeQueryPrams(next) {
		if (next) {
			setqueryPrams(next)
		}
	}

	function onRefreshRequest() {
		fetchPosts();
	}


	/* ---------------- cells ---------------- */

	/* The actions that make sense for a comment in its current state. */
	function RowActions({ entry }) {
		var state = String(entry?.comment_approved);
		var id = entry?.id;

		if (state === 'trash') {
			return (
				<button type="button" className={`${ROW_ACTION} text-gray-500 hover:text-gray-900`} onClick={() => moderate([id], 'untrash')}>
					<IconArrowBackUp size={13} /> {("Restore")}
				</button>
			);
		}

		if (state === 'spam') {
			return (
				<>
					<button type="button" className={`${ROW_ACTION} text-gray-500 hover:text-gray-900`} onClick={() => moderate([id], 'unspam')}>
						<IconArrowBackUp size={13} /> {("Not spam")}
					</button>
					<button type="button" className={`${ROW_ACTION} text-red-500 hover:text-red-700`} onClick={() => moderate([id], 'trash')}>
						<IconTrash size={13} /> {("Trash")}
					</button>
				</>
			);
		}

		return (
			<>
				{state === '1' ? (
					<button type="button" className={`${ROW_ACTION} text-amber-600 hover:text-amber-800`} onClick={() => moderate([id], 'hold')}>
						<IconClockPause size={13} /> {("Unapprove")}
					</button>
				) : (
					<button type="button" className={`${ROW_ACTION} text-emerald-600 hover:text-emerald-800`} onClick={() => moderate([id], 'approve')}>
						<IconCheck size={13} /> {("Approve")}
					</button>
				)}
				<button type="button" className={`${ROW_ACTION} text-gray-500 hover:text-gray-900`} onClick={() => moderate([id], 'spam')}>
					<IconBan size={13} /> {("Spam")}
				</button>
				<button type="button" className={`${ROW_ACTION} text-red-500 hover:text-red-700`} onClick={() => moderate([id], 'trash')}>
					<IconTrash size={13} /> {("Trash")}
				</button>
			</>
		);
	}

	function callbackCommentContent(entry, columnIndex) {
		return (
			<td data-label="Comment" className="!px-5 py-3 text-left" key={`content-${entry?.id}`}>
				<div className="flex max-w-xl flex-col gap-1.5">
					<p className={`line-clamp-3 whitespace-pre-line break-words text-sm ${String(entry?.comment_approved) === '0' ? 'text-gray-900' : 'text-gray-700'}`}>
						{entry?.comment_content || <span className="text-gray-400">{("(empty)")}</span>}
					</p>
					<div className="flex flex-wrap items-center gap-3 text-xs">
						<RowActions entry={entry} />
					</div>
				</div>
			</td>
		);
	}

	function callbackRating(entry, columnIndex) {
		return (
			<td data-label="Rating" className="!px-5 py-3 text-left" key={`rate-${entry?.id}`}>
				<Stars value={entry?.rate} />
			</td>
		);
	}

	function callbackAuthor(entry, columnIndex) {
		return (
			<td data-label="Author" className="!px-5 py-3 text-left text-sm" key={`author-${entry?.id}`}>
				<div className="flex items-start gap-2">
					{entry?.avatar
						? <img className="h-8 w-8 shrink-0 rounded-full" src={entry.avatar} alt="" width={32} height={32} loading="lazy" />
						: <div className="h-8 w-8 shrink-0 rounded-full bg-gray-100" />}
					<div className="flex min-w-0 flex-col">
						<span className="whitespace-nowrap font-medium text-gray-800">{entry?.comment_author || ("Anonymous")}</span>
						{entry?.comment_author_email && (
							<a href={`mailto:${entry.comment_author_email}`} className="inline-flex items-center gap-1 truncate text-xs text-gray-500 hover:text-[#634FE5] hover:underline">
								<IconMail size={12} className="shrink-0" /> {entry.comment_author_email}
							</a>
						)}
					</div>
				</div>
			</td>
		);
	}

	function callbackPost(entry, columnIndex) {
		var postId = entry?.comment_post_ID;
		var title = entry?.post_title || (postId ? `#${postId}` : "");

		return (
			<td data-label="On" className="!px-5 py-3 text-left text-sm" key={`post-${entry?.id}`}>
				{postId ? (
					<Link className={`${LINK} line-clamp-2 max-w-[220px]`} href={`/dashboard/products/${postId}`}>
						<span dangerouslySetInnerHTML={{ __html: title }} />
					</Link>
				) : <span className="text-gray-300">—</span>}
			</td>
		);
	}

	function callbackStatus(entry, columnIndex) {
		var status = COMMENT_STATUS[String(entry?.comment_approved)];

		return (
			<td data-label="Status" className="!px-5 py-3 text-left" key={`status-${entry?.id}`}>
				{status ? <span className={`${BADGE_BASE} ${status.classes}`}>{status.label}</span> : <span className="text-gray-300">—</span>}
			</td>
		);
	}

	/* This used to throw on a date it could not read, taking the list down with it. */
	function callbackDate(entry, columnIndex) {
		var date = parseDate(entry?.comment_date);

		return (
			<td data-label="Date" className="!px-5 py-3 text-left text-sm" key={`date-${entry?.id}`}>
				{date ? (
					<div className="flex flex-col">
						<span className="whitespace-nowrap text-gray-800">{date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}</span>
						<span className="whitespace-nowrap text-xs text-gray-500" title={date.toLocaleString()}>
							{date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })} · {timeAgo(date)}
						</span>
					</div>
				) : <span className="text-gray-300">—</span>}
			</td>
		);
	}


	var total = productsData?.total ?? 0;
	var status = queryPrams?.status || "all";
	var filtered = Boolean(queryPrams?.keyword) || status !== "all";
	var inTrash = status === "trash";
	var inSpam = status === "spam";

	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Reviews")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{total} {total === 1 ? ("review") : ("reviews")}
						{status !== "all" ? ` · ${STATUS_FILTERS.find(item => item[0] === status)?.[1] ?? ""}` : ""}
						{" · "}{("Reviews customers leave on your products. Blog comments are under Comments.")}
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<Link href="/dashboard/comments" className={TOOLBAR_BUTTON}>{("Comments")}</Link>
					<button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
						<IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
					</button>
				</div>
			</div>

			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap items-center gap-2">
					{/* Tabs for the moderation queues, like WordPress's own comments screen. */}
					<div role="tablist" aria-label="Status" className="flex flex-wrap gap-1 rounded-lg border border-gray-200 bg-white p-1">
						{STATUS_FILTERS.map(([value, label]) => (
							<button key={value} type="button" role="tab" aria-selected={status === value}
								onClick={() => { setselectedRows([]); setqueryPrams({ ...queryPrams, status: value, paged: 1 }); }}
								className={`!h-7 rounded-md !px-3 text-sm font-medium transition-colors ${status === value ? '!bg-[#634FE5] !text-white shadow-sm' : '!bg-transparent text-gray-600 hover:!bg-gray-100 hover:text-gray-900'}`}>
								{label}
							</button>
						))}
					</div>

					<select aria-label="Sort" className={FILTER_SELECT} value={queryPrams?.order ?? "DESC"} onChange={ev => setqueryPrams({ ...queryPrams, order: ev.target.value, paged: 1 })}>
						<option value="DESC">{("Newest first")}</option>
						<option value="ASC">{("Oldest first")}</option>
					</select>
				</div>

				{selectedRows.length > 0 && (
					<div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
						<span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
						<button type="button" className="!h-8 rounded-md px-2 text-sm text-gray-500 hover:bg-white hover:text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>

						{inTrash ? (
							<button type="button" className={`${TOOLBAR_BUTTON} !h-8`} disabled={loading} onClick={() => moderate(undefined, 'untrash')}>
								<IconArrowBackUp size={15} /> {("Restore")}
							</button>
						) : inSpam ? (
							<button type="button" className={`${TOOLBAR_BUTTON} !h-8`} disabled={loading} onClick={() => moderate(undefined, 'unspam')}>
								<IconArrowBackUp size={15} /> {("Not spam")}
							</button>
						) : (
							<>
								<button type="button" className={`${TOOLBAR_BUTTON} !h-8`} disabled={loading} onClick={() => moderate(undefined, 'approve')}>
									<IconCheck size={15} /> {("Approve")}
								</button>
								<button type="button" className={`${TOOLBAR_BUTTON} !h-8`} disabled={loading} onClick={() => moderate(undefined, 'hold')}>
									<IconClockPause size={15} /> {("Unapprove")}
								</button>
								<button type="button" className={`${TOOLBAR_BUTTON} !h-8`} disabled={loading} onClick={() => moderate(undefined, 'spam')}>
									<IconBan size={15} /> {("Spam")}
								</button>
							</>
						)}

						{!inTrash && (
							<button type="button" className={`${DANGER_BUTTON} !h-8`} disabled={loading} onClick={() => moderate(undefined, 'trash')}>
								<IconTrash size={15} /> {("Trash")}
							</button>
						)}
					</div>
				)}
			</div>

			{!loading && !filtered && total === 0 && (productsData?.posts ?? []).length === 0 ? (
				<div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconStar size={24} /></div>
					<div className="text-sm font-semibold text-gray-800">{("No reviews yet")}</div>
					<p className="max-w-sm text-xs text-gray-500">{("Reviews customers leave on your products show up here to approve, mark as spam or trash.")}</p>
					<Link href="/dashboard/products" className={`${TOOLBAR_BUTTON} mt-2`}>{("Go to products")}</Link>
				</div>
			) : (
				<EntriesTable
					queryPrams={queryPrams}
					columns={columns}
					entries={productsData}
					itemPath={""}
					onChange={onChangeQueryPrams}
					loading={loading}
					selectedRows={selectedRows}
					onSelectRows={onSelectRows}
					onRefreshRequest={onRefreshRequest}
				/>
			)}
		</div>
	);
};

export default Reviews;
