"use client";

/*
	Shared list screen for product taxonomies - Brands, Categories, Tags and
	Badges. They were four near-identical copies, each with the same bugs
	(deletes without a taxonomy, images read from a field the API never sends),
	so they now share this one component and differ only by the props below.

	Styled to match the Products screen.

	Props
	  taxonomy         WordPress taxonomy, e.g. "product_brand"
	  title            page heading, e.g. "Brands"
	  singular         lower-case noun, e.g. "brand"
	  EditComponent    drawer editor, called as <EditComponent id={termId} />
	  dashboardPath    dashboard base for a term, e.g. "/dashboard/brands"
	  storePath        storefront base, e.g. "/brands"; omit if the store has no page
	  Icon             placeholder icon when a term has no image
	  namePlaceholder  example name for the create form
*/

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "./EntriesTable";
import { useCounterStore } from '../store/useCounterStore'
import PopoverButton from './PopoverButton';
import Spinner from './Spinner';

import Image from "next/image";

import { IconDotsVertical, IconEdit, IconEyeShare, IconPlus, IconTrash, IconTag } from "@tabler/icons-react";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ICON_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const PRIMARY_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer";

const TEXT_INPUT =
	"w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !text-sm !text-gray-700 !shadow-none transition-colors focus:!border-[#634FE5] focus:!outline-none focus:!ring-2 focus:!ring-[#634FE5]/20";

const toSlug = (value) => value.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

/*
	Flattens terms into tree order - each parent followed by its children -
	with a `depth` for indenting. A term whose parent is missing (deleted, or
	outside the list) is treated as top-level rather than dropped.
*/
export function termsInTreeOrder(terms) {
	const ids = new Set(terms.map(t => t.term_id));
	const byParent = {};
	for (const term of terms) {
		const parent = ids.has(term.parent) ? term.parent : 0;
		(byParent[parent] = byParent[parent] || []).push(term);
	}
	const out = [];
	const seen = new Set();
	const walk = (parent, depth) => {
		for (const term of (byParent[parent] || []).sort((a, b) => a.name.localeCompare(b.name))) {
			if (seen.has(term.term_id)) continue;
			seen.add(term.term_id);
			out.push({ ...term, depth });
			walk(term.term_id, depth + 1);
		}
	};
	walk(0, 0);
	return out;
}

/* A term plus all of its descendants - none of them can become its parent. */
export function termAndDescendants(terms, termId) {
	const blocked = new Set([termId]);
	let grew = true;
	while (grew) {
		grew = false;
		for (const term of terms) {
			if (blocked.has(term.parent) && !blocked.has(term.term_id)) {
				blocked.add(term.term_id);
				grew = true;
			}
		}
	}
	return blocked;
}


const TermsListPage = ({ taxonomy, title, singular, EditComponent, dashboardPath, storePath, Icon = IconTag, namePlaceholder = "", hierarchical = false }) => {

	const { token, addNotification } = useCounterStore()

	const emptyTerm = { name: '', slug: '', taxonomy, description: '', parent: '' };
	const Singular = capitalize(singular);

	var [newPage, setnewPage] = useState(emptyTerm);

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ taxonomy, keyword: "", paged: 1, order: "DESC", per_page: 10, });
	var [debouncedQuery, setDebouncedQuery] = useState(queryPrams);

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}

	/* Every term, not just the current page: the parent column has to name
	   parents that sit on other pages, and the picker offers all of them. */
	var [allTerms, setallTerms] = useState([]);
	const termsById = Object.fromEntries(allTerms.map(t => [t.term_id, t]));
	const parentOptions = termsInTreeOrder(allTerms);

	function fetchAllTerms() {
		if (!hierarchical) return;
		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ taxonomy, per_page: 999, hide_empty: false }),
		})
			.then((response) => response.ok ? response.json() : null)
			.then((res) => setallTerms(Array.isArray(res?.terms) ? res.terms : []))
			.catch(() => { });
	}

	useEffect(() => { fetchAllTerms(); }, []);


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: Singular, callback: callbackTitle, classes: "w-96 text-left text-gray-600" },
		...(hierarchical && { parent: { id: "parent", label: ("Parent"), callback: callbackParent, classes: "text-left text-gray-600" } }),
		slug: { id: "slug", label: ("Slug"), callback: callbackSlug, classes: "text-left text-gray-600" },
		count: { id: "count", label: ("Products"), callback: callbackCount, classes: "text-center text-gray-600" },
		actions: { id: "actions", label: (""), callback: callbackActions, classes: "text-right" },
	};


	function delete_terms(ids) {

		ids = ids != undefined ? ids : selectedRows;

		if (!ids?.length) {
			return;
		}

		/* `taxonomy` is required: without it the server's wp_delete_term()
		   fails and nothing is deleted. */
		var postData = JSON.stringify({ ids: ids, taxonomy });
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
				addNotification({ type: 'success', title: 'Deleted', content: `${ids.length} ${singular}(s) deleted.` })
				fetchPosts();
				fetchAllTerms();
			})
			.catch(() => {
				setloading(false);
				addNotification({ type: 'error', title: 'Delete failed', content: `Could not delete the selected ${singular}(s).` })
			});
	}

	function add_term() {

		var postData = JSON.stringify({ ...newPage, taxonomy });
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
				setnewPage(emptyTerm);
				fetchPosts();
				fetchAllTerms();
			})
			.catch(() => {
				setloading(false);
				addNotification({ type: 'error', title: 'Create failed', content: `Could not add "${newPage.name}".` })
			});
	}


	function fetchPosts() {

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
			<td data-label={Singular} className="!px-5 py-3 text-left"
				key={`title-${entry?.term_id}`}>
				<div className="flex items-center gap-3">

					<div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-300">
						{/* Image from `thumbnail.src` ({id, title, src} as the editors save it);
						    `thumbnail_url` (resolved by get_terms) covers other stored formats. */}
						{(entry?.thumbnail?.src || entry?.thumbnail_url) ? (
							<Image unoptimized className="h-10 w-10 object-cover" src={entry?.thumbnail?.src || entry.thumbnail_url} width={80} height={80} alt={``} />
						) : (
							<Icon size={18} stroke={1.5} />
						)}
					</div>

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
						<Link className="truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`${dashboardPath}/${entry?.term_id}`}>
							{entry?.name}
						</Link>

						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{entry?.term_id}</span>

							{EditComponent && (
								<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={`Edit ${Singular}`} drawer={"right"} buttonClass={`cursor-pointer text-gray-500 transition-colors hover:text-gray-900`}>
									<div className="p-5 bg-gray-50 text-left">
										<EditComponent id={entry?.term_id} />
									</div>
								</PopoverButton>
							)}
						</div>
					</div>
				</div>
			</td>
		);
	}

	function callbackParent(entry, columnIndex) {
		const parent = termsById[entry?.parent];
		return (
			<td data-label="Parent" className="!px-5 py-3 text-left text-sm"
				key={`parent-${entry?.term_id}`}>
				{parent ? (
					<Link className="text-gray-700 transition-colors hover:text-blue-600 hover:underline" href={`${dashboardPath}/${parent.term_id}`}>
						{parent.name}
					</Link>
				) : entry?.parent > 0 ? (
					<span className="text-gray-400">#{entry.parent}</span>
				) : (
					<span className="text-gray-300">—</span>
				)}
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
								<Link className={MENU_ITEM} href={`${dashboardPath}/${entry?.term_id}`}>
									<IconEdit size={16} /> Open
								</Link>
								{storePath && (
									<Link className={MENU_ITEM} href={`${storePath}/${entry?.slug}`} target="_blank">
										<IconEyeShare size={16} /> View in store
									</Link>
								)}
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


	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{title}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {title.toLowerCase()}
					</p>
				</div>

				<PopoverButton wrapperClass={`flex justify-end`} buttonLabel={`Add ${Singular}`} buttonIcon={<IconPlus size={16} />} title={`Add ${Singular}`} position={"bottomRight"} popoverClass={`absolute z-[999] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={PRIMARY_BUTTON}>
					<form className="flex w-72 flex-col gap-3 p-4" onSubmit={ev => {
						ev.preventDefault();
						if (!newPage.name.trim()) {
							addNotification({ type: 'error', title: 'Name is empty', content: `Please add a ${singular} name.` })
							return;
						}
						add_term();
					}}>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">{("Name")}</span>
							<input className={TEXT_INPUT} type="text" placeholder={namePlaceholder ? `e.g. ${namePlaceholder}` : ""} autoFocus value={newPage?.name} onChange={ev => {
								var value = ev.target.value;
								setnewPage({ ...newPage, name: value, slug: toSlug(value) })
							}} />
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">{("Slug")}</span>
							<input className={`${TEXT_INPUT} font-mono`} type="text" placeholder={namePlaceholder ? `e.g. ${toSlug(namePlaceholder)}` : ""} value={newPage?.slug} onChange={ev => {
								setnewPage({ ...newPage, slug: ev.target.value })
							}} />
						</label>
						{hierarchical && (
							<label className="flex flex-col gap-1">
								<span className="text-xs font-medium text-gray-600">{("Parent")}</span>
								<select className={TEXT_INPUT} value={newPage?.parent || ""} onChange={ev => {
									setnewPage({ ...newPage, parent: ev.target.value })
								}}>
									<option value="">{("None (top level)")}</option>
									{parentOptions.map(term => (
										<option key={term.term_id} value={term.term_id}>
											{`${"   ".repeat(term.depth)}${term.depth ? "└ " : ""}${term.name}`}
										</option>
									))}
								</select>
							</label>
						)}

						<div className="flex items-center gap-3">
							<button type="submit" className={PRIMARY_BUTTON} disabled={loading}>
								<IconPlus size={16} /> {`Add ${Singular}`}
							</button>
							{loading && <Spinner />}
						</div>
					</form>
				</PopoverButton>
			</div>

			{selectedRows?.length > 0 && (
				<div className="flex flex-wrap justify-end gap-3">
					<div
						className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
						onClick={() => {
							confirmDelete(selectedRows, `${selectedRows.length} selected ${singular}(s)`);
						}}>
						<IconTrash size={16} /> {("Delete")} ({selectedRows.length})
					</div>
				</div>
			)}

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

export default TermsListPage;
