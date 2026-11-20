/**
 * Element layouts for the `newsletterSignup` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `newsletterSignup` block
 * and its Replace action splices the preset in place of that block, keeping
 * the block's list, tag and what it asks for (a preset carries only looks and
 * words). Every root here MUST be `"type": "newsletterSignup"`.
 *
 * A preset only lists the cssSelectors keys it changes: any key a block
 * lacks falls back to the newsletterSignup defaults in ElementsDefinition.js.
 */

var layouts = [

  {
    title: 'Inline (default)',
    thumbnail: '',
    content: {
      "id": "nls-inline",
      "type": "newsletterSignup",
      "options": {
        "title": "Join our newsletter",
        "subtitle": "New arrivals, offers and restocks, first.",
        "buttonText": "Subscribe"
      },
      "cssSelectors": {},
      "children": []
    }
  },

  {
    title: 'Centered card',
    thumbnail: '',
    content: {
      "id": "nls-card",
      "type": "newsletterSignup",
      "options": {
        "title": "Get 10% off your first order",
        "subtitle": "Sign up for offers and new arrivals. Your code arrives by email.",
        "buttonText": "Get my code",
        "showName": true
      },
      "cssSelectors": {
        "*": { "classes": "mx-auto flex w-full max-w-md flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm" },
        "header": { "classes": "flex flex-col items-center gap-1" },
        "title": { "classes": "flex items-center justify-center gap-2 text-2xl font-bold text-gray-900" },
        "form": { "classes": "flex flex-col gap-2" },
        "fields": { "classes": "relative flex flex-col gap-2" },
        "submit-button": { "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#150b7d] disabled:opacity-60" }
      },
      "children": []
    }
  },

  {
    title: 'Dark band',
    thumbnail: '',
    content: {
      "id": "nls-dark",
      "type": "newsletterSignup",
      "options": {
        "title": "Stay in the loop",
        "subtitle": "Be first to hear about drops and sales.",
        "buttonText": "Sign me up",
        "consentText": "No spam. Unsubscribe in one click."
      },
      "cssSelectors": {
        "*": { "classes": "flex w-full flex-col gap-4 rounded-2xl bg-gray-900 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10" },
        "title": { "classes": "flex items-center gap-2 text-xl font-semibold text-white" },
        "subtitle": { "classes": "text-sm text-gray-300" },
        "form": { "classes": "flex w-full flex-col gap-2 sm:flex-row md:max-w-md" },
        "field-input": { "classes": "w-full min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm text-white placeholder-gray-400 outline-none focus:border-white" },
        "submit-button": { "classes": "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 disabled:opacity-60" },
        "consent": { "classes": "text-xs text-gray-400 md:hidden" }
      },
      "children": []
    }
  },

  {
    title: 'SMS signup',
    thumbnail: '',
    content: {
      "id": "nls-sms",
      "type": "newsletterSignup",
      "options": {
        "collect": "phone",
        "title": "Get offers by SMS",
        "subtitle": "Flash sales and restock alerts straight to your phone.",
        "phonePlaceholder": "01XXXXXXXXX",
        "buttonText": "Join",
        "consentText": "A few messages a month. Reply STOP to opt out."
      },
      "cssSelectors": {},
      "children": []
    }
  },

  {
    title: 'Footer (compact)',
    thumbnail: '',
    content: {
      "id": "nls-footer",
      "type": "newsletterSignup",
      "options": {
        "title": "Newsletter",
        "subtitle": "",
        "buttonText": "Join",
        "consentText": "",
        "tag": "footer"
      },
      "cssSelectors": {
        "*": { "classes": "flex w-full flex-col gap-3" },
        "title": { "classes": "text-sm font-semibold uppercase tracking-wide" },
        "form": { "classes": "flex gap-2" },
        "field-input": { "classes": "w-full min-w-0 flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-500" },
        "submit-button": { "classes": "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-60" },
        "success": { "classes": "flex items-center gap-2 text-sm text-emerald-600" }
      },
      "children": []
    }
  }

];

export default layouts;
