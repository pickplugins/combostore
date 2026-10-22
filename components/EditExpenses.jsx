"use client";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconSquare, IconMapPin, IconTrash, IconBasketPlus, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconSquareRoundedPlusFilled, IconPhoneCall, IconFilter2Check, IconFilter2Edit, IconCopy, IconMailForward, IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconMail, IconPhone, IconAddressBook, IconBrandWhatsapp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { APIProvider, Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import DropDown from '../components/DropDown';

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from '../components/LocationPicker';
import GoogleMapDirections from '../components/GoogleMapDirections';
import PopoverButton from '../components/PopoverButton';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ExpensesItemsPicker from '../components/shop-elements/ExpensesItemsPicker';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;





const EditExpense = (props) => {
  const { formatDate, wrapCurrency } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, inHousePaymentMethods, orderStatusArgs, paymentStatusArgs } = useCounterStore()

  var expenseId = props?.id
  var [loading, setloading] = useState(false);
  var [editItems, seteditItems] = useState(false);

  var [expenseData, setexpenseData] = useState(props?.expenseData);
  var [customerData, setcustomerData] = useState(null);
  var [lineItems, setlineItems] = useState([]);
  var [lineItemsQuery, setlineItemsQuery] = useState({ keyword: "" });





  useEffect(() => {
    get_expense();
  }, [expenseId]);



  useEffect(() => {

    calculateOrder();

  }, [expenseData?.discount_amount, lineItems]);





  useEffect(() => {


    if (!expenseData?.created_for) {
      return
    };

    get_customer_data(expenseData?.created_for).then((user) => {
      setcustomerData(user)


    });
  }, [expenseData?.created_for]);



  function calculateOrder() {

    var subtotal = 0;
    var totalQuantity = 0;

    lineItems?.map(item => {

      var quantity = parseInt(item.quantity)
      var price = parseFloat(item.price)

      subtotal += (price * quantity);
      totalQuantity += quantity;

    })


    setexpenseData((prevExpenseData) => {
      var totalPay = parseFloat(subtotal) + parseFloat(prevExpenseData?.shipping_amount || 0);


      if (prevExpenseData?.advance_payment) {
        totalPay = totalPay - parseFloat(prevExpenseData?.advance_payment)
      }

      return { ...prevExpenseData, total_amount: totalPay, subtotal_amount: subtotal }
    })

  }





  function get_expense() {


    // if (!token) {
    //   throw new Error("No token found");
    // }

    setloading(true);

    var postData = {
      id: expenseId,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_expense",
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





            // var errors = res?.errors;
            // var success = res?.success;
            var expense = res?.expense;
            var lineItems = res?.lineItems;




            setloading(false);
            setexpenseData(expense)
            setlineItems(lineItems)
            calculateOrder();


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
      id: expenseData?.created_for,
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

  function update_expense() {

    setloading(true)



    var postData = JSON.stringify({ ...expenseData, lineItems: lineItems });

    fetch(serverUrl + "wp-json/combo-store/v2/update_expense", {
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





  function onPickSupplier(args) {

    get_customer_data(args?.ID).then((user) => {
      setcustomerData(user)




      setexpenseData({
        ...expenseData,
        created_for: user?.id,
        billing_address: user?.billing_address1 + user?.billing_address2,
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

        return res?.customer; // <-- THIS is now returned to the caller
      })
      .catch((error) => {
        setloading(false);
        return null; // or throw error
      });
  }


  function onAddProducts(item) {


    var lineItemsX = [...lineItems]


    //var upsells = currentObject?.upsells ? currentObject.upsells : {};
    lineItemsX.push({
      "purchase_id": expenseData?.id,
      "product_id": item.id,
      "product_name": item.product_name,
      "sku": "",
      "quantity": 1,
      "price": item.price,
      "subtotal": 0,
      "tax": 0,
      "total": 0,
      "meta": null,
    })

    setlineItems(lineItemsX)


  }





  const requiredRoles = ["administrator", "rider", ""];
  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));




  return (
    <div className="flex flex-col gap-5">



      <div className='flex justify-between items-center'>
        <div className="flex gap-3">
          <DropDown allowReset={true} multiple={false} value={expenseData?.status} options={orderStatusArgs} label={`Status`} onOptionsChoose={(args) => {
            setexpenseData({ ...expenseData, status: args?.value })
          }} />


          <DropDown allowReset={true} multiple={false} value={expenseData?.payment_method ?? 'cash'} options={inHousePaymentMethods} label={`Payment Method`} onOptionsChoose={(args) => {




            setexpenseData({ ...expenseData, payment_method: args?.value })
          }} />
          <DropDown allowReset={true} multiple={false} value={expenseData?.payment_status} options={paymentStatusArgs} label={`Payment Status`} onOptionsChoose={(args) => {
            setexpenseData({ ...expenseData, payment_status: args?.value })
          }} />




        </div>

        <div className='flex gap-2 items-center'>
          {loading && (

            <Spinner />

          )}


          <div className='p-2  rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white'

            onClick={ev => {
              update_expense()
            }}
          >Update</div>






        </div>
      </div>

      <WidgetWrapper title="Title">

        <div className="">

          <div className="">
            <input type="text" className="lg:w-auto !w-full !shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white" value={expenseData?.title} onChange={ev => {
              var value = ev.target.value;
              setexpenseData({ ...expenseData, title: value })

            }} />

          </div>










        </div>
      </WidgetWrapper>


      <WidgetWrapper collapsible={true} title="Expense Items">


        <div className="flex gap-3 mb-4 px-3 items-center justify-between">
          <div><ExpensesItemsPicker placeholder="Search items..." onPick={onAddProducts} /></div>

          <div className="flex gap-2 items-center">
            <div className='p-2 flex gap-2 items-center rounded-sm text-sm cursor-pointer  bg-gray-600 hover:bg-gray-400 text-white'
              onClick={ev => {




                var lineItemsX = [...lineItems]
                lineItemsX.push({ "expense_id": expenseData?.id, "product_id": '', "product_name": "Custom Expense Title", "sku": "", "quantity": 1, "price": 0, "subtotal": 0, "tax": 0, "total": 0, "meta": null, })
                setlineItems(lineItemsX)


              }}
            >

              <IconBasketPlus />

              Add Item
            </div>

            {lineItems?.length > 0 && (
              <div className='p-2 rounded-sm text-sm cursor-pointer  bg-gray-600 hover:bg-gray-400 text-white'
                onClick={ev => {
                  seteditItems(!editItems)
                }}
              >
                {editItems && (
                  <div className="flex gap-2 items-center"><IconFilter2Check /> Done</div>
                )}
                {!editItems && (
                  <div className="flex gap-2 items-center"><IconFilter2Edit /> Edit Order Items</div>
                )}
              </div>
            )}

          </div>

        </div>

        <div className="px-2">
          {lineItems?.map((item, index) => {

            return (
              <div key={index} className="flex gap-2 px-2 items-center justify-between py-3 border-b border-solid border-gray-400">
                <div className="flex gap-2 flex-1 items-center">

                  <div className="flex flex-col gap-1 items-center   rounded-sm border-gray-500  ">


                    <span onClick={() => {


                      var lineItemsX = [...lineItems]
                      lineItemsX[index].quantity = parseInt(item.quantity) + 1;
                      setlineItems(lineItemsX)


                    }} className="cursor-pointer hover:text-gray-600 bg-amazon-600 rounded-sm ">
                      <IconChevronUp />
                    </span>

                    <span>{item.quantity}</span>
                    <span onClick={() => {
                      var lineItemsX = [...lineItems]
                      lineItemsX[index].quantity = item.quantity == 1 ? 1 : parseInt(item.quantity) - 1;
                      setlineItems(lineItemsX)


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
                      {editItems && (
                        <div className="flex">

                          <div>
                            <input className="text-xs !w-[400px]  text-left !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0" type="text" step="0.01" value={item.product_name} onChange={ev => {

                              var lineItemsX = [...lineItems]
                              lineItemsX[index].product_name = (ev.target.value);
                              setlineItems(lineItemsX)


                            }} />
                          </div>
                        </div>
                      )}
                      {!editItems && (
                        <div className="text-sm" dangerouslySetInnerHTML={{ __html: item.product_name }}></div>
                      )}


                      <div className="flex  gap-3 items-center ">



                        <div className="flex gap-3 items-center">


                          {editItems && (
                            <div className="flex gap-3">

                              <div className="flex gap-2 items-center">
                                <div>Price: </div>
                                <div><input className="text-xs w-24  text-left !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0" type="number" step="0.01" value={item.price} onChange={ev => {

                                  var lineItemsX = [...lineItems]
                                  lineItemsX[index].price = parseFloat(ev.target.value);

                                  setlineItems(lineItemsX)


                                }} /></div>
                              </div>
                              <div className="flex gap-2 items-center">
                                <div>Quantity: </div>
                                <div><input className="text-xs w-24  text-left !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0" type="number" step="0.01" value={item.quantity} onChange={ev => {

                                  var lineItemsX = [...lineItems]
                                  lineItemsX[index].quantity = parseFloat(ev.target.value);
                                  setlineItems(lineItemsX)


                                }} /></div>
                              </div>
                            </div>

                          )}
                          {!editItems && (
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
                            var lineItemsX = [...lineItems]
                            lineItemsX.splice(index, 1)

                            setlineItems(lineItemsX)


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
          <div className=" ">{wrapCurrency(expenseData?.subtotal_amount)}</div>
        </div>

        {expenseData?.shipping_amount > 0 && (
          <div className="flex justify-between px-4 py-4 border-b ">
            <div className=" ">Delivery Charge</div>
            <div className=" ">+{wrapCurrency(expenseData?.shipping_amount)}</div>
          </div>
        )}
        {expenseData?.advance_payment > 0 && (
          <div className="flex justify-between px-4 py-4 border-b ">
            <div className=" ">Advance Payment</div>
            <div className="text-red-500">-{wrapCurrency(expenseData?.advance_payment)}</div>
          </div>
        )}





        {expenseData?.discount_amount && (
          <div className="flex justify-between px-4 py-4 border-b ">
            <div className=" ">Discount</div>
            <div className="  flex gap-2 items-center"> <div className="text-red-500">-{wrapCurrency(expenseData?.discount_amount)}</div></div>
          </div>
        )}









        <div className="flex justify-between px-4 py-4 border-t-1 ">
          <div className="text-lg font-bold ">Total Amount to Pay</div>
          <div className="font-bold text-green-500">{wrapCurrency(expenseData?.total_amount)}</div>
        </div>


      </WidgetWrapper>

      <WidgetWrapper title="Discount">

        <div className="">

          <div className=" lg:flex flex-wrap gap-3 py-3 items-center">
            <div className="  py-2 lg:w-60 ">{("Discount amount")}</div>


            <div className="">
              <input type="text" className="lg:w-auto w-full" value={expenseData?.discount_amount} onChange={ev => {
                var value = ev.target.value;
                setexpenseData({ ...expenseData, discount_amount: value })

              }} />

            </div>

          </div>










        </div>
      </WidgetWrapper>




      <WidgetWrapper title="Expense for">

        <div className="flex flex-col gap-5">

          <div className="flex justify-between items-center">
            <UsersPicker placeholder={"Search Supplier"} role={``} onPick={onPickSupplier} />
          </div>


          {/* {JSON.stringify(customerData)} */}
          {!customerData?.id && (
            <div className="text-red-500">No user assigned</div>
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
        <div className="grid grid-cols-1 gap-5">
          <div>

            <div className='flex justify-between items-center'>
              <div className=" flex gap-3 items-center">
                <div className="text-xl">Billing Address</div>
              </div>
            </div>






            <div className="grid grid-cols-2 gap-5">

              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Billing Name")}</div>
                <div className="">
                  <input type="text" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={expenseData?.billing_name} onChange={ev => {
                    var value = ev.target.value;
                    setexpenseData({ ...expenseData, billing_name: value })
                  }} />
                </div>
              </div>
              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Billing Email")}</div>
                <div className="">
                  <input type="text" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={expenseData?.billing_email} onChange={ev => {
                    var value = ev.target.value;
                    setexpenseData({ ...expenseData, billing_email: value })
                  }} />
                </div>
              </div>
              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Billing Phone")}</div>
                <div className="">
                  <input type="text" className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={expenseData?.billing_phone} onChange={ev => {
                    var value = ev.target.value;
                    setexpenseData({ ...expenseData, billing_phone: value })
                  }} />
                </div>
              </div>
              <div className=" flex flex-col gap-1  ">
                <div className="  py-2 lg:w-60 ">{("Billing Address")}</div>
                <div className="">
                  <textarea className=" !w-full  !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={expenseData?.billing_address} onChange={ev => {
                    var value = ev.target.value;
                    setexpenseData({ ...expenseData, billing_address: value })
                  }} />
                </div>
              </div>


            </div>

          </div>
          <div>





          </div>
        </div>
      </WidgetWrapper>




      <WidgetWrapper title="Expense Details">




        <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center ">
          <div className="  py-2 lg:w-60 font-bold">{('Payment status')}</div>


          <select name="payment_status" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={expenseData?.payment_status} id="" onChange={ev => {
            var value = ev.target.value;
            setexpenseData({ ...expenseData, payment_status: value })
          }}>

            <option value="">Choose</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="delayed">Delayed</option>
            <option value="refunded">Refunded</option>
            <option value="due">Due</option>

          </select>




        </div>


        <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center ">
          <div className="  py-2 lg:w-60 font-bold">{('Payment Method')}</div>


          <select name="payment_method" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={expenseData?.payment_method} id="" onChange={ev => {
            var value = ev.target.value;
            setexpenseData({ ...expenseData, payment_method: value })
          }}>

            <option value="">Choose</option>

            {Object.keys(inHousePaymentMethods).map(key => (
              <option key={key} value={key}>{inHousePaymentMethods[key].label}</option>
            ))}




          </select>




        </div>








        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Transaction ID")}</div>


          <div className="">
            <input type="text" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={expenseData?.transaction_id} onChange={ev => {
              var value = ev.target.value;
              setexpenseData({ ...expenseData, transaction_id: value })
            }} />

          </div>

        </div>

        {/* <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Created Date")}</div>
          <DatePicker
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
            selected={expenseData?.created_at}
            onChange={(date) => {
              if (!date) return;

              const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");

              

              setexpenseData({
                ...expenseData,
                created_at: formattedDate
              });
            }}
          />
        </div> */}



      </WidgetWrapper>


















    </div>

  );
};

export default EditExpense;