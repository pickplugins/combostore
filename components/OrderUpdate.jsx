"use client";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconSquare, IconMapPin, IconTrash, IconBasketPlus, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconHighlight, IconPhoneCall, IconFilter2Check, IconFilter2Edit, IconCopy, IconMailForward, IconUser, IconArrowNarrowLeftDashed, IconMail, IconPhone, IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconBrandWhatsapp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { APIProvider, Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from '../components/LocationPicker';
import GoogleMapDirections from '../components/GoogleMapDirections';
import PopoverButton from '../components/PopoverButton';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import DropDown from '../components/DropDown';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Card shell for the WidgetWrapper sections, matching the settings and
   editor screens. `form-card` also opts the fields inside into the shared
   input styling in globals.css. */
const CARD_CLASSES =
  "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";





const OrderUpdate = (props) => {
  const { formatDate, wrapCurrency } = useUtilsStore()


  const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, orderStatusArgs, paymentStatusArgs, privacyMode } = useCounterStore()

  var orderId = props?.order_id
  var [loading, setloading] = useState(false);

  var [orderData, setorderData] = useState(props?.orderData);
  var [customerData, setcustomerData] = useState(null);
  var [lineItems, setlineItems] = useState(null);
  var [coupons, setCoupons] = useState({ applied: false, couponCode: "", discountAmount: 0, loading: false });
  var [shipping, setShipping] = useState(0);
  var [profits, setprofits] = useState({ grossProfit: 0, netProfit: 0, productCost: 0 });




  useEffect(() => {
    get_order();
  }, [orderId]);





  useEffect(() => {

    calculateOrder();


  }, [lineItems, orderData?.shipping_amount, orderData?.advance_payment]);






  useEffect(() => {



    setorderData({
      ...orderData,
      discount_amount: coupons?.discountAmount,
      coupons: coupons
    })
    calculateOrder();



  }, [coupons?.discountAmount, coupons?.applied]);




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
    var itemDiscount = 0;
    var productCost = 0;
    var tradePrice = 0;
    var grossProfit = 0;
    var netProfit = 0;

    lineItems?.map(item => {

      var quantity = parseInt(item.quantity)
      var price = parseFloat(item.price)
      var itemTotal = parseFloat(item.total)
      var discountType = item.discount_type
      var discountAmount = parseFloat(item.discount_amount)
      var tax = parseFloat(item.tax)
      var trade_price = item.trade_price ? parseFloat(item.trade_price) : parseFloat(item.price);

      console.log(trade_price);


      // subtotal += item.subtotal ? parseFloat(item.subtotal) : (price * quantity);


      if (discountType == 'percent') {
        var itemDiscountPercent = (((price * quantity) * discountAmount) / 100);
        itemDiscount += itemDiscountPercent

        subtotal += (price * quantity) - itemDiscountPercent
      }
      else if (discountType == 'fixed') {
        subtotal += (price * quantity) - discountAmount
        itemDiscount += discountAmount
      }
      else {
        subtotal += price * quantity
      }



      totalQuantity += quantity;
      tradePrice += (trade_price * quantity);
    })


    console.log(tradePrice);


    grossProfit = (subtotal - tradePrice);


    if (coupons?.discountAmount > 0) {
      netProfit = grossProfit - coupons?.discountAmount
    } else {
      netProfit = grossProfit
    }


    setprofits({ ...profits, productCost: tradePrice, grossProfit: grossProfit, netProfit: netProfit })


    setorderData((prevOrderData) => {
      var totalPay = parseFloat(subtotal) + parseFloat(prevOrderData?.shipping_amount || 0);


      if (coupons?.discountAmount > 0) {
        totalPay = totalPay - parseFloat(coupons?.discountAmount)
      }

      if (prevOrderData?.advance_payment) {
        totalPay = totalPay - parseFloat(prevOrderData?.advance_payment)
      }



      return { ...prevOrderData, trade_price: tradePrice, total_amount: totalPay, subtotal_amount: subtotal, gross_profit: grossProfit, net_profit: netProfit }
    })

  }





  function get_order() {


    // if (!token) {
    //   throw new Error("No token found");
    // }

    setloading(true);

    var postData = {
      id: orderId,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_order",
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

            console.log(res);


            // setorderData()

            // var errors = res?.errors;
            // var success = res?.success;
            var order = res?.order;
            var line_items = res?.line_items;
            var couponsX = res?.coupons;


            var assign_to = order?.assign_to ? JSON.parse(order.assign_to) : [];

            order = { ...order, assign_to: assign_to };

            setloading(false);
            setorderData(order)
            setlineItems(line_items)
            setCoupons(couponsX)



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
  async function get_customer() {


    // if (!token) {
    //   throw new Error("No token found");
    // }

    setloading(true);

    var postData = {
      id: orderData?.userid,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_customer",
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



            // setorderData()

            // var errors = res?.errors;
            // var success = res?.success;
            var user = res?.user;


            setloading(false);
            setcustomerData(user)



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

  function update_order() {

    setloading(true)

    console.log(lineItems);



    var postData = JSON.stringify({ ...orderData, lineItems: lineItems });

    fetch(serverUrl + "wp-json/combo-store/v2/update_order", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {


        if (!response.ok) {
          addNotification({ type: 'error', title: 'Order update failed', content: message })
          setloading(false)

          throw new Error('Token validation failed');
        }


        if (response.ok && response.status < 400) {
          response.json().then((res) => {




            var status = res?.status;
            var message = res?.message;

            if (status == 'success') {
              addNotification({ type: 'success', title: 'Order update', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Order update failed', content: message })
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
  function update_order_items() {

    setloading(true)



    var postData = JSON.stringify({ order_id: orderData?.id, cartItems: lineItems });

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




  function onPickCustomer(args) {

    console.log(args);
    setcustomerData(args)


    setorderData({
      ...orderData,
      userid: args?.id,
      billing_address: args?.billing_address,
      billing_name: args?.name,
      billing_phone: args?.phone,
      billing_email: args?.email,
      billing_city: args?.billing_city,
      billing_country: args?.billing_country,

    })


    get_customer_data(args?.id).then((user) => {

      console.log(user);


    });
  }

  function onPickStoreManager(args) {

    get_customer_data(args?.id).then((user) => {

      var assign_to = orderData?.assign_to ? orderData?.assign_to : [];

      assign_to.push({ id: user?.id, name: user?.name })



      setorderData({
        ...orderData,
        assign_to: assign_to,


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

        return res?.customer; // <-- THIS is now returned to the caller
      })
      .catch((error) => {
        setloading(false);
        return null; // or throw error
      });
  }


  function onAddProducts(item) {

    var lineItemsX = [...lineItems]

    if (item?.attributes) {
      lineItemsX.push({


        "order_id": orderData?.id,
        "product_id": item?.product_id,
        "variation_id": item?.id,
        "attributes": item?.attributes,
        "product_name": item?.product_title + ' - ' + item?.title,
        "sku": item?.sku,
        "quantity": 1,
        "price": item?.sale_price ? item?.sale_price : item?.regular_price,
        "trade_price": item?.trade_price ? item?.trade_price : item?.price,
        "subtotal": item?.price,
        "tax": 0,
        "total": item?.price,
        "thumbnail": item?.thumbnail?.src,
        "meta": null,
      })

    } else {
      lineItemsX.push({


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

    }






    //var upsells = currentObject?.upsells ? currentObject.upsells : {};


    setlineItems(lineItemsX)


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


  const requiredRoles = ["administrator", "rider", ""];
  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));





  return (
    <div className="flex flex-col gap-4">



      {/* The status pickers and Update used to scroll away at the top of a very
          long form, so the bar now sticks under the tab rail. */}
      <div className="sticky top-[86px] z-20 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">

        <div className="flex gap-3 flex-wrap">
          <DropDown allowReset={true} multiple={false} value={orderData?.status} options={orderStatusArgs} label={`Order Status`} onOptionsChoose={(args) => {


            setorderData({ ...orderData, status: args?.value })
          }} />




          <DropDown allowReset={true} multiple={false} value={orderData?.payment_method ?? 'cod'} options={paymentGateways} label={`Payment Method`} onOptionsChoose={(args) => {



            setorderData({ ...orderData, payment_method: args?.value })
          }} />
          <DropDown allowReset={true} multiple={false} value={orderData?.payment_status} options={paymentStatusArgs} label={`Payment Status`} onOptionsChoose={(args) => {
            setorderData({ ...orderData, payment_status: args?.value })
          }} />




        </div>

        <div className='flex gap-2 items-center'>
          {loading && (

            <Spinner />

          )}


          <div className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer"

            onClick={ev => {
              update_order()
            }}
          >Update</div>









        </div>






      </div>


      {orderData?.status == 'scheduled' && (

        <>
          <div className=" ">
            <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Publish Date")}</div>
            <DatePicker
              className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full"
              showTimeSelect
              dateFormat="yyyy-MM-dd HH:mm:ss"
              selected={orderData?.scheduled_at}
              onChange={(date) => {
                if (!date) return;

                const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");
                setorderData({
                  ...orderData,
                  scheduled_at: formattedDate
                });
              }}
            />
          </div>

        </>

      )}

      {/* {JSON.stringify(lineItems)} */}


      <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Order Items">


        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div><ProductsPicker placeholder="Search product..." onPick={onAddProducts} /></div>

          <div className="flex gap-2 items-center flex-wrap">
            <div className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer"
              onClick={ev => {
                var lineItemsX = [...lineItems]
                lineItemsX.push({ "order_id": orderData?.id, "product_id": '', "product_name": "Custom Product Title", "sku": "", "quantity": 1, "price": 0, trade_price: 0, "subtotal": 0, "tax": 0, "total": 0, "meta": null, })
                setlineItems(lineItemsX)
              }}
            >

              <IconBasketPlus size={16} />

              Add Custom Product
            </div>



          </div>

        </div>

        {/* {JSON.stringify(lineItems)} */}



        <div className="flex flex-col gap-2">
          {lineItems?.map((item, index) => {

            var discountAmount = item.discount_amount ? parseFloat(item.discount_amount) : 0;
            var discountType = item.discount_type ? item.discount_type : '';

            var quantity = item.quantity ? parseInt(item.quantity) : 0;
            var price = item?.price ? parseFloat(item.price) : 0;
            var total = item.total ? parseFloat(item.total) : 0;
            var tax = item.tax ? parseFloat(item.tax) : 0;
            var trade_price = item.trade_price ? parseFloat(item.trade_price) : parseFloat(item.price);
            var gross_profit = ((price * quantity) - (trade_price * quantity));

            var lineItemsX = [...lineItems]

            lineItemsX[index]['gross_profit'] = gross_profit;



            return (
              <div key={index} className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-colors hover:border-gray-300 xl:flex-row xl:flex-wrap xl:items-center xl:justify-between">

                <div className="flex gap-2 flex-1 items-center flex-wrap">


                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <div className="flex shrink-0 flex-col items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 p-1 text-sm font-semibold tabular-nums text-gray-900">



                      <span onClick={(ev) => {



                        var lineItemsX = [...lineItems]
                        quantity = parseInt(quantity) + 1;


                        if (discountType == 'percent') {
                          total = (price * quantity) - (((price * quantity) * discountAmount) / 100)
                          var itemDiscountPercent = (((price * quantity) * discountAmount) / 100);


                          lineItemsX[index]['net_profit'] = gross_profit - itemDiscountPercent;
                        }
                        else if (discountType == 'fixed') {
                          total = (price * quantity) - discountAmount
                          lineItemsX[index]['net_profit'] = gross_profit - discountAmount;
                        }
                        else {
                          total = price * quantity
                          lineItemsX[index]['net_profit'] = 0;

                        }

                        lineItemsX[index]['subtotal'] = price * quantity;
                        lineItemsX[index]['total'] = total + tax;
                        lineItemsX[index]['quantity'] = quantity;


                        setlineItems(lineItemsX)










                      }} className="inline-flex h-6 w-6 items-center justify-center rounded text-gray-400 transition-colors hover:bg-white hover:text-[#634FE5] cursor-pointer [&>svg]:size-4">
                        <IconSquareRoundedPlusFilled />
                      </span>

                      <span>{quantity}</span>
                      <span onClick={() => {


                        var lineItemsX = [...lineItems]
                        quantity = quantity == 1 ? 1 : parseInt(quantity) - 1;

                        if (discountType == 'percent') {
                          total = (price * quantity) - (((price * quantity) * discountAmount) / 100)
                          var itemDiscountPercent = (((price * quantity) * discountAmount) / 100);


                          lineItemsX[index]['net_profit'] = gross_profit - itemDiscountPercent;
                        }
                        else if (discountType == 'fixed') {
                          total = (price * quantity) - discountAmount
                          lineItemsX[index]['net_profit'] = gross_profit - discountAmount;
                        }
                        else {
                          total = price * quantity
                        }

                        lineItemsX[index]['subtotal'] = price * quantity;
                        lineItemsX[index]['total'] = total + tax;
                        lineItemsX[index]['quantity'] = quantity;


                        setlineItems(lineItemsX)










                      }} className="inline-flex h-6 w-6 items-center justify-center rounded text-gray-400 transition-colors hover:bg-white hover:text-[#634FE5] cursor-pointer [&>svg]:size-4">
                        <IconSquareRoundedMinusFilled />
                      </span>
                    </div>
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                      {item.thumbnail && (
                        <Image unoptimized className="object-cover h-full w-full " src={item.thumbnail} width={200} height={200} alt={item?.product_name} />
                      )}
                      {!item.thumbnail && (
                        <Image unoptimized className="object-cover h-full w-full " src={`/thumb.png`} width={200} height={200} alt={item?.product_name} />
                      )}
                      {/* <Image className="w-full" src={item.thumbnail} alt="" /> */}

                    </div>

                    <div className="flex flex-col gap-1.5">


                      <div className=" flex gap-2 items-center flex-wrap" >

                        <div className="text-sm" dangerouslySetInnerHTML={{ __html: item.product_name }}></div>
                        <PopoverButton buttonLabel={(" ")} buttonClass="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer" buttonIcon={<IconHighlight size={16} />} title={"Edit Order Item"} position={"topRight"}>

                          <div className="w-[min(500px,calc(100vw-2rem))] p-4">

                            <div className="flex flex-col gap-4">

                              <input className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full" type="text" step="0.01" value={item.product_name} onChange={ev => {

                                var lineItemsX = [...lineItems]
                                lineItemsX[index].product_name = (ev.target.value);
                                setlineItems(lineItemsX)
                              }} />






                              <div className="flex gap-3  flex-wrap">

                                <div className="flex gap-2 items-center ">
                                  <div>Price: </div>
                                  <div><input className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-20 !px-2 !py-1 text-right tabular-nums" type="number" step="0.01" value={item.price} onChange={ev => {

                                    var lineItemsX = [...lineItems]
                                    var price = parseFloat(ev.target.value);


                                    if (discountType == 'percent') {
                                      total = (price * quantity) - (((price * quantity) * discountAmount) / 100)
                                      var itemDiscountPercent = (((price * quantity) * discountAmount) / 100);


                                      lineItemsX[index]['net_profit'] = gross_profit - itemDiscountPercent;

                                    }
                                    else if (discountType == 'fixed') {
                                      total = (price * quantity) - discountAmount
                                      lineItemsX[index]['net_profit'] = gross_profit - discountAmount;

                                    }
                                    else {
                                      total = price * quantity

                                    }

                                    lineItemsX[index]['subtotal'] = price * quantity;
                                    lineItemsX[index]['total'] = total + tax;
                                    lineItemsX[index]['price'] = price;


                                    setlineItems(lineItemsX)





                                  }} /></div>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <div>Trade Price: </div>
                                  <div><input className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-20 !px-2 !py-1 text-right tabular-nums" type="number" step="0.01" value={item.trade_price} onChange={ev => {

                                    var lineItemsX = [...lineItems]

                                    var value = parseFloat(ev.target.value);

                                    lineItemsX[index]['trade_price'] = value;


                                    setlineItems(lineItemsX)

                                  }} /></div>
                                </div>




                                <div className="flex gap-2 items-center">
                                  <div>Quantity: </div>
                                  <div><input className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-20 !px-2 !py-1 text-right tabular-nums" type="number" step="1" value={item.quantity} onChange={ev => {

                                    var lineItemsX = [...lineItems]
                                    var quantity = parseFloat(ev.target.value);

                                    if (discountType == 'percent') {
                                      total = (price * quantity) - (((price * quantity) * discountAmount) / 100)
                                      var itemDiscountPercent = (((price * quantity) * discountAmount) / 100);


                                      lineItemsX[index]['net_profit'] = gross_profit - itemDiscountPercent;
                                    }
                                    else if (discountType == 'fixed') {
                                      total = (price * quantity) - discountAmount
                                      lineItemsX[index]['net_profit'] = gross_profit - discountAmount;
                                    }
                                    else {
                                      total = price * quantity
                                    }

                                    lineItemsX[index]['subtotal'] = price * quantity;
                                    lineItemsX[index]['total'] = total + tax;
                                    lineItemsX[index]['quantity'] = quantity;


                                    setlineItems(lineItemsX)




                                  }} /></div>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center">

                                <div className="flex gap-2 items-center">
                                  <div><select className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-24 !px-2 !py-1" type="number" step="0.01" value={item.discount_type} onChange={ev => {

                                    var lineItemsX = [...lineItems]
                                    var discountType = (ev.target.value);

                                    if (discountType == 'percent') {
                                      total = (price * quantity) - (((price * quantity) * discountAmount) / 100)
                                      var itemDiscountPercent = (((price * quantity) * discountAmount) / 100);


                                      lineItemsX[index]['net_profit'] = gross_profit - itemDiscountPercent;
                                    }
                                    else if (discountType == 'fixed') {
                                      total = (price * quantity) - discountAmount
                                      lineItemsX[index]['net_profit'] = gross_profit - discountAmount;
                                    }
                                    else {
                                      total = price * quantity
                                    }

                                    lineItemsX[index]['subtotal'] = price * quantity;
                                    lineItemsX[index]['total'] = total + tax;
                                    lineItemsX[index]['discount_type'] = discountType;
                                    lineItemsX[index]['discount_amount'] = !discountType ? 0 : discountAmount;;


                                    setlineItems(lineItemsX)



                                  }} >

                                    <option value="">Discount Type</option>
                                    <option value="percent">Percent</option>
                                    <option value="fixed">Fixed</option>
                                  </select>

                                  </div>
                                </div>

                                <div className="flex gap-2 items-center">
                                  <div>Discount amount: </div>
                                  <div><input className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-20 !px-2 !py-1 text-right tabular-nums" type="number" step="1" value={item.discount_amount} onChange={ev => {



                                    var lineItemsX = [...lineItems]
                                    var discountAmount = parseFloat(ev.target.value);

                                    if (discountType == 'percent') {
                                      total = (price * quantity) - (((price * quantity) * discountAmount) / 100)
                                      var itemDiscountPercent = (((price * quantity) * discountAmount) / 100);



                                      lineItemsX[index]['net_profit'] = gross_profit - itemDiscountPercent;
                                    }
                                    else if (discountType == 'fixed') {
                                      total = (price * quantity) - discountAmount
                                      lineItemsX[index]['net_profit'] = gross_profit - discountAmount;
                                    }
                                    else {
                                      total = price * quantity
                                    }


                                    lineItemsX[index]['subtotal'] = price * quantity;
                                    lineItemsX[index]['total'] = total + tax;
                                    lineItemsX[index]['discount_amount'] = discountAmount;


                                    setlineItems(lineItemsX)






                                  }} /></div>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <div>Tax: </div>
                                  <div><input className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-20 !px-2 !py-1 text-right tabular-nums" type="number" step="1" value={item.tax} onChange={ev => {



                                    var lineItemsX = [...lineItems]
                                    var tax = parseFloat(ev.target.value);
                                    lineItemsX[index]['gross_profit'] = gross_profit;

                                    if (discountType == 'percent') {
                                      total = (price * quantity) - ((price * discountAmount) / 100)
                                      var itemDiscountPercent = (((price * quantity) * discountAmount) / 100);


                                      lineItemsX[index]['net_profit'] = gross_profit - itemDiscountPercent;
                                    }
                                    else if (discountType == 'fixed') {
                                      total = (price * quantity) - discountAmount

                                      lineItemsX[index]['net_profit'] = gross_profit - discountAmount;
                                    }
                                    else {
                                      total = price * quantity


                                    }


                                    lineItemsX[index]['subtotal'] = price * quantity;
                                    lineItemsX[index]['total'] = total + tax;
                                    lineItemsX[index]['tax'] = tax;


                                    setlineItems(lineItemsX)





                                  }} /></div>
                                </div>




                              </div>

                            </div>


                          </div>


                        </PopoverButton>
                        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer"
                          onClick={ev => {
                            var lineItemsX = [...lineItems]
                            lineItemsX.splice(index, 1)
                            setlineItems(lineItemsX)
                            addNotification({ type: 'success', title: 'Item removed', content: `${item.product_name} removed from line items.` })

                          }}
                        ><IconTrash width={16} /> </div>
                      </div>





                      <div className="flex  gap-3 items-center flex-wrap">



                        <div className="flex gap-3 items-center flex-wrap">





                          <div className="flex gap-3  flex-wrap">
                            <div className="text-xs">Price: {wrapCurrency(price)}</div>

                            <div className="text-xs">Trade Price: {wrapCurrency(trade_price)}</div>
                            {item.tax > 0 && (
                              <div className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">Tax: {item?.tax}</div>
                            )}


                            {trade_price > 0 && (
                              <div className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">Gross Profit: {wrapCurrency((price * quantity) - (trade_price * quantity))}</div>
                            )}
                            {item?.net_profit > 0 && (
                              <div className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">Net Profit: {wrapCurrency(item?.net_profit)}</div>
                            )}


                          </div>

                          {item?.sale_price && (
                            <>
                              <div> - </div>
                              <div className="text-xs text-gray-400 line-through">{wrapCurrency(item.regular_price)}</div>
                            </>
                          )}
                        </div>







                      </div>


                      {item?.discount_amount > 0 && (

                        <div className="inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-700 ring-1 ring-inset ring-rose-200">Discount:
                          {discountType == 'percent' ? ` ${item.discount_amount}%` : ` ${wrapCurrency(item.discount_amount)}`}

                        </div>

                      )}



                      {item?.attributes && (
                        <div className="flex gap-4 flex-wrap">
                          {Object.entries(item?.attributes).map((args) => {

                            var attrId = args[0];
                            var attr = args[1];


                            return (
                              <div className="flex gap-2">

                                <div className="font-semibold capitalize ">{attrId}:</div>
                                <div>{attr.name}</div>




                              </div>
                            )


                          })}

                        </div>
                      )}




                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1 text-sm tabular-nums text-gray-500 md:justify-end">
                  {wrapCurrency(item.price)} X {item.quantity} = {wrapCurrency(item.total)}




                </div>





              </div>
            )

          })}
        </div>

        <div className="flex items-center justify-between gap-3 border-b border-gray-100 py-2.5 text-sm text-gray-600">
          <div className=" ">Sub Total</div>
          <div className="font-medium tabular-nums text-gray-900">{wrapCurrency(orderData?.subtotal_amount)}</div>
        </div>

        {orderData?.shipping_amount > 0 && (
          <div className="flex items-center justify-between gap-3 border-b border-gray-100 py-2.5 text-sm text-gray-600">
            <div className=" ">Delivery Charge</div>
            <div className="font-medium tabular-nums text-gray-900">+{wrapCurrency(orderData?.shipping_amount)}</div>
          </div>
        )}
        {orderData?.advance_payment > 0 && (
          <div className="flex items-center justify-between gap-3 border-b border-gray-100 py-2.5 text-sm text-gray-600">
            <div className=" ">Advance Payment</div>
            <div className="font-medium tabular-nums text-rose-600">-{wrapCurrency(orderData?.advance_payment)}</div>
          </div>
        )}





        {orderData?.discount_amount > 0 && (
          <div className="flex items-center justify-between gap-3 border-b border-gray-100 py-2.5 text-sm text-gray-600">
            <div className=" ">Discount</div>
            <div className="  flex gap-2 items-center"> <div className="font-medium tabular-nums text-rose-600">-{wrapCurrency(orderData?.discount_amount)}</div></div>
          </div>
        )}









        <div className="mt-2 flex items-center justify-between gap-3 rounded-lg bg-gray-50 px-4 py-3">
          <div className="text-sm font-semibold text-gray-900">Total Amount to Pay</div>
          <div className="text-lg font-bold tabular-nums text-emerald-600">{wrapCurrency(orderData?.total_amount)}</div>
        </div>




      </WidgetWrapper>





      <WidgetWrapper className={CARD_CLASSES} title="Profits">

        <div className="">


          <div className="">



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
                <div className="mt-1 text-xl font-semibold tabular-nums text-gray-900"  >{wrapCurrency(profits.netProfit)}</div>

              </div>





            </div>

          </div>

        </div>
      </WidgetWrapper>

      <WidgetWrapper className={CARD_CLASSES} title="Customer">

        <div className="flex flex-col gap-4">

          <div className="flex justify-between items-center">
            <UsersPicker placeholder={"Search Customer"} displayAddress={true} role={`customer`} onPick={onPickCustomer} />
          </div>


          {!customerData?.id && (
            <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700"><IconExclamationCircle size={16} /> No Customer assigned</div>
          )}
          {customerData?.id && (
            <div className="grid grid-cols-1 gap-4">

              <div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                    <img className="h-full w-full object-cover" src={customerData?.avatar} alt="" width={50} height={50} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold text-gray-900 ${privacyMode ? "blur-[3px]" : ""}`}>{customerData?.name}</div>
                    <div className="text-xs text-gray-500">ID: {customerData?.id}</div>
                  </div>

                </div>

              </div>
              <div className="flex flex-col items-start gap-2.5">

                {customerData?.email && (
                  <div className="flex items-center gap-2 flex-wrap"><IconMail className="text-gray-400" size={16} />
                    <div className={`text-sm text-gray-700 ${privacyMode ? "blur-[3px]" : ""}`}>{customerData?.email}</div>
                    <div className="flex gap-2">
                      <a href={`mailto:${customerData?.email}`} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"><IconMailForward size={16} /> Send Mail</a>
                      <div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer" onClick={() => {
                        navigator.clipboard.writeText(customerData?.email)
                        addNotification({ type: 'success', title: 'Email Copied', content: "Email Copied" })
                      }}>
                        <IconCopy size={16} /> Copy
                      </div>
                    </div>

                  </div>
                )}

                {customerData?.phone && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex gap-3 items-center flex-wrap">
                      <div className="flex items-center gap-2"><IconPhone className="text-gray-400" size={16} /></div>
                      <div className={`text-sm text-gray-700 ${privacyMode ? "blur-[3px]" : ""}`}>{customerData?.phone}</div>
                      <a href={`tel:${customerData?.phone}`} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"><IconPhoneCall size={16} /> Call</a>
                      <a href={`https://wa.me/${customerData?.phone}`} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"><IconBrandWhatsapp size={16} /> WhatsApp</a>
                      <div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer" onClick={() => {
                        navigator.clipboard.writeText(customerData?.phone)
                        addNotification({ type: 'success', title: 'Phone Copied', content: "Phone Copied" })
                      }}>
                        <IconCopy size={16} /> Copy
                      </div>
                    </div>
                  </div>
                )}
                {customerData?.billing_address && (
                  <div className="flex gap-2 flex-wrap text-sm ">
                    <div className={`flex items-center gap-2 ${privacyMode ? 'blur-[3px]' : ''}`}><IconMapPin className="text-gray-400" size={16} /> {customerData?.billing_address}</div>
                    <div className={`flex items-center gap-2 ${privacyMode ? 'blur-[3px]' : ''}`}> {customerData?.billing_city}</div>
                    <div className={`flex items-center gap-2 ${privacyMode ? 'blur-[3px]' : ''}`}> {customerData?.billing_country}</div>
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer" onClick={() => {
                      navigator.clipboard.writeText(customerData?.billing_address + " " + + " " + customerData?.billing_city + " " + customerData?.billing_country)
                      addNotification({ type: 'success', title: 'Address Copied', content: "Address Copied" })
                    }}>
                      <IconCopy size={16} /> Copy
                    </div>
                  </div>
                )}



              </div>



            </div>
          )}

        </div>


      </WidgetWrapper>
      <WidgetWrapper className={CARD_CLASSES} title="Order Manager">

        <div className="flex flex-col gap-4">

          <div className="flex justify-between items-center">
            <UsersPicker placeholder={"Search Manager"} role={`store_manager`} onPick={onPickStoreManager} />
          </div>


          {orderData?.assign_to?.length == 0 && (
            <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700"><IconExclamationCircle size={16} /> No Manager assigned</div>
          )}

          {orderData?.assign_to?.length > 0 && (

            <>
              {orderData?.assign_to?.map((manager) => (
                <div key={manager.id} className="flex items-center gap-2">
                  <IconUser className="text-gray-400" size={16} />
                  <div>{manager.name}</div>
                  <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer" onClick={() => {

                    var assignToX = [...orderData.assign_to]
                    var index = assignToX.findIndex(m => m.id == manager.id);
                    assignToX.splice(index, 1);
                    setorderData({ ...orderData, assign_to: assignToX });
                  }}>
                    <IconTrash size={18} />
                  </div>

                </div>
              ))}
            </>
          )}


        </div>


      </WidgetWrapper>





      <WidgetWrapper className={CARD_CLASSES} title="Advanced Payment">

        <div className="">

          <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
            <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Advanced Payment")}</div>


            <div className="">
              <input type="text" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full" value={orderData?.advance_payment} onChange={ev => {
                var value = ev.target.value;
                setorderData({ ...orderData, advance_payment: value })

              }} />

            </div>

          </div>
          <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
            <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Advanced Payment Note")}</div>


            <div className="">
              <textarea type="text" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full" value={orderData?.advance_payment_note} onChange={ev => {
                var value = ev.target.value;
                setorderData({ ...orderData, advance_payment_note: value })

              }} />

            </div>

          </div>









        </div>
      </WidgetWrapper>
      {/* {JSON.stringify(orderData)} */}

      <WidgetWrapper className={CARD_CLASSES} title="Coupon & Discount">

        <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
          <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Discount Amount")}</div>
          <div className="">
            <input type="text" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full" value={orderData?.discount_amount} onChange={ev => {
              var value = ev.target.value;
              //setorderData({ ...orderData, discount_amount: value })
              var couponsX = { ...coupons }

              couponsX.discountAmount = value;

              setCoupons(couponsX)

            }} />
          </div>
        </div>


        <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
          <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Coupon Code")}</div>
          <div className="">

            {!coupons?.applied && (

              <div className="flex flex-wrap items-center gap-2">
                <div>
                  <input type="text" name="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-32 uppercase tracking-wide" value={coupons?.couponCode} onChange={ev => {

                    var value = ev.target.value;
                    var couponsX = { ...coupons }
                    couponsX.couponCode = value;

                    setCoupons(couponsX)
                  }} />
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer" onClick={ev => {

                  var couponsX = { ...coupons }



                  if (couponsX.couponCode?.length == 0) {
                    addNotification({ type: 'error', title: 'Coupon is empty', content: "Please write coupon code." });

                    return;
                  }





                  setCoupons({ ...coupons, loading: true, couponCode: couponsX.couponCode })

                  var postData = {
                    couponCode: couponsX.couponCode,
                  };
                  postData = JSON.stringify(postData);

                  fetch(serverUrl + "wp-json/combo-store/v2/get_coupon_details", {
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




                          var errors = res.errors;


                          if (errors) {
                            var message = res.message;

                            addNotification({ type: 'error', title: 'Coupon is not valid', content: message });

                            setCoupons({
                              ...coupons,
                              loading: false,
                              couponCode: ""
                            })
                            return;
                          }

                          var couponRes = res.coupon;

                          var amount = couponRes.amount;
                          var discountType = couponRes.couponType;

                          var discountAmount = calculateCoupon(amount, discountType);


                          // Create a NEW object to ensure React detects the change
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
                      }
                    })
                    .catch((_error) => {
                      //this.saveAsStatus = 'error';
                      // handle the error
                    });









                }}>Apply Coupon</div>

                {coupons?.loading && (

                  <Spinner />

                )}


              </div>
            )}
            {coupons?.applied && (

              <div className="flex flex-wrap items-center justify-between gap-3 py-2">
                <div className="flex  gap-1">
                  <div className="flex gap-2 items-center">

                    <div className="flex gap-1 ">


                      {coupons?.couponType == 'fixed' && (
                        <>{wrapCurrency(coupons?.amount)} discount applied.</>
                      )}
                      {coupons?.couponType == 'percent' && (
                        <>{coupons?.amount}% discount applied.</>
                      )}


                    </div>


                    <div className="inline-flex items-center rounded-lg border border-dashed border-emerald-400 bg-emerald-50 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-700">{coupons?.couponCode}</div>
                    <div className="inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 cursor-pointer" onClick={ev => {

                      var couponsX = { ...coupons }

                      setCoupons({
                        ...couponsX,
                        applied: false,
                        discountAmount: 0,
                        couponCode: ""
                      })


                    }}>Remove</div>
                  </div>



                </div>
              </div>

            )}


          </div>
        </div>










      </WidgetWrapper>

      <WidgetWrapper className={CARD_CLASSES} title="Shipping & Delivery">

        <div className="">



          <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
            <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{('Shipping Method')}</div>


            <select name="shipping_method" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full" value={orderData?.shipping_method} id="" onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, shipping_method: value })
            }}>

              <option value="">Choose</option>
              <option value="comboStore">ComboStore Courier</option>
              <option value="steadfast">Steadfast Courier</option>
              <option value="pathao">Pathao Courier</option>
              <option value="karatoa">Karatoa Courier</option>
              <option value="sundarban">Sundarban Courier</option>
            </select>




          </div>

          <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
            <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Delivery Charge")}</div>


            <div className="">
              <input type="text" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full" value={orderData?.shipping_amount} onChange={ev => {
                var value = ev.target.value;
                setorderData({ ...orderData, shipping_amount: value })

              }} />

            </div>

          </div>

        </div>
      </WidgetWrapper>







      <WidgetWrapper className={CARD_CLASSES} title="Address">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div>

            <div className='flex justify-between items-center'>
              <div className="mb-3 flex items-center gap-3">
                <div className="text-base font-semibold text-gray-900">Billing Address</div>
              </div>
            </div>






            <div className="flex flex-col gap-3">

              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Billing Name")}</div>
                <div className="">
                  <input type="text" className={`!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full ${privacyMode ? 'blur-[3px]' : ''}`} value={orderData?.billing_name} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_name: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Billing Email")}</div>
                <div className="">
                  <input type="text" className={`!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full ${privacyMode ? 'blur-[3px]' : ''}`} value={orderData?.billing_email} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_email: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Billing Phone")}</div>
                <div className="">
                  <input type="text" className={`!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full ${privacyMode ? 'blur-[3px]' : ''}`} value={orderData?.billing_phone} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_phone: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Country")}</div>
                <div className="">
                  <input type="text" className={`!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full ${privacyMode ? 'blur-[3px]' : ''}`} value={orderData?.billing_country} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_country: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("City")}</div>
                <div className="">
                  <input type="text" className={`!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full ${privacyMode ? 'blur-[3px]' : ''}`} value={orderData?.billing_city} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_city: value })
                  }} />
                </div>
              </div>



              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Billing Address")}</div>
                <div className="">
                  <textarea className={`!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full ${privacyMode ? 'blur-[3px]' : ''}`} value={orderData?.billing_address} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_address: value })
                  }} />
                </div>
              </div>


            </div>

          </div>
          <div>

            <div className='flex justify-between items-center'>
              <div className="mb-3 flex items-center gap-3">
                <div className="text-base font-semibold text-gray-900">Shipping Address</div>
              </div>




            </div>





            <div className="flex flex-col gap-3">


              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Shipping Name")}</div>
                <div className="">
                  <input type="text" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full" value={orderData?.shipping_name} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, shipping_name: value })
                  }} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Shipping Phone")}</div>
                <div className="">
                  <input type="text" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full" value={orderData?.shipping_phone} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, shipping_phone: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Shipping Address")}</div>
                <div className="">
                  <textarea name="" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm !w-full" value={orderData?.shipping_address} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, shipping_address: value })
                  }}></textarea>

                </div>
              </div>

            </div>


          </div>
        </div>
      </WidgetWrapper>




      <WidgetWrapper className={CARD_CLASSES} title="Order Details">



        <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
          <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Transaction ID")}</div>


          <div className="">
            <input type="text" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full" value={orderData?.transaction_id} onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, transaction_id: value })
            }} />

          </div>

        </div>

        <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
          <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Created Date")}</div>
          <DatePicker
            className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full"
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
            selected={orderData?.created_at}
            onChange={(date) => {
              if (!date) return;

              const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");


              setorderData({
                ...orderData,
                created_at: formattedDate
              });
            }}
          />
        </div>

        <div className="flex flex-col gap-1.5 border-b border-gray-100 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
          <div className="block py-1 text-sm font-medium text-gray-700 lg:w-56 lg:shrink-0">{("Completed Date")}</div>
          <DatePicker
            className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full"
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
            selected={orderData?.completed_at}
            onChange={(date) => {
              if (!date) return;

              const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");


              setorderData({
                ...orderData,
                completed_at: formattedDate
              });
            }}
          />
        </div>



      </WidgetWrapper>


















    </div>

  );
};

export default OrderUpdate;