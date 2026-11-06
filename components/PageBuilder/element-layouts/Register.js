/**
 * Element layouts for the `register` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `register` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "register"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * RegisterView (and the builder's Register.jsx) render a sign-up form: heading,
 * a message box, then a `fields` wrapper holding full name, email and password
 * (with a show-password toggle and a hint), then the submit button. Every part
 * has a cssSelectors key, declared with its default in ElementsDefinition.js:
 * form, header, title, subtitle, message, message-error, message-success,
 * message-list, fields, field, password-field, field-label, field-control,
 * field-icon, field-input, name-input, email-input, password-input,
 * password-toggle, field-hint, submit-button, plus '*' for the wrapper.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full
 * key set (the builder's style editor only lists keys a block has) and lists
 * only the keys it changes from the defaults. options.hideTitle drops the
 * heading.
 *
 * Keep `relative` on field-control and the absolute positioning on field-icon
 * and password-toggle, or the icons fall out of the fields.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

var layouts = [

  {
    title: 'Centered Card',
    thumbnail: '',
    content: {
      "id": "rg-card",
      "type": "register",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('register', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-sm" }
      })
    },
  },

  {
    title: 'Two Column Fields',
    thumbnail: '',
    content: {
      "id": "rg-two-col",
      "type": "register",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('register', {
        "*": { "classes": "w-full max-w-xl mx-auto p-7 bg-white border border-gray-200 rounded-2xl shadow-sm" },
        "fields": { "classes": "grid grid-cols-1 sm:grid-cols-2 gap-4" },
        /* sm: because at one column a col-span-2 makes the grid add an implicit second column. */
        "password-field": { "classes": "sm:col-span-2" }
      })
    },
  },

  {
    title: 'Plain',
    thumbnail: '',
    content: {
      "id": "rg-plain",
      "type": "register",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('register', {
        "*": { "classes": "w-full max-w-sm" }
      })
    },
  },

  {
    title: 'Soft Panel',
    thumbnail: '',
    content: {
      "id": "rg-soft",
      "type": "register",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('register', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-gray-50 rounded-3xl" },
        "field-input": { "classes": "w-full rounded-xl border border-transparent bg-white py-3 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm transition-colors focus:border-[#1b0e9f]/40 focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15" },
        "submit-button": { "classes": "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1b0e9f] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#150b7d] disabled:cursor-not-allowed disabled:opacity-70" }
      })
    },
  },

  {
    title: 'Dark Panel',
    thumbnail: '',
    content: {
      "id": "rg-dark",
      "type": "register",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('register', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-gray-900 border border-white/10 rounded-2xl" },
        "title": { "classes": "text-lg font-semibold text-white" },
        "subtitle": { "classes": "text-sm text-gray-400" },
        "field-label": { "classes": "mb-1.5 block text-sm font-medium text-gray-300" },
        "field-input": { "classes": "w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-gray-500 transition-colors focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/10" },
        "field-icon": { "classes": "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" },
        "password-toggle": { "classes": "absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-200" },
        "field-hint": { "classes": "mt-1 text-xs text-gray-500" },
        "message-error": { "classes": "border-red-400/30 bg-red-500/10 text-red-300" },
        "message-success": { "classes": "border-green-400/30 bg-green-500/10 text-green-300" },
        "submit-button": { "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70" }
      })
    },
  },

  {
    title: 'Compact Modal',
    thumbnail: '',
    content: {
      "id": "rg-compact",
      "type": "register",
      "options": { "hideTitle": true },
      "cssSelectors": withElementCssDefaults('register', {
        "*": { "classes": "w-full max-w-xs p-4 bg-white border border-gray-200 rounded-xl shadow-lg" },
        "form": { "classes": "flex flex-col gap-3" },
        "fields": { "classes": "flex flex-col gap-3" }
      })
    },
  },

];

export default layouts;
