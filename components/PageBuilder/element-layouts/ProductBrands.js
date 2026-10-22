/**
 * Element layouts for the `productBrands` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productBrands` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "productBrands"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * productBrands is a leaf: an optional label, then one link per brand. The
 * renderer is the same shape as ProductCategories.jsx and ProductTags.jsx,
 * differing in the data it reads (`product.brands`), the mock values and the
 * /brands/ href -- so see ProductCategories.js in this folder for the shared
 * constraints. The presets below are built for where a brand actually appears:
 * as a meta line under a product title, as a linked name, or as a chip.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. The separator span lives INSIDE each brand's <Link>
 *    (ProductBrands.jsx:81-85), not between the links. So anything that gives
 *    `item` a background, padding and a radius puts the comma inside the chip.
 *    The chip presets set `separator` to `hidden` and space the items with a gap
 *    on `items`; the inline presets keep the comma and leave `item` unboxed.
 *
 * 2. The separator text is hardcoded to ", " (:84) and the declared `separator`
 *    option is never read, so that key can style or hide the comma but cannot
 *    change the glyph.
 *
 * 3. Because the comma is inside the link, a `hover:underline` on `item`
 *    underlines the comma too. The linked-name preset instead marks `item` as a
 *    `group` and puts `group-hover:underline` on `category-name`, so hovering
 *    anywhere on the link underlines the brand name and leaves the punctuation
 *    alone. (`category-name` is the inner <span> at :82 -- the key is named
 *    after the category element this renderer was copied from.)
 *
 * 4. Clicks are swallowed, but not where the sibling swallows them. Unlike
 *    ProductCategories.jsx:81-83, the <Link> here has no onClick at all; the
 *    root div's handler calls `e.preventDefault()` on the bubbled event (:48),
 *    which cancels the navigation just the same -- and also selects the brands
 *    block. So the href (`${NEXT_PUBLIC_APP_URL}brands/<slug>`) never resolves
 *    from a click, on the front end as much as in the canvas.
 *
 * 5. Brands fall back to two mock entries when there is no product context
 *    (:36), so the canvas shows "Brand Name" and "Brand Name 2" with the comma
 *    between them -- which means every preset previews its multi-brand case,
 *    including the separator decision above.
 *
 * 6. `label` is guarded (:67), so an empty label leaves no stray box -- and the
 *    label div is a sibling of `items`, not a parent, so putting them on one
 *    line takes a `flex` on `*`. That is what the meta and spec presets do; the
 *    chip presets leave the label empty and let `items` own the row.
 *
 * 7. The rest of the options are dead. Lines 28-31 read `tag` (assigned to an
 *    unused `Tag` at :38), `readmore` and `maxWord` and use none of them, and
 *    ProductBrandsOptions.jsx adds `classes`, `icon` and `iconSize` controls the
 *    renderer never reads -- so Label is the only control in that panel that
 *    does anything, and a preset is the only way to set the rest of the look.
 */

var layouts = [

  {
    title: 'Brand Meta Line',
    thumbnail: '',
    content: {
      "id": "pbr-meta",
      "type": "productBrands",
      "options": {
        "label": "Brand:",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-1.5" },
        "label": { "classes": "text-xs text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "text-xs font-medium text-neutral-700 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-300" }
      }
    },
  },

  {
    title: 'Linked Brand Name',
    thumbnail: '',
    content: {
      "id": "pbr-linked",
      "type": "productBrands",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "label": { "classes": "" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "group text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors" },
        "category-name": { "classes": "group-hover:underline underline-offset-2" },
        "separator": { "classes": "text-neutral-300 no-underline" }
      }
    },
  },

  {
    title: 'Outlined Chips',
    thumbnail: '',
    content: {
      "id": "pbr-outline",
      "type": "productBrands",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "label": { "classes": "" },
        "items": { "classes": "flex flex-wrap gap-2" },
        "item": { "classes": "px-2.5 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 hover:border-orange-400 hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "whitespace-nowrap" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Solid Chips',
    thumbnail: '',
    content: {
      "id": "pbr-solid",
      "type": "productBrands",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "label": { "classes": "" },
        "items": { "classes": "flex flex-wrap gap-1.5" },
        "item": { "classes": "px-2 py-0.5 rounded bg-neutral-900 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-neutral-700 transition-colors" },
        "category-name": { "classes": "whitespace-nowrap" },
        "separator": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Spec Row',
    thumbnail: '',
    content: {
      "id": "pbr-spec",
      "type": "productBrands",
      "options": {
        "label": "Brand",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-start gap-4 py-2 border-b border-neutral-100" },
        "label": { "classes": "w-28 shrink-0 text-xs font-semibold uppercase tracking-wide text-neutral-400" },
        "items": { "classes": "flex flex-wrap items-baseline gap-x-1 text-sm text-neutral-700" },
        "item": { "classes": "hover:text-orange-600 transition-colors" },
        "category-name": { "classes": "" },
        "separator": { "classes": "text-neutral-300" }
      }
    },
  },

  {
    title: 'Dark Inline Brand',
    thumbnail: '',
    content: {
      "id": "pbr-dark",
      "type": "productBrands",
      "options": {
        "label": "Brand:",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-baseline gap-1.5" },
        "label": { "classes": "text-xs text-neutral-500" },
        "items": { "classes": "flex flex-wrap items-baseline" },
        "item": { "classes": "group text-xs font-medium text-neutral-200 hover:text-amber-400 transition-colors" },
        "category-name": { "classes": "group-hover:underline underline-offset-2" },
        "separator": { "classes": "text-neutral-600 no-underline" }
      }
    },
  },

];

export default layouts;
