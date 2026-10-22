/**
 * Element layouts for the `productPrice` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productPrice` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "productPrice"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * productPrice is a leaf and styling-only: no children, and every option it
 * declares is inert. Only four of its seven selector keys do anything.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Only the simple-price branch is reachable in the builder.
 *    `price_type` comes from `productData?.price_type ?? 'simple'`
 *    (ProductPrice.jsx:53), and the mock product the renderer falls back to when
 *    there is no product context (:46) has no `price_type` key -- so the canvas
 *    always shows the simple branch with price 100, sale_price 80 and
 *    regular_price 150. That is what these presets are designed against.
 *
 * 2. The live keys are `*`, `simple-price-wrap`, `simple-price-sale` and
 *    `simple-price-regular`. `variable-price-wrap`, `variable-price-min` and
 *    `variable-price-max` are declared but never read: the variable branch
 *    (:144-337) hardcodes its own colours (text-[#1b0e9f], text-[#e63946]) and
 *    never touches cssSelectors. They are filled in below so they are right if
 *    that branch is ever wired to them, but nothing shows them today.
 *
 * 3. There is a hardcoded `<span> - </span>` between the two prices
 *    (ProductPrice.jsx:125) with no selector key of its own, so a sale reads
 *    "100Tk - 150Tk" rather than the usual price-then-struck-original pair.
 *    Two consequences. It cannot be styled through a key -- the Sale Pair
 *    preset suppresses it with an arbitrary variant on the wrap instead,
 *    `[&>span:nth-child(2)]:hidden`, which targets that separator only when a
 *    sale price exists and matches nothing when it does not. And stacking the
 *    two prices is off the table: `flex-col` on the wrap would put that lone
 *    dash on its own line between them, so every preset here keeps the pair on
 *    one row.
 *
 * 4. `simple-price-sale` holds `productData.price`, not `sale_price` (:124), and
 *    `simple-price-regular` holds `regular_price` (:126) -- so the key names
 *    read backwards from what they contain. Style `simple-price-sale` as the
 *    live price and `simple-price-regular` as the crossed-out one.
 *
 * 5. Prices run through `wrapCurrency` (useUtilsStore.js:10), which reads
 *    `currencySymbole` and `currencyPosition` from the counter store --
 *    "Tk" and "after" by default, so "100Tk". Note it returns an empty string
 *    if `currencyPosition` is ever set to anything other than before/after.
 *
 * 6. Every option is inert. The definition declares `separator` and
 *    `variablePriceViewType`; the renderer reads neither. It reads
 *    `options.tag` and `options.linkTo` and uses neither. ProductPriceOptions.jsx
 *    only writes `linkTo` (:43) and `classes` (:61), and `options.classes` is
 *    never read either -- so that panel's two controls currently do nothing and
 *    all styling has to come through the selector keys. The two declared options
 *    are kept below to match the definition.
 *
 * 7. Two latent crashes in branches the canvas cannot reach, worth knowing
 *    before enabling them on a product page: the variable branch calls
 *    `onChangePrice(...)` on click (:164, :221) from a prop BlockPreview never
 *    passes, and the pwyw branch calls `addNotification(...)` (:380), which is
 *    not imported or defined anywhere in the file.
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
