/**
 * Element layouts for the `accordionMenu` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `accordionMenu` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "accordionMenu"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * accordionMenu is a list of term links -- typically categories in a sidebar
 * -- where a term with children opens into a nested list. AccordionMenuView
 * (the shop) and the builder's AccordionMenu.jsx render the same
 * AccordionMenuMarkup. Every part has a cssSelectors key, declared with its
 * default in ElementsDefinition.js:
 *
 *   item          one term (row plus its nested list)
 *   item-row      the clickable row; item-row-open is added while it is open
 *   item-link     the term's link, holding item-icon, the name and item-count
 *   item-toggle   the expand / collapse button, only on terms with children
 *   children      the nested list
 *
 * Presets keep the data options out of it (source, root, hierarchical,
 * queryPrams, items): Replace swaps in the whole block, so a preset sets the
 * look and keeps the element's sample items, and the source is chosen in the
 * panel afterwards. Built with withElementCssDefaults(), so each carries the
 * full key set.
 */

import { withElementCssDefaults } from '../ElementsDefinition';

var sampleItems = [
  { "name": "Fruits", "slug": "fruits", "count": 12 },
  { "name": "Vegetables", "slug": "vegetables", "count": 8 },
  { "name": "Groceries", "slug": "groceries", "count": 24, "children": [{ "name": "Rice", "slug": "rice", "count": 6 }, { "name": "Oil", "slug": "oil", "count": 4 }] }
];

var menu = (id, selectors) => ({
  "id": id,
  "type": "accordionMenu",
  "options": { "source": "manual", "root": "categories", "hierarchical": true, "icon": "", "iconSize": 18, "items": sampleItems },
  "cssSelectors": withElementCssDefaults('accordionMenu', selectors)
});

var layouts = [

  {
    title: 'Clean Sidebar',
    thumbnail: '',
    content: menu('am-clean', {
      "*": { "classes": "flex flex-col" },
      "item-row": { "classes": "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100" },
      "item-row-open": { "classes": "bg-gray-50 text-gray-900" },
      "item-count": { "classes": "text-gray-400" },
      "item-toggle": { "classes": "flex shrink-0 items-center rounded-md p-1 text-gray-400 hover:text-gray-700" },
      "children": { "classes": "ml-3 border-l border-gray-200 pl-2" }
    }),
  },

  {
    title: 'Divided List',
    thumbnail: '',
    content: menu('am-divided', {
      "*": { "classes": "flex flex-col divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white" },
      "item-row": { "classes": "flex items-center justify-between gap-2 px-4 py-3 text-sm text-gray-800" },
      "item-count": { "classes": "text-xs text-gray-400" },
      "children": { "classes": "bg-gray-50 pl-4" }
    }),
  },

  {
    title: 'Brand Accent',
    thumbnail: '',
    content: menu('am-brand', {
      "*": { "classes": "flex flex-col gap-1" },
      "item-row": { "classes": "flex items-center justify-between gap-2 rounded-lg border-l-4 border-transparent px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#1b0e9f] hover:bg-[#1b0e9f]/5" },
      "item-row-open": { "classes": "!border-[#1b0e9f] bg-[#1b0e9f]/5 text-[#1b0e9f]" },
      "item-count": { "classes": "text-gray-400" },
      "children": { "classes": "ml-4 flex flex-col gap-1" }
    }),
  },

  {
    title: 'Dark Sidebar',
    thumbnail: '',
    content: menu('am-dark', {
      "*": { "classes": "flex flex-col gap-1 rounded-xl bg-gray-900 p-2" },
      "item-row": { "classes": "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-white/10" },
      "item-row-open": { "classes": "bg-white/10 text-white" },
      "item-count": { "classes": "text-gray-500" },
      "item-toggle": { "classes": "flex shrink-0 items-center text-gray-400" },
      "children": { "classes": "ml-3 border-l border-white/10 pl-2" }
    }),
  },

];

export default layouts;
