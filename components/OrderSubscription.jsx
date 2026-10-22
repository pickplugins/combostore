"use client";
import { useState, useEffect, Component } from "react";
import Link from "next/link";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import Spinner from '../components/Spinner';

import WidgetWrapper from '../components/WidgetWrapper';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



const OrderSubscription = (props) => {
  const { formatDate } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()

  var order_id = props?.order_id
  var [loading, setloading] = useState(false);

  var [subscriptionData, setsubscriptionData] = useState(props?.subscriptionData);
  var [orderData, setorderData] = useState(null);


  useEffect(() => {
    get_order();
    get_subscription();

  }, [order_id]);

  function get_subscription() {



    if (!order_id) {
      return;

    }

    setloading(true);

    var postData = {
      id: order_id,
      by: 'order_id',
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_subscription",
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
            var subscription = res?.subscription;



            setloading(false);
            setsubscriptionData(subscription)



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
  function update_subscription() {

    setloading(true)

    var postData = JSON.stringify(subscriptionData);

    fetch(serverUrl + "wp-json/combo-store/v2/update_subscription", {
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
              addNotification({ type: 'success', title: 'Subscription update', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Subscription update failed', content: message })
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
  function create_subscriptions() {

    setloading(true)

    var postData = JSON.stringify({
      user_id: userDataX?.id,
      order_id: order_id,
      status: 'active',
      next_billing_date: '',
      renewal_interval: 'month',
      last_payment_amount: orderData?.created_at,
      total_amount: orderData?.total_amount,
      subtotal_amount: orderData?.subtotal_amount,
    });

    fetch(serverUrl + "wp-json/combo-store/v2/create_subscriptions", {
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
              addNotification({ type: 'success', title: 'Subscription created', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Subscription creation failed', content: message })
            }



            setTimeout(() => {
              setloading(false)

              get_subscription()
            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }


  const requiredRoles = ["administrator", "rider", ""];
  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));




  return (
    <div className="">

      {!subscriptionData?.id && (

        <div className="flex bg-white p-5 rounded-sm items-center justify-between">
          <div>Subscription hasn't started.</div>
          <div className='flex    items-center gap-2'>

            {loading && (
              <Spinner />
            )}

            <div
              onClick={(ev) => {
                create_subscriptions();
              }}
              className="  rounded-sm cursor-pointer px-4 py-2 bg-[#1b0e9f] text-white flex gap-2 w-max">
              {("Start Subscription")}
            </div>
          </div>
        </div>










      )}




      {subscriptionData?.id && (


        <>
          <div className="flex py-5 justify-end items-center">

            <div className='flex gap-2 items-center'>
              {loading && (

                <Spinner />

              )}

              {hasAccess && (
                <div className='p-2  rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white'

                  onClick={ev => {
                    update_subscription()
                  }}
                >Update</div>
              )}





            </div>


          </div>
          <WidgetWrapper collapsible={true} title="Subscription">

            <div className=''>





              <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap py-3 gap-3 items-center ">
                <div className="  py-2 lg:w-60 text-gray-500 font-bold">{('Status')}</div>



                <select name="status" className="!border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={subscriptionData?.status} id="" onChange={ev => {
                  var value = ev.target.value;
                  setsubscriptionData({ ...subscriptionData, status: value })
                }}>

                  <option value="">Choose</option>
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="canceled">Canceled</option>

                </select>



              </div>

              <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center ">
                <div className="text-gray-500  py-2 lg:w-60 font-bold">{('Interval')}</div>


                <select name="renewal_interval" className="!border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={subscriptionData?.renewal_interval} id="" onChange={ev => {
                  var value = ev.target.value;
                  setsubscriptionData({ ...subscriptionData, renewal_interval: value })
                }}>

                  <option value="">Choose</option>
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>

                </select>




              </div>










              <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
                <div className=" text-gray-500 py-2 lg:w-60 font-bold">{("Interval Count")}</div>


                <div className="">
                  <input type="number" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={subscriptionData?.interval_count} onChange={ev => {
                    var value = ev.target.value;
                    setsubscriptionData({ ...subscriptionData, interval_count: value })
                  }} />

                </div>




              </div>


              <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center ">
                <div className="text-gray-500  py-2 lg:w-60 font-bold">{("Next Billing Date")}</div>
                {subscriptionData?.status == 'active' && (
                  <div className=""> {subscriptionData?.next_billing_date}</div>
                )}

              </div>
              <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center ">
                <div className=" text-gray-500 py-2 lg:w-60 font-bold">{('Created')}</div>

                <div className=""> {subscriptionData?.created_at}</div>

              </div>


            </div></WidgetWrapper>
        </>


      )}














    </div>

  );
};

export default OrderSubscription;