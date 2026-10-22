"use client";
import { useState, useEffect, Component } from "react";
import { IconArrowLeft, IconX, IconAlertSquare, IconCheck } from '@tabler/icons-react';



import { useCounterStore } from '../store/useCounterStore'




const DropDown = (props) => {


  var multiple = props.multiple
  var value = props.value
  var allowSearch = props.allowSearch
  var position = props.position
  var label = props.label
  var labelClass = props.labelClass
  var onOptionsChoose = props.onOptionsChoose
  var allowReset = props.allowReset
  var [toggled, setToggled] = useState(false);
  var options = props.options;
  var [optionsFiltered, setOptionsFiltered] = useState([]);
  var [search, setsearch] = useState('');


  useEffect(() => {

    // if (typeof options === 'object' && !Array.isArray(options)) {
    //   const optionsArray = Object.values(options);
    //   setOptions(optionsArray)
    // }

    if (search.length == 0) {
      setOptionsFiltered([]);
    }



    if (search.length > 1) {
      var items = searchClasses(search);
      setOptionsFiltered(items);
    }


  }, [search]);

  function searchClasses(query) {
    return options?.filter(cls => {

      return cls.label ? cls.label?.includes(query) : cls?.includes(query)

    });
  }

  return (
    <div className="relative">




      <div className={`${labelClass ? labelClass : "inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 w-full"} `} onClick={() => setToggled(!toggled)}>

        {(!multiple && value) && (
          <div className={`flex gap-2 `}>


            {Array.isArray(options) && (
              <>{options.find(b => b.value === value)?.value}</>
            )}


            {typeof options == 'object' && (
              <>{options[value]?.label}</>
            )}





            {/* The icon was unsized, so it rendered at Tabler's 24px default
                next to 12px label text and pushed the trigger taller than the
                controls beside it. */}
            {allowReset && (
              <div
                title="Clear"
                className="inline-flex h-4 w-4 shrink-0 items-center justify-center self-center rounded text-gray-400 transition-colors hover:bg-red-100 hover:text-red-600"
                onClick={ev => {
                  ev.stopPropagation();
                  onOptionsChoose(null)
                }}>
                <IconX size={12} />
              </div>
            )}

          </div>
        )}
        {(!multiple && !value) && (
          <>{label}</>
        )}




      </div>


      {/*
        `h-50` plus `overflow-y-scroll` meant a fixed-height menu that always
        drew a scrollbar, even with three options in it. `max-h` with `auto`
        lets a short list be short. The flat white box also had no border, so
        it blended into whatever was behind it.
      */}
      {toggled && (
        <div className={`scroll-thin absolute w-48 max-h-56 z-10 bg-white border border-gray-200 shadow-lg shadow-gray-900/10 p-1 top-full mt-1 overflow-y-auto rounded-lg ${position == 'right' ? 'right-0' : 'left-0'}`}>



          {allowSearch && (
            <div className="sticky -top-1 bg-white pb-1 pt-0.5">
              <input type="text" placeholder="Search..." className="w-full !rounded-md !border !border-gray-300 !bg-white !px-2 !py-1 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-2 focus:!ring-brand/15" value={search} onChange={ev => setsearch(ev.target.value)} />

            </div>
          )}

          {optionsFiltered.length > 0 && (
            <div className="">
              {optionsFiltered.map((item, index) => {

                return (
                  <div className="rounded-md px-2 py-1.5 text-xs text-gray-700 cursor-pointer transition-colors hover:bg-brand/10 hover:text-brand-700" key={index} onClick={() => {

                    if (multiple) {
                      var newValues = [...value]
                      if (newValues.includes(item)) {
                        newValues = newValues.filter(v => v !== item)
                      } else {
                        newValues.push(item)
                      }
                      onOptionsChoose(newValues)
                    } else {
                      onOptionsChoose(item)

                    }

                  }}>{item}</div>
                )

              })}
            </div>
          )}

          {optionsFiltered.length == 0 && (
            <>
              {!Array.isArray(options) && (

                <>

                  {Object.entries(options).map((args, index) => {

                    var item = args[1]

                    return (
                      <div className="rounded-md px-2 py-1.5 text-xs text-gray-700 cursor-pointer transition-colors hover:bg-brand/10 hover:text-brand-700" key={index} onClick={() => {

                        if (multiple) {
                          var newValues = [...value]
                          if (newValues.includes(item.value)) {
                            newValues = newValues.filter(v => v !== item.value)
                          } else {
                            newValues.push(item.value)
                          }
                          onOptionsChoose(newValues)


                        } else {

                          onOptionsChoose(item)

                        }

                      }}>{item.label} </div>
                    )

                  })}
                </>
              )}

              {Array.isArray(options) && (

                <>
                  {options.map((item, index) => {

                    return (
                      <div className="rounded-md px-2 py-1.5 text-xs text-gray-700 cursor-pointer transition-colors hover:bg-brand/10 hover:text-brand-700" key={index} onClick={() => {

                        if (multiple) {
                          var newValues = [...value]
                          if (newValues.includes(item)) {
                            newValues = newValues.filter(v => v !== item)
                          } else {
                            newValues.push(item)
                          }
                          onOptionsChoose(newValues)
                        } else {
                          onOptionsChoose(item)

                        }

                      }}>{item?.label || item}</div>
                    )

                  })}
                </>
              )}
            </>
          )}




        </div>
      )}




    </div>
  );
};

export default DropDown;