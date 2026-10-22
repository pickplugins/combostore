'use client'
import React, { use } from 'react'
import { useState, useEffect, useContext } from "react";

import { useCounterStore } from '../../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import PopoverButton from '../../../../components/PopoverButton';
import { IconChevronDown, IconClipboardText, IconSquare, IconUsersPlus, IconTrash, IconTrolley, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconRouteSquare, IconTruckDelivery, IconRss, IconFileDollar } from "@tabler/icons-react";
import { useUtilsStore } from '../../../../store/useUtilsStore';
import LocationPicker from '../../../../components/LocationPicker';
import Link from "next/link";
import Tabs from '../../../../components/Tabs';
import Tab from '../../../../components/Tab';
import Spinner from '../../../../components/Spinner';
import InvoiceWithPDF from '../../../../components/InvoiceWithPDF';
import EditPurchase from '../../../../components/EditPurchase';

const page = ({ params }) => {
  const { id } = use(params)


  const { wrapCurrency } = useUtilsStore()

  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [loading, setloading] = useState(false);

  var [purchaseData, setpurchaseData] = useState(null);
  var [lineItems, setlineItems] = useState(null);

  var [invoiceData, setinvoiceData] = useState(null);








  function get_purchase() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }
    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/get_purchase", {
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





            var purchase = res?.purchase;
            var subscription = res?.subscription;
            var delivery = res?.delivery;
            var lineItems = res?.lineItems;




            setpurchaseData(purchase)
            setlineItems(lineItems)




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
  // 	get_purchase();
  // }, []);

  useEffect(() => {
    get_purchase();
  }, [id]);



  useEffect(() => {

    var items = []

    lineItems?.map(item => {

      items.push({ id: item.id, desc: item.product_name, qty: item.quantity, price: item.price })

    })


    var data = {
      from: {
        name: "KidoBazar.com",
        address: "New Shalbon, House 145 Road 01",
        city: "Rangpur",
      },
      to: {
        name: purchaseData?.billing_name,
        address: purchaseData?.billing_address,
        city: purchaseData?.city,
        phone: purchaseData?.billing_phone,
      },
      items: items,
      taxPercent: 10,
      payment_method: purchaseData?.payment_method,
      payment_status: purchaseData?.payment_status,
      total: purchaseData?.total_amount,
      discount: purchaseData?.discount_amount,
      shipping: purchaseData?.shipping_amount,
      subtotal: purchaseData?.subtotal_amount,
      taxPercent: 10,
      invoiceNumber: purchaseData?.id,
      date: purchaseData?.created_at,
    }



    setinvoiceData(data)

  }, [purchaseData]);























  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/* Page heading: these detail screens showed no title at all. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          {("Purchase")} <span className="font-normal text-gray-400">#{id}</span>
        </h1>
      </div>


      <Tabs activeTab={'purchase'}
        orientation="vertical"
        activeClass="active-tab "
        navsItemClass="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        navsItemActiveClass="bg-[#634FE5] text-white shadow-sm"

        navsWrapperClass="mb-5 flex w-full gap-1 lg:w-[250px]"
        wrapperClass="flex gap-5"

        tabs={[
          { label: "Purchase", id: 'purchase', icon: <IconFileDollar size={18} /> },
          { label: "Invoice", id: 'invoice', icon: <IconFileDollar size={18} /> },
          // { label: "Payments", id: 'payments', icon: <IconFileDollar size={18} /> },
        ]}>


        <Tab index={0} id="purchase">

          <EditPurchase purchase_id={id} />

        </Tab>
        <Tab index={1} id="invoice">

          <InvoiceWithPDF invoice={invoiceData} />



        </Tab>




      </Tabs>









    </div>
  )
}

export default page