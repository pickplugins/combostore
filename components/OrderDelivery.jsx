"use client";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconPhoneCall, IconBrandWhatsapp, IconMail, IconMailForward, IconCopy, IconPhone, IconRosetteDiscountCheck, IconX, IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconSearch, IconShoppingCartCancel, IconLetterX, IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";




import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from '../components/LocationPicker';

import WidgetWrapper from '../components/WidgetWrapper';

import GoogleMapDirections from '../components/GoogleMapDirections';
import PopoverButton from '../components/PopoverButton';
import UsersPicker from '../components/shop-elements/UsersPicker';
import Spinner from "../components/Spinner";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



const OrderDelivery = (props) => {
  const { formatDate } = useUtilsStore()


  const { token, settings, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()

  var order_id = props?.order_id
  var [orderData, setorderData] = useState(null);

  var userid = orderData?.userid


  var [loading, setloading] = useState(false);
  var [deliveryData, setdeliveryData] = useState();
  var [riderData, setriderData] = useState(null);
  var [directions, setDirections] = useState(null);

  useEffect(() => {
    get_order();
  }, [order_id]);

  useEffect(() => {
    get_delivery();
  }, []);

  useEffect(() => {

    get_rider(deliveryData?.rider_id).then((rider) => {
      setriderData(rider)
    });



  }, [deliveryData?.rider_id]);


  function get_delivery() {


    // if (!token) {
    //   throw new Error("No token found");
    // }

    if (!order_id) {
      addNotification({ type: 'error', title: 'Order ID not found', content: 'Please provide an order ID' })
      return;
    }


    var postData = {
      order_id: order_id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_delivery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: postData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {





            var errors = res?.errors;
            var success = res?.success;
            var delivery = res?.delivery;



            setloading(false);

            if (delivery.id != null) {

              setdeliveryData(delivery)

              setDirections({

                origin: delivery?.startLatLng,
                destination: delivery?.endLatLng,
                waypoints: []
              })
            }








            // setTimeout(() => {
            // 	setaddTask({ ...addTask, title: "", success: null, errors: null })

            // }, 3000);
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
    //   throw new Error("No token found");
    // }

    setloading(true);

    var postData = {
      id: order_id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: postData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            // setorderData()

            // var errors = res?.errors;
            // var success = res?.success;
            var order = res?.order;


            setloading(false);
            setorderData(order)



            // setTimeout(() => {
            // 	setaddTask({ ...addTask, title: "", success: null, errors: null })

            // }, 3000);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }

  async function get_rider(rider_id) {
    const postData = JSON.stringify({ id: rider_id });

    setloading(true);

    return fetch(serverUrl + "wp-json/combo-store/v2/get_rider", {
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
        return response.json();
      })
      .then((res) => {
        setloading(false);
        return res?.rider; // <-- THIS is now returned to the caller
      })
      .catch((error) => {
        setloading(false);
        return null; // or throw error
      });
  }






  function start_delivery() {


    // if (!token) {
    // 	throw new Error("No token found");
    // }




    var newDeliveryData = {
      customer_id: userid,
      order_id: order_id,
      rider_id: "",
      type: "",
      status: "started",
      notes: "",
      startLatLng: { "lat": 25.750, "lng": 89.253 },
      endLatLng: orderData?.delivery_location,
    };

    setDirections({
      origin: newDeliveryData?.startLatLng,
      destination: newDeliveryData?.endLatLng,
      waypoints: []
    })


    var postData = JSON.stringify(newDeliveryData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/start_delivery", {
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
            var delivery_id = res?.delivery_id;

            setloading(false);


            var status = res?.status;
            var message = res?.message;

            if (status == 'success') {
              setdeliveryData({ ...deliveryData, id: delivery_id })

              get_delivery()
              addNotification({ type: 'success', title: 'Delivery started', content: message })
            } else {
              addNotification({ type: 'error', title: 'Delivery started failed', content: message })

            }





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

  function onPickRider(args) {

    get_rider(args?.ID).then((rider) => {
      setriderData(rider)

      setdeliveryData({ ...deliveryData, rider_id: args?.ID })
    });
  }
  function onLocationSelect(coords) {



    setdeliveryData({ ...deliveryData, startLatLng: coords });
  }





  const requiredRoles = ["administrator", "rider"];
  const customerRoles = ["customer"];

  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));
  const isCustomer = customerRoles.some(role => userDataX?.roles?.includes(role));



  return (

    <div className='flex flex-col gap-5'>



      {!deliveryData?.id && (
        <div className="flex bg-white p-5 rounded-sm items-center justify-between">
          <div>Delivery hasn't started.</div>
          <div className='flex    items-center gap-2'>

            {loading && (
              <Spinner />
            )}

            <div
              onClick={(ev) => {
                start_delivery();
              }}
              className="  rounded-sm cursor-pointer px-4 py-2 bg-[#1b0e9f] text-white flex gap-2 w-max">
              {("Start Delivery")}
            </div>
          </div>
        </div>
      )}



      {deliveryData?.id && (

        <>

          {deliveryData?.status?.length > 0 && (
            <div className='flex gap-3 items-center  justify-end'>


              <div className='flex gap-2 items-center'>
                {loading && (

                  <Spinner />

                )}
                <div className='p-2  rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white'

                  onClick={ev => {
                    update_delivery()
                  }}
                >Update</div>

              </div>


            </div>
          )}

          <WidgetWrapper collapsible={true} title="Delivery">

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5  ">

              <div>
                <div htmlFor="">Courier</div>

                <select name="shipping_method" className=" w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"

                  value={deliveryData?.courier} id="" onChange={(ev) => {


                    var courier = ev.target.value;


                    setdeliveryData({
                      ...deliveryData,
                      courier: courier,
                    });
                  }}>

                  <option value="">Choose</option>
                  <option value="comboStore">ComboStore Delivery</option>
                  <option value="steadfast">Steadfast Courier</option>
                  <option value="pathao">Pathao Courier</option>
                  <option value="karatoa">Karatoa Courier</option>
                  <option value="sundarban">Sundarban Courier</option>
                </select>


              </div>
              <div>
                <div htmlFor="">Status</div>

                <select name="status" className=" w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={deliveryData?.status} id="" onChange={(ev) => {


                  var status = ev.target.value;



                  if (status == "started") {
                    if (deliveryData?.rider_id == null) {
                      addNotification({ type: 'error', title: 'Rider not selected', content: 'Please select a rider' })
                      return;
                    }


                  }

                  setdeliveryData({
                    ...deliveryData,
                    status: ev.target.value,
                  });
                }}>
                  <option value="">Choose</option>
                  <option value="pending">Pending</option>
                  <option value="started">Started</option>
                  <option value="paused">Paused</option>
                  <option value="resumed">Resumed</option>
                  <option value="delivered">Delivered</option>
                  <option value="canceled">Canceled</option>

                </select>



              </div>

              {deliveryData?.courier == 'kidobazar' && (
                <div>
                  <div htmlFor="">Type</div>
                  <select name="type" className=" w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0 " value={deliveryData?.type} id="" onChange={(ev) => {

                    var type = ev.target.value;

                    setdeliveryData({
                      ...deliveryData,
                      type: type,
                    });
                  }}>
                    <option value="">Choose</option>
                    <option value="express">Express</option>
                    <option value="normal">Normal</option>
                  </select>
                </div>
              )}



              {deliveryData?.courier == 'steadfast' && (
                <>

                  <div>
                    <div htmlFor="">Type</div>
                    <select name="type" className=" w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0 " value={deliveryData?.type} id="" onChange={(ev) => {

                      var type = ev.target.value;

                      setdeliveryData({
                        ...deliveryData,
                        type: type,
                      });
                    }}>
                      <option value="">Choose</option>
                      <option value="0">Home Delivery</option>
                      <option value="1">Hub Pickup</option>
                    </select>
                  </div>


                  <div className="">
                    <div htmlFor="">Consignment ID</div>
                    <input type="text" name="" id="" className=" w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0 "
                      value={deliveryData?.consignment_id}
                      onChange={(ev) => {
                        setdeliveryData({
                          ...deliveryData,
                          consignment_id: ev.target.value,
                        });
                      }} />
                  </div>
                  <div className="">
                    <div htmlFor="">Tracking code</div>
                    <input type="text" name="" id="" className=" w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0 "
                      value={deliveryData?.tracking_code}
                      onChange={(ev) => {
                        setdeliveryData({
                          ...deliveryData,
                          tracking_code: ev.target.value,
                        });
                      }} />
                  </div>


                </>
              )}








            </div>

          </WidgetWrapper>


          {deliveryData?.courier == 'steadfast' && (

            <WidgetWrapper collapsible={true} title="Steadfast">


              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items">

                  <a className="text-white bg-gray-600  px-3 py-2 rounded-sm cursor-pointer" href={`https://steadfast.com.bd/t/${deliveryData?.tracking_code}`} target="_blank">Tracking on Steadfast</a>

                </div>
                <div>Consignment ID: {deliveryData?.consignment_id}</div>
                <div>Tracking Code: {deliveryData?.tracking_code}</div>

              </div>

            </WidgetWrapper>
          )}


          {/* {directions?.origin && (
        <div className="pb-20">
          <GoogleMapDirections origin={directions?.origin} destination={directions?.destination} waypoints={directions?.waypoints} />
        </div>
      )} */}


          {/* <div className="bg-white shadow-sm  p-5 rounded-sm">
        {deliveryData?.startLatLng && (
          <div className=" flex flex-col gap-4">
            <div className="text-lg">Rider Pickup Location</div>
            <LocationPicker markerDraggable={false} latlng={JSON.parse(deliveryData?.startLatLng)} />
          </div>
        )}
      </div> */}

          {deliveryData?.courier == 'comboStore' && (


            <>
              <WidgetWrapper collapsible={true} title="Rider">

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">

                    <UsersPicker role={`rider`} onPick={onPickRider} />
                  </div>



                  {riderData?.id && (
                    <div className="flex justify-between ">
                      <div className="flex gap-3">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                          <Image src={riderData?.avatar} width={50} height={50} alt={``} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Link className="text-lg" href={`/rider/${riderData.id}`}>{riderData?.name}</Link>
                          <div className="flex flex-col gap-2 items-top">

                            <div className="flex items-center gap-2"><IconMail width={20} height={20} />

                              <div>{riderData?.email}</div>

                              <div className="flex gap-2">
                                <a href={`mailto:${riderData?.email}`} className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer"><IconMailForward size={16} /> Send Mail</a>
                                <div className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer" onClick={() => {
                                  navigator.clipboard.writeText(riderData?.email)
                                  addNotification({ type: 'success', title: 'Email Copied', content: "Email Copied" })
                                }}>
                                  <IconCopy size={16} /> Copy
                                </div>
                              </div>

                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex gap-3 items-center">
                                <div className="flex items-center gap-2"><IconPhone width={20} height={20} /></div>
                                <div>{riderData?.phone}</div>
                                <a href={`tel:${riderData?.phone}`} className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer"><IconPhoneCall size={16} /> Call</a>
                                <a href={`https://wa.me/${riderData?.phone}`} className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer"><IconBrandWhatsapp size={16} /> WhatsApp</a>
                                <div className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer" onClick={() => {
                                  navigator.clipboard.writeText(riderData?.phone)
                                  addNotification({ type: 'success', title: 'Phone Copied', content: "Phone Copied" })
                                }}>
                                  <IconCopy size={16} /> Copy
                                </div>
                              </div>
                            </div>



                          </div>


                        </div>









                      </div>
                      <div className="text-right hidden">
                        <div>Total Delivery: 125</div>
                        <div>Rating : 4.8/5</div>
                      </div>
                    </div>
                  )}
                </div>


              </WidgetWrapper>



              <WidgetWrapper collapsible={true} title="Pickup Location">


                <LocationPicker markerDraggable={true} latlng={deliveryData?.startLatLng} onLocationSelect={(coords) => {
                  setdeliveryData(prev => ({ ...prev, startLatLng: coords }));
                }} />
              </WidgetWrapper>
              <WidgetWrapper collapsible={true} title="Delivery Location">


                <LocationPicker markerDraggable={true} latlng={deliveryData?.endLatLng} onLocationSelect={(coords) => {
                  setdeliveryData(prev => ({ ...prev, endLatLng: coords }));
                }} />
              </WidgetWrapper>
            </>
          )}






        </>

      )}












    </div>















  );
};

export default OrderDelivery;