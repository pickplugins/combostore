"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useRef } from "react";
import EntriesTable from "../../components/EntriesTable";
import DropDown from "../../components/DropDown";
import Spinner from "../../components/Spinner";
import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconCopy, IconEdit, IconEyeShare, IconDotsVertical, IconTrash, IconStarFilled, IconStar, IconFilter, IconZoomExclamationFilled, IconPlaylistX, IconPhoto, IconAdjustments, IconHistory, IconRefresh, IconStack2, IconPlus, IconMinus, IconEqual } from "@tabler/icons-react";
import PopoverButton from "../../components/PopoverButton";
import ProductEdit from "../../components/pages/ProductEdit";
import ProductBulkUpdate from "../../components/shop-elements/ProductBulkUpdate";

import Image from "next/image";


/* Same toolbar, menu and chip styles as the Orders and Products screens. */
const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";

const PRIMARY_BUTTON =
  "inline-flex !h-9 items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

const ICON_BUTTON =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
  "xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FILTER_INPUT =
  "!w-40 !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !px-3 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FIELD = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";

const CHIP = "inline-flex max-w-full items-center truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700";

const META_PILL = "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

/* The same point at which Products turns a stock count amber, and at which
   the server sends its low-stock alert. */
const LOW_STOCK = 5;

const PRODUCT_STATUS_OPTIONS = {
  draft: { label: 'Draft', value: 'draft' },
  pending: { label: 'Pending', value: 'pending' },
  publish: { label: 'Published', value: 'publish' },
  hold: { label: 'Hold', value: 'hold' }
}

const STOCK_STATUS_OPTIONS = {
  instock: { label: 'In Stock', value: 'instock' },
  outofstock: { label: 'Out of Stock', value: 'outofstock' }
}


/* Whether stock is tracked: in stock or out of stock. An empty status is not
   tracked - which is not the same as out of stock, or low. */
const isTracked = (entry) => entry?.stock_status === 'instock' || entry?.stock_status === 'outofstock';

function stockLevel(entry) {

  if (entry?.stock_status == 'outofstock') {
    return { label: "Out of stock", classes: "bg-rose-50 text-rose-700" };
  }

  if (entry?.stock_status != 'instock') {
    return { label: "Not tracked", classes: "bg-gray-100 text-gray-500" };
  }

  var count = Number(entry?.stock_count ?? 0);

  return count <= LOW_STOCK
    ? { label: "Low stock", classes: "bg-amber-50 text-amber-700" }
    : { label: "In stock", classes: "bg-emerald-50 text-emerald-700" };
}


/*
  Change one product's stock: add, remove, or set a count, with a note.
  Goes through adjust_stock, so it is in Stocks History with who did it.
  A product that does not track stock can only be set - that starts tracking.
*/
function StockAdjust({ entry, token, onDone, addNotification }) {

  var tracked = isTracked(entry);
  var current = Number(entry?.stock_count ?? 0) || 0;

  var [mode, setmode] = useState(tracked ? "increase" : "set");
  var [quantity, setquantity] = useState("");
  var [note, setnote] = useState("");
  var [saving, setsaving] = useState(false);

  var q = parseInt(quantity, 10);
  var valid = Number.isInteger(q) && q >= 0 && (mode === "set" || q > 0) && !(mode === "decrease" && q > current);
  var after = !Number.isInteger(q) ? null : mode === "increase" ? current + q : mode === "decrease" ? current - q : q;

  function save() {
    if (!valid || saving) return;
    setsaving(true);

    fetch(serverUrl + "wp-json/combo-store/v2/adjust_stock", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ product_id: entry.id, action: mode, quantity: q, note: note }),
    })
      .then((response) => {
        if (response.status === 403) throw new Error("You are not allowed to change stock.");
        if (!response.ok) throw new Error(`Server answered ${response.status}.`);
        return response.json();
      })
      .then((res) => {
        setsaving(false);

        if (res?.status !== "success") {
          addNotification({ type: 'error', title: 'Stock not changed', content: res?.message ?? "" });
          return;
        }

        addNotification({ type: 'success', title: 'Stock updated', content: `${entry?.title}: ${res.stock_before} → ${res.stock_after}` });
        onDone({ stock_count: res.stock_after, stock_status: res.stock_status });
      })
      .catch((error) => {
        setsaving(false);
        addNotification({ type: 'error', title: 'Stock not changed', content: error?.message ?? "" });
      });
  }

  var MODES = [["increase", "Add", IconPlus], ["decrease", "Remove", IconMinus], ["set", "Set to", IconEqual]];

  return (
    <div className="flex w-[min(340px,calc(100vw-2rem))] flex-col gap-3 p-4 text-left">
      <div className="text-sm font-semibold text-gray-900">
        <span dangerouslySetInnerHTML={{ __html: entry?.title ?? "" }} />
        <span className="ml-2 font-normal text-gray-500">{tracked ? `${("now")} ${current}` : ("not tracked yet")}</span>
      </div>

      <div role="tablist" aria-label="How to change" className="grid grid-cols-3 gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1">
        {MODES.map(([value, label, Icon]) => {
          var disabled = !tracked && value !== "set";
          return (
            <button key={value} type="button" role="tab" aria-selected={mode === value} disabled={disabled}
              onClick={() => setmode(value)}
              className={`inline-flex !h-8 items-center justify-center gap-1 rounded-md !px-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${mode === value ? '!bg-white !text-gray-900 shadow-sm' : '!bg-transparent text-gray-500 hover:text-gray-800'}`}>
              <Icon size={14} /> {label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <input type="number" min="0" step="1" autoFocus aria-label={("Quantity")} className={`${FIELD} w-28 text-right tabular-nums`}
          value={quantity} placeholder="0" onChange={ev => setquantity(ev.target.value)}
          onKeyDown={ev => { if (ev.key === "Enter") save(); }} />
        <span className="text-sm text-gray-500">
          {after !== null && quantity !== "" ? <>{tracked ? current : ("untracked")} → <span className={`font-semibold tabular-nums ${after < 0 ? "text-rose-600" : "text-gray-900"}`}>{after}</span></> : ("units")}
        </span>
      </div>

      {mode === "decrease" && Number.isInteger(q) && q > current && (
        <p className="text-xs text-rose-600">{("Only")} {current} {("in stock.")}</p>
      )}
      {!tracked && (
        <p className="text-xs text-gray-500">{("Setting a count starts tracking stock for this product.")}</p>
      )}

      <input type="text" aria-label={("Reason")} className={FIELD} placeholder={("Reason, e.g. damaged, recount, gift")}
        value={note} onChange={ev => setnote(ev.target.value)} onKeyDown={ev => { if (ev.key === "Enter") save(); }} />

      <button type="button" className={PRIMARY_BUTTON} disabled={!valid || saving} onClick={save}>
        {saving ? <Spinner /> : null} {("Save")}
      </button>
    </div>
  );
}


/*
  The stock list.

  It had no way to change stock - only Duplicate and Delete *product*, behind
  a bare "Please confirm?" - and the API had no route for a stock change that
  is recorded in history. Every change of filter or page waited a full second.
  "View" went to /products/{id}, which the store does not have (it is
  /product/{slug}). An untracked product looked the same as one with no
  status at all.
*/
const Stocks = (props) => {

  const { token, addNotification } = useCounterStore()

  var [queryPrams, setqueryPrams] = useState({ is_admin: true, min_stock: "", category: "", brand: "", tag: null, keyword: "", paged: 1, orderby: "date", order: "DESC", per_page: 20, price: "" });

  var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  /* PopoverButton cannot be closed from outside; remounting a row's popover closes it. */
  var [adjustKeys, setadjustKeys] = useState({});

  var [queryTerms] = useState({ taxonomy: 'product_cat', order: "DESC", per_page: 99, });
  var [querybrands] = useState({ taxonomy: 'product_brand', order: "DESC", per_page: 99, });
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
    stock_status: { id: "stock_status", label: ("Status"), callback: callbackStatus, classes: "text-center text-gray-600" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };


  const requestRef = useRef(0);

  function fetchPosts() {

    if (queryPrams.paged < 0) {
      return;
    }

    var requestId = ++requestRef.current;

    /* This endpoint reads `posts_per_page`, and EntriesTable's selector sets `per_page`. */
    var postData = JSON.stringify({ ...queryPrams, posts_per_page: queryPrams.per_page });
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/query_products_stocks", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: postData,
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
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;

        setloading(false);
        addNotification({ type: 'error', title: 'Stocks not loaded', content: error?.message ?? "The list could not be loaded. Please try again." })
      });
  }


  function fetchTaxonomy(query, onLoaded) {

    fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taxonomy: query.taxonomy, per_page: query.per_page, paged: query.paged, order: query.order, hierarchical: true }),
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
        if (response.status === 403) {
          throw new Error("You are not allowed to delete products.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
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

  function duplicate_product(id) {

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/duplicate_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then(() => {
        addNotification({ type: 'success', title: 'Product duplicated', content: `A copy of #${id} was added as a draft.` })
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Product not duplicated', content: error?.message ?? "" })
      });
  }


  /* Typing (search, or the stock threshold) waits a moment; picking a filter
     or a page loads at once. Everything used to wait a full second. */
  const lastTyped = useRef({ keyword: queryPrams.keyword, min_stock: queryPrams.min_stock });

  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. */
    if (!token) {
      return;
    }

    var typing = queryPrams.keyword !== lastTyped.current.keyword || queryPrams.min_stock !== lastTyped.current.min_stock;
    lastTyped.current = { keyword: queryPrams.keyword, min_stock: queryPrams.min_stock };

    if (!typing) {
      fetchPosts();
      return;
    }

    const handler = setTimeout(fetchPosts, 400);
    return () => clearTimeout(handler);

  }, [queryPrams, token]);


  function onChangeQueryPrams(next) {
    if (next) {
      setqueryPrams(next)
    }
  }

  function onRefreshRequest() {
    fetchPosts();
  }

  useEffect(() => {
    fetchTaxonomy(queryTerms, setterms);
    fetchTaxonomy(querybrands, setbrands);
  }, []);


  /* After an adjustment, the row shows the new count without reloading the page. */
  function applyAdjustment(id, change) {
    setproductsData(prev => ({ ...prev, posts: prev.posts.map(post => post.id === id ? { ...post, ...change } : post) }));
    setadjustKeys(prev => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }


  /* ---------------- cells ---------------- */

  function callbackActions(entry, columnIndex) {

    /* A variation is edited and managed through its parent product. */
    if (entry?.variation_id) {
      return (
        <td data-label="Actions" className="!px-5 py-3 text-sm"
          key={columnIndex}></td>
      );
    }

    const excludeInSearch = entry?.visibility?.some(item => item.slug === "exclude-from-search");
    const excludeInShop = entry?.visibility?.some(item => item.slug === "exclude-from-catalog");
    const hasVariations = Array.isArray(entry?.variations) ? entry.variations.length > 0 : Boolean(entry?.variations && Object.keys(entry.variations).length);

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

          {/* Variable products keep their stock on the variations, which are
              changed in the product editor. */}
          {hasVariations ? (
            <span title="Stock is kept on each variation - change it in the product editor" className="text-xs text-gray-400">{("Per variation")}</span>
          ) : (
            <PopoverButton key={`adjust-${entry.id}-${adjustKeys[entry.id] ?? 0}`} closeOnOutsideClick={true} enableCloseBtn={false}
              buttonLabel={("Adjust")} buttonIcon={<IconAdjustments size={16} />} title={"Adjust stock"} position={"bottomRight"}
              buttonClass={`inline-flex !h-8 items-center gap-1.5 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-0 !text-xs !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-[#634FE5]/50 hover:!text-[#634FE5] cursor-pointer`}
              popoverClass={`absolute z-[999] mt-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>
              <StockAdjust entry={entry} token={token} addNotification={addNotification} onDone={(change) => applyAdjustment(entry.id, change)} />
            </PopoverButton>
          )}

          <PopoverButton buttonLabel={" "} buttonIcon={<IconEdit size={18} />} title={`Edit ${entry?.title ?? "product"}`} drawer={"right"} buttonClass={ICON_BUTTON}>

            <div className="p-5 bg-gray-50 text-left">
              <ProductEdit id={entry?.id} />
            </div>

          </PopoverButton>

          <PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">
              <div className="flex flex-col gap-0.5">
                <Link className={MENU_ITEM} href={`/dashboard/stocks-history?product_id=${entry.id}&product_name=${encodeURIComponent(entry?.title ?? "")}`}>
                  <IconHistory size={16} /> {("Stock history")}
                </Link>
                {entry?.slug && (
                  <Link className={MENU_ITEM} href={`/product/${entry.slug}/`} target="_blank">
                    <IconEyeShare size={16} /> {("View in shop")}
                  </Link>
                )}
                <div className={MENU_ITEM} onClick={() => {
                  if (confirm(`Duplicate "${entry?.title}"? The copy is added as a draft.`)) {
                    duplicate_product(entry.id);
                  }
                }}>
                  <IconCopy size={16} /> {("Duplicate")}
                </div>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                  if (confirm(`Move "${entry?.title}" to the trash? It disappears from the shop.`)) {
                    delete_products([entry.id]);
                  }
                }}>
                  <IconTrash size={16} /> {("Delete product")}
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

    return (
      <td data-label="Product" className="!px-5 py-3 text-left"
        key={`title-${entry?.id}-${variation_id ?? ""}`}>

        <div className={`flex min-w-0 flex-1 items-center gap-3 ${variation_id ? 'pl-6' : ''}`}>

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
              {entry?.status === "draft" && (
                <span className={`${META_PILL} bg-gray-100 text-gray-600`}>Draft</span>
              )}
              {entry?.status === "pending" && (
                <span className={`${META_PILL} bg-amber-100 text-amber-700`}>Pending</span>
              )}
            </div>
          </div>
        </div>
      </td>

    );
  }


  function callbackCategories(entry, columnIndex) {

    return (
      <td data-label="Categories" className="!px-5 py-3 text-left"
        key={`category-${entry?.id}-${entry?.variation_id ?? ""}`}>

        {!entry?.categories?.length && EMPTY}

        {entry?.categories?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.categories.map((item, index) => (
              <span key={index} className={CHIP}>
                <span dangerouslySetInnerHTML={{ __html: item.name }}></span>
              </span>
            ))}
          </div>
        )}
      </td>

    );
  }


  function callbackStock(entry, columnIndex) {

    return (
      <td data-label="Stock" className="!px-5 py-3 text-center"
        key={`stock-${entry?.id}-${entry?.variation_id ?? ""}`}>
        {isTracked(entry)
          ? <span className={`text-sm font-semibold tabular-nums ${Number(entry?.stock_count ?? 0) <= LOW_STOCK ? "text-amber-700" : "text-gray-900"}`}>{Number(entry?.stock_count ?? 0)}</span>
          : EMPTY}
      </td>

    );
  }


  function callbackStatus(entry, columnIndex) {

    var level = stockLevel(entry);

    return (
      <td data-label="Status" className="!px-5 py-3 text-center"
        key={`status-${entry?.id}-${entry?.variation_id ?? ""}`}>
        <div className="flex justify-center">
          <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${level.classes}`}>{level.label}</span>
        </div>
      </td>

    );
  }


  function onFilterByStatus(args) {
    setqueryPrams({ ...queryPrams, status: args?.value, paged: 1 })
  }

  function onFilterByStockStatus(args) {
    setqueryPrams({ ...queryPrams, stock_status: args?.value, paged: 1 })
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

  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Stocks")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {total} {total === 1 ? ("product") : ("products")} · {("Adjust a count to record a recount, damage or a gift - every change shows in Stocks History.")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link href="/dashboard/stocks-history" className={TOOLBAR_BUTTON}><IconHistory size={16} /> {("Stocks History")}</Link>
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3">

        <div className="flex flex-wrap gap-2">

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

          <input
            type="number"
            min={0}
            aria-label="Show products with stock at or below"
            title="Show products with stock at or below this number"
            className={FILTER_INPUT}
            value={queryPrams?.min_stock ?? ""}
            placeholder={("Stock at or below")}
            onChange={ev => {
              setqueryPrams({ ...queryPrams, min_stock: ev.target.value, paged: 1 });
            }}
          />

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

        </div>


        {selectedRows.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
            <span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
            <button type="button" className="!h-8 rounded-md !border-0 !bg-transparent px-2 text-sm !text-gray-500 !shadow-none hover:!bg-white hover:!text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>

            <PopoverButton buttonLabel={("Bulk Update")} buttonClass={`${TOOLBAR_BUTTON} !h-8`} buttonIcon={<IconStack2 size={15} />} title={"Bulk Update"} drawer={"left"}>
              <div className="p-5 bg-gray-50">
                <ProductBulkUpdate ids={selectedRows} />
              </div>
            </PopoverButton>

            <button type="button"
              className="inline-flex !h-8 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50"
              disabled={loading}
              onClick={() => {
                if (confirm(`Move ${selectedRows.length} ${selectedRows.length === 1 ? "product" : "products"} to the trash? They disappear from the shop.`)) {
                  delete_products();
                }
              }}>
              <IconTrash size={15} /> {("Delete products")}
            </button>
          </div>
        )}
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

export default Stocks;
