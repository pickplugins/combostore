/**
 * Element layouts for the `addToCart` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `addToCart` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "addToCart"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * addToCart is a leaf with two halves: a quantity stepper and a button, either
 * of which can be hidden. The definition declares eight selector keys and three
 * options, and rather less than that actually works.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. The quantity option is spelled `hideQuanity`, not `hideQuantity`. The
 *    definition declares `hideQuantity: false`, but AddToCart.jsx:38 reads
 *    `options?.hideQuanity` and AddToCartOptions.jsx:86 writes that same
 *    misspelling, so the declared key does nothing at all. Every preset here
 *    uses the misspelled one, because that is the one the renderer and the panel
 *    agree on. Correcting the spelling means touching all three files together.
 *
 * 2. Only five of the eight selector keys are live: `*`, `quantity-wrapper`,
 *    `button-wrapper`, `button-icon` and `button-label`. The stepper's internals
 *    are hardcoded -- the input carries `!border-0 !shadow-none text-center
 *    focus:border-0` plus a width (:95) and the plus/minus wrappers carry a bare
 *    `cursor-pointer` (:91,:101) -- so `quantity-input`, `quantity-plus` and
 *    `quantity-minus` are declared and never applied. They are kept at "" below
 *    to match the definition. Whatever the stepper should look like has to come
 *    from `quantity-wrapper`, which is why these presets put the border, the
 *    radius and the colour there.
 *
 * 3. The stepper icons cannot be swapped or sized. :93 and :102 render
 *    `IconSquareRoundedMinusFilled` and `IconSquareRoundedPlusFilled` directly
 *    with no size prop, so they come out at tabler's default.
 *    `quantity-wrapper` can recolour them through `currentColor`, and that is
 *    the extent of the control.
 *
 * 4. Always set `iconSize` explicitly on a preset with a button icon. :30 reads
 *    it with a sensible `?? 20` and then :36 redeclares the same variable
 *    without a default, so the fallback is dead and an unset `iconSize` reaches
 *    `<IconX size={undefined} />`. Icon names must be exact @tabler/icons-react
 *    exports (:62); an unknown one drops the `button-icon` div entirely, which
 *    at least leaves no empty wrapper to hide.
 *
 * 5. `hideButtonText` is a block-level prop, not an option -- and despite the
 *    name it only widens the quantity input. :54 reads it from props and :95
 *    uses it to pick `w-full` over the hardcoded `w-16`; it does nothing to the
 *    button label. It reaches the renderer because BlockPreview.jsx:273 spreads
 *    `{...block}` into the component and PageBuilder's paste and replace both
 *    deep-clone the preset verbatim (`JSON.parse(JSON.stringify(...))`, ids
 *    aside), so a key sitting beside `options` survives and arrives as a prop.
 *    The two presets with a full-bleed stepper set it; the options panel cannot
 *    see or unset it, so it is only worth using where that `w-16` would
 *    otherwise break the layout.
 *
 * 6. Nothing is clickable. The button is a <div> with an empty onClick (:109),
 *    the stepper's handlers are empty (:90,:100), and the input's onChange is
 *    empty over a `quantity` state that starts at 0 (:51,:95) -- so the field
 *    always reads 0 and cannot be typed into. `productData` comes from props
 *    (:53) and nothing passes it, which leaves `productId` undefined. So
 *    `cursor-pointer` on `button-wrapper` is the only affordance a preset can
 *    honestly give.
 *
 * 7. `options.target`, `options.scheme` and `options.url` are read (:31-33) and
 *    never used -- leftovers from a button element. They are left unset.
 *
 * The definition's root default is `flex gap-3 items-center`, which puts the
 * stepper and the button in a row. The stacked presets override that on `*` and
 * give the button `w-full`, since `button-wrapper` is the element that actually
 * draws the button.
 */

var layouts = [

  {
    title: 'Solid Primary Row',
    thumbnail: '',
    content: {
      "id": "atc-row",
      "type": "addToCart",
      "options": {
        "buttonText": "Add to cart",
        "icon": "IconShoppingCartPlus",
        "iconSize": 18,
        "hideQuanity": false,
        "hideButton": false
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-3 items-stretch" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-md border border-neutral-300 text-neutral-500" },
        "quantity-input": { "classes": "" },
        "quantity-plus": { "classes": "" },
        "quantity-minus": { "classes": "" },
        "button-wrapper": { "classes": "flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-sm font-semibold whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Full Width Stacked',
    thumbnail: '',
    content: {
      "id": "atc-stacked",
      "type": "addToCart",
      "hideButtonText": true,
      "options": {
        "buttonText": "Add to cart",
        "icon": "IconShoppingCartPlus",
        "iconSize": 18,
        "hideQuanity": false,
        "hideButton": false
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3 w-full max-w-sm" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-2 w-full px-3 py-2 rounded-lg border border-neutral-300 text-neutral-500" },
        "quantity-input": { "classes": "" },
        "quantity-plus": { "classes": "" },
        "quantity-minus": { "classes": "" },
        "button-wrapper": { "classes": "flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-neutral-900 text-white cursor-pointer hover:bg-neutral-800 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-sm font-semibold tracking-wide" }
      }
    },
  },

  {
    title: 'Icon Pill Button',
    thumbnail: '',
    content: {
      "id": "atc-pill",
      "type": "addToCart",
      "options": {
        "buttonText": "Buy now",
        "icon": "IconBolt",
        "iconSize": 16,
        "hideQuanity": false,
        "hideButton": false
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2.5 items-center" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-400" },
        "quantity-input": { "classes": "" },
        "quantity-plus": { "classes": "" },
        "quantity-minus": { "classes": "" },
        "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-amber-400 text-neutral-900 cursor-pointer hover:bg-amber-300 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-xs font-bold uppercase tracking-wide whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Card Button Only',
    thumbnail: '',
    content: {
      "id": "atc-card",
      "type": "addToCart",
      "options": {
        "buttonText": "Add to cart",
        "icon": "IconShoppingCartPlus",
        "iconSize": 15,
        "hideQuanity": true,
        "hideButton": false
      },
      "cssSelectors": {
        "*": { "classes": "flex w-full" },
        "quantity-wrapper": { "classes": "" },
        "quantity-input": { "classes": "" },
        "quantity-plus": { "classes": "" },
        "quantity-minus": { "classes": "" },
        "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-md border border-neutral-200 bg-white text-neutral-800 cursor-pointer hover:border-orange-400 hover:text-orange-600 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
      }
    },
  },

  {
    title: 'Quantity Stepper Only',
    thumbnail: '',
    content: {
      "id": "atc-qty",
      "type": "addToCart",
      "hideButtonText": true,
      "options": {
        "buttonText": "",
        "icon": "",
        "iconSize": 18,
        "hideQuanity": false,
        "hideButton": true
      },
      "cssSelectors": {
        "*": { "classes": "flex w-fit" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-2 w-32 px-2 py-1.5 rounded-md border-2 border-neutral-200 text-neutral-400 hover:border-neutral-300 transition-colors" },
        "quantity-input": { "classes": "" },
        "quantity-plus": { "classes": "" },
        "quantity-minus": { "classes": "" },
        "button-wrapper": { "classes": "" },
        "button-icon": { "classes": "" },
        "button-label": { "classes": "" }
      }
    },
  },

  {
    title: 'Dark Buy Bar',
    thumbnail: '',
    content: {
      "id": "atc-dark",
      "type": "addToCart",
      "options": {
        "buttonText": "Add to cart",
        "icon": "IconShoppingBagPlus",
        "iconSize": 18,
        "hideQuanity": false,
        "hideButton": false
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-3 items-stretch w-full" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-md border border-neutral-700 bg-neutral-900 text-neutral-400" },
        "quantity-input": { "classes": "" },
        "quantity-plus": { "classes": "" },
        "quantity-minus": { "classes": "" },
        "button-wrapper": { "classes": "flex flex-1 items-center justify-center gap-2 px-6 py-3 rounded-md bg-amber-400 text-neutral-900 cursor-pointer hover:bg-amber-300 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-sm font-bold whitespace-nowrap" }
      }
    },
  },

];

export default layouts;
