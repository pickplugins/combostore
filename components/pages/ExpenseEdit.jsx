'use client'
import React from 'react'
import { useState, useEffect } from "react";

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import Link from "next/link";
import { IconFileDollar, IconReceipt, IconCreditCard, IconTag, IconArrowLeft, IconArrowUpRight, IconRefresh } from "@tabler/icons-react";

const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer";
import { useUtilsStore } from '../../store/useUtilsStore';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import Spinner from '../../components/Spinner';
import InvoiceWithPDF from '../../components/InvoiceWithPDF';
import EditExpenses from '../../components/EditExpenses';

/* Payment pills, with the same keys and tones the expenses list uses. */
const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

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

/* variant="drawer" (the Expenses list's Edit drawer): no page padding. */
const ExpenseEdit = ({ id, variant = "page" }) => {


  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [loading, setloading] = useState(false);

  var [expenseData, setexpenseData] = useState(null);
  var [lineItems, setlineItems] = useState(null);

  var [invoiceData, setinvoiceData] = useState(null);








  /*
    get_expense sends the lines as `lineItems` beside the expense. This read
    JSON.parse(expense.items) - a field expenses do not have - which threw, so
    the summary always said "This expense could not be loaded".
  */
  function get_expense() {

    if (!id) return;

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/get_expense", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setexpenseData(res?.expense?.id ? res.expense : null)
        setlineItems(Array.isArray(res?.lineItems) ? res.lineItems : [])
        setloading(false)
      })
      .catch((_error) => {
        setloading(false)
      });
  }

  useEffect(() => {
    if (!token) return;
    get_expense();
  }, [id, token]);



  useEffect(() => {

    var items = (lineItems ?? []).map(item => ({ id: item.id, desc: item.product_name, qty: item.quantity, price: item.price }))

    /* No `from`: InvoiceWithPDF fills the sender from the shop's Settings.
       A hard-coded "KidoBazar.com, Rangpur" used to override it. */
    var data = {
      to: {
        name: expenseData?.billing_name,
        address: expenseData?.billing_address,
        phone: expenseData?.billing_phone,
      },
      items: items,
      payment_method: expenseData?.payment_method,
      payment_status: expenseData?.payment_status,
      total: expenseData?.total_amount,
      discount: expenseData?.discount_amount,
      shipping: expenseData?.shipping_amount,
      subtotal: expenseData?.subtotal_amount,
      taxPercent: 10,
      invoiceNumber: expenseData?.id,
      date: expenseData?.created_at,
    }



    setinvoiceData(data)

  }, [expenseData]);


  const paymentBadge = PAYMENT_STATUS_BADGES[expenseData?.payment_status || "pending"];

  /* Amounts only earn a slot when they carry a figure. */
  const amount = (value) => parseFloat(value || 0);
  const optionalFigures = [
    { label: "Subtotal", value: amount(expenseData?.subtotal_amount) },
    { label: "Shipping", value: amount(expenseData?.shipping_amount) },
    { label: "Discount", value: amount(expenseData?.discount_amount) },
    { label: "Advance", value: amount(expenseData?.advance_payment) },
  ].filter(figure => figure.value > 0);


  return (
    <div className={variant === "drawer" ? "flex w-full flex-col gap-4" : "mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6"}>

      {/*
        Summary card. The screen used to open on a bare "Expense #id" with
        every figure a tab away, so the numbers that identify the record -
        what it cost, whether it is paid, when it was raised - are up here.
      */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

        <div className="flex flex-wrap items-start justify-between gap-3">

          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-gray-900">
              {("Expense")} <span className="font-normal text-gray-400">#{id}</span>
            </h1>

            {expenseData?.title && (
              <p className="mt-0.5 truncate text-sm text-gray-500">{expenseData.title}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {variant === "drawer" ? (
              <Link href={`/dashboard/expenses/${id}`} className={TOOLBAR_BUTTON}><IconArrowUpRight size={16} /> {("Open page")}</Link>
            ) : (
              <Link href="/dashboard/expenses" className={TOOLBAR_BUTTON}><IconArrowLeft size={16} /> {("All expenses")}</Link>
            )}
          </div>

          {expenseData && (
            <div className="flex w-full flex-wrap items-center gap-2">

              <span className={`${BADGE_BASE} ${paymentBadge.classes}`}>{paymentBadge.label}</span>

              {expenseData?.payment_method && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                  <IconCreditCard size={13} /> {expenseData.payment_method}
                </span>
              )}

              {expenseData?.category && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                  <IconTag size={13} /> {expenseData.category}
                  {expenseData?.subcategory ? ` / ${expenseData.subcategory}` : ""}
                </span>
              )}

            </div>
          )}

        </div>

        {loading && !expenseData && (
          <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500">
            <Spinner size={16} /> {("Loading expense")}
          </div>
        )}

        {!loading && !expenseData && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 text-sm text-gray-500">
            {("This expense could not be loaded.")}
            <button type="button" className={TOOLBAR_BUTTON} onClick={get_expense}><IconRefresh size={16} /> {("Try again")}</button>
          </div>
        )}

        {expenseData && (
          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 sm:grid-cols-3 lg:grid-cols-5">

            <Figure label={("Total")} value={wrapCurrency(amount(expenseData?.total_amount))} strong />

            {optionalFigures.map(figure => (
              <Figure key={figure.label} label={(figure.label)} value={wrapCurrency(figure.value)} />
            ))}

            {expenseData?.created_at && (
              <Figure label={("Created")} value={formatDate(expenseData.created_at)} />
            )}

            {expenseData?.transaction_id && (
              <Figure label={("Transaction")} value={expenseData.transaction_id} />
            )}

          </div>
        )}

        {expenseData?.note && (
          <p className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">{expenseData.note}</p>
        )}

      </div>


      {/* Same rail as the order page. */}
      <Tabs activeTab={'expense'}
        orientation="vertical"
        activeClass="active-tab "
        navsItemClass="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        navsItemActiveClass="!bg-[#634FE5] !text-white shadow-sm"

        navsWrapperClass="gap-1 rounded-xl border border-gray-200 bg-white p-2 lg:mb-0 lg:w-52 lg:shrink-0 lg:self-start"
        wrapperClass="gap-5"

        tabs={[
          { label: "Expense", id: 'expense', icon: <IconFileDollar size={18} /> },

          { label: "Invoice", id: 'invoice', icon: <IconReceipt size={18} /> },
          // { label: "Payments", id: 'payments', icon: <IconFileDollar size={18} /> },
        ]}>


        <Tab index={0} id="expense">

          {/* Re-reads the summary above after a save. */}
          <EditExpenses id={id} onSaved={get_expense} />

        </Tab>
        <Tab index={1} id="invoice">

          <InvoiceWithPDF invoice={invoiceData} />



        </Tab>




      </Tabs>




    </div>
  )
}

export default ExpenseEdit
