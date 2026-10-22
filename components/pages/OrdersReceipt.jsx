"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useContext } from "react";
import Spinner from "../../components/Spinner";
import {
  IconFileDollar,
  IconEyeShare,
  IconTrash,
  IconCopy,
  IconDotsVertical,
  IconPackages,
  IconX,
  IconEdit,
  IconPrinter,
} from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import ReceiptLabel from '../../components/ReceiptLabel';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';

const OrdersReceipt = (props) => {

  const ordersData = props?.ordersData || [];

  const router = useRouter();

  const { wrapCurrency, formatDate } = useUtilsStore();

  const {
    token,
    appData,
    notifications,
    addNotification,
    userDataX,
    setUserDataX,
    paymentGateways,
  } = useCounterStore();

  const printRef = useRef(null);

  // Print all receipts together
  const handlePrintAll = () => {

    if (!printRef.current) return;

    const printContents = printRef.current.innerHTML;

    const win = window.open("", "", "width=1200,height=1000");

    win.document.write(`
      <html>
        <head>
          <title>Multiple Receipts</title>

          <style>
            body {
              margin: 0;
              padding: 20px;
              background: #ffffff;
              font-family: monospace;
            }

            .receipt-page {
              page-break-after: always;
              break-after: page;
              margin-bottom: 30px;
              display: flex;
              justify-content: center;
            }

            .receipt-page:last-child {
              page-break-after: auto;
              break-after: auto;
            }

            @media print {
              body {
                padding: 0;
              }

              .receipt-page {
                page-break-after: always;
                break-after: page;
              }

              .receipt-page:last-child {
                page-break-after: auto;
                break-after: auto;
              }
            }
          </style>
        </head>

        <body>
          ${printContents}
        </body>
      </html>
    `);

    win.document.close();

    setTimeout(() => {
      win.print();
      win.close();
    }, 500);
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Top Action Bar */}
      <div className="flex justify-end">

        <div
          onClick={handlePrintAll}
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max"
        >
          <IconPrinter size={18} />
          Print All Receipts
        </div>

      </div>

      {/* Printable Area */}
      <div ref={printRef}>

        {ordersData?.map((item) => {

          return (
            <div
              key={item?.id}
              className="receipt-page bg-gray-300 p-5 rounded shadow mb-5"
            >
              <ReceiptLabel
                order_id={item?.id}
                hidePrintButton={true}

              />
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default OrdersReceipt;