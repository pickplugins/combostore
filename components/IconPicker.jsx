"use client";
import { useState, useEffect, Component, useMemo } from "react";
import * as TablerIcons from '@tabler/icons-react';



import { useCounterStore } from '../store/useCounterStore'




const IconPicker = (props) => {


  var multiple = props.multiple
  var value = props.value
  var allowSearch = props.allowSearch ?? true
  var position = props.position
  var label = props.label
  var labelClass = props.labelClass
  var onOptionsChoose = props.onOptionsChoose
  var allowReset = props.allowReset
  var [toggled, setToggled] = useState(false);

  var [optionsFiltered, setOptionsFiltered] = useState([]);
  var [search, setsearch] = useState('');
  const [icons, seticons] = useState(false);



  const iconList = useMemo(() => {
    return Object.entries(TablerIcons)
      .filter(([name]) => name.startsWith("Icon"))
      .map(([name, Icon]) => ({
        label: name,
        value: name,
        Icon,
      }));
  }, []);





  // useEffect(() => {



  //   if (search.length == 0) {
  //     setOptionsFiltered([]);
  //   }



  //   if (search.length > 1) {



  //     if (search.length > 2) {
  //       var items = searchClasses(search);
  //       setOptionsFiltered(items);
  //     }


  //   }


  // }, [search]);

  // function searchClasses(query) {
  //   return iconList?.filter(cls => {
  //     console.log(cls);

  //     return cls?.label?.includes(query)

  //   });
  // }




  const filteredIcons = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return iconList;

    return iconList.filter(({ label }) => {
      const name = label.toLowerCase();

      let index = 0;

      for (const char of query) {
        index = name.indexOf(char, index);

        if (index === -1) return false;

        index++;
      }

      return true;
    });
  }, [search]);











  return (
    <div className="relative">




      <div className="flex gap-2 items-center">
        <div className={`${labelClass ? labelClass : "inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 w-full"} `} onClick={() => setToggled(!toggled)}>


          <>{label}</>



        </div>
        {/* Was permanent red text inside a 2px grey box, which read as an
            error state sitting next to the picker rather than a way to clear
            it. It only turns red on hover now, and only shows when the caller
            actually allows a reset - `allowReset` was being passed in and
            never read. */}
        {allowReset && (
          <div
            title="Clear"
            className="inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 w-fit"
            onClick={ev => {
              onOptionsChoose(null)
            }}>Reset</div>
        )}

      </div>


      {toggled && (
        <div className={`absolute w-full h-50 z-10 bg-white shadow-sm px-3 top-full overflow-y-scroll   rounded-sm  ${position == 'right' ? 'right-0' : 'left-0'}`}>


          {allowSearch && (
            <div className="sticky top-0 bg-white py-3">
              <input type="text" className="w-full !border-2 focus:outline-none border-solid !border-gray-600 !shadow-none bg-gray-300" value={search} onChange={ev => {


                setsearch(ev.target.value)


              }} />

            </div>
          )}




          {filteredIcons.length > 0 && (

            <div className="grid grid-cols-5 gap-2 p-2">
              {filteredIcons.map(({ label, Icon }) => (
                <div
                  key={label}
                  classlabel="hover:bg-gray-200 p-2 cursor-pointer rounded-sm p-1 bg-gray-400 flex justify-center"
                  title={label}
                  onClick={(ev) => {

                    onOptionsChoose(label)
                  }}
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          )}
          {filteredIcons.length == 0 && (

            <div className="grid grid-cols-5 gap-2 p-2">
              {iconList.map(({ label, Icon }) => (
                <div
                  key={label}
                  classlabel="hover:bg-gray-200 p-2 cursor-pointer rounded-sm p-1 bg-gray-400 flex justify-center"
                  title={label}
                  onClick={(ev) => {

                    onOptionsChoose(label)
                  }}
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          )}






        </div>
      )}




    </div>
  );
};

export default IconPicker;