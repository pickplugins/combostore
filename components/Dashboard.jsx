"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NumberFlow from '@number-flow/react'
import DropDown from '../components/DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {
  IconClipboardList,
  IconContract,
  IconReportAnalytics,
  IconPackages,
  IconCreditCardRefund,
  IconRosetteDiscount,
  IconTruckDelivery,
  IconRefresh,
  IconDeviceDesktopAnalytics,
  IconTax,
  IconChevronLeft,
  IconChevronRight,
  IconUserCircle,
  IconBasketCheck,
  IconBasketDollar,
  IconShoppingBagExclamation,
  IconChartInfographic,
  IconCreditCardPay,
  IconClock24,
  IconUser,
  IconUsers,
  IconTrophy,
  IconAlertTriangle,
  IconChartPie,
  IconDatabaseOff,
} from "@tabler/icons-react";
import Spinner from '../components/Spinner';
import ChartComponent from '../components/ChartComponent';
import WidgetWrapper from '../components/WidgetWrapper';
import PopoverButton from '../components/PopoverButton';
import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


/* ---------------------------------------------------------------------------
   Presentation layer
   Global CSS styles `button`, `select` and `input` with unlayered rules, so
   those beat Tailwind utilities and the overrides below need `!` to land.
--------------------------------------------------------------------------- */

const BRAND = "#634FE5";

const TONES = {
  brand: "bg-[#634FE5]/10 text-[#634FE5]",
  indigo: "bg-indigo-50 text-indigo-600",
  emerald: "bg-emerald-50 text-emerald-600",
  sky: "bg-sky-50 text-sky-600",
  amber: "bg-amber-50 text-amber-600",
  rose: "bg-rose-50 text-rose-600",
  violet: "bg-violet-50 text-violet-600",
  teal: "bg-teal-50 text-teal-600",
  slate: "bg-slate-100 text-slate-600",
  orange: "bg-orange-50 text-orange-600",
};

const CARD_CLASSES =
  "rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md";

/* WidgetWrapper is shared with other screens, so it is restyled from the
   outside here instead of being edited. `[&>div]` is its root element. */
const WIDGET_SHELL =
  "[&>div]:gap-0 [&>div]:rounded-xl [&>div]:border [&>div]:border-gray-200 [&>div]:shadow-sm";

const ICON_BUTTON =
  "inline-flex h-9 w-9 items-center justify-center !rounded-lg !border !border-gray-300 !bg-white !px-0 !py-0 !text-gray-500 !shadow-none transition-colors hover:!border-gray-400 hover:!bg-gray-100 hover:!text-gray-900 disabled:!cursor-not-allowed disabled:!opacity-40 disabled:hover:!bg-white";

const ICON_BUTTON_SM =
  "inline-flex h-7 w-7 items-center justify-center !rounded-md !border !border-gray-200 !bg-white !px-0 !py-0 !text-gray-500 !shadow-none transition-colors hover:!border-gray-300 hover:!bg-gray-100 hover:!text-gray-900 disabled:!cursor-not-allowed disabled:!opacity-40 disabled:hover:!bg-white";

const SELECT_CLASSES =
  "h-8 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-2.5 !pr-1 !text-xs !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

const DATE_INPUT_CLASSES =
  "!w-[150px] !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none focus:!border-gray-500";

const SECTION_TITLE_CLASSES =
  "text-[11px] font-semibold uppercase tracking-wider text-gray-500";


const StatCard = ({ label, value, icon: Icon, tone, blurred, compact }) => (
  <div className={`group ${CARD_CLASSES} ${compact ? "p-3" : "p-4"}`}>
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <div
          className={`truncate font-medium uppercase tracking-wide text-gray-500 ${compact ? "text-[10px]" : "text-[11px]"
            }`}>
          {label}
        </div>
        <div
          className={`mt-1.5 font-semibold tabular-nums text-gray-900 ${compact ? "text-base" : "text-2xl"
            } ${blurred ? "blur-[5px]" : ""}`}>
          {value}
        </div>
      </div>
      <div
        className={`shrink-0 rounded-lg transition-transform group-hover:scale-105 ${TONES[tone] ?? TONES.brand
          } ${compact ? "p-1.5" : "p-2.5"}`}>
        <Icon size={compact ? 18 : 22} />
      </div>
    </div>
  </div>
);


const ListCaption = ({ left, right }) => (
  <div className="flex items-center justify-between px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
    <span>{left}</span>
    <span>{right}</span>
  </div>
);


const ListSkeleton = () => (
  <div className="divide-y divide-gray-100">
    {[0, 1, 2, 3, 4].map((row) => (
      <div key={row} className="flex items-center gap-3 px-2 py-3">
        <div className="h-9 w-9 shrink-0 animate-pulse rounded-lg bg-gray-100" />
        <div className="h-3 flex-1 animate-pulse rounded bg-gray-100" />
        <div className="h-3 w-10 shrink-0 animate-pulse rounded bg-gray-100" />
      </div>
    ))}
  </div>
);


const ListEmpty = () => (
  <div className="flex flex-col items-center justify-center gap-2 py-10">
    <span className="text-gray-300">
      <IconDatabaseOff size={26} stroke={1.5} />
    </span>
    <span className="text-xs text-gray-500">No data for this range</span>
  </div>
);


const Thumb = ({ src, alt, blurred }) => (
  <span
    className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 ${blurred ? "blur-[4px]" : ""
      }`}>
    <Image
      unoptimized
      src={src || "/thumb.png"}
      alt={alt || ""}
      width={40}
      height={40}
      className="h-10 w-10 object-cover"
    />
  </span>
);


const Avatar = ({ tone = "indigo", icon: Icon = IconUser }) => (
  <span
    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${TONES[tone] ?? TONES.indigo
      }`}>
    <Icon size={16} />
  </span>
);


const ListRow = ({ rank, media, titleHtml, blurTitle, value, valueSub, valueTone }) => (
  <li className="flex items-center gap-3 px-2 py-2.5 transition-colors hover:bg-gray-50">
    {rank != null && (
      <span className="w-4 shrink-0 text-[11px] font-semibold tabular-nums text-gray-400">
        {rank}
      </span>
    )}
    {media}
    <div
      className={`min-w-0 flex-1 truncate text-xs text-gray-700 ${blurTitle ? "blur-[3px]" : ""}`}
      dangerouslySetInnerHTML={{ __html: titleHtml }}
    />
    <div className="shrink-0 pl-2 text-right">
      <div className={`text-sm font-semibold tabular-nums ${valueTone ?? "text-gray-900"}`}>
        {value}
      </div>
      {valueSub && <div className="text-[10px] text-gray-400">{valueSub}</div>}
    </div>
  </li>
);


const Dashboard = (props) => {

  const { token, settings, appData, notifications, addNotification, userDataX, setUserDataX, privacyMode, currencySymbole, currencyPosition } = useCounterStore()
  const { wrapCurrency } = useUtilsStore()




  var [queryPrams, setqueryPrams] = useState({ keyword: "", range: '7days', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });
  var [topSellingQuery, settopSellingQuery] = useState({ loading: false, keyword: "", range: '7days', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });
  var [topCustomersQuery, settopCustomersQuery] = useState({ loading: false, keyword: "", range: '7days', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });
  var [lowStockQuery, setlowStockQuery] = useState({ loading: false, keyword: "", range: '7days', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });

  var [loading, setloading] = useState(false);
  var [chartData, setchartData] = useState({ labels: [], datasets: [] });
  var [statsData, setstatsData] = useState({});
  var [topSellingProducts, setTopSellingProducts] = useState([]);
  var [topCustomers, settopCustomers] = useState([]);
  var [topObjectOrders, setTopObjectOrders] = useState({ start_date: "", end_date: "", object: 'payment_method', loading: false });
  var [topObjectOrdersItems, settopObjectOrdersItems] = useState([]);

  var [lowStockProducts, setlowStockProducts] = useState([]);



  var ChartDatasetsPrams = {
    orders: {
      "label": "Orders",
      "data": [],
      "borderColor": "rgb(24, 0, 245)",

      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;

        // Initial render
        if (!chartArea) {
          return 'rgba(99,102,241,0.2)';
        }

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );

        gradient.addColorStop(0, 'rgba(25, 0, 245, 0.25)');
        gradient.addColorStop(0.5, 'rgba(25, 0, 245, 0.15)');
        gradient.addColorStop(1, 'rgba(25, 0, 245, 0.05)');

        return gradient;
      },
      "pointColor": "#fff",
      "borderWidth": 2,
      tension: 0.4, // Smooth curve

      "pointStyle": "circle",
      "pointRadius": 4,
      "pointHoverRadius": 6,
      "pointBorderColor": "#fff",
      "pointBorderWidth": 2,
      "pointBackgroundColor": "rgb(24, 0, 245)",
      fill: true,
    },
    purchases: {
      "label": "Purchases",
      "data": [],

      "borderColor": "rgb(207, 36, 250)",
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;

        // Initial render
        if (!chartArea) {
          return 'rgba(99,102,241,0.2)';
        }

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );

        gradient.addColorStop(0, 'rgba(207, 36, 250, 0.25)');
        gradient.addColorStop(0.5, 'rgba(207, 36, 250, 0.15)');
        gradient.addColorStop(1, 'rgba(207, 36, 250, 0.05)');

        return gradient;
      },


      "pointColor": "#fff",
      "borderWidth": 2,
      tension: 0.4, // Smooth curve

      "pointStyle": "circle",
      "pointRadius": 4,
      "pointHoverRadius": 6,
      "pointBorderColor": "#fff",
      "pointBorderWidth": 2,
      "pointBackgroundColor": "rgb(130, 85, 255)",
      fill: true,
    },
    expenses: {
      "label": "Expenses",
      "data": [],

      "borderColor": "rgb(255, 50, 68)",
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;

        // Initial render
        if (!chartArea) {
          return 'rgba(99,102,241,0.2)';
        }

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );

        gradient.addColorStop(0, 'rgba(2255, 50, 68, 0.25)');
        gradient.addColorStop(0.5, 'rgba(2255, 50, 68, 0.15)');
        gradient.addColorStop(1, 'rgba(2255, 50, 68, 0.05)');

        return gradient;
      },


      "pointColor": "#fff",
      "borderWidth": 2,
      tension: 0.4, // Smooth curve

      "pointStyle": "circle",
      "pointRadius": 4,
      "pointHoverRadius": 6,
      "pointBorderColor": "#fff",
      "pointBorderWidth": 2,
      "pointBackgroundColor": "rgb(130, 85, 255)",
      fill: true,
    },
    refunds: {
      "label": "Refunds",
      "data": [],
      "borderColor": "rgb(255, 89, 68)",
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;

        // Initial render
        if (!chartArea) {
          return 'rgba(99,102,241,0.2)';
        }

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );

        gradient.addColorStop(0, 'rgba(255, 90, 68, 0.25)');
        gradient.addColorStop(0.5, 'rgba(255, 90, 68, 0.15)');
        gradient.addColorStop(1, 'rgba(255, 90, 68, 0.05)');

        return gradient;
      },

      "pointColor": "#fff",
      "borderWidth": 2,
      tension: 0.4, // Smooth curve

      "pointStyle": "circle",
      "pointRadius": 4,
      "pointHoverRadius": 6,
      "pointBorderColor": "#fff",
      "pointBorderWidth": 2,
      "pointBackgroundColor": "rgb(255, 105, 85)",
      fill: true,
    },
  }



  useEffect(() => {
    fetchPosts()
    get_store_total_overviews()

    setTimeout(() => {
      fetchTopCustomers()
    }, 2000);


    setTimeout(() => {
      fetchTopSellingProducts()
    }, 3000);
    setTimeout(() => {
      queryLowStockProducts()
    }, 4000);



  }, []);

  useEffect(() => {
    fetchPosts()
    get_store_total_overviews()


    var days = 7;

    if (queryPrams?.range == '7days') {
      days = 7;
    }
    else if (queryPrams?.range == '15days') {
      days = 15;
    }
    else if (queryPrams?.range == '30days') {
      days = 15;
    }
    else if (queryPrams?.range == '6months') {

      const today = new Date();
      const sixMonthsAgo = new Date(today);

      sixMonthsAgo.setMonth(today.getMonth() - 6);

      const diffTime = today - sixMonthsAgo;
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      console.log(days);






    }
    else if (queryPrams?.range == '1year') {
      days = 365;
    }
    else if (queryPrams?.range == 'custom') {
      days = 15;

      const start = new Date(queryPrams?.first_date);
      const end = new Date(queryPrams?.last_date);

      const diffTime = Math.abs(end - start);
      days = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;





    }



  }, [queryPrams]);

  useEffect(() => {


    var days = 7;

    if (queryPrams?.range == '7days') {
      days = 7;
    }
    else if (queryPrams?.range == '15days') {
      days = 15;
    }
    else if (queryPrams?.range == '30days') {
      days = 15;
    }
    else if (queryPrams?.range == '6months') {

      const today = new Date();
      const sixMonthsAgo = new Date(today);

      sixMonthsAgo.setMonth(today.getMonth() - 6);

      const diffTime = today - sixMonthsAgo;
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      console.log(days);






    }
    else if (queryPrams?.range == '1year') {
      days = 365;
    }
    else if (queryPrams?.range == 'custom') {
      days = 15;

      const start = new Date(queryPrams?.first_date);
      const end = new Date(queryPrams?.last_date);

      const diffTime = Math.abs(end - start);
      days = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;





    }

    setqueryPrams({ ...queryPrams, days: days })


  }, [queryPrams?.range, queryPrams?.first_date, queryPrams?.last_date]);









  useEffect(() => {


    setTimeout(() => {
      get_top_object_from_orders()
    }, 500)


  }, [topObjectOrders]);

  useEffect(() => {
    setTimeout(() => {
      fetchTopSellingProducts()
    }, 800)


  }, [topSellingQuery.paged]);

  useEffect(() => {
    setTimeout(() => {
      queryLowStockProducts()
    }, 1000)


  }, [lowStockQuery.paged]);

  useEffect(() => {

    setTimeout(() => {
      fetchTopCustomers()
    }, 1200)


  }, [topCustomersQuery.paged]);



  function fetchPosts() {



    if (!token) {
      ////throw new Error("No token found");
      return;
    }


    if (queryPrams.paged < 0) {
      return;
    }






    var postData = JSON.stringify(queryPrams);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_chart_data", {
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


            var datasets = [];

            var orders = res?.orders?.data || [];
            var purchases = res?.purchases?.data || [];
            var expenses = res?.expenses?.data || [];
            var refunds = res?.refunds?.data || [];


            datasets.push({ ...ChartDatasetsPrams.orders, data: orders });
            datasets.push({ ...ChartDatasetsPrams.purchases, data: purchases });
            datasets.push({ ...ChartDatasetsPrams.expenses, data: expenses });
            datasets.push({ ...ChartDatasetsPrams.refunds, data: refunds });


            setchartData({ labels: res.labels, datasets: datasets })


            setloading(false);


          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }
  function get_store_total_overviews() {



    if (!token) {
      ////throw new Error("No token found");
      return;
    }


    if (queryPrams.paged < 0) {
      return;
    }






    var postData = JSON.stringify(queryPrams);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_store_total_overviews", {
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


            //setchartData({ labels: res.labels, datasets: res.datasets })


            var avg_daily_sale = res.total_orders_amount / queryPrams?.days || 0;


            setloading(false);

            setstatsData({
              total_products: res.total_products || 0,
              total_customers: res.total_customers || 0,
              total_orders: res.total_orders || 0,
              total_orders_amount: res.total_orders_amount || 0,
              avg_order_value: res.avg_order_value || 0,
              avg_order_profit: res.avg_order_profit || 0,
              avg_daily_sale: avg_daily_sale || 0,
              total_subscriptions: res.total_subscriptions || 0,
              total_discount_amount: res.total_discount_amount || 0,
              total_tax_amount: res.total_tax_amount || 0,
              total_trade_price: res.total_trade_price || 0,
              total_net_profit_amount: res.total_net_profit_amount || 0,
              total_gross_profit_amount: res.total_gross_profit_amount || 0,


              /* The Refunded card read a key that was never mapped, so it was
                 stuck at 0. The endpoint names money fields `total_*_amount`;
                 the fallbacks cover the spellings it may use for refunds. */
              total_refunded_amount:
                res.total_refunded_amount ??
                res.total_refund_amount ??
                res.total_refunds_amount ??
                res.refunded_total ?? 0,

              total_shipping_amount: res.total_shipping_amount || 0,
              total_expenses_amount: res.total_expenses_amount || 0,
              total_purchase_amount: res.total_purchase_amount || 0,
              total_due_amount: res.total_due_amount || 0,
              total_pending_amount: res.total_pending_amount || 0,
            })

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






  function fetchTopSellingProducts() {



    if (!token) {
      ////throw new Error("No token found");
      return;
    }


    // if (topSellingQuery.paged < 0) {
    //   return;
    // }



    settopSellingQuery({ ...topSellingQuery, loading: true });




    var postData = JSON.stringify(topSellingQuery);

    fetch(serverUrl + "wp-json/combo-store/v2/get_top_selling_products", {
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


            var products = res?.products;

            setTopSellingProducts(products)

            settopSellingQuery({ ...topSellingQuery, loading: false });

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
  function queryLowStockProducts() {



    if (!token) {
      ////throw new Error("No token found");
      return;
    }


    // if (queryPrams.paged < 0) {
    //   return;
    // }


    setlowStockQuery({ ...lowStockQuery, loading: true });




    var postData = JSON.stringify(lowStockQuery);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_low_stock_products", {
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




            setlowStockProducts(res?.posts)


            setTimeout(() => {
              setlowStockQuery({ ...lowStockQuery, loading: false });

            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }


  function get_top_object_from_orders() {



    if (!token) {
      ////throw new Error("No token found");
      return;
    }


    if (queryPrams.paged < 0) {
      return;
    }






    var postData = JSON.stringify(topObjectOrders);

    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_top_object_from_orders", {
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






            settopObjectOrdersItems(res)


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
  function fetchTopCustomers() {



    if (!token) {
      ////throw new Error("No token found");
      return;
    }


    // if (queryPrams.paged < 0) {
    //   return;
    // }


    settopCustomersQuery({ ...topCustomersQuery, loading: true });




    var postData = JSON.stringify(topCustomersQuery);

    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_top_customers", {
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


            var users = res?.users

            console.log(res);



            settopCustomers(users)
            settopCustomersQuery({ ...topCustomersQuery, loading: false });


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


  var dateRanges = {
    '7days': { label: '7 Days', value: '7days' },
    '15days': { label: '15 Days', value: '15days' },
    '30days': { label: '30 Days', value: '30days' },
    '6months': { label: '6 Months', value: '6months' },
    '1year': { label: '1 Year', value: '1year' },
    'custom': { label: 'Custom', value: 'custom' },
  }

  var rangeLabels = {
    '7days': ("Last 7 days"),
    '15days': ("Last 15 days"),
    '30days': ("Last 30 days"),
    '6months': ("Last 6 months"),
    '1year': ("Last 1 year"),
    'custom': ("Custom range"),
  }

  var rangeLabel = rangeLabels[queryPrams?.range] ?? ("Last 7 days");

  /* Money cards follow the store's currency settings, the same way
     wrapCurrency() does: the amount is grouped to two decimals and the store
     symbol sits on the side `currencyPosition` asks for. */
  var money = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
  var moneyPrefix = currencyPosition == 'before' ? currencySymbole : undefined;
  var moneySuffix = currencyPosition == 'after' ? ` ${currencySymbole}` : undefined;


  /* One widget header for the paged list widgets, so the four of them stay
     identical. onPrev/onNext keep each widget's own paging behaviour. */
  const listHeader = ({ title, icon: Icon, tone, query, onPrev, onNext }) => (
    <div className="flex w-full items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className={`shrink-0 rounded-lg p-1.5 ${TONES[tone] ?? TONES.brand}`}>
          <Icon size={18} />
        </span>
        <span className="truncate text-sm font-semibold text-gray-900">{title}</span>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        {query?.loading && (
          <span className="text-gray-400">
            <Spinner size={16} fill={"#9ca3af"} />
          </span>
        )}

        <button type="button" title="Previous" className={ICON_BUTTON_SM} disabled={query?.paged <= 1} onClick={onPrev}>
          <IconChevronLeft size={16} />
        </button>

        <span className="min-w-5 text-center text-xs font-medium tabular-nums text-gray-600">
          {query?.paged}
        </span>

        <button type="button" title="Next" className={ICON_BUTTON_SM} onClick={onNext}>
          <IconChevronRight size={16} />
        </button>
      </div>
    </div>
  );


  var heroStats = [
    {
      label: ("Total Sale"),
      icon: IconReportAnalytics,
      tone: "brand",
      blurred: privacyMode,
      value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={(statsData?.total_orders_amount) || 0} />,
    },
    {
      label: ("Total Orders"),
      icon: IconBasketCheck,
      tone: "indigo",
      value: <NumberFlow value={statsData?.total_orders || 0} />,
    },
    {
      label: ("Avg Order Value"),
      icon: IconContract,
      tone: "sky",
      blurred: privacyMode,
      value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={(statsData?.total_orders_amount / statsData?.total_orders) || 0} />,
    },
    {
      label: ("Net Profit"),
      icon: IconChartInfographic,
      tone: "emerald",
      blurred: privacyMode,
      value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={Number(statsData?.total_net_profit_amount - (statsData?.total_expenses_amount + statsData?.total_due_amount) || 0)} />,
    },
  ];

  var statGroups = [
    {
      title: ("Sales breakdown"),
      items: [
        {
          label: ("Avg Daily Sale"),
          icon: IconClock24,
          tone: "sky",
          blurred: privacyMode,
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={(statsData?.avg_daily_sale) || 0} />,
        },
        {
          label: ("Total Discount"),
          icon: IconRosetteDiscount,
          tone: "violet",
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_discount_amount || 0} />,
        },
        {
          label: ("Total Tax"),
          icon: IconTax,
          tone: "slate",
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_tax_amount || 0} />,
        },
        {
          label: ("Total Shipping"),
          icon: IconTruckDelivery,
          tone: "teal",
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_shipping_amount || 0} />,
        },
        {
          label: ("Total Refunded"),
          icon: IconCreditCardRefund,
          tone: "rose",
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_refunded_amount || 0} />,
        },
      ],
    },
    {
      title: ("Costs & payables"),
      items: [
        {
          label: ("Total Product Cost"),
          icon: IconClipboardList,
          tone: "amber",
          blurred: privacyMode,
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_trade_price || 0} />,
        },
        {
          label: ("Total Purchase"),
          icon: IconBasketDollar,
          tone: "amber",
          blurred: privacyMode,
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_purchase_amount || 0} />,
        },
        {
          label: ("Total Expense"),
          icon: IconCreditCardPay,
          tone: "orange",
          blurred: privacyMode,
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_expenses_amount || 0} />,
        },
        {
          label: ("Total Pending"),
          icon: IconShoppingBagExclamation,
          tone: "rose",
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_pending_amount || 0} />,
        },
        {
          label: ("Total Due"),
          icon: IconShoppingBagExclamation,
          tone: "rose",
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={statsData?.total_due_amount || 0} />,
        },
      ],
    },
    {
      title: ("Catalog & profit"),
      items: [
        {
          label: ("Total Products"),
          icon: IconPackages,
          tone: "indigo",
          value: <NumberFlow value={statsData?.total_products || 0} />,
        },
        {
          label: ("Total Customers"),
          icon: IconUserCircle,
          tone: "indigo",
          value: <NumberFlow value={statsData?.total_customers || 0} />,
        },
        {
          label: ("Gross Profit"),
          icon: IconChartInfographic,
          tone: "emerald",
          blurred: privacyMode,
          value: <NumberFlow format={money} prefix={moneyPrefix} suffix={moneySuffix} value={Number(statsData?.total_gross_profit_amount || 0)} />,
        },
      ],
    },
  ];

  var topObjectCaptions = {
    userid: { left: ("User"), right: ("Spent - Orders") },
    status: { left: ("Status"), right: ("Orders") },
    payment_method: { left: ("Payment Method"), right: ("Orders") },
    payment_status: { left: ("Payment Status"), right: ("Orders") },
  };

  var topObjectCaption = topObjectCaptions[topObjectOrders?.object];


  return (
    <div className="">


      {token && (
        <div className="page-shell gap-0">

          {/* Page header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {("Store Overview")}
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {rangeLabel}
                {queryPrams?.range == 'custom' && queryPrams?.first_date && queryPrams?.last_date && (
                  <> · {queryPrams.first_date} → {queryPrams.last_date}</>
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2">

              {queryPrams?.range == 'custom' && (

                <div className="flex flex-wrap items-center gap-2">

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                      {("From")}
                    </span>
                    <DatePicker
                      className={DATE_INPUT_CLASSES}
                      showTimeSelect
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      selected={queryPrams?.first_date}
                      onChange={(date) => {
                        if (!date) return;

                        const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");

                        setqueryPrams({ ...queryPrams, first_date: formattedDate })


                      }}
                    />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                      {("To")}
                    </span>
                    <DatePicker
                      className={DATE_INPUT_CLASSES}
                      showTimeSelect
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      selected={queryPrams?.last_date}
                      onChange={(date) => {
                        if (!date) return;

                        const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");

                        setqueryPrams({ ...queryPrams, last_date: formattedDate })


                      }}
                    />
                  </div>

                </div>

              )}

              <DropDown allowReset={false} multiple={false} value={queryPrams.range} options={dateRanges} label={`Choose Date`}
                labelClass="flex h-9 cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700 shadow-sm transition-colors hover:border-gray-400 hover:bg-gray-50"
                onOptionsChoose={(args) => {



                  setqueryPrams({ ...queryPrams, range: args?.value })


                }}
                position={`right`}

              />

              <button
                type="button"
                title="Refresh"
                className={ICON_BUTTON}
                onClick={ev => {
                  fetchPosts()
                }}>

                {loading && (
                  <Spinner fill={"#9ca3af"} size={16} />
                )}
                {!loading && (
                  <IconRefresh size={18} />
                )}
              </button>

            </div>
          </div>


          {/* Headline KPIs */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>


          {/* Trend chart */}
          <div className={`my-6 ${WIDGET_SHELL}`}>
            <WidgetWrapper
              customHeader={
                <div className="flex w-full flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`rounded-lg p-1.5 ${TONES.brand}`}>
                      <IconDeviceDesktopAnalytics size={20} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {("Sales Performance")}
                      </div>
                      <div className="text-[11px] text-gray-500">{rangeLabel}</div>
                    </div>
                  </div>

                  {loading && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-500">
                      <Spinner size={12} fill={"#9ca3af"} /> {("Updating")}
                    </span>
                  )}
                </div>
              }>
              <ChartComponent chartData={chartData} />
            </WidgetWrapper>
          </div>


          {/* Secondary metrics, grouped */}
          <div className="flex flex-col gap-5">
            {statGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-2 flex items-center gap-3">
                  <span className={SECTION_TITLE_CLASSES}>{group.title}</span>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {group.items.map((stat) => (
                    <StatCard key={stat.label} compact {...stat} />
                  ))}
                </div>
              </div>
            ))}
          </div>


          {/* List widgets */}
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-4">

            <div className={WIDGET_SHELL}>
              <WidgetWrapper
                customHeader={listHeader({
                  title: ("Top Customers"),
                  icon: IconUsers,
                  tone: "indigo",
                  query: topCustomersQuery,
                  onPrev: (ev) => {

                    var paged = topCustomersQuery.paged > 1 ? topCustomersQuery.paged - 1 : 1;
                    settopCustomersQuery({ ...topCustomersQuery, paged: paged })
                  },
                  onNext: (ev) => {

                    var paged = topCustomersQuery.paged + 1

                    settopCustomersQuery({ ...topCustomersQuery, paged: paged })
                  },
                })}>

                <ListCaption left={("User")} right={("Spent - Orders")} />

                {topCustomersQuery?.loading && topCustomers?.length == 0 && <ListSkeleton />}
                {!topCustomersQuery?.loading && topCustomers?.length == 0 && <ListEmpty />}

                <ul className="divide-y divide-gray-100">
                  {topCustomers?.map((product, index) => (
                    <ListRow
                      key={index}
                      rank={index + 1}
                      media={<Avatar tone="indigo" icon={IconUser} />}
                      titleHtml={product.billing_name}
                      blurTitle={privacyMode}
                      value={wrapCurrency(product.total_spent)}
                      valueSub={`${product.total_orders} ${("orders")}`}
                    />
                  ))}
                </ul>

              </WidgetWrapper>
            </div>


            <div className={WIDGET_SHELL}>
              <WidgetWrapper
                customHeader={listHeader({
                  title: ("Top Selling Products"),
                  icon: IconTrophy,
                  tone: "emerald",
                  query: topSellingQuery,
                  onPrev: (ev) => {

                    var paged = topSellingQuery.paged > 1 ? topSellingQuery.paged - 1 : 1;
                    settopSellingQuery({ ...topSellingQuery, paged: paged })
                  },
                  onNext: (ev) => {

                    var paged = topSellingQuery.paged + 1

                    settopSellingQuery({ ...topSellingQuery, paged: paged })
                  },
                })}>

                <ListCaption left={("Product")} right={("Units sold")} />

                {topSellingQuery?.loading && topSellingProducts?.length == 0 && <ListSkeleton />}
                {!topSellingQuery?.loading && topSellingProducts?.length == 0 && <ListEmpty />}

                <ul className="divide-y divide-gray-100">
                  {topSellingProducts?.map((product, index) => (
                    <ListRow
                      key={index}
                      rank={index + 1}
                      media={
                        <Thumb
                          src={product?.product_image}
                          alt={product?.product_name}
                          blurred={privacyMode}
                        />
                      }
                      titleHtml={product.product_name.length == 0 ? `**Custom Product**` : product.product_name}
                      blurTitle={product.product_name.length > 0 && privacyMode}
                      value={product.total_units_sold}
                    />
                  ))}
                </ul>

              </WidgetWrapper>
            </div>


            <div className={WIDGET_SHELL}>
              <WidgetWrapper
                customHeader={listHeader({
                  title: ("Low Stock Products"),
                  icon: IconAlertTriangle,
                  tone: "amber",
                  query: lowStockQuery,
                  onPrev: (ev) => {

                    var paged = lowStockQuery.paged > 1 ? lowStockQuery.paged - 1 : 1;
                    setlowStockQuery({ ...lowStockQuery, paged: paged })
                  },
                  onNext: (ev) => {

                    var paged = lowStockQuery.paged + 1

                    setlowStockQuery({ ...lowStockQuery, paged: paged })
                  },
                })}>

                <ListCaption left={("Product")} right={("In stock")} />

                {lowStockQuery?.loading && lowStockProducts?.length == 0 && <ListSkeleton />}
                {!lowStockQuery?.loading && lowStockProducts?.length == 0 && <ListEmpty />}

                <ul className="divide-y divide-gray-100">
                  {lowStockProducts?.map((product, index) => (
                    <ListRow
                      key={index}
                      rank={index + 1}
                      media={
                        <Thumb
                          src={product?.post_thumbnail_url}
                          alt={product?.title}
                          blurred={privacyMode}
                        />
                      }
                      titleHtml={product.title.length == 0 ? `**Custom Product**` : product.title}
                      blurTitle={product.title.length > 0 && privacyMode}
                      value={product?.stock_count}
                      valueTone={
                        product?.stock_count <= 0
                          ? "text-rose-600"
                          : product?.stock_count <= 5
                            ? "text-amber-600"
                            : "text-gray-900"
                      }
                    />
                  ))}
                </ul>

              </WidgetWrapper>
            </div>


            <div className={WIDGET_SHELL}>
              <WidgetWrapper
                customHeader={
                  <div className="flex w-full items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className={`shrink-0 rounded-lg p-1.5 ${TONES.violet}`}>
                        <IconChartPie size={18} />
                      </span>
                      <span className="truncate text-sm font-semibold text-gray-900">
                        {("Orders - Top Things")}
                      </span>
                    </div>

                    <select
                      className={`${SELECT_CLASSES} w-[140px]`}
                      name=""
                      id=""
                      selected={topObjectOrders?.object}
                      onChange={ev => {
                        setTopObjectOrders({
                          ...topObjectOrders,
                          object: ev.target.value
                        });
                      }}>
                      <option value="">Select</option>
                      <option value="status">Top Order Status</option>
                      <option value="payment_method">Top Payment Methods</option>
                      <option value="payment_status">Top Payment Status</option>
                    </select>
                  </div>
                }>

                {topObjectCaption && (
                  <ListCaption left={topObjectCaption.left} right={topObjectCaption.right} />
                )}

                {topObjectOrdersItems?.length == 0 && <ListEmpty />}

                <ul className="divide-y divide-gray-100">
                  {topObjectOrdersItems?.map((product, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 px-2 py-2.5 transition-colors hover:bg-gray-50">

                      {topObjectOrders?.object == 'userid' && (
                        <>
                          <div className="min-w-0 flex-1 truncate text-xs text-gray-700" dangerouslySetInnerHTML={{ __html: product.billing_name }} ></div>
                          <div className="shrink-0 text-sm font-semibold tabular-nums text-gray-900">
                            {wrapCurrency(product.total_spent)}
                            <span className="ml-1 text-[10px] font-normal text-gray-400">
                              {product.total_orders}
                            </span>
                          </div>
                        </>
                      )}

                      {topObjectOrders?.object == 'status' && (
                        <>
                          <div className="min-w-0 flex-1 truncate text-xs capitalize text-gray-700" dangerouslySetInnerHTML={{ __html: product.status }} ></div>
                          <div className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                            {product.total_orders}
                          </div>
                        </>
                      )}

                      {topObjectOrders?.object == 'payment_method' && (
                        <>
                          <div className="min-w-0 flex-1 truncate text-xs capitalize text-gray-700" dangerouslySetInnerHTML={{ __html: product.payment_method }} ></div>
                          <div className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                            {product.total_orders}
                          </div>
                        </>
                      )}

                      {topObjectOrders?.object == 'payment_status' && (
                        <>
                          <div className="min-w-0 flex-1 truncate text-xs capitalize text-gray-700" dangerouslySetInnerHTML={{ __html: product.status }} ></div>
                          <div className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                            {product.total_orders}
                          </div>
                        </>
                      )}

                    </li>
                  ))}
                </ul>

              </WidgetWrapper>
            </div>


          </div>






        </div>
      )}


    </div>
  );
};

export default Dashboard;
