/**
 * Template: Grocery & Pure Food.
 *
 * A pure-food grocery storefront for the Bangladeshi market -- ghee, honey,
 * mustard oil, dates, nuts and whole spices -- in the shape those sellers use:
 * trust and cash-on-delivery high on the page, a phone-order band, weight
 * variants on the product page, and add-to-cart directly on the product card.
 * Copy is English.
 *
 * Same contract as the other templates here: a name, some meta, and one entry
 * per page type, where each page's `content` is an ARRAY of builder blocks. The
 * API stores a page's content as a JSON STRING (Templates.jsx:305-311 parses it
 * back), so whatever applies this template must `JSON.stringify(page.content)`.
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
 * Two things to set before this goes live:
 *
 *   1. The phone number. The call band uses a real click-to-call link, built as
 *      `${scheme}${url}` by Button.jsx with `scheme: "tel:"`, and both the
 *      label and the number are the placeholder `01XXXXXXXXX`.
 *   2. The WhatsApp number, left empty in the whatsappButton blocks for the same
 *      reason MessengerButton's username is -- see MessengerButton.js and
 *      WhatsappButton.js for why a preset must not ship one.
 *
 * Everything else follows the renderer quirks the element-layouts docblocks
 * establish. The ones that shaped this file:
 *
 *   - Add-to-cart on a card is styling only: AddToCart.jsx takes productData
 *     from props, nothing passes it inside a loop, and its handlers are
 *     commented out -- so the card button is a shape, not a working cart action.
 *     It is here because that is how these storefronts look; wiring it up is a
 *     renderer job.
 *   - postGrid queries live under `queryPrams` (PostGrid.jsx ignores the
 *     `queryParams` the definition declares), with `loop-items`/`loop-item`
 *     mirrored onto the postLoop child because PostLoop.jsx:18 reads them from
 *     the parent's context.
 *   - postTitle, postDate and postAuthor default `linkTo` to 'postUrl', which
 *     wraps them in a dead <Link href="#">, so each sets it explicitly;
 *     postDate also reads `dateFormat`, not the `format` it declares.
 *   - Term headers are a heading plus text, never termTitle/termCount: those
 *     read `useCategory()` with no fallback and only TermsLoop/TermsSlider
 *     provide it.
 *   - An archive is chosen by `options.queryPrams.taxonomy`; `product_cat` is
 *     verified, `product_tag` and `product_brand` come from the backend.
 *
 * Picked presets are run through the kit's accent remap (orange -> green) so the
 * pages read as one palette. Left alone on purpose: amber (rating stars), red
 * (discount badges), emerald (the purity checklist ticks) and brand hexes such
 * as WhatsApp's #25d366.
 */

var template = [
  {

    "name": "Grocery & Pure Food",
    "description": "Bangladeshi pure-food grocery: trust-led home page, phone-order band, weight variants and add-to-cart on the card.",
    "thumbnail": "",
    "meta": "",
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "gr-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white shadow-sm sticky top-0 z-40" } },
            "children": [
              {
                "id": "gr-hdr-strip",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full bg-green-700" } },
                "children": [
                  {
                    "id": "gr-hdr-strip-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-7xl mx-auto px-5 py-2 flex items-center justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gr-hdr-strip-l",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gr-hdr-strip-t",
                            "type": "text",
                            "options": { "text": "Cash on delivery in all 64 districts - free over Tk 1,000 inside Dhaka", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-green-50" } }
                          }
                        ]
                      },
                      {
                        "id": "gr-hdr-strip-r",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-2" } },
                        "children": [
                          {
                            "id": "gr-hdr-strip-call",
                            "type": "button",
                            "options": { "text": "Order by phone: 01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhoneCall", "iconSize": 15 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-green-100 cursor-pointer transition-colors" },
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
                "id": "gr-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-4" } },
                "children": [
                  {
                    "id": "gr-hdr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-4 grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gr-hdr-gi-logo",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gr-hdr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Grocery & Pure Food", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-32 h-auto object-contain" },
                              "text": { "classes": "text-xl font-bold text-neutral-900" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-hdr-gi-search",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gr-hdr-search",
                            "type": "quickSearch",
                            "options": { "placeholder": "Search ghee, honey, oil, dates, spices", "iconPosition": "", "icon": "IconZoom" },
                            "cssSelectors": {
                              "*": { "classes": "border-2 border-green-300 rounded-full py-1.5 px-5 bg-green-50 w-full" },
                              "input-search": { "classes": "w-full px-2 bg-transparent border-0 shadow-none! outline-none" },
                              "input-wrapper": { "classes": "flex flex-nowrap gap-2 items-center w-full" },
                              "icon": { "classes": "text-green-700 shrink-0" },
                              "popover": { "classes": "bg-white shadow-xl rounded-lg border border-neutral-100 w-full" },
                              "reset": { "classes": "text-red-400 text-sm cursor-pointer shrink-0" },
                              "categories": { "classes": "" },
                              "brands": { "classes": "" },
                              "items": { "classes": "divide-y divide-neutral-100" },
                              "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-green-50" },
                              "item-title": { "classes": "" },
                              "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                              "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                              "page-item": { "classes": "border border-solid border-neutral-300 shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                              "page-count": { "classes": "border border-solid border-neutral-300 shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-hdr-gi-actions",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3 justify-end" } },
                        "children": [
                          {
                            "id": "gr-hdr-account",
                            "type": "button",
                            "options": { "text": "Account", "linkTo": "custom", "scheme": "", "url": "/account", "target": "", "icon": "IconUserCircle", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "hidden sm:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-green-700 cursor-pointer transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "font-medium" }
                            }
                          },
                          {
                            "id": "gr-hdr-cart",
                            "type": "cart",
                            "options": { "buttonIcon": "IconShoppingCart", "editMode": false },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "button": { "classes": "flex items-center gap-2 text-sm px-4 rounded-full py-2 bg-green-700 hover:bg-green-800 cursor-pointer text-white transition-colors" },
                              "button-quantity": { "classes": "font-semibold" },
                              "button-icon": { "classes": "" },
                              "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                              "cart-header": { "classes": "flex justify-between items-center bg-green-700 py-3 px-4 text-white" },
                              "cart-total-items": { "classes": "" },
                              "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                              "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                              "go-to-checkout": { "classes": "text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full cursor-pointer" },
                              "coupon-input": { "classes": "w-28 border! border-solid border-neutral-300 shadow-none! text-center rounded-full" },
                              "coupon-apply-button": { "classes": "text-white bg-neutral-900 px-3 py-2 rounded-full cursor-pointer" },
                              "back-to-cart": { "classes": "text-sm text-green-700 cursor-pointer" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "gr-hdr-nav",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-neutral-100 bg-white" } },
                "children": [
                  {
                    "id": "gr-hdr-nav-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-2 overflow-x-auto" } },
                    "children": [
                      {
                        "id": "gr-hdr-menu",
                        "type": "menu",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "menu": { "classes": "flex gap-6 text-sm font-medium text-neutral-700 whitespace-nowrap" },
                          "menu-item": { "classes": "" },
                          "sub-menu": { "classes": "rounded-lg border border-neutral-100 bg-white shadow-lg py-2 min-w-48" },
                          "menu-link": { "classes": "hover:text-green-700 transition-colors py-1" },
                          "link-label": { "classes": "" },
                          "icon": { "classes": "text-green-600" }
                        },
                        "children": [
                          { "id": "gr-hdr-mi-1", "type": "menuItem", "options": { "label": "All Categories", "url": "/categories", "icon": "IconLayoutGrid", "iconSize": "16" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          {
                            "id": "gr-hdr-mi-2",
                            "type": "menuItem",
                            "options": { "label": "Ghee & Oil", "url": "/categories/ghee-and-oil" },
                            "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" }, "sub-menu": { "classes": "" } },
                            "children": [
                              { "id": "gr-hdr-mi-2-1", "type": "menuItem", "options": { "label": "Pure Ghee", "url": "/categories/ghee" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-green-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "gr-hdr-mi-2-2", "type": "menuItem", "options": { "label": "Mustard Oil", "url": "/categories/mustard-oil" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-green-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                            ]
                          },
                          { "id": "gr-hdr-mi-3", "type": "menuItem", "options": { "label": "Honey", "url": "/categories/honey" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "gr-hdr-mi-4", "type": "menuItem", "options": { "label": "Dates & Nuts", "url": "/categories/dates-and-nuts" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "gr-hdr-mi-5", "type": "menuItem", "options": { "label": "Whole Spices", "url": "/categories/spices" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "gr-hdr-mi-6", "type": "menuItem", "options": { "label": "Offers", "url": "/shop/offers" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "text-red-600 font-semibold" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "gr-hdr-mi-7", "type": "menuItem", "options": { "label": "Track Order", "url": "/track-order" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
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
            "id": "gr-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-t border-neutral-200" } },
            "children": [
              {
                "id": "gr-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-12" } },
                "children": [
                  {
                    "id": "gr-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gr-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "gr-ftr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Grocery & Pure Food", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-36 h-auto object-contain" },
                              "text": { "classes": "text-xl font-bold text-neutral-900" }
                            }
                          },
                          {
                            "id": "gr-ftr-tagline",
                            "type": "text",
                            "options": { "text": "Ghee, honey, mustard oil, dates, nuts and whole spices with nothing added.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xs" } }
                          },
                          {
                            "id": "gr-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": { "icon": "IconPhone", "label": "Phone", "value": "01XXXXXXXXX" },
                              "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
                              "location": { "icon": "IconMapPin", "label": "Location", "value": "Add your shop address here" },
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 flex-col text-sm text-neutral-600" },
                              "item": { "classes": "flex gap-2 items-start" },
                              "link": { "classes": "flex gap-2 items-center hover:text-green-700 transition-colors" },
                              "phone-link": { "classes": "" },
                              "email-link": { "classes": "" },
                              "icon": { "classes": "text-green-600 shrink-0" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gr-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "items": [
                                { "text": "Ghee & Oil", "icon": "", "slug": "/categories/ghee-and-oil" },
                                { "text": "Honey", "icon": "", "slug": "/categories/honey" },
                                { "text": "Dates & Nuts", "icon": "", "slug": "/categories/dates-and-nuts" },
                                { "text": "Whole Spices", "icon": "", "slug": "/categories/spices" },
                                { "text": "All Products", "icon": "", "slug": "/shop" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-green-700 transition-colors" },
                              "icon": { "classes": "text-neutral-400" },
                              "text": { "classes": "text-sm text-neutral-600" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-ftr-gi-help",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gr-ftr-ll-help",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Service",
                              "tag": "ul",
                              "items": [
                                { "text": "Track Order", "icon": "", "slug": "/track-order" },
                                { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
                                { "text": "Returns & Refunds", "icon": "", "slug": "/returns" },
                                { "text": "Purity Promise", "icon": "", "slug": "/purity" },
                                { "text": "FAQ", "icon": "", "slug": "/faq" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-green-700 transition-colors" },
                              "icon": { "classes": "text-neutral-400" },
                              "text": { "classes": "text-sm text-neutral-600" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-ftr-gi-order",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "gr-ftr-order-h",
                            "type": "heading",
                            "options": { "text": "Order by phone", "tag": "h3" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" } }
                          },
                          {
                            "id": "gr-ftr-order-t",
                            "type": "text",
                            "options": { "text": "Call between 9am and 10pm and we will take the order for you.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
                          },
                          {
                            "id": "gr-ftr-order-call",
                            "type": "button",
                            "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-700 text-white cursor-pointer hover:bg-green-800 transition-colors w-fit" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-bold tracking-wide" }
                            }
                          },
                          {
                            "id": "gr-ftr-wa",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Chat on WhatsApp",
                              "phone": "",
                              "message": "Hi, I want to place an order.",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-full border border-[#25d366] bg-white text-[#1da851] cursor-pointer hover:bg-[#25d366]/5 transition-colors" },
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
                "id": "gr-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-neutral-200" } },
                "children": [
                  {
                    "id": "gr-ftr-bottom-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gr-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gr-ftr-copy",
                            "type": "text",
                            "options": { "text": "(c) 2026 Grocery & Pure Food. All rights reserved.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
                          }
                        ]
                      },
                      {
                        "id": "gr-ftr-pay-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                        "children": [
                          {
                            "id": "gr-ftr-pay",
                            "type": "image",
                            "options": { "src": "https://placehold.co/240x32?text=Payments", "altText": "Accepted payment methods", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "" },
                              "img": { "classes": "h-7 w-auto object-contain opacity-80" }
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
            "id": "gr-bs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-bs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pt-12 pb-8 flex flex-col gap-5" } },
                "children": [
                  {
                    "id": "gr-bs-title",
                    "type": "postTitle",
                    "options": { "linkTo": "", "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight" } }
                  },
                  {
                    "id": "gr-bs-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500" } },
                    "children": [
                      {
                        "id": "gr-bs-author",
                        "type": "postAuthor",
                        "options": { "linkTo": "", "classes": "" },
                        "cssSelectors": { "*": { "classes": "font-medium text-neutral-700" } }
                      },
                      {
                        "id": "gr-bs-date",
                        "type": "postDate",
                        "options": { "linkTo": "", "dateFormat": "DD MMMM, YYYY" },
                        "cssSelectors": { "*": { "classes": "text-neutral-400" } }
                      }
                    ]
                  },
                  {
                    "id": "gr-bs-thumb",
                    "type": "postThumbnail",
                    "options": { "linkTo": "postUrl" },
                    "cssSelectors": {
                      "*": { "classes": "w-full overflow-hidden rounded-xl" },
                      "link": { "classes": "block" },
                      "image": { "classes": "w-full aspect-video object-cover bg-neutral-100" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-bs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-bs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pb-12" } },
                "children": [
                  {
                    "id": "gr-bs-content",
                    "type": "postContent",
                    "options": { "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-base text-neutral-700 leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-4 [&_a]:text-green-800 [&_a]:underline [&_img]:rounded-xl [&_img]:my-6" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-bs-comments",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-y border-neutral-100" } },
            "children": [
              {
                "id": "gr-bs-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 py-10 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gr-bs-comments-h",
                    "type": "heading",
                    "options": { "text": "Comments", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-bs-rev",
                    "type": "commentsGrid",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "w-full" },
                      "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                      "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg bg-white border border-neutral-200" }
                    },
                    "children": [
                      {
                        "id": "gr-bs-rev-loop",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                          "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg bg-white border border-neutral-200" }
                        },
                        "children": [
                          {
                            "id": "gr-bs-rev-avatar",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-10 h-10 rounded-full object-cover bg-neutral-100" }
                            }
                          },
                          {
                            "id": "gr-bs-rev-author",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900" } }
                          },
                          {
                            "id": "gr-bs-rev-rate",
                            "type": "commentRate",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                          },
                          {
                            "id": "gr-bs-rev-body",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
                          }
                        ]
                      },
                      {
                        "id": "gr-bs-form",
                        "type": "commentsForm",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "mt-6 p-5 rounded-lg bg-white border border-neutral-200" } }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-bs-more",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-bs-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gr-bs-more-h",
                    "type": "heading",
                    "options": { "text": "Read next", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-bs-more-pg-1",
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
                        "id": "gr-bs-more-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "flex gap-4 items-center bg-white border border-gray-100 rounded-lg p-3 transition-all duration-200 hover:border-gray-300 group" }
                        },
                        "children": [
                          {
                            "id": "gr-bs-more-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-20 h-20 shrink-0 overflow-hidden rounded-md bg-gray-50" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gr-bs-more-pg-4",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-green-600" } }
                          },
                          {
                            "id": "gr-bs-more-pg-5",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-400" } }
                          }
                        ]
                      },
                      {
                        "id": "gr-bs-more-pg-6",
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
            "id": "gr-bl-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-bl-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-bl-head-h",
                    "type": "heading",
                    "options": { "text": "Recipes and guides", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-bl-head-t",
                    "type": "text",
                    "options": { "text": "How to use what you buy, and how to tell pure from adulterated.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-bl-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-bl-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gr-bl-grid-1",
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
                        "id": "gr-bl-grid-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "flex flex-col gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group" }
                        },
                        "children": [
                          {
                            "id": "gr-bl-grid-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "relative h-52 overflow-hidden rounded-lg bg-gray-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gr-bl-grid-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-neutral-400" } }
                          },
                          {
                            "id": "gr-bl-grid-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-green-600" } }
                          },
                          {
                            "id": "gr-bl-grid-6",
                            "type": "postExcerpt",
                            "options": {
                              "tag": "p",
                              "linkTo": "postUrl",
                              "maxWord": 22,
                              "readMoreText": "Read More",
                              "readMoreIcon": "IconArrowNarrowRight",
                              "readMoreIconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3 mt-auto" },
                              "excerpt": { "classes": "text-sm text-neutral-600 leading-relaxed line-clamp-3" },
                              "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-green-600 hover:text-green-700" },
                              "read-more-icon": { "classes": "" },
                              "read-more-label": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-bl-grid-7",
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
                      },
                      {
                        "id": "gr-bl-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
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
            "id": "gr-nf",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "gr-nf-icon",
                    "type": "icon",
                    "options": { "iconName": "IconBasketOff", "size": "48" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-neutral-300" } }
                  },
                  {
                    "id": "gr-nf-h",
                    "type": "heading",
                    "options": { "text": "We could not find that page", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-nf-t",
                    "type": "text",
                    "options": { "text": "The link may be broken or the item may be out of stock. Try the shop, or call us and we will help.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-md" } }
                  },
                  {
                    "id": "gr-nf-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-2" } },
                    "children": [
                      {
                        "id": "gr-nf-b1",
                        "type": "button",
                        "options": { "text": "Back to home", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "IconHome", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-green-700 text-white cursor-pointer hover:bg-green-800 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold" }
                        }
                      },
                      {
                        "id": "gr-nf-b2",
                        "type": "button",
                        "options": { "text": "Shop all products", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-green-700 text-green-800 cursor-pointer hover:bg-green-50 transition-colors w-fit" },
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
            "id": "gr-hero",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50" } },
            "children": [
              {
                "id": "gr-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14" } },
                "children": [
                  {
                    "id": "gr-hero-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gr-hero-copy",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "gr-hero-h",
                            "type": "heading",
                            "options": { "text": "Pure food, straight from the source", "tag": "h1" },
                            "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight" } }
                          },
                          {
                            "id": "gr-hero-t",
                            "type": "text",
                            "options": {
                              "text": "Ghee, honey, mustard oil, dates, nuts and whole spices with nothing added. Cash on delivery across Bangladesh, free over Tk 1,000.",
                              "tag": "p"
                            },
                            "cssSelectors": { "*": { "classes": "text-base text-neutral-700 leading-relaxed max-w-lg" } }
                          },
                          {
                            "id": "gr-hero-actions",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-3" } },
                            "children": [
                              {
                                "id": "gr-hero-b1",
                                "type": "button",
                                "options": {
                                  "text": "Shop all products",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-700 text-white cursor-pointer hover:bg-green-800 transition-colors w-fit" },
                                  "icon": { "classes": "flex items-center shrink-0" },
                                  "label": { "classes": "text-sm font-semibold" }
                                }
                              },
                              {
                                "id": "gr-hero-b2",
                                "type": "button",
                                "options": { "text": "Browse categories", "linkTo": "custom", "scheme": "", "url": "/categories", "target": "", "icon": "", "iconSize": "" },
                                "cssSelectors": {
                                  "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-green-700 text-green-800 cursor-pointer hover:bg-green-50 transition-colors w-fit" },
                                  "icon": { "classes": "" },
                                  "label": { "classes": "text-sm font-semibold" }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gr-hero-pills-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 14,
                              "items": [
                                {
                                  "text": "Free delivery",
                                  "icon": "IconTruck"
                                },
                                {
                                  "text": "7 day returns",
                                  "icon": "IconRefresh"
                                },
                                {
                                  "text": "Genuine products",
                                  "icon": "IconShieldCheck"
                                },
                                {
                                  "text": "Gift wrapping",
                                  "icon": "IconGift"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-wrap gap-x-5 gap-y-2" },
                              "li": { "classes": "flex items-center gap-1.5" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center text-neutral-400" },
                              "text": { "classes": "text-xs font-medium text-neutral-600 whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-hero-art",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gr-hero-img-1",
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
            "id": "gr-trust",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-b border-neutral-100" } },
            "children": [
              {
                "id": "gr-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-6" } },
                "children": [
                  {
                    "id": "gr-trust-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free Home Delivery",
                          "description": "On every order over Tk 1,000 inside Dhaka.",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay in cash when the parcel reaches your door.",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "7 Day Easy Return",
                          "description": "Changed your mind? Send it back within 7 days.",
                          "icon": "IconArrowBackUp",
                          "iconSize": ""
                        },
                        {
                          "title": "Hotline Support",
                          "description": "Call us any day between 9am and 10pm.",
                          "icon": "IconPhoneCall",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-neutral-200 rounded-xl divide-y divide-neutral-200 sm:divide-y-0 sm:divide-x" },
                      "loop-item": { "classes": "flex items-center gap-4 p-5" },
                      "title": { "classes": "text-sm font-semibold text-neutral-900" },
                      "description": { "classes": "text-xs text-neutral-500 mt-0.5 leading-relaxed" },
                      "icon": { "classes": "shrink-0 w-11 h-11 rounded-full bg-green-50 text-green-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "gr-trust-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruckDelivery", "size": "22" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "gr-trust-fb-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col" } },
                        "children": [
                          {
                            "id": "gr-trust-fb-4",
                            "type": "featureboxTitle",
                            "options": { "tag": "h4" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "img": { "classes": "" }
                            }
                          },
                          {
                            "id": "gr-trust-fb-5",
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
          },
          {
            "id": "gr-cat",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-cat-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "gr-cat-h",
                    "type": "heading",
                    "options": { "text": "Shop by category", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-cat-tg-1",
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
                        "id": "gr-cat-tg-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group flex flex-col items-center gap-3 text-center" }
                        },
                        "children": [
                          {
                            "id": "gr-cat-tg-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-24 h-24 mx-auto rounded-full overflow-hidden bg-neutral-50 ring-2 ring-neutral-200 group-hover:ring-green-400 transition-all duration-200" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "gr-cat-tg-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 group-hover:text-green-600 transition-colors line-clamp-2" } }
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
            "id": "gr-best",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50" } },
            "children": [
              {
                "id": "gr-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "gr-best-h",
                    "type": "heading",
                    "options": { "text": "This week at the top", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-best-pg",
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
                      "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "gr-best-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                        },
                        "children": [
                          {
                            "id": "gr-best-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-neutral-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gr-best-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-green-800" } }
                          },
                          {
                            "id": "gr-best-c-rate-1",
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
                            "id": "gr-best-c-price-1",
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
                          },
                          {
                            "id": "gr-best-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "gr-best-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-md border border-neutral-200 bg-white text-neutral-800 cursor-pointer hover:border-green-400 hover:text-green-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
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
            "id": "gr-call",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-700" } },
            "children": [
              {
                "id": "gr-call-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4" } },
                "children": [
                  {
                    "id": "gr-call-h",
                    "type": "heading",
                    "options": { "text": "Prefer to order by phone?", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-white" } }
                  },
                  {
                    "id": "gr-call-t",
                    "type": "text",
                    "options": { "text": "Call us between 9am and 10pm and we will take the order for you. Cash on delivery available everywhere.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-green-50 leading-relaxed max-w-xl" } }
                  },
                  {
                    "id": "gr-call-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-1" } },
                    "children": [
                      {
                        "id": "gr-call-call",
                        "type": "button",
                        "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-green-800 cursor-pointer hover:bg-green-50 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-base font-bold tracking-wide" }
                        }
                      },
                      {
                        "id": "gr-call-wa-1",
                        "type": "whatsappButton",
                        "options": {
                          "label": "Ask about this product",
                          "phone": "",
                          "message": "Hi, I have a question about {product_title} {product_url}",
                          "icon": "IconBrandWhatsapp",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": { "classes": "w-fit" },
                          "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-lg border border-[#25d366] bg-white text-[#1da851] cursor-pointer hover:bg-[#25d366]/5 transition-colors" },
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
            "id": "gr-why",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-why-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "gr-why-h",
                    "type": "heading",
                    "options": { "text": "Why people buy from us", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900 text-center" } }
                  },
                  {
                    "id": "gr-why-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% Authentic",
                          "description": "Everything we sell comes straight from the brand or its authorised distributor.",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Same Day Dispatch",
                          "description": "Orders placed before 4pm are handed to the courier the same day.",
                          "icon": "IconBolt",
                          "iconSize": ""
                        },
                        {
                          "title": "Secure Payment",
                          "description": "Pay with bKash, Nagad, Rocket or any card through a secure gateway.",
                          "icon": "IconCreditCard",
                          "iconSize": ""
                        },
                        {
                          "title": "Nationwide Coverage",
                          "description": "We reach all 64 districts through Pathao, RedX and Steadfast.",
                          "icon": "IconMapPin",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" },
                      "loop-item": { "classes": "flex flex-col items-start gap-3 p-6 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" },
                      "title": { "classes": "text-base font-semibold text-neutral-900" },
                      "description": { "classes": "text-sm text-neutral-600 leading-relaxed" },
                      "icon": { "classes": "w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "gr-why-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconShieldCheck", "size": "24" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "gr-why-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h3" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "gr-why-fb-4",
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
            "id": "gr-blog",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50" } },
            "children": [
              {
                "id": "gr-blog-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "gr-blog-h",
                    "type": "heading",
                    "options": { "text": "From the kitchen", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-blog-pg-1",
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
                        "id": "gr-blog-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "relative rounded-2xl overflow-hidden group cursor-pointer min-h-72" }
                        },
                        "children": [
                          {
                            "id": "gr-blog-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "absolute inset-0 w-full h-full" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-90" }
                            }
                          },
                          {
                            "id": "gr-blog-pg-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "absolute top-3 left-3 z-10 text-[11px] font-medium text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full" } }
                          },
                          {
                            "id": "gr-blog-pg-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 text-white text-base font-semibold line-clamp-2 p-4 pt-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-transform duration-300 ease-out translate-y-1 group-hover:translate-y-0" } }
                          }
                        ]
                      },
                      {
                        "id": "gr-blog-pg-6",
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
            "id": "gr-ac-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-ac-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-ac-head-h",
                    "type": "heading",
                    "options": { "text": "My account", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-ac-head-t",
                    "type": "text",
                    "options": { "text": "Track an order, see past purchases and keep your delivery address up to date.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-ac-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-ac-ca-1",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12" } },
                "children": [
                  {
                    "id": "gr-ac-ca-2",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "gr-ac-ca-3",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "grid grid-cols-1 gap-5 max-w-md mx-auto" },
                          "grid-item": { "classes": "" }
                        },
                        "children": [
                          {
                            "id": "gr-ac-ca-4",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm" } },
                            "children": [
                              {
                                "id": "gr-ac-ca-5",
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
                                  "input": { "classes": "w-full px-3.5 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-sm text-neutral-900 focus:outline-none focus:bg-white focus:border-neutral-900" },
                                  "input-username": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
                                  "label-email": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
                                  "submit": { "classes": "w-full py-3 rounded-lg bg-neutral-900 text-sm font-semibold text-white text-center cursor-pointer hover:bg-neutral-800 transition-colors" },
                                  "forget-password": { "classes": "text-xs text-neutral-500 text-center hover:text-neutral-900 cursor-pointer" }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gr-ac-ca-6",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm" } },
                            "children": [
                              {
                                "id": "gr-ac-ca-7",
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
                                  "input": { "classes": "w-full px-3.5 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-sm text-neutral-900 focus:outline-none focus:bg-white focus:border-neutral-900" },
                                  "input-username": { "classes": "" },
                                  "input-phone": { "classes": "" },
                                  "input-password": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
                                  "label-email": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
                                  "label-phone": { "classes": "" },
                                  "label-password": { "classes": "" },
                                  "submit": { "classes": "w-full py-3 rounded-lg bg-neutral-900 text-sm font-semibold text-white text-center cursor-pointer hover:bg-neutral-800 transition-colors" },
                                  "have-account": { "classes": "text-xs text-neutral-500 text-center hover:text-neutral-900 cursor-pointer" }
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
                    "id": "gr-ac-ca-8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "gr-ac-ca-9",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
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
                          "*": { "classes": "w-full" },
                          "navs-items": { "classes": "flex gap-2 overflow-x-auto p-1 rounded-full bg-neutral-100" },
                          "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-4 py-2 rounded-full text-sm font-medium text-neutral-600 whitespace-nowrap cursor-pointer hover:text-neutral-900" },
                          "nav-item-active": { "classes": "bg-white! text-neutral-900! shadow-sm" },
                          "nav-item-label": { "classes": "" },
                          "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                          "nav-item-content": { "classes": "pt-6" }
                        },
                        "children": [
                          {
                            "id": "gr-ac-ca-10",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gr-ac-ca-11",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gr-ac-ca-12",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gr-ac-ca-13",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gr-ac-ca-14",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gr-ac-ca-15",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gr-ac-ca-16",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gr-ac-ca-17",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gr-ac-ca-18",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gr-ac-ca-19",
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
            "id": "gr-ty",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50" } },
            "children": [
              {
                "id": "gr-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "gr-ty-icon",
                    "type": "icon",
                    "options": { "iconName": "IconCircleCheckFilled", "size": "56" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-green-700" } }
                  },
                  {
                    "id": "gr-ty-h",
                    "type": "heading",
                    "options": { "text": "Order received", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-ty-t",
                    "type": "text",
                    "options": {
                      "text": "We have sent a confirmation by SMS. Our team will call to confirm the address before the parcel is dispatched. Please keep the cash ready for the delivery person.",
                      "tag": "p"
                    },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-700 leading-relaxed max-w-lg" } }
                  },
                  {
                    "id": "gr-ty-steps-1",
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
                      "li": { "classes": "list-decimal pl-1 marker:font-semibold marker:text-green-500" },
                      "icon": { "classes": "empty:hidden" },
                      "text": { "classes": "text-sm text-neutral-700 leading-relaxed" }
                    }
                  },
                  {
                    "id": "gr-ty-b",
                    "type": "button",
                    "options": { "text": "Continue shopping", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-700 text-white cursor-pointer hover:bg-green-800 transition-colors w-fit" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-semibold" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-ty-call",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-700" } },
            "children": [
              {
                "id": "gr-ty-call-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4" } },
                "children": [
                  {
                    "id": "gr-ty-call-h",
                    "type": "heading",
                    "options": { "text": "Prefer to order by phone?", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-white" } }
                  },
                  {
                    "id": "gr-ty-call-t",
                    "type": "text",
                    "options": { "text": "Call us between 9am and 10pm and we will take the order for you. Cash on delivery available everywhere.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-green-50 leading-relaxed max-w-xl" } }
                  },
                  {
                    "id": "gr-ty-call-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-1" } },
                    "children": [
                      {
                        "id": "gr-ty-call-call",
                        "type": "button",
                        "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-green-800 cursor-pointer hover:bg-green-50 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-base font-bold tracking-wide" }
                        }
                      },
                      {
                        "id": "gr-ty-call-wa-1",
                        "type": "whatsappButton",
                        "options": {
                          "label": "Ask about this product",
                          "phone": "",
                          "message": "Hi, I have a question about {product_title} {product_url}",
                          "icon": "IconBrandWhatsapp",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": { "classes": "w-fit" },
                          "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-lg border border-[#25d366] bg-white text-[#1da851] cursor-pointer hover:bg-[#25d366]/5 transition-colors" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-medium whitespace-nowrap" }
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
            "id": "gr-bn-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-bn-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-bn-head-h",
                    "type": "heading",
                    "options": { "text": "Brand", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-bn-head-t",
                    "type": "text",
                    "options": { "text": "Everything we stock from this producer.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-bn-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-bn-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gr-bn-body-pg",
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
                      "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "gr-bn-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                        },
                        "children": [
                          {
                            "id": "gr-bn-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-neutral-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gr-bn-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-green-800" } }
                          },
                          {
                            "id": "gr-bn-body-c-rate-1",
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
                            "id": "gr-bn-body-c-price-1",
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
                          },
                          {
                            "id": "gr-bn-body-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "gr-bn-body-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-md border border-neutral-200 bg-white text-neutral-800 cursor-pointer hover:border-green-400 hover:text-green-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-bn-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
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
            "id": "gr-br-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-br-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-br-head-h",
                    "type": "heading",
                    "options": { "text": "Brands and producers", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-br-head-t",
                    "type": "text",
                    "options": { "text": "The farms and millers we buy from.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-br-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-br-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "gr-br-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_brand",
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
                      "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-green-50 hover:border-green-200 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "gr-br-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200" }
                        },
                        "children": [
                          {
                            "id": "gr-br-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-11 h-11 shrink-0 rounded-md overflow-hidden bg-white" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "gr-br-grid-4",
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
        "title": "Tags Single",
        "type": "tags_single",
        "content": [
          {
            "id": "gr-ts-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-ts-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-ts-head-h",
                    "type": "heading",
                    "options": { "text": "Tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-ts-head-t",
                    "type": "text",
                    "options": { "text": "Products carrying this tag, across every category.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-ts-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-ts-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gr-ts-body-pg",
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
                      "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "gr-ts-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                        },
                        "children": [
                          {
                            "id": "gr-ts-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-neutral-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gr-ts-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-green-800" } }
                          },
                          {
                            "id": "gr-ts-body-c-rate-1",
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
                            "id": "gr-ts-body-c-price-1",
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
                          },
                          {
                            "id": "gr-ts-body-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "gr-ts-body-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-md border border-neutral-200 bg-white text-neutral-800 cursor-pointer hover:border-green-400 hover:text-green-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-ts-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
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
            "id": "gr-tg-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-tg-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-tg-head-h",
                    "type": "heading",
                    "options": { "text": "Browse by tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-tg-head-t",
                    "type": "text",
                    "options": { "text": "Tags cut across categories: gift packs, sugar free, cold pressed.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-tg-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-tg-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "gr-tg-grid-1",
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
                      "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-green-50 hover:border-green-200 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "gr-tg-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200" }
                        },
                        "children": [
                          {
                            "id": "gr-tg-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-11 h-11 shrink-0 rounded-md overflow-hidden bg-white" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "gr-tg-grid-4",
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
            "id": "gr-cs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-cs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-cs-head-h",
                    "type": "heading",
                    "options": { "text": "Category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-cs-head-t",
                    "type": "text",
                    "options": { "text": "Products in this category, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-cs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-cs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gr-cs-body-pg",
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
                      "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "gr-cs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                        },
                        "children": [
                          {
                            "id": "gr-cs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-neutral-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gr-cs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-green-800" } }
                          },
                          {
                            "id": "gr-cs-body-c-rate-1",
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
                            "id": "gr-cs-body-c-price-1",
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
                          },
                          {
                            "id": "gr-cs-body-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "gr-cs-body-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-md border border-neutral-200 bg-white text-neutral-800 cursor-pointer hover:border-green-400 hover:text-green-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-cs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
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
            "id": "gr-cs-call",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-700" } },
            "children": [
              {
                "id": "gr-cs-call-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4" } },
                "children": [
                  {
                    "id": "gr-cs-call-h",
                    "type": "heading",
                    "options": { "text": "Prefer to order by phone?", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-white" } }
                  },
                  {
                    "id": "gr-cs-call-t",
                    "type": "text",
                    "options": { "text": "Call us between 9am and 10pm and we will take the order for you. Cash on delivery available everywhere.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-green-50 leading-relaxed max-w-xl" } }
                  },
                  {
                    "id": "gr-cs-call-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-1" } },
                    "children": [
                      {
                        "id": "gr-cs-call-call",
                        "type": "button",
                        "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-green-800 cursor-pointer hover:bg-green-50 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-base font-bold tracking-wide" }
                        }
                      },
                      {
                        "id": "gr-cs-call-wa-1",
                        "type": "whatsappButton",
                        "options": {
                          "label": "Ask about this product",
                          "phone": "",
                          "message": "Hi, I have a question about {product_title} {product_url}",
                          "icon": "IconBrandWhatsapp",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": { "classes": "w-fit" },
                          "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-lg border border-[#25d366] bg-white text-[#1da851] cursor-pointer hover:bg-[#25d366]/5 transition-colors" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-medium whitespace-nowrap" }
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
            "id": "gr-ca-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-ca-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-ca-head-h",
                    "type": "heading",
                    "options": { "text": "All categories", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-ca-head-t",
                    "type": "text",
                    "options": { "text": "Ghee, honey, oil, dates, spices and nuts, each with everything we stock.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-ca-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-ca-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "gr-ca-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "24",
                        "per_page": "24",
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
                        "id": "gr-ca-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "h-full bg-white border border-neutral-200 rounded-xl p-4 flex flex-col gap-3" }
                        },
                        "children": [
                          {
                            "id": "gr-ca-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full aspect-square rounded-lg overflow-hidden bg-neutral-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "gr-ca-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900 text-center line-clamp-2" } }
                          },
                          {
                            "id": "gr-ca-grid-5",
                            "type": "termCount",
                            "options": { "label": "", "suffix": " items", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mx-auto text-xs font-medium text-neutral-500 bg-neutral-100 rounded-full px-2.5 py-1" } }
                          }
                        ]
                      },
                      {
                        "id": "gr-ca-grid-6",
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
            "id": "gr-pd-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-pd-main-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gr-pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gr-pd-gallery",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gr-pd-gal-1",
                            "type": "productGallery",
                            "options": {
                              "thumbnails": false,
                              "sliderOptions": {
                                "type": "slide",
                                "perPage": 1,
                                "perMove": 1,
                                "rewind": true,
                                "arrows": 0,
                                "pagination": 1,
                                "speed": 400,
                                "drag": 1
                              }
                            },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "items": { "classes": "" },
                              "item": { "classes": "rounded-xl overflow-hidden bg-neutral-100 [&_img]:aspect-square [&_img]:object-cover" },
                              "image": { "classes": "" },
                              "arrows": { "classes": "" },
                              "prev": { "classes": "" },
                              "next": { "classes": "" },
                              "pagination": { "classes": "static! mt-3 gap-1.5" },
                              "dot": { "classes": "size-2! bg-neutral-300! opacity-100! rounded-full! [&.is-active]:bg-neutral-900! [&.is-active]:scale-100!" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-pd-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "gr-pd-cat-1",
                            "type": "productCategories",
                            "options": { "label": "Category", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-3 flex-wrap py-2 border-y border-neutral-100" },
                              "label": { "classes": "shrink-0 text-xs font-medium text-neutral-500" },
                              "items": { "classes": "flex flex-wrap items-baseline" },
                              "item": { "classes": "text-sm text-neutral-800 hover:text-green-600 transition-colors" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "text-neutral-400 mr-1" }
                            }
                          },
                          {
                            "id": "gr-pd-title",
                            "type": "postTitle",
                            "options": { "linkTo": "", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900" } }
                          },
                          {
                            "id": "gr-pd-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "text-sm font-semibold text-neutral-900" },
                              "total-reviews": { "classes": "text-sm text-neutral-500" }
                            }
                          },
                          {
                            "id": "gr-pd-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-neutral-400" },
                              "simple-price-sale": { "classes": "text-2xl font-bold text-red-600" },
                              "simple-price-regular": { "classes": "text-base line-through text-neutral-400" },
                              "variable-price-wrap": { "classes": "flex gap-2 items-center" },
                              "variable-price-min": { "classes": "text-base text-neutral-600" },
                              "variable-price-max": { "classes": "text-base text-neutral-600" }
                            }
                          },
                          {
                            "id": "gr-pd-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "saving", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center w-fit px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full" },
                              "discount": { "classes": "text-xs font-bold text-emerald-700 leading-none" },
                              "label": { "classes": "text-[11px] text-emerald-600 leading-none" }
                            }
                          },
                          {
                            "id": "gr-pd-var-1",
                            "type": "productVariablePrices",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "attr-wrap": { "classes": "flex flex-col gap-2" },
                              "attr-item": { "classes": "flex items-center justify-between gap-4 py-2 border-b border-neutral-100" },
                              "attr-title": { "classes": "shrink-0 text-xs font-medium text-neutral-500" },
                              "attr-items-wrap": { "classes": "flex flex-wrap justify-end gap-1.5" },
                              "variation-item": { "classes": "px-2.5 py-1 text-xs font-medium text-neutral-700 border border-neutral-200 rounded cursor-pointer hover:border-green-400 hover:text-green-600 transition-colors" },
                              "variation-price": { "classes": "pt-2 text-lg font-bold text-neutral-900" },
                              "variation-selected": { "classes": "border-green-500 bg-green-50 text-green-700" },
                              "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
                            }
                          },
                          {
                            "id": "gr-pd-stock-1",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock",
                              "inStockText": "In stock",
                              "outOfStockIcon": "",
                              "inStockIcon": "",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-2" },
                              "stock-status": { "classes": "flex items-center gap-1" },
                              "label": { "classes": "flex items-center gap-1" },
                              "label-text": { "classes": "text-xs" },
                              "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-3.5" },
                              "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-3.5" },
                              "out-of-stock": { "classes": "text-neutral-400 line-through" },
                              "out-of-stock-label": { "classes": "" },
                              "out-of-stock-icon": { "classes": "" },
                              "in-stock": { "classes": "text-neutral-500" },
                              "in-stock-label": { "classes": "" },
                              "in-stock-icon": { "classes": "" }
                            }
                          },
                          {
                            "id": "gr-pd-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 18, "hideQuanity": false, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-3 items-stretch" },
                              "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-md border border-neutral-300 text-neutral-500" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-green-500 text-white cursor-pointer hover:bg-green-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-sm font-semibold whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "gr-pd-wa-1",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Order on WhatsApp",
                              "phone": "",
                              "message": "Hi, I want to order {product_title} (Tk {product_price}) {product_url}",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-full max-w-sm" },
                              "link": { "classes": "flex gap-2.5 w-full items-center justify-center py-3.5 rounded-lg bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-semibold tracking-wide" }
                            }
                          },
                          {
                            "id": "gr-pd-usp-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCheck",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Free delivery on orders over Tk 1,000",
                                  "icon": ""
                                },
                                {
                                  "text": "Cash on delivery in all 64 districts",
                                  "icon": ""
                                },
                                {
                                  "text": "7 day return on unused items",
                                  "icon": ""
                                },
                                {
                                  "text": "100% authentic, brand warranty included",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "flex items-start gap-2" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-emerald-600" },
                              "text": { "classes": "text-sm text-neutral-700 leading-relaxed" }
                            }
                          },
                          {
                            "id": "gr-pd-sku-1",
                            "type": "productSku",
                            "options": { "label": "", "icon": "", "iconSize": 14 },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-1.5" },
                              "label": { "classes": "empty:hidden text-xs text-neutral-400" },
                              "sku": { "classes": "text-xs text-neutral-400 tracking-wide" },
                              "icon": { "classes": "shrink-0 flex items-center text-neutral-300" }
                            }
                          },
                          {
                            "id": "gr-pd-brand-1",
                            "type": "productBrands",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "label": { "classes": "" },
                              "items": { "classes": "flex flex-wrap gap-2" },
                              "item": { "classes": "px-2.5 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 hover:border-green-400 hover:text-green-600 transition-colors" },
                              "category-name": { "classes": "whitespace-nowrap" },
                              "separator": { "classes": "hidden" }
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
            "id": "gr-pd-tabs-sec",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-y border-neutral-100" } },
            "children": [
              {
                "id": "gr-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gr-pd-tabs",
                    "type": "tabs",
                    "options": {
                      "orientation": "",
                      "tabsItems": [
                        {
                          "label": "Description",
                          "icon": "IconFileDescription"
                        },
                        {
                          "label": "Weight and storage",
                          "icon": "IconListDetails"
                        },
                        {
                          "label": "Reviews",
                          "icon": "IconStar"
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "navs-items": { "classes": "gap-5" },
                      "nav-item": { "classes": "py-2 text-xs font-semibold uppercase tracking-wide text-neutral-400 hover:text-neutral-700 whitespace-nowrap cursor-pointer" },
                      "nav-item-active": { "classes": "text-neutral-900!" },
                      "nav-item-label": { "classes": "" },
                      "nav-item-icon": { "classes": "empty:hidden" },
                      "nav-item-content": { "classes": "mt-1 pt-4 border-t border-neutral-200" }
                    },
                    "children": [
                      {
                        "id": "gr-pd-tab1",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gr-pd-desc",
                            "type": "postContent",
                            "options": { "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-700 leading-relaxed max-w-3xl [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3 [&_strong]:font-semibold" } }
                          }
                        ]
                      },
                      {
                        "id": "gr-pd-tab2",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gr-pd-spec-1",
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
                        "id": "gr-pd-tab3",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gr-pd-rev",
                            "type": "commentsGrid",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                              "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg bg-white border border-neutral-200" }
                            },
                            "children": [
                              {
                                "id": "gr-pd-rev-loop",
                                "type": "commentsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                                  "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg bg-white border border-neutral-200" }
                                },
                                "children": [
                                  {
                                    "id": "gr-pd-rev-avatar",
                                    "type": "commentAvatar",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": { "classes": "w-fit" },
                                      "link": { "classes": "block" },
                                      "image": { "classes": "w-10 h-10 rounded-full object-cover bg-neutral-100" }
                                    }
                                  },
                                  {
                                    "id": "gr-pd-rev-author",
                                    "type": "commentAuthor",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900" } }
                                  },
                                  {
                                    "id": "gr-pd-rev-rate",
                                    "type": "commentRate",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                                  },
                                  {
                                    "id": "gr-pd-rev-body",
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
            "id": "gr-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-pd-rel-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "gr-pd-rel-h",
                    "type": "heading",
                    "options": { "text": "Buy together", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-pd-rel-rp-1",
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
                        "id": "gr-pd-rel-rp-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-3 grid-cols-3 md:grid-cols-4 xl:grid-cols-6" },
                          "loop-item": { "classes": "group flex flex-col gap-1.5" }
                        },
                        "children": [
                          {
                            "id": "gr-pd-rel-rp-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md border border-neutral-100" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-white" }
                            }
                          },
                          {
                            "id": "gr-pd-rel-rp-4",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-600 line-clamp-2 leading-snug" } }
                          },
                          {
                            "id": "gr-pd-rel-rp-5",
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
            "id": "gr-sh-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-green-50 border-b border-green-100" } },
            "children": [
              {
                "id": "gr-sh-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gr-sh-head-h",
                    "type": "heading",
                    "options": { "text": "All products", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "gr-sh-head-t",
                    "type": "text",
                    "options": { "text": "Every item we stock, newest first. Cash on delivery everywhere in Bangladesh.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gr-sh-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gr-sh-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gr-sh-body-pg",
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
                      "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "gr-sh-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-lg border border-neutral-200 bg-white hover:border-green-300 transition-colors" }
                        },
                        "children": [
                          {
                            "id": "gr-sh-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md bg-neutral-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gr-sh-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-green-800" } }
                          },
                          {
                            "id": "gr-sh-body-c-rate-1",
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
                            "id": "gr-sh-body-c-price-1",
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
                          },
                          {
                            "id": "gr-sh-body-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "gr-sh-body-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-md border border-neutral-200 bg-white text-neutral-800 cursor-pointer hover:border-green-400 hover:text-green-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gr-sh-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-700 cursor-pointer hover:border-green-600 hover:text-green-800" },
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
            "id": "gr-sh-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-neutral-100 bg-neutral-50" } },
            "children": [
              {
                "id": "gr-sh-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-8" } },
                "children": [
                  {
                    "id": "gr-sh-fb-1",
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
                        "id": "gr-sh-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruck", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "gr-sh-fb-3",
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
    ]
  },

]
export default template;
