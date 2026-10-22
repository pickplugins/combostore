"use client";

// import DropDown from "/../../../components/DropDown";
// import ToggleControl from "/../../../components/ToggleControl";
// import Button from "/../../../components/Button";


import { useState, useEffect } from "react";
const CBcssAlignContent = (props) => {

  var args = {
    stretch: { "label": "stretch", "value": "stretch" },
    center: { "label": "center", "value": "center" },
    'flex-start': { "label": "flex start	", "value": "flex-start" },
    'flex-end': { "label": "flex end	", "value": "flex-end" },
    'space-between': { "label": "space between", "value": "space-between" },
    'space-around': { "label": "space around", "value": "space-around" },
    'space-evenly': { "label": "space evenly", "value": "space-evenly" },
    start: { "label": "start", "value": "start" },
    end: { "label": "end", "value": "end" },
    normal: { "label": "normal", "value": "normal" },
    start: { "label": "start", "value": "start" },
    baseline: { "label": "baseline", "value": "baseline" },
    revert: { "label": "revert", "value": "revert" },
    unset: { "label": "unset", "value": "unset" },
    inherit: { "label": "inherit", "value": "inherit" },
    initial: { "label": "initial", "value": "initial" },
  };
  const [valArgs, setValArgs] = useState(props.val.split(" "));
  const [align, setalign] = useState(valArgs[0]);
  const [isImportant, setImportant] = useState((valArgs[1] == undefined) ? false : true);
  return (
    <div className='flex justify-between items-center'>
      {/* <Dropdown
        position="bottom"
        renderToggle={({ isOpen, onToggle }) => (
          <Button
            title={("Align Content", "combo-blocks")}
            onClick={onToggle}
            aria-expanded={isOpen}
          >
            <div className=" ">{args[align] == undefined ? 'Select...' : args[align].label}</div>
          </Button>
        )}
        renderContent={() => <div className='w-32'>
          {Object.entries(args).map((args) => {
            var index = args[0]
            var x = args[1]
            return (
              <div className={'px-3 py-1 border-b block hover:bg-gray-400 cursor-pointer'} onClick={(ev) => {
                setalign(x.value)
                if (isImportant) {
                  props.onChange(x.value + ' !important', 'alignContent');
                } else {
                  props.onChange(x.value, 'alignContent');
                }
                // props.onChange(x.value, 'alignContent');
              }}>
                {!x.value && (
                  <div>{("Reset", "combo-blocks")}</div>
                )}
                {x.value && (
                  <>{x.label}</>
                )}
              </div>
            )
          })}
        </div>}
      /> */}
      {/* <ToggleControl
        help={
          isImportant
            ? ('Important (Enabled)', "combo-blocks")
            : ('Important?', "combo-blocks")
        }
        checked={isImportant}
        onChange={(arg) => {
          setImportant(isImportant => !isImportant)
          if (isImportant) {
            props.onChange(align, 'alignContent');
          } else {
            props.onChange(align + ' !important', 'alignContent');
          }
        }}
      /> */}
    </div>
  )
}

export default CBcssAlignContent;