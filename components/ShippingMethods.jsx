"use client";
import { useRouter } from "next/navigation";

import EntriesTable from "../components/EntriesTable";
import { useState, useEffect, useContext, useRef } from "react";
import { IconPlus, IconTrash, IconEdit } from "@tabler/icons-react";


import PopoverButton from '../components/PopoverButton';
import ShippingMethodEdit from '../components/ShippingMethodEdit';
import ShippingMethodCreate from '../components/ShippingMethodCreate';
import countries from '../lib/Countries';

import { useCounterStore } from '../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../store/useUtilsStore';


/* Status pills, in place of solid `bg-green-400` blocks with white text. */
const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

const STATUS_BADGES = {
  "1": { label: "Active", classes: "bg-green-50 text-green-700 ring-green-200" },
  "0": { label: "Inactive", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

const TOOLBAR_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer";

const DANGER_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg bg-red-600 px-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer";

const ICON_BUTTON =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

/* The panel the create and edit forms open in. */
const PANEL =
  "mx-auto fixed inset-x-0 top-10 max-h-[85vh] w-max max-w-[95vw] overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl z-[999]";


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

  /*
    The country lookup was declared and read but never populated, so every
    region cell with a country in it threw on `countriesList[item].label`.
  */
  useEffect(() => {

    var items = {};

    countries.map(country => {
      items[country.code2] = { label: country.name, value: country.code2, states: country.states }
    })

    setcountriesList(items)

  }, [countries]);

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

    /*
      `#id` used to link to /settings/shipping-zones/<id> using the method's
      own id, which opens an unrelated zone. There is no page for a single
      method - it is edited in the panel on this row - so it is plain text.
    */
    return (
      <td data-label="ID" className="text-left px-4 "
        key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5">

          <div className="font-mono font-semibold text-gray-600">{"#" + entry.id}</div>

          <div className="mt-1 text-xs text-gray-500">
            <div className="flex flex-col">
              <span className="text-gray-400">Created</span>
              <span className="tabular-nums">{entry.created_at ? formatDate(entry.created_at) : "-"}</span>
            </div>
            <div className="mt-1 flex flex-col">
              <span className="text-gray-400">Updated</span>
              <span className="tabular-nums">{entry.updated_at ? formatDate(entry.updated_at) : "-"}</span>
            </div>
          </div>

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

    /*
      `entry.settings` is a JSON string. This read
      `entry?.settings?.length != 0 ? JSON.parse(entry?.settings) : []`,
      which on a missing value compares `undefined != 0` - true - and then
      parsed `undefined`, throwing from render.
    */
    var settings = {};

    try {
      settings = entry?.settings ? JSON.parse(entry.settings) : {};
    } catch (_error) {
      settings = {};
    }

    var countriesX = settings?.countries || [];

    return (
      <td data-label="Region" className=""
        key={columnIndex}>
        <div className="flex flex-col gap-1 py-2 text-right text-sm sm:pr-5 lg:text-left">

          <div className="capitalize text-gray-700">{entry.region}</div>

          {countriesX.length > 0 && (
            <div className="flex flex-wrap justify-end gap-1 lg:justify-start">
              {countriesX.map((item, index) => {
                return (
                  <span key={`${item}-${index}`} className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-600">
                    {countriesList?.[item]?.label || item}
                  </span>
                )
              })}
            </div>
          )}

        </div>

      </td>

    );
  }




  function callbackStatus(entry, columnIndex) {

    const badge = STATUS_BADGES[String(entry.status)];

    return (
      <td data-label="Status" className="text-left text-sm "
        key={columnIndex}>

        {badge && (
          <span className={`${BADGE_BASE} ${badge.classes}`}>{badge.label}</span>
        )}

      </td>

    );
  }

  function callbackAction(entry, columnIndex) {

    return (
      <td data-label="Action" className=" pr-5 text-sm "
        key={columnIndex}>

        <div className="flex justify-end">

          <PopoverButton buttonLabel={""} buttonClass={ICON_BUTTON} buttonIcon={<IconEdit size={16} />} title={"Edit Shipping Method"} position={""} popoverClass={PANEL}>

            <div className="bg-gray-50 p-5">
              <ShippingMethodEdit id={entry.id} zoneId={zoneId} zoneCountries={zoneCountries} onOrderCreated={onOrderCreated} />
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
    <div className="flex flex-col gap-4">

      {/* The section used to sit on a `bg-gray-300` slab, with its two
          panels on `bg-gray-300` and `bg-gray-400` behind the forms. */}
      <div className="flex w-full flex-wrap items-center justify-between gap-3">



        <div className="flex flex-wrap gap-3 items-center">


          <PopoverButton wrapperClass={``} buttonClass={TOOLBAR_BUTTON} buttonLabel={("Add Shipping Method")} buttonIcon={<IconPlus size={16} />} title={"Add Shipping Method"} position={""} popoverClass={PANEL}>

            <div className="bg-gray-50 p-5">

              <ShippingMethodCreate zoneId={zoneId} zoneCountries={zoneCountries} onOrderCreated={onOrderCreated} />
            </div>

          </PopoverButton>




        </div>
        <div className=" flex gap-2">




          <div className="flex gap-2">



            {selectedRows?.length > 0 && (
              <>


                <div
                  className={DANGER_BUTTON}
                  onClick={() => {
                    if (confirm("Please confirm?")) {
                      delete_shipping_zones()
                    }
                  }}>

                  <IconTrash size={16} />
                  {("Delete")} ({selectedRows.length})

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