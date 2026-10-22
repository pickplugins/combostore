
"use client";

import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";
import ToggleContent from "./ToggleContent";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useCounterStore } from '../store/useCounterStore'


/* Sidebar nav styling. `[&_svg]:size-*` normalises the icon sizes, including
   the chevron that ToggleContent renders - that component is shared with the
   page builder, so it is styled from here through its class props.

   Rows are a little taller below `lg`: the drawer is driven by thumb, where
   36px rows sit under the 44px minimum and land between two entries. */
const BRAND = "#634FE5";

const NAV_BASE =
	"mb-1 flex min-h-11 items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors lg:min-h-0 [&_svg]:size-[18px] [&_svg]:shrink-0";

const NAV_IDLE = "text-gray-400 hover:bg-white/5 hover:text-white";

const NAV_ACTIVE = "bg-brand font-medium text-white shadow-sm";

const GROUP_HEADER = `${NAV_BASE} text-gray-300 hover:bg-white/5 hover:text-white`;

/* A group holding the current page keeps a faint highlight, so the active
   section is still identifiable once the list is scrolled past its child. */
const GROUP_HEADER_ACTIVE = `${NAV_BASE} bg-white/5 text-white`;

const CHILD_BASE =
	"mb-0.5 flex min-h-10 items-center gap-2.5 rounded-lg px-3 py-1.5 text-[13px] transition-colors lg:min-h-0 [&_svg]:size-4 [&_svg]:shrink-0";

const CHILD_IDLE = "text-gray-400 hover:bg-white/5 hover:text-white";

const CHILD_ACTIVE = "bg-brand/20 font-medium text-white";


const ToggleNavs = (props) => {



  const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle } = useCounterStore()




  const pathname = usePathname();



  var currentLocationArr = pathname?.split("/");
  currentLocationArr = currentLocationArr?.filter(item => item);

  var currentLocationLast = currentLocationArr[currentLocationArr.length - 1];

  //currentLocationArr = currentLocationArr.filter(item => item !== "dashboard");


  var navs = props.navs;
  var rootSlug = props.rootSlug;
  /* Set by the mobile drawer only, to dismiss itself on a tap. A route change
     closes it as well, but tapping through to the page you are already on
     does not change the route. */
  var onNavigate = props.onNavigate;
  // var children = props.children;
  // var title = props.title;
  // var isOpenX = props.isOpen;
  // var labelIcon = props.labelIcon;
  // var iconPosition = props.iconPosition;

  var headerClass = props.headerClass ? props.headerClass : "";



  function buildNavTree(navs) {
    const map = {};
    const tree = [];

    // First, create a lookup map
    navs?.forEach(item => {
      map[item.value] = { ...item, children: [] };
    });

    // Then, build the tree
    navs.forEach(item => {
      if (item.parent) {
        if (map[item.parent]) {
          map[item.parent].children.push(map[item.value]);
        }
      } else {
        tree.push(map[item.value]);
      }
    });

    return tree;
  }

  const navTree = buildNavTree(navs);

  function hasRoleAccessed(navsRoles) {
    return userDataX?.roles?.some(element => navsRoles.includes(element));
  }

  return (
    <div className="flex flex-col flex-1">


      {navTree.map((nav, index) => {

        var children = nav?.children;

        /* `value` is the tree key and must be unique, so an entry whose route
           differs from its key - or that shares a route with another entry -
           carries an explicit `slug`. */
        var navSlug = nav?.slug ?? nav?.value;



        if (children?.length == 0) {
          return (
            <Link
              key={nav.value}
              href={`/${navSlug}`}
              onClick={onNavigate}
              aria-current={pathname == "/" + navSlug ? "page" : undefined}
              className={`${hasRoleAccessed(nav?.roles) ? '' : "hidden"} ${NAV_BASE} ${pathname == "/" + navSlug
                ? NAV_ACTIVE
                : NAV_IDLE
                }`}>
              <span className="">{nav.icon}</span>
              <span className="truncate">

                {nav.label}

              </span>
            </Link>
          );
        }


        if (children.length > 0) {


          /* currentLocationArr[0] is always "dashboard", so this lookup never
             matched and the group holding the current page stayed collapsed.
             Index 1 is the actual section slug. */
          const index = children.findIndex(item => (item.slug ?? item.value) === currentLocationArr[1]);

          const isActiveGroup = nav.value === children[index]?.parent;

          return (

            <div className="" key={nav.value}>

              {hasRoleAccessed(nav?.roles) && (
                <ToggleContent isOpen={isActiveGroup} labelIcon={nav.icon} iconPosition={`right`} title={nav.label} headerClass={isActiveGroup ? GROUP_HEADER_ACTIVE : GROUP_HEADER} headerTitleClass={`flex w-full items-center`} contentClass={`mb-2`}>
                  <div className="ml-4 border-l border-white/10 pl-2">

                    {children.map((nav2, index) => {

                      var nav2Slug = nav2?.slug ?? nav2?.value;
                      var isCurrent = currentLocationLast == nav2Slug;

                      return (
                        <Link
                          key={nav2.value}
                          href={`/dashboard/${nav2Slug}`}
                          onClick={onNavigate}
                          aria-current={isCurrent ? "page" : undefined}
                          className={`${hasRoleAccessed(nav2?.roles) ? '' : "hidden"} ${CHILD_BASE} ${isCurrent ? CHILD_ACTIVE : CHILD_IDLE
                            }`}>
                          <span className="">{nav2.icon}</span>
                          <span
                            className="truncate"
                          // className={`${navToggle ? "hidden" : "hidden md:block"}`}
                          >
                            {nav2.label}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </ToggleContent>
              )
              }

            </div>

          );
        }








      })}


    </div >
  );
};

export default ToggleNavs;
