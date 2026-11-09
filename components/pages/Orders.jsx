"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

import EntriesTable from "../../components/EntriesTable";
import { loadOrdersQuery, saveOrdersQuery } from "../../lib/ordersQuery";
import { useState, useEffect, useRef } from "react";
import Spinner from "../../components/Spinner";
import { IconFilter, IconFileDollar, IconEyeShare, IconTrash, IconCopy, IconDotsVertical, IconPackages, IconX, IconEdit, IconPrinter, IconListNumbers, IconMapDollar, IconListDetails, IconNotes, IconPlus, IconRefresh, IconReceipt } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../../components/PopoverButton';
import FraudCheck from '../../components/FraudCheck';
import OrderCreate from '../../components/OrderCreate';
import OrderBulkUpdate from '../../components/OrderBulkUpdate';
import ToggleContent from '../../components/ToggleContent';
import OrderCourier from '../../components/OrderCourier';
import SendToCourier from '../../components/SendToCourier';
import CheckPhoneFraud from '../../components/CheckPhoneFraud';
import OrderItemsList from '../../components/OrderItemsList';
import UsersPicker from '../../components/shop-elements/UsersPicker';
import DropDown from '../../components/DropDown';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';
import OrdersReceipt from '../../components/pages/OrdersReceipt';
import OrdersProductList from '../../components/pages/OrdersProductList';
import OrdersOverview from '../../components/pages/OrdersOverview';
import OrderEdit from '../../components/pages/OrderEdit';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


/* Status pills, previously 17 hand-written spans with saturated fills and
   inconsistent padding. Keys and labels match the old markup exactly. */
const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

const ORDER_STATUS_BADGES = {
  /* `confirmed` is one of the store's order statuses (orderStatusArgs) but had
     no badge, so confirmed orders showed an empty Status cell. */
  confirmed: { label: "Confirmed", classes: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  completed: { label: "Completed", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  incomplete: { label: "Incomplete", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
  scheduled: { label: "Scheduled", classes: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200" },
  cancelled: { label: "Cancelled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  canceled: { label: "Canceled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  refunded: { label: "Refunded", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  hold: { label: "Hold", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
  delivered: { label: "Delivered", classes: "bg-lime-50 text-lime-700 ring-lime-200" },
};

const PAYMENT_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  paid: { label: "Paid", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  delayed: { label: "Delayed", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  due: { label: "Due", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
  partial: { label: "Partial", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  refunded: { label: "Refunded", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

/* Unknown statuses still get a neutral pill instead of an empty cell. */
const FALLBACK_BADGE_CLASSES = "bg-gray-100 text-gray-600 ring-gray-200";
const titleCase = (value) => String(value || "").replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/* Same as the Products screen. */
const ICON_BUTTON =
  "inline-flex h-8 min-w-8 px-1.5 items-center justify-center rounded-lg border border-transparent !py-0 text-gray-400 !shadow-none transition-colors hover:border-gray-300 hover:!bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
  "xl:w-48 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const FILTER_CHIP =
  "flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700";

const FILTER_CHIP_X =
  "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800";

const MENU_ITEM =
  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const DATE_INPUT =
  "w-44 !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 focus:!border-[#634FE5] focus:!outline-none";

/* The query keeps dates as "yyyy-MM-dd HH:mm:ss" strings (that is what is saved
   and sent); react-datepicker needs a Date. */
function toPickerDate(value) {
  if (!value) return null;
  var date = new Date(String(value).replace(" ", "T"));
  return isNaN(date) ? null : date;
}

const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer";

/*  because the global `button` rule in globals.css is unlayered and
   otherwise wins (grey text, border) - same as the Products screen. */
const PRIMARY_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-0 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-50 cursor-pointer";


const Orders = (props) => {



  const router = useRouter();

  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, appData, notifications, addNotification, userDataX, setUserDataX, paymentGateways, privacyMode, orderStatusArgs, paymentStatusArgs, settings } = useCounterStore()


  var [newUserPrams, setnewUserPrams] = useState({ role: "customer", name: "", email: "", mobile: "" });

  var [neworderData, setnewOrderData] = useState({ cartItems: [], payment_method: '', payment_status: '' });

  var [ordersData, setordersData] = useState(null);
  var [selectedOrdersData, setselectedOrdersData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: '', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });
  var [courierPrams, setcourierPrams] = useState({ courier: "" });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);
  var [sumData, setsumData] = useState(null);
  var [showProfit, setshowProfit] = useState(true);

  const requestRef = useRef(0);

  /* Remembered on this browser, like the saved filters. Read after mount: the
     server has no storage, and the first render must match its HTML. */
  useEffect(() => {
    try {
      if (window.localStorage.getItem("orders:showProfit") === "0") setshowProfit(false);
    } catch { }
  }, []);

  function toggleProfit() {
    var next = !showProfit;
    setshowProfit(next);
    try { window.localStorage.setItem("orders:showProfit", next ? "1" : "0"); } catch { }
  }


  function onSelectRows(rows) {


    const matchedItems = ordersData?.posts?.filter(post =>
      rows.includes(post.id)
    );

    setselectedOrdersData(matchedItems);

    setselectedRows(rows);
  }



  var columns = {
    check: { label: ("Check"), },
    id: { label: ("ID"), callback: callbackTitle, classes: "  px-5 py-2 text-gray-600 w-64" },
    billing_name: { label: ("Customer"), callback: callbackUserName, classes: "text-left text-gray-600 w-48" },
    status: { label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600 w-32" },
    total_amount: { label: "Total", callback: callbackTotal, classes: "text-left text-gray-600 w-64" },
    payment_status: { label: ("Payment"), callback: callbackPaymentStatus, classes: "text-left text-gray-600 w-48" },

    // discount_amount: { label: "Discount", callback: callbackDiscount, classes: "text-left text-gray-600" },
    //phone: { label: "Phone", callback: callbackPhone, classes: "text-left text-gray-600" },
    // payment_method: { label: "Payment Method", callback: callbackPaymentMethod, classes: "text-center text-gray-600" },
    //courier_name: { label: ("Courier"), callback: callbackCourier, classes: "text-center pr-2 text-gray-600" },
    //items: { label: "Items", callback: callbackItems, classes: "text-center text-gray-600" },

    //updated_at: { label: ("Datetime"), callback: callbackFormatDate, classes: "text-center pr-2 text-gray-600" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },

  };








  /*
    One order's total, the way its row shows it: subtotal plus delivery, less
    discount and advance payment. Tax is not part of it (OrderUpdate does not
    add it to totals either). The page summary used the stored total_amount
    instead, and took discount, tax and delivery off every order's net profit
    a second time, so it never matched the rows above it.
  */
  function rowTotal(entry) {
    return (parseFloat(entry?.subtotal_amount || 0) + parseFloat(entry?.shipping_amount || 0))
      - (parseFloat(entry?.discount_amount || 0) + parseFloat(entry?.advance_payment || 0));
  }

  function sumOrderAmounts(orders) {


    if (!orders || !Array.isArray(orders)) {
      return {
        subtotal_amount: 0,
        total_amount: 0,
        discount_amount: 0,
        tax_amount: 0,
        advance_payment: 0,
        shipping_amount: 0,
        gross_profit: 0,
        net_profit: 0
      };
    }

    return orders.reduce((acc, post) => {
      acc.total_amount += rowTotal(post) || 0;
      acc.subtotal_amount += parseFloat(post.subtotal_amount) || 0;
      acc.discount_amount += parseFloat(post.discount_amount) || 0;
      acc.tax_amount += parseFloat(post.tax_amount) || 0;
      acc.advance_payment += parseFloat(post.advance_payment) || 0;
      acc.shipping_amount += parseFloat(post.shipping_amount) || 0;
      acc.gross_profit += parseFloat(post.gross_profit) || 0;
      acc.net_profit += parseFloat(post.net_profit) || 0;


      return acc;
    }, {
      subtotal_amount: 0,
      total_amount: 0,
      discount_amount: 0,
      tax_amount: 0,
      advance_payment: 0,
      shipping_amount: 0,
      gross_profit: 0,
      net_profit: 0
    });
  }


  /* update_stock() and its "Add history" toolbar button are gone: the button
     posted to add_stock_histoy, which ignores the request and always removes
     2 units from product 10018 / variation 352 - leftover test code that
     changed real stock on every click. */

  function delete_orders(ids) {


    if (!token) {
      //throw new Error("No token found");
    }

    if (queryPrams.paged < 0) {
      return;
    }

    ids = ids ? ids : selectedRows;

    if (ids.length == 0) {

      addNotification({ type: 'success', title: 'Select rows first', content: "Select rows first" })
      return;
    }

    var postData = {
      ids: ids,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: postData,
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("You are not allowed to delete orders.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);

        if (res?.success === false) {
          addNotification({ type: 'error', title: 'Delete failed', content: "The server did not delete the order(s)." })
          return;
        }

        addNotification({ type: 'success', title: 'Deleted', content: ids.length === 1 ? `Order #${ids[0]} deleted.` : `${ids.length} orders deleted.` })
        setselectedRows([]);
        setselectedOrdersData(null);
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Delete failed', content: error?.message ?? "Could not delete the selected order(s)." })
      });
  }







  function duplicate_order(id) {


    if (!token) {
      //throw new Error("No token found");
    }

    if (queryPrams.paged < 0) {
      return;
    }

    id = id;

    if (id.length == 0) {

      addNotification({ type: 'success', title: 'Select rows first', content: "Select rows first" })
      return;
    }

    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/duplicate_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: postData,
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("You are not allowed to duplicate orders.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);

        /* duplicate_order answers { success, id } with the new order's id. */
        if (!res?.success) {
          addNotification({ type: 'error', title: 'Duplicate failed', content: `Could not duplicate order #${id}.` })
          return;
        }

        addNotification({ type: 'success', title: 'Duplicated', content: res?.id ? `Order #${id} copied as #${res.id}. It is at the top of the newest-first list.` : `Order #${id} duplicated.` })
        setselectedRows([]);
        fetchPosts();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Duplicate failed', content: error?.message ?? `Could not duplicate order #${id}.` })
      });
  }

  function create_order(args) {

    var redirect = args?.redirect;

    setloading(true)



    var postData = JSON.stringify(neworderData);

    fetch(serverUrl + "wp-json/combo-store/v2/create_order", {
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
        setloading(false)

        /* A failure used to say "Order update failed" and still go to
           /dashboard/orders/undefined. */
        if (res?.status !== 'success' || !res?.order_id) {
          addNotification({ type: 'error', title: 'Order not created', content: res?.message ?? "The order could not be created." })
          return;
        }

        addNotification({ type: 'success', title: 'Order created', content: `Order #${res.order_id} created.` })

        if (redirect) {
          router.push(`/dashboard/orders/${res.order_id}`);
          return;
        }

        fetchPosts()
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Order not created', content: "The request failed. Please try again." })
      });

  }

  function fetchPosts() {




    // if (!token) {
    // 	//throw new Error("No token found");
    // }


    if (queryPrams.paged < 0) {
      return;
    }


    var postData = JSON.stringify(queryPrams);
    var requestId = ++requestRef.current;
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_orders", {
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

        /* With no matches the API can leave out `posts`, `total` and `max_pages`. */
        var orders = Array.isArray(res?.posts) ? res.posts : [];
        var total = parseInt(res?.total) || 0;
        var max_pages = parseInt(res?.max_pages) || 1;

        setordersData({ posts: orders, total: total, maxPages: max_pages })
        setsumData(sumOrderAmounts(orders));
        setloading(false);
      })
      .catch((error) => {
        if (requestId !== requestRef.current) return;

        setloading(false);
        addNotification({ type: 'error', title: 'Orders not loaded', content: error?.message ?? "The list could not be loaded. Please try again." })
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
    const saved = loadOrdersQuery();

    /*
      A link can open this list for one customer (the Orders count on the
      Customers screen): /dashboard/orders?customer=<id>&customer_name=<name>.
      It wins over the saved query, and the other filters are cleared so the
      list really is all of their orders. The parameters are then taken out of
      the address, so clearing the customer chip is not undone by a reload.
    */
    const params = new URLSearchParams(window.location.search);
    const linkedCustomer = parseInt(params.get("customer"), 10);

    if (linkedCustomer > 0) {
      setqueryPrams((previous) => ({
        ...previous,
        ...(saved ?? {}),
        keyword: "", status: "", payment_method: "", payment_status: "", billing_phone: "",
        start_date: "", end_date: "", first_date: "", last_date: "", from_date: "", to_date: "", product: {},
        customer: { id: linkedCustomer, display_name: params.get("customer_name") || `Customer #${linkedCustomer}` },
        paged: 1,
      }));

      params.delete("customer");
      params.delete("customer_name");
      const rest = params.toString();
      window.history.replaceState(window.history.state, "", window.location.pathname + (rest ? `?${rest}` : ""));
    } else if (saved) {
      setqueryPrams((previous) => ({ ...previous, ...saved }));
    }

    setqueryRestored(true);
  }, []);

  /* Saved straight away, not debounced: an order can be opened within the delay. */
  useEffect(() => {
    if (queryRestored) {
      saveOrdersQuery(queryPrams);
    }
  }, [queryRestored, queryPrams]);

  /*
    Typing in the search box waits a moment so each keystroke is not its own
    request; every other change (a page, a filter, the sort) loads at once.
    The whole query used to wait, so paging felt stuck for half a second.
    Only the newest request's answer is shown (requestRef in fetchPosts).
  */
  const lastKeyword = useRef(queryPrams.keyword);

  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. */
    if (!queryRestored || !token) {
      return;
    }

    var typing = queryPrams.keyword !== lastKeyword.current;
    lastKeyword.current = queryPrams.keyword;

    if (!typing) {
      fetchPosts();
      return;
    }

    const handler = setTimeout(fetchPosts, 400);
    return () => clearTimeout(handler);

  }, [queryRestored, queryPrams, token]);


  function onChangeQueryPrams(queryPrams) {


    if (queryPrams) {
      setqueryPrams(queryPrams)
      //fetchPosts();
    }

  }

  function onRefreshRequest(rows) {
    fetchPosts();
  }

  useEffect(() => {
    //checkUser();
  }, []);



  function callbackFormatDate(entry, columnIndex) {




    return (
      <td data-label="Datetime" className="!px-5"
        key={columnIndex}>
        <div className="lg:text-center  text-right px-3 text-xs">
          <div className="flex flex-col"><div>Created:</div> <div>{formatDate(entry.created_at)}</div></div>
          <div className="flex flex-col"><div>Updated:</div> <div>{formatDate(entry.updated_at)}</div></div>
        </div>
      </td>

    );

  }



  function callbackTitle(entry, columnIndex) {

    return (
      <td data-label="ID" className="text-left  !px-5  "
        key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Link className="font-mono text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline" href={`/dashboard/orders/${entry.id}`}>
              {"#" + entry.id}
            </Link>



            <PopoverButton buttonLabel={""} buttonIcon={<IconEdit size={16} />} title={`Edit order #${entry.id}`} drawer={"right"} buttonClass={ICON_BUTTON}>

              <div className="p-5 bg-gray-50 text-left">
                <OrderEdit id={entry.id} variant="drawer" />
              </div>

            </PopoverButton>
          </div>

          <div className="flex flex-col gap-0.5 text-[11px] text-gray-500 sm:pr-5">
            <div className="flex gap-1"><span className="text-gray-400">Created</span> <span className="tabular-nums">{formatDate(entry.created_at)}</span></div>
            <div className="flex gap-1"><span className="text-gray-400">Updated</span> <span className="tabular-nums">{formatDate(entry.updated_at)}</span></div>

            {/* {entry.status == 'scheduled' && (
              <div className="flex flex-col text-fuchsia-400"><div>Scheduled:</div> <div>{formatDate(entry.scheduled_at)}</div></div>
            )} */}


          </div>
        </div>
      </td>

    );
  }
  function callbackUserName(entry, columnIndex) {



    return (
      <td data-label="Customer" className="!px-5 py-3"
        key={columnIndex}>
        {/* The whole cell copies the customer details, which had no affordance
            at all - hence the cursor, hover tint and copy hint. */}
        <div className={`group flex cursor-pointer flex-col gap-1 rounded-lg py-1 text-right text-sm transition-colors hover:bg-gray-100 lg:text-left ${privacyMode ? 'blur-[3px]' : ""}`}
          title="Click to copy customer details"
          onClick={() => {
            /* Missing fields used to be copied as the word "undefined". */
            navigator.clipboard.writeText([entry?.billing_name, entry?.billing_address, entry?.billing_phone].filter(Boolean).join("\n"))
            addNotification({ type: 'success', title: 'Info Copied', content: "Customer details copied" })
          }}

        >
          <div className="flex items-center gap-1.5 font-medium text-gray-900">
            <span className="truncate">{entry.billing_name}</span>
            <IconCopy size={13} className="shrink-0 text-gray-300 transition-colors group-hover:text-gray-500" />
          </div>
          <div className="text-[11px] text-gray-500">{entry.billing_address}</div>
          <div className="text-[11px] tabular-nums text-gray-500">{entry?.billing_phone}</div>
          <div className="flex gap-2">





          </div>
        </div>

      </td>

    );
  }


  function callbackActions(entry, columnIndex) {


    var orderItems = entry?.order_items

    return (
      <td data-label="Actions" className="text-sm "
        key={columnIndex}>
        <div className="flex flex-wrap gap-2 justify-end sm:pr-5 text-sm">
          <div className="flex justify-end">
            <OrderCourier order_id={entry.id} deliveryData={entry?.delivery} />
          </div>
          <div className="flex justify-end">
            <CheckPhoneFraud phone={entry?.billing_phone} order_id={entry.id} />
          </div>




          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconPackages size={18} />} title={"Order Items"} position={""} buttonClass={ICON_BUTTON} popoverClass={`max-h-[600px] w-[360px] bg-white overflow-y-auto z-50 rounded-xl border border-gray-200 shadow-lg top-full right-0 absolute`}>

            <div className="p-3 flex flex-col gap-2">
              {orderItems?.map(item => (
                <div key={item.id} className="flex text-left flex-col gap-1 rounded-lg border border-gray-200 bg-gray-50 p-2.5 ">
                  <div className="text-xs font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: `${item.product_name}` }}></div>
                  <div className="flex gap-3 text-[11px] text-gray-500">

                    <div>Quantity: {item.quantity}</div>
                    <div>Price: {item.price}</div>

                  </div>

                </div>
              ))}

              {!orderItems?.length && (
                <div className="rounded-lg border border-dashed border-gray-200 p-3 text-center text-xs text-gray-400">No items on this order.</div>
              )}

              {orderItems?.length > 0 && (
              <div className="inline-flex h-8 w-fit cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-xs font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50" onClick={() => {
                var copyText = '';
                orderItems.map(item => {

                  copyText += `${item.product_name} \n`;
                  copyText += `Quantity: ${item.quantity} \n`;
                  copyText += `Unit Price: ${item.price} \n`;
                  copyText += `\n`;

                })

                navigator.clipboard.writeText(`${copyText}`)
                addNotification({ type: 'success', title: 'Info Copied', content: "Order items detail coppied." })
              }}>
                <IconCopy size={16} /> Copy
              </div>
              )}


            </div>


          </PopoverButton>
          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">

              <div className="flex flex-col gap-0.5">
                {/* "View" pointed at /orders/{id}, which the store does not have. */}
                <Link className={MENU_ITEM} href={`/dashboard/orders/${entry.id}`}>
                  <IconEyeShare size={16} /> Open
                </Link>
                <div className={MENU_ITEM} onClick={() => {

                  if (confirm(`Duplicate order #${entry.id}?`)) {
                    duplicate_order(entry.id);
                  }
                }}>
                  <IconCopy size={16} /> Duplicate
                </div>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                  if (confirm(`Permanently delete order #${entry.id}? There is no trash for orders, so this cannot be undone.`)) {
                    delete_orders([entry.id]);
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

  function callbackTotal(entry, columnIndex) {

    var total = rowTotal(entry);



    return (
      <td data-label="Total" className="text-left !px-5"
        key={columnIndex}>
        {/* Label/amount pairs line up in two columns instead of running
            together as sentences. */}
        <div className="flex flex-col gap-1 text-[11px] py-3">

          {entry.subtotal_amount > 0 && (
            <div className="flex justify-between gap-3 text-gray-500"><span>Sub Total</span> <span className="tabular-nums text-gray-700">{wrapCurrency(entry.subtotal_amount)}</span></div>
          )}
          {entry.discount_amount > 0 && (
            <div className="flex justify-between gap-3 text-gray-500"><span>Discount</span> <span className="tabular-nums text-rose-600">-{wrapCurrency(entry.discount_amount)}</span></div>
          )}
          {entry.shipping_amount > 0 && (
            <div className="flex justify-between gap-3 text-gray-500"><span>Delivery Charge</span> <span className="tabular-nums text-emerald-600">+{wrapCurrency(entry.shipping_amount)}</span></div>
          )}

          {entry.advance_payment > 0 && (
            <div className="flex justify-between gap-3 text-gray-500"><span>Advance Payment</span> <span className="tabular-nums text-rose-600">-{wrapCurrency(entry.advance_payment)}</span></div>
          )}


          <div className="mt-1 flex justify-between gap-3 border-t border-dashed border-gray-200 pt-1.5 text-xs font-semibold text-gray-900"><span>Total</span> <span className="tabular-nums">{wrapCurrency(total)}</span></div>

          {showProfit && (
            <>
              {entry.gross_profit > 0 && (
                <div className="flex justify-between gap-3 text-gray-500"><span>Gross Profit</span> <span className="tabular-nums text-lime-600">{wrapCurrency(entry.gross_profit)}</span></div>
              )}
              {entry.net_profit > 0 && (
                <div className="flex justify-between gap-3 text-gray-500"><span>Net Profit</span> <span className="tabular-nums text-lime-700">{wrapCurrency(entry.net_profit)}</span></div>
              )}
            </>
          )}






        </div>
      </td>

    );
  }
  function callbackSubtotal(entry, columnIndex) {

    return (
      <td data-label="Subtotal" className="text-left !px-5"
        key={columnIndex}>
        <span>{wrapCurrency(entry.subtotal_amount)}</span>
      </td>

    );
  }




  function callbackStatus(entry, columnIndex) {



    var badge = ORDER_STATUS_BADGES[entry.status]
      ?? (entry.status ? { label: orderStatusArgs?.[entry.status]?.label ?? titleCase(entry.status), classes: FALLBACK_BADGE_CLASSES } : null);

    return (
      <td data-label="Status" className="!px-5 py-3 text-left text-sm  "
        key={columnIndex}>

        <div className={` text-xs `}>
          {badge ? (
            <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>
          ) : (
            <span className="text-gray-300">—</span>
          )}


        </div>





      </td>

    );
  }
  function callbackPaymentStatus(entry, columnIndex) {



    /* An empty payment_status counted as pending before; undefined still
       renders nothing, as it did. */
    var paymentKey = entry.payment_status == '' ? 'pending' : entry.payment_status;
    var badge = PAYMENT_STATUS_BADGES[paymentKey];

    return (
      <td data-label="Payment Status" className="!px-5 py-3 text-left text-sm "
        key={columnIndex}>


        <div className="flex flex-col items-start gap-1.5 ">

          <div className={` text-xs `}>
            {badge && (
              <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>
            )}

          </div>

          {entry.payment_method?.length > 0 && (
            <div className="text-[11px] text-gray-500">{paymentGateways[entry.payment_method]?.label}</div>
          )}

        </div>

      </td>

    );
  }



  function onOrderCreated() {
    fetchPosts();
  }
  function onOrderBulkUpdated() {


    fetchPosts();
    setselectedRows([])
  }


  function onPickCustomer(args) {


    setqueryPrams({ ...queryPrams, customer: { id: args?.id, display_name: args?.display_name, avatar: args?.avatar }, paged: 1 })
  }
  function onFilterByStatus(args) {

    setqueryPrams({ ...queryPrams, status: args?.value, paged: 1 })
  }
  function onFilterByPaymentMethod(args) {

    setqueryPrams({ ...queryPrams, payment_method: args?.value, paged: 1 })
  }
  function onFilterByPaymentStatus(args) {

    setqueryPrams({ ...queryPrams, payment_status: args?.value, paged: 1 })
  }


  var orderStatusPrams = {
    all: { label: 'All', value: '' },
    ...orderStatusArgs
  }

  var paymentStatusPrams = {

    all: { label: "All", value: "" },
    ...paymentStatusArgs

  }







  /* Filters inside the "More Filters" popover, and every active filter (for the chips). */
  const moreFilterCount = [
    queryPrams?.payment_method,
    queryPrams?.customer?.display_name,
    queryPrams?.product?.title,
    queryPrams?.from_date,
    queryPrams?.to_date,
  ].filter(Boolean).length;
  const activeFilterCount = moreFilterCount + [queryPrams?.status, queryPrams?.payment_status].filter(Boolean).length;


  function onAddProducts(item) {


    setqueryPrams({ ...queryPrams, product: { id: item?.id, title: item?.title }, paged: 1 })


  }


  return (
    <div className="page-shell">




      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Orders")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {ordersData?.total ?? 0} {activeFilterCount > 0 ? ("orders match the filters") : ("orders")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={fetchPosts}>
            <IconRefresh size={16} className={loading ? "animate-spin" : ""} /> {("Refresh")}
          </button>

          <PopoverButton wrapperClass={``} buttonClass={TOOLBAR_BUTTON} buttonLabel={("Quick Order")} buttonIcon={<IconFileDollar size={16} />} title={"Quick Order"} position={"bottomRight"}>
            <div className="p-5 bg-gray-50">
              <OrderCreate onOrderCreated={onOrderCreated} />
            </div>
          </PopoverButton>

          {/* Creates an empty order and opens it for editing. */}
          <button type="button" className={PRIMARY_BUTTON} disabled={loading} onClick={ev => {
            create_order({ redirect: true })
          }}><IconPlus size={16} /> {("Add Order")}</button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3">

        <div className="flex flex-wrap items-center gap-2">

          <select className={FILTER_SELECT} value={queryPrams?.status ?? ""} onChange={ev => {
            setqueryPrams({ ...queryPrams, status: ev.target.value, paged: 1 });
          }}>
            <option value="">{("All Statuses")}</option>
            {Object.values(orderStatusArgs ?? {}).map(item => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>

          <select className={FILTER_SELECT} value={queryPrams?.payment_status ?? ""} onChange={ev => {
            setqueryPrams({ ...queryPrams, payment_status: ev.target.value, paged: 1 });
          }}>
            <option value="">{("All Payments")}</option>
            {Object.values(paymentStatusArgs ?? {}).map(item => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>

          <PopoverButton wrapperClass={``} enableCloseBtn={false} buttonClass={TOOLBAR_BUTTON} buttonLabel={moreFilterCount > 0 ? `${("More Filters")} (${moreFilterCount})` : ("More Filters")} buttonIcon={<IconFilter size={16} />} title={"More Filters"} position={"bottomLeft"} popoverClass={`absolute z-[999] w-[380px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

            <div className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Payment Method</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.payment_method} options={paymentGateways} label={`Payment Method`} onOptionsChoose={onFilterByPaymentMethod} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Customer</div>
                  <div>
                    <UsersPicker placeholder={"Search Customer"} role={`customer`} onPick={onPickCustomer} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Product</div>
                  <div>
                    <ProductsPicker placeholder="Search product..." onPick={onAddProducts} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">From</div>
                  <div>
                    <DatePicker
                      showTimeSelect
                      isClearable
                      placeholderText="Any date"
                      dateFormat="yyyy-MM-dd HH:mm"
                      className={DATE_INPUT}
                      selected={toPickerDate(queryPrams?.from_date)}
                      onChange={(date) => {
                        setqueryPrams({ ...queryPrams, from_date: date ? format(date, "yyyy-MM-dd HH:mm:ss") : "", paged: 1 });
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">To</div>
                  <div>
                    <DatePicker
                      showTimeSelect
                      isClearable
                      placeholderText="Any date"
                      dateFormat="yyyy-MM-dd HH:mm"
                      className={DATE_INPUT}
                      selected={toPickerDate(queryPrams?.to_date)}
                      minDate={toPickerDate(queryPrams?.from_date)}
                      onChange={(date) => {
                        setqueryPrams({ ...queryPrams, to_date: date ? format(date, "yyyy-MM-dd HH:mm:ss") : "", paged: 1 });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </PopoverButton>

          <button type="button" className={TOOLBAR_BUTTON} title={showProfit ? "Hide profit figures" : "Show profit figures"} onClick={toggleProfit}>
            <IconMapDollar size={16} /> {showProfit ? ("Hide Profits") : ("Show Profits")}
          </button>

        </div>

        {selectedRows?.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[#634FE5]/30 bg-[#634FE5]/5 py-1 pl-3 pr-1">
            <span className="text-sm font-medium text-gray-700">{selectedRows.length} {("selected")}</span>
            <button type="button" className="!h-8 rounded-md !border-0 !bg-transparent px-2 text-sm !text-gray-500 !shadow-none hover:!bg-white hover:!text-gray-800" onClick={() => { setselectedRows([]); setselectedOrdersData(null); }}>{("Clear")}</button>

            <PopoverButton wrapperClass={``} buttonClass={TOOLBAR_BUTTON} buttonLabel={("Receipts")} buttonIcon={<IconPrinter size={16} />} title={"Print Receipts"} position={"bottomRight"}>
              <div className="p-5 bg-gray-50">
                <OrdersReceipt ids={selectedRows} ordersData={selectedOrdersData} />
              </div>
            </PopoverButton>
            <PopoverButton wrapperClass={``} buttonClass={TOOLBAR_BUTTON} buttonLabel={("Overview")} buttonIcon={<IconNotes size={16} />} title={"Orders Overview"} position={"bottomRight"}>
              <div className="p-5 bg-gray-50">
                <OrdersOverview ids={selectedRows} ordersData={selectedOrdersData} />
              </div>
            </PopoverButton>
            <PopoverButton wrapperClass={``} buttonClass={TOOLBAR_BUTTON} buttonLabel={("Product List")} buttonIcon={<IconListDetails size={16} />} title={"Product List"} position={"bottomRight"}>
              <div className="p-5 bg-gray-50">
                <OrdersProductList ids={selectedRows} ordersData={selectedOrdersData} />
              </div>
            </PopoverButton>
            <PopoverButton wrapperClass={``} buttonClass={TOOLBAR_BUTTON} buttonLabel={("Bulk Update")} buttonIcon={<IconEdit size={16} />} title={"Bulk Update"} position={"bottomRight"}>
              <div className="p-5 bg-gray-50">
                <OrderBulkUpdate onOrderBulkUpdated={onOrderBulkUpdated} ids={selectedRows} />
              </div>
            </PopoverButton>

            <button type="button"
              className="inline-flex !h-9 items-center gap-2 !rounded-lg !border-0 !bg-red-600 !px-3 !py-0 !text-sm !font-medium !text-white !shadow-sm transition-colors hover:!bg-red-700 cursor-pointer disabled:opacity-50"
              disabled={loading}
              onClick={() => {
                if (confirm(`Permanently delete ${selectedRows.length} ${selectedRows.length === 1 ? "order" : "orders"}? There is no trash for orders, so this cannot be undone.`)) {
                  delete_orders()
                }
              }}>
              <IconTrash size={16} /> {("Delete")}
            </button>
          </div>
        )}
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {queryPrams?.status?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Status')}: {orderStatusArgs?.[queryPrams.status]?.label ?? titleCase(queryPrams.status)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, status: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.payment_status?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Payment')}: {paymentStatusArgs?.[queryPrams.payment_status]?.label ?? titleCase(queryPrams.payment_status)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, payment_status: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.payment_method?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Method')}: {paymentGateways?.[queryPrams.payment_method]?.label ?? queryPrams.payment_method}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, payment_method: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.customer?.display_name?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Customer')}: {queryPrams.customer.display_name}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, customer: {}, paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.product?.title?.length > 0 && (
            <div className={FILTER_CHIP}>
              <span>{('Product')}: {queryPrams.product.title}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, product: {}, paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.from_date && (
            <div className={FILTER_CHIP}>
              <span>{('From')}: {String(queryPrams.from_date).slice(0, 16)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, from_date: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          {queryPrams?.to_date && (
            <div className={FILTER_CHIP}>
              <span>{('To')}: {String(queryPrams.to_date).slice(0, 16)}</span>
              <span className={FILTER_CHIP_X} onClick={() => setqueryPrams({ ...queryPrams, to_date: "", paged: 1 })}><IconX size={13} /></span>
            </div>
          )}
          <button type="button" className="!border-0 !bg-transparent !p-0 !text-xs !font-medium !text-gray-500 !shadow-none hover:!text-red-600" onClick={() => {
            setqueryPrams({ ...queryPrams, status: "", payment_method: "", payment_status: "", customer: {}, product: {}, from_date: "", to_date: "", paged: 1 });
          }}>{("Clear all")}</button>
        </div>
      )}


      {ordersData && !loading && activeFilterCount === 0 && !queryPrams?.keyword && (ordersData?.total ?? 0) === 0 && (ordersData?.posts ?? []).length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconReceipt size={24} /></div>
          <div className="text-sm font-semibold text-gray-800">{("No orders yet")}</div>
          <p className="max-w-sm text-xs text-gray-500">{("Orders placed on the store show up here. You can also create one with Add Order or Quick Order.")}</p>
          <button type="button" className={`${PRIMARY_BUTTON} mt-2`} disabled={loading} onClick={() => create_order({ redirect: true })}>
            <IconPlus size={16} /> {("Add Order")}
          </button>
        </div>
      ) : (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={ordersData}
          itemPath={""}
          onChange={onChangeQueryPrams}
          loading={loading}
          selectedRows={selectedRows}
          onSelectRows={onSelectRows}
          onRefreshRequest={onRefreshRequest}
        />
      )}



      {sumData && ordersData?.posts?.length > 0 && (
        <div className="flex justify-end">
          {/* Sums of the orders on this page only, not of every matching order.
              Signs follow the row totals: delivery and tax add, discount and
              advance payment subtract. */}
          <div className="flex w-full max-w-sm flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {("This page")} · {ordersData.posts.length} {("orders")}
            </div>

            <div className="flex justify-between text-xs text-gray-500"><span>Sub Total</span><span className="tabular-nums text-gray-700">{wrapCurrency(sumData?.subtotal_amount)}</span></div>
            <div className="flex justify-between text-xs text-gray-500"><span>Discount</span><span className="tabular-nums text-rose-600">-{wrapCurrency(sumData?.discount_amount)}</span></div>
            <div className="flex justify-between text-xs text-gray-500"><span>Delivery Charge</span><span className="tabular-nums text-emerald-600">+{wrapCurrency(sumData?.shipping_amount)}</span></div>
            {/* Shown as "+" before, though no total adds it. */}
            {sumData?.tax_amount > 0 && (
              <div className="flex justify-between text-xs text-gray-500"><span>Tax <span className="text-gray-400">(not in totals)</span></span><span className="tabular-nums text-gray-700">{wrapCurrency(sumData?.tax_amount)}</span></div>
            )}
            <div className="flex justify-between text-xs text-gray-500"><span>Advance Payment</span><span className="tabular-nums text-rose-600">-{wrapCurrency(sumData?.advance_payment)}</span></div>

            <div className="mt-1 flex justify-between border-t border-dashed border-gray-200 pt-2 text-sm font-semibold text-gray-900">
              <span>Total</span><span className="tabular-nums">{wrapCurrency(sumData?.total_amount)}</span>
            </div>

            {showProfit && (
              <>
                <div className="flex justify-between text-xs text-gray-500"><span>Gross Profit</span><span className="tabular-nums text-lime-600">{wrapCurrency(sumData?.gross_profit)}</span></div>
                <div className="flex justify-between text-xs text-gray-500"><span>Net Profit</span><span className="tabular-nums text-lime-700">{wrapCurrency(sumData?.net_profit)}</span></div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;