"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useContext, useRef } from "react";
import Spinner from "../../components/Spinner";
import { IconFileDollar, IconPlus, IconMinus, IconDotsVertical, IconCircleCheck, IconX } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import PopoverButton from '../../components/PopoverButton';
import ToggleContent from '../../components/ToggleContent';
import OrderItemsList from '../../components/OrderItemsList';
import UsersPicker from '../../components/shop-elements/UsersPicker';
import DropDown from '../../components/DropDown';
import ProductsPicker from '../../components/shop-elements/ProductsPicker';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


const Expenses = (props) => {


  const { wrapCurrency, formatDate } = useUtilsStore()

  const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


  var [newUserPrams, setnewUserPrams] = useState({ role: "customer", name: "", email: "", mobile: "" });

  var [expensesData, setexpensesData] = useState(null);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", payment_method: '', payment_status: '', start_date: '', end_date: '', billing_phone: '', customer: {}, product: {}, status: '', paged: 1, order: "DESC", per_page: 10, first_date: "", last_date: "" });
  var [courierPrams, setcourierPrams] = useState({ courier: "" });

  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);
  var [sumData, setsumData] = useState(null);

  const hasFetched = useRef(false);

  function onSelectRows(rows) {
    setselectedRows(rows);
  }



  var columns = {
    check: { label: ("Check"), },
    id: { label: ("ID"), callback: callbackID, classes: "w-20 text-center px-5 py-2 text-gray-600" },
    title: { label: ("Title"), callback: callbackTitle, classes: "text-left text-gray-600" },
    active: { label: ("Active"), callback: callbackActive, classes: "text-left text-gray-600" },
    // billing_name: { label: ("Created By"), callback: callbackUserName, classes: "text-left text-gray-600" },
    // payment_status: { label: ("Payment"), callback: callbackPaymentStatus, classes: "text-left text-gray-600" },
    // updated_at: { label: ("Datetime"), callback: callbackFormatDate, classes: "text-right pr-2 text-gray-600" },
    // total_amount: { label: "Total", callback: callbackTotal, classes: "text-right text-gray-600" },
    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right w-[100px] pr-2 text-gray-600" },
  };

  var [newExpensePrams, setnewExpensePrams] = useState({ total_amount: "", category: "", subcategory: "", payment_method: "", payment_status: "", transaction_id: "", created_by: "", created_for: "", note: "", });





  function delete_template() {


    if (!token) {
      //throw new Error("No token found");
    }

    if (queryPrams.paged < 0) {
      return;
    }

    var postData = {
      ids: selectedRows,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_template", {
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

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            var errors = res?.errors;
            var success = res?.success;

            setloading(false);

            fetchPosts();

            setselectedRows([]);



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }
  function active_template(id) {


    if (!token) {
      //throw new Error("No token found");
    }

    if (queryPrams.paged < 0) {
      return;
    }

    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/active_template", {
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

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            var errors = res?.errors;
            var success = res?.success;

            setloading(false);

            console.log(res);


          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }



  function fetchPosts() {




    // if (!token) {
    // 	//throw new Error("No token found");
    // }


    if (queryPrams.paged < 0) {
      return;
    }


    var postData = JSON.stringify(queryPrams);
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_templates", {
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




            var expenses = res?.posts;
            var total = parseInt(res?.total);
            var max_pages = parseInt(res?.max_pages);

            console.log(res);


            setexpensesData({ posts: expenses, total: total, maxPages: max_pages })
            setloading(false);



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }


  useEffect(() => {

    fetchPosts();
  }, [queryPrams]);

  useEffect(() => {
    if (hasFetched.current) return;

    hasFetched.current = true;
    fetchPosts();
  }, []);


  function onChangeQueryPrams(queryPrams) {
    if (queryPrams) {
      setqueryPrams(queryPrams)
      fetchPosts();
    }

  }

  function onRefreshRequest(rows) {
    fetchPosts();
  }

  useEffect(() => {
    //checkUser();
  }, []);












  function callbackID(entry, columnIndex) {

    return (
      <td className="text-center py-3 text-sm px-5!"
        key={columnIndex}>
        <Link className=" text-gray-600 font-bold" href={`/dashboard/expenses/${entry.id}`}>
          {"#" + entry.id}
        </Link>
      </td>

    );
  }



  function callbackTitle(entry, columnIndex) {

    return (
      <td className="text-left pl-5 text-sm px-5!"
        key={columnIndex}>
        <div>{entry.name}</div>
      </td>

    );
  }
  function callbackActive(entry, columnIndex) {

    return (
      <td className="text-left  text-sm "
        key={columnIndex}>
        <div onClick={ev => {
          active_template(entry?.id)

        }}>Actiivate</div>
      </td>

    );
  }









  function callbackActions(entry, columnIndex) {

    return (
      <td className="text-sm px-5!"
        key={columnIndex}>

        <PopoverButton wrapperClass={`bg-white flex justify-end px-2`} buttonLabel={" "} buttonIcon={<IconDotsVertical />} title={"Actions"} position={"bottomRight"} buttonClass={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>

          <div className="p-3 w-[400px]">






          </div>

        </PopoverButton>
      </td>

    );
  }














  return (
    <div className="page-shell">

      {/* Page heading: this screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Themes")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {expensesData?.total ?? 0} {("themes")}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 w-full justify-between items-center ">



        <div className="flex flex-wrap gap-3 items-center">




        </div>
        <div>








          {selectedRows.length > 0 && (
            <div className="flex gap-2">

              {/* <PopoverButton wrapperClass={`bg-white`} buttonLabel={("Send to Courier")} buttonIcon={<IconTruckDelivery />} title={"Send to Courier"} position={""}>

									<div className="p-5 bg-white">


										<div className=" lg:flex flex-wrap gap-3 py-3 items-center ">
											<div className="  py-2 lg:w-60 ">{('Select courier')}</div>


											<select name="shipping_method" value={courierPrams?.courier} id="" onChange={ev => {
												var value = ev.target.value;
												setcourierPrams({ ...courierPrams, courier: value })
											}}>

												<option value="">Choose</option>
												<option value="kidobazar">KidoBazar Courier</option>
												<option value="steadfast">Steadfast Courier</option>
												<option value="pathao">Pathao Courier</option>
												<option value="karatoa">Karatoa Courier</option>
												<option value="sundarban">Sundarban Courier</option>
											</select>




										</div>


									</div>

								</PopoverButton>
								<PopoverButton wrapperClass={`bg-white`} buttonLabel={("Fraud Check")} buttonIcon={<IconAlertTriangle />} title={"Fraud Check"} position={""}>

									<div className="p-5 bg-white">




									</div>

								</PopoverButton>


								<PopoverButton wrapperClass={`bg-white`} buttonLabel={("Add Note")} buttonIcon={<IconClipboardTextFilled />} title={"Add Note"} position={""}>

									<div className="p-5 bg-white">


										<div className=" lg:flex flex-wrap gap-3 py-3 items-center ">
											<div className="  py-2 lg:w-60 ">{('Select courier')}</div>


											<select name="shipping_method" value={courierPrams?.courier} id="" onChange={ev => {
												var value = ev.target.value;
												setcourierPrams({ ...courierPrams, courier: value })
											}}>

												<option value="">Choose</option>
												<option value="kidobazar">KidoBazar Courier</option>
												<option value="steadfast">Steadfast Courier</option>
												<option value="pathao">Pathao Courier</option>
												<option value="karatoa">Karatoa Courier</option>
												<option value="sundarban">Sundarban Courier</option>
											</select>




										</div>


									</div>

								</PopoverButton> */}

              <div
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
                onClick={() => {
                  delete_template();
                }}>
                {("Delete All")}
              </div>
            </div>
          )}
        </div>


      </div>



      <EntriesTable
        queryPrams={queryPrams}
        columns={columns}
        entries={expensesData}
        itemPath={""}
        onChange={onChangeQueryPrams}
        loading={loading}
        selectedRows={selectedRows}
        onSelectRows={onSelectRows}
        onRefreshRequest={onRefreshRequest}

      />


      <div className="justify-end">


        {sumData && (

          <div className="flex flex-col gap-2 text-right px-10">


            <div className=" font-bold  ">Total: {wrapCurrency(sumData?.total_amount)}</div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Expenses;