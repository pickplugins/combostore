/**
 * Element layouts for the `popup` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `popup` block and its
 * Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "popup"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * A popup holds blocks: these come with a heading, a line of text and
 * buttons to start from. A child whose classes include `popup-close` closes
 * the popup when clicked (PopupView.jsx) - the "No thanks" buttons use it.
 *
 * Keys: `*` the full-viewport wrapper (options.position places the dialog
 * in it), `overlay`, `content` (the dialog), `close-button`, `close-icon`.
 * The triggers and "show again" here are sensible starting points; change
 * them in the options after applying.
 */

var heading = (id, text, classes) => ({ "id": id, "type": "heading", "options": { "text": text, "tag": "h2" }, "cssSelectors": { "*": { "classes": classes } }, "children": [] });
var text = (id, value, classes) => ({ "id": id, "type": "text", "options": { "text": value, "tag": "p" }, "cssSelectors": { "*": { "classes": classes } }, "children": [] });
var button = (id, label, classes) => ({
  "id": id, "type": "button",
  "options": { "text": label, "linkTo": "", "url": "", "scheme": "", "target": "", "icon": "", "iconSize": 18 },
  "cssSelectors": { "*": { "classes": classes }, "icon": { "classes": "flex" }, "label": { "classes": "" } },
  "children": []
});

var layouts = [

  {
    title: 'Centered Offer',
    thumbnail: '',
    content: {
      "id": "pop-offer",
      "type": "popup",
      "options": {
        "editMode": true,
        "triggers": [{ "id": "delay", "value": 4000 }, { "id": "onExit" }],
        "closeTriggers": [{ "id": "clickOutside" }],
        "showAgain": "days",
        "showAgainDays": 7,
        "position": "center",
        "entranceAnimation": "zoomIn",
        "closeAnimation": "zoomOut",
        "overlay": true,
        "lockScroll": true,
        "closeButton": true,
        "closeIcon": "IconX",
        "closeIconSize": 20,
        "ariaLabel": "Special offer"
      },
      "cssSelectors": {
        "*": { "classes": "p-4" },
        "overlay": { "classes": "bg-black/60 backdrop-blur-[2px]" },
        "content": { "classes": "flex w-full max-w-md flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-2xl max-h-[90vh] overflow-y-auto" },
        "close-button": { "classes": "absolute right-3 top-3 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900" },
        "close-icon": { "classes": "flex items-center" }
      },
      "children": [
        text("pop-offer-eyebrow", "Limited time", "text-xs font-semibold uppercase tracking-widest text-[#1b0e9f]"),
        heading("pop-offer-title", "Get 10% off your first order", "text-2xl font-bold text-gray-900"),
        text("pop-offer-body", "Use code WELCOME10 at checkout.", "text-sm text-gray-600"),
        button("pop-offer-cta", "Shop now", "popup-close mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#1b0e9f] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#150b7d] cursor-pointer"),
        button("pop-offer-no", "No thanks", "popup-close inline-flex items-center justify-center px-3 py-1 text-xs text-gray-500 underline cursor-pointer")
      ]
    }
  },

  {
    title: 'Corner Notice (no overlay)',
    thumbnail: '',
    content: {
      "id": "pop-corner",
      "type": "popup",
      "options": {
        "editMode": true,
        "triggers": [{ "id": "scrollPercent", "min": 40, "max": 100 }],
        "closeTriggers": [],
        "showAgain": "session",
        "showAgainDays": 7,
        "position": "bottom-right",
        "entranceAnimation": "slideInUp",
        "closeAnimation": "slideOutDown",
        "overlay": false,
        "lockScroll": false,
        "closeButton": true,
        "closeIcon": "IconX",
        "closeIconSize": 18,
        "ariaLabel": "Notice"
      },
      "cssSelectors": {
        "*": { "classes": "p-4" },
        "overlay": { "classes": "" },
        "content": { "classes": "flex w-full max-w-xs flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 pr-10 shadow-xl" },
        "close-button": { "classes": "absolute right-2 top-2 inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900" },
        "close-icon": { "classes": "flex items-center" }
      },
      "children": [
        heading("pop-corner-title", "Free delivery this week", "text-base font-semibold text-gray-900"),
        text("pop-corner-body", "On every order over ৳999.", "text-sm text-gray-600")
      ]
    }
  },

  {
    title: 'Side Drawer',
    thumbnail: '',
    content: {
      "id": "pop-drawer",
      "type": "popup",
      "options": {
        "editMode": true,
        "triggers": [{ "id": "clickElement", "value": ".open-drawer" }],
        "closeTriggers": [{ "id": "clickOutside" }],
        "showAgain": "always",
        "showAgainDays": 7,
        "position": "right",
        "entranceAnimation": "slideInRight",
        "closeAnimation": "slideOutRight",
        "overlay": true,
        "lockScroll": true,
        "closeButton": true,
        "closeIcon": "IconX",
        "closeIconSize": 20,
        "ariaLabel": "Drawer"
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "overlay": { "classes": "bg-black/50" },
        "content": { "classes": "flex h-full w-full max-w-sm flex-col gap-4 overflow-y-auto bg-white p-6 pt-14 shadow-2xl" },
        "close-button": { "classes": "absolute right-4 top-4 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900" },
        "close-icon": { "classes": "flex items-center" }
      },
      "children": [
        heading("pop-drawer-title", "Need help choosing?", "text-xl font-bold text-gray-900"),
        text("pop-drawer-body", "Opens when any element with the class open-drawer is clicked. Put your content here.", "text-sm text-gray-600")
      ]
    }
  },

];

export default layouts;
