"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../components/EntriesTable";
import DropDown from "../../components/DropDown";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconCopy, IconEyeShare, IconDotsVertical, IconEdit, IconTrash, IconStarFilled, IconStar, IconFileDollar, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconZoomExclamationFilled, IconPlaylistX } from "@tabler/icons-react";
import PopoverButton from "../../components/PopoverButton";
import ProductEdit from "../../components/shop-elements/ProductEdit";
import TermsPicker from "../../components/shop-elements/TermsPicker";
import TagsPicker from "../../components/shop-elements/TagsPicker";



import Image from "next/image";


const BulkAddUsers = (props) => {



  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



  var promptData = {
    "role": "customer",
    "post_content": "",
  }



  var [currentObject, setcurrentObject] = useState(promptData);

  var [loading, setloading] = useState(false);
  var [errors, seterrors] = useState([]);
  var [submission, setsubmission] = useState({ id: null, success: false });




  function submit_prompt() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }

    // if (currentObject.id < 0) {
    //   return;
    // }

    //var postData = currentObject;




    var postData = JSON.stringify(currentObject);


    console.log(postData);


    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/bulk_submit_users",
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
            var errors = res?.errors;
            var success = res?.success;

            console.log(res);


            if (!success) {
              seterrors(errors)
            }
            if (success) {
              seterrors([])

              setsubmission({ ...submission, success: true })
            }


            setloading(false);
            //setcurrentObject(res)

            // setaddTask({ ...addTask, loading: false, errors: errors, success: success })

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






  function onPickCategories(item) {

    var itemX = { ...item }

    if (itemX.children) {
      delete itemX.children;
    }

    var categories = currentObject.categories;
    const exists = categories.includes(itemX.term_id);  // true



    if (exists) {

      const categoriesX = categories.filter(term => term !== itemX.term_id);

      setcurrentObject({ ...currentObject, categories: categoriesX });


    } else {
      categories.push(itemX.term_id)
      setcurrentObject({ ...currentObject, categories: categories });

    }
  }
















  return (
    <div className="flex-1 min-h-full bg-gray-50 px-3 py-5 sm:px-6 sm:py-6">

      {/* Page heading: this screen had no title. */}
      <div className="mx-auto mb-4 flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">{("Bulk Add Users")}</h1>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_380px]">

        <div className="flex min-w-0 flex-col gap-4 order-2 lg:order-1">

          {loading && (

            <div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
              <div>
                <div className="flex gap-2 text-amber-600">
                  <div className="animate-spin"><IconFidgetSpinner /> </div>
                  <div>{("Please wait")}</div>

                </div>



              </div>

            </div>
          )}

          {submission.success && (

            <div className="form-card flex flex-wrap items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

              <div className="font-bold flex gap-2 text-emerald-600">
                <IconRosetteDiscountCheck />
                <div>{("Thanks for your submission")}</div>

              </div>

              <div className="text-red-600 cursor-pointer" onClick={ev => {
                setsubmission({ ...submission, success: false })

              }}>
                <IconX />
              </div>


            </div>

          )}


          {Object.entries(errors).length > 0 && (

            <div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
              <div>
                <div className="flex flex-col gap-2 text-red-400">

                  <div className="font-bold">{("Errors")}</div>

                  {Object.entries(errors).map((item, index) => {

                    return (
                      <div key={index} className="py-1 flex gap-2">
                        <IconExclamationCircle /> <div>{item[1]}</div>
                      </div>
                    )

                  })}

                </div>



              </div>

            </div>
          )}



          <WidgetWrapper title="General Info">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="block ">
                {("Users Data")}
              </label>
              <textarea
                type="text"
                placeholder="[{email:'',name:'', mobile:'', address:''}]"
                className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 h-40 w-full rounded-lg px-3 py-2 text-sm"
                value={currentObject?.post_content}
                onChange={(ev) => {
                  var value = ev.target.value;
                  setcurrentObject({ ...currentObject, post_content: value });
                }}
              />
            </div>
          </WidgetWrapper>





        </div>

        <div className="min-w-0 order-1 lg:order-2 lg:sticky lg:top-[86px] lg:self-start">

          <div className="flex flex-col gap-4">







            <div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

              <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"
                onClick={ev => {

                  navigator.clipboard
                    .readText()
                    .then((text) => {
                      const parsedData = JSON.parse(text);

                      var currentObjectX = { ...currentObject, ...parsedData }


                      setcurrentObject(currentObjectX);

                    })
                    .catch((err) => { });

                }}
              >{("Paste")}</div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"
                onClick={ev => {
                  submit_prompt()
                }}
              >{("Submit")}</div>
            </div>


            <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

              <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Publish</div>

              <div className="p-4 flex flex-col text-sm gap-4">




                <div className="flex justify-between gap-3 ">
                  <label htmlFor="" className="block ">
                    {("Role")}
                  </label>
                  <select name="" id="" value={currentObject?.role}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, role: value });
                    }}>
                    <option value="customer">Customer</option>
                  </select>

                </div>





              </div>
            </div>












          </div>

        </div>

      </div>


    </div>
  );
};

export default BulkAddUsers;