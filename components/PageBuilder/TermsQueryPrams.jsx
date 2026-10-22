"use client";
import { useState, useEffect, Component } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";




import DropDown from "../../components/DropDown";
import TaxQuery from "../../components/TaxQuery";
import tailwindClass from './tailwindClass';
import { useCounterStore } from '../../store/useCounterStore';
import TaxTermsQuery from '../../components/TaxTermsQuery';



const TermsQueryPrams = (props) => {

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  const { token, } = useCounterStore()


  var onChangeQuery = props.onChangeQuery

  var [queryPrams, setqueryPrams] = useState(props.queryPrams ?? {});
  var [taxonomies, settaxonomies] = useState({});
  var [keyword, setkeyword] = useState('');
  var [terms, setterms] = useState([]);


  useEffect(() => {


    onChangeQuery(queryPrams)

  }, [queryPrams]);


  useEffect(() => {

    get_post_taxonomies()

  }, []);



  function get_post_taxonomies() {





    var postData = JSON.stringify({});

    fetch(serverUrl + "wp-json/combo-store/v2/get_post_type_objects", {
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




            var taxs = {}

            res.map(item => {


              taxs[item.id] = { label: item.label, value: item.id }
            })


            settaxonomies(res)



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }



  function get_tax_terms() {





    var postData = JSON.stringify({ keyword: keyword, taxonomy: queryPrams?.taxonomy, per_page: 20 });



    fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
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


            var termsX = res?.terms ?? []


            var termsList = []


            termsList.push({ label: `Top Terms`, value: 0, id: 0 })


            termsX?.map(term => {

              termsList.push({ label: `${term.name}(${term.count})`, value: term.slug, id: term?.term_id })

            })



            setterms(termsList)

            // var taxs = {}

            // res.map(item => {


            //   taxs[item.id] = { label: item.label, value: item.id }
            // })


            //settaxonomies(res)



          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });

  }



  useEffect(() => {


    if (keyword.length == 0) {
      get_tax_terms();
    }

    if (keyword.length > 2) {
      get_tax_terms();
    }


  }, [keyword, queryPrams.taxonomy]);




  const queryArgs = {
    taxonomy: {
      value: '',
      multiple: true,
      id: "taxonomy",
      label: "Taxonomy",
      description: "Select Taxonomy to Query",
    },

    order: {
      value: "",
      multiple: false,
      id: "order",
      label: "Order",
      description: "Post query order",
    },
    orderby: {
      value: [],
      multiple: false,
      id: "orderby",
      label: "Orderby",
      description: "Post query orderby",
    },
    slug: {
      value: [],
      multiple: false,
      id: "slug",
      label: "Slug",
      description: "Slug",
    },
    hide_empty: {
      value: false,
      multiple: false,
      id: "hide_empty",
      label: "Hide Empty",
      description: "Post query orderby",
    },
    parent: {
      value: false,
      multiple: false,
      id: "parent",
      label: "Parent",
      description: "Parent terms",
    },
    top_lavel: {
      value: false,
      multiple: false,
      id: "top_lavel",
      label: "Top lavel Only",
      description: "Top lavel terms",
    },


    search: {
      value: '',
      multiple: false,
      id: "search",
      label: "Search",
      description: "Search by keyword",
    },
    number: {
      value: 10,
      multiple: false,
      id: "number",
      label: "Posts Per Page",
      description: "Number of post to show per page",
    },
    hierarchical: {
      value: false,
      multiple: false,
      id: "hierarchical",
      label: "hierarchical",
      description: "hierarchical query?",
    },

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



            {
              (key == 'number')

              && (
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
            {
              (key == 'paged'
              )


              && (

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
            {
              (key == 'hide_empty'
              )


              && (

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
            {
              (key == 'hierarchical'
              )


              && (

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




            {
              (key == 'parent'
              )


              && (

                <div className="flex justify-between items-center">
                  <div>{queryArgs[key]?.label}</div>
                  {/* <input type="checkbox" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" checked={value} /> */}


                  <DropDown allowReset={false} allowSearch={true} multiple={false} value={value} position="right" options={terms} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


                    var queryPramsX = { ...queryPrams }


                    queryPramsX[key] = args?.value



                    setqueryPrams(queryPramsX)


                  }} />





                </div>
              )}
            {
              (key == 'slug'
              )


              && (

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">

                    <div>{queryArgs[key]?.label}</div>
                    {/* <input type="checkbox" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" checked={value} /> */}


                    <TaxTermsQuery taxonomy={queryPrams?.taxonomy} value={queryPrams?.slug} label="Choose" allowSearch={true} position="right" labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onChange={(args) => {


                      var queryPramsX = { ...queryPrams }

                      queryPramsX[key] = args

                      setqueryPrams(queryPramsX)



                    }} />


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

            {(key == 'taxonomy') && (

              <div className="flex justify-between gap-3  ">
                <div>{queryArgs[key]?.label}</div>

                <div className="flex flex-col gap-3  ">


                  <DropDown allowReset={false} multiple={false} value={value} position="right" options={taxonomies} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


                    var queryPramsX = { ...queryPrams }


                    queryPramsX[key] = args?.value



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

export default TermsQueryPrams;