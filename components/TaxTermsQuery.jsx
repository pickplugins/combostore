"use client";
import { useState, useEffect, Component } from "react";
import { IconArrowLeft, IconX, IconAlertSquare, IconCheck } from '@tabler/icons-react';


const TaxTermsQuery = (props) => {

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  var taxonomy = props.taxonomy

  var multiple = props.multiple
  var allowSearch = props.allowSearch
  var position = props.position
  var label = props.label
  var labelClass = props.labelClass
  var onChange = props.onChange
  var onPick = props.onPick
  var allowReset = props.allowReset
  var [toggled, setToggled] = useState(false);
  var [keyword, setkeyword] = useState('');
  var [terms, setterms] = useState([]);
  var [value, setvalue] = useState(props.value);


  useEffect(() => {


    if (keyword.length == 0) {
      get_tax_terms();
    }

    if (keyword.length > 2) {
      get_tax_terms();
    }


  }, [keyword]);
  useEffect(() => {

    get_tax_terms()


  }, []);
  useEffect(() => {

    if (onChange) {
      onChange(value)
    }



  }, [value]);







  function get_tax_terms() {





    var postData = JSON.stringify({ keyword: keyword, taxonomy: taxonomy, per_page: 99 });



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


            var termsX = res.terms


            var termsList = []

            termsX.map(term => {

              termsList.push({ name: term.name, slug: term.slug, label: `${term.name}(${term.count})`, value: term.slug, id: term.term_id })

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









  return (
    <div className="relative flex flex-col items-end gap-3 justify-end">

      {/* {JSON.stringify(taxonomy)} */}



      <div className={`${labelClass ? labelClass : "!shadow-none cursor-pointer px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"} `} onClick={() => setToggled(!toggled)}>
        <>{label}</>
      </div>


      {onChange && (
        <>
          {value.length > 0 && (
            <>
              <div className={`flex gap-2 flex-wrap justify-end`}>

                {value.map(item => {

                  return (
                    <div onClick={ev => {

                    }} className="flex bg-gray-200 rounded-sm items-center  ">
                      <div className="px-2">{item}</div>
                      <div className="bg-red-400 cursor-pointer"><IconX size={18} /></div>
                    </div>
                  )

                })}








              </div>

              {allowReset && (

                <div className="flex items-center bg-red-400 rounded-sm pl-2 cursor-pointer" onClick={ev => {
                  setvalue([])

                }}>
                  Reset <IconX />
                </div>
              )}


            </>
          )}
        </>
      )}







      {toggled && (
        <div className={`absolute w-40 h-50 z-10 bg-white shadow-sm px-3 top-full overflow-y-scroll   rounded-sm  ${position == 'right' ? 'right-0' : 'left-0'}`}>



          {allowSearch && (
            <div className="sticky top-0 bg-white py-3">
              <input type="text" placeholder="Start Typing" className="!border-2 w-full focus:outline-none border-solid !border-gray-600 !shadow-none bg-gray-300" value={keyword} onChange={ev => setkeyword(ev.target.value)} />

            </div>
          )}





          {Object.entries(terms).map((args, index) => {

            var item = args[1]

            return (
              <div className="hover:bg-gray-200 p-1 cursor-pointer rounded-sm text-xs" key={index} onClick={() => {


                if (onPick) {
                  onPick(item)
                }


                var valueX = [...value]
                if (valueX.includes(item.value)) {
                  valueX = valueX.filter(v => v !== item.value)
                } else {
                  valueX.push(item.value)
                }

                setvalue(valueX)


              }}>{item.label} </div>
            )

          })}










        </div>
      )}




    </div>
  );
};

export default TaxTermsQuery;