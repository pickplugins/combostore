/**
 * Template: Ghorer Bazar.
 *
 * Built from the rendered homepage of https://ghorerbazar.com -- a Dhaka
 * natural-foods shop: oil and ghee, honey, dates, spices, rice, lentils, nuts.
 * Same shape as the other files here: one template object, `pages` holding one
 * entry per page type, each `content` an ARRAY of builder blocks. The API stores
 * a page's content as a JSON STRING (Templates.jsx calls `isJsonString` and then
 * `JSON.parse`), so whatever applies this template must
 * `JSON.stringify(page.content)` per page on the way out.
 *
 * "Header" and "Footer" are template parts, not pages: they carry type 'header'
 * and 'footer', the two part types PanelsLeft.jsx passes to TemplateParts.jsx,
 * and each holds exactly one siteHeader / siteFooter block. They apply once for
 * the whole site, so no page below repeats them.
 *
 * WHERE THE DESIGN CAME FROM
 *
 * The palette is the shop's own, read from the custom-property overrides in its
 * page head -- not from the theme's default stylesheets, which still carry the
 * vendor's unused green and pink:
 *
 *   --primary-color     #f48721  orange. Every button, link, price accent and
 *                                active state on the site.
 *   --secondary-color   #041f1e  near-black green, used for the dark bars.
 *   --title-color       #222831  headings.
 *   --paragraph-color   #252a34  body copy.
 *   --border-color      #cccccc  with #e4e7ec as the lighter hairline.
 *   --warning / --alert #f8b400 / #ff1818  rating stars, and the save badge.
 *
 * Tailwind has no stop for any of them, so they are arbitrary values -- the same
 * thing Organic.js does for the WhatsApp green. #d9731a is the one colour not
 * taken from the site: a darker orange for button hovers.
 *
 * The homepage order and its headings are the site's, section for section:
 *
 *   1. a five-slide banner slider
 *   2. Featured Categories      10 round tiles
 *   3. Top Selling Products     a four-up row
 *   4. Our Brands               five logos, "See all"
 *   5. All Natural Honey        five-per-view product slider, "View all items"
 *   6. Premium Dates            the same slider again
 *   7. Cooking Essentials       and again
 *   8. Organic Certified        and again
 *   9. Just For You             a full grid, "View All Products"
 *  10. customer reviews         five cards
 *
 * Each of those headings sits in a `section-head` row with its "View all items"
 * link pushed right, which is why every one below is a columns block rather than
 * a bare heading. The product card follows their card-style-6: two badges over
 * the image, name, new price beside a struck-out old price, and a round cart
 * button on the price row. Their grid is five across on desktop, three on
 * tablet, two on phones, and the four category sliders carry exactly that in
 * their swiper config, so the postSlider blocks below use the same breakpoints.
 *
 * The ten category names, the brand row and the footer's widget set (Information
 * and Consumer Policy, with its happy-return and refund links) are the site's.
 * Every line of body copy here is written for this template rather than lifted
 * from the site, the reviews are marked as placeholders, and the contact details
 * stay as placeholders rather than the shop's real address and hotline.
 *
 * Three things to fill in before this goes live: the logo (header and footer use
 * a placehold.co stand-in), the hotline, email and address, the WhatsApp number,
 * left empty on purpose so the button cannot link somewhere wrong, and the five
 * banner images. The cart block sets `editMode: false`; the SiteHeader.js
 * presets ship `true`, which is an authoring convenience that leaves the drawer
 * open on load.
 *
 * Renderer quirks these blocks are written around, all documented at length in
 * element-layouts/ and worth reading before changing a class string:
 *
 *   - postGrid / postSlider / termsGrid / relatedProducts take `queryPrams`
 *     (that spelling); PostGrid.jsx reads it and ignores the `queryParams` the
 *     definition declares. `loop-items` / `loop-item` are mirrored onto the
 *     postLoop child because PostLoop.jsx:18 takes them from the parent's
 *     context.
 *   - Buttons set `linkTo: "custom"` and both `scheme` and `url`: Button.jsx
 *     only renders a <Link> for 'custom', and builds the href as
 *     `${scheme}${url}`, so an unset scheme prints the string "undefined".
 *   - addToCart's quantity flag is `hideQuanity`, the misspelling the renderer
 *     and the options panel agree on, and `iconSize` must be set explicitly
 *     because AddToCart.jsx's `?? 20` default is dead code. The card buttons are
 *     icon-only, which is done by hiding `button-label` rather than by emptying
 *     `buttonText`, so the button keeps an accessible name.
 *   - productDiscount renders a bare rounded percentage plus `options.label`,
 *     and only for a product that has a sale price -- it outputs nothing in the
 *     canvas, so select it from the layer tree rather than by clicking. The card
 *     badges are absolute, which works because each `loop-item` is `relative`.
 *   - The shop and taxonomy headers are a heading plus text, not archiveTitle /
 *     archiveDescription / archiveCount or termTitle / termCount: those
 *     renderers either print `options.prefix` as raw HTML without reading the
 *     archive, or read a context only a terms loop provides, so outside one they
 *     come out empty.
 *   - The review row is a featurebox, not commentsGrid: comment blocks read a
 *     post context that only a comments loop provides, so a static set of quotes
 *     has to live in featurebox `items`.
 *   - On the single pages, postTitle / postDate / postAuthor / postContent read
 *     PostContext, which only PostLoop, PostSlider, Sidebar, SiteHeader and
 *     SiteFooter provide, so in the canvas they show their placeholder strings
 *     and fill in at runtime.
 *
 * Two things the site has and this does not: the mobile bottom navigation bar
 * and the app-download badges, neither of which has a block to carry it.
 */

var template = [
  {

    "name": "Ghorer Bazar",
    "description": "Natural-foods grocery storefront: orange on near-black, a category-led header, round category tiles, four product sliders and a five-across card grid.",
    "thumbnail": "/templates/ghorer-bazar.svg",
    "meta": "",
    "pages": [

      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "gb-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white border-b border-[#e4e7ec] sticky top-0 z-40" } },
            "children": [
              {
                "id": "gb-hdr-strip",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full bg-[#041f1e]" } },
                "children": [
                  {
                    "id": "gb-hdr-strip-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hdr-strip-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-2" } },
                        "children": [
                          {
                            "id": "gb-hdr-strip-i",
                            "type": "icon",
                            "options": { "iconName": "IconTruckDelivery", "size": "15" },
                            "cssSelectors": { "*": { "classes": "w-fit flex items-center text-[#f48721] shrink-0" } },
                            "children": []
                          },
                          {
                            "id": "gb-hdr-strip-t",
                            "type": "text",
                            "options": { "text": "Safe, reliable food delivered to every home", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs font-medium tracking-wide text-white/90" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hdr-strip-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "hidden sm:flex items-center gap-5" } },
                        "children": [
                          {
                            "id": "gb-hdr-strip-track",
                            "type": "button",
                            "options": { "text": "Track order", "linkTo": "custom", "scheme": "", "url": "/account", "target": "", "icon": "IconPackage", "iconSize": 15 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 text-xs font-medium text-white/80 cursor-pointer hover:text-white" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          },
                          {
                            "id": "gb-hdr-strip-hot",
                            "type": "button",
                            "options": { "text": "01XXXXXXXXX", "linkTo": "custom", "scheme": "tel:", "url": "01XXXXXXXXX", "target": "", "icon": "IconHeadset", "iconSize": 15 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-2 text-xs font-bold text-white cursor-pointer hover:text-[#f48721]" },
                              "icon": { "classes": "flex items-center shrink-0 text-[#f48721]" },
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
                "id": "gb-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto px-4 py-4" } },
                "children": [
                  {
                    "id": "gb-hdr-cols",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-center gap-6 flex-wrap justify-between" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hdr-col-logo",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hdr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Ghorer Bazar", "src": "https://placehold.co/200x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "h-12 w-auto object-contain" },
                              "text": { "classes": "text-xl font-extrabold tracking-tight text-[#222831]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-hdr-col-search",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "order-3 w-full lg:order-none lg:flex-1 lg:max-w-2xl" } },
                        "children": [
                          {
                            "id": "gb-hdr-search",
                            "type": "quickSearch",
                            "options": { "placeholder": "Search for oil, honey, dates, spices", "iconPosition": "", "icon": "IconSearch" },
                            "cssSelectors": {
                              "*": { "classes": "w-full rounded-md border-2 border-[#f48721] bg-white px-4 py-2" },
                              "input-search": { "classes": "w-full px-2 bg-transparent border-0 shadow-none! outline-none text-[15px] text-[#252a34] placeholder:text-[#767a7a]" },
                              "input-wrapper": { "classes": "flex flex-nowrap gap-2 items-center" },
                              "icon": { "classes": "text-[#f48721] shrink-0" },
                              "popover": { "classes": "bg-white shadow-xl rounded-md border border-[#e4e7ec]" },
                              "reset": { "classes": "text-[#ff1818] text-sm cursor-pointer" },
                              "categories": { "classes": "" },
                              "brands": { "classes": "" },
                              "items": { "classes": "divide-y divide-[#e4e7ec]" },
                              "item": { "classes": "flex gap-3 text-sm items-center p-2 hover:bg-[#fdf0e4]" },
                              "item-title": { "classes": "" },
                              "item-image": { "classes": "object-cover w-14 h-14 rounded-md" },
                              "pagination": { "classes": "flex items-center justify-center gap-3 my-3" },
                              "page-item": { "classes": "border border-solid border-[#e4e7ec] shadow-none! px-2 py-1 rounded-md cursor-pointer" },
                              "page-count": { "classes": "border border-solid border-[#e4e7ec] shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-hdr-col-actions",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-5 ml-auto" } },
                        "children": [
                          {
                            "id": "gb-hdr-account",
                            "type": "button",
                            "options": { "text": "Account", "linkTo": "custom", "scheme": "", "url": "/account", "target": "", "icon": "IconUser", "iconSize": 22 },
                            "cssSelectors": {
                              "*": { "classes": "hidden lg:inline-flex flex-col items-center gap-1 text-[#222831] hover:text-[#f48721] cursor-pointer" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-[11px] font-medium" }
                            }
                          },
                          {
                            "id": "gb-hdr-cart",
                            "type": "cart",
                            "options": { "buttonIcon": "IconShoppingCart", "editMode": false },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "button": { "classes": "flex items-center gap-2.5 rounded-md bg-[#f48721] px-4 py-2.5 text-sm font-bold text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                              "button-quantity": { "classes": "font-bold" },
                              "button-icon": { "classes": "flex items-center shrink-0" },
                              "popover": { "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto" },
                              "cart-header": { "classes": "flex justify-between items-center bg-[#041f1e] py-3 px-4 text-white" },
                              "cart-total-items": { "classes": "font-semibold" },
                              "cart-close": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-md text-sm" },
                              "cart-reset": { "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-md text-sm" },
                              "go-to-checkout": { "classes": "text-white bg-[#f48721] hover:bg-[#d9731a] px-4 py-2 rounded-md cursor-pointer" },
                              "coupon-input": { "classes": "w-28 border! border-solid border-[#e4e7ec] shadow-none! text-center rounded-md" },
                              "coupon-apply-button": { "classes": "text-white bg-[#041f1e] px-3 py-2 rounded-md cursor-pointer" },
                              "back-to-cart": { "classes": "text-sm text-[#f48721] cursor-pointer" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "gb-hdr-nav",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full border-t border-[#e4e7ec] hidden lg:block" } },
                "children": [
                  {
                    "id": "gb-hdr-nav-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto px-4" } },
                    "children": [
                      {
                        "id": "gb-hdr-menu",
                        "type": "menu",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "menu": { "classes": "flex h-12 items-center gap-7 text-[13px] font-semibold uppercase tracking-wide text-[#222831]" },
                          "menu-item": { "classes": "" },
                          "sub-menu": { "classes": "rounded-md border border-[#e4e7ec] bg-white shadow-lg py-2 min-w-56 normal-case" },
                          "menu-link": { "classes": "hover:text-[#f48721] transition-colors py-1 whitespace-nowrap" },
                          "link-label": { "classes": "" },
                          "icon": { "classes": "" }
                        },
                        "children": [
                          { "id": "gb-hdr-mi-1", "type": "menuItem", "options": { "label": "Oil & Ghee", "url": "/categories/oil-ghee" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          {
                            "id": "gb-hdr-mi-2",
                            "type": "menuItem",
                            "options": { "label": "Honey", "url": "/categories/honey" },
                            "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" }, "sub-menu": { "classes": "" } },
                            "children": [
                              { "id": "gb-hdr-mi-2-1", "type": "menuItem", "options": { "label": "Sundarban honey", "url": "/categories/sundarban-honey" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-medium normal-case hover:bg-[#fdf0e4] hover:text-[#f48721]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "gb-hdr-mi-2-2", "type": "menuItem", "options": { "label": "Sidr honey", "url": "/categories/sidr-honey" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-medium normal-case hover:bg-[#fdf0e4] hover:text-[#f48721]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "gb-hdr-mi-2-3", "type": "menuItem", "options": { "label": "Black seed honey", "url": "/categories/black-seed-honey" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-medium normal-case hover:bg-[#fdf0e4] hover:text-[#f48721]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "gb-hdr-mi-2-4", "type": "menuItem", "options": { "label": "Honeycomb", "url": "/categories/honeycomb" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-medium normal-case hover:bg-[#fdf0e4] hover:text-[#f48721]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                            ]
                          },
                          {
                            "id": "gb-hdr-mi-3",
                            "type": "menuItem",
                            "options": { "label": "Dates", "url": "/categories/dates" },
                            "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" }, "sub-menu": { "classes": "" } },
                            "children": [
                              { "id": "gb-hdr-mi-3-1", "type": "menuItem", "options": { "label": "Ajwa", "url": "/categories/ajwa" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-medium normal-case hover:bg-[#fdf0e4] hover:text-[#f48721]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "gb-hdr-mi-3-2", "type": "menuItem", "options": { "label": "Sukkari", "url": "/categories/sukkari" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-medium normal-case hover:bg-[#fdf0e4] hover:text-[#f48721]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "gb-hdr-mi-3-3", "type": "menuItem", "options": { "label": "Medjool", "url": "/categories/medjool" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-medium normal-case hover:bg-[#fdf0e4] hover:text-[#f48721]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                              { "id": "gb-hdr-mi-3-4", "type": "menuItem", "options": { "label": "Mabroom", "url": "/categories/mabroom" }, "cssSelectors": { "*": { "classes": "px-4 py-2 text-sm font-medium normal-case hover:bg-[#fdf0e4] hover:text-[#f48721]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
                            ]
                          },
                          { "id": "gb-hdr-mi-4", "type": "menuItem", "options": { "label": "Spices", "url": "/categories/spices" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "gb-hdr-mi-5", "type": "menuItem", "options": { "label": "Nuts & Seeds", "url": "/categories/nuts-seeds" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "gb-hdr-mi-6", "type": "menuItem", "options": { "label": "Rice", "url": "/categories/rice" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "gb-hdr-mi-7", "type": "menuItem", "options": { "label": "Flours & Lentils", "url": "/categories/flours-lentils" }, "cssSelectors": { "*": { "classes": "" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] },
                          { "id": "gb-hdr-mi-8", "type": "menuItem", "options": { "label": "Offer Zone", "url": "/categories/offer-zone" }, "cssSelectors": { "*": { "classes": "text-[#ff1818]" }, "label": { "classes": "" }, "link": { "classes": "" }, "icon": { "classes": "" } }, "children": [] }
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
            "id": "gb-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#041f1e]" } },
            "children": [
              {
                "id": "gb-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto px-4 py-14" } },
                "children": [
                  {
                    "id": "gb-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "gb-ftr-logo",
                            "type": "logo",
                            "options": { "logoType": "image", "logoText": "Ghorer Bazar", "src": "https://placehold.co/200x64?text=Logo", "link": "/" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "inline-block" },
                              "img": { "classes": "h-11 w-auto object-contain" },
                              "text": { "classes": "text-lg font-extrabold tracking-tight text-white" }
                            }
                          },
                          {
                            "id": "gb-ftr-tagline",
                            "type": "text",
                            "options": { "text": "An online grocery built around one idea: safe, honest food for every home. Sourced direct, packed unblended, delivered nationwide.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-sm text-white/70 leading-relaxed max-w-xs" } }
                          },
                          {
                            "id": "gb-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": { "icon": "IconHeadset", "label": "Hotline", "value": "01XXXXXXXXX" },
                              "email": { "icon": "IconMail", "label": "Email", "value": "support@example.com" },
                              "location": { "icon": "IconMapPin", "label": "Location", "value": "Add your shop address here" },
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 flex-col text-sm text-white/70" },
                              "item": { "classes": "flex gap-2 items-start" },
                              "link": { "classes": "flex gap-2 items-center hover:text-[#f48721] transition-colors" },
                              "phone-link": { "classes": "" },
                              "email-link": { "classes": "" },
                              "icon": { "classes": "text-[#f48721] shrink-0" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-ftr-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-ftr-ll-info",
                            "type": "linkList",
                            "options": {
                              "headerText": "Information",
                              "tag": "ul",
                              "items": [
                                { "text": "About us", "icon": "", "slug": "/about" },
                                { "text": "Contact us", "icon": "", "slug": "/contact" },
                                { "text": "Company information", "icon": "", "slug": "/company" },
                                { "text": "Our stories", "icon": "", "slug": "/stories" },
                                { "text": "Terms and conditions", "icon": "", "slug": "/terms" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-bold text-white" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-[#f48721] transition-colors" },
                              "icon": { "classes": "text-white/40" },
                              "text": { "classes": "text-sm text-white/70" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-ftr-gi-policy",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-ftr-ll-policy",
                            "type": "linkList",
                            "options": {
                              "headerText": "Consumer policy",
                              "tag": "ul",
                              "items": [
                                { "text": "Happy return", "icon": "", "slug": "/returns" },
                                { "text": "Refund policy", "icon": "", "slug": "/refund-policy" },
                                { "text": "Exchange", "icon": "", "slug": "/exchange" },
                                { "text": "Cancellation", "icon": "", "slug": "/cancellation" },
                                { "text": "Privacy policy", "icon": "", "slug": "/privacy-policy" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-bold text-white" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-[#f48721] transition-colors" },
                              "icon": { "classes": "text-white/40" },
                              "text": { "classes": "text-sm text-white/70" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex flex-col gap-5" } },
                        "children": [
                          {
                            "id": "gb-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "items": [
                                { "text": "Oil & Ghee", "icon": "", "slug": "/categories/oil-ghee" },
                                { "text": "Honey", "icon": "", "slug": "/categories/honey" },
                                { "text": "Dates", "icon": "", "slug": "/categories/dates" },
                                { "text": "Spices", "icon": "", "slug": "/categories/spices" },
                                { "text": "Offer Zone", "icon": "", "slug": "/categories/offer-zone" }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-3" },
                              "header-text": { "classes": "text-sm font-bold text-white" },
                              "ul": { "classes": "flex flex-col gap-2" },
                              "li": { "classes": "list-none" },
                              "link": { "classes": "flex items-center gap-2 hover:text-[#f48721] transition-colors" },
                              "icon": { "classes": "text-white/40" },
                              "text": { "classes": "text-sm text-white/70" }
                            }
                          },
                          {
                            "id": "gb-ftr-wa",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Order on WhatsApp",
                              "phone": "",
                              "message": "Hi, I would like to order from Ghorer Bazar.",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-md bg-[#1da851] text-white cursor-pointer hover:bg-[#178c44] transition-colors" },
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
                "id": "gb-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "border-t border-white/10" } },
                "children": [
                  {
                    "id": "gb-ftr-bottom-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "max-w-6xl mx-auto px-4 py-5 flex items-center justify-between gap-4 flex-wrap" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-ftr-copy",
                            "type": "text",
                            "options": { "text": "(c) 2026 Ghorer Bazar. All rights reserved.", "tag": "p" },
                            "cssSelectors": { "*": { "classes": "text-xs text-white/50" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-ftr-pay-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "flex items-center gap-3" } },
                        "children": [
                          {
                            "id": "gb-ftr-pay",
                            "type": "image",
                            "options": { "src": "https://placehold.co/240x32?text=bKash+Nagad+Cards", "altText": "Accepted payment methods", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "" },
                              "img": { "classes": "h-7 w-auto object-contain opacity-90" }
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
            "id": "gb-hm-hero",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white" } },
            "children": [
              {
                "id": "gb-hm-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 pt-6 flex flex-col gap-4" } },
                "children": [
                  {
                    "id": "gb-hm-hero-banner",
                    "type": "image",
                    "options": { "src": "https://placehold.co/1600x600?text=Campaign+banner", "altText": "Campaign banner", "width": "", "height": "" },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "link": { "classes": "block" },
                      "img": { "classes": "w-full rounded-lg object-cover aspect-[8/3] bg-[#f5f5f5]" }
                    }
                  },
                  {
                    "id": "gb-hm-hero-row",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-2 lg:grid-cols-4 gap-4" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-hero-gi-1",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-hero-img-1",
                            "type": "image",
                            "options": { "src": "https://placehold.co/600x400?text=Offer", "altText": "Offer banner", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "block" },
                              "img": { "classes": "w-full rounded-lg object-cover aspect-[3/2] bg-[#f5f5f5]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-hero-gi-2",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-hero-img-2",
                            "type": "image",
                            "options": { "src": "https://placehold.co/600x400?text=Offer", "altText": "Offer banner", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "block" },
                              "img": { "classes": "w-full rounded-lg object-cover aspect-[3/2] bg-[#f5f5f5]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-hero-gi-3",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-hero-img-3",
                            "type": "image",
                            "options": { "src": "https://placehold.co/600x400?text=Offer", "altText": "Offer banner", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "block" },
                              "img": { "classes": "w-full rounded-lg object-cover aspect-[3/2] bg-[#f5f5f5]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-hero-gi-4",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-hero-img-4",
                            "type": "image",
                            "options": { "src": "https://placehold.co/600x400?text=Offer", "altText": "Offer banner", "width": "", "height": "" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "link": { "classes": "block" },
                              "img": { "classes": "w-full rounded-lg object-cover aspect-[3/2] bg-[#f5f5f5]" }
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
            "id": "gb-hm-cat",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-hm-cat-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-hm-cat-head",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-end justify-between gap-4 border-b border-[#e4e7ec] pb-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-cat-head-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-cat-h",
                            "type": "heading",
                            "options": { "text": "Featured Categories", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-cat-head-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hm-cat-head-link",
                            "type": "button",
                            "options": { "text": "View all", "linkTo": "custom", "scheme": "", "url": "/categories", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-[#f48721] cursor-pointer hover:text-[#d9731a]" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gb-hm-cat-tg-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "10",
                        "per_page": "10",
                        "hide_empty": true,
                        "order": "ASC",
                        "orderby": "name"
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5" },
                      "loop-item": { "classes": "group flex flex-col items-center gap-3 rounded-lg border border-[#e4e7ec] bg-white p-4 text-center transition-colors hover:border-[#f48721]" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-cat-tg-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group flex flex-col items-center gap-3 rounded-lg border border-[#e4e7ec] bg-white p-4 text-center transition-colors hover:border-[#f48721]" }
                        },
                        "children": [
                          {
                            "id": "gb-hm-cat-tg-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "size-20 rounded-full overflow-hidden bg-[#f5f5f5]" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "gb-hm-cat-tg-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831] group-hover:text-[#f48721] transition-colors line-clamp-2" } }
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
            "id": "gb-hm-top",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-y border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-hm-top-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-hm-top-head",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-end justify-between gap-4 border-b border-[#e4e7ec] pb-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-top-head-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-top-h",
                            "type": "heading",
                            "options": { "text": "Top Selling Products", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-top-head-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hm-top-head-link",
                            "type": "button",
                            "options": { "text": "View all items", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-[#f48721] cursor-pointer hover:text-[#d9731a]" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gb-hm-top-pg",
                    "type": "postGrid",
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
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                      "loop-item": { "classes": "group flex items-center gap-3 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-top-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
                          "loop-item": { "classes": "group flex items-center gap-3 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" }
                        },
                        "children": [
                          {
                            "id": "gb-hm-top-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "size-20 shrink-0 overflow-hidden rounded-md bg-[#f5f5f5]" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-hm-top-c-title",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-hm-top-c-rate",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-[#f8b400] [&_svg]:size-3.5" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "hidden" },
                              "total-reviews": { "classes": "text-xs text-[#767a7a]" }
                            }
                          },
                          {
                            "id": "gb-hm-top-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-[#767a7a]" },
                              "simple-price-sale": { "classes": "text-base font-bold text-[#f48721]" },
                              "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                              "variable-price-max": { "classes": "text-sm text-[#252a34]" }
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
            "id": "gb-hm-brands",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-hm-brands-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-hm-brands-head",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-end justify-between gap-4 border-b border-[#e4e7ec] pb-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-brands-head-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-brands-h",
                            "type": "heading",
                            "options": { "text": "Our Brands", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-brands-head-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hm-brands-head-link",
                            "type": "button",
                            "options": { "text": "See all", "linkTo": "custom", "scheme": "", "url": "/brands", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-[#f48721] cursor-pointer hover:text-[#d9731a]" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gb-hm-brands-tg-1",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "5",
                        "per_page": "5",
                        "hide_empty": true,
                        "order": "ASC",
                        "orderby": "name"
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" },
                      "loop-item": { "classes": "flex items-center justify-center rounded-lg border border-[#e4e7ec] bg-white p-5 transition-colors hover:border-[#f48721]" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-brands-tg-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center justify-center rounded-lg border border-[#e4e7ec] bg-white p-5" }
                        },
                        "children": [
                          {
                            "id": "gb-hm-brands-tg-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "h-14 w-full" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "object-contain w-full h-full" }
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
            "id": "gb-hm-honey",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-y border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-hm-honey-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-hm-honey-head",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-end justify-between gap-4 border-b border-[#e4e7ec] pb-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-honey-head-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-honey-h",
                            "type": "heading",
                            "options": { "text": "All Natural Honey", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-honey-head-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hm-honey-head-link",
                            "type": "button",
                            "options": { "text": "View all items", "linkTo": "custom", "scheme": "", "url": "/categories/honey", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-[#f48721] cursor-pointer hover:text-[#d9731a]" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gb-hm-honey-ps",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": ["product"],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": []
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1.25em",
                        "arrows": 1,
                        "pagination": 0,
                        "drag": 1,
                        "speed": 400,
                        "mediaQuery": "max",
                        "breakpoints": { "1024": { "perPage": 3 }, "640": { "perPage": 2 } }
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "" },
                      "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" },
                      "arrows-wrap": { "classes": "" },
                      "arrow-item": { "classes": "bg-white shadow-md rounded-full" },
                      "arrow-prev": { "classes": "" },
                      "arrow-next": { "classes": "" },
                      "pagination": { "classes": "" },
                      "dot": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-honey-ps-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" }
                        },
                        "children": [
                          {
                            "id": "gb-hm-honey-c-save",
                            "type": "productDiscount",
                            "options": { "label": "off", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute left-5 top-5 z-10 flex items-baseline gap-0.5 rounded bg-[#ff1818] px-2 py-0.5 text-white" },
                              "discount": { "classes": "text-[11px] font-bold" },
                              "label": { "classes": "text-[9px] font-semibold" }
                            }
                          },
                          {
                            "id": "gb-hm-honey-c-badge",
                            "type": "productBadge",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute right-5 top-5 z-10" },
                              "label": { "classes": "hidden" },
                              "items": { "classes": "flex flex-col items-end gap-1" },
                              "item": { "classes": "rounded bg-[#041f1e] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "hidden" }
                            }
                          },
                          {
                            "id": "gb-hm-honey-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-hm-honey-c-title",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#252a34] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-hm-honey-c-row",
                            "type": "columns",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex items-center justify-between gap-2" },
                              "column": { "classes": "" }
                            },
                            "children": [
                              {
                                "id": "gb-hm-honey-c-row-c1",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "min-w-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-honey-c-price",
                                    "type": "productPrice",
                                    "options": { "separator": "", "variablePriceViewType": "inline" },
                                    "cssSelectors": {
                                      "*": { "classes": "flex gap-1.5 items-center" },
                                      "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline" },
                                      "simple-price-sale": { "classes": "text-base font-bold text-[#222831]" },
                                      "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                                      "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                                      "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                                      "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gb-hm-honey-c-row-c2",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "shrink-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-honey-c-atc",
                                    "type": "addToCart",
                                    "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                                    "cssSelectors": {
                                      "*": { "classes": "" },
                                      "quantity-wrapper": { "classes": "" },
                                      "quantity-input": { "classes": "" },
                                      "quantity-plus": { "classes": "" },
                                      "quantity-minus": { "classes": "" },
                                      "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                                      "button-icon": { "classes": "flex items-center" },
                                      "button-label": { "classes": "hidden" }
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
            "id": "gb-hm-dates",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-hm-dates-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-hm-dates-head",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-end justify-between gap-4 border-b border-[#e4e7ec] pb-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-dates-head-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-dates-h",
                            "type": "heading",
                            "options": { "text": "Premium Dates", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-dates-head-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hm-dates-head-link",
                            "type": "button",
                            "options": { "text": "View all items", "linkTo": "custom", "scheme": "", "url": "/categories/dates", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-[#f48721] cursor-pointer hover:text-[#d9731a]" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gb-hm-dates-ps",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": ["product"],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": []
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1.25em",
                        "arrows": 1,
                        "pagination": 0,
                        "drag": 1,
                        "speed": 400,
                        "mediaQuery": "max",
                        "breakpoints": { "1024": { "perPage": 3 }, "640": { "perPage": 2 } }
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "" },
                      "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" },
                      "arrows-wrap": { "classes": "" },
                      "arrow-item": { "classes": "bg-white shadow-md rounded-full" },
                      "arrow-prev": { "classes": "" },
                      "arrow-next": { "classes": "" },
                      "pagination": { "classes": "" },
                      "dot": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-dates-ps-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" }
                        },
                        "children": [
                          {
                            "id": "gb-hm-dates-c-save",
                            "type": "productDiscount",
                            "options": { "label": "off", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute left-5 top-5 z-10 flex items-baseline gap-0.5 rounded bg-[#ff1818] px-2 py-0.5 text-white" },
                              "discount": { "classes": "text-[11px] font-bold" },
                              "label": { "classes": "text-[9px] font-semibold" }
                            }
                          },
                          {
                            "id": "gb-hm-dates-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-hm-dates-c-title",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#252a34] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-hm-dates-c-row",
                            "type": "columns",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex items-center justify-between gap-2" },
                              "column": { "classes": "" }
                            },
                            "children": [
                              {
                                "id": "gb-hm-dates-c-row-c1",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "min-w-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-dates-c-price",
                                    "type": "productPrice",
                                    "options": { "separator": "", "variablePriceViewType": "inline" },
                                    "cssSelectors": {
                                      "*": { "classes": "flex gap-1.5 items-center" },
                                      "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline" },
                                      "simple-price-sale": { "classes": "text-base font-bold text-[#222831]" },
                                      "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                                      "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                                      "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                                      "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gb-hm-dates-c-row-c2",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "shrink-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-dates-c-atc",
                                    "type": "addToCart",
                                    "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                                    "cssSelectors": {
                                      "*": { "classes": "" },
                                      "quantity-wrapper": { "classes": "" },
                                      "quantity-input": { "classes": "" },
                                      "quantity-plus": { "classes": "" },
                                      "quantity-minus": { "classes": "" },
                                      "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                                      "button-icon": { "classes": "flex items-center" },
                                      "button-label": { "classes": "hidden" }
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
            "id": "gb-hm-cook",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-y border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-hm-cook-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-hm-cook-head",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-end justify-between gap-4 border-b border-[#e4e7ec] pb-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-cook-head-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-cook-h",
                            "type": "heading",
                            "options": { "text": "Cooking Essentials", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-cook-head-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hm-cook-head-link",
                            "type": "button",
                            "options": { "text": "View all items", "linkTo": "custom", "scheme": "", "url": "/categories/oil-ghee", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-[#f48721] cursor-pointer hover:text-[#d9731a]" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gb-hm-cook-ps",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": ["product"],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": []
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1.25em",
                        "arrows": 1,
                        "pagination": 0,
                        "drag": 1,
                        "speed": 400,
                        "mediaQuery": "max",
                        "breakpoints": { "1024": { "perPage": 3 }, "640": { "perPage": 2 } }
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "" },
                      "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" },
                      "arrows-wrap": { "classes": "" },
                      "arrow-item": { "classes": "bg-white shadow-md rounded-full" },
                      "arrow-prev": { "classes": "" },
                      "arrow-next": { "classes": "" },
                      "pagination": { "classes": "" },
                      "dot": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-cook-ps-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" }
                        },
                        "children": [
                          {
                            "id": "gb-hm-cook-c-save",
                            "type": "productDiscount",
                            "options": { "label": "off", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute left-5 top-5 z-10 flex items-baseline gap-0.5 rounded bg-[#ff1818] px-2 py-0.5 text-white" },
                              "discount": { "classes": "text-[11px] font-bold" },
                              "label": { "classes": "text-[9px] font-semibold" }
                            }
                          },
                          {
                            "id": "gb-hm-cook-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-hm-cook-c-title",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#252a34] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-hm-cook-c-row",
                            "type": "columns",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex items-center justify-between gap-2" },
                              "column": { "classes": "" }
                            },
                            "children": [
                              {
                                "id": "gb-hm-cook-c-row-c1",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "min-w-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-cook-c-price",
                                    "type": "productPrice",
                                    "options": { "separator": "", "variablePriceViewType": "inline" },
                                    "cssSelectors": {
                                      "*": { "classes": "flex gap-1.5 items-center" },
                                      "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline" },
                                      "simple-price-sale": { "classes": "text-base font-bold text-[#222831]" },
                                      "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                                      "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                                      "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                                      "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gb-hm-cook-c-row-c2",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "shrink-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-cook-c-atc",
                                    "type": "addToCart",
                                    "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                                    "cssSelectors": {
                                      "*": { "classes": "" },
                                      "quantity-wrapper": { "classes": "" },
                                      "quantity-input": { "classes": "" },
                                      "quantity-plus": { "classes": "" },
                                      "quantity-minus": { "classes": "" },
                                      "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                                      "button-icon": { "classes": "flex items-center" },
                                      "button-label": { "classes": "hidden" }
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
            "id": "gb-hm-org",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-hm-org-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-hm-org-head",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-end justify-between gap-4 border-b border-[#e4e7ec] pb-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-org-head-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-org-h",
                            "type": "heading",
                            "options": { "text": "Organic Certified", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-org-head-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hm-org-head-link",
                            "type": "button",
                            "options": { "text": "View all items", "linkTo": "custom", "scheme": "", "url": "/categories/organic-certified", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-[#f48721] cursor-pointer hover:text-[#d9731a]" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gb-hm-org-ps",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": ["product"],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": []
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1.25em",
                        "arrows": 1,
                        "pagination": 0,
                        "drag": 1,
                        "speed": 400,
                        "mediaQuery": "max",
                        "breakpoints": { "1024": { "perPage": 3 }, "640": { "perPage": 2 } }
                      }
                    },
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "loop-items": { "classes": "" },
                      "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" },
                      "arrows-wrap": { "classes": "" },
                      "arrow-item": { "classes": "bg-white shadow-md rounded-full" },
                      "arrow-prev": { "classes": "" },
                      "arrow-next": { "classes": "" },
                      "pagination": { "classes": "" },
                      "dot": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-org-ps-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" }
                        },
                        "children": [
                          {
                            "id": "gb-hm-org-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-hm-org-c-title",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#252a34] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-hm-org-c-row",
                            "type": "columns",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex items-center justify-between gap-2" },
                              "column": { "classes": "" }
                            },
                            "children": [
                              {
                                "id": "gb-hm-org-c-row-c1",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "min-w-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-org-c-price",
                                    "type": "productPrice",
                                    "options": { "separator": "", "variablePriceViewType": "inline" },
                                    "cssSelectors": {
                                      "*": { "classes": "flex gap-1.5 items-center" },
                                      "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline" },
                                      "simple-price-sale": { "classes": "text-base font-bold text-[#222831]" },
                                      "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                                      "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                                      "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                                      "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gb-hm-org-c-row-c2",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "shrink-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-org-c-atc",
                                    "type": "addToCart",
                                    "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                                    "cssSelectors": {
                                      "*": { "classes": "" },
                                      "quantity-wrapper": { "classes": "" },
                                      "quantity-input": { "classes": "" },
                                      "quantity-plus": { "classes": "" },
                                      "quantity-minus": { "classes": "" },
                                      "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                                      "button-icon": { "classes": "flex items-center" },
                                      "button-label": { "classes": "hidden" }
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
            "id": "gb-hm-just",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-t border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-hm-just-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-hm-just-head",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "flex items-end justify-between gap-4 border-b border-[#e4e7ec] pb-3" },
                      "column": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-just-head-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": [
                          {
                            "id": "gb-hm-just-h",
                            "type": "heading",
                            "options": { "text": "Just For You", "tag": "h2" },
                            "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-just-head-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "shrink-0" } },
                        "children": [
                          {
                            "id": "gb-hm-just-head-link",
                            "type": "button",
                            "options": { "text": "View All Products", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconChevronRight", "iconSize": 16 },
                            "cssSelectors": {
                              "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-[#f48721] cursor-pointer hover:text-[#d9731a]" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gb-hm-just-pg",
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
                      "*": { "classes": "" },
                      "loop-items": { "classes": "grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5" },
                      "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-just-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5" },
                          "loop-item": { "classes": "group relative flex h-full flex-col gap-2 rounded-lg border border-[#e4e7ec] bg-white p-3 transition-colors hover:border-[#f48721]" }
                        },
                        "children": [
                          {
                            "id": "gb-hm-just-c-save",
                            "type": "productDiscount",
                            "options": { "label": "off", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute left-5 top-5 z-10 flex items-baseline gap-0.5 rounded bg-[#ff1818] px-2 py-0.5 text-white" },
                              "discount": { "classes": "text-[11px] font-bold" },
                              "label": { "classes": "text-[9px] font-semibold" }
                            }
                          },
                          {
                            "id": "gb-hm-just-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-md" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-hm-just-c-title",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#252a34] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-hm-just-c-row",
                            "type": "columns",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex items-center justify-between gap-2" },
                              "column": { "classes": "" }
                            },
                            "children": [
                              {
                                "id": "gb-hm-just-c-row-c1",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "min-w-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-just-c-price",
                                    "type": "productPrice",
                                    "options": { "separator": "", "variablePriceViewType": "inline" },
                                    "cssSelectors": {
                                      "*": { "classes": "flex gap-1.5 items-center" },
                                      "simple-price-wrap": { "classes": "flex gap-1.5 items-baseline" },
                                      "simple-price-sale": { "classes": "text-base font-bold text-[#222831]" },
                                      "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                                      "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                                      "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                                      "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gb-hm-just-c-row-c2",
                                "type": "columnItem",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "shrink-0" } },
                                "children": [
                                  {
                                    "id": "gb-hm-just-c-atc",
                                    "type": "addToCart",
                                    "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                                    "cssSelectors": {
                                      "*": { "classes": "" },
                                      "quantity-wrapper": { "classes": "" },
                                      "quantity-input": { "classes": "" },
                                      "quantity-plus": { "classes": "" },
                                      "quantity-minus": { "classes": "" },
                                      "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                                      "button-icon": { "classes": "flex items-center" },
                                      "button-label": { "classes": "hidden" }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-hm-just-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
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
            "id": "gb-hm-rev",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-white border-t border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-hm-rev-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "gb-hm-rev-h",
                    "type": "heading",
                    "options": { "text": "What our customers say", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl sm:text-2xl font-bold tracking-tight text-[#222831] text-center" } }
                  },
                  {
                    "id": "gb-hm-rev-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Customer name, city",
                          "description": "Replace this with a real review. One or two lines reads best across five cards.",
                          "icon": "IconQuote",
                          "iconSize": ""
                        },
                        {
                          "title": "Customer name, city",
                          "description": "Replace this with a real review, ideally naming the product that was bought.",
                          "icon": "IconQuote",
                          "iconSize": ""
                        },
                        {
                          "title": "Customer name, city",
                          "description": "Replace this with a real review. Short and specific beats long praise.",
                          "icon": "IconQuote",
                          "iconSize": ""
                        },
                        {
                          "title": "Customer name, city",
                          "description": "Replace this with a real review about delivery speed or packaging.",
                          "icon": "IconQuote",
                          "iconSize": ""
                        },
                        {
                          "title": "Customer name, city",
                          "description": "Replace this with a real review from a repeat customer.",
                          "icon": "IconQuote",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" },
                      "loop-item": { "classes": "flex flex-col gap-3 rounded-lg border border-[#e4e7ec] bg-white p-5" },
                      "title": { "classes": "text-sm font-bold text-[#222831] order-last" },
                      "description": { "classes": "text-sm text-[#252a34] leading-relaxed" },
                      "icon": { "classes": "shrink-0 text-[#f48721]" }
                    },
                    "children": [
                      {
                        "id": "gb-hm-rev-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconQuote", "size": "22" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "gb-hm-rev-fb-3",
                        "type": "featureboxDetails",
                        "options": { "tag": "p" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "img": { "classes": "" }
                        }
                      },
                      {
                        "id": "gb-hm-rev-fb-4",
                        "type": "featureboxTitle",
                        "options": { "tag": "h4" },
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
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "gb-sh-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-sh-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gb-sh-head-h",
                    "type": "heading",
                    "options": { "text": "All products", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-sh-head-t",
                    "type": "text",
                    "options": { "text": "Everything in the shop, newest first. Pick a category from the menu to narrow it down.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-sh-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-sh-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gb-sh-body-pg",
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
                      "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "gb-sh-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "gb-sh-body-c-badge",
                            "type": "productDiscount",
                            "options": { "label": "off", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute left-5 top-5 z-10 flex items-baseline gap-0.5 rounded-full bg-[#ff1818] px-2.5 py-1 text-white" },
                              "discount": { "classes": "text-xs font-bold" },
                              "label": { "classes": "text-[10px] font-semibold" }
                            }
                          },
                          {
                            "id": "gb-sh-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-sh-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-sh-body-c-rate",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-1.5 items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-[#f8b400] [&_svg]:size-3.5" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "hidden" },
                              "total-reviews": { "classes": "text-xs text-[#767a7a]" }
                            }
                          },
                          {
                            "id": "gb-sh-body-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-[#767a7a]" },
                              "simple-price-sale": { "classes": "text-base font-extrabold text-[#222831]" },
                              "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                              "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                            }
                          },
                          {
                            "id": "gb-sh-body-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex justify-end pt-1" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "hidden" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-sh-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
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
            "id": "gb-sh-foot",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-[#e4e7ec] bg-[#f5f5f5]" } },
            "children": [
              {
                "id": "gb-sh-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-8" } },
                "children": [
                  {
                    "id": "gb-sh-foot-fb-1",
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
                          "title": "Delivery in every district",
                          "description": "Two to four days by courier.",
                          "icon": "IconTruck",
                          "iconSize": ""
                        },
                        {
                          "title": "bKash and Nagad accepted",
                          "description": "Plus cards.",
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
                      "*": { "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 rounded-lg border border-[#e4e7ec] bg-white px-5 py-3" },
                      "loop-item": { "classes": "flex items-center gap-2" },
                      "title": { "classes": "text-xs font-semibold text-[#222831] whitespace-nowrap" },
                      "description": { "classes": "" },
                      "icon": { "classes": "text-[#f48721] flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "gb-sh-foot-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconCash", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "gb-sh-foot-fb-3",
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
            "id": "gb-pd-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-pd-main-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gb-pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10" },
                      "grid-item": { "classes": "" }
                    },
                    "children": [
                      {
                        "id": "gb-pd-col-gallery",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gb-pd-gal-1",
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
                              "item": { "classes": "rounded-lg overflow-hidden bg-[#f5f5f5] [&_img]:aspect-square [&_img]:object-contain" },
                              "image": { "classes": "" },
                              "arrows": { "classes": "" },
                              "prev": { "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-[#222831]!" },
                              "next": { "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-[#222831]!" },
                              "pagination": { "classes": "" },
                              "dot": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-pd-col-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full flex flex-col gap-4" } },
                        "children": [
                          {
                            "id": "gb-pd-cat-1",
                            "type": "productCategories",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-baseline gap-2 flex-wrap" },
                              "label": { "classes": "text-[11px] font-semibold uppercase tracking-widest text-[#767a7a]" },
                              "items": { "classes": "flex flex-wrap items-baseline" },
                              "item": { "classes": "text-[11px] font-bold uppercase tracking-widest text-[#f48721] hover:text-[#d9731a] transition-colors" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "text-[#767a7a] mr-1" }
                            }
                          },
                          {
                            "id": "gb-pd-title",
                            "type": "postTitle",
                            "options": { "linkTo": "", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-[#222831]" } }
                          },
                          {
                            "id": "gb-pd-rate-1",
                            "type": "productRatings",
                            "options": { "label": "", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "star-rate": { "classes": "flex gap-0.5 items-center text-[#f8b400] [&_svg]:size-4" },
                              "rate-count": { "classes": "flex items-center" },
                              "icon": { "classes": "" },
                              "avg-rating": { "classes": "text-sm font-bold text-[#222831]" },
                              "total-reviews": { "classes": "text-sm text-[#767a7a]" }
                            }
                          },
                          {
                            "id": "gb-pd-price-1",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-3 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-3 items-baseline" },
                              "simple-price-sale": { "classes": "text-3xl font-extrabold text-[#ff1818]" },
                              "simple-price-regular": { "classes": "text-base line-through text-[#767a7a]" },
                              "variable-price-wrap": { "classes": "flex gap-2 items-center" },
                              "variable-price-min": { "classes": "text-base text-[#252a34]" },
                              "variable-price-max": { "classes": "text-base text-[#252a34]" }
                            }
                          },
                          {
                            "id": "gb-pd-var-1",
                            "type": "productVariablePrices",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "" },
                              "attr-wrap": { "classes": "flex flex-col gap-5" },
                              "attr-item": { "classes": "flex flex-col gap-2" },
                              "attr-title": { "classes": "text-xs font-semibold uppercase tracking-wide text-[#767a7a]" },
                              "attr-items-wrap": { "classes": "flex flex-wrap gap-2" },
                              "variation-item": { "classes": "min-w-16 px-4 py-2 text-sm font-medium text-center text-[#222831] bg-white border border-[#e4e7ec] rounded-md cursor-pointer hover:border-[#f48721] transition-colors" },
                              "variation-price": { "classes": "text-2xl font-extrabold text-[#222831]" },
                              "variation-selected": { "classes": "border-[#f48721] bg-[#f48721] text-white" },
                              "variation-disabled": { "classes": "opacity-40 cursor-not-allowed line-through" }
                            }
                          },
                          {
                            "id": "gb-pd-stock-1",
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
                              "out-of-stock": { "classes": "text-[#ff1818]" },
                              "out-of-stock-label": { "classes": "" },
                              "out-of-stock-icon": { "classes": "" },
                              "in-stock": { "classes": "text-[#d9731a]" },
                              "in-stock-label": { "classes": "" },
                              "in-stock-icon": { "classes": "" }
                            }
                          },
                          {
                            "id": "gb-pd-atc-1",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": false, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-3 items-stretch" },
                              "quantity-wrapper": { "classes": "flex items-center justify-between gap-1 px-2 rounded-md border border-[#e4e7ec] text-[#252a34]" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "text-sm font-bold whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "gb-pd-wa-1",
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
                              "link": { "classes": "flex gap-2 items-center px-4 py-2.5 rounded-md border border-[#25d366] bg-white text-[#1da851] cursor-pointer hover:bg-[#25d366]/5 transition-colors" },
                              "icon": { "classes": "flex items-center shrink-0" },
                              "label": { "classes": "text-sm font-medium whitespace-nowrap" }
                            }
                          },
                          {
                            "id": "gb-pd-usp-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCheck",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Cash on delivery in every district",
                                  "icon": ""
                                },
                                {
                                  "text": "Nothing blended, nothing added",
                                  "icon": ""
                                },
                                {
                                  "text": "Sealed and dated before dispatch",
                                  "icon": ""
                                },
                                {
                                  "text": "Call the hotline and we will order for you",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2 rounded-lg bg-[#fdf0e4] p-4" },
                              "li": { "classes": "flex items-start gap-2" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-[#d9731a]" },
                              "text": { "classes": "text-sm text-[#222831] leading-relaxed" }
                            }
                          },
                          {
                            "id": "gb-pd-sku-1",
                            "type": "productSku",
                            "options": { "label": "SKU:", "icon": "", "iconSize": 18 },
                            "cssSelectors": {
                              "*": { "classes": "flex items-center gap-2" },
                              "label": { "classes": "empty:hidden text-sm text-[#767a7a]" },
                              "sku": { "classes": "text-sm font-medium text-[#222831] tracking-wide" },
                              "icon": { "classes": "shrink-0 flex items-center text-[#767a7a]" }
                            }
                          },
                          {
                            "id": "gb-pd-brand-1",
                            "type": "productBrands",
                            "options": { "label": "Brand:", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "flex items-baseline gap-1.5" },
                              "label": { "classes": "text-xs text-[#767a7a]" },
                              "items": { "classes": "flex flex-wrap items-baseline" },
                              "item": { "classes": "text-xs font-medium text-[#252a34] hover:text-[#f48721] transition-colors" },
                              "category-name": { "classes": "" },
                              "separator": { "classes": "text-[#767a7a]" }
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
            "id": "gb-pd-tabs-sec",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-y border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "gb-pd-tabs",
                    "type": "tabs",
                    "options": {
                      "orientation": "",
                      "tabsItems": [
                        {
                          "label": "Description",
                          "icon": "IconFileDescription"
                        },
                        {
                          "label": "How to use",
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
                      "*": { "classes": "bg-white rounded-lg border border-[#e4e7ec] p-5" },
                      "navs-items": { "classes": "gap-6 border-b border-[#e4e7ec]" },
                      "nav-item": { "classes": "flex items-center gap-2 px-1 py-3 text-sm font-medium text-[#252a34] border-b-2 border-transparent hover:text-[#222831] whitespace-nowrap cursor-pointer" },
                      "nav-item-active": { "classes": "text-[#f48721]! border-[#f48721]!" },
                      "nav-item-label": { "classes": "" },
                      "nav-item-icon": { "classes": "empty:hidden" },
                      "nav-item-content": { "classes": "pt-5" }
                    },
                    "children": [
                      {
                        "id": "gb-pd-tab-desc",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gb-pd-desc",
                            "type": "postContent",
                            "options": { "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm text-[#222831] leading-relaxed max-w-3xl [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3 [&_strong]:font-semibold" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-pd-tab-use",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gb-pd-use-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Net weight: add the pack size",
                                  "icon": ""
                                },
                                {
                                  "text": "Ingredients: add what is inside",
                                  "icon": ""
                                },
                                {
                                  "text": "Storage: add how to keep it",
                                  "icon": ""
                                },
                                {
                                  "text": "Best before: add the shelf life",
                                  "icon": ""
                                },
                                {
                                  "text": "Origin: add the district or country",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "ml-5 max-w-2xl" },
                              "li": { "classes": "list-disc py-1.5 border-b border-[#e4e7ec] last:border-0 marker:text-[#767a7a]" },
                              "icon": { "classes": "empty:hidden" },
                              "text": { "classes": "text-sm text-[#222831]" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-pd-tab-del",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gb-pd-del-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCheck",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Cash on delivery everywhere in Bangladesh",
                                  "icon": ""
                                },
                                {
                                  "text": "Inside Dhaka: one to two days",
                                  "icon": ""
                                },
                                {
                                  "text": "Outside Dhaka: two to four days by courier",
                                  "icon": ""
                                },
                                {
                                  "text": "We call to confirm the order before dispatch",
                                  "icon": ""
                                },
                                {
                                  "text": "Seal broken or leaking? Send a photo and we replace it",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": { "classes": "flex flex-col gap-2.5 max-w-2xl" },
                              "li": { "classes": "flex items-start gap-2" },
                              "icon": { "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-[#d9731a]" },
                              "text": { "classes": "text-sm text-[#222831] leading-relaxed" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-pd-tab-rev",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "w-full" } },
                        "children": [
                          {
                            "id": "gb-pd-rev",
                            "type": "commentsGrid",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full" },
                              "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                              "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg border border-[#e4e7ec] bg-[#f5f5f5]" }
                            },
                            "children": [
                              {
                                "id": "gb-pd-rev-loop",
                                "type": "commentsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": { "classes": "" },
                                  "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                                  "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg border border-[#e4e7ec] bg-[#f5f5f5]" }
                                },
                                "children": [
                                  {
                                    "id": "gb-pd-rev-avatar",
                                    "type": "commentAvatar",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": { "classes": "w-fit" },
                                      "link": { "classes": "block" },
                                      "image": { "classes": "w-10 h-10 rounded-full object-cover bg-white" }
                                    }
                                  },
                                  {
                                    "id": "gb-pd-rev-author",
                                    "type": "commentAuthor",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#222831]" } }
                                  },
                                  {
                                    "id": "gb-pd-rev-rate",
                                    "type": "commentRate",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "flex items-center gap-0.5 text-[#f8b400] [&_svg]:size-4" } }
                                  },
                                  {
                                    "id": "gb-pd-rev-body",
                                    "type": "commentContent",
                                    "options": {},
                                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] leading-relaxed" } }
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
            "id": "gb-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-pd-rel-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-14 flex flex-col gap-8" } },
                "children": [
                  {
                    "id": "gb-pd-rel-h",
                    "type": "heading",
                    "options": { "text": "Often bought together", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-2xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-pd-rel-rp-1",
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
                      "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "gb-pd-rel-rp-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "gb-pd-rel-rp-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-pd-rel-rp-4",
                            "type": "postTitle",
                            "options": { "text": "Product Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-pd-rel-rp-5",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline" },
                              "simple-price-sale": { "classes": "text-base font-extrabold text-[#222831]" },
                              "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                              "variable-price-max": { "classes": "text-sm text-[#252a34]" }
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
            "id": "gb-ca-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-ca-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gb-ca-head-label",
                    "type": "text",
                    "options": { "text": "ক্যাটাগরি", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#f48721]" } }
                  },
                  {
                    "id": "gb-ca-head-h",
                    "type": "heading",
                    "options": { "text": "Shop by category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-ca-head-t",
                    "type": "text",
                    "options": { "text": "Every shelf in the shop, from honey and dates to rice and spices.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-ca-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-ca-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "gb-ca-grid-1",
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
                      "loop-item": { "classes": "h-full bg-white border border-[#e4e7ec] rounded-lg p-4 flex flex-col gap-3 transition-shadow hover:shadow-md" }
                    },
                    "children": [
                      {
                        "id": "gb-ca-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "h-full bg-white border border-[#e4e7ec] rounded-lg p-4 flex flex-col gap-3" }
                        },
                        "children": [
                          {
                            "id": "gb-ca-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "w-full aspect-square rounded-xl overflow-hidden bg-[#f5f5f5]" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "gb-ca-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#222831] text-center line-clamp-2" } }
                          },
                          {
                            "id": "gb-ca-grid-5",
                            "type": "termCount",
                            "options": { "label": "", "suffix": " items", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "mx-auto text-xs font-semibold text-[#d9731a] bg-[#fdf0e4] rounded-full px-2.5 py-1" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-ca-grid-6",
                        "type": "termsGridPagination",
                        "options": { "tag": "div" },
                        "cssSelectors": {
                          "*": { "classes": "flex gap-3 items-center justify-center mt-10" },
                          "previous": { "classes": "bg-[#f48721] hover:bg-[#d9731a] px-4 py-2 rounded-md text-white cursor-pointer" },
                          "next": { "classes": "bg-[#f48721] hover:bg-[#d9731a] px-4 py-2 rounded-md text-white cursor-pointer" },
                          "previous-icon": { "classes": "" },
                          "next-icon": { "classes": "" },
                          "current": { "classes": "w-20 text-center border border-[#e4e7ec] rounded-md py-2" }
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
            "id": "gb-cs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-cs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gb-cs-head-h",
                    "type": "heading",
                    "options": { "text": "Category", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-cs-head-t",
                    "type": "text",
                    "options": { "text": "Products in this category, newest first. Cash on delivery on every order.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-cs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-cs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gb-cs-body-pg",
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
                      "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "gb-cs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "gb-cs-body-c-badge",
                            "type": "productDiscount",
                            "options": { "label": "off", "separator": ", " },
                            "cssSelectors": {
                              "*": { "classes": "absolute left-5 top-5 z-10 flex items-baseline gap-0.5 rounded-full bg-[#ff1818] px-2.5 py-1 text-white" },
                              "discount": { "classes": "text-xs font-bold" },
                              "label": { "classes": "text-[10px] font-semibold" }
                            }
                          },
                          {
                            "id": "gb-cs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-cs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-cs-body-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-[#767a7a]" },
                              "simple-price-sale": { "classes": "text-base font-extrabold text-[#222831]" },
                              "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                              "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                            }
                          },
                          {
                            "id": "gb-cs-body-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex justify-end pt-1" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "hidden" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-cs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
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
            "id": "gb-ta-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-ta-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gb-ta-head-h",
                    "type": "heading",
                    "options": { "text": "Browse by tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-ta-head-t",
                    "type": "text",
                    "options": { "text": "Tags cut across the shelves: combo packs, sugar free, cold pressed, gift boxes.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-ta-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-ta-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "gb-ta-grid-1",
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
                      "loop-item": { "classes": "flex items-center gap-2 rounded-full border border-[#e4e7ec] bg-white px-4 py-2 transition-colors hover:border-[#f48721] hover:bg-[#fdf0e4]" }
                    },
                    "children": [
                      {
                        "id": "gb-ta-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex items-center gap-2 rounded-full border border-[#e4e7ec] bg-white px-4 py-2" }
                        },
                        "children": [
                          {
                            "id": "gb-ta-grid-3",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831]" } }
                          },
                          {
                            "id": "gb-ta-grid-4",
                            "type": "termCount",
                            "options": { "label": "", "suffix": "", "tag": "span" },
                            "cssSelectors": { "*": { "classes": "text-xs font-semibold text-[#f48721]" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-ta-grid-5",
                        "type": "termsGridPagination",
                        "options": { "tag": "div" },
                        "cssSelectors": {
                          "*": { "classes": "flex gap-3 items-center justify-center mt-10" },
                          "previous": { "classes": "bg-[#f48721] hover:bg-[#d9731a] px-4 py-2 rounded-md text-white cursor-pointer" },
                          "next": { "classes": "bg-[#f48721] hover:bg-[#d9731a] px-4 py-2 rounded-md text-white cursor-pointer" },
                          "previous-icon": { "classes": "" },
                          "next-icon": { "classes": "" },
                          "current": { "classes": "w-20 text-center border border-[#e4e7ec] rounded-md py-2" }
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
            "id": "gb-ts-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-ts-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gb-ts-head-h",
                    "type": "heading",
                    "options": { "text": "Tag", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-ts-head-t",
                    "type": "text",
                    "options": { "text": "Everything carrying this tag, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-ts-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-ts-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gb-ts-body-pg",
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
                      "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "gb-ts-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "gb-ts-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-ts-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-ts-body-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-[#767a7a]" },
                              "simple-price-sale": { "classes": "text-base font-extrabold text-[#222831]" },
                              "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                              "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                            }
                          },
                          {
                            "id": "gb-ts-body-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex justify-end pt-1" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "hidden" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-ts-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
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
            "id": "gb-ba-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-ba-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gb-ba-head-h",
                    "type": "heading",
                    "options": { "text": "Brands and growers", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-ba-head-t",
                    "type": "text",
                    "options": { "text": "The mills, apiaries and farms we buy from.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-ba-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-ba-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12" } },
                "children": [
                  {
                    "id": "gb-ba-grid-1",
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
                      "loop-item": { "classes": "flex flex-col items-center gap-3 rounded-lg border border-[#e4e7ec] bg-white p-5 transition-shadow hover:shadow-md" }
                    },
                    "children": [
                      {
                        "id": "gb-ba-grid-2",
                        "type": "termsLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "" },
                          "loop-item": { "classes": "flex flex-col items-center gap-3 rounded-lg border border-[#e4e7ec] bg-white p-5" }
                        },
                        "children": [
                          {
                            "id": "gb-ba-grid-3",
                            "type": "termThumbnail",
                            "options": { "classes": "" },
                            "cssSelectors": {
                              "*": { "classes": "size-20 rounded-full overflow-hidden bg-[#f5f5f5]" },
                              "link": { "classes": "" },
                              "image": { "classes": "object-cover w-full h-full" }
                            }
                          },
                          {
                            "id": "gb-ba-grid-4",
                            "type": "termTitle",
                            "options": { "text": "Term Title.", "tag": "h3", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#222831] text-center line-clamp-2" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-ba-grid-5",
                        "type": "termsGridPagination",
                        "options": { "tag": "div" },
                        "cssSelectors": {
                          "*": { "classes": "flex gap-3 items-center justify-center mt-10" },
                          "previous": { "classes": "bg-[#f48721] hover:bg-[#d9731a] px-4 py-2 rounded-md text-white cursor-pointer" },
                          "next": { "classes": "bg-[#f48721] hover:bg-[#d9731a] px-4 py-2 rounded-md text-white cursor-pointer" },
                          "previous-icon": { "classes": "" },
                          "next-icon": { "classes": "" },
                          "current": { "classes": "w-20 text-center border border-[#e4e7ec] rounded-md py-2" }
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
            "id": "gb-bs-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-bs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gb-bs-head-h",
                    "type": "heading",
                    "options": { "text": "Brand", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-bs-head-t",
                    "type": "text",
                    "options": { "text": "Everything we stock from this grower, newest first.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-bs-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-bs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gb-bs-body-pg",
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
                      "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "gb-bs-body-pg-loop",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
                          "loop-item": { "classes": "group relative flex flex-col gap-2.5 p-3 rounded-lg border border-[#e4e7ec] bg-white transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "gb-bs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-full overflow-hidden rounded-xl" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-full aspect-square object-contain bg-[#f5f5f5] transition-transform duration-500 group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-bs-body-c-title",
                            "type": "postTitle",
                            "options": { "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831] line-clamp-2 transition-colors group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-bs-body-c-price",
                            "type": "productPrice",
                            "options": { "separator": "", "variablePriceViewType": "inline" },
                            "cssSelectors": {
                              "*": { "classes": "flex gap-2 items-center" },
                              "simple-price-wrap": { "classes": "flex gap-2 items-baseline text-[#767a7a]" },
                              "simple-price-sale": { "classes": "text-base font-extrabold text-[#222831]" },
                              "simple-price-regular": { "classes": "text-xs line-through text-[#767a7a]" },
                              "variable-price-wrap": { "classes": "flex gap-1.5 items-center" },
                              "variable-price-min": { "classes": "text-sm text-[#252a34]" },
                              "variable-price-max": { "classes": "text-sm text-[#252a34]" }
                            }
                          },
                          {
                            "id": "gb-bs-body-c-atc",
                            "type": "addToCart",
                            "options": { "buttonText": "Add to cart", "icon": "IconShoppingCart", "iconSize": 18, "hideQuanity": true, "hideButton": false },
                            "cssSelectors": {
                              "*": { "classes": "mt-auto flex justify-end pt-1" },
                              "quantity-wrapper": { "classes": "" },
                              "quantity-input": { "classes": "" },
                              "quantity-plus": { "classes": "" },
                              "quantity-minus": { "classes": "" },
                              "button-wrapper": { "classes": "flex size-9 items-center justify-center rounded-full bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors" },
                              "button-icon": { "classes": "flex items-center" },
                              "button-label": { "classes": "hidden" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-bs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
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
            "id": "gb-bl-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-bl-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3" } },
                "children": [
                  {
                    "id": "gb-bl-head-h",
                    "type": "heading",
                    "options": { "text": "Kitchen notes", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-bl-head-t",
                    "type": "text",
                    "options": { "text": "How to tell real honey from syrup, what to cook with mustard oil, and where this month's harvest came from.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-2xl leading-relaxed" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-bl-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-bl-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gb-bl-grid-1",
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
                      "loop-item": { "classes": "group flex flex-col gap-3 bg-white border border-[#e4e7ec] rounded-lg p-3 transition-shadow duration-300 hover:shadow-lg" }
                    },
                    "children": [
                      {
                        "id": "gb-bl-grid-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" },
                          "loop-item": { "classes": "group flex flex-col gap-3 bg-white border border-[#e4e7ec] rounded-lg p-3 transition-shadow duration-300 hover:shadow-lg" }
                        },
                        "children": [
                          {
                            "id": "gb-bl-grid-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "h-52 overflow-hidden rounded-xl bg-[#f5f5f5]" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-bl-grid-4",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs uppercase tracking-wide text-[#767a7a]" } }
                          },
                          {
                            "id": "gb-bl-grid-5",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h3", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-base font-bold text-[#222831] line-clamp-2 transition-colors duration-200 group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-bl-grid-6",
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
                              "excerpt": { "classes": "text-sm text-[#252a34] leading-relaxed line-clamp-3" },
                              "read-more": { "classes": "flex gap-2 items-center text-sm font-bold text-[#f48721] hover:text-[#d9731a]" },
                              "read-more-icon": { "classes": "" },
                              "read-more-label": { "classes": "" }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-bl-grid-7",
                        "type": "postGridPagination",
                        "options": { "prevText": "Previous", "prevIcon": "", "nextText": "Next", "nextIcon": "", "sliderOptions": "" },
                        "cssSelectors": {
                          "*": { "classes": "flex items-center justify-center gap-3 pt-10" },
                          "previous": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
                          "next": { "classes": "px-4 py-2 rounded-md border border-[#e4e7ec] bg-white text-sm text-[#252a34] cursor-pointer hover:border-[#f48721] hover:text-[#f48721]" },
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
            "id": "gb-bp-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-bp-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pt-12 pb-8 flex flex-col gap-5" } },
                "children": [
                  {
                    "id": "gb-bp-title",
                    "type": "postTitle",
                    "options": { "linkTo": "", "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-extrabold tracking-tight text-[#222831] leading-tight" } }
                  },
                  {
                    "id": "gb-bp-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#767a7a]" } },
                    "children": [
                      {
                        "id": "gb-bp-author",
                        "type": "postAuthor",
                        "options": { "linkTo": "", "classes": "" },
                        "cssSelectors": { "*": { "classes": "font-semibold text-[#252a34]" } }
                      },
                      {
                        "id": "gb-bp-date",
                        "type": "postDate",
                        "options": { "linkTo": "", "dateFormat": "MMMM DD, YYYY" },
                        "cssSelectors": { "*": { "classes": "text-[#767a7a]" } }
                      }
                    ]
                  },
                  {
                    "id": "gb-bp-thumb",
                    "type": "postThumbnail",
                    "options": { "linkTo": "postUrl" },
                    "cssSelectors": {
                      "*": { "classes": "w-full overflow-hidden rounded-lg" },
                      "link": { "classes": "block" },
                      "image": { "classes": "w-full aspect-video object-cover bg-[#f5f5f5]" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-bp-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-bp-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 pb-14" } },
                "children": [
                  {
                    "id": "gb-bp-content",
                    "type": "postContent",
                    "options": { "classes": "" },
                    "cssSelectors": { "*": { "classes": "text-base text-[#222831] leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#222831] [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-4 [&_a]:text-[#f48721] [&_a]:underline [&_img]:rounded-lg [&_img]:my-6" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-bp-comments",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-y border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-bp-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-3xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-bp-comments-h",
                    "type": "heading",
                    "options": { "text": "Comments", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-bp-rev",
                    "type": "commentsGrid",
                    "options": { "classes": "" },
                    "cssSelectors": {
                      "*": { "classes": "w-full" },
                      "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                      "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg border border-[#e4e7ec] bg-white" }
                    },
                    "children": [
                      {
                        "id": "gb-bp-rev-loop",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "flex flex-col gap-4 max-w-3xl" },
                          "loop-item": { "classes": "flex flex-col gap-2 p-5 rounded-lg border border-[#e4e7ec] bg-white" }
                        },
                        "children": [
                          {
                            "id": "gb-bp-rev-avatar",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": { "classes": "w-fit" },
                              "link": { "classes": "block" },
                              "image": { "classes": "w-10 h-10 rounded-full object-cover bg-[#f5f5f5]" }
                            }
                          },
                          {
                            "id": "gb-bp-rev-author",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm font-bold text-[#222831]" } }
                          },
                          {
                            "id": "gb-bp-rev-body",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] leading-relaxed" } }
                          }
                        ]
                      },
                      {
                        "id": "gb-bp-form",
                        "type": "commentsForm",
                        "options": {},
                        "cssSelectors": { "*": { "classes": "mt-6 p-5 rounded-lg border border-[#e4e7ec] bg-white" } }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-bp-more",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-bp-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6" } },
                "children": [
                  {
                    "id": "gb-bp-more-h",
                    "type": "heading",
                    "options": { "text": "More notes", "tag": "h2" },
                    "cssSelectors": { "*": { "classes": "text-xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-bp-more-pg-1",
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
                      "loop-item": { "classes": "group flex gap-4 items-center bg-white border border-[#e4e7ec] rounded-lg p-3 transition-colors duration-200 hover:border-[#f48721]" }
                    },
                    "children": [
                      {
                        "id": "gb-bp-more-pg-2",
                        "type": "postLoop",
                        "options": { "classes": "" },
                        "cssSelectors": {
                          "*": { "classes": "" },
                          "loop-items": { "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2" },
                          "loop-item": { "classes": "group flex gap-4 items-center bg-white border border-[#e4e7ec] rounded-lg p-3 transition-colors duration-200 hover:border-[#f48721]" }
                        },
                        "children": [
                          {
                            "id": "gb-bp-more-pg-3",
                            "type": "postThumbnail",
                            "options": { "linkTo": "postUrl" },
                            "cssSelectors": {
                              "*": { "classes": "w-20 h-20 shrink-0 overflow-hidden rounded-xl bg-[#f5f5f5]" },
                              "link": { "classes": "block w-full h-full" },
                              "image": { "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" }
                            }
                          },
                          {
                            "id": "gb-bp-more-pg-4",
                            "type": "postTitle",
                            "options": { "text": "Post Title.", "tag": "h4", "linkTo": "postUrl", "classes": "" },
                            "cssSelectors": { "*": { "classes": "text-sm font-semibold text-[#222831] line-clamp-2 transition-colors duration-200 group-hover:text-[#f48721]" } }
                          },
                          {
                            "id": "gb-bp-more-pg-5",
                            "type": "postDate",
                            "options": { "tag": "span", "linkTo": "", "dateFormat": "DD-MM-YYYY" },
                            "cssSelectors": { "*": { "classes": "text-xs text-[#767a7a]" } }
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
            "id": "gb-ac-head",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#f5f5f5] border-b border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-ac-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10" } },
                "children": [
                  {
                    "id": "gb-ac-head-h",
                    "type": "heading",
                    "options": { "text": "My account", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-ac-body",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-ac-ca-1",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-12" } },
                "children": [
                  {
                    "id": "gb-ac-ca-2",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full" } },
                    "children": [
                      {
                        "id": "gb-ac-ca-3",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": { "classes": "grid grid-cols-1 lg:grid-cols-2 gap-6" },
                          "grid-item": { "classes": "" }
                        },
                        "children": [
                          {
                            "id": "gb-ac-ca-4",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-lg border border-[#e4e7ec] bg-white p-6" } },
                            "children": [
                              {
                                "id": "gb-ac-ca-5",
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
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-xl border border-[#e4e7ec] bg-white text-sm text-[#222831] placeholder:text-[#767a7a] focus:outline-none focus:border-[#f48721] focus:ring-2 focus:ring-[#fdf0e4]" },
                                  "input-username": { "classes": "" },
                                  "input-phone": { "classes": "" },
                                  "input-password": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-semibold text-[#252a34]" },
                                  "label-email": { "classes": "text-xs font-semibold text-[#252a34]" },
                                  "label-phone": { "classes": "" },
                                  "label-password": { "classes": "" },
                                  "submit": { "classes": "w-full py-2.5 rounded-md bg-[#f48721] text-sm font-bold text-white text-center cursor-pointer hover:bg-[#d9731a] transition-colors" },
                                  "have-account": { "classes": "text-xs text-[#252a34] text-center" }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gb-ac-ca-6",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "rounded-lg border border-[#e4e7ec] bg-white p-6" } },
                            "children": [
                              {
                                "id": "gb-ac-ca-7",
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
                                  "input": { "classes": "w-full px-3 py-2.5 rounded-xl border border-[#e4e7ec] bg-white text-sm text-[#222831] placeholder:text-[#767a7a] focus:outline-none focus:border-[#f48721] focus:ring-2 focus:ring-[#fdf0e4]" },
                                  "input-username": { "classes": "" },
                                  "input-email": { "classes": "" },
                                  "label": { "classes": "" },
                                  "label-username": { "classes": "text-xs font-semibold text-[#252a34]" },
                                  "label-email": { "classes": "text-xs font-semibold text-[#252a34]" },
                                  "submit": { "classes": "w-full py-2.5 rounded-md bg-[#f48721] text-sm font-bold text-white text-center cursor-pointer hover:bg-[#d9731a] transition-colors" },
                                  "forget-password": { "classes": "text-xs text-[#252a34] text-center" }
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
                    "id": "gb-ac-ca-8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "w-full rounded-lg border border-[#e4e7ec] bg-white p-5" } },
                    "children": [
                      {
                        "id": "gb-ac-ca-9",
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
                          "navs-items": { "classes": "flex gap-6 overflow-x-auto border-b border-[#e4e7ec]" },
                          "nav-item": { "classes": "flex items-center gap-2 shrink-0 px-1 py-3 text-sm font-medium text-[#252a34] border-b-2 border-transparent whitespace-nowrap cursor-pointer hover:text-[#222831]" },
                          "nav-item-active": { "classes": "text-[#f48721]! border-[#f48721]!" },
                          "nav-item-label": { "classes": "" },
                          "nav-item-icon": { "classes": "empty:hidden flex items-center" },
                          "nav-item-content": { "classes": "pt-6" }
                        },
                        "children": [
                          {
                            "id": "gb-ac-ca-10",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gb-ac-ca-11",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gb-ac-ca-12",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gb-ac-ca-13",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gb-ac-ca-14",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gb-ac-ca-15",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gb-ac-ca-16",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gb-ac-ca-17",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": { "*": { "classes": "w-full" } },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gb-ac-ca-18",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": { "*": { "classes": "w-full" } },
                            "children": [
                              {
                                "id": "gb-ac-ca-19",
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
            "id": "gb-ty-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full bg-[#fdf0e4]" } },
            "children": [
              {
                "id": "gb-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "gb-ty-icon",
                    "type": "icon",
                    "options": { "iconName": "IconCircleCheckFilled", "size": "56" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-[#d9731a]" } }
                  },
                  {
                    "id": "gb-ty-h",
                    "type": "heading",
                    "options": { "text": "Thank you for your order", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-ty-t",
                    "type": "text",
                    "options": {
                      "text": "We have your order and sent a confirmation by SMS. Our team will call to confirm the delivery address before the parcel is dispatched.",
                      "tag": "p"
                    },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-lg leading-relaxed" } }
                  },
                  {
                    "id": "gb-ty-steps-1",
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
                          "text": "Your items are weighed, sealed and dated",
                          "icon": ""
                        },
                        {
                          "text": "The courier picks the parcel up the same day",
                          "icon": ""
                        },
                        {
                          "text": "You pay cash at the door, or by bKash if you prefer",
                          "icon": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "ml-6 flex flex-col gap-2.5 max-w-2xl text-left" },
                      "li": { "classes": "list-decimal pl-1 marker:font-bold marker:text-[#f48721]" },
                      "icon": { "classes": "empty:hidden" },
                      "text": { "classes": "text-sm text-[#222831] leading-relaxed" }
                    }
                  },
                  {
                    "id": "gb-ty-b",
                    "type": "button",
                    "options": { "text": "Continue shopping", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors w-fit mt-2" },
                      "icon": { "classes": "flex items-center shrink-0" },
                      "label": { "classes": "text-sm font-bold" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-ty-trust",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full border-t border-[#e4e7ec]" } },
            "children": [
              {
                "id": "gb-ty-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-6xl mx-auto px-4 py-8" } },
                "children": [
                  {
                    "id": "gb-ty-fb-1",
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
                          "title": "Delivery in every district",
                          "description": "Two to four days by courier.",
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
                          "title": "Seal broken on arrival?",
                          "description": "Send a photo and we replace it.",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": { "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 rounded-lg border border-[#e4e7ec] bg-white px-5 py-3" },
                      "loop-item": { "classes": "flex items-center gap-2" },
                      "title": { "classes": "text-xs font-semibold text-[#222831] whitespace-nowrap" },
                      "description": { "classes": "" },
                      "icon": { "classes": "text-[#f48721] flex items-center justify-center" }
                    },
                    "children": [
                      {
                        "id": "gb-ty-fb-2",
                        "type": "icon",
                        "options": { "iconName": "IconCash", "size": "18" },
                        "cssSelectors": { "*": { "classes": "" } },
                        "children": []
                      },
                      {
                        "id": "gb-ty-fb-3",
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
            "id": "gb-nf-main",
            "type": "section",
            "options": {},
            "cssSelectors": { "*": { "classes": "w-full" } },
            "children": [
              {
                "id": "gb-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": { "*": { "classes": "w-full max-w-xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-5" } },
                "children": [
                  {
                    "id": "gb-nf-icon",
                    "type": "icon",
                    "options": { "iconName": "IconShoppingBagExclamation", "size": "48" },
                    "cssSelectors": { "*": { "classes": "w-fit flex items-center justify-center text-[#767a7a]" } }
                  },
                  {
                    "id": "gb-nf-h",
                    "type": "heading",
                    "options": { "text": "This shelf is empty", "tag": "h1" },
                    "cssSelectors": { "*": { "classes": "text-3xl sm:text-4xl font-extrabold tracking-tight text-[#222831]" } }
                  },
                  {
                    "id": "gb-nf-t",
                    "type": "text",
                    "options": { "text": "The link may be broken or the product may have sold out. Try all products, or head back to the homepage.", "tag": "p" },
                    "cssSelectors": { "*": { "classes": "text-sm text-[#252a34] max-w-md leading-relaxed" } }
                  },
                  {
                    "id": "gb-nf-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": { "*": { "classes": "flex flex-wrap items-center justify-center gap-3 pt-2" } },
                    "children": [
                      {
                        "id": "gb-nf-b1",
                        "type": "button",
                        "options": { "text": "Back to home", "linkTo": "custom", "scheme": "", "url": "/", "target": "", "icon": "IconHome", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#f48721] text-white cursor-pointer hover:bg-[#d9731a] transition-colors w-fit" },
                          "icon": { "classes": "flex items-center shrink-0" },
                          "label": { "classes": "text-sm font-bold" }
                        }
                      },
                      {
                        "id": "gb-nf-b2",
                        "type": "button",
                        "options": { "text": "All products", "linkTo": "custom", "scheme": "", "url": "/shop", "target": "", "icon": "IconArrowRight", "iconSize": 16 },
                        "cssSelectors": {
                          "*": { "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#e4e7ec] bg-white text-[#222831] cursor-pointer hover:border-[#f48721] hover:text-[#f48721] transition-colors w-fit" },
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
