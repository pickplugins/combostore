/**
 * Element layouts for the `productCategories` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productCategories` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "productCategories"`. (PageBuilder.jsx regenerates
 * all ids on paste/replace, so the readable ids below are safe.)
 *
 * productCategories is a leaf: an optional label, then one link per category
 * of the product, each to its /categories/<slug>/ page. ProductCategoriesView
 * (the shop) and the builder's ProductCategories.jsx render the same
 * ProductTermLinksMarkup. The presets are built for where categories get
 * used: as an eyebrow above a product title, as a breadcrumb-ish trail, or as
 * badges.
 *
 * Notes that shaped these presets:
 *
 * 1. The separator span lives INSIDE each category's link, after its name.
 *    So anything that gives `item` a background, padding and a radius puts the
 *    separator inside the badge. The badge presets set `separator` to `hidden`
 *    and space the items with a gap on `items`; the inline presets keep it and
 *    leave `item` unboxed.
 *
 * 2. `options.separator` sets the text between categories (", " by default;
 *    "" leaves it out). The breadcrumb preset predates that and generates a
 *    slash off `item` instead -- `after:content-['/'] last:after:content-none`
 *    with the span hidden -- which still works, since the links are direct
 *    children of `items`.
 *
 * 3. On the shop a product without categories shows nothing; the builder then
 *    shows a dimmed sample "Groceries, Organic" so the block stays visible and
 *    selectable. Links work on the shop and never navigate in the builder.
 */

var layouts = [

  {
    title: 'Eyebrow Above Title',
    thumbnail: '',
    content: {
      "id": "pc-eyebrow",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
        "label": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-orange-600 hover:text-orange-700 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-orange-300 mr-1" }
      }
    },
  },

  {
    title: 'Breadcrumb Trail',
    thumbnail: '',
    content: {
      "id": "pc-crumb",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-center" },
        "item": { "classes": "text-xs text-neutral-500 hover:text-neutral-900 transition-colors after:content-['/'] after:mx-2 after:text-neutral-300 last:after:content-none" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Category Badges',
    thumbnail: '',
    content: {
      "id": "pc-badge",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap gap-2" },
        "item": { "classes": "px-2.5 py-1 text-xs font-medium text-orange-700 bg-orange-50 border border-orange-100 rounded-md hover:bg-orange-100 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Labeled Category Row',
    thumbnail: '',
    content: {
      "id": "pc-labeled",
      "type": "productCategories",
      "options": {
        "label": "Category",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3 flex-wrap py-2 border-y border-neutral-100" },
        "label": { "classes": "shrink-0 text-xs font-medium text-neutral-500" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-sm text-neutral-800 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-400 mr-1" }
      }
    },
  },

  {
    title: 'Dark Eyebrow',
    thumbnail: '',
    content: {
      "id": "pc-dark",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
        "label": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-500" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-600 mr-1" }
      }
    },
  },

  {
    title: 'Compact Muted',
    thumbnail: '',
    content: {
      "id": "pc-min",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-1.5 flex-wrap" },
        "label": { "classes": "text-xs text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-xs text-neutral-400 hover:text-neutral-700 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-300 mr-1" }
      }
    },
  },

];

export default layouts;
