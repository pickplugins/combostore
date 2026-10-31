"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useContext, useRef } from "react";
import Spinner from "../../components/Spinner";
import { IconFilter, IconFileDollar, IconEyeShare, IconTrash, IconCopy, IconDotsVertical, IconPackages, IconX, IconEdit, IconPrinter, IconListNumbers, IconMapDollar, IconSquareCheck, IconSquareCheckFilled, IconListDetails, IconNotes } from "@tabler/icons-react";

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

const ICON_BUTTON =
  "inline-flex h-8  px-2 items-center justify-center rounded-lg border border-transparent !py-0 text-gray-400 !shadow-none transition-colors hover:border-gray-300 border-gray-300 hover:!bg-gray-100 bg-gray-200 hover:text-gray-900 cursor-pointer";

const MENU_ITEM =
  "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const TOOLBAR_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer";

const PRIMARY_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg bg-[#634FE5] px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer";


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

  const hasFetched = useRef(false);

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
      acc.total_amount += parseFloat(post.total_amount) || 0;
      acc.subtotal_amount += parseFloat(post.subtotal_amount) || 0;
      acc.discount_amount += parseFloat(post.discount_amount) || 0;
      acc.tax_amount += parseFloat(post.tax_amount) || 0;
      acc.advance_payment += parseFloat(post.advance_payment) || 0;
      acc.shipping_amount += parseFloat(post.shipping_amount) || 0;
      acc.gross_profit += parseFloat(post.gross_profit) || 0;
      acc.net_profit += parseFloat(post.net_profit) - (parseFloat(post.discount_amount) + parseFloat(post.tax_amount) + parseFloat(post.shipping_amount)) || 0;


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


  function update_stock() {



    var postData = {

    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/add_stock_histoy", {
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
            var errors = res?.errors;
            var success = res?.success;

            setloading(false);


            console.log(res);


            //fetchPosts();

            //setselectedRows([]);



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }
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
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            var errors = res?.errors;
            var success = res?.success;

            setloading(false);

            fetchPosts();

            setselectedRows([]);



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
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
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            var errors = res?.errors;
            var success = res?.success;

            setloading(false);

            fetchPosts();

            setselectedRows([]);



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
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
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            var status = res?.status;
            var message = res?.message;

            if (status == 'success') {

              addNotification({ type: 'success', title: 'Order created', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Order update failed', content: message })
            }

            if (redirect) {
              router.push(`/dashboard/orders/${res?.order_id}`);

            }

            setTimeout(() => {
              setloading(false)
              fetchPosts()
            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
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
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            var orders = res?.posts;
            var total = parseInt(res?.total);
            var max_pages = parseInt(res?.max_pages);

            console.log(orders);



            setordersData({ posts: orders, total: total, maxPages: max_pages })
            setloading(false);


            setTimeout(() => {

              var data = sumOrderAmounts(orders)

              setsumData(data);

            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }


  useEffect(() => {

    fetchPosts();

  }, [queryPrams]);

  useEffect(() => {
    if (hasFetched.current) return;

    hasFetched.current = true;
    fetchPosts();
  }, []);


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



            <PopoverButton buttonLabel={""} buttonIcon={<IconEdit size={16} />} title={"Edit Order"} drawer={"right"} buttonClass={ICON_BUTTON}>

              <div className="p-5 bg-gray-50 text-left">
                <OrderEdit id={entry.id} />
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
            navigator.clipboard.writeText(`${entry.billing_name} \n ${entry.billing_address} \n ${entry?.billing_phone}`)
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

              <div className={`${TOOLBAR_BUTTON} !h-8 w-fit text-xs`} onClick={() => {
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


            </div>


          </PopoverButton>
          <PopoverButton wrapperClass={`flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

            <div className="p-1.5">

              <div className="flex flex-col gap-0.5">
                <div className={MENU_ITEM} onClick={() => {

                  if (confirm("Please confirm?")) {
                    duplicate_order(entry.id);
                  }
                }}>
                  <IconCopy size={16} /> Duplicate
                </div>
                <Link className={MENU_ITEM} href={`/orders/${entry.id}`}>
                  <IconEyeShare size={16} /> View
                </Link>
                <div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
                  if (confirm("Please confirm?")) {
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

    var total = (parseFloat(entry.subtotal_amount || 0) + parseFloat(entry.shipping_amount || 0)) - (parseFloat(entry.discount_amount || 0) + parseFloat(entry.advance_payment || 0));



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



    var badge = ORDER_STATUS_BADGES[entry.status];

    return (
      <td data-label="Status" className="!px-5 py-3 text-left text-sm  "
        key={columnIndex}>

        <div className={` text-xs `}>
          {badge && (
            <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>
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







  function onAddProducts(item) {


    setqueryPrams({ ...queryPrams, product: { id: item?.id, title: item?.title }, paged: 1 })


  }


  return (
    <div className="page-shell">




      {/* Page heading: the screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Orders")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {ordersData?.total ?? 0} {("orders")}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 w-full justify-between items-center ">



        <div className="flex flex-wrap gap-2 items-center">


          <PopoverButton wrapperClass={``} buttonClass={TOOLBAR_BUTTON} buttonLabel={("New Order")} buttonIcon={<IconFileDollar size={16} />} title={"New Order & Edit"} position={""}>

            <div className="p-5 bg-gray-50">
              <OrderCreate onOrderCreated={onOrderCreated} />
            </div>

          </PopoverButton>

          <div className={PRIMARY_BUTTON} onClick={ev => {
            create_order({ redirect: true })
          }}> <IconFileDollar size={16} /> Add Order & Edit</div>


          <PopoverButton wrapperClass={``} enableCloseBtn={false} buttonClass={TOOLBAR_BUTTON} buttonLabel={("Filter Orders")} buttonIcon={<IconFilter size={16} />} title={"Filter Orders"} position={"leftTop"} popoverClass={`absolute z-[999] w-[380px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

            <div className="p-4">
              <div className="flex flex-col  gap-3 ">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Order Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.status} options={orderStatusPrams} label={`Order Status`} onOptionsChoose={onFilterByStatus} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Payment Method</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.payment_method} options={paymentGateways} label={`Payment Method`} onOptionsChoose={onFilterByPaymentMethod} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Payment Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.payment_status} options={paymentStatusPrams} label={`Payment Status`} onOptionsChoose={onFilterByPaymentStatus} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Customer</div>
                  <div>
                    <UsersPicker placeholder={"Search Customer"} role={`customer`} onPick={onPickCustomer} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Products</div>
                  <div>
                    <ProductsPicker placeholder="Search product..." onPick={onAddProducts} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">Start Date</div>
                  <div>
                    <DatePicker
                      showTimeSelect
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      selected={queryPrams?.from_date}
                      onChange={(date) => {
                        if (!date) return;

                        const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");


                        setqueryPrams({
                          ...queryPrams,
                          from_date: formattedDate
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-gray-700">End Date</div>
                  <div>
                    <DatePicker
                      showTimeSelect
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      selected={queryPrams?.to_date}
                      onChange={(date) => {
                        if (!date) return;

                        const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");

                        setqueryPrams({
                          ...queryPrams,
                          to_date: formattedDate
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div></div>

                  <div className="inline-flex w-max cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600" onClick={() => {
                    setqueryPrams({
                      ...queryPrams,
                      status: "",
                      payment_method: "",
                      payment_status: "",
                      customer: "",
                      product: {},
                      from_date: "",
                      to_date: ""
                    });
                  }}>
                    <IconX size={16} /> Reset Filters
                  </div>

                </div>


              </div>
            </div>

          </PopoverButton>

          <div className={`${TOOLBAR_BUTTON} !text-xs`} title="Record a stock history entry" onClick={ev => {
            update_stock();
          }}>Add history</div>

        </div>
        <div className=" flex gap-2">


          <div className=" px-4  flex gap-2">




            {queryPrams?.payment_method?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="">{('Payment Method')}: {queryPrams?.payment_method}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800" onClick={ev => {
                  setqueryPrams({ ...queryPrams, payment_method: "" })
                }}><IconX size={13} /></div>
              </div>
            )}

            {queryPrams?.payment_status?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="">{('Payment Status')}: {queryPrams?.payment_status}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800" onClick={ev => {
                  setqueryPrams({ ...queryPrams, payment_status: "" })
                }}><IconX size={13} /></div>
              </div>
            )}



            {queryPrams?.product?.title?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="">{('Product')}: {queryPrams?.product?.title}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800" onClick={ev => {
                  setqueryPrams({ ...queryPrams, product: {} })
                }}><IconX size={13} /></div>
              </div>
            )}



            {queryPrams?.customer?.display_name?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="">{('Customer')}: {queryPrams?.customer?.display_name}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800" onClick={ev => {
                  setqueryPrams({ ...queryPrams, customer: "" })
                }}><IconX size={13} /></div>
              </div>
            )}

            {queryPrams?.status?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="">{('Status')}: {queryPrams?.status}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800" onClick={ev => {
                  setqueryPrams({ ...queryPrams, status: "" })
                }}><IconX size={13} /></div>
              </div>
            )}

          </div>

          <div className="flex gap-2">

            <PopoverButton wrapperClass={``} buttonClass={ICON_BUTTON} buttonLabel={<IconMapDollar size={18} />} buttonIcon={``} title={"Show Profits"} position={"bottomRight"}>

              <div className="p-4 w-[320px]">

                <div className="flex gap-3 text-sm">

                  {!showProfit && (
                    <div className="flex gap-3 text-sm cursor-pointer" onClick={() => setshowProfit(true)}>
                      <IconSquareCheckFilled /> Show Profits
                    </div>
                  )}
                  {showProfit && (
                    <div className="flex gap-3 text-sm cursor-pointer" onClick={() => setshowProfit(false)}>
                      <IconSquareCheck /> Hide Profits
                    </div>
                  )}

                </div>

              </div>
            </PopoverButton>

            {selectedRows?.length > 0 && (
              <>
                <PopoverButton wrapperClass={``} buttonClass={ICON_BUTTON} buttonLabel={<IconPrinter size={18} />} buttonIcon={``} title={"Print"} position={""}>

                  <div className="p-5 bg-gray-50">

                    <OrdersReceipt ids={selectedRows} ordersData={selectedOrdersData} />

                  </div>
                </PopoverButton>
                <PopoverButton wrapperClass={``} buttonClass={ICON_BUTTON} buttonLabel={<IconNotes size={18} />} buttonIcon={``} title={"Print"} position={""}>

                  <div className="p-5 bg-gray-50">

                    <OrdersOverview ids={selectedRows} ordersData={selectedOrdersData} />

                  </div>
                </PopoverButton>
                <PopoverButton wrapperClass={``} buttonClass={ICON_BUTTON} buttonLabel={<IconListDetails size={18} />} buttonIcon={``} title={"Print"} position={""}>

                  <div className="p-5 bg-gray-50">

                    <OrdersProductList ids={selectedRows} ordersData={selectedOrdersData} />

                  </div>
                </PopoverButton>



                <PopoverButton wrapperClass={``} buttonClass={ICON_BUTTON} buttonLabel={<IconEdit size={18} />} buttonIcon={``} title={"Bulk Update"} position={""}>

                  <div className="p-5 bg-gray-50">

                    <OrderBulkUpdate onOrderBulkUpdated={onOrderBulkUpdated} ids={selectedRows} />

                  </div>
                </PopoverButton>

                {/* <PopoverButton wrapperClass={`bg-white`} buttonLabel={("Send to Courier")} buttonIcon={<IconTruckDelivery />} title={"Send to Courier"} position={""}>
    
                      <div className="p-5 bg-white">
    
    
                        <div className=" lg:flex flex-wrap gap-3 py-3 items-center ">
                          <div className="  py-2 lg:w-60 ">{('Select courier')}</div>
    
    
                          <select name="shipping_method" value={courierPrams?.courier} id="" onChange={ev => {
                            var value = ev.target.value;
                            setcourierPrams({ ...courierPrams, courier: value })
                          }}>
    
                            <option value="">Choose</option>
                            <option value="kidobazar">KidoBazar Courier</option>
                            <option value="steadfast">Steadfast Courier</option>
                            <option value="pathao">Pathao Courier</option>
                            <option value="karatoa">Karatoa Courier</option>
                            <option value="sundarban">Sundarban Courier</option>
                          </select>
    
    
    
    
                        </div>
    
    
                      </div>
    
                    </PopoverButton>
                    <PopoverButton wrapperClass={`bg-white`} buttonLabel={("Fraud Check")} buttonIcon={<IconAlertTriangle />} title={"Fraud Check"} position={""}>
    
                      <div className="p-5 bg-white">
    
    
    
    
                      </div>
    
                    </PopoverButton>
    
    
                    <PopoverButton wrapperClass={`bg-white`} buttonLabel={("Add Note")} buttonIcon={<IconClipboardTextFilled />} title={"Add Note"} position={""}>
    
                      <div className="p-5 bg-white">
    
    
                        <div className=" lg:flex flex-wrap gap-3 py-3 items-center ">
                          <div className="  py-2 lg:w-60 ">{('Select courier')}</div>
    
    
                          <select name="shipping_method" value={courierPrams?.courier} id="" onChange={ev => {
                            var value = ev.target.value;
                            setcourierPrams({ ...courierPrams, courier: value })
                          }}>
    
                            <option value="">Choose</option>
                            <option value="kidobazar">KidoBazar Courier</option>
                            <option value="steadfast">Steadfast Courier</option>
                            <option value="pathao">Pathao Courier</option>
                            <option value="karatoa">Karatoa Courier</option>
                            <option value="sundarban">Sundarban Courier</option>
                          </select>
    
    
    
    
                        </div>
    
    
                      </div>
    
                    </PopoverButton> */}

                <div
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
                  onClick={() => {
                    if (confirm("Please confirm?")) {
                      delete_orders()
                    }
                  }}>

                  <IconTrash size={18} />

                </div>
              </>
            )}


          </div>


        </div>


      </div>


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



      <div className="flex justify-between">


        <div>

        </div>

        {sumData && (

          <div className="flex w-full max-w-sm flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 text-right shadow-sm">


            <div className="text-xs flex justify-between text-gray-500">
              <div className="text-left">Sub Total:</div>
              <div>{wrapCurrency(sumData?.subtotal_amount)}</div>
            </div>
            <div className="text-xs flex justify-between text-gray-500">
              <div className="text-left">Discount:</div>
              <div>-{wrapCurrency(sumData?.discount_amount)}</div>
            </div>
            <div className="text-xs flex justify-between text-gray-500">
              <div className="text-left">Delivery Charge:</div>
              <div>-{wrapCurrency(sumData?.shipping_amount)}</div>
            </div>


            <div className="text-xs flex justify-between text-gray-500">
              <div className="text-left">Tax:</div>
              <div>-{wrapCurrency(sumData?.tax_amount)}</div>
            </div>
            <div className="text-xs flex justify-between text-gray-500">
              <div className="text-left">Advance payment:</div>
              <div>{wrapCurrency(sumData?.advance_payment)}</div>
            </div>





            <div className="mt-2 flex justify-between border-t border-dashed border-gray-200 pt-2 text-sm font-semibold text-gray-900">
              <div className="text-left">Total:</div>
              <div>{wrapCurrency(sumData?.total_amount)}</div>
            </div>

            {showProfit && (
              <>
                <div className="text-xs flex justify-between text-gray-500">
                  <div className="text-left">Gross Profit:</div>
                  <div>{wrapCurrency(sumData?.gross_profit)}</div>
                </div>
                <div className="text-xs flex justify-between text-gray-500">
                  <div className="text-left">Net Profit:</div>
                  <div>{wrapCurrency(sumData?.net_profit)}</div>
                </div>
              </>
            )}




          </div>

        )}

      </div>
    </div>
  );
};

export default Orders;