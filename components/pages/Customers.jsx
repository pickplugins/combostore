"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import EntriesTable from "../../components/EntriesTable";
import PopoverButton from "../../components/PopoverButton";
import CustomerEdit from "../../components/pages/CustomerEdit";
import { useCounterStore } from '../../store/useCounterStore'
import Image from "next/image";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconEyeShare, IconDotsVertical, IconTrash, IconUserPlus, IconMail, IconPhone } from "@tabler/icons-react";


const ICON_BUTTON =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
  "xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FORM_INPUT =
  "!shadow-none !border !border-gray-300 !bg-white transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm text-gray-800";

const FORM_LABEL = "mb-1 block text-xs font-medium text-gray-600";

const EMPTY = <span className="text-sm text-gray-300">—</span>;

const EMPTY_NEW_CUSTOMER = { role: "customer", name: "", email: "", mobile: "", registerBy: "mobile" };

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


function initialsOf(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => Array.from(part)[0])
    .join("")
    .toUpperCase();
}


const Customers = () => {

  const { token, addNotification } = useCounterStore()

  var [queryPrams, setqueryPrams] = useState({ role: "customer", keyword: "", paged: 1, orderby: "registered", order: "DESC", per_page: 20 });

  var [customersData, setcustomersData] = useState({ posts: [], total: 0, maxPages: 1 });
  var [newCustomer, setnewCustomer] = useState(EMPTY_NEW_CUSTOMER);

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


  async function delete_customers(ids) {

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
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        response.json().then(() => {
          setselectedRows([]);
          addNotification({ type: 'success', title: 'Customers deleted', content: `${ids.length} customer(s) deleted.` })
          fetchPosts();
        });
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Delete failed', content: "The customers could not be deleted. Please try again." })
      });
  }


  async function add_customer() {

    setadding(true);

    fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        response.json().then((res) => {

          /* register_user answers with a JSON-encoded string. */
          var resObj = typeof res === "string" ? JSON.parse(res) : res;

          if (resObj?.error) {
            addNotification({ type: 'error', title: 'Customer not added', content: `Sorry, the customer could not be added. ${JSON.stringify(resObj?.messages ?? "")}` })
          } else {
            addNotification({ type: 'success', title: 'Customer added', content: "Customer added successfully." })
            setnewCustomer(EMPTY_NEW_CUSTOMER);
            fetchPosts();
          }

          setadding(false);
        });
      })
      .catch((_error) => {
        setadding(false);
        addNotification({ type: 'error', title: 'Customer not added', content: "The request failed. Please try again." })
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

          <Link href={`/dashboard/customers/${entry?.id}`} className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-500">
            {entry?.thumbnail?.src ? (
              <Image unoptimized className="h-10 w-10 object-cover" src={entry.thumbnail.src} width={80} height={80} alt={``} />
            ) : (
              <span>{initialsOf(name) || "?"}</span>
            )}
          </Link>

          <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
            <Link className="truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/customers/${entry?.id}`}>
              {name}
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
              {hasSeparateLogin && (
                <span className="font-mono text-[11px]">{entry.user_login}</span>
              )}

              <PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit Customer"} drawer={"right"} buttonClass={`inline-flex items-center rounded-md px-1.5 py-0.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>

                <div className="p-5 bg-gray-50 text-left">
                  <CustomerEdit id={entry?.id} />
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
          <div className="flex min-w-0 flex-col gap-1 text-sm text-gray-600">
            {email && (
              <a href={`mailto:${email}`} title={email} className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-gray-900">
                <IconMail size={14} className="shrink-0 text-gray-400" />
                <span className="truncate">{email}</span>
              </a>
            )}
            {phone && (
              <a href={`tel:${phone}`} className="inline-flex items-center gap-1.5 tabular-nums transition-colors hover:text-gray-900">
                <IconPhone size={14} className="shrink-0 text-gray-400" />
                {phone}
              </a>
            )}
          </div>
        )}
      </td>

    );
  }


  function callbackOrders(entry, columnIndex) {

    var count = Number(entry?.total_orders ?? 0);

    return (
      <td data-label="Orders" className="!px-5 py-3 text-center"
        key={columnIndex}>
        <div className="flex justify-center">
          {/* Repeat buyers stand out from one-off and never-ordered accounts. */}
          <span className={`inline-flex min-w-8 items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums ${count > 1
            ? "bg-emerald-50 text-emerald-700"
            : count === 1
              ? "bg-sky-50 text-sky-700"
              : "bg-gray-100 text-gray-500"
            }`}>
            {count}
          </span>
        </div>
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

          <PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">
              <div className="flex flex-col gap-0.5">
                <Link className={MENU_ITEM} href={`/dashboard/customers/${entry?.id}`}>
                  <IconEyeShare size={16} /> View
                </Link>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                  if (confirm("Please confirm?")) {
                    delete_customers([entry?.id]);
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


  return (
    <div className="page-shell">

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Customers")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {customersData?.total ?? 0} {("customers")}
          </p>
        </div>

        <PopoverButton
          enableCloseBtn={false}
          buttonLabel={("Add Customer")}
          buttonIcon={<IconUserPlus size={16} />}
          title={"Add Customer"}
          position={"bottomRight"}
          buttonClass={`inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] cursor-pointer`}
          popoverClass={`absolute z-[999] mt-2 w-[360px] sm:w-[440px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

          <div className="p-4">
            <div className="mb-3 text-sm font-semibold text-gray-900">New customer</div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="new-customer-name" className={FORM_LABEL}>Name</label>
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
                <label htmlFor="new-customer-email" className={FORM_LABEL}>Email</label>
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
                <label htmlFor="new-customer-mobile" className={FORM_LABEL}>Mobile</label>
                <input
                  id="new-customer-mobile"
                  type="tel"
                  className={FORM_INPUT}
                  value={newCustomer.mobile}
                  onChange={(ev) => setnewCustomer({ ...newCustomer, mobile: ev.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="new-customer-register-by" className={FORM_LABEL}>Register by</label>
                <select id="new-customer-register-by" className={FORM_INPUT} value={newCustomer.registerBy}
                  onChange={(ev) => setnewCustomer({ ...newCustomer, registerBy: ev.target.value })}>
                  <option value={`mobile`}>Mobile</option>
                  <option value={`email`}>Email</option>
                </select>
              </div>

              <button
                type="button"
                disabled={adding}
                onClick={() => add_customer()}
                className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] px-4 py-2 text-sm font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-60 cursor-pointer">
                {adding ? "Please wait…" : ("Create customer")}
              </button>
            </div>
          </div>

        </PopoverButton>
      </div>

      <div className="flex flex-wrap justify-between gap-3">

        <div className="flex flex-wrap gap-2">
          <select className={FILTER_SELECT} value={queryPrams.order} onChange={ev => {
            setqueryPrams({ ...queryPrams, orderby: "registered", order: ev.target.value, paged: 1 });
          }}>
            <option value="DESC">{("Newest first")}</option>
            <option value="ASC">{("Oldest first")}</option>
          </select>
        </div>

        <div className="flex gap-3 items-center justify-end">
          {selectedRows?.length > 0 && (
            <div
              className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
              onClick={() => {
                if (confirm(`Delete ${selectedRows.length} customer(s)?`)) {
                  delete_customers();
                }
              }}>
              <IconTrash size={16} />
              {("Delete Customers")} ({selectedRows.length})
            </div>
          )}
        </div>
      </div>


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
    </div>
  );
};

export default Customers;
