"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import { useCounterStore } from '../../store/useCounterStore'
import PopoverButton from '../../components/PopoverButton';
import Spinner from '../../components/Spinner';
import AttributeEdit from '../../components/pages/AttributeEdit';

import Image from "next/image";

import { IconDotsVertical, IconEdit, IconPlus, IconTrash, IconTag, IconAdjustmentsHorizontal } from "@tabler/icons-react";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same control styles as the Products screen, so the two read as one system. */
const ICON_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
	"xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const PRIMARY_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer";

const TEXT_INPUT =
	"w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !text-sm !text-gray-700 !shadow-none transition-colors focus:!border-[#634FE5] focus:!outline-none focus:!ring-2 focus:!ring-[#634FE5]/20";

const EMPTY_TERM = { name: '', slug: '', taxonomy: '', description: '', parent: '' };

const toSlug = (value) => value.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');


const Attributes = () => {

	const { token, addNotification, settings } = useCounterStore()


	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ taxonomy: "", keyword: "", paged: 1, order: "DESC", per_page: 10, hide_empty: false });
	var [debouncedQuery, setDebouncedQuery] = useState(queryPrams);
	var [newPage, setnewPage] = useState(EMPTY_TERM);

	var [attributes, setattributes] = useState([]);
	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}

	const currentAttribute = attributes.find(item => item.value === queryPrams?.taxonomy);


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Value"), callback: callbackTitle, classes: "w-96 text-left text-gray-600" },
		slug: { id: "slug", label: ("Slug"), callback: callbackSlug, classes: "text-left text-gray-600" },
		count: { id: "count", label: ("Products"), callback: callbackCount, classes: "text-center text-gray-600" },
		actions: { id: "actions", label: (""), callback: callbackActions, classes: "text-right" },
	};


	useEffect(() => {

		const result = settings?.productAttributes?.map(item => ({
			label: item.label,
			value: item.slug
		}));

		setattributes(result ?? []);

	}, [settings?.productAttributes]);


	function delete_terms(ids) {

		ids = ids != undefined ? ids : selectedRows;

		if (!ids?.length) {
			return;
		}

		var postData = JSON.stringify({
			ids: ids,
			taxonomy: queryPrams?.taxonomy
		});
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_terms", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}
				return response.json();
			})
			.then(() => {
				setselectedRows([]);
				addNotification({ type: 'success', title: 'Deleted', content: `${ids.length} value(s) deleted.` })
				fetchPosts();
			})
			.catch(() => {
				setloading(false);
				addNotification({ type: 'error', title: 'Delete failed', content: `Could not delete the selected value(s).` })
			});
	}

	function add_term() {

		if (!queryPrams?.taxonomy) {
			return;
		}

		var postData = JSON.stringify({ ...newPage, taxonomy: queryPrams?.taxonomy });
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/add_term", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}
				return response.json();
			})
			.then(() => {
				addNotification({ type: 'success', title: 'Created', content: `"${newPage.name}" added.` })
				setnewPage(EMPTY_TERM);
				fetchPosts();
			})
			.catch(() => {
				setloading(false);
				addNotification({ type: 'error', title: 'Create failed', content: `Could not add "${newPage.name}".` })
			});
	}


	function fetchPosts() {

		if (queryPrams.taxonomy == undefined || queryPrams.taxonomy == "") {
			return;
		}

		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Token validation failed');
				}
				return response.json();
			})
			.then((res) => {
				setproductsData({ posts: res?.terms ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 })
				setloading(false);
			})
			.catch(() => {
				setloading(false);
			});

	}


	/* Typing in the search box should not fire a request per keystroke. */
	useEffect(() => {
		const handler = setTimeout(() => setDebouncedQuery(queryPrams), 400);
		return () => clearTimeout(handler);
	}, [queryPrams]);

	useEffect(() => {
		fetchPosts();
	}, [debouncedQuery]);


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
		}
	}

	function onRefreshRequest(rows) {
		fetchPosts();
	}

	function confirmDelete(ids, label) {
		if (confirm(`Delete ${label}? This cannot be undone.`)) {
			delete_terms(ids);
		}
	}


	function callbackTitle(entry, columnIndex) {

		return (
			<td data-label="Value" className="!px-5 py-3 text-left"
				key={`title-${entry?.term_id}`}>
				<div className="flex items-center gap-3">

					<div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-300">
						{/* Image from `thumbnail.src` ({id, title, src} as the editors save it);
						    `thumbnail_url` (resolved by get_terms) covers other stored formats. */}
						{(entry?.thumbnail?.src || entry?.thumbnail_url) ? (
							<Image unoptimized className="h-10 w-10 object-cover" src={entry?.thumbnail?.src || entry.thumbnail_url} width={80} height={80} alt={``} />
						) : (
							<IconTag size={18} stroke={1.5} />
						)}
					</div>

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
						<Link className="truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/attributes/${entry?.term_id}`}>
							{entry?.name}
						</Link>

						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{entry?.term_id}</span>

							<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit Attribute"} drawer={"right"} buttonClass={`cursor-pointer text-gray-500 transition-colors hover:text-gray-900`}>
								<div className="p-5 bg-gray-50 text-left">
									<AttributeEdit id={entry?.term_id} />
								</div>
							</PopoverButton>
						</div>
					</div>
				</div>
			</td>
		);
	}

	function callbackSlug(entry, columnIndex) {
		return (
			<td data-label="Slug" className="!px-5 py-3 text-left"
				key={`slug-${entry?.term_id}`}>
				<span className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-600">{entry?.slug}</span>
			</td>
		);
	}

	function callbackCount(entry, columnIndex) {
		return (
			<td data-label="Products" className="!px-5 py-3 text-center text-sm"
				key={`count-${entry?.term_id}`}>
				<span className={entry?.count > 0 ? "font-medium text-gray-900" : "text-gray-400"}>{entry?.count ?? 0}</span>
			</td>
		);
	}

	function callbackActions(entry, columnIndex) {
		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm"
				key={`actions-${entry?.term_id}`}>
				<div className="flex items-center justify-end gap-1">
					<PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>
						<div className="p-1.5">
							<div className="flex flex-col gap-0.5">
								<Link className={MENU_ITEM} href={`/dashboard/attributes/${entry?.term_id}`}>
									<IconEdit size={16} /> Open
								</Link>
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									confirmDelete([entry?.term_id], `"${entry?.name}"`);
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


	const createForm = (
		<form className="flex w-72 flex-col gap-3 p-4" onSubmit={ev => {
			ev.preventDefault();
			if (!newPage.name.trim()) {
				addNotification({ type: 'error', title: 'Name is empty', content: `Please add a name.` })
				return;
			}
			add_term();
		}}>
			<label className="flex flex-col gap-1">
				<span className="text-xs font-medium text-gray-600">{("Name")}</span>
				<input className={TEXT_INPUT} type="text" placeholder="e.g. Large" autoFocus value={newPage?.name} onChange={ev => {
					var value = ev.target.value;
					setnewPage({ ...newPage, name: value, slug: toSlug(value) })
				}} />
			</label>
			<label className="flex flex-col gap-1">
				<span className="text-xs font-medium text-gray-600">{("Slug")}</span>
				<input className={`${TEXT_INPUT} font-mono`} type="text" placeholder="e.g. large" value={newPage?.slug} onChange={ev => {
					setnewPage({ ...newPage, slug: ev.target.value })
				}} />
			</label>

			<div className="flex items-center gap-3">
				<button type="submit" className={PRIMARY_BUTTON} disabled={loading}>
					<IconPlus size={16} /> {("Add Value")}
				</button>
				{loading && <Spinner />}
			</div>
		</form>
	);


	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Attributes")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{currentAttribute
							? `${productsData?.total ?? 0} ${("values in")} ${currentAttribute.label}`
							: ("Choose an attribute to manage its values")}
					</p>
				</div>

				{currentAttribute && (
					<PopoverButton wrapperClass={`flex justify-end`} buttonLabel={("Add Value")} buttonIcon={<IconPlus size={16} />} title={`Add ${currentAttribute.label} value`} position={"bottomRight"} popoverClass={`absolute z-[999] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={PRIMARY_BUTTON}>
						{createForm}
					</PopoverButton>
				)}
			</div>

			<div className="flex flex-wrap justify-between gap-3">

				<div className="flex flex-wrap gap-2">
					<select className={FILTER_SELECT} value={queryPrams?.taxonomy ?? ""} onChange={ev => {
						setselectedRows([]);
						setproductsData({ posts: [], total: 0, maxPages: 1 });
						setqueryPrams({ ...queryPrams, taxonomy: ev.target.value, keyword: "", paged: 1 });
					}}>
						<option value={""}>{("Choose Attribute")}</option>
						{attributes.map(item => (
							<option value={item.value} key={item.value}>{item.label}</option>
						))}
					</select>
				</div>

				<div className="flex gap-3 items-center justify-end">
					{selectedRows?.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
							onClick={() => {
								confirmDelete(selectedRows, `${selectedRows.length} selected value(s)`);
							}}>
							<IconTrash size={16} /> {("Delete")} ({selectedRows.length})
						</div>
					)}
				</div>
			</div>


			{!currentAttribute ? (
				<div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
						<IconAdjustmentsHorizontal size={22} />
					</div>
					{attributes.length > 0 ? (
						<>
							<div className="text-sm font-medium text-gray-900">{("No attribute selected")}</div>
							<p className="max-w-sm text-xs text-gray-500">{("Pick an attribute such as Size or Color above to see, add and edit its values.")}</p>
						</>
					) : (
						<>
							<div className="text-sm font-medium text-gray-900">{("No attributes yet")}</div>
							<p className="max-w-sm text-xs text-gray-500">{("Create product attributes in Settings → Product Attributes first, then manage their values here.")}</p>
							<Link href="/settings"className="text-sm font-medium text-[#634FE5] hover:underline">{("Go to Settings")}</Link>
						</>
					)}
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

export default Attributes;
