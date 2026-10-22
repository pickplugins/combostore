"use client";
import { useState, useEffect, Component } from "react";
import { IconX, IconCheck, IconEdit, IconPlus } from '@tabler/icons-react';




import DropDown from "../../components/DropDown";
import tailwindClass from './tailwindClass';
import ToggleContent from '../../components/ToggleContent';
import CssClassPicker from "./CssClassPicker";


/* Global CSS styles `input` and `button` with unlayered rules, so they beat
   Tailwind utilities and these have to be marked important to land. */
const FIELD_CLASSES =
  "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const HEADER_CLASSES =
  "flex w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1.5 transition-colors hover:bg-gray-100 select-none";

const CONTENT_CLASSES =
  "mt-1.5 rounded-lg border border-gray-200 bg-white p-3";


const CssSelectors = (props) => {



  var value = props.value
  var label = props.label
  var onChange = props.onChange
  var cssSelectors = props?.cssSelectors;
  var updateBlock = props?.updateBlock;

  var [edit, setedit] = useState(false);



  const SelectorTitle = ({ item, selector }) => {

    return (

      <div className="flex flex-1 items-center justify-between gap-2">
        {/* An unnamed selector rendered as a blank row with nothing to say
            what it was - which is how every newly added one starts. */}
        <div className="truncate font-mono text-[11px] text-gray-700">
          {selector || <span className="font-sans italic text-gray-400">unnamed selector</span>}
        </div>
        {/* Was a solid red square stretched to the row height: the loudest
            element in the panel, for a secondary action. */}
        <button
          type="button"
          title="Remove selector"
          aria-label="Remove selector"
          className="inline-flex h-6 w-6 shrink-0 items-center justify-center !rounded-md !border-0 !bg-transparent !px-0 !py-0 !text-gray-400 !shadow-none transition-colors hover:!bg-red-50 hover:!text-red-600"
          onClick={ev => {

            ev.preventDefault();
            ev.stopPropagation();


            var cssSelectorsX = { ...cssSelectors }
            delete cssSelectorsX[selector]

            updateBlock('cssSelectors', cssSelectorsX)

          }}><IconX size={14} /></button>
      </div>

    )

  }








  return (
    <div className="flex flex-col gap-2">


      <div className="flex items-center justify-between gap-2">
        <label htmlFor="" className="text-xs font-semibold uppercase tracking-wide text-gray-500">Selectors &amp; Style</label>
        <button
          type="button"
          title="Add a selector"
          className="inline-flex items-center gap-1 !rounded-lg !border !border-gray-200 !bg-white !px-2 !py-1 !text-xs !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand-700"
          onClick={ev => {

            var cssSelectorsX = { ...cssSelectors }
            cssSelectorsX['* .handle'] = { classes: '' }
            updateBlock('cssSelectors', cssSelectorsX)

          }}><IconPlus size={13} /> Add</button>
      </div>


      <div>
        {Object.keys(cssSelectors)?.length > 0 && (
          <>

            {Object.entries(cssSelectors)?.map(item => {

              var selector = item[0];
              var styles = item[1];
              var classes = styles?.classes;


              return (



                <div key={selector} className="mb-2">
                  {/* The body was a `bg-gray-400` block holding `bg-gray-300`
                      fields - grey on grey, with a 2px dark border on each
                      input. It is a plain card now so the values read. */}
                  <ToggleContent iconPosition='left' title={<SelectorTitle item={item} selector={selector} />} headerClass={HEADER_CLASSES} headerTitleClass={`flex justify-between w-full items-center gap-2`} contentClass={CONTENT_CLASSES}>



                    <div className="flex flex-col gap-4">


                      <CssClassPicker type="text" className={FIELD_CLASSES} value={cssSelectors[selector].classes} onChange={(value) => {


                        var cssSelectorsX = { ...cssSelectors }
                        cssSelectorsX[selector].classes = value
                        updateBlock('cssSelectors', cssSelectorsX)

                      }} />



                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="text-xs font-medium text-gray-600">Selector</label>
                        <div>
                          <input type="text" className={`${FIELD_CLASSES} font-mono`} value={selector} onChange={ev => {

                            var newSelector = ev.target.value;


                            var cssSelectorsX = { ...cssSelectors }

                            // var selector = value.replaceAll('#' + id, '*')

                            var selectorX = cssSelectorsX[selector]

                            cssSelectorsX[newSelector] = selectorX
                            delete cssSelectorsX[selector]



                            updateBlock('cssSelectors', cssSelectorsX)

                          }} />


                        </div>
                      </div>
                    </div>


                  </ToggleContent>
                </div>

              )
            })}


          </>
        )}

      </div>

      <div>

      </div>




    </div>
  );
};

export default CssSelectors;