/**
 * Element layouts for the `productTags` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productTags` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "productTags"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * productTags is a leaf: an optional label, then one link per tag. All six
 * declared selector keys are read and nothing undeclared is, so this is one of
 * the tidier elements -- the only real design constraint is where the separator
 * sits.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. The separator span lives INSIDE each tag's <Link> (ProductTags.jsx:84-87),
 *    not between the links. So anything that gives `item` a background, padding
 *    and a radius puts the comma inside the chip -- "Tag Name," on a pill. Every
 *    chip-style preset below therefore sets `separator` to `hidden` and spaces
 *    the tags with a gap on `items` instead, while the inline text presets keep
 *    the comma visible and leave `item` unboxed. Pick one or the other; mixing
 *    them is what looks wrong.
 *
 * 2. The separator text is hardcoded to ", " (:86). The definition declares a
 *    `separator` option, but the renderer never reads it -- so the `separator`
 *    selector key can style or hide that comma, and nothing can change it to a
 *    slash or a bullet. It only renders between items (:85), so there is no
 *    trailing comma to deal with.
 *
 * 3. Tags fall back to two mock entries when there is no product context (:36),
 *    so the canvas shows "Tag Name" and "Tag Name 2" and the block stays
 *    visible and selectable -- unlike productDiscount, which renders nothing.
 *
 * 4. Clicks are swallowed: :82 calls `ev.preventDefault()` on every tag link
 *    with nothing gating it, so the href (`${NEXT_PUBLIC_STORE_URL}tags/<slug>`)
 *    never navigates, on the front end as much as in the canvas. Same pattern as
 *    LinkList.jsx:73. The env var is set, so the hrefs themselves are
 *    well-formed.
 *
 * 5. Options are nearly all dead. `label` works and is guarded (:67), so an
 *    empty label leaves no stray box. `separator` is declared and never read.
 *    Lines 28-31 also read `tag`, `readmore` and `maxWord` and use none of them
 *    -- leftovers from an excerpt element. ProductTagsOptions.jsx adds controls
 *    for `classes`, `icon` and `iconSize` that the renderer never reads (there
 *    is no icon in this element at all), so Label is the only control in that
 *    panel that does anything.
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
