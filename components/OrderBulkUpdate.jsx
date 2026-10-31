"use client";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconSquare, IconMapPin, IconTrash, IconFilter2Check, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconBasketPlus, IconPhoneCall, IconFilter2Edit, IconStar, IconCopy, IconMailForward, IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconMail, IconPhone, IconAddressBook, IconBrandWhatsapp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { APIProvider, Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import DropDown from '../components/DropDown';
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
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';

/* Toolbar buttons here were dark gray slabs that lightened on hover. */
const SECONDARY_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer";



const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;





const OrderBulkUpdate = (props) => {

  var onOrderBulkUpdated = props?.onOrderBulkUpdated
  const { formatDate, wrapCurrency } = useUtilsStore()


  const { token, paymentGateways, cartToggle, setcartToggle, notifications, addNotification, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, orderStatusArgs, paymentStatusArgs } = useCounterStore()

  var ids = props?.ids
  var [loading, setloading] = useState(false);

  var [orderData, setorderData] = useState({ ids: ids, cartItems: [], });
  var [customerData, setcustomerData] = useState(null);
  var [cartItems, setcartItems] = useState([]);
  var [coupons, setCoupons] = useState({ applied: false, couponCode: "", discountAmount: 0, loading: false });
  var [shipping, setShipping] = useState(0);
  var [editLineItems, seteditLineItems] = useState(false);






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

        if (response.ok && response.status < 400) {
          response.json().then((res) => {




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
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
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




  function onPickCustomer(args) {

    get_customer_data(args?.ID).then((user) => {
      setcustomerData(user)

      setorderData({
        ...orderData,
        userid: user?.id,
        billing_address: user?.billing_address1 + user?.billing_address2,
        billing_name: user?.city,
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
    <div className="flex flex-col gap-5 bg-gray-200">

      <div className='flex justify-between items-center'>




        <div className="flex gap-3">
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



        <div className='flex gap-2 items-center'>
          {loading && (

            <Spinner />

          )}


          <div className='p-2  rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white'

            onClick={ev => {
              bulk_update_orders()
            }}
          >Update</div>






        </div>
      </div>



      <WidgetWrapper collapsible={true} title="Order Items">


        <div className="flex gap-3 mb-4 px-3 items-center justify-between">
          <div><ProductsPicker placeholder="Search product..." onPick={onAddProducts} /></div>
          {/* <div className='p-2  rounded-sm cursor-pointer px-4 bg-gray-600 hover:bg-gray-400 text-white'
            onClick={ev => {
              update_order_items()
            }}
          >Update Order Items</div> */}

          <div className="flex gap-2 items-center">
            <div className={SECONDARY_BUTTON}
              onClick={ev => {
                var cartItemsX = [...cartItems]
                cartItemsX.push({ "order_id": orderData?.id, "product_id": '', "product_name": "Custom Product Title", "sku": "", "quantity": 1, "price": 0, trade_price: 0, "subtotal": 0, "tax": 0, "total": 0, "meta": null, })
                setcartItems(cartItemsX)
              }}
            >

              <IconBasketPlus />

              Add Custom Product
            </div>

            {cartItems?.length > 0 && (
              <div className={SECONDARY_BUTTON}
                onClick={ev => {
                  seteditLineItems(!editLineItems)
                }}
              >
                {editLineItems && (
                  <div className="flex gap-2 items-center"><IconFilter2Check /> Done</div>
                )}
                {!editLineItems && (
                  <div className="flex gap-2 items-center"><IconFilter2Edit /> Edit Order Items</div>
                )}
              </div>
            )}

          </div>





        </div>



        <div className="px-2">
          {cartItems?.map((item, index) => {

            return (
              <div key={index} className="flex gap-2 px-2 items-center justify-between py-3 border-b border-solid border-gray-400">
                <div className="flex gap-2 flex-1 items-center">

                  <div className="flex flex-col gap-1 items-center   rounded-sm border-gray-500  ">


                    <span onClick={() => {


                      var cartItemsX = [...cartItems]
                      cartItemsX[index].quantity = parseInt(item.quantity) + 1;
                      setcartItems(cartItemsX)


                    }} className="cursor-pointer hover:text-gray-600 bg-amazon-600 rounded-sm ">
                      <IconChevronUp />
                    </span>

                    <span>{item.quantity}</span>
                    <span onClick={() => {
                      var cartItemsX = [...cartItems]
                      cartItemsX[index].quantity = item.quantity == 1 ? 1 : parseInt(item.quantity) - 1;
                      setcartItems(cartItemsX)


                    }} className="cursor-pointer hover:text-gray-600 bg-amazon-600 rounded-sm ">
                      <IconChevronDown />
                    </span>
                  </div>
                  <div className="flex text-xs items-center gap-2">

                    <div className="w-18 overflow-hidden bg-[#9a90ff]">
                      {item.thumbnail && (
                        <Image className="object-cover h-full w-full " src={item.thumbnail} width={200} height={200} alt={item?.product_name} />
                      )}
                      {!item.thumbnail && (
                        <Image className="object-cover h-full w-full " src={`/thumb.png`} width={200} height={200} alt={item?.product_name} />
                      )}
                      {/* <Image className="w-full" src={item.thumbnail} alt="" /> */}

                    </div>

                    <div className="flex flex-col gap-3">
                      {editLineItems && (
                        <input className="text-xs !w-[400px]  text-left !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0" type="text" step="0.01" value={item.product_name} onChange={ev => {

                          var cartItemsX = [...cartItems]
                          cartItemsX[index].product_name = (ev.target.value);
                          setcartItems(cartItemsX)
                        }} />
                      )}
                      {!editLineItems && (
                        <div className="text-sm" dangerouslySetInnerHTML={{ __html: item.product_name }}></div>
                      )}


                      <div className="flex  gap-3 items-center ">



                        <div className="flex gap-3 items-center">





                          {editLineItems && (
                            <div className="flex gap-3">

                              <div className="flex gap-2 items-center">
                                <div>Price: </div>
                                <div><input className="text-xs w-24  text-left !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0" type="number" step="0.01" value={item.price} onChange={ev => {

                                  var cartItemsX = [...cartItems]
                                  cartItemsX[index].price = parseFloat(ev.target.value);

                                  setcartItems(cartItemsX)


                                }} /></div>
                              </div>
                              <div className="flex gap-2 items-center">
                                <div>Trade price: </div>
                                <div><input className="text-xs w-24  text-left !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0" type="number" step="0.01" value={item.trade_price} onChange={ev => {

                                  var cartItemsX = [...cartItems]
                                  cartItemsX[index].trade_price = parseFloat(ev.target.value);

                                  setcartItems(cartItemsX)


                                }} /></div>
                              </div>




                              <div className="flex gap-2 items-center">
                                <div>Quantity: </div>
                                <div><input className="text-xs w-24  text-left !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0" type="number" step="0.01" value={item.quantity} onChange={ev => {

                                  var cartItemsX = [...cartItems]
                                  cartItemsX[index].quantity = parseFloat(ev.target.value);
                                  setcartItems(cartItemsX)


                                }} /></div>
                              </div>
                            </div>

                          )}
                          {!editLineItems && (
                            <div className="text-xs">{wrapCurrency(item.price)}</div>
                          )}

                          {item?.sale_price && (
                            <>
                              <div> - </div>
                              <div className="text-xs line-through">{wrapCurrency(item.regular_price)}</div>
                            </>
                          )}
                        </div>








                        <div className=" text-red-500 cursor-pointer flex gap-1 items-center rounded-sm text-xs"
                          onClick={ev => {
                            var cartItemsX = [...cartItems]
                            cartItemsX.splice(index, 1)
                            setcartItems(cartItemsX)
                            addNotification({ type: 'success', title: 'Item removed', content: `${item.product_name} removed from line items.` })

                          }}
                        ><IconTrash width={16} /> Remove</div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="flex gap-1  justify-end text-xs items-center ">
                  {wrapCurrency(item.price)} X {item.quantity} = {wrapCurrency(item.price * item.quantity)}




                </div>

              </div>
            )

          })}
        </div>

        <div className="flex justify-between px-4 py-4 border-b ">
          <div className=" ">Sub Total</div>
          <div className=" ">{wrapCurrency(orderData?.subtotal_amount)}</div>
        </div>



        {orderData?.shipping_amount > 0 && (

          <div className="flex justify-between px-4 py-4 border-b ">
            <div className=" ">Delivery Charge</div>
            <div className=" ">{wrapCurrency(orderData?.shipping_amount)}</div>
          </div>
        )}

        {orderData?.discount_amount && (
          <div className="flex justify-between px-4 py-4 border-b ">
            <div className=" ">Discount</div>
            <div className="  flex gap-2 items-center"> <div className="text-red-500">-{wrapCurrency(orderData?.discount_amount)}</div></div>
          </div>
        )}









        <div className="flex justify-between px-4 py-4 border-t-1 ">
          <div className="text-lg font-bold ">Total Amount to Pay</div>
          <div className="font-bold text-green-500">{wrapCurrency(orderData?.total_amount)}</div>
        </div>


      </WidgetWrapper>


      <WidgetWrapper title="Coupon">

        {!coupons?.applied && (

          <div className="flex gap-2 items-center px-4 py-4">
            <div>
              <input type="text" name="" className="w-28   !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0" value={coupons?.couponCode} onChange={ev => {

                var value = ev.target.value;
                var couponsX = { ...coupons }
                couponsX.couponCode = value;

                setCoupons(couponsX)
              }} />
            </div>
            <div className="text-white bg-gray-600  px-3 py-2 rounded-sm cursor-pointer" onClick={ev => {

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

          <div className="flex justify-between items-center px-4 py-4">
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


                <div className="border-2 border-dashed rounded-sm px-4 py-1 border-green-700 cursor-pointer hover:bg-amazon-300 ">{coupons?.couponCode}</div>
                <div className="text-red-400 cursor-pointer hover:text-red-600" onClick={ev => {

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

      </WidgetWrapper>

      <WidgetWrapper title="Shipping & Delivery">

        <div className="">



          <div className=" lg:flex flex-wrap gap-3 py-3 items-center ">
            <div className="  py-2 lg:w-60 ">{('Shipping Method')}</div>


            <select name="shipping_method" value={orderData?.shipping_method} id="" onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, shipping_method: value })
            }}>

              <option value="">Choose</option>
              <option value="kidobazar">KidoBazar Courier</option>
              <option value="steadfast">Steadfast Courier</option>
              <option value="pathao">Pathao Courier</option>
              <option value="karatoa">Karatoa Courier</option>
              <option value="sundarban">Sundarban Courier</option>
            </select>




          </div>

          <div className=" lg:flex flex-wrap gap-3 py-3 items-center">
            <div className="  py-2 lg:w-60 ">{("Delivery Charge")}</div>


            <div className="">
              <input type="text" className="lg:w-auto w-full" value={orderData?.shipping_amount} onChange={ev => {
                var value = ev.target.value;
                setorderData({ ...orderData, shipping_amount: value })

              }} />

            </div>

          </div>

        </div>
      </WidgetWrapper>



      <WidgetWrapper title="Customer">

        <div className="flex flex-col gap-5">

          <div className="flex justify-between items-center">
            <UsersPicker placeholder={"Search Customer"} role={`customer`} onPick={onPickCustomer} />
          </div>


          {/* {JSON.stringify(customerData)} */}
          {!customerData?.id && (
            <div className="text-red-500">No Customer assigned</div>
          )}
          {customerData?.id && (
            <div className="grid grid-cols-1 gap-4 my-5">

              <div>

                <div className="flex gap-4 items-top">
                  <div className="rounded-full overflow-hidden w-10 h-10">
                    <img src={customerData?.avatar} alt="" width={50} height={50} />
                  </div>
                  <div>
                    <div>{customerData?.name}</div>
                    <div className="text-sm">ID: {customerData?.id}</div>
                  </div>

                </div>

              </div>
              <div className="flex flex-col gap-2 items-top">

                {customerData?.email && (
                  <div className="flex items-center gap-2"><IconMail width={20} height={20} />
                    <div>{customerData?.email}</div>
                    <div className="flex gap-2">
                      <a href={`mailto:${customerData?.email}`} className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer"><IconMailForward size={16} /> Send Mail</a>
                      <div className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer" onClick={() => {
                        navigator.clipboard.writeText(customerData?.email)
                        addNotification({ type: 'success', title: 'Email Copied', content: "Email Copied" })
                      }}>
                        <IconCopy size={16} /> Copy
                      </div>
                    </div>

                  </div>
                )}

                {customerData?.phone && (
                  <div className="flex items-center gap-2">
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center gap-2"><IconPhone width={20} height={20} /></div>
                      <div>{customerData?.phone}</div>
                      <a href={`tel:${customerData?.phone}`} className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer"><IconPhoneCall size={16} /> Call</a>
                      <a href={`https://wa.me/${customerData?.phone}`} className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer"><IconBrandWhatsapp size={16} /> WhatsApp</a>
                      <div className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer" onClick={() => {
                        navigator.clipboard.writeText(customerData?.phone)
                        addNotification({ type: 'success', title: 'Phone Copied', content: "Phone Copied" })
                      }}>
                        <IconCopy size={16} /> Copy
                      </div>
                    </div>
                  </div>
                )}
                {customerData?.billing_address1 && (
                  <div className="flex gap-2 flex-wrap text-sm">
                    <div className="flex items-center gap-2"><IconMapPin width={20} height={20} /> {customerData?.billing_address1}</div>
                    <div className="flex items-center gap-2"> {customerData?.billing_address2}</div>
                    <div className="flex items-center gap-2"> {customerData?.city}</div>
                    <div className="flex items-center gap-2"> {customerData?.country}</div>
                    <div className="flex items-center gap-2 text-white bg-gray-600 text-sm px-3 py-1 rounded-sm cursor-pointer" onClick={() => {
                      navigator.clipboard.writeText(customerData?.billing_address1 + " " + customerData?.billing_address2 + " " + customerData?.city + " " + customerData?.country)
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


      <WidgetWrapper title="Address">
        <div className="grid grid-cols-2 gap-5">
          <div>

            <div className='flex justify-between items-center'>
              <div className=" flex gap-3 items-center">
                <div className="text-xl">Billing Address</div>
              </div>
            </div>






            <div className="flex flex-col gap-3">

              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Billing Name")}</div>
                <div className="">
                  <input type="text" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.billing_name} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_name: value })
                  }} />
                </div>
              </div>
              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Billing Email")}</div>
                <div className="">
                  <input type="text" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.billing_email} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_email: value })
                  }} />
                </div>
              </div>
              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Billing Phone")}</div>
                <div className="">
                  <input type="text" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.billing_phone} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_phone: value })
                  }} />
                </div>
              </div>
              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Billing Address")}</div>
                <div className="">
                  <textarea className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.billing_address} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, billing_address: value })
                  }} />
                </div>
              </div>


            </div>

          </div>
          <div>

            <div className='flex justify-between items-center'>
              <div className="text-xl flex gap-3 items-center">
                <div>Shipping Address</div>
              </div>




            </div>





            <div className="flex flex-col gap-3">


              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Shipping Name")}</div>
                <div className="">
                  <input type="text" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.shipping_name} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, shipping_name: value })
                  }} />
                </div>
              </div>

              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Shipping Phone")}</div>
                <div className="">
                  <input type="text" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.shipping_phone} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, shipping_phone: value })
                  }} />
                </div>
              </div>
              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Shipping Address")}</div>
                <div className="">
                  <textarea name="" id="" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.shipping_address} onChange={ev => {
                    var value = ev.target.value;
                    setorderData({ ...orderData, shipping_address: value })
                  }}></textarea>

                </div>
              </div>

            </div>


          </div>
        </div>
      </WidgetWrapper>



      <WidgetWrapper title="Order Details">

        <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap py-3 gap-3 items-center ">
          <div className="  py-2 lg:w-60 font-bold">{('Status')}</div>



          <select name="status" className="!border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.status} id="" onChange={ev => {
            var value = ev.target.value;
            setorderData({ ...orderData, status: value })
          }}>

            <option value="">Choose</option>
            <option value="hold">On hold</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing </option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
            <option value="refunded">Refunded</option>
            <option value="failed">Failed</option>

          </select>



        </div>

        <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center ">
          <div className="  py-2 lg:w-60 font-bold">{('Payment Method')}</div>


          <select name="payment_method" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.payment_method} id="" onChange={ev => {
            var value = ev.target.value;
            setorderData({ ...orderData, payment_method: value })
          }}>

            <option value="">Choose</option>
            <option value="COD">COD</option>
            <option value="bKash">bKash</option>
            <option value="Nagad">Nagad</option>


          </select>




        </div>

        <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center ">
          <div className="  py-2 lg:w-60 font-bold">{('Payment status')}</div>


          <select name="payment_status" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.payment_status} id="" onChange={ev => {
            var value = ev.target.value;
            setorderData({ ...orderData, payment_status: value })
          }}>

            <option value="">Choose</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="delayed">Delayed</option>

          </select>




        </div>










        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Transaction ID")}</div>


          <div className="">
            <input type="text" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.transaction_id} onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, transaction_id: value })
            }} />

          </div>

        </div>



        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Created Date")}</div>
          <DatePicker
            className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
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

        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Completed Date")}</div>
          <DatePicker
            className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
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


        <div className=" lg:flex flex-wrap gap-3 py-3 items-center ">
          <div className="  py-2 lg:w-60 font-bold">{('Created')}</div>

          <div className=""> {orderData?.created_at}</div>

        </div>

      </WidgetWrapper>


















    </div>

  );
};

export default OrderBulkUpdate;