"use client";
import React, { useState, useEffect } from "react";
import { IconFileDollar, IconAlertTriangle, IconTruckDelivery, IconClipboardTextFilled, IconDotsVertical, IconTrolley } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import PopoverButton from './PopoverButton';
import Spinner from './Spinner';
import Image from "next/image";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const SendToCourier = ({ order_id }) => {
  // const [activeTab, setActiveTab] = useState(0);

  const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, couriersPrams } = useCounterStore()



  var [deliveryData, setdeliveryData] = useState();
  var [loading, setloading] = useState(false);


  useEffect(() => {
    get_delivery();
  }, []);


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

  return (
    <div index={order_id} className="flex justify-center items-center">

      {JSON.stringify(deliveryData)}


      <PopoverButton wrapperClass={`bg-white flex justify-end px-2`} buttonLabel={" "} buttonIcon={<IconTrolley />} title={"Send to Courier"} position={"bottomRight"} buttonClass={`bg-white p-0 text-gray-400 hover:bg-gray-200 rounded-sm p-1 hover:text-gray-600 cursor-pointer justify-end`}>

        <div className="p-2 w-[400px] bg-gray-200 text-left">
          <div className=" flex flex-col gap-3 ">

            <div className=" flex flex-col gap-3 ">
              <div className="  ">{('Select courier')}</div>


              <select name="shipping_method" value={deliveryData?.courier} id="" onChange={ev => {
                var value = ev.target.value;
                setdeliveryData({ ...deliveryData, courier: value })
              }}>

                <option value="">Choose</option>
                {Object.entries(couriersPrams)?.map(() => {

                  return (
                    <>Hello</>
                  )

                })}


                {/* <option value="kidobazar">KidoBazar Courier</option>
                <option value="steadfast">Steadfast Courier</option>
                <option value="pathao">Pathao Courier</option>
                <option value="redx">Redx Courier</option>
                <option value="sundarban">Sundarban Courier</option> */}
              </select>




            </div>

            <div className="flex  gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max">Send to Courier</div>

              {loading && (
                <Spinner />
              )}
            </div>



          </div>

        </div>

      </PopoverButton>

      {/* {JSON.stringify(deliveryData?.courier)} */}


      {deliveryData?.courier == 'steadfast' && (
        <>

          <Image src={`/steadfast.png`} width={80} height={80} alt={``} />

        </>
      )}
      {deliveryData?.courier == 'pathao' && (

        <>
          <Image src={`/pathao.png`} width={70} height={70} alt={``} />

        </>

      )}
      {deliveryData?.courier == 'redx' && (

        <>
          <Image src={`/redx.png`} width={50} height={60} alt={``} />

        </>

      )}




    </div>

  );
};

export default SendToCourier;
