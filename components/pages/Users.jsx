"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import PopoverButton from '../../components/PopoverButton';
import UserEdit from '../../components/pages/UserEdit';
import Image from "next/image";

import { IconUsersPlus, IconTrash, IconDotsVertical, IconEyeShare, IconMail, IconPhone } from "@tabler/icons-react";


const ICON_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
	"xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FORM_INPUT =
	"!shadow-none !border !border-gray-300 !bg-white transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm text-gray-800";

const FORM_LABEL = "mb-1 block text-xs font-medium text-gray-600";

const ROLE_OPTIONS = [
	{ value: "customer", label: "Customer" },
	{ value: "rider", label: "Rider" },
	{ value: "seller", label: "Seller" },
	{ value: "supplier", label: "Supplier" },
	{ value: "administrator", label: "Administrator" },
];

/* One colour per role so a mixed page can be scanned by role at a glance. */
const ROLE_BADGE = {
	administrator: "bg-violet-50 text-violet-700",
	customer: "bg-gray-100 text-gray-700",
	rider: "bg-sky-50 text-sky-700",
	seller: "bg-emerald-50 text-emerald-700",
	supplier: "bg-amber-50 text-amber-700",
};


const Users = () => {

	const { token, addNotification } = useCounterStore()

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ role: "", keyword: "", paged: 1, order: "DESC", number: 10, });
	var [newUserPrams, setnewUserPrams] = useState({ role: "customer", name: "", email: "", mobile: "", registerBy: "mobile", });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("User"), callback: callbackTitle, classes: "w-96 text-gray-600" },
		user_login: { id: "user_login", label: ("Login"), callback: callbackUserLogin, classes: "text-left text-gray-600" },
		contact: { id: "user_email", label: ("Contact"), callback: callbackContact, classes: "text-left text-gray-600" },
		roles: { id: "roles", label: ("Roles"), callback: callbackRoles, classes: "text-left text-gray-600" },
		actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
	};



	async function fetchPosts() {

		if (queryPrams.paged < 0) {
			return;
		}

		var postData = {
			number: queryPrams.number,
			paged: queryPrams.paged,
			search: queryPrams.keyword,
			order: queryPrams.order,
			role: queryPrams.role,
		};
		postData = JSON.stringify(postData);

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

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						var posts = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;

						setproductsData({ posts: posts, total: total, maxPages: max_pages })
						setloading(false);
					});
				}
			})
			.catch((_error) => {
				setloading(false);
			});

	}

	async function delete_users(ids) {

		if (queryPrams.paged < 0) {
			return;
		}

		ids = ids != undefined ? ids : selectedRows;

		var postData = {
			ids: ids,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (response.status === 403) {
					throw new Error("You are not allowed to delete these accounts.");
				}
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}

				response.json().then((res) => {
					setloading(false);
					setselectedRows([]);
					var deleted = parseInt(res?.deleted, 10);
					var skipped = parseInt(res?.skipped, 10) || 0;
					if (Number.isNaN(deleted)) deleted = ids.length;
					addNotification({
						type: deleted > 0 ? 'success' : 'error',
						title: deleted > 0 ? `Users deleted` : 'Nothing deleted',
						content: `${deleted} deleted.${skipped ? ` ${skipped} skipped: administrators, your own account, and (for store managers) staff accounts can't be deleted here.` : ""}`,
					});
					fetchPosts();
				});
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Delete failed', content: error?.message ?? '' });
			});
	}

	async function add_user() {

		var postData = JSON.stringify(newUserPrams);

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				/* The server only lets staff choose a role other than customer. */
				Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						var resObj = typeof res === "string" ? JSON.parse(res) : res

						var error = resObj?.error;
						var messages = resObj?.messages;

						if (error) {
							addNotification({ type: 'error', title: 'User added failed', content: `Sorry, user added failed.${JSON.stringify(messages)}` })
						}

						if (!error) {
							addNotification({ type: 'success', title: 'User added', content: "User added successfully." })
							setnewUserPrams({ role: "customer", name: "", email: "", mobile: "", registerBy: "mobile", });
						}

						setloading(false);
						fetchPosts();
					});
				}
			})
			.catch((_error) => {
				setloading(false);
			});
	}


	/*
		Query changes go through a debounced copy, as on Products. Calling
		fetchPosts() straight from onChange read the previous query, so paging
		and searching always loaded one step behind.
	*/
	const [debouncedQuery, setDebouncedQuery] = useState(queryPrams);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(queryPrams);
		}, 500);

		return () => clearTimeout(handler);
	}, [queryPrams]);

	useEffect(() => {
		if (!token) {
			return;
		}
		fetchPosts();
	}, [debouncedQuery, token]);


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
		}
	}

	function onRefreshRequest(rows) {
		fetchPosts();
	}


	function callbackActions(entry, columnIndex) {

		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm"
				key={columnIndex}>
				<div className="flex items-center justify-end gap-1 text-sm">

					<PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

						<div className="p-1.5">
							<div className="flex flex-col gap-0.5">
								<Link className={MENU_ITEM} href={`/dashboard/users/${entry?.id}`}>
									<IconEyeShare size={16} /> View
								</Link>
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									if (confirm("Please confirm?")) {
										delete_users([entry?.id]);
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


	function callbackTitle(entry, columnIndex) {

		var name = entry?.display_name || entry?.user_login || "";
		var initials = name
			.split(/\s+/)
			.filter(Boolean)
			.slice(0, 2)
			.map((part) => part[0])
			.join("")
			.toUpperCase();

		return (
			<td data-label="User" className="!px-5 py-3 text-left"
				key={`title-${entry?.id}`}>

				<div className="flex items-center gap-3">

					<Link href={`/dashboard/users/${entry?.id}`} className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-500">
						{entry?.thumbnail?.src ? (
							<Image unoptimized className="h-10 w-10 object-cover" src={entry?.thumbnail?.src} width={80} height={80} alt={``} />
						) : (
							<span>{initials || "?"}</span>
						)}
					</Link>

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
						<Link className="truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/users/${entry?.id}`}>
							{name || "—"}
						</Link>

						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>

							<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit User"} drawer={"right"} buttonClass={`inline-flex items-center rounded-md px-1.5 py-0.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>

								<div className="p-5 bg-gray-50 text-left">
									<UserEdit id={entry?.id} variant="drawer" />
								</div>

							</PopoverButton>
						</div>
					</div>
				</div>
			</td>
		);
	}


	function callbackRoles(entry, columnIndex) {

		var roles = entry?.roles ?? [];

		return (
			<td data-label="Roles" className="!px-5 py-3 text-left"
				key={`roles-${entry?.id}`}
			>
				<div className="flex flex-wrap gap-1.5">
					{roles.length > 0 ? roles.map((role) => (
						<span key={role} className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium capitalize ${ROLE_BADGE[role] ?? "bg-gray-100 text-gray-700"}`}>
							{role.replace(/_/g, " ")}
						</span>
					)) : (
						<span className="text-sm text-gray-400">—</span>
					)}
				</div>
			</td>
		);
	}

	function callbackUserLogin(entry, columnIndex) {

		return (
			<td data-label="Login" className="!px-5 py-3 text-left"
				key={columnIndex}>
				<span className="font-mono text-xs text-gray-600">{entry?.user_login || "—"}</span>
			</td>
		);
	}

	/* Email and mobile in one cell: most rows have only one of the two. */
	function callbackContact(entry, columnIndex) {

		return (
			<td data-label="Contact" className="!px-5 py-3 text-left"
				key={columnIndex}>
				<div className="flex flex-col gap-1 text-sm text-gray-600">
					{entry?.user_email && (
						<a href={`mailto:${entry.user_email}`} className="inline-flex min-w-0 items-center gap-1.5 truncate transition-colors hover:text-gray-900">
							<IconMail size={14} className="shrink-0 text-gray-400" />
							<span className="truncate">{entry.user_email}</span>
						</a>
					)}
					{entry?.mobile && (
						<a href={`tel:${entry.mobile}`} className="inline-flex items-center gap-1.5 tabular-nums transition-colors hover:text-gray-900">
							<IconPhone size={14} className="shrink-0 text-gray-400" />
							{entry.mobile}
						</a>
					)}
					{!entry?.user_email && !entry?.mobile && (
						<span className="text-gray-400">—</span>
					)}
				</div>
			</td>
		);
	}


	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Users")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("registered users")}
					</p>
				</div>

				<PopoverButton
					enableCloseBtn={false}
					buttonLabel={("Add User")}
					buttonIcon={<IconUsersPlus size={16} />}
					title={"Add User"}
					position={"bottomRight"}
					buttonClass={`inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer`}
					popoverClass={`absolute z-[999] mt-2 w-[360px] sm:w-[440px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

					<div className="p-4">
						<div className="mb-3 text-sm font-semibold text-gray-900">New user</div>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<label htmlFor="new-user-name" className={FORM_LABEL}>Name</label>
								<input
									id="new-user-name"
									type="text"
									placeholder="John Doe"
									className={FORM_INPUT}
									value={newUserPrams?.name}
									onChange={(ev) => setnewUserPrams({ ...newUserPrams, name: ev.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="new-user-email" className={FORM_LABEL}>Email</label>
								<input
									id="new-user-email"
									type="email"
									placeholder="john@example.com"
									className={FORM_INPUT}
									value={newUserPrams?.email}
									onChange={(ev) => setnewUserPrams({ ...newUserPrams, email: ev.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="new-user-mobile" className={FORM_LABEL}>Mobile</label>
								<input
									id="new-user-mobile"
									type="tel"
									placeholder=""
									className={FORM_INPUT}
									value={newUserPrams?.mobile}
									onChange={(ev) => setnewUserPrams({ ...newUserPrams, mobile: ev.target.value })}
								/>
							</div>
							<div>
								<label htmlFor="new-user-role" className={FORM_LABEL}>Role</label>
								<select id="new-user-role" className={FORM_INPUT} value={newUserPrams?.role}
									onChange={(ev) => setnewUserPrams({ ...newUserPrams, role: ev.target.value })}>
									{ROLE_OPTIONS.filter((r) => r.value !== "administrator").map((r) => (
										<option key={r.value} value={r.value}>{r.label}</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="new-user-register-by" className={FORM_LABEL}>Register by</label>
								<select id="new-user-register-by" className={FORM_INPUT} value={newUserPrams?.registerBy}
									onChange={(ev) => setnewUserPrams({ ...newUserPrams, registerBy: ev.target.value })}>
									<option value={`email`}>Email</option>
									<option value={`mobile`}>Mobile</option>
								</select>
							</div>

							<button
								type="button"
								disabled={loading}
								onClick={() => add_user()}
								className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] px-4 py-2 text-sm font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-60 cursor-pointer">
								{loading ? "Please wait…" : ("Create user")}
							</button>
						</div>
					</div>

				</PopoverButton>
			</div>

			<div className="flex flex-wrap justify-between gap-3">

				<div className="flex flex-wrap gap-2">
					<select className={FILTER_SELECT} value={queryPrams?.role ?? ""} onChange={ev => {
						setqueryPrams({ ...queryPrams, role: ev.target.value, paged: 1 });
					}}>
						<option value={""}>{("All Roles")}</option>
						{ROLE_OPTIONS.map((r) => (
							<option key={r.value} value={r.value}>{r.label}</option>
						))}
					</select>
				</div>

				<div className="flex gap-3 items-center justify-end">
					{selectedRows?.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
							onClick={() => {
								if (confirm(`Delete ${selectedRows.length} user(s)?`)) {
									delete_users();
								}
							}}>
							<IconTrash size={16} />
							{("Delete Users")} ({selectedRows.length})
						</div>
					)}
				</div>
			</div>

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
		</div>
	);
};

export default Users;
