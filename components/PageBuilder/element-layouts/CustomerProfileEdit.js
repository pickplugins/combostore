/**
 * Element layouts for the `customerProfileEdit` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `customerProfileEdit`
 * block and its Replace action splices the preset in place of that block, so
 * every root here MUST be `"type": "customerProfileEdit"`. (PageBuilder.jsx
 * regenerates all ids on paste/replace, so the readable ids below are safe.)
 *
 * CustomerProfileEditView renders three cards -- personal details, address and
 * delivery location -- inside a `panel`. Each card has a header (icon, title,
 * description), a body and a footer with its save button; the location card
 * also has a note, the map frame and a Clear location button. The card keys
 * style all three cards alike. Every part has a cssSelectors key, declared with
 * its default in ElementsDefinition.js. The error notice comes from
 * accountUi.jsx and has no key.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

var layouts = [

  {
    title: 'Stacked Cards',
    thumbnail: '',
    content: {
      "id": "cpe-cards",
      "type": "customerProfileEdit",
      "options": {},
      "cssSelectors": withElementCssDefaults('customerProfileEdit', {
        "*": { "classes": "w-full" }
      })
    },
  },

  {
    title: 'Two Column Cards',
    thumbnail: '',
    content: {
      "id": "cpe-two-col",
      "type": "customerProfileEdit",
      "options": {},
      "cssSelectors": withElementCssDefaults('customerProfileEdit', {
        "*": { "classes": "w-full" },
        "panel": { "classes": "grid grid-cols-1 gap-5 lg:grid-cols-2" },
        "fields": { "classes": "grid grid-cols-1 gap-4" }
      })
    },
  },

  {
    title: 'Flat Sections',
    thumbnail: '',
    content: {
      "id": "cpe-flat",
      "type": "customerProfileEdit",
      "options": {},
      "cssSelectors": withElementCssDefaults('customerProfileEdit', {
        "*": { "classes": "w-full" },
        "panel": { "classes": "flex flex-col divide-y divide-gray-200" },
        "card": { "classes": "py-6 first:pt-0" },
        "card-header": { "classes": "flex items-start gap-3 pb-4" },
        "card-icon": { "classes": "hidden" },
        "card-body": { "classes": "" },
        "card-footer": { "classes": "flex flex-wrap items-center justify-end gap-2 pt-4" }
      })
    },
  },

  {
    title: 'Soft Panels',
    thumbnail: '',
    content: {
      "id": "cpe-soft",
      "type": "customerProfileEdit",
      "options": {},
      "cssSelectors": withElementCssDefaults('customerProfileEdit', {
        "*": { "classes": "w-full rounded-3xl bg-gray-50 p-5" },
        "card": { "classes": "rounded-2xl bg-white shadow-sm" },
        "card-header": { "classes": "flex items-start gap-3 p-5 pb-0" },
        "card-icon": { "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1b0e9f]/10 text-[#1b0e9f]" },
        "card-body": { "classes": "p-5" },
        "card-footer": { "classes": "flex flex-wrap items-center justify-end gap-2 px-5 pb-5" }
      })
    },
  },

];

export default layouts;
