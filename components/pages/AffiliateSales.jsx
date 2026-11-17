"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IconPlus, IconFilter, IconDotsVertical, IconTrash, IconX, IconEdit, IconEyeShare, IconRefresh, IconCoins, IconCheck, IconBan, IconCash } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import EntriesTable from "../../components/EntriesTable";
import PopoverButton from "../../components/PopoverButton";
import AffiliateSaleEdit from "./AffiliateSaleEdit";

import { useCounterStore } from "../../store/useCounterStore";
import { useUtilsStore } from "../../store/useUtilsStore";
import {
  SALE_STATUS_BADGES, StatusBadge, toOptions, AffiliateCell, AffiliateSelect, useAffiliateAccounts, accountLabel,
  ICON_BUTTON, FILTER_SELECT, FILTER_CHIP, FILTER_CHIP_X, MENU_ITEM, TOOLBAR_BUTTON, PRIMARY_BUTTON, DANGER_BUTTON, DATE_INPUT, FIELD, LABEL,
  isManager, postApi, toPickerDate, useAffiliateIdFromUrl,
} from "./affiliateUi";

const STATUS_OPTIONS = toOptions(SALE_STATUS_BADGES);


/* The Add form: an affiliate and an order. Commission falls back to the
   affiliate's own rate, and the order total to the order's. */
const AddSaleForm = ({ accounts, onCreated }) => {
  const { token, addNotification } = useCounterStore();
  var [form, setform] = useState({ affiliate_id: "", order_id: "", order_total: "", commission_rate: "", commission_amount: "", status: "pending" });
  var [saving, setsaving] = useState(false);

  function save() {
    setsaving(true);
    postApi("create_affiliate_sale", token, form)
      .then((res) => {
        setsaving(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Sale not added", content: res?.message ?? "The sale could not be added." });
          return;
        }
        addNotification({ type: "success", title: "Sale added", content: `Affiliate sale #${res.id} created.` });
        onCreated?.(res.id);
      })
      .catch((error) => {
        setsaving(false);
        addNotification({ type: "error", title: "Sale not added", content: error.message });
      });
  }

  var set = (key) => (ev) => setform({ ...form, [key]: ev.target.value });

  return (
    <div className="flex flex-col gap-4 p-5 text-left">
      <div>
        <label className={LABEL}>{("Affiliate")}</label>
        <select className={FIELD} value={form.affiliate_id} onChange={set("affiliate_id")}>
          <option value="">{("Choose an affiliate")}</option>
          {accounts.map((a) => <option key={a.id} value={a.id}>{accountLabel(a)}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={LABEL}>{("Order ID")}</label>
          <input type="number" min="1" className={FIELD} value={form.order_id} onChange={set("order_id")} />
        </div>
        <div>
          <label className={LABEL}>{("Order total")}</label>
          <input type="number" step="0.01" min="0" placeholder={("From the order")} className={FIELD} value={form.order_total} onChange={set("order_total")} />
        </div>
        <div>
          <label className={LABEL}>{("Commission rate (%)")}</label>
          <input type="number" step="0.01" min="0" placeholder={("Affiliate's rate")} className={FIELD} value={form.commission_rate} onChange={set("commission_rate")} />
        </div>
        <div>
          <label className={LABEL}>{("Commission amount")}</label>
          <input type="number" step="0.01" min="0" placeholder={("Total × rate")} className={FIELD} value={form.commission_amount} onChange={set("commission_amount")} />
        </div>
        <div>
          <label className={LABEL}>{("Status")}</label>
          <select className={FIELD} value={form.status} onChange={set("status")}>
            {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button type="button" className={PRIMARY_BUTTON} disabled={saving || !form.affiliate_id || !form.order_id} onClick={save}>
          <IconPlus size={16} /> {saving ? ("Adding...") : ("Add sale")}
        </button>
      </div>
    </div>
  );
};


const AffiliateSales = () => {

  const { wrapCurrency, formatDate } = useUtilsStore();
  const { token, addNotification, userDataX } = useCounterStore();
  const router = useRouter();

  const manager = isManager(userDataX);
  const accounts = useAffiliateAccounts(token, manager);

  var [salesData, setsalesData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", status: "", affiliate_id: "", from_date: "", to_date: "", paged: 1, order: "DESC", per_page: 10 });
  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  const requestRef = useRef(0);
  const lastKeyword = useRef(queryPrams.keyword);

  /* ?affiliate_id= from the affiliate page. */
  useAffiliateIdFromUrl((value) => setqueryPrams((q) => ({ ...q, affiliate_id: value, paged: 1 })));


  function fetchPosts() {
    var requestId = ++requestRef.current;
    setloading(true);

    postApi("get_affiliate_sales", token, queryPrams)
      .then((res) => {
        if (requestId !== requestRef.current) return;
        setsalesData({
          posts: Array.isArray(res?.posts) ? res.posts : [],
          total: parseInt(res?.total) || 0,
          maxPages: parseInt(res?.max_pages) || 1,
        });
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;
        setloading(false);
        addNotification({ type: "error", title: "Sales not loaded", content: error.message });
      });
  }

  /* Typing in search waits a moment; any other change loads at once. */
  useEffect(() => {
    if (!token) return;

    var typing = queryPrams.keyword !== lastKeyword.current;
    lastKeyword.current = queryPrams.keyword;

    if (!typing) {
      fetchPosts();
      return;
    }
    const handler = setTimeout(fetchPosts, 400);
    return () => clearTimeout(handler);
  }, [queryPrams, token]);


  function delete_sales(ids) {
    ids = ids ?? selectedRows;
    if (!ids?.length) return;

    setloading(true);
    postApi("delete_affiliate_sales", token, { ids })
      .then((res) => {
        setloading(false);
        if (res?.success === false) {
          addNotification({ type: "error", title: "Delete failed", content: res?.message ?? "The server did not delete the sale(s)." });
          return;
        }
        addNotification({ type: "success", title: "Deleted", content: ids.length === 1 ? `Sale #${ids[0]} deleted.` : `${ids.length} sales deleted.` });
        setselectedRows([]);
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: "error", title: "Delete failed", content: error.message });
      });
  }

  /* One update per row: the route takes a single id. */
  async function set_status(ids, status) {
    ids = ids ?? selectedRows;
    if (!ids?.length) return;

    setloading(true);
    var failed = 0;
    for (var id of ids) {
      try {
        var res = await postApi("update_affiliate_sale", token, { id, status });
        if (res?.status !== "success") failed++;
      } catch (_e) {
        failed++;
      }
    }
    setloading(false);

    var label = SALE_STATUS_BADGES[status]?.label ?? status;
    if (failed) {
      addNotification({ type: "error", title: "Some sales not updated", content: `${failed} of ${ids.length} could not be marked ${label}.` });
    } else {
      addNotification({ type: "success", title: "Updated", content: ids.length === 1 ? `Sale #${ids[0]} marked ${label}.` : `${ids.length} sales marked ${label}.` });
    }
    setselectedRows([]);
    fetchPosts();
  }


  function callbackID(entry, columnIndex) {
    return (
      <td data-label="ID" className="text-left !px-5" key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Link className="font-mono text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline" href={`/dashboard/affiliate-sales/${entry.id}`}>
              {"#" + entry.id}
            </Link>
            {manager && (
              <PopoverButton buttonLabel={""} buttonIcon={<IconEdit size={16} />} title={`Edit sale #${entry.id}`} drawer={"right"} buttonClass={ICON_BUTTON}>
                <div className="p-5 bg-gray-50 text-left">
                  <AffiliateSaleEdit id={entry.id} variant="drawer" onSaved={fetchPosts} />
                </div>
              </PopoverButton>
            )}
          </div>
          <div className="flex flex-col gap-0.5 text-[11px] text-gray-500 sm:pr-5">
            <div className="flex gap-1"><span className="text-gray-400">Created</span> <span className="tabular-nums">{entry.created_at ? formatDate(entry.created_at) : "—"}</span></div>
            {entry.paid_at && <div className="flex gap-1"><span className="text-gray-400">Paid</span> <span className="tabular-nums">{formatDate(entry.paid_at)}</span></div>}
          </div>
        </div>
      </td>
    );
  }

  function callbackAffiliate(entry, columnIndex) {
    return (
      <td data-label="Affiliate" className="!px-5 py-3 text-left" key={columnIndex}>
        <AffiliateCell entry={entry} />
      </td>
    );
  }

  function callbackOrder(entry, columnIndex) {
    return (
      <td data-label="Order" className="!px-5 py-3 text-left" key={columnIndex}>
        <div className="flex flex-col gap-0.5">
          {manager ? (
            <Link className="font-mono text-sm text-blue-600 hover:underline" href={`/dashboard/orders/${entry.order_id}`}>#{entry.order_id}</Link>
          ) : (
            <span className="font-mono text-sm text-gray-700">#{entry.order_id}</span>
          )}
          <span className="text-[11px] tabular-nums text-gray-500">{wrapCurrency(parseFloat(entry.order_total || 0))}</span>
        </div>
      </td>
    );
  }

  function callbackStatus(entry, columnIndex) {
    return (
      <td data-label="Status" className="!px-5 py-3 text-left" key={columnIndex}>
        <StatusBadge badges={SALE_STATUS_BADGES} status={entry.status} />
      </td>
    );
  }

  function callbackCommission(entry, columnIndex) {
    return (
      <td data-label="Commission" className="text-right !px-5" key={columnIndex}>
        <div className="flex flex-col items-end gap-0.5 py-3">
          <span className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(parseFloat(entry.commission_amount || 0))}</span>
          {parseFloat(entry.commission_rate) > 0 && <span className="text-[11px] tabular-nums text-gray-500">{parseFloat(entry.commission_rate)}%</span>}
        </div>
      </td>
    );
  }

  function callbackActions(entry, columnIndex) {
    return (
      <td data-label="Actions" className="text-sm" key={columnIndex}>
        <div className="flex justify-end sm:pr-5 text-sm">
          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>
            <div className="p-1.5">
              <div className="flex flex-col gap-0.5">
                <Link className={MENU_ITEM} href={`/dashboard/affiliate-sales/${entry.id}`}>
                  <IconEyeShare size={16} /> Open
                </Link>
                {manager && entry.status !== "approved" && (
                  <div className={MENU_ITEM} onClick={() => set_status([entry.id], "approved")}><IconCheck size={16} /> Approve</div>
                )}
                {manager && entry.status !== "paid" && (
                  <div className={MENU_ITEM} onClick={() => set_status([entry.id], "paid")}><IconCash size={16} /> Mark paid</div>
                )}
                {manager && entry.status !== "rejected" && (
                  <div className={MENU_ITEM} onClick={() => set_status([entry.id], "rejected")}><IconBan size={16} /> Reject</div>
                )}
                {manager && (
                  <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                    if (confirm(`Permanently delete affiliate sale #${entry.id}? This cannot be undone.`)) {
                      delete_sales([entry.id]);
                    }
                  }}>
                    <IconTrash size={16} /> Delete
                  </div>
                )}
              </div>
            </div>
          </PopoverButton>
        </div>
      </td>
    );
  }

  var columns = {
    ...(manager ? { check: { label: ("Check") } } : {}),
    id: { label: ("ID"), callback: callbackID, classes: "px-5 py-2 text-gray-600 w-56" },
    affiliate: { label: ("Affiliate"), callback: callbackAffiliate, classes: "text-left text-gray-600" },
    order: { label: ("Order"), callback: callbackOrder, classes: "text-left text-gray-600 w-36" },
    status: { label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600 w-32" },
    commission: { label: ("Commission"), callback: callbackCommission, classes: "text-right text-gray-600 w-40" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };


  const moreFilterCount = [queryPrams.from_date, queryPrams.to_date].filter(Boolean).length;
  const activeFilterCount = moreFilterCount + [queryPrams.status, queryPrams.affiliate_id].filter(Boolean).length;
  const selectedAccount = accounts.find((a) => String(a.id) === String(queryPrams.affiliate_id));

  const pageCommission = (salesData?.posts ?? []).filter((p) => p.status !== "rejected").reduce((sum, p) => sum + (parseFloat(p.commission_amount) || 0), 0);


  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Affiliate sales")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {salesData?.total ?? 0} {activeFilterCount > 0 ? ("sales match the filters") : ("sales")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>
          {manager && (
            <PopoverButton buttonLabel={("Add Sale")} buttonIcon={<IconPlus size={16} />} title={("Add affiliate sale")} drawer={"right"} buttonClass={PRIMARY_BUTTON}>
              <AddSaleForm accounts={accounts} onCreated={(id) => router.push(`/dashboard/affiliate-sales/${id}`)} />
            </PopoverButton>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">

          <select className={FILTER_SELECT} value={queryPrams.status} onChange={(ev) => setqueryPrams({ ...queryPrams, status: ev.target.value, paged: 1 })}>
            <option value="">{("All statuses")}</option>
            {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>

          {manager && (
            <AffiliateSelect accounts={accounts} value={queryPrams.affiliate_id} onChange={(v) => setqueryPrams({ ...queryPrams, affiliate_id: v, paged: 1 })} />
          )}

          <PopoverButton wrapperClass={``} enableCloseBtn={false} buttonClass={TOOLBAR_BUTTON} buttonLabel={moreFilterCount > 0 ? `${("Dates")} (${moreFilterCount})` : ("Dates")} buttonIcon={<IconFilter size={16} />} title={"Dates"} position={"bottomLeft"} popoverClass={`absolute z-[999] w-[340px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-gray-700">From</div>
                <DatePicker isClearable placeholderText="Any date" dateFormat="yyyy-MM-dd" className={DATE_INPUT}
                  selected={toPickerDate(queryPrams.from_date)} maxDate={toPickerDate(queryPrams.to_date)}
                  onChange={(date) => setqueryPrams({ ...queryPrams, from_date: date ? format(date, "yyyy-MM-dd") : "", paged: 1 })} />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-gray-700">To</div>
                <DatePicker isClearable placeholderText="Any date" dateFormat="yyyy-MM-dd" className={DATE_INPUT}
                  selected={toPickerDate(queryPrams.to_date)} minDate={toPickerDate(queryPrams.from_date)}
                  onChange={(date) => setqueryPrams({ ...queryPrams, to_date: date ? format(date, "yyyy-MM-dd") : "", paged: 1 })} />
              </div>
            </div>
          </PopoverButton>
        </div>

        {manager && selectedRows?.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
            <span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
            <button type="button" className="!h-8 rounded-md !border-0 !bg-transparent px-2 text-sm !text-gray-500 !shadow-none hover:!bg-white hover:!text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>
            <button type="button" className={TOOLBAR_BUTTON.replace("!h-9", "!h-8")} disabled={loading} onClick={() => set_status(null, "approved")}><IconCheck size={15} /> {("Approve")}</button>
            <button type="button" className={TOOLBAR_BUTTON.replace("!h-9", "!h-8")} disabled={loading} onClick={() => set_status(null, "paid")}><IconCash size={15} /> {("Mark paid")}</button>
            <button type="button" className={DANGER_BUTTON} disabled={loading} onClick={() => {
              if (confirm(`Permanently delete ${selectedRows.length} ${selectedRows.length === 1 ? "sale" : "sales"}? This cannot be undone.`)) {
                delete_sales();
              }
            }}>
              <IconTrash size={15} /> {("Delete")}
            </button>
          </div>
        )}
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {queryPrams.status && (
            <div className={FILTER_CHIP}>
              <span>{("Status")}: {SALE_STATUS_BADGES[queryPrams.status]?.label ?? queryPrams.status}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, status: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams.affiliate_id && (
            <div className={FILTER_CHIP}>
              <span>{("Affiliate")}: {selectedAccount ? accountLabel(selectedAccount) : `#${queryPrams.affiliate_id}`}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, affiliate_id: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams.from_date && (
            <div className={FILTER_CHIP}>
              <span>{("From")}: {queryPrams.from_date}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, from_date: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams.to_date && (
            <div className={FILTER_CHIP}>
              <span>{("To")}: {queryPrams.to_date}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, to_date: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          <button type="button" className="!border-0 !bg-transparent !p-0 !text-xs !font-medium !text-gray-500 !shadow-none hover:!text-red-600" onClick={() => {
            setqueryPrams({ ...queryPrams, status: "", affiliate_id: "", from_date: "", to_date: "", paged: 1 });
          }}>{("Clear all")}</button>
        </div>
      )}

      {salesData && !loading && activeFilterCount === 0 && !queryPrams.keyword && salesData.total === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconCoins size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("No affiliate sales yet")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("Orders referred by an affiliate are listed here with the commission they earned.")}</p>
        </div>
      ) : (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={salesData}
          itemPath={""}
          onChange={(q) => q && setqueryPrams(q)}
          loading={loading}
          selectedRows={selectedRows}
          onSelectRows={setselectedRows}
          onRefreshRequest={fetchPosts}
        />
      )}

      {salesData?.posts?.length > 0 && (
        <div className="flex justify-end">
          <div className="flex w-full max-w-sm flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {("This page")} · {salesData.posts.length} {("sales")}
            </div>
            <div className="flex justify-between text-sm font-semibold text-gray-900">
              <span>{("Commission")}</span><span className="tabular-nums">{wrapCurrency(pageCommission)}</span>
            </div>
            <div className="text-[11px] text-gray-400">{("Rejected sales are not counted.")}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateSales;
