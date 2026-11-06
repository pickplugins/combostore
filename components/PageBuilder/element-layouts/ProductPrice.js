/**
 * Element layouts for the `productPrice` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productPrice` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "productPrice"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * productPrice is a leaf and styling-only: no children and no options; the
 * price comes from the product. ProductPriceView (the shop) and the builder's
 * ProductPrice.jsx render the same ProductPriceMarkup from the same
 * productPriceDisplay, so a preset looks the same in both.
 *
 * Notes that shaped these presets:
 *
 * 1. Outside a product loop the builder shows a sample on-sale product (80,
 *    struck-through 150), so every simple-price key is visible. That is what
 *    these presets are designed against.
 *
 * 2. Which keys show depends on the product. A simple product uses
 *    `simple-price-wrap` / `simple-price-sale` / `simple-price-regular`; a
 *    product with variations shows `variable-price-*` (a min - max range)
 *    until a variation is picked, then the simple keys; a pay-what-you-want
 *    product shows the `pwyw-*` controls. These presets style all of them so a
 *    card looks right whatever product it holds.
 *
 * 3. `simple-price-sale` holds the price the customer pays and
 *    `simple-price-regular` the original, shown only on sale -- style the first
 *    as the live price and the second as the crossed-out one.
 *
 * 4. The " - " between the two prices is its own span, `price-separator`,
 *    second inside `simple-price-wrap`. Set it to `hidden` to drop it. The Sale
 *    Pair preset predates the key and hides it with
 *    `[&>span:nth-child(2)]:hidden` on the wrap, which still works because the
 *    span is in the same place.
 *
 * 5. Prices run through `wrapCurrency`, which reads the shop's currency symbol
 *    and position ("Tk", "after" by default, so "80Tk"). It returns an empty
 *    string if the position is anything other than before/after.
 *
 * 6. A price of 0 shows nothing rather than "0Tk".
 */

var layouts = [

  {
    title: 'Sale Red Inline',
    thumbnail: '',
    content: {
      "id": "pp-sale",
      "type": "productPrice",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2 items-center" },
        "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-neutral-400" },
        "simple-price-sale": { "classes": "text-2xl font-bold text-red-600" },
        "simple-price-regular": { "classes": "text-base line-through text-neutral-400" },
        "variable-price-wrap": { "classes": "flex gap-2 items-center" },
        "variable-price-min": { "classes": "text-base text-neutral-600" },
        "variable-price-max": { "classes": "text-base text-neutral-600" }
      }
    },
  },

  {
    title: 'Sale Pair No Dash',
    thumbnail: '',
    content: {
      "id": "pp-pair",
      "type": "productPrice",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2 items-center" },
        "simple-price-wrap": { "classes": "flex gap-2.5 items-baseline [&>span:nth-child(2)]:hidden" },
        "simple-price-sale": { "classes": "text-2xl font-bold text-neutral-900" },
        "simple-price-regular": { "classes": "text-sm line-through text-neutral-400" },
        "variable-price-wrap": { "classes": "flex gap-2 items-center" },
        "variable-price-min": { "classes": "text-base text-neutral-600" },
        "variable-price-max": { "classes": "text-base text-neutral-600" }
      }
    },
  },

  {
    title: 'Price Badge',
    thumbnail: '',
    content: {
      "id": "pp-badge",
      "type": "productPrice",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2 items-center" },
        "simple-price-wrap": { "classes": "flex gap-2 items-center text-neutral-400 [&>span:nth-child(2)]:hidden" },
        "simple-price-sale": { "classes": "px-3 py-1 text-base font-bold text-white bg-red-600 rounded-md" },
        "simple-price-regular": { "classes": "text-sm line-through text-neutral-400" },
        "variable-price-wrap": { "classes": "flex gap-2 items-center" },
        "variable-price-min": { "classes": "text-base text-neutral-600" },
        "variable-price-max": { "classes": "text-base text-neutral-600" }
      }
    },
  },

  {
    title: 'Dark Amber Price',
    thumbnail: '',
    content: {
      "id": "pp-dark",
      "type": "productPrice",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2 items-center" },
        "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-neutral-600" },
        "simple-price-sale": { "classes": "text-2xl font-bold text-amber-400" },
        "simple-price-regular": { "classes": "text-sm line-through text-neutral-500" },
        "variable-price-wrap": { "classes": "flex gap-2 items-center" },
        "variable-price-min": { "classes": "text-base text-neutral-400" },
        "variable-price-max": { "classes": "text-base text-neutral-400" }
      }
    },
  },

  {
    title: 'Compact Card Price',
    thumbnail: '',
    content: {
      "id": "pp-compact",
      "type": "productPrice",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-1.5 items-center" },
        "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-neutral-300 [&>span:nth-child(2)]:hidden" },
        "simple-price-sale": { "classes": "text-sm font-semibold text-neutral-900" },
        "simple-price-regular": { "classes": "text-xs line-through text-neutral-400" },
        "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
        "variable-price-min": { "classes": "text-xs text-neutral-500" },
        "variable-price-max": { "classes": "text-xs text-neutral-500" }
      }
    },
  },

  {
    title: 'Minimal Equal Weight',
    thumbnail: '',
    content: {
      "id": "pp-min",
      "type": "productPrice",
      "options": {
        "separator": "",
        "variablePriceViewType": "inline"
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2 items-center" },
        "simple-price-wrap": { "classes": "flex gap-2 items-center text-neutral-400" },
        "simple-price-sale": { "classes": "text-base font-medium text-neutral-900 tracking-tight" },
        "simple-price-regular": { "classes": "text-base text-neutral-400 line-through decoration-1" },
        "variable-price-wrap": { "classes": "flex gap-2 items-center" },
        "variable-price-min": { "classes": "text-base text-neutral-600" },
        "variable-price-max": { "classes": "text-base text-neutral-600" }
      }
    },
  },

];

export default layouts;
