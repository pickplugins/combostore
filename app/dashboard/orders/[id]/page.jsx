'use client'
import React, { use } from 'react'
import { useState, useEffect, useContext } from "react";

import { useCounterStore } from '../../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import ReceiptLabel from '../../../../components/ReceiptLabel';
import PopoverButton from '../../../../components/PopoverButton';
import { IconChevronDown, IconClipboardText, IconSquare, IconUsersPlus, IconTrash, IconTrolley, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconRouteSquare, IconTruckDelivery, IconRss, IconFileDollar } from "@tabler/icons-react";
import { useUtilsStore } from '../../../../store/useUtilsStore';
import Link from "next/link";
import Tabs from '../../../../components/Tabs';
import Tab from '../../../../components/Tab';

import OrderInvoice from '../../../../components/OrderInvoice';
import OrderTrackings from '../../../../components/OrderTrackings';
import OrderNotes from '../../../../components/OrderNotes';
import OrderPayments from '../../../../components/OrderPayments';
import OrderSubscription from '../../../../components/OrderSubscription';
import OrderUpdate from '../../../../components/OrderUpdate';
import OrderDelivery from '../../../../components/OrderDelivery';

const page = ({ params }) => {
  const { id } = use(params)


  const { wrapCurrency } = useUtilsStore()

  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [loading, setloading] = useState(false);

  var [orderData, setorderData] = useState(null);



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




            var order = res?.order;
            var subscription = res?.subscription;
            var delivery = res?.delivery;
            var line_items = res?.line_items;




            setorderData(order)




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
  }, []);




  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/* Page heading: these detail screens showed no title at all. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          {("Order")} <span className="font-normal text-gray-400">#{id}</span>
        </h1>
      </div>




      <Tabs activeTab={'order'}
        orientation="vertical"
        activeClass="active-tab "
        navsItemClass="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        navsItemActiveClass="bg-[#634FE5] text-white shadow-sm"

        navsWrapperClass="mb-5 flex w-full gap-1 xl:w-[250px]"
        wrapperClass="xl:flex gap-5"

        tabs={[
          { label: "Order", id: 'order', icon: <IconFileDollar size={18} /> },
          { label: "Invoice", id: 'invoice', icon: <IconFileDollar size={18} /> },
          { label: "Receipt", id: 'receipt', icon: <IconFileDollar size={18} /> },
          // { label: "Payments", icon: <IconFileDollar size={18} /> },
          { label: "Subscription", id: 'subscription', icon: <IconRss size={18} /> },
          { label: "Delivery", id: 'delivery', icon: <IconTruckDelivery size={18} /> },
          { label: "Trackings", id: 'trackings', icon: <IconRouteSquare size={18} /> },
          { label: "Order Notes", id: 'notes', icon: <IconClipboardText size={18} /> },

        ]}>


        <Tab index={0} id="order">
          <OrderUpdate order_id={id} />

        </Tab>
        <Tab index={1} id="invoice">

          <OrderInvoice order_id={id} />



        </Tab>
        <Tab index={2} id="receipt">

          <ReceiptLabel order_id={id} />



        </Tab>
        {/* <Tab index={2}>

              <OrderPayments order_id={id} />
            </Tab> */}

        <Tab index={3} id="subscription">



          <OrderSubscription order_id={id} />






        </Tab>
        <Tab index={4} id="delivery">



          <OrderDelivery order_id={id} orderData={orderData} />





        </Tab>

        <Tab index={5} id="trackings">


          <OrderTrackings order_id={id} />



        </Tab>
        <Tab index={6} id="notes">


          <OrderNotes order_id={id} />



        </Tab>



      </Tabs>









    </div>
  )
}

export default page