/**
 * Element layouts for the `productSizeGuide` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productSizeGuide` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "productSizeGuide"`. (PageBuilder.jsx
 * regenerates all ids on paste/replace, so the readable ids below are safe.)
 *
 * productSizeGuide is a leaf. display "popup": a `trigger` (`icon`,
 * `trigger-text`) opening an `overlay` > `panel` with a `header` (`title`,
 * `close`) and the `body`. display "inline": the `header` (`title`) and the
 * `body` in place. The body holds `unit`, `table-wrap` > `table` (`thead`,
 * `th`, `tr`, `td`, `td-first` for each row's size) then `note` and `image`.
 * ProductSizeGuideView (the shop) and the builder's ProductSizeGuide.jsx
 * render the same markup.
 *
 * 1. The chart comes from the product's Size Guide addon; a product without
 *    one renders nothing on the shop (a dimmed sample in the builder).
 * 2. Keep `overlay` fixed (`fixed inset-0`) with a high z-index: the shop
 *    renders it into <body>.
 * 3. Icon names must be exact @tabler/icons-react exports; an unknown one
 *    drops the icon.
 */

var layouts = [

  {
    title: 'Underlined Link + Popup',
    thumbnail: '',
    content: {
      "id": "sizeguide-link",
      "type": "productSizeGuide",
      "options": {
        "display": "popup",
        "buttonText": "Size guide",
        "icon": "IconRuler2",
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "trigger": { "classes": "inline-flex w-fit cursor-pointer items-center gap-1.5 text-sm font-medium text-gray-700 underline underline-offset-4 hover:text-gray-900" },
        "icon": { "classes": "flex items-center" },
        "overlay": { "classes": "fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4" },
        "panel": { "classes": "relative flex max-h-[85vh] w-full max-w-2xl flex-col gap-4 overflow-y-auto rounded-xl bg-white p-5 shadow-xl" },
        "header": { "classes": "flex items-center justify-between gap-4" },
        "title": { "classes": "text-lg font-semibold text-gray-900" },
        "close": { "classes": "inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-gray-500 hover:bg-gray-100" },
        "body": { "classes": "flex flex-col gap-3" },
        "unit": { "classes": "text-xs text-gray-500" },
        "table-wrap": { "classes": "overflow-x-auto rounded-lg border border-gray-200" },
        "table": { "classes": "w-full border-collapse text-sm" },
        "thead": { "classes": "bg-gray-50" },
        "th": { "classes": "whitespace-nowrap px-3 py-2 text-left font-semibold text-gray-900" },
        "tr": { "classes": "border-t border-gray-100" },
        "td": { "classes": "whitespace-nowrap px-3 py-2 text-left font-normal text-gray-700" },
        "td-first": { "classes": "!font-medium !text-gray-900" },
        "note": { "classes": "whitespace-pre-line text-sm text-gray-600" },
        "image": { "classes": "max-w-full rounded-lg" }
      }
    }
  },

  {
    title: 'Outlined Button + Popup',
    thumbnail: '',
    content: {
      "id": "sizeguide-button",
      "type": "productSizeGuide",
      "options": {
        "display": "popup",
        "buttonText": "Find your size",
        "icon": "IconRulerMeasure",
        "iconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "trigger": { "classes": "inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-800 hover:border-gray-900" },
        "icon": { "classes": "flex items-center" },
        "overlay": { "classes": "fixed inset-0 z-[999] flex items-end justify-center bg-black/50 sm:items-center sm:p-4" },
        "panel": { "classes": "relative flex max-h-[90vh] w-full max-w-xl flex-col gap-4 overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl" },
        "header": { "classes": "flex items-center justify-between gap-4 border-b border-gray-100 pb-4" },
        "title": { "classes": "text-base font-semibold uppercase tracking-wide text-gray-900" },
        "close": { "classes": "inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200" },
        "body": { "classes": "flex flex-col gap-4" },
        "unit": { "classes": "text-xs uppercase tracking-wide text-gray-500" },
        "table-wrap": { "classes": "overflow-x-auto" },
        "table": { "classes": "w-full border-collapse text-sm" },
        "thead": { "classes": "" },
        "th": { "classes": "whitespace-nowrap border-b-2 border-gray-900 px-3 py-2 text-left font-semibold text-gray-900" },
        "tr": { "classes": "border-b border-gray-100 even:bg-gray-50" },
        "td": { "classes": "whitespace-nowrap px-3 py-2.5 text-left font-normal text-gray-700" },
        "td-first": { "classes": "!font-semibold !text-gray-900" },
        "note": { "classes": "whitespace-pre-line rounded-lg bg-gray-50 p-3 text-xs text-gray-600" },
        "image": { "classes": "mx-auto max-h-64 rounded-lg" }
      }
    }
  },

  {
    title: 'Inline Chart',
    thumbnail: '',
    content: {
      "id": "sizeguide-inline",
      "type": "productSizeGuide",
      "options": {
        "display": "inline",
        "showHeading": true,
        "heading": "Size guide"
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "header": { "classes": "flex items-center justify-between gap-4" },
        "title": { "classes": "text-base font-semibold text-gray-900" },
        "body": { "classes": "flex flex-col gap-3" },
        "unit": { "classes": "text-xs text-gray-500" },
        "table-wrap": { "classes": "overflow-x-auto rounded-lg border border-gray-200" },
        "table": { "classes": "w-full border-collapse text-sm" },
        "thead": { "classes": "bg-gray-50" },
        "th": { "classes": "whitespace-nowrap px-3 py-2 text-left font-semibold text-gray-900" },
        "tr": { "classes": "border-t border-gray-100" },
        "td": { "classes": "whitespace-nowrap px-3 py-2 text-left font-normal text-gray-700" },
        "td-first": { "classes": "!font-medium !text-gray-900" },
        "note": { "classes": "whitespace-pre-line text-sm text-gray-600" },
        "image": { "classes": "max-w-full rounded-lg" }
      }
    }
  },

];

export default layouts;
