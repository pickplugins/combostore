/**
 * Element layouts for the `productStockStatus` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productStockStatus` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "productStockStatus"`. (PageBuilder.jsx regenerates
 * all ids on paste/replace, so the readable ids below are safe.)
 *
 * productStockStatus is a leaf: an optional prefix label, then one of two state
 * rows, each with an optional icon and its text.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. The status does not come from the product. ProductStockStatus.jsx:35 reads
 *    `options?.stock_status ?? 'instock'` -- the product-based version is sitting
 *    commented out on the next line -- and `usePost()` (:36) is never used. So
 *    every product shows "In stock" until that line is switched back. Note
 *    `stock_status` is not declared in the definition's options either, so the
 *    panel cannot set it.
 *    Consequence for presets: five of the six leave it alone (and therefore read
 *    as in-stock), and Out Of Stock Preview sets it explicitly so the red state
 *    can be designed and reviewed. That preset forces the state everywhere it is
 *    used, front end included -- it is for previewing, not for shipping.
 *
 * 2. Four declared selector keys are never read: `out-of-stock-label`,
 *    `out-of-stock-icon`, `in-stock-label` and `in-stock-icon`. Both state rows
 *    use `label-text` for their text (:99, :114) and `icon` for their icon
 *    (:94, :109) -- and `icon` is not declared anywhere. The four dead keys are
 *    kept below to match the definition; `icon` is included because it is the
 *    one that works.
 *
 * 3. `label-text` is shared. The prefix label's text (:81) and both status texts
 *    use the same key, so they cannot be styled apart. These presets keep
 *    `label-text` to size and weight only and put the state colour on the
 *    `in-stock` / `out-of-stock` wrapper, letting the text inherit it. That way
 *    one key serves both without a fight.
 *
 * 4. `stock-status` and `in-stock`/`out-of-stock` land on the same div (:91,
 *    :107), so overlapping utilities between them would be decided by stylesheet
 *    order rather than class order. Layout lives in `stock-status` here and
 *    colour in the per-state keys, with no overlap.
 *
 * 5. Typo in the renderer: :110 passes `Iize={iconSize}` instead of `size`, so
 *    the in-stock icon ignores iconSize and renders at Tabler's default 24px --
 *    and React forwards the unknown prop to the SVG, which logs a warning. The
 *    out-of-stock icon at :95 is correct. Until that is fixed, the in-stock
 *    presets size their icon with an arbitrary variant on the `icon` key
 *    (`[&_svg]:size-4`), which also works on the correct branch.
 *
 * 6. Guards are in place for a change: the prefix label only renders when
 *    `options.label` is set (:73), and each icon div only renders when its name
 *    resolves through TablerIcons (:75, :93, :108). So no empty boxes, and no
 *    `empty:hidden` needed. Icon names must still be exact @tabler/icons-react
 *    exports; every one used here was checked against the installed package.
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
