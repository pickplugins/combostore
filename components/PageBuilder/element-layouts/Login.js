/**
 * Element layouts for the `login` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `login` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "login"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * LoginView (and the builder's Login.jsx) render a sign-in form: heading,
 * username/email and password fields with icons, a show-password toggle and a
 * submit button. Every part has a cssSelectors key (form, header, title,
 * subtitle, error, field, field-label, field-control, field-icon, field-input,
 * username-input, password-input, password-toggle, submit-button, plus '*' for
 * the wrapper), declared with their defaults in ElementsDefinition.js.
 *
 * Each preset is built with withElementCssDefaults(), so it carries the full key set
 * (the builder's style editor only lists keys a block has) and lists only the
 * keys it changes from the defaults. options.hideTitle drops the heading.
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
      "id": "lg-card",
      "type": "login",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('login', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-sm" }
      })
    },
  },

  {
    title: 'Plain',
    thumbnail: '',
    content: {
      "id": "lg-plain",
      "type": "login",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('login', {
        "*": { "classes": "w-full max-w-sm" }
      })
    },
  },

  {
    title: 'Dark Panel',
    thumbnail: '',
    content: {
      "id": "lg-dark",
      "type": "login",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('login', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-gray-900 border border-white/10 rounded-2xl" },
        "title": { "classes": "text-lg font-semibold text-white" },
        "subtitle": { "classes": "text-sm text-gray-400" },
        "field-label": { "classes": "mb-1.5 block text-sm font-medium text-gray-300" },
        "field-input": { "classes": "w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-gray-500 transition-colors focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/10" },
        "field-icon": { "classes": "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" },
        "password-toggle": { "classes": "absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-200" },
        "submit-button": { "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70" }
      })
    },
  },

  {
    title: 'Soft Panel',
    thumbnail: '',
    content: {
      "id": "lg-soft",
      "type": "login",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('login', {
        "*": { "classes": "w-full max-w-md mx-auto p-7 bg-gray-50 rounded-3xl" },
        "field-input": { "classes": "w-full rounded-xl border border-transparent bg-white py-3 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm transition-colors focus:border-[#1b0e9f]/40 focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15" },
        "submit-button": { "classes": "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1b0e9f] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#150b7d] disabled:cursor-not-allowed disabled:opacity-70" }
      })
    },
  },

  {
    title: 'Compact Dropdown',
    thumbnail: '',
    content: {
      "id": "lg-compact",
      "type": "login",
      "options": { "hideTitle": true },
      "cssSelectors": withElementCssDefaults('login', {
        "*": { "classes": "w-80 p-4 bg-white border border-gray-200 rounded-xl shadow-lg" },
        "form": { "classes": "flex flex-col gap-3" }
      })
    },
  },

  {
    title: 'Accent Left Border',
    thumbnail: '',
    content: {
      "id": "lg-accent",
      "type": "login",
      "options": { "hideTitle": false },
      "cssSelectors": withElementCssDefaults('login', {
        "*": { "classes": "w-full max-w-sm mx-auto p-6 bg-white border-l-4 border-[#1b0e9f] shadow-sm" },
        "field-label": { "classes": "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500" }
      })
    },
  },

];

export default layouts;
