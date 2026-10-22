"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useContext, useRef } from "react";
import Spinner from "../../components/Spinner";
import { IconFileDollar, IconPlus, IconMinus, IconDotsVertical, IconCircleCheck, IconX } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../../components/PopoverButton';
import ToggleContent from '../../components/ToggleContent';
import OrderItemsList from '../../components/OrderItemsList';
import UsersPicker from '../../components/shop-elements/UsersPicker';
import DropDown from '../../components/DropDown';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


const StocksHistory = (props) => {


  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


  var [newUserPrams, setnewUserPrams] = useState({ role: "customer", name: "", email: "", mobile: "" });

  var [expensesData, setexpensesData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: '', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });
  var [courierPrams, setcourierPrams] = useState({ courier: "" });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  const hasFetched = useRef(false);

  function onSelectRows(rows) {
    setselectedRows(rows);
  }



  var columns = {
    check: { label: ("Check"), },
    id: { label: ("ID"), callback: callbackID, classes: " text-left px-5 py-2 text-gray-600" },
    product_id: { label: ("Product"), callback: callbackProductId, classes: "text-left text-gray-600" },
    variation_id: { label: ("Variation"), callback: callbackVariationId, classes: "text-left text-gray-600 px-0" },
    unit_cost: { label: ("Unit cost"), callback: callbackUnitCost, classes: "text-left text-gray-600" },
    quantity: { label: ("Quantity"), callback: callbackQuantity, classes: " pr-2 text-gray-600" },
    stock_before: { label: "Stock before", callback: callbackStockBefore, classes: " text-gray-600" },
    stock_after: { label: "Stock after", callback: callbackStockAfter, classes: " text-gray-600" },
    note: { label: "Note", callback: callbackNote, classes: " text-gray-600" },
    event_type: { label: ("Event type"), callback: callbackEventType, classes: "text-left text-gray-600" },

    reference: { label: "Reference", callback: callbackReference, classes: " text-gray-600" },
    actions: { label: ("Actions"), callback: callbackActions, classes: " w-[100px] pr-2 text-gray-600" },
  };

  var [newExpensePrams, setnewExpensePrams] = useState({ total_amount: "", category: "", subcategory: "", payment_method: "", payment_status: "", transaction_id: "", created_by: "", created_for: "", note: "", });




  function get_stocks_histories() {




    // if (!token) {
    // 	//throw new Error("No token found");
    // }


    if (queryPrams.paged < 0) {
      return;
    }


    var postData = JSON.stringify(queryPrams);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_stocks_histories", {
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




            var expenses = res?.posts;
            var total = parseInt(res?.total);
            var max_pages = parseInt(res?.max_pages);

            console.log(res);


            setexpensesData({ posts: expenses, total: total, maxPages: max_pages })
            setloading(false);


            setTimeout(() => {



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

    get_stocks_histories();
  }, [queryPrams]);

  useEffect(() => {
    if (hasFetched.current) return;

    hasFetched.current = true;
    get_stocks_histories();
  }, []);


  function onChangeQueryPrams(queryPrams) {
    if (queryPrams) {
      setqueryPrams(queryPrams)
      get_stocks_histories();
    }

  }

  function onRefreshRequest(rows) {
    get_stocks_histories();
  }

  useEffect(() => {
    //checkUser();
  }, []);









  function callbackFormatDate(entry, columnIndex) {




    return (
      <td
        key={columnIndex}>
        <div className="text-right text-xs ">
          <div className="flex flex-col"><div>Created:</div> <div>{formatDate(entry.created_at)}</div></div>
        </div>
      </td>

    );

  }



  function callbackID(entry, columnIndex) {

    return (
      <td className=" py-3 text-sm text-left px-5"
        key={columnIndex}>

        <div className="text-xs"> {"#" + entry.id}</div>
        <div className="text-xs">{formatDate(entry.created_at)}</div>
      </td>

    );
  }
  function callbackEventType(entry, columnIndex) {

    return (
      <td className=" py-3 text-sm text-left"
        key={columnIndex}>
        <div> {entry.event_type}</div>
        <div className="break-words"> {entry.event_id}</div>
      </td>

    );
  }
  function callbackUnitCost(entry, columnIndex) {

    return (
      <td className=" py-3 text-sm text-left"
        key={columnIndex}>
        {entry.unit_cost}
      </td>

    );
  }
  function callbackQuantity(entry, columnIndex) {

    return (
      <td className=" py-3 text-sm "
        key={columnIndex}>
        {entry.unit_cost}
      </td>

    );
  }
  function callbackStockBefore(entry, columnIndex) {

    return (
      <td className=" py-3 text-sm "
        key={columnIndex}>
        {entry.stock_before}
      </td>

    );
  }
  function callbackStockAfter(entry, columnIndex) {

    return (
      <td className=" py-3 text-sm "
        key={columnIndex}>
        {entry.stock_after}
      </td>

    );
  }
  function callbackNote(entry, columnIndex) {

    return (
      <td className=" py-3 text-sm "
        key={columnIndex}>
        {entry.note}
      </td>

    );
  }
  function callbackReference(entry, columnIndex) {

    return (
      <td className=" py-3 text-sm "
        key={columnIndex}>
        <div>{entry.reference_id}</div>
        <div>{entry.reference_type}</div>
      </td>

    );
  }



  function callbackProductId(entry, columnIndex) {

    return (
      <td className="text-left  text-sm "
        key={columnIndex}>
        <div>#{entry.product_id}</div>
      </td>

    );
  }
  function callbackVariationId(entry, columnIndex) {

    return (
      <td className="text-left  text-sm "
        key={columnIndex}>
        <div>#{entry.product_id}</div>
      </td>

    );
  }









  function callbackActions(entry, columnIndex) {

    return (
      <td className="text-sm "
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


  var statusPrams = [
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
          <h1 className="text-xl font-semibold text-gray-900">{("Stocks History")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {expensesData?.total ?? 0} {("stock movements")}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 w-full justify-between items-center ">



        <div className="flex flex-wrap gap-3 items-center">


          <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max" onClick={(ev) => {
            add_expense();
          }}>
            <IconPlus />
            Add Expense
          </div>



          <PopoverButton wrapperClass={`bg-white `} enableCloseBtn={false} buttonLabel={("Filter StocksHistory")} buttonIcon={<IconFileDollar />} title={"Filter StocksHistory"} position={"leftTop"}>

            <div className="p-4 w-[400px]">
              <div className="flex flex-col gap-3 ">
                <div className="flex justify-between">
                  <div>Order Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.status} options={statusPrams} label={`Choose Status`} onOptionsChoose={onFilterByStatus} />
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




          <div className=" px-4  flex gap-2">


            {queryPrams?.payment_method?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="whitespace-nowrap">{('Payment Method')}: {queryPrams?.payment_method}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
                  setqueryPrams({ ...queryPrams, payment_method: "" })
                }}><IconX /></div>
              </div>
            )}

            {queryPrams?.payment_status?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="whitespace-nowrap">{('Payment Status')}: {queryPrams?.payment_status}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
                  setqueryPrams({ ...queryPrams, payment_status: "" })
                }}><IconX /></div>
              </div>
            )}



            {queryPrams?.product?.title?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="whitespace-nowrap">{('Product')}: {queryPrams?.product?.title}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
                  setqueryPrams({ ...queryPrams, product: {} })
                }}><IconX /></div>
              </div>
            )}



            {queryPrams?.customer?.display_name?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="whitespace-nowrap">{('Customer')}: {queryPrams?.customer?.display_name}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
                  setqueryPrams({ ...queryPrams, customer: "" })
                }}><IconX /></div>
              </div>
            )}

            {queryPrams?.status?.length > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 py-0.5 pl-2.5 pr-1 text-xs text-indigo-700">
                <div className="whitespace-nowrap">{('Status')}: {queryPrams?.status}</div>
                <div className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-indigo-400 transition-colors hover:bg-indigo-200 hover:text-indigo-800 [&>svg]:size-3.5" onClick={ev => {
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
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
                onClick={() => {
                  delete_expenses();
                }}>
                {("Delete expenses")}
              </div>
            </div>
          )}
        </div>


      </div>



      <EntriesTable
        queryPrams={queryPrams}
        columns={columns}
        entries={expensesData}
        itemPath={""}
        onChange={onChangeQueryPrams}
        loading={loading}
        selectedRows={selectedRows}
        onSelectRows={onSelectRows}
        onRefreshRequest={onRefreshRequest}

      />


      <div className="justify-end">




      </div>

    </div>
  );
};

export default StocksHistory;