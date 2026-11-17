/**
 * Element layouts for the `orderTracking` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `orderTracking` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "orderTracking"`. (PageBuilder.jsx regenerates all
 * ids on paste/replace, so the readable ids below are safe.)
 *
 * A preset only lists the cssSelectors keys it changes: any key a block
 * lacks falls back to the orderTracking defaults in ElementsDefinition.js
 * (elementCssClasses). The keys are listed there.
 */

var layouts = [

  {
    title: 'Card (default)',
    thumbnail: '',
    content: {
      "id": "otr-card",
      "type": "orderTracking",
      "options": {
        "title": "Track your order",
        "subtitle": "Enter your order number and the phone number or email you ordered with.",
        "buttonText": "Track order",
        "showProgress": true,
        "showItems": true,
        "showTimeline": true
      },
      "cssSelectors": {
        "*": { "classes": "mx-auto flex w-full max-w-2xl flex-col gap-5" }
      },
      "children": []
    }
  },

  {
    title: 'Compact (no items)',
    thumbnail: '',
    content: {
      "id": "otr-compact",
      "type": "orderTracking",
      "options": {
        "title": "Where is my order?",
        "subtitle": "",
        "buttonText": "Track",
        "showProgress": true,
        "showItems": false,
        "showTimeline": true
      },
      "cssSelectors": {
        "*": { "classes": "flex w-full max-w-xl flex-col gap-4" },
        "title": { "classes": "flex items-center gap-2 text-lg font-semibold text-gray-900" },
        "result": { "classes": "flex flex-col gap-4 rounded-xl bg-gray-50 p-4" },
        "delivery": { "classes": "flex flex-col gap-3" }
      },
      "children": []
    }
  },

  {
    title: 'Stacked form, shadowed result',
    thumbnail: '',
    content: {
      "id": "otr-stacked",
      "type": "orderTracking",
      "options": {
        "title": "Order status",
        "subtitle": "We'll show you every update from packing to your door.",
        "buttonText": "Check status",
        "showProgress": true,
        "showItems": true,
        "showTimeline": true
      },
      "cssSelectors": {
        "*": { "classes": "mx-auto flex w-full max-w-lg flex-col gap-6" },
        "header": { "classes": "flex flex-col items-center gap-1 text-center" },
        "title": { "classes": "flex items-center gap-2 text-2xl font-bold text-gray-900" },
        "form": { "classes": "flex flex-col gap-3" },
        "fields": { "classes": "flex flex-col gap-3" },
        "submit-button": { "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black disabled:opacity-60" },
        "result": { "classes": "flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-xl shadow-gray-900/10" },
        "step-dot-done": { "classes": "!border-gray-900 !bg-gray-900 !text-white" },
        "status-badge": { "classes": "inline-flex items-center rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white" },
        "event-latest": { "classes": "before:!bg-gray-900" },
        "tracking-link": { "classes": "inline-flex items-center gap-1 text-sm font-medium text-gray-900 underline underline-offset-2" }
      },
      "children": []
    }
  },

];

export default layouts;
