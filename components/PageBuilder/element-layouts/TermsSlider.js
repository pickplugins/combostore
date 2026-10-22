/**
 * Element layouts for the `termsSlider` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `termsSlider` block and its
 * Replace action splices the preset in place of that block, so every root here
 * MUST be `"type": "termsSlider"` -- a `section`/`container` root would silently
 * turn the slider into something else. (PageBuilder.jsx regenerates all ids on
 * paste/replace, so the readable ids below are safe.)
 *
 * Renderer notes that shaped these presets:
 *
 * 1. TermsSlider.jsx:71-74 does NOT apply `cssSelectors['*']` to its root div
 *    (TermsGrid.jsx:68 and PostSlider.jsx:137 both do). So the `*` key is inert
 *    on a termsSlider: no max-width, padding or background can be set on the
 *    wrapper. All visual weight therefore lives in `loop-item`, and outer
 *    breathing room comes from `sliderOptions.gap` / `sliderOptions.padding`.
 *    Adding `${cssSelectors['*']?.classes}` to that className is a one-line fix.
 *
 * 2. TermsLoop.jsx:17 replaces the loop's own cssSelectors with the parent
 *    slider's, so `loop-item` must be declared on the termsSlider. It is
 *    mirrored onto the termsLoop below to match repo convention, but the mirror
 *    is never read. `loop-items` is read only in the grid branch
 *    (TermsLoop.jsx:245) -- in the slider branch each term is its own
 *    <SplideSlide>, so grid classes there would do nothing and are left empty.
 *
 * 3. The query lives in `options.queryPrams` and TermsSliderOptions.jsx:41
 *    writes the same key, so unlike postSlider the options panel really can edit
 *    it. Keys the panel knows (TermsQueryPrams.jsx:189): taxonomy, order,
 *    orderby, slug, hide_empty, parent, top_lavel (sic), search, number,
 *    hierarchical. `slug` pins an explicit list of terms (see TermsGrid.js);
 *    these presets stay store-agnostic and filter with hide_empty instead.
 *    Note the panel's orderby <select> only offers date|rand, so re-picking it
 *    would overwrite the name/count values used here.
 *
 * 4. `number` vs `per_page`: the page-builder panel writes `number`, while the
 *    other get_terms callers (QuickSearch.jsx:63, TermsPicker.jsx:23,
 *    TaxTermsQuery.jsx:67) send `per_page`. Which one combo-store/v2/get_terms
 *    honours is not visible from this repo, so both are set to the same value.
 *    Editing the count in the panel only updates `number`.
 *
 * 5. sliderOptions is optional here -- TermsSlider.jsx just forwards it to
 *    Splide and never assigns `.classes` onto it, so a missing one does not
 *    crash the way PostSlider.jsx:39 does. Without it Splide falls back to
 *    perPage 1, so every preset sets it. It goes straight to Splide:
 *    `breakpoints` is not exposed by the panel, and `mediaQuery: "max"` makes
 *    the breakpoint keys read as max-widths. The panel renders `padding` as a
 *    number input, so editing it there replaces the object form used below.
 *
 * 6. Child element quirks: termTitle's `text` option is inert (the renderer
 *    prints category.name) and the `link` selector some inline definitions
 *    give it is never read by TermTitle.jsx, so it is omitted here to match the
 *    standalone termTitle definition (ElementsDefinition.js:2029); termThumbnail
 *    with `linkTo: "termUrl"` renders href="#" and loses the /thumb.png
 *    fallback for terms without an image, so it is omitted here; termCount
 *    ignores its declared `label`/`suffix` and reads an undeclared `tag`, so it
 *    renders a bare number -- styled as a badge rather than captioned.
 */

var layouts = [

  {
    title: 'Circle Categories',
    thumbnail: '',
    content: {
      "id": "ts-circle",
      "type": "termsSlider",
      "options": {
        "classes": "",
        "sliderOptions": {
          "type": "slide",
          "perPage": 6,
          "perMove": 1,
          "gap": "1.25em",
          "arrows": 1,
          "pagination": 0,
          "speed": 500,
          "drag": 1,
          "snap": 1,
          "mediaQuery": "max",
          "breakpoints": {
            "1280": { "perPage": 5 },
            "1024": { "perPage": 4 },
            "768": { "perPage": 3 },
            "480": { "perPage": 2 }
          }
        },
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "12",
          "per_page": "12",
          "hide_empty": false,
          "order": "ASC",
          "orderby": "name"
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "group flex flex-col items-center gap-3 py-4 text-center" }
      },
      "children": [
        {
          "id": "ts-circle-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "group flex flex-col items-center gap-3 py-4 text-center" }
          },
          "children": [
            {
              "id": "ts-circle-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "w-24 h-24 mx-auto rounded-full overflow-hidden bg-neutral-50 ring-2 ring-neutral-200 group-hover:ring-orange-400 transition-all duration-200" },
                "link": { "classes": "" },
                "image": { "classes": "object-cover w-full h-full" }
              }
            },
            {
              "id": "ts-circle-title",
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
    title: 'Category Cards',
    thumbnail: '',
    content: {
      "id": "ts-card",
      "type": "termsSlider",
      "options": {
        "classes": "",
        "sliderOptions": {
          "type": "slide",
          "perPage": 5,
          "perMove": 1,
          "gap": "1.25em",
          "arrows": 1,
          "pagination": 1,
          "speed": 450,
          "mediaQuery": "max",
          "breakpoints": {
            "1280": { "perPage": 4 },
            "1024": { "perPage": 3 },
            "768": { "perPage": 2 },
            "480": { "perPage": 1 }
          }
        },
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "15",
          "per_page": "15",
          "hide_empty": false,
          "order": "DESC",
          "orderby": "count"
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "h-full bg-white border border-neutral-200 rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" }
      },
      "children": [
        {
          "id": "ts-card-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "h-full bg-white border border-neutral-200 rounded-xl p-4 flex flex-col gap-3" }
          },
          "children": [
            {
              "id": "ts-card-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "w-full aspect-square rounded-lg overflow-hidden bg-neutral-50" },
                "link": { "classes": "" },
                "image": { "classes": "object-cover w-full h-full" }
              }
            },
            {
              "id": "ts-card-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "text-sm font-semibold text-neutral-900 text-center line-clamp-2" }
              }
            },
            {
              "id": "ts-card-count",
              "type": "termCount",
              "options": { "label": "", "suffix": " items", "tag": "span" },
              "cssSelectors": {
                "*": { "classes": "mx-auto text-xs font-medium text-neutral-500 bg-neutral-100 rounded-full px-2.5 py-1" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Peek Chips',
    thumbnail: '',
    content: {
      "id": "ts-chip",
      "type": "termsSlider",
      "options": {
        "classes": "",
        "sliderOptions": {
          "type": "slide",
          "perPage": 6,
          "perMove": 2,
          "gap": "0.75em",
          "padding": { "right": "3rem" },
          "arrows": 1,
          "pagination": 0,
          "speed": 400,
          "mediaQuery": "max",
          "breakpoints": {
            "1280": { "perPage": 5 },
            "1024": { "perPage": 4 },
            "768": { "perPage": 3 },
            "480": { "perPage": 2 }
          }
        },
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "18",
          "per_page": "18",
          "hide_empty": false,
          "order": "ASC",
          "orderby": "name"
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "flex items-center gap-2 p-1 pr-4 rounded-full bg-neutral-100 border border-transparent hover:bg-orange-50 hover:border-orange-200 transition-colors" }
      },
      "children": [
        {
          "id": "ts-chip-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex items-center gap-2 p-1 pr-4 rounded-full bg-neutral-100" }
          },
          "children": [
            {
              "id": "ts-chip-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "w-12 h-12 shrink-0 rounded-full overflow-hidden bg-white" },
                "link": { "classes": "" },
                "image": { "classes": "object-cover w-full h-full" }
              }
            },
            {
              "id": "ts-chip-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "span", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "block text-xs font-medium text-neutral-700 truncate" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Brand Strip Dark',
    thumbnail: '',
    content: {
      "id": "ts-brand",
      "type": "termsSlider",
      "options": {
        "classes": "",
        "sliderOptions": {
          "type": "loop",
          "perPage": 6,
          "perMove": 1,
          "gap": "1.5em",
          "arrows": 0,
          "pagination": 0,
          "autoplay": 1,
          "interval": 2800,
          "pauseOnHover": 1,
          "pauseOnFocus": 1,
          "speed": 600,
          "mediaQuery": "max",
          "breakpoints": {
            "1024": { "perPage": 4 },
            "768": { "perPage": 3 },
            "480": { "perPage": 2 }
          }
        },
        "queryPrams": {
          "taxonomy": "product_brand",
          "number": "20",
          "per_page": "20",
          "hide_empty": false,
          "order": "ASC",
          "orderby": "name"
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "h-24 flex items-center justify-center px-4 py-3 bg-neutral-900 rounded-lg" }
      },
      "children": [
        {
          "id": "ts-brand-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "h-24 flex items-center justify-center px-4 py-3 bg-neutral-900 rounded-lg" }
          },
          "children": [
            {
              "id": "ts-brand-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "w-full h-12 flex items-center justify-center" },
                "link": { "classes": "" },
                "image": { "classes": "max-h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200" }
              }
            },
            {
              "id": "ts-brand-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "span", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "sr-only" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Overlay Tiles',
    thumbnail: '',
    content: {
      "id": "ts-tile",
      "type": "termsSlider",
      "options": {
        "classes": "",
        "sliderOptions": {
          "type": "slide",
          "perPage": 4,
          "perMove": 1,
          "gap": "1em",
          "arrows": 1,
          "pagination": 0,
          "speed": 500,
          "mediaQuery": "max",
          "breakpoints": {
            "1024": { "perPage": 3 },
            "768": { "perPage": 2 },
            "480": { "perPage": 1 }
          }
        },
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "10",
          "per_page": "10",
          "hide_empty": false,
          "top_lavel": true,
          "order": "ASC",
          "orderby": "name"
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "group relative h-64 rounded-2xl overflow-hidden bg-neutral-200" }
      },
      "children": [
        {
          "id": "ts-tile-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "group relative h-64 rounded-2xl overflow-hidden bg-neutral-200" }
          },
          "children": [
            {
              "id": "ts-tile-thumb",
              "type": "termThumbnail",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "block w-full h-64" },
                "link": { "classes": "" },
                "image": { "classes": "object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" }
              }
            },
            {
              "id": "ts-tile-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "absolute inset-x-0 bottom-0 z-10 px-4 pt-10 pb-4 text-base font-semibold text-white bg-gradient-to-t from-black/75 to-transparent" }
              }
            }
          ]
        }
      ]
    },
  },

  {
    title: 'Top Categories List',
    thumbnail: '',
    content: {
      "id": "ts-list",
      "type": "termsSlider",
      "options": {
        "classes": "",
        "sliderOptions": {
          "type": "slide",
          "perPage": 3,
          "perMove": 1,
          "gap": "1.5em",
          "arrows": 1,
          "pagination": 1,
          "speed": 450,
          "mediaQuery": "max",
          "breakpoints": {
            "1024": { "perPage": 2 },
            "640": { "perPage": 1 }
          }
        },
        "queryPrams": {
          "taxonomy": "product_cat",
          "number": "12",
          "per_page": "12",
          "hide_empty": false,
          "order": "DESC",
          "orderby": "count"
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "flex items-center justify-between gap-4 pl-4 pr-5 py-5 bg-white border-l-2 border-orange-500 hover:bg-orange-50 transition-colors" }
      },
      "children": [
        {
          "id": "ts-list-loop",
          "type": "termsLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex items-center justify-between gap-4 pl-4 pr-5 py-5 bg-white border-l-2 border-orange-500" }
          },
          "children": [
            {
              "id": "ts-list-title",
              "type": "termTitle",
              "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
              "cssSelectors": {
                "*": { "classes": "text-lg font-semibold text-neutral-900 truncate" }
              }
            },
            {
              "id": "ts-list-count",
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
