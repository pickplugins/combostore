/**
 * Element layouts for the `productBadge` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productBadge` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "productBadge"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * productBadge is a leaf: an optional label, then one link per badge. Its
 * renderer is the third copy of the ProductTags.jsx shape, differing only in
 * reading `product.badges` and in the /badges/ href -- so the same constraints
 * apply. Badges are short status labels though (New, Featured, Sale, Best
 * Seller), so these presets lean towards solid chips and a card-corner stack
 * rather than the comma-separated lists that suit tags and categories.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. The separator span lives INSIDE each badge's <Link>
 *    (ProductBadge.jsx:84-87), not between the links, so a chip-styled `item`
 *    would carry the comma inside the chip. Every chip preset here sets
 *    `separator` to `hidden` and spaces the badges with a gap on `items`. The
 *    one text-style preset keeps the comma and leaves `item` unboxed.
 *
 * 2. The separator text is hardcoded to ", " (:86) and the declared `separator`
 *    option is never read, so that key can style or hide the comma but not
 *    change the glyph. Where a different divider is wanted, generate it off
 *    `item` instead -- see the Breadcrumb Trail preset in ProductCategories.js,
 *    which pairs an `after:content` utility with `last:after:content-none`.
 *
 * 3. `items` is a plain div with only this key on it, so the badge run is
 *    whatever that key says: a `flex` row, a `flex-wrap` row, or `flex-col` for
 *    a vertical stack. Card Corner Stack uses the column form together with
 *    `absolute` on `*`, which needs the surrounding card to be `relative` --
 *    the card presets in PostGrid.js and TermsGrid.js set that on `loop-item`.
 *
 * 4. The mock data still says "Tag Name". ProductBadge.jsx:36 falls back to
 *    `[{slug:'tag-slug', name:'Tag Name'}, ...]`, copied from the tags element
 *    and never renamed, so the canvas shows two tag-ish placeholders rather than
 *    anything badge-like. Harmless, but do not read the canvas text as evidence
 *    the element is wired to the wrong field -- it does read `product.badges`.
 *
 * 5. Clicks are swallowed: :82 calls `ev.preventDefault()` on every link with
 *    nothing gating it, so the href never navigates, on the front end as much as
 *    in the canvas.
 *
 * 6. Options are nearly all dead. `label` works and is guarded (:66), so an
 *    empty label leaves no stray box. `separator` is declared and never read,
 *    and lines 28-31 read `tag`, `readmore` and `maxWord` without using any of
 *    them. Note this element's definition ships `*` with no default classes,
 *    unlike productTags and productCategories, so the root starts with no
 *    layout of its own -- each preset sets it explicitly.
 */

var layouts = [

  {
    title: 'Solid Chips',
    thumbnail: '',
    content: {
      "id": "pb-solid",
      "type": "productBadge",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap gap-1.5" },
        "item": { "classes": "px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white bg-neutral-900 rounded" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Card Corner Stack',
    thumbnail: '',
    content: {
      "id": "pb-corner",
      "type": "productBadge",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "absolute top-3 left-3 z-10" },
        "label": { "classes": "mb-1 text-[10px] font-semibold uppercase tracking-wide text-white/70" },
        "items": { "classes": "flex flex-col items-start gap-1.5" },
        "item": { "classes": "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white bg-orange-600 rounded shadow-sm" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Outline Chips',
    thumbnail: '',
    content: {
      "id": "pb-outline",
      "type": "productBadge",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap gap-1.5" },
        "item": { "classes": "px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-600 bg-white border border-neutral-300 rounded" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Accent Ribbon',
    thumbnail: '',
    content: {
      "id": "pb-ribbon",
      "type": "productBadge",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap gap-1" },
        "item": { "classes": "pl-2.5 pr-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-900 bg-amber-400 rounded-r-full" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Dark Glass Chips',
    thumbnail: '',
    content: {
      "id": "pb-dark",
      "type": "productBadge",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
        "items": { "classes": "flex flex-wrap gap-1.5" },
        "item": { "classes": "px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-400 bg-white/10 border border-amber-400/30 rounded" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Micro Text Labels',
    thumbnail: '',
    content: {
      "id": "pb-micro",
      "type": "productBadge",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-1.5 flex-wrap" },
        "label": { "classes": "text-[11px] text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-orange-600" },
        "category-name": { "classes": "" },
        "separator": { "classes": "font-normal text-neutral-300 mr-1" }
      }
    },
  },

];

export default layouts;
