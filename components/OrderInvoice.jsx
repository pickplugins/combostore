"use client";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconSquare, IconUsersPlus, IconTrash, IconTrolley, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconMessagePlus, IconClipboardText, IconStarFilled, IconMessage2, IconMessages, IconShoppingCartCancel, IconLetterX, IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, } from "@tabler/icons-react";




import InvoiceWithPDF from '../components/InvoiceWithPDF';

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
// import LocationPicker from "../components/LocationPicker";
import PopoverButton from '../components/PopoverButton';
import Spinner from '../components/Spinner';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



const OrderInvoice = (props) => {
  const { formatDate } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()

  var order_id = props?.order_id


  var [orderData, setorderData] = useState(null);
  var [lineItems, setlineItems] = useState(null);
  var [invoiceData, setinvoiceData] = useState(null);

  var [loading, setloading] = useState(false);


  console.log(lineItems);


  useEffect(() => {

    var items = []

    lineItems?.map(item => {

      items.push({ id: item.id, product_name: item.product_name, qty: item.quantity, price: item.price })

    })


    var data = {
      from: {
        name: "KidoBazar.com",
        address: "New Shalbon, House 145 Road 01",
        city: "Rangpur",
      },
      to: {
        name: orderData?.billing_name,
        address: orderData?.billing_address,
        city: orderData?.city,
        phone: orderData?.billing_phone,
      },
      items: items,
      taxPercent: 10,
      payment_method: orderData?.payment_method,
      payment_status: orderData?.payment_status,
      total: orderData?.total_amount,
      discount: orderData?.discount_amount,
      shipping: orderData?.shipping_amount,
      advance: orderData?.advance_payment,
      subtotal: orderData?.subtotal_amount,
      taxPercent: 10,
      invoiceNumber: orderData?.id,
      date: orderData?.created_at,
    }



    setinvoiceData(data)

  }, [orderData]);



  function get_order() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }
    var postData = {
      id: order_id,
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

            console.log(order);



            setorderData(order)
            setlineItems(line_items)




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
    <div>

      <InvoiceWithPDF invoice={invoiceData} />

      {/* {JSON.stringify(invoiceData)} */}


    </div>
  );
};

export default OrderInvoice;