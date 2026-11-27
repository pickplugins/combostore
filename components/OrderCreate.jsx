"use client";
import { useState, useEffect } from "react";
import { IconTrash, IconBasketPlus, IconExclamationCircle, IconHighlight, IconPhoneCall, IconCopy, IconMailForward, IconMail, IconPhone, IconMapPin, IconBrandWhatsapp, IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconFilePlus, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DropDown from '../components/DropDown';


import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import PopoverButton from '../components/PopoverButton';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';
import countries from '../lib/Countries'
import states from '../lib/States'

/*
  Same look as the order editor (OrderEdit > OrderUpdate): a heading, a
  sticky toolbar with the status pickers and the primary action, then the
  same cards, fields and line-item rows.
*/
const CARD_CLASSES =
  "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";

const INPUT = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm";
const SMALL_INPUT = `${INPUT} w-20 !px-2 !py-1 text-right tabular-nums`;
const ROW = "flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1";
const LABEL = "block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0";
const PRIMARY_BUTTON = "inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";
const SECONDARY_BUTTON = "inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer";
const CHIP_BUTTON = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer";
const ICON_BUTTON = "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors cursor-pointer";
const PILL = "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset";
const DROPDOWN_LABEL = "w-full flex items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-xs cursor-pointer transition-colors hover:border-gray-400";
const DEFAULT_COUNTRY = 'BD';

/* Country picker options, built once: { BD: { label, value, states } }. */
const COUNTRY_OPTIONS = Object.fromEntries((countries ?? []).map(country => [country.code2, { label: country.name, value: country.code2, states: country.states }]));

const TOTAL_ROW = "flex items-center justify-between gap-3 border-b border-gray-100 py-2.5 text-sm text-gray-600";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;





const OrderCreate = (props) => {

  var onOrderCreated = props?.onOrderCreated
  const { formatDate, wrapCurrency } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, paymentGateways, orderStatusArgs, paymentStatusArgs, privacyMode } = useCounterStore()

  // var orderId = props?.order_id
  var [loading, setloading] = useState(false);

  var [orderData, setorderData] = useState({ cartItems: [], payment_method: "", payment_status: "", subtotal_amount: 0, total_amount: 0, billing_country: DEFAULT_COUNTRY });
  var [customerData, setcustomerData] = useState(null);
  var [coupons, setCoupons] = useState({ applied: false, couponCode: "", discountAmount: 0, loading: false });
  var [shipping, setShipping] = useState(0);
  var [cartItems, setcartItems] = useState([]);
  var [profits, setprofits] = useState({ grossProfit: 0, netProfit: 0, productCost: 0 });

  /* Shipping methods come from the shipping zones that match the billing
     country and city, as in the order editor (OrderUpdate). */
  var [shippingMethods, setshippingMethods] = useState([]);
  var [shippingLoading, setshippingLoading] = useState(false);

  var billingCountry = orderData?.billing_country || DEFAULT_COUNTRY;
  var billingCity = orderData?.billing_city || "";

  var statesList = Object.fromEntries(Object.entries(states[billingCountry] ?? {}).map(([code, name]) => [code, { label: name, value: code }]));
  const countryLabel = (code) => COUNTRY_OPTIONS[code]?.label ?? 'Choose Country';
  const cityLabel = (code) => statesList[code]?.label ?? 'Choose City';

  useEffect(() => {
    if (!billingCity) {
      setshippingMethods([]);
      return;
    }

    /* A later country/city change wins over an answer still on its way. */
    var stale = false;
    setshippingLoading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/find_shipping_methods", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country: billingCountry, city: billingCity }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Server answered ${response.status}.`);
        return response.json();
      })
      .then((res) => {
        if (stale) return;
        var methods = Array.isArray(res?.methods) ? res.methods : [];
        setshippingMethods(methods);

        /* Drop a chosen method the new area does not offer. */
        setorderData(prev => prev?.shipping_method && !methods.some(m => m?.id == prev.shipping_method)
          ? { ...prev, shipping_method: "" }
          : prev);
      })
      .catch(() => {
        if (!stale) setshippingMethods([]);
      })
      .finally(() => {
        if (!stale) setshippingLoading(false);
      });

    return () => { stale = true; };
  }, [billingCountry, billingCity]);






  useEffect(() => {
    calculateOrder();
  }, [cartItems]);

  useEffect(() => {

    calculateOrder();

  }, [coupons.applied, coupons.discountAmount, orderData?.shipping_amount]);

  useEffect(() => {

    setorderData(prev => ({ ...prev, discount_amount: coupons?.discountAmount }))
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
    var productCost = 0;
    var grossProfit = 0;
    var netProfit = 0;

    cartItems?.map(item => {

      var quantity = parseInt(item.quantity) || 0
      var price = parseFloat(item.price) || 0
      var trade_price = item.trade_price ? (parseFloat(item.trade_price) || 0) : price

      subtotal += (price * quantity);
      totalQuantity += quantity;
      productCost += (trade_price * quantity);
    })

    grossProfit = (subtotal - productCost);

    if (coupons?.discountAmount > 0) {
      netProfit = grossProfit - coupons?.discountAmount
    } else {
      netProfit = grossProfit
    }


    setprofits({ ...profits, productCost: productCost, grossProfit: grossProfit, netProfit: netProfit })


    setorderData((prevOrderData) => {
      var totalPay = parseFloat(subtotal) + parseFloat(prevOrderData?.shipping_amount || 0);

      if (coupons?.applied) {
        totalPay = totalPay - parseFloat(coupons.discountAmount)
      }

      if (prevOrderData?.advance_payment) {
        totalPay = totalPay - parseFloat(prevOrderData?.advance_payment)
      }


      return { ...prevOrderData, total_amount: totalPay, subtotal_amount: subtotal, gross_profit: grossProfit, net_profit: netProfit }
    })

  }


  function create_order() {

    setloading(true)

    var postData = JSON.stringify({ ...orderData, cartItems: cartItems });

    fetch(serverUrl + "wp-json/combo-store/v2/create_order", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        /* Staff token: the server then skips the shopper checks and does not save this browser's IP as the customer's. */
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {


            var status = res?.status;
            var message = res?.message;

            if (status == 'success') {
              onOrderCreated?.(res);
              addNotification({ type: 'success', title: 'Order created', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Order creation failed', content: message })
            }



            setTimeout(() => {
              setloading(false)

            }, 500);
          });
        }
      })
      .catch((error) => {
        setloading(false)
        addNotification({ type: "error", title: "Order creation failed", content: error?.message })
      });

  }
  function update_order_items() {

    setloading(true)



    var postData = JSON.stringify({ order_id: orderData?.id, cartItems: cartItems });

    fetch(serverUrl + "wp-json/combo-store/v2/update_order_items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            var status = res?.status;
            var message = res?.message;

            if (status == 'success') {
              addNotification({ type: 'success', title: 'Order items update', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Order items update failed', content: message })
            }



            setTimeout(() => {
              setloading(false)

            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }




  /* args may carry one of the customer's saved addresses (UsersPicker with
     displayAddress); otherwise the profile's billing address is used. */
  function onPickCustomer(args) {

    get_customer_data(args?.id).then((user) => {
      setcustomerData(user)

      setorderData(prev => ({
        ...prev,
        userid: user?.id,
        billing_address: args?.billing_address || [user?.billing_address1, user?.billing_address2].filter(Boolean).join(" "),
        billing_name: user?.name,
        billing_phone: user?.phone,
        billing_email: user?.email,
        billing_country: args?.billing_country || user?.billing_country || prev?.billing_country || DEFAULT_COUNTRY,
        billing_city: args?.billing_city || user?.billing_city || "",
      }))

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

        return res?.customer; // <-- THIS is now returned to the caller
      })
      .catch((error) => {
        setloading(false);
        return null; // or throw error
      });
  }


  function onAddProducts(item) {


    var cartItemsX = [...cartItems]

    //var upsells = currentObject?.upsells ? currentObject.upsells : {};
    cartItemsX.push({




      "order_id": orderData?.id,
      "product_id": item.id,
      "product_name": item.title,
      "sku": "",
      "quantity": 1,
      "price": item.price,
      "trade_price": item.trade_price ? item.trade_price : item.price,
      "subtotal": item.price,
      "tax": 0,
      "total": item.price,
      "thumbnail": item.post_thumbnail_url,
      "meta": null,

    })

    setcartItems(cartItemsX)


  }



  function calculateCoupon(amount, discountType) {

    var discountAmount = 0;




    if (discountType == "percent") {
      var discountAmount = (parseFloat(orderData?.total_amount) * amount) / 100;

    }
    if (discountType == "fixed") {
      var discountAmount = amount;

    }



    return discountAmount;
  }


  function applyCoupon() {

    var couponCode = (coupons?.couponCode ?? "").trim();

    if (couponCode.length == 0) {
      addNotification({ type: 'error', title: 'Coupon is empty', content: "Please write coupon code." });
      return;
    }

    setCoupons({ ...coupons, loading: true, couponCode: couponCode })

    fetch(serverUrl + "wp-json/combo-store/v2/get_coupon_details", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ couponCode: couponCode }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {

        if (res?.errors || !res?.coupon) {
          addNotification({ type: 'error', title: 'Coupon is not valid', content: res?.message });
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
          couponCode: couponCode
        })

        addNotification({ type: 'success', title: 'Coupon Applied', content: "Win! Win!" })
      })
      .catch((error) => {
        setCoupons({ ...coupons, loading: false })
        addNotification({ type: 'error', title: 'Coupon check failed', content: error?.message })
      });
  }


  var blur = privacyMode ? "blur-[3px]" : "";

  /* Copies the item, so a change is a new array and a new row object. */
  function updateItem(index, patch) {
    setcartItems(cartItems.map((row, i) => i === index ? { ...row, ...patch } : row));
  }

  function removeItem(index) {
    var item = cartItems[index];
    setcartItems(cartItems.filter((row, i) => i !== index));
    addNotification({ type: 'success', title: 'Item removed', content: `${item?.product_name} removed from line items.` })
  }

  function copyText(text, title) {
    navigator.clipboard.writeText(text)
    addNotification({ type: 'success', title: title, content: title })
  }

  /* A selectable card that behaves like a radio button (same as OrderUpdate). */
  function OptionTile({ selected, onSelect, children }) {
    return (
      <div
        role="radio"
        aria-checked={selected}
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={ev => {
          if (ev.key !== 'Enter' && ev.key !== ' ') return;
          ev.preventDefault();
          onSelect();
        }}
        className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/30 ${selected ? 'border-[#1b0e9f] bg-[#1b0e9f]/5 ring-1 ring-[#1b0e9f]' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'}`}
      >
        <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${selected ? 'border-[#1b0e9f]' : 'border-gray-300'}`}>
          {selected && <span className="h-2 w-2 rounded-full bg-[#1b0e9f]" />}
        </span>
        {children}
      </div>
    );
  }

  var itemCount = cartItems.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);


  return (
    <div className="flex flex-col gap-4">

      {/* ---------- heading ---------- */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#634FE5]/10 text-[#634FE5]">
          <IconFilePlus size={20} />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("New order")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {cartItems.length > 0
              ? <>{itemCount} {itemCount == 1 ? "item" : "items"} · {wrapCurrency(orderData?.total_amount)}</>
              : ("Add products, pick a customer, then create the order.")}
          </p>
        </div>
      </div>


      {/* ---------- toolbar: stays in view while the form scrolls ---------- */}
      <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">

        <div className="flex flex-wrap gap-3">
          <DropDown allowReset={true} multiple={false} value={orderData?.status} options={orderStatusArgs} label={`Order Status`} onOptionsChoose={(args) => {
            setorderData({ ...orderData, status: args?.value })
          }} />
          <DropDown allowReset={true} multiple={false} value={orderData?.payment_method} options={paymentGateways} label={`Payment Method`} onOptionsChoose={(args) => {
            setorderData({ ...orderData, payment_method: args?.value })
          }} />
          <DropDown allowReset={true} multiple={false} value={orderData?.payment_status} options={paymentStatusArgs} label={`Payment Status`} onOptionsChoose={(args) => {
            setorderData({ ...orderData, payment_status: args?.value })
          }} />
        </div>

        <div className="flex items-center gap-2">
          {loading && <Spinner />}
          <button type="button" className={PRIMARY_BUTTON} disabled={loading} onClick={() => create_order()}>
            {("Create Order")}
          </button>
        </div>
      </div>


      {/* ---------- items ---------- */}
      <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Order Items">

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div><ProductsPicker placeholder="Search product..." onPick={onAddProducts} /></div>

          <div className={SECONDARY_BUTTON}
            onClick={() => {
              setcartItems([...cartItems, { "order_id": orderData?.id, "product_id": '', "product_name": "Custom Product Title", "sku": "", "quantity": 1, "price": 0, trade_price: 0, "subtotal": 0, "tax": 0, "total": 0, "meta": null, }])
            }}
          >
            <IconBasketPlus size={16} /> Add Custom Product
          </div>
        </div>


        {cartItems.length == 0 && (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-300 px-6 py-8 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconShoppingCart size={20} /></div>
            <div className="text-sm font-medium text-gray-700">{("No items yet")}</div>
            <p className="text-xs text-gray-500">{("Search for a product above, or add a custom one.")}</p>
          </div>
        )}


        <div className="flex flex-col gap-2">
          {cartItems?.map((item, index) => {

            var quantity = item.quantity ? parseInt(item.quantity) : 0;
            var price = item.price ? parseFloat(item.price) : 0;
            var trade_price = item.trade_price ? parseFloat(item.trade_price) : price;

            return (
              <div key={index} className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-colors hover:border-gray-300 xl:flex-row xl:flex-wrap xl:items-center xl:justify-between">

                <div className="flex flex-1 flex-wrap items-center gap-3 text-xs">

                  <div className="flex shrink-0 flex-col items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 p-1 text-sm font-semibold tabular-nums text-gray-900">
                    <span onClick={() => updateItem(index, { quantity: quantity + 1 })}
                      className="inline-flex h-6 w-6 items-center justify-center rounded text-gray-400 transition-colors hover:bg-white hover:text-[#634FE5] cursor-pointer [&>svg]:size-4">
                      <IconSquareRoundedPlusFilled />
                    </span>
                    <span>{quantity}</span>
                    <span onClick={() => updateItem(index, { quantity: quantity <= 1 ? 1 : quantity - 1 })}
                      className="inline-flex h-6 w-6 items-center justify-center rounded text-gray-400 transition-colors hover:bg-white hover:text-[#634FE5] cursor-pointer [&>svg]:size-4">
                      <IconSquareRoundedMinusFilled />
                    </span>
                  </div>

                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                    <Image unoptimized className="h-full w-full object-cover" src={item.thumbnail || `/thumb.png`} width={200} height={200} alt={item?.product_name ?? ""} />
                  </div>

                  <div className="flex flex-col gap-1.5">

                    <div className="flex flex-wrap items-center gap-2">
                      <div className="text-sm" dangerouslySetInnerHTML={{ __html: item.product_name }}></div>

                      <PopoverButton buttonLabel={(" ")} buttonClass={`${ICON_BUTTON} hover:bg-gray-100 hover:text-gray-900`} buttonIcon={<IconHighlight size={16} />} title={"Edit Order Item"} position={"bottomLeft"}>
                        <div className="w-[min(500px,calc(100vw-2rem))] p-4">
                          <div className="flex flex-col gap-4">

                            <input className={`${INPUT} !w-full`} type="text" value={item.product_name ?? ''} onChange={ev => updateItem(index, { product_name: ev.target.value })} />

                            <div className="flex flex-wrap gap-3">
                              <label className="flex items-center gap-2">
                                <span className="whitespace-nowrap">Price:</span>
                                <input className={SMALL_INPUT} type="number" step="0.01" value={item.price ?? ''} onChange={ev => updateItem(index, { price: ev.target.value })} />
                              </label>
                              <label className="flex items-center gap-2">
                                <span className="whitespace-nowrap">Trade Price:</span>
                                <input className={SMALL_INPUT} type="number" step="0.01" value={item.trade_price ?? ''} onChange={ev => updateItem(index, { trade_price: ev.target.value })} />
                              </label>
                              <label className="flex items-center gap-2">
                                <span className="whitespace-nowrap">Quantity:</span>
                                <input className={SMALL_INPUT} type="number" step="1" min="1" value={item.quantity ?? ''} onChange={ev => updateItem(index, { quantity: ev.target.value })} />
                              </label>
                            </div>

                          </div>
                        </div>
                      </PopoverButton>

                      <div className={`${ICON_BUTTON} hover:bg-red-50 hover:text-red-600`} title="Remove" onClick={() => removeItem(index)}>
                        <IconTrash width={16} />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="text-xs">Price: {wrapCurrency(price)}</div>
                      <div className="text-xs">Trade Price: {wrapCurrency(trade_price)}</div>
                      {trade_price > 0 && (
                        <div className={`${PILL} bg-amber-50 text-amber-700 ring-amber-200`}>Gross Profit: {wrapCurrency((price - trade_price) * quantity)}</div>
                      )}
                      {item?.sale_price && (
                        <div className="text-xs text-gray-400 line-through">{wrapCurrency(item.regular_price)}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1 text-sm tabular-nums text-gray-500 md:justify-end">
                  {wrapCurrency(price)} X {quantity} = {wrapCurrency(price * quantity)}
                </div>

              </div>
            )
          })}
        </div>


        <div className={`${TOTAL_ROW} mt-2`}>
          <div>Sub Total</div>
          <div className="font-medium tabular-nums text-gray-900">{wrapCurrency(orderData?.subtotal_amount)}</div>
        </div>

        {orderData?.shipping_amount > 0 && (
          <div className={TOTAL_ROW}>
            <div>Delivery Charge</div>
            <div className="font-medium tabular-nums text-gray-900">+{wrapCurrency(orderData?.shipping_amount)}</div>
          </div>
        )}
        {orderData?.advance_payment > 0 && (
          <div className={TOTAL_ROW}>
            <div>Advance Payment</div>
            <div className="font-medium tabular-nums text-rose-600">-{wrapCurrency(orderData?.advance_payment)}</div>
          </div>
        )}
        {orderData?.discount_amount > 0 && (
          <div className={TOTAL_ROW}>
            <div>Discount</div>
            <div className="font-medium tabular-nums text-rose-600">-{wrapCurrency(orderData?.discount_amount)}</div>
          </div>
        )}

        <div className="mt-2 flex items-center justify-between gap-3 rounded-lg bg-gray-50 px-4 py-3">
          <div className="text-sm font-semibold text-gray-900">Total Amount to Pay</div>
          <div className="text-lg font-bold tabular-nums text-emerald-600">{wrapCurrency(orderData?.total_amount)}</div>
        </div>

      </WidgetWrapper>


      {/* ---------- profits ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Profits">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Product Cost</div>
            <div className="mt-1 text-xl font-semibold tabular-nums text-gray-900">{wrapCurrency(profits.productCost)}</div>
          </div>
          <div className="rounded-xl border border-[#634FE5]/20 bg-[#634FE5]/5 p-4">
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Gross profit</div>
            <div className="mt-1 text-xl font-semibold tabular-nums text-gray-900">{wrapCurrency(profits.grossProfit)}</div>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Net profit</div>
            <div className="mt-1 text-xl font-semibold tabular-nums text-gray-900">{wrapCurrency(profits.netProfit)}</div>
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- customer ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Customer">
        <div className="flex flex-col gap-4">

          <div className="flex items-center justify-between">
            <UsersPicker placeholder={"Search Customer"} displayAddress={true} role={`customer`} onPick={onPickCustomer} />
          </div>

          {!customerData?.id && (
            <div className="inline-flex items-center gap-2 self-start rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700"><IconExclamationCircle size={16} /> No Customer assigned</div>
          )}

          {customerData?.id && (
            <div className="grid grid-cols-1 gap-4">

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                  {customerData?.avatar && <img className="h-full w-full object-cover" src={customerData.avatar} alt="" width={50} height={50} />}
                </div>
                <div>
                  <div className={`text-sm font-semibold text-gray-900 ${blur}`}>{customerData?.name}</div>
                  <div className="text-xs text-gray-500">ID: {customerData?.id}</div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5">

                {customerData?.email && (
                  <div className="flex flex-wrap items-center gap-2">
                    <IconMail className="text-gray-400" size={16} />
                    <div className={`text-sm text-gray-700 ${blur}`}>{customerData?.email}</div>
                    <a href={`mailto:${customerData?.email}`} className={CHIP_BUTTON}><IconMailForward size={16} /> Send Mail</a>
                    <div className={CHIP_BUTTON} onClick={() => copyText(customerData?.email, 'Email Copied')}><IconCopy size={16} /> Copy</div>
                  </div>
                )}

                {customerData?.phone && (
                  <div className="flex flex-wrap items-center gap-2">
                    <IconPhone className="text-gray-400" size={16} />
                    <div className={`text-sm text-gray-700 ${blur}`}>{customerData?.phone}</div>
                    <a href={`tel:${customerData?.phone}`} className={CHIP_BUTTON}><IconPhoneCall size={16} /> Call</a>
                    <a href={`https://wa.me/${customerData?.phone}`} target="_blank" rel="noreferrer" className={CHIP_BUTTON}><IconBrandWhatsapp size={16} /> WhatsApp</a>
                    <div className={CHIP_BUTTON} onClick={() => copyText(customerData?.phone, 'Phone Copied')}><IconCopy size={16} /> Copy</div>
                  </div>
                )}

                {customerData?.billing_address1 && (
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <IconMapPin className="text-gray-400" size={16} />
                    <div className={`text-gray-700 ${blur}`}>
                      {[customerData?.billing_address1, customerData?.billing_address2, customerData?.billing_city, customerData?.billing_country].filter(Boolean).join(", ")}
                    </div>
                    <div className={CHIP_BUTTON} onClick={() => copyText([customerData?.billing_address1, customerData?.billing_address2, customerData?.billing_city, customerData?.billing_country].filter(Boolean).join(" "), 'Address Copied')}>
                      <IconCopy size={16} /> Copy
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </WidgetWrapper>


      {/* ---------- advance payment ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Advanced Payment">
        <div className={ROW}>
          <div className={LABEL}>{("Advanced Payment")}</div>
          <div>
            <input type="text" className={`${INPUT} w-full`} value={orderData?.advance_payment ?? ''} onChange={ev => {
              setorderData({ ...orderData, advance_payment: ev.target.value })
            }} />
          </div>
        </div>
        <div className={ROW}>
          <div className={LABEL}>{("Advanced Payment Note")}</div>
          <div>
            <textarea className={`${INPUT} w-full`} value={orderData?.advance_payment_note ?? ''} onChange={ev => {
              setorderData({ ...orderData, advance_payment_note: ev.target.value })
            }} />
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- coupon ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Coupon">
        <div className={ROW}>
          <div className={LABEL}>{("Coupon Code")}</div>
          <div>

            {!coupons?.applied && (
              <div className="flex flex-wrap items-center gap-2">
                <input type="text" className={`${INPUT} w-32 uppercase tracking-wide`} value={coupons?.couponCode ?? ''} onChange={ev => {
                  setCoupons({ ...coupons, couponCode: ev.target.value })
                }} />
                <div className={PRIMARY_BUTTON} onClick={applyCoupon}>Apply Coupon</div>
                {coupons?.loading && <Spinner />}
              </div>
            )}

            {coupons?.applied && (
              <div className="flex flex-wrap items-center gap-2 py-2 text-sm text-gray-700">
                {coupons?.couponType == 'fixed' && (<>{wrapCurrency(coupons?.amount)} discount applied.</>)}
                {coupons?.couponType == 'percent' && (<>{coupons?.amount}% discount applied.</>)}
                <div className="inline-flex items-center rounded-lg border border-dashed border-emerald-400 bg-emerald-50 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-700">{coupons?.couponCode}</div>
                <div className="inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 cursor-pointer" onClick={() => {
                  setCoupons({ ...coupons, applied: false, discountAmount: 0, couponCode: "" })
                }}>Remove</div>
              </div>
            )}

          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- shipping ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Shipping & Delivery">
        <div className={ROW}>
          <div className={LABEL}>{('Shipping Method')}</div>
          <div>
            {shippingLoading ? (
              <div className="flex items-center gap-2 text-sm text-gray-500"><Spinner /> {("Finding shipping methods…")}</div>
            ) : shippingMethods.length == 0 ? (
              <div className="text-sm text-gray-500">
                {billingCity
                  ? ("No shipping methods for this city. Check your shipping zones, or enter the charge below.")
                  : ("No shipping methods yet. Choose the billing country and city to see the available options.")}
              </div>
            ) : (
              <div role="radiogroup" aria-label="Shipping method" className="flex flex-col gap-2">
                {shippingMethods.map(method => (
                  <OptionTile key={method?.id} selected={orderData?.shipping_method == method?.id} onSelect={() => {
                    setorderData({ ...orderData, shipping_method: method?.id, shipping_amount: parseFloat(method?.amount) || 0 })
                  }}>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-900">{method?.name}</div>
                      {method?.description && <div className="mt-0.5 text-xs text-gray-500">{method.description}</div>}
                    </div>
                    <div className="shrink-0 font-semibold text-gray-900">{wrapCurrency(method?.amount)}</div>
                  </OptionTile>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={ROW}>
          <div className={LABEL}>{("Delivery Charge")}</div>
          <div>
            <input type="text" className={`${INPUT} w-full`} value={orderData?.shipping_amount ?? ''} onChange={ev => {
              setorderData({ ...orderData, shipping_amount: ev.target.value })
            }} />
          </div>
        </div>
      </WidgetWrapper>


      {/* ---------- address ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Address">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

          <div>
            <div className="mb-3 text-base font-semibold text-gray-900">Billing Address</div>
            <div className="flex flex-col gap-3">
              {[
                ["billing_name", "Billing Name"],
                ["billing_email", "Billing Email"],
                ["billing_phone", "Billing Phone"],
              ].map(([key, label]) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <div className={LABEL}>{label}</div>
                  <input type="text" className={`${INPUT} !w-full ${blur}`} value={orderData?.[key] ?? ''} onChange={ev => {
                    setorderData({ ...orderData, [key]: ev.target.value })
                  }} />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <div className={LABEL}>{("Country")}</div>
                <DropDown allowReset={false} multiple={false} labelClass={DROPDOWN_LABEL} value={billingCountry} options={COUNTRY_OPTIONS} label={countryLabel(billingCountry)} onOptionsChoose={(args) => {
                  /* A city belongs to its country, so a new country clears it. */
                  setorderData({ ...orderData, billing_country: args?.value, billing_city: args?.value == billingCountry ? orderData?.billing_city : "" })
                }} />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className={LABEL}>{("City")}</div>
                {Object.keys(statesList).length > 0 ? (
                  <DropDown allowReset={false} multiple={false} labelClass={DROPDOWN_LABEL} value={billingCity} options={statesList} label={cityLabel(billingCity)} onOptionsChoose={(args) => {
                    setorderData({ ...orderData, billing_city: args?.value })
                  }} />
                ) : (
                  <input type="text" className={`${INPUT} !w-full`} value={billingCity} onChange={ev => {
                    setorderData({ ...orderData, billing_city: ev.target.value })
                  }} />
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <div className={LABEL}>{("Billing Address")}</div>
                <textarea className={`${INPUT} !w-full ${blur}`} value={orderData?.billing_address ?? ''} onChange={ev => {
                  setorderData({ ...orderData, billing_address: ev.target.value })
                }} />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 text-base font-semibold text-gray-900">Shipping Address</div>
            <div className="flex flex-col gap-3">
              {[
                ["shipping_name", "Shipping Name"],
                ["shipping_phone", "Shipping Phone"],
              ].map(([key, label]) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <div className={LABEL}>{label}</div>
                  <input type="text" className={`${INPUT} !w-full`} value={orderData?.[key] ?? ''} onChange={ev => {
                    setorderData({ ...orderData, [key]: ev.target.value })
                  }} />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <div className={LABEL}>{("Shipping Address")}</div>
                <textarea className={`${INPUT} !w-full`} value={orderData?.shipping_address ?? ''} onChange={ev => {
                  setorderData({ ...orderData, shipping_address: ev.target.value })
                }} />
              </div>
            </div>
          </div>

        </div>
      </WidgetWrapper>


      {/* ---------- details ---------- */}
      <WidgetWrapper className={CARD_CLASSES} title="Order Details">
        <div className={ROW}>
          <div className={LABEL}>{("Transaction ID")}</div>
          <div>
            <input type="text" className={`${INPUT} w-full`} value={orderData?.transaction_id ?? ''} onChange={ev => {
              setorderData({ ...orderData, transaction_id: ev.target.value })
            }} />
          </div>
        </div>
        <div className={ROW}>
          <div className={LABEL}>{("Created Date")}</div>
          <DatePicker
            className={`${INPUT} w-full`}
            placeholderText="Now"
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
            selected={orderData?.created_at ? new Date(orderData.created_at.replace(" ", "T")) : null}
            onChange={(date) => {
              if (!date) return;
              setorderData({ ...orderData, created_at: format(date, "yyyy-MM-dd HH:mm:ss") });
            }}
          />
        </div>
      </WidgetWrapper>

    </div>
  );
};

export default OrderCreate;
