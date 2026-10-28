'use client'
import React, { use } from 'react'
import Link from "next/link";


import { useState, useEffect, useContext } from "react";


import { useCounterStore } from '../../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


import CustomerProfile from '../../../../components/CustomerProfile';
import { IconChevronDown, IconChevronUp, IconSquare, IconUsersPlus, IconTrash, IconTrolley, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconRouteSquare, IconTruckDelivery, IconRss, IconFileDollar } from "@tabler/icons-react";

const page = ({ params }) => {
  const { id } = use(params)




  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [currentObject, setcurrentObject] = useState(null);

  var [loading, setloading] = useState(false);






  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/* Page heading: these detail screens showed no title at all. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          {("Customer")} <span className="font-normal text-gray-400">#{id}</span>
        </h1>
      </div>



      <CustomerProfile userid={id} />





    </div>
  )
}

export default page