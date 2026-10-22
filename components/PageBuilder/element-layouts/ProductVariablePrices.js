/**
 * Element layouts for the `productVariablePrices` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productVariablePrices`
 * block and its Replace action splices the preset in place of that block, so
 * every root here MUST be `"type": "productVariablePrices"`. (PageBuilder.jsx
 * regenerates all ids on paste/replace, so the readable ids below are safe.)
 *
 * This element is a leaf and, as it stands, a styling-only element: it takes no
 * children and ignores every option it declares, so a preset is exactly one
 * thing -- the look of the attribute selector. What the renderer draws is fixed:
 * an `attr-wrap` column, one `attr-item` group per attribute holding an
 * `attr-title` and an `attr-items-wrap` row of `variation-item` chips, and a
 * single `variation-price` line at the end.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. `attr-item` (ProductVariablePrices.jsx:118) is read but not declared in the
 *    definition's cssSelectors. It is the wrapper for one attribute group, so it
 *    is the key that decides whether a group stacks (title above chips) or sits
 *    on one row (title beside chips). The presets set it; adding it to the
 *    definition at ElementsDefinition.js:3118 would be the tidy fix.
 *
 * 2. `variation-selected` and `variation-disabled` are declared but never
 *    applied. There is no selection state in the renderer at all -- the chips
 *    have no onClick, and `variablePricesIndex` (:59) is set up and never used.
 *    Both keys are still filled in below so the states look right the moment
 *    selection is wired up, but nothing shows them today.
 *
 * 3. The price is hardcoded. ProductVariablePrices.jsx:141 renders the literal
 *    string "$123" rather than a variation price, and `wrapCurrency` from
 *    useUtilsStore (:43) is destructured and never called -- so a BDT store
 *    shows a dollar amount. Styling `variation-price` is still worth doing, but
 *    the number and the currency symbol both come from that line, not the data.
 *
 * 4. Everything on screen in the canvas is mock data. `usePost()` returns null
 *    outside a product loop, so :46 swaps in a placeholder product -- which has
 *    no `attributes` key, so :72 falls back to its own hardcoded Color
 *    (Red/Blue) and Size (Small/Medium). That is what these presets are designed
 *    against: two attribute groups of two chips each.
 *
 * 5. Every declared option is inert. The definition lists `separator` and
 *    `variablePriceViewType`, and the renderer reads neither; it reads
 *    `options.tag` and `options.linkTo` instead and uses neither of those
 *    either (`Tag` is built at :40 and never rendered). `viewType`,
 *    `onChangePrice` and `quantity` come from props rather than options, and
 *    BlockPreview does not pass them. The two declared options are kept below to
 *    match the definition.
 *
 * 6. Both `.map()` calls (:111, :123) render without a React key, so this
 *    element logs key warnings in the console. Pre-existing and unrelated to the
 *    presets.
 */

var layouts = [

  {
    title: 'Boxed Swatches',
    thumbnail: '',
    content: {
      "id": "pvp-boxed",
      "type": "productVariablePrices",
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
      "type": "productVariablePrices",
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
      "type": "productVariablePrices",
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
      "type": "productVariablePrices",
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
      "type": "productVariablePrices",
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
      "type": "productVariablePrices",
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
