'use client'
import React, { use } from 'react'
import { useState, useEffect, useContext } from "react";


import { useCounterStore } from '@/store/useCounterStore'
import { useUtilsStore } from "@/store/useUtilsStore";
import { useAuthStore } from "@/store/authStore";
import Spinner from "@/components/Spinner";
import InvoiceWithPDF from "@/components/InvoiceWithPDF";
import { sendMetaEvent } from "@/lib/sendMetaEvent";
import { getPageTemplate } from "@/lib/getPageTemplate";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";


/*
  One marker per gateway the buyer is redirected away to. Each is set by that
  gateway's checkout button and read back here; see the effect below for why
  the cart is emptied on this page rather than at checkout.
*/
const REDIRECT_PAYMENT_MARKERS = ['aamarpay:pending_order', 'stripe:pending_order'];


const page = ({ params }) => {








  const { slug } = use(params)
  const { wrapCurrency } = useUtilsStore()
  const token = useAuthStore((state) => state.token);
  // const token = localStorage.getItem("token");




  if (!slug) {

    return (
      <div className='p-10 text-center text-red-400'>You are not authorized to access this page, Plesae login to see your order details.</div>
    )
  }


  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const { appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, cartToggle, setcartToggle } = useCounterStore()


  var [orderData, setorderData] = useState(null);
  var [subscriptionData, setsubscriptionData] = useState(null);
  var [deliveryData, setdeliveryData] = useState(null);
  var [lineItems, setlineItems] = useState(null);
  var [loading, setloading] = useState(false);
  var [invoiceData, setinvoiceData] = useState(null);




  function get_order() {


    if (!slug) {
      return null;
    }

    setloading(true)


    var postData = {
      slug: slug,
    };
    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/get_order_by_hash", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          setloading(false)

          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {






            var order = res?.order;
            // var downloads = res?.downloads;
            // var license = res?.license;
            var subscription = res?.subscription;
            var delivery = res?.delivery;
            var line_items = res?.line_items;




            setorderData(order)
            // setdownloadsData(downloads)
            // setlicenseData(license)
            setsubscriptionData(subscription)
            setdeliveryData(delivery)
            setlineItems(line_items)





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





  // useEffect(() => {
  // 	get_order();
  // }, []);

  useEffect(() => {
    get_order();
  }, [slug]);

  useEffect(() => {

    var items = []

    lineItems?.map(item => {

      items.push({ id: item.id, desc: item.title, qty: item.quantity, price: item.price })

    })


    var data = {
      from: {
        name: "",
        address: "",
        city: "",
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
      subtotal: orderData?.subtotal_amount,
      taxPercent: 10,
      invoiceNumber: orderData?.id,
      date: orderData?.created_at,
    }



    setinvoiceData(data)
    sendMetaEvent({ event_name: 'VisitThankYou', value: orderData?.total_amount, currency: "BDT", }); // Call the function here
  }, [orderData]);


  /*
    A gateway the buyer is redirected away to - aamarPay, Stripe - cannot
    empty the cart itself: the checkout page is gone by the time the payment
    lands, and the order is marked paid on the server. So the cart is emptied
    here instead, on the way back.

    The marker the checkout left behind is what makes that safe. Without it,
    anyone reopening an old paid order would lose the cart they had just
    filled; with it, only the order this browser was sent off to pay for
    clears anything, and only once.

    Every redirect gateway's marker is checked, because the buyer may have
    started at one and paid at another - and only the markers naming this order
    are cleared, so a stale one cannot empty a cart filled since.
  */
  useEffect(() => {

    if (orderData?.payment_status !== 'paid') {
      return;
    }

    const matched = REDIRECT_PAYMENT_MARKERS.filter(key => {
      try {
        return window.sessionStorage.getItem(key) === slug;
      } catch (error) {
        /* Private mode, or storage switched off. Nothing to clear. */
        return false;
      }
    });

    if (!matched.length) {
      return;
    }

    matched.forEach(key => {
      try {
        window.sessionStorage.removeItem(key);
      } catch (error) {
      }
    });

    resetCartItems();
    setcartToggle(!cartToggle);

    sendMetaEvent({ event_name: 'Purchase', value: orderData?.total_amount, currency: orderData?.currency || "BDT" });

  }, [orderData, slug]);






  const requiredRoles = ["administrator", "rider", ""];
  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));





  return (
    <div>





      <div className="p-5 grid grid-cols-1 gap-5 w-full xl:w-[900px] mx-auto pb-60">


        <div className='text-center'>
          Thank you for your order, Here are the order details, Please login to Account to see order trackings, payments and more.
        </div>



        {loading && (

          <div className='flex justify-center '>

            <Spinner />

          </div>

        )}

        {(!loading && orderData) && (

          <InvoiceWithPDF invoice={invoiceData} />


        )}




      </div>

    </div>
  )
}

export default page