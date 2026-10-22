"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

import EntriesTable from "../components/EntriesTable";
import { useState, useEffect, useContext, useRef } from "react";
import Spinner from "../components/Spinner";
import { IconFileDollar, IconEyeShare, IconTrash, IconCopy, IconDotsVertical, IconPackages, IconX, IconEdit, IconPrinter, IconListNumbers, IconMapDollar, IconSquareCheck, IconSquareCheckFilled } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../components/PopoverButton';
import ShippingMethodEdit from '../components/ShippingMethodEdit';
import FraudCheck from '../components/FraudCheck';
import ShippingMethodCreate from '../components/ShippingMethodCreate';
import OrderBulkUpdate from '../components/OrderBulkUpdate';
import ToggleContent from '../components/ToggleContent';
import DropDown from '../components/DropDown';
import ProductsPicker from '../components/shop-elements/ProductsPicker';
import OrdersReceipt from '../components/pages/OrdersReceipt';
import OrdersOverview from '../components/pages/OrdersOverview';
import countries from '../lib/Countries';

import { useCounterStore } from '../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../store/useUtilsStore';



const ShippingMethods = (props) => {


  var zoneId = props?.zoneId
  var zoneCountries = props?.zoneCountries

  const router = useRouter();

  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, appData, notifications, addNotification, userDataX, setUserDataX, paymentGateways, privacyMode } = useCounterStore()


  var [countriesList, setcountriesList] = useState({});

  var [neworderData, setnewOrderData] = useState({});

  var [ordersData, setordersData] = useState(null);
  var [selectedOrdersData, setselectedOrdersData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: '', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

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
    id: { label: ("ID"), callback: callbackTitle, classes: "text-left  px-5 py-2 text-gray-600" },
    name: { label: ("Name"), callback: callbackUserName, classes: "text-left text-gray-600" },
    region: { label: ("Region"), callback: callbackRegion, classes: "text-left text-gray-600" },
    status: { label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600" },
    action: { label: ("Action"), callback: callbackAction, classes: "text-right pr-5 text-gray-600" },

  };



  useEffect(() => {

    var items = {};

    countries.map(country => {
      items[country.code2] = { label: country.name, value: country.code2, states: country.states }
    })

    setcountriesList(items)

  }, [countries]);





  function delete_shipping_zones(ids) {


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
    fetch(serverUrl + "wp-json/combo-store/v2/delete_shipping_zones", {
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
  function duplicate_shipping_zone(id) {


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
    fetch(serverUrl + "wp-json/combo-store/v2/duplicate_shipping_zone", {
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

  function create_shipping_method(args) {

    var redirect = args?.redirect;

    setloading(true)



    var postData = JSON.stringify(neworderData);

    fetch(serverUrl + "wp-json/combo-store/v2/create_shipping_method", {
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
              router.push(`/orders/${res?.order_id}`);

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

    fetch(serverUrl + "wp-json/combo-store/v2/get_shipping_methods", {
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







  function callbackTitle(entry, columnIndex) {

    return (
      <td data-label="ID" className="text-left px-4 "
        key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5">
          <Link className=" text-gray-600 font-bold" href={`/settings/shipping-zones/${entry.id}`}>
            {"#" + entry.id}
          </Link>
          <div className="flex flex-col text-xs"><div>Created:</div> <div>{formatDate(entry.created_at)}</div></div>
          <div className="flex flex-col text-xs"><div>Updated:</div> <div>{formatDate(entry.updated_at)}</div></div>
        </div>
      </td>

    );
  }
  function callbackUserName(entry, columnIndex) {



    return (
      <td data-label="Customer" className=""
        key={columnIndex}>
        <div className={`flex flex-col gap-2 py-2 sm:pr-5 text-right lg:text-left text-sm `}


        >
          <div>{entry.name}</div>

        </div>

      </td>

    );
  }
  function callbackRegion(entry, columnIndex) {

    var settings = entry?.settings?.length != 0 ? JSON.parse(entry?.settings) : []


    var countriesX = settings?.countries

    return (
      <td data-label="Customer" className=""
        key={columnIndex}>
        <div className={`flex flex-col gap-2 py-2 sm:pr-5 text-right lg:text-left text-sm `}


        >
          {/* {JSON.stringify(settings?.countries)} */}

          <div>{entry.region}</div>
          <div className="text-xs">
            {countriesX?.map((item, index) => {
              return (
                <div key={index}>
                  {countriesList[item].label},
                </div>
              )
            })}

          </div>

        </div>

      </td>

    );
  }




  function callbackStatus(entry, columnIndex) {



    return (
      <td data-label="Status" className="text-left text-sm "
        key={columnIndex}>

        <div className={` text-xs `}>
          {(entry.status == 1) && (
            <span className="bg-green-400 px-2 py-1 rounded-sm text-white">Active</span>
          )}
          {(entry.status == 0) && (
            <span className="bg-gray-400 px-2 py-1 rounded-sm text-white">Inactive</span>
          )}



        </div>





      </td>

    );
  }

  function callbackAction(entry, columnIndex) {



    return (
      <td data-label="Status" className=" pr-5 text-sm "
        key={columnIndex}>

        <div className="flex justify-end">

          <PopoverButton buttonLabel={(" ")} buttonClass="p-2 flex gap-2 items-center rounded-sm text-sm cursor-pointer  bg-gray-600 hover:bg-gray-400 text-white" buttonIcon={<IconEdit size={16} />} title={"Edit"} position={""}>

            <div className="p-5 bg-gray-400">
              <ShippingMethodEdit id={entry.id} zoneId={zoneId} zoneCountries={zoneCountries} />
            </div>

          </PopoverButton>


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







  var orderStatusPrams = {
    all: { label: 'All', value: '' },
    pending: { label: 'Pending', value: 'pending' },
    completed: { label: 'Completed', value: 'completed' },
    delivered: { label: 'Delivered', value: 'delivered' },
    canceled: { label: 'Canceled', value: 'canceled' },
    refunded: { label: 'Refunded', value: 'refunded' },
    failed: { label: 'Failed', value: 'failed' },
    processing: { label: 'Processing', value: 'processing' },
    hold: { label: 'Hold', value: 'hold' }
  }

  var paymentStatusPrams = {

    all: { label: "All", value: "" },
    pending: { label: "Pending", value: "pending" },
    paid: { label: "Paid", value: "paid" },
    failed: { label: "Failed", value: "failed" },
    delayed: { label: "Delayed", value: "delayed" },
    due: { label: "Due", value: "due" },

  }




  return (
    <div className="bg-gray-300 flex flex-col gap-5 xl:p-5 p-2">

      <div className="flex gap-3 w-full justify-between items-center ">



        <div className="flex flex-wrap gap-3 items-center">


          <PopoverButton wrapperClass={`bg-gray-200 `} buttonLabel={("Add Shipping Method")} buttonIcon={<IconFileDollar />} title={"Add Shipping Method"} position={""}>

            <div className="p-5 bg-gray-300">

              <ShippingMethodCreate zoneId={zoneId} zoneCountries={zoneCountries} onOrderCreated={onOrderCreated} />
            </div>

          </PopoverButton>




        </div>
        <div className=" flex gap-2">




          <div className="flex gap-2">



            {selectedRows?.length > 0 && (
              <>


                <div
                  className="px-3 py-2 items-center rounded-sm bg-red-600 hover:bg-red-500 text-white cursor-pointer"
                  onClick={() => {
                    if (confirm("Please confirm?")) {
                      delete_shipping_zones()
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




    </div>
  );
};

export default ShippingMethods;