'use client'
import React, { use } from 'react'
import Link from "next/link";


import { useState, useEffect, useContext } from "react";


import { useCounterStore } from '../../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconSettings, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconExternalLink } from "@tabler/icons-react";


const page = ({ params }) => {
  const { id } = use(params)




  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [currentObject, setcurrentObject] = useState(null);

  var [loading, setloading] = useState(false);



  function get_product() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }



    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_coupon",
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
            var product = res?.product;



            setloading(false);
            setcurrentObject(product)



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
  function update_product() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }

    // if (currentObject.id < 0) {
    //   return;
    // }

    //var postData = currentObject;

    currentObject.id = id;



    var postData = JSON.stringify(currentObject);


    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/update_coupon",
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


            setloading(false);
            //setcurrentObject(res)



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






  useEffect(() => {
    get_product();

  }, []);


  var addonsList = [
    { label: "Products ", value: 'products' },
    { label: "Customer ", value: 'customer' },
    { label: "Expiry ", value: 'expiry' },
    { label: "Spend ", value: 'spend' },
    { label: "Categories ", value: 'categories' },
    { label: "User ", value: 'user' },


  ]





  function toSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')  // Remove non-alphanumeric chars
      .replace(/\s+/g, '-')          // Replace spaces with -
      .replace(/-+/g, '-');          // Replace multiple - with single -
  }




  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/* This route rendered an empty div, so it showed a blank screen. The
          user list links to /dashboard/customers/:id instead, so nothing
          reaches it today; it at least says so now. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          {("User")} <span className="font-normal text-gray-400">#{id}</span>
        </h1>
      </div>

      <div className="form-card rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-500 shadow-sm">
        {("This route has no profile view wired up. Open the user from Customers to edit them.")}
      </div>

    </div>
  )
}

export default page