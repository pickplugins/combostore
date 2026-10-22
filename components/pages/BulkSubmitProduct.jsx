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


const BulkSubmitProduct = (props) => {



  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



  var promptData = {
    "title": "",
    "post_content": "",
    "post_excerpt": "",
    "post_thumbnail": {
      "id": "",
      "src": ""
    },
    "post_thumbnail_url": "",
    "featured": false,
    "categories": [],
    "tags": [],
    "gallery": [],

    "faq": [],
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




    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/bulk_submit_product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
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










  function onPickTags(item) {




    var tags = currentObject?.tags;



    // const exists = tags.includes(item.term_id);  // true
    const exists = tags?.some(term => term.term_id === item.term_id);

    if (exists) {
      const tagsX = tags.filter(term => term !== item.term_id);
      setcurrentObject({ ...currentObject, tags: tagsX });
    } else {
      tags.push({ "term_id": item.term_id, "name": item.name })
      setcurrentObject({ ...currentObject, tags: tags });
    }



  }


  function onPickBrands(item) {




    var brands = currentObject?.brands;



    // const exists = brands.includes(item.term_id);  // true
    const exists = brands?.some(term => term.term_id === item.term_id);

    if (exists) {
      const brandsX = brands.filter(term => term !== item.term_id);
      setcurrentObject({ ...currentObject, brands: brandsX });
    } else {
      brands.push({ "term_id": item.term_id, "name": item.name })
      setcurrentObject({ ...currentObject, brands: brands });
    }



  }








  return (
    <div className="flex-1 min-h-full bg-gray-50 px-3 py-5 sm:px-6 sm:py-6">

      {/* Page heading: this screen had no title. */}
      <div className="mx-auto mb-4 flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-3">
        <h1 className="text-xl font-semibold text-gray-900">{("Bulk Submit Product")}</h1>
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
            <div className="p-4 flex flex-col  gap-4">


              <div className="flex flex-col gap-1.5">
                <label htmlFor="" className="block ">
                  {("Product Titles")}
                </label>
                <textarea
                  type="text"
                  placeholder='Title in each line'
                  className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 h-40 w-full rounded-lg px-3 py-2 text-sm"
                  value={currentObject?.post_content}
                  onChange={(ev) => {
                    var value = ev.target.value;
                    setcurrentObject({ ...currentObject, post_content: value });
                  }}
                />
              </div>








            </div>
          </WidgetWrapper>






        </div>

        <div className="min-w-0 order-1 lg:order-2 lg:sticky lg:top-[86px] lg:self-start">

          <div className="flex flex-col gap-4">

            <WidgetWrapper title="General Info">
              <div className=" flex justify-between gap-4">
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
            </WidgetWrapper>
            <WidgetWrapper title="Categories">




              <TermsPicker taxonomy="product_cat" showCount={true} hierarchical={true} selected={currentObject?.categories} onPick={onPickCategories} />
            </WidgetWrapper>
            <WidgetWrapper title="Tags">











              <div className="my-3">

                <div className="flex gap-2 items-center flex-wrap ">
                  {currentObject?.tags?.map((item, index) => {

                    return (
                      <div key={index} className="text-sm flex items-center gap-2 !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg pl-3 pr-1 py-1 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 cursor-pointer">
                        <div>{item}</div>
                        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {
                          var tags = currentObject.tags;
                          tags.splice(index, 1);

                          setcurrentObject({ ...currentObject, tags: tags });

                        }}><IconTrash /></div>
                      </div>
                    )
                  })}
                </div>


              </div>

              <TagsPicker taxonomy="product_tag" selected={currentObject?.tags} onPick={onPickTags} />


            </WidgetWrapper>
            <WidgetWrapper title="Brands">



              <div className="my-3">

                <div className="flex gap-2 items-center flex-wrap ">
                  {currentObject?.brands?.map((item, index) => {

                    return (
                      <div key={index} className="text-sm flex items-center gap-2 !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg pl-3 pr-1 py-1 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 cursor-pointer">
                        <div>{item}</div>
                        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {
                          var brands = currentObject.brands;
                          brands.splice(index, 1);

                          setcurrentObject({ ...currentObject, brands: brands });

                        }}><IconTrash /></div>
                      </div>
                    )
                  })}
                </div>


              </div>

              <TagsPicker taxonomy="product_brand" selected={currentObject?.brands} onPick={onPickBrands} />

            </WidgetWrapper>
















          </div>

        </div>

      </div>


    </div>
  );
};

export default BulkSubmitProduct;