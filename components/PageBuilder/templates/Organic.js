/**
 * Template: Organic Store.
 *
 * A template is one store-wide design: a name, some meta, and one entry per page
 * type the storefront can render. Each page's `content` is an ARRAY of builder
 * blocks -- the same shape PageBuilder keeps in state and the same shape the
 * files in ready-layouts/ use -- so it stays readable and diffable here.
 *
 * The API stores a page's content as a JSON STRING (Templates.jsx:305-311 calls
 * `isJsonString(content)` and then `JSON.parse`), so whatever applies this
 * template must `JSON.stringify(page.content)` on the way out. An empty array
 * means that page type has no layout yet.
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
 * The filled pages are composed from the presets in element-layouts/, cloned
 * and re-ided, so every block here inherits the renderer quirks those files
 * document -- worth reading before changing a class string. Three that shaped
 * this file:
 *
 *   - Product cards use `queryPrams` (that spelling) on postGrid, since
 *     PostGrid.jsx reads it and ignores the `queryParams` the definition
 *     declares; and `loop-items`/`loop-item` are mirrored onto the postLoop
 *     child because PostLoop.jsx:18 takes them from the parent's context.
 *   - Buttons set `linkTo: "custom"` and both `scheme` and `url`: Button.jsx
 *     only renders a <Link> for 'custom', and builds the href as
 *     `${scheme}${url}`, so an unset scheme prints the string "undefined".
 *   - The Shop header is a plain heading + text rather than archiveTitle /
 *     archiveDescription / archiveCount. Those three renderers are
 *     byte-identical stubs that output `options.prefix` as raw HTML and never
 *     read the archive, so they cannot show a real title, description or count.
 *
 * Two more that shaped the pages added later:
 *
 *   - Term pages do not use termTitle or termCount. Both read `useCategory()`
 *     with no fallback (TermTitle.jsx:30,:64) and only TermsLoop and TermsSlider
 *     provide that context, so outside a terms loop they render empty. The
 *     brands / tags / categories headers are a heading plus text instead.
 *   - A terms grid picks its archive through `options.queryPrams.taxonomy`
 *     (TermsGrid.jsx:30 -> TermsGridContext -> TermsLoop's get_terms call).
 *     `product_cat` is the value the existing presets use; `product_tag` and
 *     `product_brand` come from the backend and want confirming, exactly like
 *     `post_type: product`.
 *
 * On the single pages, postTitle / postDate / postAuthor / postContent read
 * PostContext, which only PostLoop, PostSlider, Sidebar, SiteHeader and
 * SiteFooter provide -- so in the canvas they show their placeholder strings and
 * fill in at runtime.
 */

var template = [
  {

    "name": "Organic Store",
    "description": "",
    "thumbnail": "",
    "meta": "",
    "pages": [

      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "or-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white border-b border-neutral-200 sticky top-0 z-40" } },
            "children": [
              {
                "id": "or-hdr-strip",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full bg-neutral-900" } },
                "children": [
                  {
                    "id": "or-hdr-strip-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-2 flex items-center justify-center" } },
                    "children": [
                      {
                        "id": "or-hdr-strip-t",
                        "type": "text",
                        "options": { "text": "Free delivery on orders over Tk 2,000 - cash on delivery nationwide", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "text-xs font-medium tracking-wide text-neutral-200 text-center" } }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "or-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-4" } },
                "children": [
                  {
                    "id": "or-hdr-cols",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-center gap-6 flex-wrap justify-between" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "or-hdr-col-logo",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "or-hdr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Organic Store", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-36 h-auto object-contain" },
                              "text": { "classes": "text-xl font-bold text-neutral-900" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "or-hdr-col-nav",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "hidden lg:block" } },
                        "children": [
                          {
                            "id": "or-hdr-menu",
                            "type": "menu",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "menu": { "classes": "flex gap-7 text-sm font-medium text-neutral-700" },
                              "menu-item": { "classes": "" },
                              "sub-menu": { "classes": "rounded-lg border border-neutral-100 bg-white shadow-lg py-2 min-w-48" },
                              "menu-link": { "classes": "hover:text-orange-600 transition-colors py-1" },
                              "link-label": { "classes": "" },
                              "icon": { "classes": "" }
                            },
                            "children": [
                              { "id": "or-hdr-mi-1", "type": "menuItem", "options": { "label": "Home", "url": "/" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              {
                                "id": "or-hdr-mi-2",
                                "type": "menuItem",
                                "options": { "label": "Shop", "url": "/shop" },
                                "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" }, "sub-menu": { "classes": "" } },
                                "children": [
                                  { "id": "or-hdr-mi-2-1", "type": "menuItem", "options": { "label": "Fresh Produce", "url": "/categories/fresh-produce" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-orange-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                                  { "id": "or-hdr-mi-2-2", "type": "menuItem", "options": { "label": "Pantry Staples", "url": "/categories/pantry" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-orange-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                                  { "id": "or-hdr-mi-2-3", "type": "menuItem", "options": { "label": "Offers", "url": "/shop/offers" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-orange-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                                ]
                              },
                              { "id": "or-hdr-mi-3", "type": "menuItem", "options": { "label": "Categories", "url": "/categories" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "or-hdr-mi-4", "type": "menuItem", "options": { "label": "Blog", "url": "/blog" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "or-hdr-mi-5", "type": "menuItem", "options": { "label": "Contact", "url": "/contact" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "or-hdr-col-actions",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3 ml-auto" } },
                        "children": [
                          {
                            "id": "or-hdr-search",
                            "type": "quickSearch",
                            "options": { "placeholder": "Search products...", "iconPosition": "", "icon": "IconZoom" },
                            "cssSelectors": {
                              "*": { "classes": "hidden sm:block border border-neutral-200 rounded-full py-1 px-4 bg-neutral-50" },
                              "input-search": { "classes": "w-full lg:w-56 px-2 bg-transparent border-0 shadow-none! outline-none" },
                              "input-wrapper": { "classes": "flex flex-wrap gap-2 items-center" },
                              "icon": { "classes": "text-neutral-500" },
                              "popover": { "classes": "bg-white shadow-xl rounded-lg border border-neutral-100" },
                              "reset": { "classes": "text-red-400 text-sm cursor-pointer" },
                              "categories": { "classes": "" },
                              "brands": { "classes": "" },
                              "items": { "classes": "divide-y divide-neutral-100" },
                              "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-orange-50" },
                              "item-title": { "classes": "" },
                              "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                              "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                              "page-item": { "classes": "border border-solid border-neutral-300 shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                              "page-count": { "classes": "border border-solid border-neutral-300 shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                            }
                          },
                          {
                            "id": "or-hdr-account",
                            "type": "button",
                            "options": { "text": "Account", "linkTo": "custom", "scheme": "", "url": "/account", "target": "", "icon": "IconUserCircle", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "hidden sm:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-orange-600 cursor-pointer" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "font-medium" }
                            }
                          },
                          {
                            "id": "or-hdr-cart",
                            "type": "cart",
                            "options": { "buttonIcon": "IconShoppingCart", "editMode": false },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "button": { "classes": "flex items-center gap-2 text-sm px-4 rounded-full py-2 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white transition-colors" },
                              "button-quantity": { "classes": "font-semibold" },
                              "button-icon": { "classes": "" },
                              "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                              "cart-header": { "classes": "flex justify-between items-center bg-orange-500 py-3 px-4 text-white" },
                              "cart-total-items": { "classes": "" },
                              "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                              "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                              "go-to-checkout": { "classes": "text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full cursor-pointer" },
                              "coupon-input": { "classes": "w-28 border! border-solid border-neutral-300 shadow-none! text-center rounded-full" },
                              "coupon-apply-button": { "classes": "text-white bg-neutral-900 px-3 py-2 rounded-full cursor-pointer" },
                              "back-to-cart": { "classes": "text-sm text-orange-600 cursor-pointer" }
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
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "or-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-t border-neutral-200" } },
            "children": [
              {
                "id": "or-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-12" } },
                "children": [
                  {
                    "id": "or-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "or-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "or-ftr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Organic Store", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-36 h-auto object-contain" },
                              "text": { "classes": "text-xl font-bold text-neutral-900" }
                            }
                          },
                          {
                            "id": "or-ftr-tagline",
                            "type": "text",
                            "options": { "text": "Everyday groceries grown and packed without shortcuts, delivered to your door across the country.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xs" } }
                          },
                          {
                            "id": "or-ftr-address",
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
                              "link": { "classes": "flex gap-2 items-center hover:text-orange-600 transition-colors" },
                              "phone-link": { "classes": "" },
                              "email-link": { "classes": "" },
                              "icon": { "classes": "text-orange-500 shrink-0" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "or-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "or-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "items": [
                                { "text": "All Products", "icon": "", "slug": "/shop" },
                                { "text": "Fresh Produce", "icon": "", "slug": "/categories/fresh-produce" },
                                { "text": "Pantry Staples", "icon": "", "slug": "/categories/pantry" },
                                { "text": "Offers", "icon": "", "slug": "/shop/offers" },
                                { "text": "Brands", "icon": "", "slug": "/brands" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-orange-600 transition-colors" },
                              "icon": { "classes": "text-neutral-400" },
                              "text": { "classes": "text-sm text-neutral-600" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "or-ftr-gi-help",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "or-ftr-ll-help",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Service",
                              "tag": "ul",
                              "items": [
                                { "text": "Track Order", "icon": "", "slug": "/track-order" },
                                { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
                                { "text": "Returns & Refunds", "icon": "", "slug": "/returns" },
                                { "text": "My Account", "icon": "", "slug": "/account" },
                                { "text": "FAQ", "icon": "", "slug": "/faq" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-orange-600 transition-colors" },
                              "icon": { "classes": "text-neutral-400" },
                              "text": { "classes": "text-sm text-neutral-600" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "or-ftr-gi-company",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "or-ftr-ll-company",
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
                              "header-text": { "classes": "text-sm font-semibold text-neutral-900 uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-orange-600 transition-colors" },
                              "icon": { "classes": "text-neutral-400" },
                              "text": { "classes": "text-sm text-neutral-600" }
                            }
                          },
                          {
                            "id": "or-ftr-wa",
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
                "id": "or-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-neutral-200" } },
                "children": [
                  {
                    "id": "or-ftr-bottom-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "or-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "or-ftr-copy",
                            "type": "text",
                            "options": { "text": "(c) 2026 Organic Store. All rights reserved.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
                          }
                        ]
                      },
                      {
                        "id": "or-ftr-pay-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                        "children": [
                          {
                            "id": "or-ftr-pay",
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
            "id": "bs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pt-12 pb-8 flex flex-col gap-5" } },
                "children": [
                  {
                    "id": "bs-title",
                    "type": "postTitle",
                    "options": { "linkTo": "", "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight" } }
                  },
                  {
                    "id": "bs-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500" } },
                    "children": [
                      {
                        "id": "bs-author",
                        "type": "postAuthor",
                        "options": { "linkTo": "", "classes": "" },
                        "cssSelectors": { "*": { "classes": "font-medium text-neutral-700" } }
                      },
                      {
                        "id": "bs-date",
                        "type": "postDate",
                        "options": { "linkTo": "", "dateFormat": "MMMM DD, YYYY" },
                        "cssSelectors": { "*": { "classes": "text-neutral-400" } }
                      }
                    ]
                  },
                  {
                    "id": "bs-thumb",
                    "type": "postThumbnail",
                    "options": { "linkTo": "postUrl" },
                    "cssSelectors": {
                      "*": { "classes": "w-full overflow-hidden rounded-2xl" },
                      "link": { "classes": "block" },
                      "image": { "classes": "w-full aspect-video object-cover bg-neutral-100" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pb-14" } },
                "children": [
                  {
                    "id": "bs-content",
                    "type": "postContent",
                    "options": { "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-base text-neutral-700 leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-4 [&_a]:text-orange-600 [&_a]:underline [&_img]:rounded-xl [&_img]:my-6" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bs-comments",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-y border-neutral-100" } },
            "children": [
              {
                "id": "bs-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "bs-comments-h",
                    "type": "heading",
                    "options": { "text": "Comments", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bs-rev",
                    "type": "commentsGrid",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "w-full" },
                      "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                      "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl border border-neutral-200 bg-white" }
                    },
                    "children": [
                      {
                        "id": "bs-rev-loop",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                          "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl border border-neutral-200 bg-white" }
                        },
                        "children": [
                          {
                            "id": "bs-rev-avatar",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-10 h-10 rounded-full object-cover bg-neutral-100" }
                            }
                          },
                          {
                            "id": "bs-rev-author",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900" } }
                          },
                          {
                            "id": "bs-rev-rate",
                            "type": "commentRate",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                          },
                          {
                            "id": "bs-rev-body",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
                          }
                        ]
                      },
                      {
                        "id": "bs-form",
                        "type": "commentsForm",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "mt-6 p-5 rounded-xl border border-neutral-200 bg-white" } }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "bs-more",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bs-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "bs-more-h",
                    "type": "heading",
                    "options": { "text": "More from the blog", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bs-more-pg-1",
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
                        "id": "bs-more-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "flex gap-4 items-center bg-white border border-gray-100 rounded-lg p-3 transition-all duration-200 hover:border-gray-300 group" }
                        },
                        "children": [
                          {
                            "id": "bs-more-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-20 h-20 shrink-0 overflow-hidden rounded-md bg-gray-50" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bs-more-pg-4",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
                          },
                          {
                            "id": "bs-more-pg-5",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-400" } }
                          }
                        ]
                      },
                      {
                        "id": "bs-more-pg-6",
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
            "id": "bl-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "bl-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "bl-head-h",
                    "type": "heading",
                    "options": { "text": "Journal", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bl-head-t",
                    "type": "text",
                    "options": { "text": "Guides, product news and parenting notes from the Kidobazar team.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bl-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bl-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "bl-grid-1",
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
                        "id": "bl-grid-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "flex flex-col gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group" }
                        },
                        "children": [
                          {
                            "id": "bl-grid-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "relative h-52 overflow-hidden rounded-lg bg-gray-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bl-grid-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-neutral-400" } }
                          },
                          {
                            "id": "bl-grid-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
                          },
                          {
                            "id": "bl-grid-6",
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
                              "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-orange-600 hover:text-orange-700" },
                              "read-more-icon": { "classes": "" },
                              "read-more-label": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bl-grid-7",
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
                        "id": "bl-grid-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
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
            "id": "nf-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "nf-icon",
                    "type": "icon",
                    "options": { "iconName": "IconMoodSad", "size": "48" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-neutral-300" } }
                  },
                  {
                    "id": "nf-h",
                    "type": "heading",
                    "options": { "text": "This page has wandered off", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "nf-t",
                    "type": "text",
                    "options": { "text": "The link may be broken or the page may have moved. Try the shop, or head back to the homepage.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-md leading-relaxed" } }
                  },
                  {
                    "id": "nf-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-2" } },
                    "children": [
                      {
                        "id": "nf-b1",
                        "type": "button",
                        "options": { "text": "Back to home", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "IconHome", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 text-white cursor-pointer hover:bg-neutral-800 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold" }
                        }
                      },
                      {
                        "id": "nf-b2",
                        "type": "button",
                        "options": { "text": "Shop all products", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 text-neutral-800 cursor-pointer hover:border-orange-400 hover:text-orange-600 transition-colors w-fit" },
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
            "id": "hm-hero",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-orange-50" } },
            "children": [
              {
                "id": "hm-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "hm-hero-h",
                    "type": "heading",
                    "options": { "text": "Everything for your little one, delivered", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight max-w-3xl" } }
                  },
                  {
                    "id": "hm-hero-t",
                    "type": "text",
                    "options": { "text": "Genuine baby essentials, cash on delivery across all 64 districts, and free shipping on orders over Tk 1,000.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-base text-neutral-600 max-w-xl leading-relaxed" } }
                  },
                  {
                    "id": "hm-hero-b",
                    "type": "button",
                    "options": { "text": "Shop now", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 text-white cursor-pointer hover:bg-orange-600 transition-colors w-fit" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-semibold" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hm-trust",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-y border-neutral-100" } },
            "children": [
              {
                "id": "hm-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-6" } },
                "children": [
                  {
                    "id": "hm-trust-fb-1",
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
                      "icon": { "classes": "shrink-0 w-11 h-11 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "hm-trust-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruckDelivery", "size": "22" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "hm-trust-fb-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col" } },
                        "children": [
                          {
                            "id": "hm-trust-fb-4",
                            "type": "featureboxTitle",
                            "options": { "tag": "h4" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "img": { "classes": "" }
                            }
                          },
                          {
                            "id": "hm-trust-fb-5",
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
            "id": "hm-cat",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hm-cat-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "hm-cat-h",
                    "type": "heading",
                    "options": { "text": "Shop by category", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "hm-cat-tg-1",
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
                        "id": "hm-cat-tg-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group flex flex-col items-center gap-3 text-center" }
                        },
                        "children": [
                          {
                            "id": "hm-cat-tg-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-24 h-24 mx-auto rounded-full overflow-hidden bg-neutral-50 ring-2 ring-neutral-200 group-hover:ring-orange-400 transition-all duration-200" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "hm-cat-tg-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 group-hover:text-orange-600 transition-colors line-clamp-2" } }
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
            "id": "hm-feat",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50" } },
            "children": [
              {
                "id": "hm-feat-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "hm-feat-h",
                    "type": "heading",
                    "options": { "text": "New this week", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "hm-feat-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "hm-feat-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "hm-feat-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-lg" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "hm-feat-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
                          },
                          {
                            "id": "hm-feat-c-rate-1",
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
                            "id": "hm-feat-c-price-1",
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
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "hm-why",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "hm-why-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "hm-why-h",
                    "type": "heading",
                    "options": { "text": "Why shop with us", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900 text-center" } }
                  },
                  {
                    "id": "hm-why-fb-1",
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
                      "icon": { "classes": "w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "hm-why-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconShieldCheck", "size": "24" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "hm-why-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h3" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "hm-why-fb-4",
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
            "id": "hm-blog",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50" } },
            "children": [
              {
                "id": "hm-blog-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "hm-blog-h",
                    "type": "heading",
                    "options": { "text": "From our blog", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "hm-blog-pg-1",
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
                        "id": "hm-blog-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "flex flex-col gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group" }
                        },
                        "children": [
                          {
                            "id": "hm-blog-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "relative h-52 overflow-hidden rounded-lg bg-gray-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "hm-blog-pg-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-neutral-400" } }
                          },
                          {
                            "id": "hm-blog-pg-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-orange-600" } }
                          },
                          {
                            "id": "hm-blog-pg-6",
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
                              "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-orange-600 hover:text-orange-700" },
                              "read-more-icon": { "classes": "" },
                              "read-more-label": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hm-blog-pg-7",
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
            "id": "ac-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "ac-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "ac-head-h",
                    "type": "heading",
                    "options": { "text": "My account", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ac-ca-1",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-12" } },
                "children": [
                  {
                    "id": "ac-ca-2",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "ac-ca-3",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-6" },
                          "grid-item": { "classes": "" }
                        },
                        "children": [
                          {
                            "id": "ac-ca-4",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" } },
                            "children": [
                              {
                                "id": "ac-ca-5",
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
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-md border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" },
                                  "input-username": { "classes": "" },
                                  "input-phone": { "classes": "" },
                                  "input-password": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-email": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-phone": { "classes": "" },
                                  "label-password": { "classes": "" },
                                  "submit": { "classes": "w-full py-2.5 rounded-md bg-orange-500 text-sm font-semibold text-white text-center cursor-pointer hover:bg-orange-600 transition-colors" },
                                  "have-account": { "classes": "text-xs text-neutral-500 text-center" }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ac-ca-6",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" } },
                            "children": [
                              {
                                "id": "ac-ca-7",
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
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-md border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" },
                                  "input-username": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-email": { "classes": "text-xs font-medium text-neutral-600" },
                                  "submit": { "classes": "w-full py-2.5 rounded-md bg-orange-500 text-sm font-semibold text-white text-center cursor-pointer hover:bg-orange-600 transition-colors" },
                                  "forget-password": { "classes": "text-xs text-neutral-500 text-center" }
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
                    "id": "ac-ca-8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white" } },
                    "children": [
                      {
                        "id": "ac-ca-9",
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
                          "navs-items": { "classes": "flex gap-6 overflow-x-auto border-b border-neutral-200" },
                          "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-1 py-3 text-sm font-medium text-neutral-500 border-b-2 border-transparent whitespace-nowrap cursor-pointer hover:text-neutral-900" },
                          "nav-item-active": { "classes": "text-orange-600! border-orange-500!" },
                          "nav-item-label": { "classes": "" },
                          "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                          "nav-item-content": { "classes": "pt-6" }
                        },
                        "children": [
                          {
                            "id": "ac-ca-10",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ac-ca-11",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ac-ca-12",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ac-ca-13",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ac-ca-14",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ac-ca-15",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ac-ca-16",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ac-ca-17",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ac-ca-18",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ac-ca-19",
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
            "id": "ty-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50" } },
            "children": [
              {
                "id": "ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "ty-icon",
                    "type": "icon",
                    "options": { "iconName": "IconCircleCheckFilled", "size": "56" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-emerald-500" } }
                  },
                  {
                    "id": "ty-h",
                    "type": "heading",
                    "options": { "text": "Thank you for your order", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "ty-t",
                    "type": "text",
                    "options": {
                      "text": "We have received your order and sent a confirmation by SMS. Our team will call to confirm the delivery address before dispatch.",
                      "tag": "p"
                    },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-lg leading-relaxed" } }
                  },
                  {
                    "id": "ty-steps-1",
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
                      "li": { "classes": "list-decimal pl-1 marker:font-semibold marker:text-orange-500" },
                      "icon": { "classes": "empty:hidden" },
                      "text": { "classes": "text-sm text-neutral-700 leading-relaxed" }
                    }
                  },
                  {
                    "id": "ty-b",
                    "type": "button",
                    "options": { "text": "Continue shopping", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 text-white cursor-pointer hover:bg-orange-600 transition-colors w-fit mt-2" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-semibold" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ty-trust",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-neutral-100" } },
            "children": [
              {
                "id": "ty-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-8" } },
                "children": [
                  {
                    "id": "ty-fb-1",
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
                        "id": "ty-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruck", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "ty-fb-3",
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
        "title": "Brands Single",
        "type": "brands_single",
        "content": [
          {
            "id": "bn-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "bn-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "bn-head-h",
                    "type": "heading",
                    "options": { "text": "Brand", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bn-head-t",
                    "type": "text",
                    "options": { "text": "Everything we stock from this brand.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bn-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bn-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "bn-body-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "bn-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "bn-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-lg" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bn-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
                          },
                          {
                            "id": "bn-body-c-rate-1",
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
                            "id": "bn-body-c-price-1",
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
                        "id": "bn-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
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
            "id": "br-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "br-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "br-head-h",
                    "type": "heading",
                    "options": { "text": "All brands", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "br-head-t",
                    "type": "text",
                    "options": { "text": "The brands we stock, from everyday basics to the ones parents ask for by name.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "br-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "br-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "br-grid-1",
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
                      "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-orange-50 hover:border-orange-200 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "br-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200" }
                        },
                        "children": [
                          {
                            "id": "br-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-11 h-11 shrink-0 rounded-md overflow-hidden bg-white" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "br-grid-4",
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
            "id": "ts-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "ts-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ts-head-h",
                    "type": "heading",
                    "options": { "text": "Tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "ts-head-t",
                    "type": "text",
                    "options": { "text": "Products carrying this tag, across every category.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ts-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ts-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "ts-body-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "ts-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "ts-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-lg" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "ts-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
                          },
                          {
                            "id": "ts-body-c-rate-1",
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
                            "id": "ts-body-c-price-1",
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
                        "id": "ts-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
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
            "id": "tg-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "tg-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "tg-head-h",
                    "type": "heading",
                    "options": { "text": "Browse by tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "tg-head-t",
                    "type": "text",
                    "options": { "text": "Tags group products across categories, so you can shop by need rather than aisle.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "tg-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "tg-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "tg-grid-1",
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
                      "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-orange-50 hover:border-orange-200 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "tg-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-lg bg-neutral-50 border border-neutral-200" }
                        },
                        "children": [
                          {
                            "id": "tg-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-11 h-11 shrink-0 rounded-md overflow-hidden bg-white" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "tg-grid-4",
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
            "id": "cs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "cs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "cs-head-h",
                    "type": "heading",
                    "options": { "text": "Category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "cs-head-t",
                    "type": "text",
                    "options": { "text": "Products in this category, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "cs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "cs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "cs-body-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "cs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "cs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-lg" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "cs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
                          },
                          {
                            "id": "cs-body-c-rate-1",
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
                            "id": "cs-body-c-price-1",
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
                        "id": "cs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
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
            "id": "cs-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-neutral-100 bg-neutral-50" } },
            "children": [
              {
                "id": "cs-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-8" } },
                "children": [
                  {
                    "id": "cs-fb-1",
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
                        "id": "cs-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruck", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "cs-fb-3",
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
            "id": "ca-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "ca-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ca-head-h",
                    "type": "heading",
                    "options": { "text": "Shop by category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "ca-head-t",
                    "type": "text",
                    "options": { "text": "Every category in the store. Pick one to narrow things down.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ca-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ca-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "ca-grid-1",
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
                        "id": "ca-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "h-full bg-white border border-neutral-200 rounded-xl p-4 flex flex-col gap-3" }
                        },
                        "children": [
                          {
                            "id": "ca-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full aspect-square rounded-lg overflow-hidden bg-neutral-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "ca-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900 text-center line-clamp-2" } }
                          },
                          {
                            "id": "ca-grid-5",
                            "type": "termCount",
                            "options": { "label": "", "suffix": " items", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mx-auto text-xs font-medium text-neutral-500 bg-neutral-100 rounded-full px-2.5 py-1" } }
                          }
                        ]
                      },
                      {
                        "id": "ca-grid-6",
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
            "id": "pd-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "pd-main-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "pd-col-gallery",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "pd-gal-1",
                            "type": "productGallery",
                            "options": {
                              "thumbnails": true,
                              "sliderOptions": {
                                "type": "slide",
                                "perPage": 1,
                                "perMove": 1,
                                "rewind": true,
                                "arrows": 1,
                                "pagination": 0,
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
                              "prev": { "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-neutral-700!" },
                              "next": { "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-neutral-700!" },
                              "pagination": { "classes": "" },
                              "dot": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pd-col-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "pd-cat-1",
                            "type": "productCategories",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
                              "label": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
                              "items": { "classes": "flex flex-wrap items-baseline" },
                              "item": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-orange-600 hover:text-orange-700 transition-colors" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "text-orange-300 mr-1" }
                            }
                          },
                          {
                            "id": "pd-title",
                            "type": "postTitle",
                            "options": { "linkTo": "", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900" } }
                          },
                          {
                            "id": "pd-rate-1",
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
                            "id": "pd-price-1",
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
                            "id": "pd-var-1",
                            "type": "productVariablePrices",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "attr-wrap": { "classes": "flex flex-col gap-5" },
                              "attr-item": { "classes": "flex flex-col gap-2" },
                              "attr-title": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-500" },
                              "attr-items-wrap": { "classes": "flex flex-wrap gap-2" },
                              "variation-item": { "classes": "min-w-14 px-4 py-2 text-sm font-medium text-center text-neutral-700 bg-white border border-neutral-300 rounded-md cursor-pointer hover:border-neutral-900 transition-colors" },
                              "variation-price": { "classes": "text-2xl font-bold text-neutral-900" },
                              "variation-selected": { "classes": "border-neutral-900 bg-neutral-900 text-white" },
                              "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
                            }
                          },
                          {
                            "id": "pd-stock-1",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock",
                              "inStockText": "In stock",
                              "outOfStockIcon": "IconPointFilled",
                              "inStockIcon": "IconPointFilled",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-3" },
                              "stock-status": { "classes": "flex items-center gap-1.5" },
                              "label": { "classes": "flex items-center gap-1.5" },
                              "label-text": { "classes": "text-sm font-medium" },
                              "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
                              "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-3" },
                              "out-of-stock": { "classes": "text-red-600" },
                              "out-of-stock-label": { "classes": "" },
                              "out-of-stock-icon": { "classes": "" },
                              "in-stock": { "classes": "text-emerald-600" },
                              "in-stock-label": { "classes": "" },
                              "in-stock-icon": { "classes": "" }
                            }
                          },
                          {
                            "id": "pd-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 18, "hideQuanity": false, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-3 items-stretch" },
                              "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-md border border-neutral-300 text-neutral-500" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-sm font-semibold whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "pd-wa-1",
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
                          },
                          {
                            "id": "pd-usp-1",
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
                            "id": "pd-sku-1",
                            "type": "productSku",
                            "options": { "label": "SKU:", "icon": "", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-2" },
                              "label": { "classes": "empty:hidden text-sm text-neutral-500" },
                              "sku": { "classes": "text-sm font-medium text-neutral-900 tracking-wide" },
                              "icon": { "classes": "shrink-0 flex items-center text-neutral-400" }
                            }
                          },
                          {
                            "id": "pd-brand-1",
                            "type": "productBrands",
                            "options": { "label": "Brand:", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-baseline gap-1.5" },
                              "label": { "classes": "text-xs text-neutral-400" },
                              "items": { "classes": "flex flex-wrap items-baseline" },
                              "item": { "classes": "text-xs font-medium text-neutral-700 hover:text-orange-600 transition-colors" },
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
            "id": "pd-tabs-sec",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-y border-neutral-100" } },
            "children": [
              {
                "id": "pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "pd-tabs",
                    "type": "tabs",
                    "options": {
                      "orientation": "",
                      "tabsItems": [
                        {
                          "label": "Description",
                          "icon": "IconFileDescription"
                        },
                        {
                          "label": "Specifications",
                          "icon": "IconListDetails"
                        },
                        {
                          "label": "Reviews",
                          "icon": "IconStar"
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "bg-white" },
                      "navs-items": { "classes": "gap-6 border-b border-neutral-200" },
                      "nav-item": { "classes": "flex items-center gap-2 px-1 py-3 text-sm font-medium text-neutral-500 border-b-2 border-transparent hover:text-neutral-900 whitespace-nowrap cursor-pointer" },
                      "nav-item-active": { "classes": "text-orange-600! border-orange-500!" },
                      "nav-item-label": { "classes": "" },
                      "nav-item-icon": { "classes": "empty:hidden" },
                      "nav-item-content": { "classes": "pt-5" }
                    },
                    "children": [
                      {
                        "id": "pd-tab-desc",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "pd-desc",
                            "type": "postContent",
                            "options": { "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-700 leading-relaxed max-w-3xl [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3 [&_strong]:font-semibold" } }
                          }
                        ]
                      },
                      {
                        "id": "pd-tab-spec",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "pd-spec-1",
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
                        "id": "pd-tab-rev",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "pd-rev",
                            "type": "commentsGrid",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                              "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl border border-neutral-200 bg-white" }
                            },
                            "children": [
                              {
                                "id": "pd-rev-loop",
                                "type": "commentsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                                  "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl border border-neutral-200 bg-white" }
                                },
                                "children": [
                                  {
                                    "id": "pd-rev-avatar",
                                    "type": "commentAvatar",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": { "classes": "w-fit" },
                                      "link": { "classes": "block" },
                                      "image": { "classes": "w-10 h-10 rounded-full object-cover bg-neutral-100" }
                                    }
                                  },
                                  {
                                    "id": "pd-rev-author",
                                    "type": "commentAuthor",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900" } }
                                  },
                                  {
                                    "id": "pd-rev-rate",
                                    "type": "commentRate",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                                  },
                                  {
                                    "id": "pd-rev-body",
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
            "id": "pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "pd-rel-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "pd-rel-h",
                    "type": "heading",
                    "options": { "text": "You may also like", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "pd-rel-rp-1",
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
                        "id": "pd-rel-rp-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "pd-rel-rp-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-lg" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "pd-rel-rp-4",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
                          },
                          {
                            "id": "pd-rel-rp-5",
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
                            "id": "pd-rel-rp-6",
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
            "id": "sh-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-50 border-b border-neutral-100" } },
            "children": [
              {
                "id": "sh-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "sh-head-h",
                    "type": "heading",
                    "options": { "text": "All products", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "sh-head-t",
                    "type": "text",
                    "options": { "text": "Everything in the store, newest first. Filter by category from the sidebar or keep scrolling.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "sh-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "sh-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "sh-body-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "sh-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "sh-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-lg" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "sh-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-orange-600" } }
                          },
                          {
                            "id": "sh-body-c-rate-1",
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
                            "id": "sh-body-c-price-1",
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
                        "id": "sh-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-neutral-200 text-sm text-neutral-600 cursor-pointer hover:bg-neutral-50" },
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
            "id": "sh-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-neutral-100 bg-neutral-50" } },
            "children": [
              {
                "id": "sh-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-8" } },
                "children": [
                  {
                    "id": "sh-foot-fb-1",
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
                        "id": "sh-foot-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruck", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "sh-foot-fb-3",
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
