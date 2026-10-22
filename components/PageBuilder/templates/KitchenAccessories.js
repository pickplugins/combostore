/**
 * Template: Kitchen Accessories.
 *
 * A single-product landing storefront for kitchen organisers, racks, cookware
 * and utensils, built to the shape of the long-form landing pages these
 * sellers run: a badge, a two-tone headline, a row of claim cards, a CTA
 * repeated down the page, a problem/benefit pair of columns, alternating
 * image-and-checklist blocks, a what-is-in-the-box row, a spec table and a
 * dark cash-on-delivery trust band at the end. Copy is English and
 * deliberately generic -- a merchant swaps the product name and the claims and
 * keeps the layout. The visual reference is templates/kitchen-accessories.png.
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
 *   1. The phone number. The order band uses a real click-to-call link, built
 *      as `${scheme}${url}` by Button.jsx with `scheme: "tel:"`, and both the
 *      label and the number are the placeholder `01XXXXXXXXX`.
 *   2. The WhatsApp number, left empty in the whatsappButton blocks for the
 *      same reason MessengerButton's username is -- see MessengerButton.js and
 *      WhatsappButton.js for why a preset must not ship one.
 *
 * Everything else follows the renderer quirks the element-layouts docblocks
 * establish. The ones that shaped this file:
 *
 *   - A heading cannot hold two colours: Heading.jsx renders `options.text` as
 *     plain text, no markup. The two-tone headlines in the reference are
 *     therefore a `heading` plus a `text` with `tag: "span"`, sitting in a
 *     flex-wrap container so they read as one line and break like one.
 *   - heading also ignores loop text (Heading.jsx:5,10 calls `useLoop()` and
 *     drops the result), so every per-item string in a featurebox or post loop
 *     comes from the item, never from a heading placed inside it.
 *   - image sizes through the `img` class string; `options.width`/`height` are
 *     dead (Image.jsx hardcodes 500x500), so each image pins an `aspect-*` to
 *     reserve the right box on first paint. All three selector keys are kept
 *     present or the renderer interpolates the literal "undefined".
 *   - `src` values use placehold.co, the host allowlisted in next.config.mjs.
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
 *   - Add-to-cart on a card is styling only: AddToCart.jsx takes productData
 *     from props and nothing passes it inside a loop, so the card button is a
 *     shape until the renderer wires it up.
 *   - Every `iconName` was checked against the installed @tabler/icons-react;
 *     an unknown name resolves to undefined and renders an empty box.
 *
 * The palette is the one in the reference: blue-50 bands on white, blue-600
 * CTAs, slate-900 type and a slate-900 trust band. Left alone on purpose:
 * amber for rating stars, red for discount badges and the problem column,
 * emerald for the benefit column and its ticks, and brand hexes such as
 * WhatsApp's #25d366.
 */

var template = [
  {

    "name": "Kitchen Accessories",
    "description": "Single-product landing storefront for kitchen organisers and cookware: claim cards, problem and benefit columns, spec table and a cash-on-delivery trust band.",
    "thumbnail": "",
    "meta": "",
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "ka-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white border-b border-slate-200 sticky top-0 z-40" } },
            "children": [
              {
                "id": "ka-hdr-strip",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full bg-slate-900" } },
                "children": [
                  {
                    "id": "ka-hdr-strip-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-7xl mx-auto px-5 py-2 flex items-center justify-center sm:justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-hdr-strip-l",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-2" } },
                        "children": [
                          {
                            "id": "ka-hdr-strip-i",
                            "type": "icon",
                            "options": { "iconName": "IconShieldCheck", "size": "14" },
                            "cssSelectors": { "*": { "classes": "shrink-0 flex items-center text-blue-400" } }
                          },
                          {
                            "id": "ka-hdr-strip-t",
                            "type": "text",
                            "options": { "text": "Cash on delivery - open the parcel and check it before you pay", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-slate-300" } }
                          }
                        ]
                      },
                      {
                        "id": "ka-hdr-strip-r",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "hidden sm:flex items-center gap-5" } },
                        "children": [
                          {
                            "id": "ka-hdr-strip-track",
                            "type": "button",
                            "options": { "text": "Track order", "linkTo": "custom", "scheme": "", "url": "/track-order", "target": "", "icon": "IconTruck", "iconSize": 15 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white cursor-pointer transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          },
                          {
                            "id": "ka-hdr-strip-help",
                            "type": "button",
                            "options": { "text": "Help", "linkTo": "custom", "scheme": "", "url": "/support", "target": "", "icon": "IconLifebuoy", "iconSize": 15 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white cursor-pointer transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ka-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-4" } },
                "children": [
                  {
                    "id": "ka-hdr-cols",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-center gap-5 flex-wrap justify-between" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-hdr-col-logo",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "ka-hdr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Kitchen Accessories", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-36 h-auto object-contain" },
                              "text": { "classes": "text-xl font-extrabold tracking-tight text-slate-900" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-hdr-col-nav",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "hidden lg:block" } },
                        "children": [
                          {
                            "id": "ka-hdr-menu",
                            "type": "menu",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "menu": { "classes": "flex gap-7 text-sm font-medium text-slate-700" },
                              "menu-item": { "classes": "" },
                              "sub-menu": { "classes": "rounded-xl border border-slate-200 bg-white shadow-lg py-2 min-w-52" },
                              "menu-link": { "classes": "hover:text-blue-700 transition-colors py-1" },
                              "link-label": { "classes": "" },
                              "icon": { "classes": "" }
                            },
                            "children": [
                              { "id": "ka-hdr-mi-1", "type": "menuItem", "options": { "label": "Home", "url": "/" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              {
                                "id": "ka-hdr-mi-2",
                                "type": "menuItem",
                                "options": { "label": "Organisers", "url": "/categories/organisers" },
                                "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" }, "sub-menu": { "classes": "" } },
                                "children": [
                                  { "id": "ka-hdr-mi-2-1", "type": "menuItem", "options": { "label": "Dish Racks", "url": "/categories/dish-racks" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-blue-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                                  { "id": "ka-hdr-mi-2-2", "type": "menuItem", "options": { "label": "Spice Racks", "url": "/categories/spice-racks" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-blue-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                                  { "id": "ka-hdr-mi-2-3", "type": "menuItem", "options": { "label": "Cabinet Storage", "url": "/categories/cabinet-storage" }, "cssSelectors": { "*": { "classes": "px-4 py-2 hover:bg-blue-50" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                                ]
                              },
                              { "id": "ka-hdr-mi-3", "type": "menuItem", "options": { "label": "Cookware", "url": "/categories/cookware" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "ka-hdr-mi-4", "type": "menuItem", "options": { "label": "Utensils", "url": "/categories/utensils" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "ka-hdr-mi-5", "type": "menuItem", "options": { "label": "Offers", "url": "/shop/offers" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "text-red-600 font-semibold" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ka-hdr-col-actions",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3 ml-auto" } },
                        "children": [
                          {
                            "id": "ka-hdr-search",
                            "type": "quickSearch",
                            "options": { "placeholder": "Search racks, organisers, utensils", "iconPosition": "", "icon": "IconZoom" },
                            "cssSelectors": {
                              "*": { "classes": "hidden md:block border border-slate-200 rounded-xl py-1.5 px-4 bg-slate-50" },
                              "input-search": { "classes": "w-full lg:w-52 px-2 bg-transparent border-0 shadow-none! outline-none" },
                              "input-wrapper": { "classes": "flex flex-nowrap gap-2 items-center" },
                              "icon": { "classes": "text-slate-500 shrink-0" },
                              "popover": { "classes": "bg-white shadow-xl rounded-xl border border-slate-200" },
                              "reset": { "classes": "text-red-400 text-sm cursor-pointer shrink-0" },
                              "categories": { "classes": "" },
                              "brands": { "classes": "" },
                              "items": { "classes": "divide-y divide-slate-100" },
                              "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-blue-50" },
                              "item-title": { "classes": "" },
                              "item-image": { "classes": "object-cover w-14 h-14 rounded-lg" },
                              "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                              "page-item": { "classes": "border border-solid border-slate-300 shadow-none! px-2 py-1 rounded-lg cursor-pointer" },
                              "page-count": { "classes": "border border-solid border-slate-300 shadow-none! px-2 py-1 rounded-lg cursor-pointer w-16 text-center" }
                            }
                          },
                          {
                            "id": "ka-hdr-call",
                            "type": "button",
                            "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 cursor-pointer hover:bg-blue-100 transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-bold tracking-wide" }
                            }
                          },
                          {
                            "id": "ka-hdr-cart",
                            "type": "cart",
                            "options": { "buttonIcon": "IconShoppingCart", "editMode": false },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "button": { "classes": "flex items-center gap-2 text-sm px-4 rounded-xl py-2.5 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white transition-colors shadow-lg shadow-blue-600/25" },
                              "button-quantity": { "classes": "font-bold" },
                              "button-icon": { "classes": "" },
                              "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                              "cart-header": { "classes": "flex justify-between items-center bg-slate-900 py-3 px-4 text-white" },
                              "cart-total-items": { "classes": "" },
                              "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-lg text-sm" },
                              "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-lg text-sm" },
                              "go-to-checkout": { "classes": "text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl cursor-pointer" },
                              "coupon-input": { "classes": "w-28 border! border-solid border-slate-300 shadow-none! text-center rounded-lg" },
                              "coupon-apply-button": { "classes": "text-white bg-slate-900 px-3 py-2 rounded-lg cursor-pointer" },
                              "back-to-cart": { "classes": "text-sm text-blue-700 cursor-pointer" }
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
            "id": "ka-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-slate-900" } },
            "children": [
              {
                "id": "ka-ftr-trust",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full border-b border-white/10" } },
                "children": [
                  {
                    "id": "ka-ftr-trust-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-6" } },
                    "children": [
                      {
                        "id": "ka-ftr-fb-1",
                        "type": "featurebox",
                        "options": {
                          "tag": "div",
                          "icon": "",
                          "iconSize": "",
                          "items": [
                            {
                              "title": "Cash on delivery",
                              "description": "No advance payment, anywhere.",
                              "icon": "IconTruckDelivery",
                              "iconSize": ""
                            },
                            {
                              "title": "Check before you pay",
                              "description": "Open the box in front of the rider.",
                              "icon": "IconPackage",
                              "iconSize": ""
                            },
                            {
                              "title": "7 day replacement",
                              "description": "On any manufacturing fault.",
                              "icon": "IconRefresh",
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
                          "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" },
                          "loop-item": { "classes": "flex items-center gap-3" },
                          "title": { "classes": "text-sm font-bold text-white" },
                          "description": { "classes": "text-xs text-slate-400 mt-0.5 leading-relaxed" },
                          "icon": { "classes": "shrink-0 w-10 h-10 rounded-xl bg-white/10 text-blue-400 flex items-center justify-center" }
                        },
                        "children": [
                          {
                            "id": "ka-ftr-fb-2",
                            "type": "icon",
                            "options": { "iconName": "IconTruckDelivery", "size": "20" },
                            "cssSelectors": { "*": { "classes": "" } },
                            "children": []
                          },
                          {
                            "id": "ka-ftr-fb-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-col" } },
                            "children": [
                              {
                                "id": "ka-ftr-fb-4",
                                "type": "featureboxTitle",
                                "options": { "tag": "h4" },
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "img": { "classes": "" }
                                }
                              },
                              {
                                "id": "ka-ftr-fb-5",
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
                "id": "ka-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-7xl mx-auto px-5 py-12" } },
                "children": [
                  {
                    "id": "ka-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "ka-ftr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Kitchen Accessories", "src": "https://placehold.co/240x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "w-36 h-auto object-contain" },
                              "text": { "classes": "text-xl font-extrabold tracking-tight text-white" }
                            }
                          },
                          {
                            "id": "ka-ftr-tagline",
                            "type": "text",
                            "options": { "text": "Racks, organisers and cookware that keep a small kitchen dry, tidy and easy to work in.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-slate-400 leading-relaxed max-w-xs" } }
                          },
                          {
                            "id": "ka-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": { "icon": "IconPhone", "label": "Phone", "value": "01XXXXXXXXX" },
                              "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
                              "location": { "icon": "IconMapPin", "label": "Location", "value": "Add your shop address here" },
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 flex-col text-sm text-slate-400" },
                              "item": { "classes": "flex gap-2 items-start" },
                              "link": { "classes": "flex gap-2 items-center hover:text-blue-400 transition-colors" },
                              "phone-link": { "classes": "" },
                              "email-link": { "classes": "" },
                              "icon": { "classes": "text-blue-500 shrink-0" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "ka-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "items": [
                                { "text": "Dish Racks", "icon": "", "slug": "/categories/dish-racks" },
                                { "text": "Organisers", "icon": "", "slug": "/categories/organisers" },
                                { "text": "Cookware", "icon": "", "slug": "/categories/cookware" },
                                { "text": "Utensils", "icon": "", "slug": "/categories/utensils" },
                                { "text": "All Products", "icon": "", "slug": "/shop" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-bold text-white uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-blue-400 transition-colors" },
                              "icon": { "classes": "text-slate-600" },
                              "text": { "classes": "text-sm text-slate-400" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-ftr-gi-help",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "ka-ftr-ll-help",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Service",
                              "tag": "ul",
                              "items": [
                                { "text": "Track Order", "icon": "", "slug": "/track-order" },
                                { "text": "Shipping & Delivery", "icon": "", "slug": "/shipping" },
                                { "text": "Replacement Policy", "icon": "", "slug": "/returns" },
                                { "text": "My Account", "icon": "", "slug": "/account" },
                                { "text": "FAQ", "icon": "", "slug": "/faq" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-bold text-white uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-blue-400 transition-colors" },
                              "icon": { "classes": "text-slate-600" },
                              "text": { "classes": "text-sm text-slate-400" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-ftr-gi-order",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "ka-ftr-ll-company",
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
                              "header-text": { "classes": "text-sm font-bold text-white uppercase tracking-wide" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-blue-400 transition-colors" },
                              "icon": { "classes": "text-slate-600" },
                              "text": { "classes": "text-sm text-slate-400" }
                            }
                          },
                          {
                            "id": "ka-ftr-wa",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Order on WhatsApp",
                              "phone": "",
                              "message": "Hi, I want to place an order.",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "flex gap-2 items-center px-5 py-3 rounded-xl bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ka-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-white/10" } },
                "children": [
                  {
                    "id": "ka-ftr-bottom-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "ka-ftr-copy",
                            "type": "text",
                            "options": { "text": "(c) 2026 Kitchen Accessories. All rights reserved.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-slate-500" } }
                          }
                        ]
                      },
                      {
                        "id": "ka-ftr-pay-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                        "children": [
                          {
                            "id": "ka-ftr-pay",
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
            "id": "ka-bs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-bs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pt-12 pb-8 flex flex-col gap-5" } },
                "children": [
                  {
                    "id": "ka-bs-title",
                    "type": "postTitle",
                    "options": { "linkTo": "", "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight" } }
                  },
                  {
                    "id": "ka-bs-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500" } },
                    "children": [
                      {
                        "id": "ka-bs-author",
                        "type": "postAuthor",
                        "options": { "linkTo": "", "classes": "" },
                        "cssSelectors": { "*": { "classes": "font-medium text-slate-700" } }
                      },
                      {
                        "id": "ka-bs-date",
                        "type": "postDate",
                        "options": { "linkTo": "", "dateFormat": "DD MMMM, YYYY" },
                        "cssSelectors": { "*": { "classes": "text-slate-400" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-bs-thumb",
                    "type": "postThumbnail",
                    "options": { "linkTo": "postUrl" },
                    "cssSelectors": {
                      "*": { "classes": "w-full overflow-hidden rounded-2xl" },
                      "link": { "classes": "block" },
                      "image": { "classes": "w-full aspect-video object-cover bg-slate-100" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-bs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-bs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pb-12" } },
                "children": [
                  {
                    "id": "ka-bs-content",
                    "type": "postContent",
                    "options": { "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-base text-slate-700 leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-4 [&_a]:text-blue-700 [&_a]:underline [&_img]:rounded-xl [&_img]:my-6" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-bs-comments",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-y border-blue-100" } },
            "children": [
              {
                "id": "ka-bs-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 py-10 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "ka-bs-comments-h",
                    "type": "heading",
                    "options": { "text": "Comments", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-bs-rev",
                    "type": "commentsGrid",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "w-full" },
                      "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                      "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl bg-white border border-slate-200" }
                    },
                    "children": [
                      {
                        "id": "ka-bs-rev-loop",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                          "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl bg-white border border-slate-200" }
                        },
                        "children": [
                          {
                            "id": "ka-bs-rev-avatar",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-10 h-10 rounded-full object-cover bg-slate-100" }
                            }
                          },
                          {
                            "id": "ka-bs-rev-author",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-slate-900" } }
                          },
                          {
                            "id": "ka-bs-rev-rate",
                            "type": "commentRate",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                          },
                          {
                            "id": "ka-bs-rev-body",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed" } }
                          }
                        ]
                      },
                      {
                        "id": "ka-bs-form",
                        "type": "commentsForm",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "mt-6 p-5 rounded-xl bg-white border border-slate-200" } }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-bs-more",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-bs-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "ka-bs-more-h",
                    "type": "heading",
                    "options": { "text": "Read next", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-bs-more-pg-1",
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
                      "loop-item": { "classes": "flex gap-4 items-center bg-white border border-slate-200 rounded-xl p-3 transition-all duration-200 hover:border-blue-300 hover:shadow-md group" }
                    },
                    "children": [
                      {
                        "id": "ka-bs-more-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "flex gap-4 items-center bg-white border border-slate-200 rounded-xl p-3 transition-all duration-200 hover:border-blue-300 hover:shadow-md group" }
                        },
                        "children": [
                          {
                            "id": "ka-bs-more-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-20 h-20 shrink-0 overflow-hidden rounded-lg bg-slate-50" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "ka-bs-more-pg-4",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-slate-900 line-clamp-2 transition-colors duration-200 group-hover:text-blue-700" } }
                          },
                          {
                            "id": "ka-bs-more-pg-5",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs text-slate-400" } }
                          }
                        ]
                      },
                      {
                        "id": "ka-bs-more-pg-6",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-8" },
                          "previous": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
                          "next": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
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
        "title": "Blog Archive",
        "type": "blog",
        "content": [
          {
            "id": "ka-bl-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-bl-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-bl-head-h",
                    "type": "heading",
                    "options": { "text": "Kitchen guides and care tips", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-bl-head-t",
                    "type": "text",
                    "options": { "text": "How to organise a small kitchen, and how to keep steel and plastic looking new.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-bl-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-bl-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "ka-bl-grid-1",
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
                      "loop-item": { "classes": "flex flex-col gap-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group" }
                    },
                    "children": [
                      {
                        "id": "ka-bl-grid-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "flex flex-col gap-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 group" }
                        },
                        "children": [
                          {
                            "id": "ka-bl-grid-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "relative h-52 overflow-hidden rounded-xl bg-slate-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "ka-bl-grid-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-slate-400" } }
                          },
                          {
                            "id": "ka-bl-grid-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-semibold text-slate-900 line-clamp-2 transition-colors duration-200 group-hover:text-blue-700" } }
                          },
                          {
                            "id": "ka-bl-grid-6",
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
                              "excerpt": { "classes": "text-sm text-slate-600 leading-relaxed line-clamp-3" },
                              "read-more": { "classes": "flex gap-2 items-center text-sm font-semibold text-blue-600 hover:text-blue-700" },
                              "read-more-icon": { "classes": "" },
                              "read-more-label": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-bl-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
                          "next": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
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
            "id": "ka-nf",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50" } },
            "children": [
              {
                "id": "ka-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "ka-nf-icon",
                    "type": "icon",
                    "options": { "iconName": "IconToolsOff", "size": "48" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-slate-300" } }
                  },
                  {
                    "id": "ka-nf-h",
                    "type": "heading",
                    "options": { "text": "We could not find that page", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-nf-t",
                    "type": "text",
                    "options": { "text": "The link may be broken or the item may be sold out. Try the shop, or call us and we will help you find it.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-md" } }
                  },
                  {
                    "id": "ka-nf-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-2" } },
                    "children": [
                      {
                        "id": "ka-nf-b1",
                        "type": "button",
                        "options": { "text": "Back to home", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "IconHome", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit shadow-sm" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold" }
                        }
                      },
                      {
                        "id": "ka-nf-b2",
                        "type": "button",
                        "options": { "text": "Shop all products", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-blue-600 bg-white text-blue-700 cursor-pointer hover:bg-blue-50 transition-colors w-fit" },
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
            "id": "ka-hero",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50" } },
            "children": [
              {
                "id": "ka-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 pt-14 pb-10 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "ka-hero-badge",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-blue-100 text-blue-700" } },
                    "children": [
                      {
                        "id": "ka-hero-badge-i",
                        "type": "icon",
                        "options": { "iconName": "IconSparkles", "size": "14" },
                        "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                      },
                      {
                        "id": "ka-hero-badge-t",
                        "type": "text",
                        "options": { "text": "A smart organiser for the modern kitchen - limited stock offer", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-hero-title",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-4xl" } },
                    "children": [
                      {
                        "id": "ka-hero-h",
                        "type": "heading",
                        "options": { "text": "3 Layer Dish Rack -", "tag": "h1" },
                        "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight" } }
                      },
                      {
                        "id": "ka-hero-h-accent",
                        "type": "text",
                        "options": { "text": "no more clutter, no more wet dishes", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-600 leading-tight" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-hero-t",
                    "type": "text",
                    "options": { "text": "A rust proof iron body and a three layer draining system keep your counter dry, tidy and ready to use all day.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-base text-slate-600 leading-relaxed max-w-2xl" } }
                  },
                  {
                    "id": "ka-hero-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Holds 20+ pieces",
                          "description": "Plates, bowls, glasses and cups each get their own slot.",
                          "icon": "IconToolsKitchen2",
                          "iconSize": ""
                        },
                        {
                          "title": "Auto draining tray",
                          "description": "Water runs straight down into the removable tray.",
                          "icon": "IconDroplet",
                          "iconSize": ""
                        },
                        {
                          "title": "100% rust proof",
                          "description": "Heavy duty anti rust powder coat over carbon steel.",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Looks new for years",
                          "description": "Matte finish wipes clean and does not chip or fade.",
                          "icon": "IconStars",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2" },
                      "loop-item": { "classes": "flex flex-col items-center text-center gap-2 p-5 bg-white border border-blue-100 rounded-2xl shadow-sm" },
                      "title": { "classes": "text-sm font-bold text-slate-900" },
                      "description": { "classes": "text-xs text-slate-500 leading-relaxed" },
                      "icon": { "classes": "flex items-center justify-center text-blue-600" }
                    },
                    "children": [
                      {
                        "id": "ka-hero-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconToolsKitchen2", "size": "26" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "ka-hero-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h3" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "ka-hero-fb-4",
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
                    "id": "ka-hero-cta",
                    "type": "button",
                    "options": { "text": "Order at the offer price", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 18 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit shadow-lg shadow-blue-600/25" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-base font-bold tracking-wide" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-gal",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50" } },
            "children": [
              {
                "id": "ka-gal-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 pb-16" } },
                "children": [
                  {
                    "id": "ka-gal-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 sm:grid-cols-3 gap-5" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-gal-1",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-2xl bg-white shadow-sm" } },
                        "children": [
                          {
                            "id": "ka-gal-1-img",
                            "type": "image",
                            "options": { "src": "https://placehold.co/600x600?text=Image", "altText": "The rack seen from the front, three layers loaded", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "link": { "classes": "" },
                              "img": { "classes": "w-full aspect-square object-cover bg-slate-100" }
                            }
                          },
                          {
                            "id": "ka-gal-1-cap",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 flex flex-col gap-0.5 px-4 pt-10 pb-4 bg-gradient-to-t from-black/75 to-transparent" } },
                            "children": [
                              {
                                "id": "ka-gal-1-cap-h",
                                "type": "text",
                                "options": { "text": "Smart 3 layer design", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-bold text-white" } }
                              },
                              {
                                "id": "ka-gal-1-cap-t",
                                "type": "text",
                                "options": { "text": "Frees up about 70% of your counter", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-[11px] text-white/75 leading-snug" } }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ka-gal-2",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-2xl bg-white shadow-sm" } },
                        "children": [
                          {
                            "id": "ka-gal-2-img",
                            "type": "image",
                            "options": { "src": "https://placehold.co/600x600?text=Image", "altText": "Plates standing in the dedicated top slots", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "link": { "classes": "" },
                              "img": { "classes": "w-full aspect-square object-cover bg-slate-100" }
                            }
                          },
                          {
                            "id": "ka-gal-2-cap",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 flex flex-col gap-0.5 px-4 pt-10 pb-4 bg-gradient-to-t from-black/75 to-transparent" } },
                            "children": [
                              {
                                "id": "ka-gal-2-cap-h",
                                "type": "text",
                                "options": { "text": "Dedicated plate and bowl slots", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-bold text-white" } }
                              },
                              {
                                "id": "ka-gal-2-cap-t",
                                "type": "text",
                                "options": { "text": "Nothing leans, nothing slides, nothing chips", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-[11px] text-white/75 leading-snug" } }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ka-gal-3",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "relative overflow-hidden rounded-2xl bg-white shadow-sm" } },
                        "children": [
                          {
                            "id": "ka-gal-3-img",
                            "type": "image",
                            "options": { "src": "https://placehold.co/600x600?text=Image", "altText": "The removable drip tray pulled out from the base", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "link": { "classes": "" },
                              "img": { "classes": "w-full aspect-square object-cover bg-slate-100" }
                            }
                          },
                          {
                            "id": "ka-gal-3-cap",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "absolute inset-x-0 bottom-0 z-10 flex flex-col gap-0.5 px-4 pt-10 pb-4 bg-gradient-to-t from-black/75 to-transparent" } },
                            "children": [
                              {
                                "id": "ka-gal-3-cap-h",
                                "type": "text",
                                "options": { "text": "Pull out drip tray", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-bold text-white" } }
                              },
                              {
                                "id": "ka-gal-3-cap-t",
                                "type": "text",
                                "options": { "text": "Empty the collected water in one move", "tag": "span" },
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
            "id": "ka-pc",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-pc-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
                "children": [
                  {
                    "id": "ka-pc-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-pc-bad",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "ka-pc-bad-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-100" } },
                            "children": [
                              {
                                "id": "ka-pc-bad-badge-i",
                                "type": "icon",
                                "options": { "iconName": "IconX", "size": "13" },
                                "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                              },
                              {
                                "id": "ka-pc-bad-badge-t",
                                "type": "text",
                                "options": { "text": "The usual way", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-pc-bad-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                            "children": [
                              {
                                "id": "ka-pc-bad-h",
                                "type": "heading",
                                "options": { "text": "Dishes piled on the counter mean", "tag": "h2" },
                                "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                              },
                              {
                                "id": "ka-pc-bad-h-accent",
                                "type": "text",
                                "options": { "text": "a daily headache", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-red-600 leading-snug" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-pc-bad-fb-1",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Standing water beside the sink",
                                  "description": "Rinse water pools on the counter and the whole slab turns slimy and slippery.",
                                  "icon": "IconAlertTriangle",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Smell and bacteria on clean dishes",
                                  "description": "Dishes that never dry properly grow the kind of film you cannot see.",
                                  "icon": "IconAlertTriangle",
                                  "iconSize": ""
                                },
                                {
                                  "title": "A counter you cannot cook on",
                                  "description": "A few plates and pans is all it takes for the kitchen to look a mess.",
                                  "icon": "IconAlertTriangle",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Good crockery at risk",
                                  "description": "Stacked wet, plates and bowls slip out of the pile and chip or break.",
                                  "icon": "IconAlertTriangle",
                                  "iconSize": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "loop-item": { "classes": "flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100" },
                              "title": { "classes": "text-sm font-bold text-slate-900" },
                              "description": { "classes": "text-xs text-slate-600 mt-1 leading-relaxed" },
                              "icon": { "classes": "shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600" }
                            },
                            "children": [
                              {
                                "id": "ka-pc-bad-fb-2",
                                "type": "icon",
                                "options": { "iconName": "IconAlertTriangle", "size": "18" },
                                "cssSelectors": { "*": { "classes": "" } },
                                "children": []
                              },
                              {
                                "id": "ka-pc-bad-fb-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex flex-col" } },
                                "children": [
                                  {
                                    "id": "ka-pc-bad-fb-4",
                                    "type": "featureboxTitle",
                                    "options": { "tag": "h3" },
                                    "cssSelectors": {
                                      "*": { "classes": "" },
                                      "img": { "classes": "" }
                                    }
                                  },
                                  {
                                    "id": "ka-pc-bad-fb-5",
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
                        "id": "ka-pc-good",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "ka-pc-good-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100" } },
                            "children": [
                              {
                                "id": "ka-pc-good-badge-i",
                                "type": "icon",
                                "options": { "iconName": "IconSparkles", "size": "13" },
                                "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                              },
                              {
                                "id": "ka-pc-good-badge-t",
                                "type": "text",
                                "options": { "text": "With the 3 layer rack", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-pc-good-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                            "children": [
                              {
                                "id": "ka-pc-good-h",
                                "type": "heading",
                                "options": { "text": "One rack and your kitchen runs", "tag": "h2" },
                                "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                              },
                              {
                                "id": "ka-pc-good-h-accent",
                                "type": "text",
                                "options": { "text": "like magic", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-emerald-600 leading-snug" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-pc-good-fb-1",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "A counter that stays dry",
                                  "description": "Every drop collects in the tray below, so the slab never gets wet.",
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Dries fast, stays hygienic",
                                  "description": "Open mesh shelves let air move around each piece as it drains.",
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": ""
                                },
                                {
                                  "title": "About 70% more free space",
                                  "description": "Going vertical fits the same crockery into a third of the footprint.",
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Safe to store, easy to reach",
                                  "description": "Each piece has its own slot, so nothing leans and nothing falls.",
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "loop-item": { "classes": "flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100" },
                              "title": { "classes": "text-sm font-bold text-slate-900" },
                              "description": { "classes": "text-xs text-slate-600 mt-1 leading-relaxed" },
                              "icon": { "classes": "shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500 text-white" }
                            },
                            "children": [
                              {
                                "id": "ka-pc-good-fb-2",
                                "type": "icon",
                                "options": { "iconName": "IconCircleCheckFilled", "size": "18" },
                                "cssSelectors": { "*": { "classes": "" } },
                                "children": []
                              },
                              {
                                "id": "ka-pc-good-fb-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex flex-col" } },
                                "children": [
                                  {
                                    "id": "ka-pc-good-fb-4",
                                    "type": "featureboxTitle",
                                    "options": { "tag": "h3" },
                                    "cssSelectors": {
                                      "*": { "classes": "" },
                                      "img": { "classes": "" }
                                    }
                                  },
                                  {
                                    "id": "ka-pc-good-fb-5",
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
            "id": "ka-lay",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-slate-50 border-y border-slate-100" } },
            "children": [
              {
                "id": "ka-lay-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "ka-lay-badge",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-blue-100 text-blue-700" } },
                    "children": [
                      {
                        "id": "ka-lay-badge-i",
                        "type": "icon",
                        "options": { "iconName": "IconSearch", "size": "13" },
                        "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                      },
                      {
                        "id": "ka-lay-badge-t",
                        "type": "text",
                        "options": { "text": "Three layers, one worked out plan", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-lay-title",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-3xl" } },
                    "children": [
                      {
                        "id": "ka-lay-h",
                        "type": "heading",
                        "options": { "text": "What goes where? Look at the", "tag": "h2" },
                        "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight" } }
                      },
                      {
                        "id": "ka-lay-h-accent",
                        "type": "text",
                        "options": { "text": "smart design", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600 leading-tight" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-lay-t",
                    "type": "text",
                    "options": { "text": "Every piece of crockery in the kitchen has a partition and a slot made for it.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  },
                  {
                    "id": "ka-lay-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Top layer: plates and lids",
                          "description": "Grooved slots hold 15 to 20 full size dinner plates upright and secure.",
                          "icon": "IconToolsKitchen2",
                          "iconSize": ""
                        },
                        {
                          "title": "Middle layer: bowls and pans",
                          "description": "An open draining base sized for curry bowls, soup bowls and small plates.",
                          "icon": "IconSoup",
                          "iconSize": ""
                        },
                        {
                          "title": "Bottom layer: cups and glasses",
                          "description": "Turn mugs and glassware upside down here and the water runs straight off.",
                          "icon": "IconMug",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2" },
                      "loop-item": { "classes": "flex flex-col items-center text-center gap-2 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" },
                      "title": { "classes": "text-base font-bold text-slate-900" },
                      "description": { "classes": "text-xs text-slate-500 leading-relaxed" },
                      "icon": { "classes": "flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600" }
                    },
                    "children": [
                      {
                        "id": "ka-lay-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconToolsKitchen2", "size": "24" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "ka-lay-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h3" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "ka-lay-fb-4",
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
                    "id": "ka-lay-cta",
                    "type": "button",
                    "options": { "text": "Book it at the offer price", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconGift", "iconSize": 18 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit shadow-lg shadow-blue-600/25" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-base font-bold tracking-wide" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-sp1",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-sp1-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
                "children": [
                  {
                    "id": "ka-sp1-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-sp1-art",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "ka-sp1-img",
                            "type": "image",
                            "options": { "src": "https://placehold.co/800x800?text=Image", "altText": "Close up of the powder coated steel frame", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "link": { "classes": "" },
                              "img": { "classes": "w-full aspect-square object-cover rounded-2xl bg-slate-100" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-sp1-copy",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "ka-sp1-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700" } },
                            "children": [
                              {
                                "id": "ka-sp1-badge-i",
                                "type": "icon",
                                "options": { "iconName": "IconShieldCheck", "size": "13" },
                                "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                              },
                              {
                                "id": "ka-sp1-badge-t",
                                "type": "text",
                                "options": { "text": "Premium build quality", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-sp1-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                            "children": [
                              {
                                "id": "ka-sp1-h",
                                "type": "heading",
                                "options": { "text": "Heavy duty carbon steel -", "tag": "h2" },
                                "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                              },
                              {
                                "id": "ka-sp1-h-accent",
                                "type": "text",
                                "options": { "text": "still looks new years later", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600 leading-snug" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-sp1-t",
                            "type": "text",
                            "options": { "text": "This is not the thin wire rack that bends the first time you load it. A multi layer electrostatic anti rust coat means no rust spots and no colour lifting, however wet the kitchen gets.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-xl" } }
                          },
                          {
                            "id": "ka-sp1-list",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCircleCheckFilled",
                              "iconSize": 18,
                              "items": [
                                {
                                  "text": "Rated for heavy ceramic and metal crockery",
                                  "icon": ""
                                },
                                {
                                  "text": "Colour does not fade and rust does not set in",
                                  "icon": ""
                                },
                                {
                                  "text": "Anti slip rubber feet leave no marks on the slab",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2.5" },
                              "li": { "classes": "flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center text-emerald-500" },
                              "text": { "classes": "text-sm font-semibold text-slate-800 leading-snug" }
                            }
                          },
                          {
                            "id": "ka-sp1-cta",
                            "type": "button",
                            "options": { "text": "Click here to order", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit shadow-lg shadow-blue-600/25" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-bold tracking-wide" }
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
            "id": "ka-sp2",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50" } },
            "children": [
              {
                "id": "ka-sp2-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
                "children": [
                  {
                    "id": "ka-sp2-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-sp2-copy",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "ka-sp2-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-white text-blue-700 border border-blue-100" } },
                            "children": [
                              {
                                "id": "ka-sp2-badge-i",
                                "type": "icon",
                                "options": { "iconName": "IconDroplet", "size": "13" },
                                "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                              },
                              {
                                "id": "ka-sp2-badge-t",
                                "type": "text",
                                "options": { "text": "Smart drainage system", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-sp2-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                            "children": [
                              {
                                "id": "ka-sp2-h",
                                "type": "heading",
                                "options": { "text": "Removable drip trays keep the slab", "tag": "h2" },
                                "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                              },
                              {
                                "id": "ka-sp2-h-accent",
                                "type": "text",
                                "options": { "text": "completely dry and clean", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600 leading-snug" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-sp2-t",
                            "type": "text",
                            "options": { "text": "An open rack just moves the puddle somewhere else. Each layer here sits over its own tray, so the water collects in one place and you tip it out when you are ready.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-xl" } }
                          },
                          {
                            "id": "ka-sp2-list",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCircleCheckFilled",
                              "iconSize": 18,
                              "items": [
                                {
                                  "text": "A separate drip tray under every layer",
                                  "icon": ""
                                },
                                {
                                  "text": "Slides straight out, rinses in seconds",
                                  "icon": ""
                                },
                                {
                                  "text": "No damp patches and no smell left behind",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2.5" },
                              "li": { "classes": "flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-blue-100" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center text-emerald-500" },
                              "text": { "classes": "text-sm font-semibold text-slate-800 leading-snug" }
                            }
                          },
                          {
                            "id": "ka-sp2-cta",
                            "type": "button",
                            "options": { "text": "Click here to order", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit shadow-lg shadow-blue-600/25" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-bold tracking-wide" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-sp2-art",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "ka-sp2-img",
                            "type": "image",
                            "options": { "src": "https://placehold.co/800x800?text=Image", "altText": "The drip tray being pulled out from under a layer", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "link": { "classes": "" },
                              "img": { "classes": "w-full aspect-square object-cover rounded-2xl bg-slate-100" }
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
            "id": "ka-box",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-box-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "ka-box-badge",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-blue-100 text-blue-700" } },
                    "children": [
                      {
                        "id": "ka-box-badge-i",
                        "type": "icon",
                        "options": { "iconName": "IconPackage", "size": "13" },
                        "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                      },
                      {
                        "id": "ka-box-badge-t",
                        "type": "text",
                        "options": { "text": "All in one package", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-box-title",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-3xl" } },
                    "children": [
                      {
                        "id": "ka-box-h",
                        "type": "heading",
                        "options": { "text": "One complete set,", "tag": "h2" },
                        "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight" } }
                      },
                      {
                        "id": "ka-box-h-accent",
                        "type": "text",
                        "options": { "text": "here is everything in it", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600 leading-tight" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-box-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "1x three layer iron frame",
                          "description": "Heavy duty powder coated carbon steel.",
                          "icon": "IconBuildingWarehouse",
                          "iconSize": ""
                        },
                        {
                          "title": "3x removable drip trays",
                          "description": "One under each layer, easy to empty.",
                          "icon": "IconDroplet",
                          "iconSize": ""
                        },
                        {
                          "title": "1x cutlery and spoon basket",
                          "description": "Hangs on the side for spoons and knives.",
                          "icon": "IconBowlSpoon",
                          "iconSize": ""
                        },
                        {
                          "title": "1x board and cup holder",
                          "description": "Side rail for chopping boards and glasses.",
                          "icon": "IconCup",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2" },
                      "loop-item": { "classes": "flex flex-col items-center text-center gap-2 p-5 bg-slate-50 border border-blue-100 rounded-2xl" },
                      "title": { "classes": "text-sm font-bold text-slate-900" },
                      "description": { "classes": "text-xs text-slate-500 leading-relaxed" },
                      "icon": { "classes": "flex items-center justify-center text-blue-600" }
                    },
                    "children": [
                      {
                        "id": "ka-box-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconBuildingWarehouse", "size": "26" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "ka-box-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h3" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "ka-box-fb-4",
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
            "id": "ka-spec",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-slate-50 border-y border-slate-100" } },
            "children": [
              {
                "id": "ka-spec-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16" } },
                "children": [
                  {
                    "id": "ka-spec-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-spec-art",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "ka-spec-img",
                            "type": "image",
                            "options": { "src": "https://placehold.co/800x800?text=Image", "altText": "The full rack photographed against a kitchen wall", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "link": { "classes": "" },
                              "img": { "classes": "w-full aspect-square object-cover rounded-2xl bg-slate-100" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-spec-copy",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "ka-spec-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700" } },
                            "children": [
                              {
                                "id": "ka-spec-badge-i",
                                "type": "icon",
                                "options": { "iconName": "IconClipboardList", "size": "13" },
                                "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                              },
                              {
                                "id": "ka-spec-badge-t",
                                "type": "text",
                                "options": { "text": "Technical specification", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-spec-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline gap-x-2 gap-y-1" } },
                            "children": [
                              {
                                "id": "ka-spec-h",
                                "type": "heading",
                                "options": { "text": "Everything about this", "tag": "h2" },
                                "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug" } }
                              },
                              {
                                "id": "ka-spec-h-accent",
                                "type": "text",
                                "options": { "text": "product in one table", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600 leading-snug" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-spec-table",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full rounded-2xl border border-slate-200 bg-white overflow-hidden divide-y divide-slate-200" } },
                            "children": [
                              {
                                "id": "ka-spec-r1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                                "children": [
                                  {
                                    "id": "ka-spec-r1-k",
                                    "type": "text",
                                    "options": { "text": "Product name", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-bold text-slate-900" } }
                                  },
                                  {
                                    "id": "ka-spec-r1-v",
                                    "type": "text",
                                    "options": { "text": "3 Layer Iron Drain Dish Rack (Smart Kitchen Organiser)", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                                  }
                                ]
                              },
                              {
                                "id": "ka-spec-r2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                                "children": [
                                  {
                                    "id": "ka-spec-r2-k",
                                    "type": "text",
                                    "options": { "text": "Number of layers", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-bold text-slate-900" } }
                                  },
                                  {
                                    "id": "ka-spec-r2-v",
                                    "type": "text",
                                    "options": { "text": "3 purpose built storage tiers", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                                  }
                                ]
                              },
                              {
                                "id": "ka-spec-r3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                                "children": [
                                  {
                                    "id": "ka-spec-r3-k",
                                    "type": "text",
                                    "options": { "text": "Material", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-bold text-slate-900" } }
                                  },
                                  {
                                    "id": "ka-spec-r3-v",
                                    "type": "text",
                                    "options": { "text": "Heavy duty carbon steel with anti rust electrostatic coating", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                                  }
                                ]
                              },
                              {
                                "id": "ka-spec-r4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                                "children": [
                                  {
                                    "id": "ka-spec-r4-k",
                                    "type": "text",
                                    "options": { "text": "Drainage", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-bold text-slate-900" } }
                                  },
                                  {
                                    "id": "ka-spec-r4-v",
                                    "type": "text",
                                    "options": { "text": "3 separate removable drip trays", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                                  }
                                ]
                              },
                              {
                                "id": "ka-spec-r5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                                "children": [
                                  {
                                    "id": "ka-spec-r5-k",
                                    "type": "text",
                                    "options": { "text": "Colour", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-bold text-slate-900" } }
                                  },
                                  {
                                    "id": "ka-spec-r5-v",
                                    "type": "text",
                                    "options": { "text": "Premium matte black finish", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                                  }
                                ]
                              },
                              {
                                "id": "ka-spec-r6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                                "children": [
                                  {
                                    "id": "ka-spec-r6-k",
                                    "type": "text",
                                    "options": { "text": "Side accessories", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-bold text-slate-900" } }
                                  },
                                  {
                                    "id": "ka-spec-r6-v",
                                    "type": "text",
                                    "options": { "text": "6x cutlery holders and 6x chopping board holders", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                                  }
                                ]
                              },
                              {
                                "id": "ka-spec-r7",
                                "type": "container",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "flex items-start gap-4 px-5 py-3" } },
                                "children": [
                                  {
                                    "id": "ka-spec-r7-k",
                                    "type": "text",
                                    "options": { "text": "Warranty policy", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "w-32 sm:w-40 shrink-0 text-xs font-bold text-slate-900" } }
                                  },
                                  {
                                    "id": "ka-spec-r7-v",
                                    "type": "text",
                                    "options": { "text": "7 day instant replacement guarantee", "tag": "span" },
                                    "cssSelectors": { "*": { "classes": "text-xs text-slate-600 leading-relaxed" } }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ka-spec-cta",
                            "type": "button",
                            "options": { "text": "Click here to order", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit shadow-lg shadow-blue-600/25" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-bold tracking-wide" }
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
            "id": "ka-cod",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-slate-900" } },
            "children": [
              {
                "id": "ka-cod-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "ka-cod-badge",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-white/10 text-blue-300" } },
                    "children": [
                      {
                        "id": "ka-cod-badge-i",
                        "type": "icon",
                        "options": { "iconName": "IconShieldCheck", "size": "13" },
                        "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                      },
                      {
                        "id": "ka-cod-badge-t",
                        "type": "text",
                        "options": { "text": "100% risk free shopping", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-cod-title",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 max-w-3xl" } },
                    "children": [
                      {
                        "id": "ka-cod-h",
                        "type": "heading",
                        "options": { "text": "Take the parcel, check it,", "tag": "h2" },
                        "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight" } }
                      },
                      {
                        "id": "ka-cod-h-accent",
                        "type": "text",
                        "options": { "text": "then pay the full price", "tag": "span" },
                        "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-400 leading-tight" } }
                      }
                    ]
                  },
                  {
                    "id": "ka-cod-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on home delivery",
                          "description": "No advance payment. Pay once the parcel is in your hand.",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "Open and check first",
                          "description": "Open the parcel in front of the rider and check it fully.",
                          "icon": "IconPackage",
                          "iconSize": ""
                        },
                        {
                          "title": "7 day replacement",
                          "description": "Anything wrong with the product and we swap it, fast.",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Dedicated customer care",
                          "description": "Call or message on WhatsApp any time you need us.",
                          "icon": "IconMessageCircle",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2" },
                      "loop-item": { "classes": "flex flex-col items-center text-center gap-2 p-5 bg-white rounded-2xl" },
                      "title": { "classes": "text-sm font-bold text-slate-900" },
                      "description": { "classes": "text-xs text-slate-500 leading-relaxed" },
                      "icon": { "classes": "flex items-center justify-center text-blue-600" }
                    },
                    "children": [
                      {
                        "id": "ka-cod-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruckDelivery", "size": "26" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "ka-cod-fb-3",
                        "type": "featureboxTitle",
                        "options": { "tag": "h3" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "ka-cod-fb-4",
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
                    "id": "ka-cod-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-3" } },
                    "children": [
                      {
                        "id": "ka-cod-call",
                        "type": "button",
                        "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-base font-bold tracking-wide" }
                        }
                      },
                      {
                        "id": "ka-cod-wa-1",
                        "type": "whatsappButton",
                        "options": {
                          "label": "Order on WhatsApp",
                          "phone": "",
                          "message": "Hi, I want to order {product_title} {product_url}",
                          "icon": "IconBrandWhatsapp",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": { "classes": "w-fit" },
                          "link": { "classes": "flex gap-2 items-center px-5 py-3 rounded-xl bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold whitespace-nowrap" }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-more",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "ka-more-h",
                    "type": "heading",
                    "options": { "text": "More kitchen accessories", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-more-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                    },
                    "children": [
                      {
                        "id": "ka-more-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                        },
                        "children": [
                          {
                            "id": "ka-more-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl bg-slate-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "ka-more-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-slate-800 line-clamp-2 transition-colors group-hover:text-blue-700" } }
                          },
                          {
                            "id": "ka-more-c-rate-1",
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
                            "id": "ka-more-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-slate-300 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-sm font-bold text-slate-900" },
                              "simple-price-regular": { "classes": "text-xs line-through text-slate-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-slate-500" },
                              "variable-price-max": { "classes": "text-xs text-slate-500" }
                            }
                          },
                          {
                            "id": "ka-more-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "ka-more-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-slate-200 bg-white text-slate-800 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors" },
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
          }
        ],
        "meta": "",
      },
      {
        "title": "Account",
        "type": "account",
        "content": [
          {
            "id": "ka-ac-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-ac-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-ac-head-h",
                    "type": "heading",
                    "options": { "text": "My account", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-ac-head-t",
                    "type": "text",
                    "options": { "text": "Track an order, see what you have bought before and keep your delivery address up to date.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-ac-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-ac-ca-1",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12" } },
                "children": [
                  {
                    "id": "ka-ac-ca-2",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "ka-ac-ca-3",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "grid grid-cols-1 gap-5 max-w-md mx-auto" },
                          "grid-item": { "classes": "" }
                        },
                        "children": [
                          {
                            "id": "ka-ac-ca-4",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-2xl border border-slate-200 bg-white p-7 shadow-sm" } },
                            "children": [
                              {
                                "id": "ka-ac-ca-5",
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
                                  "input": { "classes": "w-full px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500" },
                                  "input-username": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-semibold uppercase tracking-wide text-slate-500" },
                                  "label-email": { "classes": "text-xs font-semibold uppercase tracking-wide text-slate-500" },
                                  "submit": { "classes": "w-full py-3 rounded-lg bg-blue-600 text-sm font-semibold text-white text-center cursor-pointer hover:bg-blue-700 transition-colors" },
                                  "forget-password": { "classes": "text-xs text-slate-500 text-center hover:text-blue-700 cursor-pointer" }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ka-ac-ca-6",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-2xl border border-slate-200 bg-white p-7 shadow-sm" } },
                            "children": [
                              {
                                "id": "ka-ac-ca-7",
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
                                  "input": { "classes": "w-full px-3.5 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500" },
                                  "input-username": { "classes": "" },
                                  "input-phone": { "classes": "" },
                                  "input-password": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-semibold uppercase tracking-wide text-slate-500" },
                                  "label-email": { "classes": "text-xs font-semibold uppercase tracking-wide text-slate-500" },
                                  "label-phone": { "classes": "" },
                                  "label-password": { "classes": "" },
                                  "submit": { "classes": "w-full py-3 rounded-lg bg-blue-600 text-sm font-semibold text-white text-center cursor-pointer hover:bg-blue-700 transition-colors" },
                                  "have-account": { "classes": "text-xs text-slate-500 text-center hover:text-blue-700 cursor-pointer" }
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
                    "id": "ka-ac-ca-8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "ka-ac-ca-9",
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
                          "navs-items": { "classes": "flex gap-2 overflow-x-auto p-1 rounded-full bg-slate-100" },
                          "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-4 py-2 rounded-full text-sm font-medium text-slate-600 whitespace-nowrap cursor-pointer hover:text-slate-900" },
                          "nav-item-active": { "classes": "bg-white! text-blue-700! shadow-sm" },
                          "nav-item-label": { "classes": "" },
                          "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                          "nav-item-content": { "classes": "pt-6" }
                        },
                        "children": [
                          {
                            "id": "ka-ac-ca-10",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ka-ac-ca-11",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ka-ac-ca-12",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ka-ac-ca-13",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ka-ac-ca-14",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ka-ac-ca-15",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ka-ac-ca-16",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ka-ac-ca-17",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ka-ac-ca-18",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "ka-ac-ca-19",
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
            "id": "ka-ty",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50" } },
            "children": [
              {
                "id": "ka-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "ka-ty-icon",
                    "type": "icon",
                    "options": { "iconName": "IconCircleCheckFilled", "size": "56" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-blue-600" } }
                  },
                  {
                    "id": "ka-ty-h",
                    "type": "heading",
                    "options": { "text": "Order received", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-ty-t",
                    "type": "text",
                    "options": {
                      "text": "We have sent a confirmation by SMS. Our team will call to confirm the address before the parcel is dispatched. Keep the cash ready for the delivery rider, and open the box in front of them before you pay.",
                      "tag": "p"
                    },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-700 leading-relaxed max-w-lg" } }
                  },
                  {
                    "id": "ka-ty-steps-1",
                    "type": "list",
                    "options": {
                      "tag": "ol",
                      "icon": "",
                      "iconSize": 16,
                      "items": [
                        {
                          "text": "We call you to confirm the order and the address",
                          "icon": ""
                        },
                        {
                          "text": "The parcel is handed to the courier the same day",
                          "icon": ""
                        },
                        {
                          "text": "You open it and check it in front of the rider",
                          "icon": ""
                        },
                        {
                          "text": "You pay in cash only once you are happy with it",
                          "icon": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "ml-6 flex flex-col gap-2.5 max-w-2xl text-left" },
                      "li": { "classes": "list-decimal pl-1 marker:font-bold marker:text-blue-500" },
                      "icon": { "classes": "empty:hidden" },
                      "text": { "classes": "text-sm text-slate-700 leading-relaxed" }
                    }
                  },
                  {
                    "id": "ka-ty-b",
                    "type": "button",
                    "options": { "text": "Continue shopping", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit shadow-lg shadow-blue-600/25" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-bold" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-ty-call",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-slate-900" } },
            "children": [
              {
                "id": "ka-ty-call-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4" } },
                "children": [
                  {
                    "id": "ka-ty-call-h",
                    "type": "heading",
                    "options": { "text": "Something to ask about the order?", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-white" } }
                  },
                  {
                    "id": "ka-ty-call-t",
                    "type": "text",
                    "options": { "text": "Call us between 9am and 10pm, or message on WhatsApp any time. Cash on delivery everywhere.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-300 leading-relaxed max-w-xl" } }
                  },
                  {
                    "id": "ka-ty-call-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-1" } },
                    "children": [
                      {
                        "id": "ka-ty-call-call",
                        "type": "button",
                        "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-base font-bold tracking-wide" }
                        }
                      },
                      {
                        "id": "ka-ty-call-wa-1",
                        "type": "whatsappButton",
                        "options": {
                          "label": "Message on WhatsApp",
                          "phone": "",
                          "message": "Hi, I have a question about my order",
                          "icon": "IconBrandWhatsapp",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": { "classes": "w-fit" },
                          "link": { "classes": "flex gap-2 items-center px-5 py-3 rounded-xl bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold whitespace-nowrap" }
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
            "id": "ka-bn-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-bn-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-bn-head-h",
                    "type": "heading",
                    "options": { "text": "Brand", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-bn-head-t",
                    "type": "text",
                    "options": { "text": "Everything we stock from this maker.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-bn-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-bn-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "ka-bn-body-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                    },
                    "children": [
                      {
                        "id": "ka-bn-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                        },
                        "children": [
                          {
                            "id": "ka-bn-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl bg-slate-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "ka-bn-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-slate-800 line-clamp-2 transition-colors group-hover:text-blue-700" } }
                          },
                          {
                            "id": "ka-bn-body-c-rate-1",
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
                            "id": "ka-bn-body-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-slate-300 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-sm font-bold text-slate-900" },
                              "simple-price-regular": { "classes": "text-xs line-through text-slate-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-slate-500" },
                              "variable-price-max": { "classes": "text-xs text-slate-500" }
                            }
                          },
                          {
                            "id": "ka-bn-body-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "ka-bn-body-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-slate-200 bg-white text-slate-800 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-bn-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
                          "next": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
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
            "id": "ka-br-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-br-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-br-head-h",
                    "type": "heading",
                    "options": { "text": "Brands we carry", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-br-head-t",
                    "type": "text",
                    "options": { "text": "The makers behind the racks, organisers and cookware on this site.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-br-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-br-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "ka-br-grid-1",
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
                      "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "ka-br-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-xl bg-white border border-slate-200" }
                        },
                        "children": [
                          {
                            "id": "ka-br-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-11 h-11 shrink-0 rounded-lg overflow-hidden bg-slate-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "ka-br-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "span", "classes": "" },
                            "cssSelectors": { "*": { "classes": "block min-w-0 text-sm font-medium text-slate-700 truncate" } }
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
            "id": "ka-ts-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-ts-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-ts-head-h",
                    "type": "heading",
                    "options": { "text": "Tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-ts-head-t",
                    "type": "text",
                    "options": { "text": "Everything carrying this tag, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-ts-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-ts-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "ka-ts-body-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                    },
                    "children": [
                      {
                        "id": "ka-ts-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                        },
                        "children": [
                          {
                            "id": "ka-ts-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl bg-slate-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "ka-ts-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-slate-800 line-clamp-2 transition-colors group-hover:text-blue-700" } }
                          },
                          {
                            "id": "ka-ts-body-c-rate-1",
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
                            "id": "ka-ts-body-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-slate-300 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-sm font-bold text-slate-900" },
                              "simple-price-regular": { "classes": "text-xs line-through text-slate-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-slate-500" },
                              "variable-price-max": { "classes": "text-xs text-slate-500" }
                            }
                          },
                          {
                            "id": "ka-ts-body-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "ka-ts-body-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-slate-200 bg-white text-slate-800 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-ts-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
                          "next": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
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
            "id": "ka-tg-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-tg-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-tg-head-h",
                    "type": "heading",
                    "options": { "text": "Browse by tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-tg-head-t",
                    "type": "text",
                    "options": { "text": "Tags cut across categories: space saving, rust proof, wall mounted, gift ready.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-tg-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-tg-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "ka-tg-grid-1",
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
                      "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-colors" }
                    },
                    "children": [
                      {
                        "id": "ka-tg-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-3 p-2 pr-4 rounded-xl bg-white border border-slate-200" }
                        },
                        "children": [
                          {
                            "id": "ka-tg-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-11 h-11 shrink-0 rounded-lg overflow-hidden bg-slate-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "ka-tg-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "span", "classes": "" },
                            "cssSelectors": { "*": { "classes": "block min-w-0 text-sm font-medium text-slate-700 truncate" } }
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
            "id": "ka-cs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-cs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-cs-head-h",
                    "type": "heading",
                    "options": { "text": "Category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-cs-head-t",
                    "type": "text",
                    "options": { "text": "Products in this category, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-cs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-cs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "ka-cs-body-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                    },
                    "children": [
                      {
                        "id": "ka-cs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                        },
                        "children": [
                          {
                            "id": "ka-cs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl bg-slate-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "ka-cs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-slate-800 line-clamp-2 transition-colors group-hover:text-blue-700" } }
                          },
                          {
                            "id": "ka-cs-body-c-rate-1",
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
                            "id": "ka-cs-body-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-slate-300 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-sm font-bold text-slate-900" },
                              "simple-price-regular": { "classes": "text-xs line-through text-slate-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-slate-500" },
                              "variable-price-max": { "classes": "text-xs text-slate-500" }
                            }
                          },
                          {
                            "id": "ka-cs-body-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "ka-cs-body-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-slate-200 bg-white text-slate-800 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-cs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
                          "next": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
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
            "id": "ka-cs-call",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-slate-900" } },
            "children": [
              {
                "id": "ka-cs-call-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4" } },
                "children": [
                  {
                    "id": "ka-cs-call-h",
                    "type": "heading",
                    "options": { "text": "Not sure which one fits your kitchen?", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-white" } }
                  },
                  {
                    "id": "ka-cs-call-t",
                    "type": "text",
                    "options": { "text": "Tell us the size of your counter and we will tell you which rack to take. Cash on delivery everywhere.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-300 leading-relaxed max-w-xl" } }
                  },
                  {
                    "id": "ka-cs-call-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-1" } },
                    "children": [
                      {
                        "id": "ka-cs-call-call",
                        "type": "button",
                        "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhone", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-base font-bold tracking-wide" }
                        }
                      },
                      {
                        "id": "ka-cs-call-wa-1",
                        "type": "whatsappButton",
                        "options": {
                          "label": "Ask on WhatsApp",
                          "phone": "",
                          "message": "Hi, I have a question about {product_title} {product_url}",
                          "icon": "IconBrandWhatsapp",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": { "classes": "w-fit" },
                          "link": { "classes": "flex gap-2 items-center px-5 py-3 rounded-xl bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-semibold whitespace-nowrap" }
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
            "id": "ka-ca-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-ca-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-ca-head-h",
                    "type": "heading",
                    "options": { "text": "All categories", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-ca-head-t",
                    "type": "text",
                    "options": { "text": "Racks, organisers, storage, cookware and utensils, each with everything we stock.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-ca-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-ca-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "ka-ca-grid-1",
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
                      "loop-item": { "classes": "h-full bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 transition-all duration-200" }
                    },
                    "children": [
                      {
                        "id": "ka-ca-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "h-full bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-3" }
                        },
                        "children": [
                          {
                            "id": "ka-ca-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full aspect-square rounded-xl overflow-hidden bg-slate-50" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "ka-ca-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-slate-900 text-center line-clamp-2" } }
                          },
                          {
                            "id": "ka-ca-grid-5",
                            "type": "termCount",
                            "options": { "label": "", "suffix": " items", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mx-auto text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2.5 py-1" } }
                          }
                        ]
                      },
                      {
                        "id": "ka-ca-grid-6",
                        "type": "termsGridPagination",
                        "options": { "tag": "div" },
                        "cssSelectors": {
                          "*": { "classes": "flex gap-3 items-center justify-center mt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
                          "next": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
                          "previous-icon": { "classes": "" },
                          "next-icon": { "classes": "" },
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
        "title": "Product",
        "type": "product",
        "content": [
          {
            "id": "ka-pd-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-pd-main-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "ka-pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "ka-pd-gallery",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "ka-pd-gal-1",
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
                              "item": { "classes": "rounded-2xl overflow-hidden bg-slate-100 [&_img]:aspect-square [&_img]:object-cover" },
                              "image": { "classes": "" },
                              "arrows": { "classes": "" },
                              "prev": { "classes": "" },
                              "next": { "classes": "" },
                              "pagination": { "classes": "static! mt-3 gap-1.5" },
                              "dot": { "classes": "size-2! bg-slate-300! opacity-100! rounded-full! [&.is-active]:bg-blue-600! [&.is-active]:scale-100!" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-pd-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "ka-pd-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700" } },
                            "children": [
                              {
                                "id": "ka-pd-badge-i",
                                "type": "icon",
                                "options": { "iconName": "IconSparkles", "size": "13" },
                                "cssSelectors": { "*": { "classes": "shrink-0 flex items-center" } }
                              },
                              {
                                "id": "ka-pd-badge-t",
                                "type": "text",
                                "options": { "text": "Limited stock offer", "tag": "span" },
                                "cssSelectors": { "*": { "classes": "text-xs font-semibold tracking-wide" } }
                              }
                            ]
                          },
                          {
                            "id": "ka-pd-cat-1",
                            "type": "productCategories",
                            "options": { "label": "Category", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-3 flex-wrap py-2 border-y border-slate-100" },
                              "label": { "classes": "shrink-0 text-xs font-medium text-slate-500" },
                              "items": { "classes": "flex flex-wrap items-baseline" },
                              "item": { "classes": "text-sm text-slate-800 hover:text-blue-700 transition-colors" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "text-slate-400 mr-1" }
                            }
                          },
                          {
                            "id": "ka-pd-title",
                            "type": "postTitle",
                            "options": { "linkTo": "", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900" } }
                          },
                          {
                            "id": "ka-pd-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "text-sm font-semibold text-slate-900" },
                              "total-reviews": { "classes": "text-sm text-slate-500" }
                            }
                          },
                          {
                            "id": "ka-pd-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-slate-400" },
                              "simple-price-sale": { "classes": "text-3xl font-extrabold text-blue-700" },
                              "simple-price-regular": { "classes": "text-base line-through text-slate-400" },
                              "variable-price-wrap": { "classes": "flex gap-2 items-center" },
                              "variable-price-min": { "classes": "text-base text-slate-600" },
                              "variable-price-max": { "classes": "text-base text-slate-600" }
                            }
                          },
                          {
                            "id": "ka-pd-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "saving", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center w-fit px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full" },
                              "discount": { "classes": "text-xs font-bold text-emerald-700 leading-none" },
                              "label": { "classes": "text-[11px] text-emerald-600 leading-none" }
                            }
                          },
                          {
                            "id": "ka-pd-var-1",
                            "type": "productVariablePrices",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "attr-wrap": { "classes": "flex flex-col gap-2" },
                              "attr-item": { "classes": "flex items-center justify-between gap-4 py-2 border-b border-slate-100" },
                              "attr-title": { "classes": "shrink-0 text-xs font-medium text-slate-500" },
                              "attr-items-wrap": { "classes": "flex flex-wrap justify-end gap-1.5" },
                              "variation-item": { "classes": "px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200 rounded-lg cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors" },
                              "variation-price": { "classes": "pt-2 text-lg font-bold text-slate-900" },
                              "variation-selected": { "classes": "border-blue-500 bg-blue-50 text-blue-700" },
                              "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
                            }
                          },
                          {
                            "id": "ka-pd-stock-1",
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
                              "out-of-stock": { "classes": "text-slate-400 line-through" },
                              "out-of-stock-label": { "classes": "" },
                              "out-of-stock-icon": { "classes": "" },
                              "in-stock": { "classes": "text-emerald-600 font-medium" },
                              "in-stock-label": { "classes": "" },
                              "in-stock-icon": { "classes": "" }
                            }
                          },
                          {
                            "id": "ka-pd-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Order with cash on delivery", "icon": "IconShoppingCartPlus", "iconSize": 18, "hideQuanity": false, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-3 items-stretch" },
                              "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-xl border border-slate-300 text-slate-500" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-sm font-bold whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "ka-pd-wa-1",
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
                              "link": { "classes": "flex gap-2.5 w-full items-center justify-center py-3.5 rounded-xl bg-[#25d366] text-white cursor-pointer hover:bg-[#1da851] transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-semibold tracking-wide" }
                            }
                          },
                          {
                            "id": "ka-pd-usp-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCircleCheckFilled",
                              "iconSize": 18,
                              "items": [
                                {
                                  "text": "Open the parcel and check it before you pay",
                                  "icon": ""
                                },
                                {
                                  "text": "Cash on delivery across the country",
                                  "icon": ""
                                },
                                {
                                  "text": "7 day replacement on any fault",
                                  "icon": ""
                                },
                                {
                                  "text": "Rust proof coating, built to last for years",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2.5" },
                              "li": { "classes": "flex items-center gap-3 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-100" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center text-emerald-500" },
                              "text": { "classes": "text-sm font-medium text-slate-800 leading-snug" }
                            }
                          },
                          {
                            "id": "ka-pd-sku-1",
                            "type": "productSku",
                            "options": { "label": "", "icon": "", "iconSize": 14 },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-1.5" },
                              "label": { "classes": "empty:hidden text-xs text-slate-400" },
                              "sku": { "classes": "text-xs text-slate-400 tracking-wide" },
                              "icon": { "classes": "shrink-0 flex items-center text-slate-300" }
                            }
                          },
                          {
                            "id": "ka-pd-brand-1",
                            "type": "productBrands",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "label": { "classes": "" },
                              "items": { "classes": "flex flex-wrap gap-2" },
                              "item": { "classes": "px-2.5 py-1 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors" },
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
            "id": "ka-pd-trust",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-y border-blue-100" } },
            "children": [
              {
                "id": "ka-pd-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-8" } },
                "children": [
                  {
                    "id": "ka-pd-trust-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on home delivery",
                          "description": "No advance payment anywhere in the country.",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "Check before you pay",
                          "description": "Open the box in front of the rider.",
                          "icon": "IconPackage",
                          "iconSize": ""
                        },
                        {
                          "title": "7 day replacement",
                          "description": "Any fault and we swap it, no argument.",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Hotline 9am to 10pm",
                          "description": "Seven days a week on phone and WhatsApp.",
                          "icon": "IconPhoneCall",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-blue-100 rounded-2xl divide-y divide-slate-200 sm:divide-y-0 sm:divide-x" },
                      "loop-item": { "classes": "flex items-center gap-4 p-5" },
                      "title": { "classes": "text-sm font-bold text-slate-900" },
                      "description": { "classes": "text-xs text-slate-500 mt-0.5 leading-relaxed" },
                      "icon": { "classes": "shrink-0 w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "ka-pd-trust-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconTruckDelivery", "size": "22" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "ka-pd-trust-fb-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col" } },
                        "children": [
                          {
                            "id": "ka-pd-trust-fb-4",
                            "type": "featureboxTitle",
                            "options": { "tag": "h4" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "img": { "classes": "" }
                            }
                          },
                          {
                            "id": "ka-pd-trust-fb-5",
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
            "id": "ka-pd-tabs-sec",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "ka-pd-tabs",
                    "type": "tabs",
                    "options": {
                      "orientation": "",
                      "tabsItems": [
                        {
                          "label": "Description",
                          "icon": "IconFileDescription"
                        },
                        {
                          "label": "Specification",
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
                      "navs-items": { "classes": "flex gap-2 overflow-x-auto p-1 rounded-full bg-slate-100 w-fit" },
                      "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-5 py-2 rounded-full text-sm font-medium text-slate-600 whitespace-nowrap cursor-pointer hover:text-slate-900" },
                      "nav-item-active": { "classes": "bg-white! text-blue-700! shadow-sm" },
                      "nav-item-label": { "classes": "" },
                      "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                      "nav-item-content": { "classes": "pt-6" }
                    },
                    "children": [
                      {
                        "id": "ka-pd-tab1",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "ka-pd-desc",
                            "type": "postContent",
                            "options": { "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-slate-700 leading-relaxed max-w-3xl [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3 [&_strong]:font-semibold" } }
                          }
                        ]
                      },
                      {
                        "id": "ka-pd-tab2",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "ka-pd-spec-1",
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
                                  "text": "Material: heavy duty carbon steel, anti rust coated",
                                  "icon": ""
                                },
                                {
                                  "text": "Dimensions: add the length, width and height",
                                  "icon": ""
                                },
                                {
                                  "text": "Country of origin: add the origin",
                                  "icon": ""
                                },
                                {
                                  "text": "Warranty: 7 day replacement guarantee",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "ml-5 max-w-2xl" },
                              "li": { "classes": "list-disc py-1.5 border-b border-slate-100 last:border-0 marker:text-blue-300" },
                              "icon": { "classes": "empty:hidden" },
                              "text": { "classes": "text-sm text-slate-700" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-pd-tab3",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "ka-pd-rev",
                            "type": "commentsGrid",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                              "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl bg-white border border-slate-200" }
                            },
                            "children": [
                              {
                                "id": "ka-pd-rev-loop",
                                "type": "commentsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                                  "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl bg-white border border-slate-200" }
                                },
                                "children": [
                                  {
                                    "id": "ka-pd-rev-avatar",
                                    "type": "commentAvatar",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": { "classes": "w-fit" },
                                      "link": { "classes": "block" },
                                      "image": { "classes": "w-10 h-10 rounded-full object-cover bg-slate-100" }
                                    }
                                  },
                                  {
                                    "id": "ka-pd-rev-author",
                                    "type": "commentAuthor",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm font-semibold text-slate-900" } }
                                  },
                                  {
                                    "id": "ka-pd-rev-rate",
                                    "type": "commentRate",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                                  },
                                  {
                                    "id": "ka-pd-rev-body",
                                    "type": "commentContent",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed" } }
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
            "id": "ka-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-slate-50 border-t border-slate-100" } },
            "children": [
              {
                "id": "ka-pd-rel-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "ka-pd-rel-h",
                    "type": "heading",
                    "options": { "text": "Goes well with this", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-pd-rel-rp-1",
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
                        "id": "ka-pd-rel-rp-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-3 grid-cols-3 md:grid-cols-4 xl:grid-cols-6" },
                          "loop-item": { "classes": "group flex flex-col gap-1.5" }
                        },
                        "children": [
                          {
                            "id": "ka-pd-rel-rp-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl border border-slate-200 bg-white" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-white" }
                            }
                          },
                          {
                            "id": "ka-pd-rel-rp-4",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-xs text-slate-600 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors" } }
                          },
                          {
                            "id": "ka-pd-rel-rp-5",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline" },
                              "simple-price-sale": { "classes": "text-xs font-bold text-slate-900" },
                              "simple-price-regular": { "classes": "text-[10px] line-through text-slate-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-slate-600" },
                              "variable-price-max": { "classes": "text-xs text-slate-600" }
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
            "id": "ka-sh-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-blue-50 border-b border-blue-100" } },
            "children": [
              {
                "id": "ka-sh-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "ka-sh-head-h",
                    "type": "heading",
                    "options": { "text": "All products", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-bold tracking-tight text-slate-900" } }
                  },
                  {
                    "id": "ka-sh-head-t",
                    "type": "text",
                    "options": { "text": "Every rack, organiser and utensil we stock, newest first. Cash on delivery everywhere.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-slate-600 leading-relaxed max-w-2xl" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "ka-sh-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "ka-sh-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "ka-sh-body-pg",
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
                      "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                    },
                    "children": [
                      {
                        "id": "ka-sh-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex flex-col gap-2.5 p-3 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200" }
                        },
                        "children": [
                          {
                            "id": "ka-sh-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl bg-slate-50" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "ka-sh-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-medium text-slate-800 line-clamp-2 transition-colors group-hover:text-blue-700" } }
                          },
                          {
                            "id": "ka-sh-body-c-rate-1",
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
                            "id": "ka-sh-body-c-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline text-slate-300 [&>span:nth-child(2)]:hidden" },
                              "simple-price-sale": { "classes": "text-sm font-bold text-slate-900" },
                              "simple-price-regular": { "classes": "text-xs line-through text-slate-400" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-xs text-slate-500" },
                              "variable-price-max": { "classes": "text-xs text-slate-500" }
                            }
                          },
                          {
                            "id": "ka-sh-body-c-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "OFF", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1 items-center w-fit px-2.5 py-1 bg-red-600 rounded-md" },
                              "discount": { "classes": "text-xs font-bold text-white leading-none" },
                              "label": { "classes": "text-[10px] font-semibold uppercase tracking-wide text-white/80 leading-none" }
                            }
                          },
                          {
                            "id": "ka-sh-body-c-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCartPlus", "iconSize": 15, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex w-full" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-slate-200 bg-white text-slate-800 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ka-sh-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
                          "next": { "classes": "px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:text-blue-700 transition-colors" },
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
            "id": "ka-sh-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-slate-100 bg-slate-50" } },
            "children": [
              {
                "id": "ka-sh-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-8" } },
                "children": [
                  {
                    "id": "ka-sh-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on delivery",
                          "description": "Pay at your door.",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Check before you pay",
                          "description": "Open it in front of the rider.",
                          "icon": "IconPackage",
                          "iconSize": ""
                        },
                        {
                          "title": "7 day replacement",
                          "description": "On any manufacturing fault.",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Nationwide courier",
                          "description": "All 64 districts covered.",
                          "icon": "IconMapPin",
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
                      "*": { "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 bg-white border border-slate-200 rounded-2xl px-5 py-4" },
                      "loop-item": { "classes": "flex items-center gap-2" },
                      "title": { "classes": "text-xs font-semibold text-slate-700 whitespace-nowrap" },
                      "description": { "classes": "" },
                      "icon": { "classes": "text-blue-600 flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "ka-sh-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconCash", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "ka-sh-fb-3",
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
