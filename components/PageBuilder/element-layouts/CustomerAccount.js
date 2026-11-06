/**
 * Element layouts for the `customerAccount` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `customerAccount` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "customerAccount"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * customerAccount is a whole page in one block: a container holding a
 * `customerAccountNotLogged` half (register and login) and a
 * `customerAccountLogged` half (the tabbed account area). A preset here is
 * therefore mostly structure, and the real styling happens on the children.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Both halves render at once in the canvas. CustomerAccountNotLogged.jsx
 *    and CustomerAccountLogged.jsx are plain containers that do not gate on
 *    auth, so while editing you see the signed-out forms stacked above the
 *    signed-in tabs -- and CustomerAccount.jsx adds a sample welcome card above
 *    both. Every preset keeps the two halves self-contained -- their own
 *    padding, their own card edges -- and puts a flex column with a gap on the
 *    root so that stack stays readable instead of collapsing into one run of
 *    fields.
 *
 * 2. The customerAccount root has options.hideWelcome and a cssSelectors key
 *    for each part of the welcome card (welcome, avatar, welcome-name,
 *    logout-button...), declared with their defaults in ElementsDefinition.js.
 *    Each preset builds the root's cssSelectors with withElementCssDefaults(),
 *    so the full key set is there to edit. The two halves take no options and
 *    one `*` key each.
 *
 * 3. The five panel elements are closed boxes. customerOrders,
 *    customerProfile, customerProfileEdit, customerSubscriptions and
 *    customerTickets each declare zero options and one `*` key, fetch their own
 *    data from `combo-store/v2` and render their own markup (EntriesTable and
 *    friends), with the children branch commented out. A preset can frame them
 *    -- padding, card, background -- and nothing else, so the panel wrappers
 *    below do exactly that.
 *
 * 4. Tab labels and panels are joined by index, so they must balance. The nav
 *    strip comes from `options.tabsItems` and the panels from `children`
 *    (Tabs.jsx:92,:122); a surplus label opens an empty panel and a surplus
 *    child is unreachable. See Tabs.js in this folder for the rest of that
 *    element's behaviour -- the `empty:hidden` on `nav-item-icon` for the
 *    unconditional icon div, the `p-4` hardcoded on the tabs root, and why
 *    `nav-item-active` needs Tailwind v4's `!` suffix to beat `nav-item` on the
 *    same element.
 *
 * 5. The element definition's own default tree is worth not copying verbatim:
 *    its second tab is labelled "Deliveries" but holds a `customerProfile`
 *    panel. These presets label each tab after the panel it actually contains.
 *
 * 6. On a `grid`, the `grid-item` key does nothing. Grid.jsx applies only
 *    `cssSelectors['*']` and GridItem.jsx likewise, so the two auth columns are
 *    styled through each gridItem's own `*` -- the `grid-item` key is kept at
 *    "" because the definition declares it.
 *
 * 7. The nested login and register blocks are built with
 *    withElementCssDefaults() too, so each carries its form's full key set
 *    (field-label, field-input, submit-button...; see the login and register
 *    entries in ElementsDefinition.js) and gets the default form styling. The
 *    old per-row keys these presets used to set (label-username, input-email,
 *    submit...) no longer exist. Both forms are light by default, so the dark
 *    preset overrides their text, inputs and buttons -- and the welcome card's
 *    -- through the constants below.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

/* Overrides for forms on a dark background; same values as the Dark Panel presets in Login.js and Register.js. */
var darkFormSelectors = {
  "title": { "classes": "text-lg font-semibold text-white" },
  "subtitle": { "classes": "text-sm text-gray-400" },
  "field-label": { "classes": "mb-1.5 block text-sm font-medium text-gray-300" },
  "field-input": { "classes": "w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-gray-500 transition-colors focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/10" },
  "field-icon": { "classes": "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" },
  "password-toggle": { "classes": "absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-200" },
  "submit-button": { "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70" }
};

var darkLoginSelectors = {
  ...darkFormSelectors,
  "error": { "classes": "flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-300" }
};

var darkRegisterSelectors = {
  ...darkFormSelectors,
  "field-hint": { "classes": "mt-1 text-xs text-gray-500" },
  "message-error": { "classes": "border-red-400/30 bg-red-500/10 text-red-300" },
  "message-success": { "classes": "border-green-400/30 bg-green-500/10 text-green-300" }
};

/* Every preset root is a flex column with a gap, so the welcome card drops its default mb-6. */
var welcomeInFlexRoot = {
  "welcome": { "classes": "flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-xs" }
};

var darkWelcomeSelectors = {
  "welcome": { "classes": "flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4" },
  "avatar": { "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-amber-400/15 ring-2 ring-white/10" },
  "avatar-initial": { "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-amber-400" },
  "welcome-greeting": { "classes": "text-sm text-gray-400" },
  "welcome-name": { "classes": "truncate text-lg font-semibold text-white" },
  "welcome-email": { "classes": "truncate text-sm text-gray-400" },
  "logout-button": { "classes": "inline-flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300" }
};

var layouts = [

  {
    title: 'Split Auth + Underline Tabs',
    thumbnail: '',
    content: {
      "id": "ca-split",
      "type": "customerAccount",
      "options": { "hideWelcome": false },
      "cssSelectors": withElementCssDefaults('customerAccount', { ...{ "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-12" } }, ...welcomeInFlexRoot }),
      "children": [
        {
          "id": "ca-split-out",
          "type": "customerAccountNotLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-split-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-6" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ca-split-col1",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" } },
                  "children": [
                    {
                      "id": "ca-split-register",
                      "type": "register",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('register', {}),
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-split-col2",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" } },
                  "children": [
                    {
                      "id": "ca-split-login",
                      "type": "login",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('login', {}),
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ca-split-in",
          "type": "customerAccountLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white" } },
          "children": [
            {
              "id": "ca-split-tabs",
              "type": "tabs",
              "options": {
                "orientation": "",
                "tabsItems": [
                  { "label": "Orders", "icon": "IconPackage" },
                  { "label": "Profile", "icon": "IconUser" },
                  { "label": "Subscriptions", "icon": "IconRepeat" },
                  { "label": "Support", "icon": "IconLifebuoy" },
                  { "label": "Edit profile", "icon": "IconUserEdit" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "w-full" },
                "navs-items": { "classes": "flex gap-6 overflow-x-auto border-b border-neutral-200" },
                "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-1 py-3 text-sm font-medium text-neutral-500 border-b-2 border-transparent whitespace-nowrap cursor-pointer hover:text-neutral-900" },
                "nav-item-active": { "classes": "text-orange-600! border-orange-500!" },
                "nav-item-label": { "classes": "" },
                "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                "nav-item-content": { "classes": "pt-6" }
              },
              "children": [
                {
                  "id": "ca-split-t1",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-split-t1-body",
                      "type": "customerOrders",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-split-t2",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-split-t2-body",
                      "type": "customerProfile",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-split-t3",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-split-t3-body",
                      "type": "customerSubscriptions",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-split-t4",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-split-t4-body",
                      "type": "customerTickets",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-split-t5",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-split-t5-body",
                      "type": "customerProfileEdit",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Centered Login Card',
    thumbnail: '',
    content: {
      "id": "ca-center",
      "type": "customerAccount",
      "options": { "hideWelcome": false },
      "cssSelectors": withElementCssDefaults('customerAccount', { ...{ "*": { "classes": "w-full max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12" } }, ...welcomeInFlexRoot }),
      "children": [
        {
          "id": "ca-center-out",
          "type": "customerAccountNotLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-center-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid grid-cols-1 gap-5 max-w-md mx-auto" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ca-center-col1",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm" } },
                  "children": [
                    {
                      "id": "ca-center-login",
                      "type": "login",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('login', {}),
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-center-col2",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm" } },
                  "children": [
                    {
                      "id": "ca-center-register",
                      "type": "register",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('register', {}),
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ca-center-in",
          "type": "customerAccountLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-center-tabs",
              "type": "tabs",
              "options": {
                "orientation": "",
                "tabsItems": [
                  { "label": "Orders", "icon": "IconPackage" },
                  { "label": "Profile", "icon": "IconUser" },
                  { "label": "Subscriptions", "icon": "IconRepeat" },
                  { "label": "Support", "icon": "IconLifebuoy" },
                  { "label": "Edit profile", "icon": "IconUserEdit" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "w-full" },
                "navs-items": { "classes": "flex gap-2 overflow-x-auto p-1 rounded-full bg-neutral-100" },
                "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-4 py-2 rounded-full text-sm font-medium text-neutral-600 whitespace-nowrap cursor-pointer hover:text-neutral-900" },
                "nav-item-active": { "classes": "bg-white! text-neutral-900! shadow-sm" },
                "nav-item-label": { "classes": "" },
                "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                "nav-item-content": { "classes": "pt-6" }
              },
              "children": [
                {
                  "id": "ca-center-t1",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-center-t1-body",
                      "type": "customerOrders",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-center-t2",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-center-t2-body",
                      "type": "customerProfile",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-center-t3",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-center-t3-body",
                      "type": "customerSubscriptions",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-center-t4",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-center-t4-body",
                      "type": "customerTickets",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-center-t5",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-center-t5-body",
                      "type": "customerProfileEdit",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Sidebar Account Rail',
    thumbnail: '',
    content: {
      "id": "ca-rail",
      "type": "customerAccount",
      "options": { "hideWelcome": false },
      "cssSelectors": withElementCssDefaults('customerAccount', { ...{ "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-12" } }, ...welcomeInFlexRoot }),
      "children": [
        {
          "id": "ca-rail-out",
          "type": "customerAccountNotLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-rail-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ca-rail-col1",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-rail-register",
                      "type": "register",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('register', {}),
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-rail-col2",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-rail-login",
                      "type": "login",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('login', {}),
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ca-rail-in",
          "type": "customerAccountLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white" } },
          "children": [
            {
              "id": "ca-rail-tabs",
              "type": "tabs",
              "options": {
                "orientation": "vertical",
                "tabsItems": [
                  { "label": "Orders", "icon": "IconPackage" },
                  { "label": "Profile", "icon": "IconUser" },
                  { "label": "Subscriptions", "icon": "IconRepeat" },
                  { "label": "Support", "icon": "IconLifebuoy" },
                  { "label": "Edit profile", "icon": "IconUserEdit" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "w-full lg:flex lg:gap-8" },
                "navs-items": { "classes": "flex lg:flex-col gap-1 overflow-x-auto lg:w-56 lg:shrink-0 lg:border-r lg:border-neutral-200 lg:pr-4" },
                "nav-item": { "classes": "flex items-center gap-2.5 shrink-0 px-3 py-2.5 rounded-md text-sm font-medium text-neutral-600 whitespace-nowrap cursor-pointer hover:bg-neutral-50 hover:text-neutral-900" },
                "nav-item-active": { "classes": "bg-orange-50! text-orange-700!" },
                "nav-item-label": { "classes": "" },
                "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                "nav-item-content": { "classes": "pt-6 lg:pt-0 lg:flex-1 lg:min-w-0" }
              },
              "children": [
                {
                  "id": "ca-rail-t1",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-rail-t1-body",
                      "type": "customerOrders",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-rail-t2",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-rail-t2-body",
                      "type": "customerProfile",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-rail-t3",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-rail-t3-body",
                      "type": "customerSubscriptions",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-rail-t4",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-rail-t4-body",
                      "type": "customerTickets",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-rail-t5",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-rail-t5-body",
                      "type": "customerProfileEdit",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Card Panels',
    thumbnail: '',
    content: {
      "id": "ca-cards",
      "type": "customerAccount",
      "options": { "hideWelcome": false },
      "cssSelectors": withElementCssDefaults('customerAccount', { ...{ "*": { "classes": "w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-12 bg-neutral-50" } }, ...welcomeInFlexRoot }),
      "children": [
        {
          "id": "ca-cards-out",
          "type": "customerAccountNotLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-cards-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden border border-neutral-200 bg-neutral-200" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ca-cards-col1",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "bg-white p-7" } },
                  "children": [
                    {
                      "id": "ca-cards-register",
                      "type": "register",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('register', {}),
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-cards-col2",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "bg-white p-7" } },
                  "children": [
                    {
                      "id": "ca-cards-login",
                      "type": "login",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('login', {}),
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ca-cards-in",
          "type": "customerAccountLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-cards-tabs",
              "type": "tabs",
              "options": {
                "orientation": "",
                "tabsItems": [
                  { "label": "Orders", "icon": "IconPackage" },
                  { "label": "Profile", "icon": "IconUser" },
                  { "label": "Subscriptions", "icon": "IconRepeat" },
                  { "label": "Support", "icon": "IconLifebuoy" },
                  { "label": "Edit profile", "icon": "IconUserEdit" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "w-full" },
                "navs-items": { "classes": "flex gap-5 overflow-x-auto" },
                "nav-item": { "classes": "flex items-center gap-2 shrink-0 pb-2 text-sm text-neutral-500 whitespace-nowrap cursor-pointer hover:text-neutral-900" },
                "nav-item-active": { "classes": "font-semibold text-neutral-900!" },
                "nav-item-label": { "classes": "" },
                "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                "nav-item-content": { "classes": "pt-5" }
              },
              "children": [
                {
                  "id": "ca-cards-t1",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-cards-t1-body",
                      "type": "customerOrders",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-cards-t2",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-cards-t2-body",
                      "type": "customerProfile",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-cards-t3",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-cards-t3-body",
                      "type": "customerSubscriptions",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-cards-t4",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-cards-t4-body",
                      "type": "customerTickets",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-cards-t5",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-cards-t5-body",
                      "type": "customerProfileEdit",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Dark Account Area',
    thumbnail: '',
    content: {
      "id": "ca-dark",
      "type": "customerAccount",
      "options": { "hideWelcome": false },
      "cssSelectors": withElementCssDefaults('customerAccount', { ...{ "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-12 bg-neutral-900" } }, ...welcomeInFlexRoot, ...darkWelcomeSelectors }),
      "children": [
        {
          "id": "ca-dark-out",
          "type": "customerAccountNotLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-dark-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-6" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ca-dark-col1",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-6" } },
                  "children": [
                    {
                      "id": "ca-dark-register",
                      "type": "register",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('register', darkRegisterSelectors),
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-dark-col2",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-6" } },
                  "children": [
                    {
                      "id": "ca-dark-login",
                      "type": "login",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('login', darkLoginSelectors),
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ca-dark-in",
          "type": "customerAccountLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-800 bg-neutral-800/40" } },
          "children": [
            {
              "id": "ca-dark-tabs",
              "type": "tabs",
              "options": {
                "orientation": "",
                "tabsItems": [
                  { "label": "Orders", "icon": "IconPackage" },
                  { "label": "Profile", "icon": "IconUser" },
                  { "label": "Subscriptions", "icon": "IconRepeat" },
                  { "label": "Support", "icon": "IconLifebuoy" },
                  { "label": "Edit profile", "icon": "IconUserEdit" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "w-full" },
                "navs-items": { "classes": "flex gap-6 overflow-x-auto border-b border-neutral-800" },
                "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-1 py-3 text-sm font-medium text-neutral-400 border-b-2 border-transparent whitespace-nowrap cursor-pointer hover:text-neutral-100" },
                "nav-item-active": { "classes": "text-amber-400! border-amber-400!" },
                "nav-item-label": { "classes": "" },
                "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                "nav-item-content": { "classes": "pt-6" }
              },
              "children": [
                {
                  "id": "ca-dark-t1",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-dark-t1-body",
                      "type": "customerOrders",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full text-neutral-200" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-dark-t2",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-dark-t2-body",
                      "type": "customerProfile",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full text-neutral-200" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-dark-t3",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-dark-t3-body",
                      "type": "customerSubscriptions",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full text-neutral-200" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-dark-t4",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-dark-t4-body",
                      "type": "customerTickets",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full text-neutral-200" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-dark-t5",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-dark-t5-body",
                      "type": "customerProfileEdit",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full text-neutral-200" } },
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Compact Three Tabs',
    thumbnail: '',
    content: {
      "id": "ca-compact",
      "type": "customerAccount",
      "options": { "hideWelcome": false },
      "cssSelectors": withElementCssDefaults('customerAccount', { ...{ "*": { "classes": "w-full px-3 py-6 flex flex-col gap-8" } }, ...welcomeInFlexRoot }),
      "children": [
        {
          "id": "ca-compact-out",
          "type": "customerAccountNotLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-compact-grid",
              "type": "grid",
              "options": {},
              "cssSelectors": {
                "*": { "classes": "grid grid-cols-1 gap-4" },
                "grid-item": { "classes": "" }
              },
              "children": [
                {
                  "id": "ca-compact-col1",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "rounded-lg border border-neutral-200 bg-white p-4" } },
                  "children": [
                    {
                      "id": "ca-compact-login",
                      "type": "login",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('login', {}),
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-compact-col2",
                  "type": "gridItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "rounded-lg border border-neutral-200 bg-white p-4" } },
                  "children": [
                    {
                      "id": "ca-compact-register",
                      "type": "register",
                      "options": { "hideTitle": false },
                      "cssSelectors": withElementCssDefaults('register', {}),
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ca-compact-in",
          "type": "customerAccountLogged",
          "options": {},
          "cssSelectors": { "*": { "classes": "w-full" } },
          "children": [
            {
              "id": "ca-compact-tabs",
              "type": "tabs",
              "options": {
                "orientation": "",
                "tabsItems": [
                  { "label": "Orders", "icon": "IconPackage" },
                  { "label": "Support", "icon": "IconLifebuoy" },
                  { "label": "Profile", "icon": "IconUserEdit" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "w-full" },
                "navs-items": { "classes": "flex gap-1 overflow-x-auto -mx-1 px-1 border-b border-neutral-200" },
                "nav-item": { "classes": "flex items-center gap-1.5 shrink-0 px-3 py-2 text-xs font-medium text-neutral-500 border-b-2 border-transparent whitespace-nowrap cursor-pointer" },
                "nav-item-active": { "classes": "text-orange-600! border-orange-500!" },
                "nav-item-label": { "classes": "" },
                "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                "nav-item-content": { "classes": "pt-4" }
              },
              "children": [
                {
                  "id": "ca-compact-t1",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-compact-t1-body",
                      "type": "customerOrders",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-compact-t2",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-compact-t2-body",
                      "type": "customerTickets",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                },
                {
                  "id": "ca-compact-t3",
                  "type": "tabsItem",
                  "options": {},
                  "cssSelectors": { "*": { "classes": "w-full" } },
                  "children": [
                    {
                      "id": "ca-compact-t3-body",
                      "type": "customerProfileEdit",
                      "options": {},
                      "cssSelectors": { "*": { "classes": "w-full" } },
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  },

];

export default layouts;
