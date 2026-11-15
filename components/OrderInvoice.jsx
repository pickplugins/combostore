"use client";
import { useState, useEffect, useMemo } from "react";
import { IconAlertTriangle, IconRefresh, IconFileInvoice } from "@tabler/icons-react";

import InvoiceWithPDF from '../components/InvoiceWithPDF';
import { orderToInvoice } from './orderInvoiceData';

import { useCounterStore } from '../store/useCounterStore'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const TOOLBAR_BUTTON =
  "inline-flex !h-9 items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-0 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-50 cursor-pointer disabled:opacity-50";


/*
  An order's invoice. This only fetches the order and hands it to
  InvoiceWithPDF, which owns the template picker, preview, print and PDF.

  It used to pass a hard-coded "KidoBazar.com, Rangpur" as the sender, which
  overrode the shop's own name and address from Settings on every store, and
  read the customer's city from `city` instead of `billing_city`. A failed or
  empty fetch left "Preparing the invoice…" on screen for good.
*/
const OrderInvoice = (props) => {

  const { token } = useCounterStore()

  var order_id = props?.order_id

  var [orderData, setorderData] = useState(null);
  var [lineItems, setlineItems] = useState(null);
  /* loading | ready | missing | error */
  var [state, setstate] = useState("loading");
  var [errorMessage, seterrorMessage] = useState("");


  /* Shared with the customer's order list, so both print the same invoice. */
  var invoiceData = useMemo(() => orderToInvoice(orderData, lineItems ?? []), [orderData, lineItems]);


  function get_order() {

    if (!order_id) {
      setstate("missing");
      return;
    }

    setstate("loading");

    fetch(serverUrl + "wp-json/combo-store/v2/get_order", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id: order_id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        var order = res?.order;

        if (order && order.id != null) {
          setorderData(order)
          setlineItems(res?.line_items ?? [])
          setstate("ready");
        } else {
          setorderData(null);
          setstate("missing");
        }
      })
      .catch((error) => {
        seterrorMessage(error?.message ?? "");
        setstate("error");
      });
  }

  useEffect(() => {
    get_order();
  }, [order_id]);


  if (state === "error") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-amber-800">
          <IconAlertTriangle size={16} /> {("Could not load the invoice")}
        </div>
        {errorMessage && <p className="text-xs text-amber-700">{errorMessage}</p>}
        <button type="button" className={TOOLBAR_BUTTON} onClick={() => get_order()}>
          <IconRefresh size={16} /> {("Try again")}
        </button>
      </div>
    );
  }

  if (state === "missing") {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-6 py-10 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconFileInvoice size={20} /></div>
        <div className="text-sm text-gray-500">{("This order could not be found, so there is no invoice to show.")}</div>
      </div>
    );
  }

  /* While loading invoiceData is null, and InvoiceWithPDF shows its own
     "Preparing the invoice…" placeholder under the toolbar. */
  return (
    <div className="flex flex-col gap-4">

      {state === "ready" && lineItems?.length == 0 && (
        <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700">
          <IconAlertTriangle size={16} /> {("This order has no items yet. Add them in the Order tab before sending the invoice.")}
        </div>
      )}

      <InvoiceWithPDF invoice={invoiceData} />

    </div>
  );
};

export default OrderInvoice;
