/**
 * Element layouts for the `productBrands` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productBrands` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "productBrands"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * productBrands is a leaf: an optional label, then one link per brand of the
 * product, each to its /brands/<slug>/ page. ProductBrandsView (the shop) and
 * the builder's ProductBrands.jsx render the same ProductTermLinksMarkup as
 * the categories and tags blocks. The presets below are built for where a
 * brand appears: as a meta line under a product title, as a linked name, or
 * as a chip.
 *
 * Notes that shaped these presets:
 *
 * 1. The separator span lives INSIDE each brand's link, after its name. So
 *    anything that gives `item` a background, padding and a radius puts the
 *    separator inside the chip. The chip presets set `separator` to `hidden`
 *    and space the items with a gap on `items`; the inline presets keep it and
 *    leave `item` unboxed. `options.separator` sets its text (", " by
 *    default; "" leaves it out).
 *
 * 2. Because the separator is inside the link, a `hover:underline` on `item`
 *    underlines it too. The linked-name preset marks `item` as a `group` and
 *    puts `group-hover:underline` on `category-name` (the name span; the key
 *    is named after the categories block), so only the brand name underlines.
 *
 * 3. The label div is a sibling of `items`, not a parent, so putting them on
 *    one line takes a `flex` on `*`. That is what the meta and spec presets
 *    do; the chip presets leave the label empty and let `items` own the row.
 *    This element's `*` has no default classes.
 *
 * 4. On the shop a product without a brand shows nothing; the builder then
 *    shows a dimmed sample "Acme, Northwind". Links work on the shop and never
 *    navigate in the builder.
 */

var layouts = [

  {
    title: 'Brand Meta Line',
    thumbnail: '',
    content: {
      "id": "pbr-meta",
      "type": "productBrands",
      "options": {
        "label": "Brand:",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-1.5" },
        "label": { "classes": "text-xs text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-xs font-medium text-neutral-700 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-300" }
      }
    },
  },

  {
    title: 'Linked Brand Name',
    thumbnail: '',
    content: {
      "id": "pbr-linked",
      "type": "productBrands",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "label": { "classes": "" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "group text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors" },
        "category-name": { "classes": "group-hover:underline underline-offset-2" },
        "separator": { "classes": "text-neutral-300 no-underline" }
      }
    },
  },

  {
    title: 'Outlined Chips',
    thumbnail: '',
    content: {
      "id": "pbr-outline",
      "type": "productBrands",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "label": { "classes": "" },
        "items": { "classes": "flex flex-wrap gap-2" },
        "item": { "classes": "px-2.5 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 hover:border-orange-400 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "whitespace-nowrap" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Solid Chips',
    thumbnail: '',
    content: {
      "id": "pbr-solid",
      "type": "productBrands",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "label": { "classes": "" },
        "items": { "classes": "flex flex-wrap gap-1.5" },
        "item": { "classes": "px-2 py-0.5 rounded bg-neutral-900 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-neutral-700 transition-colors" },
        "category-name": { "classes": "whitespace-nowrap" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Spec Row',
    thumbnail: '',
    content: {
      "id": "pbr-spec",
      "type": "productBrands",
      "options": {
        "label": "Brand",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-start gap-4 py-2 border-b border-neutral-100" },
        "label": { "classes": "w-28 shrink-0 text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline gap-x-1 text-sm text-neutral-700" },
        "item": { "classes": "hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-300" }
      }
    },
  },

  {
    title: 'Dark Inline Brand',
    thumbnail: '',
    content: {
      "id": "pbr-dark",
      "type": "productBrands",
      "options": {
        "label": "Brand:",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-1.5" },
        "label": { "classes": "text-xs text-neutral-500" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "group text-xs font-medium text-neutral-200 hover:text-amber-400 transition-colors" },
        "category-name": { "classes": "group-hover:underline underline-offset-2" },
        "separator": { "classes": "text-neutral-600 no-underline" }
      }
    },
  },

];

export default layouts;
