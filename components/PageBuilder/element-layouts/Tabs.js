/**
 * Element layouts for the `tabs` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `tabs` block and its Replace
 * action splices the preset in place of that block, so every root here MUST be
 * `"type": "tabs"`. (PageBuilder.jsx regenerates all ids on paste/replace, so
 * the readable ids below are safe.)
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Tabs.jsx:92 calls `tabsItems.map(...)` with no optional chaining and no
 *    fallback, so a tabs block without `options.tabsItems` throws
 *    "Cannot read properties of undefined (reading 'map')" as soon as it
 *    renders. Every preset carries it.
 *
 * 2. Labels and panels are two separate lists joined by index: the nav strip
 *    comes from `options.tabsItems` and the panels from `children`, with
 *    Tabs.jsx:122 rendering the child whose index equals the active tab. So
 *    `tabsItems.length` must equal `children.length` -- a surplus label opens an
 *    empty panel and a surplus child is unreachable. The element definition
 *    itself ships 3 labels against 4 tabsItem children, and the options panel's
 *    add-tab button (TabsOptions.jsx:76) pushes a label without adding a
 *    tabsItem, so after adding a tab there you still have to drop a tabsItem
 *    into the block. Every preset below is balanced.
 *
 * 3. `tabsItems[i]` supports `{ label, icon }` although the definition declares
 *    only `label`. The icon is resolved with `TablerIcons[tab.icon]`
 *    (Tabs.jsx:95), so it must be an exact @tabler/icons-react export name --
 *    every name used here was checked against the installed package. The
 *    panel's per-tab `iconSize` input is inert: Tabs.jsx:111 renders `<IconX />`
 *    with no size prop.
 *
 * 4. Tabs.jsx:110 renders the `nav-item-icon` div unconditionally, even for a
 *    tab with no icon, which leaves an empty div adding gap inside the nav item.
 *    Every preset sets `nav-item-icon` to `empty:hidden` so it collapses when
 *    unused and still appears once an icon is picked.
 *
 * 5. Tabs.jsx:69 hardcodes `p-4` on the root ahead of `cssSelectors['*']`.
 *    Conflicting padding utilities have equal specificity, so whether an
 *    override wins depends on Tailwind's stylesheet order rather than on class
 *    order -- these presets work with that 1rem instead of fighting it.
 *
 * 6. `nav-item-active` is merged onto the same element as `nav-item`
 *    (Tabs.jsx:102-105), so any property the active state changes needs the
 *    important modifier to win reliably. This project is on Tailwind v4, where
 *    that modifier is a suffix (`text-orange-600!`), not the v3 prefix form.
 *
 * 7. `options.orientation` is read (Tabs.jsx:91) but TabsOptions.jsx has no
 *    control for it, so a preset is the only practical way to set it.
 *    "vertical" alone only stacks the nav above the content -- the root is not
 *    a flex row -- so the vertical preset also sets `lg:flex` on `*` and a
 *    width on `navs-items` to get a real side-by-side layout.
 *
 * 8. tabsItem renders only `cssSelectors['*']` plus its children, and shows a
 *    "drop elements here" placeholder while empty (TabsItem.jsx:83). Its
 *    renderer also reads `items`, `tag`, `label` and `url` from options, none of
 *    which it ever uses.
 */

var layouts = [

  {
    title: 'Product Info Underline',
    thumbnail: '',
    content: {
      "id": "tb-under",
      "type": "tabs",
      "options": {
        "orientation": "",
        "tabsItems": [
          { "label": "Description", "icon": "IconFileDescription" },
          { "label": "Specifications", "icon": "IconListDetails" },
          { "label": "Delivery", "icon": "IconTruckDelivery" },
          { "label": "Returns", "icon": "IconArrowBackUp" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-white" },
        "navs-items": { "classes": "gap-6 border-b border-neutral-200" },
        "nav-item": { "classes": "flex items-center gap-2 px-1 py-3 text-sm font-medium text-neutral-500 border-b-2 border-transparent hover:text-neutral-900 whitespace-nowrap cursor-pointer" },
        "nav-item-active": { "classes": "text-orange-600! border-orange-500!" },
        "nav-item-label": { "classes": "" },
        "nav-item-icon": { "classes": "empty:hidden" },
        "nav-item-content": { "classes": "pt-5" }
      },
      "children": [
        {
          "id": "tb-under-p1",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-3" } },
          "children": [
            {
              "id": "tb-under-p1-h",
              "type": "heading",
              "options": { "text": "About this product", "tag": "h3" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900" } }
            },
            {
              "id": "tb-under-p1-t",
              "type": "text",
              "options": { "text": "Replace this paragraph with the full product description. Cover what it is, who it suits and what is in the box, and keep the first two lines strong because that is all most shoppers read.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-3xl" } }
            }
          ]
        },
        {
          "id": "tb-under-p2",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-under-p2-l",
              "type": "list",
              "options": {
                "tag": "ul",
                "icon": "IconPointFilled",
                "iconSize": 14,
                "items": [
                  { "text": "Brand: add the brand name", "icon": "" },
                  { "text": "Model: add the model or SKU", "icon": "" },
                  { "text": "Country of origin: add the origin", "icon": "" },
                  { "text": "Warranty: 12 months brand warranty", "icon": "" },
                  { "text": "In the box: add the included items", "icon": "" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "flex flex-col max-w-2xl" },
                "li": { "classes": "flex items-center gap-2 py-2 border-b border-neutral-100 last:border-0" },
                "icon": { "classes": "text-orange-500 shrink-0 flex items-center" },
                "text": { "classes": "text-sm text-neutral-700" }
              }
            }
          ]
        },
        {
          "id": "tb-under-p3",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-3" } },
          "children": [
            {
              "id": "tb-under-p3-t",
              "type": "text",
              "options": { "text": "We dispatch through Pathao, RedX and Steadfast. Orders placed before 4pm are handed over the same day.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-3xl" } }
            },
            {
              "id": "tb-under-p3-l",
              "type": "list",
              "options": {
                "tag": "ul",
                "icon": "IconTruckDelivery",
                "iconSize": 16,
                "items": [
                  { "text": "Inside Dhaka: Tk 60, delivered in 24 to 48 hours", "icon": "" },
                  { "text": "Outside Dhaka: Tk 120, delivered in 2 to 4 days", "icon": "" },
                  { "text": "Free delivery on orders above Tk 1,000", "icon": "" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-1" },
                "li": { "classes": "flex items-center gap-2" },
                "icon": { "classes": "text-neutral-400 shrink-0 flex items-center" },
                "text": { "classes": "text-sm text-neutral-700" }
              }
            }
          ]
        },
        {
          "id": "tb-under-p4",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-3" } },
          "children": [
            {
              "id": "tb-under-p4-h",
              "type": "heading",
              "options": { "text": "7 day return policy", "tag": "h3" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900" } }
            },
            {
              "id": "tb-under-p4-t",
              "type": "text",
              "options": { "text": "Request a return within 7 days of delivery and we will arrange pickup. The item must be unused and in its original packaging. Refunds reach bKash or Nagad within three working days of the item passing inspection.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-3xl" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Pill Tabs Card',
    thumbnail: '',
    content: {
      "id": "tb-pill",
      "type": "tabs",
      "options": {
        "orientation": "",
        "tabsItems": [
          { "label": "Overview", "icon": "IconInfoCircle" },
          { "label": "Specs", "icon": "IconListDetails" },
          { "label": "Reviews", "icon": "IconStar" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-50 border border-neutral-200 rounded-2xl" },
        "navs-items": { "classes": "gap-1 w-fit bg-white p-1 rounded-full border border-neutral-200" },
        "nav-item": { "classes": "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-neutral-600 hover:bg-neutral-100 whitespace-nowrap cursor-pointer" },
        "nav-item-active": { "classes": "bg-neutral-900! text-white! hover:bg-neutral-900!" },
        "nav-item-label": { "classes": "" },
        "nav-item-icon": { "classes": "empty:hidden" },
        "nav-item-content": { "classes": "pt-5" }
      },
      "children": [
        {
          "id": "tb-pill-p1",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-3" } },
          "children": [
            {
              "id": "tb-pill-p1-h",
              "type": "heading",
              "options": { "text": "Why shoppers pick this one", "tag": "h3" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900" } }
            },
            {
              "id": "tb-pill-p1-t",
              "type": "text",
              "options": { "text": "Lead with the single benefit that matters most, then back it up in a sentence or two. Keep this panel short enough to read without scrolling.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
            }
          ]
        },
        {
          "id": "tb-pill-p2",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-pill-p2-l",
              "type": "list",
              "options": {
                "tag": "ul",
                "icon": "IconCheck",
                "iconSize": 15,
                "items": [
                  { "text": "Add a specification row", "icon": "" },
                  { "text": "Add another specification row", "icon": "" },
                  { "text": "Add a third specification row", "icon": "" },
                  { "text": "Add a fourth specification row", "icon": "" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2" },
                "li": { "classes": "flex items-center gap-2" },
                "icon": { "classes": "text-emerald-600 shrink-0 flex items-center" },
                "text": { "classes": "text-sm text-neutral-700" }
              }
            }
          ]
        },
        {
          "id": "tb-pill-p3",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-pill-p3-t",
              "type": "text",
              "options": { "text": "Drop a commentsGrid here to pull in real reviews, or keep a short note about how ratings are collected.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Vertical Side Tabs',
    thumbnail: '',
    content: {
      "id": "tb-vert",
      "type": "tabs",
      "options": {
        "orientation": "vertical",
        "tabsItems": [
          { "label": "Shipping", "icon": "IconTruckDelivery" },
          { "label": "Payment", "icon": "IconCreditCard" },
          { "label": "Warranty", "icon": "IconShieldCheck" },
          { "label": "Help", "icon": "IconHelpCircle" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-white lg:flex lg:gap-8" },
        "navs-items": { "classes": "gap-1 lg:w-56 lg:shrink-0 lg:border-r lg:border-neutral-200 lg:pr-4" },
        "nav-item": { "classes": "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 whitespace-nowrap cursor-pointer" },
        "nav-item-active": { "classes": "bg-orange-50! text-orange-700!" },
        "nav-item-label": { "classes": "" },
        "nav-item-icon": { "classes": "empty:hidden shrink-0 flex items-center" },
        "nav-item-content": { "classes": "flex-1 min-w-0 pt-4 lg:pt-0" }
      },
      "children": [
        {
          "id": "tb-vert-p1",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-2" } },
          "children": [
            {
              "id": "tb-vert-p1-h",
              "type": "heading",
              "options": { "text": "Shipping", "tag": "h3" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900" } }
            },
            {
              "id": "tb-vert-p1-t",
              "type": "text",
              "options": { "text": "Inside Dhaka we deliver in 24 to 48 hours for Tk 60. Outside Dhaka takes 2 to 4 days for Tk 120. Orders above Tk 1,000 ship free anywhere in the country.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
            }
          ]
        },
        {
          "id": "tb-vert-p2",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-2" } },
          "children": [
            {
              "id": "tb-vert-p2-h",
              "type": "heading",
              "options": { "text": "Payment", "tag": "h3" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900" } }
            },
            {
              "id": "tb-vert-p2-t",
              "type": "text",
              "options": { "text": "Pay with bKash, Nagad, Rocket, any debit or credit card, or simply choose cash on delivery and pay the rider at your door.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
            }
          ]
        },
        {
          "id": "tb-vert-p3",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-2" } },
          "children": [
            {
              "id": "tb-vert-p3-h",
              "type": "heading",
              "options": { "text": "Warranty", "tag": "h3" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900" } }
            },
            {
              "id": "tb-vert-p3-t",
              "type": "text",
              "options": { "text": "Warranty length varies by brand and is printed on each product page. Keep your invoice: it is the proof of purchase every service centre asks for.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
            }
          ]
        },
        {
          "id": "tb-vert-p4",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-2" } },
          "children": [
            {
              "id": "tb-vert-p4-h",
              "type": "heading",
              "options": { "text": "Need help?", "tag": "h3" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900" } }
            },
            {
              "id": "tb-vert-p4-t",
              "type": "text",
              "options": { "text": "Our hotline is open from 9am to 10pm, seven days a week. You can also message us on WhatsApp or Messenger and we usually reply within the hour.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Dark Boxed Tabs',
    thumbnail: '',
    content: {
      "id": "tb-dark",
      "type": "tabs",
      "options": {
        "orientation": "",
        "tabsItems": [
          { "label": "Details", "icon": "IconFileDescription" },
          { "label": "In the box", "icon": "IconPackage" },
          { "label": "Support", "icon": "IconMessage" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-900 rounded-xl" },
        "navs-items": { "classes": "gap-1 border-b border-white/10" },
        "nav-item": { "classes": "flex items-center gap-2 px-4 py-3 text-sm font-medium text-neutral-400 border-b-2 border-transparent hover:text-white whitespace-nowrap cursor-pointer" },
        "nav-item-active": { "classes": "text-amber-400! border-amber-400!" },
        "nav-item-label": { "classes": "" },
        "nav-item-icon": { "classes": "empty:hidden flex items-center" },
        "nav-item-content": { "classes": "pt-5" }
      },
      "children": [
        {
          "id": "tb-dark-p1",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-3" } },
          "children": [
            {
              "id": "tb-dark-p1-h",
              "type": "heading",
              "options": { "text": "The details", "tag": "h3" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-white" } }
            },
            {
              "id": "tb-dark-p1-t",
              "type": "text",
              "options": { "text": "Use this panel for the long-form story: materials, build, who it is for. Dark panels suit a single column of text better than dense tables.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-300 leading-relaxed max-w-3xl" } }
            }
          ]
        },
        {
          "id": "tb-dark-p2",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-dark-p2-l",
              "type": "list",
              "options": {
                "tag": "ul",
                "icon": "IconPointFilled",
                "iconSize": 14,
                "items": [
                  { "text": "The product itself", "icon": "" },
                  { "text": "Charging cable", "icon": "" },
                  { "text": "User manual", "icon": "" },
                  { "text": "Warranty card", "icon": "" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-1.5" },
                "li": { "classes": "flex items-center gap-2" },
                "icon": { "classes": "text-amber-400 shrink-0 flex items-center" },
                "text": { "classes": "text-sm text-neutral-300" }
              }
            }
          ]
        },
        {
          "id": "tb-dark-p3",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-dark-p3-t",
              "type": "text",
              "options": { "text": "Call the hotline between 9am and 10pm, or drop a WhatsApp message any time and we will pick it up the next morning.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-300 leading-relaxed max-w-3xl" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Segmented Two Up',
    thumbnail: '',
    content: {
      "id": "tb-seg",
      "type": "tabs",
      "options": {
        "orientation": "",
        "tabsItems": [
          { "label": "Description", "icon": "IconFileDescription" },
          { "label": "Delivery and returns", "icon": "IconTruckDelivery" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "bg-white" },
        "navs-items": { "classes": "gap-1 bg-neutral-100 p-1 rounded-lg" },
        "nav-item": { "classes": "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-neutral-600 whitespace-nowrap cursor-pointer" },
        "nav-item-active": { "classes": "bg-white! text-neutral-900! shadow-sm!" },
        "nav-item-label": { "classes": "" },
        "nav-item-icon": { "classes": "empty:hidden flex items-center" },
        "nav-item-content": { "classes": "pt-5" }
      },
      "children": [
        {
          "id": "tb-seg-p1",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-seg-p1-t",
              "type": "text",
              "options": { "text": "Two tabs split the strip evenly, which reads well on a phone where a four tab row has to scroll sideways. Put the product description here.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-3xl" } }
            }
          ]
        },
        {
          "id": "tb-seg-p2",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-seg-p2-l",
              "type": "list",
              "options": {
                "tag": "ul",
                "icon": "IconCheck",
                "iconSize": 15,
                "items": [
                  { "text": "Inside Dhaka: Tk 60, 24 to 48 hours", "icon": "" },
                  { "text": "Outside Dhaka: Tk 120, 2 to 4 days", "icon": "" },
                  { "text": "Free delivery above Tk 1,000", "icon": "" },
                  { "text": "Returns accepted within 7 days", "icon": "" }
                ]
              },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-1.5" },
                "li": { "classes": "flex items-center gap-2" },
                "icon": { "classes": "text-emerald-600 shrink-0 flex items-center" },
                "text": { "classes": "text-sm text-neutral-700" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Minimal Text Tabs',
    thumbnail: '',
    content: {
      "id": "tb-min",
      "type": "tabs",
      "options": {
        "orientation": "",
        "tabsItems": [
          { "label": "Description" },
          { "label": "Specification" },
          { "label": "Delivery" },
          { "label": "Returns" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "navs-items": { "classes": "gap-5" },
        "nav-item": { "classes": "py-2 text-xs font-semibold uppercase tracking-wide text-neutral-400 hover:text-neutral-700 whitespace-nowrap cursor-pointer" },
        "nav-item-active": { "classes": "text-neutral-900!" },
        "nav-item-label": { "classes": "" },
        "nav-item-icon": { "classes": "empty:hidden" },
        "nav-item-content": { "classes": "mt-1 pt-4 border-t border-neutral-200" }
      },
      "children": [
        {
          "id": "tb-min-p1",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-min-p1-t",
              "type": "text",
              "options": { "text": "No icons here, so the icon slot collapses and the labels sit tight together. Put the product description in this panel.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-3xl" } }
            }
          ]
        },
        {
          "id": "tb-min-p2",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-min-p2-t",
              "type": "text",
              "options": { "text": "Swap this text block for a list element when you need a proper specification table.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-3xl" } }
            }
          ]
        },
        {
          "id": "tb-min-p3",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-min-p3-t",
              "type": "text",
              "options": { "text": "Tk 60 inside Dhaka and Tk 120 elsewhere, free above Tk 1,000. Pathao, RedX and Steadfast all pick up from us daily.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-3xl" } }
            }
          ]
        },
        {
          "id": "tb-min-p4",
          "type": "tabsItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "" } },
          "children": [
            {
              "id": "tb-min-p4-t",
              "type": "text",
              "options": { "text": "Seven days to change your mind, as long as the item is unused and still in its packaging.", "tag": "p" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-3xl" } }
            }
          ]
        }
      ]
    },
  },

];

export default layouts;
