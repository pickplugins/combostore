/**
 * Element layouts for the `productMoq` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productMoq` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "productMoq"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * productMoq is a leaf: an optional icon, an optional label, the quantity
 * (`value`) and an optional unit, in that DOM order. ProductMoqView (the shop)
 * and the builder's ProductMoq.jsx render the same ProductMoqMarkup.
 *
 * 1. The quantity is the minimum the cart enforces: the picked variation's
 *    own MOQ when it has one, otherwise the product's. With `hideWhenOne`
 *    (the default) the shop shows nothing for a minimum of 1 and the builder
 *    a dimmed sample "5".
 *
 * 2. `options.icon` must be an exact @tabler/icons-react export name; one that
 *    does not resolve drops the icon div. `iconSize` defaults to 20 when unset.
 */

var layouts = [

  {
    title: 'Label Inline',
    thumbnail: '',
    content: {
      "id": "moq-inline",
      "type": "productMoq",
      "options": {
        "label": "Minimum order:",
        "unit": "pcs",
        "icon": "",
        "iconSize": 20,
        "hideWhenOne": true
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-1.5 text-sm" },
        "icon": { "classes": "" },
        "label": { "classes": "text-gray-500" },
        "value": { "classes": "font-semibold text-gray-900" },
        "unit": { "classes": "text-gray-500" }
      },
    }
  },

  {
    title: 'Info Pill',
    thumbnail: '',
    content: {
      "id": "moq-pill",
      "type": "productMoq",
      "options": {
        "label": "Min. order",
        "unit": "units",
        "icon": "IconPackage",
        "iconSize": 16,
        "hideWhenOne": true
      },
      "cssSelectors": {
        "*": { "classes": "inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-200" },
        "icon": { "classes": "flex items-center" },
        "label": { "classes": "" },
        "value": { "classes": "font-bold" },
        "unit": { "classes": "" }
      },
    }
  },

  {
    title: 'Notice Box',
    thumbnail: '',
    content: {
      "id": "moq-notice",
      "type": "productMoq",
      "options": {
        "label": "This item is sold in a minimum quantity of",
        "unit": "pieces",
        "icon": "IconInfoCircle",
        "iconSize": 18,
        "hideWhenOne": true
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-wrap items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-900" },
        "icon": { "classes": "flex items-center text-blue-600" },
        "label": { "classes": "" },
        "value": { "classes": "font-semibold" },
        "unit": { "classes": "" }
      },
    }
  },

];

export default layouts;
