'use client'
import React from 'react'
import Link from "next/link";


import { useState, useEffect, useContext } from "react";


import { useCounterStore } from '../../store/useCounterStore'
import HtmlEditor from "../../components/HtmlEditor";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconSettings, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconExternalLink } from "@tabler/icons-react";


const ReviewEdit = ({ id }) => {




  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

  var [currentObject, setcurrentObject] = useState(null);

  var [loading, setloading] = useState(false);



  function get_product() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }



    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_coupon",
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
            var product = res?.product;



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
  function update_product() {


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
      serverUrl + "wp-json/combo-store/v2/update_coupon",
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
            //setcurrentObject(res)



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






  useEffect(() => {
    get_product();

  }, []);


  var addonsList = [
    { label: "Products ", value: 'products' },
    { label: "Customer ", value: 'customer' },
    { label: "Expiry ", value: 'expiry' },
    { label: "Spend ", value: 'spend' },
    { label: "Categories ", value: 'categories' },
    { label: "User ", value: 'user' },


  ]




  const FAQTitle = ({ text, index }) => {

    return (
      <div className="flex gap-3 items-center">

        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {


          var faq = currentObject.faq;
          faq.splice(index, 1);
          setcurrentObject({ ...currentObject, faq: faq });


        }}><IconTrash /></div>
        <div>{text}</div>
      </div>
    )

  }
  const DownloadsTitle = ({ text, index }) => {

    return (
      <div className="flex gap-3 items-center">

        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {

          var downloads = currentObject.downloads;
          downloads.splice(index, 1);
          setcurrentObject({ ...currentObject, downloads: downloads });

        }}><IconTrash /></div>
        <div>{text}</div>
      </div>
    )

  }
  const GalleryTitle = ({ text, index }) => {

    return (
      <div className="flex gap-3 items-center">

        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {


          var gallery = currentObject.gallery;
          gallery.splice(index, 1);
          setcurrentObject({ ...currentObject, gallery: gallery });

        }}><IconTrash /></div>
        <div>{text}</div>
      </div>
    )

  }

  const RelatedProductsTitle = ({ text, index }) => {

    return (
      <div className="flex gap-3 items-center">

        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {

          var related_products = currentObject.related_products;
          related_products.splice(index, 1);
          setcurrentObject({ ...currentObject, related_products: related_products });

        }}><IconTrash /></div>
        <div>{text}</div>
      </div>
    )

  }

  const VariationsProductsTitle = ({ text, index }) => {

    return (
      <div className="flex gap-3 items-center">

        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {

          var variations = currentObject.variations;
          variations.splice(index, 1);
          setcurrentObject({ ...currentObject, variations: variations });

        }}><IconTrash /></div>
        <div>{text}</div>
      </div>
    )

  }
  const CrosssellsProductsTitle = ({ text, index }) => {

    return (
      <div className="flex gap-3 items-center">

        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {

          var crosssells = currentObject.crosssells;
          crosssells.splice(index, 1);
          setcurrentObject({ ...currentObject, crosssells: crosssells });

        }}><IconTrash /></div>
        <div>{text}</div>
      </div>
    )

  }
  const UpsellsProductsTitle = ({ text, index }) => {

    return (
      <div className="flex gap-3 items-center">

        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {

          var upsells = currentObject.upsells;
          upsells.splice(index, 1);
          setcurrentObject({ ...currentObject, upsells: upsells });

        }}><IconTrash /></div>
        <div>{text}</div>
      </div>
    )

  }







  function onPickRelatedProducts(item) {


    var related_products = currentObject?.related_products ? currentObject.related_products : {};
    related_products.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, related_products: related_products });


  }
  function onPickVariations(item) {

    var variations = currentObject?.variations ? currentObject.variations : {};
    variations.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, variations: variations });


  }
  function onPickUpsells(item) {




    var upsells = currentObject?.upsells ? currentObject.upsells : {};
    upsells.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, upsells: upsells });


  }
  function onPickCrosssells(item) {



    var crosssells = currentObject?.crosssells ? currentObject.crosssells : {};
    crosssells.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, crosssells: crosssells });


  }
  function onPickDownloads(item) {



    var downloads = currentObject?.downloads ? currentObject.downloads : {};
    downloads.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, downloads: downloads });


  }
  function onPickGallery(item) {

    var gallery = currentObject?.gallery ? currentObject.gallery : {};
    gallery.push({ id: item.id, title: item.title, src: item.src })

    setcurrentObject({ ...currentObject, gallery: gallery });


  }
  function onPickFeaturedImage(item) {


    var post_thumbnail = { id: item.id, title: item.title, src: item.src }

    setcurrentObject({ ...currentObject, post_thumbnail: post_thumbnail });



  }




  function toSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')  // Remove non-alphanumeric chars
      .replace(/\s+/g, '-')          // Replace spaces with -
      .replace(/-+/g, '-');          // Replace multiple - with single -
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

                    <div className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Edit review</div>
                    <div className="truncate text-base font-semibold text-gray-900">{currentObject?.title}</div>

                  </div>
                )}

              </div>
              <Link className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700" href={`/product/${id}`}>
                <IconExternalLink /> View
              </Link>
            </div>


            {/* {JSON.stringify(currentObject?.addons)} */}

            <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

              <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">General Info</div>

              <div className="p-4 flex flex-col  gap-4">

                <div className="flex flex-col gap-3 ">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Title")}
                  </label>
                  <input
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.title}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      var slug = toSlug(value);

                      setcurrentObject({ ...currentObject, title: value, slug: slug });
                    }}
                  />
                </div>



                <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Coupon Code")}
                  </label>
                  <input
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.couponCode}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, couponCode: value });


                    }}
                  />
                </div>

                {/* <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Content")}
                  </label>
                  <HtmlEditor
                    value={currentObject?.post_content || ""}
                    onChange={(html) => {
                      setcurrentObject({ ...currentObject, post_content: html });
                    }}
                  />
                </div> */}









                <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className=" text-gray-500">
                    {("Amount")}
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                      value={currentObject?.amount}
                      name="amount"
                      onChange={(ev) => {
                        var value = ev.target.value;
                        setcurrentObject({ ...currentObject, amount: value });


                      }}
                    />

                    {currentObject?.couponType == 'percent' && (
                      <span>%</span>
                    )}
                    {currentObject?.couponType == 'fixed' && (
                      <span>$</span>
                    )}


                  </div>
                </div>

                <div className="flex gap-3">

                  <div className="flex gap-2">
                    <div>
                      <input
                        type="radio"
                        id="couponType-percent"

                        className="h-4 w-4 shrink-0 cursor-pointer accent-[#634FE5] !shadow-none"
                        checked={currentObject?.couponType == 'percent' ? true : false}
                        onChange={(ev) => {
                          var value = ev.target.value;
                          setcurrentObject({ ...currentObject, couponType: "percent" });


                        }}
                      />
                    </div>
                    <label htmlFor="couponType-percent" className="flex gap-2 cursor-pointer text-gray-500">


                      {("Percentage discount")}


                    </label>
                  </div>

                  <div className="flex gap-2">

                    <div>
                      <input
                        id="couponType-fixed"
                        type="radio"
                        className="h-4 w-4 shrink-0 cursor-pointer accent-[#634FE5] !shadow-none"
                        checked={currentObject?.couponType == 'fixed' ? true : false}
                        onChange={(ev) => {
                          var value = ev.target.value;
                          setcurrentObject({ ...currentObject, couponType: 'fixed' });


                        }}
                      />
                    </div>


                    <label htmlFor="couponType-fixed" className="flex gap-2 cursor-pointer text-gray-500">



                      {("Fixed amount discount")}



                    </label>

                  </div>



                </div>


                <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("limit")}
                  </label>
                  <input
                    type="number"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.limit}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, limit: value });


                    }}
                  />
                </div>


                <div className="flex gap-4">


                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Start Date")}
                    </label>
                    <input
                      type="text"
                      className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                      value={currentObject?.startDate}
                      onChange={(ev) => {
                        var value = ev.target.value;
                        setcurrentObject({ ...currentObject, startDate: value });


                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("End Date")}
                    </label>
                    <input
                      type="text"
                      className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                      value={currentObject?.endDate}
                      onChange={(ev) => {
                        var value = ev.target.value;
                        setcurrentObject({ ...currentObject, endDate: value });


                      }}
                    />
                  </div>


                </div>






              </div>
            </div>










          </div>

          <div className="min-w-0 xl:sticky xl:top-[86px] xl:self-start">

            <div className="flex flex-col gap-4">

              <div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

                <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"
                  onClick={ev => {
                    update_product()
                  }}
                >Update</div>
              </div>


              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

                <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Publish</div>

                <div className="p-4 flex flex-col text-sm gap-4">



                  {/* {JSON.stringify(currentObject?.postStatus)} */}


                  <div className="flex justify-between items-center gap-3">
                    <label htmlFor="status" className=" text-gray-500">
                      {("Status")}
                    </label>

                    <select name="status" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm  bg-white " onChange={ev => {

                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, postStatus: value });


                    }}>

                      <option value="publish" selected={currentObject?.postStatus == 'publish' ? "selected" : ""}>Publish</option>
                      <option value="draft" selected={currentObject?.postStatus == 'draft' ? "selected" : ""}>Draft</option>
                      {/* <option value="subscription">Subscription</option>
                  <option value="pwyw">Pay what you want</option> */}

                    </select>

                  </div>





                </div>
              </div>












              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

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
              </div>

            </div>

          </div>

        </div>


      </div>


    </div>
  )
}

export default ReviewEdit