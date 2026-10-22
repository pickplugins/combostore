/**
 * Template: Beauty & Cosmetics.
 *
 * Same contract as the other templates in this folder -- a name, some meta, and
 * one entry per page type, where each page's `content` is an ARRAY of builder
 * blocks. The API stores a page's content as a JSON STRING
 * (Templates.jsx:305-311 parses it back), so whatever applies this template must
 * `JSON.stringify(page.content)`.
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
 * The look is blush panels and a rose accent against an ink band, with pill
 * buttons and softer radii than Organic or Home & Kitchen. Because most presets
 * in element-layouts/ are built around orange, every picked block is run through
 * the kit's accent remap (orange -> rose) so the page reads as one palette.
 * Deliberately NOT remapped: amber (rating stars are gold), red (discount
 * badges), emerald (in-stock), and brand hexes such as WhatsApp's #25d366.
 *
 * Choices worth knowing, all forced by the renderers the presets document:
 *
 *   - Shades use the "Large Button Grid" productVariablePrices preset, the only
 *     one wide enough to read as swatches.
 *   - postGrid queries live under `queryPrams` (PostGrid.jsx ignores the
 *     `queryParams` the definition declares), with `loop-items`/`loop-item`
 *     mirrored onto the postLoop child because PostLoop.jsx:18 reads them from
 *     the parent's context.
 *   - Buttons set `linkTo: "custom"` plus `scheme` and `url`: Button.jsx only
 *     renders a <Link> for 'custom' and builds the href as `${scheme}${url}`.
 *   - postTitle, postDate and postAuthor default `linkTo` to 'postUrl', which
 *     wraps them in a dead <Link href="#">, so each sets it explicitly;
 *     postDate also reads `dateFormat`, not the `format` it declares.
 *   - Term headers are a heading plus text, never termTitle/termCount: those
 *     read `useCategory()` with no fallback, and only TermsLoop/TermsSlider
 *     provide it.
 *   - An archive is chosen by `options.queryPrams.taxonomy`. `product_cat` is
 *     the verified value; `product_tag` and `product_brand` come from the
 *     backend and want confirming, like `post_type: product`.
 */

var template = [
  {

    "name": "Beauty & Cosmetics",
    "description": "Blush and rose storefront for skincare, makeup and haircare, with shade pickers on the product page.",
    "thumbnail": "",
    "meta": "",
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "bc-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white sticky top-0 z-40" } },
            "children": [
              {
                "id": "bc-hdr-strip",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full bg-neutral-900" } },
                "children": [
                  {
                    "id": "bc-hdr-strip-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-2.5 flex items-center justify-center" } },
                    "children": [
                      {
                        "id": "bc-hdr-strip-t",
                        "type": "text",
                        "options": { "text": "100% authentic - free delivery over Tk 1,500 - easy 7 day returns", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "text-[11px] uppercase tracking-[0.18em] text-rose-100 text-center" } }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "bc-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 pt-6 pb-4 flex flex-col items-center gap-5" } },
                "children": [
                  {
                    "id": "bc-hdr-logo",
                    "type": "logo",
                    "options": { "logoType": "image", "logoText": "Beauty & Cosmetics", "src": "https://placehold.co/280x64?text=Logo", "link": "/" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "link": { "classes": "inline-block" },
                      "img": { "classes": "w-44 h-auto object-contain" },
                      "text": { "classes": "text-2xl font-semibold tracking-[0.12em] uppercase text-neutral-900" }
                    }
                  },
                  {
                    "id": "bc-hdr-row",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "w-full flex items-center justify-center gap-3 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "bc-hdr-col-search",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full sm:w-auto sm:min-w-80" } },
                        "children": [
                          {
                            "id": "bc-hdr-search",
                            "type": "quickSearch",
                            "options": { "placeholder": "Search skincare, makeup, fragrance", "iconPosition": "", "icon": "IconZoom" },
                            "cssSelectors": {
                              "*": { "classes": "border border-rose-200 rounded-full py-1.5 px-5 bg-rose-50 w-full" },
                              "input-search": { "classes": "w-full px-2 bg-transparent border-0 shadow-none! outline-none" },
                              "input-wrapper": { "classes": "flex flex-nowrap gap-2 items-center w-full" },
                              "icon": { "classes": "text-rose-500 shrink-0" },
                              "popover": { "classes": "bg-white shadow-xl rounded-2xl border border-rose-100 w-full" },
                              "reset": { "classes": "text-red-400 text-sm cursor-pointer shrink-0" },
                              "categories": { "classes": "" },
                              "brands": { "classes": "" },
                              "items": { "classes": "divide-y divide-rose-50" },
                              "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-rose-50" },
                              "item-title": { "classes": "" },
                              "item-image": { "classes": "object-cover w-14 h-14 rounded-full" },
                              "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                              "page-item": { "classes": "border border-solid border-neutral-300 shadow-none! px-2 py-1 rounded-full cursor-pointer" },
                              "page-count": { "classes": "border border-solid border-neutral-300 shadow-none! px-2 py-1 rounded-full cursor-pointer w-16 text-center" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bc-hdr-col-actions",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                        "children": [
                          {
                            "id": "bc-hdr-account",
                            "type": "button",
                            "options": { "text": "Account", "linkTo": "custom", "scheme": "", "url": "/account", "target": "", "icon": "IconUserCircle", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-rose-600 cursor-pointer transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "font-medium" }
                            }
                          },
                          {
                            "id": "bc-hdr-cart",
                            "type": "cart",
                            "options": { "buttonIcon": "IconShoppingBag", "editMode": false },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "button": { "classes": "flex items-center gap-2 text-sm px-5 rounded-full py-2 bg-rose-600 hover:bg-rose-700 cursor-pointer text-white transition-colors" },
                              "button-quantity": { "classes": "font-semibold" },
                              "button-icon": { "classes": "" },
                              "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                              "cart-header": { "classes": "flex justify-between items-center bg-neutral-900 py-3 px-4 text-white" },
                              "cart-total-items": { "classes": "" },
                              "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                              "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-full text-sm" },
                              "go-to-checkout": { "classes": "text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-full cursor-pointer" },
                              "coupon-input": { "classes": "w-28 border! border-solid border-neutral-300 shadow-none! text-center rounded-full" },
                              "coupon-apply-button": { "classes": "text-white bg-neutral-900 px-3 py-2 rounded-full cursor-pointer" },
                              "back-to-cart": { "classes": "text-sm text-rose-600 cursor-pointer" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "bc-hdr-nav",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-rose-100 bg-white" } },
                "children": [
                  {
                    "id": "bc-hdr-nav-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-3 overflow-x-auto flex justify-center" } },
                    "children": [
                      {
                        "id": "bc-hdr-menu",
                        "type": "menu",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "menu": { "classes": "flex gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700 whitespace-nowrap" },
                          "menu-item": { "classes": "" },
                          "sub-menu": { "classes": "rounded-2xl border border-rose-100 bg-white shadow-lg py-2 min-w-48 normal-case tracking-normal" },
                          "menu-link": { "classes": "hover:text-rose-600 transition-colors py-1" },
                          "link-label": { "classes": "" },
                          "icon": { "classes": "" }
                        },
                        "children": [
                          { "id": "bc-hdr-mi-1", "type": "menuItem", "options": { "label": "New In", "url": "/shop/new" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          {
                            "id": "bc-hdr-mi-2",
                            "type": "menuItem",
                            "options": { "label": "Skincare", "url": "/categories/skincare" },
                            "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" }, "sub-menu": { "classes": "" } },
                            "children": [
                              { "id": "bc-hdr-mi-2-1", "type": "menuItem", "options": { "label": "Cleansers", "url": "/categories/cleansers" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-normal hover:bg-rose-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "bc-hdr-mi-2-2", "type": "menuItem", "options": { "label": "Serums", "url": "/categories/serums" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-normal hover:bg-rose-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "bc-hdr-mi-2-3", "type": "menuItem", "options": { "label": "Sunscreen", "url": "/categories/sunscreen" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-normal hover:bg-rose-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                            ]
                          },
                          { "id": "bc-hdr-mi-3", "type": "menuItem", "options": { "label": "Makeup", "url": "/categories/makeup" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "bc-hdr-mi-4", "type": "menuItem", "options": { "label": "Haircare", "url": "/categories/haircare" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "bc-hdr-mi-5", "type": "menuItem", "options": { "label": "Fragrance", "url": "/categories/fragrance" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "bc-hdr-mi-6", "type": "menuItem", "options": { "label": "Brands", "url": "/brands" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "bc-hdr-mi-7", "type": "menuItem", "options": { "label": "Offers", "url": "/shop/offers" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "text-rose-600" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
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
            "id": "bc-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-900" } },
            "children": [
              {
                "id": "bc-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-14" } },
                "children": [
                  {
                    "id": "bc-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "bc-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "bc-ftr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Beauty & Cosmetics", "src": "https://placehold.co/280x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-40 h-auto object-contain" },
                              "text": { "classes": "text-xl font-semibold tracking-[0.12em] uppercase text-white" }
                            }
                          },
                          {
                            "id": "bc-ftr-tagline",
                            "type": "text",
                            "options": { "text": "Authentic skincare, makeup and fragrance, sourced from the brand or its authorised distributor.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-400 leading-relaxed max-w-xs" } }
                          },
                          {
                            "id": "bc-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": { "icon": "IconPhone", "label": "Phone", "value": "01XXXXXXXXX" },
                              "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
                              "location": { "icon": "IconMapPin", "label": "Location", "value": "Add your shop address here" },
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 flex-col text-sm text-neutral-400" },
                              "item": { "classes": "flex gap-2 items-start" },
                              "link": { "classes": "flex gap-2 items-center hover:text-rose-400 transition-colors" },
                              "phone-link": { "classes": "" },
                              "email-link": { "classes": "" },
                              "icon": { "classes": "text-rose-500 shrink-0" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bc-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "bc-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "items": [
                                { "text": "New In", "icon": "", "slug": "/shop/new" },
                                { "text": "Skincare", "icon": "", "slug": "/categories/skincare" },
                                { "text": "Makeup", "icon": "", "slug": "/categories/makeup" },
                                { "text": "Fragrance", "icon": "", "slug": "/categories/fragrance" },
                                { "text": "Brands", "icon": "", "slug": "/brands" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-xs font-semibold text-white uppercase tracking-[0.14em]" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-rose-400 transition-colors" },
                              "icon": { "classes": "text-neutral-600" },
                              "text": { "classes": "text-sm text-neutral-400" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bc-ftr-gi-help",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "bc-ftr-ll-help",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Service",
                              "tag": "ul",
                              "items": [
                                { "text": "Track Order", "icon": "", "slug": "/track-order" },
                                { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
                                { "text": "Returns & Refunds", "icon": "", "slug": "/returns" },
                                { "text": "Authenticity Promise", "icon": "", "slug": "/authenticity" },
                                { "text": "FAQ", "icon": "", "slug": "/faq" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-xs font-semibold text-white uppercase tracking-[0.14em]" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-rose-400 transition-colors" },
                              "icon": { "classes": "text-neutral-600" },
                              "text": { "classes": "text-sm text-neutral-400" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bc-ftr-gi-company",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "bc-ftr-ll-company",
                            "type": "linkList",
                            "options": {
                              "headerText": "Company",
                              "tag": "ul",
                              "items": [
                                { "text": "About Us", "icon": "", "slug": "/about" },
                                { "text": "Journal", "icon": "", "slug": "/blog" },
                                { "text": "Contact", "icon": "", "slug": "/contact" },
                                { "text": "Privacy Policy", "icon": "", "slug": "/privacy-policy" },
                                { "text": "Terms & Conditions", "icon": "", "slug": "/terms" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-xs font-semibold text-white uppercase tracking-[0.14em]" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-rose-400 transition-colors" },
                              "icon": { "classes": "text-neutral-600" },
                              "text": { "classes": "text-sm text-neutral-400" }
                            }
                          },
                          {
                            "id": "bc-ftr-msg",
                            "type": "messengerButton",
                            "options": { "label": "Chat on Messenger", "username": "", "message": "Hi, I need help choosing a product.", "icon": "IconBrandMessenger", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-full bg-white text-neutral-900 cursor-pointer hover:bg-rose-100 transition-colors" },
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
                "id": "bc-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-white/10" } },
                "children": [
                  {
                    "id": "bc-ftr-bottom-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "bc-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "bc-ftr-copy",
                            "type": "text",
                            "options": { "text": "(c) 2026 Beauty & Cosmetics. All rights reserved.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-500" } }
                          }
                        ]
                      },
                      {
                        "id": "bc-ftr-pay-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                        "children": [
                          {
                            "id": "bc-ftr-pay",
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
            "id": "bc-bs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-bs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pt-14 pb-8 flex flex-col gap-5" } },
                "children": [
                  {
                    "id": "bc-bs-title",
                    "type": "postTitle",
                    "options": { "linkTo": "", "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight" } }
                  },
                  {
                    "id": "bc-bs-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500" } },
                    "children": [
                      {
                        "id": "bc-bs-author",
                        "type": "postAuthor",
                        "options": { "linkTo": "", "classes": "" },
                        "cssSelectors": { "*": { "classes": "font-medium text-neutral-700" } }
                      },
                      {
                        "id": "bc-bs-date",
                        "type": "postDate",
                        "options": { "linkTo": "", "dateFormat": "MMMM DD, YYYY" },
                        "cssSelectors": { "*": { "classes": "text-neutral-400" } }
                      }
                    ]
                  },
                  {
                    "id": "bc-bs-thumb",
                    "type": "postThumbnail",
                    "options": { "linkTo": "postUrl" },
                    "cssSelectors": {
                      "*": { "classes": "w-full overflow-hidden rounded-3xl" },
                      "link": { "classes": "block" },
                      "image": { "classes": "w-full aspect-video object-cover bg-rose-50" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-bs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-bs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pb-14" } },
                "children": [
                  {
                    "id": "bc-bs-content",
                    "type": "postContent",
                    "options": { "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-base text-neutral-700 leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-4 [&_a]:text-rose-700 [&_a]:underline [&_img]:rounded-2xl [&_img]:my-6" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-bs-comments",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50/60 border-y border-rose-100" } },
            "children": [
              {
                "id": "bc-bs-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "bc-bs-comments-h",
                    "type": "heading",
                    "options": { "text": "Comments", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-bs-rev",
                    "type": "commentsGrid",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "w-full" },
                      "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                      "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-2xl bg-white border border-rose-100" }
                    },
                    "children": [
                      {
                        "id": "bc-bs-rev-loop",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                          "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-2xl bg-white border border-rose-100" }
                        },
                        "children": [
                          {
                            "id": "bc-bs-rev-avatar",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-10 h-10 rounded-full object-cover bg-neutral-100" }
                            }
                          },
                          {
                            "id": "bc-bs-rev-author",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900" } }
                          },
                          {
                            "id": "bc-bs-rev-rate",
                            "type": "commentRate",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                          },
                          {
                            "id": "bc-bs-rev-body",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed" } }
                          }
                        ]
                      },
                      {
                        "id": "bc-bs-form",
                        "type": "commentsForm",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "mt-6 p-5 rounded-2xl bg-white border border-rose-100" } }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-bs-more",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-bs-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "bc-bs-more-h",
                    "type": "heading",
                    "options": { "text": "Read next", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-bs-more-pg-1",
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
                        "id": "bc-bs-more-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "flex gap-4 items-center bg-white border border-gray-100 rounded-lg p-3 transition-all duration-200 hover:border-gray-300 group" }
                        },
                        "children": [
                          {
                            "id": "bc-bs-more-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-20 h-20 shrink-0 overflow-hidden rounded-md bg-gray-50" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bc-bs-more-pg-4",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-rose-600" } }
                          },
                          {
                            "id": "bc-bs-more-pg-5",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs text-neutral-400" } }
                          }
                        ]
                      },
                      {
                        "id": "bc-bs-more-pg-6",
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
            "id": "bc-bl-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-bl-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-bl-head-e",
                    "type": "heading",
                    "options": { "text": "The edit", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-bl-head-h",
                    "type": "heading",
                    "options": { "text": "Routines, ingredients and how-tos", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-bl-head-t",
                    "type": "text",
                    "options": { "text": "Guides from our team on building a routine that actually sticks.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-bl-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-bl-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "bc-bl-grid-1",
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
                        "id": "bc-bl-grid-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "flex flex-col gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group" }
                        },
                        "children": [
                          {
                            "id": "bc-bl-grid-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "relative h-52 overflow-hidden rounded-lg bg-gray-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bc-bl-grid-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-neutral-400" } }
                          },
                          {
                            "id": "bc-bl-grid-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-semibold text-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-rose-600" } }
                          },
                          {
                            "id": "bc-bl-grid-6",
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
                              "read-more": { "classes": "flex gap-2 items-center text-sm font-medium text-rose-600 hover:text-rose-700" },
                              "read-more-icon": { "classes": "" },
                              "read-more-label": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bc-bl-grid-7",
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
                        "id": "bc-bl-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
                          "next": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
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
            "id": "bc-nf",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50/60" } },
            "children": [
              {
                "id": "bc-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "bc-nf-icon",
                    "type": "icon",
                    "options": { "iconName": "IconSparkles", "size": "48" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-rose-300" } }
                  },
                  {
                    "id": "bc-nf-h",
                    "type": "heading",
                    "options": { "text": "This page has slipped away", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-nf-t",
                    "type": "text",
                    "options": { "text": "The link may be broken or the product may have sold out. Try the shop, or start again from the homepage.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-md" } }
                  },
                  {
                    "id": "bc-nf-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-2" } },
                    "children": [
                      {
                        "id": "bc-nf-b1",
                        "type": "button",
                        "options": { "text": "Back to home", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "IconHome", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-600 text-white cursor-pointer hover:bg-rose-700 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold tracking-wide" }
                        }
                      },
                      {
                        "id": "bc-nf-b2",
                        "type": "button",
                        "options": { "text": "Shop all products", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-rose-200 text-rose-700 cursor-pointer hover:bg-rose-50 transition-colors w-fit" },
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
            "id": "bc-hero",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
                "children": [
                  {
                    "id": "bc-hero-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "bc-hero-copy",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "bc-hero-e",
                            "type": "heading",
                            "options": { "text": "New season", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                          },
                          {
                            "id": "bc-hero-h",
                            "type": "heading",
                            "options": { "text": "Skincare that earns its place on your shelf", "tag": "h1" },
                            "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight" } }
                          },
                          {
                            "id": "bc-hero-t",
                            "type": "text",
                            "options": {
                              "text": "Dermatologist-tested formulas, honest ingredient lists and shades for every skin tone. Free delivery over Tk 1,500.",
                              "tag": "p"
                            },
                            "cssSelectors": { "*": { "classes": "text-base text-neutral-600 leading-relaxed max-w-lg" } }
                          },
                          {
                            "id": "bc-hero-actions",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-3" } },
                            "children": [
                              {
                                "id": "bc-hero-b1",
                                "type": "button",
                                "options": { "text": "Shop new in", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                                "cssSelectors": {
                                  "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-full bg-rose-600 text-white cursor-pointer hover:bg-rose-700 transition-colors w-fit" },
                                  "icon": { "classes": "flex items-center shrink-0" },
                                  "label": { "classes": "text-sm font-semibold tracking-wide" }
                                }
                              },
                              {
                                "id": "bc-hero-b2",
                                "type": "button",
                                "options": { "text": "Find your shade", "linkTo": "custom", "scheme": "", "url": "/categories", "target": "", "icon": "", "iconSize": "" },
                                "cssSelectors": {
                                  "*": { "classes": "inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-rose-200 text-rose-700 cursor-pointer hover:bg-rose-50 transition-colors w-fit" },
                                  "icon": { "classes": "" },
                                  "label": { "classes": "text-sm font-semibold" }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "bc-hero-art",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "bc-hero-img-1",
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
            "id": "bc-cat",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-cat-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "bc-cat-h",
                    "type": "heading",
                    "options": { "text": "Shop by category", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-cat-tg-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "8",
                        "per_page": "8",
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
                        "id": "bc-cat-tg-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "h-full bg-white border border-neutral-200 rounded-xl p-4 flex flex-col gap-3" }
                        },
                        "children": [
                          {
                            "id": "bc-cat-tg-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full aspect-square rounded-lg overflow-hidden bg-neutral-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "bc-cat-tg-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900 text-center line-clamp-2" } }
                          },
                          {
                            "id": "bc-cat-tg-5",
                            "type": "termCount",
                            "options": { "label": "", "suffix": " items", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mx-auto text-xs font-medium text-neutral-500 bg-neutral-100 rounded-full px-2.5 py-1" } }
                          }
                        ]
                      },
                      {
                        "id": "bc-cat-tg-6",
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
          },
          {
            "id": "bc-best",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50/60" } },
            "children": [
              {
                "id": "bc-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "bc-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-col gap-2" } },
                    "children": [
                      {
                        "id": "bc-best-e",
                        "type": "heading",
                        "options": { "text": "Loved by customers", "tag": "h2" },
                        "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                      },
                      {
                        "id": "bc-best-h",
                        "type": "heading",
                        "options": { "text": "Best sellers", "tag": "h2" },
                        "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                      }
                    ]
                  },
                  {
                    "id": "bc-best-pg",
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
                      "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-3 text-center" }
                    },
                    "children": [
                      {
                        "id": "bc-best-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-3 text-center" }
                        },
                        "children": [
                          {
                            "id": "bc-best-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-2xl bg-rose-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bc-best-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-rose-700" } }
                          },
                          {
                            "id": "bc-best-c-rate-1",
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
                            "id": "bc-best-c-price-1",
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
            "id": "bc-promise",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "bc-promise-h",
                    "type": "heading",
                    "options": { "text": "Our promise", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-promise-fb-1",
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
                      "icon": { "classes": "shrink-0 mt-0.5 w-8 h-8 rounded-full border border-rose-200 bg-rose-50 text-rose-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "bc-promise-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconShieldCheck", "size": "16" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "bc-promise-fb-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-1" } },
                        "children": [
                          {
                            "id": "bc-promise-fb-4",
                            "type": "featureboxTitle",
                            "options": { "tag": "h4" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "img": { "classes": "" }
                            }
                          },
                          {
                            "id": "bc-promise-fb-5",
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
            "id": "bc-ritual",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-neutral-950" } },
            "children": [
              {
                "id": "bc-ritual-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "bc-ritual-h",
                    "type": "heading",
                    "options": { "text": "Build your routine", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-white" } }
                  },
                  {
                    "id": "bc-ritual-pg-1",
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
                        "id": "bc-ritual-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "flex flex-col gap-3 bg-neutral-900 border border-neutral-800 p-3 rounded-2xl transition-all duration-300 ease-out hover:border-amber-400/60 hover:-translate-y-1 group" }
                        },
                        "children": [
                          {
                            "id": "bc-ritual-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "h-52 overflow-hidden rounded-xl bg-neutral-800" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110" }
                            }
                          },
                          {
                            "id": "bc-ritual-pg-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-[11px] uppercase tracking-wide text-amber-400" } }
                          },
                          {
                            "id": "bc-ritual-pg-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-medium text-neutral-100 line-clamp-2 transition-colors duration-300 group-hover:text-amber-300" } }
                          },
                          {
                            "id": "bc-ritual-pg-6",
                            "type": "postExcerpt",
                            "options": {
                              "tag": "p",
                              "linkTo": "postUrl",
                              "maxWord": 20,
                              "readMoreText": "Read More",
                              "readMoreIcon": "IconArrowNarrowRight",
                              "readMoreIconSize": 18
                            },
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
                        "id": "bc-ritual-pg-7",
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
            "id": "bc-ac-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-ac-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-ac-head-e",
                    "type": "heading",
                    "options": { "text": "Your account", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-ac-head-h",
                    "type": "heading",
                    "options": { "text": "Orders and details", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-ac-head-t",
                    "type": "text",
                    "options": { "text": "Track an order, manage subscriptions and keep your address up to date.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-ac-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-ac-ca-1",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-12 bg-neutral-50" } },
                "children": [
                  {
                    "id": "bc-ac-ca-2",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "bc-ac-ca-3",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden border border-neutral-200 bg-neutral-200" },
                          "grid-item": { "classes": "" }
                        },
                        "children": [
                          {
                            "id": "bc-ac-ca-4",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "bg-white p-7" } },
                            "children": [
                              {
                                "id": "bc-ac-ca-5",
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
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-md border border-neutral-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-200" },
                                  "input-username": { "classes": "" },
                                  "input-phone": { "classes": "" },
                                  "input-password": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-email": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-phone": { "classes": "" },
                                  "label-password": { "classes": "" },
                                  "submit": { "classes": "w-full py-2.5 rounded-md bg-neutral-900 text-sm font-semibold text-white text-center cursor-pointer hover:bg-neutral-800 transition-colors" },
                                  "have-account": { "classes": "text-xs text-neutral-500" }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bc-ac-ca-6",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "bg-white p-7" } },
                            "children": [
                              {
                                "id": "bc-ac-ca-7",
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
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-md border border-neutral-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-200" },
                                  "input-username": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-medium text-neutral-600" },
                                  "label-email": { "classes": "text-xs font-medium text-neutral-600" },
                                  "submit": { "classes": "w-full py-2.5 rounded-md bg-neutral-900 text-sm font-semibold text-white text-center cursor-pointer hover:bg-neutral-800 transition-colors" },
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
                    "id": "bc-ac-ca-8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "bc-ac-ca-9",
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
                          "navs-items": { "classes": "flex gap-5 overflow-x-auto" },
                          "nav-item": { "classes": "flex items-center gap-2 shrink-0 pb-2 text-sm text-neutral-500 whitespace-nowrap cursor-pointer hover:text-neutral-900" },
                          "nav-item-active": { "classes": "font-semibold text-neutral-900!" },
                          "nav-item-label": { "classes": "" },
                          "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                          "nav-item-content": { "classes": "pt-5" }
                        },
                        "children": [
                          {
                            "id": "bc-ac-ca-10",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "bc-ac-ca-11",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bc-ac-ca-12",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "bc-ac-ca-13",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bc-ac-ca-14",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "bc-ac-ca-15",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bc-ac-ca-16",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "bc-ac-ca-17",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bc-ac-ca-18",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "bc-ac-ca-19",
                                "type": "customerProfileEdit",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" } },
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
            "id": "bc-ty",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "bc-ty-icon",
                    "type": "icon",
                    "options": { "iconName": "IconCircleCheckFilled", "size": "56" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-rose-600" } }
                  },
                  {
                    "id": "bc-ty-h",
                    "type": "heading",
                    "options": { "text": "Your order is confirmed", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-ty-t",
                    "type": "text",
                    "options": { "text": "We have sent the details by SMS. Our team will call to confirm your address before the parcel is dispatched.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-lg" } }
                  },
                  {
                    "id": "bc-ty-steps-1",
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
                      "li": { "classes": "list-decimal pl-1 marker:font-semibold marker:text-rose-500" },
                      "icon": { "classes": "empty:hidden" },
                      "text": { "classes": "text-sm text-neutral-700 leading-relaxed" }
                    }
                  },
                  {
                    "id": "bc-ty-b",
                    "type": "button",
                    "options": { "text": "Keep shopping", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-full bg-rose-600 text-white cursor-pointer hover:bg-rose-700 transition-colors w-fit" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-semibold tracking-wide" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-ty-trust",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-ty-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "bc-ty-fb-1",
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
                      "icon": { "classes": "w-12 h-12 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "bc-ty-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconShieldCheck", "size": "24" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "bc-ty-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h3" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "bc-ty-fb-4",
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
            "id": "bc-bn-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-bn-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-bn-head-e",
                    "type": "heading",
                    "options": { "text": "Brand", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-bn-head-h",
                    "type": "heading",
                    "options": { "text": "Brand", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-bn-head-t",
                    "type": "text",
                    "options": { "text": "Everything we stock from this brand.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-bn-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-bn-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "bc-bn-body-pg",
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
                      "loop-items": { "classes": "grid gap-5 grid-cols-1 sm:grid-cols-2" },
                      "loop-item": { "classes": "group flex flex-row items-center gap-4 p-3 rounded-2xl bg-white border border-rose-100" }
                    },
                    "children": [
                      {
                        "id": "bc-bn-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "group flex flex-row items-center gap-4 p-3 rounded-2xl bg-white border border-rose-100" }
                        },
                        "children": [
                          {
                            "id": "bc-bn-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-2xl bg-rose-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bc-bn-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-rose-700" } }
                          },
                          {
                            "id": "bc-bn-body-c-rate-1",
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
                            "id": "bc-bn-body-c-price-1",
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
                        "id": "bc-bn-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
                          "next": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
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
            "id": "bc-br-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-br-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-br-head-e",
                    "type": "heading",
                    "options": { "text": "Brands", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-br-head-h",
                    "type": "heading",
                    "options": { "text": "The labels we carry", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-br-head-t",
                    "type": "text",
                    "options": { "text": "Cult favourites and quiet classics, stocked in full.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-br-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-br-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14" } },
                "children": [
                  {
                    "id": "bc-br-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "24",
                        "per_page": "24",
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
                        "id": "bc-br-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group relative h-64 rounded-2xl overflow-hidden bg-neutral-200" }
                        },
                        "children": [
                          {
                            "id": "bc-br-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "block w-full h-64" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" }
                            }
                          },
                          {
                            "id": "bc-br-grid-4",
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
          }
        ],
        "meta": "",
      },
      {
        "title": "Tags Single",
        "type": "tags_single",
        "content": [
          {
            "id": "bc-ts-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-ts-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-ts-head-e",
                    "type": "heading",
                    "options": { "text": "Tag", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-ts-head-h",
                    "type": "heading",
                    "options": { "text": "Tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-ts-head-t",
                    "type": "text",
                    "options": { "text": "Products matching this concern, across every category.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-ts-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-ts-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "bc-ts-body-pg",
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
                      "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-3 text-center" }
                    },
                    "children": [
                      {
                        "id": "bc-ts-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-3 text-center" }
                        },
                        "children": [
                          {
                            "id": "bc-ts-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-2xl bg-rose-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bc-ts-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-rose-700" } }
                          },
                          {
                            "id": "bc-ts-body-c-rate-1",
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
                            "id": "bc-ts-body-c-price-1",
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
                        "id": "bc-ts-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
                          "next": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
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
            "id": "bc-tg-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-tg-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-tg-head-e",
                    "type": "heading",
                    "options": { "text": "Tags", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-tg-head-h",
                    "type": "heading",
                    "options": { "text": "Shop by concern", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-tg-head-t",
                    "type": "text",
                    "options": { "text": "Dry skin, dark spots, frizz: tags cut across categories.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-tg-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-tg-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14" } },
                "children": [
                  {
                    "id": "bc-tg-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_tag",
                        "number": "48",
                        "per_page": "48",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count"
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "py-6" },
                      "loop-items": { "classes": "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2" },
                      "loop-item": { "classes": "flex items-center justify-between gap-4 pl-4 pr-5 py-3.5 bg-white border-l-2 border-rose-500 hover:bg-rose-50 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "bc-tg-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center justify-between gap-4 pl-4 pr-5 py-3.5 bg-white border-l-2 border-rose-500" }
                        },
                        "children": [
                          {
                            "id": "bc-tg-grid-3",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-medium text-neutral-900 truncate" } }
                          },
                          {
                            "id": "bc-tg-grid-4",
                            "type": "termCount",
                            "options": { "label": "", "suffix": " items", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "shrink-0 text-xs font-medium text-rose-700 bg-rose-100 rounded-full px-2.5 py-1" } }
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
            "id": "bc-cs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-cs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-cs-head-e",
                    "type": "heading",
                    "options": { "text": "Category", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-cs-head-h",
                    "type": "heading",
                    "options": { "text": "Category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-cs-head-t",
                    "type": "text",
                    "options": { "text": "Products in this category, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-cs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-cs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "bc-cs-body-pg",
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
                      "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-3 text-center" }
                    },
                    "children": [
                      {
                        "id": "bc-cs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-3 text-center" }
                        },
                        "children": [
                          {
                            "id": "bc-cs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-2xl bg-rose-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bc-cs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-rose-700" } }
                          },
                          {
                            "id": "bc-cs-body-c-rate-1",
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
                            "id": "bc-cs-body-c-price-1",
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
                        "id": "bc-cs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
                          "next": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
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
            "id": "bc-cs-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-rose-100" } },
            "children": [
              {
                "id": "bc-cs-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "bc-cs-fb-1",
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
                        "id": "bc-cs-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruck", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "bc-cs-fb-3",
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
            "id": "bc-ca-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-ca-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-ca-head-e",
                    "type": "heading",
                    "options": { "text": "Categories", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-ca-head-h",
                    "type": "heading",
                    "options": { "text": "Shop by category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-ca-head-t",
                    "type": "text",
                    "options": { "text": "From cleansers to lipstick, every shelf in the store.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-ca-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-ca-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14" } },
                "children": [
                  {
                    "id": "bc-ca-grid-1",
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
                      "*": { "classes": "py-8" },
                      "loop-items": { "classes": "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6" },
                      "loop-item": { "classes": "group flex flex-col items-center gap-3 text-center" }
                    },
                    "children": [
                      {
                        "id": "bc-ca-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group flex flex-col items-center gap-3 text-center" }
                        },
                        "children": [
                          {
                            "id": "bc-ca-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-24 h-24 mx-auto rounded-full overflow-hidden bg-neutral-50 ring-2 ring-neutral-200 group-hover:ring-rose-400 transition-all duration-200" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "bc-ca-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 group-hover:text-rose-600 transition-colors line-clamp-2" } }
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
            "id": "bc-pd-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-pd-main-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "bc-pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-12" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "bc-pd-gallery",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "bc-pd-gal-1",
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
                                "speed": 350,
                                "drag": 1
                              }
                            },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "items": { "classes": "" },
                              "item": { "classes": "border border-neutral-200 rounded-lg overflow-hidden bg-white p-2 [&_img]:rounded [&_img]:aspect-square [&_img]:object-contain" },
                              "image": { "classes": "" },
                              "arrows": { "classes": "" },
                              "prev": { "classes": "bg-neutral-900! opacity-100! size-8! rounded-md! hover:bg-neutral-700! [&>svg]:fill-white!" },
                              "next": { "classes": "bg-neutral-900! opacity-100! size-8! rounded-md! hover:bg-neutral-700! [&>svg]:fill-white!" },
                              "pagination": { "classes": "" },
                              "dot": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bc-pd-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "bc-pd-cat-1",
                            "type": "productCategories",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-2 flex-wrap" },
                              "label": { "classes": "text-xs font-semibold uppercase tracking-wide text-neutral-400" },
                              "items": { "classes": "flex flex-wrap gap-2" },
                              "item": { "classes": "px-2.5 py-1 text-xs font-medium text-rose-700 bg-rose-50 border border-rose-100 rounded-md hover:bg-rose-100 transition-colors" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "hidden" }
                            }
                          },
                          {
                            "id": "bc-pd-title",
                            "type": "postTitle",
                            "options": { "linkTo": "", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900" } }
                          },
                          {
                            "id": "bc-pd-brand-1",
                            "type": "productBrands",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "label": { "classes": "" },
                              "items": { "classes": "flex flex-wrap items-baseline" },
                              "item": { "classes": "group text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors" },
                              "category-name": { "classes": "group-hover:underline underline-offset-2" },
                              "separator": { "classes": "text-neutral-300 no-underline" }
                            }
                          },
                          {
                            "id": "bc-pd-rate-1",
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
                            "id": "bc-pd-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2.5 items-baseline [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-2xl font-bold text-neutral-900" },
                              "simple-price-regular": { "classes": "text-sm line-through text-neutral-400" },
                              "variable-price-wrap": { "classes": "flex gap-2 items-center" },
                              "variable-price-min": { "classes": "text-base text-neutral-600" },
                              "variable-price-max": { "classes": "text-base text-neutral-600" }
                            }
                          },
                          {
                            "id": "bc-pd-var-1",
                            "type": "productVariablePrices",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "attr-wrap": { "classes": "flex flex-col gap-6" },
                              "attr-item": { "classes": "flex flex-col gap-3" },
                              "attr-title": { "classes": "text-sm font-semibold text-neutral-900" },
                              "attr-items-wrap": { "classes": "grid grid-cols-2 sm:grid-cols-3 gap-2.5" },
                              "variation-item": { "classes": "px-4 py-3 text-sm font-medium text-center text-neutral-800 bg-white border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-rose-400 hover:bg-rose-50 transition-colors" },
                              "variation-price": { "classes": "text-2xl font-bold text-neutral-900" },
                              "variation-selected": { "classes": "border-rose-500 bg-rose-50 text-rose-700" },
                              "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
                            }
                          },
                          {
                            "id": "bc-pd-stock-1",
                            "type": "productStockStatus",
                            "options": {
                              "label": "Availability",
                              "labelIcon": "IconPackage",
                              "outOfStockText": "Out of stock",
                              "inStockText": "In stock, ready to ship",
                              "outOfStockIcon": "",
                              "inStockIcon": "IconCheck",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-3 py-2 border-y border-neutral-100" },
                              "stock-status": { "classes": "flex items-center gap-1.5" },
                              "label": { "classes": "flex items-center gap-2 text-neutral-500" },
                              "label-text": { "classes": "text-sm font-medium" },
                              "label-icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
                              "icon": { "classes": "shrink-0 flex items-center [&_svg]:size-4" },
                              "out-of-stock": { "classes": "text-red-600" },
                              "out-of-stock-label": { "classes": "" },
                              "out-of-stock-icon": { "classes": "" },
                              "in-stock": { "classes": "text-emerald-600" },
                              "in-stock-label": { "classes": "" },
                              "in-stock-icon": { "classes": "" }
                            }
                          },
                          {
                            "id": "bc-pd-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 18, "hideQuanity": false, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-3 items-stretch" },
                              "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-md border border-neutral-300 text-neutral-500" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-rose-500 text-white cursor-pointer hover:bg-rose-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-sm font-semibold whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "bc-pd-wa-1",
                            "type": "whatsappButton",
                            "options": {
                              "label": "WhatsApp us",
                              "phone": "",
                              "message": "Hi, I want to buy {product_title} {product_url}",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "flex gap-1.5 items-center px-3 py-1.5 rounded-full bg-[#25d366]/10 text-[#1da851] cursor-pointer hover:bg-[#25d366]/20 transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-xs font-medium whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "bc-pd-usp-1",
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
                            "id": "bc-pd-sku-1",
                            "type": "productSku",
                            "options": { "label": "SKU", "icon": "", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col items-start gap-0.5" },
                              "label": { "classes": "empty:hidden text-[11px] font-semibold uppercase tracking-widest text-neutral-400" },
                              "sku": { "classes": "text-base font-semibold text-neutral-900 tracking-wide" },
                              "icon": { "classes": "shrink-0 flex items-center text-neutral-400" }
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
            "id": "bc-pd-tabs-sec",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50/60 border-y border-rose-100" } },
            "children": [
              {
                "id": "bc-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "bc-pd-tabs",
                    "type": "tabs",
                    "options": {
                      "orientation": "",
                      "tabsItems": [
                        {
                          "label": "About",
                          "icon": "IconFileDescription"
                        },
                        {
                          "label": "Ingredients",
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
                      "navs-items": { "classes": "gap-1 bg-neutral-100 p-1 rounded-lg" },
                      "nav-item": { "classes": "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-neutral-600 whitespace-nowrap cursor-pointer" },
                      "nav-item-active": { "classes": "bg-white! text-neutral-900! shadow-sm!" },
                      "nav-item-label": { "classes": "" },
                      "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                      "nav-item-content": { "classes": "pt-5" }
                    },
                    "children": [
                      {
                        "id": "bc-pd-tab1",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "bc-pd-desc",
                            "type": "postContent",
                            "options": { "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-neutral-700 leading-relaxed max-w-3xl [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3 [&_strong]:font-semibold" } }
                          }
                        ]
                      },
                      {
                        "id": "bc-pd-tab2",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "bc-pd-ing-1",
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
                        "id": "bc-pd-tab3",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "bc-pd-rev",
                            "type": "commentsGrid",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                              "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-2xl bg-white border border-rose-100" }
                            },
                            "children": [
                              {
                                "id": "bc-pd-rev-loop",
                                "type": "commentsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                                  "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-2xl bg-white border border-rose-100" }
                                },
                                "children": [
                                  {
                                    "id": "bc-pd-rev-avatar",
                                    "type": "commentAvatar",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": { "classes": "w-fit" },
                                      "link": { "classes": "block" },
                                      "image": { "classes": "w-10 h-10 rounded-full object-cover bg-neutral-100" }
                                    }
                                  },
                                  {
                                    "id": "bc-pd-rev-author",
                                    "type": "commentAuthor",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm font-semibold text-neutral-900" } }
                                  },
                                  {
                                    "id": "bc-pd-rev-rate",
                                    "type": "commentRate",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                                  },
                                  {
                                    "id": "bc-pd-rev-body",
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
            "id": "bc-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-pd-rel-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "bc-pd-rel-h",
                    "type": "heading",
                    "options": { "text": "Complete the routine", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-pd-rel-rp-1",
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
                      "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "bc-pd-rel-rp-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "bc-pd-rel-rp-3",
                            "type": "productBadge",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute top-3 left-3 z-10" },
                              "label": { "classes": "" },
                              "items": { "classes": "flex flex-col items-start gap-1.5" },
                              "item": { "classes": "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white bg-neutral-900 rounded shadow-sm" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "hidden" }
                            }
                          },
                          {
                            "id": "bc-pd-rel-rp-4",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-md bg-red-600 shadow-sm" },
                              "discount": { "classes": "text-[11px] font-bold text-white leading-none" },
                              "label": { "classes": "text-[9px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "bc-pd-rel-rp-5",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-lg" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-neutral-50 transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bc-pd-rel-rp-6",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-rose-600" } }
                          },
                          {
                            "id": "bc-pd-rel-rp-7",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline" },
                              "simple-price-sale": { "classes": "text-base font-bold text-red-600" },
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
            "id": "bc-sh-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-rose-50" } },
            "children": [
              {
                "id": "bc-sh-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col items-center text-center gap-3" } },
                "children": [
                  {
                    "id": "bc-sh-head-e",
                    "type": "heading",
                    "options": { "text": "All products", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-600" } }
                  },
                  {
                    "id": "bc-sh-head-h",
                    "type": "heading",
                    "options": { "text": "Skincare, makeup and haircare", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900" } }
                  },
                  {
                    "id": "bc-sh-head-t",
                    "type": "text",
                    "options": { "text": "Everything in the store, newest first. Filter by category or shade to narrow it down.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-neutral-600 leading-relaxed max-w-xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "bc-sh-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "bc-sh-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "bc-sh-body-pg",
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
                      "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex flex-col gap-3 text-center" }
                    },
                    "children": [
                      {
                        "id": "bc-sh-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-3 text-center" }
                        },
                        "children": [
                          {
                            "id": "bc-sh-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-2xl bg-rose-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "bc-sh-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-neutral-800 line-clamp-2 transition-colors group-hover:text-rose-700" } }
                          },
                          {
                            "id": "bc-sh-body-c-rate-1",
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
                            "id": "bc-sh-body-c-price-1",
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
                        "id": "bc-sh-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
                          "next": { "classes": "px-5 py-2 rounded-full border border-rose-200 text-sm text-rose-700 cursor-pointer hover:bg-rose-50" },
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
            "id": "bc-sh-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-rose-100" } },
            "children": [
              {
                "id": "bc-sh-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "bc-sh-fb-1",
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
                      "icon": { "classes": "shrink-0 w-11 h-11 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "bc-sh-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruckDelivery", "size": "22" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "bc-sh-fb-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col" } },
                        "children": [
                          {
                            "id": "bc-sh-fb-4",
                            "type": "featureboxTitle",
                            "options": { "tag": "h4" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "img": { "classes": "" }
                            }
                          },
                          {
                            "id": "bc-sh-fb-5",
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
