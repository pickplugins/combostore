'use client'
import React, { use } from 'react'
import { useState, useEffect, useContext } from "react";

import { useCounterStore } from '../../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import PopoverButton from '../../../../components/PopoverButton';
import { IconChevronDown, IconChevronUp, IconSquare, IconUsersPlus, IconTrash, IconTrolley, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";
import { useUtilsStore } from '../../../../store/useUtilsStore';
import LocationPicker from '../../../../components/LocationPicker';
import Link from "next/link";
import Tabs from '../../../../components/Tabs';
import Tab from '../../../../components/Tab';
import Spinner from '../../../../components/Spinner';



const page = ({ params }) => {
  const { id } = use(params)


  const { wrapCurrency } = useUtilsStore()

  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [loading, setloading] = useState(false);

  var [orderData, setorderData] = useState(null);
  var [lineItems, setlineItems] = useState(null);

  var [subscriptionData, setsubscriptionData] = useState(null);
  var [deliveryData, setdeliveryData] = useState(null);
  var [trackings, settrackings] = useState({ posts: [] });

  var [newDeliveryData, setnewDeliveryData] = useState({
    customer_id: orderData?.userid,
    order_id: id,
    rider_id: "",
    status: "",
    notes: "",
    startLatLng: "",
    endLatLng: "",
  });
  var [newTrackingData, setNewTrackingData] = useState({
    delivery_id: deliveryData?.id,
    order_id: id,
    status: "",
    latlng: "",
    notes: "",
  });








  function start_delivery() {


    // if (!token) {
    // 	//throw new Error("No token found");
    // }


    var postData = JSON.stringify(newDeliveryData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/start_delivery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
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



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }



  function get_order() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }
    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/get_order", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {




            var order = res?.order;
            var subscription = res?.subscription;
            var delivery = res?.delivery;
            var line_items = res?.line_items;




            setorderData(order)
            setsubscriptionData(subscription)
            setdeliveryData(delivery)
            setlineItems(line_items)


            setnewDeliveryData({ ...deliveryData, customer_id: order?.userid, order_id: order?.id })
            setNewTrackingData({ ...newTrackingData, delivery_id: delivery?.id, order_id: order?.id })


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

  // useEffect(() => {
  // 	get_order();
  // }, []);

  useEffect(() => {
    get_order();
  }, [id]);


  useEffect(() => {


    if (!deliveryData) {
      return;
    }

    get_trackings();
  }, [deliveryData]);


  function update_subscription() {

    setloading(true)

    var postData = JSON.stringify(subscriptionData);

    fetch(serverUrl + "wp-json/combo-store/v2/update_subscription", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
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
              addNotification({ type: 'success', title: 'Subscription update', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Subscription update failed', content: message })
            }



            setTimeout(() => {
              setloading(false)

            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }
  function update_delivery() {

    setloading(true)

    var postData = JSON.stringify(deliveryData);

    fetch(serverUrl + "wp-json/combo-store/v2/update_delivery", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
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
              addNotification({ type: 'success', title: 'Delivery update', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Delivery update failed', content: message })
            }



            setTimeout(() => {
              setloading(false)

            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }
  function delete_trackings(ids) {


    if (!token) {
      //throw new Error("No token found");
    }

    if (queryPrams.page < 0) {
      return;
    }

    ids = ids != undefined ? ids : selectedRows;



    var postData = {
      ids: ids,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_trackings", {
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

            get_trackings();




          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }
  function add_tracking() {




    var postData = JSON.stringify(newTrackingData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/add_tracking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
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


            get_trackings();


          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }




  function get_trackings() {


    if (!deliveryData?.id) {
      return;
    }




    var postData = {

      delivery_id: deliveryData?.id,
    };
    postData = JSON.stringify(postData);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_trackings", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {




            var posts = res?.posts;
            var total = res?.total;
            var max_pages = res?.max_pages;

            settrackings({ posts: posts, total: total, maxPages: max_pages })
            //setqueryPrams({ ...queryPrams, loading: false })
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







  function formatDate(dateInput) {

    // 

    var format = "d/m/Y";
    dateInput = dateInput == undefined ? '' : dateInput;
    // Ensure date is in a proper format for parsing
    const dateObj = new Date(dateInput.replace(" ", "T"));

    if (isNaN(dateObj)) {
      throw new Error("Invalid date format");
    }

    // Extract date components
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dateObj.getFullYear();

    // Replace format placeholders with actual values
    //return ;

    return (
      <>
        {format.replace("d", day).replace("m", month).replace("Y", year)}
      </>

    );

  }










  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/* Page heading: these detail screens showed no title at all. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          {("Incomplete Order")} <span className="font-normal text-gray-400">#{id}</span>
        </h1>
      </div>



      <Tabs activeTab="options"
        orientation="horizontal"
        activeClass="active-tab "
        navsItemClass="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        navsItemActiveClass="bg-[#634FE5] text-white shadow-sm"

        navsWrapperClass="flex gap-1 border-b border-gray-200 pb-2"

        tabs={[
          { label: "Order", id: 'order' },
          { label: "Subscription", id: 'subscription' },
          { label: "Delivery", id: 'delivery' },
          { label: "Trackings", id: 'trackings' },
        ]}>
        <Tab index={0} id="order">

          {(!loading && orderData) && (

            <div className='flex flex-col gap-5'>

              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm p-5">

                <h3 className="text-2xl mb-4">{("Order Details ")}</h3>


                <div className='flex flex-wrap gap-5 justify-between my-6'>

                  <div className='flex flex-col gap-3'>

                    <div className='text-lg font-bold'>Order: #{orderData?.id}</div>
                    <div>Date: {(orderData?.created_at)}</div>

                  </div>
                  <div className='lg:text-right text-left flex flex-col gap-3'>
                    <div className='font-bold'>Billing To:</div>

                    <ul>
                      <li className="">{orderData?.billing_name}</li>
                      <li className=""> {orderData?.company}</li>
                      <li className=""> {orderData?.billing_address}</li>
                      <li className=""> {orderData?.city}</li>
                      <li className=""> {orderData?.state}</li>
                      <li className=""> {orderData?.postcode}</li>
                      <li className=""> {orderData?.country}</li>
                      <li className=""> {orderData?.billing_email}</li>
                      <li className=""> {orderData?.billing_phone}</li>

                    </ul>


                    {orderData?.shipping_name?.length > 0 && (

                      <>
                        <div>Ship To:</div>

                        <ul>
                          <li className="">{orderData?.shipping_name}</li>
                          <li className=""> {orderData?.shipping_address}</li>
                          <li className=""> {orderData?.shipping_phone}</li>

                        </ul>
                      </>
                    )}


                  </div>
                </div>


                <div>
                  <ul className="flex flex-col">
                    {lineItems?.map(item => {


                      return (

                        <li key={item.title} className="flex py-4 gap-3 justify-between border-0 border-b border-dashed border-b-gray-400">
                          <div className='flex-1'>
                            <a target="_blank" className="italic " href={item.link}>

                              <div dangerouslySetInnerHTML={{ __html: `${item.title} X ${item.quantity}` }}></div>

                            </a>
                          </div>
                          <div className='flex justify-end gap-2'>
                            <div>{wrapCurrency(item.price)} X {item.quantity}</div>
                            <div>=</div>
                            <div>{wrapCurrency(item.price * item.quantity)} </div>
                          </div>
                        </li>

                      )

                    })}
                    <li className="flex py-4 justify-between border-0 border-b border-dashed border-b-gray-400">
                      <span>Total:</span> <div>
                        <span>{wrapCurrency(orderData?.total_amount)}</span>
                      </div>
                    </li>

                    <li className="flex py-4 justify-between border-0 border-b border-dashed border-b-gray-400">
                      <span>Discount:</span>

                      <div>
                        <span>-{wrapCurrency(orderData?.discount_amount)}</span>
                      </div>
                    </li>
                    <li className="flex py-4 justify-between border-0 border-b border-dashed border-b-gray-400">
                      <span>Shipping Charge:</span>

                      <div>
                        <span>{wrapCurrency(orderData?.shipping_amount)}</span>
                      </div>
                    </li>


                    <li className="flex py-4 justify-between border-0 border-b border-dashed border-b-gray-400">
                      <span>Subtotal:</span>

                      <div>
                        <span>{wrapCurrency(orderData?.subtotal_amount)}</span>
                      </div>
                    </li>
                    <li className="flex py-4 justify-between ">
                      <span>Payment Method:</span> <div>
                        <span>{orderData?.payment_method}</span>
                      </div>
                    </li>

                  </ul>



                </div>

              </div>

              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm p-5">

                <div className="grid grid-cols-2 gap-3">

                  <div>
                    <h3 className="text-2xl my-5">{("Billing Address")} </h3>

                    <ul>
                      <li className="flex gap-2">{orderData?.billing_name}</li>
                      <li className="flex gap-2"> {orderData?.company}</li>
                      <li className="flex gap-2"> {orderData?.billing_address}</li>
                      <li className="flex gap-2"> {orderData?.city}</li>
                      <li className="flex gap-2"> {orderData?.state}</li>
                      <li className="flex gap-2"> {orderData?.postcode}</li>
                      <li className="flex gap-2"> {orderData?.country}</li>
                      <li className="flex gap-2"> {orderData?.billing_email}</li>
                      <li className="flex gap-2"> {orderData?.billing_phone}</li>

                    </ul>



                  </div>
                  <div>

                    {orderData?.shipping_address && (
                      <>
                        <h3 className="text-2xl my-5">{("Shipping Address")} </h3>

                        <ul>
                          <li className="flex gap-2">{orderData?.shipping_name}</li>
                          <li className="flex gap-2"> {orderData?.shipping_address}</li>
                          <li className="flex gap-2"> {orderData?.shipping_phone}</li>

                        </ul>
                      </>
                    )}



                  </div>


                </div>




              </div>

            </div>

          )}
        </Tab>
        <Tab index={1} id="subscription">
          <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm p-5">

            <div className='flex justify-between items-center'>
              <div className="text-xl flex gap-3 items-center">

                <div>Subscription</div>

                {subscriptionData?.id && (
                  <div>
                    <Link href={`/subscriptions/${subscriptionData?.id}/`}>#{subscriptionData?.id}</Link>
                  </div>
                )}

              </div>
              <div className='flex gap-2 items-center'>
                {loading && (

                  <Spinner />

                )}
                <div className='inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer'

                  onClick={ev => {
                    update_subscription()
                  }}
                >Update</div>

              </div>


            </div>








            <div className="border-0 border-b border-solid border-gray-200 flex gap-3 items-center ">
              <div className=" px-5 py-2 w-60 font-bold">{('Status')}</div>

              <div className="flex justify-between ">
                <div className=" my-3">

                  <select name="status" value={subscriptionData?.status} id="" onChange={ev => {
                    var value = ev.target.value;
                    setsubscriptionData({ ...subscriptionData, status: value })
                  }}>

                    <option value="active">Active</option>
                    <option value="paused">Pause</option>
                    <option value="canceled">Cancel</option>

                  </select>


                </div>




              </div>
            </div>
            <div className="border-0 border-b border-solid border-gray-200 flex gap-3 items-center">
              <div className=" px-5 py-2 w-60 font-bold">{("Interval")}</div>
              <div className=""> {subscriptionData?.renewal_interval}</div>

            </div>
            <div className="border-0 border-b border-solid border-gray-200 flex gap-3 items-center">
              <div className=" px-5 py-2 w-60 font-bold">{("Interval Count")}</div>
              <div className=""> {subscriptionData?.interval_count}</div>

            </div>


            <div className="border-0 border-b border-solid border-gray-200 flex gap-3 items-center ">
              <div className=" px-5 py-2 w-60 font-bold">{("Next Billing Date")}</div>

              <div className=""> {subscriptionData?.next_billing_date}</div>

            </div>
            <div className="border-0 border-b border-solid border-gray-200 flex gap-3 items-center ">
              <div className=" px-5 py-2 w-60 font-bold">{('Created')}</div>

              <div className=""> {subscriptionData?.created_at}</div>

            </div>


          </div>

        </Tab>
        <Tab index={2} id="delivery">


          <div className='flex flex-col gap-5'>

            <div >


              <div className='flex items-center gap-3'>




                {!deliveryData?.status == null && (
                  <PopoverButton buttonLabel={("Start Delivery")} buttonIcon={<IconTrolley />} title={"Start Delivery"} position={""}>

                    <div className='flex justify-end p-5'>
                      <div
                        onClick={(ev) => {
                          start_delivery();
                        }}
                        className="col-span-2 inline-flex items-center justify-center gap-2 !rounded-lg !border !border-gray-300 !bg-white px-3 py-2 text-sm font-medium text-gray-700 !shadow-sm transition-colors hover:!bg-gray-50 cursor-pointer">
                        {("Submit")}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-5 bg-gray-800 text-white">
                      <div>
                        <div htmlFor="">Rider</div>
                        <input
                          type="text"
                          placeholder=""
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full  !shadow-none "
                          value={newDeliveryData?.rider_id}
                          onChange={(ev) => {
                            setnewDeliveryData({
                              ...newDeliveryData,
                              rider_id: ev.target.value,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <div htmlFor="">status</div>

                        <select name="status" className=" !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm " value={newDeliveryData?.status} id="" onChange={(ev) => {
                          setnewDeliveryData({
                            ...newDeliveryData,
                            status: ev.target.value,
                          });
                        }}>
                          <option value="">Choose</option>
                          <option value="started">Started</option>
                          <option value="paused">Paused</option>
                          <option value="canceled">Canceled</option>
                        </select>



                      </div>


                      <div>
                        <div htmlFor="">Notes</div>

                        <textarea name="" id="" className=" w-full  "
                          value={newDeliveryData?.notes}
                          onChange={(ev) => {
                            setnewDeliveryData({
                              ...newDeliveryData,
                              notes: ev.target.value,
                            });
                          }}></textarea>


                      </div>

                      <div className=" ">
                        <div className="">Pickup Location</div>
                        <LocationPicker markerDraggable={true} latlng={newDeliveryData?.startLatLng} onLocationSelect={(coords) => {

                          setnewDeliveryData({ ...newDeliveryData, startLatLng: coords });



                        }} />
                      </div>



                    </div>

                  </PopoverButton>
                )}
                {deliveryData?.status != null && (
                  <div className='flex gap-3 items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                      <div htmlFor="">Status</div>

                      <select name="status" className=" !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm " value={deliveryData?.status} id="" onChange={(ev) => {
                        setdeliveryData({
                          ...deliveryData,
                          status: ev.target.value,
                        });
                      }}>
                        <option value="">Choose</option>
                        <option value="started">Started</option>
                        <option value="paused">Paused</option>
                        <option value="canceled">Canceled</option>
                      </select>



                    </div>

                    <div className='flex gap-2 items-center'>
                      {loading && (

                        <Spinner />

                      )}
                      <div className='inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer'

                        onClick={ev => {
                          update_delivery()
                        }}
                      >Update</div>

                    </div>


                  </div>
                )}


              </div>




            </div>
            <div>



              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm p-5">

                {orderData?.delivery_location && (
                  <div className=" flex flex-col gap-4">
                    <div className="text-lg">Delivery Location</div>
                    <LocationPicker markerDraggable={false} latlng={orderData?.delivery_location} />
                  </div>
                )}




              </div>

            </div>
          </div>


        </Tab>
        <Tab index={3} id="trackings">

          <PopoverButton buttonLabel={("Add Tracking")} buttonIcon={<IconTrolley />} title={"Add Tracking"} position={""}>

            <div className='bg-gray-800'>
              <div className='flex justify-end p-5'>
                <div
                  onClick={(ev) => {
                    add_tracking();
                  }}
                  className="col-span-2 inline-flex items-center justify-center gap-2 !rounded-lg !border !border-gray-300 !bg-white px-3 py-2 text-sm font-medium text-gray-700 !shadow-sm transition-colors hover:!bg-gray-50 cursor-pointer">
                  {("Submit")}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-5 bg-gray-800 text-white">
                <div>
                  <div htmlFor="">Rider</div>
                  <input
                    type="text"
                    placeholder=""
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full  !shadow-none "
                    value={newTrackingData?.rider_id}
                    onChange={(ev) => {
                      setNewTrackingData({
                        ...newTrackingData,
                        rider_id: ev.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <div htmlFor="">status</div>

                  <select name="status" className=" !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm " value={newTrackingData?.status} id="" onChange={(ev) => {
                    setNewTrackingData({
                      ...newTrackingData,
                      status: ev.target.value,
                    });
                  }}>
                    <option value="">Choose</option>
                    <option value="started">Started</option>
                    <option value="paused">Paused</option>
                    <option value="canceled">Canceled</option>
                  </select>



                </div>


                <div>
                  <div htmlFor="">Notes</div>

                  <textarea name="" id="" className=" w-full  "
                    value={newTrackingData?.notes}
                    onChange={(ev) => {
                      setNewTrackingData({
                        ...newTrackingData,
                        notes: ev.target.value,
                      });
                    }}></textarea>


                </div>

                <div className=" ">
                  <div className="">Pickup Location</div>
                  <LocationPicker markerDraggable={true} latlng={newTrackingData?.latlng} onLocationSelect={(coords) => {

                    setNewTrackingData({ ...newTrackingData, latlng: coords });



                  }} />
                </div>



              </div>
            </div>

          </PopoverButton>


          <div>

            {JSON.stringify(trackings)}


            {trackings?.posts?.map(tracking => {

              return (
                <div className='flex items-center gap-3'>

                  <div>{tracking.notes}</div>
                  <div>{tracking.latlng}</div>
                  <div>{tracking.status}</div>

                </div>
              )

            })}

          </div>

        </Tab>




      </Tabs>









    </div>
  )
}

export default page