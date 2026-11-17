"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import PopoverButton from '../../components/PopoverButton';
import SupplierEdit from '../../components/pages/SupplierEdit';
import Image from "next/image";
import { postApi } from "./affiliateUi";
import { SupplierStateBadge, PAYMENT_TERMS } from "./SupplierEdit";
import { parseDate, timeAgo } from "./deliveryUi";
import { useUtilsStore } from "../../store/useUtilsStore";

import { IconEyeShare, IconDotsVertical, IconTrash, IconUserPlus, IconMail, IconPhone, IconStarFilled, IconPackage, IconWallet, IconShoppingCartPlus } from "@tabler/icons-react";


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

const EMPTY_NEW_SUPPLIER = { role: "supplier", name: "", email: "", mobile: "", registerBy: "mobile" };

/* Saved after the account is made, through update_supplier_details. */
const EMPTY_NEW_DETAILS = { company: "", supplies: "", payment_terms: "" };

/* Accounts registered by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;


/* get_users has sent the id as both `ID` and `id`; this page used `ID` and Users/Customers use `id`. */
function supplierId(entry) {
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


const Suppliers = () => {

	const { token, addNotification } = useCounterStore()
	const { wrapCurrency } = useUtilsStore()

	var [suppliersData, setsuppliersData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ role: "supplier", keyword: "", paged: 1, order: "DESC", per_page: 20, });
	var [newSupplier, setnewSupplier] = useState(EMPTY_NEW_SUPPLIER);
	var [newDetails, setnewDetails] = useState(EMPTY_NEW_DETAILS);

	var [loading, setloading] = useState(false);
	var [adding, setadding] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);

	/* Company, terms, purchases and what is owed, by user id (get_suppliers_summary). */
	var [supplierStats, setsupplierStats] = useState({});

	function fetchSupplierStats(posts) {
		var ids = posts.map(supplierId).filter(Boolean);
		if (!ids.length) return;
		postApi("get_suppliers_summary", token, { ids })
			.then((res) => { if (res?.suppliers) setsupplierStats((prev) => ({ ...prev, ...res.suppliers })); })
			.catch(() => { });
	}

	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Supplier"), callback: callbackSupplier, classes: "w-96 text-left text-gray-600" },
		contact: { id: "contact", label: ("Contact"), callback: callbackContact, classes: "text-left text-gray-600" },
		supplies: { id: "supplies", label: ("Supplies & terms"), callback: callbackSupplies, classes: "text-left text-gray-600 w-56" },
		total_order: { id: "total_order", label: ("Purchases"), callback: callbackPurchases, classes: "text-left text-gray-600 w-48" },
		due: { id: "due", label: ("To pay"), callback: callbackDue, classes: "text-right text-gray-600 w-32" },
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
					setsuppliersData({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 })
					setloading(false);
					fetchSupplierStats(res?.posts ?? []);
				});
			})
			.catch((_error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Suppliers not loaded', content: "The list could not be loaded. Please try again." })
			});
	}


	async function delete_suppliers(ids) {

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
						title: deleted > 0 ? `Suppliers deleted` : 'Nothing deleted',
						content: `${deleted} deleted.${skipped ? ` ${skipped} skipped: administrators, your own account, and (for store managers) staff accounts can't be deleted here.` : ""}`,
					});
					fetchPosts();
				});
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Delete failed', content: error?.message?.startsWith("You are not allowed") ? error.message : "The suppliers could not be deleted. Please try again." })
			});
	}


	async function add_supplier() {

		setadding(true);

		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				/* The server only lets staff choose a role other than customer. */
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(newSupplier),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				response.json().then((res) => {

					/* register_user answers with a JSON-encoded string. */
					var resObj = typeof res === "string" ? JSON.parse(res) : res;

					if (resObj?.error) {
						addNotification({ type: 'error', title: 'Supplier not added', content: `Sorry, the supplier could not be added. ${JSON.stringify(resObj?.messages ?? "")}` })
					} else {
						var newId = parseInt(resObj?.user_id, 10);
						var hasDetails = Object.values(newDetails).some((v) => String(v).trim() !== "");
						var saveDetails = newId > 0 && hasDetails
							? postApi("update_supplier_details", token, { id: newId, ...newDetails }).then((r) => r?.status === "success").catch(() => false)
							: Promise.resolve(true);

						saveDetails.then((saved) => {
							addNotification(saved
								? { type: 'success', title: 'Supplier added', content: "Supplier added successfully." }
								: { type: 'error', title: 'Supplier added', content: "The supplier was added, but their company and terms were not saved. Add them on the supplier's page." })
							setnewSupplier(EMPTY_NEW_SUPPLIER);
							setnewDetails(EMPTY_NEW_DETAILS);
							setadding(false);
							fetchPosts();
						});
						return;
					}

					setadding(false);
				});
			})
			.catch((_error) => {
				setadding(false);
				addNotification({ type: 'error', title: 'Supplier not added', content: "The request failed. Please try again." })
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


	function callbackSupplier(entry, columnIndex) {

		var id = supplierId(entry);
		var s = supplierStats[id];
		var person = entry?.display_name || entry?.user_login || ("Unknown supplier");
		var name = s?.company || person;

		return (
			<td data-label="Supplier" className="!px-5 py-3 text-left"
				key={`supplier-${id}`}>

				<div className="flex min-w-0 flex-1 items-center gap-3">

					<Link href={`/dashboard/suppliers/${id}`} className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-500">
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
							<Link className="truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/suppliers/${id}`}>
								{name}
							</Link>
							{s?.state === "inactive" && <SupplierStateBadge value="inactive" />}
						</div>

						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{id}</span>
							{s?.company && (
								<span className="truncate">{s.contact_person || person}</span>
							)}

							<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit Supplier"} drawer={"right"} buttonClass={`inline-flex items-center rounded-md px-1.5 py-0.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>

								<div className="p-5 bg-gray-50 text-left">
									<SupplierEdit id={id} variant="drawer" />
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


	function callbackSupplies(entry, columnIndex) {

		var s = supplierStats[supplierId(entry)];
		var terms = s?.payment_terms ? (PAYMENT_TERMS[s.payment_terms]?.label ?? s.payment_terms) : "";

		return (
			<td data-label="Supplies & terms" className="!px-5 py-3 text-left"
				key={columnIndex}>
				{!s?.supplies && !terms ? EMPTY : (
					<div className="flex min-w-0 flex-col gap-0.5 text-sm text-gray-700">
						{s.supplies && (
							<span className="inline-flex min-w-0 items-center gap-1.5"><IconPackage size={14} className="shrink-0 text-gray-400" /> <span className="truncate" title={s.supplies}>{s.supplies}</span></span>
						)}
						{terms && (
							<span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><IconWallet size={13} className="shrink-0 text-gray-400" /> {terms}</span>
						)}
					</div>
				)}
			</td>
		);
	}


	/*
		From get_suppliers_summary. This was an "Inventory" column reading
		total_order, which is a customer's order count and never a supplier's.
	*/
	function callbackPurchases(entry, columnIndex) {

		var s = supplierStats[supplierId(entry)];
		var last = parseDate(s?.last_purchase);

		return (
			<td data-label="Purchases" className="!px-5 py-3 text-left"
				key={columnIndex}>
				{!s ? EMPTY : s.purchases === 0 ? (
					<span className="text-xs text-gray-400">{("None yet")}</span>
				) : (
					<div className="flex flex-col gap-1">
						<div className="flex flex-wrap items-center gap-1.5">
							<span className="text-sm font-medium tabular-nums text-gray-900">{wrapCurrency(s.spent)}</span>
							{s.open > 0 && (
								<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-amber-700 ring-1 ring-inset ring-amber-200">{s.open} {("open")}</span>
							)}
						</div>
						<span className="text-[11px] tabular-nums text-gray-400">
							{s.purchases} {s.purchases === 1 ? ("purchase") : ("purchases")}{last ? ` · ${("last")} ${timeAgo(last)}` : ""}
						</span>
					</div>
				)}
			</td>
		);
	}


	function callbackDue(entry, columnIndex) {

		var s = supplierStats[supplierId(entry)];

		return (
			<td data-label="To pay" className="!px-5 py-3 text-right"
				key={columnIndex}>
				{!s ? EMPTY : s.due > 0 ? (
					<span className="text-sm font-semibold tabular-nums text-rose-700">{wrapCurrency(s.due)}</span>
				) : (
					<span className="text-xs text-gray-400">{s.purchases ? ("Settled") : "—"}</span>
				)}
			</td>
		);
	}


	function callbackActions(entry, columnIndex) {

		var id = supplierId(entry);

		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm"
				key={columnIndex}>
				<div className="flex items-center justify-end gap-1 text-sm">

					<PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

						<div className="p-1.5">
							<div className="flex flex-col gap-0.5">
								<Link className={MENU_ITEM} href={`/dashboard/suppliers/${id}`}>
									<IconEyeShare size={16} /> View
								</Link>
								<Link className={MENU_ITEM} href={`/dashboard/purchases?supplier_id=${id}&supplier_name=${encodeURIComponent(supplierStats[id]?.company || entry?.display_name || "")}`}>
									<IconShoppingCartPlus size={16} /> Their purchases
								</Link>
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									if (confirm("Please confirm?")) {
										delete_suppliers([id]);
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
					<h1 className="text-xl font-semibold text-gray-900">{("Suppliers")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{suppliersData?.total ?? 0} {("suppliers")}
					</p>
				</div>

				<PopoverButton
					enableCloseBtn={false}
					buttonLabel={("Add Supplier")}
					buttonIcon={<IconUserPlus size={16} />}
					title={"Add Supplier"}
					position={"bottomRight"}
					buttonClass={`inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer`}
					popoverClass={`absolute z-[999] mt-2 w-[360px] sm:w-[440px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

					<div className="p-4">
						<div className="mb-3 text-sm font-semibold text-gray-900">New supplier</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<label htmlFor="new-supplier-name" className={FORM_LABEL}>Name</label>
								<input
									id="new-supplier-name"
									type="text"
									placeholder="John Doe"
									className={FORM_INPUT}
									value={newSupplier.name}
									onChange={(ev) => setnewSupplier({ ...newSupplier, name: ev.target.value })}
								/>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="new-supplier-company" className={FORM_LABEL}>Company <span className="font-normal text-gray-400">(optional)</span></label>
								<input
									id="new-supplier-company"
									type="text"
									placeholder="Business name"
									className={FORM_INPUT}
									value={newDetails.company}
									onChange={(ev) => setnewDetails({ ...newDetails, company: ev.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="new-supplier-email" className={FORM_LABEL}>Email</label>
								<input
									id="new-supplier-email"
									type="email"
									placeholder="john@example.com"
									className={FORM_INPUT}
									value={newSupplier.email}
									onChange={(ev) => setnewSupplier({ ...newSupplier, email: ev.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="new-supplier-mobile" className={FORM_LABEL}>Mobile</label>
								<input
									id="new-supplier-mobile"
									type="tel"
									className={FORM_INPUT}
									value={newSupplier.mobile}
									onChange={(ev) => setnewSupplier({ ...newSupplier, mobile: ev.target.value })}
								/>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="new-supplier-register-by" className={FORM_LABEL}>Register by</label>
								<select id="new-supplier-register-by" className={FORM_INPUT} value={newSupplier.registerBy}
									onChange={(ev) => setnewSupplier({ ...newSupplier, registerBy: ev.target.value })}>
									<option value={`mobile`}>Mobile</option>
									<option value={`email`}>Email</option>
								</select>
							</div>
							<div>
								<label htmlFor="new-supplier-supplies" className={FORM_LABEL}>Supplies</label>
								<input
									id="new-supplier-supplies"
									type="text"
									placeholder="e.g. Baby diapers"
									className={FORM_INPUT}
									value={newDetails.supplies}
									onChange={(ev) => setnewDetails({ ...newDetails, supplies: ev.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="new-supplier-terms" className={FORM_LABEL}>Payment terms</label>
								<select id="new-supplier-terms" className={FORM_INPUT} value={newDetails.payment_terms}
									onChange={(ev) => setnewDetails({ ...newDetails, payment_terms: ev.target.value })}>
									<option value="">Not set</option>
									{Object.entries(PAYMENT_TERMS).map(([v, t]) => <option key={v} value={v}>{t.label}</option>)}
								</select>
							</div>

							<button
								type="button"
								disabled={adding}
								onClick={() => add_supplier()}
								className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] px-4 py-2 text-sm font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-60 cursor-pointer">
								{adding ? "Please wait…" : ("Create supplier")}
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
								if (confirm(`Delete ${selectedRows.length} supplier(s)?`)) {
									delete_suppliers();
								}
							}}>
							<IconTrash size={16} />
							{("Delete Suppliers")} ({selectedRows.length})
						</div>
					)}
				</div>
			</div>

			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={suppliersData}
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

export default Suppliers;
