'use client'
import React from 'react'
import Link from "next/link";


import { useState, useEffect, useContext } from "react";
import Image from "next/image";


import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconSettings, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconExternalLink } from "@tabler/icons-react";
import GalleryPicker from "../../components/shop-elements/GalleryPicker";


const AttributeEdit = ({ id }) => {




  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [currentObject, setcurrentObject] = useState(null);

  var [loading, setloading] = useState(false);



  function get_term() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }



    var postData = {
      term_id: id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_term",
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
            var product = res?.term;



            setloading(false);
            setcurrentObject(product)



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
  function update_term() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }

    // if (currentObject.id < 0) {
    //   return;
    // }

    //var postData = currentObject;

    currentObject.id = id;



    var postData = JSON.stringify(currentObject);


    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/update_term",
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


            setloading(false);

            if (errors) {
              addNotification({ type: 'error', title: 'Term Update Error', content: errors })
            }
            if (success) {
              addNotification({ type: 'success', title: 'Term Updated', content: success })
            }




            // setTimeout(() => {


            // }, 3000);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }






  useEffect(() => {
    get_term();

  }, []);


  var addonsList = [
    // { label: "Products ", value: 'products' },
    // { label: "Customer ", value: 'customer' },
    // { label: "Expiry ", value: 'expiry' },
    // { label: "Spend ", value: 'spend' },
    // { label: "Categories ", value: 'categories' },
    // { label: "User ", value: 'user' },


  ]


















  function onPickFeaturedImage(item) {


    var thumbnail = { id: item.id, title: item.title, src: item.src }

    setcurrentObject({ ...currentObject, thumbnail: thumbnail });



  }




  function toSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')  // Remove non-alphanumeric chars
      .replace(/\s+/g, '-')          // Replace spaces with -
      .replace(/-+/g, '-');          // Replace multiple - with single -
  }








  return (
    <div>


      <div className="flex-1 min-h-full bg-gray-50 px-3 py-5 sm:px-6 sm:py-6">

        {/* The two columns were fixed at 800px + 400px, which overflowed any
            viewport under ~1500px once the app sidebar was open. */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">

          <div className="flex min-w-0 flex-col gap-4">

            <div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
              <div className="min-w-0">
                {loading && (
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <div className="animate-spin"><IconFidgetSpinner size={18} /> </div>
                    <div>Please wait...</div>

                  </div>
                )}
                {!loading && (
                  <div className="min-w-0">

                    <div className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Edit attribute</div>
                    <div className="truncate text-base font-semibold text-gray-900">{currentObject?.title}</div>

                  </div>
                )}

              </div>

            </div>


            {/* {JSON.stringify(currentObject?.addons)} */}

            <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

              <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">General Info</div>

              <div className="p-4 flex flex-col  gap-4">

                <div className="flex flex-col gap-3 ">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Name")}
                  </label>
                  <input
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.name}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      var slug = toSlug(value);

                      setcurrentObject({ ...currentObject, name: value, slug: slug });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Slug")}
                  </label>
                  <input
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.slug}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      var slug = toSlug(value);

                      setcurrentObject({ ...currentObject, slug: value, slug: slug });
                    }}
                  />
                </div>





                <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Description")}
                  </label>
                  <textarea
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.description}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, description: value });
                    }}
                  />
                </div>








              </div>
            </div>










          </div>

          <div className="min-w-0 xl:sticky xl:top-[86px] xl:self-start">

            <div className="flex flex-col gap-4">

              <div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

                <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"
                  onClick={ev => {
                    update_term()
                  }}
                >Update</div>
              </div>

              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">


                <div className="px-5 py-3  border-b border-solid border-gray-300 flex justify-between">
                  <span className="text-xl">Thumbnail</span>

                  <span className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer" onClick={ev => {
                    setcurrentObject({ ...currentObject, thumbnail: {} });


                  }}><IconTrash /></span>
                </div>
                {/* {JSON.stringify(currentObject?.thumbnail)} */}

                <div className="p-4 flex flex-col  gap-4">



                  <div>
                    <GalleryPicker popupClass="right-full top-0" onPick={onPickFeaturedImage} />

                  </div>
                  {currentObject?.thumbnail?.src && (
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                      <Image unoptimized src={currentObject?.thumbnail?.src} width={400} height={400} alt={``} />
                    </div>
                  )}

                </div>
              </div>

              {/* <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

                <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Publish</div>

                <div className="p-4 flex flex-col text-sm gap-4">


                  
                  <div className="flex justify-between items-center gap-3">
                    <label htmlFor="status" className=" text-gray-500">
                      {("Status")}
                    </label>

                    <select name="status" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm  bg-white " onChange={ev => {

                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, postStatus: value });


                    }}>
                      <option value="publish" >Publish</option>
                      <option value="draft" >Draft</option>
  
                    </select>

                  </div>





                </div>
              </div> */}












              {/* <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

                <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Addons</div>

                <div className="p-4 flex flex-col  gap-4">


                  <div className="grid grid-cols-2 gap-3 ">

                    {addonsList.map(item => {

                      return (
                        <div key={item.value} className={`flex gap-2 p-3 rounded-lg border transition-colors cursor-pointer ${currentObject?.addons?.includes(item?.value) ? "border-[#634FE5] bg-[#634FE5]/10 text-[#634FE5]" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"} ${item?.value == 'upsellsCrosssells' ? 'col-span-2' : ""} ${item?.value == 'related_products' ? 'col-span-2' : ""}`} onClick={ev => {


                          var value = item.value

                          var addons = currentObject?.addons ? currentObject?.addons : {};

                          if (addons.includes(value)) {
                            const index = addons.indexOf(value);
                            if (index !== -1) {
                              addons.splice(index, 1);
                            }
                          } else {
                            addons.push(value)
                          }

                          setcurrentObject({ ...currentObject, addons: addons });


                        }}>

                          {currentObject?.addons?.includes(item.value) && (
                            <IconCheckbox />
                          )}
                          {!currentObject?.addons?.includes(item.value) && (

                            <IconSquare />
                          )}




                          <span>{item.label}</span>
                        </div>
                      )

                    })}


                  </div>

                </div>
              </div> */}

            </div>

          </div>

        </div>


      </div>


    </div>
  )
}

export default AttributeEdit