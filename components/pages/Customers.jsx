"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import PopoverButton from "../../components/PopoverButton";
import CustomerEdit from "../../components/pages/CustomerEdit";
import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconEdit, IconEyeShare } from "@tabler/icons-react";


const ICON_BUTTON =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

/* Customers who sign up by phone get a generated `<phone>@mo.lo` address. */
const PHONE_EMAIL = /@mo\.lo$/i;


function contactDetails(entry) {

  var email = entry?.user_email ?? "";
  var isPhoneEmail = PHONE_EMAIL.test(email);

  return {
    email: isPhoneEmail ? "" : email,
    phone: entry?.billing_phone || (isPhoneEmail ? email.replace(PHONE_EMAIL, "") : ""),
  };
}


function formatJoined(registered) {

  /* WordPress stores `user_registered` in UTC. */
  var date = new Date(`${String(registered).replace(" ", "T")}Z`);

  if (!registered || isNaN(date)) {
    return "";
  }

  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}


const Customers = () => {

  const { token, addNotification } = useCounterStore()

  var [queryPrams, setqueryPrams] = useState({ role: "customer", keyword: "", paged: 1, orderby: "registered", order: "DESC", per_page: 20 });

  var [customersData, setcustomersData] = useState({ posts: [], total: 0, maxPages: 1 });

  var [loading, setloading] = useState(false);


  /* No `check` column: this page has no bulk action. */
  var columns = {
    id: { id: "id", label: ("Customer"), callback: callbackCustomer, classes: "w-96 text-left text-gray-600" },
    contact: { id: "contact", label: ("Contact"), callback: callbackContact, classes: "text-left text-gray-600" },
    total_orders: { id: "total_orders", label: ("Orders"), callback: callbackOrders, classes: "text-center text-gray-600" },
    registered: { id: "registered", label: ("Joined"), callback: callbackJoined, classes: "text-center text-gray-600" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },
  };


  async function fetchPosts() {

    if (queryPrams.paged < 0) {
      return;
    }

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

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {

            /* With no matches the API sends only `noPosts`. */
            setcustomersData({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 })
            setloading(false);
          });
        }
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Customers not loaded', content: "The list could not be loaded. Please try again." })
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


  function onChangeQueryPrams(nextPrams) {

    if (!nextPrams) {
      return;
    }

    /* A new search starts from the first page, or a short result looks empty. */
    var searchChanged = nextPrams.keyword !== queryPrams.keyword;

    setqueryPrams(searchChanged ? { ...nextPrams, paged: 1 } : nextPrams)
  }

  function onRefreshRequest(rows) {
    fetchPosts();
  }


  function callbackCustomer(entry, columnIndex) {

    var name = entry?.display_name || entry?.user_login || ("Unknown customer");
    var hasSeparateLogin = entry?.user_login && entry.user_login !== name;

    return (
      <td data-label="Customer" className="!px-5 py-3 text-left"
        key={columnIndex}>

        <div className="flex min-w-0 flex-1 items-center gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold uppercase text-gray-500">
            {Array.from(name)[0]}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
            <Link className="text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/customers/${entry?.id}`}>
              {name}
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
              {hasSeparateLogin && (
                <span>{entry.user_login}</span>
              )}
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
          <div className="flex min-w-0 flex-col gap-1">
            {email && (
              <div className="truncate text-sm text-gray-700" title={email}>{email}</div>
            )}
            {phone && (
              <div className="truncate text-xs tabular-nums text-gray-500">{phone}</div>
            )}
          </div>
        )}
      </td>

    );
  }


  function callbackOrders(entry, columnIndex) {

    return (
      <td data-label="Orders" className="!px-5 py-3 text-center"
        key={columnIndex}>
        <span className="text-sm font-semibold tabular-nums text-gray-900">{entry?.total_orders ?? 0}</span>
      </td>

    );
  }


  function callbackJoined(entry, columnIndex) {

    var joined = formatJoined(entry?.registered);

    return (
      <td data-label="Joined" className="!px-5 py-3 text-center"
        key={columnIndex}>
        {joined ? <span className="whitespace-nowrap text-sm tabular-nums text-gray-600">{joined}</span> : EMPTY}
      </td>

    );
  }


  function callbackActions(entry, columnIndex) {

    return (
      <td data-label="Actions" className="!px-5 py-3 text-sm"
        key={columnIndex}>
        <div className="flex items-center justify-end gap-1 text-sm">

          <PopoverButton buttonLabel={" "} buttonIcon={<IconEdit size={18} />} title={"Edit Customer"} drawer={"right"} buttonClass={ICON_BUTTON}>

            <div className="p-5 bg-gray-50 text-left">
              <CustomerEdit id={entry?.id} />
            </div>

          </PopoverButton>

          <Link title="View customer" aria-label="View customer" className={ICON_BUTTON} href={`/dashboard/customers/${entry?.id}`}>
            <IconEyeShare size={18} />
          </Link>

        </div>
      </td>

    );
  }


  return (
    <div className="page-shell">

      {/* Page heading: this screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Customers")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {customersData?.total ?? 0} {("customers")}
          </p>
        </div>
      </div>


      <EntriesTable
        queryPrams={queryPrams}
        columns={columns}
        entries={customersData}
        itemPath={""}
        onChange={onChangeQueryPrams}
        loading={loading}
        selectedRows={[]}
        onSelectRows={() => { }}
        onRefreshRequest={onRefreshRequest}

      />
    </div>
  );
};

export default Customers;
