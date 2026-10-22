"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../components/EntriesTable";
import DropDown from "../../components/DropDown";
import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconUpload, IconLayoutGrid, IconList, IconDotsVertical, IconTrash, IconSquareCheck, IconSquareCheckFilled, IconCopy, IconEyeShare, IconRosetteDiscountCheck, IconX, IconZoomExclamationFilled, IconPlaylistX } from "@tabler/icons-react";
import PopoverButton from "../../components/PopoverButton";
import ProductBulkUpdate from "../../components/shop-elements/ProductBulkUpdate";

import Image from "next/image";
import UploadMedia from "../../components/shop-elements/UploadMedia";


const MediaLibrary = (props) => {



  const { token, appData, notifications, addNotification, userDataX, setUserDataX, paymentGateways } = useCounterStore()



  var [queryPrams, setqueryPrams] = useState({ is_admin: true, min_stock: 5, category: "", tag: null, keyword: "", paged: 1, orderby: "date", order: "DESC", per_page: 30, price: "" });
  var [editProduct, seteditProduct] = useState({ id: null });




  var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });
  var [viewType, setviewType] = useState('list');



  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  var [queryTerms, setqueryTerms] = useState({ taxonomy: 'product_cat', order: "DESC", per_page: 99, });
  var [querybrands, setquerybrands] = useState({ taxonomy: 'product_brand', order: "DESC", per_page: 99, });
  var [terms, setterms] = useState([]);
  var [brands, setbrands] = useState([]);
  var [lastCheckedId, setLastCheckedId] = useState(null);



  function onSelectRows(rows) {
    setselectedRows(rows);
  }


  var columns = {
    check: { id: "check", label: ("Check"), },
    id: { id: "id", label: ("Media"), callback: callbackTitle, classes: "w-96  text-gray-600" },

    actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },

  };



  async function fetchPosts() {





    // if (!token) {
    // 	//throw new Error("No token found");
    // }


    if (queryPrams.paged < 0) {
      return;
    }


    var postData = JSON.stringify(queryPrams);
    setloading(true);



    fetch(serverUrl + "wp-json/combo-store/v2/get_medias", {
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


            var posts = res?.posts;
            var total = res?.total;
            var max_pages = res?.max_pages;




            setproductsData({ posts: posts, total: total, maxPages: max_pages })
            //setqueryPrams({ ...queryPrams, loading: false })
            setloading(false);


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





  async function delete_medias(ids) {


    if (!token) {
      //throw new Error("No token found");
    }

    if (queryPrams.paged < 0) {
      return;
    }

    ids = ids != undefined ? ids : selectedRows;


    var postData = {
      ids: ids,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_medias", {
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




          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }
  async function duplicate_media(id) {


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
    fetch(serverUrl + "wp-json/combo-store/v2/duplicate_media", {
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




          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }



  const [debouncedQuery, setDebouncedQuery] = useState(queryPrams);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(queryPrams); // update debounced value after delay
    }, 1000); // 500ms debounce delay

    // Cleanup function: cancels the timeout if query changes before 500ms
    return () => clearTimeout(handler);
  }, [queryPrams]); // run effect when query changes



  useEffect(() => {
    if (debouncedQuery) {

      fetchPosts();

    }
  }, [debouncedQuery]);








  // useEffect(() => {

  // 	fetchPosts();
  // }, [queryPrams]);


  function onChangeQueryPrams(queryPrams) {
    if (queryPrams) {
      setqueryPrams(queryPrams)
      //fetchPosts();
    }

  }

  function onRefreshRequest(rows) {
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();

  }, []);


  function callbackActions(entry, columnIndex) {


    var orderItems = entry?.order_items



    return (
      <td data-label="Actions" className="text-sm"
        key={columnIndex}>
        <div className="sm:flex gap-2 justify-end sm:pr-5 text-sm">














        </div>

      </td>

    );
  }


  function callbackTitle(entry, columnIndex) {




    return (
      <td className="text-center pl-5 py-3"
        key={`title-${entry?.id}`}>

        <div className="flex gap-2 items-center">

          <div className="flex items-center gap-2">



            <div className="w-18 h-18 overflow-hidden border" >
              {entry?.src && (
                <Image unoptimized className="w-full" src={entry?.src} width={100} height={100} alt={``} />

              )}
            </div>

          </div>

          <div className="text-left flex flex-col gap-2 flex-wrap flex-1 group ">
            <div className="text-left text-sm text-gray-600 font-medium " >
              {entry?.title}

            </div>

            <div className="flex gap-3 text-xs text-gray-500 ">

              <div>#{entry?.id}</div>
              {entry?.status === "draft" && (
                <div className="font-bold text-gray-500"> Draft</div>
              )}
              {entry?.status === "pending" && (
                <div className="font-bold text-gray-500"> Pending</div>
              )}


              {/* <div className=" ">{entry?.sku}</div> */}




            </div>
          </div>
        </div>
      </td>

    );
  }






  var orderStatusPrams = {
    draft: { label: 'Draft', value: 'draft' },
    pending: { label: 'Pending', value: 'pending' },
    publish: { label: 'Publish', value: 'publish' },
    hold: { label: 'Hold', value: 'hold' }
  }
  var stockStatusOptions = {
    instock: { label: 'In Stock', value: 'instock' },
    outofstock: { label: 'Out of Stock', value: 'outofstock' }
  }






  function onFilterByStatus(args) {

    setqueryPrams({ ...queryPrams, status: args?.value, paged: 1 })
  }
  function onFilterByStockStatus(args) {

    setqueryPrams({ ...queryPrams, stock_status: args?.value, paged: 1 })
  }






  const handleRowSelection = (entryId, shiftKey) => {
    var selectedRowsX = [...selectedRows];

    if (shiftKey && lastCheckedId !== null) {
      const currentIndex = productsData.posts.findIndex(
        (entry) => entry.id === entryId
      );
      const lastIndex = productsData.posts.findIndex(
        (entry) => entry.id === lastCheckedId
      );
      const [start, end] = [
        Math.min(currentIndex, lastIndex),
        Math.max(currentIndex, lastIndex),
      ];

      // Clear previous selections
      selectedRowsX = [];

      // Select all items in range
      productsData.posts.slice(start, end + 1).forEach((entry) => {
        selectedRowsX.push(entry.id);
      });
    } else {
      const index = selectedRowsX.indexOf(entryId);
      if (index !== -1) {
        selectedRowsX.splice(index, 1);
      } else {
        selectedRowsX.push(entryId);
      }
    }

    setLastCheckedId(entryId);
    setselectedRows(selectedRowsX);
  };





  function callbackActions(entry, columnIndex) {


    var orderItems = entry?.order_items

    return (
      <td data-label="Actions" className="text-sm px-5!"
        key={columnIndex}>
        <div className="sm:flex flex-wrap justify-end sm:pr-5 text-sm">



          <PopoverButton wrapperClass={`bg-white flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical />} title={"Actions"} position={"bottomRight"} buttonClass={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}>

            <div className="p-3 w-[400px]">

              <div className="flex gap-2 mb-3">
                <div className="flex w-fit items-center gap-2 flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer" onClick={() => {

                  if (confirm("Please confirm?")) {
                    duplicate_order(entry.id);
                  }
                }}>
                  <IconCopy size={16} /> Duplicate
                </div>
                <Link className=" flex w-fit items-center gap-2 flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer" href={`/orders/${entry.id}`}>
                  <IconEyeShare size={16} /> View
                </Link>
                <div className=" flex w-fit items-center gap-2 flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 cursor-pointer" onClick={() => {
                  if (confirm("Please confirm?")) {
                    delete_orders([entry.id]);
                  }


                }}>
                  <IconTrash size={16} /> Delete
                </div>


              </div>





            </div>

          </PopoverButton>


        </div>

      </td>

    );
  }








  return (
    <div className="page-shell">

      {/* Page heading: this screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Media Library")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {productsData?.total ?? 0} {("files")}
          </p>
        </div>
      </div>

      <div className="flex justify-between  ">

        <div className="flex flex-wrap gap-3  ">


          <PopoverButton wrapperClass={`bg-gray-200`} buttonLabel={<IconUpload size={18} />} buttonIcon={`Upload Media`} title={"Upload"} position={""}>

            <div className="p-5 bg-gray-50">

              <UploadMedia onUploadComplete={(media) => {

                fetchPosts();
              }} />

            </div>
          </PopoverButton>

          <div className="flex gap-2">
            <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max" onClick={ev => {
              setviewType('grid')
            }}>
              <IconLayoutGrid size={18} />
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max" onClick={ev => {
              setviewType('list')
            }}>
              <IconList size={18} />
            </div>
          </div>

        </div>




        <div className="flex gap-3 items-center justify-end ">
          {selectedRows.length > 0 && (

            <>

              <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max" onClick={() => {
                setselectedRows([]);
                setLastCheckedId(null);
              }}>
                Reset Selection
              </div>

              <div
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
                onClick={() => {
                  delete_medias();
                }}>
                {("Delete Medias")}
              </div>
            </>


          )}






        </div>
      </div>



      {viewType == 'grid' && (
        <div>

          {productsData && productsData?.posts && productsData?.posts?.length > 0 && (

            <div className="grid lg:grid-cols-8 md:grid-cols-3 grid-cols-2 gap-5">


              {productsData?.posts?.map((entry, index) => {


                return (
                  <div key={index} className={`overflow-hidden rounded-xl border p-2 transition-colors ${selectedRows.includes(entry?.id) ? "border-[#634FE5] bg-[#634FE5]/10" : "border-gray-200 bg-white hover:border-gray-300"} relative group`} >

                    <div className={`absolute top-2 -left-20 group-hover:left-2 inline-flex items-center justify-center rounded-lg bg-white p-1 text-gray-500 shadow-sm ring-1 ring-gray-200 transition-all ${selectedRows.includes(entry?.id) ? "left-2 text-[#634FE5]" : ""}  cursor-pointer z-10`}
                      onClick={ev => {

                        selectedRows.includes(entry?.id) ? setselectedRows(selectedRows.filter(id => id != entry?.id)) : setselectedRows([...selectedRows, entry?.id])

                        handleRowSelection(entry?.id, ev.shiftKey)

                      }}
                    >

                      {selectedRows.includes(entry?.id) ? (<IconSquareCheckFilled />) : (<IconSquareCheck />)}

                    </div>
                    <Image unoptimized className="w-full" src={entry?.src} width={100} height={100} alt={``} />

                  </div>
                )
              })}


            </div>

          )}

        </div>
      )}
      {viewType == 'list' && (
        <EntriesTable
          queryPrams={queryPrams}
          columns={columns}
          entries={productsData}
          itemPath={""}
          onChange={onChangeQueryPrams}
          loading={loading}
          selectedRows={selectedRows}
          onSelectRows={onSelectRows}
          onRefreshRequest={onRefreshRequest}

        />
      )}


    </div>
  );
};

export default MediaLibrary;