"use client";
import React, { useState, useEffect, useRef } from "react";
import { IconFilter, IconTrash, IconX, IconRefresh, IconClick, IconExternalLink } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import EntriesTable from "../../components/EntriesTable";
import PopoverButton from "../../components/PopoverButton";

import { useCounterStore } from "../../store/useCounterStore";
import { useUtilsStore } from "../../store/useUtilsStore";
import { useCan } from '../../lib/useCan';
import {
  AffiliateCell, AffiliateSelect, useAffiliateAccounts, accountLabel,
  ICON_BUTTON, FILTER_CHIP, FILTER_CHIP_X, TOOLBAR_BUTTON, DANGER_BUTTON, DATE_INPUT,
  isManager, postApi, toPickerDate, useAffiliateIdFromUrl,
} from "./affiliateUi";


/* "https://www.google.com/search?q=..." -> "google.com/search" */
function shortUrl(url) {
  if (!url) return "";
  try {
    var u = new URL(url);
    return u.hostname.replace(/^www\./, "") + (u.pathname !== "/" ? u.pathname : "");
  } catch (_e) {
    return url;
  }
}

/* A rough browser / device label from the user agent. */
function deviceLabel(ua) {
  if (!ua) return "";
  var device = /mobile|android|iphone|ipad/i.test(ua) ? "Mobile" : "Desktop";
  var browser = /edg\//i.test(ua) ? "Edge" : /chrome|crios/i.test(ua) ? "Chrome" : /firefox|fxios/i.test(ua) ? "Firefox" : /safari/i.test(ua) ? "Safari" : "Other";
  return `${browser} · ${device}`;
}


const AffiliateClicks = () => {

  const { formatDate } = useUtilsStore();
  const { token, addNotification, userDataX } = useCounterStore();
  const permit = useCan("affiliate_clicks"); /* Roles & Permissions */

  const manager = isManager(userDataX);
  const accounts = useAffiliateAccounts(token, manager);

  var [clicksData, setclicksData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", affiliate_id: "", from_date: "", to_date: "", paged: 1, order: "DESC", per_page: 20 });
  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  const requestRef = useRef(0);
  const lastKeyword = useRef(queryPrams.keyword);

  /* ?affiliate_id= from the affiliate page. */
  useAffiliateIdFromUrl((value) => setqueryPrams((q) => ({ ...q, affiliate_id: value, paged: 1 })));


  function fetchPosts() {
    var requestId = ++requestRef.current;
    setloading(true);

    postApi("get_affiliate_clicks", token, queryPrams)
      .then((res) => {
        if (requestId !== requestRef.current) return;
        setclicksData({
          posts: Array.isArray(res?.posts) ? res.posts : [],
          total: parseInt(res?.total) || 0,
          maxPages: parseInt(res?.max_pages) || 1,
        });
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;
        setloading(false);
        addNotification({ type: "error", title: "Clicks not loaded", content: error.message });
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


  function delete_clicks(ids) {
    if (!permit.allowed("delete")) return permit.denied();
    ids = ids ?? selectedRows;
    if (!ids?.length) return;

    setloading(true);
    postApi("delete_affiliate_clicks", token, { ids })
      .then((res) => {
        setloading(false);
        if (res?.success === false) {
          addNotification({ type: "error", title: "Delete failed", content: res?.message ?? "The server did not delete the click(s)." });
          return;
        }
        addNotification({ type: "success", title: "Deleted", content: ids.length === 1 ? `Click #${ids[0]} deleted.` : `${ids.length} clicks deleted.` });
        setselectedRows([]);
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: "error", title: "Delete failed", content: error.message });
      });
  }


  function callbackID(entry, columnIndex) {
    return (
      <td data-label="ID" className="text-left !px-5" key={columnIndex}>
        <div className="flex flex-col gap-0.5 py-3">
          <span className="font-mono text-sm font-semibold text-gray-700">#{entry.id}</span>
          <span className="text-[11px] tabular-nums text-gray-500">{entry.created_at ? formatDate(entry.created_at) : "—"}</span>
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

  function urlCell(url, label, columnIndex) {
    return (
      <td data-label={label} className="!px-5 py-3 text-left" key={columnIndex}>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer nofollow" title={url} className="inline-flex max-w-[260px] items-center gap-1 truncate text-sm text-gray-700 hover:text-blue-600 hover:underline">
            <span className="truncate">{shortUrl(url)}</span> <IconExternalLink size={13} className="shrink-0 text-gray-400" />
          </a>
        ) : (
          <span className="text-sm text-gray-300">{label === "Referrer" ? ("Direct") : "—"}</span>
        )}
      </td>
    );
  }

  function callbackDevice(entry, columnIndex) {
    return (
      <td data-label="Device" className="!px-5 py-3 text-left" key={columnIndex}>
        <span className="text-xs text-gray-500" title={entry.user_agent ?? ""}>{deviceLabel(entry.user_agent) || "—"}</span>
      </td>
    );
  }

  function callbackActions(entry, columnIndex) {
    return (
      <td data-label="Actions" className="text-sm" key={columnIndex}>
        <div className="flex justify-end sm:pr-5">
          <button type="button" className={`${ICON_BUTTON} hover:!text-red-600`} title={("Delete")} {...permit.hide("delete")} onClick={() => {
            if (confirm(`Delete click #${entry.id}?`)) delete_clicks([entry.id]);
          }}>
            <IconTrash size={16} />
          </button>
        </div>
      </td>
    );
  }

  var columns = {
    ...(manager ? { check: { label: ("Check") } } : {}),
    id: { label: ("Click"), callback: callbackID, classes: "px-5 py-2 text-gray-600 w-48" },
    affiliate: { label: ("Affiliate"), callback: callbackAffiliate, classes: "text-left text-gray-600" },
    landing_url: { label: ("Landing page"), callback: (e, i) => urlCell(e.landing_url, "Landing page", i), classes: "text-left text-gray-600" },
    referrer_url: { label: ("Referrer"), callback: (e, i) => urlCell(e.referrer_url, "Referrer", i), classes: "text-left text-gray-600" },
    device: { label: ("Device"), callback: callbackDevice, classes: "text-left text-gray-600 w-36" },
    ...(manager ? { actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" } } : {}),
  };


  const moreFilterCount = [queryPrams.from_date, queryPrams.to_date].filter(Boolean).length;
  const activeFilterCount = moreFilterCount + [queryPrams.affiliate_id].filter(Boolean).length;
  const selectedAccount = accounts.find((a) => String(a.id) === String(queryPrams.affiliate_id));


  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Affiliate clicks")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {clicksData?.total ?? 0} {activeFilterCount > 0 ? ("clicks match the filters") : ("clicks")}
          </p>
        </div>
        <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
          <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
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
            <button type="button" className={DANGER_BUTTON} disabled={loading} {...permit.hide("delete")} onClick={() => {
              if (confirm(`Delete ${selectedRows.length} ${selectedRows.length === 1 ? "click" : "clicks"}? This cannot be undone.`)) delete_clicks();
            }}>
              <IconTrash size={15} /> {("Delete")}
            </button>
          </div>
        )}
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
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
            setqueryPrams({ ...queryPrams, affiliate_id: "", from_date: "", to_date: "", paged: 1 });
          }}>{("Clear all")}</button>
        </div>
      )}

      {clicksData && !loading && activeFilterCount === 0 && !queryPrams.keyword && clicksData.total === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconClick size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("No clicks yet")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("Each visit through an affiliate link is recorded here, with where it landed and where it came from.")}</p>
        </div>
      ) : (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={clicksData}
          itemPath={""}
          onChange={(q) => q && setqueryPrams(q)}
          loading={loading}
          selectedRows={selectedRows}
          onSelectRows={setselectedRows}
          onRefreshRequest={fetchPosts}
        />
      )}
    </div>
  );
};

export default AffiliateClicks;
