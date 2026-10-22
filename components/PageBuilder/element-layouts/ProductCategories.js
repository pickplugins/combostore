/**
 * Element layouts for the `productCategories` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productCategories` block
 * and its Replace action splices the preset in place of that block, so every
 * root here MUST be `"type": "productCategories"`. (PageBuilder.jsx regenerates
 * all ids on paste/replace, so the readable ids below are safe.)
 *
 * productCategories is a leaf: an optional label, then one link per category.
 * Its renderer is the same shape as ProductTags.jsx, differing only in the data
 * it reads (`product.categories`), the mock values and the /categories/ href --
 * so the same two constraints apply here, and the presets below are built for
 * where categories actually get used: as an eyebrow above a product title, as a
 * breadcrumb-ish trail, or as badges.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. The separator span lives INSIDE each category's <Link>
 *    (ProductCategories.jsx:84-87), not between the links. So anything that
 *    gives `item` a background, padding and a radius puts the comma inside the
 *    badge. The badge presets therefore set `separator` to `hidden` and space
 *    the items with a gap on `items`; the inline presets keep the comma and
 *    leave `item` unboxed.
 *
 * 2. The separator text is hardcoded to ", " (:86) and the declared `separator`
 *    option is never read, so the key can style or hide that comma but cannot
 *    change the glyph. To get a different divider -- a slash for the breadcrumb
 *    preset -- hide the span and generate the glyph off `item` instead:
 *    `after:content-['/'] last:after:content-none`. The `last:` variant stops it
 *    after the final link, since the Links are direct children of `items`. Both
 *    utilities were confirmed to compile against this project's Tailwind v4
 *    (`content: '/'` and `content: none` both appear in the generated CSS).
 *
 * 3. Categories fall back to two mock entries when there is no product context
 *    (:36), so the canvas shows "Category Name" and "Category Name 2" and the
 *    block stays visible and selectable.
 *
 * 4. Clicks are swallowed: :82 calls `ev.preventDefault()` on every link with
 *    nothing gating it, so the href (`${NEXT_PUBLIC_APP_URL}categories/<slug>`)
 *    never navigates, on the front end as much as in the canvas. Same pattern as
 *    ProductTags.jsx:82 and LinkList.jsx:73.
 *
 * 5. Options are nearly all dead. `label` works and is guarded (:67), so an
 *    empty label leaves no stray box. `separator` is declared and never read.
 *    Lines 28-31 also read `tag`, `readmore` and `maxWord` and use none of them.
 *    ProductCategoriesOptions.jsx adds `classes`, `icon` and `iconSize`
 *    controls the renderer never reads, so Label is the only control in that
 *    panel that does anything.
 */

var layouts = [

  {
    title: 'Eyebrow Above Title',
    thumbnail: '',
    content: {
      "id": "pc-eyebrow",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
        "label": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-orange-600 hover:text-orange-700 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-orange-300 mr-1" }
      }
    },
  },

  {
    title: 'Breadcrumb Trail',
    thumbnail: '',
    content: {
      "id": "pc-crumb",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-center" },
        "item": { "classes": "text-xs text-neutral-500 hover:text-neutral-900 transition-colors after:content-['/'] after:mx-2 after:text-neutral-300 last:after:content-none" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Category Badges',
    thumbnail: '',
    content: {
      "id": "pc-badge",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-2 flex-wrap" },
        "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap gap-2" },
        "item": { "classes": "px-2.5 py-1 text-xs font-medium text-orange-700 bg-orange-50 border border-orange-100 rounded-md hover:bg-orange-100 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Labeled Category Row',
    thumbnail: '',
    content: {
      "id": "pc-labeled",
      "type": "productCategories",
      "options": {
        "label": "Category",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center gap-3 flex-wrap py-2 border-y border-neutral-100" },
        "label": { "classes": "shrink-0 text-xs font-medium text-neutral-500" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-sm text-neutral-800 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-400 mr-1" }
      }
    },
  },

  {
    title: 'Dark Eyebrow',
    thumbnail: '',
    content: {
      "id": "pc-dark",
      "type": "productCategories",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
        "label": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-500" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-600 mr-1" }
      }
    },
  },

  {
    title: 'Compact Muted',
    thumbnail: '',
    content: {
      "id": "pc-min",
      "type": "productCategories",
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
