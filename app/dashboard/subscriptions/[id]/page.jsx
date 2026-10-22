'use client'
import React, { use } from 'react'
import { useState, useEffect, useContext } from "react";
import { useCounterStore } from '../../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const page = ({ params }) => {




  const { id } = use(params)
  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [subscriptionData, setsubscriptionData] = useState(null);
  var [subscriptionURLs, setsubscriptionURLs] = useState(null);
  var [orderData, setorderData] = useState(null);

  useEffect(() => {


  }, [subscriptionData]);



  function fetchPost() {


    if (!token) {
      //throw new Error("No token found");
    }
    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);

    fetch(serverUrl + "wp-json/combo-store/v2/get_subscription", {
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


            var subscription = res?.subscription;
            var order = res?.order;



            setsubscriptionData(subscription)
            setorderData(order)

            var urls = subscription?.urls;

            var urls = JSON.parse(urls)

            setsubscriptionURLs(urls);


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
  // 	fetchPost();
  // }, []);

  useEffect(() => {
    fetchPost();
  }, [id]);



  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/* Page heading: this screen showed no title at all. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          {("Subscription")} <span className="font-normal text-gray-400">#{id}</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm p-5">

          <h3 className="mb-4 text-base font-semibold text-gray-900">{("Subscription")} </h3>


          <div className="flex gap-2 items-center my-5">

            <a target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer" href={subscriptionURLs?.customer_portal}>{("Customer Portal")}</a>
            <a target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer" href={subscriptionURLs?.customer_portal_update_subscription}>{("Update Subscription")}</a>
            <a target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer" href={subscriptionURLs?.update_payment_method}>{("Update Payment Method")}</a>

          </div>


          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Order")}</div>
            <div className=""> <a href={`/orders/${orderData?.id}`}>#{orderData?.id}</a></div>

          </div>
          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Setup fee")}</div>
            <div className=""> {subscriptionData?.setup_fee}</div>

          </div>



          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Total")}</div>
            <div className=""> {subscriptionData?.total}</div>

          </div>


          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0 ">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Billing Date")}</div>

            <div className=""> {subscriptionData?.billing_anchor}</div>

          </div>
          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0 ">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Card Last Four")}</div>

            <div className=""> {subscriptionData?.card_last_four}</div>

          </div>
          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0 ">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Test Mode")} </div>

            <div className=""> {subscriptionData?.test_mode}</div>

          </div>
          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0 ">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Status")}</div>

            <div className=""> {subscriptionData?.status}</div>
          </div>
          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0 ">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("User Email")}</div>

            <div className=""> {subscriptionData?.user_email}</div>
          </div>


          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0 ">
            <div className=" px-5 py-2 w-40 font-bold" >{("Trial Ends at")}</div>

            <div className=""> {subscriptionData?.trial_ends_at}</div>

          </div>
          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0 ">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Renews at")}</div>

            <div className=""> {subscriptionData?.renews_at}</div>
          </div>
          <div className="flex items-center gap-3 border-b border-gray-200 last:border-0 ">
            <div className="w-40 shrink-0 py-2 text-sm font-medium text-gray-500">{("Ends at")}</div>

            <div className=""> {subscriptionData?.ends_at}</div>
          </div>







        </div>
        <div></div>
      </div>

    </div>
  )
}

export default page