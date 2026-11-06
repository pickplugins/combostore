/**
 * Element layouts for the `addToCart` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `addToCart` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "addToCart"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * addToCart is a leaf with two halves, either of which can be hidden: a
 * quantity stepper (quantity-wrapper holding quantity-decrease, quantity-input
 * and quantity-increase) and a button (button-wrapper holding button-icon and
 * button-label). Every part has a cssSelectors key, declared with its default
 * in ElementsDefinition.js; AddToCartView and the builder's AddToCart.jsx both
 * read all of them.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults.
 *
 * Notes that shaped these presets:
 *
 * 1. The quantity option is `hideQuantity`. Older pages saved it misspelled as
 *    `hideQuanity`; the renderers treat either one being true as hidden.
 *
 * 2. Leave quantity-input at its default unless the stepper needs a different
 *    width: an empty value wins over the default and leaves the input unstyled
 *    (a browser-default bordered box inside the stepper). The stacked presets
 *    set `w-full` there instead of the default `w-16`.
 *
 * 3. Always set `iconSize` on a preset with a button icon; it defaults to 20.
 *    Icon names must be exact @tabler/icons-react exports; an unknown one
 *    drops the button-icon div.
 *
 * 4. The root default is `flex gap-3 items-center`, which puts the stepper and
 *    the button in a row. The stacked presets override that on `*` and give
 *    the button `w-full`, since button-wrapper is the element that actually
 *    draws the button.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

/* The default input classes with the width swapped, for steppers that stretch. */
var fullWidthInput = { "classes": "!border-0 !shadow-none text-center focus:border-0 w-full" };

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
        "hideQuantity": false,
        "hideButton": false
      },
      "cssSelectors": withElementCssDefaults('addToCart', {
        "*": { "classes": "flex gap-3 items-stretch" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-md border border-neutral-300 text-neutral-500" },
        "button-wrapper": { "classes": "flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-sm font-semibold whitespace-nowrap" }
      })
    },
  },

  {
    title: 'Full Width Stacked',
    thumbnail: '',
    content: {
      "id": "atc-stacked",
      "type": "addToCart",
      "options": {
        "buttonText": "Add to cart",
        "icon": "IconShoppingCartPlus",
        "iconSize": 18,
        "hideQuantity": false,
        "hideButton": false
      },
      "cssSelectors": withElementCssDefaults('addToCart', {
        "*": { "classes": "flex flex-col gap-3 w-full max-w-sm" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-2 w-full px-3 py-2 rounded-lg border border-neutral-300 text-neutral-500" },
        "quantity-input": fullWidthInput,
        "button-wrapper": { "classes": "flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-neutral-900 text-white cursor-pointer hover:bg-neutral-800 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-sm font-semibold tracking-wide" }
      })
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
        "hideQuantity": false,
        "hideButton": false
      },
      "cssSelectors": withElementCssDefaults('addToCart', {
        "*": { "classes": "flex gap-2.5 items-center" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-400" },
        "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-amber-400 text-neutral-900 cursor-pointer hover:bg-amber-300 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-xs font-bold uppercase tracking-wide whitespace-nowrap" }
      })
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
        "hideQuantity": true,
        "hideButton": false
      },
      "cssSelectors": withElementCssDefaults('addToCart', {
        "*": { "classes": "flex w-full" },
        "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-md border border-neutral-200 bg-white text-neutral-800 cursor-pointer hover:border-orange-400 hover:text-orange-600 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
      })
    },
  },

  {
    title: 'Quantity Stepper Only',
    thumbnail: '',
    content: {
      "id": "atc-qty",
      "type": "addToCart",
      "options": {
        "buttonText": "",
        "icon": "",
        "iconSize": 18,
        "hideQuantity": false,
        "hideButton": true
      },
      "cssSelectors": withElementCssDefaults('addToCart', {
        "*": { "classes": "flex w-fit" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-2 w-32 px-2 py-1.5 rounded-md border-2 border-neutral-200 text-neutral-400 hover:border-neutral-300 transition-colors" },
        "quantity-input": fullWidthInput
      })
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
        "hideQuantity": false,
        "hideButton": false
      },
      "cssSelectors": withElementCssDefaults('addToCart', {
        "*": { "classes": "flex gap-3 items-stretch w-full" },
        "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-md border border-neutral-700 bg-neutral-900 text-neutral-400" },
        "quantity-input": { "classes": "!border-0 !shadow-none bg-transparent text-center text-white focus:border-0 w-12" },
        "button-wrapper": { "classes": "flex flex-1 items-center justify-center gap-2 px-6 py-3 rounded-md bg-amber-400 text-neutral-900 cursor-pointer hover:bg-amber-300 transition-colors" },
        "button-icon": { "classes": "flex items-center" },
        "button-label": { "classes": "text-sm font-bold whitespace-nowrap" }
      })
    },
  },

];

export default layouts;
