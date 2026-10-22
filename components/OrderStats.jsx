"use client";
import { useState, useEffect, Component } from "react";
import Image from "next/image";
import NumberFlow from '@number-flow/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import {
  IconClipboardList,
  IconPackages,
  IconCreditCardRefund,
  IconAdjustmentsHorizontal,
  IconRosetteDiscount,
  IconTruckDelivery,
  IconRefresh,
  IconDeviceDesktopAnalytics,
  IconCalendarEvent,
  IconCalendarCog,
  IconChevronLeft,
  IconChevronRight,
  IconUserCircle,
  IconBasketCheck,
  IconBasketDollar,
  IconShoppingBagExclamation,
  IconChartInfographic,
  IconCreditCardPay,
} from "@tabler/icons-react";
import Spinner from '../components/Spinner';
import ChartComponent from '../components/ChartComponent';
import WidgetWrapper from '../components/WidgetWrapper';
import PopoverButton from '../components/PopoverButton';
import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';
import DropDown from '../components/DropDown';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const OrderStats = (props) => {

  const { token, settings, appData, notifications, addNotification, userDataX, setUserDataX, orderStatusArgs, paymentStatusArgs, paymentGateways } = useCounterStore()
  const { wrapCurrency } = useUtilsStore()




  var [queryPrams, setqueryPrams] = useState({ customer_id: "", customer_name: '', product_id: "", product_name: '', orderStatus: '', paymentStatus: '', paymentMethod: '', keyword: "", range: '7days', page: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });


  var [loading, setloading] = useState(false);
  var [chartData, setchartData] = useState({ labels: [], datasets: [] });
  var [ordersData, setordersData] = useState({ labels: [], datasets: [] });
  var [expensesData, setexpensesData] = useState({ labels: [], datasets: [] });
  var [purchasesData, setpurchasesData] = useState({ labels: [], datasets: [] });
  var [totalCounter, settotalCounter] = useState({});

  useEffect(() => {
    get_stats_all()
  }, []);

  useEffect(() => {
    get_stats_all()
  }, [queryPrams]);




  function reset_stats() {
    get_stats_all();

  }


  function get_stats_all() {



    var postData = JSON.stringify(queryPrams);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_stats_all", {
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

            setloading(false);


            var ordersDataX = res?.orders || [];
            var expensesDataX = res?.expenses || [];
            var purchasesDataX = res?.purchases || [];



            const labels = ordersDataX.map(i => i.order_date)
            const datasets = [
              {
                label: "Total Amount",
                id: "total_amount",
                borderColor: "#2563EB",
                backgroundColor: "#2563EB",
                borderWidth: 2,
                tension: .3,
                data: ordersDataX.map(i => i.total_amount)
              },
              {
                label: "Sub Total Amount",
                id: "subtotal_amount",
                borderColor: "#0EA5E9",
                backgroundColor: "#0EA5E9",
                borderWidth: 2,
                tension: .3,
                data: ordersDataX.map(i => i.subtotal_amount)
              },


              {
                label: "Discount",
                id: "discount_amount",

                borderColor: "#F59E0B",
                backgroundColor: "#F59E0B",
                borderWidth: 2,
                tension: .3,
                data: ordersDataX.map(i => i.discount_amount)
              },
              {
                label: "Shipping",
                id: "shipping_amount",
                borderColor: "#8B5CF6",
                backgroundColor: "#8B5CF6",
                borderWidth: 2,
                tension: .3,
                data: ordersDataX.map(i => i.shipping_amount)
              },
              {
                label: "Gross Profit",
                id: "gross_profit",
                borderColor: "#10B981",
                backgroundColor: "#10B981",
                borderWidth: 2,
                tension: .3,
                data: ordersDataX.map(i => i.gross_profit)
              },
              {
                label: "Net Profit",
                id: "net_profit",
                borderColor: "#059669",
                backgroundColor: "#059669",
                borderWidth: 2,
                tension: .3,
                data: ordersDataX.map(i => i.net_profit)
              },
              {
                label: "Expenses",
                id: "expenses",
                borderColor: "#DC2626",
                backgroundColor: "#DC2626",
                borderWidth: 2,
                tension: .3,
                data: expensesDataX.map(i => i.total_amount)
              },
              {
                label: "Purchases",
                id: "purchases",
                borderColor: "#7228ff",
                backgroundColor: "#7228ff",
                borderWidth: 2,
                tension: .3,
                data: purchasesDataX.map(i => i.total_amount)
              },



            ]


            console.log("labels", labels)
            console.log("datasets", datasets)

            setordersData({ labels: labels, datasets: datasets })

            const totals = datasets.reduce((result, item) => {
              result[item.id] = {
                value: item.data.reduce(
                  (sum, value) => sum + Number(value),
                  0
                ), label: item.label
              };
              return result;
            }, {});


            console.log("totals", totals)
            settotalCounter(totals)






            setTimeout(() => {
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


    get_customer_data(args?.id).then((user) => {


      setqueryPrams({ ...queryPrams, customer_id: args?.id, customer_name: user?.name })




    });
  }



  function onAddProducts(item) {



    setqueryPrams({ ...queryPrams, product_id: item?.id, product_name: item?.title })

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


  var dateRanges = {
    '7days': { label: '7 Days', value: '7days' },
    '15days': { label: '15 Days', value: '15days' },
    '30days': { label: '30 Days', value: '30days' },
    '6months': { label: '6 Months', value: '6months' },
    '1year': { label: '1 Year', value: '1year' },
    'custom': { label: 'Custom', value: 'custom' },
  }





  useEffect(() => {



    //setchartData({ ...chartData, labels: ordersData?.labels, datasets: [...chartData?.datasets, ...ordersData?.datasets,] })

    var setchartDataX = { labels: ordersData?.labels, datasets: [...ordersData?.datasets, ...expensesData?.datasets, ...purchasesData?.datasets] }



    setchartData(setchartDataX)


  }, [expensesData, ordersData]);





  return (
    <div className="">

      {token && (
        <div className="px-5 bg-gray-50">



          <div className=" py-5 grid gap-5 xl:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">


            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Orders")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.total_amount?.value ? wrapCurrency(totalCounter?.total_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Sale")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.total_amount?.value ? wrapCurrency(totalCounter?.total_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Product Cost")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.total_amount?.value ? wrapCurrency(totalCounter?.total_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Avg Order Value")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.total_amount?.value ? wrapCurrency(totalCounter?.total_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Avg Daily Sale")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.total_amount?.value ? wrapCurrency(totalCounter?.total_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>




            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Discount")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.discount_amount?.value ? wrapCurrency(totalCounter?.discount_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Refunded")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.discount_amount?.value ? wrapCurrency(totalCounter?.discount_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>



            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Expenses")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.expenses?.value ? wrapCurrency(totalCounter?.expenses?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Customers")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.expenses?.value ? wrapCurrency(totalCounter?.expenses?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>




            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Purchases")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.purchases?.value ? wrapCurrency(totalCounter?.purchases?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Shipping")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.shipping_amount?.value ? wrapCurrency(totalCounter?.shipping_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Pending")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.shipping_amount?.value ? wrapCurrency(totalCounter?.shipping_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Due")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.shipping_amount?.value ? wrapCurrency(totalCounter?.shipping_amount?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>









            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Gross Profit")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.gross_profit?.value ? wrapCurrency(totalCounter?.gross_profit?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm border border-gray-200  p-2 rounded-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#634FE5]/10 p-2 text-[#634FE5]">
                  <IconBasketCheck size="25" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-600">{("Total Net Profit")}</div>
                  <div className=" font-bold text-gray-600">{totalCounter?.net_profit?.value ? wrapCurrency(totalCounter?.net_profit?.value) : wrapCurrency(0)}
                  </div>
                </div>
              </div>
            </div>










          </div>


          <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 ">
            <div className="xl:col-span-9 sm:col-span-12 form-card rounded-xl border border-gray-200 bg-white shadow-sm p-3 sm:order-2 lg:order-1">
              <div className="text-2xl flex gap-3 items-center text-gray-600">

                <IconDeviceDesktopAnalytics />

                {queryPrams.range == '7days' && (
                  <>{("Last 7 Days Stats")}</>
                )}
                {queryPrams.range == '15days' && (
                  <>{("Last 15 Days Stats")}</>
                )}
                {queryPrams.range == '30days' && (
                  <>{("Last 30 Days Stats")}</>
                )}
                {queryPrams.range == '6months' && (
                  <>{("Last 6 Months Stats")}</>
                )}
                {queryPrams.range == '1year' && (
                  <>{("Last 1 Year Stats")}</>
                )}
                {queryPrams.range == 'custom' && (
                  <>{("Custom Stats")}</>
                )}



                {loading && (
                  <Spinner />
                )}
              </div>


              <div className="p-5">

                <ChartComponent chartData={chartData} />




              </div>
            </div>

            <div className="xl:col-span-3 sm:col-span-12 form-card rounded-xl border border-gray-200 bg-white shadow-sm p-5 lg:order-2 sm:order-1">
              <div className=" flex justify-between gap-3 items-center mb-5 text-gray-600">

                <div className="flex gap-2 ">
                  <IconAdjustmentsHorizontal />
                  {("Filters")}
                </div>

                <div className="flex gap-2 py-1 items-center">
                  <div onClick={ev => {

                    setqueryPrams({ customer_id: "", product_id: "", orderStatus: '', paymentStatus: '', paymentMethod: '', keyword: "", range: '30days', first_date: "", last_date: "" })

                  }} className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer">Reset</div>
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" onClick={ev => {

                    reset_stats()

                  }}>

                    {loading && (
                      <Spinner fill={"#333"} />
                    )}
                    {!loading && (
                      <IconRefresh />
                    )}
                  </div>
                </div>






              </div>


              <div className="flex flex-col gap-1.5">




                <div className="flex flex-col gap-4  ">

                  <div>
                    <div className="flex gap-2 items-center justify-between">
                      <div>Customer</div>
                      <div className="cursor-pointer text-red-500 hover:text-blue-700" onClick={() => {
                        setqueryPrams({ ...queryPrams, customer_id: "", customer_name: "" })
                      }}>
                        Clear
                      </div>
                    </div>


                    {queryPrams?.customer_name?.length > 0 && (
                      <div className="w-fit rounded-lg border border-dashed border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-500">
                        {queryPrams.customer_name}
                      </div>
                    )}

                    {queryPrams?.customer_id?.length == 0 && (
                      <div>
                        <UsersPicker placeholder={`${queryPrams?.customer_name ? queryPrams?.customer_name : 'Search Customer'}`} role={`customer`} onPick={onPickCustomer} />
                      </div>
                    )}


                  </div>


                  <div>
                    <div className="flex gap-2 items-center justify-between">
                      <div>Product</div>
                      <div className="cursor-pointer text-red-500 hover:text-blue-700" onClick={() => {
                        setqueryPrams({ ...queryPrams, product_id: "", product_name: "" })
                      }}>
                        Clear
                      </div>
                    </div>


                    {queryPrams?.product_name?.length > 0 && (
                      <div className="w-fit rounded-lg border border-dashed border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-500">
                        {queryPrams.product_name}
                      </div>
                    )}

                    {queryPrams?.product_name?.length == 0 && (
                      <div>
                        <ProductsPicker placeholder={`${queryPrams?.product_name ? queryPrams?.product_name : 'Search Product'}`} onPick={onAddProducts} />
                      </div>
                    )}



                  </div>
                  <div>
                    <div>Order Status</div>
                    <div>
                      <DropDown allowReset={true} multiple={false} value={``} options={orderStatusArgs} label={`Choose`} onOptionsChoose={(args) => {



                        setqueryPrams({ ...queryPrams, orderStatus: args })

                      }} />
                    </div>
                  </div>
                  <div>
                    <div>Payment Method</div>
                    <div>
                      <DropDown allowReset={true} multiple={false} value={''} options={paymentGateways} label={`Choose`} onOptionsChoose={(args) => {




                        setqueryPrams({ ...queryPrams, paymentMethod: args })


                      }} />
                    </div>
                  </div>











                  <div>
                    <div>Payment Status</div>
                    <div>
                      <DropDown allowReset={true} multiple={false} value={``} options={paymentStatusArgs} label={`Choose`} onOptionsChoose={(args) => {
                        setqueryPrams({ ...queryPrams, paymentStatus: args })
                      }} />
                    </div>
                  </div>








                  <div className="flex flex-col gap-2">

                    <div className={`flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${queryPrams.range == '7days' ? "bg-[#634FE5]/10 text-[#634FE5]" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`} onClick={ev => {
                      setqueryPrams({ ...queryPrams, range: "7days" })
                    }}><IconCalendarEvent /> Last 7 Days</div>
                    <div className={`flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${queryPrams.range == '15days' ? "bg-[#634FE5]/10 text-[#634FE5]" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`} onClick={ev => {
                      setqueryPrams({ ...queryPrams, range: "15days" })
                    }}><IconCalendarEvent /> Last 15 Days</div>
                    <div className={`flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${queryPrams.range == '30days' ? "bg-[#634FE5]/10 text-[#634FE5]" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`} onClick={ev => {
                      setqueryPrams({ ...queryPrams, range: "30days" })
                    }}><IconCalendarEvent /> Last 30 Days</div>
                    <div className={`flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${queryPrams.range == '6months' ? "bg-[#634FE5]/10 text-[#634FE5]" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`} onClick={ev => {
                      setqueryPrams({ ...queryPrams, range: "6months" })
                    }}><IconCalendarEvent /> Last 6 Months</div>
                    <div className={`flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${queryPrams.range == '1year' ? "bg-[#634FE5]/10 text-[#634FE5]" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`} onClick={ev => {
                      setqueryPrams({ ...queryPrams, range: "1year" })
                    }}><IconCalendarEvent /> Last 1 Year</div>
                    <div className={`flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${queryPrams.range == 'custom' ? "bg-[#634FE5]/10 text-[#634FE5]" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`} onClick={ev => {
                      setqueryPrams({ ...queryPrams, range: "custom" })
                    }}><IconCalendarCog /> Custom</div>


                  </div>


                  {queryPrams.range == 'custom' && (


                    <>
                      <div>
                        <div>From Date</div>
                        <div>
                          <DatePicker
                            className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 lg:w-auto rounded-lg px-3 py-2 text-sm"
                            showTimeSelect
                            placeholderText="First Date"
                            dateFormat="yyyy-MM-dd HH:mm:ss"
                            selected={queryPrams?.first_date}
                            onChange={(date) => {
                              if (!date) return;

                              const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");

                              setqueryPrams({
                                ...queryPrams,
                                first_date: formattedDate,
                                range: 'custom'
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div>To Date</div>
                        <div>
                          <DatePicker
                            className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 lg:w-auto rounded-lg px-3 py-2 text-sm"
                            showTimeSelect
                            placeholderText="Last Date"
                            dateFormat="yyyy-MM-dd HH:mm:ss"
                            selected={queryPrams?.last_date}
                            onChange={(date) => {
                              if (!date) return;

                              const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");

                              setqueryPrams({
                                ...queryPrams,
                                last_date: formattedDate,
                                range: 'custom'
                              });
                            }}
                          />
                        </div>
                      </div>

                    </>
                  )}













                </div>









              </div>

            </div>
          </div>










        </div>
      )}


    </div>
  );
};

export default OrderStats;