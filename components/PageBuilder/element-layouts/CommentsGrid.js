/**
 * Element layouts for the `commentsGrid` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `commentsGrid` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "commentsGrid"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * This file used to hold six terms-grid presets (category grids rooted at
 * `section`), so Replace turned a page's comments into a category grid.
 *
 * commentsGrid shows the comments (reviews) of the post or product on the page
 * (the site's latest on a page without one). Inside it: a commentsLoop (one
 * card per comment, holding commentAvatar / commentAuthor / commentRate /
 * commentContent), optionally a commentsForm and a commentsGridPagination --
 * at any depth, since they reach the grid through its context.
 *
 * Notes that shaped these presets:
 *
 * 1. `loop-items` (the list) and `loop-item` (each card) are read from the
 *    commentsGrid's selectors, not the commentsLoop's. They are mirrored onto
 *    the loop, as the rest of the codebase does.
 * 2. Each card's blocks are laid out by the `loop-item` classes -- the
 *    two-column cards use a grid with the avatar spanning two rows.
 * 3. `options.queryPrams` takes per_page and order ('ASC' oldest first,
 *    'DESC' newest first); get_comments reads nothing else.
 */

var avatar = (classes, image) => ({
  "id": "ca", "type": "commentAvatar", "options": {},
  "cssSelectors": { "*": { "classes": classes }, "link": { "classes": "block w-full h-full" }, "image": { "classes": image } }
});
var author = (classes) => ({ "id": "cau", "type": "commentAuthor", "options": {}, "cssSelectors": { "*": { "classes": classes } } });
var content = (classes) => ({ "id": "cc", "type": "commentContent", "options": {}, "cssSelectors": { "*": { "classes": classes } } });
var rate = (classes, color = 'text-amber-500') => ({
  "id": "cr", "type": "commentRate", "options": {},
  "cssSelectors": { "*": { "classes": classes }, "star-loop": { "classes": `flex gap-0.5 items-center ${color}` }, "star": { "classes": "" }, "avg-rating": { "classes": "hidden" } }
});
var loop = (items, item, children) => ({
  "id": "cl", "type": "commentsLoop", "options": {},
  "cssSelectors": { "*": { "classes": "" }, "loop-items": { "classes": items }, "loop-item": { "classes": item } },
  "children": children
});
var pagination = () => ({ "id": "cp", "type": "commentsGridPagination", "options": {}, "cssSelectors": { "*": { "classes": "flex gap-2 items-center justify-center mt-8" } } });
var form = (classes) => ({ "id": "cf", "type": "commentsForm", "options": { "showRate": true }, "cssSelectors": { "*": { "classes": classes } } });
var grid = (id, wrapper, items, item, children, query = { "per_page": 10, "order": "DESC" }) => ({
  "id": id, "type": "commentsGrid", "options": { "queryPrams": query },
  "cssSelectors": { "*": { "classes": wrapper }, "loop-items": { "classes": items }, "loop-item": { "classes": item } },
  "children": children
});

var formClasses = "mt-10 flex flex-col gap-4 [&_label]:text-sm [&_label]:font-medium [&_label]:text-gray-700 [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-gray-300 [&_input]:px-3 [&_input]:py-2 [&_input]:text-sm [&_textarea]:w-full [&_textarea]:min-h-[120px] [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-gray-300 [&_textarea]:px-3 [&_textarea]:py-2 [&_textarea]:text-sm [&_button]:w-fit [&_button]:rounded-lg [&_button]:bg-gray-900 [&_button]:px-5 [&_button]:py-2.5 [&_button]:text-sm [&_button]:font-semibold [&_button]:text-white";

var reviewCard = (border = 'border-gray-200', bg = 'bg-white') => `grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 p-4 rounded-2xl border ${border} ${bg}`;
var reviewChildren = (authorColor = 'text-gray-900', textColor = 'text-gray-600') => [
  avatar("col-start-1 row-start-1 row-span-3 w-12 h-12 shrink-0", "w-12 h-12 rounded-full object-cover"),
  author(`col-start-2 text-sm font-semibold ${authorColor}`),
  rate("col-start-2"),
  content(`col-start-2 mt-1 text-sm leading-relaxed ${textColor} break-words`),
];

var layouts = [

  {
    title: 'Review List + Form', thumbnail: '',
    content: grid('cg-list', 'w-full max-w-3xl mx-auto', 'flex flex-col gap-4', reviewCard(), [
      loop('flex flex-col gap-4', reviewCard(), reviewChildren()),
      pagination(),
      form(formClasses),
    ]),
  },

  {
    title: 'Testimonial Cards (3 Columns)', thumbnail: '',
    content: grid('cg-cards', 'w-full max-w-6xl mx-auto', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5', 'flex flex-col gap-3 p-6 rounded-2xl bg-gray-50', [
      loop('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5', 'flex flex-col gap-3 p-6 rounded-2xl bg-gray-50', [
        rate(""),
        content("text-base leading-relaxed text-gray-800 italic"),
        avatar("mt-auto w-10 h-10", "w-10 h-10 rounded-full object-cover"),
        author("text-sm font-semibold text-gray-900"),
      ]),
    ], { "per_page": 6, "order": "DESC" }),
  },

  {
    title: 'Compact Divided List', thumbnail: '',
    content: grid('cg-compact', 'w-full max-w-2xl mx-auto', 'flex flex-col divide-y divide-gray-200', 'grid grid-cols-[auto_1fr] gap-x-3 py-4', [
      loop('flex flex-col divide-y divide-gray-200', 'grid grid-cols-[auto_1fr] gap-x-3 py-4', [
        avatar("row-span-2 w-9 h-9", "w-9 h-9 rounded-full object-cover"),
        author("text-sm font-medium text-gray-900"),
        content("col-start-2 text-sm text-gray-600 break-words"),
      ]),
      pagination(),
    ], { "per_page": 15, "order": "DESC" }),
  },

  {
    title: 'Reviews Beside Form', thumbnail: '',
    content: grid('cg-side', 'w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start', 'flex flex-col gap-4', reviewCard(), [
      loop('flex flex-col gap-4', reviewCard(), reviewChildren()),
      form("flex flex-col gap-4 p-6 rounded-2xl border border-gray-200 bg-white lg:sticky lg:top-6 [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-gray-300 [&_input]:px-3 [&_input]:py-2 [&_textarea]:w-full [&_textarea]:min-h-[120px] [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-gray-300 [&_textarea]:px-3 [&_textarea]:py-2 [&_button]:rounded-lg [&_button]:bg-gray-900 [&_button]:px-5 [&_button]:py-2.5 [&_button]:text-sm [&_button]:font-semibold [&_button]:text-white"),
    ]),
  },

  {
    title: 'Dark Reviews', thumbnail: '',
    content: grid('cg-dark', 'w-full max-w-3xl mx-auto p-6 rounded-3xl bg-gray-900', 'flex flex-col gap-3', reviewCard('border-white/10', 'bg-white/5'), [
      loop('flex flex-col gap-3', reviewCard('border-white/10', 'bg-white/5'), reviewChildren('text-white', 'text-gray-300')),
      pagination(),
    ]),
  },

];

export default layouts;
