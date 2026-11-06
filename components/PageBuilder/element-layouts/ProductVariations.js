/**
 * Element layouts for the `productVariations` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productVariations`
 * block and its Replace action splices the preset in place of that block, so
 * every root here MUST be `"type": "productVariations"`. (PageBuilder.jsx
 * regenerates all ids on paste/replace, so the readable ids below are safe.)
 *
 * This element is a leaf and styling-only: no children and no options; the
 * attributes and variations come from the product. ProductVariationsView
 * (the shop) and the builder's ProductVariations.jsx render the same
 * VariationsMarkup: an `attr-wrap` column, one `attr-item` per attribute
 * holding an `attr-title` and an `attr-items-wrap` row of `variation-item`
 * tiles. Picking a full combination sets the product's active variation, which
 * the price, gallery and add-to-cart blocks follow.
 *
 * Notes that shaped these presets:
 *
 * 1. `attr-item` decides whether a group stacks (title above tiles) or sits on
 *    one row (title beside tiles).
 *
 * 2. `variation-selected` is added to a picked tile and `variation-disabled` to
 *    one whose combination is out of stock. These presets fill both in; the
 *    builder lets a tile be clicked to see the selected look, and shows its last
 *    sample option (Size: Large) as unavailable.
 *
 * 3. The tile keys (`attr-items-wrap`, `variation-item`, `variation-selected`,
 *    `variation-disabled`) treat a blank value as "use the default look", so a
 *    preset cannot switch the selected highlight off by leaving it empty.
 *
 * 4. Outside a product loop, or on a product without attributes, the builder
 *    shows sample Color (Red/Blue/Green) and Size (Small/Medium/Large)
 *    options. On the shop a product without attributes shows nothing.
 *
 * 5. `variation-price` is retired. Only the old builder preview drew it, as a
 *    hardcoded "$123"; the presets below may still carry it, and it is ignored.
 */

var layouts = [

  {
    title: 'Boxed Swatches',
    thumbnail: '',
    content: {
      "id": "pvp-boxed",
      "type": "productVariations",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "attr-wrap": { "classes": "flex flex-col gap-5" },
        "attr-item": { "classes": "flex flex-col gap-2" },
        "attr-title": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
        "attr-items-wrap": { "classes": "flex flex-wrap gap-2" },
        "variation-item": { "classes": "min-w-14 px-4 py-2 text-sm font-medium text-center text-neutral-700 bg-white border border-neutral-300 rounded-md cursor-pointer hover:border-neutral-900 transition-colors" },
        "variation-price": { "classes": "text-2xl font-bold text-neutral-900" },
        "variation-selected": { "classes": "border-neutral-900 bg-neutral-900 text-white" },
        "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
      }
    },
  },

  {
    title: 'Pill Options',
    thumbnail: '',
    content: {
      "id": "pvp-pill",
      "type": "productVariations",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "attr-wrap": { "classes": "flex flex-col gap-4" },
        "attr-item": { "classes": "flex flex-col gap-2" },
        "attr-title": { "classes": "text-sm font-semibold text-neutral-800" },
        "attr-items-wrap": { "classes": "flex flex-wrap gap-2" },
        "variation-item": { "classes": "px-4 py-1.5 text-sm font-medium text-neutral-600 bg-neutral-100 rounded-full cursor-pointer hover:bg-orange-50 hover:text-orange-700 transition-colors" },
        "variation-price": { "classes": "text-xl font-bold text-orange-600" },
        "variation-selected": { "classes": "bg-orange-500 text-white hover:bg-orange-500 hover:text-white" },
        "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
      }
    },
  },

  {
    title: 'Compact Inline Rows',
    thumbnail: '',
    content: {
      "id": "pvp-inline",
      "type": "productVariations",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "attr-wrap": { "classes": "flex flex-col gap-2" },
        "attr-item": { "classes": "flex items-center justify-between gap-4 py-2 border-b border-neutral-100" },
        "attr-title": { "classes": "shrink-0 text-xs font-medium text-neutral-500" },
        "attr-items-wrap": { "classes": "flex flex-wrap justify-end gap-1.5" },
        "variation-item": { "classes": "px-2.5 py-1 text-xs font-medium text-neutral-700 border border-neutral-200 rounded cursor-pointer hover:border-orange-400 hover:text-orange-600 transition-colors" },
        "variation-price": { "classes": "pt-2 text-lg font-bold text-neutral-900" },
        "variation-selected": { "classes": "border-orange-500 bg-orange-50 text-orange-700" },
        "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
      }
    },
  },

  {
    title: 'Dark Swatches',
    thumbnail: '',
    content: {
      "id": "pvp-dark",
      "type": "productVariations",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-900 rounded-xl p-5" },
        "attr-wrap": { "classes": "flex flex-col gap-5" },
        "attr-item": { "classes": "flex flex-col gap-2" },
        "attr-title": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
        "attr-items-wrap": { "classes": "flex flex-wrap gap-2" },
        "variation-item": { "classes": "min-w-14 px-4 py-2 text-sm font-medium text-center text-neutral-300 bg-white/5 border border-white/10 rounded-md cursor-pointer hover:border-amber-400 hover:text-white transition-colors" },
        "variation-price": { "classes": "text-2xl font-bold text-amber-400" },
        "variation-selected": { "classes": "border-amber-400 bg-amber-400 text-neutral-900" },
        "variation-disabled": { "classes": "opacity-30 cursor-not-allowed line-through" }
      }
    },
  },

  {
    title: 'Large Button Grid',
    thumbnail: '',
    content: {
      "id": "pvp-grid",
      "type": "productVariations",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "attr-wrap": { "classes": "flex flex-col gap-6" },
        "attr-item": { "classes": "flex flex-col gap-3" },
        "attr-title": { "classes": "text-sm font-semibold text-neutral-900" },
        "attr-items-wrap": { "classes": "grid grid-cols-2 sm:grid-cols-3 gap-2.5" },
        "variation-item": { "classes": "px-4 py-3 text-sm font-medium text-center text-neutral-800 bg-white border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-colors" },
        "variation-price": { "classes": "text-2xl font-bold text-neutral-900" },
        "variation-selected": { "classes": "border-orange-500 bg-orange-50 text-orange-700" },
        "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
      }
    },
  },

  {
    title: 'Minimal Underline',
    thumbnail: '',
    content: {
      "id": "pvp-min",
      "type": "productVariations",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "attr-wrap": { "classes": "flex flex-col gap-5" },
        "attr-item": { "classes": "flex flex-col gap-1.5" },
        "attr-title": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "attr-items-wrap": { "classes": "flex flex-wrap gap-5" },
        "variation-item": { "classes": "pb-1 text-sm font-medium text-neutral-500 border-b-2 border-transparent cursor-pointer hover:text-neutral-900 hover:border-neutral-300 transition-colors" },
        "variation-price": { "classes": "text-xl font-semibold text-neutral-900" },
        "variation-selected": { "classes": "text-neutral-900 border-neutral-900" },
        "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
      }
    },
  },

];

export default layouts;
