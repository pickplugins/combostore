"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";


/* Fallback look, so a call site that passes no class props still gets a
   usable tab rail instead of unstyled text. */
const DEFAULT_ITEM =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900";

const DEFAULT_ITEM_ACTIVE = "bg-[#634FE5] text-white shadow-sm";

/* With `scrollableNavs` the rail scrolls horizontally with its scrollbar
   hidden, which is right on a touch screen but leaves overflowing tabs
   unreachable with a mouse: a vertical wheel does nothing over a horizontal
   scroller and there is nothing to drag. These are the two edge buttons that
   appear only when there is more rail in that direction. A touch screen already
   pans the rail with a finger, so the buttons stay out of its way there. */
const EDGE_BUTTON =
  "absolute top-1/2 z-10 flex h-6 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm shadow-gray-900/10 transition-colors hover:border-brand/40 hover:text-brand-700 [@media(pointer:coarse)]:hidden bg-opacity-40";


const Tabs = (props) => {

  var children = props.children;
  var tabs = props.tabs;
  var orientation = props.orientation;

  /* Default to "" rather than leaving these undefined: every omitted prop used
     to be interpolated into the class attribute as the string "undefined". */
  var wrapperClass = props.wrapperClass ?? "";
  var navsWrapperClass = props.navsWrapperClass ?? "";
  var tabPanelClass = props.tabPanelClass ?? "";
  var navsItemClass = props.navsItemClass ?? DEFAULT_ITEM;
  var navsItemActiveClass = props.navsItemActiveClass ?? DEFAULT_ITEM_ACTIVE;

  /* Opt-in horizontal scrolling: nav items stay on one line and gain wheel,
     drag and edge-button scrolling. Left off by default, where the rail wraps
     onto as many lines as it needs - a rail that is one scrolling line without
     those affordances just hides its last few tabs off the edge. */
  var scrollableNavs = props.scrollableNavs ?? false;

  var isVertical = orientation == 'vertical';

  /* A vertical rail scrolls with the page, so the affordances only apply to a
     horizontal one that asked for them. */
  var isScrollableNavs = !isVertical && scrollableNavs;

  var tabIds = tabs?.map((tab, index) => (tab?.id ? tab.id : index)) ?? [];

  /* `activeTab` can arrive as an index even when the tabs carry ids. That
     matched no panel and left the content area blank until a tab was clicked,
     so resolve whatever was passed down to a real tab id. */
  function resolveActiveTab() {

    var requested = props?.activeTab;

    if (tabIds.includes(requested)) return requested;

    if (typeof requested === 'number' && tabIds[requested] !== undefined) {
      return tabIds[requested];
    }

    return tabIds[0];
  }

  const [activeTab, setActiveTab] = useState(resolveActiveTab);
  const childrenArray = React.Children.toArray(children);
  const tablistRef = useRef(null);

  /* Which ends of the rail have hidden tabs beyond them. */
  const [edges, setEdges] = useState({ start: false, end: false });

  const dragRef = useRef({ active: false, moved: false, startX: 0, startLeft: 0 });

  var activePanel = childrenArray.find(child => child?.props?.id === activeTab)
    ?? childrenArray.find(child => child?.props?.index === activeTab);


  const measureEdges = useCallback(() => {

    var el = tablistRef.current;
    if (!el) return;

    /* A whole pixel of tolerance: fractional layout widths otherwise leave
       scrollWidth a hair above clientWidth on a rail that fits perfectly. */
    var max = el.scrollWidth - el.clientWidth;
    var scrollable = max > 1;

    setEdges(current => {

      var next = {
        start: scrollable && el.scrollLeft > 1,
        end: scrollable && el.scrollLeft < max - 1,
      };

      if (next.start === current.start && next.end === current.end) return current;

      return next;
    });
  }, []);


  useEffect(() => {

    var el = tablistRef.current;
    if (!el || !isScrollableNavs) return;

    measureEdges();

    /* React registers `wheel` passively on the root, so a handler passed as
       onWheel cannot preventDefault. This one is attached by hand. */
    function onWheel(ev) {

      if (el.scrollWidth - el.clientWidth <= 1) return;

      var delta = Math.abs(ev.deltaY) > Math.abs(ev.deltaX) ? ev.deltaY : ev.deltaX;
      if (!delta) return;

      ev.preventDefault();
      el.scrollLeft += delta;
    }

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('scroll', measureEdges, { passive: true });

    var observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(measureEdges)
      : null;

    /* The rail itself for panel resizes, its first child for content width -
       icons and labels can land after the first paint. */
    observer?.observe(el);
    if (el.firstElementChild) observer?.observe(el.firstElementChild);

    window.addEventListener('resize', measureEdges);

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', measureEdges);
      window.removeEventListener('resize', measureEdges);
      observer?.disconnect();
    };
  }, [measureEdges, isScrollableNavs, tabs?.length]);


  /* Keyboard navigation moves focus through tabs that may be scrolled out of
     sight; nudge the rail instead of letting scrollIntoView move the panel
     behind it. */
  useEffect(() => {

    var el = tablistRef.current;
    if (!el || !isScrollableNavs) return;

    var index = tabIds.indexOf(activeTab);
    var node = el.querySelectorAll('[role="tab"]')?.[index];
    if (!node) return;

    var rail = el.getBoundingClientRect();
    var item = node.getBoundingClientRect();

    if (item.left < rail.left) {
      el.scrollLeft -= rail.left - item.left + 8;
    }
    else if (item.right > rail.right) {
      el.scrollLeft += item.right - rail.right + 8;
    }
  }, [activeTab, isScrollableNavs]);


  function scrollByPage(direction) {

    var el = tablistRef.current;
    if (!el) return;

    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.7, 80), behavior: 'smooth' });
  }


  /* Drag-to-scroll with a mouse or pen. Touch is left alone - the browser
     already pans the rail, and hijacking the pointer would fight it. */
  function onPointerDown(ev) {

    var el = tablistRef.current;

    dragRef.current.moved = false;

    if (!el || !isScrollableNavs || ev.pointerType === 'touch') return;
    if (el.scrollWidth - el.clientWidth <= 1) return;
    if (ev.button !== 0) return;

    dragRef.current.active = true;
    dragRef.current.startX = ev.clientX;
    dragRef.current.startLeft = el.scrollLeft;
  }

  function onPointerMove(ev) {

    var state = dragRef.current;
    var el = tablistRef.current;

    if (!state.active || !el) return;

    var dx = ev.clientX - state.startX;

    /* Below the threshold this is still a click on a tab, not a drag. */
    if (!state.moved && Math.abs(dx) < 4) return;

    /* Take the pointer capture here rather than on pointerdown. While a pointer
       is captured the browser retargets the click that follows to the capturing
       element, so capturing up front sent every tab click to the rail and no
       tab could be selected. Past the threshold the drag owns the pointer and
       its trailing click is one onClickCapture swallows anyway. */
    if (!state.moved) {

      try {
        ev.currentTarget.setPointerCapture(ev.pointerId);
      } catch (_error) {
        /* capture is a nicety; moves still arrive while the pointer is on the rail */
      }
    }

    state.moved = true;
    el.scrollLeft = state.startLeft - dx;
  }

  function endDrag() {
    dragRef.current.active = false;
  }

  /* A drag that finishes on top of a tab would otherwise also select it. */
  function onClickCapture(ev) {

    if (!dragRef.current.moved) return;

    ev.preventDefault();
    ev.stopPropagation();
    dragRef.current.moved = false;
  }


  function activateTab(index) {

    var count = tabs?.length ?? 0;
    if (!count) return;

    var next = (index + count) % count;

    setActiveTab(tabIds[next]);

    var node = tablistRef.current?.querySelectorAll('[role="tab"]')?.[next];
    if (node) node.focus();
  }

  function onTabKeyDown(ev, index) {

    var prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft';
    var nextKey = isVertical ? 'ArrowDown' : 'ArrowRight';

    if (ev.key == nextKey) {
      ev.preventDefault();
      activateTab(index + 1);
    }
    else if (ev.key == prevKey) {
      ev.preventDefault();
      activateTab(index - 1);
    }
    else if (ev.key == 'Home') {
      ev.preventDefault();
      activateTab(0);
    }
    else if (ev.key == 'End') {
      ev.preventDefault();
      activateTab((tabs?.length ?? 1) - 1);
    }
    else if (ev.key == 'Enter' || ev.key == ' ') {
      ev.preventDefault();
      setActiveTab(tabIds[index]);
    }
  }


  var isScrollable = edges.start || edges.end;

  /* Opted in, the rail is a single line that scrolls with its scrollbar hidden,
     the edge buttons and drag doing the reaching. Otherwise it wraps, so every
     tab stays on screen and nothing needs scrolling to. */
  var railClass = isScrollableNavs
    ? `flex flex-nowrap select-none overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isScrollable ? "cursor-grab active:cursor-grabbing" : ""}`
    : "flex flex-wrap";

  var tablist = (
    <div
      ref={tablistRef}
      role="tablist"
      aria-orientation={isVertical ? "vertical" : "horizontal"}
      onPointerDown={isScrollableNavs ? onPointerDown : undefined}
      onPointerMove={isScrollableNavs ? onPointerMove : undefined}
      onPointerUp={isScrollableNavs ? endDrag : undefined}
      onPointerCancel={isScrollableNavs ? endDrag : undefined}
      onClickCapture={isScrollableNavs ? onClickCapture : undefined}
      className={`${railClass} ${isVertical ? " lg:flex-col mb-4 lg:flex-nowrap" : ""} ${navsWrapperClass}`}>
      {tabs.map((tab, index) => {

        var tabId = tab?.id ? tab.id : index;
        var isActive = activeTab === tabId;

        return (


          <div
            key={index}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onKeyDown={(ev) => onTabKeyDown(ev, index)}
            className={`cursor-pointer whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#634FE5]/40 ${navsItemClass}  ${isActive
              ? navsItemActiveClass
              : " "
              }`}
            onClick={() => setActiveTab(tabId)}
          >
            {tab.icon && (
              <div className="shrink-0">{tab.icon}</div>
            )}

            <div>{tab.label}</div>
          </div>
        )
      })}
    </div>
  );


  return (
    <div className={`${wrapperClass} w-full  mx-auto ${isVertical ? "lg:flex align-top" : ""}`}>

      {!isScrollableNavs && tablist}

      {isScrollableNavs && (
        <div className="relative min-w-0">

          {tablist}

          {edges.start && (
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              title="Scroll tabs left"
              onClick={() => scrollByPage(-1)}
              className={`${EDGE_BUTTON} left-1 `}>
              <IconChevronLeft size={14} />
            </button>
          )}

          {edges.end && (
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              title="Scroll tabs right"
              onClick={() => scrollByPage(1)}
              className={`${EDGE_BUTTON} right-1`}>
              <IconChevronRight size={14} />
            </button>
          )}
        </div>
      )}

      <div role="tabpanel" className={`${tabPanelClass} min-w-0 ${isVertical ? "flex-1 " : ""}`}>
        {activePanel}
      </div>
    </div>


  );
};

export default Tabs;
