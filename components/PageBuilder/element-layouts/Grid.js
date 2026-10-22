/**
 * Element layouts for the `grid` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `grid` block and its Replace
 * action splices the preset in place of that block, so every root here MUST be
 * `"type": "grid"`. (PageBuilder.jsx regenerates all ids on paste/replace, so the
 * readable ids below are safe.)
 *
 * grid is the thinnest element in this folder: a <div> with the `*` classes that
 * maps its children, and `gridItem` is the same thing one level down. Neither
 * takes a single option -- the `grid` definition has no `options` key at all --
 * so a preset here is nothing but two class strings and a shape. Which makes the
 * shape the whole point: these presets are skeletons, several of them asymmetric
 * bento layouts, meant to be filled by dropping elements into the cells.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. The `grid-item` key on a grid does nothing. Grid.jsx:36 applies only
 *    `cssSelectors['*']` and GridItem.jsx:61 likewise, so every cell is styled
 *    through its own `*`. That is not a limitation here -- it is what makes
 *    bento possible, since each cell needs its own span. The dead key is kept at
 *    "" because the definition declares it.
 *
 * 2. Spans live on the cell, the tracks live on the grid. `grid-cols-*`,
 *    `gap-*` and `auto-rows-*` go on the grid's `*`; `col-span-*` and
 *    `row-span-*` go on each gridItem's `*`. There is no other place to put
 *    them.
 *
 * 3. Every span below is breakpoint-prefixed, and that is not a style choice.
 *    A `col-span-2` inside a one-column grid does not clamp -- CSS Grid creates
 *    an implicit second column for it, so the "mobile" row quietly becomes two
 *    columns wide and overflows. Spans therefore start at the breakpoint where
 *    the column count can hold them (`sm:` for a 2-col grid, `lg:` for 4, 6 or
 *    12) and the base layout stays a plain single column. The same applies to
 *    `row-span-*`: it is only meaningful once the grid is multi-column.
 *
 * 4. `row-span-*` needs row heights to span. An auto-row grid whose rows are
 *    sized by content gives a row-spanning cell nothing to stretch across, so
 *    the bento presets set `auto-rows-[minmax(150px,auto)]` on the grid -- a
 *    floor per row, free to grow once real content lands in a cell. Presets with equal
 *    cells skip it and use a `min-h-*` on the cells instead.
 *
 * 5. Empty cells are visible and droppable, which is what makes a skeleton
 *    usable. GridItem.jsx:99 renders an "Empty GridItem - Drop elements here"
 *    placeholder while a cell has no children, and both Grid and GridItem
 *    forward `handleMoveBlock` to their children (:70, :96), so dragging from
 *    the palette into a specific cell registers -- unlike the loop inside
 *    relatedProducts. Most cells below are left empty on purpose.
 *
 * 6. Cells are already positioned. Both renderers hardcode `relative` after the
 *    `*` classes (:36, :61), so an absolutely positioned child -- an overlay
 *    caption, a corner badge -- anchors to its cell with nothing extra on the
 *    preset. (It also means `static` on a cell cannot be set from here.)
 *
 * 7. The grid's own empty state spans the full row. Grid.jsx:74's placeholder
 *    carries `col-span-full`, so an empty grid shows one centred prompt rather
 *    than a stray cell -- worth knowing because it disappears the moment the
 *    first cell exists, which changes the apparent height of the block.
 *
 * Each preset's cell count matches its tracks exactly, so no row is left ragged:
 * the arithmetic is in a comment above each one.
 */

var layouts = [

  {
    title: 'Responsive Card Grid',
    thumbnail: '',
    content: {
      "id": "gr-cards",
      "type": "grid",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" },
        "grid-item": { "classes": "" }
      },
      "children": [
        {
          "id": "gr-cards-c1",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 min-h-28" } },
          "children": []
        },
        {
          "id": "gr-cards-c2",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 min-h-28" } },
          "children": []
        },
        {
          "id": "gr-cards-c3",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 min-h-28" } },
          "children": []
        },
        {
          "id": "gr-cards-c4",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 min-h-28" } },
          "children": []
        },
        {
          "id": "gr-cards-c5",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 min-h-28" } },
          "children": []
        },
        {
          "id": "gr-cards-c6",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 min-h-28" } },
          "children": []
        },
        {
          "id": "gr-cards-c7",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 min-h-28" } },
          "children": []
        },
        {
          "id": "gr-cards-c8",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 min-h-28" } },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Bento Feature 4-Col',
    thumbnail: '',
    content: {
      "id": "gr-bento4",
      "type": "grid",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(150px,auto)]" },
        "grid-item": { "classes": "" }
      },
      "children": [
        {
          "id": "gr-bento4-hero",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 sm:col-span-2 sm:row-span-2 flex flex-col justify-end" } },
          "children": []
        },
        {
          "id": "gr-bento4-a",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl bg-neutral-50 p-4" } },
          "children": []
        },
        {
          "id": "gr-bento4-b",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl bg-neutral-50 p-4" } },
          "children": []
        },
        {
          "id": "gr-bento4-wide",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 sm:col-span-2" } },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Bento Asymmetric 6-Col',
    thumbnail: '',
    content: {
      "id": "gr-bento6",
      "type": "grid",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[minmax(160px,auto)]" },
        "grid-item": { "classes": "" }
      },
      "children": [
        {
          "id": "gr-bento6-feature",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 sm:col-span-2 lg:col-span-4 lg:row-span-2 flex flex-col justify-end" } },
          "children": []
        },
        {
          "id": "gr-bento6-tall",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl bg-neutral-50 p-4 sm:col-span-2 lg:col-span-2 lg:row-span-2" } },
          "children": []
        },
        {
          "id": "gr-bento6-half1",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 lg:col-span-3" } },
          "children": []
        },
        {
          "id": "gr-bento6-half2",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 lg:col-span-3" } },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Hero + Side Rail 12-Col',
    thumbnail: '',
    content: {
      "id": "gr-rail",
      "type": "grid",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-[minmax(140px,auto)]" },
        "grid-item": { "classes": "" }
      },
      "children": [
        {
          "id": "gr-rail-main",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 lg:col-span-8 lg:row-span-2 flex flex-col justify-end" } },
          "children": []
        },
        {
          "id": "gr-rail-side1",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl bg-neutral-50 p-4 lg:col-span-4" } },
          "children": []
        },
        {
          "id": "gr-rail-side2",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl bg-neutral-50 p-4 lg:col-span-4" } },
          "children": []
        },
        {
          "id": "gr-rail-strip",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-4 lg:col-span-12 flex items-center" } },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Dense Mixed Mosaic (Dark)',
    thumbnail: '',
    content: {
      "id": "gr-dense",
      "type": "grid",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(150px,auto)] grid-flow-row-dense bg-neutral-900 p-5 rounded-2xl" },
        "grid-item": { "classes": "" }
      },
      "children": [
        {
          "id": "gr-dense-a",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-4 sm:col-span-2 sm:row-span-2 flex flex-col justify-end" } },
          "children": []
        },
        {
          "id": "gr-dense-b",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-4" } },
          "children": []
        },
        {
          "id": "gr-dense-c",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-4" } },
          "children": []
        },
        {
          "id": "gr-dense-d",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-4 sm:col-span-2" } },
          "children": []
        },
        {
          "id": "gr-dense-e",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-4 sm:row-span-2" } },
          "children": []
        },
        {
          "id": "gr-dense-f",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-4" } },
          "children": []
        },
        {
          "id": "gr-dense-g",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-800 bg-neutral-800/40 p-4" } },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Editorial Split Banner',
    thumbnail: '',
    content: {
      "id": "gr-split",
      "type": "grid",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 gap-5" },
        "grid-item": { "classes": "" }
      },
      "children": [
        {
          "id": "gr-split-left",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-2xl bg-neutral-100 p-6 min-h-64 flex flex-col justify-end" } },
          "children": [
            {
              "id": "gr-split-left-h",
              "type": "heading",
              "options": { "text": "New in this week", "tag": "h2" },
              "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900 max-w-xs" } }
            }
          ]
        },
        {
          "id": "gr-split-right",
          "type": "gridItem",
          "options": {},
          "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-2xl bg-orange-50 p-6 min-h-64 flex flex-col justify-end" } },
          "children": [
            {
              "id": "gr-split-right-h",
              "type": "heading",
              "options": { "text": "Up to 40% off nursery", "tag": "h2" },
              "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900 max-w-xs" } }
            }
          ]
        }
      ]
    },
  },

];

export default layouts;
