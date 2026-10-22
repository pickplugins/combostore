/**
 * Element layouts for the `termsGrid` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `termsGrid` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "termsGrid"`. The previous version of this file was rooted at
 * `section`, which quietly turned a termsGrid into a plain section on Replace.
 * (PageBuilder.jsx regenerates all ids on paste/replace, so the readable ids
 * below are safe.)
 *
 * Renderer notes that shaped these presets:
 *
 * 1. TermsGrid.jsx:68 does apply `cssSelectors['*']` to its root, so unlike
 *    termsSlider the wrapper here can take padding, a background and a
 *    max-width. The columns themselves come from `loop-items`.
 *
 * 2. TermsLoop.jsx:17 replaces the loop's own cssSelectors with the parent
 *    grid's, so `loop-items` (the grid container, TermsLoop.jsx:245) and
 *    `loop-item` (one card, :275) must be declared on the termsGrid. They are
 *    mirrored onto the termsLoop below to match repo convention, but the mirror
 *    is never read.
 *
 * 3. The query lives in `options.queryPrams` and TermsGridOptions.jsx:40 writes
 *    the same key, so the options panel really can edit it. Keys the panel knows
 *    (TermsQueryPrams.jsx:189): taxonomy, order, orderby, slug, hide_empty,
 *    parent, top_lavel (sic), search, number, hierarchical. `slug` pins an
 *    explicit ordered list of terms, which is what the old version of this file
 *    did with a dozen hardcoded baby-product slugs; these presets stay
 *    store-agnostic and filter with hide_empty instead. The panel's orderby
 *    <select> only offers date|rand, so re-picking it would overwrite the
 *    name/count values used here.
 *
 * 4. `number` vs `per_page`: the page-builder panel writes `number`, while the
 *    other get_terms callers (QuickSearch.jsx:63, TermsPicker.jsx:23,
 *    TaxTermsQuery.jsx:67) send `per_page`. Which one combo-store/v2/get_terms
 *    honours is not visible from this repo, so both are set to the same value.
 *    Editing the count in the panel only updates `number`.
 *
 * 5. Pagination is decorative right now. TermsGridPagination.jsx:35 copies
 *    `queryPrams` out of the grid context into its own state and its three
 *    handlers only ever call its local `setqueryPrams` (:102, :112, :122),
 *    so nothing reaches TermsLoop, which is reading the grid's unchanged
 *    options. The page number input moves; the terms do not.
 *    PostGridPagination.jsx has the identical dead end. It is included in the
 *    two presets where a paged archive is the point, with `paged: 1` in the
 *    query so the input does not start empty and turn into NaN on the first
 *    click, and left out of the other four.
 *
 * 6. termsGridPagination quirks: its `previous-icon`/`next-icon` selector keys
 *    are never read -- the arrows are hardcoded IconArrowNarrowLeftDashed and
 *    IconArrowNarrowRightDashed with no wrapper div -- and its declared
 *    `options.sliderOptions` block (prevText/prevIcon/nextText/nextIcon) is a
 *    copy-paste artifact the renderer ignores entirely. `options.tag` is read
 *    into a variable but the root is a literal <div>, so that is inert too.
 *
 * 7. Child element quirks: termTitle's `text` option is inert (the renderer
 *    prints category.name) and the `link` key some inline definitions give it
 *    is never read by TermTitle.jsx; termThumbnail with `linkTo: "termUrl"`
 *    renders href="#" and loses the /thumb.png fallback for terms with no
 *    image, so it is omitted here; termCount ignores its declared
 *    `label`/`suffix` and reads an undeclared `tag`, so it renders a bare
 *    number -- styled as a badge rather than captioned.
 */

var layouts = [

  {
    title: 'Circle Category Grid',
    thumbnail: '',
    content: {
      "id": "tg-circle",
      "type": "termsGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "12",
          "per_page": "12",
          "hide_empty": true,
          "order": "ASC",
          "orderby": "name"
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-8" },
        "loop-items": { "classes": "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6" },
        "loop-item": { "classes": "group flex flex-col items-center gap-3 text-center" }
      },
      "children": [
        {
          "id": "tg-circle-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "group flex flex-col items-center gap-3 text-center" }
          },
          "children": [
            {
              "id": "tg-circle-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "w-24 h-24 mx-auto rounded-full overflow-hidden bg-neutral-50 ring-2 ring-neutral-200 group-hover:ring-orange-400 transition-all duration-200" },
                "link": { "classes": "" },
                "image": { "classes": "object-cover w-full h-full" }
              }
            },
            {
              "id": "tg-circle-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "text-sm font-medium text-neutral-800 group-hover:text-orange-600 transition-colors line-clamp-2" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Category Cards with Count',
    thumbnail: '',
    content: {
      "id": "tg-card",
      "type": "termsGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "16",
          "per_page": "16",
          "hide_empty": true,
          "order": "DESC",
          "orderby": "count",
          "paged": 1
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-8" },
        "loop-items": { "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5" },
        "loop-item": { "classes": "h-full bg-white border border-neutral-200 rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" }
      },
      "children": [
        {
          "id": "tg-card-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "h-full bg-white border border-neutral-200 rounded-xl p-4 flex flex-col gap-3" }
          },
          "children": [
            {
              "id": "tg-card-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "w-full aspect-square rounded-lg overflow-hidden bg-neutral-50" },
                "link": { "classes": "" },
                "image": { "classes": "object-cover w-full h-full" }
              }
            },
            {
              "id": "tg-card-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "text-sm font-semibold text-neutral-900 text-center line-clamp-2" }
              }
            },
            {
              "id": "tg-card-count",
              "type": "termCount",
              "options": { "label": "", "suffix": " items", "tag": "span" },
              "cssSelectors": {
                "*": { "classes": "mx-auto text-xs font-medium text-neutral-500 bg-neutral-100 rounded-full px-2.5 py-1" }
              }
            }
          ]
        },
        {
          "id": "tg-card-pager",
          "type": "termsGridPagination",
          "options": { "tag": "div" },
          "cssSelectors": {
            "*": { "classes": "flex gap-3 items-center justify-center mt-10" },
            "previous": { "classes": "bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full text-white cursor-pointer" },
            "next": { "classes": "bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full text-white cursor-pointer" },
            "previous-icon": { "classes": "" },
            "next-icon": { "classes": "" },
            "current": { "classes": "w-20 text-center border border-neutral-300 rounded-full py-2" }
          }
        }
      ]
    },
  },

  {
    title: 'Overlay Category Tiles',
    thumbnail: '',
    content: {
      "id": "tg-tile",
      "type": "termsGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "6",
          "per_page": "6",
          "hide_empty": true,
          "top_lavel": true,
          "order": "ASC",
          "orderby": "name"
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-8" },
        "loop-items": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" },
        "loop-item": { "classes": "group relative h-64 rounded-2xl overflow-hidden bg-neutral-200" }
      },
      "children": [
        {
          "id": "tg-tile-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "group relative h-64 rounded-2xl overflow-hidden bg-neutral-200" }
          },
          "children": [
            {
              "id": "tg-tile-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "block w-full h-64" },
                "link": { "classes": "" },
                "image": { "classes": "object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" }
              }
            },
            {
              "id": "tg-tile-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "absolute inset-x-0 bottom-0 z-10 px-5 pt-10 pb-4 text-lg font-semibold text-white bg-gradient-to-t from-black/75 to-transparent" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Compact Chip Grid',
    thumbnail: '',
    content: {
      "id": "tg-chip",
      "type": "termsGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "24",
          "per_page": "24",
          "hide_empty": true,
          "order": "ASC",
          "orderby": "name"
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-6" },
        "loop-items": { "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" },
        "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-orange-50 hover:border-orange-200 transition-colors" }
      },
      "children": [
        {
          "id": "tg-chip-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200" }
          },
          "children": [
            {
              "id": "tg-chip-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "w-11 h-11 shrink-0 rounded-md overflow-hidden bg-white" },
                "link": { "classes": "" },
                "image": { "classes": "object-cover w-full h-full" }
              }
            },
            {
              "id": "tg-chip-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "span", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "block min-w-0 text-sm font-medium text-neutral-700 truncate" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Dark Brand Grid',
    thumbnail: '',
    content: {
      "id": "tg-brand",
      "type": "termsGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "taxonomy": "product_brand",
          "number": "18",
          "per_page": "18",
          "hide_empty": true,
          "order": "ASC",
          "orderby": "name",
          "paged": 1
        }
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-950 rounded-2xl p-6" },
        "loop-items": { "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" },
        "loop-item": { "classes": "h-24 flex items-center justify-center px-4 py-3 bg-neutral-900 border border-white/5 rounded-lg hover:border-white/20 transition-colors" }
      },
      "children": [
        {
          "id": "tg-brand-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "h-24 flex items-center justify-center px-4 py-3 bg-neutral-900 rounded-lg" }
          },
          "children": [
            {
              "id": "tg-brand-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "w-full h-12 flex items-center justify-center" },
                "link": { "classes": "" },
                "image": { "classes": "max-h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200" }
              }
            },
            {
              "id": "tg-brand-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "span", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "sr-only" }
              }
            }
          ]
        },
        {
          "id": "tg-brand-pager",
          "type": "termsGridPagination",
          "options": { "tag": "div" },
          "cssSelectors": {
            "*": { "classes": "flex gap-3 items-center justify-center mt-8" },
            "previous": { "classes": "bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white cursor-pointer" },
            "next": { "classes": "bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white cursor-pointer" },
            "previous-icon": { "classes": "" },
            "next-icon": { "classes": "" },
            "current": { "classes": "w-20 text-center bg-transparent border border-white/20 rounded-full py-2 text-white" }
          }
        }
      ]
    },
  },

  {
    title: 'Text Only Two Column',
    thumbnail: '',
    content: {
      "id": "tg-text",
      "type": "termsGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "14",
          "per_page": "14",
          "hide_empty": true,
          "order": "DESC",
          "orderby": "count"
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-6" },
        "loop-items": { "classes": "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2" },
        "loop-item": { "classes": "flex items-center justify-between gap-4 pl-4 pr-5 py-3.5 bg-white border-l-2 border-orange-500 hover:bg-orange-50 transition-colors" }
      },
      "children": [
        {
          "id": "tg-text-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex items-center justify-between gap-4 pl-4 pr-5 py-3.5 bg-white border-l-2 border-orange-500" }
          },
          "children": [
            {
              "id": "tg-text-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "text-base font-medium text-neutral-900 truncate" }
              }
            },
            {
              "id": "tg-text-count",
              "type": "termCount",
              "options": { "label": "", "suffix": " items", "tag": "span" },
              "cssSelectors": {
                "*": { "classes": "shrink-0 text-xs font-medium text-orange-700 bg-orange-100 rounded-full px-2.5 py-1" }
              }
            }
          ]
        }
      ]
    },
  },

];

export default layouts;
