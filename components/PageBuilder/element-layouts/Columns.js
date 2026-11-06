/**
 * Element layouts for the `columns` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `columns` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "columns"`. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * columns is a row of columnItems. The row's `*` lays them out; its `column`
 * classes are handed down to every columnItem and added to that column's own
 * `*`, so shared column styling goes in `column` and a single column's width
 * goes on its own `*`. Both keys are declared with their defaults in
 * ElementsDefinition.js.
 *
 * Notes that shaped these presets:
 *
 * 1. Every row stacks on small screens (`flex-col`) and becomes a row from
 *    `md:`. Widths on a column are `md:`-prefixed for the same reason.
 *
 * 2. `min-w-0` on `column` lets a column shrink below its content's width,
 *    so long text or a wide image cannot push the row past the page.
 *
 * 3. The columns are left empty: a preset is a skeleton to drop elements
 *    into. The builder shows a drop prompt in each empty column.
 *
 * 4. Built with withElementCssDefaults(), so each block carries its element's
 *    full key set (the builder's style editor only lists keys a block has).
 */

import { withElementCssDefaults } from '../ElementsDefinition';

/* A columnItem with its own classes (or none) and no content yet. */
var column = (id, classes = '') => ({
  "id": id,
  "type": "columnItem",
  "options": {},
  "cssSelectors": withElementCssDefaults('columnItem', { "*": { "classes": classes } }),
  "children": []
});

var layouts = [

  {
    title: 'Two Equal Columns',
    thumbnail: '',
    content: {
      "id": "col-two",
      "type": "columns",
      "options": {},
      "cssSelectors": withElementCssDefaults('columns', {
        "*": { "classes": "flex flex-col gap-6 p-4 md:flex-row" },
        "column": { "classes": "min-w-0 flex-1" }
      }),
      "children": [column('col-two-a'), column('col-two-b')]
    },
  },

  {
    title: 'Three Equal Columns',
    thumbnail: '',
    content: {
      "id": "col-three",
      "type": "columns",
      "options": {},
      "cssSelectors": withElementCssDefaults('columns', {
        "*": { "classes": "flex flex-col gap-6 p-4 md:flex-row" },
        "column": { "classes": "min-w-0 flex-1" }
      }),
      "children": [column('col-three-a'), column('col-three-b'), column('col-three-c')]
    },
  },

  {
    title: 'Sidebar + Main',
    thumbnail: '',
    content: {
      "id": "col-sidebar",
      "type": "columns",
      "options": {},
      "cssSelectors": withElementCssDefaults('columns', {
        "*": { "classes": "flex flex-col gap-8 p-4 md:flex-row" },
        "column": { "classes": "min-w-0" }
      }),
      "children": [column('col-sidebar-side', 'md:w-1/3 md:shrink-0'), column('col-sidebar-main', 'md:flex-1')]
    },
  },

  {
    title: 'Main + Sidebar',
    thumbnail: '',
    content: {
      "id": "col-main",
      "type": "columns",
      "options": {},
      "cssSelectors": withElementCssDefaults('columns', {
        "*": { "classes": "flex flex-col gap-8 p-4 md:flex-row" },
        "column": { "classes": "min-w-0" }
      }),
      "children": [column('col-main-main', 'md:flex-1'), column('col-main-side', 'md:w-1/3 md:shrink-0')]
    },
  },

  {
    title: 'Card Columns',
    thumbnail: '',
    content: {
      "id": "col-cards",
      "type": "columns",
      "options": {},
      "cssSelectors": withElementCssDefaults('columns', {
        "*": { "classes": "flex flex-col gap-4 p-4 md:flex-row md:items-stretch" },
        "column": { "classes": "min-w-0 flex-1 rounded-xl border border-gray-200 bg-white p-5 shadow-xs" }
      }),
      "children": [column('col-cards-a'), column('col-cards-b'), column('col-cards-c')]
    },
  },

  {
    title: 'Centered Split',
    thumbnail: '',
    content: {
      "id": "col-split",
      "type": "columns",
      "options": {},
      "cssSelectors": withElementCssDefaults('columns', {
        "*": { "classes": "flex flex-col items-center gap-10 px-4 py-12 md:flex-row" },
        "column": { "classes": "min-w-0 flex-1" }
      }),
      "children": [column('col-split-text'), column('col-split-media')]
    },
  },

];

export default layouts;
