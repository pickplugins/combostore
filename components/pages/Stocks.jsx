"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import DropDown from "../../components/DropDown";
import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const ICON_BUTTON =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
  "xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FILTER_INPUT =
  "!w-40 !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !px-3 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const CHIP = "inline-flex max-w-full items-center truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700";

const META_PILL = "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

/* The same point at which Products turns a stock count amber. */
const LOW_STOCK = 5;

const ORDER_STATUS_OPTIONS = {
  draft: { label: 'Draft', value: 'draft' },
  pending: { label: 'Pending', value: 'pending' },
  publish: { label: 'Publish', value: 'publish' },
  hold: { label: 'Hold', value: 'hold' }
}

const STOCK_STATUS_OPTIONS = {
  instock: { label: 'In Stock', value: 'instock' },
  outofstock: { label: 'Out of Stock', value: 'outofstock' }
}

import { IconCopy, IconEdit, IconEyeShare, IconDotsVertical, IconTrash, IconStarFilled, IconStar, IconFileDollar, IconZoomExclamationFilled, IconPlaylistX, IconPhoto } from "@tabler/icons-react";
import PopoverButton from "../../components/PopoverButton";
import ProductEdit from "../../components/pages/ProductEdit";
import ProductBulkUpdate from "../../components/shop-elements/ProductBulkUpdate";

import Image from "next/image";


function stockLevel(entry) {

  if (entry?.stock_status == 'outofstock') {
    return { label: "Out of stock", classes: "bg-rose-50 text-rose-700" };
  }

  if (entry?.stock_status != 'instock') {
    return null;
  }

  /* An empty count means stock is not being tracked, which is not the same as low. */
  var count = entry?.stock_count;
  var isLow = count !== "" && count !== null && count !== undefined && Number(count) <= LOW_STOCK;

  return isLow
    ? { label: "Low stock", classes: "bg-amber-50 text-amber-700" }
    : { label: "In stock", classes: "bg-emerald-50 text-emerald-700" };
}


const Stocks = (props) => {

  const { token, addNotification } = useCounterStore()

  var [queryPrams, setqueryPrams] = useState({ is_admin: true, min_stock: "", category: "", brand: "", tag: null, keyword: "", paged: 1, orderby: "date", order: "DESC", per_page: 20, price: "" });

  var [productsData, setproductsData] = useState({ posts: [], total: 0, maxPages: 1 });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  var [queryTerms, setqueryTerms] = useState({ taxonomy: 'product_cat', order: "DESC", per_page: 99, });
  var [querybrands, setquerybrands] = useState({ taxonomy: 'product_brand', order: "DESC", per_page: 99, });
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


  async function fetchPosts() {

    if (queryPrams.paged < 0) {
      return;
    }

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
        addNotification({ type: 'error', title: 'Stocks not loaded', content: "The list could not be loaded. Please try again." })
      });

  }


  function fetchTaxonomy(query, onLoaded) {

    var postData = {
      taxonomy: query.taxonomy,
      per_page: query.per_page,
      paged: query.paged,
      order: query.order,
      hierarchical: true,
    };
    postData = JSON.stringify(postData);

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

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            onLoaded(Object.values(res?.terms ?? {}));
          });
        }
      })
      .catch((_error) => {
        // The filter simply stays empty.
      });

  }


  async function delete_products(ids) {

    if (queryPrams.paged < 0) {
      return;
    }

    ids = ids != undefined ? ids : selectedRows;

    var postData = {
      ids: ids,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_products", {
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

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            setloading(false);
            fetchPosts();
          });
        }
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Products not deleted', content: "Your change could not be saved. Please try again." })
      });
  }

  async function duplicate_product(id) {

    if (queryPrams.paged < 0) {
      return;
    }

    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/duplicate_product", {
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

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            setloading(false);
            fetchPosts();
          });
        }
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Product not duplicated', content: "Your change could not be saved. Please try again." })
      });
  }


  const [debouncedQuery, setDebouncedQuery] = useState(queryPrams);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(queryPrams);
    }, 1000);

    return () => clearTimeout(handler);
  }, [queryPrams]);


  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. */
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

  useEffect(() => {
    fetchTaxonomy(queryTerms, setterms);
    fetchTaxonomy(querybrands, setbrands);
  }, []);


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

          <PopoverButton buttonLabel={" "} buttonIcon={<IconEdit size={18} />} title={"Edit Product"} drawer={"right"} buttonClass={ICON_BUTTON}>

            <div className="p-5 bg-gray-50 text-left">
              <ProductEdit id={entry?.id} />
            </div>

          </PopoverButton>

          <PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">
              <div className="flex flex-col gap-0.5">
                <div className={MENU_ITEM} onClick={() => {
                  if (confirm("Please confirm?")) {
                    duplicate_product(entry.id);
                  }
                }}>
                  <IconCopy size={16} /> Duplicate
                </div>
                <Link className={MENU_ITEM} href={`/products/${entry.id}`}>
                  <IconEyeShare size={16} /> View
                </Link>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                  if (confirm("Please confirm?")) {
                    delete_products([entry.id]);
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
            <Link className="text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/products/${entry?.id}`}>
              {entry?.title}
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
            {entry.categories.map((item, index) => {
              return (
                <span key={index} className={CHIP}>
                  <span dangerouslySetInnerHTML={{ __html: item.name }}></span>
                </span>
              )
            })}
          </div>
        )}
      </td>

    );
  }


  function callbackStock(entry, columnIndex) {

    var count = entry?.stock_count;
    var hasCount = count !== "" && count !== null && count !== undefined;

    return (
      <td data-label="Stock" className="!px-5 py-3 text-center"
        key={`stock-${entry?.id}-${entry?.variation_id ?? ""}`}>
        {hasCount ? <span className="text-sm font-semibold tabular-nums text-gray-900">{count}</span> : EMPTY}
      </td>

    );
  }


  function callbackStatus(entry, columnIndex) {

    var level = stockLevel(entry);

    return (
      <td data-label="Status" className="!px-5 py-3 text-center"
        key={`status-${entry?.id}-${entry?.variation_id ?? ""}`}>
        <div className="flex justify-center">
          {level && (
            <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${level.classes}`}>{level.label}</span>
          )}
          {!level && EMPTY}
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

            {children?.map(childItem => {
              return (
                <option value={childItem.slug} key={childItem.term_id}>
                  {childItem.name}({childItem.count})
                </option>
              )
            })}
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


  return (
    <div className="page-shell">

      {/* Page heading: this screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Stocks")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {productsData?.total ?? 0} {("products")}
          </p>
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

          <PopoverButton wrapperClass={``} enableCloseBtn={false} buttonLabel={("Filter Products")} buttonIcon={<IconFileDollar size={16} />} title={"Filter Products"} position={"leftTop"} buttonClass={`inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer`} popoverClass={`absolute z-[999] w-[360px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

            <div className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.status} options={ORDER_STATUS_OPTIONS} label={`Choose Status`} onOptionsChoose={onFilterByStatus} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Stock Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.stock_status} options={STOCK_STATUS_OPTIONS} label={`Choose Stock Status`} onOptionsChoose={onFilterByStockStatus} />
                  </div>
                </div>
              </div>
            </div>

          </PopoverButton>

        </div>


        <div className="flex items-center justify-end gap-3">
          {selectedRows.length > 0 && (
            <div
              className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
              onClick={() => {
                if (confirm("Please confirm?")) {
                  delete_products();
                }
              }}>
              {("Delete Products")}
            </div>
          )}

          {selectedRows.length > 0 && (

            <PopoverButton buttonLabel={("Bulk Update")} buttonClass={`inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer`} buttonIcon={``} title={"Bulk Update"} drawer={"left"}>

              <div className="p-5 bg-gray-50">
                <ProductBulkUpdate ids={selectedRows} />
              </div>

            </PopoverButton>
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

export default Stocks;
