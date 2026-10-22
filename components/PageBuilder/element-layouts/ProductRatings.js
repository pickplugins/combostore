/**
 * Element layouts for the `productRatings` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productRatings` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "productRatings"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * productRatings is a leaf, and everything it shows is hardcoded, so a preset
 * can only change how the row looks -- never what it says.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. None of the numbers come from the product. ProductRatings.jsx:118 prints
 *    the literal "3.5/5" and :119 the literal "(120 reviews)", and the filled
 *    star count is `props.rate ?? 4` (:31) from a prop BlockPreview never
 *    passes -- so it is always four filled stars and one empty, next to a 3.5
 *    average, which do not even agree with each other. `usePost()` is called at
 *    :34 and its only use is a `postTitle` variable that is never rendered.
 *    Expect the same row on every product until the renderer is wired to real
 *    review data.
 *
 * 2. Because the content is fixed, the only levers a preset has are styling,
 *    hiding and reordering. Two of these use `hidden` on `avg-rating` or
 *    `total-reviews` to drop a part that is wrong or unwanted, and Score First
 *    uses `order-first` on `avg-rating` to put the number before the stars --
 *    DOM order is stars, average, review count, and the root is a flex row, so
 *    `order-*` is the way to rearrange it.
 *
 * 3. The star icons take no className and no size prop (:102, :105), so they
 *    render at Tabler's default 24px and text utilities cannot shrink them --
 *    `text-sm` on the wrapper does nothing to an SVG sized by width/height
 *    attributes. Every preset therefore sets the size with an arbitrary variant
 *    on `star-rate`, e.g. `[&_svg]:size-4`, since CSS beats the attributes. The
 *    star colour does inherit, so `text-amber-500` on that wrapper works
 *    normally.
 *
 * 4. The selector keys are swapped relative to the definition: `rate-count` is
 *    read (:95, the wrapper around one star) but not declared, while `icon` is
 *    declared but never read. Both are present below -- `rate-count` because it
 *    works, `icon` to match the definition. Adding `rate-count` at
 *    ElementsDefinition.js:2857 would make it editable from the panel.
 *
 * 5. Both declared options are dead: the renderer reads neither `label` nor
 *    `separator`, and there is no label element in the output at all despite
 *    `label` being declared. They are kept below to match the definition.
 */

var layouts = [

  {
    title: 'Stars With Count',
    thumbnail: '',
    content: {
      "id": "pr-full",
      "type": "productRatings",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2 items-center" },
        "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
        "rate-count": { "classes": "flex items-center" },
        "icon": { "classes": "" },
        "avg-rating": { "classes": "text-sm font-semibold text-neutral-900" },
        "total-reviews": { "classes": "text-sm text-neutral-500" }
      }
    },
  },

  {
    title: 'Compact Card Rating',
    thumbnail: '',
    content: {
      "id": "pr-compact",
      "type": "productRatings",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-1.5 items-center" },
        "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-3.5" },
        "rate-count": { "classes": "flex items-center" },
        "icon": { "classes": "" },
        "avg-rating": { "classes": "hidden" },
        "total-reviews": { "classes": "text-xs text-neutral-400" }
      }
    },
  },

  {
    title: 'Stars Only',
    thumbnail: '',
    content: {
      "id": "pr-stars",
      "type": "productRatings",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex items-center" },
        "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
        "rate-count": { "classes": "flex items-center" },
        "icon": { "classes": "" },
        "avg-rating": { "classes": "hidden" },
        "total-reviews": { "classes": "hidden" }
      }
    },
  },

  {
    title: 'Score First',
    thumbnail: '',
    content: {
      "id": "pr-score",
      "type": "productRatings",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2.5 items-center" },
        "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-3.5" },
        "rate-count": { "classes": "flex items-center" },
        "icon": { "classes": "" },
        "avg-rating": { "classes": "order-first px-2 py-0.5 text-xs font-bold text-white bg-emerald-600 rounded" },
        "total-reviews": { "classes": "text-xs text-neutral-500 underline decoration-neutral-300 underline-offset-2" }
      }
    },
  },

  {
    title: 'Dark Rating Row',
    thumbnail: '',
    content: {
      "id": "pr-dark",
      "type": "productRatings",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-2 items-center" },
        "star-rate": { "classes": "flex gap-0.5 items-center text-amber-400 [&_svg]:size-4" },
        "rate-count": { "classes": "flex items-center" },
        "icon": { "classes": "" },
        "avg-rating": { "classes": "text-sm font-semibold text-white" },
        "total-reviews": { "classes": "text-xs text-neutral-500" }
      }
    },
  },

  {
    title: 'Minimal Grey',
    thumbnail: '',
    content: {
      "id": "pr-min",
      "type": "productRatings",
      "options": {
        "label": "",
        "separator": ", "
      },
      "cssSelectors": {
        "*": { "classes": "flex gap-1.5 items-center" },
        "star-rate": { "classes": "flex gap-0.5 items-center text-neutral-400 [&_svg]:size-3" },
        "rate-count": { "classes": "flex items-center" },
        "icon": { "classes": "" },
        "avg-rating": { "classes": "text-xs text-neutral-500" },
        "total-reviews": { "classes": "text-xs text-neutral-400" }
      }
    },
  },

];

export default layouts;
