"use client";
import React, { useState, useEffect } from "react";
import { IconCopy, IconAlertTriangle, IconBrandWhatsapp, IconPhone, IconPhoneCall, IconPhoneSpark } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import PopoverButton from './PopoverButton';
import Spinner from './Spinner';
import Image from "next/image";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const OrderItemsList = ({ order_id, orderItems }) => {
  // const [activeTab, setActiveTab] = useState(0);


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()

  var [loading, setloading] = useState(false);

  var [toggled, settoggled] = useState(false);
  var [totalItems, settotalItems] = useState(orderItems.length);







  return (
    <div index={order_id} className="flex text-left flex-col gap-2">


      <div className="flex text-left flex-col gap-2 my-2">

        {totalItems > 0}

        {orderItems.slice(0, 2)?.map(item => (
          <div key={item.id} className="flex flex-col bg-gray-100 p-2 rounded-sm ">
            <div className="text-xs font-semibold" dangerouslySetInnerHTML={{ __html: `${item.product_name}` }}></div>
            <div className="flex gap-3 text-xs">

              <div>Quantity: {item.quantity}</div>
              <div>Price: {item.price}</div>

            </div>

          </div>
        ))}
        {/* {totalItems > 2 && (
          <div className="text-xs cursor-pointer " onClick={ev => {
            settoggled(!toggled)
          }}>+{totalItems - 2} More Items</div>

        )} */}
        {totalItems > 2 && (
          <PopoverButton wrapperClass={`bg-gray-200  `} buttonLabel={(`+${totalItems - 2} More Items`)} buttonClass={`text-xs p-2 cursor-pointer rounded-sm`} buttonIcon={``} popoverClass={`max-h-[600px] w-[400px] bg-white overflow-y-auto z-50 border-2 border-solid border-indigo-600 rounded-sm top-full right-0 absolute`} title={"All Items"} position={'bottomRight'} >

            <div className="p-3 flex flex-col gap-2 bg-gray-300">
              {orderItems?.map(item => (
                <div key={item.id} className="flex flex-col bg-gray-100 p-2 rounded-sm ">
                  <div className="text-xs font-semibold" dangerouslySetInnerHTML={{ __html: `${item.product_name}` }}></div>
                  <div className="flex gap-3 text-xs">

                    <div>Quantity: {item.quantity}</div>
                    <div>Price: {item.price}</div>

                  </div>

                </div>
              ))}

              <div className="flex w-fit items-center gap-2 text-white bg-gray-400 text-xs px-2 py-1 rounded-sm cursor-pointer" onClick={() => {
                var copyText = '';
                orderItems.map(item => {

                  copyText += `${item.product_name} \n`;
                  copyText += `Quantity: ${item.quantity} \n`;
                  copyText += `Unit Price: ${item.price} \n`;
                  copyText += `\n`;

                })

                navigator.clipboard.writeText(`${copyText}`)
                addNotification({ type: 'success', title: 'Info Copied', content: "Order items detail coppied." })
              }}>
                <IconCopy size={16} /> Copy
              </div>


            </div>

          </PopoverButton>

        )}




      </div>





    </div>

  );
};

export default OrderItemsList;
