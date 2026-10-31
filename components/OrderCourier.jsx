"use client";
import React, { useState, useEffect } from "react";
import { IconFileDollar, IconAlertTriangle, IconTruckDelivery, IconClipboardTextFilled, IconDotsVertical, IconTrolley } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import PopoverButton from './PopoverButton';
import Spinner from './Spinner';
import Image from "next/image";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const OrderCourier = ({ order_id, deliveryData }) => {
  // const [activeTab, setActiveTab] = useState(0);

  const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, couriersPrams, settings } = useCounterStore()


  var [courierData, setcourierData] = useState({ order_id: order_id, courier: deliveryData?.courier, delivery_type: 0 });
  var [loading, setloading] = useState(false);
  var [redxAreas, setredxAreas] = useState([]);


  var couriers = settings?.couriers


  function get_redx_areas() {


    // if (!token) {
    //   throw new Error("No token found");
    // }


    var postData = {};
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_redx_areas",
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






            // var errors = res?.errors;
            // var success = res?.success;
            // var delivery = res?.delivery;



            setloading(false);

            // if (delivery.id != null) {

            //   setdeliveryData(delivery)


            // }








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


  function send_to_courier() {


    // if (!token) {
    //   throw new Error("No token found");
    // }


    var postData = { courierData: courierData };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/send_to_courier",
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






            // var errors = res?.errors;
            // var success = res?.success;
            // var delivery = res?.delivery;



            setloading(false);

            // if (delivery.id != null) {

            //   setdeliveryData(delivery)


            // }








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




  return (
    <div index={order_id} className="flex justify-center gap-2 items-center">



      <PopoverButton wrapperClass={`bg-white flex justify-end `} buttonLabel={" "} buttonIcon={<IconTrolley />} title={"Send to Courier"} position={"bottomRight"} buttonClass={`bg-white p-0 text-gray-400 hover:bg-gray-200 rounded-sm p-1 hover:text-gray-600 cursor-pointer justify-end`}>

        <div className="p-2 w-[400px] bg-gray-200 text-left">









          <div className=" flex flex-col gap-3 ">

            <div className=" flex flex-col gap-3 ">
              <div className="  ">{('Select courier')}</div>
              <select name="shipping_method" value={courierData?.courier} id="" onChange={ev => {
                var value = ev.target.value;
                setcourierData({ ...courierData, courier: value })
              }}>
                <option value="">Choose</option>

                {Object.entries(couriersPrams)?.map((args, index) => {
                  var index = args[0];
                  var item = args[1];



                  return (
                    <>
                      {couriers && (
                        <>
                          {couriers[index]?.enabled && (
                            <option value={item.id}>{item.label}</option>
                          )}
                        </>
                      )}

                    </>
                  )

                })}
                {/* <option value="kidobazar">KidoBazar Courier</option>
                <option value="steadfast">Steadfast Courier</option>
                <option value="pathao">Pathao Courier</option>
                <option value="redx">Redx Courier</option>
                <option value="sundarban">Sundarban Courier</option> */}
              </select>
            </div>
            {courierData?.courier == 'steadfast' && (
              <div className=" flex flex-col gap-3 ">
                <div className="  ">{('Select delivery type')}</div>
                <select name="shipping_method" value={courierData?.delivery_type} id="" onChange={ev => {
                  var value = ev.target.value;
                  setcourierData({ ...courierData, delivery_type: value })
                }}>
                  <option value="">Choose</option>
                  <option value="0">Home Delivery</option>
                  <option value="1">Hub Pickup</option>
                </select>
              </div>
            )}
            {courierData?.courier == 'courrierfast' && (
              <>

                {JSON.stringify(courierData)}


                <div className=" flex flex-col gap-3 ">
                  <div className="  ">{('Delivery type')}</div>
                  <select name="deliveryServiceType" value={courierData?.deliveryServiceType} id="" onChange={ev => {
                    var value = ev.target.value;
                    setcourierData({ ...courierData, deliveryServiceType: value })
                  }}>
                    <option value="">Choose</option>
                    <option value="regular">Regular</option>
                  </select>
                </div>

                <div className=" flex flex-col gap-3 ">
                  <div className="  ">{('Delivery instructions')}</div>
                  <textarea type={`text`} name="deliveryInstructions" value={courierData?.deliveryInstructions} id="" onChange={ev => {
                    var value = ev.target.value;
                    setcourierData({ ...courierData, deliveryInstructions: value })
                  }} />
                </div>


              </>
            )}








            {courierData?.courier == 'pathao' && (
              <div className=" flex flex-col gap-3 ">
                <div className="  ">{('Select delivery type')}</div>
                <select name="delivery_type" value={courierData?.delivery_type} id="" onChange={ev => {
                  var value = ev.target.value;
                  setcourierData({ ...courierData, delivery_type: value })
                }}>
                  <option value="">Choose</option>
                  <option selected value="48">Normal Delivery</option>
                  <option value="12">On Demand Delivery</option>
                </select>
              </div>
            )}
            {courierData?.courier == 'pathao' && (
              <div className=" flex flex-col gap-3 ">
                <div className="  ">{('Select item type')}</div>
                <select name="item_type" value={courierData?.item_type} id="" onChange={ev => {
                  var value = ev.target.value;
                  setcourierData({ ...courierData, item_type: value })
                }}>
                  <option value="">Choose</option>
                  <option selected value="1">Document</option>
                  <option value="2">Parcel</option>
                </select>
              </div>
            )}
            {courierData?.courier == 'redx' && (
              <div className=" flex flex-col gap-3 ">
                <div className="  ">{('Parcel weight(KG)')}</div>
                <input type={`text`} name="parcel_weight" value={courierData?.parcel_weight} id="" onChange={ev => {
                  var value = ev.target.value;
                  setcourierData({ ...courierData, parcel_weight: value })
                }} />

              </div>
            )}
            {courierData?.courier == 'redx' && (
              <div className=" flex flex-col gap-3 ">
                <div className="  ">{('Delivery area')}</div>
                <div className="  " onClick={() => get_redx_areas()}>Load Areas</div>
                <input type={`text`} name="delivery_area" value={courierData?.delivery_area} id="" onChange={ev => {
                  var value = ev.target.value;
                  setcourierData({ ...courierData, delivery_area: value })
                }} />

              </div>
            )}









            <div className="flex  gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max" onClick={() => send_to_courier()}>{loading ? <Spinner /> : 'Send to Courier'}</div>

              {loading && (
                <Spinner />
              )}


            </div>



          </div>

        </div>

      </PopoverButton>


      <div className="bg-gray-200 rounded-sm p-1">

        {courierData?.courier == 'steadfast' && (
          <>

            <Image src={`/steadfast.png`} width={80} height={80} alt={``} />

          </>
        )}
        {courierData?.courier == 'pathao' && (

          <>
            <Image src={`/pathao.png`} width={70} height={70} alt={``} />

          </>

        )}
        {courierData?.courier == 'redx' && (

          <>
            <Image src={`/redx.png`} width={50} height={60} alt={``} />

          </>

        )}
      </div>




    </div>

  );
};

export default OrderCourier;
