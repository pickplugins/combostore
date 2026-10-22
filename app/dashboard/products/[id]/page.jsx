'use client'
import React, { use } from 'react'
import Link from "next/link";


import { useState, useEffect, } from "react";
import Image from "next/image";


import ToggleContent from "../../../../components/ToggleContent";
import { useCounterStore } from '../../../../store/useCounterStore'

import WidgetWrapper from '../../../../components/WidgetWrapper';

import ProductsVariations from "../../../../components/shop-elements/ProductsVariations";
import ProductsTemplatePicker from "../../../../components/shop-elements/ProductsTemplatePicker";
import ProductsPicker from "../../../../components/shop-elements/ProductsPicker";
import GalleryPicker from "../../../../components/shop-elements/GalleryPicker";
import TermsPicker from "../../../../components/shop-elements/TermsPicker";
import TagsPicker from "../../../../components/shop-elements/TagsPicker";
import Spinner from "../../../../components/Spinner";

import { IconLockOpen, IconLock, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX, IconExternalLink } from "@tabler/icons-react";



const page = ({ params }) => {
  const { id } = use(params)
  const { token, settings, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const storeUrl = process.env.NEXT_PUBLIC_STORE_URL;


  var [currentObject, setcurrentObject] = useState(null);
  var [thumbUrl, setthumbUrl] = useState({ postId: id });

  var [loading, setloading] = useState(false);



  function get_product() {





    var postData = {
      id: id,
    };

    console.log(postData);


    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
            var error = res?.error;
            var success = res?.success;
            var product = res?.product;

            console.log(res);



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

  function setThumbnailFromUrl() {





    var postData = JSON.stringify(thumbUrl);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/set_thumbnail_from_url",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`

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




            var success = res?.success;
            var src = res?.src;
            var attachment_id = res?.attachment_id;




            setloading(false);
            var post_thumbnail = { id: attachment_id, title: "", src: src }

            setcurrentObject({ ...currentObject, post_thumbnail: post_thumbnail });



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


    //var postData = currentObject;

    currentObject.id = id;



    var postData = JSON.stringify(currentObject);




    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/update_product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`

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

            onUpdateProduct(currentObject)

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


  function onUpdateProduct() {




  }


  useEffect(() => {
    get_product();

  }, []);


  var addonsList = [
    { label: "Stock ", value: 'manageStock' },
    { label: "Variations ", value: 'variations' },
    { label: "Dimensions", value: 'dimensions' },
    { label: "Reviews", value: 'reviews' },

    { label: "Categories", value: 'categories' },
    { label: "Tags", value: 'tags' },
    { label: "Badges", value: 'badges' },
    { label: "Brands", value: 'brands' },
    { label: "Visibility", value: 'visibility' },

    { label: "Shipping", value: 'shipping' },
    { label: "Downloads", value: 'downloads' },
    // { label: "Tax", value: 'tax' },
    { label: "Gallery", value: 'gallery' },
    { label: "Warranty", value: 'warranty' },
    { label: "Bulk prices", value: 'bulk_prices' },
    // { label: "Expiry Date", value: 'expiryDate' },
    // { label: "Compliance", value: 'compliance ' },
    // { label: "Warehouse", value: 'warehouse' },
    { label: "FAQ", value: 'faq' },
    { label: "Unit & Quantity", value: 'unit_quantity' },
    { label: "Upsells & Cross-sells", value: 'upsellsCrosssells' },
    { label: "Related Products", value: 'related_products' },
    { label: "Product Templates", value: 'productTemplates' },

  ]


  var weightUnits = [
    { label: "Cooose", value: "" },

    { label: "Gram (g)", value: "g" },
    { label: "Kilogram (kg)", value: "kg" },
    { label: "Milligram (mg)", value: "mg" },
    { label: "Metric Ton (t)", value: "t" },
    { label: "Pound (lb)", value: "lb" },
    { label: "Ounce (oz)", value: "oz" },
    { label: "Stone (st)", value: "st" },
    { label: "Microgram (mcg)", value: "mcg" },
    { label: "Carat (ct)", value: "ct" },
    { label: "Grain (gr)", value: "gr" }
  ]
  var lengthUnits = [
    { label: "Cooose", value: "" },
    { label: "Millimeter (mm)", value: "mm" },
    { label: "Centimeter (cm)", value: "cm" },
    { label: "Meter (m)", value: "m" },
    { label: "Kilometer (km)", value: "km" },
    { label: "Inch (in)", value: "in" },
    { label: "Foot (ft)", value: "ft" },
    { label: "Yard (yd)", value: "yd" },
    { label: "Mile (mi)", value: "mi" }
  ]

  /* Card shell for the WidgetWrapper sections, matching the settings and
     editor screens. `form-card` also opts the fields inside into the shared
     input styling in globals.css. */
  const CARD_CLASSES =
    "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";

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



  function onChangeVariations(variations) {


    setcurrentObject({ ...currentObject, variations: variations });
  }

  function onChangeAttributes(attributes) {


    setcurrentObject({ ...currentObject, attributes: attributes });
  }







  function onPickUpsells(item) {




    var upsells = currentObject?.upsells ? currentObject.upsells : [];
    upsells.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, upsells: upsells });


  }
  function onPickProductsTemplate(item) {

    var product_template = currentObject?.product_template ?? {}
    product_template.id = item.id
    product_template.title = item.title



    setcurrentObject({ ...currentObject, product_template: product_template });


  }
  function onResetProductsTemplate(item) {


    setcurrentObject({ ...currentObject, product_template: null });


  }







  function onPickCrosssells(item) {



    var crosssells = currentObject?.crosssells ? currentObject.crosssells : [];
    crosssells.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, crosssells: crosssells });


  }
  function onPickDownloads(item) {



    var downloads = currentObject?.downloads ? currentObject.downloads : [];
    downloads.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, downloads: downloads });


  }
  function onPickGallery(item) {

    var gallery = currentObject?.gallery ? currentObject.gallery : [];
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
    // const exists = categories.includes(itemX.term_id);  // true
    const exists = categories.some(loopItem => loopItem.term_id === itemX.term_id);



    if (exists) {

      // const categoriesX = categories.filter(term => term !== itemX.term_id);
      const categoriesX = categories.filter(loopItem => loopItem.term_id !== itemX.term_id);



      setcurrentObject({ ...currentObject, categories: categoriesX });


    } else {



      categories.push({ "term_id": itemX?.term_id, "name": itemX?.name, "slug": itemX?.slug, })
      setcurrentObject({ ...currentObject, categories: categories });

    }
  }


  function onPickVisibility(item) {

    var itemX = { ...item }

    if (itemX.children) {
      delete itemX.children;
    }

    var visibility = currentObject.visibility;




    // const exists = visibility.includes(itemX.term_id);  // true
    const exists = visibility.some(loopItem => loopItem.term_id === itemX.term_id);



    if (exists) {

      // const visibilityX = visibility.filter(term => term !== itemX.term_id);
      const visibilityX = visibility.filter(loopItem => loopItem.term_id !== itemX.term_id);



      setcurrentObject({ ...currentObject, visibility: visibilityX });


    } else {



      visibility.push({ "term_id": itemX?.term_id, "name": itemX?.name, "slug": itemX?.slug, })
      setcurrentObject({ ...currentObject, visibility: visibility });

    }
  }




  function onPickTags(items) {



    // var tags = currentObject?.tags;


    // // const exists = tags.includes(item.term_id);  // true
    // const exists = tags?.some(term => term.term_id === item.term_id);

    // if (exists) {
    //   const tagsX = tags.filter(term => term !== item.term_id);
    //   setcurrentObject({ ...currentObject, tags: tagsX });
    // } else {
    //   tags.push({ "term_id": item.term_id, "name": item.name })
    //   setcurrentObject({ ...currentObject, tags: tags });
    // }

    var tagsX = currentObject?.tags;


    items.map(item => {

      const exists = tagsX?.some(term => term.name === item.name);

      if (!exists) {
        tagsX.push({ "term_id": item.term_id, "name": item.name })

      } else {
        //tagsX = tagsX.filter(term => term !== item.term_id);

        // setcurrentObject({ ...currentObject, tags: tags });
      }

    })




    setcurrentObject({ ...currentObject, tags: tagsX });



  }
  function onPickBadges(items) {




    var badgesX = currentObject?.badges;


    items.map(item => {

      const exists = badgesX?.some(term => term.name === item.name);

      if (!exists) {
        badgesX.push({ "term_id": item.term_id, "name": item.name })

      } else {
        //badgesX = badgesX.filter(term => term !== item.term_id);

        // setcurrentObject({ ...currentObject, badges: badges });
      }

    })




    setcurrentObject({ ...currentObject, badges: badgesX });



  }








  function onPickBrands(items) {



    // var tags = currentObject?.tags;


    // // const exists = tags.includes(item.term_id);  // true
    // const exists = tags?.some(term => term.term_id === item.term_id);

    // if (exists) {
    //   const tagsX = tags.filter(term => term !== item.term_id);
    //   setcurrentObject({ ...currentObject, tags: tagsX });
    // } else {
    //   tags.push({ "term_id": item.term_id, "name": item.name })
    //   setcurrentObject({ ...currentObject, tags: tags });
    // }

    var brandsX = currentObject?.brands;


    items.map(item => {

      const exists = brandsX?.some(term => term.name === item.name);

      if (!exists) {
        brandsX.push({ "term_id": item.term_id, "name": item.name })

      } else {
        //brandsX = brandsX.filter(term => term !== item.term_id);

        // setcurrentObject({ ...currentObject, tags: tags });
      }

    })




    setcurrentObject({ ...currentObject, brands: brandsX });



  }



  function onPickBrandsX(item) {




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

                    <div className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Edit product</div>
                    <div className="truncate text-base font-semibold text-gray-900">{currentObject?.title}</div>

                  </div>
                )}

              </div>
              <Link target='_blank' className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900" href={`${storeUrl}product/${currentObject?.slug}`}>
                <IconExternalLink size={16} /> View
              </Link>
            </div>


            <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="General Info">

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

                      if (currentObject?.slugLock) {
                        setcurrentObject({ ...currentObject, title: value, });
                      }
                      if (!currentObject?.slugLock) {
                        setcurrentObject({ ...currentObject, title: value, slug: slug });
                      }

                    }}
                  />
                </div>




                <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Content")}
                  </label>
                  <textarea
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.post_content}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, post_content: value });
                    }}
                  />
                </div>








                <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("SKU")}
                  </label>
                  <input
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.sku}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, sku: value });


                    }}
                  />
                </div>

              </div>

            </WidgetWrapper>





            {/* 
               <div className="flex gap-3 items-center">
                 <label htmlFor="" className="block text-sm font-medium text-gray-700">
                   {("Product Type?")}
                 </label>
     
                 <select name="" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm  bg-white " onChange={ev => {
     
                   var value = ev.target.value;
                   setcurrentObject({ ...currentObject, type: value });
     
     
                 }}>
     
                   <option value="physical">Physical</option>
                   <option value="digital">Digital</option>
     
                 </select>
     
               </div> */}






            {!currentObject?.addons?.includes('variations') && (

              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Pricing">

                <div className="p-4 flex flex-col  gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Pricing Type?")}
                    </label>

                    <select name="" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm mb-5"
                      value={currentObject?.price_type}
                      onChange={ev => {

                        var value = ev.target.value;

                        setcurrentObject({ ...currentObject, price_type: value });


                      }}>

                      <option value="simple">Simple</option>
                      <option value="pwyw">Pay what you want</option>
                      <option value="bargain">Bargain Price</option>

                      {/* do not keep 'price type variable here' becasue price should be straight forward */}

                    </select>

                  </div>


                  {(currentObject?.price_type == 'simple' || currentObject?.price_type?.length == 0) && (
                    <div className="flex gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Regular Price?")}
                        </label>
                        <input
                          type="text"
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                          value={currentObject?.regular_price}
                          onChange={(ev) => {
                            var value = ev.target.value;
                            setcurrentObject({ ...currentObject, regular_price: value });
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Discount Price?")}
                        </label>
                        <input
                          type="text"
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                          value={currentObject?.sale_price}
                          onChange={(ev) => {
                            var value = ev.target.value;
                            setcurrentObject({ ...currentObject, sale_price: value });

                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Trade Price?")}
                        </label>
                        <input
                          type="text"
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                          value={currentObject?.trade_price}
                          onChange={(ev) => {
                            var value = ev.target.value;
                            setcurrentObject({ ...currentObject, trade_price: value });

                          }}
                        />
                      </div>


                    </div>

                  )}
                  {currentObject?.price_type == 'pwyw' && (
                    <div className="flex gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Min Price?")}
                        </label>
                        <input
                          type="text"
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                          value={currentObject?.pwyw_min_price}
                          onChange={(ev) => {
                            var value = ev.target.value;
                            setcurrentObject({ ...currentObject, pwyw_min_price: value });

                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Default Price?")}
                        </label>
                        <input
                          type="text"
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                          value={currentObject?.pwyw_default_price}
                          onChange={(ev) => {
                            var value = ev.target.value;
                            setcurrentObject({ ...currentObject, pwyw_default_price: value });
                          }}
                        />
                      </div>

                    </div>

                  )}
                  {currentObject?.price_type == 'bargain' && (
                    <div className="flex gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Min Price?")}
                        </label>
                        <input
                          type="text"
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                          value={currentObject?.bargain_min_price}
                          onChange={(ev) => {
                            var value = ev.target.value;
                            setcurrentObject({ ...currentObject, bargain_min_price: value });

                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Default Price?")}
                        </label>
                        <input
                          type="text"
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                          value={currentObject?.bargain_default_price}
                          onChange={(ev) => {
                            var value = ev.target.value;
                            setcurrentObject({ ...currentObject, bargain_default_price: value });
                          }}
                        />
                      </div>

                    </div>

                  )}




                </div>

              </WidgetWrapper>



            )}





            {currentObject?.addons?.includes('bulk_prices') && (
              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Bulk Prices">

                <div className="p-4 flex flex-col  gap-4">



                  <div className="">

                    <div className='flex justify-between'>
                      <div className='inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer' onClick={ev => {

                        var bulkPricesX = currentObject.bulk_prices ? [...currentObject.bulk_prices] : [];

                        bulkPricesX.push({ quantity: 1, unitPrice: 0 })
                        setcurrentObject({ ...currentObject, bulk_prices: bulkPricesX });

                      }}>Add</div>
                    </div>

                    <div className='gap-3 my-4'>

                      {currentObject?.bulk_prices?.map((item, index) => {

                        return (
                          <div className='flex gap-3 my-4 items-center'>
                            <div className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer" onClick={ev => {
                              var bulkPricesX = currentObject.bulk_prices ? [...currentObject.bulk_prices] : [];


                              bulkPricesX.splice(index, 1);
                              setcurrentObject({ ...currentObject, bulk_prices: bulkPricesX });

                            }}>
                              <IconX />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                {("Quantity?")}
                              </label>
                              <input
                                type="text"
                                className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                value={item?.quantity}
                                onChange={(ev) => {
                                  var bulkPricesX = currentObject.bulk_prices ? [...currentObject.bulk_prices] : [];

                                  var value = ev.target.value;

                                  bulkPricesX[index].quantity = value
                                  setcurrentObject({ ...currentObject, bulk_prices: bulkPricesX });

                                }}
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                {("Unit Price?")}
                              </label>
                              <input
                                type="text"
                                className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                value={item?.unitPrice}
                                onChange={(ev) => {
                                  var bulkPricesX = currentObject.bulk_prices ? [...currentObject.bulk_prices] : [];

                                  var value = ev.target.value;

                                  bulkPricesX[index].unitPrice = value
                                  setcurrentObject({ ...currentObject, bulk_prices: bulkPricesX });

                                }}
                              />
                            </div>




                          </div>
                        )

                      })}
                    </div>





                  </div>






                </div>

              </WidgetWrapper>


            )}










            {currentObject?.addons?.includes('variations') && (
              <>

                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Product Variations">

                  <div className="flex flex-col  gap-4">

                    <div className="p-4 ">


                      <ProductsVariations product={currentObject} onChangeVariations={onChangeVariations} onChangeAttributes={onChangeAttributes} />




                    </div>





                  </div>

                </WidgetWrapper>

              </>
            )}




            {currentObject?.addons?.includes('manageStock') && (
              <>

                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Stock Management">
                  <div className="p-4 flex flex-col gap-3 ">

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        {("Stock Status?")}
                      </label>

                      <div className="flex gap-2 cursor-pointer">

                        <label htmlFor="stockStatusInstock" className="flex gap-2 cursor-pointer">

                          <input
                            id="stockStatusInstock"
                            type="radio"
                            className=""
                            checked={currentObject?.stock_status == 'instock' ? true : false}
                            onChange={(ev) => {

                              setcurrentObject({ ...currentObject, stock_status: "instock" });


                            }}
                          />
                          <span>In Stock</span>
                        </label>

                        <label htmlFor="stockStatusOutstock" className="flex gap-2 cursor-pointer">

                          <input
                            id="stockStatusOutstock"
                            type="radio"
                            className=""
                            checked={currentObject?.stock_status == 'outofstock' ? true : false}
                            onChange={(ev) => {
                              setcurrentObject({ ...currentObject, stock_status: "outofstock" });

                            }}
                          />
                          <span>Out of Stock</span>
                        </label>

                      </div>


                    </div>

                    {currentObject?.stock_status == 'instock' && (
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Stock Count?")}
                        </label>
                        <input
                          type="number"
                          className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                          value={currentObject?.stock_count}
                          onChange={(ev) => {
                            var value = ev.target.value;

                            setcurrentObject({ ...currentObject, stock_count: value });


                          }}
                        />
                      </div>
                    )}




                  </div>


                </WidgetWrapper>

              </>

            )}

            {currentObject?.addons?.includes('gallery') && (
              <>
                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Gallery">

                  <div className="p-4 ">


                    <div className="flex justify-between">
                      <div></div>
                      <div>
                        <GalleryPicker popupClass="fixed h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50" onPick={onPickGallery} />
                      </div>

                    </div>

                    {currentObject?.gallery && (

                      <div className="grid grid-cols-4 gap-3 my-4" >
                        {currentObject?.gallery?.map((item, index) => {

                          return (
                            <div className="relative overflow-hidden rounded-lg border border-gray-200">



                              <div className="flex flex-col gap-1.5">
                                <div className="absolute top-1 right-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/90 text-gray-500 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-red-600 hover:text-white cursor-pointer [&>svg]:size-4" onClick={ev => {

                                  var gallery = currentObject?.gallery ? currentObject?.gallery : {};
                                  gallery.splice(index, 1);

                                  setcurrentObject({ ...currentObject, gallery: gallery });


                                }}>
                                  <IconTrash />
                                </div>
                                <Image unoptimized className="w-full" src={item.src} width={40} height={40} alt={``} />

                                <div className="absolute bottom-0 left-0 w-full bg-gray-900/70 p-2 text-xs text-white">
                                  {item.title}
                                </div>

                              </div>





                            </div>
                          )

                        })}
                      </div>
                    )}


                  </div>

                </WidgetWrapper>


              </>
            )}



            {currentObject?.addons?.includes('downloads') && (


              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Downloads">

                <div className="p-4 ">


                  <div className="flex justify-between">
                    <div></div>
                    <div>
                      <ProductsPicker onPick={onPickDownloads} />
                    </div>

                  </div>

                  {currentObject?.downloads && (

                    <div className="my-4">
                      {currentObject?.downloads.map((item, index) => {

                        return (
                          <ToggleContent key={index} title={<DownloadsTitle text={item.title} index={index} />}
                            contentClass=""
                            headerClass=""
                            headerTitleClass=""
                            wrapperClass=""
                          >

                            <div className="flex flex-col gap-1.5">

                              <div className="flex flex-col gap-1.5">
                                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                  {("Title")}
                                </label>
                                <input
                                  type="text"
                                  className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                  value={item.title}
                                  onChange={(ev) => {
                                    var value = ev.target.value;

                                    var downloads = currentObject?.downloads ? currentObject?.downloads : {};
                                    downloads[index].title = value

                                    setcurrentObject({ ...currentObject, downloads: downloads });


                                  }}
                                />
                              </div>



                            </div>

                          </ToggleContent>
                        )

                      })}
                    </div>
                  )}


                </div>

              </WidgetWrapper>

            )}





            {currentObject?.addons?.includes('dimensions') && (

              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Dimensions">

                {JSON.stringify(currentObject?.weight)} sdfsd

                <div className="p-4 flex  items-center gap-4">

                  <div className="w-1/2">
                    <div className="flex flex-col gap-1.5">

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Weight")}
                        </label>
                        <div className="flex items-center gap-2 ">

                          <input
                            type="number"
                            className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                            value={currentObject?.weight?.value}
                            onChange={(ev) => {
                              var value = parseInt(ev.target.value);


                              var weight = currentObject?.weight ? currentObject?.weight : {};
                              weight.value = value


                              setcurrentObject({ ...currentObject, weight: weight });



                              // setcurrentObject({ ...currentObject, weight: weight });


                            }}
                          />

                          <select name="" id="" className="!shadow-none !border !border-gray-300"
                            value={currentObject?.weight?.unit}

                            onChange={(ev) => {
                              var value = ev.target.value;

                              var weight = currentObject?.weight ? currentObject?.weight : {};
                              weight.unit = value


                              setcurrentObject({ ...currentObject, weight: weight });


                            }}>
                            {weightUnits.map(item => {

                              return (
                                <option key={item.value} value={item.value}>{item.label}</option>
                              )
                            })}
                          </select>

                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Length")}
                        </label>
                        <div className="flex items-center gap-2 ">

                          <input
                            type="number"
                            className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                            value={currentObject?.length?.value}
                            onChange={(ev) => {
                              var value = ev.target.value;


                              var length = currentObject?.length ? currentObject?.length : {};
                              length.value = value

                              setcurrentObject({ ...currentObject, length: length });

                            }}
                          />

                          <select name="" id="" className="!shadow-none !border !border-gray-300"
                            value={currentObject?.length?.unit}

                            onChange={(ev) => {
                              var value = ev.target.value;

                              var length = currentObject?.length ? currentObject?.length : {};
                              length.unit = value

                              setcurrentObject({ ...currentObject, length: length });

                            }}>
                            {lengthUnits.map(item => {

                              return (
                                <option key={item.value} value={item.value}>{item.label}</option>
                              )
                            })}
                          </select>

                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Width")}
                        </label>
                        <div className="flex items-center gap-2 ">

                          <input
                            type="number"
                            className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                            value={currentObject?.width?.value}
                            onChange={(ev) => {
                              var value = ev.target.value;


                              var width = currentObject?.width ? currentObject?.width : {};
                              width.value = value

                              setcurrentObject({ ...currentObject, width: width });


                            }}
                          />

                          <select name="" id="" className="!shadow-none !border !border-gray-300"
                            value={currentObject?.width?.unit}

                            onChange={(ev) => {
                              var value = ev.target.value;



                              var width = currentObject?.width ? currentObject?.width : {};
                              width.unit = value

                              setcurrentObject({ ...currentObject, width: width });


                            }}>
                            {lengthUnits.map(item => {

                              return (
                                <option key={item.value} value={item.value}>{item.label}</option>
                              )
                            })}
                          </select>

                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">
                          {("Height")}
                        </label>
                        <div className="flex items-center gap-2 ">

                          <input
                            type="number"
                            className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                            value={currentObject?.height?.value}
                            onChange={(ev) => {
                              var value = ev.target.value;

                              var height = currentObject?.height ? currentObject?.height : {};
                              height.value = value

                              setcurrentObject({ ...currentObject, height: height });

                            }}
                          />

                          <select name="" id="" className="!shadow-none !border !border-gray-300"
                            value={currentObject?.height?.unit}

                            onChange={(ev) => {
                              var value = ev.target.value;

                              var height = currentObject?.height ? currentObject?.height : {};
                              height.unit = value

                              setcurrentObject({ ...currentObject, height: height });


                            }}>
                            {lengthUnits.map(item => {

                              return (
                                <option key={item.value} value={item.value}>{item.label}</option>
                              )
                            })}
                          </select>

                        </div>
                      </div>









                    </div>

                  </div>
                  <div className="w-1/2 text-center">


                    <Image className="w-48 mx-auto " src="/box.png" width={200} height={200} alt={``} />
                  </div>


                </div>


              </WidgetWrapper>


            )}







            {currentObject?.addons?.includes('upsellsCrosssells') && (
              <>
                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Upsells & Cross-sells">

                  <div className="flex flex-col  gap-4">

                    <div className="p-4 ">


                      <div className="flex justify-between">
                        <div>Upsells</div>
                        <div>
                          <ProductsPicker onPick={onPickUpsells} />
                        </div>

                      </div>

                      {currentObject?.upsells && (

                        <div className="my-4">
                          {currentObject?.upsells.map((item, index) => {

                            return (
                              <ToggleContent key={index} title={<UpsellsProductsTitle text={item.title} index={index} />}
                                contentClass=""
                                headerClass=""
                                headerTitleClass=""
                                wrapperClass=""
                              >

                                <div className="flex flex-col gap-1.5">

                                  <div className="flex flex-col gap-1.5">
                                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                      {("Title")}
                                    </label>
                                    <input
                                      type="text"
                                      className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                      value={item.title}
                                      onChange={(ev) => {
                                        var value = ev.target.value;


                                        var upsells = currentObject?.upsells ? currentObject?.upsells : {};
                                        upsells[index].title = value

                                        setcurrentObject({ ...currentObject, upsells: upsells });


                                      }}
                                    />
                                  </div>



                                </div>

                              </ToggleContent>
                            )

                          })}
                        </div>
                      )}


                    </div>
                    <div className="p-4 ">


                      <div className="flex justify-between">
                        <div>Crosssells</div>
                        <div>
                          <ProductsPicker onPick={onPickCrosssells} />
                        </div>

                      </div>

                      {currentObject?.crosssells && (

                        <div className="my-4">
                          {currentObject?.crosssells.map((item, index) => {

                            return (
                              <ToggleContent key={index} title={<CrosssellsProductsTitle text={item.title} index={index} />}
                                contentClass=""
                                headerClass=""
                                headerTitleClass=""
                                wrapperClass=""
                              >

                                <div className="flex flex-col gap-1.5">

                                  <div className="flex flex-col gap-1.5">
                                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                      {("Title")}
                                    </label>
                                    <input
                                      type="text"
                                      className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                      value={item.title}
                                      onChange={(ev) => {
                                        var value = ev.target.value;


                                        var crosssells = currentObject?.crosssells ? currentObject?.crosssells : {};
                                        crosssells[index].title = value

                                        setcurrentObject({ ...currentObject, crosssells: crosssells });


                                      }}
                                    />
                                  </div>



                                </div>

                              </ToggleContent>
                            )

                          })}
                        </div>
                      )}


                    </div>




                  </div>

                </WidgetWrapper>

              </>
            )}


            {currentObject?.addons?.includes('faq') && (

              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="FAQ">
                <div className="p-4 ">


                  <div className="flex">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"

                      onClick={ev => {


                        var faq = currentObject?.faq ? currentObject?.faq : {};
                        faq.push({ title: "Test Title", content: "Text Content" })

                        setcurrentObject({ ...currentObject, faq: faq });







                      }}
                    >Add</div>
                  </div>

                  {currentObject?.faq && (

                    <div className="my-4">
                      {currentObject?.faq.map((item, index) => {

                        return (
                          <ToggleContent key={index} title={<FAQTitle text={item.title} index={index} />}
                            contentClass=""
                            headerClass=""
                            headerTitleClass=""
                            wrapperClass=""
                          >

                            <div className="flex flex-col gap-1.5">

                              <div className="flex flex-col gap-1.5">
                                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                  {("Title")}
                                </label>
                                <input
                                  type="text"
                                  className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                  value={item.title}
                                  onChange={(ev) => {
                                    var value = ev.target.value;


                                    var faq = currentObject?.faq ? currentObject?.faq : {};
                                    faq[index].title = value

                                    setcurrentObject({ ...currentObject, faq: faq });




                                  }}
                                />
                              </div>

                              <div className="flex flex-col gap-1.5">
                                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                  {("Content")}
                                </label>
                                <textarea
                                  type="text"
                                  className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                  value={item?.content}
                                  onChange={(ev) => {
                                    var value = ev.target.value;


                                    var faq = currentObject?.faq ? currentObject?.faq : {};
                                    faq[index].content = value

                                    setcurrentObject({ ...currentObject, faq: faq });








                                  }}
                                />
                              </div>

                            </div>

                          </ToggleContent>
                        )

                      })}
                    </div>
                  )}


                </div>

              </WidgetWrapper>




            )}



            {currentObject?.addons?.includes('unit_quantity') && (

              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="FAQ">

                <div className="p-4 ">


                  <div className="flex">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"

                      onClick={ev => {


                        var unit_quantity = currentObject?.unit_quantity ? currentObject?.unit_quantity : {};
                        unit_quantity.push({ title: "Test Title", content: "Text Content" })

                        setcurrentObject({ ...currentObject, unit_quantity: unit_quantity });







                      }}
                    >Add</div>
                  </div>

                  {currentObject?.unit_quantity && (

                    <div className="my-4">
                      {currentObject?.unit_quantity.map((item, index) => {

                        return (
                          <ToggleContent key={index} title={<FAQTitle text={item.title} index={index} />}
                            contentClass=""
                            headerClass=""
                            headerTitleClass=""
                            wrapperClass=""
                          >

                            <div className="flex flex-col gap-1.5">

                              <div className="flex flex-col gap-1.5">
                                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                  {("Title")}
                                </label>
                                <input
                                  type="text"
                                  className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                  value={item.title}
                                  onChange={(ev) => {
                                    var value = ev.target.value;


                                    var unit_quantity = currentObject?.unit_quantity ? currentObject?.unit_quantity : {};
                                    unit_quantity[index].title = value

                                    setcurrentObject({ ...currentObject, unit_quantity: unit_quantity });




                                  }}
                                />
                              </div>

                              <div className="flex flex-col gap-1.5">
                                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                  {("Content")}
                                </label>
                                <textarea
                                  type="text"
                                  className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                  value={item?.content}
                                  onChange={(ev) => {
                                    var value = ev.target.value;


                                    var unit_quantity = currentObject?.unit_quantity ? currentObject?.unit_quantity : {};
                                    unit_quantity[index].content = value

                                    setcurrentObject({ ...currentObject, unit_quantity: unit_quantity });








                                  }}
                                />
                              </div>

                            </div>

                          </ToggleContent>
                        )

                      })}
                    </div>
                  )}


                </div>

              </WidgetWrapper>



            )}




            {currentObject?.addons?.includes('related_products') && (


              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Related Products">

                <div className="p-4 ">


                  <div className="flex justify-between">
                    <div></div>
                    <div>
                      <ProductsPicker onPick={onPickRelatedProducts} />
                    </div>

                  </div>

                  {currentObject?.related_products && (

                    <div className="my-4">
                      {currentObject?.related_products.map((item, index) => {

                        return (
                          <ToggleContent key={index} title={<RelatedProductsTitle text={item.title} index={index} />}
                            contentClass=""
                            headerClass=""
                            headerTitleClass=""
                            wrapperClass=""
                          >

                            <div className="flex flex-col gap-1.5">

                              <div className="flex flex-col gap-1.5">
                                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                  {("Title")}
                                </label>
                                <input
                                  type="text"
                                  className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                                  value={item.title}
                                  onChange={(ev) => {
                                    var value = ev.target.value;



                                    var related_products = currentObject?.related_products ? currentObject?.related_products : {};
                                    related_products[index].title = value

                                    setcurrentObject({ ...currentObject, related_products: related_products });





                                  }}
                                />
                              </div>



                            </div>

                          </ToggleContent>
                        )

                      })}
                    </div>
                  )}


                </div>
              </WidgetWrapper>



            )}

            {currentObject?.addons?.includes('productTemplates') && (
              <>

                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Product Templates">
                  <div className="flex flex-col  gap-4">

                    <div className="p-4 ">


                      <ProductsTemplatePicker selected={currentObject.product_template} onPick={onPickProductsTemplate} onReset={onResetProductsTemplate} />




                    </div>





                  </div>


                </WidgetWrapper>





              </>
            )}


          </div>

          {/* Sticky so Update stays reachable without scrolling back up a
              page this tall. */}
          <div className="min-w-0 xl:sticky xl:top-[86px] xl:self-start">

            <div className="flex flex-col gap-4">

              <div className="form-card flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">

                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4]"
                  onClick={ev => {
                    update_product()
                  }}
                >{loading && (<span className="animate-spin"><IconFidgetSpinner size={16} /></span>)}Update</button>




              </div>
              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Publish">


                <div className=" flex flex-col text-sm gap-4">

                  <div className="flex justify-between items-center gap-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Featured?")}
                    </label>

                    <div>

                      <div onClick={ev => {
                        var featured = !currentObject?.featured;


                        setcurrentObject({ ...currentObject, featured: featured });



                      }} className={`inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border transition-colors ${currentObject?.featured
                        ? "border-amber-300 bg-amber-50 text-amber-500 hover:bg-amber-100"
                        : "border-gray-300 bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                        }`}
                        title={currentObject?.featured ? "Featured" : "Not featured"}>

                        {currentObject?.featured && (
                          <><IconStarFilled size={16} /></>
                        )}
                        {!currentObject?.featured && (
                          <><IconStar size={16} /></>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* {JSON.stringify(currentObject?.postStatus)} */}


                  <div className="flex justify-between items-center gap-3">
                    <label htmlFor="status" className=" text-gray-500">
                      {("Status")}
                    </label>

                    <select name="status" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm  bg-white w-20 " onChange={ev => {

                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, postStatus: value });


                    }}
                      value={currentObject?.postStatus}
                    >

                      <option value="publish" selected={currentObject?.postStatus === "publish"} >Publish</option>
                      <option value="draft" selected={currentObject?.postStatus === "draft"} >Draft</option>
                      <option value="pending" selected={currentObject?.postStatus === "pending"} >Pending</option>
                      {/* <option value="subscription">Subscription</option>
                       <option value="pwyw">Pay what you want</option> */}

                    </select>

                  </div>




                  <div className="flex justify-between gap-3 ">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Slug")}
                    </label>


                    <div className='flex gap-2'>
                      <div className='inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer' onClick={ev => {

                        setcurrentObject({ ...currentObject, slugLock: !currentObject?.slugLock });

                      }} >
                        {currentObject?.slugLock && (<IconLock />)}
                        {!currentObject?.slugLock && (<IconLockOpen />)}
                      </div>




                      <input
                        type="text"
                        className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm  bg-white"
                        value={currentObject?.slug}
                        onChange={(ev) => {
                          var value = ev.target.value;
                          setcurrentObject({ ...currentObject, slug: value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-3 ">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Menu order")}
                    </label>
                    <input
                      type="number"
                      className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm  bg-white w-18!"
                      value={currentObject?.menu_order}
                      onChange={(ev) => {
                        var value = ev.target.value;
                        setcurrentObject({ ...currentObject, menu_order: value });
                      }}
                    />
                  </div>







                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Short Description")}
                    </label>
                    <textarea
                      type="text"
                      className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                      value={currentObject?.post_excerpt}
                      onChange={(ev) => {
                        var value = ev.target.value;
                        setcurrentObject({ ...currentObject, post_excerpt: value });
                      }}
                    />
                  </div>





                </div>

              </WidgetWrapper>

              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Featured Image">





                <div className=" flex flex-col  gap-4">



                  <div>
                    <GalleryPicker popupClass="fixed h-[700px] w-[700] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50" onPick={onPickFeaturedImage} />

                  </div>
                  {currentObject?.post_thumbnail?.src && (
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                      <Image unoptimized src={currentObject?.post_thumbnail?.src} width={400} height={400} alt={``} />
                    </div>
                  )}

                </div>

                <div className='flex flex-col gap-3 '>

                  <div className="text-base">Set Thumbnail from URL</div>

                  <input type="text" className='!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm' value={thumbUrl?.url} onChange={ev => {

                    var value = ev.target.value;

                    setthumbUrl({ ...thumbUrl, url: value })

                  }} />

                  <div className='inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer' onClick={ev => {
                    setThumbnailFromUrl()

                  }}>

                    Upload
                    {loading && (
                      <Spinner />
                    )}
                  </div>

                </div>





              </WidgetWrapper>







              {currentObject?.addons?.includes('categories') && (


                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Categories">



                  <div className=" flex flex-col  gap-4">

                    <TermsPicker queryPrams={{ taxonomy: "product_cat", hierarchical: true, per_page: 999 }} selected={currentObject?.categories} onPick={onPickCategories} />


                  </div>


                </WidgetWrapper>


              )}


              {currentObject?.addons?.includes('visibility') && (

                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Visibility">


                  <div className=" flex flex-col  gap-4">

                    <TermsPicker taxonomy="product_visibility" selected={currentObject?.visibility} onPick={onPickVisibility} />


                  </div>

                </WidgetWrapper>



              )}







              {currentObject?.addons?.includes('tags') && (

                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Tags">

                  <div className=" flex flex-col  gap-4">


                    <div className="my-3">

                      <div className="flex gap-2 items-center flex-wrap ">
                        {currentObject?.tags?.map((item, index) => {

                          return (
                            <div key={index} className="text-sm flex items-center gap-2 !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg pl-3 pr-1 py-1 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 cursor-pointer">
                              <div>{item.name}</div>
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


                  </div>


                </WidgetWrapper>

              )}
              {currentObject?.addons?.includes('badges') && (


                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Badges">

                  <div className=" flex flex-col  gap-4">


                    <div className="my-3">

                      <div className="flex gap-2 items-center flex-wrap ">
                        {currentObject?.badges?.map((item, index) => {

                          return (
                            <div key={index} className="text-sm flex items-center gap-2 !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg pl-3 pr-1 py-1 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 cursor-pointer">
                              <div>{item.name}</div>
                              <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {
                                var badges = currentObject.badges;
                                badges.splice(index, 1);

                                setcurrentObject({ ...currentObject, badges: badges });

                              }}><IconTrash /></div>
                            </div>
                          )
                        })}
                      </div>


                    </div>

                    <TagsPicker taxonomy="product_badge" selected={currentObject?.badges} onPick={onPickBadges} />


                  </div>

                </WidgetWrapper>



              )}


              {currentObject?.addons?.includes('brands') && (

                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Brands">
                  <div className="p-4 flex flex-col  gap-4">



                    <div className="my-3">

                      <div className="flex gap-2 items-center flex-wrap ">
                        {currentObject?.brands?.map((item, index) => {

                          return (
                            <div key={index} className="text-sm flex items-center gap-2 !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg pl-3 pr-1 py-1 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 cursor-pointer">
                              <div>{item.name}</div>
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


                  </div>


                </WidgetWrapper>

              )}





              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Addons">




                <div className=" flex flex-col  gap-4">


                  <div className="grid grid-cols-2 gap-3 ">

                    {addonsList.map(item => {

                      return (
                        <div key={item?.value} className={`flex gap-2 p-3 rounded-lg border transition-colors cursor-pointer ${currentObject?.addons?.includes(item?.value) ? "border-[#634FE5] bg-[#634FE5]/10 text-[#634FE5]" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"} ${item?.value == 'upsellsCrosssells' ? 'col-span-2' : ""} ${item?.value == 'productTemplates' ? 'col-span-2' : ""} ${item?.value == 'unit_quantity' ? 'col-span-2' : ""} ${item?.value == 'related_products' ? 'col-span-2' : ""}`} onClick={ev => {


                          var value = item.value

                          var addons = currentObject?.addons ? currentObject?.addons : [];

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



              </WidgetWrapper>






            </div>

          </div>

        </div>


      </div>



    </div>
  )
}

export default page