/**
 * Template: ComboStore.
 *
 * Built from the rendered homepage of https://combostore.bd -- the platform's
 * own marketing site, not a shop. Same shape as the other files here: one
 * template object, `pages` holding one entry per page type, each `content` an
 * ARRAY of builder blocks. The API stores a page's content as a JSON STRING
 * (Templates.jsx calls `isJsonString` and then `JSON.parse`), so whatever
 * applies this template must `JSON.stringify(page.content)` per page.
 *
 * ONLY THREE PARTS
 *
 * Header, Footer and Home, as asked. "Header" and "Footer" are template parts,
 * not pages: they carry type 'header' and 'footer', the two part types
 * PanelsLeft.jsx passes to TemplateParts.jsx, and each holds exactly one
 * siteHeader / siteFooter block. There is no Shop, Product, Account, Blog or
 * 404 entry below, so applying this template leaves whatever those pages
 * already hold untouched -- unlike the other templates in this folder, it is
 * not a complete storefront on its own.
 *
 * Because the source is a landing page, the header carries anchor links and a
 * deploy button rather than a cart and a search field. Add a `cart` and a
 * `quickSearch` block to `cs-hdr-actions` before using it as a shop header.
 *
 * WHERE THE DESIGN CAME FROM
 *
 * Every colour on the site is a Tailwind stop, so unlike GhorerBazar.js there
 * is not one arbitrary value in here -- the classes below are plain utilities:
 *
 *   emerald-600  #009767  primary. Buttons, the logo monogram, icon tiles,
 *                         check marks, and every accent on a light section.
 *   emerald-400  #00d294  the same accent on the dark sections, where 600 is
 *                         too dark to read against zinc-950.
 *   emerald-50 / 100      icon-tile and draft-panel tints.
 *   zinc-950              the architecture band and the closing CTA panel.
 *   zinc-900 / 600 / 500  headings, body copy, muted labels.
 *   zinc-200              every hairline; zinc-50 the banded sections.
 *
 * The header is the site's: sticky, white at 85% with a backdrop blur, a
 * hairline under it, an emerald monogram beside the wordmark, four anchor links
 * (Platform, Features, AI, Payments), the EN / Bangla switch, and the Deploy on
 * Vercel button pointing at /onboard.
 *
 * The homepage order and its headings are the site's, section for section:
 *
 *   1. hero                    badge, headline, two buttons, two reassurance
 *                              notes, a mock storefront card, a stats row
 *   2. The architecture        three numbered cards on zinc-950, then a
 *                              three-item feature row
 *   3. Everything included     nine module cards, three across
 *   4. AI, built in            four bullets beside a mock assistant panel
 *   5. Checkout that fits Bangladesh   four payment cards
 *   6. closing CTA             heading, one line, two buttons on zinc-950
 *
 * Each of the four middle sections opens with a small uppercase kicker above
 * its h2, which is why they start with a text block rather than a bare heading.
 * The nine module cards and the four payment cards are one featurebox each --
 * their items carry icon, title and description, which is exactly the card --
 * while the three numbered architecture cards are a grid, because a featurebox
 * item has no slot for the "01" above the title.
 *
 * The section headings, the nav and footer labels, the nine module names, the
 * four payment names and the stats row are the site's. Every line of body copy
 * here is written for this template rather than lifted from the site, and the
 * hotline, email and address are placeholders rather than real details.
 *
 * Three things to fill in before this goes live: the hotline, email and address
 * in the footer, the four hero product images (placehold.co stand-ins), and the
 * EN / Bangla buttons, which are styled but inert -- no block switches locale,
 * so they link to `/` and `/bn`.
 *
 * Renderer quirks these blocks are written around:
 *
 *   - Buttons set `linkTo: "custom"` and both `scheme` and `url`: Button.jsx
 *     only renders a <Link> for 'custom', and builds the href as
 *     `${scheme}${url}`, so an unset scheme prints the string "undefined".
 *   - Logo.jsx renders EITHER `logoText` or `src`, never both, so the emerald
 *     "CS" monogram is a text block beside the logo rather than part of it. It
 *     is decoration, not a second link home.
 *   - featurebox styles its repeat through 'loop-item', 'title', 'description'
 *     and 'icon'; the icon only renders for an item that sets `icon`, and
 *     `iconSize` is per item.
 *   - list renders `items` as `tag` with 'li', 'icon' and 'text' selectors. The
 *     check-mark rows are lists rather than featureboxes so they stay one line.
 *   - The hero's mock storefront is image and text blocks, not a product loop:
 *     postGrid would need a real query and would show whatever the shop
 *     actually sells, which is not what an illustration is for.
 *
 * Two things the site has and this does not: the mobile nav sheet behind the
 * hamburger, and the scroll-spy that highlights the current anchor -- neither
 * has a block to carry it, so the nav is hidden below `md` as the site's is.
 */

var template = [
  {

    "name": "ComboStore",
    "description": "Platform landing theme in emerald on zinc: a sticky anchor-nav header, a hero with a mock storefront, a dark architecture band, nine module cards, four payment cards and a dark closing CTA. Header, footer and home only.",
    "thumbnail": "/templates/combo-store.svg",
    "meta": "",
    "pages": [

      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "cs-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md" } },
            "children": [
              {
                "id": "cs-hdr-row",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": { "classes": "mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5" },
                  "column": { "classes": "" }
                },
                "children": [
                  {
                    "id": "cs-hdr-brand",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex shrink-0 items-center gap-2.5" } },
                    "children": [
                      {
                        "id": "cs-hdr-mark",
                        "type": "text",
                        "options": { "text": "CS", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "flex size-8 items-center justify-center rounded-xl bg-emerald-600 text-[13px] font-bold text-white" } }
                      },
                      {
                        "id": "cs-hdr-logo",
                        "type": "logo",
                        "options": { "logoType": "text", "logoText": "ComboStore", "src": "https://placehold.co/200x64?text=Logo", "link": "/" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "link": { "classes": "inline-block" },
                          "img": { "classes": "h-8 w-auto object-contain" },
                          "text": { "classes": "text-[17px] font-semibold tracking-tight text-zinc-900" }
                        }
                      }
                    ]
                  },
                  {
                    "id": "cs-hdr-nav-col",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "hidden md:block" } },
                    "children": [
                      {
                        "id": "cs-hdr-menu",
                        "type": "menu",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "menu": { "classes": "flex items-center gap-7 text-sm font-medium text-zinc-600" },
                          "menu-item": { "classes": "" },
                          "sub-menu": { "classes": "rounded-xl border border-zinc-200 bg-white shadow-lg py-2 min-w-52" },
                          "menu-link": { "classes": "transition-colors hover:text-emerald-700 whitespace-nowrap" },
                          "link-label": { "classes": "" },
                          "icon": { "classes": "" }
                        },
                        "children": [
                          { "id": "cs-hdr-mi-1", "type": "menuItem", "options": { "label": "Platform", "url": "/#platform" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "cs-hdr-mi-2", "type": "menuItem", "options": { "label": "Features", "url": "/#features" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "cs-hdr-mi-3", "type": "menuItem", "options": { "label": "AI", "url": "/#ai" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "cs-hdr-mi-4", "type": "menuItem", "options": { "label": "Payments", "url": "/#payments" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "cs-hdr-actions",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                    "children": [
                      {
                        "id": "cs-hdr-lang",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "hidden sm:flex items-center gap-0.5 rounded-full border border-zinc-200 bg-white p-0.5" } },
                        "children": [
                          {
                            "id": "cs-hdr-lang-en",
                            "type": "button",
                            "options": { "text": "EN", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "", "iconSize": 14 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center rounded-full bg-zinc-900 px-2.5 py-1 cursor-pointer" },
                              "icon": { "classes": "" },
                              "label": { "classes": "text-xs font-semibold text-white" }
                            }
                          },
                          {
                            "id": "cs-hdr-lang-bn",
                            "type": "button",
                            "options": { "text": "বাং", "linkTo": "custom", "scheme": "", "url": "/bn", "target": "", "icon": "", "iconSize": 14 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center rounded-full px-2.5 py-1 cursor-pointer transition-colors hover:bg-zinc-100" },
                              "icon": { "classes": "" },
                              "label": { "classes": "text-xs font-medium text-zinc-500" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "cs-hdr-deploy",
                        "type": "button",
                        "options": { "text": "Deploy on Vercel", "linkTo": "custom", "scheme": "", "url": "/onboard", "target": "", "icon": "IconBrandVercel", "iconSize": 15 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 cursor-pointer transition-colors hover:bg-emerald-700" },
                          "icon": { "classes": "flex items-center shrink-0 text-white" },
                          "label": { "classes": "text-sm font-semibold text-white whitespace-nowrap" }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": "",
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "cs-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-zinc-200 bg-zinc-50" } },
            "children": [
              {
                "id": "cs-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto max-w-6xl px-6 py-14" } },
                "children": [
                  {
                    "id": "cs-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "cs-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex max-w-xs flex-col gap-3.5" } },
                        "children": [
                          {
                            "id": "cs-ftr-brand-row",
                            "type": "columns",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-2.5" },
                              "column": { "classes": "" }
                            },
                            "children": [
                              {
                                "id": "cs-ftr-brand-col",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex items-center gap-2.5" } },
                                "children": [
                                  {
                                    "id": "cs-ftr-mark",
                                    "type": "text",
                                    "options": { "text": "CS", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "flex size-8 items-center justify-center rounded-xl bg-emerald-600 text-[13px] font-bold text-white" } }
                                  },
                                  {
                                    "id": "cs-ftr-logo",
                                    "type": "logo",
                                    "options": { "logoType": "text", "logoText": "ComboStore", "src": "https://placehold.co/200x64?text=Logo", "link": "/" },
                                    "cssSelectors": {
                                      "*": { "classes": "" },
                                      "link": { "classes": "inline-block" },
                                      "img": { "classes": "h-8 w-auto object-contain" },
                                      "text": { "classes": "text-[17px] font-semibold tracking-tight text-zinc-900" }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "cs-ftr-tagline",
                            "type": "text",
                            "options": { "text": "Headless ecommerce for Bangladeshi sellers: a Next.js storefront, a WordPress back office, and local payments wired in from the first deploy.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm leading-relaxed text-zinc-600" } }
                          },
                          {
                            "id": "cs-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": { "icon": "IconHeadset", "label": "Hotline", "value": "01XXXXXXXXX" },
                              "email": { "icon": "IconMail", "label": "Email", "value": "hello@example.com" },
                              "location": { "icon": "IconMapPin", "label": "Location", "value": "Dhaka, Bangladesh" },
                              "iconSize": 17
                            },
                            "cssSelectors": {
                              "*": { "classes": "mt-1 flex flex-col gap-2 text-sm text-zinc-600" },
                              "item": { "classes": "flex items-start gap-2" },
                              "link": { "classes": "flex items-center gap-2 transition-colors hover:text-emerald-700" },
                              "phone-link": { "classes": "" },
                              "email-link": { "classes": "" },
                              "icon": { "classes": "shrink-0 text-emerald-600" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "cs-ftr-gi-platform",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "cs-ftr-ll-platform",
                            "type": "linkList",
                            "options": {
                              "headerText": "Platform",
                              "tag": "ul",
                              "items": [
                                { "text": "Architecture", "icon": "", "slug": "/#platform" },
                                { "text": "Features", "icon": "", "slug": "/#features" },
                                { "text": "AI assistant", "icon": "", "slug": "/#ai" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-xs font-semibold uppercase tracking-widest text-zinc-500" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 transition-colors hover:text-emerald-700" },
                              "icon": { "classes": "text-zinc-400" },
                              "text": { "classes": "text-sm text-zinc-600" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "cs-ftr-gi-payments",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "cs-ftr-ll-payments",
                            "type": "linkList",
                            "options": {
                              "headerText": "Payments",
                              "tag": "ul",
                              "items": [
                                { "text": "bKash", "icon": "", "slug": "/#payments" },
                                { "text": "Nagad", "icon": "", "slug": "/#payments" },
                                { "text": "Rocket", "icon": "", "slug": "/#payments" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-xs font-semibold uppercase tracking-widest text-zinc-500" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 transition-colors hover:text-emerald-700" },
                              "icon": { "classes": "text-zinc-400" },
                              "text": { "classes": "text-sm text-zinc-600" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "cs-ftr-gi-company",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "cs-ftr-ll-company",
                            "type": "linkList",
                            "options": {
                              "headerText": "Company",
                              "tag": "ul",
                              "items": [
                                { "text": "Contact", "icon": "", "slug": "/#contact" },
                                { "text": "Deploy on Vercel", "icon": "", "slug": "/onboard" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-xs font-semibold uppercase tracking-widest text-zinc-500" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 transition-colors hover:text-emerald-700" },
                              "icon": { "classes": "text-zinc-400" },
                              "text": { "classes": "text-sm text-zinc-600" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "cs-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-zinc-200" } },
                "children": [
                  {
                    "id": "cs-ftr-bottom-row",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "cs-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "cs-ftr-copy",
                            "type": "text",
                            "options": { "text": "(c) 2026 ComboStore. Made for Bangladesh.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-zinc-500" } }
                          }
                        ]
                      },
                      {
                        "id": "cs-ftr-lang-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 rounded-full border border-zinc-200 bg-white p-0.5" } },
                        "children": [
                          {
                            "id": "cs-ftr-lang-en",
                            "type": "button",
                            "options": { "text": "EN", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "", "iconSize": 14 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center rounded-full bg-zinc-900 px-2.5 py-1 cursor-pointer" },
                              "icon": { "classes": "" },
                              "label": { "classes": "text-xs font-semibold text-white" }
                            }
                          },
                          {
                            "id": "cs-ftr-lang-bn",
                            "type": "button",
                            "options": { "text": "বাং", "linkTo": "custom", "scheme": "", "url": "/bn", "target": "", "icon": "", "iconSize": 14 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center rounded-full px-2.5 py-1 cursor-pointer transition-colors hover:bg-zinc-100" },
                              "icon": { "classes": "" },
                              "label": { "classes": "text-xs font-medium text-zinc-500" }
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
        ],
        "meta": "",
      },
      {
        "title": "Home",
        "type": "home",
        "content": [

          {
            "id": "cs-home-hero",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "relative overflow-hidden w-full border-b border-zinc-200 bg-white" } },
            "children": [
              {
                "id": "cs-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto max-w-6xl px-6 py-20 sm:py-24" } },
                "children": [
                  {
                    "id": "cs-hero-cols",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid items-center gap-12 lg:grid-cols-2" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "cs-hero-left",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "cs-hero-badge",
                            "type": "text",
                            "options": { "text": "Headless commerce · WordPress + Next.js", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium tracking-wide text-emerald-700" } }
                          },
                          {
                            "id": "cs-hero-h1",
                            "type": "heading",
                            "options": { "text": "The ecommerce platform that keeps WordPress behind the counter.", "tag": "h1" },
                            "cssSelectors": { "*": { "classes": "text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl" } }
                          },
                          {
                            "id": "cs-hero-sub",
                            "type": "text",
                            "options": { "text": "A storefront your customers see and an admin your team already knows, shipped as one project. Nine business modules, four local payment methods, and a single deploy to put it all live.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "mt-5 max-w-xl text-base leading-relaxed text-zinc-600" } }
                          },
                          {
                            "id": "cs-hero-btns",
                            "type": "columns",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "mt-8 flex flex-wrap items-center gap-3" },
                              "column": { "classes": "" }
                            },
                            "children": [
                              {
                                "id": "cs-hero-btn-col",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-3" } },
                                "children": [
                                  {
                                    "id": "cs-hero-btn-deploy",
                                    "type": "button",
                                    "options": { "text": "Deploy on Vercel", "linkTo": "custom", "scheme": "", "url": "/onboard", "target": "", "icon": "IconBrandVercel", "iconSize": 16 },
                                    "cssSelectors": {
                                      "*": { "classes": "inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 cursor-pointer transition-colors hover:bg-emerald-700" },
                                      "icon": { "classes": "flex items-center shrink-0 text-white" },
                                      "label": { "classes": "text-sm font-semibold text-white" }
                                    }
                                  },
                                  {
                                    "id": "cs-hero-btn-how",
                                    "type": "button",
                                    "options": { "text": "See how it works", "linkTo": "custom", "scheme": "", "url": "/#platform", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                                    "cssSelectors": {
                                      "*": { "classes": "inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 cursor-pointer transition-colors hover:bg-zinc-50" },
                                      "icon": { "classes": "flex items-center shrink-0 text-zinc-500" },
                                      "label": { "classes": "text-sm font-semibold text-zinc-800" }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "cs-hero-notes",
                            "type": "list",
                            "options": {
                              "icon": "IconCheck",
                              "iconSize": 15,
                              "tag": "ul",
                              "items": [
                                { "text": "No card required", "icon": "IconCheck" },
                                { "text": "Setup support in Bangla & English", "icon": "IconCheck" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "mt-6 flex flex-wrap gap-x-6 gap-y-2" },
                              "li": { "classes": "flex list-none items-center gap-2" },
                              "icon": { "classes": "shrink-0 text-emerald-600" },
                              "text": { "classes": "text-xs font-medium text-zinc-500" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "cs-hero-right",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "cs-hero-mock",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm" } },
                            "children": [
                              {
                                "id": "cs-hero-mock-bar",
                                "type": "columns",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "mb-4 flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2" },
                                  "column": { "classes": "" }
                                },
                                "children": [
                                  {
                                    "id": "cs-hero-mock-url-col",
                                    "type": "columnItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-2" } },
                                    "children": [
                                      {
                                        "id": "cs-hero-mock-globe",
                                        "type": "icon",
                                        "options": { "iconName": "IconWorld", "size": "13" },
                                        "cssSelectors": { "*": { "classes": "flex w-fit shrink-0 items-center text-zinc-400" } },
                                        "children": []
                                      },
                                      {
                                        "id": "cs-hero-mock-url",
                                        "type": "text",
                                        "options": { "text": "yourstore.com", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "text-[11px] font-medium text-zinc-500" } }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "cs-hero-mock-cart-col",
                                    "type": "columnItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-1.5" } },
                                    "children": [
                                      {
                                        "id": "cs-hero-mock-cart-icon",
                                        "type": "icon",
                                        "options": { "iconName": "IconShoppingBag", "size": "13" },
                                        "cssSelectors": { "*": { "classes": "flex w-fit shrink-0 items-center text-zinc-500" } },
                                        "children": []
                                      },
                                      {
                                        "id": "cs-hero-mock-cart-count",
                                        "type": "text",
                                        "options": { "text": "3", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "flex size-4 items-center justify-center rounded-full bg-emerald-600 text-[9px] font-bold text-white" } }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "cs-hero-mock-grid",
                                "type": "grid",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "grid grid-cols-2 gap-3" },
                                  "grid-item": { "classes": "" }
                                },
                                "children": [
                                  {
                                    "id": "cs-hero-tile-1",
                                    "type": "gridItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "rounded-xl border border-zinc-200 bg-white p-2.5" } },
                                    "children": [
                                      {
                                        "id": "cs-hero-tile-1-img",
                                        "type": "image",
                                        "options": { "src": "https://placehold.co/320x200?text=Product", "altText": "Product photo placeholder", "width": "", "height": "" },
                                        "cssSelectors": {
                                          "*": { "classes": "" },
                                          "link": { "classes": "" },
                                          "img": { "classes": "mb-2.5 h-16 w-full rounded-lg bg-emerald-100 object-cover sm:h-20" }
                                        }
                                      },
                                      {
                                        "id": "cs-hero-tile-1-price",
                                        "type": "text",
                                        "options": { "text": "৳1,450", "tag": "p" },
                                        "cssSelectors": { "*": { "classes": "text-sm font-semibold text-zinc-900" } }
                                      },
                                      {
                                        "id": "cs-hero-tile-1-stock",
                                        "type": "text",
                                        "options": { "text": "IN STOCK", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "mt-1 inline-block rounded-md bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold tracking-wide text-emerald-700" } }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "cs-hero-tile-2",
                                    "type": "gridItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "rounded-xl border border-zinc-200 bg-white p-2.5" } },
                                    "children": [
                                      {
                                        "id": "cs-hero-tile-2-img",
                                        "type": "image",
                                        "options": { "src": "https://placehold.co/320x200?text=Product", "altText": "Product photo placeholder", "width": "", "height": "" },
                                        "cssSelectors": {
                                          "*": { "classes": "" },
                                          "link": { "classes": "" },
                                          "img": { "classes": "mb-2.5 h-16 w-full rounded-lg bg-emerald-100 object-cover sm:h-20" }
                                        }
                                      },
                                      {
                                        "id": "cs-hero-tile-2-price",
                                        "type": "text",
                                        "options": { "text": "৳890", "tag": "p" },
                                        "cssSelectors": { "*": { "classes": "text-sm font-semibold text-zinc-900" } }
                                      },
                                      {
                                        "id": "cs-hero-tile-2-stock",
                                        "type": "text",
                                        "options": { "text": "IN STOCK", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "mt-1 inline-block rounded-md bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold tracking-wide text-emerald-700" } }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "cs-hero-tile-3",
                                    "type": "gridItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "rounded-xl border border-zinc-200 bg-white p-2.5" } },
                                    "children": [
                                      {
                                        "id": "cs-hero-tile-3-img",
                                        "type": "image",
                                        "options": { "src": "https://placehold.co/320x200?text=Product", "altText": "Product photo placeholder", "width": "", "height": "" },
                                        "cssSelectors": {
                                          "*": { "classes": "" },
                                          "link": { "classes": "" },
                                          "img": { "classes": "mb-2.5 h-16 w-full rounded-lg bg-emerald-100 object-cover sm:h-20" }
                                        }
                                      },
                                      {
                                        "id": "cs-hero-tile-3-price",
                                        "type": "text",
                                        "options": { "text": "৳2,100", "tag": "p" },
                                        "cssSelectors": { "*": { "classes": "text-sm font-semibold text-zinc-900" } }
                                      },
                                      {
                                        "id": "cs-hero-tile-3-stock",
                                        "type": "text",
                                        "options": { "text": "IN STOCK", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "mt-1 inline-block rounded-md bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold tracking-wide text-emerald-700" } }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "cs-hero-tile-4",
                                    "type": "gridItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "rounded-xl border border-zinc-200 bg-white p-2.5" } },
                                    "children": [
                                      {
                                        "id": "cs-hero-tile-4-img",
                                        "type": "image",
                                        "options": { "src": "https://placehold.co/320x200?text=Product", "altText": "Product photo placeholder", "width": "", "height": "" },
                                        "cssSelectors": {
                                          "*": { "classes": "" },
                                          "link": { "classes": "" },
                                          "img": { "classes": "mb-2.5 h-16 w-full rounded-lg bg-emerald-100 object-cover sm:h-20" }
                                        }
                                      },
                                      {
                                        "id": "cs-hero-tile-4-price",
                                        "type": "text",
                                        "options": { "text": "৳640", "tag": "p" },
                                        "cssSelectors": { "*": { "classes": "text-sm font-semibold text-zinc-900" } }
                                      },
                                      {
                                        "id": "cs-hero-tile-4-stock",
                                        "type": "text",
                                        "options": { "text": "IN STOCK", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "mt-1 inline-block rounded-md bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold tracking-wide text-emerald-700" } }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "cs-hero-order",
                                "type": "columns",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "mt-3 flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3" },
                                  "column": { "classes": "" }
                                },
                                "children": [
                                  {
                                    "id": "cs-hero-order-col",
                                    "type": "columnItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex w-full items-center gap-3" } },
                                    "children": [
                                      {
                                        "id": "cs-hero-order-icon",
                                        "type": "icon",
                                        "options": { "iconName": "IconCheck", "size": "14" },
                                        "cssSelectors": { "*": { "classes": "flex size-6 w-fit shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700" } },
                                        "children": []
                                      },
                                      {
                                        "id": "cs-hero-order-id",
                                        "type": "text",
                                        "options": { "text": "Order #1042", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "text-xs font-semibold text-zinc-900" } }
                                      },
                                      {
                                        "id": "cs-hero-order-paid",
                                        "type": "text",
                                        "options": { "text": "Paid with bKash", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "ml-auto text-[11px] font-medium text-zinc-500" } }
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
                    "id": "cs-hero-stats",
                    "type": "featurebox",
                    "options": {
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        { "title": "9", "description": "Modules included", "icon": "", "iconSize": "" },
                        { "title": "4", "description": "Payment methods", "icon": "", "iconSize": "" },
                        { "title": "1", "description": "Click to deploy", "icon": "", "iconSize": "" },
                        { "title": "2", "description": "Languages supported", "icon": "", "iconSize": "" }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "mt-14 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-4" },
                      "loop-item": { "classes": "" },
                      "title": { "classes": "text-2xl font-semibold tracking-tight text-emerald-600" },
                      "description": { "classes": "mt-1 text-xs font-medium tracking-wide text-zinc-500" },
                      "icon": { "classes": "" }
                    },
                    "children": []
                  }
                ]
              }
            ]
          },

          {
            "id": "cs-home-arch",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-950 text-white" } },
            "children": [
              {
                "id": "cs-arch-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto max-w-6xl px-6 py-20 sm:py-24" } },
                "children": [
                  {
                    "id": "cs-arch-kicker",
                    "type": "text",
                    "options": { "text": "The architecture", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "mb-3 text-xs font-medium uppercase tracking-widest text-emerald-400" } }
                  },
                  {
                    "id": "cs-arch-h2",
                    "type": "heading",
                    "options": { "text": "Headless, without the integration project", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl" } }
                  },
                  {
                    "id": "cs-arch-intro",
                    "type": "text",
                    "options": { "text": "A headless build usually means stitching a CMS, a commerce API and a frontend together yourself, then maintaining the seams. These three arrive as one platform and deploy as a single Vercel project.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "max-w-2xl text-base leading-relaxed text-zinc-400" } }
                  },
                  {
                    "id": "cs-arch-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "mt-12 grid gap-5 sm:grid-cols-3" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "cs-arch-c1",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "rounded-2xl border border-white/10 bg-white/5 p-6" } },
                        "children": [
                          {
                            "id": "cs-arch-c1-n",
                            "type": "text",
                            "options": { "text": "01", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mb-4 inline-block text-xs font-bold tracking-widest text-emerald-400" } }
                          },
                          {
                            "id": "cs-arch-c1-k",
                            "type": "text",
                            "options": { "text": "Admin & content", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-[11px] font-medium uppercase tracking-widest text-zinc-500" } }
                          },
                          {
                            "id": "cs-arch-c1-h",
                            "type": "heading",
                            "options": { "text": "WordPress", "tag": "h3" },
                            "cssSelectors": { "*": { "classes": "mt-1 mb-2.5 text-lg font-semibold tracking-tight text-white" } }
                          },
                          {
                            "id": "cs-arch-c1-t",
                            "type": "text",
                            "options": { "text": "Your team keeps working in the editor it already knows. The Combo Store plugin adds the commerce models, the roles and a REST layer on top of it.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm leading-relaxed text-zinc-400" } }
                          }
                        ]
                      },
                      {
                        "id": "cs-arch-c2",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "rounded-2xl border border-white/10 bg-white/5 p-6" } },
                        "children": [
                          {
                            "id": "cs-arch-c2-n",
                            "type": "text",
                            "options": { "text": "02", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mb-4 inline-block text-xs font-bold tracking-widest text-emerald-400" } }
                          },
                          {
                            "id": "cs-arch-c2-k",
                            "type": "text",
                            "options": { "text": "Commerce engine", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-[11px] font-medium uppercase tracking-widest text-zinc-500" } }
                          },
                          {
                            "id": "cs-arch-c2-h",
                            "type": "heading",
                            "options": { "text": "ComboStore API", "tag": "h3" },
                            "cssSelectors": { "*": { "classes": "mt-1 mb-2.5 text-lg font-semibold tracking-tight text-white" } }
                          },
                          {
                            "id": "cs-arch-c2-t",
                            "type": "text",
                            "options": { "text": "Order logic, stock sync, payment rails and delivery routing all run through one API layer. The storefront never reaches the database directly.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm leading-relaxed text-zinc-400" } }
                          }
                        ]
                      },
                      {
                        "id": "cs-arch-c3",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "rounded-2xl border border-white/10 bg-white/5 p-6" } },
                        "children": [
                          {
                            "id": "cs-arch-c3-n",
                            "type": "text",
                            "options": { "text": "03", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mb-4 inline-block text-xs font-bold tracking-widest text-emerald-400" } }
                          },
                          {
                            "id": "cs-arch-c3-k",
                            "type": "text",
                            "options": { "text": "Customer-facing", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-[11px] font-medium uppercase tracking-widest text-zinc-500" } }
                          },
                          {
                            "id": "cs-arch-c3-h",
                            "type": "heading",
                            "options": { "text": "Next.js storefront", "tag": "h3" },
                            "cssSelectors": { "*": { "classes": "mt-1 mb-2.5 text-lg font-semibold tracking-tight text-white" } }
                          },
                          {
                            "id": "cs-arch-c3-t",
                            "type": "text",
                            "options": { "text": "Server-rendered category and product pages, incremental revalidation, and a checkout written to finish on a slow connection.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm leading-relaxed text-zinc-400" } }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "cs-arch-points",
                    "type": "list",
                    "options": {
                      "icon": "IconCheck",
                      "iconSize": 16,
                      "tag": "ul",
                      "items": [
                        { "text": "SEO-ready server rendering", "icon": "IconCheck" },
                        { "text": "Storefront and dashboard in one deploy", "icon": "IconCheck" },
                        { "text": "JWT-authenticated admin API", "icon": "IconCheck" }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8" },
                      "li": { "classes": "flex list-none items-center gap-2" },
                      "icon": { "classes": "shrink-0 text-emerald-400" },
                      "text": { "classes": "text-sm font-medium text-zinc-300" }
                    }
                  }
                ]
              }
            ]
          },

          {
            "id": "cs-home-features",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white" } },
            "children": [
              {
                "id": "cs-feat-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto max-w-6xl px-6 py-20 sm:py-24" } },
                "children": [
                  {
                    "id": "cs-feat-kicker",
                    "type": "text",
                    "options": { "text": "Everything included", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "mb-3 text-xs font-medium uppercase tracking-widest text-emerald-600" } }
                  },
                  {
                    "id": "cs-feat-h2",
                    "type": "heading",
                    "options": { "text": "One dashboard, every part of the business", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "mb-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl" } }
                  },
                  {
                    "id": "cs-feat-intro",
                    "type": "text",
                    "options": { "text": "From the first product photo to the last delivery confirmation: orders, stock, money and customers all stay in one place.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "max-w-2xl text-base leading-relaxed text-zinc-600" } }
                  },
                  {
                    "id": "cs-feat-box",
                    "type": "featurebox",
                    "options": {
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        { "title": "Order management", "description": "Every order from placed to delivered, with a status your team and your customer both read off the same screen.", "icon": "IconClipboardList", "iconSize": 20 },
                        { "title": "Product management", "description": "Variants, categories and pricing edited in WordPress and published straight to the storefront.", "icon": "IconPackage", "iconSize": 20 },
                        { "title": "Stock management", "description": "Live counts across warehouses, with a low-stock warning before a listing goes dark.", "icon": "IconChartBar", "iconSize": 20 },
                        { "title": "Purchases & expenses", "description": "Supplier invoices and running costs logged where they belong, so margin is a number rather than a guess.", "icon": "IconReceipt", "iconSize": 20 },
                        { "title": "Delivery management", "description": "Assign riders or courier partners, print the labels, and push live status back to the buyer.", "icon": "IconTruckDelivery", "iconSize": 20 },
                        { "title": "Local payments", "description": "Cash on Delivery, bKash, Nagad and Rocket wired into checkout, with no plugin stack to assemble.", "icon": "IconWallet", "iconSize": 20 },
                        { "title": "Support tickets", "description": "Questions and complaints in one queue, each with the full order history attached.", "icon": "IconTicket", "iconSize": 20 },
                        { "title": "AI content assistant", "description": "Product descriptions and blog drafts in seconds, in Bangla or English, editable before they publish.", "icon": "IconSparkles", "iconSize": 20 },
                        { "title": "Media library", "description": "Product photos and video in one place, optimised automatically for pages that load fast.", "icon": "IconPhoto", "iconSize": 20 }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" },
                      "loop-item": { "classes": "rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-emerald-200" },
                      "title": { "classes": "mb-1.5 text-sm font-semibold text-zinc-900" },
                      "description": { "classes": "text-sm leading-relaxed text-zinc-600" },
                      "icon": { "classes": "mb-4 flex size-10 w-fit items-center justify-center rounded-xl bg-emerald-50 text-emerald-600" }
                    },
                    "children": []
                  }
                ]
              }
            ]
          },

          {
            "id": "cs-home-ai",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-y border-zinc-200 bg-zinc-50" } },
            "children": [
              {
                "id": "cs-ai-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto max-w-6xl px-6 py-20 sm:py-24" } },
                "children": [
                  {
                    "id": "cs-ai-cols",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid items-center gap-12 lg:grid-cols-2" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "cs-ai-left",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "cs-ai-kicker",
                            "type": "text",
                            "options": { "text": "AI, built in", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "mb-3 text-xs font-medium uppercase tracking-widest text-emerald-600" } }
                          },
                          {
                            "id": "cs-ai-h2",
                            "type": "heading",
                            "options": { "text": "Let AI write the first draft, every time", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "mb-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl" } }
                          },
                          {
                            "id": "cs-ai-intro",
                            "type": "text",
                            "options": { "text": "Hand the assistant a few details and it comes back with a product description, an SEO title or a whole blog post, ready to edit and publish from the same screen.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "max-w-xl text-base leading-relaxed text-zinc-600" } }
                          },
                          {
                            "id": "cs-ai-points",
                            "type": "list",
                            "options": {
                              "icon": "IconCheck",
                              "iconSize": 16,
                              "tag": "ul",
                              "items": [
                                { "text": "Product descriptions drafted from photos and specs", "icon": "IconCheck" },
                                { "text": "Blog posts for SEO and seasonal campaigns", "icon": "IconCheck" },
                                { "text": "Writes in Bangla and English", "icon": "IconCheck" },
                                { "text": "Every draft stays editable before it publishes", "icon": "IconCheck" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "mt-7 flex flex-col gap-3" },
                              "li": { "classes": "flex list-none items-start gap-2.5" },
                              "icon": { "classes": "mt-0.5 shrink-0 text-emerald-600" },
                              "text": { "classes": "text-sm text-zinc-700" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "cs-ai-right",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "cs-ai-panel",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm" } },
                            "children": [
                              {
                                "id": "cs-ai-panel-head",
                                "type": "columns",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "mb-4 flex items-center gap-2 border-b border-zinc-200 pb-3" },
                                  "column": { "classes": "" }
                                },
                                "children": [
                                  {
                                    "id": "cs-ai-panel-head-col",
                                    "type": "columnItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-2" } },
                                    "children": [
                                      {
                                        "id": "cs-ai-panel-icon",
                                        "type": "icon",
                                        "options": { "iconName": "IconSparkles", "size": "15" },
                                        "cssSelectors": { "*": { "classes": "flex w-fit shrink-0 items-center text-emerald-600" } },
                                        "children": []
                                      },
                                      {
                                        "id": "cs-ai-panel-label",
                                        "type": "text",
                                        "options": { "text": "Content assistant", "tag": "span" },
                                        "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide text-zinc-900" } }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "cs-ai-prompt",
                                "type": "text",
                                "options": { "text": "Write a description for: handloom cotton saree, navy blue, Tangail weave", "tag": "p" },
                                "cssSelectors": { "*": { "classes": "rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600" } }
                              },
                              {
                                "id": "cs-ai-draft",
                                "type": "text",
                                "options": { "text": "A handwoven Tangail saree in deep navy cotton, finished with a traditional border and a soft, breathable drape made for everyday wear.", "tag": "p" },
                                "cssSelectors": { "*": { "classes": "mt-3 rounded-xl border border-emerald-200 bg-emerald-50/50 px-4 py-3.5 text-sm leading-relaxed text-zinc-800" } }
                              },
                              {
                                "id": "cs-ai-actions",
                                "type": "columns",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "mt-4 flex flex-wrap items-center gap-2" },
                                  "column": { "classes": "" }
                                },
                                "children": [
                                  {
                                    "id": "cs-ai-actions-col",
                                    "type": "columnItem",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-2" } },
                                    "children": [
                                      {
                                        "id": "cs-ai-btn-use",
                                        "type": "button",
                                        "options": { "text": "Use draft", "linkTo": "custom", "scheme": "", "url": "/dashboard", "target": "", "icon": "IconCheck", "iconSize": 14 },
                                        "cssSelectors": {
                                          "*": { "classes": "inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 cursor-pointer transition-colors hover:bg-emerald-700" },
                                          "icon": { "classes": "flex items-center shrink-0 text-white" },
                                          "label": { "classes": "text-xs font-semibold text-white" }
                                        }
                                      },
                                      {
                                        "id": "cs-ai-btn-regen",
                                        "type": "button",
                                        "options": { "text": "Regenerate", "linkTo": "custom", "scheme": "", "url": "/dashboard", "target": "", "icon": "IconSparkles", "iconSize": 14 },
                                        "cssSelectors": {
                                          "*": { "classes": "inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 py-2 cursor-pointer transition-colors hover:bg-zinc-50" },
                                          "icon": { "classes": "flex items-center shrink-0 text-zinc-500" },
                                          "label": { "classes": "text-xs font-medium text-zinc-700" }
                                        }
                                      },
                                      {
                                        "id": "cs-ai-btn-bangla",
                                        "type": "button",
                                        "options": { "text": "বাংলায় লিখুন", "linkTo": "custom", "scheme": "", "url": "/dashboard", "target": "", "icon": "IconLanguage", "iconSize": 14 },
                                        "cssSelectors": {
                                          "*": { "classes": "inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 py-2 cursor-pointer transition-colors hover:bg-zinc-50" },
                                          "icon": { "classes": "flex items-center shrink-0 text-zinc-500" },
                                          "label": { "classes": "text-xs font-medium text-zinc-700" }
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
              }
            ]
          },

          {
            "id": "cs-home-pay",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white" } },
            "children": [
              {
                "id": "cs-pay-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto max-w-6xl px-6 py-20 sm:py-24" } },
                "children": [
                  {
                    "id": "cs-pay-kicker",
                    "type": "text",
                    "options": { "text": "Checkout that fits Bangladesh", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "mb-3 text-xs font-medium uppercase tracking-widest text-emerald-600" } }
                  },
                  {
                    "id": "cs-pay-h2",
                    "type": "heading",
                    "options": { "text": "Get paid the way your customers pay", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "mb-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl" } }
                  },
                  {
                    "id": "cs-pay-intro",
                    "type": "text",
                    "options": { "text": "The local methods arrive configured. There is no plugin stack to license, wire up and keep in sync release after release.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "max-w-2xl text-base leading-relaxed text-zinc-600" } }
                  },
                  {
                    "id": "cs-pay-box",
                    "type": "featurebox",
                    "options": {
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        { "title": "bKash", "description": "Checkout integration built in, with no separate plugin to license.", "icon": "IconDeviceMobile", "iconSize": 20 },
                        { "title": "Nagad", "description": "Payment confirmed the moment the customer finishes checkout.", "icon": "IconBolt", "iconSize": 20 },
                        { "title": "Rocket", "description": "Mobile banking, configured and ready from the first day.", "icon": "IconCurrencyTaka", "iconSize": 20 },
                        { "title": "Cash on Delivery", "description": "With delivery confirmation built into the rider workflow.", "icon": "IconCashBanknote", "iconSize": 20 }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" },
                      "loop-item": { "classes": "rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-emerald-200" },
                      "title": { "classes": "mb-1.5 text-sm font-semibold text-zinc-900" },
                      "description": { "classes": "text-sm leading-relaxed text-zinc-600" },
                      "icon": { "classes": "mb-4 flex size-10 w-fit items-center justify-center rounded-xl bg-emerald-50 text-emerald-600" }
                    },
                    "children": []
                  }
                ]
              }
            ]
          },

          {
            "id": "cs-home-cta",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white" } },
            "children": [
              {
                "id": "cs-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto max-w-6xl px-6 pb-20 sm:pb-24" } },
                "children": [
                  {
                    "id": "cs-cta-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-3xl bg-zinc-950 px-8 py-16 text-center sm:px-12" } },
                    "children": [
                      {
                        "id": "cs-cta-h2",
                        "type": "heading",
                        "options": { "text": "Your shop, live in days — not months", "tag": "h2" },
                        "cssSelectors": { "*": { "classes": "mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl" } }
                      },
                      {
                        "id": "cs-cta-text",
                        "type": "text",
                        "options": { "text": "Point it at a domain and deploy. We walk you through setup, migration and payment configuration.", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "mx-auto max-w-xl text-base leading-relaxed text-zinc-400" } }
                      },
                      {
                        "id": "cs-cta-btns",
                        "type": "columns",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "mt-8 flex flex-wrap items-center justify-center gap-3" },
                          "column": { "classes": "" }
                        },
                        "children": [
                          {
                            "id": "cs-cta-btns-col",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3" } },
                            "children": [
                              {
                                "id": "cs-cta-btn-deploy",
                                "type": "button",
                                "options": { "text": "Deploy on Vercel", "linkTo": "custom", "scheme": "", "url": "/onboard", "target": "", "icon": "IconBrandVercel", "iconSize": 16 },
                                "cssSelectors": {
                                  "*": { "classes": "inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 cursor-pointer transition-colors hover:bg-emerald-700" },
                                  "icon": { "classes": "flex items-center shrink-0 text-white" },
                                  "label": { "classes": "text-sm font-semibold text-white" }
                                }
                              },
                              {
                                "id": "cs-cta-btn-sales",
                                "type": "button",
                                "options": { "text": "Talk to sales", "linkTo": "custom", "scheme": "", "url": "/#contact", "target": "", "icon": "IconHeadset", "iconSize": 16 },
                                "cssSelectors": {
                                  "*": { "classes": "inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 cursor-pointer transition-colors hover:bg-white/10" },
                                  "icon": { "classes": "flex items-center shrink-0 text-zinc-300" },
                                  "label": { "classes": "text-sm font-semibold text-white" }
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

        ],
        "meta": "",
      }

    ]
  }
]

export default template;
