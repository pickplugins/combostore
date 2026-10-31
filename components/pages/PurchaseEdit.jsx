'use client'
import React from 'react'
import { useState, useEffect } from "react";

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconFileDollar, IconReceipt, IconCreditCard, IconPhone, IconMapPin } from "@tabler/icons-react";
import { useUtilsStore } from '../../store/useUtilsStore';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import Spinner from '../../components/Spinner';
import InvoiceWithPDF from '../../components/InvoiceWithPDF';
import EditPurchase from '../../components/EditPurchase';

/* Status pills, with the same keys and tones the purchases list uses. */
const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

const PURCHASE_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  completed: { label: "Completed", classes: "bg-green-50 text-green-700 ring-green-200" },
  hold: { label: "Hold", classes: "bg-orange-50 text-orange-700 ring-orange-200" },
  cancelled: { label: "Cancelled", classes: "bg-red-50 text-red-700 ring-red-200" },
  canceled: { label: "Canceled", classes: "bg-red-50 text-red-700 ring-red-200" },
  refunded: { label: "Refunded", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  failed: { label: "Failed", classes: "bg-red-50 text-red-700 ring-red-200" },
};

const PAYMENT_STATUS_BADGES = {
  pending: { label: "Pending", classes: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
  paid: { label: "Paid", classes: "bg-green-50 text-green-700 ring-green-200" },
  failed: { label: "Failed", classes: "bg-red-50 text-red-700 ring-red-200" },
  delayed: { label: "Delayed", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
  due: { label: "Due", classes: "bg-red-50 text-red-700 ring-red-200" },
  partial: { label: "Partial", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
  refunded: { label: "Refunded", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
};

/* One figure in the summary strip. The total is the one that carries weight. */
const Figure = ({ label, value, strong }) => (
  <div className="flex min-w-0 flex-col gap-0.5">
    <span className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{label}</span>
    <span className={`truncate tabular-nums ${strong ? "text-lg font-semibold text-gray-900" : "text-sm text-gray-700"}`}>
      {value}
    </span>
  </div>
);

const PurchaseEdit = ({ id }) => {


  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [loading, setloading] = useState(false);

  var [purchaseData, setpurchaseData] = useState(null);
  var [lineItems, setlineItems] = useState(null);

  var [invoiceData, setinvoiceData] = useState(null);








  function get_purchase() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }
    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/get_purchase", {
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





            var purchase = res?.purchase;
            var subscription = res?.subscription;
            var delivery = res?.delivery;
            var lineItems = res?.lineItems;




            setpurchaseData(purchase)
            setlineItems(lineItems)
            setloading(false)




            setTimeout(() => {
            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
        setloading(false)
      });

  }

  // useEffect(() => {
  // 	get_purchase();
  // }, []);

  useEffect(() => {
    get_purchase();
  }, [id]);



  useEffect(() => {

    var items = []

    lineItems?.map(item => {

      items.push({ id: item.id, desc: item.product_name, qty: item.quantity, price: item.price })

    })


    var data = {
      from: {
        name: "KidoBazar.com",
        address: "New Shalbon, House 145 Road 01",
        city: "Rangpur",
      },
      to: {
        name: purchaseData?.billing_name,
        address: purchaseData?.billing_address,
        city: purchaseData?.city,
        phone: purchaseData?.billing_phone,
      },
      items: items,
      payment_method: purchaseData?.payment_method,
      payment_status: purchaseData?.payment_status,
      total: purchaseData?.total_amount,
      discount: purchaseData?.discount_amount,
      shipping: purchaseData?.shipping_amount,
      subtotal: purchaseData?.subtotal_amount,
      taxPercent: 10,
      invoiceNumber: purchaseData?.id,
      date: purchaseData?.created_at,
    }



    setinvoiceData(data)

  }, [purchaseData]);


  const statusBadge = PURCHASE_STATUS_BADGES[purchaseData?.status];
  const paymentBadge = PAYMENT_STATUS_BADGES[purchaseData?.payment_status || "pending"];

  /* Amounts only earn a slot when they carry a figure. */
  const amount = (value) => parseFloat(value || 0);
  const optionalFigures = [
    { label: "Sub Total", value: amount(purchaseData?.subtotal_amount) },
    { label: "Delivery", value: amount(purchaseData?.shipping_amount) },
    { label: "Discount", value: amount(purchaseData?.discount_amount) },
    { label: "Advance", value: amount(purchaseData?.advance_payment) },
  ].filter(figure => figure.value > 0);

  const itemCount = lineItems?.length || 0;


  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/*
        Summary card. The screen used to open on a bare "Purchase #id" with
        the supplier, the figures and whether it is paid all a tab away.
      */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

        <div className="flex flex-wrap items-start justify-between gap-3">

          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-gray-900">
              {("Purchase")} <span className="font-normal text-gray-400">#{id}</span>
            </h1>

            {purchaseData?.billing_name && (
              <p className="mt-0.5 truncate text-sm font-medium text-gray-700">{purchaseData.billing_name}</p>
            )}

            {(purchaseData?.billing_address || purchaseData?.billing_phone) && (
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">

                {purchaseData?.billing_address && (
                  <span className="inline-flex items-center gap-1">
                    <IconMapPin size={13} className="text-gray-400" /> {purchaseData.billing_address}
                  </span>
                )}

                {purchaseData?.billing_phone && (
                  <span className="inline-flex items-center gap-1 tabular-nums">
                    <IconPhone size={13} className="text-gray-400" /> {purchaseData.billing_phone}
                  </span>
                )}

              </div>
            )}
          </div>

          {purchaseData && (
            <div className="flex flex-wrap items-center gap-2">

              {statusBadge && (
                <span className={`${BADGE_BASE} ${statusBadge.classes}`}>{statusBadge.label}</span>
              )}

              {paymentBadge && (
                <span className={`${BADGE_BASE} ${paymentBadge.classes}`}>{paymentBadge.label}</span>
              )}

              {purchaseData?.payment_method && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                  <IconCreditCard size={13} />
                  {paymentGateways?.[purchaseData.payment_method]?.label || purchaseData.payment_method}
                </span>
              )}

            </div>
          )}

        </div>

        {loading && !purchaseData && (
          <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500">
            <Spinner size={16} /> {("Loading purchase")}
          </div>
        )}

        {!loading && !purchaseData && (
          <div className="mt-4 border-t border-gray-100 pt-4 text-sm text-gray-500">
            {("This purchase could not be loaded.")}
          </div>
        )}

        {purchaseData && (
          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 sm:grid-cols-3 lg:grid-cols-5">

            <Figure label={("Total")} value={wrapCurrency(amount(purchaseData?.total_amount))} strong />

            {optionalFigures.map(figure => (
              <Figure key={figure.label} label={(figure.label)} value={wrapCurrency(figure.value)} />
            ))}

            {itemCount > 0 && (
              <Figure label={("Items")} value={itemCount} />
            )}

            {purchaseData?.created_at && (
              <Figure label={("Created")} value={formatDate(purchaseData.created_at)} />
            )}

          </div>
        )}

        {purchaseData?.note && (
          <p className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">{purchaseData.note}</p>
        )}

      </div>


      <Tabs activeTab={'purchase'}
        orientation="vertical"
        activeClass="active-tab "
        navsItemClass="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        navsItemActiveClass="bg-[#634FE5] text-white shadow-sm"

        navsWrapperClass="mb-5 flex w-full gap-1 lg:w-[250px]"
        wrapperClass="flex gap-5"

        tabs={[
          { label: "Purchase", id: 'purchase', icon: <IconFileDollar size={18} /> },
          { label: "Invoice", id: 'invoice', icon: <IconReceipt size={18} /> },
          // { label: "Payments", id: 'payments', icon: <IconFileDollar size={18} /> },
        ]}>


        <Tab index={0} id="purchase">

          <EditPurchase purchase_id={id} />

        </Tab>
        <Tab index={1} id="invoice">

          <InvoiceWithPDF invoice={invoiceData} />



        </Tab>




      </Tabs>




    </div>
  )
}

export default PurchaseEdit
