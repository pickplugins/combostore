/**
 * Element layouts for the `address` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `address` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "address"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * address is a leaf: a <ul> with up to three <li> rows -- phone, email,
 * location, in that order -- so a preset is the three option objects plus the
 * six selector keys.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Never drop phone, email or location from options. Each row renders when its
 *    OBJECT is truthy (Address.jsx:64, :82, :93), not when its value is
 *    non-empty, so blanking a value leaves an empty row -- and removing the key
 *    is worse: AddressOptions.jsx:17-19 reads them with optional chaining and
 *    then uses `phone.value` unguarded at :35, so a missing key throws
 *    "Cannot read properties of undefined (reading 'value')" the moment the
 *    block is selected and the options panel renders. Every preset below keeps
 *    all three keys, and the ones that want fewer rows hide them in CSS instead
 *    with an `nth-child` variant on `*` -- `[&>li:nth-child(3)]:hidden` and
 *    friends. The row order is fixed, so nth-child 1 is phone, 2 is email,
 *    3 is location.
 *
 * 2. The icon wrapper div renders in every row whether or not an icon resolves
 *    (:68, :85, :95) -- only the icon inside it is conditional -- so an unset
 *    icon leaves an empty box that still eats the row's gap. Every preset puts
 *    `empty:hidden` on the `icon` key, which is what lets Compact No Icons drop
 *    the icons cleanly.
 *
 * 3. Each row's value is a bare text node inside the link or li (:73, :88, :98),
 *    with no selector key of its own. Text styling therefore goes on `link` for
 *    the phone and email rows and on `item` for all three; there is nothing to
 *    target the value alone.
 *
 * 4. `link` is combined with `phone-link` on the phone anchor (:66) and with
 *    `email-link` on the email anchor (:84), so `link` is the shared base and
 *    the two specific keys add to it -- these presets keep them
 *    non-overlapping so nothing depends on stylesheet order. The location row is
 *    not a link at all, so there is no location-link key and no hover state to
 *    style there.
 *
 * 5. These links actually work, unlike linkList and productTags: there is no
 *    preventDefault, so `tel:` and `mailto:` fire normally. The catch is the
 *    value doubles as the display text and the href (`tel:${phone.value}`), so a
 *    nicely formatted number ends up in the URI. Browsers strip the spaces and
 *    punctuation, but keep that in mind before adding anything exotic.
 *
 * 6. Each option object declares a `label` that is never rendered -- the
 *    renderer prints only `.value`, and AddressOptions.jsx has no control for
 *    the label either. The labels are kept below to match the definition.
 *    `target`, `scheme` and `url` are also read (:27-29) and unused, left over
 *    from the Button element this file was copied from -- its component is still
 *    named `Button`.
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
