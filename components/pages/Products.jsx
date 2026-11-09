"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import EntriesTable from "../../components/EntriesTable";
import DropDown from "../../components/DropDown";
import Spinner from "../../components/Spinner";
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';
import { loadProductsQuery, saveProductsQuery } from "../../lib/productsQuery";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconCopy, IconEyeShare, IconDotsVertical, IconEdit, IconTrash, IconStarFilled, IconStar, IconFilter, IconZoomExclamationFilled, IconPlaylistX, IconPlus, IconPhoto, IconRefresh, IconHistory, IconStack2 } from "@tabler/icons-react";
import PopoverButton from "../../components/PopoverButton";
import ProductEdit from "../../components/pages/ProductEdit";
import ProductBulkUpdate from "../../components/shop-elements/ProductBulkUpdate";

import Image from "next/image";


/* Same toolbar, menu and chip styles as the Stocks and Orders screens. */
const TOOLBAR_BUTTON =
	"inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";

const PRIMARY_BUTTON =
	"inline-flex !h-9 items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

const ICON_BUTTON =
	"inline-flex p-2  items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
	"xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const CHIP = "inline-flex max-w-full items-center truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700";

const META_PILL = "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

/* The same point at which Stocks turns a count amber and the server sends its low-stock alert. */
const LOW_STOCK = 5;

const PRODUCT_STATUS_OPTIONS = {
	publish: { label: 'Published', value: 'publish' },
	draft: { label: 'Draft', value: 'draft' },
	pending: { label: 'Pending', value: 'pending' },
	private: { label: 'Private', value: 'private' },
}

const STOCK_STATUS_OPTIONS = {
	instock: { label: 'In Stock', value: 'instock' },
	outofstock: { label: 'Out of Stock', value: 'outofstock' }
}

const STATUS_PILLS = {
	draft: { label: "Draft", classes: "bg-gray-100 text-gray-600" },
	pending: { label: "Pending", classes: "bg-amber-100 text-amber-700" },
	private: { label: "Private", classes: "bg-slate-100 text-slate-600" },
	future: { label: "Scheduled", classes: "bg-blue-100 text-blue-700" },
};

/* A price of 0 or "" means none was entered, not "free". */
const hasPrice = (value) => value !== "" && value !== null && value !== undefined && Number(value) > 0;


/*
	The product list.

	"Add Product" made a "Sample Product Title" draft and left you on the list
	to hunt for it; the server never saved its price/stock row and did not
	return its id. Duplicate copied no prices, stock or variations. The page
	size was ignored (the server reads posts_per_page) and so was the Status
	filter, and "In stock" matched 1 product of 34. Store managers never saw
	drafts. "View" went to /products/{id}, which the shop does not have, and
	Delete removed several products without asking.
*/
const Products = () => {

	const router = useRouter()

	const { token, addNotification } = useCounterStore()
	const { wrapCurrency } = useUtilsStore()

	var [queryPrams, setqueryPrams] = useState({ is_admin: true, category: "", brand: "", tag: null, keyword: "", paged: 1, orderby: "date", order: "DESC", per_page: 20, price: "" });

	var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });

	var [loading, setloading] = useState(false);
	var [adding, setadding] = useState(false);
	var [failed, setfailed] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);

	var [terms, setterms] = useState([]);
	var [brands, setbrands] = useState([]);


	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Product"), callback: callbackTitle, classes: "w-96 text-left text-gray-600" },
		categories: { id: "categories", label: ("Categories"), callback: callbackCategories, classes: "text-left text-gray-600" },
		stock_count: { id: "stock_count", label: ("Stock"), callback: callbackStock, classes: "text-center text-gray-600" },
		price: { id: "price", label: ("Price"), callback: callbackPrice, classes: "text-center text-gray-600" },
		tp_price: { id: "price", label: ("Trade Price"), callback: callbackTradePrice, classes: "text-center text-gray-600" },
		actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
	};


	const requestRef = useRef(0);

	function fetchPosts() {

		if (queryPrams.paged < 0) {
			return;
		}

		var requestId = ++requestRef.current;
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_products", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			/* The server reads `posts_per_page`; EntriesTable's selector sets `per_page`. */
			body: JSON.stringify({ ...queryPrams, posts_per_page: queryPrams.per_page }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Server answered ${response.status}.`);
				}
				return response.json();
			})
			.then((res) => {
				/* An older, slower request must not replace a newer one's results. */
				if (requestId !== requestRef.current) return;

				setproductsData({ posts: Array.isArray(res?.posts) ? res.posts : [], total: parseInt(res?.total, 10) || 0, maxPages: parseInt(res?.max_pages, 10) || 1 })
				setfailed(false);
				setloading(false);
			})
			.catch((error) => {
				if (requestId !== requestRef.current) return;

				setloading(false);
				setfailed(true);
				addNotification({ type: 'error', title: 'Products not loaded', content: error?.message ?? "The list could not be loaded. Please try again." })
			});
	}


	function fetchTaxonomy(taxonomy, onLoaded) {

		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ taxonomy: taxonomy, order: "DESC", per_page: 999, paged: 1, hierarchical: true }),
		})
			.then((response) => response.ok ? response.json() : null)
			.then((res) => onLoaded(Object.values(res?.terms ?? {})))
			.catch(() => {
				// The filter simply stays empty.
			});
	}


	/* Products go to the trash (delete_products is wp_delete_post). */
	function delete_products(ids) {

		ids = ids != undefined ? ids : selectedRows;
		if (!ids?.length) return;

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
				if (response.status === 403) throw new Error("You are not allowed to delete products.");
				if (!response.ok) throw new Error(`Server answered ${response.status}.`);
				return response.json();
			})
			.then((res) => {
				var deleted = parseInt(res?.deleted, 10);
				if (Number.isNaN(deleted)) deleted = ids.length;

				addNotification({ type: 'success', title: 'Moved to trash', content: `${deleted} ${deleted === 1 ? "product" : "products"} moved to the trash.` })
				setselectedRows([]);
				fetchPosts();
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Products not deleted', content: error?.message ?? "" })
			});
	}


	function duplicate_product(entry) {

		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/duplicate_product", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ id: entry.id }),
		})
			.then((response) => {
				if (response.status === 403) throw new Error("You are not allowed to duplicate products.");
				if (!response.ok) throw new Error(`Server answered ${response.status}.`);
				return response.json();
			})
			.then((res) => {
				if (!res?.success || !res?.id) {
					throw new Error(res?.message ?? "The copy could not be created.");
				}

				addNotification({ type: 'success', title: 'Product duplicated', content: `Copy #${res.id} added as a draft, with stock at 0 and no SKU.` })
				fetchPosts();
			})
			.catch((error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Product not duplicated', content: error?.message ?? "" })
			});
	}


	/* Creates a draft and opens it, instead of leaving it somewhere in the list. */
	function add_product() {

		if (adding) return;
		setadding(true);

		fetch(serverUrl + "wp-json/combo-store/v2/add_product", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({}),
		})
			.then((response) => {
				if (response.status === 403) throw new Error("You are not allowed to add products.");
				if (!response.ok) throw new Error(`Server answered ${response.status}.`);
				return response.json();
			})
			.then((res) => {
				if (!res?.success || !res?.id) {
					throw new Error(res?.message ?? "The product could not be created.");
				}

				router.push(`/dashboard/products/${res.id}`);
			})
			.catch((error) => {
				setadding(false);
				addNotification({ type: 'error', title: 'Product not added', content: error?.message ?? "" })
			});
	}


	const [queryRestored, setqueryRestored] = useState(false);


	/*
		The saved query comes back in an effect, not in the useState above, because
		the server has no sessionStorage and the first render has to match its HTML.
		Nothing is fetched until then.
	*/
	useEffect(() => {
		const saved = loadProductsQuery();

		if (saved) {
			setqueryPrams(prev => ({ ...prev, ...saved }));
		}

		setqueryRestored(true);
	}, []);


	/* Saved straight away, not debounced: a product can be opened within the delay. */
	useEffect(() => {
		if (queryRestored) {
			saveProductsQuery(queryPrams);
		}
	}, [queryRestored, queryPrams]);


	/* Typing in the search waits a moment; a filter or a page loads at once.
		 Everything used to wait a full second. */
	const lastKeyword = useRef(null);

	useEffect(() => {

		/* After a reload the token arrives from an effect above this page. */
		if (!queryRestored || !token) {
			return;
		}

		var typing = lastKeyword.current !== null && queryPrams.keyword !== lastKeyword.current;
		lastKeyword.current = queryPrams.keyword;

		if (!typing) {
			fetchPosts();
			return;
		}

		const handler = setTimeout(fetchPosts, 400);
		return () => clearTimeout(handler);

	}, [queryRestored, queryPrams, token]);


	function onChangeQueryPrams(next) {
		if (next) {
			setqueryPrams(next)
		}
	}

	function onRefreshRequest() {
		fetchPosts();
	}

	useEffect(() => {
		fetchTaxonomy('product_cat', setterms);
		fetchTaxonomy('product_brand', setbrands);
	}, []);


	/* ---------------- cells ---------------- */

	function callbackActions(entry, columnIndex) {

		/* A variation is edited and managed through its parent product. */
		if (entry?.variation_id) {
			return (
				<td data-label="Actions" className="!px-5 py-3 text-sm"
					key={columnIndex}></td>
			)
		}

		const excludeInSearch = entry?.visibility?.some(item => item.slug === "exclude-from-search");
		const excludeInShop = entry?.visibility?.some(item => item.slug === "exclude-from-catalog");

		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm"
				key={columnIndex}>
				<div className="flex items-center justify-end gap-1 text-sm">

					{excludeInSearch && (
						<div title="Excluded from search" className={ICON_BUTTON}><IconZoomExclamationFilled size={18} /></div>
					)}
					{excludeInShop && (
						<div title="Excluded from catalog" className={ICON_BUTTON}><IconPlaylistX size={18} /></div>
					)}



					<PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

						<div className="p-1.5">
							<div className="flex flex-col gap-0.5">
								{entry?.slug && entry?.status === "publish" && (
									<Link className={MENU_ITEM} href={`/product/${entry.slug}/`} target="_blank">
										<IconEyeShare size={16} /> {("View in shop")}
									</Link>
								)}
								<Link className={MENU_ITEM} href={`/dashboard/stocks-history?product_id=${entry.id}&product_name=${encodeURIComponent(entry?.title ?? "")}`}>
									<IconHistory size={16} /> {("Stock history")}
								</Link>
								<div className={MENU_ITEM} onClick={() => {
									if (confirm(`Duplicate "${entry?.title}"? The copy is a draft with the same prices, stock at 0 and no SKU.`)) {
										duplicate_product(entry);
									}
								}}>
									<IconCopy size={16} /> {("Duplicate")}
								</div>
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									if (confirm(`Move "${entry?.title}" to the trash? It disappears from the shop.`)) {
										delete_products([entry.id]);
									}
								}}>
									<IconTrash size={16} /> {("Delete")}
								</div>
							</div>
						</div>

					</PopoverButton>

				</div>

			</td>

		);
	}


	function callbackTitle(entry, columnIndex) {

		var variation_id = entry?.variation_id
		var pill = STATUS_PILLS[entry?.status];

		return (
			<td data-label="Product" className="!px-5 py-3 text-left"
				key={`title-${entry?.id}-${variation_id ?? ""}`}>

				<div className={`flex min-w-0 items-center gap-3 ${variation_id ? 'pl-6' : ''}`}>

					<div className="flex items-center gap-2">

						{!variation_id && entry?.featured && (
							<div className="text-amber-500" title="Featured"><IconStarFilled size={16} /></div>
						)}
						{!variation_id && !entry?.featured && (
							<div className="text-gray-300"><IconStar size={16} /></div>
						)}

						<div className={`flex ${variation_id ? 'h-8 w-8' : 'h-12 w-12'} shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-300`}>
							{entry?.post_thumbnail_url && (
								<Image unoptimized className={`${variation_id ? 'h-8 w-8' : 'h-12 w-12'} object-cover`} src={entry?.post_thumbnail_url} width={100} height={100} alt={``} />
							)}
							{!entry?.post_thumbnail_url && (
								<IconPhoto size={20} stroke={1.5} />
							)}
						</div>

					</div>

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
						<Link className="text-left text-sm font-medium text-gray-900 transition-colors hover:text-[#634FE5] hover:underline" href={`/dashboard/products/${entry?.id}`}>
							<span dangerouslySetInnerHTML={{ __html: entry?.title ?? "" }} />
						</Link>

						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
							{entry?.sku && (
								<span>{entry.sku}</span>
							)}
							{pill && (
								<span className={`${META_PILL} ${pill.classes}`}>{pill.label}</span>
							)}
							{Array.isArray(entry?.variations) && entry.variations.length > 0 && (
								<span className={`${META_PILL} bg-indigo-50 text-indigo-700`}>{entry.variations.length} {("variations")}</span>
							)}

							<PopoverButton buttonLabel={" "} buttonIcon={<IconEdit size={18} />} title={`Edit ${entry?.title ?? "product"}`} drawer={"right"} buttonClass={ICON_BUTTON}>
								<div className="p-5 bg-gray-50 text-left">
									<ProductEdit id={entry?.id} />
								</div>
							</PopoverButton>
						</div>
					</div>
				</div>
			</td>

		);
	}


	function callbackPrice(entry, columnIndex) {

		var sale = hasPrice(entry?.sale_price) ? Number(entry.sale_price) : null;
		var regular = hasPrice(entry?.regular_price) ? Number(entry.regular_price) : null;

		/* A sale price only counts when it is below the regular one. */
		var onSale = sale !== null && (regular === null || sale < regular);

		return (
			<td data-label="Price" className="!px-5 py-3"
				key={columnIndex}>
				<div className="flex flex-wrap items-baseline justify-center gap-1.5 text-sm">
					{onSale && (
						<>
							<span className="font-semibold tabular-nums text-gray-900">{wrapCurrency(sale)}</span>
							{regular !== null && <span className="text-xs tabular-nums text-gray-400 line-through">{wrapCurrency(regular)}</span>}
						</>
					)}
					{!onSale && regular !== null && (
						<span className="font-semibold tabular-nums text-gray-900">{wrapCurrency(regular)}</span>
					)}
					{!onSale && regular === null && (
						<span className="text-xs text-gray-400" title="No price entered">{("No price")}</span>
					)}
				</div>
			</td>

		);
	}


	function callbackTradePrice(entry, columnIndex) {

		return (
			<td data-label="Trade Price" className="!px-5 py-3"
				key={columnIndex}>
				<div className="flex justify-center text-sm">
					{hasPrice(entry?.trade_price) ? <span className="tabular-nums text-gray-600">{wrapCurrency(Number(entry.trade_price))}</span> : EMPTY}
				</div>
			</td>

		);
	}


	function callbackCategories(entry, columnIndex) {

		var none = !entry?.categories?.length && !entry?.brands?.length;

		return (
			<td data-label="Categories" className="!px-5 py-3 text-left"
				key={`category-${entry?.id}-${entry?.variation_id ?? ""}`}>

				{none && EMPTY}

				<div className="flex flex-col gap-1.5">
					{entry?.categories?.length > 0 && (
						<div className="flex flex-wrap gap-1.5">
							{entry.categories.map((item, index) => (
								<span key={index} className={CHIP}>
									<span dangerouslySetInnerHTML={{ __html: item.name }}></span>
								</span>
							))}
						</div>
					)}

					{entry?.brands?.length > 0 && (
						<div className="flex flex-wrap items-center gap-1.5">
							<span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{("Brand")}</span>
							{entry.brands.map((item, index) => (
								<span key={index} className="inline-flex max-w-full items-center truncate rounded-md bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700">
									<span dangerouslySetInnerHTML={{ __html: item.name }}></span>
								</span>
							))}
						</div>
					)}
				</div>
			</td>

		);
	}


	function callbackStock(entry, columnIndex) {

		var count = Number(entry?.stock_count ?? 0) || 0;

		return (
			<td data-label="Stock" className="!px-5 py-3 text-center"
				key={`stock-${entry?.id}-${entry?.variation_id ?? ""}`}>

				<div className="flex justify-center text-sm">
					{entry?.stock_status == 'instock' && (
						<span title={count <= LOW_STOCK ? "Low stock" : "In stock"} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums ${count <= LOW_STOCK ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>
							{count}
						</span>
					)}

					{entry?.stock_status == 'outofstock' && (
						<span className="inline-flex items-center whitespace-nowrap rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">{("Out of stock")}</span>
					)}

					{entry?.stock_status != 'instock' && entry?.stock_status != 'outofstock' && (
						<span className="text-xs text-gray-400" title="This product does not track stock">{("Not tracked")}</span>
					)}
				</div>

			</td>

		);
	}


	function onFilterByStatus(args) {
		setqueryPrams({ ...queryPrams, status: args?.value ?? "", paged: 1 })
	}

	function onFilterByStockStatus(args) {
		setqueryPrams({ ...queryPrams, stock_status: args?.value ?? "", paged: 1 })
	}


	function renderTermOptions(items) {

		return items?.map(item => {

			var children = item?.children;

			if (children) {
				return (
					<optgroup label={`${item.name}(${item.count})`} key={item.term_id}>
						<option value={item.slug} key={item.slug}>
							{item.name}({item.count})
						</option>

						{children?.map(childItem => (
							<option value={childItem.slug} key={childItem.term_id}>
								{childItem.name}({childItem.count})
							</option>
						))}
					</optgroup>
				)
			}

			return (
				<option value={item.slug} key={item.term_id}>
					{item.name}({item.count})
				</option>
			)
		})
	}


	var total = productsData?.total ?? 0;
	var moreFilterCount = [queryPrams?.status, queryPrams?.stock_status].filter(Boolean).length;
	var hasFilters = Boolean(queryPrams?.category || queryPrams?.brand || queryPrams?.keyword || moreFilterCount);

	function clearFilters() {
		setqueryPrams({ ...queryPrams, category: "", brand: "", keyword: "", status: "", stock_status: "", paged: 1 });
	}


	return (

		<div className="page-shell">

			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Products")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{total} {total === 1 ? ("product") : ("products")}{hasFilters ? ` ${("matching the filters")}` : ` ${("in the catalog")}`}
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
						<IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
					</button>
					<button type="button" className={PRIMARY_BUTTON} disabled={adding} onClick={add_product}>
						{adding ? <Spinner /> : <IconPlus size={16} />} {("Add Product")}
					</button>
				</div>
			</div>

			<div className="flex flex-wrap justify-between gap-3">

				<div className="flex flex-wrap items-center gap-2">

					<select aria-label="Category" className={FILTER_SELECT} value={queryPrams?.category ?? ""} onChange={ev => {
						setqueryPrams({ ...queryPrams, category: ev.target.value, paged: 1 });
					}}>
						<option value={""}>{("All Categories")}</option>
						{renderTermOptions(terms)}
					</select>

					<select aria-label="Brand" className={FILTER_SELECT} value={queryPrams?.brand ?? ""} onChange={ev => {
						setqueryPrams({ ...queryPrams, brand: ev.target.value, paged: 1 });
					}}>
						<option value={""}>{("All Brands")}</option>
						{renderTermOptions(brands)}
					</select>

					<PopoverButton wrapperClass={``} enableCloseBtn={false} buttonLabel={moreFilterCount > 0 ? `${("More Filters")} (${moreFilterCount})` : ("More Filters")} buttonIcon={<IconFilter size={16} />} title={"More Filters"} position={"bottomLeft"} buttonClass={TOOLBAR_BUTTON} popoverClass={`absolute z-[999] w-[360px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

						<div className="p-4">
							<div className="flex flex-col gap-3">
								<div className="flex items-center justify-between gap-3">
									<div className="text-sm font-medium text-gray-700">{("Product status")}</div>
									<div>
										<DropDown multiple={false} allowReset={true} value={queryPrams?.status} options={PRODUCT_STATUS_OPTIONS} label={`Any status`} onOptionsChoose={onFilterByStatus} />
									</div>
								</div>
								<div className="flex items-center justify-between gap-3">
									<div className="text-sm font-medium text-gray-700">{("Stock status")}</div>
									<div>
										<DropDown multiple={false} allowReset={true} value={queryPrams?.stock_status} options={STOCK_STATUS_OPTIONS} label={`Any stock`} onOptionsChoose={onFilterByStockStatus} />
									</div>
								</div>
							</div>
						</div>

					</PopoverButton>

					{hasFilters && (
						<button type="button" className="!h-9 rounded-lg !border-0 !bg-transparent px-2 text-sm !text-gray-500 !shadow-none hover:!bg-gray-100 hover:!text-gray-800" onClick={clearFilters}>
							{("Clear filters")}
						</button>
					)}

				</div>


				{selectedRows.length > 0 && (
					<div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
						<span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
						<button type="button" className="!h-8 rounded-md !border-0 !bg-transparent px-2 text-sm !text-gray-500 !shadow-none hover:!bg-white hover:!text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>

						<PopoverButton buttonLabel={("Bulk Update")} buttonClass={`${TOOLBAR_BUTTON} !h-8`} buttonIcon={<IconStack2 size={15} />} title={"Bulk Update"} drawer={"right"}>
							<div className="p-5 bg-gray-50">
								<ProductBulkUpdate ids={selectedRows} />
							</div>
						</PopoverButton>

						{/* This deleted straight away, with no confirmation. */}
						<button type="button"
							className="inline-flex !h-8 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50"
							disabled={loading}
							onClick={() => {
								if (confirm(`Move ${selectedRows.length} ${selectedRows.length === 1 ? "product" : "products"} to the trash? They disappear from the shop.`)) {
									delete_products();
								}
							}}>
							<IconTrash size={15} /> {("Delete")}
						</button>
					</div>
				)}
			</div>


			{failed && !productsData?.posts?.length && (
				<div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-500">
					{("The products could not be loaded.")}
					<button type="button" className={TOOLBAR_BUTTON} onClick={fetchPosts}><IconRefresh size={16} /> {("Try again")}</button>
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

export default Products;
