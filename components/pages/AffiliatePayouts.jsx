"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IconPlus, IconFilter, IconDotsVertical, IconTrash, IconX, IconEdit, IconEyeShare, IconRefresh, IconCash, IconWallet } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import EntriesTable from "../../components/EntriesTable";
import PopoverButton from "../../components/PopoverButton";
import AffiliatePayoutEdit, { PayoutForm } from "./AffiliatePayoutEdit";
import AffiliatePayoutRequest from "./AffiliatePayoutRequest";

import { useCounterStore } from "../../store/useCounterStore";
import { useUtilsStore } from "../../store/useUtilsStore";
import { useCan } from '../../lib/useCan';
import {
  PAYOUT_STATUS_BADGES, StatusBadge, RequestedTag, toOptions, AffiliateCell, AffiliateSelect, useAffiliateAccountsInfo, accountLabel,
  ICON_BUTTON, FILTER_SELECT, FILTER_CHIP, FILTER_CHIP_X, MENU_ITEM, TOOLBAR_BUTTON, PRIMARY_BUTTON, DANGER_BUTTON, DATE_INPUT,
  isManager, postApi, toPickerDate, useAffiliateIdFromUrl,
} from "./affiliateUi";

const STATUS_OPTIONS = toOptions(PAYOUT_STATUS_BADGES);

/* get_affiliate_payouts `source`: who started the payout. */
const SOURCE_LABELS = { "": "All sources", request: "Affiliate requests", store: "Added by store" };


const AffiliatePayouts = () => {

  const { wrapCurrency, formatDate } = useUtilsStore();
  const { token, addNotification, userDataX, paymentGateways } = useCounterStore();
  const permit = useCan("affiliate_payouts"); /* Roles & Permissions */
  const router = useRouter();

  const manager = isManager(userDataX);
  const { accounts, minPayout } = useAffiliateAccountsInfo(token, manager);

  var [payoutsData, setpayoutsData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", status: "", affiliate_id: "", from_date: "", to_date: "", paged: 1, order: "DESC", per_page: 10 });
  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  const requestRef = useRef(0);
  const lastKeyword = useRef(queryPrams.keyword);

  /* ?affiliate_id= from the affiliate page. */
  useAffiliateIdFromUrl((value) => setqueryPrams((q) => ({ ...q, affiliate_id: value, paged: 1 })));

  /* An affiliate's balance and open request, for the Request payout button. */
  var [balanceInfo, setbalanceInfo] = useState(null);

  function loadBalance() {
    if (!token || manager) return;
    postApi("get_affiliate_stats", token, { from_date: new Date().toISOString().slice(0, 10), to_date: new Date().toISOString().slice(0, 10) })
      .then((res) => setbalanceInfo(res?.status === "success" ? { ...res.balance, open_request: res.open_request, account: res.accounts?.[0] ?? null } : null))
      .catch(() => { });
  }

  useEffect(loadBalance, [token, manager]);


  function fetchPosts() {
    var requestId = ++requestRef.current;
    setloading(true);

    postApi("get_affiliate_payouts", token, queryPrams)
      .then((res) => {
        if (requestId !== requestRef.current) return;
        setpayoutsData({
          posts: Array.isArray(res?.posts) ? res.posts : [],
          total: parseInt(res?.total) || 0,
          maxPages: parseInt(res?.max_pages) || 1,
        });
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;
        setloading(false);
        addNotification({ type: "error", title: "Payouts not loaded", content: error.message });
      });
  }

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


  function delete_payouts(ids) {
    if (!permit.allowed("delete")) return permit.denied();
    ids = ids ?? selectedRows;
    if (!ids?.length) return;

    setloading(true);
    postApi("delete_affiliate_payouts", token, { ids })
      .then((res) => {
        setloading(false);
        if (res?.success === false) {
          addNotification({ type: "error", title: "Delete failed", content: res?.message ?? "The server did not delete the payout(s)." });
          return;
        }
        addNotification({ type: "success", title: "Deleted", content: ids.length === 1 ? `Payout #${ids[0]} deleted.` : `${ids.length} payouts deleted.` });
        setselectedRows([]);
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: "error", title: "Delete failed", content: error.message });
      });
  }

  async function mark_paid(ids) {
    ids = ids ?? selectedRows;
    if (!ids?.length) return;

    setloading(true);
    var failed = 0;
    for (var id of ids) {
      try {
        var res = await postApi("update_affiliate_payout", token, { id, status: "paid" });
        if (res?.status !== "success") failed++;
      } catch (_e) {
        failed++;
      }
    }
    setloading(false);
    addNotification(failed
      ? { type: "error", title: "Some payouts not updated", content: `${failed} of ${ids.length} could not be marked paid.` }
      : { type: "success", title: "Updated", content: ids.length === 1 ? `Payout #${ids[0]} marked paid.` : `${ids.length} payouts marked paid.` });
    setselectedRows([]);
    fetchPosts();
  }


  function callbackID(entry, columnIndex) {
    return (
      <td data-label="ID" className="text-left !px-5" key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Link className="font-mono text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline" href={`/dashboard/affiliate-payouts/${entry.id}`}>
              {"#" + entry.id}
            </Link>
            {manager && (
              <PopoverButton buttonLabel={""} buttonIcon={<IconEdit size={16} />} title={`Edit payout #${entry.id}`} drawer={"right"} buttonClass={ICON_BUTTON}>
                <div className="p-5 bg-gray-50 text-left">
                  <AffiliatePayoutEdit id={entry.id} variant="drawer" onSaved={fetchPosts} />
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

  function callbackPayment(entry, columnIndex) {
    return (
      <td data-label="Payment" className="!px-5 py-3 text-left" key={columnIndex}>
        <div className="flex flex-col items-start gap-1.5">
          <StatusBadge badges={PAYOUT_STATUS_BADGES} status={entry.status} />
          {entry.requested_at && <RequestedTag at={entry.requested_at} />}
          {entry.payment_method && <span className="text-[11px] text-gray-500">{paymentGateways?.[entry.payment_method]?.label ?? entry.payment_method}</span>}
          {entry.transaction_id && <span className="font-mono text-[11px] text-gray-400">{entry.transaction_id}</span>}
        </div>
      </td>
    );
  }

  function callbackAmount(entry, columnIndex) {
    return (
      <td data-label="Amount" className="text-right !px-5" key={columnIndex}>
        <span className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(parseFloat(entry.amount || 0))}</span>
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
                <Link className={MENU_ITEM} href={`/dashboard/affiliate-payouts/${entry.id}`}>
                  <IconEyeShare size={16} /> Open
                </Link>
                {manager && entry.status !== "paid" && (
                  <div className={MENU_ITEM} {...permit.hide("edit")} onClick={() => mark_paid([entry.id])}><IconCash size={16} /> Mark paid</div>
                )}
                {manager && (
                  <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} {...permit.hide("delete")} onClick={() => {
                    if (confirm(`Permanently delete payout #${entry.id}? This cannot be undone.`)) delete_payouts([entry.id]);
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
    payment: { label: ("Payment"), callback: callbackPayment, classes: "text-left text-gray-600 w-44" },
    amount: { label: ("Amount"), callback: callbackAmount, classes: "text-right text-gray-600 w-40" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };


  const moreFilterCount = [queryPrams.from_date, queryPrams.to_date].filter(Boolean).length;
  const activeFilterCount = moreFilterCount + [queryPrams.status, queryPrams.affiliate_id, queryPrams.source].filter(Boolean).length;
  const selectedAccount = accounts.find((a) => String(a.id) === String(queryPrams.affiliate_id));

  const pagePaid = (payoutsData?.posts ?? []).filter((p) => p.status === "paid").reduce((sum, p) => sum + (parseFloat(p.amount) || 0), 0);
  const pageOpen = (payoutsData?.posts ?? []).filter((p) => ["requested", "pending", "processing"].includes(p.status)).reduce((sum, p) => sum + (parseFloat(p.amount) || 0), 0);


  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Affiliate payouts")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {payoutsData?.total ?? 0} {activeFilterCount > 0 ? ("payouts match the filters") : ("payouts")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>
          {!manager && balanceInfo && (
            <AffiliatePayoutRequest available={Math.max(0, balanceInfo.available ?? 0)} minPayout={balanceInfo.min_payout ?? 0} openRequest={balanceInfo.open_request} defaults={balanceInfo.account}
              onChanged={() => { loadBalance(); fetchPosts(); }} />
          )}
          {manager && (
            <PopoverButton buttonLabel={("Add Payout")} buttonIcon={<IconPlus size={16} />} title={("Add payout")} drawer={"right"} buttonClass={PRIMARY_BUTTON}>
              <div className="p-5 text-left">
                <PayoutForm accounts={accounts} minPayout={minPayout} onSaved={(id) => router.push(`/dashboard/affiliate-payouts/${id}`)} />
              </div>
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

          {manager && (
            <select className={FILTER_SELECT} value={queryPrams.source ?? ""} onChange={(ev) => setqueryPrams({ ...queryPrams, source: ev.target.value, paged: 1 })}>
              {Object.entries(SOURCE_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
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
            <button type="button" className={TOOLBAR_BUTTON.replace("!h-9", "!h-8")} disabled={loading} {...permit.hide("edit")} onClick={() => mark_paid()}><IconCash size={15} /> {("Mark paid")}</button>
            <button type="button" className={DANGER_BUTTON} disabled={loading} {...permit.hide("delete")} onClick={() => {
              if (confirm(`Permanently delete ${selectedRows.length} ${selectedRows.length === 1 ? "payout" : "payouts"}? This cannot be undone.`)) delete_payouts();
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
              <span>{("Status")}: {PAYOUT_STATUS_BADGES[queryPrams.status]?.label ?? queryPrams.status}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, status: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams.source && (
            <div className={FILTER_CHIP}>
              <span>{("Source")}: {SOURCE_LABELS[queryPrams.source] ?? queryPrams.source}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, source: "", paged: 1 })}><IconX size={13} /></span>
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
            setqueryPrams({ ...queryPrams, status: "", affiliate_id: "", source: "", from_date: "", to_date: "", paged: 1 });
          }}>{("Clear all")}</button>
        </div>
      )}

      {payoutsData && !loading && activeFilterCount === 0 && !queryPrams.keyword && payoutsData.total === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconWallet size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("No payouts yet")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("Record what you pay affiliates for their commission, so each one's balance stays right.")}</p>
        </div>
      ) : (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={payoutsData}
          itemPath={""}
          onChange={(q) => q && setqueryPrams(q)}
          loading={loading}
          selectedRows={selectedRows}
          onSelectRows={setselectedRows}
          onRefreshRequest={fetchPosts}
        />
      )}

      {payoutsData?.posts?.length > 0 && (
        <div className="flex justify-end">
          <div className="flex w-full max-w-sm flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {("This page")} · {payoutsData.posts.length} {("payouts")}
            </div>
            <div className="flex justify-between text-xs text-gray-500"><span>{("Requested / pending / processing")}</span><span className="tabular-nums">{wrapCurrency(pageOpen)}</span></div>
            <div className="mt-1 flex justify-between border-t border-dashed border-gray-200 pt-2 text-sm font-semibold text-gray-900">
              <span>{("Paid")}</span><span className="tabular-nums">{wrapCurrency(pagePaid)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliatePayouts;
