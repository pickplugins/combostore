"use client";
import { useState, useEffect, Component } from "react";
import { IconArrowLeft, IconX, IconAlertSquare, IconCheck } from '@tabler/icons-react';
import ToggleContent from './ToggleContent';
import TaxTermsQuery from './TaxTermsQuery';
import DropDown from "./DropDown";



import { useCounterStore } from '../store/useCounterStore'




const TaxQuery = (props) => {

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  var onChange = props.onChange
  var postTypes = props.postTypes
  var label = props.label
  var labelClass = props.labelClass
  var onOptionsChoose = props.onOptionsChoose
  var allowReset = props.allowReset
  var [toggled, setToggled] = useState(false);
  var options = props.options;
  var [optionsFiltered, setOptionsFiltered] = useState([]);
  var [taxQuery, settaxQuery] = useState(props.taxQuery);
  var [taxonomies, settaxonomies] = useState({});





  useEffect(() => {

    get_post_taxonomies()


  }, []);
  useEffect(() => {

    settaxQuery(props.taxQuery)


  }, [props.taxQuery]);





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


  const GroupTitle = ({ item, itemIndex }) => {
    var title = item.title.length == 0 ? 'Group' : item.title

    return (

      <div className="flex flex-1 justify-between items-center">
        <div className="text-xs">{`${title} #${itemIndex}`}</div>
        <div className="bg-red-400 rounded-sm" onClick={ev => {

          ev.preventDefault();
          ev.stopPropagation();


          var taxQueryX = [...taxQuery]

          taxQueryX.splice(itemIndex, 1)


          onChange(taxQueryX)


        }}><IconX /></div>
      </div>

    )

  }









  return (
    <div className="">



      <div>
        <div className="flex flex-col gap-3">
          <div
            className="bg-gray-500 p-1 px-2 cursor-pointer rounded-sm text-white w-fit text-sm"
            onClick={(_ev) => {

              var taxQueryX = [...taxQuery]

              taxQueryX.push({
                title: '',
                collections: [
                  { taxonomy: "", field: "", terms: [], operator: "" },
                ],
                relation: "OR",
              });




              onChange(taxQueryX)

            }}>
            {("Add")}
          </div>


          <div className="flex flex-col gap-1">

            {taxQuery?.map((item, itemIndex) => {


              var collections = item.collections


              return (
                <div>
                  <ToggleContent title={<GroupTitle item={item} itemIndex={itemIndex} />} contentClass=" p-2" initialOpen={false}>

                    <div className="flex flex-col gap-3">

                      <div className="flex justify-between items-center">
                        <div>Terms Relation</div>



                        <DropDown allowReset={false} multiple={false} value={item?.relation} position="right" options={{
                          '': {
                            label: ("Choose..."),
                            value: "",
                          },
                          OR: { label: "OR", value: "OR" },
                          AND: { label: "AND", value: "AND" },
                        }} label={`Choose`} labelClass={'!border-2 px-2 py-1 rounded-sm w-fit focus:outline-none  border-solid !border-gray-600 !shadow-none bg-gray-300 cursor-pointer'} onOptionsChoose={(args) => {


                          var value = args.value

                          var taxQueryX = [...taxQuery]

                          taxQueryX[itemIndex].relation = value

                          onChange(taxQueryX)


                        }} />






                      </div>
                      {collections?.map((collection, collectionIndex) => {
                        return (
                          <div className="flex flex-col gap-3 bg-white p-2 py-3 rounded-sm">

                            <div className="flex justify-between">
                              <div>Taxonomy</div>





                              <DropDown allowReset={false} multiple={false} value={collection?.taxonomy} position="right" options={taxonomies} label={`Choose`} labelClass={'!border-2 px-2 py-1 rounded-sm w-fit focus:outline-none  border-solid !border-gray-600 !shadow-none bg-gray-300 cursor-pointer'} onOptionsChoose={(args) => {



                                var value = args.value

                                var taxQueryX = [...taxQuery]

                                taxQueryX[itemIndex].collections[collectionIndex].taxonomy = value



                                onChange(taxQueryX)


                              }} />













                            </div>

                            <div className="flex justify-between">
                              <div>Field</div>
                              <div>

                                <DropDown allowReset={false} multiple={false} value={collection?.field} position="right" options={{
                                  '': {
                                    label: ("Choose..."),
                                    value: "",
                                  },
                                  term_id: { label: "Term ID", value: "term_id" },
                                  name: { label: "Name", value: "name" },
                                  slug: { label: "Slug", value: "slug" },
                                  term_taxonomy_id: {
                                    label: "Term taxonomy id", value: "term_taxonomy_id",
                                  },
                                }} label={`Choose`} labelClass={'!border-2 px-2 py-1 rounded-sm w-fit focus:outline-none  border-solid !border-gray-600 !shadow-none bg-gray-300 cursor-pointer'} onOptionsChoose={(args) => {

                                  var value = args?.value

                                  var taxQueryX = [...taxQuery]

                                  taxQueryX[itemIndex].collections[collectionIndex].field = value

                                  onChange(taxQueryX)

                                }} />





                                {/* <select
                              style={{ margin: 0 }}
                              label="Fields"
                              value={collection.field}
                              
                              onChange={(newVal) => {

                                var term = item.value[j].terms[k];
                                term.field = newVal;
                                taxQuery[index].val = item.value;

                              }}
                            /> */}
                              </div>


                            </div>
                            <div className="flex justify-between">
                              <div>Operator</div>
                              <div>

                                <DropDown allowReset={false} value={collection?.operator} position="right" options={{
                                  '': {
                                    label: ("Choose..."),
                                    value: "",
                                  },
                                  IN: { label: "IN", value: "IN" },
                                  'NOT IN': { label: "NOT IN", value: "NOT IN" },
                                  AND: { label: "AND", value: "AND" },
                                  EXISTS: { label: "EXISTS", value: "EXISTS" },
                                  'NOT EXISTS': {
                                    label: "NOT EXISTS",
                                    value: "NOT EXISTS",
                                  },
                                }} label={`Choose`} labelClass={'!border-2 px-2 py-1 rounded-sm w-fit focus:outline-none  border-solid !border-gray-600 !shadow-none bg-gray-300 cursor-pointer'} onOptionsChoose={(args) => {


                                  var value = args?.value
                                  var taxQueryX = [...taxQuery]
                                  taxQueryX[itemIndex].collections[collectionIndex].operator = value

                                  onChange(taxQueryX)


                                }} />



                                {/* 
                            <select
                              style={{ margin: 0 }}
                              label="Operator"
                              value={collection.operator}
                              options={[
                                {
                                  label: ("Choose..."),
                                  value: "",
                                },
                                { label: "IN", value: "IN" },
                                { label: "NOT IN", value: "NOT IN" },
                                { label: "AND", value: "AND" },
                                { label: "EXISTS", value: "EXISTS" },
                                {
                                  label: "NOT EXISTS",
                                  value: "NOT EXISTS",
                                },
                              ]}
                              onChange={(newVal) => {

                                var term = item.value[j].terms[k];
                                term.operator = newVal;
                                items[index].val = item.value;

                              }}
                            /> */}
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <div>Terms</div>
                              <div>

                                {collection?.taxonomy && (

                                  <TaxTermsQuery taxonomy={collection?.taxonomy} value={collection?.terms} label="Choose" allowSearch={true} position="right" labelClass={'!border-2 px-2 py-1 rounded-sm w-fit focus:outline-none  border-solid !border-gray-600 !shadow-none bg-gray-300 cursor-pointer'} onChange={(args) => {


                                    var taxQueryX = [...taxQuery]
                                    taxQueryX[itemIndex].collections[collectionIndex].terms = args

                                    onChange(taxQueryX)



                                  }} />
                                )}



                              </div>
                            </div>

                            <div className="flex">
                              <div className="bg-red-400 p-1 px-2 cursor-pointer rounded-sm text-white w-fit text-sm" onClick={ev => {


                                var taxQueryX = [...taxQuery]

                                taxQueryX[itemIndex].collections.splice(collectionIndex, 1)

                                onChange(taxQueryX)

                              }}>Remove</div>

                            </div>


                          </div>
                        );
                      })}
                      <div className="flex gap-3 ">
                        <div
                          className="bg-gray-500 p-1 px-2 cursor-pointer rounded-sm text-white w-fit text-sm"
                          onClick={(_ev) => {


                            var taxQueryX = [...taxQuery]

                            taxQueryX[itemIndex].collections.push({
                              taxonomy: "",
                              field: "",
                              terms: [],
                              operator: "",
                            })

                            onChange(taxQueryX)





                          }}>
                          {("Add")}
                        </div>

                      </div>

                    </div>
                  </ToggleContent>
                </div>
              );
            })}
          </div>
        </div>
      </div>








    </div>
  );
};

export default TaxQuery;