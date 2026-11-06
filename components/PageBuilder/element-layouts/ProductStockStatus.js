/**
 * Element layouts for the `productStockStatus` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productStockStatus` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "productStockStatus"`. (PageBuilder.jsx regenerates
 * all ids on paste/replace, so the readable ids below are safe.)
 *
 * productStockStatus is a leaf: an optional prefix label, then the product's
 * status -- in stock or out of stock -- with an optional icon and its text.
 * ProductStockStatusView (the shop) and the builder's ProductStockStatus.jsx
 * render the same ProductStockStatusMarkup.
 *
 * Notes that shaped these presets:
 *
 * 1. The status comes from the product: its stock_status, or for a picked
 *    variation the same rule the variation picker uses to grey out a tile.
 *    `options.stock_status` is only the builder's "Preview as" state outside a
 *    product loop. The Out Of Stock Preview preset sets it so the red state
 *    can be designed; it no longer forces that state on the shop (it used to,
 *    on every product, because the block read its status from that option).
 *
 * 2. The status row gets `stock-status` plus `in-stock` or `out-of-stock`;
 *    its icon `icon` plus `in-stock-icon` / `out-of-stock-icon`; its text
 *    `label-text` plus `in-stock-label` / `out-of-stock-label`. These presets
 *    put the state colour on `in-stock` / `out-of-stock` and leave the four
 *    per-state icon and label keys empty.
 *
 * 3. `label-text` is shared by the prefix label and the status text, so these
 *    presets keep it to size and weight and let the colour come from the state
 *    wrapper.
 *
 * 4. `stock-status` and `in-stock` / `out-of-stock` land on the same div, so
 *    overlapping utilities between them would be decided by stylesheet order.
 *    Layout lives in `stock-status` here and colour in the per-state keys.
 *
 * 5. Icons use `iconSize` (24 when unset). The presets also size them with an
 *    arbitrary variant on `icon` (`[&_svg]:size-4`). Icon names must be exact
 *    @tabler/icons-react exports; an unknown one drops the icon div.
 */

var layouts = [

  {
    title: 'Green Dot Status',
    thumbnail: '',
    content: {
      "id": "pss-dot",
      "type": "productStockStatus",
      "options": {
        "label": "",
        "labelIcon": "",
        "outOfStockText": "Out of stock",
        "inStockText": "In stock",
        "outOfStockIcon": "IconPointFilled",
        "inStockIcon": "IconPointFilled",
        "iconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3" },
        "stock-status": { "classes": "flex items-center gap-1.5" },
        "label": { "classes": "flex items-center gap-1.5" },
        "label-text": { "classes": "text-sm font-medium" },
        "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
        "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-3" },
        "out-of-stock": { "classes": "text-red-600" },
        "out-of-stock-label": { "classes": "" },
        "out-of-stock-icon": { "classes": "" },
        "in-stock": { "classes": "text-emerald-600" },
        "in-stock-label": { "classes": "" },
        "in-stock-icon": { "classes": "" }
      }
    },
  },

  {
    title: 'Solid Pill',
    thumbnail: '',
    content: {
      "id": "pss-pill",
      "type": "productStockStatus",
      "options": {
        "label": "",
        "labelIcon": "",
        "outOfStockText": "Out of stock",
        "inStockText": "In stock",
        "outOfStockIcon": "IconCircleX",
        "inStockIcon": "IconCircleCheck",
        "iconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3" },
        "stock-status": { "classes": "flex items-center gap-1.5 w-fit px-3 py-1 rounded-full" },
        "label": { "classes": "flex items-center gap-1.5" },
        "label-text": { "classes": "text-xs font-semibold" },
        "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
        "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
        "out-of-stock": { "classes": "bg-red-50 text-red-700" },
        "out-of-stock-label": { "classes": "" },
        "out-of-stock-icon": { "classes": "" },
        "in-stock": { "classes": "bg-emerald-50 text-emerald-700" },
        "in-stock-label": { "classes": "" },
        "in-stock-icon": { "classes": "" }
      }
    },
  },

  {
    title: 'Labeled Availability Row',
    thumbnail: '',
    content: {
      "id": "pss-labeled",
      "type": "productStockStatus",
      "options": {
        "label": "Availability",
        "labelIcon": "IconPackage",
        "outOfStockText": "Out of stock",
        "inStockText": "In stock, ready to ship",
        "outOfStockIcon": "",
        "inStockIcon": "IconCheck",
        "iconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3 py-2 border-y border-neutral-100" },
        "stock-status": { "classes": "flex items-center gap-1.5" },
        "label": { "classes": "flex items-center gap-2 text-neutral-500" },
        "label-text": { "classes": "text-sm font-medium" },
        "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
        "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
        "out-of-stock": { "classes": "text-red-600" },
        "out-of-stock-label": { "classes": "" },
        "out-of-stock-icon": { "classes": "" },
        "in-stock": { "classes": "text-emerald-600" },
        "in-stock-label": { "classes": "" },
        "in-stock-icon": { "classes": "" }
      }
    },
  },

  {
    title: 'Out Of Stock Preview',
    thumbnail: '',
    content: {
      "id": "pss-oos",
      "type": "productStockStatus",
      "options": {
        "label": "",
        "labelIcon": "",
        "outOfStockText": "Out of stock",
        "inStockText": "In stock",
        "outOfStockIcon": "IconAlertCircle",
        "inStockIcon": "IconCircleCheck",
        "iconSize": 16,
        "stock_status": "outofstock"
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3" },
        "stock-status": { "classes": "flex items-center gap-2 w-fit px-3 py-1.5 border rounded-lg" },
        "label": { "classes": "flex items-center gap-1.5" },
        "label-text": { "classes": "text-xs font-semibold uppercase tracking-wide" },
        "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
        "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
        "out-of-stock": { "classes": "border-red-200 bg-red-50 text-red-700" },
        "out-of-stock-label": { "classes": "" },
        "out-of-stock-icon": { "classes": "" },
        "in-stock": { "classes": "border-emerald-200 bg-emerald-50 text-emerald-700" },
        "in-stock-label": { "classes": "" },
        "in-stock-icon": { "classes": "" }
      }
    },
  },

  {
    title: 'Dark Status',
    thumbnail: '',
    content: {
      "id": "pss-dark",
      "type": "productStockStatus",
      "options": {
        "label": "",
        "labelIcon": "",
        "outOfStockText": "Out of stock",
        "inStockText": "In stock",
        "outOfStockIcon": "IconCircleX",
        "inStockIcon": "IconPointFilled",
        "iconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3" },
        "stock-status": { "classes": "flex items-center gap-1.5 w-fit px-2.5 py-1 bg-white/5 border border-white/10 rounded-full" },
        "label": { "classes": "flex items-center gap-1.5 text-neutral-500" },
        "label-text": { "classes": "text-xs font-medium" },
        "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
        "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-3" },
        "out-of-stock": { "classes": "text-red-400" },
        "out-of-stock-label": { "classes": "" },
        "out-of-stock-icon": { "classes": "" },
        "in-stock": { "classes": "text-emerald-400" },
        "in-stock-label": { "classes": "" },
        "in-stock-icon": { "classes": "" }
      }
    },
  },

  {
    title: 'Minimal Text',
    thumbnail: '',
    content: {
      "id": "pss-min",
      "type": "productStockStatus",
      "options": {
        "label": "",
        "labelIcon": "",
        "outOfStockText": "Out of stock",
        "inStockText": "In stock",
        "outOfStockIcon": "",
        "inStockIcon": "",
        "iconSize": 14
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2" },
        "stock-status": { "classes": "flex items-center gap-1" },
        "label": { "classes": "flex items-center gap-1" },
        "label-text": { "classes": "text-xs" },
        "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-3.5" },
        "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-3.5" },
        "out-of-stock": { "classes": "text-neutral-400 line-through" },
        "out-of-stock-label": { "classes": "" },
        "out-of-stock-icon": { "classes": "" },
        "in-stock": { "classes": "text-neutral-500" },
        "in-stock-label": { "classes": "" },
        "in-stock-icon": { "classes": "" }
      }
    },
  },

];

export default layouts;
