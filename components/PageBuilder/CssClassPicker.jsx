"use client";
import { useState, useEffect, Component } from "react";
import { IconX, IconCheck, IconEdit } from '@tabler/icons-react';




import DropDown from "../../components/DropDown";
import tailwindClass from './tailwindClass';



const CssClassPicker = (props) => {



  var value = props.value
  var label = props.label
  var onChange = props.onChange

  var [edit, setedit] = useState(false);


  return (
    <div className="">


      <div className="flex flex-col gap-2">

        {label && (
          <div className="flex justify-between items-center">
            <label htmlFor="" className="text-xs font-medium text-gray-600">Classes</label>



          </div>
        )}




        <div>

          {edit && (
            <>
              <textarea type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !p-2 !font-mono !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={value} onChange={ev => {
                var value = ev.target.value;
                onChange(value)
              }} />
            </>
          )}

          {!edit && (
            <div className="flex flex-wrap items-center gap-1.5 text-xs">



              {value?.split(' ')?.filter(item => item !== "").length > 0 && (

                <>
                  {/* The remove control was an unsized IconX on a bare div that
                      only reacted on hover, so it rendered as a 24px glyph
                      overhanging a chip half its height. The empty strings a
                      bare `split(' ')` yields were rendering as empty chips
                      too. */}
                  {value?.split(' ').filter(item => item !== "").map((cls, index) => (
                    <span key={index} className="inline-flex items-center gap-0.5 rounded-md border border-gray-200 bg-gray-50 py-0.5 pl-2 pr-0.5 font-mono text-[11px] text-gray-700">
                      <span>{cls}</span>
                      <button
                        type="button"
                        title={`Remove ${cls}`}
                        aria-label={`Remove ${cls}`}
                        className="inline-flex h-4 w-4 items-center justify-center !rounded !border-0 !bg-transparent !px-0 !py-0 !text-gray-400 !shadow-none transition-colors hover:!bg-red-100 hover:!text-red-600"
                        onClick={ev => {

                          var classes = value ? value.split(' ') : [];

                          var newClasses = classes.filter(c => c != cls)

                          var classesStr = newClasses.join(' ')
                          onChange(classesStr)


                        }}>
                        <IconX size={11} />
                      </button>
                    </span>
                  ))}
                </>
              )}

              {/* With no classes this was a bare 8px strip, which reads as a
                  broken field rather than an empty one. */}
              {!(value?.split(' ')?.filter(item => item !== "").length > 0) && (
                <span className="text-[11px] italic text-gray-400">No classes yet</span>
              )}

            </div>
          )}



          <div className="flex items-center justify-between gap-2 pt-2">
            <DropDown
              className="!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10"
              label="Choose Class"
              labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'}
              value={''}
              options={tailwindClass}
              allowSearch={true}
              onOptionsChoose={(newVal) => {
                //ff


                var classes = value ? value.split(' ') : [];
                classes.push(newVal)
                var classesStr = classes.join(' ')
                onChange(classesStr)


                //onChangeCssVal(newVal, key);
              }}
            />

            {/* Was a grey slab wrapping two nested divs, where only the inner
                one carried the click handler - so the padded area around the
                icon looked clickable and was not. */}
            <button
              type="button"
              title={edit ? "Done editing classes" : "Edit classes as text"}
              aria-label={edit ? "Done editing classes" : "Edit classes as text"}
              aria-pressed={edit}
              onClick={ev => { setedit(!edit) }}
              className={`inline-flex h-7 w-7 shrink-0 items-center justify-center !rounded-lg !border !border-gray-200 !px-0 !py-0 !shadow-none transition-colors ${edit
                ? "!bg-brand !text-white hover:!bg-brand-600"
                : "!bg-white !text-gray-500 hover:!bg-gray-100 hover:!text-gray-900"}`}>
              {edit ? <IconCheck size={15} /> : <IconEdit size={15} />}
            </button>

          </div>





        </div>
      </div>




    </div>
  );
};

export default CssClassPicker;