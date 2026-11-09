"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import PopoverButton from '../../components/PopoverButton';
import CouponEdit from '../../components/pages/CouponEdit';
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';
import { BADGE_BASE, StatusBadge, parseDate } from "./deliveryUi";

import { IconTrash, IconRefresh, IconPencil, IconPlus, IconCopy, IconTicket, IconExternalLink } from "@tabler/icons-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same toolbar, select and link styles as the Posts and Deliveries screens. */
const TOOLBAR_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const PRIMARY_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer disabled:opacity-50";
const DANGER_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50";
const FILTER_SELECT =
	"w-full sm:w-auto !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-8 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";
const LINK = "font-medium text-gray-800 hover:text-[#634FE5] hover:underline";

const VALIDITY = {
	scheduled: { label: "Scheduled", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
	active: { label: "Running", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	expired: { label: "Expired", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

const shortDate = (date) => date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });


/*
	The coupons list.

	It used to label both date columns "Expiry Date", show the amount without
	saying whether it was a percentage or money, throw (and take the list down)
	on a date it could not read, fetch twice on every page change, and call its
	bulk delete "Delete Products". Rows deleted and added without a word, and a
	failed request left the spinner on.
*/
const Coupons = () => {

	const { token, addNotification } = useCounterStore()
	const { wrapCurrency } = useUtilsStore()
	const router = useRouter()

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 10, });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}

	var columns = {
		check: { label: ("Check"), },
		id: { label: ("Coupon"), callback: callbackTitle, classes: "text-left" },
		couponCode: { label: ("Code"), callback: callbackCouponCode, classes: "text-left" },
		amount: { label: ("Discount"), callback: callbackAmount, classes: "text-left" },
		limit: { label: ("Usage limit"), callback: callbackLimit, classes: "text-left" },
		validity: { label: ("Valid"), callback: callbackValidity, classes: "text-left" },
		status: { label: ("Status"), callback: callbackStatus, classes: "text-left" },
	};


	function fetchPosts() {

		if (queryPrams.paged < 0) {
			return;
		}

		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_coupons", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(queryPrams),
		})
			.then((response) => {
				if (response.status === 403) {
					throw new Error("Only administrators and store managers can manage coupons.");
				}
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then((res) => {
				setproductsData({ posts: Array.isArray(res?.posts) ? res.posts : [], total: parseInt(res?.total, 10) || 0, maxPages: parseInt(res?.max_pages, 10) || 1 })
				setloading(false);
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Could not load coupons', content: error?.message ?? '' });
			});
	}


	/* Coupons are posts, so delete_products (wp_delete_post) is the right
	   endpoint here: they go to the trash. */
	function delete_coupons(ids) {

		ids = ids != undefined ? ids : selectedRows;
		if (!ids?.length) return;

		if (!confirm(ids.length === 1 ? `Move coupon #${ids[0]} to the trash? It stops working at checkout.` : `Move ${ids.length} coupons to the trash? They stop working at checkout.`)) {
			return;
		}

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ ids: ids }),
		})
			.then((response) => {
				if (response.status === 403) {
					throw new Error("Only administrators and store managers can delete coupons.");
				}
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then(() => {
				addNotification({ type: 'success', title: 'Moved to trash', content: ids.length === 1 ? `Coupon #${ids[0]} moved to the trash.` : `${ids.length} coupons moved to the trash.` });
				setselectedRows([]);
				fetchPosts();
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Not deleted', content: error?.message ?? '' });
			});
	}


	/* add_coupon creates a draft called "Sample Coupon" and answers with its ID,
	   so the new coupon opens in its editor. Should an older server send no
	   ID, the list goes back to its newest-first first page instead, where the
	   new draft is the top row. */
	function add_coupon() {

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/add_coupon", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({}),
		})
			.then((response) => {
				if (response.status === 403) {
					throw new Error("Only administrators and store managers can manage coupons.");
				}
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then((res) => {
				var newId = parseInt(res?.id, 10);

				if (newId > 0) {
					addNotification({ type: 'success', title: 'Coupon added', content: 'Set a code and discount, then publish it.' });
					router.push(`/dashboard/coupons/${newId}`);
					return;
				}

				addNotification({ type: 'success', title: 'Coupon added', content: 'A draft "Sample Coupon" is at the top of the list. Edit it to set a code and discount, then publish it.' });

				var next = { ...queryPrams, keyword: "", order: "DESC", paged: 1 };
				if (JSON.stringify(next) === JSON.stringify(queryPrams)) fetchPosts();
				else setqueryPrams(next);
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Coupon not added', content: error?.message ?? '' });
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

	function copyCode(code) {
		navigator.clipboard?.writeText(code)
			.then(() => addNotification({ type: 'success', title: 'Code copied', content: `"${code}" copied.` }))
			.catch(() => addNotification({ type: 'error', title: 'Could not copy', content: 'Copy the code by hand instead.' }));
	}


	/* ---------------- cells ---------------- */

	function callbackTitle(entry, columnIndex) {
		return (
			<td data-label="Coupon" className="!px-5 py-3 text-left" key={`title-${entry?.id}`}>
				<div className="flex items-start gap-3">
					<div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#634FE5]/10 text-[#634FE5] sm:flex">
						<IconTicket size={18} />
					</div>
					<div className="flex min-w-0 flex-col gap-1">
						<Link className={`${LINK} text-sm`} href={`/dashboard/coupons/${entry?.id}`}>
							<span dangerouslySetInnerHTML={{ __html: entry?.title || "(no title)" }} />
						</Link>
						<div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
							<span className="tabular-nums text-gray-400">#{entry?.id}</span>

							<PopoverButton buttonLabel={"Edit"} buttonIcon={<IconPencil size={13} />} title={`Edit coupon #${entry?.id}`} drawer={"right"} buttonClass={`inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-900 cursor-pointer`}>
								<div className="p-5 bg-gray-50 text-left">
									<CouponEdit id={entry?.id} />
								</div>
							</PopoverButton>

							<Link className="inline-flex items-center gap-1 transition-colors hover:text-gray-900" href={`/dashboard/coupons/${entry?.id}`}>
								<IconExternalLink size={13} /> {("Open")}
							</Link>

							<button type="button" className="inline-flex items-center gap-1 text-red-500 transition-colors hover:text-red-700" onClick={() => delete_coupons([entry?.id])}>
								<IconTrash size={13} /> {("Delete")}
							</button>
						</div>
					</div>
				</div>
			</td>
		);
	}

	function callbackCouponCode(entry, columnIndex) {
		return (
			<td data-label="Code" className="!px-5 py-3 text-left" key={`code-${entry?.id}`}>
				{entry?.couponCode ? (
					<button type="button" title={("Copy code")} onClick={() => copyCode(entry.couponCode)}
						className="group inline-flex items-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:border-[#634FE5]/50 hover:bg-[#634FE5]/5 hover:text-[#634FE5]">
						{entry.couponCode}
						<IconCopy size={13} className="text-gray-400 group-hover:text-[#634FE5]" />
					</button>
				) : <span className="text-xs text-amber-600">{("No code yet")}</span>}
			</td>
		);
	}

	/* couponType is "percent" or "fixed"; the amount alone did not say which. */
	function callbackAmount(entry, columnIndex) {
		var amount = entry?.amount;
		var hasAmount = amount !== undefined && amount !== null && amount !== "";

		return (
			<td data-label="Discount" className="!px-5 py-3 text-left text-sm" key={`amount-${entry?.id}`}>
				{hasAmount ? (
					<div className="flex flex-col">
						<span className="whitespace-nowrap font-semibold tabular-nums text-gray-900">
							{entry?.couponType === 'percent' ? `${amount}%` : wrapCurrency(amount)}
						</span>
						<span className="text-xs text-gray-500">{entry?.couponType === 'percent' ? ("Percentage") : entry?.couponType === 'fixed' ? ("Fixed amount") : ("Type not set")}</span>
					</div>
				) : <span className="text-gray-300">—</span>}
			</td>
		);
	}

	function callbackLimit(entry, columnIndex) {
		var limit = parseInt(entry?.limit, 10);

		return (
			<td data-label="Usage limit" className="!px-5 py-3 text-left text-sm" key={`limit-${entry?.id}`}>
				{limit > 0
					? <span className="tabular-nums text-gray-800">{limit} {limit === 1 ? ("use") : ("uses")}</span>
					: <span className="text-gray-500">{("Unlimited")}</span>}
			</td>
		);
	}

	/* Start and end in one cell, with whether the coupon is running today. Both
	   columns used to be headed "Expiry Date". */
	function callbackValidity(entry, columnIndex) {
		var start = parseDate(entry?.startDate);
		var end = parseDate(entry?.endDate);
		var now = new Date();

		var state = end && end < now ? "expired" : start && start > now ? "scheduled" : (start || end) ? "active" : null;
		var badge = state ? VALIDITY[state] : null;

		return (
			<td data-label="Valid" className="!px-5 py-3 text-left text-sm" key={`validity-${entry?.id}`}>
				{start || end ? (
					<div className="flex flex-col items-start gap-1">
						<span className="whitespace-nowrap text-gray-800">
							{start ? shortDate(start) : ("Any time")} – {end ? shortDate(end) : ("no end")}
						</span>
						{badge && <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>}
					</div>
				) : <span className="text-gray-500">{("No dates")}</span>}
			</td>
		);
	}

	function callbackStatus(entry, columnIndex) {
		return (
			<td data-label="Status" className="!px-5 py-3 text-left" key={`status-${entry?.id}`}>
				<StatusBadge status={entry?.post_status} />
			</td>
		);
	}


	var total = productsData?.total ?? 0;
	var searching = Boolean(queryPrams?.keyword);

	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Coupons")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{total} {total === 1 ? ("coupon") : ("coupons")} · {("Discount codes customers enter at checkout.")}
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
						<IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
					</button>
					<button type="button" className={PRIMARY_BUTTON} disabled={loading} onClick={add_coupon}>
						<IconPlus size={16} /> {("Add Coupon")}
					</button>
				</div>
			</div>

			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap items-center gap-2">
					<select aria-label="Sort" className={FILTER_SELECT} value={queryPrams?.order ?? "DESC"} onChange={ev => setqueryPrams({ ...queryPrams, order: ev.target.value, paged: 1 })}>
						<option value="DESC">{("Newest first")}</option>
						<option value="ASC">{("Oldest first")}</option>
					</select>
				</div>

				{selectedRows.length > 0 && (
					<div className="flex items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
						<span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
						<button type="button" className="!h-8 rounded-md px-2 text-sm text-gray-500 hover:bg-white hover:text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>
						{/* Labelled "Delete Products" before. */}
						<button type="button" className={`${DANGER_BUTTON} !h-8`} disabled={loading} onClick={() => delete_coupons()}>
							<IconTrash size={15} /> {("Delete")}
						</button>
					</div>
				)}
			</div>

			{!loading && !searching && total === 0 && (productsData?.posts ?? []).length === 0 ? (
				<div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconTicket size={24} /></div>
					<div className="text-sm font-semibold text-gray-800">{("No coupons yet")}</div>
					<p className="max-w-sm text-xs text-gray-500">{("Create a coupon to give customers a percentage or fixed discount with a code at checkout.")}</p>
					<button type="button" className={`${PRIMARY_BUTTON} mt-2`} disabled={loading} onClick={add_coupon}>
						<IconPlus size={16} /> {("Add Coupon")}
					</button>
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

export default Coupons;
