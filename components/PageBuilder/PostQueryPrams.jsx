"use client";
import { useState, useEffect, Component } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";




import DropDown from "../../components/DropDown";
import TaxQuery from "../../components/TaxQuery";
import tailwindClass from './tailwindClass';
import { useCounterStore } from '../../store/useCounterStore';



const PostQueryPrams = (props) => {

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  const { token, } = useCounterStore()


  var onChangeQuery = props.onChangeQuery

  var [queryPrams, setqueryPrams] = useState(props.queryPrams ?? {});
  var [postTypes, setpostTypes] = useState([]);


  useEffect(() => {


    onChangeQuery(queryPrams)

  }, [queryPrams]);
  useEffect(() => {

    get_post_types()

  }, []);

  function get_post_types() {




    // if (!token) {
    // 	//throw new Error("No token found");
    // }





    var postData = JSON.stringify({});

    fetch(serverUrl + "wp-json/combo-store/v2/get_post_types", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {

            var types = []

            Object.entries(res).map(args => {

              types.push({ value: args[0], label: args[1] })

            })



            setpostTypes(types)


            // setloading(false);



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }



  const queryArgs = {
    post_type: {
      value: ["post"],
      multiple: true,
      id: "post_type",
      label: "Post types",
      description: "Select Post Types to Query",
    },
    // categories: {
    //   value: [],
    //   multiple: true,
    //   id: "categories",
    //   label: "Categories",
    //   description: "Select categories to Query",
    // },


    // s: {
    //   value: "",
    //   multiple: false,
    //   id: "s",
    //   label: "Keyword",
    //   description: "Search keyword, ex: hello",
    // },
    // postStatus: {
    //   value: [],


    //   multiple: false,
    //   id: "postStatus",
    //   label: "Post status",
    //   description: "Query post by post status",
    // },
    order: {
      value: "",
      multiple: false,
      id: "order",
      label: "Order",
      description: "Post query order",
    },
    orderby: {
      value: [],
      val: [],

      multiple: false,
      id: "orderby",
      label: "Orderby",
      description: "Post query orderby",
    },


    // metaKey: {
    //   value: "",
    //   multiple: false,
    //   id: "metaKey",
    //   label: "Meta fields key",
    //   description: "Post query by meta fields key",
    // },
    // // Category Parameters
    // cat: {
    //   value: "",
    //   multiple: false,
    //   id: "cat",
    //   label: "Category ID",
    //   description: "Post query by Category ID",
    // },
    // categoryName: {
    //   value: "",
    //   multiple: false,
    //   id: "categoryName",
    //   label: "Category Name",
    //   description: "Post query by Category Name",
    // },
    // categoryAnd: {
    //   value: [],


    //   multiple: false,
    //   id: "categoryAnd",
    //   label: "Category And",
    //   description: "Post query by Category IDs",
    //   isPro: true,
    // },
    // categoryIn: {
    //   value: [],


    //   multiple: false,
    //   id: "categoryIn",
    //   label: "Category In",
    //   description: "Post query by Category IDs",
    //   isPro: true,
    // },
    // categoryNotIn: {
    //   value: [],


    //   multiple: false,
    //   id: "categoryNotIn",
    //   label: "Category Not In",
    //   description: "Post query by excluded Category IDs",
    //   isPro: true,
    // },
    // // Tag Parameters
    // tag: {
    //   val: "",
    //   multiple: false,
    //   id: "tag",
    //   label: "Tags",
    //   description: "Post query by Tag slug",
    // },
    // tagId: {
    //   val: "",
    //   multiple: false,
    //   id: "tagId",
    //   label: "Tag Id",
    //   description: "Post query by Tag ID",
    // },
    // tagAnd: {

    //   multiple: false,
    //   id: "tagAnd",
    //   label: "Tag And",
    //   description: "Post query by Tag Ids",
    //   isPro: true,
    // },
    // tagIn: {

    //   multiple: false,
    //   id: "tagIn",
    //   label: "Tag In",
    //   description: "Post query by Tag ids",
    //   isPro: true,
    // },
    // tagNotIn: {

    //   multiple: false,
    //   id: "tagNotIn",
    //   label: "Tag Not In",
    //   description: "Post query by excluded Tag ids",
    // },
    // tagSlugAnd: {

    //   multiple: false,
    //   id: "tagSlugAnd",
    //   label: "Tag Slug And",
    //   description: "Post query by Tags slug",
    //   isPro: true,
    // },
    // tagSlugIn: {

    //   multiple: false,
    //   id: "tagSlugIn",
    //   label: "Tag Slug In",
    //   description: "Post query by excluded Tags slug",
    //   isPro: true,
    // },
    taxQuery: {
      value: [],
      multiple: false,
      id: "taxQuery",
      label: "Tax Query",
      description: "Taxonomies query arguments",
      isPro: true,
    },
    // taxQueryRelation: {
    //   val: "OR",
    //   multiple: false,
    //   id: "taxQueryRelation",
    //   label: "Tax Query Relation",
    //   description: "Taxonomies query relation",
    // },
    // // // Date Parameters
    // dateQuery: {
    //   value: [],


    //   multiple: false,
    //   id: "dateQuery",
    //   label: "Date Query",
    //   description: "Post query by date",
    //   isPro: true,
    // },
    // year: {
    //   val: "",
    //   multiple: false,
    //   id: "year",
    //   label: "Year",
    //   description: "Post query by year",
    // },
    // monthnum: {
    //   val: "",
    //   multiple: false,
    //   id: "monthnum",
    //   label: "Month",
    //   description: "Post query by month",
    // },
    // w: {
    //   val: "",
    //   multiple: false,
    //   id: "w",
    //   label: "Week",
    //   description: "Post query by week",
    // },
    // day: {
    //   val: "",
    //   multiple: false,
    //   id: "day",
    //   label: "Day",
    //   description: "Post query by day",
    // },
    // hour: {
    //   val: "",
    //   multiple: false,
    //   id: "hour",
    //   label: "Hour",
    //   description: "Post query by hour",
    // },
    // minute: {
    //   val: "",
    //   multiple: false,
    //   id: "minute",
    //   label: "Miniute",
    //   description: "Post query by miniute",
    // },
    // second: {
    //   val: "",
    //   multiple: false,
    //   id: "second",
    //   label: "Second",
    //   description: "Post query by second",
    // },
    // m: {
    //   val: "",
    //   multiple: false,
    //   id: "m",
    //   label: "Month",
    //   description: "Post query by month",
    // },
    // // // Author Parameters
    // author: {
    //   val: "",
    //   multiple: false,
    //   id: "author",
    //   label: "Author",
    //   description: "Post query by Author ID",
    // },
    // authorName: {
    //   val: "",
    //   multiple: false,
    //   id: "authorName",
    //   label: "Author Name",
    //   description: "Post query by Author Name",
    // },
    // authorIn: {

    //   multiple: false,
    //   id: "authorIn",
    //   label: "Author In",
    //   description: "Post query by Author IDs",
    //   isPro: true,
    // },
    // authorNotIn: {

    //   multiple: false,
    //   id: "authorNotIn",
    //   label: "Author Not In",
    //   description: "Post query by exluded Author IDs",
    //   isPro: true,
    // },
    // p: {
    //   val: "",
    //   multiple: false,
    //   id: "p",
    //   label: "Post id",
    //   description: "Post query by single post id",
    // },
    // name: {
    //   val: "",
    //   multiple: false,
    //   id: "name",
    //   label: "Name",
    //   description: "Post query by post slug",
    // },
    // pageId: {
    //   val: "",
    //   multiple: false,
    //   id: "pageId",
    //   label: "Page Id",
    //   description: "Post query by single page id",
    // },
    // pagename: {
    //   val: "",
    //   multiple: false,
    //   id: "pagename",
    //   label: "Page name",
    //   description: "Post query by page slug",
    // },
    // postParent: {
    //   val: "",
    //   multiple: false,
    //   id: "postParent",
    //   label: "Post Parent",
    //   description: "Add {ID} to Post query by post parent id",
    //   isPro: true,
    // },
    // postParentIn: {

    //   multiple: false,
    //   id: "postParentIn",
    //   label: "Post Parent In",
    //   description: "Post query by post parent ids",
    //   isPro: true,
    // },
    // postParentNotIn: {

    //   multiple: false,
    //   id: "postParentNotIn",
    //   label: "Post Parent Not In",
    //   description: "Post query by excluded post parent ids",
    // },
    // postIn: {

    //   multiple: false,
    //   id: "postIn",
    //   label: "Post In",
    //   description: "Post query by multiple post ids, comma separated.",
    //   isPro: true,
    // },
    // postNotIn: {

    //   multiple: false,
    //   id: "postNotIn",
    //   label: "Post Not In",
    //   description: "Post query by excluded post ids",
    //   isPro: true,
    // },
    // postNameIn: {
    //   val: [{ slug: "" }],
    //   multiple: false,
    //   id: "postNameIn",
    //   label: "Post Name In",
    //   description: "Post query by post slugs",
    //   isPro: true,
    // },
    // hasPassword: {
    //   val: "",
    //   multiple: false,
    //   id: "hasPassword",
    //   label: "Has Password",
    //   description: "Post query for posts with passwords",
    // },
    // postPassword: {
    //   val: "",
    //   multiple: false,
    //   id: "postPassword",
    //   label: "Post Password",
    //   description: "Post query for posts with particular passwords",
    //   isPro: true,
    // },
    // commentCount: {
    //   val: { compare: "=", value: 10 },
    //   multiple: false,
    //   id: "commentCount",
    //   label: "Comment Count",
    //   description: "Post query by comment count",
    // },
    // nopaging: {
    //   val: "",
    //   multiple: false,
    //   id: "nopaging",
    //   label: "No Paging",
    //   description: "Enable show all posts or use pagination",
    // },
    posts_per_page: {
      val: 10,
      multiple: false,
      id: "posts_per_page",
      label: "Posts Per Page",
      description: "Number of post to show per page",
    },
    paged: {
      val: "",
      multiple: false,
      id: "paged",
      label: "Paged",
      description: "Pagination start with",
    },
    offset: {
      val: "",
      multiple: false,
      id: "offset",
      label: "Offset",
      description: "Number of post to displace or pass over",
    },
    // postsPerArchivePage: {
    //   val: "",
    //   multiple: false,
    //   id: "postsPerArchivePage",
    //   label: "Posts Per Archive Page",
    //   description: "",
    // },
    // ignoreStickyPosts: {
    //   val: "",
    //   multiple: false,
    //   id: "ignoreStickyPosts",
    //   label: "Ignore Sticky Posts",
    //   description: "Ignore post from post query",
    //   isPro: true,
    // },
    // metaKey: {
    //   val: "",
    //   multiple: false,
    //   id: "metaKey",
    //   label: "Meta Key",
    //   description: "Post query by custom field key",
    // },
    // metaValue: {
    //   val: "",
    //   multiple: false,
    //   id: "metaValue",
    //   label: "Meta Value",
    //   description: "Post query by custom field value",
    // },
    // metaValueNum: {
    //   val: "",
    //   multiple: false,
    //   id: "metaValueNum",
    //   label: "Meta Value Num",
    //   description: "Post query by custom field value for number types",
    // },
    // metaCompare: {
    //   val: "",
    //   multiple: false,
    //   id: "metaCompare",
    //   label: "Meta Compare",
    //   description: "Meta query compare",
    // },
    // metaQuery: {
    //   value: [],


    //   multiple: false,
    //   id: "metaQuery",
    //   label: "Meta Query",
    //   description: "Advance meta fields query",
    //   isPro: true,
    // },
    // perm: {
    //   val: "readable",
    //   multiple: false,
    //   id: "perm",
    //   label: "Perm",
    //   description: "User permission parameter",
    // },
    // postMimeType: {

    //   multiple: false,
    //   id: "postMimeType",
    //   label: "Post Mime Type",
    //   description: "Post query by allwed post mime types",
    // },
    // cacheResults: {
    //   val: false,
    //   multiple: false,
    //   id: "cacheResults",
    //   label: "Cache Results",
    //   description: "Enable Post information cache",
    // },
    // updatePostMetaCache: {
    //   val: false,
    //   multiple: false,
    //   id: "updatePostMetaCache",
    //   label: "Update Post Meta Cache",
    //   description: "Enable Post meta information cache",
    // },
    // updatePostTermCache: {
    //   val: false,
    //   multiple: false,
    //   id: "updatePostTermCache",
    //   label: "Update Post Term Cache",
    //   description: "Enable Post term information cache",
    // },
  };











  return (
    <div className="">



      <div className="flex justify-between items-center gap-2">
        <label htmlFor="" className="text-xs font-medium text-gray-600">Query Prams</label>
        <div>
          <DropDown allowReset={true} multiple={false} value={''} position="right" options={queryArgs} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {
            //setorderData({ ...orderData, payment_status: args?.value })


            var queryPramsX = { ...queryPrams }

            queryPramsX[args.id] = args?.value


            setqueryPrams(queryPramsX)




          }} />
        </div>
      </div>




      <div className="flex flex-col gap-4 text-xs my-5">

        {Object.entries(queryPrams)?.map((args, index) => {



          const [key, value] = args;


          return <div key={index} className="flex flex-col gap-2">



            {(key == 'posts_per_page') && (
              <div className="flex justify-between items-center">
                <div>{queryArgs[key]?.label}</div>
                <input type="number" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={value} onChange={ev => {
                  const { name, value } = ev.target;



                  var queryPramsX = { ...queryPrams }

                  queryPramsX[key] = value



                  setqueryPrams(queryPramsX)


                }} />
              </div>
            )}
            {(key == 'paged') && (

              <div className="flex justify-between items-center">
                <div>{queryArgs[key]?.label}</div>
                {/* <input type="checkbox" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" checked={value} /> */}

                <div className="cursor-pointer " onClick={ev => {




                  var queryPramsX = { ...queryPrams }

                  queryPramsX[key] = !value



                  setqueryPrams(queryPramsX)

                }}>
                  {value ? <IconCheckbox /> : <IconSquare />}
                </div>

              </div>
            )}

            {(key == 'order') && (

              <div className="flex justify-between items-center">
                <div>{queryArgs[key]?.label}</div>

                <select name="" id="" className="bg-white" onChange={ev => {
                  const { name, value } = ev.target;


                  var queryPramsX = { ...queryPrams }


                  queryPramsX[key] = value



                  setqueryPrams(queryPramsX)


                }}>
                  <option value="ASC">ASC</option>
                  <option value="DESC">DESC</option>
                </select>



              </div>
            )}
            {(key == 'post_type') && (

              <div className="flex justify-between ">
                <div>{queryArgs[key]?.label}</div>

                <div className="flex flex-col gap-3 items-end ">
                  <DropDown allowReset={true} multiple={false} value={''} position="right" options={postTypes} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {
                    //setorderData({ ...orderData, payment_status: args?.value })


                    var queryPramsX = { ...queryPrams }

                    var postTypes = queryPramsX?.post_type ?? []

                    postTypes.push(args?.value)

                    queryPramsX[key] = postTypes



                    setqueryPrams(queryPramsX)




                  }} />

                  <div className="flex gap-2 ">

                    {queryPrams?.post_type?.map((item, index) => {

                      return (

                        <div key={index} className="bg-white  flex gap-2 items-center rounded-sm">

                          <div className="px-2"> {item}</div>

                          <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {

                            var queryPramsX = { ...queryPrams }

                            var postTypes = queryPramsX?.post_type ?? []

                            postTypes.splice(index, 1)

                            queryPramsX[key] = postTypes



                            setqueryPrams(queryPramsX)

                          }}><IconX /></div>

                        </div>

                      )

                    })}

                  </div>
                </div>

                {/* 
                <select name="" multiple="multiple" id="" className="bg-white" onChange={ev => {
                  const { name, value } = ev.target;



                  var queryPramsX = { ...queryPrams }


                  queryPramsX[key] = value



                  setqueryPrams(queryPramsX)


                }}>
                  <option value="post">Post</option>
                  <option value="product">Product</option>
                </select> */}



              </div>
            )}
            {(key == 'taxQuery') && (

              <div className="flex flex-col gap-3  ">
                <div>{queryArgs[key]?.label}</div>

                <div className="flex flex-col gap-3  ">
                  <TaxQuery postTypes={queryPrams.post_type} allowReset={true} taxQuery={queryPrams?.taxQuery ?? []} position="right" labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onChange={(args) => {





                    var queryPramsX = { ...queryPrams }
                    queryPramsX[key] = args



                    setqueryPrams(queryPramsX)




                  }} />


                </div>

                {/* 
                <select name="" multiple="multiple" id="" className="bg-white" onChange={ev => {
                  const { name, value } = ev.target;



                  var queryPramsX = { ...queryPrams }


                  queryPramsX[key] = value



                  setqueryPrams(queryPramsX)


                }}>
                  <option value="post">Post</option>
                  <option value="product">Product</option>
                </select> */}



              </div>
            )}




            {
              (key == 'orderby') && (

                <div className="flex justify-between items-center">
                  <div>{queryArgs[key]?.label}</div>

                  <select name="" id="" className="bg-white" onChange={ev => {
                    const { name, value } = ev.target;


                    var queryPramsX = { ...queryPrams }


                    queryPramsX[key] = value



                    setqueryPrams(queryPramsX)


                  }}>
                    <option value="date">Date</option>
                    <option value="rand">Random</option>
                  </select>



                </div>
              )}






          </div>

        })}

      </div>


    </div >
  );
};

export default PostQueryPrams;