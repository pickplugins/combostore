"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useRef } from "react";
import EntriesTable from "../../components/EntriesTable";
import PopoverButton from "../../components/PopoverButton";
import CustomerEdit from "../../components/pages/CustomerEdit";
import { useCounterStore } from '../../store/useCounterStore'
import Image from "next/image";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconEyeShare, IconDotsVertical, IconTrash, IconUserPlus, IconMail, IconPhone, IconRefresh, IconPencil, IconUsers, IconCopy } from "@tabler/icons-react";


/* Same toolbar, select and menu styles as the Riders, Posts and Deliveries screens. */
const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";

const PRIMARY_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer disabled:opacity-60";

const DANGER_BUTTON =
  "inline-flex !h-8 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50";

const ICON_BUTTON =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
  "w-full sm:w-auto !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-8 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FORM_INPUT =
  "!shadow-none !border !border-gray-300 !bg-white transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm text-gray-800";

const FORM_LABEL = "mb-1 block text-xs font-medium text-gray-600";

const LINK = "truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-[#634FE5] hover:underline";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

const EMPTY_NEW_CUSTOMER = { role: "customer", name: "", email: "", mobile: "", registerBy: "mobile" };

/* Customers who sign up by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;

/* Only typing in the search box waits; paging and sorting load at once. */
const SEARCH_DELAY_MS = 400;


function contactDetails(entry) {

  var email = entry?.user_email ?? "";
  var isPhoneEmail = PHONE_EMAIL.test(email);

  return {
    email: isPhoneEmail ? "" : email,
    phone: entry?.billing_phone || (isPhoneEmail ? email.replace(PHONE_EMAIL, "") : ""),
  };
}


function parseJoined(registered) {

  /* WordPress stores `user_registered` in UTC. */
  var date = new Date(`${String(registered).replace(" ", "T")}Z`);

  return !registered || isNaN(date) ? null : date;
}

function timeAgo(date) {
  const seconds = Math.round((Date.now() - date.getTime()) / 1000);
  const units = [["year", 31536000], ["month", 2592000], ["week", 604800], ["day", 86400], ["hour", 3600], ["minute", 60]];
  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) {
      return new Intl.RelativeTimeFormat(undefined, { numeric: "auto" }).format(-Math.round(seconds / size), unit);
    }
  }
  return "just now";
}


function initialsOf(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => Array.from(part)[0])
    .join("")
    .toUpperCase();
}


/* register_user answers with a JSON-encoded string whose `messages` is a list. */
function registerMessages(res) {
  var resObj = res;
  try { resObj = typeof res === "string" ? JSON.parse(res) : res; } catch { resObj = {}; }
  var messages = resObj?.messages;
  var text = Array.isArray(messages) ? messages.join(" ") : typeof messages === "string" ? messages : "";
  return { error: Boolean(resObj?.error), text };
}


/*
  The customers list.

  It waited a full second after every change - a page click or a sort too,
  not just typing - before loading; showed add errors as raw JSON
  (["Email exists"]); asked "Please confirm?" before deleting without saying
  who or that it is permanent; and opened the whole customer page, padding
  and all, inside the Edit drawer.
*/
const Customers = () => {

  const { token, addNotification } = useCounterStore()

  var [queryPrams, setqueryPrams] = useState({ role: "customer", keyword: "", paged: 1, orderby: "registered", order: "DESC", per_page: 20 });

  var [customersData, setcustomersData] = useState({ posts: [], total: 0, maxPages: 1 });
  var [newCustomer, setnewCustomer] = useState(EMPTY_NEW_CUSTOMER);
  var [addOpen, setaddOpen] = useState(0);

  var [loading, setloading] = useState(false);
  var [adding, setadding] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  function onSelectRows(rows) {
    setselectedRows(rows);
  }


  var columns = {
    check: { id: "check", label: ("Check"), },
    id: { id: "id", label: ("Customer"), callback: callbackCustomer, classes: "w-96 text-left text-gray-600" },
    contact: { id: "contact", label: ("Contact"), callback: callbackContact, classes: "text-left text-gray-600" },
    total_orders: { id: "total_orders", label: ("Orders"), callback: callbackOrders, classes: "text-center text-gray-600" },
    registered: { id: "registered", label: ("Joined"), callback: callbackJoined, classes: "text-left text-gray-600" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };


  /* Responses can land out of order (a fast click after a slow search), so
     only the newest request's answer is shown. */
  const requestRef = useRef(0);

  function fetchPosts() {

    if (queryPrams.paged < 0) {
      return;
    }

    var requestId = ++requestRef.current;

    /* This endpoint reads `search` and `number`, and EntriesTable sets `keyword` and `per_page`. */
    var postData = JSON.stringify({
      role: queryPrams.role,
      search: queryPrams.keyword,
      number: queryPrams.per_page,
      paged: queryPrams.paged,
      orderby: queryPrams.orderby,
      order: queryPrams.order,
      with_orders: true,
    });

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
        if (response.status === 403) {
          throw new Error("You are not allowed to list customers.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        if (requestId !== requestRef.current) return;

        /* With no matches the API sends only `noPosts`. */
        setcustomersData({ posts: Array.isArray(res?.posts) ? res.posts : [], total: parseInt(res?.total, 10) || 0, maxPages: parseInt(res?.max_pages, 10) || 1 })
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;

        setloading(false);
        addNotification({ type: 'error', title: 'Customers not loaded', content: error?.message ?? "The list could not be loaded. Please try again." })
      });
  }


  function delete_customers(ids) {

    ids = ids != undefined ? ids : selectedRows;

    if (!ids?.length) {
      return;
    }

    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/delete_users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ids: ids }),
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("You are not allowed to delete these accounts.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setselectedRows([]);

        var deleted = parseInt(res?.deleted, 10);
        var skipped = parseInt(res?.skipped, 10) || 0;
        if (Number.isNaN(deleted)) deleted = ids.length;

        addNotification({
          type: deleted > 0 ? 'success' : 'error',
          title: deleted > 0 ? 'Customers deleted' : 'Nothing deleted',
          content: `${deleted} deleted.${skipped ? ` ${skipped} skipped: administrators, your own account, and (for store managers) staff accounts can't be deleted here.` : ""}`,
        });
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Delete failed', content: error?.message ?? "The customers could not be deleted. Please try again." })
      });
  }


  function add_customer() {

    /* The server picks the login from whichever of these was chosen. */
    var missing = newCustomer.registerBy === "email" ? !newCustomer.email.trim() : !newCustomer.mobile.trim();

    if (missing) {
      addNotification({ type: 'error', title: 'Customer not added', content: newCustomer.registerBy === "email" ? "Enter an email, or register by mobile instead." : "Enter a mobile number, or register by email instead." })
      return;
    }

    setadding(true);

    fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCustomer),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        var { error, text } = registerMessages(res);

        if (error) {
          addNotification({ type: 'error', title: 'Customer not added', content: text || "The customer could not be added." })
        } else {
          addNotification({ type: 'success', title: 'Customer added', content: `${newCustomer.name || "The customer"} was added.` })
          setnewCustomer(EMPTY_NEW_CUSTOMER);
          /* PopoverButton has no open prop; remounting it is how this closes it. */
          setaddOpen(count => count + 1);

          /* The newest-first first page is where they appear. */
          var next = { ...queryPrams, keyword: "", orderby: "registered", order: "DESC", paged: 1 };
          if (JSON.stringify(next) === JSON.stringify(queryPrams)) fetchPosts();
          else setqueryPrams(next);
        }

        setadding(false);
      })
      .catch((error) => {
        setadding(false);
        addNotification({ type: 'error', title: 'Customer not added', content: error?.message ?? "The request failed. Please try again." })
      });
  }


  /* Typing in the search box waits a moment; every other change loads now.
     The whole query used to wait a full second, so paging felt stuck. */
  const lastKeyword = useRef(queryPrams.keyword);

  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. */
    if (!token) {
      return;
    }

    var typing = queryPrams.keyword !== lastKeyword.current;
    lastKeyword.current = queryPrams.keyword;

    if (!typing) {
      fetchPosts();
      return;
    }

    const handler = setTimeout(fetchPosts, SEARCH_DELAY_MS);
    return () => clearTimeout(handler);

  }, [queryPrams, token]);


  function onChangeQueryPrams(nextPrams) {

    if (!nextPrams) {
      return;
    }

    /* A new search starts from the first page, or a short result looks empty. */
    var searchChanged = nextPrams.keyword !== queryPrams.keyword;

    setqueryPrams(searchChanged ? { ...nextPrams, paged: 1 } : nextPrams)
  }

  function onRefreshRequest() {
    fetchPosts();
  }

  function copy(value, what) {
    navigator.clipboard?.writeText(value)
      .then(() => addNotification({ type: 'success', title: `${what} copied`, content: value }))
      .catch(() => { });
  }

  function confirmDelete(entry) {
    var name = entry?.display_name || entry?.user_login || `#${entry?.id}`;
    var orders = Number(entry?.total_orders ?? 0);

    /* Orders live in their own table and stay; tickets and wishlists are posts
       the customer authored, which WordPress moves to the trash with them. */
    if (confirm(`Delete ${name}? Their account is removed permanently and their support tickets and wishlists go to the trash.${orders ? ` Their ${orders} ${orders === 1 ? "order stays" : "orders stay"} in Orders.` : ""}`)) {
      delete_customers([entry?.id]);
    }
  }


  /* ---------------- cells ---------------- */

  function callbackCustomer(entry, columnIndex) {

    var name = entry?.display_name || entry?.user_login || ("Unknown customer");
    var hasSeparateLogin = entry?.user_login && entry.user_login !== name;

    return (
      <td data-label="Customer" className="!px-5 py-3 text-left"
        key={columnIndex}>

        <div className="flex min-w-0 flex-1 items-center gap-3">

          <Link href={`/dashboard/customers/${entry?.id}`} className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-500">
            {entry?.thumbnail?.src ? (
              <Image unoptimized className="h-10 w-10 object-cover" src={entry.thumbnail.src} width={80} height={80} alt={``} />
            ) : (
              <span>{initialsOf(name) || "?"}</span>
            )}
          </Link>

          <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
            <Link className={LINK} href={`/dashboard/customers/${entry?.id}`}>
              {name}
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
              {hasSeparateLogin && (
                <span className="font-mono text-[11px]">{entry.user_login}</span>
              )}

              <PopoverButton buttonLabel={"Edit"} buttonIcon={<IconPencil size={13} />} title={`Edit ${name}`} drawer={"right"} buttonClass={`inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-900 cursor-pointer`}>
                <div className="p-5 bg-gray-50 text-left">
                  <CustomerEdit id={entry?.id} variant="drawer" />
                </div>
              </PopoverButton>
            </div>
          </div>
        </div>
      </td>
    );
  }


  function callbackContact(entry, columnIndex) {

    var { email, phone } = contactDetails(entry);

    return (
      <td data-label="Contact" className="!px-5 py-3 text-left"
        key={columnIndex}>

        {!email && !phone && EMPTY}

        {(email || phone) && (
          <div className="flex min-w-0 max-w-[260px] flex-col gap-1 text-sm text-gray-600">
            {email && (
              <div className="group flex min-w-0 items-center gap-1.5">
                <a href={`mailto:${email}`} title={email} className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-gray-900">
                  <IconMail size={14} className="shrink-0 text-gray-400" />
                  <span className="truncate">{email}</span>
                </a>
                <button type="button" title={("Copy email")} onClick={() => copy(email, "Email")} className="shrink-0 text-gray-300 opacity-0 transition hover:text-gray-700 group-hover:opacity-100 focus:opacity-100">
                  <IconCopy size={13} />
                </button>
              </div>
            )}
            {phone && (
              <div className="group flex items-center gap-1.5">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-1.5 tabular-nums transition-colors hover:text-gray-900">
                  <IconPhone size={14} className="shrink-0 text-gray-400" />
                  {phone}
                </a>
                <button type="button" title={("Copy phone")} onClick={() => copy(phone, "Phone")} className="shrink-0 text-gray-300 opacity-0 transition hover:text-gray-700 group-hover:opacity-100 focus:opacity-100">
                  <IconCopy size={13} />
                </button>
              </div>
            )}
          </div>
        )}
      </td>
    );
  }


  function callbackOrders(entry, columnIndex) {

    var count = Number(entry?.total_orders ?? 0);
    var name = entry?.display_name || entry?.user_login || "";

    /* Repeat buyers stand out from one-off and never-ordered accounts. */
    var tone = count > 1
      ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
      : count === 1
        ? "bg-sky-50 text-sky-700 hover:bg-sky-100"
        : "bg-gray-100 text-gray-500";
    var badge = `inline-flex min-w-8 items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums transition-colors ${tone}`;

    return (
      <td data-label="Orders" className="!px-5 py-3 text-center"
        key={columnIndex}>
        <div className="flex justify-center">
          {/* Opens Orders filtered to this customer (Orders reads ?customer=). */}
          {count > 0 ? (
            <Link className={badge}
              title={`${count > 1 ? "Repeat customer" : "One order"} - view ${count === 1 ? "their order" : `their ${count} orders`}`}
              href={`/dashboard/orders?customer=${entry?.id}${name ? `&customer_name=${encodeURIComponent(name)}` : ""}`}>
              {count}
            </Link>
          ) : (
            <span className={badge} title="No orders yet">{count}</span>
          )}
        </div>
      </td>
    );
  }


  function callbackJoined(entry, columnIndex) {

    var date = parseJoined(entry?.registered);

    return (
      <td data-label="Joined" className="!px-5 py-3 text-left"
        key={columnIndex}>
        {date ? (
          <div className="flex flex-col">
            <span className="whitespace-nowrap text-sm tabular-nums text-gray-700">{date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}</span>
            <span className="whitespace-nowrap text-xs text-gray-500" title={date.toLocaleString()}>{timeAgo(date)}</span>
          </div>
        ) : EMPTY}
      </td>
    );
  }


  function callbackActions(entry, columnIndex) {

    return (
      <td data-label="Actions" className="!px-5 py-3 text-sm"
        key={columnIndex}>
        <div className="flex items-center justify-end gap-1 text-sm">

          <PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">
              <div className="flex flex-col gap-0.5">
                <Link className={MENU_ITEM} href={`/dashboard/customers/${entry?.id}`}>
                  <IconEyeShare size={16} /> {("View")}
                </Link>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => confirmDelete(entry)}>
                  <IconTrash size={16} /> {("Delete")}
                </div>
              </div>
            </div>

          </PopoverButton>

        </div>
      </td>
    );
  }


  var total = customersData?.total ?? 0;
  var searching = Boolean(queryPrams?.keyword);

  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Customers")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {total} {total === 1 ? ("customer") : ("customers")}
            {searching ? ` matching "${queryPrams.keyword}"` : ""}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>

          <PopoverButton
            key={addOpen}
            enableCloseBtn={false}
            buttonLabel={("Add Customer")}
            buttonIcon={<IconUserPlus size={16} />}
            title={"Add Customer"}
            position={"bottomRight"}
            buttonClass={PRIMARY_BUTTON}
            popoverClass={`absolute z-[999] mt-2 w-[min(440px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

            <div className="p-4">
              <div className="mb-3 text-sm font-semibold text-gray-900">{("New customer")}</div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="new-customer-name" className={FORM_LABEL}>{("Name")}</label>
                  <input
                    id="new-customer-name"
                    type="text"
                    placeholder="John Doe"
                    className={FORM_INPUT}
                    value={newCustomer.name}
                    onChange={(ev) => setnewCustomer({ ...newCustomer, name: ev.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="new-customer-email" className={FORM_LABEL}>
                    {("Email")} {newCustomer.registerBy === "email" && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id="new-customer-email"
                    type="email"
                    placeholder="john@example.com"
                    className={FORM_INPUT}
                    value={newCustomer.email}
                    onChange={(ev) => setnewCustomer({ ...newCustomer, email: ev.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="new-customer-mobile" className={FORM_LABEL}>
                    {("Mobile")} {newCustomer.registerBy === "mobile" && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id="new-customer-mobile"
                    type="tel"
                    className={FORM_INPUT}
                    value={newCustomer.mobile}
                    onChange={(ev) => setnewCustomer({ ...newCustomer, mobile: ev.target.value })}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="new-customer-register-by" className={FORM_LABEL}>{("Register by")}</label>
                  <select id="new-customer-register-by" className={FORM_INPUT} value={newCustomer.registerBy}
                    onChange={(ev) => setnewCustomer({ ...newCustomer, registerBy: ev.target.value })}>
                    <option value={`mobile`}>{("Mobile (they sign in with their number)")}</option>
                    <option value={`email`}>{("Email (they sign in with their email)")}</option>
                  </select>
                </div>

                <button
                  type="button"
                  disabled={adding}
                  onClick={() => add_customer()}
                  className={`${PRIMARY_BUTTON} sm:col-span-2 mt-1 justify-center`}>
                  {adding ? "Please wait…" : ("Create customer")}
                </button>
              </div>
            </div>

          </PopoverButton>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">

        <div className="flex flex-wrap gap-2">
          <select aria-label="Sort" className={FILTER_SELECT} value={queryPrams.order} onChange={ev => {
            setqueryPrams({ ...queryPrams, orderby: "registered", order: ev.target.value, paged: 1 });
          }}>
            <option value="DESC">{("Newest first")}</option>
            <option value="ASC">{("Oldest first")}</option>
          </select>
        </div>

        {selectedRows?.length > 0 && (
          <div className="flex items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
            <span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
            <button type="button" className="!h-8 rounded-md px-2 text-sm text-gray-500 hover:bg-white hover:text-gray-800" onClick={() => setselectedRows([])}>{("Clear")}</button>
            <button type="button" className={DANGER_BUTTON} disabled={loading} onClick={() => {
              if (confirm(`Delete ${selectedRows.length} ${selectedRows.length === 1 ? "customer" : "customers"}? Their accounts are removed permanently and their support tickets and wishlists go to the trash. Their orders stay in Orders.`)) {
                delete_customers();
              }
            }}>
              <IconTrash size={15} /> {("Delete")}
            </button>
          </div>
        )}
      </div>


      {!loading && !searching && total === 0 && (customersData?.posts ?? []).length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconUsers size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("No customers yet")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("Customers appear here when they sign up or place an order. You can also add one with Add Customer.")}</p>
        </div>
      ) : (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={customersData}
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

export default Customers;
