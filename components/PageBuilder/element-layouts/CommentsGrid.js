var layouts = [

  {
    title: 'circle-avatar-refined',
    thumbnail: '',
    content: {
      "id": "cat-grid-circle",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto py-10 px-5" } },
      "children": [
        {
          "id": "terms-circle",
          "type": "termsGrid",
          "options": {
            "classes": "",
            "queryPrams": {
              "taxonomy": "product_cat",
              "number": "12",
              "slug": ["baby-accessories", "baby-diapers", "baby-bibs", "baby-feeders-bottles", "formula-milk", "baby-oral-care", "baby-toys", "feeding-sets", "baby-mum-pot", "baby-cerelac", "baby-powder", "baby-spoon-sets"]
            }
          },
          "cssSelectors": {
            "*": { "classes": "py-10" },
            "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6" },
            "loop-item": { "classes": "p-3 text-center flex flex-col items-center gap-3 bg-transparent" }
          },
          "children": [
            {
              "id": "loop-circle",
              "type": "termsLoop",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "" },
                "loop-items": { "classes": "" },
                "loop-item": { "classes": "flex flex-col items-center gap-3" }
              },
              "children": [
                {
                  "id": "thumb-circle",
                  "type": "termThumbnail",
                  "options": { "linkTo": "termUrl" },
                  "cssSelectors": {
                    "*": { "classes": "overflow-hidden rounded-full w-28 h-28 mx-auto ring-4 ring-orange-100 hover:ring-orange-300 transition-all" },
                    "link": { "classes": "" },
                    "image": { "classes": "object-cover w-full h-full" }
                  }
                },
                {
                  "id": "title-circle",
                  "type": "termTitle",
                  "options": { "text": "Term Title.", "tag": "h3", "classes": "", "linkTo": "termUrl" },
                  "cssSelectors": { "*": { "classes": "text-center text-sm font-medium text-neutral-800 hover:text-orange-600 transition-colors" } }
                }
              ]
            }
          ]
        }
      ]
    },
  },
  {
    title: 'elevated-card',
    thumbnail: '',
    content: {
      "id": "cat-grid-card",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto py-10 px-5" } },
      "children": [
        {
          "id": "terms-card",
          "type": "termsGrid",
          "options": {
            "classes": "",
            "queryPrams": {
              "taxonomy": "product_cat",
              "number": "12",
              "slug": ["baby-accessories", "baby-diapers", "baby-bibs", "baby-feeders-bottles", "formula-milk", "baby-oral-care", "baby-toys", "feeding-sets", "baby-mum-pot", "baby-cerelac", "baby-powder", "baby-spoon-sets"]
            }
          },
          "cssSelectors": {
            "*": { "classes": "py-10" },
            "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6" },
            "loop-item": { "classes": "bg-white border border-neutral-200 rounded-xl p-4 text-center flex flex-col gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200" }
          },
          "children": [
            {
              "id": "loop-card",
              "type": "termsLoop",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "" },
                "loop-items": { "classes": "" },
                "loop-item": { "classes": "flex flex-col gap-3" }
              },
              "children": [
                {
                  "id": "thumb-card",
                  "type": "termThumbnail",
                  "options": { "linkTo": "termUrl" },
                  "cssSelectors": {
                    "*": { "classes": "overflow-hidden rounded-lg w-full aspect-square" },
                    "link": { "classes": "" },
                    "image": { "classes": "object-cover w-full h-full" }
                  }
                },
                {
                  "id": "title-card",
                  "type": "termTitle",
                  "options": { "text": "Term Title.", "tag": "h3", "classes": "", "linkTo": "termUrl" },
                  "cssSelectors": { "*": { "classes": "text-center text-sm font-semibold text-neutral-900" } }
                }
              ]
            }
          ]
        }
      ]
    },
  },
  {
    title: 'minimal-underline',
    thumbnail: '',
    content: {
      "id": "cat-grid-minimal",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto py-10 px-5" } },
      "children": [
        {
          "id": "terms-minimal",
          "type": "termsGrid",
          "options": {
            "classes": "",
            "queryPrams": {
              "taxonomy": "product_cat",
              "number": "12",
              "slug": ["baby-accessories", "baby-diapers", "baby-bibs", "baby-feeders-bottles", "formula-milk", "baby-oral-care", "baby-toys", "feeding-sets", "baby-mum-pot", "baby-cerelac", "baby-powder", "baby-spoon-sets"]
            }
          },
          "cssSelectors": {
            "*": { "classes": "py-10" },
            "loop-items": { "classes": "grid gap-8 grid-cols-3 sm:grid-cols-4 xl:grid-cols-6" },
            "loop-item": { "classes": "text-center flex flex-col items-center gap-3 group" }
          },
          "children": [
            {
              "id": "loop-minimal",
              "type": "termsLoop",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "" },
                "loop-items": { "classes": "" },
                "loop-item": { "classes": "flex flex-col items-center gap-3 group" }
              },
              "children": [
                {
                  "id": "thumb-minimal",
                  "type": "termThumbnail",
                  "options": { "linkTo": "termUrl" },
                  "cssSelectors": {
                    "*": { "classes": "overflow-hidden rounded-full w-20 h-20 mx-auto grayscale group-hover:grayscale-0 transition-all" },
                    "link": { "classes": "" },
                    "image": { "classes": "object-cover w-full h-full" }
                  }
                },
                {
                  "id": "title-minimal",
                  "type": "termTitle",
                  "options": { "text": "Term Title.", "tag": "h3", "classes": "", "linkTo": "termUrl" },
                  "cssSelectors": { "*": { "classes": "text-center text-xs uppercase tracking-wide text-neutral-500 pb-1 border-b-2 border-transparent group-hover:border-neutral-900 group-hover:text-neutral-900 transition-all" } }
                }
              ]
            }
          ]
        }
      ]
    },
  },
  {
    title: 'pill-chip',
    thumbnail: '',
    content: {
      "id": "cat-grid-pill",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto py-10 px-5" } },
      "children": [
        {
          "id": "terms-pill",
          "type": "termsGrid",
          "options": {
            "classes": "",
            "queryPrams": {
              "taxonomy": "product_cat",
              "number": "12",
              "slug": ["baby-accessories", "baby-diapers", "baby-bibs", "baby-feeders-bottles", "formula-milk", "baby-oral-care", "baby-toys", "feeding-sets", "baby-mum-pot", "baby-cerelac", "baby-powder", "baby-spoon-sets"]
            }
          },
          "cssSelectors": {
            "*": { "classes": "py-10" },
            "loop-items": { "classes": "flex flex-wrap gap-3 justify-center" },
            "loop-item": { "classes": "flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-colors" }
          },
          "children": [
            {
              "id": "loop-pill",
              "type": "termsLoop",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "" },
                "loop-items": { "classes": "" },
                "loop-item": { "classes": "flex items-center gap-2" }
              },
              "children": [
                {
                  "id": "thumb-pill",
                  "type": "termThumbnail",
                  "options": { "linkTo": "termUrl" },
                  "cssSelectors": {
                    "*": { "classes": "overflow-hidden rounded-full w-9 h-9 shrink-0" },
                    "link": { "classes": "" },
                    "image": { "classes": "object-cover w-full h-full" }
                  }
                },
                {
                  "id": "title-pill",
                  "type": "termTitle",
                  "options": { "text": "Term Title.", "tag": "span", "classes": "", "linkTo": "termUrl" },
                  "cssSelectors": { "*": { "classes": "text-sm font-medium whitespace-nowrap" } }
                }
              ]
            }
          ]
        }
      ]
    },
  },
  {
    title: 'image-overlay',
    thumbnail: '',
    content: {
      "id": "cat-grid-overlay",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto py-10 px-5" } },
      "children": [
        {
          "id": "terms-overlay",
          "type": "termsGrid",
          "options": {
            "classes": "",
            "queryPrams": {
              "taxonomy": "product_cat",
              "number": "12",
              "slug": ["baby-accessories", "baby-diapers", "baby-bibs", "baby-feeders-bottles", "formula-milk", "baby-oral-care", "baby-toys", "feeding-sets", "baby-mum-pot", "baby-cerelac", "baby-powder", "baby-spoon-sets"]
            }
          },
          "cssSelectors": {
            "*": { "classes": "py-10" },
            "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6" },
            "loop-item": { "classes": "relative rounded-xl overflow-hidden aspect-square group" }
          },
          "children": [
            {
              "id": "loop-overlay",
              "type": "termsLoop",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "" },
                "loop-items": { "classes": "" },
                "loop-item": { "classes": "relative w-full h-full" }
              },
              "children": [
                {
                  "id": "thumb-overlay",
                  "type": "termThumbnail",
                  "options": { "linkTo": "termUrl" },
                  "cssSelectors": {
                    "*": { "classes": "absolute inset-0 w-full h-full" },
                    "link": { "classes": "" },
                    "image": { "classes": "object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" }
                  }
                },
                {
                  "id": "title-overlay",
                  "type": "termTitle",
                  "options": { "text": "Term Title.", "tag": "h3", "classes": "", "linkTo": "termUrl" },
                  "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 text-center text-sm font-semibold text-white p-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" } }
                }
              ]
            }
          ]
        }
      ]
    },
  },
  {
    title: 'gradient-border',
    thumbnail: '',
    content: {
      "id": "cat-grid-gradient",
      "type": "section",
      "options": [],
      "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto py-10 px-5" } },
      "children": [
        {
          "id": "terms-gradient",
          "type": "termsGrid",
          "options": {
            "classes": "",
            "queryPrams": {
              "taxonomy": "product_cat",
              "number": "12",
              "slug": ["baby-accessories", "baby-diapers", "baby-bibs", "baby-feeders-bottles", "formula-milk", "baby-oral-care", "baby-toys", "feeding-sets", "baby-mum-pot", "baby-cerelac", "baby-powder", "baby-spoon-sets"]
            }
          },
          "cssSelectors": {
            "*": { "classes": "py-10" },
            "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6" },
            "loop-item": { "classes": "p-[2px] rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500" }
          },
          "children": [
            {
              "id": "loop-gradient",
              "type": "termsLoop",
              "options": { "classes": "" },
              "cssSelectors": {
                "*": { "classes": "" },
                "loop-items": { "classes": "" },
                "loop-item": { "classes": "flex flex-col items-center gap-2 bg-white rounded-[14px] p-4 h-full" }
              },
              "children": [
                {
                  "id": "thumb-gradient",
                  "type": "termThumbnail",
                  "options": { "linkTo": "termUrl" },
                  "cssSelectors": {
                    "*": { "classes": "overflow-hidden rounded-full w-24 h-24 mx-auto" },
                    "link": { "classes": "" },
                    "image": { "classes": "object-cover w-full h-full" }
                  }
                },
                {
                  "id": "title-gradient",
                  "type": "termTitle",
                  "options": { "text": "Term Title.", "tag": "h3", "classes": "", "linkTo": "termUrl" },
                  "cssSelectors": { "*": { "classes": "text-center text-sm font-semibold text-neutral-800" } }
                }
              ]
            }
          ]
        }
      ]
    },
  },




]

export default layouts;