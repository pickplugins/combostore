/**
 * Template: Home & Kitchen.
 *
 * Same contract as templates/Organic.js -- a name, some meta, and one entry per
 * page type, where each page's `content` is an ARRAY of builder blocks. The API
 * stores a page's content as a JSON STRING (Templates.jsx:305-311 parses it
 * back), so whatever applies this template must `JSON.stringify(page.content)`.
 *
 * The "Header" and "Footer" entries in `pages` are template parts, not pages:
 * they carry type 'header' and 'footer', the two part types PanelsLeft.jsx
 * passes to TemplateParts.jsx, and each holds exactly one siteHeader or
 * siteFooter block. They are applied once for the whole site, so no ordinary
 * page here carries its own copy -- that would double up with them.
 *
 * Three things the header and footer need before they go live: the logo image
 * (both use a placehold.co stand-in), the phone number and email in the footer
 * address block and the header call link (placeholders `01XXXXXXXXX` and
 * `support@example.com`), and the WhatsApp number, left empty for the same
 * reason MessengerButton's username is. The cart block sets
 * `editMode: false`; the SiteHeader.js presets ship `true`, which is an
 * authoring convenience that leaves the cart drawer open on load.
 *
 * Where Organic is warm and orange on white, this one is stone and teal with
 * dark zinc bands, and it picks different presets for the same jobs -- a split
 * hero with an image beside the copy, overlay category tiles, pill tabs, a
 * sidebar account rail, wide two-up related products. Both are composed from the
 * renderer-verified presets in element-layouts/, so the quirks those files
 * document apply here too. The ones that shaped this file:
 *
 *   - postGrid queries live under `queryPrams` (that spelling; PostGrid.jsx
 *     ignores the `queryParams` the definition declares), and
 *     `loop-items`/`loop-item` are mirrored onto the postLoop child because
 *     PostLoop.jsx:18 reads them from the parent's context.
 *   - Buttons set `linkTo: "custom"` plus `scheme` and `url`: Button.jsx only
 *     renders a <Link> for 'custom' and builds the href as `${scheme}${url}`,
 *     so an unset scheme prints "undefined".
 *   - postTitle, postDate and postAuthor default `linkTo` to 'postUrl', which
 *     wraps them in a dead <Link href="#">; every one here sets it explicitly.
 *     PostDate also reads `dateFormat`, not the `format` it declares.
 *   - Term headers are a heading plus text, never termTitle/termCount: those
 *     read `useCategory()` with no fallback and only TermsLoop/TermsSlider
 *     provide it, so standalone they render empty.
 *   - An archive is chosen by `options.queryPrams.taxonomy`. `product_cat` is
 *     the value the existing presets use; `product_tag` and `product_brand`
 *     come from the backend and want confirming, like `post_type: product`.
 *
 * The Shop, Product and term pages fall back to a product grid wherever the
 * storefront would filter by the current term, since a static template cannot
 * express "this brand" or "this category" in the query.
 */

var template = [
  {

    "name": "Home & Kitchen",
    "description": "Stone and teal storefront for cookware, dinnerware, storage and small appliances.",
    "thumbnail": "",
    "meta": "",
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "hk-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white border-b border-stone-200 sticky top-0 z-40" } },
            "children": [
              {
                "id": "hk-hdr-util",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full bg-stone-100 border-b border-stone-200" } },
                "children": [
                  {
                    "id": "hk-hdr-util-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-7xl mx-auto px-5 py-2 flex items-center justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "hk-hdr-util-l",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "hk-hdr-util-t",
                            "type": "text",
                            "options": { "text": "Free delivery over Tk 2,000 - cash on delivery nationwide", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-stone-600" } }
                          }
                        ]
                      },
                      {
                        "id": "hk-hdr-util-r",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-5" } },
                        "children": [
                          {
                            "id": "hk-hdr-util-track",
                            "type": "button",
                            "options": { "text": "Track order", "linkTo": "custom", "scheme": "", "url": "/track-order", "target": "", "icon": "IconTruck", "iconSize": 15 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-teal-700 cursor-pointer transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          },
                          {
                            "id": "hk-hdr-util-call",
                            "type": "button",
                            "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 15 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-teal-700 cursor-pointer transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "tracking-wide" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "hk-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-5" } },
                "children": [
                  {
                    "id": "hk-hdr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-4 grid-cols-1 lg:grid-cols-3 items-center" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "hk-hdr-gi-search",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "hidden lg:block" } },
                        "children": [
                          {
                            "id": "hk-hdr-search",
                            "type": "quickSearch",
                            "options": { "placeholder": "Search cookware, storage, dinnerware", "iconPosition": "", "icon": "IconZoom" },
                            "cssSelectors": {
                              "*": { "classes": "border border-stone-300 rounded-md py-1.5 px-4 bg-stone-50" },
                              "input-search": { "classes": "w-full px-2 bg-transparent border-0 shadow-none! outline-none" },
                              "input-wrapper": { "classes": "flex flex-nowrap gap-2 items-center w-full" },
                              "icon": { "classes": "text-stone-500 shrink-0" },
                              "popover": { "classes": "bg-white shadow-xl rounded-lg border border-stone-200" },
                              "reset": { "classes": "text-red-400 text-sm cursor-pointer shrink-0" },
                              "categories": { "classes": "" },
                              "brands": { "classes": "" },
                              "items": { "classes": "divide-y divide-stone-100" },
                              "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-teal-50" },
                              "item-title": { "classes": "" },
                              "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                              "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                              "page-item": { "classes": "border border-solid border-stone-300 shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                              "page-count": { "classes": "border border-solid border-stone-300 shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-hdr-gi-logo",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex justify-center" } },
                        "children": [
                          {
                            "id": "hk-hdr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Home & Kitchen", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-40 h-auto object-contain" },
                              "text": { "classes": "text-xl font-semibold tracking-tight text-stone-900" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-hdr-gi-actions",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3 justify-center lg:justify-end" } },
                        "children": [
                          {
                            "id": "hk-hdr-account",
                            "type": "button",
                            "options": { "text": "Account", "linkTo": "custom", "scheme": "", "url": "/account", "target": "", "icon": "IconUserCircle", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 text-sm text-stone-700 hover:text-teal-700 cursor-pointer transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "font-medium" }
                            }
                          },
                          {
                            "id": "hk-hdr-cart",
                            "type": "cart",
                            "options": { "buttonIcon": "IconShoppingCart", "editMode": false },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "button": { "classes": "flex items-center gap-2 text-sm px-4 rounded-md py-2 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white transition-colors" },
                              "button-quantity": { "classes": "font-semibold" },
                              "button-icon": { "classes": "" },
                              "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                              "cart-header": { "classes": "flex justify-between items-center bg-teal-700 py-3 px-4 text-white" },
                              "cart-total-items": { "classes": "" },
                              "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-md text-sm" },
                              "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-md text-sm" },
                              "go-to-checkout": { "classes": "text-white bg-teal-700 hover:bg-teal-800 px-4 py-2 rounded-md cursor-pointer" },
                              "coupon-input": { "classes": "w-28 border! border-solid border-stone-300 shadow-none! text-center rounded-md" },
                              "coupon-apply-button": { "classes": "text-white bg-zinc-900 px-3 py-2 rounded-md cursor-pointer" },
                              "back-to-cart": { "classes": "text-sm text-teal-700 cursor-pointer" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "hk-hdr-nav",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-stone-200" } },
                "children": [
                  {
                    "id": "hk-hdr-nav-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-2.5 overflow-x-auto flex justify-center" } },
                    "children": [
                      {
                        "id": "hk-hdr-menu",
                        "type": "menu",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "menu": { "classes": "flex gap-8 text-sm font-medium text-stone-700 whitespace-nowrap" },
                          "menu-item": { "classes": "" },
                          "sub-menu": { "classes": "rounded-lg border border-stone-200 bg-white shadow-lg py-2 min-w-48" },
                          "menu-link": { "classes": "hover:text-teal-700 transition-colors py-1" },
                          "link-label": { "classes": "" },
                          "icon": { "classes": "" }
                        },
                        "children": [
                          { "id": "hk-hdr-mi-1", "type": "menuItem", "options": { "label": "Home", "url": "/" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          {
                            "id": "hk-hdr-mi-2",
                            "type": "menuItem",
                            "options": { "label": "Cookware", "url": "/categories/cookware" },
                            "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" }, "sub-menu": { "classes": "" } },
                            "children": [
                              { "id": "hk-hdr-mi-2-1", "type": "menuItem", "options": { "label": "Pots & Pans", "url": "/categories/pots-and-pans" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-teal-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "hk-hdr-mi-2-2", "type": "menuItem", "options": { "label": "Bakeware", "url": "/categories/bakeware" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-teal-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "hk-hdr-mi-2-3", "type": "menuItem", "options": { "label": "Knives & Boards", "url": "/categories/knives" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-teal-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                            ]
                          },
                          { "id": "hk-hdr-mi-3", "type": "menuItem", "options": { "label": "Dinnerware", "url": "/categories/dinnerware" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "hk-hdr-mi-4", "type": "menuItem", "options": { "label": "Storage", "url": "/categories/storage" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "hk-hdr-mi-5", "type": "menuItem", "options": { "label": "Small Appliances", "url": "/categories/appliances" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "hk-hdr-mi-6", "type": "menuItem", "options": { "label": "Offers", "url": "/shop/offers" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "text-red-600 font-semibold" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
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
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "hk-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-14" } },
                "children": [
                  {
                    "id": "hk-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "hk-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "hk-ftr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Home & Kitchen", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-36 h-auto object-contain" },
                              "text": { "classes": "text-xl font-semibold tracking-tight text-white" }
                            }
                          },
                          {
                            "id": "hk-ftr-tagline",
                            "type": "text",
                            "options": { "text": "Cookware, dinnerware and storage chosen to last. Picked by people who cook every day.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-xs" } }
                          },
                          {
                            "id": "hk-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": { "icon": "IconPhone", "label": "Phone", "value": "01XXXXXXXXX" },
                              "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
                              "location": { "icon": "IconMapPin", "label": "Location", "value": "Add your shop address here" },
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 flex-col text-sm text-stone-400" },
                              "item": { "classes": "flex gap-2 items-start" },
                              "link": { "classes": "flex gap-2 items-center hover:text-teal-400 transition-colors" },
                              "phone-link": { "classes": "" },
                              "email-link": { "classes": "" },
                              "icon": { "classes": "text-teal-500 shrink-0" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "hk-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "items": [
                                { "text": "Cookware", "icon": "", "slug": "/categories/cookware" },
                                { "text": "Dinnerware", "icon": "", "slug": "/categories/dinnerware" },
                                { "text": "Storage", "icon": "", "slug": "/categories/storage" },
                                { "text": "Small Appliances", "icon": "", "slug": "/categories/appliances" },
                                { "text": "All Products", "icon": "", "slug": "/shop" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-semibold text-white uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-teal-400 transition-colors" },
                              "icon": { "classes": "text-stone-600" },
                              "text": { "classes": "text-sm text-stone-400" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-ftr-gi-help",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "hk-ftr-ll-help",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Service",
                              "tag": "ul",
                              "items": [
                                { "text": "Track Order", "icon": "", "slug": "/track-order" },
                                { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
                                { "text": "Returns & Refunds", "icon": "", "slug": "/returns" },
                                { "text": "Care & Warranty", "icon": "", "slug": "/warranty" },
                                { "text": "FAQ", "icon": "", "slug": "/faq" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-semibold text-white uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-teal-400 transition-colors" },
                              "icon": { "classes": "text-stone-600" },
                              "text": { "classes": "text-sm text-stone-400" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-ftr-gi-company",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "hk-ftr-ll-company",
                            "type": "linkList",
                            "options": {
                              "headerText": "Company",
                              "tag": "ul",
                              "items": [
                                { "text": "About Us", "icon": "", "slug": "/about" },
                                { "text": "Blog", "icon": "", "slug": "/blog" },
                                { "text": "Contact", "icon": "", "slug": "/contact" },
                                { "text": "Privacy Policy", "icon": "", "slug": "/privacy-policy" },
                                { "text": "Terms & Conditions", "icon": "", "slug": "/terms" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-semibold text-white uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-teal-400 transition-colors" },
                              "icon": { "classes": "text-stone-600" },
                              "text": { "classes": "text-sm text-stone-400" }
                            }
                          },
                          {
                            "id": "hk-ftr-wa",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Chat on WhatsApp",
                              "phone": "",
                              "message": "Hi, I need help with an order.",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-md bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-medium whitespace-nowrap" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "hk-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-white/10" } },
                "children": [
                  {
                    "id": "hk-ftr-bottom-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "hk-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "hk-ftr-copy",
                            "type": "text",
                            "options": { "text": "(c) 2026 Home & Kitchen. All rights reserved.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-stone-500" } }
                          }
                        ]
                      },
                      {
                        "id": "hk-ftr-pay-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                        "children": [
                          {
                            "id": "hk-ftr-pay",
                            "type": "image",
                            "options": { "src": "https://placehold.co/240x32?text=Payments", "altText": "Accepted payment methods", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "" },
                              "img": { "classes": "h-7 w-auto object-contain opacity-70" }
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
        "title": "Blog Single",
        "type": "blog_single",
        "content": [
          {
            "id": "hk-bs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-bs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pt-14 pb-8 flex flex-col gap-5" } },
                "children": [
                  {
                    "id": "hk-bs-title",
                    "type": "postTitle",
                    "options": { "linkTo": "", "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 leading-tight" } }
                  },
                  {
                    "id": "hk-bs-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500" } },
                    "children": [
                      {
                        "id": "hk-bs-author",
                        "type": "postAuthor",
                        "options": { "linkTo": "", "classes": "" },
                        "cssSelectors": { "*": { "classes": "font-medium text-stone-700" } }
                      },
                      {
                        "id": "hk-bs-date",
                        "type": "postDate",
                        "options": { "linkTo": "", "dateFormat": "DD MMMM, YYYY" },
                        "cssSelectors": { "*": { "classes": "text-stone-400" } }
                      }
                    ]
                  },
                  {
                    "id": "hk-bs-thumb",
                    "type": "postThumbnail",
                    "options": { "linkTo": "postUrl" },
                    "cssSelectors": {
                      "*": { "classes": "w-full overflow-hidden rounded-lg" },
                      "link": { "classes": "block" },
                      "image": { "classes": "w-full aspect-video object-cover bg-stone-100" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-bs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-bs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pb-14" } },
                "children": [
                  {
                    "id": "hk-bs-content",
                    "type": "postContent",
                    "options": { "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-base text-stone-700 leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-stone-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-4 [&_a]:text-teal-700 [&_a]:underline [&_img]:rounded-lg [&_img]:my-6" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-bs-comments",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-stone-50 border-y border-stone-200" } },
            "children": [
              {
                "id": "hk-bs-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "hk-bs-comments-h",
                    "type": "heading",
                    "options": { "text": "Comments", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-semibold tracking-tight text-stone-900" } }
                  },
                  {
                    "id": "hk-bs-rev",
                    "type": "commentsGrid",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "w-full" },
                      "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                      "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg bg-white border border-stone-200" }
                    },
                    "children": [
                      {
                        "id": "hk-bs-rev-loop",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                          "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg bg-white border border-stone-200" }
                        },
                        "children": [
                          {
                            "id": "hk-bs-rev-avatar",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-10 h-10 rounded-full object-cover bg-neutral-100" }
                            }
                          },
                          {
                            "id": "hk-bs-rev-author",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900" } }
                          },
                          {
                            "id": "hk-bs-rev-rate",
                            "type": "commentRate",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                          },
                          {
                            "id": "hk-bs-rev-body",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
                          }
                        ]
                      },
                      {
                        "id": "hk-bs-form",
                        "type": "commentsForm",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "mt-6 p-5 rounded-lg bg-white border border-stone-200" } }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-bs-more",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-bs-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "hk-bs-more-h",
                    "type": "heading",
                    "options": { "text": "Read next", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-semibold tracking-tight text-stone-900" } }
                  },
                  {
                    "id": "hk-bs-more-pg-1",
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
                        "id": "hk-bs-more-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "flex flex-col divide-y divide-gray-100" },
                          "loop-item": { "classes": "flex gap-5 py-6 group" }
                        },
                        "children": [
                          {
                            "id": "hk-bs-more-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-40 h-28 shrink-0 overflow-hidden rounded-lg bg-gray-50" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "hk-bs-more-pg-4",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-lg font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-teal-600" } }
                          },
                          {
                            "id": "hk-bs-more-pg-5",
                            "type": "postAuthor",
                            "options": { "tag": "span", "linkTo": "" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
                          },
                          {
                            "id": "hk-bs-more-pg-6",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-400" } }
                          },
                          {
                            "id": "hk-bs-more-pg-7",
                            "type": "postExcerpt",
                            "options": {
                              "tag": "p",
                              "linkTo": "postUrl",
                              "maxWord": 28,
                              "readMoreText": "Continue reading",
                              "readMoreIcon": "IconArrowNarrowRight",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2" },
                              "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-2" },
                              "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-teal-600 hover:text-teal-700" },
                              "read-more-icon": { "classes": "" },
                              "read-more-label": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-bs-more-pg-8",
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
                ]
              }
            ]
          }
        ],
        "meta": "",
      },
      {
        "title": "Blog Archive",
        "type": "blog",
        "content": [
          {
            "id": "hk-bl-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-bl-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-bl-head-h",
                    "type": "heading",
                    "options": { "text": "In the kitchen", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-bl-head-t",
                    "type": "text",
                    "options": { "text": "Recipes, care guides and buying advice from our team.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-bl-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-bl-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-bl-grid-1",
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
                        "id": "hk-bl-grid-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-x-10 gap-y-8 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "flex flex-col gap-2 border-b border-gray-100 pb-6 group" }
                        },
                        "children": [
                          {
                            "id": "hk-bl-grid-3",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-[11px] uppercase tracking-[0.2em] text-neutral-400" } }
                          },
                          {
                            "id": "hk-bl-grid-4",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-xl font-semibold text-neutral-900 leading-snug transition-colors duration-200 group-hover:text-neutral-500" } }
                          },
                          {
                            "id": "hk-bl-grid-5",
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
                        "id": "hk-bl-grid-6",
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
                      },
                      {
                        "id": "hk-bl-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "previous-icon": { "classes": "empty:hidden flex items-center" },
                          "next-icon": { "classes": "empty:hidden flex items-center" },
                          "current": { "classes": "w-14 text-center text-sm" }
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
        "title": "404",
        "type": "404",
        "content": [
          {
            "id": "hk-nf",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "hk-nf-icon",
                    "type": "icon",
                    "options": { "iconName": "IconSearchOff", "size": "48" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-stone-300" } }
                  },
                  {
                    "id": "hk-nf-h",
                    "type": "heading",
                    "options": { "text": "We could not find that page", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900" } }
                  },
                  {
                    "id": "hk-nf-t",
                    "type": "text",
                    "options": { "text": "The link may be broken or the item may have sold out. Try the shop, or start again from the homepage.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-600 leading-relaxed max-w-md" } }
                  },
                  {
                    "id": "hk-nf-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-2" } },
                    "children": [
                      {
                        "id": "hk-nf-b1",
                        "type": "button",
                        "options": { "text": "Back to home", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "IconHome", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-teal-700 text-white cursor-pointer hover:bg-teal-800 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold tracking-wide" }
                        }
                      },
                      {
                        "id": "hk-nf-b2",
                        "type": "button",
                        "options": { "text": "Shop all products", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-stone-300 text-stone-800 cursor-pointer hover:border-teal-600 hover:text-teal-700 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold" }
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
        "title": "Home",
        "type": "home",
        "content": [
          {
            "id": "hk-hero",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-stone-100" } },
            "children": [
              {
                "id": "hk-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14" } },
                "children": [
                  {
                    "id": "hk-hero-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "hk-hero-copy",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "hk-hero-h",
                            "type": "heading",
                            "options": { "text": "A kitchen that works as hard as you do", "tag": "h1" },
                            "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 leading-tight" } }
                          },
                          {
                            "id": "hk-hero-t",
                            "type": "text",
                            "options": { "text": "Cookware, dinnerware and storage picked to last. Free delivery over Tk 2,000 and cash on delivery nationwide.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-base text-stone-600 leading-relaxed max-w-lg" } }
                          },
                          {
                            "id": "hk-hero-actions",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-3" } },
                            "children": [
                              {
                                "id": "hk-hero-b1",
                                "type": "button",
                                "options": {
                                  "text": "Shop the kitchen",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-teal-700 text-white cursor-pointer hover:bg-teal-800 transition-colors w-fit" },
                                  "icon": { "classes": "flex items-center shrink-0" },
                                  "label": { "classes": "text-sm font-semibold tracking-wide" }
                                }
                              },
                              {
                                "id": "hk-hero-b2",
                                "type": "button",
                                "options": { "text": "Browse categories", "linkTo": "custom", "scheme": "", "url": "/categories", "target": "", "icon": "", "iconSize": "" },
                                "cssSelectors": {
                                  "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-stone-300 text-stone-800 cursor-pointer hover:border-teal-600 hover:text-teal-700 transition-colors w-fit" },
                                  "icon": { "classes": "" },
                                  "label": { "classes": "text-sm font-semibold" }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hk-hero-art",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "hk-hero-img-1",
                            "type": "image",
                            "options": { "src": "https://placehold.co/800x600?text=Image", "altText": "Describe what is in the picture", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "link": { "classes": "" },
                              "img": { "classes": "w-full aspect-[4/3] object-cover rounded-xl bg-neutral-100" }
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
            "id": "hk-cat",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-cat-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "hk-cat-h",
                    "type": "heading",
                    "options": { "text": "Shop the house", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-semibold tracking-tight text-stone-900" } }
                  },
                  {
                    "id": "hk-cat-tg-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "8",
                        "per_page": "8",
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
                        "id": "hk-cat-tg-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group relative h-64 rounded-2xl overflow-hidden bg-neutral-200" }
                        },
                        "children": [
                          {
                            "id": "hk-cat-tg-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "block w-full h-64" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" }
                            }
                          },
                          {
                            "id": "hk-cat-tg-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 px-5 pt-10 pb-4 text-lg font-semibold text-white bg-gradient-to-t from-black/75 to-transparent" } }
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
            "id": "hk-promo",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-stone-50" } },
            "children": [
              {
                "id": "hk-promo-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14" } },
                "children": [
                  {
                    "id": "hk-promo-g-1",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 gap-5" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "hk-promo-g-2",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-2xl bg-neutral-100 p-6 min-h-64 flex flex-col justify-end" } },
                        "children": [
                          {
                            "id": "hk-promo-g-3",
                            "type": "heading",
                            "options": { "text": "New in this week", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900 max-w-xs" } }
                          }
                        ]
                      },
                      {
                        "id": "hk-promo-g-4",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-2xl bg-teal-50 p-6 min-h-64 flex flex-col justify-end" } },
                        "children": [
                          {
                            "id": "hk-promo-g-5",
                            "type": "heading",
                            "options": { "text": "Up to 40% off nursery", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900 max-w-xs" } }
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
            "id": "hk-new",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-new-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "hk-new-h",
                    "type": "heading",
                    "options": { "text": "New arrivals", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-semibold tracking-tight text-stone-900" } }
                  },
                  {
                    "id": "hk-new-pg",
                    "type": "postGrid",
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
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-3 p-3 rounded-lg bg-stone-50 transition-colors hover:bg-stone-100" }
                    },
                    "children": [
                      {
                        "id": "hk-new-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-3 p-3 rounded-lg bg-stone-50 transition-colors hover:bg-stone-100" }
                        },
                        "children": [
                          {
                            "id": "hk-new-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-white" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "hk-new-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-stone-800 line-clamp-2 transition-colors group-hover:text-teal-700" } }
                          },
                          {
                            "id": "hk-new-c-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "hidden" },
                              "total-reviews": { "classes": "hidden" }
                            }
                          },
                          {
                            "id": "hk-new-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-center text-neutral-400 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "px-3 py-1 text-base font-bold text-white bg-red-600 rounded-md" },
                              "simple-price-regular": { "classes": "text-sm line-through text-neutral-400" },
                              "variable-price-wrap": { "classes": "flex gap-2 items-center" },
                              "variable-price-min": { "classes": "text-base text-neutral-600" },
                              "variable-price-max": { "classes": "text-base text-neutral-600" }
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
            "id": "hk-benefit",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-benefit-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-benefit-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free Delivery",
                          "description": "On orders above Tk 1,000",
                          "icon": "IconTruck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on Delivery",
                          "description": "Available in all 64 districts",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Easy Exchange",
                          "description": "Within 7 days of delivery",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Genuine Products",
                          "description": "Brand warranty included",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 rounded-xl overflow-hidden" },
                      "loop-item": { "classes": "flex flex-col gap-2 bg-neutral-900 p-6" },
                      "title": { "classes": "text-sm font-semibold text-white" },
                      "description": { "classes": "text-xs text-neutral-400" },
                      "icon": { "classes": "w-10 h-10 rounded-md bg-white/10 text-amber-400 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "hk-benefit-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruck", "size": "20" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "hk-benefit-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h4" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "hk-benefit-fb-4",
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
            "id": "hk-blog",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-blog-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "hk-blog-h",
                    "type": "heading",
                    "options": { "text": "In the kitchen", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-semibold tracking-tight text-stone-900" } }
                  },
                  {
                    "id": "hk-blog-pg-1",
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
                        "id": "hk-blog-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "relative rounded-2xl overflow-hidden group cursor-pointer min-h-72" }
                        },
                        "children": [
                          {
                            "id": "hk-blog-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "absolute inset-0 w-full h-full" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-90" }
                            }
                          },
                          {
                            "id": "hk-blog-pg-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "absolute top-3 left-3 z-10 text-[11px] font-medium text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full" } }
                          },
                          {
                            "id": "hk-blog-pg-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 text-white text-base font-semibold line-clamp-2 p-4 pt-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-transform duration-300 ease-out translate-y-1 group-hover:translate-y-0" } }
                          }
                        ]
                      },
                      {
                        "id": "hk-blog-pg-6",
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
                ]
              }
            ]
          }
        ],
        "meta": "",
      },
      {
        "title": "Account",
        "type": "account",
        "content": [
          {
            "id": "hk-ac-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-ac-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-ac-head-h",
                    "type": "heading",
                    "options": { "text": "Your account", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-ac-head-t",
                    "type": "text",
                    "options": { "text": "Track orders, manage subscriptions and update your details.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-ac-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-ac-ca-1",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-12" } },
                "children": [
                  {
                    "id": "hk-ac-ca-2",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "hk-ac-ca-3",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10" },
                          "grid-item": { "classes": "" }
                        },
                        "children": [
                          {
                            "id": "hk-ac-ca-4",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "hk-ac-ca-5",
                                "type": "register",
                                "options": {
                                  "emailLabel": "Email",
                                  "phoneLabel": "Phone",
                                  "password1Label": "Password",
                                  "password2Label": "Confirm password",
                                  "registerLabel": "Create account",
                                  "haveAccountLabel": "Already have an account? Log in"
                                },
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "form": { "classes": "flex flex-col gap-5" },
                                  "input-fields-wrap": { "classes": "flex flex-col gap-4" },
                                  "input-wrap": { "classes": "flex flex-col gap-1.5" },
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-md border border-neutral-300 bg-white text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" },
                                  "input-username": { "classes": "" },
                                  "input-phone": { "classes": "" },
                                  "input-password": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-email": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-phone": { "classes": "" },
                                  "label-password": { "classes": "" },
                                  "submit": { "classes": "w-full py-2.5 rounded-md bg-teal-500 text-sm font-semibold text-white text-center cursor-pointer hover:bg-teal-600 transition-colors" },
                                  "have-account": { "classes": "text-xs text-neutral-500" }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hk-ac-ca-6",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "hk-ac-ca-7",
                                "type": "login",
                                "options": {
                                  "usernameLabel": "Email or phone",
                                  "passwordLabel": "Password",
                                  "loginLabel": "Log in",
                                  "forgetPasswordLabel": "Forgot your password?"
                                },
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "form": { "classes": "flex flex-col gap-5" },
                                  "input-fields-wrap": { "classes": "flex flex-col gap-4" },
                                  "input-wrap": { "classes": "flex flex-col gap-1.5" },
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-md border border-neutral-300 bg-white text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" },
                                  "input-username": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-email": { "classes": "text-xs font-medium text-neutral-600" },
                                  "submit": { "classes": "w-full py-2.5 rounded-md bg-teal-500 text-sm font-semibold text-white text-center cursor-pointer hover:bg-teal-600 transition-colors" },
                                  "forget-password": { "classes": "text-xs text-neutral-500" }
                                },
                                "children": []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hk-ac-ca-8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white" } },
                    "children": [
                      {
                        "id": "hk-ac-ca-9",
                        "type": "tabs",
                        "options": {
                          "orientation": "vertical",
                          "tabsItems": [
                            {
                              "label": "Orders",
                              "icon": "IconPackage"
                            },
                            {
                              "label": "Profile",
                              "icon": "IconUser"
                            },
                            {
                              "label": "Subscriptions",
                              "icon": "IconRepeat"
                            },
                            {
                              "label": "Support",
                              "icon": "IconLifebuoy"
                            },
                            {
                              "label": "Edit profile",
                              "icon": "IconUserEdit"
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "w-full lg:flex lg:gap-8" },
                          "navs-items": { "classes": "flex lg:flex-col gap-1 overflow-x-auto lg:w-56 lg:shrink-0 lg:border-r lg:border-neutral-200 lg:pr-4" },
                          "nav-item": { "classes": "flex items-center gap-2.5 shrink-0 px-3 py-2.5 rounded-md text-sm font-medium text-neutral-600 whitespace-nowrap cursor-pointer hover:bg-neutral-50 hover:text-neutral-900" },
                          "nav-item-active": { "classes": "bg-teal-50! text-teal-700!" },
                          "nav-item-label": { "classes": "" },
                          "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                          "nav-item-content": { "classes": "pt-6 lg:pt-0 lg:flex-1 lg:min-w-0" }
                        },
                        "children": [
                          {
                            "id": "hk-ac-ca-10",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "hk-ac-ca-11",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hk-ac-ca-12",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "hk-ac-ca-13",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hk-ac-ca-14",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "hk-ac-ca-15",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hk-ac-ca-16",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "hk-ac-ca-17",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hk-ac-ca-18",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "hk-ac-ca-19",
                                "type": "customerProfileEdit",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
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
      },
      {
        "title": "Thank you",
        "type": "thank_you",
        "content": [
          {
            "id": "hk-ty",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-stone-50" } },
            "children": [
              {
                "id": "hk-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "hk-ty-icon",
                    "type": "icon",
                    "options": { "iconName": "IconPackage", "size": "56" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-teal-700" } }
                  },
                  {
                    "id": "hk-ty-h",
                    "type": "heading",
                    "options": { "text": "Your order is in", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-stone-900" } }
                  },
                  {
                    "id": "hk-ty-t",
                    "type": "text",
                    "options": { "text": "We have sent a confirmation by SMS. Our team will call to confirm your address before the parcel leaves the warehouse.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-600 leading-relaxed max-w-lg" } }
                  },
                  {
                    "id": "hk-ty-steps-1",
                    "type": "list",
                    "options": {
                      "tag": "ol",
                      "icon": "",
                      "iconSize": 16,
                      "items": [
                        {
                          "text": "Add what you need to the cart",
                          "icon": ""
                        },
                        {
                          "text": "Enter your delivery address",
                          "icon": ""
                        },
                        {
                          "text": "Pick bKash, Nagad, card or cash on delivery",
                          "icon": ""
                        },
                        {
                          "text": "Track the parcel from the link we text you",
                          "icon": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "ml-6 flex flex-col gap-2.5 max-w-2xl" },
                      "li": { "classes": "list-decimal pl-1 marker:font-semibold marker:text-teal-500" },
                      "icon": { "classes": "empty:hidden" },
                      "text": { "classes": "text-sm text-neutral-700 leading-relaxed" }
                    }
                  },
                  {
                    "id": "hk-ty-b",
                    "type": "button",
                    "options": { "text": "Continue shopping", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-teal-700 text-white cursor-pointer hover:bg-teal-800 transition-colors w-fit" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-semibold tracking-wide" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-ty-trust",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-stone-200" } },
            "children": [
              {
                "id": "hk-ty-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "hk-ty-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "1. Place Your Order",
                          "description": "Add to cart and check out in under a minute. No account needed.",
                          "icon": "IconBuildingStore",
                          "iconSize": ""
                        },
                        {
                          "title": "2. Pay Your Way",
                          "description": "Choose bKash, Nagad, Rocket, card, or simply pay cash on delivery.",
                          "icon": "IconWallet",
                          "iconSize": ""
                        },
                        {
                          "title": "3. Get It Delivered",
                          "description": "24 to 48 hours inside Dhaka, 2 to 4 days anywhere else in the country.",
                          "icon": "IconPackage",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 md:grid-cols-3 gap-8 py-8" },
                      "loop-item": { "classes": "flex flex-col items-center text-center gap-3 px-4" },
                      "title": { "classes": "text-base font-semibold text-neutral-900" },
                      "description": { "classes": "text-sm text-neutral-500 leading-relaxed max-w-xs" },
                      "icon": { "classes": "w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "hk-ty-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconBuildingStore", "size": "26" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "hk-ty-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h3" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "hk-ty-fb-4",
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
        ],
        "meta": "",
      },
      {
        "title": "Brands Single",
        "type": "brands_single",
        "content": [
          {
            "id": "hk-bn-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-bn-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-bn-head-h",
                    "type": "heading",
                    "options": { "text": "Brand", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-bn-head-t",
                    "type": "text",
                    "options": { "text": "Everything we stock from this brand.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-bn-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-bn-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-bn-body-pg",
                    "type": "postGrid",
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
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-3 p-3 rounded-lg bg-stone-50 transition-colors hover:bg-stone-100" }
                    },
                    "children": [
                      {
                        "id": "hk-bn-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-3 p-3 rounded-lg bg-stone-50 transition-colors hover:bg-stone-100" }
                        },
                        "children": [
                          {
                            "id": "hk-bn-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-white" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "hk-bn-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-stone-800 line-clamp-2 transition-colors group-hover:text-teal-700" } }
                          },
                          {
                            "id": "hk-bn-body-c-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "hidden" },
                              "total-reviews": { "classes": "hidden" }
                            }
                          },
                          {
                            "id": "hk-bn-body-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-neutral-300 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-sm font-semibold text-neutral-900" },
                              "simple-price-regular": { "classes": "text-xs line-through text-neutral-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-neutral-500" },
                              "variable-price-max": { "classes": "text-xs text-neutral-500" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-bn-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "previous-icon": { "classes": "empty:hidden flex items-center" },
                          "next-icon": { "classes": "empty:hidden flex items-center" },
                          "current": { "classes": "w-14 text-center text-sm" }
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
        "title": "Brands Archive",
        "type": "brands",
        "content": [
          {
            "id": "hk-br-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-br-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-br-head-h",
                    "type": "heading",
                    "options": { "text": "Brands we stock", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-br-head-t",
                    "type": "text",
                    "options": { "text": "The makers behind the pans, knives and appliances on our shelves.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-br-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-br-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 pb-14" } },
                "children": [
                  {
                    "id": "hk-br-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "48",
                        "per_page": "48",
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
                        "id": "hk-br-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "h-24 flex items-center justify-center px-4 py-3 bg-neutral-900 rounded-lg" }
                        },
                        "children": [
                          {
                            "id": "hk-br-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full h-12 flex items-center justify-center" },
                              "link": { "classes": "" },
                              "image": { "classes": "max-h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200" }
                            }
                          },
                          {
                            "id": "hk-br-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "span", "classes": "" },
                            "cssSelectors": { "*": { "classes": "sr-only" } }
                          }
                        ]
                      },
                      {
                        "id": "hk-br-grid-5",
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
                  }
                ]
              }
            ]
          }
        ],
        "meta": "",
      },
      {
        "title": "Tags Single",
        "type": "tags_single",
        "content": [
          {
            "id": "hk-ts-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-ts-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-ts-head-h",
                    "type": "heading",
                    "options": { "text": "Tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-ts-head-t",
                    "type": "text",
                    "options": { "text": "Products carrying this tag, across every category.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-ts-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-ts-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-ts-body-pg",
                    "type": "postGrid",
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
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-3 p-3 rounded-lg bg-stone-50 transition-colors hover:bg-stone-100" }
                    },
                    "children": [
                      {
                        "id": "hk-ts-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-3 p-3 rounded-lg bg-stone-50 transition-colors hover:bg-stone-100" }
                        },
                        "children": [
                          {
                            "id": "hk-ts-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-white" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "hk-ts-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-stone-800 line-clamp-2 transition-colors group-hover:text-teal-700" } }
                          },
                          {
                            "id": "hk-ts-body-c-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "hidden" },
                              "total-reviews": { "classes": "hidden" }
                            }
                          },
                          {
                            "id": "hk-ts-body-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-neutral-300 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-sm font-semibold text-neutral-900" },
                              "simple-price-regular": { "classes": "text-xs line-through text-neutral-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-neutral-500" },
                              "variable-price-max": { "classes": "text-xs text-neutral-500" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-ts-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "previous-icon": { "classes": "empty:hidden flex items-center" },
                          "next-icon": { "classes": "empty:hidden flex items-center" },
                          "current": { "classes": "w-14 text-center text-sm" }
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
        "title": "Tags Archive",
        "type": "tags",
        "content": [
          {
            "id": "hk-tg-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-tg-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-tg-head-h",
                    "type": "heading",
                    "options": { "text": "Browse by tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-tg-head-t",
                    "type": "text",
                    "options": { "text": "Tags cut across categories, so you can shop by need instead of aisle.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-tg-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-tg-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-tg-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_tag",
                        "number": "48",
                        "per_page": "48",
                        "hide_empty": true,
                        "order": "ASC",
                        "orderby": "name"
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "py-6" },
                      "loop-items": { "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" },
                      "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-teal-50 hover:border-teal-200 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "hk-tg-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200" }
                        },
                        "children": [
                          {
                            "id": "hk-tg-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-11 h-11 shrink-0 rounded-md overflow-hidden bg-white" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "hk-tg-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "span", "classes": "" },
                            "cssSelectors": { "*": { "classes": "block min-w-0 text-sm font-medium text-neutral-700 truncate" } }
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
        "title": "Categories Single",
        "type": "categories_single",
        "content": [
          {
            "id": "hk-cs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-cs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-cs-head-h",
                    "type": "heading",
                    "options": { "text": "Category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-cs-head-t",
                    "type": "text",
                    "options": { "text": "Products in this category, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-cs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-cs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-cs-body-pg",
                    "type": "postGrid",
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
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-3 p-3 rounded-lg bg-stone-50 transition-colors hover:bg-stone-100" }
                    },
                    "children": [
                      {
                        "id": "hk-cs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-3 p-3 rounded-lg bg-stone-50 transition-colors hover:bg-stone-100" }
                        },
                        "children": [
                          {
                            "id": "hk-cs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-white" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "hk-cs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-stone-800 line-clamp-2 transition-colors group-hover:text-teal-700" } }
                          },
                          {
                            "id": "hk-cs-body-c-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "hidden" },
                              "total-reviews": { "classes": "hidden" }
                            }
                          },
                          {
                            "id": "hk-cs-body-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-neutral-300 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-sm font-semibold text-neutral-900" },
                              "simple-price-regular": { "classes": "text-xs line-through text-neutral-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-neutral-500" },
                              "variable-price-max": { "classes": "text-xs text-neutral-500" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-cs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "previous-icon": { "classes": "empty:hidden flex items-center" },
                          "next-icon": { "classes": "empty:hidden flex items-center" },
                          "current": { "classes": "w-14 text-center text-sm" }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-cs-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-stone-50 border-t border-stone-200" } },
            "children": [
              {
                "id": "hk-cs-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "hk-cs-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free delivery over Tk 1,000",
                          "description": "Inside Dhaka only.",
                          "icon": "IconTruck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Pay at your door.",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "7 day returns",
                          "description": "No questions asked.",
                          "icon": "IconArrowBackUp",
                          "iconSize": ""
                        },
                        {
                          "title": "bKash and Nagad accepted",
                          "description": "Plus Rocket and cards.",
                          "icon": "IconDeviceMobile",
                          "iconSize": ""
                        },
                        {
                          "title": "Hotline 9am to 10pm",
                          "description": "Seven days a week.",
                          "icon": "IconPhoneCall",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 bg-neutral-50 border-y border-neutral-200 px-5 py-3" },
                      "loop-item": { "classes": "flex items-center gap-2" },
                      "title": { "classes": "text-xs font-medium text-neutral-700 whitespace-nowrap" },
                      "description": { "classes": "" },
                      "icon": { "classes": "text-neutral-400 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "hk-cs-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruck", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "hk-cs-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "span" },
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
        ],
        "meta": "",
      },
      {
        "title": "Categories Archive",
        "type": "categories",
        "content": [
          {
            "id": "hk-ca-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-ca-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-ca-head-h",
                    "type": "heading",
                    "options": { "text": "All categories", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-ca-head-t",
                    "type": "text",
                    "options": { "text": "Every room and every shelf, from cookware to storage.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-ca-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-ca-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-ca-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "40",
                        "per_page": "40",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count"
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "py-6" },
                      "loop-items": { "classes": "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2" },
                      "loop-item": { "classes": "flex items-center justify-between gap-4 pl-4 pr-5 py-3.5 bg-white border-l-2 border-teal-500 hover:bg-teal-50 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "hk-ca-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center justify-between gap-4 pl-4 pr-5 py-3.5 bg-white border-l-2 border-teal-500" }
                        },
                        "children": [
                          {
                            "id": "hk-ca-grid-3",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-medium text-neutral-900 truncate" } }
                          },
                          {
                            "id": "hk-ca-grid-4",
                            "type": "termCount",
                            "options": { "label": "", "suffix": " items", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "shrink-0 text-xs font-medium text-teal-700 bg-teal-100 rounded-full px-2.5 py-1" } }
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
        "title": "Product",
        "type": "product",
        "content": [
          {
            "id": "hk-pd-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-pd-main-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-12" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "hk-pd-gallery",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "hk-pd-gal-1",
                            "type": "productGallery",
                            "options": {
                              "thumbnails": true,
                              "sliderOptions": {
                                "type": "fade",
                                "perPage": 1,
                                "perMove": 1,
                                "rewind": true,
                                "arrows": 1,
                                "pagination": 0,
                                "speed": 600,
                                "drag": 0
                              }
                            },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "items": { "classes": "" },
                              "item": { "classes": "rounded-2xl overflow-hidden bg-neutral-100 [&_img]:aspect-[4/5] [&_img]:object-cover" },
                              "image": { "classes": "" },
                              "arrows": { "classes": "" },
                              "prev": { "classes": "bg-black/40! opacity-100! size-10! rounded-full! hover:bg-black/60! [&>svg]:fill-white!" },
                              "next": { "classes": "bg-black/40! opacity-100! size-10! rounded-full! hover:bg-black/60! [&>svg]:fill-white!" },
                              "pagination": { "classes": "" },
                              "dot": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-pd-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "hk-pd-cat-1",
                            "type": "productCategories",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-2 flex-wrap" },
                              "label": { "classes": "text-xs text-neutral-400" },
                              "items": { "classes": "flex flex-wrap items-center" },
                              "item": { "classes": "text-xs text-neutral-500 hover:text-neutral-900 transition-colors after:content-['/'] after:mx-2 after:text-neutral-300 last:after:content-none" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "hidden" }
                            }
                          },
                          {
                            "id": "hk-pd-title",
                            "type": "postTitle",
                            "options": { "linkTo": "", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900" } }
                          },
                          {
                            "id": "hk-pd-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2.5 items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-3.5" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "order-first px-2 py-0.5 text-xs font-bold text-white bg-emerald-600 rounded" },
                              "total-reviews": { "classes": "text-xs text-neutral-500 underline decoration-neutral-300 underline-offset-2" }
                            }
                          },
                          {
                            "id": "hk-pd-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-center text-neutral-400 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "px-3 py-1 text-base font-bold text-white bg-red-600 rounded-md" },
                              "simple-price-regular": { "classes": "text-sm line-through text-neutral-400" },
                              "variable-price-wrap": { "classes": "flex gap-2 items-center" },
                              "variable-price-min": { "classes": "text-base text-neutral-600" },
                              "variable-price-max": { "classes": "text-base text-neutral-600" }
                            }
                          },
                          {
                            "id": "hk-pd-var-1",
                            "type": "productVariablePrices",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "attr-wrap": { "classes": "flex flex-col gap-4" },
                              "attr-item": { "classes": "flex flex-col gap-2" },
                              "attr-title": { "classes": "text-sm font-semibold text-neutral-800" },
                              "attr-items-wrap": { "classes": "flex flex-wrap gap-2" },
                              "variation-item": { "classes": "px-4 py-1.5 text-sm font-medium text-neutral-600 bg-neutral-100 rounded-full cursor-pointer hover:bg-teal-50 hover:text-teal-700 transition-colors" },
                              "variation-price": { "classes": "text-xl font-bold text-teal-600" },
                              "variation-selected": { "classes": "bg-teal-500 text-white hover:bg-teal-500 hover:text-white" },
                              "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
                            }
                          },
                          {
                            "id": "hk-pd-stock-1",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock",
                              "inStockText": "In stock",
                              "outOfStockIcon": "IconCircleX",
                              "inStockIcon": "IconCircleCheck",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-3" },
                              "stock-status": { "classes": "flex items-center gap-1.5 w-fit px-3 py-1 rounded-full" },
                              "label": { "classes": "flex items-center gap-1.5" },
                              "label-text": { "classes": "text-xs font-semibold" },
                              "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
                              "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
                              "out-of-stock": { "classes": "bg-red-50 text-red-700" },
                              "out-of-stock-label": { "classes": "" },
                              "out-of-stock-icon": { "classes": "" },
                              "in-stock": { "classes": "bg-emerald-50 text-emerald-700" },
                              "in-stock-label": { "classes": "" },
                              "in-stock-icon": { "classes": "" }
                            }
                          },
                          {
                            "id": "hk-pd-atc-1",
                            "type": "addToCart",
                            "hideButtonText": true,
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 18, "hideQuanity": false, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3 w-full max-w-sm" },
                              "quantity-wrapper": { "classes": "flex items-center justify-between gap-2 w-full px-3 py-2 rounded-lg border border-neutral-300 text-neutral-500" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-neutral-900 text-white cursor-pointer hover:bg-neutral-800 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-sm font-semibold tracking-wide" }
                            }
                          },
                          {
                            "id": "hk-pd-msg-1",
                            "type": "messengerButton",
                            "options": {
                              "label": "Order on Messenger",
                              "username": "",
                              "message": "Hi, I want to order {product_title} (Tk {product_price}) {product_url}",
                              "icon": "IconBrandMessenger",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-full max-w-sm" },
                              "link": { "classes": "flex gap-2.5 w-full items-center justify-center py-3.5 rounded-lg bg-[#0084ff] text-white cursor-pointer hover:bg-[#0073e6] transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-semibold tracking-wide" }
                            }
                          },
                          {
                            "id": "hk-pd-usp-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconPointFilled",
                              "iconSize": 15,
                              "items": [
                                {
                                  "text": "Same day dispatch before 4pm",
                                  "icon": "IconBolt"
                                },
                                {
                                  "text": "Delivered by Pathao, RedX and Steadfast",
                                  "icon": "IconTruck"
                                },
                                {
                                  "text": "Secure bKash, Nagad and card payments",
                                  "icon": "IconCreditCard"
                                },
                                {
                                  "text": "Hotline open 9am to 10pm, every day",
                                  "icon": "IconHeadset"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "li": { "classes": "flex items-center gap-3" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-teal-50 text-teal-600" },
                              "text": { "classes": "text-sm font-medium text-neutral-800" }
                            }
                          },
                          {
                            "id": "hk-pd-sku-1",
                            "type": "productSku",
                            "options": { "label": "SKU", "icon": "", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-2" },
                              "label": { "classes": "empty:hidden text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
                              "sku": { "classes": "px-2.5 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-md tracking-wider" },
                              "icon": { "classes": "shrink-0 flex items-center text-neutral-400" }
                            }
                          },
                          {
                            "id": "hk-pd-brand-1",
                            "type": "productBrands",
                            "options": { "label": "Brand", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-start gap-4 py-2 border-b border-neutral-100" },
                              "label": { "classes": "w-28 shrink-0 text-xs font-semibold uppercase tracking-wide text-neutral-400" },
                              "items": { "classes": "flex flex-wrap items-baseline gap-x-1 text-sm text-neutral-700" },
                              "item": { "classes": "hover:text-teal-600 transition-colors" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "text-neutral-300" }
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
            "id": "hk-pd-tabs-sec",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-stone-50 border-y border-stone-200" } },
            "children": [
              {
                "id": "hk-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-pd-tabs",
                    "type": "tabs",
                    "options": {
                      "orientation": "",
                      "tabsItems": [
                        {
                          "label": "Description",
                          "icon": "IconFileDescription"
                        },
                        {
                          "label": "Care and specs",
                          "icon": "IconListDetails"
                        },
                        {
                          "label": "Reviews",
                          "icon": "IconStar"
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "bg-neutral-50 border border-neutral-200 rounded-2xl" },
                      "navs-items": { "classes": "gap-1 w-fit bg-white p-1 rounded-full border border-neutral-200" },
                      "nav-item": { "classes": "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-neutral-600 hover:bg-neutral-100 whitespace-nowrap cursor-pointer" },
                      "nav-item-active": { "classes": "bg-neutral-900! text-white! hover:bg-neutral-900!" },
                      "nav-item-label": { "classes": "" },
                      "nav-item-icon": { "classes": "empty:hidden" },
                      "nav-item-content": { "classes": "pt-5" }
                    },
                    "children": [
                      {
                        "id": "hk-pd-tab1",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "hk-pd-desc",
                            "type": "postContent",
                            "options": { "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-stone-700 leading-relaxed max-w-3xl [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3 [&_strong]:font-semibold" } }
                          }
                        ]
                      },
                      {
                        "id": "hk-pd-tab2",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "hk-pd-spec-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Brand: add the brand name",
                                  "icon": ""
                                },
                                {
                                  "text": "Model: add the model or SKU",
                                  "icon": ""
                                },
                                {
                                  "text": "Material: add the material",
                                  "icon": ""
                                },
                                {
                                  "text": "Country of origin: add the origin",
                                  "icon": ""
                                },
                                {
                                  "text": "Warranty: 12 months brand warranty",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "ml-5 max-w-2xl" },
                              "li": { "classes": "list-disc py-1.5 border-b border-neutral-100 last:border-0 marker:text-neutral-300" },
                              "icon": { "classes": "empty:hidden" },
                              "text": { "classes": "text-sm text-neutral-700" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-pd-tab3",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "hk-pd-rev",
                            "type": "commentsGrid",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                              "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg bg-white border border-stone-200" }
                            },
                            "children": [
                              {
                                "id": "hk-pd-rev-loop",
                                "type": "commentsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                                  "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg bg-white border border-stone-200" }
                                },
                                "children": [
                                  {
                                    "id": "hk-pd-rev-avatar",
                                    "type": "commentAvatar",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": { "classes": "w-fit" },
                                      "link": { "classes": "block" },
                                      "image": { "classes": "w-10 h-10 rounded-full object-cover bg-neutral-100" }
                                    }
                                  },
                                  {
                                    "id": "hk-pd-rev-author",
                                    "type": "commentAuthor",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900" } }
                                  },
                                  {
                                    "id": "hk-pd-rev-rate",
                                    "type": "commentRate",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                                  },
                                  {
                                    "id": "hk-pd-rev-body",
                                    "type": "commentContent",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
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
            "id": "hk-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-pd-rel-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "hk-pd-rel-h",
                    "type": "heading",
                    "options": { "text": "Pairs well with", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-semibold tracking-tight text-stone-900" } }
                  },
                  {
                    "id": "hk-pd-rel-rp-1",
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
                        "id": "hk-pd-rel-rp-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "group flex flex-row items-center gap-4 p-3 rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300" }
                        },
                        "children": [
                          {
                            "id": "hk-pd-rel-rp-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-24 shrink-0 overflow-hidden rounded-lg" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-24 h-24 object-contain bg-neutral-50" }
                            }
                          },
                          {
                            "id": "hk-pd-rel-rp-4",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "flex-1 min-w-0 text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-teal-600" } }
                          },
                          {
                            "id": "hk-pd-rel-rp-5",
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
                  }
                ]
              }
            ]
          }
        ],
        "meta": "",
      },
      {
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "hk-sh-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-zinc-900" } },
            "children": [
              {
                "id": "hk-sh-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "hk-sh-head-h",
                    "type": "heading",
                    "options": { "text": "Everything for the home", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-semibold tracking-tight text-white" } }
                  },
                  {
                    "id": "hk-sh-head-t",
                    "type": "text",
                    "options": { "text": "Cookware, dinnerware, storage and small appliances — newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-stone-400 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-sh-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hk-sh-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "hk-sh-body-pg",
                    "type": "postGrid",
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
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" },
                      "loop-item": { "classes": "group flex flex-col gap-3 pb-4 border-b border-stone-200" }
                    },
                    "children": [
                      {
                        "id": "hk-sh-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" },
                          "loop-item": { "classes": "group flex flex-col gap-3 pb-4 border-b border-stone-200" }
                        },
                        "children": [
                          {
                            "id": "hk-sh-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-white" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "hk-sh-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-stone-800 line-clamp-2 transition-colors group-hover:text-teal-700" } }
                          },
                          {
                            "id": "hk-sh-body-c-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-neutral-400 [&_svg]:size-3" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "text-xs text-neutral-500" },
                              "total-reviews": { "classes": "text-xs text-neutral-400" }
                            }
                          },
                          {
                            "id": "hk-sh-body-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-center text-neutral-400" },
                              "simple-price-sale": { "classes": "text-base font-medium text-neutral-900 tracking-tight" },
                              "simple-price-regular": { "classes": "text-base text-neutral-400 line-through decoration-1" },
                              "variable-price-wrap": { "classes": "flex gap-2 items-center" },
                              "variable-price-min": { "classes": "text-base text-neutral-600" },
                              "variable-price-max": { "classes": "text-base text-neutral-600" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hk-sh-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-stone-300 text-sm text-stone-700 cursor-pointer hover:border-teal-600 hover:text-teal-700" },
                          "previous-icon": { "classes": "empty:hidden flex items-center" },
                          "next-icon": { "classes": "empty:hidden flex items-center" },
                          "current": { "classes": "w-14 text-center text-sm" }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "hk-sh-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-stone-50 border-t border-stone-200" } },
            "children": [
              {
                "id": "hk-sh-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "hk-sh-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Verified Sellers Only",
                          "description": "Every seller on the platform is checked before a single product goes live.",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Honest Pricing",
                          "description": "The price you see includes VAT. No surprises at checkout.",
                          "icon": "IconPercentage",
                          "iconSize": ""
                        },
                        {
                          "title": "Free Gift Wrapping",
                          "description": "Tick the box at checkout and we will wrap it before dispatch.",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Loyalty Rewards",
                          "description": "Earn points on every order and spend them on your next one.",
                          "icon": "IconStar",
                          "iconSize": ""
                        },
                        {
                          "title": "Live Order Tracking",
                          "description": "Follow your parcel from our warehouse to your door in real time.",
                          "icon": "IconMapPin",
                          "iconSize": ""
                        },
                        {
                          "title": "Secure Checkout",
                          "description": "Card and mobile wallet payments run over an encrypted connection.",
                          "icon": "IconLock",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 py-6" },
                      "loop-item": { "classes": "flex items-start gap-4" },
                      "title": { "classes": "text-sm font-semibold text-neutral-900" },
                      "description": { "classes": "text-sm text-neutral-600 leading-relaxed" },
                      "icon": { "classes": "shrink-0 mt-0.5 w-8 h-8 rounded-full border border-teal-200 bg-teal-50 text-teal-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "hk-sh-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconShieldCheck", "size": "16" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "hk-sh-fb-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-1" } },
                        "children": [
                          {
                            "id": "hk-sh-fb-4",
                            "type": "featureboxTitle",
                            "options": { "tag": "h4" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "img": { "classes": "" }
                            }
                          },
                          {
                            "id": "hk-sh-fb-5",
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
        ],
        "meta": "",
      },
    ]
  },

]
export default template;
