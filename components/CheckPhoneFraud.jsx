"use client";
import React, { useState, useEffect } from "react";
import { IconCopy, IconAlertTriangle, IconBrandWhatsapp, IconPhone, IconPhoneCall, IconPhoneSpark } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import PopoverButton from './PopoverButton';
import Spinner from './Spinner';
import Image from "next/image";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const CheckPhoneFraud = ({ order_id, phone }) => {
  // const [activeTab, setActiveTab] = useState(0);


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, privacyMode } = useCounterStore()

  var [loading, setloading] = useState(false);
  var [APIData, setAPIData] = useState(null);




  function check_mobile_fraud() {

    setloading(true)

    var postData = JSON.stringify({ phone: phone });

    fetch(serverUrl + "wp-json/combo-store/v2/check_mobile_fraud", {
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




            // var status = res?.status;
            // var message = res?.message;



            setAPIData(JSON.parse(res?.data))

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





  return (
    <div index={order_id} className="flex justify-center items-center">



      <PopoverButton wrapperClass={`bg-white flex justify-end`} buttonLabel={" "} buttonIcon={<IconPhoneSpark />} title={"Check Phone Fraud"} position={"bottomRight"} buttonClass={`bg-white p-0 text-gray-400 hover:bg-gray-200 rounded-sm p-1 hover:text-gray-600 cursor-pointer justify-end`}>

        <div className="p-2 w-[400px] bg-gray-200 text-left">


          <div className=" flex flex-col gap-3 ">

            <div className="flex items-center gap-2">
              <IconPhone size={20} />
              <div className={`text-gray-600 text-lg ${privacyMode ? 'blur-[3px]' : ""}`}>{phone}</div>
            </div>

            <div className="flex flex-wrap gap-3">

              <a href={`tel:${phone}`} className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer"><IconPhoneCall size={16} /> Call</a>
              <a href={`https://wa.me/${phone}`} className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer"><IconBrandWhatsapp size={16} /> WhatsApp</a>

              <div className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer" onClick={() => {
                navigator.clipboard.writeText(phone)
                addNotification({ type: 'success', title: 'Phone Copied', content: "Phone Copied" })
              }}>
                <IconCopy size={16} /> Copy
              </div>

            </div>

            {APIData && (
              <div className="flex flex-col gap-2">

                {/* <div className="flex flex-col gap-3">
                  <div>Total Cancelled: {APIData?.total_cancel}</div>
                  <div>Total Delivered: {APIData?.total_delivered}</div>
                  <div>Total Parcels: {APIData?.total_parcels}</div>
                </div> */}

                {APIData?.data && (
                  <div className="flex flex-col gap-5">
                    {Object.entries(APIData?.data)?.map((item, index) => (
                      <div key={index}>
                        <div>{item[1].name}: {item[1].success_parcel}/{item[1].total_parcel}</div>
                      </div>
                    ))}
                  </div>
                )}
                {/* {APIData?.apis && (
                  <div className="flex gap-5">
                    {Object.entries(APIData?.apis)?.map((item, index) => (
                      <div key={index}>
                        <div>{item[0]}: {item[1].total_delivered_parcels}/{item[1].total_parcels}</div>
                      </div>
                    ))}
                  </div>
                )} */}







              </div>


            )}


            <div className="flex gap-3">

              <div className="flex items-center w-fit gap-2 text-white bg-gray-600 text-sm px-3 py-2 rounded-sm cursor-pointer" onClick={event => check_mobile_fraud()}>

                <IconAlertTriangle size={16} />
                <div>Check Fraud</div>

              </div>

              {loading && (
                <div className=" bg-gray-600 p-1 rounded-sm">
                  <Spinner fill="white" size={16} />
                </div>
              )}
            </div>


          </div>

        </div>

      </PopoverButton>

      {/* {JSON.stringify(deliveryData?.courier)} */}







    </div>

  );
};

export default CheckPhoneFraud;
