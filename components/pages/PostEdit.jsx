'use client'
import React from 'react'
import Link from "next/link";


import { useState, useEffect, } from "react";
import Image from "next/image";


import ToggleContent from "../../components/ToggleContent";
import { useCounterStore } from '../../store/useCounterStore'


import PostsPicker from "../../components/shop-elements/PostsPicker";
import GalleryPicker from "../../components/shop-elements/GalleryPicker";
import TermsPicker from "../../components/shop-elements/TermsPicker";
import TagsPicker from "../../components/shop-elements/TagsPicker";
import Spinner from "../../components/Spinner";
import HtmlEditor from "../../components/HtmlEditor";

import { IconSettings, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX, IconExternalLink } from "@tabler/icons-react";



const PostEdit = ({ id }) => {
  const { token, settings, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const storeUrl = process.env.NEXT_PUBLIC_STORE_URL;


  var [currentObject, setcurrentObject] = useState(null);
  var [thumbUrl, setthumbUrl] = useState({ postId: id });

  var [loading, setloading] = useState(false);



  function get_post() {





    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);

    console.log(postData);


    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_post",
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
            var errors = res?.errors;
            var success = res?.success;
            var post = res?.post;

            console.log(post);


            setloading(false);
            setcurrentObject(post)



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




  function update_post() {


    //var postData = currentObject;

    currentObject.id = id;



    var postData = JSON.stringify(currentObject);


    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/update_post",
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

            if (errors) {
              addNotification({ type: 'error', title: 'Term Update Error', content: errors })
            }
            if (success) {
              addNotification({ type: 'success', title: 'Term Updated', content: success })
            }


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
    get_post();

  }, []);







  const RelatedProductsTitle = ({ text, index }) => {

    return (
      <div className="flex gap-3 items-center">

        <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {

          var related_posts = currentObject.related_posts;
          related_posts.splice(index, 1);
          setcurrentObject({ ...currentObject, related_posts: related_posts });

        }}><IconTrash /></div>
        <div>{text}</div>
      </div>
    )

  }


  function onPickRelatedPosts(item) {


    var related_posts = currentObject?.related_posts ? currentObject.related_posts : {};
    related_posts.push({ id: item.id, title: item.title })

    setcurrentObject({ ...currentObject, related_posts: related_posts });


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

                    <div className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Edit post</div>
                    <div className="truncate text-base font-semibold text-gray-900">{currentObject?.title}</div>

                  </div>
                )}

              </div>
              <Link className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700" href={`${storeUrl}/product/${currentObject?.slug}`}>
                <IconExternalLink /> View
              </Link>
            </div>



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
                    {("Content")}
                  </label>
                  <HtmlEditor
                    value={currentObject?.post_content || ""}
                    onChange={(html) => {
                      setcurrentObject({ ...currentObject, post_content: html });
                    }}
                  />
                </div>










              </div>
            </div>






            <div className="form-card flex flex-col gap-4 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Gallery</div>



              <div className="p-4 ">


                <div className="flex justify-between">
                  <div></div>
                  <div>
                    <GalleryPicker popupClass="right-0 bottom-full" onPick={onPickGallery} />
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
                            <Image className="w-full" src={item.src} width={40} height={40} alt={``} />

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



            </div>






            {/* {JSON.stringify(currentObject)} */}











            <div className="form-card flex flex-col gap-4 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Related Posts</div>

              <div className="p-4 ">


                <div className="flex justify-between">
                  <div></div>
                  <div>
                    <PostsPicker onPick={onPickRelatedPosts} />
                  </div>

                </div>

                {currentObject?.related_posts && (

                  <div className="my-4">
                    {currentObject?.related_posts.map((item, index) => {

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



                                  var related_posts = currentObject?.related_posts ? currentObject?.related_posts : {};
                                  related_posts[index].title = value

                                  setcurrentObject({ ...currentObject, related_posts: related_posts });





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





          </div>

          <div className="min-w-0 xl:sticky xl:top-[86px] xl:self-start">

            <div className="flex flex-col gap-4">

              <div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

                <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"
                  onClick={ev => {
                    update_post()
                  }}
                >Update</div>
              </div>


              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

                <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Publish</div>

                <div className="p-4 flex flex-col text-sm gap-4">

                  <div className="flex justify-between items-center gap-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Featured?")}
                    </label>

                    <div>

                      <div onClick={ev => {
                        var featured = !currentObject?.featured;


                        setcurrentObject({ ...currentObject, featured: featured });



                      }} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer">

                        {currentObject?.featured && (
                          <><IconStarFilled /></>
                        )}
                        {!currentObject?.featured && (
                          <><IconStar /></>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* {JSON.stringify(currentObject?.postStatus)} */}


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
                      <option value="pending" >Pending</option>
                      {/* <option value="subscription">Subscription</option>
                       <option value="pwyw">Pay what you want</option> */}

                    </select>

                  </div>

                  <div className="flex justify-between gap-3 ">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Slug")}
                    </label>
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
                  <div className="flex justify-between gap-3 ">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                      {("Menu order")}
                    </label>
                    <input
                      type="number"
                      className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm  bg-white w-24"
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
              </div>
              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">


                <div className="px-5 py-3  border-b border-solid border-gray-300 flex justify-between">
                  <span className="text-xl">Featured Image</span>

                  <span className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer" onClick={ev => {
                    setcurrentObject({ ...currentObject, post_thumbnail: {} });


                  }}><IconTrash /></span>
                </div>

                <div className="p-4 flex flex-col  gap-4">



                  <div>
                    <GalleryPicker popupClass="right-full top-0" onPick={onPickFeaturedImage} />

                  </div>
                  {currentObject?.post_thumbnail?.src && (
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                      <Image unoptimized src={currentObject?.post_thumbnail?.src} width={400} height={400} alt={``} />
                    </div>
                  )}

                </div>

                <div className='flex flex-col gap-3 p-4'>

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


              </div>


              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

                <div className="px-5 py-3  border-b border-solid border-gray-300 flex justify-between">
                  <span className="text-xl">Categories</span>

                  <span className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer" onClick={ev => {
                    setcurrentObject({ ...currentObject, categories: {} });


                  }}><IconTrash /></span>
                </div>

                <div className="p-4 flex flex-col  gap-4">

                  <TermsPicker taxonomy="category" selected={currentObject?.categories} onPick={onPickCategories} />


                </div>
              </div>











              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

                <div className="px-5 py-3  border-b border-solid border-gray-300 flex justify-between">
                  <span className="text-xl">Tags</span>

                  <span className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer" onClick={ev => {
                    setcurrentObject({ ...currentObject, tags: {} });


                  }}><IconTrash /></span>
                </div>

                <div className="p-4 flex flex-col  gap-4">


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

                  <TagsPicker taxonomy="post_tag" selected={currentObject?.tags} onPick={onPickTags} />


                </div>
              </div>












            </div>

          </div>

        </div>


      </div>



    </div>
  )
}

export default PostEdit