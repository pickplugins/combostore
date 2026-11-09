'use client'
import React from 'react'
import Link from "next/link";

import CustomerProfile from '../../components/CustomerProfile';
import { IconArrowLeft, IconArrowUpRight } from "@tabler/icons-react";

const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer";

/*
  A customer: their profile editor. Used as a page (/dashboard/customers/[id])
  and in the Customers list's Edit drawer (variant="drawer": no page padding,
  and a link to the page instead of back to the list). The drawer used to get
  the full page layout, padding and all, inside its own padding.
*/
const CustomerEdit = ({ id, variant = "page" }) => {

  var drawer = variant === "drawer";

  return (
    <div className={drawer ? "flex w-full flex-col gap-4" : "mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6"}>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          {("Customer")} <span className="font-normal text-gray-400">#{id}</span>
        </h1>

        {drawer ? (
          <Link href={`/dashboard/customers/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
        ) : (
          <Link href="/dashboard/customers" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All customers")}</Link>
        )}
      </div>

      <CustomerProfile userid={id} />

    </div>
  )
}

export default CustomerEdit
