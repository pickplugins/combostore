/**
 * Element layouts for the `relatedProducts` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `relatedProducts` block and
 * its Replace action splices the preset in place of that block, so every root
 * here MUST be `"type": "relatedProducts"`. (PageBuilder.jsx regenerates all ids
 * on paste/replace, so the readable ids below are safe.)
 *
 * relatedProducts is a thin wrapper around one `postLoop`: it renders a div with
 * the `*` classes, opens a PostGridProvider carrying its own `options.queryPrams`
 * and its own `cssSelectors`, and maps its children (RelatedProducts.jsx:46,:58).
 * Everything repeated -- the grid, the cards, the product fields -- comes from
 * the loop inside it.
 *
 * Renderer notes that shaped these presets:
 *
 * 1. `loop-items` and `loop-item` belong on THIS block, not on the postLoop
 *    child. PostLoop.jsx:18 throws away its own cssSelectors prop and reads the
 *    parent's from PostGridContext, so the grid container (:211) and each card
 *    (:235) are styled from the relatedProducts keys. The element definition's
 *    default tree has this backwards: it puts the card styling on the postLoop
 *    child, where nothing reads it, and leaves the parent's `loop-item` empty --
 *    which is why that default renders as an unstyled stack. (Its card classes
 *    also set `bg-gray-100 bg-indigo-300` together, so even in the right place
 *    one of the two would lose.) As the rest of the codebase does, these presets
 *    mirror both keys onto the postLoop child too, so the cards survive if that
 *    indirection is ever removed.
 *
 * 2. The grid branch is the one that runs. PostLoop has a slider branch gated on
 *    PostSliderContext (:164) and a grid branch gated on PostGridContext (:206);
 *    relatedProducts provides the grid one, so `loop-items` is a real element
 *    here -- the container every card sits in. Inside a postSlider the same key
 *    styles nothing, which is worth remembering before copying a card between
 *    the two.
 *
 * 3. The query lives in `options.queryPrams` -- that spelling, and undeclared.
 *    The definition declares only `options.classes`, which the renderer never
 *    reads; `queryPrams` is what RelatedProducts.jsx:25 passes through context
 *    for PostLoop to POST to combo-store/v2/get_posts (:57-59). It defaults to
 *    `[]`, so a preset that omits it posts an empty query. One value here cannot
 *    be verified from the repo: the post type slug comes from the backend's
 *    get_post_types, and these presets ship `"product"` (WooCommerce's slug).
 *    If a store uses something else, that is the field to fix in the query panel
 *    after dropping a preset -- everything else in these presets is layout.
 *
 * 4. Product fields work inside this loop because everything reads one context.
 *    PostLoop wraps each item in `<PostProvider value={item}>` (:237), and
 *    productPrice, productRatings, productBadge, productDiscount, postTitle and
 *    postThumbnail all read `usePost()` -- so product leaves behave here exactly
 *    as post leaves do in a postGrid.
 *
 * 5. `group` on `loop-item` is what makes the hover effects work. The card is
 *    the only element between the grid and the fields, so `group-hover:` on a
 *    thumbnail or a title has to hang off it.
 *
 * 6. You cannot drag elements into the loop. RelatedProducts.jsx:60-65 renders
 *    its children through BlockPreview without forwarding `handleMoveBlock`, and
 *    BlockPreview.jsx:273 passes on only what it was given, so the postLoop's
 *    onDrop guard never fires. There is also no empty-state placeholder: a
 *    relatedProducts with no children is an empty div. So the card contents come
 *    from the preset -- which is the argument for having a few shapes here.
 *
 * 7. `options.sliderOptions` is read (:34) and never used.
 *
 * Thumbnails are framed with `object-contain` on a light panel rather than
 * `object-cover`: product shots arrive at mixed ratios and cropping a product
 * is worse than letterboxing it. postThumbnail hardcodes width/height 400 and
 * falls back to /thumb.png, so an explicit aspect ratio keeps the grid from
 * reflowing as images land.
 */

var layouts = [

  {
    title: 'Product Cards 4-Up',
    thumbnail: '',
    content: {
      "id": "rp-cards",
      "type": "relatedProducts",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["product"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "8",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
        "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
      },
      "children": [
        {
          "id": "rp-cards-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
            "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
          },
          "children": [
            {
              "id": "rp-cards-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "w-full overflow-hidden rounded-lg" },
                "link": { "classes": "block" },
                "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
              }
            },
            {
              "id": "rp-cards-title",
              "type": "postTitle",
              "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
            },
            {
              "id": "rp-cards-rating",
              "type": "productRatings",
              "options": { "label": "", "separator": ", " },
              "cssSelectors": {
                "*": { "classes": "flex gap-1.5 items-center" },
                "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-3.5" },
                "rate-count": { "classes": "flex items-center" },
                "icon": { "classes": "" },
                "avg-rating": { "classes": "hidden" },
                "total-reviews": { "classes": "text-xs text-neutral-400" }
              }
            },
            {
              "id": "rp-cards-price",
              "type": "productPrice",
              "options": { "separator": "", "variablePriceViewType": "inline" },
              "cssSelectors": {
                "*": { "classes": "flex gap-2 items-center" },
                "simple-price-wrap": { "classes": "flex gap-2 items-baseline" },
                "simple-price-sale": { "classes": "text-base font-bold text-neutral-900" },
                "simple-price-regular": { "classes": "text-xs line-through text-neutral-400" },
                "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                "variable-price-min": { "classes": "text-sm text-neutral-600" },
                "variable-price-max": { "classes": "text-sm text-neutral-600" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Minimal Three Up',
    thumbnail: '',
    content: {
      "id": "rp-min",
      "type": "relatedProducts",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["product"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "6",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "loop-items": { "classes": "grid gap-8 grid-cols-2 lg:grid-cols-3" },
        "loop-item": { "classes": "group flex flex-col gap-2" }
      },
      "children": [
        {
          "id": "rp-min-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-8 grid-cols-2 lg:grid-cols-3" },
            "loop-item": { "classes": "group flex flex-col gap-2" }
          },
          "children": [
            {
              "id": "rp-min-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "w-full overflow-hidden rounded-lg" },
                "link": { "classes": "block" },
                "image": { "classes": "w-full aspect-[4/5] object-contain bg-neutral-50" }
              }
            },
            {
              "id": "rp-min-title",
              "type": "postTitle",
              "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-sm text-neutral-700 line-clamp-2 transition-colors group-hover:text-neutral-950" } }
            },
            {
              "id": "rp-min-price",
              "type": "productPrice",
              "options": { "separator": "", "variablePriceViewType": "inline" },
              "cssSelectors": {
                "*": { "classes": "flex gap-2 items-center" },
                "simple-price-wrap": { "classes": "flex gap-2 items-baseline" },
                "simple-price-sale": { "classes": "text-sm font-semibold text-neutral-900" },
                "simple-price-regular": { "classes": "text-xs line-through text-neutral-400" },
                "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                "variable-price-min": { "classes": "text-sm text-neutral-600" },
                "variable-price-max": { "classes": "text-sm text-neutral-600" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Badge Corner Cards',
    thumbnail: '',
    content: {
      "id": "rp-badge",
      "type": "relatedProducts",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["product"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "8",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
        "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
      },
      "children": [
        {
          "id": "rp-badge-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
            "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
          },
          "children": [
            {
              "id": "rp-badge-badge",
              "type": "productBadge",
              "options": { "label": "", "separator": ", " },
              "cssSelectors": {
                "*": { "classes": "absolute top-3 left-3 z-10" },
                "label": { "classes": "" },
                "items": { "classes": "flex flex-col items-start gap-1.5" },
                "item": { "classes": "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white bg-neutral-900 rounded shadow-sm" },
                "category-name": { "classes": "" },
                "separator": { "classes": "hidden" }
              }
            },
            {
              "id": "rp-badge-discount",
              "type": "productDiscount",
              "options": { "label": "OFF", "separator": ", " },
              "cssSelectors": {
                "*": { "classes": "absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-md bg-red-600 shadow-sm" },
                "discount": { "classes": "text-[11px] font-bold text-white leading-none" },
                "label": { "classes": "text-[9px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
              }
            },
            {
              "id": "rp-badge-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "w-full overflow-hidden rounded-lg" },
                "link": { "classes": "block" },
                "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
              }
            },
            {
              "id": "rp-badge-title",
              "type": "postTitle",
              "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
            },
            {
              "id": "rp-badge-price",
              "type": "productPrice",
              "options": { "separator": "", "variablePriceViewType": "inline" },
              "cssSelectors": {
                "*": { "classes": "flex gap-2 items-center" },
                "simple-price-wrap": { "classes": "flex gap-2 items-baseline" },
                "simple-price-sale": { "classes": "text-base font-bold text-red-600" },
                "simple-price-regular": { "classes": "text-xs line-through text-neutral-400" },
                "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                "variable-price-min": { "classes": "text-sm text-neutral-600" },
                "variable-price-max": { "classes": "text-sm text-neutral-600" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Compact Six Up Strip',
    thumbnail: '',
    content: {
      "id": "rp-strip",
      "type": "relatedProducts",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["product"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "12",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "loop-items": { "classes": "grid gap-3 grid-cols-3 md:grid-cols-4 xl:grid-cols-6" },
        "loop-item": { "classes": "group flex flex-col gap-1.5" }
      },
      "children": [
        {
          "id": "rp-strip-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-3 grid-cols-3 md:grid-cols-4 xl:grid-cols-6" },
            "loop-item": { "classes": "group flex flex-col gap-1.5" }
          },
          "children": [
            {
              "id": "rp-strip-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "w-full overflow-hidden rounded-md border border-neutral-100" },
                "link": { "classes": "block" },
                "image": { "classes": "w-full aspect-square object-contain bg-white" }
              }
            },
            {
              "id": "rp-strip-title",
              "type": "postTitle",
              "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-600 line-clamp-2 leading-snug" } }
            },
            {
              "id": "rp-strip-price",
              "type": "productPrice",
              "options": { "separator": "", "variablePriceViewType": "inline" },
              "cssSelectors": {
                "*": { "classes": "flex gap-1.5 items-center" },
                "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline" },
                "simple-price-sale": { "classes": "text-xs font-bold text-neutral-900" },
                "simple-price-regular": { "classes": "text-[10px] line-through text-neutral-400" },
                "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                "variable-price-min": { "classes": "text-xs text-neutral-600" },
                "variable-price-max": { "classes": "text-xs text-neutral-600" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Wide Rows Two Up',
    thumbnail: '',
    content: {
      "id": "rp-rows",
      "type": "relatedProducts",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["product"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "4",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
        "loop-item": { "classes": "group flex flex-row items-center gap-4 p-3 rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300" }
      },
      "children": [
        {
          "id": "rp-rows-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
            "loop-item": { "classes": "group flex flex-row items-center gap-4 p-3 rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300" }
          },
          "children": [
            {
              "id": "rp-rows-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "w-24 shrink-0 overflow-hidden rounded-lg" },
                "link": { "classes": "block" },
                "image": { "classes": "w-24 h-24 object-contain bg-neutral-50" }
              }
            },
            {
              "id": "rp-rows-title",
              "type": "postTitle",
              "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "flex-1 min-w-0 text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
            },
            {
              "id": "rp-rows-price",
              "type": "productPrice",
              "options": { "separator": "", "variablePriceViewType": "inline" },
              "cssSelectors": {
                "*": { "classes": "shrink-0 flex gap-2 items-center" },
                "simple-price-wrap": { "classes": "flex flex-col items-end" },
                "simple-price-sale": { "classes": "text-sm font-bold text-neutral-900" },
                "simple-price-regular": { "classes": "text-[11px] line-through text-neutral-400" },
                "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                "variable-price-min": { "classes": "text-xs text-neutral-600" },
                "variable-price-max": { "classes": "text-xs text-neutral-600" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Dark Product Cards',
    thumbnail: '',
    content: {
      "id": "rp-dark",
      "type": "relatedProducts",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["product"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "8",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "w-full" },
        "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
        "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-800 bg-neutral-800/40 transition-colors hover:border-neutral-700" }
      },
      "children": [
        {
          "id": "rp-dark-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
            "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-800 bg-neutral-800/40 transition-colors hover:border-neutral-700" }
          },
          "children": [
            {
              "id": "rp-dark-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "w-full overflow-hidden rounded-lg" },
                "link": { "classes": "block" },
                "image": { "classes": "w-full aspect-square object-contain bg-neutral-900 transition-transform duration-500 group-hover:scale-105" }
              }
            },
            {
              "id": "rp-dark-title",
              "type": "postTitle",
              "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-100 line-clamp-2 transition-colors group-hover:text-amber-400" } }
            },
            {
              "id": "rp-dark-rating",
              "type": "productRatings",
              "options": { "label": "", "separator": ", " },
              "cssSelectors": {
                "*": { "classes": "flex gap-1.5 items-center" },
                "star-rate": { "classes": "flex gap-0.5 items-center text-amber-400 [&_svg]:size-3.5" },
                "rate-count": { "classes": "flex items-center" },
                "icon": { "classes": "" },
                "avg-rating": { "classes": "hidden" },
                "total-reviews": { "classes": "text-xs text-neutral-500" }
              }
            },
            {
              "id": "rp-dark-price",
              "type": "productPrice",
              "options": { "separator": "", "variablePriceViewType": "inline" },
              "cssSelectors": {
                "*": { "classes": "flex gap-2 items-center" },
                "simple-price-wrap": { "classes": "flex gap-2 items-baseline" },
                "simple-price-sale": { "classes": "text-base font-bold text-white" },
                "simple-price-regular": { "classes": "text-xs line-through text-neutral-500" },
                "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                "variable-price-min": { "classes": "text-sm text-neutral-300" },
                "variable-price-max": { "classes": "text-sm text-neutral-300" }
              }
            }
          ]
        }
      ]
    },
  },

];

export default layouts;
