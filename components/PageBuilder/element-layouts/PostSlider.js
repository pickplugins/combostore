/**
 * Layout presets for the `postSlider` element.
 *
 * Each preset's `content` is rooted at a `postSlider` block so the Layouts panel
 * can Replace the selected slider like-for-like. Block ids are regenerated on
 * Add/Replace, so the ids below only need to be unique within a preset.
 *
 * Four things to know before editing these:
 *
 * 1. `options.sliderOptions` is REQUIRED. PostSlider.jsx assigns
 *    `sliderOptions.classes = {...}` unconditionally, so a preset without it
 *    throws "Cannot set properties of undefined". Every preset below sets it.
 *
 * 2. `sliderOptions` is handed straight to Splide, so any Splide option works.
 *    `perPage` controls the column count (not grid classes), and `breakpoints`
 *    makes it responsive. These use `mediaQuery: "max"` to match the options
 *    panel's default, so breakpoint keys are max-widths.
 *
 * 3. The query lives in `options.queryPrams` (note the spelling) — that is what
 *    PostSlider.jsx reads and passes to PostLoop, which posts it to
 *    combo-store/v2/get_posts. The options panel writes the query to
 *    `options.query` instead, so query edits made there currently have no
 *    effect; edit `queryPrams` here or in the block JSON.
 *
 * 4. `loop-item` is read from the postSlider's selectors, not the postLoop's:
 *    PostLoop.jsx overwrites its own cssSelectors with the slider's one from
 *    PostSliderContext. The same value is mirrored onto postLoop here, as the
 *    rest of the codebase does. `loop-items` is unused in slider mode (Splide's
 *    track handles layout), and the arrow/pagination selectors below only become
 *    literal Splide class names — nothing applies them inline today, since the
 *    Tailwind-to-stylesheet path in EditorActions.jsx is commented out.
 */

var layouts = [

  {
    title: 'Featured Cards',
    thumbnail: '',
    content: {
      "id": "ps-cards",
      "type": "postSlider",
      "options": {
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "9",
          "taxQuery": []
        },
        "sliderOptions": {
          "type": "slide",
          "perPage": 3,
          "perMove": 1,
          "gap": "1.5em",
          "arrows": 1,
          "pagination": 1,
          "drag": 1,
          "speed": 400,
          "mediaQuery": "max",
          "breakpoints": { "1024": { "perPage": 2 }, "640": { "perPage": 1 } }
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-4" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "flex flex-col gap-3 h-full bg-white border border-gray-100 rounded-xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl group" },
        "arrows-wrap": { "classes": "" },
        "arrow-item": { "classes": "bg-white shadow-md rounded-full" },
        "arrow-prev": { "classes": "" },
        "arrow-next": { "classes": "" },
        "pagination": { "classes": "mt-5" },
        "page-item": { "classes": "bg-neutral-300" }
      },
      "children": [
        {
          "id": "ps-cards-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex flex-col gap-3 h-full bg-white border border-gray-100 rounded-xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl group" }
          },
          "children": [
            {
              "id": "ps-cards-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "relative h-48 overflow-hidden rounded-lg bg-gray-50" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
              }
            },
            {
              "id": "ps-cards-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-neutral-400" } }
            },
            {
              "id": "ps-cards-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
            },
            {
              "id": "ps-cards-excerpt",
              "type": "postExcerpt",
              "options": { "tag": "p", "linkTo": "postUrl", "maxWord": 18, "readMoreText": "Read More", "readMoreIcon": "IconArrowNarrowRight", "readMoreIconSize": 18 },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-3 mt-auto" },
                "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-3" },
                "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-orange-600 hover:text-orange-700" },
                "read-more-icon": { "classes": "" },
                "read-more-label": { "classes": "" }
              }
            }
          ]
        }
      ]
    }
  },

  {
    title: 'Overlay Hero Slides',
    thumbnail: '',
    content: {
      "id": "ps-hero",
      "type": "postSlider",
      "options": {
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "5",
          "taxQuery": []
        },
        "sliderOptions": {
          "type": "loop",
          "perPage": 1,
          "perMove": 1,
          "gap": "0",
          "arrows": 1,
          "pagination": 1,
          "drag": 1,
          "speed": 600,
          "autoplay": 1,
          "interval": 5000,
          "pauseOnHover": 1,
          "mediaQuery": "max"
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "relative rounded-2xl overflow-hidden min-h-[420px] group" },
        "arrows-wrap": { "classes": "" },
        "arrow-item": { "classes": "bg-white/80 rounded-full" },
        "arrow-prev": { "classes": "" },
        "arrow-next": { "classes": "" },
        "pagination": { "classes": "mt-4" },
        "page-item": { "classes": "bg-white/60" }
      },
      "children": [
        {
          "id": "ps-hero-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "relative rounded-2xl overflow-hidden min-h-[420px] group" }
          },
          "children": [
            {
              "id": "ps-hero-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "absolute inset-0 w-full h-full" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" }
              }
            },
            {
              "id": "ps-hero-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "absolute top-5 left-6 z-10 text-[11px] font-medium text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full" } }
            },
            {
              "id": "ps-hero-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h2", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-16 z-10 text-white text-2xl font-bold leading-snug line-clamp-2 px-6 drop-shadow" } }
            },
            {
              "id": "ps-hero-excerpt",
              "type": "postExcerpt",
              "options": { "tag": "p", "linkTo": "postUrl", "maxWord": 22, "readMoreText": "Read the story", "readMoreIcon": "IconArrowNarrowRight", "readMoreIconSize": 18 },
              "cssSelectors": {
                "*": { "classes": "absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 px-6 pb-6 pt-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent" },
                "excerpt": { "classes": "text-sm text-white/80 leading-relaxed line-clamp-2 max-w-xl" },
                "read-more": { "classes": "flex gap-2 items-center text-sm font-semibold text-amber-300 hover:text-amber-200 w-fit" },
                "read-more-icon": { "classes": "" },
                "read-more-label": { "classes": "" }
              }
            }
          ]
        }
      ]
    }
  },

  {
    title: 'Compact Peek',
    thumbnail: '',
    content: {
      "id": "ps-peek",
      "type": "postSlider",
      "options": {
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "12",
          "taxQuery": []
        },
        "sliderOptions": {
          "type": "slide",
          "perPage": 4,
          "perMove": 1,
          "gap": "1em",
          "padding": { "right": "3rem" },
          "arrows": 1,
          "pagination": 0,
          "drag": 1,
          "speed": 400,
          "mediaQuery": "max",
          "breakpoints": { "1024": { "perPage": 3 }, "768": { "perPage": 2 }, "480": { "perPage": 1 } }
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-2" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "flex flex-col gap-2 h-full group" },
        "arrows-wrap": { "classes": "" },
        "arrow-item": { "classes": "bg-white shadow rounded-full" },
        "arrow-prev": { "classes": "" },
        "arrow-next": { "classes": "" },
        "pagination": { "classes": "" },
        "page-item": { "classes": "" }
      },
      "children": [
        {
          "id": "ps-peek-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex flex-col gap-2 h-full group" }
          },
          "children": [
            {
              "id": "ps-peek-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "h-36 overflow-hidden rounded-lg bg-gray-50" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
              }
            },
            {
              "id": "ps-peek-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
            },
            {
              "id": "ps-peek-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-400 mt-auto" } }
            }
          ]
        }
      ]
    }
  },

  {
    title: 'Dark Spotlight',
    thumbnail: '',
    content: {
      "id": "ps-dark",
      "type": "postSlider",
      "options": {
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "9",
          "taxQuery": []
        },
        "sliderOptions": {
          "type": "slide",
          "perPage": 3,
          "perMove": 1,
          "gap": "1.25em",
          "arrows": 1,
          "pagination": 1,
          "drag": 1,
          "speed": 450,
          "mediaQuery": "max",
          "breakpoints": { "1024": { "perPage": 2 }, "640": { "perPage": 1 } }
        }
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-900 rounded-2xl p-6" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "flex flex-col gap-3 h-full bg-neutral-900 border border-neutral-800 p-3 rounded-2xl transition-all duration-300 ease-out hover:border-amber-400/60 group" },
        "arrows-wrap": { "classes": "" },
        "arrow-item": { "classes": "bg-amber-400 rounded-full" },
        "arrow-prev": { "classes": "" },
        "arrow-next": { "classes": "" },
        "pagination": { "classes": "mt-5" },
        "page-item": { "classes": "bg-neutral-600" }
      },
      "children": [
        {
          "id": "ps-dark-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex flex-col gap-3 h-full bg-neutral-900 border border-neutral-800 p-3 rounded-2xl transition-all duration-300 ease-out hover:border-amber-400/60 group" }
          },
          "children": [
            {
              "id": "ps-dark-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "h-48 overflow-hidden rounded-xl bg-neutral-800" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110" }
              }
            },
            {
              "id": "ps-dark-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-[11px] uppercase tracking-wide text-amber-400" } }
            },
            {
              "id": "ps-dark-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-base font-medium text-neutral-100 line-clamp-2 transition-colors duration-300 group-hover:text-amber-300" } }
            },
            {
              "id": "ps-dark-excerpt",
              "type": "postExcerpt",
              "options": { "tag": "p", "linkTo": "postUrl", "maxWord": 18, "readMoreText": "Read More", "readMoreIcon": "IconArrowNarrowRight", "readMoreIconSize": 18 },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-3 mt-auto" },
                "excerpt": { "classes": "text-sm text-neutral-400 leading-relaxed line-clamp-3" },
                "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-amber-400 hover:text-amber-300" },
                "read-more-icon": { "classes": "" },
                "read-more-label": { "classes": "" }
              }
            }
          ]
        }
      ]
    }
  },

  {
    title: 'Minimal Text Slides',
    thumbnail: '',
    content: {
      "id": "ps-minimal",
      "type": "postSlider",
      "options": {
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "8",
          "taxQuery": []
        },
        "sliderOptions": {
          "type": "slide",
          "perPage": 2,
          "perMove": 1,
          "gap": "2.5em",
          "arrows": 1,
          "pagination": 0,
          "drag": 1,
          "speed": 400,
          "mediaQuery": "max",
          "breakpoints": { "768": { "perPage": 1 } }
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-6" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "flex flex-col gap-3 h-full border-l-2 border-neutral-200 pl-5 transition-colors duration-200 hover:border-neutral-900 group" },
        "arrows-wrap": { "classes": "" },
        "arrow-item": { "classes": "border border-neutral-300 rounded-none" },
        "arrow-prev": { "classes": "" },
        "arrow-next": { "classes": "" },
        "pagination": { "classes": "" },
        "page-item": { "classes": "" }
      },
      "children": [
        {
          "id": "ps-minimal-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex flex-col gap-3 h-full border-l-2 border-neutral-200 pl-5 transition-colors duration-200 hover:border-neutral-900 group" }
          },
          "children": [
            {
              "id": "ps-minimal-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-[11px] uppercase tracking-[0.2em] text-neutral-400" } }
            },
            {
              "id": "ps-minimal-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-xl font-semibold text-neutral-900 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-neutral-500" } }
            },
            {
              "id": "ps-minimal-author",
              "type": "postAuthor",
              "options": { "tag": "span", "linkTo": "" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
            },
            {
              "id": "ps-minimal-excerpt",
              "type": "postExcerpt",
              "options": { "tag": "p", "linkTo": "postUrl", "maxWord": 26, "readMoreText": "Read", "readMoreIcon": "", "readMoreIconSize": 16 },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-3 mt-auto" },
                "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-3" },
                "read-more": { "classes": "flex gap-2 items-center text-xs uppercase tracking-widest text-neutral-900 border-b border-neutral-900 w-fit pb-0.5" },
                "read-more-icon": { "classes": "" },
                "read-more-label": { "classes": "" }
              }
            }
          ]
        }
      ]
    }
  },

  {
    title: 'Autoplay Carousel',
    thumbnail: '',
    content: {
      "id": "ps-auto",
      "type": "postSlider",
      "options": {
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "12",
          "taxQuery": []
        },
        "sliderOptions": {
          "type": "loop",
          "perPage": 3,
          "perMove": 1,
          "gap": "1.25em",
          "arrows": 0,
          "pagination": 1,
          "drag": 1,
          "speed": 500,
          "autoplay": 1,
          "interval": 3500,
          "pauseOnHover": 1,
          "pauseOnFocus": 1,
          "mediaQuery": "max",
          "breakpoints": { "1024": { "perPage": 2 }, "640": { "perPage": 1 } }
        }
      },
      "cssSelectors": {
        "*": { "classes": "py-4" },
        "loop-items": { "classes": "" },
        "loop-item": { "classes": "flex flex-col gap-3 h-full bg-white rounded-2xl p-3 ring-1 ring-gray-100 transition-all duration-300 ease-out hover:ring-orange-200 group" },
        "arrows-wrap": { "classes": "" },
        "arrow-item": { "classes": "" },
        "arrow-prev": { "classes": "" },
        "arrow-next": { "classes": "" },
        "pagination": { "classes": "mt-5" },
        "page-item": { "classes": "bg-neutral-300" }
      },
      "children": [
        {
          "id": "ps-auto-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "" },
            "loop-item": { "classes": "flex flex-col gap-3 h-full bg-white rounded-2xl p-3 ring-1 ring-gray-100 transition-all duration-300 ease-out hover:ring-orange-200 group" }
          },
          "children": [
            {
              "id": "ps-auto-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "h-44 overflow-hidden rounded-xl bg-gray-50" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
              }
            },
            {
              "id": "ps-auto-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
            },
            {
              "id": "ps-auto-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-400 mt-auto" } }
            }
          ]
        }
      ]
    }
  }

]

export default layouts;
