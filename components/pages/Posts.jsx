"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import { useCounterStore } from '../../store/useCounterStore'
import { loadPostsQuery, savePostsQuery } from "../../lib/postsQuery";
import PopoverButton from '../../components/PopoverButton';
import PostEdit from '../../components/pages/PostEdit';
import { StatusBadge } from "./deliveryUi";

import { IconTrash, IconRefresh, IconPencil, IconStarFilled, IconStar, IconArticle, IconExternalLink, IconPlus, IconPhoto } from "@tabler/icons-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same toolbar, badge and link styles as the Deliveries and Orders screens. */
const TOOLBAR_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";
const PRIMARY_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer disabled:opacity-50";
const DANGER_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50";
const FILTER_SELECT =
	"w-full sm:w-auto !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-8 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";
const LINK = "font-medium text-gray-800 hover:text-[#634FE5] hover:underline";
/* get_posts lists other statuses only for administrators who ask for them. */
const STATUS_FILTERS = [["any", "All statuses"], ["publish", "Published"], ["draft", "Drafts"], ["pending", "Pending review"], ["future", "Scheduled"], ["private", "Private"]];
const TERM_CHIP = "inline-flex items-center whitespace-nowrap rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600";


/* A list of terms as chips, capped so a post with fifteen tags does not
   stretch its row. */
function Terms({ items, href }) {
	var list = Array.isArray(items) ? items : [];
	if (!list.length) return <span className="text-gray-300">—</span>;

	var shown = list.slice(0, 3);
	var rest = list.length - shown.length;

	return (
		<div className="flex max-w-[220px] flex-wrap gap-1">
			{shown.map((item, index) => (
				<Link key={item?.term_id ?? index} href={href} className={`${TERM_CHIP} hover:bg-[#634FE5]/10 hover:text-[#634FE5]`}>{item?.name}</Link>
			))}
			{rest > 0 && <span className={TERM_CHIP} title={list.slice(3).map(item => item?.name).join(", ")}>+{rest}</span>}
		</div>
	);
}


const Posts = () => {

	const { token, addNotification } = useCounterStore()

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 10, post_status: "any", });

	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	function onSelectRows(rows) {
		setselectedRows(rows);
	}

	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Post"), callback: callbackTitle, classes: "text-left" },
		author: { id: "author", label: ("Author"), callback: callbackAuthor, classes: "text-left" },
		categories: { id: "categories", label: ("Categories"), callback: callbackCategories, classes: "text-left" },
		tags: { id: "tags", label: ("Tags"), callback: callbackTags, classes: "text-left" },
		status: { id: "status", label: ("Status"), callback: callbackStatus, classes: "text-left" },
	};


	function fetchPosts() {

		if (queryPrams.paged < 0) {
			return;
		}

		setloading(true);

		/* get_posts reads `posts_per_page`; `per_page` alone was ignored, so the
		   list always came back 20 at a time whatever the picker said. */
		fetch(serverUrl + "wp-json/combo-store/v2/get_posts", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({ ...queryPrams, post_status: queryPrams.post_status || "any", posts_per_page: parseInt(queryPrams.per_page, 10) || 10 }),
		})
			.then((response) => {
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
				addNotification({ type: 'error', title: 'Could not load posts', content: error?.message ?? '' });
			});
	}


	/*
		Posts are removed through delete_products, which is wp_delete_post and
		so works for any post type - posts go to the trash. It needs the token,
		which this screen never sent, so every delete was refused with a 401
		and nothing said so.
	*/
	function delete_posts(ids) {

		ids = ids != undefined ? ids : selectedRows;
		if (!ids?.length) return;

		if (!confirm(ids.length === 1 ? `Move post #${ids[0]} to the trash?` : `Move ${ids.length} posts to the trash?`)) {
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
					throw new Error("Only administrators and store managers can delete posts.");
				}
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then(() => {
				addNotification({ type: 'success', title: 'Moved to trash', content: ids.length === 1 ? `Post #${ids[0]} moved to the trash.` : `${ids.length} posts moved to the trash.` });
				setselectedRows([]);
				fetchPosts();
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Not deleted', content: error?.message ?? '' });
			});
	}


	/*
		The saved query comes back in an effect, not in the useState above, because
		the server has no sessionStorage and the first render has to match its HTML.

		Nothing is fetched until then. Responses are not checked for being current,
		so a fetch of the defaults could land after the restored one and replace it.
		The merge is built on `previous` because EntriesTable reports its own copy of
		the defaults as it mounts, just before this runs.
	*/
	const [queryRestored, setqueryRestored] = useState(false);

	useEffect(() => {
		const saved = loadPostsQuery();

		if (saved) {
			setqueryPrams((previous) => ({ ...previous, ...saved }));
		}

		setqueryRestored(true);
	}, []);

	useEffect(() => {

		/* After a reload the token arrives from an effect above this page. */
		if (!queryRestored || !token) {
			return;
		}

		savePostsQuery(queryPrams);
		fetchPosts();

	}, [queryRestored, queryPrams, token]);


	function onChangeQueryPrams(next) {
		if (next) {
			setqueryPrams(next)
		}
	}

	function onRefreshRequest() {
		fetchPosts();
	}


	/* ---------------- cells ---------------- */

	function callbackTitle(entry, columnIndex) {

		return (
			<td data-label="Post" className="!px-5 py-3 text-left" key={`title-${entry?.id}`}>

				<div className="flex items-start gap-3">

					<div className="hidden h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-300 sm:flex">
						{entry?.post_thumbnail_url
							? <img className="h-full w-full object-cover" src={entry.post_thumbnail_url} alt="" width={48} height={48} loading="lazy" />
							: <IconPhoto size={20} />}
					</div>

					<div className="flex min-w-0 flex-col gap-1">
						<div className="flex items-center gap-1.5">
							{entry?.featured
								? <IconStarFilled size={14} className="shrink-0 text-amber-500" aria-label="Featured" />
								: <IconStar size={14} className="shrink-0 text-gray-300" aria-hidden="true" />}
							{/* WordPress titles carry entities (&#8217; and friends), so they are rendered as HTML, as the Order items list does. */}
							<Link className={`${LINK} line-clamp-2 text-sm`} href={`/dashboard/posts/${entry?.id}`}>
								<span dangerouslySetInnerHTML={{ __html: entry?.title || "(no title)" }} />
							</Link>
						</div>

						<div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
							<span className="tabular-nums text-gray-400">#{entry?.id}</span>

							<PopoverButton buttonLabel={"Edit"} buttonIcon={<IconPencil size={13} />} title={`Edit post #${entry?.id}`} drawer={"right"} buttonClass={`inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-900 cursor-pointer`}>
								<div className="p-5 bg-gray-50 text-left">
									<PostEdit id={entry?.id} />
								</div>
							</PopoverButton>

							<Link className="inline-flex items-center gap-1 transition-colors hover:text-gray-900" href={`/dashboard/posts/${entry?.id}`}>
								<IconExternalLink size={13} /> {("Open")}
							</Link>

							<button type="button" className="inline-flex items-center gap-1 text-red-500 transition-colors hover:text-red-700" onClick={() => delete_posts([entry?.id])}>
								<IconTrash size={13} /> {("Delete")}
							</button>
						</div>
					</div>
				</div>
			</td>
		);
	}

	function callbackAuthor(entry, columnIndex) {
		var author = entry?.author;

		return (
			<td data-label="Author" className="!px-5 py-3 text-left text-sm" key={`author-${entry?.id}`}>
				{author?.name ? (
					<div className="flex items-center gap-2">
						{author?.avatar && <img className="h-6 w-6 shrink-0 rounded-full" src={author.avatar} alt="" width={24} height={24} loading="lazy" />}
						<span className="whitespace-nowrap text-gray-700">{author.name}</span>
					</div>
				) : <span className="text-gray-300">—</span>}
			</td>
		);
	}

	function callbackCategories(entry, columnIndex) {
		return (
			<td data-label="Categories" className="!px-5 py-3 text-left" key={`category-${entry?.id}`}>
				<Terms items={entry?.categories} href="/dashboard/post-categories" />
			</td>
		);
	}

	function callbackTags(entry, columnIndex) {
		return (
			<td data-label="Tags" className="!px-5 py-3 text-left" key={`tags-${entry?.id}`}>
				<Terms items={entry?.tags} href="/dashboard/posts-tags" />
			</td>
		);
	}

	function callbackStatus(entry, columnIndex) {
		return (
			<td data-label="Status" className="!px-5 py-3 text-left" key={`status-${entry?.id}`}>
				<StatusBadge status={entry?.status} />
			</td>
		);
	}


	var total = productsData?.total ?? 0;
	var searching = Boolean(queryPrams?.keyword);

	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Posts")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{total} {total === 1 ? ("post") : ("posts")}{queryPrams?.post_status && queryPrams.post_status !== "any" ? ` · ${STATUS_FILTERS.find(item => item[0] === queryPrams.post_status)?.[1] ?? ""}` : ""}
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<Link href="/dashboard/post-categories" className={TOOLBAR_BUTTON}>{("Categories")}</Link>
					<Link href="/dashboard/posts-tags" className={TOOLBAR_BUTTON}>{("Tags")}</Link>
					<button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
						<IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
					</button>
					{/* The API has no way to create a post (this used to call add_product
					    and make a draft product), so new posts are written in WordPress. */}
					<a href={`${serverUrl}wp-admin/post-new.php`} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON}>
						<IconPlus size={16} /> {("Add Post")}
					</a>
				</div>
			</div>

			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap items-center gap-2">
					<select aria-label="Sort" className={FILTER_SELECT} value={queryPrams?.order ?? "DESC"} onChange={ev => setqueryPrams({ ...queryPrams, order: ev.target.value, paged: 1 })}>
						<option value="DESC">{("Newest first")}</option>
						<option value="ASC">{("Oldest first")}</option>
					</select>
					<select aria-label="Status" className={FILTER_SELECT} value={queryPrams?.post_status || "any"} onChange={ev => setqueryPrams({ ...queryPrams, post_status: ev.target.value, paged: 1 })}>
						{STATUS_FILTERS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
					</select>
				</div>

				{selectedRows.length > 0 && (
					<div className="flex items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
						<span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
						<button type="button" className="!h-8 rounded-md px-2 text-sm text-gray-500 hover:bg-white hover:text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>
						{/* Labelled "Delete Products" before. */}
						<button type="button" className={`${DANGER_BUTTON} !h-8`} disabled={loading} onClick={() => delete_posts()}>
							<IconTrash size={15} /> {("Delete")}
						</button>
					</div>
				)}
			</div>

			{!loading && !searching && (queryPrams?.post_status || "any") === "any" && total === 0 && (productsData?.posts ?? []).length === 0 ? (
				<div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconArticle size={24} /></div>
					<div className="text-sm font-semibold text-gray-800">{("No posts yet")}</div>
					<p className="max-w-sm text-xs text-gray-500">{("Write a post in WordPress; drafts and published posts both show up here to edit.")}</p>
					<a href={`${serverUrl}wp-admin/post-new.php`} target="_blank" rel="noopener noreferrer" className={`${PRIMARY_BUTTON} mt-2`}>
						<IconPlus size={16} /> {("Add Post")}
					</a>
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

export default Posts;
