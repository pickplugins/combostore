/**
 * Element layouts for the `cart` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `cart` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "cart"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * cart is a leaf: a trigger plus a drawer holding the cart -> checkout flow.
 * CartView renders both through its CartMarkup, and the builder's Cart.jsx
 * renders the same CartMarkup with sample lines, so a preset looks the same in
 * the canvas and on the shop. Every part has a cssSelectors key, declared with
 * its default in ElementsDefinition.js. The checkout step inside checkout-body
 * is CheckoutView and has no key here.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults.
 *
 * Notes that shaped these presets:
 *
 * 1. Set `editMode: true` so the drawer is open in the builder and its parts
 *    can be styled. The builder draws it inside a frame that acts as the
 *    containing block for `position: fixed`, so drawer and backdrop keep their
 *    real, fixed classes.
 *
 * 2. `triggerStyle` picks the trigger: 'total' renders `trigger` (a pill with
 *    the cart total, shown only once the cart has items) and 'icon' renders
 *    `trigger-icon` with `trigger-badge` (always shown). Style the one the
 *    preset uses.
 *
 * 3. The drawer always fades in from the right (animate.css, kept in code).
 *    A drawer placed elsewhere -- left, centred, bottom -- still fades in, it
 *    just does so with that horizontal drift. Tailwind v4's translate-* use the
 *    CSS `translate` property, separate from the animation's `transform`, so a
 *    centred drawer stays centred.
 *
 * 4. Keep `drawer` a flex column with a height: the header, `body` (which
 *    scrolls) and `summary` rely on it.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

var layouts = [

  {
    title: 'Side Drawer',
    thumbnail: '',
    content: {
      "id": "cart-drawer",
      "type": "cart",
      "options": { "triggerStyle": "total", "editMode": true },
      "cssSelectors": withElementCssDefaults('cart', {
        "*": { "classes": "relative w-fit" }
      })
    },
  },

  {
    title: 'Icon Badge Drawer',
    thumbnail: '',
    content: {
      "id": "cart-icon",
      "type": "cart",
      "options": { "triggerStyle": "icon", "editMode": true },
      "cssSelectors": withElementCssDefaults('cart', {
        "*": { "classes": "relative w-fit" },
        "trigger-badge": { "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[11px] font-semibold text-white" }
      })
    },
  },

  {
    title: 'Orange Pill Drawer',
    thumbnail: '',
    content: {
      "id": "cart-orange",
      "type": "cart",
      "options": { "triggerStyle": "total", "editMode": true },
      "cssSelectors": withElementCssDefaults('cart', {
        "*": { "classes": "relative w-fit" },
        "trigger": { "classes": "flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600" },
        "title-icon": { "classes": "text-orange-500" },
        "count-badge": { "classes": "rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700" },
        "coupon-apply": { "classes": "inline-flex shrink-0 items-center gap-2 rounded-full border border-orange-500 px-4 py-2 text-sm font-medium text-orange-600 transition-colors hover:bg-orange-500 hover:text-white disabled:opacity-60" },
        "checkout-button": { "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60" }
      })
    },
  },

  {
    title: 'Minimal Mono Drawer',
    thumbnail: '',
    content: {
      "id": "cart-mono",
      "type": "cart",
      "options": { "triggerStyle": "total", "editMode": true },
      "cssSelectors": withElementCssDefaults('cart', {
        "*": { "classes": "relative w-fit" },
        "trigger": { "classes": "flex items-center gap-2 rounded-none border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white" },
        "drawer": { "classes": "fixed right-0 top-0 z-50 flex h-full w-full max-w-[420px] flex-col bg-white" },
        "header": { "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-900 px-5 py-4" },
        "title": { "classes": "flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gray-900" },
        "title-icon": { "classes": "hidden" },
        "count-badge": { "classes": "text-xs font-normal text-gray-500" },
        "item-thumb": { "classes": "h-20 w-20 shrink-0 overflow-hidden bg-gray-50" },
        "stepper": { "classes": "flex items-center border border-gray-900" },
        "stepper-decrease": { "classes": "flex h-8 w-8 items-center justify-center text-gray-900 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40" },
        "stepper-increase": { "classes": "flex h-8 w-8 items-center justify-center text-gray-900 transition-colors hover:bg-gray-100" },
        "summary": { "classes": "shrink-0 border-t border-gray-900 px-5 pb-5 pt-4" },
        "checkout-button": { "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 bg-gray-900 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60" }
      })
    },
  },

  {
    title: 'Left Slide Panel',
    thumbnail: '',
    content: {
      "id": "cart-left",
      "type": "cart",
      "options": { "triggerStyle": "icon", "editMode": true },
      "cssSelectors": withElementCssDefaults('cart', {
        "*": { "classes": "relative w-fit" },
        "drawer": { "classes": "fixed left-0 top-0 z-50 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl" }
      })
    },
  },

  {
    title: 'Centered Modal Cart',
    thumbnail: '',
    content: {
      "id": "cart-modal",
      "type": "cart",
      "options": { "triggerStyle": "total", "editMode": true },
      "cssSelectors": withElementCssDefaults('cart', {
        "*": { "classes": "relative w-fit" },
        "drawer": { "classes": "fixed left-1/2 top-1/2 z-50 flex h-[85vh] w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" },
        "backdrop": { "classes": "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" }
      })
    },
  },

  {
    title: 'Floating Bubble Cart',
    thumbnail: '',
    content: {
      "id": "cart-bubble",
      "type": "cart",
      "options": { "triggerStyle": "icon", "editMode": true },
      "cssSelectors": withElementCssDefaults('cart', {
        "*": { "classes": "relative" },
        "trigger-icon": { "classes": "fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#1b0e9f] text-white shadow-lg transition-transform hover:scale-105" },
        "trigger-badge": { "classes": "absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[11px] font-semibold text-white ring-2 ring-white" }
      })
    },
  },

  {
    title: 'Soft Bottom Sheet',
    thumbnail: '',
    content: {
      "id": "cart-sheet",
      "type": "cart",
      "options": { "triggerStyle": "total", "editMode": true },
      "cssSelectors": withElementCssDefaults('cart', {
        "*": { "classes": "relative w-fit" },
        "drawer": { "classes": "fixed inset-x-0 bottom-0 z-50 mx-auto flex h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl" },
        "header": { "classes": "flex shrink-0 items-center justify-between gap-2 px-5 pb-3 pt-5" },
        "summary": { "classes": "shrink-0 rounded-t-3xl bg-gray-50 px-5 pb-5 pt-4" }
      })
    },
  },

];

export default layouts;
