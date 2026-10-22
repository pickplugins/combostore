"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../components/EntriesTable";
import DropDown from "../../components/DropDown";
import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconCopy, IconEyeShare, IconDotsVertical, IconEdit, IconTrash, IconStarFilled, IconStar, IconFileDollar, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconZoomExclamationFilled, IconPlaylistX } from "@tabler/icons-react";
import PopoverButton from "../../components/PopoverButton";
import ProductEdit from "../../components/shop-elements/ProductEdit";
import ProductBulkUpdate from "../../components/shop-elements/ProductBulkUpdate";

import Image from "next/image";


const TopSellingProducts = (props) => {



  const { token, appData, notifications, addNotification, userDataX, setUserDataX, paymentGateways } = useCounterStore()



  var [queryPrams, setqueryPrams] = useState({ is_admin: true, min_stock: 5, category: "", tag: null, keyword: "", paged: 1, orderby: "date", order: "DESC", per_page: 20, price: "" });
  var [editProduct, seteditProduct] = useState({ id: null });




  var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });



  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  var [queryTerms, setqueryTerms] = useState({ taxonomy: 'product_cat', order: "DESC", per_page: 99, });
  var [querybrands, setquerybrands] = useState({ taxonomy: 'product_brand', order: "DESC", per_page: 99, });
  var [terms, setterms] = useState([]);
  var [brands, setbrands] = useState([]);



  function onSelectRows(rows) {
    setselectedRows(rows);
  }


  var columns = {
    check: { id: "check", label: ("Check"), },
    id: { id: "id", label: ("Product"), callback: callbackTitle, classes: "w-96  text-gray-600" },
    total_orders: { id: "total_orders", label: ("Total Orders"), callback: callbackTotalOrders, classes: "w-96  text-gray-600" },
    total_units_sold: { id: "total_units_sold", label: ("Total Units Sold"), callback: callbackTotalUnitsSold, classes: "w-96  text-gray-600" },
    // categories: { id: "categories", label: ("Categories"), callback: callbackCategories, classes: "text-left text-gray-600" },
    // brands: { id: "brands", label: ("Brands"), callback: callbackBrands, classes: "text-left text-gray-600" },
    // tags: { id: "tags", label: ("Tags"), callback: callbackTags, classes: "text-left" },
    // brands: { id: "Brands", label: ("Brands"), callback: callbackBrands, classes: "text-left" },
    // brands: { id:"brands",label: ("Brands"), callback: callbackBrands, classes: "text-left" },
    // sku: { id:"sku",label: ("SKU"), },
    // stock_count: { id: "stock_count", label: ("Stock"), callback: callbackStock, classes: "text-center text-gray-600" },
    // price: { id: "price", label: ("Price"), callback: callbackPrice, classes: "text-center text-gray-600" },
    // type: { id:"check",label: "Type", callback: callbackType },

    // refunded_total: { id:"check",label: "Refunded" },
    // visibility: { id: "visibility", label: ("Visibility"), callback: callbackVisibility },
    // status: { id: "status", label: ("Status"), callback: callbackStatus },
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


            var posts = res?.products;
            var total = res?.total;
            var max_pages = res?.max_pages;


            console.log(posts);


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


          <div className="text-left flex flex-col gap-2 flex-wrap flex-1 group ">
            <Link className="text-left text-sm text-gray-600 font-medium " href={`/products/${entry?.product_id}`}>



              {entry?.product_id && (

                <>{entry?.product_name}</>
              )}

              {entry?.product_id == 0 && (

                <>**Custom Product**</>
              )}


            </Link>

            <div className="flex gap-3 text-xs text-gray-500 ">

              <div>#{entry?.product_id}</div>
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


  function callbackTotalOrders(entry, columnIndex) {

    var type = entry.type;
    var sale_price = entry.sale_price;
    var regular_price = entry.regular_price;

    return (
      <td className=" pl-5"
        key={columnIndex}>
        <div className="flex gap-2 justify-center text-sm">

          {entry?.total_orders}



        </div>
      </td>

    );
  }
  function callbackTotalUnitsSold(entry, columnIndex) {

    var type = entry.type;
    var sale_price = entry.sale_price;
    var regular_price = entry.regular_price;

    return (
      <td className=" pl-5"
        key={columnIndex}>
        <div className="flex gap-2 justify-center text-sm">

          {entry?.total_units_sold}



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


  return (
    <div className="page-shell">

      {/* Page heading: this screen had no title, only a row of controls. */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{("Top Selling Products")}</h1>
          <p className="mt-0.5 text-xs text-gray-500">
            {productsData?.total ?? 0} {("products")}
          </p>
        </div>
      </div>

      <div className="flex justify-between  ">

        <div className="flex flex-wrap gap-3  ">

          <select name="" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full xl:w-56 rounded-lg px-3 py-2 text-sm" onChange={ev => {

            var value = ev.target.value;

            setqueryPrams({ ...queryPrams, category: value, paged: 1 });

          }}>
            <option value={""}>{("All Categories")}</option>

            {terms?.map(item => {

              var children = item?.children;

              if (children) {

                return (

                  <optgroup label={`${item.name}(${item.count})`} key={item.term_id}>
                    <option value={item.slug} key={item.slug}>
                      {item.name}({item.count})
                    </option>


                    {children?.map(childItem => {

                      return (
                        <option value={childItem.slug} key={childItem.term_id}>
                          {childItem.name}({childItem.count})
                        </option>

                      )
                    })}

                  </optgroup>


                )

              }
              if (!children) {
                return (
                  <option value={item.slug} key={item.term_id}>
                    {item.name}({item.count})
                  </option>
                )
              }




            })}

          </select>
          <select name="" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full xl:w-56 rounded-lg px-3 py-2 text-sm" onChange={ev => {

            var value = ev.target.value;

            setqueryPrams({ ...queryPrams, brand: value, paged: 1 });

          }}>
            <option value={""}>{("All Brands")}</option>

            {brands?.map(item => {

              var children = item?.children;

              if (children) {

                return (

                  <optgroup label={`${item.name}(${item.count})`} key={item.term_id}>
                    <option value={item.slug} key={item.slug}>
                      {item.name}({item.count})
                    </option>


                    {children?.map(childItem => {

                      return (
                        <option value={childItem.slug} key={childItem.term_id}>
                          {childItem.name}({childItem.count})
                        </option>

                      )
                    })}

                  </optgroup>


                )

              }
              if (!children) {
                return (
                  <option value={item.slug} key={item.term_id}>
                    {item.name}({item.count})
                  </option>
                )
              }




            })}

          </select>


          <input type="number" value={5} className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-20 rounded-lg px-3 py-2 text-sm" placeholder="Min Stock, ex: 5" onChange={ev => {

            var value = ev.target.value;

            setqueryPrams({ ...queryPrams, min_stock: value, paged: 1 });

          }} />




          <PopoverButton wrapperClass={`bg-white `} enableCloseBtn={false} buttonLabel={("Filter Products")} buttonIcon={<IconFileDollar />} title={"Filter Products"} position={"leftTop"}>

            <div className="p-4 w-[400px]">
              <div className="flex flex-col  gap-3 ">
                <div className="flex justify-between">
                  <div>Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.status} options={orderStatusPrams} label={`Choose Status`} onOptionsChoose={onFilterByStatus} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Stock Status</div>
                  <div>
                    <DropDown multiple={false} value={queryPrams?.stock_status} options={stockStatusOptions} label={`Choose Stock Status`} onOptionsChoose={onFilterByStockStatus} />
                  </div>
                </div>









              </div>
            </div>

          </PopoverButton>



        </div>




        <div className="flex gap-3 items-center justify-end ">
          {selectedRows.length > 0 && (
            <div
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
              onClick={() => {
                delete_products();
              }}>
              {("Delete Products")}
            </div>
          )}

          {selectedRows.length > 0 && (

            <PopoverButton buttonLabel={("Bulk Update")} buttonClass={`inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer`} buttonIcon={``} title={"Bulk Update"} position={""} popoverClass={`mx-auto w-3/4  fixed inset-x-0 top-10 h-[700px] overflow-y-auto z-[999] rounded-xl border border-gray-200 bg-white shadow-lg`} >

              <div className="p-5 bg-gray-50">

                <ProductBulkUpdate ids={selectedRows} />









              </div>

            </PopoverButton>
          )}




        </div>
      </div>



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
    </div>
  );
};

export default TopSellingProducts;