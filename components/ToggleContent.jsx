"use client"

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { useCounterStore } from '../store/useCounterStore'

const ToggleContent = (props) => {

  const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()


  var children = props.children;
  var title = props.title;
  var isOpenX = props.isOpen;
  var labelIcon = props.labelIcon ?? false;
  /* Default to a right-hand chevron: without this most call sites pass no
     iconPosition and render with no hint that the row opens at all. */
  var iconPosition = props.iconPosition ?? 'right';

  var headerClass = props.headerClass ? props.headerClass : "w-full flex justify-between items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer select-none";
  var headerTitleClass = props.headerTitleClass ? props.headerTitleClass : "w-full flex items-center justify-between gap-2";
  /* Falls back to headerTitleClass to keep existing callers rendering exactly
     as before; pass headerLabelClass to style the label on its own. */
  var headerLabelClass = props.headerLabelClass ? props.headerLabelClass : (props.headerTitleClass ? props.headerTitleClass : "flex gap-2");
  var wrapperClass = props.wrapperClass ? props.wrapperClass : "w-full mb-1";
  var contentClass = props.contentClass ? props.contentClass : "mt-1 rounded-lg border border-gray-200 bg-white p-3";

  const [isOpen, setIsOpen] = useState(isOpenX);

  const toggle = (ev) => {

    ev.stopPropagation();
    ev.preventDefault();
    setIsOpen(!isOpen)
  };

  const chevron = (
    <div className={`shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
      <IconChevronDown size={16} />
    </div>
  );

  return (
    <div className={wrapperClass}>
      <div
        className={headerClass}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(ev) => {
          if (ev.key !== 'Enter' && ev.key !== ' ') return;
          toggle(ev);
        }}
        onClick={toggle}
      >
        <div className={headerTitleClass}>
          {iconPosition == 'left' && (
            <>{chevron}</>
          )}

          {labelIcon && (
            <div className="flex-1 flex gap-2 items-center">
              {labelIcon && (
                <div>{labelIcon}</div>
              )}

              {title}
            </div>
          )}
          {!labelIcon && (
            <div className={headerLabelClass}>

              {title}
            </div>
          )}



          {iconPosition == 'right' && (
            <>{chevron}</>
          )}

        </div>
      </div>
      {isOpen && <div className={contentClass}>{children}</div>}
    </div>
  );
};

export default ToggleContent;
