/**
 * Element layouts for the `customerProfile` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `customerProfile` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "customerProfile"`. (PageBuilder.jsx regenerates
 * all ids on paste/replace, so the readable ids below are safe.)
 *
 * CustomerProfileView renders the signed-in customer's details read-only: a
 * header, then a card holding a description list -- one row per detail (name,
 * email, phone, address, delivery location), each a label and a value, or an
 * empty-value for a detail not added yet. Every part has a cssSelectors key,
 * declared with its default in ElementsDefinition.js. The loading and error
 * states come from accountUi.jsx and have no key. options.hideTitle drops the
 * header.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

var layouts = [

  {
    title: 'Divided Card',
    thumbnail: '',
    content: {
      "id": "cp-card",
      "type": "customerProfile",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerProfile', {
        "*": { "classes": "w-full" }
      })
    },
  },

  {
    title: 'Two Column Grid',
    thumbnail: '',
    content: {
      "id": "cp-grid",
      "type": "customerProfile",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerProfile', {
        "*": { "classes": "w-full" },
        "card": { "classes": "" },
        "details": { "classes": "grid grid-cols-1 gap-3 sm:grid-cols-2" },
        "row": { "classes": "flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4" },
        "label": { "classes": "text-xs font-medium uppercase tracking-wide text-gray-500" }
      })
    },
  },

  {
    title: 'Plain List',
    thumbnail: '',
    content: {
      "id": "cp-plain",
      "type": "customerProfile",
      "options": { "hideTitle": true },
      "cssSelectors": withElementCssDefaults('customerProfile', {
        "*": { "classes": "w-full" },
        "card": { "classes": "" },
        "details": { "classes": "flex flex-col gap-3" },
        "row": { "classes": "flex flex-col gap-0.5" }
      })
    },
  },

  {
    title: 'Soft Panel',
    thumbnail: '',
    content: {
      "id": "cp-soft",
      "type": "customerProfile",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerProfile', {
        "*": { "classes": "w-full rounded-3xl bg-gray-50 p-5" },
        "card": { "classes": "rounded-2xl bg-white shadow-sm" }
      })
    },
  },

];

export default layouts;
