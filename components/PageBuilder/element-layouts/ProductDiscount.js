/**
 * Element layouts for the `productDiscount` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productDiscount` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "productDiscount"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * productDiscount is a leaf: no children, and all a preset does is style the
 * percentage and its optional label.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. In the builder the badge always shows. On a product that is not
 *    discounted, or outside a product loop, ProductDiscount.jsx draws a dimmed
 *    sample "20%" so the block can be selected and styled; on the shop
 *    ProductDiscountView renders nothing unless the product is marked down.
 *    Both use the same ProductDiscountMarkup.
 *
 * 2. What it outputs is a bare percentage -- `{percent}%` from
 *    calculateDiscountPercentage (:92), rounded, with no minus sign and no
 *    "off". So the word comes from `options.label`, which renders as a span
 *    after the number and is properly guarded by `{label && ...}`, so an
 *    empty label leaves no stray box. That is why most presets below set a label
 *    and the two that do not are designed to read correctly without one.
 *
 * 3. All three declared selector keys -- `*`, `discount`, `label` -- are read,
 *    and nothing undeclared is. This is one of the tidier elements.
 *
 * 4. `label` is the only option. The panel's old Icon and Icon Size controls
 *    were never drawn and are gone; ten template blocks still carry an `icon`
 *    copied from add-to-cart, which nothing reads.
 *
 * 5. The Card Corner preset positions itself absolutely. That only works if the
 *    card or thumbnail wrapper it sits in is `relative` -- the product card
 *    presets in PostGrid.js and TermsGrid.js set that on their `loop-item`.
 */

var layouts = [

  {
    title: 'Solid Sale Badge',
    thumbnail: '',
    content: {
      "id": "pd-solid",
      "type": "productDiscount",
      "options": {
        "label": "OFF",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
        "discount": { "classes": "text-xs font-bold text-white leading-none" },
        "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
      }
    },
  },

  {
    title: 'Circle Burst',
    thumbnail: '',
    content: {
      "id": "pd-circle",
      "type": "productDiscount",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center justify-center w-12 h-12 bg-red-600 rounded-full shadow-sm" },
        "discount": { "classes": "text-xs font-bold text-white leading-none" },
        "label": { "classes": "text-[10px] font-semibold uppercase text-white/80" }
      }
    },
  },

  {
    title: 'Card Corner Ribbon',
    thumbnail: '',
    content: {
      "id": "pd-corner",
      "type": "productDiscount",
      "options": {
        "label": "OFF",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "absolute top-3 left-0 z-10 flex gap-1 items-center pl-2.5 pr-3 py-1 bg-amber-500 rounded-r-full shadow-sm" },
        "discount": { "classes": "text-xs font-bold text-neutral-900 leading-none" },
        "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-neutral-900/70 leading-none" }
      }
    },
  },

  {
    title: 'Outline Saving',
    thumbnail: '',
    content: {
      "id": "pd-outline",
      "type": "productDiscount",
      "options": {
        "label": "saving",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-1.5 items-center w-fit px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full" },
        "discount": { "classes": "text-xs font-bold text-emerald-700 leading-none" },
        "label": { "classes": "text-[11px] text-emerald-600 leading-none" }
      }
    },
  },

  {
    title: 'Dark Amber Badge',
    thumbnail: '',
    content: {
      "id": "pd-dark",
      "type": "productDiscount",
      "options": {
        "label": "OFF",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-white/10 border border-amber-400/30 rounded-md" },
        "discount": { "classes": "text-xs font-bold text-amber-400 leading-none" },
        "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-amber-400/70 leading-none" }
      }
    },
  },

  {
    title: 'Inline Text Only',
    thumbnail: '',
    content: {
      "id": "pd-inline",
      "type": "productDiscount",
      "options": {
        "label": "off",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-1 items-baseline" },
        "discount": { "classes": "text-xs font-semibold text-red-600" },
        "label": { "classes": "text-xs text-red-600" }
      }
    },
  },

];

export default layouts;
