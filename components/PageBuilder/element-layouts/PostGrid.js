/**
 * Layout presets for the `postGrid` element.
 *
 * Each preset's `content` is rooted at a `postGrid` block so the Layouts panel
 * can Replace the selected grid like-for-like. Block ids are regenerated on
 * Add/Replace, so the ids below only need to be unique within a preset.
 *
 * Two things to know before editing these:
 *
 * 1. The query lives in `options.queryPrams` (note the spelling) on the postGrid
 *    block; PostGrid.jsx reads `queryPrams`, not the `queryParams` that
 *    ElementsDefinition declares. PostLoop posts it to combo-store/v2/get_posts.
 *
 * 2. `loop-items` and `loop-item` are read from the postGrid's selectors, not the
 *    postLoop's: PostLoop.jsx overwrites its own cssSelectors with the grid's one
 *    from PostGridContext. The same values are mirrored onto postLoop here, as
 *    the rest of the codebase does, so the cards keep their look if that ever
 *    changes.
 */

var layouts = [

  {
    title: 'Blog Cards',
    thumbnail: '',
    content: {
      "id": "pg-cards",
      "type": "postGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "6",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
        "loop-item": { "classes": "flex flex-col gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group" }
      },
      "children": [
        {
          "id": "pg-cards-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
            "loop-item": { "classes": "flex flex-col gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group" }
          },
          "children": [
            {
              "id": "pg-cards-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "relative h-52 overflow-hidden rounded-lg bg-gray-50" },
                "link": { "classes": "" },
                "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
              }
            },
            {
              "id": "pg-cards-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-neutral-400" } }
            },
            {
              "id": "pg-cards-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
            },
            {
              "id": "pg-cards-excerpt",
              "type": "postExcerpt",
              "options": { "tag": "p", "linkTo": "postUrl", "maxWord": 22, "readMoreText": "Read More", "readMoreIcon": "IconArrowNarrowRight", "readMoreIconSize": 18 },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-3 mt-auto" },
                "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-3" },
                "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-orange-600 hover:text-orange-700" },
                "read-more-icon": { "classes": "" },
                "read-more-label": { "classes": "" }
              }
            }
          ]
        },
        {
          "id": "pg-cards-pagination",
          "type": "postGridPagination",
          "options": { "tag": "div" },
          "cssSelectors": {
            "*": { "classes": "flex gap-3 items-center justify-center my-10" },
            "previous": { "classes": "bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full text-white cursor-pointer" },
            "next": { "classes": "bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full text-white cursor-pointer" },
            "previous-icon": { "classes": "" },
            "next-icon": { "classes": "" },
            "current": { "classes": "w-20 text-center border border-gray-300 rounded-full py-2 shadow-none!" }
          }
        }
      ]
    }
  },

  {
    title: 'Image Overlay',
    thumbnail: '',
    content: {
      "id": "pg-overlay",
      "type": "postGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "6",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
        "loop-item": { "classes": "relative rounded-2xl overflow-hidden group cursor-pointer min-h-72" }
      },
      "children": [
        {
          "id": "pg-overlay-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
            "loop-item": { "classes": "relative rounded-2xl overflow-hidden group cursor-pointer min-h-72" }
          },
          "children": [
            {
              "id": "pg-overlay-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "absolute inset-0 w-full h-full" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-90" }
              }
            },
            {
              "id": "pg-overlay-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "absolute top-3 left-3 z-10 text-[11px] font-medium text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full" } }
            },
            {
              "id": "pg-overlay-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 text-white text-base font-semibold line-clamp-2 p-4 pt-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-transform duration-300 ease-out translate-y-1 group-hover:translate-y-0" } }
            }
          ]
        },
        {
          "id": "pg-overlay-pagination",
          "type": "postGridPagination",
          "options": { "tag": "div" },
          "cssSelectors": {
            "*": { "classes": "flex gap-3 items-center justify-center my-10" },
            "previous": { "classes": "bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full text-white cursor-pointer" },
            "next": { "classes": "bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full text-white cursor-pointer" },
            "previous-icon": { "classes": "" },
            "next-icon": { "classes": "" },
            "current": { "classes": "w-20 text-center border border-gray-300 rounded-full py-2 shadow-none!" }
          }
        }
      ]
    }
  },

  {
    title: 'Horizontal List',
    thumbnail: '',
    content: {
      "id": "pg-list",
      "type": "postGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "5",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "flex flex-col divide-y divide-gray-100" },
        "loop-item": { "classes": "flex gap-5 py-6 group" }
      },
      "children": [
        {
          "id": "pg-list-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "flex flex-col divide-y divide-gray-100" },
            "loop-item": { "classes": "flex gap-5 py-6 group" }
          },
          "children": [
            {
              "id": "pg-list-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "w-40 h-28 shrink-0 overflow-hidden rounded-lg bg-gray-50" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
              }
            },
            {
              "id": "pg-list-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-lg font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
            },
            {
              "id": "pg-list-author",
              "type": "postAuthor",
              "options": { "tag": "span", "linkTo": "" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
            },
            {
              "id": "pg-list-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-400" } }
            },
            {
              "id": "pg-list-excerpt",
              "type": "postExcerpt",
              "options": { "tag": "p", "linkTo": "postUrl", "maxWord": 28, "readMoreText": "Continue reading", "readMoreIcon": "IconArrowNarrowRight", "readMoreIconSize": 16 },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-2" },
                "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-2" },
                "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-orange-600 hover:text-orange-700" },
                "read-more-icon": { "classes": "" },
                "read-more-label": { "classes": "" }
              }
            }
          ]
        },
        {
          "id": "pg-list-pagination",
          "type": "postGridPagination",
          "options": { "tag": "div" },
          "cssSelectors": {
            "*": { "classes": "flex gap-3 items-center justify-center my-10" },
            "previous": { "classes": "border border-neutral-900 hover:bg-neutral-900 hover:text-white px-4 py-2 rounded-sm text-neutral-900 cursor-pointer transition-colors" },
            "next": { "classes": "border border-neutral-900 hover:bg-neutral-900 hover:text-white px-4 py-2 rounded-sm text-neutral-900 cursor-pointer transition-colors" },
            "previous-icon": { "classes": "" },
            "next-icon": { "classes": "" },
            "current": { "classes": "w-20 text-center border border-gray-300 rounded-sm py-2 shadow-none!" }
          }
        }
      ]
    }
  },

  {
    title: 'Minimal Text',
    thumbnail: '',
    content: {
      "id": "pg-minimal",
      "type": "postGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "8",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "grid gap-x-10 gap-y-8 grid-cols-1 sm:grid-cols-2" },
        "loop-item": { "classes": "flex flex-col gap-2 border-b border-gray-100 pb-6 group" }
      },
      "children": [
        {
          "id": "pg-minimal-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-x-10 gap-y-8 grid-cols-1 sm:grid-cols-2" },
            "loop-item": { "classes": "flex flex-col gap-2 border-b border-gray-100 pb-6 group" }
          },
          "children": [
            {
              "id": "pg-minimal-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-[11px] uppercase tracking-[0.2em] text-neutral-400" } }
            },
            {
              "id": "pg-minimal-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-xl font-semibold text-neutral-900 leading-snug transition-colors duration-200 group-hover:text-neutral-500" } }
            },
            {
              "id": "pg-minimal-excerpt",
              "type": "postExcerpt",
              "options": { "tag": "p", "linkTo": "postUrl", "maxWord": 24, "readMoreText": "Read", "readMoreIcon": "", "readMoreIconSize": 16 },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-2" },
                "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-3" },
                "read-more": { "classes": "flex gap-2 items-center text-xs uppercase tracking-widest text-neutral-900 border-b border-neutral-900 w-fit pb-0.5" },
                "read-more-icon": { "classes": "" },
                "read-more-label": { "classes": "" }
              }
            }
          ]
        },
        {
          "id": "pg-minimal-pagination",
          "type": "postGridPagination",
          "options": { "tag": "div" },
          "cssSelectors": {
            "*": { "classes": "flex gap-3 items-center justify-center my-10" },
            "previous": { "classes": "border border-neutral-300 hover:border-neutral-900 px-4 py-2 rounded-sm text-neutral-700 cursor-pointer transition-colors" },
            "next": { "classes": "border border-neutral-300 hover:border-neutral-900 px-4 py-2 rounded-sm text-neutral-700 cursor-pointer transition-colors" },
            "previous-icon": { "classes": "" },
            "next-icon": { "classes": "" },
            "current": { "classes": "w-20 text-center border border-gray-300 rounded-sm py-2 shadow-none!" }
          }
        }
      ]
    }
  },

  {
    title: 'Dark Editorial',
    thumbnail: '',
    content: {
      "id": "pg-dark",
      "type": "postGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "6",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "bg-neutral-900 rounded-2xl p-6" },
        "loop-items": { "classes": "grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
        "loop-item": { "classes": "flex flex-col gap-3 bg-neutral-900 border border-neutral-800 p-3 rounded-2xl transition-all duration-300 ease-out hover:border-amber-400/60 hover:-translate-y-1 group" }
      },
      "children": [
        {
          "id": "pg-dark-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
            "loop-item": { "classes": "flex flex-col gap-3 bg-neutral-900 border border-neutral-800 p-3 rounded-2xl transition-all duration-300 ease-out hover:border-amber-400/60 hover:-translate-y-1 group" }
          },
          "children": [
            {
              "id": "pg-dark-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "h-52 overflow-hidden rounded-xl bg-neutral-800" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110" }
              }
            },
            {
              "id": "pg-dark-meta",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-[11px] uppercase tracking-wide text-amber-400" } }
            },
            {
              "id": "pg-dark-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-base font-medium text-neutral-100 line-clamp-2 transition-colors duration-300 group-hover:text-amber-300" } }
            },
            {
              "id": "pg-dark-excerpt",
              "type": "postExcerpt",
              "options": { "tag": "p", "linkTo": "postUrl", "maxWord": 20, "readMoreText": "Read More", "readMoreIcon": "IconArrowNarrowRight", "readMoreIconSize": 18 },
              "cssSelectors": {
                "*": { "classes": "flex flex-col gap-3 mt-auto" },
                "excerpt": { "classes": "text-sm text-neutral-400 leading-relaxed line-clamp-3" },
                "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-amber-400 hover:text-amber-300" },
                "read-more-icon": { "classes": "" },
                "read-more-label": { "classes": "" }
              }
            }
          ]
        },
        {
          "id": "pg-dark-pagination",
          "type": "postGridPagination",
          "options": { "tag": "div" },
          "cssSelectors": {
            "*": { "classes": "flex gap-3 items-center justify-center my-10" },
            "previous": { "classes": "bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-full text-neutral-900 font-semibold cursor-pointer transition-colors" },
            "next": { "classes": "bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-full text-neutral-900 font-semibold cursor-pointer transition-colors" },
            "previous-icon": { "classes": "" },
            "next-icon": { "classes": "" },
            "current": { "classes": "w-20 text-center border border-neutral-700 bg-neutral-800 text-white rounded-full py-2 shadow-none!" }
          }
        }
      ]
    }
  },

  {
    title: 'Compact Thumbnail Rows',
    thumbnail: '',
    content: {
      "id": "pg-compact",
      "type": "postGrid",
      "options": {
        "classes": "",
        "queryPrams": {
          "post_type": ["post"],
          "order": "DESC",
          "orderby": "date",
          "posts_per_page": "6",
          "taxQuery": []
        }
      },
      "cssSelectors": {
        "*": { "classes": "" },
        "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
        "loop-item": { "classes": "flex gap-4 items-center bg-white border border-gray-100 rounded-lg p-3 transition-all duration-200 hover:border-gray-300 group" }
      },
      "children": [
        {
          "id": "pg-compact-loop",
          "type": "postLoop",
          "options": { "classes": "" },
          "cssSelectors": {
            "*": { "classes": "" },
            "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
            "loop-item": { "classes": "flex gap-4 items-center bg-white border border-gray-100 rounded-lg p-3 transition-all duration-200 hover:border-gray-300 group" }
          },
          "children": [
            {
              "id": "pg-compact-thumb",
              "type": "postThumbnail",
              "options": { "linkTo": "postUrl" },
              "cssSelectors": {
                "*": { "classes": "w-20 h-20 shrink-0 overflow-hidden rounded-md bg-gray-50" },
                "link": { "classes": "block w-full h-full" },
                "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
              }
            },
            {
              "id": "pg-compact-title",
              "type": "postTitle",
              "options": { "text": "Post Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
              "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
            },
            {
              "id": "pg-compact-date",
              "type": "postDate",
              "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
              "cssSelectors": { "*": { "classes": "text-xs text-neutral-400" } }
            }
          ]
        },
        {
          "id": "pg-compact-pagination",
          "type": "postGridPagination",
          "options": { "tag": "div" },
          "cssSelectors": {
            "*": { "classes": "flex gap-3 items-center justify-center my-8" },
            "previous": { "classes": "bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-neutral-700 cursor-pointer transition-colors" },
            "next": { "classes": "bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-neutral-700 cursor-pointer transition-colors" },
            "previous-icon": { "classes": "" },
            "next-icon": { "classes": "" },
            "current": { "classes": "w-16 text-center border border-gray-300 rounded-md py-2 shadow-none!" }
          }
        }
      ]
    }
  }

]

export default layouts;
