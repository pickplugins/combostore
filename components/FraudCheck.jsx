"use client";
import { useState, useEffect, Component } from "react";
import { IconAlertTriangle, IconChevronUp, IconPhoneCall, IconBrandWhatsapp, IconMail, IconMailForward, IconCopy, IconPhone, IconRosetteDiscountCheck, IconX, IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconSearch, IconShoppingCartCancel, IconLetterX, IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";




import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from '../components/LocationPicker';

import WidgetWrapper from '../components/WidgetWrapper';

import GoogleMapDirections from '../components/GoogleMapDirections';
import Popover from '../components/Popover';
import UsersPicker from '../components/shop-elements/UsersPicker';
import Spinner from "../components/Spinner";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;




const FraudCheck = (props) => {
  const { formatDate } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()

  var phone = props?.phone
  var [status, setStatus] = useState(null);

  var [popover, setPopover] = useState({ enabled: false });
  var [loading, setloading] = useState(false);
  var [APIData, setAPIData] = useState(null);



  useEffect(() => {
    //check_mobile_fraud();
  }, []);
  useEffect(() => {


    if (APIData) {
      setStatus(APIData?.status);
    }

  }, [APIData]);





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



            setAPIData(res?.data)

            setPopover({ ...popover, enabled: true })
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





  const requiredRoles = ["administrator", "rider"];
  const customerRoles = ["customer"];

  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));
  const isCustomer = customerRoles.some(role => userDataX?.roles?.includes(role));



  return (

    <div className='flex flex-col gap-5'>





      <div className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded cursor-pointer" onClick={event => check_mobile_fraud()}>
        {loading && (
          <Spinner size={16} />

        )}
        {!loading && (
          <IconAlertTriangle size={16} />

        )}
      </div>

      {popover.enabled && (
        <Popover wrapperClass={`bg-white`} buttonLabel={("Fraud Check")} buttonIcon={<IconMail />} title={"Fraud Check"} position={""}>

          <div class=" max-h-[600px] bg-white overflow-y-auto z-[999] border-2 border-solid border-indigo-600 rounded-sm mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-10   ">
            <div class="flex justify-between bg-gray-700 p-2">
              <div class="text-white">Fraud Check</div><div class=" bg-red-400 text-white px-1 py-1 rounded-sm cursor-pointer">
                <IconX size={16} onClick={event => setPopover({ ...popover, enabled: false })} />
              </div>
            </div>

            <div className="p-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <IconPhone size={20} />
                  <div className="text-gray-600">{phone}</div>
                </div>

                <div className="flex flex-col gap-3">
                  <div>Total Cancelled: {APIData?.total_cancel}</div>
                  <div>Total Delivered: {APIData?.total_delivered}</div>
                  <div>Total Parcels: {APIData?.total_parcels}</div>
                </div>

                {APIData?.apis && (
                  <div className="flex gap-5">
                    {Object.entries(APIData?.apis)?.map((item, index) => (
                      <div key={index}>
                        <div>{item[0]}: {item[1].total_delivered_parcels}/{item[1].total_parcels}</div>
                      </div>
                    ))}
                  </div>
                )}





              </div>
            </div>

          </div>


        </Popover>
      )}





    </div>















  );
};

export default FraudCheck;