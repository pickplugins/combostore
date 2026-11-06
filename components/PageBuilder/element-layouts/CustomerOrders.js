/**
 * Element layouts for the `customerOrders` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `customerOrders` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "customerOrders"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * CustomerOrdersView renders the signed-in customer's orders as cards: a
 * header (title and count), then one card per order -- an icon, number and
 * date with the status badge, up to three item rows, then payment details and
 * the total. Every part has a cssSelectors key, declared with its default in
 * ElementsDefinition.js. The status badge, pager and the empty, loading and
 * error states come from accountUi.jsx and are shared by all the account
 * blocks, so no key reaches them. options.hideTitle drops the header.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

var layouts = [

  {
    title: 'Order Cards',
    thumbnail: '',
    content: {
      "id": "co-cards",
      "type": "customerOrders",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerOrders', {
        "*": { "classes": "w-full" }
      })
    },
  },

  {
    title: 'Divided List',
    thumbnail: '',
    content: {
      "id": "co-divided",
      "type": "customerOrders",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerOrders', {
        "*": { "classes": "w-full rounded-xl border border-gray-200 bg-white" },
        "panel": { "classes": "flex flex-col" },
        "header": { "classes": "flex items-baseline justify-between gap-3 border-b border-gray-200 px-4 py-3" },
        "list": { "classes": "flex flex-col divide-y divide-gray-100 transition-opacity" },
        "order": { "classes": "p-4" }
      })
    },
  },

  {
    title: 'Compact Rows',
    thumbnail: '',
    content: {
      "id": "co-compact",
      "type": "customerOrders",
      "options": { "hideTitle": true },
      "cssSelectors": withElementCssDefaults('customerOrders', {
        "*": { "classes": "w-full" },
        "panel": { "classes": "flex flex-col gap-3" },
        "list": { "classes": "flex flex-col gap-2 transition-opacity" },
        "order": { "classes": "rounded-lg border border-gray-200 bg-white px-3 py-2.5" },
        "order-icon": { "classes": "hidden" },
        "items": { "classes": "hidden" },
        "order-footer": { "classes": "mt-2 flex flex-wrap items-center justify-between gap-2" },
        "order-total": { "classes": "text-sm font-semibold text-gray-900" }
      })
    },
  },

  {
    title: 'Soft Panels',
    thumbnail: '',
    content: {
      "id": "co-soft",
      "type": "customerOrders",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerOrders', {
        "*": { "classes": "w-full rounded-3xl bg-gray-50 p-5" },
        "order": { "classes": "rounded-2xl bg-white p-5 shadow-sm" },
        "order-icon": { "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b0e9f]/10 text-[#1b0e9f]" },
        "items": { "classes": "mt-4 flex flex-col gap-1.5 text-sm text-gray-700" },
        "order-footer": { "classes": "mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-gray-50 px-3 py-2" }
      })
    },
  },

];

export default layouts;
