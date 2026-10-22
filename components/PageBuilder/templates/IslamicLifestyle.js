/**
 * Template: Islamic Life Style.
 *
 * Built from the rendered pages of https://islamiclifestyle.bd -- a Rangpur shop
 * selling Islamic home decor, cash on delivery nationwide. Same shape as the
 * other files here: one template object, `pages` holding one entry per page
 * type, each `content` an ARRAY of builder blocks. The API stores a page's
 * content as a JSON STRING (Templates.jsx calls `isJsonString` and then
 * `JSON.parse`), so whatever applies this template must
 * `JSON.stringify(page.content)` per page on the way out.
 *
 * "Header" and "Footer" are template parts, not pages: they carry type 'header'
 * and 'footer', the two part types PanelsLeft.jsx passes to TemplateParts.jsx,
 * and each holds exactly one siteHeader / siteFooter block. They apply once for
 * the whole site, so no page below repeats them.
 *
 * COLOUR
 *
 * The shop's own tokens, read from the CSS variables its page sets. Two of them
 * are overridden inline per store, so the stylesheet's defaults are not what
 * actually renders; these are the live values:
 *
 *   --bazar-brand       #115e59  deep teal: header, nav, chips, hover borders
 *   --bazar-brand-deep  #0c433f  brand mixed 72% with black -- the footer
 *   --bazar-brand-soft  #e7eeed  brand mixed 11% with white -- the cart pill
 *   --bazar-action      #dc2626  red: every buy button and the stock badge
 *   --bazar-sale        #dc2626  the "Save" badge
 *   --bazar-bg          #faf6ee  cream page background
 *   --bazar-soft        #f3ede0  sand: search field and image wells
 *   --bazar-border      #eae3d3  the only border colour on the site
 *   --bazar-fg          #1c2419  ink for headings and body
 *   --bazar-muted-fg    #6b6656  secondary text
 *   --bazar-faint       #a29c8a  meta text and struck-out prices
 *
 * Worth knowing which does what: teal is chrome -- header bars, active chips,
 * hover borders -- and red is the only colour that buys anything. Nothing on
 * the site has a teal button.
 *
 * LAYOUT AND SPACING
 *
 * Also the shop's, down to the odd values:
 *
 *   container     mx-auto w-full max-w-[75rem] px-4 xl:px-0
 *   section       pt-7 lg:pt-16, and pt-4 lg:pt-6 for the banner
 *   head -> body  mt-3.5 lg:mt-6
 *   section head  a label in action red at text-[13px] lg:text-[15px] over an
 *                 h2 at text-xl lg:text-[28px], font-extrabold, negative
 *                 tracking
 *   cards         rounded-xl, border, image flush to the edge via
 *                 overflow-hidden, body padded p-2.5 lg:p-3
 *   buttons       rounded-lg, h-9 lg:h-10 on cards
 *   product grid  grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6
 *                 xl:grid-cols-5
 *
 * The homepage has exactly three sections -- banner, "Shop by category", "All
 * products" -- so Home below has three and no invented trust strips or CTA
 * bands. The category row is a horizontal scroller of circular tiles
 * (size-[70px] lg:size-[132px], border-2 that turns teal on hover), not a grid,
 * and the products section leads with a filter chip row: the active chip is a
 * solid teal pill, the rest are outlined.
 *
 * The product card is theirs: a square sand-backed image with stacked badges at
 * top-left, a two-line title at text-[15px] lg:text-base, the price at text-lg
 * lg:text-xl beside a struck-out old price, and a red "Order now" bar. Their
 * card puts a second, outlined icon button beside that bar which adds to the
 * cart while "Order now" opens the product with an order intent; the builder has
 * no block that links to the current post, so the one addToCart below carries
 * the "Order now" label and the pair is left as a single button.
 *
 * The Bengali labels on the category and products headings are the site's own.
 * Its type is Plus Jakarta Sans with Hind Siliguri for Bengali, which belongs in
 * the storefront's font config, so nothing here sets a family.
 *
 * Four things to fill in before this goes live: the logo (header and footer use
 * a placehold.co stand-in), the phone and email in the footer and the header
 * call link (`01XXXXXXXXX`, `support@example.com`), the WhatsApp number, left
 * empty on purpose so the button cannot link somewhere wrong, and the banner
 * image. The cart block sets `editMode: false`; the SiteHeader.js presets ship
 * `true`, which is an authoring convenience that leaves the drawer open on load.
 *
 * Renderer quirks these blocks are written around, all documented at length in
 * element-layouts/ and worth reading before changing a class string:
 *
 *   - postGrid / termsGrid / relatedProducts take `queryPrams` (that spelling);
 *     PostGrid.jsx reads it and ignores the `queryParams` the definition
 *     declares. `loop-items` / `loop-item` are mirrored onto the postLoop child
 *     because PostLoop.jsx:18 takes them from the parent's context.
 *   - Buttons set `linkTo: "custom"` and both `scheme` and `url`: Button.jsx
 *     only renders a <Link> for 'custom', and builds the href as
 *     `${scheme}${url}`, so an unset scheme prints the string "undefined".
 *   - addToCart's quantity flag is `hideQuanity`, the misspelling the renderer
 *     and the options panel agree on, and `iconSize` must be set explicitly
 *     because AddToCart.jsx's `?? 20` default is dead code.
 *   - productDiscount renders a bare rounded percentage plus `options.label`,
 *     and only for a product that has a sale price -- it outputs nothing in the
 *     canvas, so select it from the layer tree rather than by clicking. The card
 *     badge is absolute, which works because each `loop-item` is `relative`.
 *   - The shop and taxonomy headers are a heading plus text, not archiveTitle /
 *     archiveDescription / archiveCount or termTitle / termCount: those
 *     renderers either print `options.prefix` as raw HTML without reading the
 *     archive, or read a context only a terms loop provides, so outside one they
 *     come out empty.
 *   - On the single pages, postTitle / postDate / postAuthor / postContent read
 *     PostContext, which only PostLoop, PostSlider, Sidebar, SiteHeader and
 *     SiteFooter provide, so in the canvas they show their placeholder strings
 *     and fill in at runtime.
 *
 * Three things on the site have no block to carry them and are left out: the
 * banner's two-slide swipe track, the mobile bottom bar (Home / Categories /
 * Cart, which is why their footer carries `pb-16 sm:pb-0`), and the per-card
 * "Only 1 left" stock badge, which productStockStatus can only render as a flat
 * "In stock".
 */

var template = [
  {

    "name": "Islamic Life Style",
    "description": "Cash-on-delivery storefront for Islamic home decor: cream and deep teal chrome, red buy buttons, a banner hero, circular category tiles and a five-across card grid.",
    "thumbnail": "/templates/islamic-lifestyle.svg",
    "meta": "",
    "pages": [

      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "il-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white lg:border-b lg:border-[#eae3d3] sticky top-0 z-40" } },
            "children": [
              {
                "id": "il-hdr-strip",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full bg-[#115e59] text-white" } },
                "children": [
                  {
                    "id": "il-hdr-strip-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "mx-auto flex w-full max-w-[75rem] items-center justify-center gap-1.5 px-4 py-2 lg:justify-between lg:gap-2 lg:py-[9px] xl:px-0" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "il-hdr-strip-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex min-w-0 items-center gap-1.5 lg:gap-2" } },
                        "children": [
                          {
                            "id": "il-hdr-strip-i",
                            "type": "icon",
                            "options": { "iconName": "IconTruckDelivery", "size": "15" },
                            "cssSelectors": { "*": { "classes": "w-fit flex items-center shrink-0" } },
                            "children": []
                          },
                          {
                            "id": "il-hdr-strip-t",
                            "type": "text",
                            "options": { "text": "Cash on delivery all over Bangladesh", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "truncate text-xs font-semibold lg:text-[13px]" } }
                          }
                        ]
                      },
                      {
                        "id": "il-hdr-strip-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "hidden items-center gap-5 text-[13px] text-white/90 lg:flex" } },
                        "children": [
                          {
                            "id": "il-hdr-strip-hot",
                            "type": "button",
                            "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconPhoneCall", "iconSize": 15 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 cursor-pointer hover:text-white" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "font-semibold" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "il-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 py-[18px] xl:px-0" } },
                "children": [
                  {
                    "id": "il-hdr-cols",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-center gap-6 flex-wrap lg:gap-10" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "il-hdr-col-logo",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex shrink-0 items-center gap-2.5" } },
                        "children": [
                          {
                            "id": "il-hdr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Islamic Life Style", "src": "https://placehold.co/96x96?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "flex items-center gap-2.5" },
                              "img": { "classes": "size-11 shrink-0 rounded-full bg-white object-cover" },
                              "text": { "classes": "text-[21px] font-extrabold leading-tight tracking-[-0.3px] text-[#1c2419]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-hdr-col-search",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "order-3 w-full lg:order-none lg:flex-1" } },
                        "children": [
                          {
                            "id": "il-hdr-search",
                            "type": "quickSearch",
                            "options": { "placeholder": "Search products", "iconPosition": "", "icon": "IconSearch" },
                            "cssSelectors": {
                              "*": { "classes": "flex h-12 w-full items-center rounded-xl bg-[#f3ede0] py-0 pl-[18px] pr-1.5" },
                              "input-search": { "classes": "min-w-0 flex-1 bg-transparent border-0 shadow-none! outline-none text-[15px] text-[#1c2419] placeholder:text-[#6b6656]" },
                              "input-wrapper": { "classes": "flex w-full flex-nowrap items-center gap-2.5" },
                              "icon": { "classes": "size-[19px] text-[#6b6656] shrink-0" },
                              "popover": { "classes": "bg-white shadow-xl rounded-xl border border-[#eae3d3]" },
                              "reset": { "classes": "text-[#dc2626] text-sm cursor-pointer" },
                              "categories": { "classes": "" },
                              "brands": { "classes": "" },
                              "items": { "classes": "divide-y divide-[#eae3d3]" },
                              "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-[#faf6ee]" },
                              "item-title": { "classes": "" },
                              "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                              "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                              "page-item": { "classes": "border border-solid border-[#eae3d3] shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                              "page-count": { "classes": "border border-solid border-[#eae3d3] shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-hdr-col-actions",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex shrink-0 items-center gap-7 ml-auto" } },
                        "children": [
                          {
                            "id": "il-hdr-cart",
                            "type": "cart",
                            "options": { "buttonIcon": "IconShoppingBag", "editMode": false },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "button": { "classes": "flex items-center gap-2.5 rounded-xl bg-[#e7eeed] px-3.5 py-2 text-[#115e59] cursor-pointer hover:bg-[#d9e4e2] transition-colors" },
                              "button-quantity": { "classes": "text-[15px] font-bold leading-tight" },
                              "button-icon": { "classes": "relative flex size-7 items-center justify-center shrink-0" },
                              "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                              "cart-header": { "classes": "flex justify-between items-center bg-[#115e59] py-3 px-4 text-white" },
                              "cart-total-items": { "classes": "font-semibold" },
                              "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-lg text-sm" },
                              "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-lg text-sm" },
                              "go-to-checkout": { "classes": "text-white bg-[#dc2626] hover:opacity-90 px-4 py-2.5 rounded-lg font-bold cursor-pointer" },
                              "coupon-input": { "classes": "w-28 border! border-solid border-[#eae3d3] shadow-none! text-center rounded-lg" },
                              "coupon-apply-button": { "classes": "text-white bg-[#115e59] px-3 py-2 rounded-lg cursor-pointer" },
                              "back-to-cart": { "classes": "text-sm text-[#115e59] cursor-pointer" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "il-hdr-nav",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "hidden w-full border-t border-[#eae3d3] lg:block" } },
                "children": [
                  {
                    "id": "il-hdr-nav-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0" } },
                    "children": [
                      {
                        "id": "il-hdr-menu",
                        "type": "menu",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "menu": { "classes": "flex h-12 items-center gap-[30px] overflow-x-auto text-sm font-semibold text-[#1c2419] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" },
                          "menu-item": { "classes": "shrink-0" },
                          "sub-menu": { "classes": "rounded-xl border border-[#eae3d3] bg-white shadow-lg py-2 min-w-52" },
                          "menu-link": { "classes": "whitespace-nowrap py-1 hover:text-[#115e59] transition-colors" },
                          "link-label": { "classes": "" },
                          "icon": { "classes": "" }
                        },
                        "children": [
                          { "id": "il-hdr-mi-1", "type": "menuItem", "options": { "label": "Home", "url": "/" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "il-hdr-mi-2", "type": "menuItem", "options": { "label": "All products", "url": "/shop" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "il-hdr-mi-3", "type": "menuItem", "options": { "label": "Islamic Home Decor", "url": "/categories/islamic-home-decor" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "il-hdr-mi-4", "type": "menuItem", "options": { "label": "Help", "url": "/help" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "il-hdr-mi-5", "type": "menuItem", "options": { "label": "Contact us", "url": "/contact" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
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
            "id": "il-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#0c433f] text-white pb-16 sm:pb-0" } },
            "children": [
              {
                "id": "il-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto flex w-full max-w-[75rem] flex-col gap-6 px-5 pb-6 pt-8 lg:gap-10 lg:px-4 lg:pb-7 lg:pt-14 xl:px-0" } },
                "children": [
                  {
                    "id": "il-ftr-top",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex flex-col gap-6 lg:flex-row lg:gap-14" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "il-ftr-col-brand",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-4 lg:w-[340px] lg:shrink-0" } },
                        "children": [
                          {
                            "id": "il-ftr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Islamic Life Style", "src": "https://placehold.co/96x96?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "flex items-center gap-2.5" },
                              "img": { "classes": "size-9 shrink-0 rounded-full bg-white object-cover lg:size-[42px]" },
                              "text": { "classes": "text-lg font-extrabold leading-tight lg:text-xl" }
                            }
                          },
                          {
                            "id": "il-ftr-tagline",
                            "type": "text",
                            "options": { "text": "Islamic home decor for everyday living, packed in Rangpur and delivered across Bangladesh. Pay cash when it reaches your door.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm leading-relaxed text-white/70 lg:text-[15px]" } }
                          }
                        ]
                      },
                      {
                        "id": "il-ftr-col-links",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-1 gap-4 lg:gap-14" } },
                        "children": [
                          {
                            "id": "il-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "SHOP",
                              "tag": "ul",
                              "items": [
                                { "text": "All products", "icon": "", "slug": "/shop" },
                                { "text": "Islamic Home Decor", "icon": "", "slug": "/categories/islamic-home-decor" },
                                { "text": "New arrivals", "icon": "", "slug": "/shop" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-1 flex-col gap-[9px] lg:gap-3" },
                              "header-text": { "classes": "text-[11px] font-bold tracking-[1px] text-white/50 lg:text-xs" },
                              "ul": { "classes": "flex flex-col gap-[9px] lg:gap-3" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "hover:text-white transition-colors" },
                              "icon": { "classes": "" },
                              "text": { "classes": "text-sm text-white/70 lg:text-[15px]" }
                            }
                          },
                          {
                            "id": "il-ftr-ll-help",
                            "type": "linkList",
                            "options": {
                              "headerText": "HELP",
                              "tag": "ul",
                              "items": [
                                { "text": "Contact us", "icon": "", "slug": "/contact" },
                                { "text": "Track your order", "icon": "", "slug": "/account" },
                                { "text": "Delivery and returns", "icon": "", "slug": "/help" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-1 flex-col gap-[9px] lg:gap-3" },
                              "header-text": { "classes": "text-[11px] font-bold tracking-[1px] text-white/50 lg:text-xs" },
                              "ul": { "classes": "flex flex-col gap-[9px] lg:gap-3" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "hover:text-white transition-colors" },
                              "icon": { "classes": "" },
                              "text": { "classes": "text-sm text-white/70 lg:text-[15px]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-ftr-col-contact",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-2.5 lg:order-last lg:w-[300px] lg:shrink-0 lg:gap-3" } },
                        "children": [
                          {
                            "id": "il-ftr-contact-label",
                            "type": "heading",
                            "options": { "text": "CONTACT", "tag": "h4" },
                            "cssSelectors": { "*": { "classes": "hidden text-xs font-bold tracking-[1px] text-white/50 lg:block" } }
                          },
                          {
                            "id": "il-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": { "icon": "IconPhone", "label": "Phone", "value": "01XXXXXXXXX" },
                              "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
                              "location": { "icon": "IconMapPin", "label": "Location", "value": "Indira More, Rangpur" },
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2.5 lg:gap-3" },
                              "item": { "classes": "flex items-center gap-2.5 text-sm font-medium lg:text-[15px] lg:font-normal" },
                              "link": { "classes": "flex items-center gap-2.5 hover:text-white transition-colors" },
                              "phone-link": { "classes": "" },
                              "email-link": { "classes": "" },
                              "icon": { "classes": "size-4 shrink-0" }
                            }
                          },
                          {
                            "id": "il-ftr-cod",
                            "type": "text",
                            "options": { "text": "Cash on delivery", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "w-fit rounded-md bg-white/10 px-2.5 py-[5px] text-xs font-semibold" } }
                          },
                          {
                            "id": "il-ftr-wa",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Order on WhatsApp",
                              "phone": "",
                              "message": "Assalamu alaikum, I would like to order from Islamic Life Style.",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-[5px] cursor-pointer hover:bg-white/20 transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-xs font-semibold whitespace-nowrap" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "il-ftr-bottom",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-between lg:border-t lg:border-white/15 lg:pt-6" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "il-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "il-ftr-copy",
                            "type": "text",
                            "options": { "text": "(c) 2026 Islamic Life Style. All rights reserved.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-white/50 lg:text-[13px]" } }
                          }
                        ]
                      },
                      {
                        "id": "il-ftr-legal-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "il-ftr-ll-legal",
                            "type": "linkList",
                            "options": {
                              "headerText": "",
                              "tag": "ul",
                              "items": [
                                { "text": "Privacy policy", "icon": "", "slug": "/privacy-policy" },
                                { "text": "Terms", "icon": "", "slug": "/terms" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "header-text": { "classes": "hidden" },
                              "ul": { "classes": "flex items-center gap-5" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "hover:text-white transition-colors" },
                              "icon": { "classes": "" },
                              "text": { "classes": "text-xs text-white/50 lg:text-[13px]" }
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
            "id": "il-hm-banner",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 pt-4 lg:pt-6 xl:px-0" } },
            "children": [
              {
                "id": "il-hm-banner-frame",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "relative h-60 overflow-hidden rounded-2xl bg-[#115e59] lg:h-[420px] lg:rounded-[20px]" } },
                "children": [
                  {
                    "id": "il-hm-banner-img",
                    "type": "image",
                    "options": { "src": "https://placehold.co/1600x840?text=Banner", "altText": "", "width": "", "height": "" },
                    "cssSelectors": {
                      "*": { "classes": "absolute inset-0" },
                      "link": { "classes": "block size-full" },
                      "img": { "classes": "size-full object-cover" }
                    }
                  },
                  {
                    "id": "il-hm-banner-overlay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "absolute inset-0 flex flex-col justify-center gap-2.5 bg-gradient-to-r from-black/65 via-black/35 to-transparent p-5 lg:gap-3.5 lg:px-14" } },
                    "children": [
                      {
                        "id": "il-hm-banner-pill",
                        "type": "text",
                        "options": { "text": "New arrivals", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "self-start rounded-full bg-white/20 px-2.5 py-[3px] text-xs font-semibold text-white lg:px-3 lg:py-1 lg:text-[13px]" } }
                      },
                      {
                        "id": "il-hm-banner-h",
                        "type": "heading",
                        "options": { "text": "Islamic Life Style", "tag": "h1" },
                        "cssSelectors": { "*": { "classes": "max-w-[36rem] text-[27px] font-bold leading-[1.2] text-white lg:text-[46px] lg:leading-[1.15]" } }
                      },
                      {
                        "id": "il-hm-banner-cta",
                        "type": "button",
                        "options": { "text": "Shop now", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconChevronRight", "iconSize": 14 },
                        "cssSelectors": {
                          "*": { "classes": "mt-1 flex items-center gap-1.5 self-start rounded-lg bg-white px-4 py-2.5 text-[13px] font-bold text-[#1c2419] cursor-pointer hover:opacity-90 lg:rounded-[10px] lg:bg-[#dc2626] lg:px-[22px] lg:py-[13px] lg:text-[15px] lg:text-white" },
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
            "id": "il-hm-cat",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 pt-7 lg:pt-16 xl:px-0" } },
            "children": [
              {
                "id": "il-hm-cat-head",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "flex min-w-0 flex-col lg:gap-0.5" } },
                "children": [
                  {
                    "id": "il-hm-cat-label",
                    "type": "text",
                    "options": { "text": "ক্যাটাগরি", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-[13px] font-semibold text-[#dc2626] lg:text-[15px]" } }
                  },
                  {
                    "id": "il-hm-cat-h",
                    "type": "heading",
                    "options": { "text": "Shop by category", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-extrabold tracking-[-0.3px] text-[#1c2419] lg:text-[28px] lg:tracking-[-0.5px]" } }
                  }
                ]
              },
              {
                "id": "il-hm-cat-tg-1",
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
                  "*": { "classes": "" },
                  "loop-items": { "classes": "-mx-4 mt-3.5 flex gap-3.5 overflow-x-auto px-4 [scrollbar-width:none] lg:mx-0 lg:mt-6 lg:justify-between lg:gap-6 lg:px-0 [&::-webkit-scrollbar]:hidden" },
                  "loop-item": { "classes": "group flex w-[74px] shrink-0 flex-col items-center gap-1 text-center lg:w-[150px] lg:gap-1.5" }
                },
                "children": [
                  {
                    "id": "il-hm-cat-tg-2",
                    "type": "termsLoop",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "" },
                      "loop-item": { "classes": "group flex w-[74px] shrink-0 flex-col items-center gap-1 text-center lg:w-[150px] lg:gap-1.5" }
                    },
                    "children": [
                      {
                        "id": "il-hm-cat-tg-3",
                        "type": "termThumbnail",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "link": { "classes": "block" },
                          "image": { "classes": "size-[70px] rounded-full border-2 border-[#eae3d3] bg-[#f3ede0] object-cover group-hover:border-[#115e59] lg:size-[132px]" }
                        }
                      },
                      {
                        "id": "il-hm-cat-tg-4",
                        "type": "termTitle",
                        "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                        "cssSelectors": { "*": { "classes": "line-clamp-2 text-[13px] font-semibold leading-tight text-[#1c2419] lg:text-base" } }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "il-hm-all",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 pb-14 pt-7 lg:pb-20 lg:pt-16 xl:px-0" } },
            "children": [
              {
                "id": "il-hm-all-head",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": { "classes": "flex flex-col gap-3.5 lg:flex-row lg:items-end lg:justify-between" },
                  "column": { "classes": "" }
                },
                "children": [
                  {
                    "id": "il-hm-all-head-c1",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex min-w-0 flex-col lg:gap-0.5" } },
                    "children": [
                      {
                        "id": "il-hm-all-label",
                        "type": "text",
                        "options": { "text": "সব পণ্য", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "text-[13px] font-semibold text-[#dc2626] lg:text-[15px]" } }
                      },
                      {
                        "id": "il-hm-all-h",
                        "type": "heading",
                        "options": { "text": "All products", "tag": "h2" },
                        "cssSelectors": { "*": { "classes": "text-xl font-extrabold tracking-[-0.3px] text-[#1c2419] lg:text-[28px] lg:tracking-[-0.5px]" } }
                      }
                    ]
                  },
                  {
                    "id": "il-hm-all-head-c2",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "-mx-4 flex items-center gap-2 overflow-x-auto px-4 [scrollbar-width:none] lg:mx-0 lg:gap-2.5 lg:px-0 [&::-webkit-scrollbar]:hidden" } },
                    "children": [
                      {
                        "id": "il-hm-all-chip-active",
                        "type": "text",
                        "options": { "text": "All", "tag": "p" },
                        "cssSelectors": { "*": { "classes": "block shrink-0 whitespace-nowrap rounded-full bg-[#115e59] px-3.5 py-[7px] text-[13px] font-semibold text-white lg:px-4 lg:py-2 lg:text-sm" } }
                      },
                      {
                        "id": "il-hm-all-chips",
                        "type": "linkList",
                        "options": {
                          "headerText": "",
                          "tag": "ul",
                          "items": [
                            { "text": "Islamic Home Decor", "icon": "", "slug": "/categories/islamic-home-decor" },
                            { "text": "New arrivals", "icon": "", "slug": "/shop" }
                          ]
                        },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "header-text": { "classes": "hidden" },
                          "ul": { "classes": "flex items-center gap-2 lg:gap-2.5" },
                          "li": { "classes": "list-none shrink-0" },
                          "link": { "classes": "block whitespace-nowrap rounded-full border border-[#eae3d3] bg-white px-3.5 py-[7px] hover:border-[#115e59] lg:px-4 lg:py-2" },
                          "icon": { "classes": "" },
                          "text": { "classes": "text-[13px] font-semibold text-[#1c2419] lg:text-sm" }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "il-hm-all-pg",
                "type": "postGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "post_type": ["product"],
                    "order": "DESC",
                    "orderby": "date",
                    "posts_per_page": "20",
                    "taxQuery": []
                  }
                },
                "cssSelectors": {
                  "*": { "classes": "mt-3.5 lg:mt-6" },
                  "loop-items": { "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5" },
                  "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                },
                "children": [
                  {
                    "id": "il-hm-all-pg-loop",
                    "type": "postLoop",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5" },
                      "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                    },
                    "children": [
                      {
                        "id": "il-hm-all-c-save",
                        "type": "productDiscount",
                        "options": { "label": "off", "separator": ", " },
                        "cssSelectors": {
                          "*": { "classes": "absolute left-2 top-2 z-10 flex items-baseline gap-0.5 rounded-md bg-[#dc2626] px-[7px] py-[3px] text-white" },
                          "discount": { "classes": "text-[11px] font-bold" },
                          "label": { "classes": "text-[11px] font-bold" }
                        }
                      },
                      {
                        "id": "il-hm-all-c-thumb",
                        "type": "postThumbnail",
                        "options": { "linkTo": "postUrl" },
                        "cssSelectors": {
                          "*": { "classes": "w-full bg-[#f3ede0]" },
                          "link": { "classes": "relative block aspect-square" },
                          "image": { "classes": "size-full object-cover" }
                        }
                      },
                      {
                        "id": "il-hm-all-c-body",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-1 flex-col gap-0.5 p-2.5 lg:p-3" } },
                        "children": [
                          {
                            "id": "il-hm-all-c-title",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "line-clamp-2 text-[15px] font-semibold leading-[1.3] text-[#1c2419] hover:text-[#115e59] lg:text-base" } }
                          },
                          {
                            "id": "il-hm-all-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 pt-1" },
                              "simple-price-wrap": { "classes": "flex flex-wrap items-baseline gap-x-1.5" },
                              "simple-price-sale": { "classes": "text-lg font-bold text-[#1c2419] lg:text-xl" },
                              "simple-price-regular": { "classes": "text-[13px] text-[#a29c8a] line-through" },
                              "variable-price-wrap": { "classes": "flex items-baseline gap-x-1.5" },
                              "variable-price-min": { "classes": "text-base font-bold text-[#1c2419]" },
                              "variable-price-max": { "classes": "text-base font-bold text-[#1c2419]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-hm-all-c-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex gap-1.5 px-2.5 pb-2.5 lg:px-3 lg:pb-3" } },
                        "children": [
                          {
                            "id": "il-hm-all-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Order now", "icon": "", "iconSize": 16, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex-1" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#dc2626] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10" },
                              "button-icon": { "classes": "empty:hidden flex items-center" },
                              "button-label": { "classes": "whitespace-nowrap" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "il-hm-all-pg-pager",
                    "type": "postGridPagination",
                    "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                    "cssSelectors": {
                      "*": { "classes": "flex items-center justify-center gap-3 pt-7 lg:pt-10" },
                      "previous": { "classes": "rounded-lg border border-[#eae3d3] bg-white px-4 py-2 text-[13px] font-semibold text-[#1c2419] cursor-pointer hover:border-[#115e59]" },
                      "next": { "classes": "rounded-lg border border-[#eae3d3] bg-white px-4 py-2 text-[13px] font-semibold text-[#1c2419] cursor-pointer hover:border-[#115e59]" },
                      "previous-icon": { "classes": "empty:hidden flex items-center" },
                      "next-icon": { "classes": "empty:hidden flex items-center" },
                      "current": { "classes": "w-14 text-center text-sm" }
                    }
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
            "id": "il-sh-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-sh-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "il-sh-head-label",
                    "type": "text",
                    "options": { "text": "সব পণ্য", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#115e59]" } }
                  },
                  {
                    "id": "il-sh-head-h",
                    "type": "heading",
                    "options": { "text": "All products", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-sh-head-t",
                    "type": "text",
                    "options": { "text": "Everything in the shop, newest first. Tap a piece to see the full size and price, or order straight from the card.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-sh-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-sh-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12" } },
                "children": [
                  {
                    "id": "il-sh-body-pg",
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
                      "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                    },
                    "children": [
                      {
                        "id": "il-sh-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                        },
                        "children": [
                          {
                            "id": "il-sh-body-c-badge",
                            "type": "productDiscount",
                            "options": { "label": "off", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute left-2 top-2 z-10 flex items-baseline gap-0.5 rounded-md bg-[#dc2626] px-[7px] py-[3px] text-white" },
                              "discount": { "classes": "text-[11px] font-bold" },
                              "label": { "classes": "text-[11px] font-bold" }
                            }
                          },
                          {
                            "id": "il-sh-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full bg-[#f3ede0]" },
                              "link": { "classes": "relative block aspect-square" },
                              "image": { "classes": "size-full object-cover" }
                            }
                          },
                          {
                            "id": "il-sh-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#1c2419] hover:text-[#115e59] lg:px-3 lg:pt-3 lg:text-base" } }
                          },
                          {
                            "id": "il-sh-body-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 px-2.5 pt-1 lg:px-3" },
                              "simple-price-wrap": { "classes": "flex flex-wrap items-baseline gap-x-1.5" },
                              "simple-price-sale": { "classes": "text-lg font-bold text-[#1c2419] lg:text-xl" },
                              "simple-price-regular": { "classes": "text-[13px] text-[#a29c8a] line-through" },
                              "variable-price-wrap": { "classes": "flex items-baseline gap-x-1.5" },
                              "variable-price-min": { "classes": "text-base font-bold text-[#1c2419]" },
                              "variable-price-max": { "classes": "text-base font-bold text-[#1c2419]" }
                            }
                          },
                          {
                            "id": "il-sh-body-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Order now", "icon": "", "iconSize": 16, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "px-2.5 pb-2.5 pt-2 lg:px-3 lg:pb-3" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#dc2626] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10" },
                              "button-icon": { "classes": "empty:hidden flex items-center" },
                              "button-label": { "classes": "whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-sh-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
                          "next": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
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
            "id": "il-sh-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-[#eae3d3] bg-[#faf6ee]" } },
            "children": [
              {
                "id": "il-sh-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8" } },
                "children": [
                  {
                    "id": "il-sh-foot-fb-1",
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
                          "title": "Delivery all over Bangladesh",
                          "description": "Dispatched from Rangpur.",
                          "icon": "IconTruck",
                          "iconSize": ""
                        },
                        {
                          "title": "Wrapped by hand",
                          "description": "Checked before packing.",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Order by phone",
                          "description": "We will place it for you.",
                          "icon": "IconPhoneCall",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 rounded-xl border border-[#eae3d3] bg-white px-5 py-3" },
                      "loop-item": { "classes": "flex items-center gap-2" },
                      "title": { "classes": "text-xs font-semibold text-[#1c2419] whitespace-nowrap" },
                      "description": { "classes": "" },
                      "icon": { "classes": "text-[#115e59] flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "il-sh-foot-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconCash", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "il-sh-foot-fb-3",
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
        "title": "Product",
        "type": "product",
        "content": [
          {
            "id": "il-pd-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-pd-main-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12" } },
                "children": [
                  {
                    "id": "il-pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "il-pd-col-gallery",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "il-pd-gal-1",
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
                              "item": { "classes": "rounded-xl overflow-hidden bg-[#f3ede0] [&_img]:aspect-square [&_img]:object-cover" },
                              "image": { "classes": "" },
                              "arrows": { "classes": "" },
                              "prev": { "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-[#1c2419]!" },
                              "next": { "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-[#1c2419]!" },
                              "pagination": { "classes": "" },
                              "dot": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-pd-col-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "il-pd-cat-1",
                            "type": "productCategories",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
                              "label": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-[#a29c8a]" },
                              "items": { "classes": "flex flex-wrap items-baseline" },
                              "item": { "classes": "text-[11px] font-bold uppercase tracking-widest text-[#115e59] hover:text-[#0c433f] transition-colors" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "text-[#a29c8a] mr-1" }
                            }
                          },
                          {
                            "id": "il-pd-title",
                            "type": "postTitle",
                            "options": { "linkTo": "", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                          },
                          {
                            "id": "il-pd-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "text-sm font-bold text-[#1c2419]" },
                              "total-reviews": { "classes": "text-sm text-[#6b6656]" }
                            }
                          },
                          {
                            "id": "il-pd-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-3 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-3 items-baseline" },
                              "simple-price-sale": { "classes": "text-3xl font-extrabold text-[#1c2419]" },
                              "simple-price-regular": { "classes": "text-base line-through text-[#a29c8a]" },
                              "variable-price-wrap": { "classes": "flex gap-2 items-center" },
                              "variable-price-min": { "classes": "text-base text-[#6b6656]" },
                              "variable-price-max": { "classes": "text-base text-[#6b6656]" }
                            }
                          },
                          {
                            "id": "il-pd-disc-1",
                            "type": "productDiscount",
                            "options": { "label": "off today", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "w-fit flex items-baseline gap-1 rounded-full bg-[#feecec] px-3 py-1 text-[#dc2626]" },
                              "discount": { "classes": "text-sm font-bold" },
                              "label": { "classes": "text-xs font-semibold" }
                            }
                          },
                          {
                            "id": "il-pd-var-1",
                            "type": "productVariablePrices",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "attr-wrap": { "classes": "flex flex-col gap-5" },
                              "attr-item": { "classes": "flex flex-col gap-2" },
                              "attr-title": { "classes": "text-xs font-semibold uppercase tracking-wide text-[#6b6656]" },
                              "attr-items-wrap": { "classes": "flex flex-wrap gap-2" },
                              "variation-item": { "classes": "min-w-14 px-4 py-2 text-sm font-medium text-center text-[#1c2419] bg-white border border-[#eae3d3] rounded-xl cursor-pointer hover:border-[#115e59] transition-colors" },
                              "variation-price": { "classes": "text-2xl font-extrabold text-[#1c2419]" },
                              "variation-selected": { "classes": "border-[#115e59] bg-[#115e59] text-white" },
                              "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
                            }
                          },
                          {
                            "id": "il-pd-stock-1",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock",
                              "inStockText": "In stock, ready to dispatch",
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
                              "out-of-stock": { "classes": "text-[#dc2626]" },
                              "out-of-stock-label": { "classes": "" },
                              "out-of-stock-icon": { "classes": "" },
                              "in-stock": { "classes": "text-[#115e59]" },
                              "in-stock-label": { "classes": "" },
                              "in-stock-icon": { "classes": "" }
                            }
                          },
                          {
                            "id": "il-pd-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Order now", "icon": "IconShoppingBagPlus", "iconSize": 18, "hideQuanity": false, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-3 items-stretch" },
                              "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-xl border border-[#eae3d3] text-[#6b6656]" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex h-12 items-center justify-center gap-2 rounded-lg bg-[#dc2626] px-7 text-[15px] font-bold text-white cursor-pointer hover:opacity-90" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-sm font-bold whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "il-pd-wa-1",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Ask about this piece",
                              "phone": "",
                              "message": "Assalamu alaikum, I would like to ask about {product_title} {product_url}",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-xl border border-[#25d366] bg-white text-[#1da851] cursor-pointer hover:bg-[#25d366]/5 transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-medium whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "il-pd-usp-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCheck",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Cash on delivery all over Bangladesh",
                                  "icon": ""
                                },
                                {
                                  "text": "No advance payment needed",
                                  "icon": ""
                                },
                                {
                                  "text": "Checked and wrapped by hand before packing",
                                  "icon": ""
                                },
                                {
                                  "text": "Call or WhatsApp us and we will place the order for you",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2 rounded-xl bg-[#faf6ee] border border-[#eae3d3] p-4" },
                              "li": { "classes": "flex items-start gap-2" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-[#115e59]" },
                              "text": { "classes": "text-sm text-[#1c2419] leading-relaxed" }
                            }
                          },
                          {
                            "id": "il-pd-sku-1",
                            "type": "productSku",
                            "options": { "label": "SKU:", "icon": "", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-2" },
                              "label": { "classes": "empty:hidden text-sm text-[#6b6656]" },
                              "sku": { "classes": "text-sm font-medium text-[#1c2419] tracking-wide" },
                              "icon": { "classes": "shrink-0 flex items-center text-[#a29c8a]" }
                            }
                          },
                          {
                            "id": "il-pd-tags-1",
                            "type": "productTags",
                            "options": { "label": "Tags:", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-baseline gap-1.5 flex-wrap" },
                              "label": { "classes": "text-xs text-[#a29c8a]" },
                              "items": { "classes": "flex flex-wrap items-baseline gap-1.5" },
                              "item": { "classes": "text-xs font-medium text-[#6b6656] hover:text-[#115e59] transition-colors" },
                              "category-name": { "classes": "" },
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
            "id": "il-pd-tabs-sec",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-y border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14" } },
                "children": [
                  {
                    "id": "il-pd-tabs",
                    "type": "tabs",
                    "options": {
                      "orientation": "",
                      "tabsItems": [
                        {
                          "label": "Description",
                          "icon": "IconFileDescription"
                        },
                        {
                          "label": "Details",
                          "icon": "IconListDetails"
                        },
                        {
                          "label": "Delivery",
                          "icon": "IconTruckDelivery"
                        },
                        {
                          "label": "Reviews",
                          "icon": "IconStar"
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "bg-white rounded-xl border border-[#eae3d3] p-5" },
                      "navs-items": { "classes": "gap-6 border-b border-[#eae3d3]" },
                      "nav-item": { "classes": "flex items-center gap-2 px-1 py-3 text-sm font-medium text-[#6b6656] border-b-2 border-transparent hover:text-[#1c2419] whitespace-nowrap cursor-pointer" },
                      "nav-item-active": { "classes": "text-[#115e59]! border-[#115e59]!" },
                      "nav-item-label": { "classes": "" },
                      "nav-item-icon": { "classes": "empty:hidden" },
                      "nav-item-content": { "classes": "pt-5" }
                    },
                    "children": [
                      {
                        "id": "il-pd-tab-desc",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "il-pd-desc",
                            "type": "postContent",
                            "options": { "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-[#1c2419] leading-relaxed max-w-3xl [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3 [&_strong]:font-semibold" } }
                          }
                        ]
                      },
                      {
                        "id": "il-pd-tab-spec",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "il-pd-spec-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Size: add the width and height",
                                  "icon": ""
                                },
                                {
                                  "text": "Material: add the material",
                                  "icon": ""
                                },
                                {
                                  "text": "Finish: add the finish or colour",
                                  "icon": ""
                                },
                                {
                                  "text": "Mounting: add how it hangs or stands",
                                  "icon": ""
                                },
                                {
                                  "text": "In the box: add what ships with it",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "ml-5 max-w-2xl" },
                              "li": { "classes": "list-disc py-1.5 border-b border-[#eae3d3] last:border-0 marker:text-[#a29c8a]" },
                              "icon": { "classes": "empty:hidden" },
                              "text": { "classes": "text-sm text-[#1c2419]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-pd-tab-del",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "il-pd-del-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCheck",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Cash on delivery everywhere in Bangladesh, nothing to pay up front",
                                  "icon": ""
                                },
                                {
                                  "text": "Inside Rangpur: usually next day",
                                  "icon": ""
                                },
                                {
                                  "text": "Outside Rangpur: two to four days by courier",
                                  "icon": ""
                                },
                                {
                                  "text": "We call to confirm the address before the parcel leaves",
                                  "icon": ""
                                },
                                {
                                  "text": "Damaged in transit? Send a photo on WhatsApp and we will replace it",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2.5 max-w-2xl" },
                              "li": { "classes": "flex items-start gap-2" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-[#115e59]" },
                              "text": { "classes": "text-sm text-[#1c2419] leading-relaxed" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-pd-tab-rev",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "il-pd-rev",
                            "type": "commentsGrid",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                              "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl border border-[#eae3d3] bg-[#faf6ee]" }
                            },
                            "children": [
                              {
                                "id": "il-pd-rev-loop",
                                "type": "commentsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                                  "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl border border-[#eae3d3] bg-[#faf6ee]" }
                                },
                                "children": [
                                  {
                                    "id": "il-pd-rev-avatar",
                                    "type": "commentAvatar",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": { "classes": "w-fit" },
                                      "link": { "classes": "block" },
                                      "image": { "classes": "w-10 h-10 rounded-full object-cover bg-[#f3ede0]" }
                                    }
                                  },
                                  {
                                    "id": "il-pd-rev-author",
                                    "type": "commentAuthor",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#1c2419]" } }
                                  },
                                  {
                                    "id": "il-pd-rev-rate",
                                    "type": "commentRate",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-amber-500 [&_svg]:size-4" } }
                                  },
                                  {
                                    "id": "il-pd-rev-body",
                                    "type": "commentContent",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] leading-relaxed" } }
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
            "id": "il-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-pd-rel-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-16 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "il-pd-rel-h",
                    "type": "heading",
                    "options": { "text": "You may also like", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-pd-rel-rp-1",
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
                      "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                    },
                    "children": [
                      {
                        "id": "il-pd-rel-rp-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                        },
                        "children": [
                          {
                            "id": "il-pd-rel-rp-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full bg-[#f3ede0]" },
                              "link": { "classes": "relative block aspect-square" },
                              "image": { "classes": "size-full object-cover" }
                            }
                          },
                          {
                            "id": "il-pd-rel-rp-4",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#1c2419] hover:text-[#115e59] lg:px-3 lg:pt-3 lg:text-base" } }
                          },
                          {
                            "id": "il-pd-rel-rp-5",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline" },
                              "simple-price-sale": { "classes": "text-base font-extrabold text-[#1c2419]" },
                              "simple-price-regular": { "classes": "text-xs line-through text-[#a29c8a]" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-sm text-[#6b6656]" },
                              "variable-price-max": { "classes": "text-sm text-[#6b6656]" }
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
        "title": "Categories Archive",
        "type": "categories",
        "content": [
          {
            "id": "il-ca-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-ca-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "il-ca-head-label",
                    "type": "text",
                    "options": { "text": "ক্যাটাগরি", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#115e59]" } }
                  },
                  {
                    "id": "il-ca-head-h",
                    "type": "heading",
                    "options": { "text": "Shop by category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-ca-head-t",
                    "type": "text",
                    "options": { "text": "Every category in the shop. Pick one to narrow things down.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-ca-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-ca-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14" } },
                "children": [
                  {
                    "id": "il-ca-grid-1",
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
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5" },
                      "loop-item": { "classes": "h-full bg-white border border-[#eae3d3] rounded-xl p-4 flex flex-col gap-3 transition-colors hover:border-[#115e59]" }
                    },
                    "children": [
                      {
                        "id": "il-ca-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "h-full bg-white border border-[#eae3d3] rounded-xl p-4 flex flex-col gap-3" }
                        },
                        "children": [
                          {
                            "id": "il-ca-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full aspect-square rounded-xl overflow-hidden bg-[#f3ede0]" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "il-ca-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#1c2419] text-center line-clamp-2" } }
                          },
                          {
                            "id": "il-ca-grid-5",
                            "type": "termCount",
                            "options": { "label": "", "suffix": " items", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mx-auto text-xs font-semibold text-[#115e59] bg-[#e7eeed] rounded-full px-2.5 py-1" } }
                          }
                        ]
                      },
                      {
                        "id": "il-ca-grid-6",
                        "type": "termsGridPagination",
                        "options": { "tag": "div" },
                        "cssSelectors": {
                          "*": { "classes": "flex gap-3 items-center justify-center mt-10" },
                          "previous": { "classes": "bg-[#115e59] hover:bg-[#0c433f] px-4 py-2 rounded-xl text-white cursor-pointer" },
                          "next": { "classes": "bg-[#115e59] hover:bg-[#0c433f] px-4 py-2 rounded-xl text-white cursor-pointer" },
                          "previous-icon": { "classes": "" },
                          "next-icon": { "classes": "" },
                          "current": { "classes": "w-20 text-center border border-[#eae3d3] rounded-xl py-2" }
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
        "title": "Categories Single",
        "type": "categories_single",
        "content": [
          {
            "id": "il-cs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-cs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "il-cs-head-h",
                    "type": "heading",
                    "options": { "text": "Category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-cs-head-t",
                    "type": "text",
                    "options": { "text": "Pieces in this category, newest first. Cash on delivery on every order.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-cs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-cs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12" } },
                "children": [
                  {
                    "id": "il-cs-body-pg",
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
                      "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                    },
                    "children": [
                      {
                        "id": "il-cs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                        },
                        "children": [
                          {
                            "id": "il-cs-body-c-badge",
                            "type": "productDiscount",
                            "options": { "label": "off", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute left-2 top-2 z-10 flex items-baseline gap-0.5 rounded-md bg-[#dc2626] px-[7px] py-[3px] text-white" },
                              "discount": { "classes": "text-[11px] font-bold" },
                              "label": { "classes": "text-[11px] font-bold" }
                            }
                          },
                          {
                            "id": "il-cs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full bg-[#f3ede0]" },
                              "link": { "classes": "relative block aspect-square" },
                              "image": { "classes": "size-full object-cover" }
                            }
                          },
                          {
                            "id": "il-cs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#1c2419] hover:text-[#115e59] lg:px-3 lg:pt-3 lg:text-base" } }
                          },
                          {
                            "id": "il-cs-body-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 px-2.5 pt-1 lg:px-3" },
                              "simple-price-wrap": { "classes": "flex flex-wrap items-baseline gap-x-1.5" },
                              "simple-price-sale": { "classes": "text-lg font-bold text-[#1c2419] lg:text-xl" },
                              "simple-price-regular": { "classes": "text-[13px] text-[#a29c8a] line-through" },
                              "variable-price-wrap": { "classes": "flex items-baseline gap-x-1.5" },
                              "variable-price-min": { "classes": "text-base font-bold text-[#1c2419]" },
                              "variable-price-max": { "classes": "text-base font-bold text-[#1c2419]" }
                            }
                          },
                          {
                            "id": "il-cs-body-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Order now", "icon": "", "iconSize": 16, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "px-2.5 pb-2.5 pt-2 lg:px-3 lg:pb-3" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#dc2626] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10" },
                              "button-icon": { "classes": "empty:hidden flex items-center" },
                              "button-label": { "classes": "whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-cs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
                          "next": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
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
            "id": "il-ta-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-ta-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "il-ta-head-h",
                    "type": "heading",
                    "options": { "text": "Browse by tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-ta-head-t",
                    "type": "text",
                    "options": { "text": "Tags group pieces across categories, by style, room or occasion.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-ta-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-ta-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14" } },
                "children": [
                  {
                    "id": "il-ta-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_tag",
                        "number": "24",
                        "per_page": "24",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count",
                        "paged": 1
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "flex flex-wrap gap-3" },
                      "loop-item": { "classes": "flex items-center gap-2 rounded-full border border-[#eae3d3] bg-white px-4 py-2 transition-colors hover:border-[#115e59] hover:bg-[#e7eeed]" }
                    },
                    "children": [
                      {
                        "id": "il-ta-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-2 rounded-full border border-[#eae3d3] bg-white px-4 py-2" }
                        },
                        "children": [
                          {
                            "id": "il-ta-grid-3",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#1c2419]" } }
                          },
                          {
                            "id": "il-ta-grid-4",
                            "type": "termCount",
                            "options": { "label": "", "suffix": "", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-semibold text-[#115e59]" } }
                          }
                        ]
                      },
                      {
                        "id": "il-ta-grid-5",
                        "type": "termsGridPagination",
                        "options": { "tag": "div" },
                        "cssSelectors": {
                          "*": { "classes": "flex gap-3 items-center justify-center mt-10" },
                          "previous": { "classes": "bg-[#115e59] hover:bg-[#0c433f] px-4 py-2 rounded-xl text-white cursor-pointer" },
                          "next": { "classes": "bg-[#115e59] hover:bg-[#0c433f] px-4 py-2 rounded-xl text-white cursor-pointer" },
                          "previous-icon": { "classes": "" },
                          "next-icon": { "classes": "" },
                          "current": { "classes": "w-20 text-center border border-[#eae3d3] rounded-xl py-2" }
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
            "id": "il-ts-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-ts-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "il-ts-head-h",
                    "type": "heading",
                    "options": { "text": "Tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-ts-head-t",
                    "type": "text",
                    "options": { "text": "Everything carrying this tag, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-ts-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-ts-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12" } },
                "children": [
                  {
                    "id": "il-ts-body-pg",
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
                      "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                    },
                    "children": [
                      {
                        "id": "il-ts-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                        },
                        "children": [
                          {
                            "id": "il-ts-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full bg-[#f3ede0]" },
                              "link": { "classes": "relative block aspect-square" },
                              "image": { "classes": "size-full object-cover" }
                            }
                          },
                          {
                            "id": "il-ts-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#1c2419] hover:text-[#115e59] lg:px-3 lg:pt-3 lg:text-base" } }
                          },
                          {
                            "id": "il-ts-body-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 px-2.5 pt-1 lg:px-3" },
                              "simple-price-wrap": { "classes": "flex flex-wrap items-baseline gap-x-1.5" },
                              "simple-price-sale": { "classes": "text-lg font-bold text-[#1c2419] lg:text-xl" },
                              "simple-price-regular": { "classes": "text-[13px] text-[#a29c8a] line-through" },
                              "variable-price-wrap": { "classes": "flex items-baseline gap-x-1.5" },
                              "variable-price-min": { "classes": "text-base font-bold text-[#1c2419]" },
                              "variable-price-max": { "classes": "text-base font-bold text-[#1c2419]" }
                            }
                          },
                          {
                            "id": "il-ts-body-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Order now", "icon": "", "iconSize": 16, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "px-2.5 pb-2.5 pt-2 lg:px-3 lg:pb-3" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#dc2626] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10" },
                              "button-icon": { "classes": "empty:hidden flex items-center" },
                              "button-label": { "classes": "whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-ts-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
                          "next": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
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
            "id": "il-ba-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-ba-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "il-ba-head-h",
                    "type": "heading",
                    "options": { "text": "Brands and makers", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-ba-head-t",
                    "type": "text",
                    "options": { "text": "The workshops and suppliers behind the pieces we stock.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-ba-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-ba-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14" } },
                "children": [
                  {
                    "id": "il-ba-grid-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "16",
                        "per_page": "16",
                        "hide_empty": true,
                        "order": "ASC",
                        "orderby": "name",
                        "paged": 1
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5" },
                      "loop-item": { "classes": "flex flex-col items-center gap-3 rounded-xl border border-[#eae3d3] bg-white p-5 transition-colors hover:border-[#115e59]" }
                    },
                    "children": [
                      {
                        "id": "il-ba-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex flex-col items-center gap-3 rounded-xl border border-[#eae3d3] bg-white p-5" }
                        },
                        "children": [
                          {
                            "id": "il-ba-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "size-20 rounded-full overflow-hidden bg-[#f3ede0]" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "il-ba-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#1c2419] text-center line-clamp-2" } }
                          }
                        ]
                      },
                      {
                        "id": "il-ba-grid-5",
                        "type": "termsGridPagination",
                        "options": { "tag": "div" },
                        "cssSelectors": {
                          "*": { "classes": "flex gap-3 items-center justify-center mt-10" },
                          "previous": { "classes": "bg-[#115e59] hover:bg-[#0c433f] px-4 py-2 rounded-xl text-white cursor-pointer" },
                          "next": { "classes": "bg-[#115e59] hover:bg-[#0c433f] px-4 py-2 rounded-xl text-white cursor-pointer" },
                          "previous-icon": { "classes": "" },
                          "next-icon": { "classes": "" },
                          "current": { "classes": "w-20 text-center border border-[#eae3d3] rounded-xl py-2" }
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
            "id": "il-bs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-bs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "il-bs-head-h",
                    "type": "heading",
                    "options": { "text": "Brand", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-bs-head-t",
                    "type": "text",
                    "options": { "text": "Everything we stock from this maker, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-bs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-bs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12" } },
                "children": [
                  {
                    "id": "il-bs-body-pg",
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
                      "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                    },
                    "children": [
                      {
                        "id": "il-bs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#eae3d3] bg-white" }
                        },
                        "children": [
                          {
                            "id": "il-bs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full bg-[#f3ede0]" },
                              "link": { "classes": "relative block aspect-square" },
                              "image": { "classes": "size-full object-cover" }
                            }
                          },
                          {
                            "id": "il-bs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#1c2419] hover:text-[#115e59] lg:px-3 lg:pt-3 lg:text-base" } }
                          },
                          {
                            "id": "il-bs-body-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 px-2.5 pt-1 lg:px-3" },
                              "simple-price-wrap": { "classes": "flex flex-wrap items-baseline gap-x-1.5" },
                              "simple-price-sale": { "classes": "text-lg font-bold text-[#1c2419] lg:text-xl" },
                              "simple-price-regular": { "classes": "text-[13px] text-[#a29c8a] line-through" },
                              "variable-price-wrap": { "classes": "flex items-baseline gap-x-1.5" },
                              "variable-price-min": { "classes": "text-base font-bold text-[#1c2419]" },
                              "variable-price-max": { "classes": "text-base font-bold text-[#1c2419]" }
                            }
                          },
                          {
                            "id": "il-bs-body-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Order now", "icon": "", "iconSize": 16, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "px-2.5 pb-2.5 pt-2 lg:px-3 lg:pb-3" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#dc2626] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10" },
                              "button-icon": { "classes": "empty:hidden flex items-center" },
                              "button-label": { "classes": "whitespace-nowrap" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-bs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
                          "next": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
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
            "id": "il-bl-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-bl-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "il-bl-head-h",
                    "type": "heading",
                    "options": { "text": "Notes", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-bl-head-t",
                    "type": "text",
                    "options": { "text": "Decorating ideas, care tips and new arrivals from the Islamic Life Style shop.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-bl-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-bl-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12" } },
                "children": [
                  {
                    "id": "il-bl-grid-1",
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
                      "loop-item": { "classes": "group flex flex-col gap-3 bg-white border border-[#eae3d3] rounded-xl p-3 transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "il-bl-grid-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "group flex flex-col gap-3 bg-white border border-[#eae3d3] rounded-xl p-3 transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "il-bl-grid-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "h-52 overflow-hidden rounded-xl bg-[#f3ede0]" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "il-bl-grid-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-[#a29c8a]" } }
                          },
                          {
                            "id": "il-bl-grid-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-bold text-[#1c2419] line-clamp-2 transition-colors duration-200 group-hover:text-[#115e59]" } }
                          },
                          {
                            "id": "il-bl-grid-6",
                            "type": "postExcerpt",
                            "options": {
                              "tag": "p",
                              "linkTo": "postUrl",
                              "maxWord": 22,
                              "readMoreText": "Read more",
                              "readMoreIcon": "IconArrowNarrowRight",
                              "readMoreIconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3 mt-auto" },
                              "excerpt": { "classes": "text-sm text-[#6b6656] leading-relaxed line-clamp-3" },
                              "read-more": { "classes": "flex gap-2 items-center text-sm font-bold text-[#115e59] hover:text-[#0c433f]" },
                              "read-more-icon": { "classes": "" },
                              "read-more-label": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "il-bl-grid-7",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
                          "next": { "classes": "px-4 py-2 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#6b6656] cursor-pointer hover:border-[#115e59] hover:text-[#115e59]" },
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
        "title": "Blog Single",
        "type": "blog_single",
        "content": [
          {
            "id": "il-bp-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-bp-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pt-12 pb-8 flex flex-col gap-5" } },
                "children": [
                  {
                    "id": "il-bp-title",
                    "type": "postTitle",
                    "options": { "linkTo": "", "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2419] leading-tight" } }
                  },
                  {
                    "id": "il-bp-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#a29c8a]" } },
                    "children": [
                      {
                        "id": "il-bp-author",
                        "type": "postAuthor",
                        "options": { "linkTo": "", "classes": "" },
                        "cssSelectors": { "*": { "classes": "font-semibold text-[#6b6656]" } }
                      },
                      {
                        "id": "il-bp-date",
                        "type": "postDate",
                        "options": { "linkTo": "", "dateFormat": "MMMM DD, YYYY" },
                        "cssSelectors": { "*": { "classes": "text-[#a29c8a]" } }
                      }
                    ]
                  },
                  {
                    "id": "il-bp-thumb",
                    "type": "postThumbnail",
                    "options": { "linkTo": "postUrl" },
                    "cssSelectors": {
                      "*": { "classes": "w-full overflow-hidden rounded-xl" },
                      "link": { "classes": "block" },
                      "image": { "classes": "w-full aspect-video object-cover bg-[#f3ede0]" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-bp-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-bp-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pb-14" } },
                "children": [
                  {
                    "id": "il-bp-content",
                    "type": "postContent",
                    "options": { "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-base text-[#1c2419] leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#1c2419] [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-4 [&_a]:text-[#115e59] [&_a]:underline [&_img]:rounded-xl [&_img]:my-6" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-bp-comments",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-y border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-bp-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 py-8 lg:py-14 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "il-bp-comments-h",
                    "type": "heading",
                    "options": { "text": "Comments", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-bp-rev",
                    "type": "commentsGrid",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "w-full" },
                      "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                      "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl border border-[#eae3d3] bg-white" }
                    },
                    "children": [
                      {
                        "id": "il-bp-rev-loop",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                          "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-xl border border-[#eae3d3] bg-white" }
                        },
                        "children": [
                          {
                            "id": "il-bp-rev-avatar",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-10 h-10 rounded-full object-cover bg-[#f3ede0]" }
                            }
                          },
                          {
                            "id": "il-bp-rev-author",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#1c2419]" } }
                          },
                          {
                            "id": "il-bp-rev-body",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] leading-relaxed" } }
                          }
                        ]
                      },
                      {
                        "id": "il-bp-form",
                        "type": "commentsForm",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "mt-6 p-5 rounded-xl border border-[#eae3d3] bg-white" } }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "il-bp-more",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-bp-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "il-bp-more-h",
                    "type": "heading",
                    "options": { "text": "More notes", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-bp-more-pg-1",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": ["post"],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "4",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
                      "loop-item": { "classes": "group flex gap-4 items-center bg-white border border-[#eae3d3] rounded-xl p-3 transition-colors duration-200 hover:border-[#115e59]" }
                    },
                    "children": [
                      {
                        "id": "il-bp-more-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "group flex gap-4 items-center bg-white border border-[#eae3d3] rounded-xl p-3 transition-colors duration-200 hover:border-[#115e59]" }
                        },
                        "children": [
                          {
                            "id": "il-bp-more-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-20 h-20 shrink-0 overflow-hidden rounded-xl bg-[#f3ede0]" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "il-bp-more-pg-4",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#1c2419] line-clamp-2 transition-colors duration-200 group-hover:text-[#115e59]" } }
                          },
                          {
                            "id": "il-bp-more-pg-5",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs text-[#a29c8a]" } }
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
            "id": "il-ac-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee] border-b border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-ac-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12" } },
                "children": [
                  {
                    "id": "il-ac-head-h",
                    "type": "heading",
                    "options": { "text": "My account", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-ac-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-ac-ca-1",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-12" } },
                "children": [
                  {
                    "id": "il-ac-ca-2",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "il-ac-ca-3",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-6" },
                          "grid-item": { "classes": "" }
                        },
                        "children": [
                          {
                            "id": "il-ac-ca-4",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-xl border border-[#eae3d3] bg-white p-6" } },
                            "children": [
                              {
                                "id": "il-ac-ca-5",
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
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#1c2419] placeholder:text-[#a29c8a] focus:outline-none focus:border-[#115e59] focus:ring-2 focus:ring-[#e7eeed]" },
                                  "input-username": { "classes": "" },
                                  "input-phone": { "classes": "" },
                                  "input-password": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-semibold text-[#6b6656]" },
                                  "label-email": { "classes": "text-xs font-semibold text-[#6b6656]" },
                                  "label-phone": { "classes": "" },
                                  "label-password": { "classes": "" },
                                  "submit": { "classes": "w-full py-2.5 rounded-xl bg-[#115e59] text-sm font-bold text-white text-center cursor-pointer hover:bg-[#0c433f] transition-colors" },
                                  "have-account": { "classes": "text-xs text-[#6b6656] text-center" }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "il-ac-ca-6",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-xl border border-[#eae3d3] bg-white p-6" } },
                            "children": [
                              {
                                "id": "il-ac-ca-7",
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
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-xl border border-[#eae3d3] bg-white text-sm text-[#1c2419] placeholder:text-[#a29c8a] focus:outline-none focus:border-[#115e59] focus:ring-2 focus:ring-[#e7eeed]" },
                                  "input-username": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-semibold text-[#6b6656]" },
                                  "label-email": { "classes": "text-xs font-semibold text-[#6b6656]" },
                                  "submit": { "classes": "w-full py-2.5 rounded-xl bg-[#115e59] text-sm font-bold text-white text-center cursor-pointer hover:bg-[#0c433f] transition-colors" },
                                  "forget-password": { "classes": "text-xs text-[#6b6656] text-center" }
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
                    "id": "il-ac-ca-8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full rounded-xl border border-[#eae3d3] bg-white p-5" } },
                    "children": [
                      {
                        "id": "il-ac-ca-9",
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
                          "navs-items": { "classes": "flex gap-6 overflow-x-auto border-b border-[#eae3d3]" },
                          "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-1 py-3 text-sm font-medium text-[#6b6656] border-b-2 border-transparent whitespace-nowrap cursor-pointer hover:text-[#1c2419]" },
                          "nav-item-active": { "classes": "text-[#115e59]! border-[#115e59]!" },
                          "nav-item-label": { "classes": "" },
                          "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                          "nav-item-content": { "classes": "pt-6" }
                        },
                        "children": [
                          {
                            "id": "il-ac-ca-10",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "il-ac-ca-11",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "il-ac-ca-12",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "il-ac-ca-13",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "il-ac-ca-14",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "il-ac-ca-15",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "il-ac-ca-16",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "il-ac-ca-17",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "il-ac-ca-18",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "il-ac-ca-19",
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
            "id": "il-ty-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#faf6ee]" } },
            "children": [
              {
                "id": "il-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "il-ty-icon",
                    "type": "icon",
                    "options": { "iconName": "IconCircleCheckFilled", "size": "56" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-[#115e59]" } }
                  },
                  {
                    "id": "il-ty-h",
                    "type": "heading",
                    "options": { "text": "Jazakallahu khairan for your order", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-ty-t",
                    "type": "text",
                    "options": {
                      "text": "We have your order and will call to confirm the address before the parcel leaves Rangpur. Pay the courier in cash when it arrives.",
                      "tag": "p"
                    },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-lg leading-relaxed" } }
                  },
                  {
                    "id": "il-ty-steps-1",
                    "type": "list",
                    "options": {
                      "tag": "ol",
                      "icon": "",
                      "iconSize": 16,
                      "items": [
                        {
                          "text": "We call to confirm your order and address",
                          "icon": ""
                        },
                        {
                          "text": "Your piece is checked and wrapped by hand",
                          "icon": ""
                        },
                        {
                          "text": "The courier collects it from our Rangpur shop",
                          "icon": ""
                        },
                        {
                          "text": "You pay cash at the door when it reaches you",
                          "icon": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "ml-6 flex flex-col gap-2.5 max-w-2xl text-left" },
                      "li": { "classes": "list-decimal pl-1 marker:font-bold marker:text-[#115e59]" },
                      "icon": { "classes": "empty:hidden" },
                      "text": { "classes": "text-sm text-[#1c2419] leading-relaxed" }
                    }
                  },
                  {
                    "id": "il-ty-b",
                    "type": "button",
                    "options": { "text": "Keep shopping", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#115e59] text-white cursor-pointer hover:bg-[#0c433f] transition-colors w-fit mt-2" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-bold" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "il-ty-trust",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-[#eae3d3]" } },
            "children": [
              {
                "id": "il-ty-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8" } },
                "children": [
                  {
                    "id": "il-ty-fb-1",
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
                          "title": "Delivery all over Bangladesh",
                          "description": "Dispatched from Rangpur.",
                          "icon": "IconTruck",
                          "iconSize": ""
                        },
                        {
                          "title": "We call before dispatch",
                          "description": "To confirm your address.",
                          "icon": "IconPhoneCall",
                          "iconSize": ""
                        },
                        {
                          "title": "Damaged in transit?",
                          "description": "Send a photo and we replace it.",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 rounded-xl border border-[#eae3d3] bg-white px-5 py-3" },
                      "loop-item": { "classes": "flex items-center gap-2" },
                      "title": { "classes": "text-xs font-semibold text-[#1c2419] whitespace-nowrap" },
                      "description": { "classes": "" },
                      "icon": { "classes": "text-[#115e59] flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "il-ty-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconCash", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "il-ty-fb-3",
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
        "title": "404",
        "type": "404",
        "content": [
          {
            "id": "il-nf-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "il-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "il-nf-icon",
                    "type": "icon",
                    "options": { "iconName": "IconSearchOff", "size": "48" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-[#a29c8a]" } }
                  },
                  {
                    "id": "il-nf-h",
                    "type": "heading",
                    "options": { "text": "We could not find that page", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2419]" } }
                  },
                  {
                    "id": "il-nf-t",
                    "type": "text",
                    "options": { "text": "The link may be broken or the piece may have sold out. Try all products, or head back to the homepage.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#6b6656] max-w-md leading-relaxed" } }
                  },
                  {
                    "id": "il-nf-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-2" } },
                    "children": [
                      {
                        "id": "il-nf-b1",
                        "type": "button",
                        "options": { "text": "Back to home", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "IconHome", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#115e59] text-white cursor-pointer hover:bg-[#0c433f] transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-bold" }
                        }
                      },
                      {
                        "id": "il-nf-b2",
                        "type": "button",
                        "options": { "text": "All products", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#eae3d3] bg-white text-[#1c2419] cursor-pointer hover:border-[#115e59] hover:text-[#115e59] transition-colors w-fit" },
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
    ]
  },

]
export default template;
