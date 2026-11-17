/**
 * Element layouts for the `productDimensions` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productDimensions` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "productDimensions"`. (PageBuilder.jsx
 * regenerates all ids on paste/replace, so the readable ids below are safe.)
 *
 * productDimensions is a leaf: an optional heading (`label`, with `icon` and
 * `label-text`), then `items` holding a row (`item`, plus `item-<key>`) per
 * dimension, each with `item-label`, `item-value` and `unit`.
 * ProductDimensionsView (the shop) and the builder's ProductDimensions.jsx
 * render the same ProductDimensionsMarkup.
 *
 * 1. Values are the product editor's plain numbers; the units come from the
 *    block (`weightUnit`, `dimensionUnit`). A variation's own value wins
 *    over the product's, field by field. Unset / 0 values are skipped, and a
 *    product with none renders nothing on the shop (dimmed samples in the
 *    builder).
 *
 * 2. `format: "inline"` puts length, width and height in one `item-size`
 *    row ("30 × 20 × 10 cm"), then the weight row; "list" (the default) has a
 *    row each.
 *
 * 3. Icon names must be exact @tabler/icons-react exports; an unknown one
 *    drops the icon.
 */

var layouts = [

  {
    title: 'Spec List',
    thumbnail: '',
    content: {
      "id": "dims-list",
      "type": "productDimensions",
      "options": {
        "format": "list",
        "weightUnit": "kg",
        "dimensionUnit": "cm",
        "showWeight": true,
        "label": "Dimensions",
        "icon": "",
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-2" },
        "label": { "classes": "flex items-center gap-2" },
        "icon": { "classes": "flex items-center" },
        "label-text": { "classes": "text-sm font-semibold text-gray-900" },
        "items": { "classes": "flex flex-col divide-y divide-gray-100 rounded-lg border border-gray-200 text-sm" },
        "item": { "classes": "flex items-center gap-1 px-3 py-2" },
        "item-label": { "classes": "mr-auto text-gray-500" },
        "item-value": { "classes": "font-medium text-gray-900" },
        "unit": { "classes": "text-gray-500" }
      }
    }
  },

  {
    title: 'Inline Size',
    thumbnail: '',
    content: {
      "id": "dims-inline",
      "type": "productDimensions",
      "options": {
        "format": "inline",
        "weightUnit": "kg",
        "dimensionUnit": "cm",
        "showWeight": true,
        "label": "",
        "icon": "IconRuler2",
        "iconSize": 18,
        "sizeLabel": "Size:",
        "weightLabel": "Weight:"
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 text-sm" },
        "label": { "classes": "flex items-center text-gray-400" },
        "icon": { "classes": "flex items-center" },
        "label-text": { "classes": "" },
        "items": { "classes": "flex flex-wrap items-center gap-x-4 gap-y-1" },
        "item": { "classes": "flex items-center gap-1" },
        "item-label": { "classes": "text-gray-500" },
        "item-value": { "classes": "font-medium text-gray-900" },
        "unit": { "classes": "text-gray-500" }
      }
    }
  },

  {
    title: 'Spec Tiles',
    thumbnail: '',
    content: {
      "id": "dims-tiles",
      "type": "productDimensions",
      "options": {
        "format": "list",
        "weightUnit": "kg",
        "dimensionUnit": "cm",
        "showWeight": true,
        "label": "",
        "icon": "",
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-2" },
        "label": { "classes": "" },
        "icon": { "classes": "" },
        "label-text": { "classes": "" },
        "items": { "classes": "grid grid-cols-2 gap-2 sm:grid-cols-4" },
        "item": { "classes": "flex flex-wrap items-baseline gap-x-1 rounded-lg bg-gray-50 px-3 py-2" },
        "item-label": { "classes": "w-full text-xs uppercase tracking-wide text-gray-500" },
        "item-value": { "classes": "text-base font-semibold text-gray-900" },
        "unit": { "classes": "text-xs text-gray-500" }
      }
    }
  },

];

export default layouts;
