/**
 * Element layouts for the `list` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `list` block and its Replace
 * action splices the preset in place of that block, so every root here MUST be
 * `"type": "list"`. (PageBuilder.jsx regenerates all ids on paste/replace, so
 * the readable ids below are safe.)
 *
 * list is a leaf repeater: `options.items` is `[{ text, icon }]`, the root tag
 * is `ul` or `ol`, and each item renders an icon wrapper plus a text span. All
 * four declared options and all four selector keys are read, so the only real
 * decision is which of two layout modes a preset is in.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. A list is either marker-driven or icon-driven -- never both. The `li`
 *    default is `list-disc`, which needs the browser's `display: list-item`, so
 *    putting `flex` on `li` silently removes the bullet. So:
 *      marker mode -- `list-disc`/`list-decimal` on `li`, no flex, every icon
 *      left empty;
 *      icon mode   -- `flex items-start gap-2` on `li`, no list-* class, icons
 *      set per item or through the `options.icon` fallback.
 *    Mixing them gives either a bullet fighting an icon or a silently missing
 *    bullet.
 *
 * 2. `empty:hidden` on the `icon` key is required in marker mode, not
 *    cosmetic. List.jsx:62-71 renders the icon wrapper in both branches -- with
 *    the item's icon, or with the `options.icon` fallback, or empty if neither
 *    resolves -- and that wrapper is a <div>, so an empty one still occupies a
 *    block and pushes the text span onto the next line. `empty:hidden` collapses
 *    it so marker-mode items stay on one line beside their bullet. Every preset
 *    carries it.
 *
 * 3. `options.icon` is a fallback applied to any item whose own `icon` is empty
 *    (:57, :68), which is what makes the checklist presets work: one tick
 *    defined once rather than repeated on every item. Icon names must be exact
 *    @tabler/icons-react exports; all names used here were checked against the
 *    installed package.
 *
 * 4. `iconSize` is applied to both the per-item icon and the fallback (:64,
 *    :69), so it is the only way to size them -- text utilities on the `icon`
 *    key will not resize an SVG sized by width/height attributes.
 *
 * 5. The <li> is hardcoded regardless of `tag` (:60), so `tag` should stay `ul`
 *    or `ol`; anything else nests list items outside a list.
 *
 * 6. `options.text` is also read (:82) and rendered after the items, as a bare
 *    text node directly inside the <ul> -- which is invalid HTML and has no
 *    selector key. It is undeclared in the definition and left unset here.
 */

var layouts = [

  {
    title: 'Green Checklist',
    thumbnail: '',
    content: {
      "id": "ls-check",
      "type": "list",
      "options": {
        "tag": "ul",
        "icon": "IconCheck",
        "iconSize": 16,
        "items": [
          { "text": "Free delivery on orders over Tk 1,000", "icon": "" },
          { "text": "Cash on delivery in all 64 districts", "icon": "" },
          { "text": "7 day return on unused items", "icon": "" },
          { "text": "100% authentic, brand warranty included", "icon": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-2" },
        "li": { "classes": "flex items-start gap-2" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-emerald-600" },
        "text": { "classes": "text-sm text-neutral-700 leading-relaxed" }
      }
    },
  },

  {
    title: 'Bulleted Spec Rows',
    thumbnail: '',
    content: {
      "id": "ls-spec",
      "type": "list",
      "options": {
        "tag": "ul",
        "icon": "",
        "iconSize": 16,
        "items": [
          { "text": "Brand: add the brand name", "icon": "" },
          { "text": "Model: add the model or SKU", "icon": "" },
          { "text": "Material: add the material", "icon": "" },
          { "text": "Country of origin: add the origin", "icon": "" },
          { "text": "Warranty: 12 months brand warranty", "icon": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "ml-5 max-w-2xl" },
        "li": { "classes": "list-disc py-1.5 border-b border-neutral-100 last:border-0 marker:text-neutral-300" },
        "icon": { "classes": "empty:hidden" },
        "text": { "classes": "text-sm text-neutral-700" }
      }
    },
  },

  {
    title: 'Numbered Steps',
    thumbnail: '',
    content: {
      "id": "ls-steps",
      "type": "list",
      "options": {
        "tag": "ol",
        "icon": "",
        "iconSize": 16,
        "items": [
          { "text": "Add what you need to the cart", "icon": "" },
          { "text": "Enter your delivery address", "icon": "" },
          { "text": "Pick bKash, Nagad, card or cash on delivery", "icon": "" },
          { "text": "Track the parcel from the link we text you", "icon": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "ml-6 flex flex-col gap-2.5 max-w-2xl" },
        "li": { "classes": "list-decimal pl-1 marker:font-semibold marker:text-orange-500" },
        "icon": { "classes": "empty:hidden" },
        "text": { "classes": "text-sm text-neutral-700 leading-relaxed" }
      }
    },
  },

  {
    title: 'Icon Feature Rows',
    thumbnail: '',
    content: {
      "id": "ls-feature",
      "type": "list",
      "options": {
        "tag": "ul",
        "icon": "IconPointFilled",
        "iconSize": 15,
        "items": [
          { "text": "Same day dispatch before 4pm", "icon": "IconBolt" },
          { "text": "Delivered by Pathao, RedX and Steadfast", "icon": "IconTruck" },
          { "text": "Secure bKash, Nagad and card payments", "icon": "IconCreditCard" },
          { "text": "Hotline open 9am to 10pm, every day", "icon": "IconHeadset" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-3" },
        "li": { "classes": "flex items-center gap-3" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-orange-50 text-orange-600" },
        "text": { "classes": "text-sm font-medium text-neutral-800" }
      }
    },
  },

  {
    title: 'Dark Checklist',
    thumbnail: '',
    content: {
      "id": "ls-dark",
      "type": "list",
      "options": {
        "tag": "ul",
        "icon": "IconCircleCheck",
        "iconSize": 16,
        "items": [
          { "text": "Genuine products only", "icon": "" },
          { "text": "Nationwide delivery", "icon": "" },
          { "text": "Easy 7 day exchange", "icon": "" },
          { "text": "Pay however you like", "icon": "" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-col gap-2.5" },
        "li": { "classes": "flex items-start gap-2.5" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-amber-400" },
        "text": { "classes": "text-sm text-neutral-300 leading-relaxed" }
      }
    },
  },

  {
    title: 'Inline Pills Row',
    thumbnail: '',
    content: {
      "id": "ls-inline",
      "type": "list",
      "options": {
        "tag": "ul",
        "icon": "",
        "iconSize": 14,
        "items": [
          { "text": "Free delivery", "icon": "IconTruck" },
          { "text": "7 day returns", "icon": "IconRefresh" },
          { "text": "Genuine products", "icon": "IconShieldCheck" },
          { "text": "Gift wrapping", "icon": "IconGift" }
        ]
      },
      "cssSelectors": {
        "*": { "classes": "flex flex-wrap gap-x-5 gap-y-2" },
        "li": { "classes": "flex items-center gap-1.5" },
        "icon": { "classes": "empty:hidden shrink-0 flex items-center text-neutral-400" },
        "text": { "classes": "text-xs font-medium text-neutral-600 whitespace-nowrap" }
      }
    },
  },

];

export default layouts;
