/**
 * Element layouts for the `customerSubscriptions` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `customerSubscriptions`
 * block and its Replace action splices the preset in place of that block, so
 * every root here MUST be `"type": "customerSubscriptions"`. (PageBuilder.jsx
 * regenerates all ids on paste/replace, so the readable ids below are safe.)
 *
 * CustomerSubscriptionsView renders the signed-in customer's repeat orders as
 * cards: a header (title and count), then one card per subscription -- an
 * icon, number and schedule with the status badge, then a details grid
 * (started, next delivery, and the per-delivery total in detail-total). Every
 * part has a cssSelectors key, declared with its default in
 * ElementsDefinition.js. The status badge, pager and the empty, loading and
 * error states come from accountUi.jsx and have no key. options.hideTitle
 * drops the header.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

var layouts = [

  {
    title: 'Subscription Cards',
    thumbnail: '',
    content: {
      "id": "cs-cards",
      "type": "customerSubscriptions",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerSubscriptions', {
        "*": { "classes": "w-full" }
      })
    },
  },

  {
    title: 'Divided List',
    thumbnail: '',
    content: {
      "id": "cs-divided",
      "type": "customerSubscriptions",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerSubscriptions', {
        "*": { "classes": "w-full rounded-xl border border-gray-200 bg-white" },
        "panel": { "classes": "flex flex-col" },
        "header": { "classes": "flex items-baseline justify-between gap-3 border-b border-gray-200 px-4 py-3" },
        "list": { "classes": "flex flex-col divide-y divide-gray-100 transition-opacity" },
        "subscription": { "classes": "p-4" }
      })
    },
  },

  {
    title: 'Compact Rows',
    thumbnail: '',
    content: {
      "id": "cs-compact",
      "type": "customerSubscriptions",
      "options": { "hideTitle": true },
      "cssSelectors": withElementCssDefaults('customerSubscriptions', {
        "*": { "classes": "w-full" },
        "panel": { "classes": "flex flex-col gap-3" },
        "list": { "classes": "flex flex-col gap-2 transition-opacity" },
        "subscription": { "classes": "rounded-lg border border-gray-200 bg-white px-3 py-2.5" },
        "subscription-icon": { "classes": "hidden" },
        "details": { "classes": "mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm" },
        "detail-total": { "classes": "ml-auto text-right" },
        "total-value": { "classes": "text-sm font-semibold text-gray-900" }
      })
    },
  },

  {
    title: 'Soft Panels',
    thumbnail: '',
    content: {
      "id": "cs-soft",
      "type": "customerSubscriptions",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerSubscriptions', {
        "*": { "classes": "w-full rounded-3xl bg-gray-50 p-5" },
        "subscription": { "classes": "rounded-2xl bg-white p-5 shadow-sm" },
        "subscription-icon": { "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b0e9f]/10 text-[#1b0e9f]" },
        "details": { "classes": "mt-4 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 text-sm sm:grid-cols-3" }
      })
    },
  },

];

export default layouts;
