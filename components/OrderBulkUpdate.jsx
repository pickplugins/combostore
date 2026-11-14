"use client";
import { useState, useEffect } from "react";
import {
  IconMinus,
  IconPlus,
  IconMapPin,
  IconTrash,
  IconCheck,
  IconBasketPlus,
  IconPhoneCall,
  IconPencil,
  IconCopy,
  IconMailForward,
  IconMail,
  IconPhone,
  IconBrandWhatsapp,
  IconUserOff,
  IconPackageOff,
  IconTicket,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";

import DropDown from '../components/DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';

const SECONDARY_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer";

const PRIMARY_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg bg-gray-900 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

const SMALL_ACTION =
  "inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer";

// Global input styles use !important, so these need it too.
const FIELD =
  "!w-full !rounded-lg !border !border-solid !border-gray-300 !bg-white !px-3 !py-2 !text-sm !text-gray-900 !shadow-none !outline-none focus:!border-gray-900";

const SMALL_FIELD =
  "!w-24 !rounded-md !border !border-solid !border-gray-300 !bg-white !px-2 !py-1 !text-xs !shadow-none !outline-none focus:!border-gray-900";

const LABEL = "text-xs font-medium text-gray-600";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// react-datepicker needs a Date; order dates are stored as "yyyy-MM-dd HH:mm:ss" strings.
const toDate = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value;
  const d = new Date(String(value).replace(" ", "T"));
  return isNaN(d.getTime()) ? null : d;
};

const Field = ({ label, children, className = "" }) => (
  <label className={`flex flex-col gap-1.5 ${className}`}>
    <span className={LABEL}>{label}</span>
    {children}
  </label>
);

const OrderBulkUpdate = (props) => {

  var onOrderBulkUpdated = props?.onOrderBulkUpdated
  const { wrapCurrency } = useUtilsStore()

  const { token, paymentGateways, addNotification, orderStatusArgs, paymentStatusArgs } = useCounterStore()

  var ids = props?.ids
  var [loading, setloading] = useState(false);

  var [orderData, setorderData] = useState({ ids: ids, cartItems: [], });
  var [customerData, setcustomerData] = useState(null);
  var [cartItems, setcartItems] = useState([]);
  var [coupons, setCoupons] = useState({ applied: false, couponCode: "", discountAmount: 0, loading: false });
  var [editLineItems, seteditLineItems] = useState(false);

  const selectedCount = Array.isArray(ids) ? ids.length : 0;

  useEffect(() => {
    calculateOrder();
  }, [cartItems]);

  useEffect(() => {
    calculateOrder();
  }, [coupons.applied, coupons.discountAmount, orderData?.shipping_amount]);

  useEffect(() => {
    setorderData({
      ...orderData,
      discount_amount: coupons?.discountAmount
    })
  }, [coupons.discountAmount]);

  useEffect(() => {
    if (!orderData?.userid) {
      return
    };

    get_customer_data(orderData?.userid).then((user) => {
      setcustomerData(user)
    });
  }, [orderData?.userid]);

  function calculateOrder() {

    var subtotal = 0;
    var totalQuantity = 0;

    cartItems?.map(item => {
      var quantity = parseInt(item.quantity)
      var price = parseFloat(item.price)

      subtotal += (price * quantity);
      totalQuantity += quantity;
    })

    setorderData((prevOrderData) => {
      var totalPay = parseFloat(subtotal) + parseFloat(prevOrderData?.shipping_amount || 0);

      if (coupons?.applied) {
        totalPay = totalPay - parseFloat(coupons.discountAmount)
      }

      return { ...prevOrderData, total_amount: totalPay, subtotal_amount: subtotal }
    })
  }

  function bulk_update_orders() {

    setloading(true)

    var postData = JSON.stringify({ ...orderData, cartItems: cartItems });

    fetch(serverUrl + "wp-json/combo-store/v2/bulk_update_orders", {
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

        return response.json().then((res) => {
          var status = res?.status;
          var message = res?.message;

          if (status == 'success') {
            onOrderBulkUpdated(res);
            addNotification({ type: 'success', title: 'Order update', content: message })
          }
          if (status == 'failed') {
            addNotification({ type: 'error', title: 'Order update failed', content: message })
          }

          setTimeout(() => {
            setloading(false)
          }, 500);
        });
      })
      .catch((_error) => {
        setloading(false)
        addNotification({ type: 'error', title: 'Order update failed', content: "Could not reach the server. Please try again." })
      });
  }

  function onPickCustomer(args) {

    get_customer_data(args?.ID).then((user) => {
      setcustomerData(user)

      setorderData({
        ...orderData,
        userid: user?.id,
        billing_address: [user?.billing_address1, user?.billing_address2].filter(Boolean).join(" "),
        billing_name: user?.name,
        billing_phone: user?.phone,
        billing_email: user?.email,
      })
    });
  }

  async function get_customer_data(rider_id) {
    const postData = JSON.stringify({ id: rider_id });

    setloading(true);

    return fetch(serverUrl + "wp-json/combo-store/v2/get_customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: postData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);
        return res?.customer;
      })
      .catch((error) => {
        setloading(false);
        return null;
      });
  }

  function onAddProducts(item) {
    var cartItemsX = [...cartItems]

    cartItemsX.push({
      "order_id": orderData?.id,
      "product_id": item.id,
      "product_name": "",
      "sku": "",
      "quantity": 1,
      "price": item.price,
      "trade_price": item.trade_price,
      "subtotal": 0,
      "tax": 0,
      "total": 0,
      "meta": null,
      "title": item.title
    })

    setcartItems(cartItemsX)
  }

  function addCustomProduct() {
    var cartItemsX = [...cartItems]
    cartItemsX.push({ "order_id": orderData?.id, "product_id": '', "product_name": "Custom Product Title", "sku": "", "quantity": 1, "price": 0, trade_price: 0, "subtotal": 0, "tax": 0, "total": 0, "meta": null, })
    setcartItems(cartItemsX)
  }

  function updateItem(index, patch) {
    var cartItemsX = [...cartItems]
    cartItemsX[index] = { ...cartItemsX[index], ...patch };
    setcartItems(cartItemsX)
  }

  function removeItem(index) {
    var item = cartItems[index];
    var cartItemsX = [...cartItems]
    cartItemsX.splice(index, 1)
    setcartItems(cartItemsX)
    addNotification({ type: 'success', title: 'Item removed', content: `${item?.product_name || item?.title || "Item"} removed from line items.` })
  }

  function calculateCoupon(amount, discountType) {
    var discountAmount = 0;

    if (discountType == "percent") {
      discountAmount = (parseFloat(orderData?.total_amount) * amount) / 100;
    }
    if (discountType == "fixed") {
      discountAmount = amount;
    }

    return discountAmount;
  }

  function applyCoupon() {
    var couponsX = { ...coupons }

    if (!couponsX.couponCode || couponsX.couponCode.length == 0) {
      addNotification({ type: 'error', title: 'Coupon is empty', content: "Please write coupon code." });
      return;
    }

    setCoupons({ ...coupons, loading: true, couponCode: couponsX.couponCode })

    fetch(serverUrl + "wp-json/combo-store/v2/get_coupon_details", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ couponCode: couponsX.couponCode }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        return response.json().then((res) => {
          var errors = res.errors;

          if (errors) {
            addNotification({ type: 'error', title: 'Coupon is not valid', content: res.message });
            setCoupons({ ...coupons, loading: false, couponCode: "" })
            return;
          }

          var couponRes = res.coupon;
          var discountAmount = calculateCoupon(couponRes.amount, couponRes.couponType);

          setCoupons({
            ...coupons,
            applied: true,
            discountAmount: discountAmount,
            couponType: couponRes?.couponType,
            amount: couponRes?.amount,
            loading: false,
            couponCode: couponsX.couponCode
          })

          setTimeout(() => {
            addNotification({ type: 'success', title: 'Coupon Applied', content: "Win! Win!" })
          }, 500);
        });
      })
      .catch((_error) => {
        setCoupons({ ...coupons, loading: false, couponCode: couponsX.couponCode })
        addNotification({ type: 'error', title: 'Coupon check failed', content: "Could not reach the server. Please try again." })
      });
  }

  function removeCoupon() {
    setCoupons({ ...coupons, applied: false, discountAmount: 0, couponCode: "" })
  }

  function copyText(text, title) {
    navigator.clipboard.writeText(text)
      .then(() => addNotification({ type: 'success', title, content: title }))
      .catch(() => addNotification({ type: 'error', title: 'Copy failed', content: "Could not access the clipboard." }));
  }

  function setDate(field, date) {
    if (!date) return;
    setorderData({ ...orderData, [field]: format(date, "yyyy-MM-dd HH:mm:ss") });
  }

  const customerAddress = [customerData?.billing_address1, customerData?.billing_address2, customerData?.city, customerData?.country].filter(Boolean).join(", ");

  return (
    <div className="flex flex-col gap-4">

      {/* Header: what is being updated + save */}
      <div className="sticky top-0 z-10 -mx-1 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <div>
          <div className="text-sm font-semibold text-gray-900">
            Bulk update {selectedCount} {selectedCount === 1 ? "order" : "orders"}
          </div>
          <div className="text-xs text-gray-500">Changes below are sent to every selected order.</div>
        </div>

        <div className="flex items-center gap-3">
          {loading && <Spinner />}
          <button type="button" className={PRIMARY_BUTTON} disabled={loading || selectedCount === 0} onClick={bulk_update_orders}>
            <IconCheck size={16} />
            {loading ? "Updating…" : "Update orders"}
          </button>
        </div>
      </div>

      {/* Status & payment */}
      <WidgetWrapper title="Status & Payment">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <span className={LABEL}>Order status</span>
            <DropDown allowReset={true} multiple={false} value={orderData?.status} options={orderStatusArgs} label={`Order Status`} onOptionsChoose={(args) => {
              setorderData({ ...orderData, status: args?.value })
            }} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={LABEL}>Payment method</span>
            <DropDown allowReset={true} multiple={false} value={orderData?.payment_method} options={paymentGateways} label={`Payment Method`} onOptionsChoose={(args) => {
              setorderData({ ...orderData, payment_method: args?.value })
            }} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={LABEL}>Payment status</span>
            <DropDown allowReset={true} multiple={false} value={orderData?.payment_status} options={paymentStatusArgs} label={`Payment Status`} onOptionsChoose={(args) => {
              setorderData({ ...orderData, payment_status: args?.value })
            }} />
          </div>

          <Field label="Transaction ID">
            <input type="text" className={FIELD} value={orderData?.transaction_id ?? ""} onChange={ev => {
              setorderData({ ...orderData, transaction_id: ev.target.value })
            }} />
          </Field>
          <Field label="Created date">
            <DatePicker
              className={FIELD}
              showTimeSelect
              dateFormat="yyyy-MM-dd HH:mm:ss"
              placeholderText="Not changed"
              selected={toDate(orderData?.created_at)}
              onChange={(date) => setDate("created_at", date)}
            />
          </Field>
          <Field label="Completed date">
            <DatePicker
              className={FIELD}
              showTimeSelect
              dateFormat="yyyy-MM-dd HH:mm:ss"
              placeholderText="Not changed"
              selected={toDate(orderData?.completed_at)}
              onChange={(date) => setDate("completed_at", date)}
            />
          </Field>
        </div>
      </WidgetWrapper>

      {/* Order items */}
      <WidgetWrapper collapsible={true} title="Order Items">

        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-[220px] flex-1"><ProductsPicker placeholder="Search product..." onPick={onAddProducts} /></div>

          <div className="flex items-center gap-2">
            <button type="button" className={SECONDARY_BUTTON} onClick={addCustomProduct}>
              <IconBasketPlus size={16} />
              Add custom product
            </button>

            {cartItems?.length > 0 && (
              <button type="button" className={SECONDARY_BUTTON} onClick={() => seteditLineItems(!editLineItems)}>
                {editLineItems ? <><IconCheck size={16} /> Done</> : <><IconPencil size={16} /> Edit items</>}
              </button>
            )}
          </div>
        </div>

        {cartItems?.length === 0 && (
          <div className="flex flex-col items-center gap-1 rounded-lg border border-dashed border-gray-300 px-6 py-8 text-center">
            <IconPackageOff size={22} className="text-gray-400" />
            <div className="text-sm font-medium text-gray-700">No items added</div>
            <div className="text-xs text-gray-500">Search for a product or add a custom one.</div>
          </div>
        )}

        {cartItems?.length > 0 && (
          <div className="divide-y divide-gray-100 rounded-lg border border-gray-200">
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-wrap items-center gap-3 px-3 py-3">

                {/* Quantity stepper */}
                <div className="flex items-center rounded-lg border border-gray-200">
                  <button type="button" aria-label="Decrease quantity" className="flex h-8 w-8 items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    onClick={() => updateItem(index, { quantity: item.quantity == 1 ? 1 : parseInt(item.quantity) - 1 })}>
                    <IconMinus size={14} />
                  </button>
                  <span className="w-8 text-center text-sm font-medium tabular-nums">{item.quantity}</span>
                  <button type="button" aria-label="Increase quantity" className="flex h-8 w-8 items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                    onClick={() => updateItem(index, { quantity: parseInt(item.quantity) + 1 })}>
                    <IconPlus size={14} />
                  </button>
                </div>

                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-gray-100">
                  <Image className="h-full w-full object-cover" src={item.thumbnail || `/thumb.png`} width={96} height={96} alt={item?.product_name || ""} />
                </div>

                {/* Name + price fields */}
                <div className="flex min-w-[200px] flex-1 flex-col gap-1.5">
                  {editLineItems ? (
                    <input className={FIELD} type="text" value={item.product_name} onChange={ev => updateItem(index, { product_name: ev.target.value })} />
                  ) : (
                    <div className="text-sm font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: item.product_name || item.title || "" }}></div>
                  )}

                  {editLineItems ? (
                    <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                      <label className="flex items-center gap-1.5">Price
                        <input className={SMALL_FIELD} type="number" step="0.01" value={item.price} onChange={ev => updateItem(index, { price: parseFloat(ev.target.value) })} />
                      </label>
                      <label className="flex items-center gap-1.5">Trade price
                        <input className={SMALL_FIELD} type="number" step="0.01" value={item.trade_price} onChange={ev => updateItem(index, { trade_price: parseFloat(ev.target.value) })} />
                      </label>
                      <label className="flex items-center gap-1.5">Qty
                        <input className={SMALL_FIELD} type="number" step="0.01" value={item.quantity} onChange={ev => updateItem(index, { quantity: parseFloat(ev.target.value) })} />
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{wrapCurrency(item.price)}</span>
                      {item?.sale_price && (
                        <span className="line-through">{wrapCurrency(item.regular_price)}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Line total + remove */}
                <div className="ml-auto flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-semibold tabular-nums text-gray-900">{wrapCurrency(item.price * item.quantity)}</div>
                    <div className="text-xs tabular-nums text-gray-400">{item.quantity} × {wrapCurrency(item.price)}</div>
                  </div>
                  <button type="button" aria-label="Remove item" title="Remove item"
                    className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer"
                    onClick={() => removeItem(index)}>
                    <IconTrash size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Totals */}
        <div className="mt-4 ml-auto flex w-full max-w-sm flex-col gap-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="tabular-nums">{wrapCurrency(orderData?.subtotal_amount)}</span>
          </div>
          {orderData?.shipping_amount > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Delivery charge</span>
              <span className="tabular-nums">{wrapCurrency(orderData?.shipping_amount)}</span>
            </div>
          )}
          {orderData?.discount_amount > 0 && (
            <div className="flex justify-between text-emerald-700">
              <span>Discount</span>
              <span className="tabular-nums">-{wrapCurrency(orderData?.discount_amount)}</span>
            </div>
          )}
          <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-semibold text-gray-900">
            <span>Total to pay</span>
            <span className="tabular-nums">{wrapCurrency(orderData?.total_amount)}</span>
          </div>
        </div>
      </WidgetWrapper>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Coupon */}
        <WidgetWrapper title="Coupon">
          {!coupons?.applied && (
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Coupon code" className={`${FIELD} !uppercase`} value={coupons?.couponCode} onChange={ev => {
                setCoupons({ ...coupons, couponCode: ev.target.value })
              }} onKeyDown={ev => { if (ev.key === "Enter") applyCoupon() }} />
              <button type="button" className={`${SECONDARY_BUTTON} shrink-0`} disabled={coupons?.loading} onClick={applyCoupon}>
                {coupons?.loading ? <Spinner /> : <IconTicket size={16} />}
                Apply
              </button>
            </div>
          )}
          {coupons?.applied && (
            <div className="flex items-center justify-between gap-3 rounded-lg border border-dashed border-emerald-300 bg-emerald-50 px-3 py-2.5">
              <div className="flex items-center gap-2 text-sm">
                <IconTicket size={18} className="text-emerald-700" />
                <span className="font-mono font-semibold text-emerald-800">{coupons?.couponCode}</span>
                <span className="text-emerald-700">
                  {coupons?.couponType == 'fixed' && <>{wrapCurrency(coupons?.amount)} off</>}
                  {coupons?.couponType == 'percent' && <>{coupons?.amount}% off</>}
                </span>
              </div>
              <button type="button" aria-label="Remove coupon" className="flex h-7 w-7 items-center justify-center rounded-md text-emerald-700 hover:bg-emerald-100 cursor-pointer" onClick={removeCoupon}>
                <IconX size={16} />
              </button>
            </div>
          )}
        </WidgetWrapper>

        {/* Shipping */}
        <WidgetWrapper title="Shipping & Delivery">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Shipping method">
              <select name="shipping_method" className={FIELD} value={orderData?.shipping_method ?? ""} onChange={ev => {
                setorderData({ ...orderData, shipping_method: ev.target.value })
              }}>
                <option value="">Choose</option>
                <option value="kidobazar">KidoBazar Courier</option>
                <option value="steadfast">Steadfast Courier</option>
                <option value="pathao">Pathao Courier</option>
                <option value="karatoa">Karatoa Courier</option>
                <option value="sundarban">Sundarban Courier</option>
              </select>
            </Field>
            <Field label="Delivery charge">
              <input type="text" inputMode="decimal" className={FIELD} value={orderData?.shipping_amount ?? ""} onChange={ev => {
                setorderData({ ...orderData, shipping_amount: ev.target.value })
              }} />
            </Field>
          </div>
        </WidgetWrapper>
      </div>

      {/* Customer */}
      <WidgetWrapper title="Customer">
        <div className="flex flex-col gap-4">
          <UsersPicker placeholder={"Search Customer"} role={`customer`} onPick={onPickCustomer} />

          {!customerData?.id && (
            <div className="flex items-center gap-2 rounded-lg border border-dashed border-gray-300 px-3 py-3 text-sm text-gray-500">
              <IconUserOff size={18} className="text-gray-400" />
              No customer assigned
            </div>
          )}

          {customerData?.id && (
            <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  {customerData?.avatar && <img src={customerData?.avatar} alt="" width={40} height={40} className="h-full w-full object-cover" />}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{customerData?.name}</div>
                  <div className="text-xs text-gray-500">ID: {customerData?.id}</div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 text-sm text-gray-700">
                {customerData?.email && (
                  <div className="flex flex-wrap items-center gap-2">
                    <IconMail size={16} className="text-gray-400" />
                    <span className="mr-1">{customerData?.email}</span>
                    <a href={`mailto:${customerData?.email}`} className={SMALL_ACTION}><IconMailForward size={14} /> Mail</a>
                    <button type="button" className={SMALL_ACTION} onClick={() => copyText(customerData?.email, "Email Copied")}><IconCopy size={14} /> Copy</button>
                  </div>
                )}

                {customerData?.phone && (
                  <div className="flex flex-wrap items-center gap-2">
                    <IconPhone size={16} className="text-gray-400" />
                    <span className="mr-1">{customerData?.phone}</span>
                    <a href={`tel:${customerData?.phone}`} className={SMALL_ACTION}><IconPhoneCall size={14} /> Call</a>
                    <a href={`https://wa.me/${customerData?.phone}`} target="_blank" rel="noopener noreferrer" className={SMALL_ACTION}><IconBrandWhatsapp size={14} /> WhatsApp</a>
                    <button type="button" className={SMALL_ACTION} onClick={() => copyText(customerData?.phone, "Phone Copied")}><IconCopy size={14} /> Copy</button>
                  </div>
                )}

                {customerData?.billing_address1 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <IconMapPin size={16} className="text-gray-400" />
                    <span className="mr-1">{customerAddress}</span>
                    <button type="button" className={SMALL_ACTION} onClick={() => copyText([customerData?.billing_address1, customerData?.billing_address2, customerData?.city, customerData?.country].filter(Boolean).join(" "), "Address Copied")}><IconCopy size={14} /> Copy</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </WidgetWrapper>

      {/* Addresses */}
      <WidgetWrapper title="Address">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-gray-900">Billing</div>
            <Field label="Name">
              <input type="text" className={FIELD} value={orderData?.billing_name ?? ""} onChange={ev => setorderData({ ...orderData, billing_name: ev.target.value })} />
            </Field>
            <Field label="Email">
              <input type="email" className={FIELD} value={orderData?.billing_email ?? ""} onChange={ev => setorderData({ ...orderData, billing_email: ev.target.value })} />
            </Field>
            <Field label="Phone">
              <input type="tel" className={FIELD} value={orderData?.billing_phone ?? ""} onChange={ev => setorderData({ ...orderData, billing_phone: ev.target.value })} />
            </Field>
            <Field label="Address">
              <textarea rows={3} className={FIELD} value={orderData?.billing_address ?? ""} onChange={ev => setorderData({ ...orderData, billing_address: ev.target.value })} />
            </Field>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-gray-900">Shipping</div>
            <Field label="Name">
              <input type="text" className={FIELD} value={orderData?.shipping_name ?? ""} onChange={ev => setorderData({ ...orderData, shipping_name: ev.target.value })} />
            </Field>
            <Field label="Phone">
              <input type="tel" className={FIELD} value={orderData?.shipping_phone ?? ""} onChange={ev => setorderData({ ...orderData, shipping_phone: ev.target.value })} />
            </Field>
            <Field label="Address">
              <textarea rows={3} className={FIELD} value={orderData?.shipping_address ?? ""} onChange={ev => setorderData({ ...orderData, shipping_address: ev.target.value })} />
            </Field>
          </div>
        </div>
      </WidgetWrapper>

    </div>
  );
};

export default OrderBulkUpdate;
