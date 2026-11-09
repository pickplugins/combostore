"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import PopoverButton from '../../components/PopoverButton';
import SellerEdit from '../../components/pages/SellerEdit';
import Image from "next/image";

import { IconEyeShare, IconDotsVertical, IconTrash, IconUserPlus, IconMail, IconPhone, IconStarFilled } from "@tabler/icons-react";


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

const EMPTY_NEW_SELLER = { role: "seller", name: "", email: "", mobile: "", registerBy: "mobile" };

/* Accounts registered by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;


/* get_users has sent the id as both `ID` and `id`; this page used `ID` and Users/Customers use `id`. */
function sellerId(entry) {
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
	return name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => Array.from(part)[0])
		.join("")
		.toUpperCase();
}


const Sellers = () => {

	const { token, addNotification } = useCounterStore()

	var [sellersData, setsellersData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ role: "seller", keyword: "", paged: 1, order: "DESC", per_page: 20, });
	var [newSeller, setnewSeller] = useState(EMPTY_NEW_SELLER);

	var [loading, setloading] = useState(false);
	var [adding, setadding] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);

	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Seller"), callback: callbackSeller, classes: "w-96 text-left text-gray-600" },
		contact: { id: "contact", label: ("Contact"), callback: callbackContact, classes: "text-left text-gray-600" },
		total_order: { id: "total_order", label: ("Orders"), callback: callbackOrders, classes: "text-center text-gray-600" },
		actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
	};


	async function fetchPosts() {

		if (queryPrams.paged < 0) {
			return;
		}

		/* This endpoint reads `search` and `number`; EntriesTable sets `keyword` and `per_page`.
		   The search box did nothing before because `keyword` was never sent. */
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
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				response.json().then((res) => {
					/* With no matches the API sends only `noPosts`. */
					setsellersData({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 })
					setloading(false);
				});
			})
			.catch((_error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Sellers not loaded', content: "The list could not be loaded. Please try again." })
			});
	}


	async function delete_sellers(ids) {

		ids = ids != undefined ? ids : selectedRows;

		if (!ids?.length) {
			return;
		}

		setloading(true);

		/* Sent without a token before, unlike every other page calling delete_users. */
		fetch(serverUrl + "wp-json/combo-store/v2/delete_users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
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
						title: deleted > 0 ? `Sellers deleted` : 'Nothing deleted',
						content: `${deleted} deleted.${skipped ? ` ${skipped} skipped: administrators, your own account, and (for store managers) staff accounts can't be deleted here.` : ""}`,
					});
					fetchPosts();
				});
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Delete failed', content: error?.message?.startsWith("You are not allowed") ? error.message : "The sellers could not be deleted. Please try again." })
			});
	}


	async function add_seller() {

		setadding(true);

		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				/* The server only lets staff choose a role other than customer. */
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(newSeller),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				response.json().then((res) => {

					/* register_user answers with a JSON-encoded string. */
					var resObj = typeof res === "string" ? JSON.parse(res) : res;

					if (resObj?.error) {
						addNotification({ type: 'error', title: 'Seller not added', content: `Sorry, the seller could not be added. ${JSON.stringify(resObj?.messages ?? "")}` })
					} else {
						addNotification({ type: 'success', title: 'Seller added', content: "Seller added successfully." })
						setnewSeller(EMPTY_NEW_SELLER);
						fetchPosts();
					}

					setadding(false);
				});
			})
			.catch((_error) => {
				setadding(false);
				addNotification({ type: 'error', title: 'Seller not added', content: "The request failed. Please try again." })
			});
	}


	/*
		Debounced like Products and Customers. The old page fetched from an effect
		on every query change and again from onChange with the previous query, so
		each page turn sent two requests and the stale one could land last.
	*/
	const [debouncedQuery, setDebouncedQuery] = useState(queryPrams);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(queryPrams);
		}, 500);

		return () => clearTimeout(handler);
	}, [queryPrams]);

	useEffect(() => {

		/* After a reload the token arrives from an effect above this page. */
		if (!token) {
			return;
		}

		fetchPosts();

	}, [debouncedQuery, token]);


	function onChangeQueryPrams(nextPrams) {

		if (!nextPrams) {
			return;
		}

		/* A new search starts from the first page, or a short result looks empty. */
		var searchChanged = nextPrams.keyword !== queryPrams.keyword;

		setqueryPrams(searchChanged ? { ...nextPrams, paged: 1 } : nextPrams)
	}

	function onRefreshRequest(rows) {
		fetchPosts();
	}


	function callbackSeller(entry, columnIndex) {

		var id = sellerId(entry);
		var name = entry?.display_name || entry?.user_login || ("Unknown seller");
		var hasSeparateLogin = entry?.user_login && entry.user_login !== name;

		return (
			<td data-label="Seller" className="!px-5 py-3 text-left"
				key={`seller-${id}`}>

				<div className="flex min-w-0 flex-1 items-center gap-3">

					<Link href={`/dashboard/sellers/${id}`} className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-500">
						{entry?.thumbnail?.src ? (
							<Image unoptimized className="h-10 w-10 object-cover" src={entry.thumbnail.src} width={80} height={80} alt={``} />
						) : (
							<span>{initialsOf(name) || "?"}</span>
						)}
					</Link>

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
						<div className="flex min-w-0 items-center gap-1.5">
							{entry?.featured && (
								<span className="shrink-0 text-amber-500" title="Featured"><IconStarFilled size={14} /></span>
							)}
							<Link className="truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/sellers/${id}`}>
								{name}
							</Link>
						</div>

						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{id}</span>
							{hasSeparateLogin && (
								<span className="font-mono text-[11px]">{entry.user_login}</span>
							)}

							<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit Seller"} drawer={"right"} buttonClass={`inline-flex items-center rounded-md px-1.5 py-0.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>

								<div className="p-5 bg-gray-50 text-left">
									<SellerEdit id={id} variant="drawer" />
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
			<td data-label="Contact" className="!px-5 py-3 text-left"
				key={columnIndex}>

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


	function callbackOrders(entry, columnIndex) {

		var raw = entry?.total_order ?? entry?.total_orders;

		return (
			<td data-label="Orders" className="!px-5 py-3 text-center"
				key={columnIndex}>
				<div className="flex justify-center">
					{raw === undefined || raw === null || raw === "" ? EMPTY : (
						<span className={`inline-flex min-w-8 items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums ${Number(raw) > 0
							? "bg-emerald-50 text-emerald-700"
							: "bg-gray-100 text-gray-500"
							}`}>
							{Number(raw)}
						</span>
					)}
				</div>
			</td>
		);
	}


	function callbackActions(entry, columnIndex) {

		var id = sellerId(entry);

		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm"
				key={columnIndex}>
				<div className="flex items-center justify-end gap-1 text-sm">

					<PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

						<div className="p-1.5">
							<div className="flex flex-col gap-0.5">
								<Link className={MENU_ITEM} href={`/dashboard/sellers/${id}`}>
									<IconEyeShare size={16} /> View
								</Link>
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									if (confirm("Please confirm?")) {
										delete_sellers([id]);
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


	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Sellers")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{sellersData?.total ?? 0} {("sellers")}
					</p>
				</div>

				<PopoverButton
					enableCloseBtn={false}
					buttonLabel={("Add Seller")}
					buttonIcon={<IconUserPlus size={16} />}
					title={"Add Seller"}
					position={"bottomRight"}
					buttonClass={`inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer`}
					popoverClass={`absolute z-[999] mt-2 w-[360px] sm:w-[440px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

					<div className="p-4">
						<div className="mb-3 text-sm font-semibold text-gray-900">New seller</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<label htmlFor="new-seller-name" className={FORM_LABEL}>Name</label>
								<input
									id="new-seller-name"
									type="text"
									placeholder="John Doe"
									className={FORM_INPUT}
									value={newSeller.name}
									onChange={(ev) => setnewSeller({ ...newSeller, name: ev.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="new-seller-email" className={FORM_LABEL}>Email</label>
								<input
									id="new-seller-email"
									type="email"
									placeholder="john@example.com"
									className={FORM_INPUT}
									value={newSeller.email}
									onChange={(ev) => setnewSeller({ ...newSeller, email: ev.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="new-seller-mobile" className={FORM_LABEL}>Mobile</label>
								<input
									id="new-seller-mobile"
									type="tel"
									className={FORM_INPUT}
									value={newSeller.mobile}
									onChange={(ev) => setnewSeller({ ...newSeller, mobile: ev.target.value })}
								/>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="new-seller-register-by" className={FORM_LABEL}>Register by</label>
								<select id="new-seller-register-by" className={FORM_INPUT} value={newSeller.registerBy}
									onChange={(ev) => setnewSeller({ ...newSeller, registerBy: ev.target.value })}>
									<option value={`mobile`}>Mobile</option>
									<option value={`email`}>Email</option>
								</select>
							</div>

							<button
								type="button"
								disabled={adding}
								onClick={() => add_seller()}
								className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] px-4 py-2 text-sm font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-60 cursor-pointer">
								{adding ? "Please wait…" : ("Create seller")}
							</button>
						</div>
					</div>

				</PopoverButton>
			</div>

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
								if (confirm(`Delete ${selectedRows.length} seller(s)?`)) {
									delete_sellers();
								}
							}}>
							<IconTrash size={16} />
							{("Delete Sellers")} ({selectedRows.length})
						</div>
					)}
				</div>
			</div>

			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={sellersData}
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

export default Sellers;
