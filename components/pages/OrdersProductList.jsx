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

const OrdersProductList = (props) => {

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
    privacyMode
  } = useCounterStore();

  const printRef = useRef(null);

  const copyData = (data) => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
      })
      .catch((err) => { });
  };

  var [productList, setproductList] = useState([]);


  function getOrderItemsWithTotalQuantity() {
    const productsMap = new Map();

    ordersData.forEach((order) => {
      (order.order_items || []).forEach((item) => {
        const productId = String(item.product_id);
        const variationId = String(item.variation_id || 0);

        // Group by product ID + variation ID
        const key = `${productId}_${variationId}`;

        if (productsMap.has(key)) {
          const existing = productsMap.get(key);
          existing.quantity += Number(item.quantity || 0);
        } else {
          productsMap.set(key, {
            ...item,
            product_id: productId,
            variation_id: variationId,
            quantity: Number(item.quantity || 0),
          });
        }
      });
    });

    return Array.from(productsMap.values());
  }



  useEffect(() => {

    const products = getOrderItemsWithTotalQuantity();
    setproductList(products)
  }, [ordersData]);



  return (
    <div className="flex flex-col gap-5">

      <div className="flex justify-between">
        <div></div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max" onClick={ev => {
            // copyData('')

            const printContents = printRef.current.innerText;


            copyData(printContents)
            addNotification({ type: 'success', title: 'Data copied', content: "Data copied successfull." })


          }}>
            Copy Data
          </div>
        </div>
      </div>

      {/* {JSON.stringify(productList)} */}


      {/* Printable Area */}
      <div className="flex flex-col gap-4" ref={printRef}>

        {productList?.map((entry) => {

          var total = (parseFloat(entry.subtotal_amount || 0) + parseFloat(entry.shipping_amount || 0)) - (parseFloat(entry.discount_amount || 0) + parseFloat(entry.advance_payment || 0));
          var discount_amount = entry?.discount_amount


          return (
            <>

              <div
                key={entry?.id}
                className="flex flex-col gap-2 p-5 border border-gray-300 rounded-md bg-white shadow-md"
              >

                <div className="text-xs font-semibold" dangerouslySetInnerHTML={{ __html: `${entry.product_name}` }}></div>
                <div>Quantity: {entry.quantity}</div>
                <div>Price: {entry.price}</div>
                <div className="text-xs">Discount: -{wrapCurrency(discount_amount)}</div>





              </div>

            </>
          );
        })}

      </div>

    </div>
  );
};

export default OrdersProductList;