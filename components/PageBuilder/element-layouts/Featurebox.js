/**
 * Element layouts for the `featurebox` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `featurebox` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "featurebox"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * Renderer notes that shaped these presets:
 *
 * 1. featurebox is a hybrid repeater, not a plain container: `options.items` is
 *    the data and `children` is a single template that Featurebox.jsx:71-97
 *    renders once per item, wrapping each pass in `LoopProvider value={item}`.
 *    So one template styles every feature. Two consequences: selecting a child
 *    in the canvas edits the block for all items at once, and the same block id
 *    lands on several DOM nodes -- both inherent to the element, not these
 *    presets.
 *
 * 2. The copy does not live in the child blocks. FeatureboxTitle.jsx:12 prints
 *    `loop.title` and FeatureboxDetails.jsx:12 prints `loop.description`,
 *    ignoring their own options entirely. Feature text is edited in the
 *    featurebox's `options.items`, which is what FeatureboxOptions.jsx exposes.
 *
 * 3. Styling for those children comes from the PARENT featurebox's selector
 *    keys: FeatureboxTitle.jsx:41 reads the featurebox's `title`,
 *    FeatureboxDetails.jsx:41 its `description`, and Icon.jsx:44 merges the
 *    featurebox's `icon` with the icon block's own `*`. The `*` and `img` keys
 *    that the featureboxTitle and featureboxDetails definitions declare are
 *    never read, so they stay empty below -- put the classes on the featurebox.
 *
 * 4. `options.tag` defaults to "ul" (Featurebox.jsx:30) while each item is
 *    wrapped in a div, which is invalid nesting, so every preset sets
 *    `tag: "div"`. The renderer reads `tag` even though the definition does not
 *    declare it. Same for the children: featureboxTitle and featureboxDetails
 *    both declare `options: {}` yet default to an `h1` (FeatureboxTitle.jsx:30,
 *    FeatureboxDetails.jsx:30), so each one here is given an explicit `tag` to
 *    keep the heading order sane.
 *
 * 5. `items[].iconSize` is inert: Icon.jsx:11 reads it into `loopIconSize` and
 *    never applies it, so icon size comes from the icon block's `options.size`.
 *    The featurebox's own top-level `icon` and `iconSize` options are not read
 *    either; they are kept empty to match the definition.
 *
 * 6. `items[].icon` must be an exact @tabler/icons-react export name --
 *    Icon.jsx:36,40 does `TablerIcons[name]`, so a typo silently renders
 *    nothing. Every name used here was checked against the installed package.
 *
 * 7. Layout model: the featurebox root IS the item container, so `*` arranges
 *    the items (grid/flex) and `loop-item` is one card. Stacking a title and
 *    description beside an icon needs a wrapper, so a `container` does that
 *    job -- canContain suggests `columns`, but container is lighter and
 *    forwards every canvas prop (Container.jsx:70-84).
 */

var layouts = [

  {
    title: 'Trust Row Bordered',
    thumbnail: '',
    content: {
      "id": "fb-trust",
      "type": "featurebox",
      "options": {
        "tag": "div",
        "icon": "",
        "iconSize": "",
        "items": [
          {
            "title": "Free Home Delivery",
            "description": "On every order over Tk 1,000 inside Dhaka.",
            "icon": "IconTruckDelivery",
            "iconSize": ""
          },
          {
            "title": "Cash on Delivery",
            "description": "Pay in cash when the parcel reaches your door.",
            "icon": "IconCash",
            "iconSize": ""
          },
          {
            "title": "7 Day Easy Return",
            "description": "Changed your mind? Send it back within 7 days.",
            "icon": "IconArrowBackUp",
            "iconSize": ""
          },
          {
            "title": "Hotline Support",
            "description": "Call us any day between 9am and 10pm.",
            "icon": "IconPhoneCall",
            "iconSize": ""
          }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-neutral-200 rounded-xl divide-y divide-neutral-200 sm:divide-y-0 sm:divide-x" },
        "loop-item": { "classes": "flex items-center gap-4 p-5" },
        "title": { "classes": "text-sm font-semibold text-neutral-900" },
        "description": { "classes": "text-xs text-neutral-500 mt-0.5 leading-relaxed" },
        "icon": { "classes": "shrink-0 w-11 h-11 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center" }
      },
      "children": [
        {
          "id": "fb-trust-icon",
          "type": "icon",
          "options": { "iconName": "IconTruckDelivery", "size": "22" },
          "cssSelectors": { "*": { "classes": "" } },
          "children": []
        },
        {
          "id": "fb-trust-copy",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col" } },
          "children": [
            {
              "id": "fb-trust-title",
              "type": "featureboxTitle",
              "options": { "tag": "h4" },
              "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
            },
            {
              "id": "fb-trust-desc",
              "type": "featureboxDetails",
              "options": { "tag": "p" },
              "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Icon Cards Grid',
    thumbnail: '',
    content: {
      "id": "fb-cards",
      "type": "featurebox",
      "options": {
        "tag": "div",
        "icon": "",
        "iconSize": "",
        "items": [
          {
            "title": "100% Authentic",
            "description": "Everything we sell comes straight from the brand or its authorised distributor.",
            "icon": "IconShieldCheck",
            "iconSize": ""
          },
          {
            "title": "Same Day Dispatch",
            "description": "Orders placed before 4pm are handed to the courier the same day.",
            "icon": "IconBolt",
            "iconSize": ""
          },
          {
            "title": "Secure Payment",
            "description": "Pay with bKash, Nagad, Rocket or any card through a secure gateway.",
            "icon": "IconCreditCard",
            "iconSize": ""
          },
          {
            "title": "Nationwide Coverage",
            "description": "We reach all 64 districts through Pathao, RedX and Steadfast.",
            "icon": "IconMapPin",
            "iconSize": ""
          }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" },
        "loop-item": { "classes": "flex flex-col items-start gap-3 p-6 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" },
        "title": { "classes": "text-base font-semibold text-neutral-900" },
        "description": { "classes": "text-sm text-neutral-600 leading-relaxed" },
        "icon": { "classes": "w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center" }
      },
      "children": [
        {
          "id": "fb-cards-icon",
          "type": "icon",
          "options": { "iconName": "IconShieldCheck", "size": "24" },
          "cssSelectors": { "*": { "classes": "" } },
          "children": []
        },
        {
          "id": "fb-cards-title",
          "type": "featureboxTitle",
          "options": { "tag": "h3" },
          "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
        },
        {
          "id": "fb-cards-desc",
          "type": "featureboxDetails",
          "options": { "tag": "p" },
          "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
        }
      ]
    },
  },

  {
    title: 'Centered Steps',
    thumbnail: '',
    content: {
      "id": "fb-steps",
      "type": "featurebox",
      "options": {
        "tag": "div",
        "icon": "",
        "iconSize": "",
        "items": [
          {
            "title": "1. Place Your Order",
            "description": "Add to cart and check out in under a minute. No account needed.",
            "icon": "IconBuildingStore",
            "iconSize": ""
          },
          {
            "title": "2. Pay Your Way",
            "description": "Choose bKash, Nagad, Rocket, card, or simply pay cash on delivery.",
            "icon": "IconWallet",
            "iconSize": ""
          },
          {
            "title": "3. Get It Delivered",
            "description": "24 to 48 hours inside Dhaka, 2 to 4 days anywhere else in the country.",
            "icon": "IconPackage",
            "iconSize": ""
          }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 md:grid-cols-3 gap-8 py-8" },
        "loop-item": { "classes": "flex flex-col items-center text-center gap-3 px-4" },
        "title": { "classes": "text-base font-semibold text-neutral-900" },
        "description": { "classes": "text-sm text-neutral-500 leading-relaxed max-w-xs" },
        "icon": { "classes": "w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center" }
      },
      "children": [
        {
          "id": "fb-steps-icon",
          "type": "icon",
          "options": { "iconName": "IconBuildingStore", "size": "26" },
          "cssSelectors": { "*": { "classes": "" } },
          "children": []
        },
        {
          "id": "fb-steps-title",
          "type": "featureboxTitle",
          "options": { "tag": "h3" },
          "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
        },
        {
          "id": "fb-steps-desc",
          "type": "featureboxDetails",
          "options": { "tag": "p" },
          "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
        }
      ]
    },
  },

  {
    title: 'Dark Benefit Strip',
    thumbnail: '',
    content: {
      "id": "fb-dark",
      "type": "featurebox",
      "options": {
        "tag": "div",
        "icon": "",
        "iconSize": "",
        "items": [
          {
            "title": "Free Delivery",
            "description": "On orders above Tk 1,000",
            "icon": "IconTruck",
            "iconSize": ""
          },
          {
            "title": "Cash on Delivery",
            "description": "Available in all 64 districts",
            "icon": "IconCash",
            "iconSize": ""
          },
          {
            "title": "Easy Exchange",
            "description": "Within 7 days of delivery",
            "icon": "IconRefresh",
            "iconSize": ""
          },
          {
            "title": "Genuine Products",
            "description": "Brand warranty included",
            "icon": "IconCertificate",
            "iconSize": ""
          }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 rounded-xl overflow-hidden" },
        "loop-item": { "classes": "flex flex-col gap-2 bg-neutral-900 p-6" },
        "title": { "classes": "text-sm font-semibold text-white" },
        "description": { "classes": "text-xs text-neutral-400" },
        "icon": { "classes": "w-10 h-10 rounded-md bg-white/10 text-amber-400 flex items-center justify-center" }
      },
      "children": [
        {
          "id": "fb-dark-icon",
          "type": "icon",
          "options": { "iconName": "IconTruck", "size": "20" },
          "cssSelectors": { "*": { "classes": "" } },
          "children": []
        },
        {
          "id": "fb-dark-title",
          "type": "featureboxTitle",
          "options": { "tag": "h4" },
          "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
        },
        {
          "id": "fb-dark-desc",
          "type": "featureboxDetails",
          "options": { "tag": "p" },
          "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
        }
      ]
    },
  },

  {
    title: 'Compact Inline Bar',
    thumbnail: '',
    content: {
      "id": "fb-bar",
      "type": "featurebox",
      "options": {
        "tag": "div",
        "icon": "",
        "iconSize": "",
        "items": [
          {
            "title": "Free delivery over Tk 1,000",
            "description": "Inside Dhaka only.",
            "icon": "IconTruck",
            "iconSize": ""
          },
          {
            "title": "Cash on delivery",
            "description": "Pay at your door.",
            "icon": "IconCash",
            "iconSize": ""
          },
          {
            "title": "7 day returns",
            "description": "No questions asked.",
            "icon": "IconArrowBackUp",
            "iconSize": ""
          },
          {
            "title": "bKash and Nagad accepted",
            "description": "Plus Rocket and cards.",
            "icon": "IconDeviceMobile",
            "iconSize": ""
          },
          {
            "title": "Hotline 9am to 10pm",
            "description": "Seven days a week.",
            "icon": "IconPhoneCall",
            "iconSize": ""
          }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 bg-neutral-50 border-y border-neutral-200 px-5 py-3" },
        "loop-item": { "classes": "flex items-center gap-2" },
        "title": { "classes": "text-xs font-medium text-neutral-700 whitespace-nowrap" },
        "description": { "classes": "" },
        "icon": { "classes": "text-neutral-400 flex items-center justify-center" }
      },
      "children": [
        {
          "id": "fb-bar-icon",
          "type": "icon",
          "options": { "iconName": "IconTruck", "size": "18" },
          "cssSelectors": { "*": { "classes": "" } },
          "children": []
        },
        {
          "id": "fb-bar-title",
          "type": "featureboxTitle",
          "options": { "tag": "span" },
          "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
        }
      ]
    },
  },

  {
    title: 'Two Column Checklist',
    thumbnail: '',
    content: {
      "id": "fb-check",
      "type": "featurebox",
      "options": {
        "tag": "div",
        "icon": "",
        "iconSize": "",
        "items": [
          {
            "title": "Verified Sellers Only",
            "description": "Every seller on the platform is checked before a single product goes live.",
            "icon": "IconShieldCheck",
            "iconSize": ""
          },
          {
            "title": "Honest Pricing",
            "description": "The price you see includes VAT. No surprises at checkout.",
            "icon": "IconPercentage",
            "iconSize": ""
          },
          {
            "title": "Free Gift Wrapping",
            "description": "Tick the box at checkout and we will wrap it before dispatch.",
            "icon": "IconGift",
            "iconSize": ""
          },
          {
            "title": "Loyalty Rewards",
            "description": "Earn points on every order and spend them on your next one.",
            "icon": "IconStar",
            "iconSize": ""
          },
          {
            "title": "Live Order Tracking",
            "description": "Follow your parcel from our warehouse to your door in real time.",
            "icon": "IconMapPin",
            "iconSize": ""
          },
          {
            "title": "Secure Checkout",
            "description": "Card and mobile wallet payments run over an encrypted connection.",
            "icon": "IconLock",
            "iconSize": ""
          }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 py-6" },
        "loop-item": { "classes": "flex items-start gap-4" },
        "title": { "classes": "text-sm font-semibold text-neutral-900" },
        "description": { "classes": "text-sm text-neutral-600 leading-relaxed" },
        "icon": { "classes": "shrink-0 mt-0.5 w-8 h-8 rounded-full border border-orange-200 bg-orange-50 text-orange-600 flex items-center justify-center" }
      },
      "children": [
        {
          "id": "fb-check-icon",
          "type": "icon",
          "options": { "iconName": "IconShieldCheck", "size": "16" },
          "cssSelectors": { "*": { "classes": "" } },
          "children": []
        },
        {
          "id": "fb-check-copy",
          "type": "container",
          "options": {},
          "cssSelectors": { "*": { "classes": "flex flex-col gap-1" } },
          "children": [
            {
              "id": "fb-check-title",
              "type": "featureboxTitle",
              "options": { "tag": "h4" },
              "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
            },
            {
              "id": "fb-check-desc",
              "type": "featureboxDetails",
              "options": { "tag": "p" },
              "cssSelectors": { "*": { "classes": "" }, "img": { "classes": "" } }
            }
          ]
        }
      ]
    },
  },

];

export default layouts;
