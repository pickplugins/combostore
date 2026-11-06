/**
 * Element layouts for the `productRatings` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `productRatings` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "productRatings"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * productRatings is a leaf: five stars, the average and the review count of
 * the product. ProductRatingsView (the shop) and the builder's
 * ProductRatings.jsx render the same ProductRatingsMarkup; outside a product
 * loop, or for a product nobody has reviewed, the builder shows a sample 4.3
 * from 120 reviews.
 *
 * Notes that shaped these presets:
 *
 * 1. The numbers come from the product: `avg_rating` (shown to one decimal,
 *    with that many stars filled after rounding) and `total_rate`. The review
 *    count only shows when there are reviews; `options.hideIfEmpty` hides the
 *    whole block for an unreviewed product.
 *
 * 2. DOM order is stars, average, review count, and the root is a flex row,
 *    so `order-*` rearranges it -- Score First uses `order-first` on
 *    `avg-rating`. Two presets use `hidden` on `avg-rating` or
 *    `total-reviews` to drop a part.
 *
 * 3. Each star is a `rate-count` wrapper holding the svg, which gets the
 *    `icon` classes. These presets size the stars with an arbitrary variant on
 *    `star-rate` (`[&_svg]:size-4`), which works as well as a size on `icon`;
 *    the colour inherits, so `text-amber-500` on `star-rate` colours them.
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
