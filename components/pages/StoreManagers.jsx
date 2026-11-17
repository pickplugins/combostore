"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import { useCounterStore } from '../../store/useCounterStore'
import PopoverButton from '../../components/PopoverButton';
import Image from "next/image";
import StoreManagerEdit, { AVAILABILITY } from './StoreManagerEdit';
import { useUtilsStore } from '../../store/useUtilsStore';
import { postApi } from "./affiliateUi";
import { parseDate, timeAgo } from "./deliveryUi";

import { IconEyeShare, IconDotsVertical, IconTrash, IconUserPlus, IconMail, IconPhone, IconInbox, IconArrowRight, IconMapPin, IconPackage } from "@tabler/icons-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const ICON_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
	"xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FORM_INPUT =
	"!shadow-none !border !border-gray-300 !bg-white transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm text-gray-800";

const FORM_LABEL = "mb-1 block text-xs font-medium text-gray-600";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

const EMPTY_NEW_MANAGER = { role: "store_manager", name: "", email: "", mobile: "", registerBy: "email" };

/* Saved after the account is made, through update_store_manager_details. */
const EMPTY_NEW_DETAILS = { area: "", shift: "" };

/* Accounts registered by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;


/* get_users has sent the id as both `ID` and `id`. */
function managerId(entry) {
	return entry?.id ?? entry?.ID;
}

function contactDetails(entry) {
	var email = entry?.user_email ?? "";
	var isPhoneEmail = PHONE_EMAIL.test(email);
	return {
		email: isPhoneEmail ? "" : email,
		phone: entry?.mobile || entry?.billing_phone || (isPhoneEmail ? email.replace(PHONE_EMAIL, "") : ""),
	};
}

function initialsOf(name) {
	return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => Array.from(part)[0]).join("").toUpperCase();
}


/*
	The Store managers list: availability, area and shift, the open orders
	assigned to each (a store manager sees only those), what they completed
	lately and the products they added (ComboStoreStoreManagers'
	get_store_managers_summary), and how many open orders nobody has.

	This used to be the Riders list with the role set to store_manager.
*/
const StoreManagers = () => {

	const { token, addNotification } = useCounterStore()
	const { wrapCurrency } = useUtilsStore()

	var [managersData, setmanagersData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ role: "store_manager", keyword: "", paged: 1, order: "DESC", per_page: 20, });
	var [newManager, setnewManager] = useState(EMPTY_NEW_MANAGER);
	var [newDetails, setnewDetails] = useState(EMPTY_NEW_DETAILS);

	var [loading, setloading] = useState(false);
	var [adding, setadding] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);

	/* Workload and details by user id, and the count of open orders nobody has. */
	var [managerStats, setmanagerStats] = useState({});
	var [unassigned, setunassigned] = useState(null);

	function fetchManagerStats(posts) {
		var ids = posts.map(managerId).filter(Boolean);
		postApi("get_store_managers_summary", token, { ids })
			.then((res) => {
				if (res?.managers) setmanagerStats((prev) => ({ ...prev, ...res.managers }));
				if (typeof res?.unassigned === "number") setunassigned(res.unassigned);
			})
			.catch(() => { });
	}

	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Store manager"), callback: callbackManager, classes: "w-80 text-left text-gray-600" },
		contact: { id: "contact", label: ("Contact"), callback: callbackContact, classes: "text-left text-gray-600" },
		area: { id: "area", label: ("Area & added"), callback: callbackArea, classes: "text-left text-gray-600 w-56" },
		workload: { id: "workload", label: ("Open orders"), callback: callbackWorkload, classes: "text-left text-gray-600 w-48" },
		done: { id: "done", label: ("Completed (30 days)"), callback: callbackDone, classes: "text-left text-gray-600 w-40" },
		actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
	};


	async function fetchPosts() {

		if (queryPrams.paged < 0) {
			return;
		}

		/* get_users reads `search` and `number`; EntriesTable sets `keyword` and `per_page`. */
		var postData = JSON.stringify({
			role: queryPrams.role,
			search: queryPrams.keyword,
			number: queryPrams.per_page,
			paged: queryPrams.paged,
			order: queryPrams.order,
		});

		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_users", {
			method: "POST",
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Token validation failed');
				}
				response.json().then((res) => {
					/* With no matches the API sends only `noPosts`. */
					setmanagersData({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 })
					setloading(false);
					fetchManagerStats(res?.posts ?? []);
				});
			})
			.catch((_error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Store managers not loaded', content: "The list could not be loaded. Please try again." })
			});
	}


	async function delete_managers(ids) {

		ids = ids != undefined ? ids : selectedRows;

		if (!ids?.length) {
			return;
		}

		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/delete_users", {
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
			body: JSON.stringify({ ids: ids }),
		})
			.then((response) => {
				if (response.status === 403) {
					throw new Error("You are not allowed to delete these accounts.");
				}
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}

				response.json().then((res) => {
					setselectedRows([]);
					var deleted = parseInt(res?.deleted, 10);
					var skipped = parseInt(res?.skipped, 10) || 0;
					if (Number.isNaN(deleted)) deleted = ids.length;
					addNotification({
						type: deleted > 0 ? 'success' : 'error',
						title: deleted > 0 ? `Store managers deleted` : 'Nothing deleted',
						content: `${deleted} deleted.${skipped ? ` ${skipped} skipped: administrators, your own account, and (for store managers) staff accounts can't be deleted here.` : ""}`,
					});
					fetchPosts();
				});
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Delete failed', content: error?.message?.startsWith("You are not allowed") ? error.message : "The store managers could not be deleted. Please try again." })
			});
	}


	async function add_manager() {

		setadding(true);

		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				/* The server only lets staff choose a role other than customer. */
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(newManager),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				response.json().then((res) => {

					/* register_user answers with a JSON-encoded string. */
					var resObj = typeof res === "string" ? JSON.parse(res) : res;

					if (resObj?.error) {
						addNotification({ type: 'error', title: 'Store manager not added', content: `Sorry, the store manager could not be added. ${JSON.stringify(resObj?.messages ?? "")}` })
						setadding(false);
						return;
					}

					var newId = parseInt(resObj?.user_id, 10);
					var hasDetails = Object.values(newDetails).some((v) => String(v).trim() !== "");
					var saveDetails = newId > 0 && hasDetails
						? postApi("update_store_manager_details", token, { id: newId, ...newDetails }).then((r) => r?.status === "success").catch(() => false)
						: Promise.resolve(true);

					saveDetails.then((saved) => {
						addNotification(saved
							? { type: 'success', title: 'Store manager added', content: "Set their password on their page so they can sign in." }
							: { type: 'error', title: 'Store manager added', content: "The manager was added, but their area and shift were not saved. Add them on the manager's page." })
						setnewManager(EMPTY_NEW_MANAGER);
						setnewDetails(EMPTY_NEW_DETAILS);
						setadding(false);
						fetchPosts();
					});
				});
			})
			.catch((_error) => {
				setadding(false);
				addNotification({ type: 'error', title: 'Store manager not added', content: "The request failed. Please try again." })
			});
	}


	/* Typing waits half a second; the token arrives from an effect above this page after a reload. */
	const [debouncedQuery, setDebouncedQuery] = useState(queryPrams);

	useEffect(() => {
		const handler = setTimeout(() => setDebouncedQuery(queryPrams), 500);
		return () => clearTimeout(handler);
	}, [queryPrams]);

	useEffect(() => {
		if (!token) return;
		fetchPosts();
	}, [debouncedQuery, token]);


	function onChangeQueryPrams(nextPrams) {
		if (!nextPrams) return;
		/* A new search starts from the first page, or a short result looks empty. */
		var searchChanged = nextPrams.keyword !== queryPrams.keyword;
		setqueryPrams(searchChanged ? { ...nextPrams, paged: 1 } : nextPrams)
	}

	function onRefreshRequest(rows) {
		fetchPosts();
	}


	function callbackManager(entry, columnIndex) {

		var id = managerId(entry);
		var s = managerStats[id];
		var a = s ? (AVAILABILITY[s.availability] ?? AVAILABILITY.on_duty) : null;
		var name = entry?.display_name || entry?.user_login || ("Unknown manager");

		return (
			<td data-label="Store manager" className="!px-5 py-3 text-left" key={`manager-${id}`}>
				<div className="flex min-w-0 flex-1 items-center gap-3">
					<Link href={`/dashboard/store-managers/${id}`} className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-500">
						<span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full">
							{entry?.thumbnail?.src ? (
								<Image unoptimized className="h-10 w-10 object-cover" src={entry.thumbnail.src} width={80} height={80} alt={``} />
							) : (
								<span>{initialsOf(name) || "?"}</span>
							)}
						</span>
						{a && <span title={a.label} className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${a.dot}`} />}
					</Link>

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
						<Link className="truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/store-managers/${id}`}>
							{name}
						</Link>
						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{id}</span>
							{a && <span>{a.label}</span>}
							{s?.shift && <span className="truncate text-gray-400">{s.shift}</span>}
							<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Store manager"} drawer={"right"} buttonClass={`inline-flex items-center rounded-md px-1.5 py-0.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>
								<div className="p-5 bg-gray-50 text-left">
									<StoreManagerEdit id={id} variant="drawer" />
								</div>
							</PopoverButton>
						</div>
					</div>
				</div>
			</td>
		);
	}


	function callbackContact(entry, columnIndex) {

		var { email, phone } = contactDetails(entry);

		return (
			<td data-label="Contact" className="!px-5 py-3 text-left" key={columnIndex}>
				{!email && !phone && EMPTY}
				{(email || phone) && (
					<div className="flex min-w-0 flex-col gap-1 text-sm text-gray-600">
						{email && (
							<a href={`mailto:${email}`} title={email} className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-gray-900">
								<IconMail size={14} className="shrink-0 text-gray-400" />
								<span className="truncate">{email}</span>
							</a>
						)}
						{phone && (
							<a href={`tel:${phone}`} className="inline-flex items-center gap-1.5 tabular-nums transition-colors hover:text-gray-900">
								<IconPhone size={14} className="shrink-0 text-gray-400" />
								{phone}
							</a>
						)}
					</div>
				)}
			</td>
		);
	}


	function callbackArea(entry, columnIndex) {

		var s = managerStats[managerId(entry)];

		return (
			<td data-label="Area & added" className="!px-5 py-3 text-left" key={columnIndex}>
				{!s ? EMPTY : (
					<div className="flex min-w-0 flex-col gap-0.5 text-sm text-gray-700">
						{s.area ? (
							<span className="inline-flex min-w-0 items-center gap-1.5"><IconMapPin size={14} className="shrink-0 text-gray-400" /> <span className="truncate" title={s.area}>{s.area}</span></span>
						) : (
							<span className="text-xs text-gray-300">{("No area set")}</span>
						)}
						<span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><IconPackage size={13} className="shrink-0 text-gray-400" /> {s.products} {s.products === 1 ? ("product added") : ("products added")}</span>
					</div>
				)}
			</td>
		);
	}


	function callbackWorkload(entry, columnIndex) {

		var s = managerStats[managerId(entry)];
		var open = s ? s.open : 0;
		var capacity = parseInt(s?.max_open, 10) || 0;
		var pct = capacity ? Math.min(100, Math.round(open / capacity * 100)) : 0;

		return (
			<td data-label="Open orders" className="!px-5 py-3 text-left" key={columnIndex}>
				{!s ? EMPTY : open === 0 ? (
					<span className="text-xs text-gray-400">{("Nothing assigned")}</span>
				) : (
					<div className="flex flex-col gap-1">
						<span className="text-sm font-medium tabular-nums text-gray-900">{open} {("open")}</span>
						{capacity > 0 && (
							<div className="flex items-center gap-1.5">
								<div className="h-1 w-20 overflow-hidden rounded-full bg-gray-100">
									<div className={`h-full rounded-full ${open >= capacity ? "bg-rose-500" : pct >= 75 ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${pct}%` }} />
								</div>
								<span className="text-[11px] tabular-nums text-gray-400">{open}/{capacity}</span>
							</div>
						)}
					</div>
				)}
			</td>
		);
	}


	function callbackDone(entry, columnIndex) {

		var s = managerStats[managerId(entry)];
		var last = parseDate(s?.last_activity);

		return (
			<td data-label="Completed (30 days)" className="!px-5 py-3 text-left" key={columnIndex}>
				{!s ? EMPTY : (
					<div className="flex flex-col gap-0.5">
						<span className={`text-sm tabular-nums ${s.done_30 ? "font-medium text-emerald-700" : "text-gray-400"}`}>
							{s.done_30}{s.revenue_30 > 0 ? <span className="font-normal text-gray-500"> · {wrapCurrency(s.revenue_30)}</span> : null}
						</span>
						<span className="text-[11px] text-gray-400">{last ? `${("active")} ${timeAgo(last)}` : ("no activity yet")}</span>
					</div>
				)}
			</td>
		);
	}


	function callbackActions(entry, columnIndex) {

		var id = managerId(entry);

		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm" key={columnIndex}>
				<div className="flex items-center justify-end gap-1 text-sm">
					<PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>
						<div className="p-1.5">
							<div className="flex flex-col gap-0.5">
								<Link className={MENU_ITEM} href={`/dashboard/store-managers/${id}`}>
									<IconEyeShare size={16} /> View
								</Link>
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									if (confirm("Delete this store manager's account? They come off every order assigned to them.")) {
										delete_managers([id]);
									}
								}}>
									<IconTrash size={16} /> Delete
								</div>
							</div>
						</div>
					</PopoverButton>
				</div>
			</td>
		);
	}


	var stats = Object.values(managerStats);
	var onlineCount = managersData.posts.filter((p) => (managerStats[managerId(p)]?.availability ?? "on_duty") === "on_duty").length;

	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Store managers")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{managersData?.total ?? 0} {("store managers")}{stats.length ? ` · ${onlineCount} ${("on duty")}` : ""} · {("Staff who manage products, orders and coupons.")}
					</p>
				</div>

				<PopoverButton
					enableCloseBtn={false}
					buttonLabel={("Add Store Manager")}
					buttonIcon={<IconUserPlus size={16} />}
					title={"Add Store Manager"}
					position={"bottomRight"}
					buttonClass={`inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer`}
					popoverClass={`absolute z-[999] mt-2 w-[360px] sm:w-[440px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

					<div className="p-4">
						<div className="mb-3 text-sm font-semibold text-gray-900">New store manager</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<label htmlFor="new-manager-name" className={FORM_LABEL}>Name</label>
								<input id="new-manager-name" type="text" placeholder="John Doe" className={FORM_INPUT}
									value={newManager.name} onChange={(ev) => setnewManager({ ...newManager, name: ev.target.value })} />
							</div>
							<div>
								<label htmlFor="new-manager-email" className={FORM_LABEL}>Email</label>
								<input id="new-manager-email" type="email" placeholder="john@example.com" className={FORM_INPUT}
									value={newManager.email} onChange={(ev) => setnewManager({ ...newManager, email: ev.target.value })} />
							</div>
							<div>
								<label htmlFor="new-manager-mobile" className={FORM_LABEL}>Mobile</label>
								<input id="new-manager-mobile" type="tel" className={FORM_INPUT}
									value={newManager.mobile} onChange={(ev) => setnewManager({ ...newManager, mobile: ev.target.value })} />
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="new-manager-register-by" className={FORM_LABEL}>Register by</label>
								<select id="new-manager-register-by" className={FORM_INPUT} value={newManager.registerBy}
									onChange={(ev) => setnewManager({ ...newManager, registerBy: ev.target.value })}>
									<option value={`email`}>Email</option>
									<option value={`mobile`}>Mobile</option>
								</select>
							</div>
							<div>
								<label htmlFor="new-manager-area" className={FORM_LABEL}>Area</label>
								<input id="new-manager-area" type="text" placeholder="Online orders" className={FORM_INPUT}
									value={newDetails.area} onChange={(ev) => setnewDetails({ ...newDetails, area: ev.target.value })} />
							</div>
							<div>
								<label htmlFor="new-manager-shift" className={FORM_LABEL}>Shift</label>
								<input id="new-manager-shift" type="text" placeholder="9am–5pm" className={FORM_INPUT}
									value={newDetails.shift} onChange={(ev) => setnewDetails({ ...newDetails, shift: ev.target.value })} />
							</div>

							<button type="button" disabled={adding} onClick={() => add_manager()}
								className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] px-4 py-2 text-sm font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-60 cursor-pointer">
								{adding ? "Please wait…" : ("Create store manager")}
							</button>
							<p className="sm:col-span-2 text-[11px] text-gray-400">{("They'll need a password to sign in; set one on their page.")}</p>
						</div>
					</div>

				</PopoverButton>
			</div>

			{unassigned > 0 && (
				<div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
					<span className="inline-flex items-center gap-2"><IconInbox size={16} /> {unassigned} {unassigned === 1 ? ("open order isn't") : ("open orders aren't")} {("assigned to any store manager. Open a manager to assign them.")}</span>
					<Link href="/dashboard/orders" className="inline-flex items-center gap-1 text-xs font-medium text-amber-900 hover:underline">{("View orders")} <IconArrowRight size={14} /></Link>
				</div>
			)}

			<div className="flex flex-wrap justify-between gap-3">
				<div className="flex flex-wrap gap-2">
					<select className={FILTER_SELECT} value={queryPrams.order} onChange={ev => {
						setqueryPrams({ ...queryPrams, order: ev.target.value, paged: 1 });
					}}>
						<option value="DESC">{("Newest first")}</option>
						<option value="ASC">{("Oldest first")}</option>
					</select>
				</div>

				<div className="flex gap-3 items-center justify-end">
					{selectedRows?.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
							onClick={() => {
								if (confirm(`Delete ${selectedRows.length} store manager(s)?`)) {
									delete_managers();
								}
							}}>
							<IconTrash size={16} />
							{("Delete Store Managers")} ({selectedRows.length})
						</div>
					)}
				</div>
			</div>

			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={managersData}
				itemPath={""}
				onChange={onChangeQueryPrams}
				loading={loading}
				selectedRows={selectedRows}
				onSelectRows={onSelectRows}
				onRefreshRequest={onRefreshRequest}
			/>
		</div>
	);
};

export default StoreManagers;
