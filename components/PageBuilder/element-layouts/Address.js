/**
 * Element layouts for the `address` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `address` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "address"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * address is a leaf: a <ul> with up to three <li> rows -- phone, email,
 * location, in that order. AddressView (the shop) and the builder's Address.jsx
 * render the same AddressMarkup.
 *
 * Notes that shaped these presets:
 *
 * 1. A row is drawn only when its value is non-empty, and the panel no longer
 *    breaks on a missing row. The presets still set all three values and hide
 *    rows in CSS with an `nth-child` variant on `*` (`[&>li:nth-child(3)]:hidden`)
 *    -- that relies on the fixed order: 1 is phone, 2 is email, 3 is location.
 *
 * 2. The `icon` span is drawn only when an icon is set, so the `empty:hidden`
 *    the presets carry on it is now redundant but harmless.
 *
 * 3. The value is a `text` span, and with `showLabels` a `label` span comes
 *    before it, so the value can be styled on its own.
 *
 * 4. `link` is combined with `phone-link`, `email-link` or `location-link`
 *    (the last only with `location.mapLink`, which links to Google Maps in a
 *    new tab), so `link` is the shared base -- these presets keep them
 *    non-overlapping so nothing depends on stylesheet order.
 *
 * 5. The links work on the shop and do nothing in the builder. The phone's
 *    href is the number's digits only (tel:+15551234567), so the shown value
 *    can be formatted freely.
 */

var layouts = [

  {
    title: 'Footer Contact Column',
    thumbnail: '',
    content: {
      "id": "ad-footer",
      "type": "address",
      "options": {
        "phone": { "icon": "IconPhone", "label": "Phone Number", "value": "+880 1711-000000" },
        "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
        "location": { "icon": "IconMapPin", "label": "location", "value": "House 12, Road 5, Dhanmondi, Dhaka 1205" },
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-2.5" },
        "item": { "classes": "flex gap-2.5 items-start text-sm text-neutral-600" },
        "link": { "classes": "flex gap-2.5 items-start hover:text-orange-600 transition-colors" },
        "phone-link": { "classes": "" },
        "email-link": { "classes": "" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-neutral-400" }
      }
    },
  },

  {
    title: 'Icon Circle Rows',
    thumbnail: '',
    content: {
      "id": "ad-circle",
      "type": "address",
      "options": {
        "phone": { "icon": "IconPhoneCall", "label": "Phone Number", "value": "+880 1711-000000" },
        "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
        "location": { "icon": "IconMapPin", "label": "location", "value": "House 12, Road 5, Dhanmondi, Dhaka 1205" },
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-4" },
        "item": { "classes": "flex gap-3 items-center text-sm font-medium text-neutral-800" },
        "link": { "classes": "flex gap-3 items-center hover:text-orange-600 transition-colors" },
        "phone-link": { "classes": "" },
        "email-link": { "classes": "" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-600" }
      }
    },
  },

  {
    title: 'Inline Topbar',
    thumbnail: '',
    content: {
      "id": "ad-topbar",
      "type": "address",
      "options": {
        "phone": { "icon": "IconPhone", "label": "Phone Number", "value": "+880 1711-000000" },
        "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
        "location": { "icon": "IconMapPin", "label": "location", "value": "House 12, Road 5, Dhanmondi, Dhaka 1205" },
        "iconSize": 15
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-row flex-wrap items-center gap-x-6 gap-y-1 [&>li:nth-child(3)]:hidden" },
        "item": { "classes": "flex gap-1.5 items-center text-xs text-neutral-600" },
        "link": { "classes": "flex gap-1.5 items-center hover:text-orange-600 transition-colors" },
        "phone-link": { "classes": "font-medium" },
        "email-link": { "classes": "" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center text-neutral-400" }
      }
    },
  },

  {
    title: 'Dark Footer Contact',
    thumbnail: '',
    content: {
      "id": "ad-dark",
      "type": "address",
      "options": {
        "phone": { "icon": "IconPhone", "label": "Phone Number", "value": "+880 1711-000000" },
        "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
        "location": { "icon": "IconMapPin", "label": "location", "value": "House 12, Road 5, Dhanmondi, Dhaka 1205" },
        "iconSize": 18
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "item": { "classes": "flex gap-2.5 items-start text-sm text-neutral-400" },
        "link": { "classes": "flex gap-2.5 items-start hover:text-white transition-colors" },
        "phone-link": { "classes": "" },
        "email-link": { "classes": "" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-neutral-600" }
      }
    },
  },

  {
    title: 'Compact No Icons',
    thumbnail: '',
    content: {
      "id": "ad-compact",
      "type": "address",
      "options": {
        "phone": { "icon": "", "label": "Phone Number", "value": "+880 1711-000000" },
        "email": { "icon": "", "label": "Email", "value": "support@example.com" },
        "location": { "icon": "", "label": "location", "value": "Dhanmondi, Dhaka 1205" },
        "iconSize": 16
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-1" },
        "item": { "classes": "flex gap-2 items-baseline text-xs text-neutral-500" },
        "link": { "classes": "flex gap-2 items-baseline hover:text-neutral-900 transition-colors" },
        "phone-link": { "classes": "" },
        "email-link": { "classes": "" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center" }
      }
    },
  },

  {
    title: 'Location Card Only',
    thumbnail: '',
    content: {
      "id": "ad-location",
      "type": "address",
      "options": {
        "phone": { "icon": "IconPhone", "label": "Phone Number", "value": "+880 1711-000000" },
        "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
        "location": { "icon": "IconMapPin", "label": "location", "value": "House 12, Road 5, Dhanmondi, Dhaka 1205" },
        "iconSize": 20
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col p-4 bg-neutral-50 border border-neutral-200 rounded-xl [&>li:nth-child(1)]:hidden [&>li:nth-child(2)]:hidden" },
        "item": { "classes": "flex gap-3 items-start text-sm leading-relaxed text-neutral-700" },
        "link": { "classes": "flex gap-3 items-start" },
        "phone-link": { "classes": "" },
        "email-link": { "classes": "" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-orange-500" }
      }
    },
  },

];

export default layouts;
