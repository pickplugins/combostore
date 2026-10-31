"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useContext, useRef } from "react";
import { IconPlus, IconFilter, IconDotsVertical, IconTrash, IconX } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../../components/PopoverButton';
import PurchaseEdit from '../../components/pages/PurchaseEdit';
import ToggleContent from '../../components/ToggleContent';
import OrderItemsList from '../../components/OrderItemsList';
import UsersPicker from '../../components/shop-elements/UsersPicker';
import DropDown from '../../components/DropDown';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


/* Status pills, previously two stacks of hand-written spans with the label
   and tone repeated per case. Keys and tones match the orders list. */
const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

const PURCHASE_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  completed: { label: "Completed", classes: "bg-green-50 text-green-700 ring-green-200" },
  hold: { label: "Hold", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
  cancelled: { label: "Cancelled", classes: "bg-red-50 text-red-700 ring-red-200" },
  canceled: { label: "Canceled", classes: "bg-red-50 text-red-700 ring-red-200" },
  refunded: { label: "Refunded", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  failed: { label: "Failed", classes: "bg-red-50 text-red-700 ring-red-200" },
};

const PAYMENT_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
  paid: { label: "Paid", classes: "bg-green-50 text-green-700 ring-green-200" },
  failed: { label: "Failed", classes: "bg-red-50 text-red-700 ring-red-200" },
  delayed: { label: "Delayed", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  due: { label: "Due", classes: "bg-red-50 text-red-700 ring-red-200" },
  partial: { label: "Partial", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  refunded: { label: "Refunded", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
};

const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max";

const TOOLBAR_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer";

const DANGER_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer";

const FILTER_CHIP =
  "flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700";

const FILTER_CHIP_CLEAR =
  "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5";


const Purchases = (props) => {


  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


  var [newUserPrams, setnewUserPrams] = useState({ role: "customer", name: "", email: "", mobile: "" });

  var [ordersData, setordersData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: '', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });
  var [courierPrams, setcourierPrams] = useState({ courier: "" });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);
  var [sumData, setsumData] = useState(null);

  const hasFetched = useRef(false);

  function onSelectRows(rows) {
    setselectedRows(rows);
  }



  var columns = {
    check: { label: ("Check"), },
    id: { label: ("ID"), callback: callbackTitle, classes: "w-20 text-center px-5 py-2 text-gray-600" },
    billing_name: { label: ("Supplier"), callback: callbackUserName, classes: "text-left text-gray-600" },
    status: { label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600" },
    // subtotal_amount: { label: "Sub Total", callback: callbackSubtotal, classes: "text-left text-gray-600" },
    // discount_amount: { label: "Discount", callback: callbackDiscount, classes: "text-left text-gray-600" },
    // phone: { label: "Phone", callback: callbackPhone, classes: "text-left text-gray-600" },
    payment_status: { label: ("Payment"), callback: callbackPaymentStatus, classes: "text-left text-gray-600" },
    // payment_method: { label: "Payment Method", callback: callbackPaymentMethod, classes: "text-center text-gray-600" },
    updated_at: { label: ("Datetime"), callback: callbackFormatDate, classes: "text-center pr-2 text-gray-600" },
    total_amount: { label: "Total", callback: callbackTotal, classes: "text-right text-gray-600" },

    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right w-[100px] pr-2 text-gray-600" },

  };

  var [newPurchasePrams, setnewPurchasePrams] = useState({ total_amount: "", category: "", subcategory: "", payment_method: "", payment_status: "", transaction_id: "", created_by: "", created_for: "", note: "", });




  async function add_purchase() {





    var postData = JSON.stringify(newPurchasePrams);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/create_purchase", {
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



            //var resObj = JSON.parse(res)

            var status = res?.status;
            var messages = res?.messages;



            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Added failed', content: `Sorry,  added failed.${JSON.stringify(messages)}` })
            }

            if (status == 'success') {
              addNotification({ type: 'success', title: 'Added', content: "Added scuccessful." })
            }


            setloading(false);

            fetchPosts();





          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }


  function delete_purchases() {


    if (!token) {
      //throw new Error("No token found");
    }

    if (queryPrams.paged < 0) {
      return;
    }

    var postData = {
      ids: selectedRows,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_purchases", {
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

  function fetchPosts() {




    // if (!token) {
    // 	//throw new Error("No token found");
    // }


    if (queryPrams.paged < 0) {
      return;
    }


    var postData = JSON.stringify(queryPrams);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_purchases", {
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

            console.log(res);


            setordersData({ posts: orders, total: total, maxPages: max_pages })
            setloading(false);


            setTimeout(() => {

              var data = sumPurchaseAmounts(orders)
              console.log(data);

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
      fetchPosts();
    }

  }

  function onRefreshRequest(rows) {
    fetchPosts();
  }

  useEffect(() => {
    //checkUser();
  }, []);



  function sumPurchaseAmounts(orders) {

    console.log(orders);

    if (!orders || !Array.isArray(orders)) {
      return {
        subtotal_amount: 0,
        total_amount: 0,
        discount_amount: 0,
        tax_amount: 0,
        shipping_amount: 0
      };
    }

    return orders.reduce((acc, post) => {
      acc.total_amount += parseFloat(post.total_amount) || 0;
      acc.subtotal_amount += parseFloat(post.subtotal_amount) || 0;
      acc.discount_amount += parseFloat(post.discount_amount) || 0;
      acc.tax_amount += parseFloat(post.tax_amount) || 0;
      acc.shipping_amount += parseFloat(post.shipping_amount) || 0;
      return acc;
    }, {
      subtotal_amount: 0,
      total_amount: 0,
      discount_amount: 0,
      tax_amount: 0,
      shipping_amount: 0
    });
  }





  function callbackFormatDate(entry, columnIndex) {

    /* Both stamps, stacked and labelled. The old copy parsed the date by
       hand into values it never used, and threw from inside render when a
       row had no `updated_at` - which took the whole table down with it. */
    return (
      <td
        key={columnIndex}>
        <div className="px-5! text-center text-xs text-gray-500">

          <div className="flex flex-col">
            <span className="text-gray-400">Created</span>
            <span className="tabular-nums">{entry.created_at ? formatDate(entry.created_at) : "-"}</span>
          </div>

          <div className="mt-1.5 flex flex-col">
            <span className="text-gray-400">Updated</span>
            <span className="tabular-nums">{entry.updated_at ? formatDate(entry.updated_at) : "-"}</span>
          </div>

        </div>
      </td>

    );

  }



  function callbackTitle(entry, columnIndex) {

    return (
      <td className="text-center py-3 text-sm px-5!"
        key={columnIndex}>
        <Link className=" text-gray-600 font-bold" href={`/dashboard/purchases/${entry.id}`}>
          {"#" + entry.id}
        </Link>

        <div className="flex justify-center gap-3 text-xs text-gray-500">

          <PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit Purchase"} drawer={"right"} buttonClass={`cursor-pointer hover:text-gray-700`}>

            <div className="p-5 bg-gray-50 text-left">
              <PurchaseEdit id={entry.id} />
            </div>

          </PopoverButton>
        </div>
      </td>

    );
  }
  function callbackUserName(entry, columnIndex) {

    return (
      <td className="text-left text-sm px-5!"
        key={columnIndex}>
        <div className="flex flex-col gap-2 py-2">
          <div>{entry.billing_name}</div>
          <div className="text-xs italic">{entry.billing_address}</div>
          <div className="text-xs italic">{entry?.billing_phone}</div>
        </div>
      </td>

    );
  }

  function callbackActions(entry, columnIndex) {

    return (
      <td className="text-sm px-5!"
        key={columnIndex}>

        <PopoverButton wrapperClass={`bg-white flex justify-end px-2`} buttonLabel={" "} buttonIcon={<IconDotsVertical />} title={"Actions"} position={"bottomRight"} buttonClass={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>

          <div className="p-3 w-[400px]">



            <ToggleContent title={`Order Items`} contentClass={`bg-white p-2`}>
              <OrderItemsList order_id={entry.id} orderItems={entry?.order_items} />
            </ToggleContent>


          </div>

        </PopoverButton>
      </td>

    );
  }

  function callbackTotal(entry, columnIndex) {

    var total = (parseFloat(entry.subtotal_amount || 0) + parseFloat(entry.shipping_amount || 0)) - (parseFloat(entry.discount_amount || 0) + parseFloat(entry.advance_payment || 0));

    /* Label and figure as two columns, so the amounts line up instead of
       running on as sentences. A line only shows when it carries a value. */
    const lines = [
      { label: "Sub Total", value: entry.subtotal_amount, sign: "" },
      { label: "Discount", value: entry.discount_amount, sign: "-" },
      { label: "Delivery Charge", value: entry.shipping_amount, sign: "+" },
      { label: "Advance Payment", value: entry.advance_payment, sign: "-" },
    ].filter(line => parseFloat(line.value || 0) > 0);

    return (
      <td className="text-right px-5!"
        key={columnIndex}>
        <div className="flex flex-col gap-1 py-3 text-xs">

          {lines.map(line => (
            <div key={line.label} className="flex justify-between gap-4 text-gray-500">
              <span className="whitespace-nowrap">{line.label}</span>
              <span className="tabular-nums">{line.sign}{wrapCurrency(line.value)}</span>
            </div>
          ))}

          {total > 0 && (
            <div className="mt-1 flex justify-between gap-4 border-t border-dashed border-gray-300 pt-2 text-sm font-semibold text-gray-900">
              <span>Total</span>
              <span className="tabular-nums">{wrapCurrency(total)}</span>
            </div>
          )}

        </div>
      </td>

    );
  }




  function callbackStatus(entry, columnIndex) {

    const badge = PURCHASE_STATUS_BADGES[entry.status];

    return (
      <td className="text-left text-sm px-5!"
        key={columnIndex}>

        {badge && (
          <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>
        )}

      </td>

    );
  }
  function callbackPaymentStatus(entry, columnIndex) {

    const badge = PAYMENT_STATUS_BADGES[entry.payment_status || "pending"];

    return (
      <td className="text-left text-sm px-5!"
        key={columnIndex}>

        <div className="flex flex-col items-start gap-1.5">

          {badge && (
            <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>
          )}

          {entry.payment_method?.length > 0 && (
            <div className="text-xs text-gray-500">
              <span className="text-gray-400">Method:</span> {paymentGateways[entry.payment_method]?.label}
            </div>
          )}

        </div>

      </td>

    );
  }






  function onPickCustomer(args) {

    setqueryPrams({ ...queryPrams, customer: { id: args?.ID, display_name: args?.display_name, avatar: args?.avatar }, paged: 1 })
  }
  function onFilterByStatus(args) {

    console.log(args);
    setqueryPrams({ ...queryPrams, status: args, paged: 1 })
  }
  function onFilterByPaymentMethod(args) {

    console.log(args);
    setqueryPrams({ ...queryPrams, payment_method: args, paged: 1 })
  }
  function onFilterByPaymentStatus(args) {

    console.log(args);
    setqueryPrams({ ...queryPrams, payment_status: args, paged: 1 })
  }


  var orderStatusPrams = [
    { label: 'All', value: '' },
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'completed' },
    { label: 'Canceled', value: 'canceled' },
    { label: 'Refunded', value: 'refunded' },
    { label: 'Failed', value: 'failed' },
    { label: 'Processing', value: 'processing' },
    { label: 'Hold', value: 'hold' }
  ]

  var paymentStatusPrams = [

    {
      "label": "All",
      "value": "",

    },
    {
      "label": "Pending",
      "value": "pending",

    },
    {
      "label": "Paid",
      "value": "paid",

    },
    {
      "label": "Failed",
      "value": "failed",

    },
    {
      "label": "Delayed",
      "value": "delayed",
    },
    {
      "label": "Due",
      "value": "due",
    },

  ]


  function onAddProducts(item) {

    console.log(item);

    setqueryPrams({ ...queryPrams, product: { id: item?.id, title: item?.title }, paged: 1 })


  }



  return (
    <div className="page-shell">

      {/* Page heading: this screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Purchases")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {ordersData?.total ?? 0} {("purchases")}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 w-full justify-between items-center ">



        <div className="flex flex-wrap gap-3 items-center">


          <div className={PRIMARY_BUTTON} onClick={(ev) => {
            add_purchase();
          }}>
            <IconPlus size={16} />
            {("Add Purchase")}
          </div>



          <PopoverButton wrapperClass={``} enableCloseBtn={false} buttonClass={TOOLBAR_BUTTON} buttonLabel={("Filter Purchases")} buttonIcon={<IconFilter size={16} />} title={"Filter Purchases"} position={"leftTop"} popoverClass={`absolute z-[999] w-[400px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

            <div className="p-4 w-[400px]">
              <div className="flex flex-col gap-3 ">
                <div className="flex justify-between">
                  <div>Order Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.status} options={orderStatusPrams} label={`Choose Status`} onOptionsChoose={onFilterByStatus} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Payment Method</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.payment_method} options={paymentGateways} label={`Choose Payment Method`} onOptionsChoose={onFilterByPaymentMethod} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Payment Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.payment_status} options={paymentStatusPrams} label={`ChoosePayment Status`} onOptionsChoose={onFilterByPaymentStatus} />
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div>Customer</div>
                  <div>
                    <UsersPicker placeholder={"Search Customer"} role={`customer`} onPick={onPickCustomer} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Products</div>
                  <div>
                    <ProductsPicker placeholder="Search product..." onPick={onAddProducts} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Start Date</div>
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
                <div className="flex justify-between">
                  <div>End Date</div>
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





              </div>
            </div>

          </PopoverButton>


        </div>
        <div>




          <div className="flex flex-wrap justify-end gap-2 px-4">


            {queryPrams?.payment_method?.length > 0 && (
              <div className={FILTER_CHIP}>
                <div className="whitespace-nowrap">{('Payment Method')}: {queryPrams?.payment_method}</div>
                <div className={FILTER_CHIP_CLEAR} onClick={ev => {
                  setqueryPrams({ ...queryPrams, payment_method: "" })
                }}><IconX /></div>
              </div>
            )}

            {queryPrams?.payment_status?.length > 0 && (
              <div className={FILTER_CHIP}>
                <div className="whitespace-nowrap">{('Payment Status')}: {queryPrams?.payment_status}</div>
                <div className={FILTER_CHIP_CLEAR} onClick={ev => {
                  setqueryPrams({ ...queryPrams, payment_status: "" })
                }}><IconX /></div>
              </div>
            )}



            {queryPrams?.product?.title?.length > 0 && (
              <div className={FILTER_CHIP}>
                <div className="whitespace-nowrap">{('Product')}: {queryPrams?.product?.title}</div>
                <div className={FILTER_CHIP_CLEAR} onClick={ev => {
                  setqueryPrams({ ...queryPrams, product: {} })
                }}><IconX /></div>
              </div>
            )}



            {queryPrams?.customer?.display_name?.length > 0 && (
              <div className={FILTER_CHIP}>
                <div className="whitespace-nowrap">{('Customer')}: {queryPrams?.customer?.display_name}</div>
                <div className={FILTER_CHIP_CLEAR} onClick={ev => {
                  setqueryPrams({ ...queryPrams, customer: "" })
                }}><IconX /></div>
              </div>
            )}

            {queryPrams?.status?.length > 0 && (
              <div className={FILTER_CHIP}>
                <div className="whitespace-nowrap">{('Status')}: {queryPrams?.status}</div>
                <div className={FILTER_CHIP_CLEAR} onClick={ev => {
                  setqueryPrams({ ...queryPrams, status: "" })
                }}><IconX /></div>
              </div>
            )}

          </div>



          {selectedRows.length > 0 && (
            <div className="flex gap-2">

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
                className={DANGER_BUTTON}
                onClick={() => {
                  delete_purchases();
                }}>
                <IconTrash size={16} />
                {("Delete Purchases")} ({selectedRows.length})
              </div>
            </div>
          )}
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


      {/*
        Totals for the current filter. These were four loose lines of text
        hanging off the right edge; the figures now sit in a card and share
        a column so they can be read down.
      */}
      <div className="flex justify-end">

        {sumData && (

          <div className="w-full max-w-[320px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

            <div className="flex flex-col gap-1.5 text-xs">

              <div className="flex justify-between gap-4 text-gray-500">
                <span>{("Items Total")}</span>
                <span className="tabular-nums">+{wrapCurrency(sumData?.subtotal_amount)}</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-500">
                <span>{("Shipping")}</span>
                <span className="tabular-nums">+{wrapCurrency(sumData?.shipping_amount)}</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-500">
                <span>{("Tax")}</span>
                <span className="tabular-nums">+{wrapCurrency(sumData?.tax_amount)}</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-500">
                <span>{("Discount")}</span>
                <span className="tabular-nums">-{wrapCurrency(sumData?.discount_amount)}</span>
              </div>

              <div className="mt-1 flex justify-between gap-4 border-t border-dashed border-gray-300 pt-2 text-sm font-semibold text-gray-900">
                <span>{("Total")}</span>
                <span className="tabular-nums">{wrapCurrency(sumData?.total_amount - sumData?.discount_amount)}</span>
              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Purchases;