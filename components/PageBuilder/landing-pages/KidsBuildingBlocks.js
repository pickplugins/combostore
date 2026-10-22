/**
 * Landing page: Kids Building Blocks.
 *
 * One-page product landing page, the shape a single-product campaign uses: a
 * badge, a two-tone headline, a row of claim cards, a CTA repeated down the
 * page, a problem/benefit pair of columns, an age guide, alternating
 * image-and-checklist blocks, what-is-in-the-box, parent reviews, a spec table
 * and a cash-on-delivery trust band. Copy is English and generic enough for a
 * merchant to swap the piece count and the claims and keep the layout.
 *
 * Contract for this folder: each file default-exports an ARRAY of landing page
 * objects, and each object is `{ title, description, thumbnail, meta, content }`
 * where `content` is an array of builder blocks -- the same `title`/`content`
 * pair ready-layouts/ uses, so a picker can drop one straight onto the canvas
 * with `handlePasteBlock(page.content)`. If one is saved through the API
 * instead, a page's content is stored as a JSON STRING, so whoever saves it
 * must `JSON.stringify(page.content)`.
 *
 * No siteHeader or siteFooter: those are template parts, applied once for the
 * whole site (see templates/, where they live as the `header` and `footer`
 * entries), and a page carrying its own copy would double up with them.
 *
 * Renderer quirks from the element-layouts docblocks that shaped this file:
 *
 *   - A heading cannot hold two colours: Heading.jsx renders `options.text` as
 *     plain text, no markup. Each two-tone headline is therefore a `heading`
 *     plus a `text` with `tag: "span"` in a flex-wrap container, so the two
 *     read as one line and break like one.
 *   - heading also ignores loop text (Heading.jsx:5,10 calls `useLoop()` and
 *     drops the result), so every per-item string in a featurebox comes from
 *     the item, never from a heading placed inside it.
 *   - image sizes through the `img` class string; `options.width`/`height` are
 *     dead (Image.jsx hardcodes 500x500), so each image pins an `aspect-*` to
 *     reserve the right box on first paint, and all three selector keys stay
 *     present or the renderer interpolates the literal "undefined".
 *   - `src` values use placehold.co, the host allowlisted in next.config.mjs.
 *   - Buttons set `linkTo: "custom"` plus `scheme` and `url`: Button.jsx only
 *     renders a <Link> for 'custom' and builds the href as `${scheme}${url}`,
 *     so an unset scheme prints "undefined".
 *   - Every `iconName` was checked against the installed @tabler/icons-react;
 *     an unknown name resolves to undefined and renders an empty box.
 *
 * Set before this goes live: the phone number (the placeholder `01XXXXXXXXX`
 * appears in the trust band as a real `tel:` link) and the WhatsApp number,
 * left empty for the same reason MessengerButton's username is.
 *
 * The palette is the one a brick set already owns -- primary red, amber and
 * sky on cream, with chunky radii and a slate band to close -- rather than the
 * blue the kitchen template uses. Left alone on purpose: amber for review
 * stars, red for the problem column, and emerald for the benefit column and
 * its ticks, which stays distinct from the red CTA.
 */

var landingPages = [
  {
    title: 'Kids Building Blocks',
    description: 'One-page landing page for a kids building block set: claim cards, developmental benefits, an age guide, safety checklist, box contents, parent reviews and a cash-on-delivery trust band.',
    thumbnail: '',
    meta: '',
    content: [
      {
        "id": "kb-hero",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full bg-amber-50" } },
        "children": [
          {
            "id": "kb-hero-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 pt-14 pb-10 flex flex-col items-center text-center gap-5" } },
            "children": [
              {
                "id": "kb-hero-badge",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-amber-200 text-amber-900" } },
                "children": [
                  {
                    "id": "kb-hero-badge-i",
                    "type": "icon",
                    "options": { "iconName": "IconBlocks", "size": "14" },
                    "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                  },
                  {
                    "id": "kb-hero-badge-t",
                    "type": "text",
                    "options": { "text": "500 pieces - age 3 and up - free idea booklet inside", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                  }
                ]
              },
              {
                "id": "kb-hero-title",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-4xl" } },
                "children": [
                  {
                    "id": "kb-hero-h",
                    "type": "heading",
                    "options": { "text": "The toy they keep coming back to -", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight" } }
                  },
                  {
                    "id": "kb-hero-h-accent",
                    "type": "text",
                    "options": { "text": "long after the screen goes off", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-red-500 leading-tight" } }
                  }
                ]
              },
              {
                "id": "kb-hero-t",
                "type": "text",
                "options": { "text": "500 chunky, non-toxic bricks in nine colours. Big enough for small hands, open enough that no two builds come out the same.", "tag": "p" },
                "cssSelectors": { "*": { "classes": "text-base text-slate-600 leading-relaxed max-w-2xl" } }
              },
              {
                "id": "kb-hero-fb-1",
                "type": "featurebox",
                "options": {
                  "tag": "div",
                  "icon": "",
                  "iconSize": "",
                  "items": [
                    {
                      "title": "500 pieces, 9 colours",
                      "description": "Enough to build two models at once without sharing a pile.",
                      "icon": "IconStack2",
                      "iconSize": ""
                    },
                    {
                      "title": "Food grade ABS",
                      "description": "Non-toxic, odourless, and safe to wash in warm soapy water.",
                      "icon": "IconShieldCheck",
                      "iconSize": ""
                    },
                    {
                      "title": "Fits standard bricks",
                      "description": "Clicks onto the big brands, so it extends the set you own.",
                      "icon": "IconPuzzle",
                      "iconSize": ""
                    },
                    {
                      "title": "Storage tub included",
                      "description": "Tidy-up takes one minute, not twenty.",
                      "icon": "IconBox",
                      "iconSize": ""
                    }
                  ]
                },
                "cssSelectors": {
                  "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2" },
                  "loop-item": { "classes": "flex flex-col items-center text-center gap-2 p-5 bg-white border-2 border-amber-100 rounded-3xl" },
                  "title": { "classes": "text-sm font-extrabold text-slate-900" },
                  "description": { "classes": "text-xs text-slate-500 leading-relaxed" },
                  "icon": { "classes": "flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-red-500" }
                },
                "children": [
                  {
                    "id": "kb-hero-fb-2",
                    "type": "icon",
                    "options": { "iconName": "IconStack2", "size": "24" },
                    "cssSelectors": { "*": { "classes": "" } },
                    "children": []
                  },
                  {
                    "id": "kb-hero-fb-3",
                    "type": "featureboxTitle",
                    "options": { "tag": "h3" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  },
                  {
                    "id": "kb-hero-fb-4",
                    "type": "featureboxDetails",
                    "options": { "tag": "p" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  }
                ]
              },
              {
                "id": "kb-hero-cta",
                "type": "button",
                "options": { "text": "Order with cash on delivery", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 18 },
                "cssSelectors": {
                  "*": { "classes": "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors w-fit shadow-lg shadow-red-500/25" },
                  "icon": { "classes": "flex items-center shrink-0" },
                  "label": { "classes": "text-base font-extrabold tracking-wide" }
                }
              },
              {
                "id": "kb-hero-trust",
                "type": "list",
                "options": {
                  "tag": "ul",
                  "icon": "IconCircleCheckFilled",
                  "iconSize": 15,
                  "items": [
                    { "text": "Check the box before you pay", "icon": "" },
                    { "text": "7 day replacement", "icon": "" },
                    { "text": "Delivered nationwide", "icon": "" }
                  ]
                },
                "cssSelectors": {
                  "*": { "classes": "flex flex-wrap items-center justify-center gap-x-5 gap-y-2" },
                  "li": { "classes": "flex items-center gap-1.5" },
                  "icon": { "classes": "empty:hidden shrink-0 flex items-center text-emerald-500" },
                  "text": { "classes": "text-xs font-semibold text-slate-600 whitespace-nowrap" }
                }
              }
            ]
          }
        ]
      },
      {
        "id": "kb-gal",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full bg-amber-50" } },
        "children": [
          {
            "id": "kb-gal-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 pb-16" } },
            "children": [
              {
                "id": "kb-gal-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": { "classes": "grid grid-cols-1 sm:grid-cols-3 gap-5" },
                  "grid-item": { "classes": "" }
                },
                "children": [
                  {
                    "id": "kb-gal-1",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-3xl bg-white border-2 border-amber-100" } },
                    "children": [
                      {
                        "id": "kb-gal-1-img",
                        "type": "image",
                        "options": { "src": "https://placehold.co/600x600?text=Image", "altText": "The full set of bricks spread out on a play mat", "width": "", "height": "" },
                        "cssSelectors": {
                          "*": { "classes": "w-full" },
                          "link": { "classes": "" },
                          "img": { "classes": "w-full aspect-square object-cover bg-amber-100" }
                        }
                      },
                      {
                        "id": "kb-gal-1-cap",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 flex flex-col gap-0.5 px-4 pt-10 pb-4 bg-gradient-to-t from-black/75 to-transparent" } },
                        "children": [
                          {
                            "id": "kb-gal-1-cap-h",
                            "type": "text",
                            "options": { "text": "Nine colours, five brick shapes", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-extrabold text-white" } }
                          },
                          {
                            "id": "kb-gal-1-cap-t",
                            "type": "text",
                            "options": { "text": "Sorted into the tub, ready to tip out", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-[11px] text-white/75 leading-snug" } }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "kb-gal-2",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-3xl bg-white border-2 border-amber-100" } },
                    "children": [
                      {
                        "id": "kb-gal-2-img",
                        "type": "image",
                        "options": { "src": "https://placehold.co/600x600?text=Image", "altText": "A child pressing two bricks together", "width": "", "height": "" },
                        "cssSelectors": {
                          "*": { "classes": "w-full" },
                          "link": { "classes": "" },
                          "img": { "classes": "w-full aspect-square object-cover bg-amber-100" }
                        }
                      },
                      {
                        "id": "kb-gal-2-cap",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 flex flex-col gap-0.5 px-4 pt-10 pb-4 bg-gradient-to-t from-black/75 to-transparent" } },
                        "children": [
                          {
                            "id": "kb-gal-2-cap-h",
                            "type": "text",
                            "options": { "text": "Sized for small hands", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-extrabold text-white" } }
                          },
                          {
                            "id": "kb-gal-2-cap-t",
                            "type": "text",
                            "options": { "text": "Clicks firmly, pulls apart without a grown-up", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-[11px] text-white/75 leading-snug" } }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "kb-gal-3",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-3xl bg-white border-2 border-amber-100" } },
                    "children": [
                      {
                        "id": "kb-gal-3-img",
                        "type": "image",
                        "options": { "src": "https://placehold.co/600x600?text=Image", "altText": "A finished model next to the idea booklet", "width": "", "height": "" },
                        "cssSelectors": {
                          "*": { "classes": "w-full" },
                          "link": { "classes": "" },
                          "img": { "classes": "w-full aspect-square object-cover bg-amber-100" }
                        }
                      },
                      {
                        "id": "kb-gal-3-cap",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 flex flex-col gap-0.5 px-4 pt-10 pb-4 bg-gradient-to-t from-black/75 to-transparent" } },
                        "children": [
                          {
                            "id": "kb-gal-3-cap-h",
                            "type": "text",
                            "options": { "text": "24 models in the booklet", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-extrabold text-white" } }
                          },
                          {
                            "id": "kb-gal-3-cap-t",
                            "type": "text",
                            "options": { "text": "Then thousands more they work out themselves", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-[11px] text-white/75 leading-snug" } }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "kb-learn",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full" } },
        "children": [
          {
            "id": "kb-learn-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-5" } },
            "children": [
              {
                "id": "kb-learn-badge",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-sky-100 text-sky-800" } },
                "children": [
                  {
                    "id": "kb-learn-badge-i",
                    "type": "icon",
                    "options": { "iconName": "IconBrain", "size": "14" },
                    "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                  },
                  {
                    "id": "kb-learn-badge-t",
                    "type": "text",
                    "options": { "text": "Play that does something", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                  }
                ]
              },
              {
                "id": "kb-learn-title",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-3xl" } },
                "children": [
                  {
                    "id": "kb-learn-h",
                    "type": "heading",
                    "options": { "text": "An hour of building teaches", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight" } }
                  },
                  {
                    "id": "kb-learn-h-accent",
                    "type": "text",
                    "options": { "text": "four things at once", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-sky-600 leading-tight" } }
                  }
                ]
              },
              {
                "id": "kb-learn-t",
                "type": "text",
                "options": { "text": "None of it feels like a lesson. That is rather the point.", "tag": "p" },
                "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
              },
              {
                "id": "kb-learn-fb-1",
                "type": "featurebox",
                "options": {
                  "tag": "div",
                  "icon": "",
                  "iconSize": "",
                  "items": [
                    {
                      "title": "Fine motor control",
                      "description": "Lining up studs and pressing them home is pencil-grip practice in disguise.",
                      "icon": "IconHandFinger",
                      "iconSize": ""
                    },
                    {
                      "title": "Spatial reasoning",
                      "description": "Working out which brick fits the gap is the groundwork for maths and geometry.",
                      "icon": "IconCategory2",
                      "iconSize": ""
                    },
                    {
                      "title": "Staying with a task",
                      "description": "A model takes twenty quiet minutes, and finishing it is the reward.",
                      "icon": "IconHourglass",
                      "iconSize": ""
                    },
                    {
                      "title": "Trying again",
                      "description": "A tower that falls is rebuilt taller. That is the whole lesson.",
                      "icon": "IconTower",
                      "iconSize": ""
                    }
                  ]
                },
                "cssSelectors": {
                  "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2" },
                  "loop-item": { "classes": "flex flex-col items-start text-left gap-3 p-6 bg-sky-50 border-2 border-sky-100 rounded-3xl" },
                  "title": { "classes": "text-base font-extrabold text-slate-900" },
                  "description": { "classes": "text-sm text-slate-600 leading-relaxed" },
                  "icon": { "classes": "flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-sky-600" }
                },
                "children": [
                  {
                    "id": "kb-learn-fb-2",
                    "type": "icon",
                    "options": { "iconName": "IconHandFinger", "size": "24" },
                    "cssSelectors": { "*": { "classes": "" } },
                    "children": []
                  },
                  {
                    "id": "kb-learn-fb-3",
                    "type": "featureboxTitle",
                    "options": { "tag": "h3" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  },
                  {
                    "id": "kb-learn-fb-4",
                    "type": "featureboxDetails",
                    "options": { "tag": "p" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "kb-pc",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full bg-amber-50" } },
        "children": [
          {
            "id": "kb-pc-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
            "children": [
              {
                "id": "kb-pc-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" },
                  "grid-item": { "classes": "" }
                },
                "children": [
                  {
                    "id": "kb-pc-bad",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                    "children": [
                      {
                        "id": "kb-pc-bad-badge",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-100" } },
                        "children": [
                          {
                            "id": "kb-pc-bad-badge-i",
                            "type": "icon",
                            "options": { "iconName": "IconDeviceTv", "size": "13" },
                            "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                          },
                          {
                            "id": "kb-pc-bad-badge-t",
                            "type": "text",
                            "options": { "text": "Another hour on the tablet", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-pc-bad-title",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                        "children": [
                          {
                            "id": "kb-pc-bad-h",
                            "type": "heading",
                            "options": { "text": "What most toys do after", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                          },
                          {
                            "id": "kb-pc-bad-h-accent",
                            "type": "text",
                            "options": { "text": "the first week", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-red-500 leading-snug" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-pc-bad-fb-1",
                        "type": "featurebox",
                        "options": {
                          "tag": "div",
                          "icon": "",
                          "iconSize": "",
                          "items": [
                            {
                              "title": "One way to play, then boredom",
                              "description": "A toy with a single trick gets learned in a day and shelved by Sunday.",
                              "icon": "IconAlertTriangle",
                              "iconSize": ""
                            },
                            {
                              "title": "Brittle plastic that snaps",
                              "description": "Thin parts crack the first time they are stepped on, and the set is done.",
                              "icon": "IconAlertTriangle",
                              "iconSize": ""
                            },
                            {
                              "title": "Pieces everywhere, no box",
                              "description": "Without somewhere to put them, half the set is lost under the sofa.",
                              "icon": "IconAlertTriangle",
                              "iconSize": ""
                            },
                            {
                              "title": "Back to the screen",
                              "description": "When the toy stops being interesting, the tablet is still right there.",
                              "icon": "IconAlertTriangle",
                              "iconSize": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "flex flex-col gap-3" },
                          "loop-item": { "classes": "flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-100" },
                          "title": { "classes": "text-sm font-extrabold text-slate-900" },
                          "description": { "classes": "text-xs text-slate-600 mt-1 leading-relaxed" },
                          "icon": { "classes": "shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-amber-100 text-amber-600" }
                        },
                        "children": [
                          {
                            "id": "kb-pc-bad-fb-2",
                            "type": "icon",
                            "options": { "iconName": "IconAlertTriangle", "size": "18" },
                            "cssSelectors": { "*": { "classes": "" } },
                            "children": []
                          },
                          {
                            "id": "kb-pc-bad-fb-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-col" } },
                            "children": [
                              {
                                "id": "kb-pc-bad-fb-4",
                                "type": "featureboxTitle",
                                "options": { "tag": "h3" },
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "img": { "classes": "" }
                                }
                              },
                              {
                                "id": "kb-pc-bad-fb-5",
                                "type": "featureboxDetails",
                                "options": { "tag": "p" },
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "img": { "classes": "" }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "kb-pc-good",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                    "children": [
                      {
                        "id": "kb-pc-good-badge",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100" } },
                        "children": [
                          {
                            "id": "kb-pc-good-badge-i",
                            "type": "icon",
                            "options": { "iconName": "IconBlocks", "size": "13" },
                            "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                          },
                          {
                            "id": "kb-pc-good-badge-t",
                            "type": "text",
                            "options": { "text": "With a tub of bricks", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-pc-good-title",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                        "children": [
                          {
                            "id": "kb-pc-good-h",
                            "type": "heading",
                            "options": { "text": "What happens in", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                          },
                          {
                            "id": "kb-pc-good-h-accent",
                            "type": "text",
                            "options": { "text": "month six instead", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-emerald-600 leading-snug" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-pc-good-fb-1",
                        "type": "featurebox",
                        "options": {
                          "tag": "div",
                          "icon": "",
                          "iconSize": "",
                          "items": [
                            {
                              "title": "A different build every time",
                              "description": "The same 500 pieces become a house, a bridge, a robot, a zoo.",
                              "icon": "IconCircleCheckFilled",
                              "iconSize": ""
                            },
                            {
                              "title": "Thick walls that survive being stood on",
                              "description": "Moulded in food grade ABS at full thickness, not thinned down to save cost.",
                              "icon": "IconCircleCheckFilled",
                              "iconSize": ""
                            },
                            {
                              "title": "Everything lives in the tub",
                              "description": "One container, one lid, and tidying up is part of the game.",
                              "icon": "IconCircleCheckFilled",
                              "iconSize": ""
                            },
                            {
                              "title": "They ask for it by name",
                              "description": "Open-ended play does not run out, so the set keeps earning its shelf space.",
                              "icon": "IconCircleCheckFilled",
                              "iconSize": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "flex flex-col gap-3" },
                          "loop-item": { "classes": "flex items-start gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100" },
                          "title": { "classes": "text-sm font-extrabold text-slate-900" },
                          "description": { "classes": "text-xs text-slate-600 mt-1 leading-relaxed" },
                          "icon": { "classes": "shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500 text-white" }
                        },
                        "children": [
                          {
                            "id": "kb-pc-good-fb-2",
                            "type": "icon",
                            "options": { "iconName": "IconCircleCheckFilled", "size": "18" },
                            "cssSelectors": { "*": { "classes": "" } },
                            "children": []
                          },
                          {
                            "id": "kb-pc-good-fb-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-col" } },
                            "children": [
                              {
                                "id": "kb-pc-good-fb-4",
                                "type": "featureboxTitle",
                                "options": { "tag": "h3" },
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "img": { "classes": "" }
                                }
                              },
                              {
                                "id": "kb-pc-good-fb-5",
                                "type": "featureboxDetails",
                                "options": { "tag": "p" },
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "img": { "classes": "" }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "kb-age",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full" } },
        "children": [
          {
            "id": "kb-age-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-5" } },
            "children": [
              {
                "id": "kb-age-badge",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-amber-200 text-amber-900" } },
                "children": [
                  {
                    "id": "kb-age-badge-i",
                    "type": "icon",
                    "options": { "iconName": "IconMoodKid", "size": "14" },
                    "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                  },
                  {
                    "id": "kb-age-badge-t",
                    "type": "text",
                    "options": { "text": "One set, three stages", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                  }
                ]
              },
              {
                "id": "kb-age-title",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-3xl" } },
                "children": [
                  {
                    "id": "kb-age-h",
                    "type": "heading",
                    "options": { "text": "It grows with them,", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight" } }
                  },
                  {
                    "id": "kb-age-h-accent",
                    "type": "text",
                    "options": { "text": "from three to teenage", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-red-500 leading-tight" } }
                  }
                ]
              },
              {
                "id": "kb-age-t",
                "type": "text",
                "options": { "text": "The bricks do not change. What a child does with them does.", "tag": "p" },
                "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
              },
              {
                "id": "kb-age-fb-1",
                "type": "featurebox",
                "options": {
                  "tag": "div",
                  "icon": "",
                  "iconSize": "",
                  "items": [
                    {
                      "title": "Age 3 to 4: stack and sort",
                      "description": "Towers, colour sorting and naming shapes. Big bricks, no fiddly parts, adult nearby.",
                      "icon": "IconStack2",
                      "iconSize": ""
                    },
                    {
                      "title": "Age 5 to 7: follow a model",
                      "description": "The booklet's 24 builds, step by step, then their own versions of each one.",
                      "icon": "IconBuildingCastle",
                      "iconSize": ""
                    },
                    {
                      "title": "Age 8 and up: free build",
                      "description": "No instructions at all. Working vehicles, moving doors, whole streets.",
                      "icon": "IconBulb",
                      "iconSize": ""
                    }
                  ]
                },
                "cssSelectors": {
                  "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2" },
                  "loop-item": { "classes": "flex flex-col items-center text-center gap-3 p-7 bg-white border-2 border-amber-100 rounded-3xl" },
                  "title": { "classes": "text-base font-extrabold text-slate-900" },
                  "description": { "classes": "text-sm text-slate-600 leading-relaxed" },
                  "icon": { "classes": "flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-red-500" }
                },
                "children": [
                  {
                    "id": "kb-age-fb-2",
                    "type": "icon",
                    "options": { "iconName": "IconStack2", "size": "26" },
                    "cssSelectors": { "*": { "classes": "" } },
                    "children": []
                  },
                  {
                    "id": "kb-age-fb-3",
                    "type": "featureboxTitle",
                    "options": { "tag": "h3" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  },
                  {
                    "id": "kb-age-fb-4",
                    "type": "featureboxDetails",
                    "options": { "tag": "p" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  }
                ]
              },
              {
                "id": "kb-age-cta",
                "type": "button",
                "options": { "text": "Get the set at the offer price", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconGift", "iconSize": 18 },
                "cssSelectors": {
                  "*": { "classes": "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors w-fit shadow-lg shadow-red-500/25" },
                  "icon": { "classes": "flex items-center shrink-0" },
                  "label": { "classes": "text-base font-extrabold tracking-wide" }
                }
              }
            ]
          }
        ]
      },
      {
        "id": "kb-safe",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full bg-sky-50" } },
        "children": [
          {
            "id": "kb-safe-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
            "children": [
              {
                "id": "kb-safe-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                  "grid-item": { "classes": "" }
                },
                "children": [
                  {
                    "id": "kb-safe-art",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "kb-safe-img",
                        "type": "image",
                        "options": { "src": "https://placehold.co/800x800?text=Image", "altText": "Close up of a brick showing the rounded edge and smooth finish", "width": "", "height": "" },
                        "cssSelectors": {
                          "*": { "classes": "w-full" },
                          "link": { "classes": "" },
                          "img": { "classes": "w-full aspect-square object-cover rounded-3xl bg-white" }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kb-safe-copy",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                    "children": [
                      {
                        "id": "kb-safe-badge",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-white text-sky-800 border border-sky-100" } },
                        "children": [
                          {
                            "id": "kb-safe-badge-i",
                            "type": "icon",
                            "options": { "iconName": "IconCertificate", "size": "13" },
                            "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                          },
                          {
                            "id": "kb-safe-badge-t",
                            "type": "text",
                            "options": { "text": "Safety you can check yourself", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-safe-title",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                        "children": [
                          {
                            "id": "kb-safe-h",
                            "type": "heading",
                            "options": { "text": "Food grade ABS, rounded edges,", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                          },
                          {
                            "id": "kb-safe-h-accent",
                            "type": "text",
                            "options": { "text": "no sharp corners anywhere", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-sky-600 leading-snug" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-safe-t",
                        "type": "text",
                        "options": { "text": "Cheap bricks are moulded from recycled offcuts and finished badly. These are moulded from virgin food grade ABS, tumbled smooth, and every brick in the set is larger than the small-parts gauge for the stated age.", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-xl" } }
                      },
                      {
                        "id": "kb-safe-list",
                        "type": "list",
                        "options": {
                          "tag": "ul",
                          "icon": "IconCircleCheckFilled",
                          "iconSize": 18,
                          "items": [
                            { "text": "Non-toxic, odourless, BPA and phthalate free", "icon": "" },
                            { "text": "Every edge tumbled smooth, no moulding flash", "icon": "" },
                            { "text": "Colourfast dye that will not bleed when washed", "icon": "" },
                            { "text": "Tested to EN71 and ASTM F963 toy safety standards", "icon": "" }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "flex flex-col gap-2.5" },
                          "li": { "classes": "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-sky-100" },
                          "icon": { "classes": "empty:hidden shrink-0 flex items-center text-emerald-500" },
                          "text": { "classes": "text-sm font-semibold text-slate-800 leading-snug" }
                        }
                      },
                      {
                        "id": "kb-safe-cta",
                        "type": "button",
                        "options": { "text": "Order now", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors w-fit shadow-lg shadow-red-500/25" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-extrabold tracking-wide" }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "kb-fit",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full" } },
        "children": [
          {
            "id": "kb-fit-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
            "children": [
              {
                "id": "kb-fit-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                  "grid-item": { "classes": "" }
                },
                "children": [
                  {
                    "id": "kb-fit-copy",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                    "children": [
                      {
                        "id": "kb-fit-badge",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-amber-200 text-amber-900" } },
                        "children": [
                          {
                            "id": "kb-fit-badge-i",
                            "type": "icon",
                            "options": { "iconName": "IconPuzzle", "size": "13" },
                            "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                          },
                          {
                            "id": "kb-fit-badge-t",
                            "type": "text",
                            "options": { "text": "Works with what they already have", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-fit-title",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                        "children": [
                          {
                            "id": "kb-fit-h",
                            "type": "heading",
                            "options": { "text": "Standard stud spacing, so it", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                          },
                          {
                            "id": "kb-fit-h-accent",
                            "type": "text",
                            "options": { "text": "clicks onto the big brands", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-red-500 leading-snug" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-fit-t",
                        "type": "text",
                        "options": { "text": "Moulded to the standard 8mm stud pitch, which means this is not a set that has to live on its own. Tip it into the box they already own and the collection simply gets bigger.", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-xl" } }
                      },
                      {
                        "id": "kb-fit-list",
                        "type": "list",
                        "options": {
                          "tag": "ul",
                          "icon": "IconCircleCheckFilled",
                          "iconSize": 18,
                          "items": [
                            { "text": "Clutch power tested for 10,000 connections", "icon": "" },
                            { "text": "Five brick shapes plus two baseplates", "icon": "" },
                            { "text": "Firm enough to hold, easy enough to pull apart", "icon": "" }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "flex flex-col gap-2.5" },
                          "li": { "classes": "flex items-center gap-3 px-4 py-3 rounded-2xl bg-amber-50 border border-amber-100" },
                          "icon": { "classes": "empty:hidden shrink-0 flex items-center text-emerald-500" },
                          "text": { "classes": "text-sm font-semibold text-slate-800 leading-snug" }
                        }
                      },
                      {
                        "id": "kb-fit-cta",
                        "type": "button",
                        "options": { "text": "Order now", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors w-fit shadow-lg shadow-red-500/25" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-extrabold tracking-wide" }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kb-fit-art",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "kb-fit-img",
                        "type": "image",
                        "options": { "src": "https://placehold.co/800x800?text=Image", "altText": "Two bricks of different brands clicked together", "width": "", "height": "" },
                        "cssSelectors": {
                          "*": { "classes": "w-full" },
                          "link": { "classes": "" },
                          "img": { "classes": "w-full aspect-square object-cover rounded-3xl bg-amber-100" }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "kb-box",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full bg-amber-50" } },
        "children": [
          {
            "id": "kb-box-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-5" } },
            "children": [
              {
                "id": "kb-box-badge",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-white text-amber-900 border border-amber-200" } },
                "children": [
                  {
                    "id": "kb-box-badge-i",
                    "type": "icon",
                    "options": { "iconName": "IconPackage", "size": "14" },
                    "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                  },
                  {
                    "id": "kb-box-badge-t",
                    "type": "text",
                    "options": { "text": "Everything in one tub", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                  }
                ]
              },
              {
                "id": "kb-box-title",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-3xl" } },
                "children": [
                  {
                    "id": "kb-box-h",
                    "type": "heading",
                    "options": { "text": "What is actually", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight" } }
                  },
                  {
                    "id": "kb-box-h-accent",
                    "type": "text",
                    "options": { "text": "in the box", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-red-500 leading-tight" } }
                  }
                ]
              },
              {
                "id": "kb-box-fb-1",
                "type": "featurebox",
                "options": {
                  "tag": "div",
                  "icon": "",
                  "iconSize": "",
                  "items": [
                    {
                      "title": "500 bricks in 9 colours",
                      "description": "Five shapes, from 2x2 up to 2x8, counted and checked.",
                      "icon": "IconStack2",
                      "iconSize": ""
                    },
                    {
                      "title": "2 baseplates",
                      "description": "A solid footing so tall builds stay standing.",
                      "icon": "IconLayoutGrid",
                      "iconSize": ""
                    },
                    {
                      "title": "24 model idea booklet",
                      "description": "Step by step builds, easiest first.",
                      "icon": "IconBulb",
                      "iconSize": ""
                    },
                    {
                      "title": "Storage tub with lid",
                      "description": "Stackable, and it doubles as the sorting tray.",
                      "icon": "IconBox",
                      "iconSize": ""
                    }
                  ]
                },
                "cssSelectors": {
                  "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2" },
                  "loop-item": { "classes": "flex flex-col items-center text-center gap-2 p-5 bg-white border-2 border-amber-100 rounded-3xl" },
                  "title": { "classes": "text-sm font-extrabold text-slate-900" },
                  "description": { "classes": "text-xs text-slate-500 leading-relaxed" },
                  "icon": { "classes": "flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-red-500" }
                },
                "children": [
                  {
                    "id": "kb-box-fb-2",
                    "type": "icon",
                    "options": { "iconName": "IconStack2", "size": "24" },
                    "cssSelectors": { "*": { "classes": "" } },
                    "children": []
                  },
                  {
                    "id": "kb-box-fb-3",
                    "type": "featureboxTitle",
                    "options": { "tag": "h3" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  },
                  {
                    "id": "kb-box-fb-4",
                    "type": "featureboxDetails",
                    "options": { "tag": "p" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "kb-rev",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full" } },
        "children": [
          {
            "id": "kb-rev-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-8" } },
            "children": [
              {
                "id": "kb-rev-title",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-3xl" } },
                "children": [
                  {
                    "id": "kb-rev-h",
                    "type": "heading",
                    "options": { "text": "What parents say", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight" } }
                  },
                  {
                    "id": "kb-rev-h-accent",
                    "type": "text",
                    "options": { "text": "after a month", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-sky-600 leading-tight" } }
                  }
                ]
              },
              {
                "id": "kb-rev-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-3 gap-5" },
                  "grid-item": { "classes": "" }
                },
                "children": [
                  {
                    "id": "kb-rev-1",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-col gap-3 p-6 text-left bg-sky-50 border-2 border-sky-100 rounded-3xl" } },
                    "children": [
                      {
                        "id": "kb-rev-1-stars",
                        "type": "list",
                        "options": {
                          "tag": "ul",
                          "icon": "IconStarFilled",
                          "iconSize": 15,
                          "items": [
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center gap-0.5" },
                          "li": { "classes": "flex items-center" },
                          "icon": { "classes": "empty:hidden flex items-center text-amber-500" },
                          "text": { "classes": "hidden" }
                        }
                      },
                      {
                        "id": "kb-rev-1-q",
                        "type": "text",
                        "options": { "text": "Bought it for my five year old and my eight year old has taken it over. They now build together on the floor every evening instead of fighting over the tablet.", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "text-sm text-slate-700 leading-relaxed" } }
                      },
                      {
                        "id": "kb-rev-1-by",
                        "type": "text",
                        "options": { "text": "Verified buyer - replace with a real review", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-xs font-semibold text-slate-500" } }
                      }
                    ]
                  },
                  {
                    "id": "kb-rev-2",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-col gap-3 p-6 text-left bg-sky-50 border-2 border-sky-100 rounded-3xl" } },
                    "children": [
                      {
                        "id": "kb-rev-2-stars",
                        "type": "list",
                        "options": {
                          "tag": "ul",
                          "icon": "IconStarFilled",
                          "iconSize": 15,
                          "items": [
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center gap-0.5" },
                          "li": { "classes": "flex items-center" },
                          "icon": { "classes": "empty:hidden flex items-center text-amber-500" },
                          "text": { "classes": "hidden" }
                        }
                      },
                      {
                        "id": "kb-rev-2-q",
                        "type": "text",
                        "options": { "text": "The plastic is noticeably thicker than the cheap set we had before. Nothing has cracked, and we have stood on plenty of it.", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "text-sm text-slate-700 leading-relaxed" } }
                      },
                      {
                        "id": "kb-rev-2-by",
                        "type": "text",
                        "options": { "text": "Verified buyer - replace with a real review", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-xs font-semibold text-slate-500" } }
                      }
                    ]
                  },
                  {
                    "id": "kb-rev-3",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-col gap-3 p-6 text-left bg-sky-50 border-2 border-sky-100 rounded-3xl" } },
                    "children": [
                      {
                        "id": "kb-rev-3-stars",
                        "type": "list",
                        "options": {
                          "tag": "ul",
                          "icon": "IconStarFilled",
                          "iconSize": 15,
                          "items": [
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" },
                            { "text": "", "icon": "" }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center gap-0.5" },
                          "li": { "classes": "flex items-center" },
                          "icon": { "classes": "empty:hidden flex items-center text-amber-500" },
                          "text": { "classes": "hidden" }
                        }
                      },
                      {
                        "id": "kb-rev-3-q",
                        "type": "text",
                        "options": { "text": "It fits the bricks we already had, which I did not expect at this price. The tub is the part I appreciate most, honestly.", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "text-sm text-slate-700 leading-relaxed" } }
                      },
                      {
                        "id": "kb-rev-3-by",
                        "type": "text",
                        "options": { "text": "Verified buyer - replace with a real review", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-xs font-semibold text-slate-500" } }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "kb-spec",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full bg-amber-50" } },
        "children": [
          {
            "id": "kb-spec-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
            "children": [
              {
                "id": "kb-spec-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                  "grid-item": { "classes": "" }
                },
                "children": [
                  {
                    "id": "kb-spec-art",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "kb-spec-img",
                        "type": "image",
                        "options": { "src": "https://placehold.co/800x800?text=Image", "altText": "The retail box photographed from the front", "width": "", "height": "" },
                        "cssSelectors": {
                          "*": { "classes": "w-full" },
                          "link": { "classes": "" },
                          "img": { "classes": "w-full aspect-square object-cover rounded-3xl bg-white" }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kb-spec-copy",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                    "children": [
                      {
                        "id": "kb-spec-badge",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-white text-amber-900 border border-amber-200" } },
                        "children": [
                          {
                            "id": "kb-spec-badge-i",
                            "type": "icon",
                            "options": { "iconName": "IconClipboardList", "size": "13" },
                            "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                          },
                          {
                            "id": "kb-spec-badge-t",
                            "type": "text",
                            "options": { "text": "The details", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-spec-title",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                        "children": [
                          {
                            "id": "kb-spec-h",
                            "type": "heading",
                            "options": { "text": "Everything about this set", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                          },
                          {
                            "id": "kb-spec-h-accent",
                            "type": "text",
                            "options": { "text": "in one table", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-red-500 leading-snug" } }
                          }
                        ]
                      },
                      {
                        "id": "kb-spec-table",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full rounded-3xl border-2 border-amber-100 bg-white overflow-hidden divide-y divide-amber-100" } },
                        "children": [
                          {
                            "id": "kb-spec-r1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                            "children": [
                              {
                                "id": "kb-spec-r1-k",
                                "type": "text",
                                "options": { "text": "Product name", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-extrabold text-slate-900" } }
                              },
                              {
                                "id": "kb-spec-r1-v",
                                "type": "text",
                                "options": { "text": "500 Piece Building Block Set with Storage Tub", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                              }
                            ]
                          },
                          {
                            "id": "kb-spec-r2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                            "children": [
                              {
                                "id": "kb-spec-r2-k",
                                "type": "text",
                                "options": { "text": "Piece count", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-extrabold text-slate-900" } }
                              },
                              {
                                "id": "kb-spec-r2-v",
                                "type": "text",
                                "options": { "text": "500 bricks in 5 shapes and 9 colours, plus 2 baseplates", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                              }
                            ]
                          },
                          {
                            "id": "kb-spec-r3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                            "children": [
                              {
                                "id": "kb-spec-r3-k",
                                "type": "text",
                                "options": { "text": "Recommended age", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-extrabold text-slate-900" } }
                              },
                              {
                                "id": "kb-spec-r3-v",
                                "type": "text",
                                "options": { "text": "3 years and up, with supervision under 4", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                              }
                            ]
                          },
                          {
                            "id": "kb-spec-r4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                            "children": [
                              {
                                "id": "kb-spec-r4-k",
                                "type": "text",
                                "options": { "text": "Material", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-extrabold text-slate-900" } }
                              },
                              {
                                "id": "kb-spec-r4-v",
                                "type": "text",
                                "options": { "text": "Virgin food grade ABS, non-toxic, BPA and phthalate free", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                              }
                            ]
                          },
                          {
                            "id": "kb-spec-r5",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                            "children": [
                              {
                                "id": "kb-spec-r5-k",
                                "type": "text",
                                "options": { "text": "Compatibility", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-extrabold text-slate-900" } }
                              },
                              {
                                "id": "kb-spec-r5-v",
                                "type": "text",
                                "options": { "text": "Standard 8mm stud pitch, fits mainstream brick brands", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                              }
                            ]
                          },
                          {
                            "id": "kb-spec-r6",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                            "children": [
                              {
                                "id": "kb-spec-r6-k",
                                "type": "text",
                                "options": { "text": "Safety standards", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-extrabold text-slate-900" } }
                              },
                              {
                                "id": "kb-spec-r6-v",
                                "type": "text",
                                "options": { "text": "Tested to EN71 and ASTM F963", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                              }
                            ]
                          },
                          {
                            "id": "kb-spec-r7",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                            "children": [
                              {
                                "id": "kb-spec-r7-k",
                                "type": "text",
                                "options": { "text": "In the box", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-extrabold text-slate-900" } }
                              },
                              {
                                "id": "kb-spec-r7-v",
                                "type": "text",
                                "options": { "text": "Bricks, 2 baseplates, 24 model idea booklet, storage tub with lid", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                              }
                            ]
                          },
                          {
                            "id": "kb-spec-r8",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                            "children": [
                              {
                                "id": "kb-spec-r8-k",
                                "type": "text",
                                "options": { "text": "Warranty policy", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-extrabold text-slate-900" } }
                              },
                              {
                                "id": "kb-spec-r8-v",
                                "type": "text",
                                "options": { "text": "7 day replacement on any missing or faulty piece", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kb-spec-cta",
                        "type": "button",
                        "options": { "text": "Order now", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors w-fit shadow-lg shadow-red-500/25" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-extrabold tracking-wide" }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "kb-cod",
        "type": "section",
        "options": {},
        "cssSelectors": { "*": { "classes": "w-full bg-slate-900" } },
        "children": [
          {
            "id": "kb-cod-in",
            "type": "container",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-5" } },
            "children": [
              {
                "id": "kb-cod-badge",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-white/10 text-amber-300" } },
                "children": [
                  {
                    "id": "kb-cod-badge-i",
                    "type": "icon",
                    "options": { "iconName": "IconShieldCheck", "size": "14" },
                    "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                  },
                  {
                    "id": "kb-cod-badge-t",
                    "type": "text",
                    "options": { "text": "No risk to you", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-xs font-bold tracking-wide" } }
                  }
                ]
              },
              {
                "id": "kb-cod-title",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-3xl" } },
                "children": [
                  {
                    "id": "kb-cod-h",
                    "type": "heading",
                    "options": { "text": "Count the pieces,", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight" } }
                  },
                  {
                    "id": "kb-cod-h-accent",
                    "type": "text",
                    "options": { "text": "then pay the rider", "tag": "span" },
                    "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-amber-400 leading-tight" } }
                  }
                ]
              },
              {
                "id": "kb-cod-fb-1",
                "type": "featurebox",
                "options": {
                  "tag": "div",
                  "icon": "",
                  "iconSize": "",
                  "items": [
                    {
                      "title": "Cash on home delivery",
                      "description": "No advance payment. Pay once the box is in your hand.",
                      "icon": "IconTruckDelivery",
                      "iconSize": ""
                    },
                    {
                      "title": "Open and check first",
                      "description": "Open the tub in front of the rider and count the bricks.",
                      "icon": "IconPackage",
                      "iconSize": ""
                    },
                    {
                      "title": "7 day replacement",
                      "description": "Missing or broken pieces replaced, no argument.",
                      "icon": "IconRefresh",
                      "iconSize": ""
                    },
                    {
                      "title": "Talk to a person",
                      "description": "Call or message on WhatsApp any day, 9am to 10pm.",
                      "icon": "IconMessageCircle",
                      "iconSize": ""
                    }
                  ]
                },
                "cssSelectors": {
                  "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2" },
                  "loop-item": { "classes": "flex flex-col items-center text-center gap-2 p-5 bg-white rounded-3xl" },
                  "title": { "classes": "text-sm font-extrabold text-slate-900" },
                  "description": { "classes": "text-xs text-slate-500 leading-relaxed" },
                  "icon": { "classes": "flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-red-500" }
                },
                "children": [
                  {
                    "id": "kb-cod-fb-2",
                    "type": "icon",
                    "options": { "iconName": "IconTruckDelivery", "size": "24" },
                    "cssSelectors": { "*": { "classes": "" } },
                    "children": []
                  },
                  {
                    "id": "kb-cod-fb-3",
                    "type": "featureboxTitle",
                    "options": { "tag": "h3" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  },
                  {
                    "id": "kb-cod-fb-4",
                    "type": "featureboxDetails",
                    "options": { "tag": "p" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "img": { "classes": "" }
                    }
                  }
                ]
              },
              {
                "id": "kb-cod-actions",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-3" } },
                "children": [
                  {
                    "id": "kb-cod-cta",
                    "type": "button",
                    "options": { "text": "Order the set", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconShoppingCartPlus", "iconSize": 18 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors w-fit shadow-lg shadow-red-500/25" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-base font-extrabold tracking-wide" }
                    }
                  },
                  {
                    "id": "kb-cod-call",
                    "type": "button",
                    "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/25 text-white cursor-pointer hover:bg-white/10 transition-colors w-fit" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-base font-bold tracking-wide" }
                    }
                  },
                  {
                    "id": "kb-cod-wa",
                    "type": "whatsappButton",
                    "options": {
                      "label": "Order on WhatsApp",
                      "phone": "",
                      "message": "Hi, I want to order the 500 piece building block set.",
                      "icon": "IconBrandWhatsapp",
                      "iconSize": 18
                    },
                    "cssSelectors": {
                      "*": { "classes": "w-fit" },
                      "link": { "classes": "flex gap-2 items-center px-6 py-4 rounded-full bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-bold whitespace-nowrap" }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
  },
]

export default landingPages;
