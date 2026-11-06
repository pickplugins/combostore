/**
 * Element layouts for the `productTags` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productTags` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "productTags"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * productTags is a leaf: an optional label, then one link per tag of the
 * product, each to its /tags/<slug>/ page. ProductTagsView (the shop) and the
 * builder's ProductTags.jsx render the same ProductTermLinksMarkup as the
 * categories block. The only real design constraint is where the separator
 * sits.
 *
 * Notes that shaped these presets:
 *
 * 1. The separator span lives INSIDE each tag's link, after its name. So
 *    anything that gives `item` a background, padding and a radius puts the
 *    separator inside the chip -- "Fresh," on a pill. Every chip-style preset
 *    sets `separator` to `hidden` and spaces the tags with a gap on `items`,
 *    while the inline text presets keep it and leave `item` unboxed. Pick one
 *    or the other; mixing them is what looks wrong.
 *
 * 2. `options.separator` sets the text between tags (", " by default; ""
 *    leaves it out).
 *
 * 3. On the shop a product without tags shows nothing; the builder then shows
 *    a dimmed sample "Fresh, Local" so the block stays visible and selectable.
 *    Links work on the shop and never navigate in the builder.
 */

var layouts = [

  {
    title: 'Comma List With Label',
    thumbnail: '',
    content: {
      "id": "pt-comma",
      "type": "productTags",
      "options": {
        "label": "Tags:",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
        "label": { "classes": "text-sm font-medium text-neutral-500" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-sm text-neutral-700 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-400 mr-1" }
      }
    },
  },

  {
    title: 'Pill Tags',
    thumbnail: '',
    content: {
      "id": "pt-pill",
      "type": "productTags",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap gap-2" },
        "item": { "classes": "px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-full hover:bg-orange-50 hover:text-orange-700 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Outline Chips',
    thumbnail: '',
    content: {
      "id": "pt-outline",
      "type": "productTags",
      "options": {
        "label": "Tagged in",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3 flex-wrap" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap gap-1.5" },
        "item": { "classes": "px-2.5 py-1 text-xs text-neutral-700 border border-neutral-200 rounded-md hover:border-orange-300 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Dark Pills',
    thumbnail: '',
    content: {
      "id": "pt-dark",
      "type": "productTags",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
        "items": { "classes": "flex flex-wrap gap-2" },
        "item": { "classes": "px-2.5 py-1 text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 rounded-full hover:border-amber-400/40 hover:text-white transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Underlined Links',
    thumbnail: '',
    content: {
      "id": "pt-underline",
      "type": "productTags",
      "options": {
        "label": "Tags",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
        "label": { "classes": "text-xs text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-xs text-neutral-600 underline decoration-neutral-300 underline-offset-2 hover:decoration-orange-400 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "no-underline text-neutral-400 mr-1" }
      }
    },
  },

  {
    title: 'Compact Muted',
    thumbnail: '',
    content: {
      "id": "pt-min",
      "type": "productTags",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-1.5 flex-wrap" },
        "label": { "classes": "text-xs text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-xs text-neutral-400 hover:text-neutral-700 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-300 mr-1" }
      }
    },
  },

];

export default layouts;
