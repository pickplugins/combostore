/**
 * Element layouts for the `customerTickets` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `customerTickets` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "customerTickets"`. (PageBuilder.jsx regenerates
 * all ids on paste/replace, so the readable ids below are safe.)
 *
 * CustomerTicketsView is the account page's Support panel: a header (title and
 * a line of text), then one link per contact the shop has filled in under
 * Settings -- WhatsApp, phone, email -- each an icon, a label and the value.
 * Every part has a cssSelectors key, declared with its default in
 * ElementsDefinition.js. The "no contact details" state comes from
 * accountUi.jsx and has no key. options.hideTitle drops the header.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults. A shop may fill in one, two or
 * three contacts, so the grids below must look right with any count.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

var layouts = [

  {
    title: 'Contact Cards',
    thumbnail: '',
    content: {
      "id": "ct-cards",
      "type": "customerTickets",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerTickets', {
        "*": { "classes": "w-full" }
      })
    },
  },

  {
    title: 'Stacked List',
    thumbnail: '',
    content: {
      "id": "ct-list",
      "type": "customerTickets",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerTickets', {
        "*": { "classes": "w-full" },
        "contacts": { "classes": "flex flex-col divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white" },
        "contact-link": { "classes": "flex items-center gap-3 p-4 transition-colors hover:bg-gray-50" }
      })
    },
  },

  {
    title: 'Pill Buttons',
    thumbnail: '',
    content: {
      "id": "ct-pills",
      "type": "customerTickets",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerTickets', {
        "*": { "classes": "w-full" },
        "contacts": { "classes": "flex flex-wrap gap-2" },
        "contact-link": { "classes": "inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm transition-colors hover:border-[#1b0e9f]/40 hover:bg-[#1b0e9f]/5" },
        "contact-icon": { "classes": "text-[#1b0e9f]" },
        "contact-label": { "classes": "font-semibold text-gray-900" },
        "contact-value": { "classes": "hidden" }
      })
    },
  },

  {
    title: 'Soft Help Panel',
    thumbnail: '',
    content: {
      "id": "ct-soft",
      "type": "customerTickets",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('customerTickets', {
        "*": { "classes": "w-full rounded-3xl bg-gray-50 p-6" },
        "header": { "classes": "text-center" },
        "contact-link": { "classes": "flex h-full items-center gap-3 rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md" },
        "contact-icon": { "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b0e9f]/10 text-[#1b0e9f]" }
      })
    },
  },

];

export default layouts;
