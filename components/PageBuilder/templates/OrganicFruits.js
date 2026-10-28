/**
 * Template: Root & Ripe.
 *
 * Built from the design in templates/OrganicFruits.png -- an organic fruit,
 * vegetable and pantry shop delivering around Rangpur City. Same shape as the
 * other files here: one template object, `pages` holding one entry per page
 * type, each `content` an ARRAY of builder blocks. The API stores a page's
 * content as a JSON STRING (Templates.jsx calls `isJsonString` and then
 * `JSON.parse`), so whatever applies this template must
 * `JSON.stringify(page.content)` per page on the way out.
 *
 * "Header" and "Footer" are template parts, not pages: they carry type
 * 'header' and 'footer', the two part types PanelsLeft.jsx passes to
 * TemplateParts.jsx, and each holds exactly one siteHeader / siteFooter block.
 * They apply once for the whole site, so no page below repeats them.
 *
 * COLOUR
 *
 * Sampled from the design, not invented. The shop runs on one hue: a deep
 * green for chrome and a brighter green for anything that acts, over a warm
 * off-white page. There is no second brand colour -- amber appears only in
 * rating stars.
 *
 *   deep       #0f3d26  utility strip, footer, the scrim over promo photos
 *   green      #15602a  every button, badge and chip that acts
 *   green deep #0e4a1f  green hover
 *   accent     #357a43  eyebrows, "View all ..." links, small green text
 *   mint       #eef5ea  pale green: icon circles, soft chips, hover tint
 *   mint line  #dfeeda  mint's border
 *   cream      #faf9f3  the page background
 *   sand       #f7f3e4  category tile surface
 *   band       #e8eed8  the newsletter band above the footer
 *   ink        #0f2d1c  headings
 *   body       #45544a  body copy
 *   muted      #6b7a71  meta text and struck-out prices
 *   line       #e7e9e0  the only border colour on light
 *   star       #f0a020  rating stars
 *
 * TYPE
 *
 * The design sets every display line in a serif and everything else in a
 * geometric sans. The serif is `font-serif` -- Tailwind's default stack, so no
 * webfont is loaded; swap in the real face once it is hosted. Body copy
 * inherits the app's sans from globals.css. The two hand-lettered stickers
 * ("Fresh Mangoes & Citrus", "Real Farmers / Real Food") are `font-serif
 * italic` for the same reason -- there is no script face to call on.
 *
 * LAYOUT AND SPACING
 *
 *   container     mx-auto w-full max-w-[75rem] px-4 xl:px-0
 *   section       pt-8 lg:pt-12, and py-8 lg:py-12 on the pages below Home
 *   head -> body  mt-4 lg:mt-6
 *   section head  a tracked uppercase eyebrow over a serif h2 at
 *                 text-[22px] lg:text-[30px], with an accent "View all ..."
 *                 link pushed right
 *   cards         rounded-xl, 1px border, image flush via overflow-hidden
 *   buttons       rounded-full in the design's own bands, rounded-md for the
 *                 Add to Cart inside a product card
 *   category row  grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
 *   product grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
 *   box / review / journal rows  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
 *
 * The five-across product row and six-across category row are the design's
 * own, which is why the product card type sits at 13px.
 *
 * WHAT THE BLOCKS DO AND DO NOT GIVE US
 *
 *   - GRID CLASSES GO ON THE GRID, NOT THE LOOP. PostLoopView, TermsLoopView
 *     and CommentsLoopView each open with
 *
 *       var cssSelectors = <parent grid context>?.cssSelectors
 *
 *     and never read their own props.cssSelectors. So `loop-items` (the grid
 *     container) and `loop-item` (one card) must sit on the postGrid /
 *     termsGrid / relatedProducts / commentsGrid block. Put them on the loop,
 *     where they read more naturally, and they are silently dropped: the rows
 *     lose their grid and stack full width. Every grid below carries them on
 *     the grid block and leaves the loop's empty.
 *   - The wordmark is a leaf mark beside "Root & Ripe" in serif over a tracked
 *     tagline. LogoView renders one flat node, so the logo block carries the
 *     mark alone and the words beside it are text blocks. The same lockup is
 *     reused in the footer with `onDark` flipped.
 *   - QuickSearchView hard-codes `flex gap-2 items-center` on the row holding
 *     the field and the icon, and appends `w-full lg:w-max px-3` to the input.
 *     The gap is cancelled from the wrapper so the pill stays one piece, and
 *     the input gets `w-full!` plus `lg:w-full!`. It also hard-codes
 *     placeholder="Search..." and ignores its own `placeholder` option, so the
 *     design's "Search for products..." is set here but will not show until
 *     that line reads the option.
 *   - MenuView is the nav; menuItem draws its own chevron when it has
 *     children. The bar is `hidden xl:block`, so below xl the header is the
 *     wordmark, search and actions.
 *   - ButtonView and PopoverButtonView both render the icon BEFORE the label,
 *     so every trailing arrow sits on a `flex-row-reverse` wrapper.
 *   - ProductPriceView prints the sale price before the struck-out regular
 *     one, so the price row is flex-row-reverse and justify-end (main-start is
 *     the right edge under row-reverse, so justify-end packs left).
 *   - ProductRatingsView prints stars, then "4.5/5", then "(124 reviews)".
 *     The design shows only the count beside the stars, so the average is
 *     hidden and the count kept.
 *   - PostExcerptView's read-more link is hard-pointed at "#", so on a journal
 *     card the thumbnail and title carry the real link. Setting readMoreText
 *     to "" suppresses the link entirely, which is what the product cards do.
 *   - The two badges on a product card come from different places: the green
 *     pill is productBadge, the product's own badge terms, which cover
 *     "Seasonal", "Organic" and "Fresh" in the design; the dark one on the
 *     archive pages is productDiscount, computed from regular_price against
 *     sale_price, so it only appears on a product actually marked down.
 *     ProductDiscountView prints the "%" itself and then the label, so the
 *     label is a bare suffix: "OFF" gives "20% OFF".
 *
 * Five things in the design have no block that can carry them honestly:
 *
 *   - The "1 kg" / "500 g" pill on a product card is a per-product pack size.
 *     `select` exists in ElementsDefinition.js but BlockRender.jsx has no case
 *     for it, and productVariablePrices keeps its selection in one global
 *     store slot, so inside a loop every card would fight over it. The pill is
 *     left out rather than hard-coded to the same size on every card; the same
 *     goes for the "/kg" and "/pack" suffix beside the price. Both belong to
 *     the product's variations -- put them back once a loop-safe block exists.
 *   - The newsletter band's botanical line art at either end is decoration
 *     with no content behind it, so the band ships in the right colour without
 *     it rather than with grey placeholder boxes.
 *   - The footer's email field is presentational: there is no form block. The
 *     Subscribe button goes to /contact. Swap both for a real form block when
 *     one exists.
 *   - "View All" on a category tile is a static arrow, not a link: the tile
 *     already links through its thumbnail and title.
 *   - `customerTickets`, `archiveDescription` and `archiveCount` each have a
 *     `case` arm in BlockRender.jsx whose component is never imported, so any
 *     of them crashes the storefront page. None is used here; the Account page
 *     carries four tabs rather than the five other templates use.
 *
 * The pages below Home -- Shop, Product, the six archive and single pages,
 * Blog, Account, Thank you and 404 -- are not in the design. They carry the
 * structure proven in BikeParts.js, retokenised to the palette above and
 * reworded for an organic grocer, so the whole site holds together.
 *
 * Six things to fill in before this goes live: the leaf mark and every photo
 * (all placehold.co today -- the hero orchard, the seasonal basket, the
 * farmer, the traceability card's mango and the three review avatars), the
 * phone number and address in the footer, the WhatsApp number in the footer
 * and on the Product page -- WhatsappButtonView renders nothing until it has
 * one, since a wa.me link with no number is a dead link -- the social URLs,
 * the real category slugs behind the nav and footer, and the storage and
 * delivery tab copy on the Product page, which ships as generic notes.
 */

var template = [
  {
    "name": "Root & Ripe",
    "description": "Organic fruit, vegetable and pantry storefront: a deep-green chrome over a warm off-white page, serif display type, a photo hero with trust chips, a six-across category row, five-across product cards, a traceability card and a seasonal promo band.",
    "thumbnail": "/templates/root-and-ripe.svg",
    "meta": "",
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "meta": "",
        "content": [
          {
            "id": "rr-siteHeader-x",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] sticky top-0 z-40"
              }
            },
            "children": [
              {
                "id": "rr-container-c",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#0f3d26] text-white"
                  }
                },
                "children": [
                  {
                    "id": "rr-columns-b",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 flex items-center justify-center gap-4 py-1.5 lg:justify-between lg:gap-6"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-columnItem-2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden min-w-0 lg:block"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-0"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "rr-columnItem-6",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-featurebox-5",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Farm-fresh goodness",
                                  "description": "",
                                  "icon": "IconLeaf",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Delivered to your door",
                                  "description": "",
                                  "icon": "",
                                  "iconSize": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 lg:gap-4"
                              },
                              "loop-item": {
                                "classes": "flex items-center gap-1.5"
                              },
                              "title": {
                                "classes": "text-[10px] font-medium tracking-[0.2px] text-white/85 lg:text-[11px]"
                              },
                              "description": {
                                "classes": "hidden"
                              },
                              "icon": {
                                "classes": "flex items-center text-white/70"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-icon-3",
                                "type": "icon",
                                "options": {
                                  "iconName": "",
                                  "size": "13"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-featureboxTitle-4",
                                "type": "featureboxTitle",
                                "options": {
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "rr-columnItem-a",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden min-w-0 lg:block"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-9",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-end gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-icon-7",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMapPin",
                                  "size": "13"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center text-white/70"
                                  }
                                }
                              },
                              {
                                "id": "rr-text-8",
                                "type": "text",
                                "options": {
                                  "text": "Rangpur City",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[11px] font-medium text-white/85"
                                  }
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
                "id": "rr-container-w",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
                  }
                },
                "children": [
                  {
                    "id": "rr-columns-v",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 flex items-center justify-between gap-4 py-3 lg:gap-8 lg:py-4"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-columnItem-i",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 shrink-0"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-logo-d",
                                "type": "logo",
                                "options": {
                                  "logoType": "image",
                                  "logoText": "Root & Ripe",
                                  "src": "https://placehold.co/120x120/15602a/ffffff?text=Leaf",
                                  "link": "/"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0"
                                  },
                                  "link": {
                                    "classes": "block"
                                  },
                                  "img": {
                                    "classes": "h-9 w-9 object-contain lg:h-10 lg:w-10"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-container-g",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-text-e",
                                    "type": "text",
                                    "options": {
                                      "text": "Root & Ripe",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-serif text-[21px] font-bold leading-none tracking-[-0.4px] text-[#0f3d26] lg:text-[25px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-text-f",
                                    "type": "text",
                                    "options": {
                                      "text": "Organic Foods  ·  Healthy Living",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "whitespace-nowrap text-[8px] font-medium uppercase tracking-[1.4px] text-[#6b7a71] lg:text-[9px]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "rr-columnItem-q",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden min-w-0 flex-1 xl:block"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-menu-p",
                            "type": "menu",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "menu": {
                                "classes": "flex items-center justify-center gap-7"
                              },
                              "menu-item": {
                                "classes": "relative group"
                              },
                              "sub-menu": {
                                "classes": "absolute left-0 top-full z-50 hidden min-w-48 flex-col gap-0.5 rounded-lg border border-[#e7e9e0] bg-white p-2 shadow-lg group-hover:flex"
                              },
                              "menu-link": {
                                "classes": "flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent pb-1 text-[13px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                              },
                              "link-label": {
                                "classes": "leading-none"
                              },
                              "icon": {
                                "classes": "flex items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-menuItem-j",
                                "type": "menuItem",
                                "options": {
                                  "label": "Shop",
                                  "url": "/shop"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "border-b-2 border-[#15602a] font-semibold text-[#15602a]"
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-menuItem-k",
                                "type": "menuItem",
                                "options": {
                                  "label": "Fruits",
                                  "url": "/categories/fruits"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-menuItem-l",
                                "type": "menuItem",
                                "options": {
                                  "label": "Vegetables",
                                  "url": "/categories/vegetables"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-menuItem-m",
                                "type": "menuItem",
                                "options": {
                                  "label": "Pantry",
                                  "url": "/categories/organic-pantry"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-menuItem-n",
                                "type": "menuItem",
                                "options": {
                                  "label": "Our Farms",
                                  "url": "/our-farms"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-menuItem-o",
                                "type": "menuItem",
                                "options": {
                                  "label": "Journal",
                                  "url": "/blog"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "rr-columnItem-u",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 shrink-0 items-center gap-3 lg:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-quickSearch-r",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search for products...",
                              "iconPosition": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden w-full max-w-[16rem] [&>div]:gap-0 lg:block"
                              },
                              "input-search": {
                                "classes": "h-9 w-full! rounded-full border border-[#e7e9e0] bg-white text-[12px] text-[#0f2d1c] placeholder:text-[#6b7a71] focus:border-[#15602a] focus:outline-none lg:w-full!"
                              },
                              "input-wrapper": {
                                "classes": ""
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "popover": {
                                "classes": "absolute left-0 top-[46px] z-50 w-full rounded-lg border border-[#e7e9e0] bg-white p-3 shadow-xl"
                              },
                              "reset": {
                                "classes": ""
                              },
                              "categories": {
                                "classes": ""
                              },
                              "brands": {
                                "classes": ""
                              },
                              "items": {
                                "classes": "flex flex-col gap-1"
                              },
                              "item": {
                                "classes": "flex items-center gap-2 rounded px-2 py-1.5 text-[12px] text-[#45544a] hover:bg-[#eef5ea]"
                              },
                              "item-title": {
                                "classes": "min-w-0 truncate"
                              },
                              "item-image": {
                                "classes": "size-8 rounded object-cover"
                              },
                              "pagination": {
                                "classes": "mt-2 flex items-center gap-2"
                              },
                              "page-item": {
                                "classes": ""
                              },
                              "page-count": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-button-s",
                            "type": "button",
                            "options": {
                              "text": "",
                              "tag": "button",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconUser",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex size-9 items-center justify-center rounded-full text-[#0f2d1c] hover:bg-[#eef5ea] hover:text-[#15602a]"
                              },
                              "icon": {
                                "classes": "flex items-center"
                              },
                              "label": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "rr-cart-t",
                            "type": "cart",
                            "options": {
                              "buttonIcon": "IconShoppingCart",
                              "editMode": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative"
                              },
                              "button": {
                                "classes": "relative flex size-9 items-center justify-center rounded-full text-[#0f2d1c] hover:bg-[#eef5ea] hover:text-[#15602a]"
                              },
                              "button-quantity": {
                                "classes": "absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-[#15602a] text-[9px] font-bold text-white"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "popover": {
                                "classes": "absolute right-0 top-[46px] z-50 w-[20rem] rounded-lg border border-[#e7e9e0] bg-white p-4 shadow-xl"
                              },
                              "cart-header": {
                                "classes": "mb-3 flex items-center justify-between border-b border-[#e7e9e0] pb-2"
                              },
                              "cart-total-items": {
                                "classes": "text-[13px] font-semibold text-[#0f2d1c]"
                              },
                              "cart-close": {
                                "classes": "flex size-6 cursor-pointer items-center justify-center rounded text-[#6b7a71] hover:bg-[#eef5ea]"
                              },
                              "cart-reset": {
                                "classes": "cursor-pointer text-[11px] text-[#6b7a71] hover:text-[#15602a]"
                              },
                              "go-to-checkout": {
                                "classes": "mt-3 flex h-10 w-full items-center justify-center rounded-full bg-[#15602a] text-[13px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "coupon-input": {
                                "classes": "h-9 w-full rounded-full border border-[#e7e9e0] px-3 text-[12px] focus:border-[#15602a] focus:outline-none"
                              },
                              "coupon-apply-button": {
                                "classes": "h-9 shrink-0 rounded-full bg-[#0f3d26] px-4 text-[12px] font-semibold text-white hover:bg-[#15602a]"
                              },
                              "back-to-cart": {
                                "classes": "cursor-pointer text-[12px] text-[#357a43] hover:underline"
                              }
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
      },
      {
        "title": "Footer",
        "type": "footer",
        "meta": "",
        "content": [
          {
            "id": "rr-siteFooter-2d",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "rr-container-17",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#e8eed8]"
                  }
                },
                "children": [
                  {
                    "id": "rr-columns-16",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 flex flex-col items-center gap-4 py-6 lg:flex-row lg:justify-between lg:gap-8 lg:py-7"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-columnItem-z",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 shrink-0"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-heading-y",
                            "type": "heading",
                            "options": {
                              "text": "Stay in the loop",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-serif text-[19px] font-bold tracking-[-0.2px] text-[#0f2d1c] lg:text-[21px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-columnItem-11",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 flex-1"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-text-10",
                            "type": "text",
                            "options": {
                              "text": "Get seasonal updates, new arrivals and healthy living tips.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-center text-[12px] text-[#45544a] lg:text-left lg:text-[13px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-columnItem-15",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 shrink-0"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-14",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-full items-center gap-0 overflow-hidden rounded-full bg-white p-1 lg:w-[22rem]"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-text-12",
                                "type": "text",
                                "options": {
                                  "text": "Your email address",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-0 flex-1 px-4 text-[12px] text-[#6b7a71]"
                                  }
                                }
                              },
                              {
                                "id": "rr-button-13",
                                "type": "button",
                                "options": {
                                  "text": "Subscribe",
                                  "tag": "button",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/contact",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 shrink-0 items-center justify-center rounded-full bg-[#15602a] px-6 text-[12px] font-semibold text-white hover:bg-[#0e4a1f]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center"
                                  },
                                  "label": {
                                    "classes": ""
                                  }
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
                "id": "rr-container-2c",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#0f3d26]"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-2b",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-9 lg:py-12"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-columns-22",
                        "type": "columns",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-6"
                          },
                          "column": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-columnItem-1i",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "col-span-2 flex min-w-0 flex-col gap-4 lg:col-span-1"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-container-1c",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-logo-18",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "image",
                                      "logoText": "Root & Ripe",
                                      "src": "https://placehold.co/120x120/15602a/ffffff?text=Leaf",
                                      "link": "/"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "img": {
                                        "classes": "h-9 w-9 object-contain lg:h-10 lg:w-10"
                                      },
                                      "text": {
                                        "classes": ""
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-container-1b",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-0.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-text-19",
                                        "type": "text",
                                        "options": {
                                          "text": "Root & Ripe",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-serif text-[21px] font-bold leading-none tracking-[-0.4px] text-white lg:text-[25px]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-text-1a",
                                        "type": "text",
                                        "options": {
                                          "text": "Organic Foods  ·  Healthy Living",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "whitespace-nowrap text-[8px] font-medium uppercase tracking-[1.4px] text-white/55 lg:text-[9px]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "rr-text-1d",
                                "type": "text",
                                "options": {
                                  "text": "Better food. Healthier you.\nA greener tomorrow.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "whitespace-pre-line text-[12px] leading-relaxed text-white/70"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-1h",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-button-1e",
                                    "type": "button",
                                    "options": {
                                      "text": "",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "https://facebook.com",
                                      "target": "",
                                      "icon": "IconBrandFacebook",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                                      },
                                      "icon": {
                                        "classes": "flex items-center"
                                      },
                                      "label": {
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-button-1f",
                                    "type": "button",
                                    "options": {
                                      "text": "",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "https://instagram.com",
                                      "target": "",
                                      "icon": "IconBrandInstagram",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                                      },
                                      "icon": {
                                        "classes": "flex items-center"
                                      },
                                      "label": {
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-button-1g",
                                    "type": "button",
                                    "options": {
                                      "text": "",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "https://youtube.com",
                                      "target": "",
                                      "icon": "IconBrandYoutube",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                                      },
                                      "icon": {
                                        "classes": "flex items-center"
                                      },
                                      "label": {
                                        "classes": "hidden"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "rr-columnItem-1k",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "min-w-0"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-linkList-1j",
                                "type": "linkList",
                                "options": {
                                  "headerText": "Shop",
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Fruits",
                                      "icon": "",
                                      "slug": "/categories/fruits"
                                    },
                                    {
                                      "text": "Vegetables",
                                      "icon": "",
                                      "slug": "/categories/vegetables"
                                    },
                                    {
                                      "text": "Pantry",
                                      "icon": "",
                                      "slug": "/categories/organic-pantry"
                                    },
                                    {
                                      "text": "Nuts & Seeds",
                                      "icon": "",
                                      "slug": "/categories/nuts-seeds"
                                    },
                                    {
                                      "text": "Honey & Sweeteners",
                                      "icon": "",
                                      "slug": "/categories/honey-sweeteners"
                                    },
                                    {
                                      "text": "Family Boxes",
                                      "icon": "",
                                      "slug": "/categories/family-boxes"
                                    }
                                  ]
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-0"
                                  },
                                  "header-text": {
                                    "classes": "mb-3 text-[13px] font-bold text-white lg:text-sm"
                                  },
                                  "ul": {
                                    "classes": "flex flex-col gap-2"
                                  },
                                  "li": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "flex items-center gap-2 text-[12px] text-white/70 hover:text-white lg:text-[13px]"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-columnItem-1m",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "min-w-0"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-linkList-1l",
                                "type": "linkList",
                                "options": {
                                  "headerText": "Help",
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Delivery Information",
                                      "icon": "",
                                      "slug": "/delivery-information"
                                    },
                                    {
                                      "text": "Return & Refund",
                                      "icon": "",
                                      "slug": "/return-refund"
                                    },
                                    {
                                      "text": "FAQ",
                                      "icon": "",
                                      "slug": "/faq"
                                    },
                                    {
                                      "text": "Contact Us",
                                      "icon": "",
                                      "slug": "/contact"
                                    }
                                  ]
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-0"
                                  },
                                  "header-text": {
                                    "classes": "mb-3 text-[13px] font-bold text-white lg:text-sm"
                                  },
                                  "ul": {
                                    "classes": "flex flex-col gap-2"
                                  },
                                  "li": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "flex items-center gap-2 text-[12px] text-white/70 hover:text-white lg:text-[13px]"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-columnItem-1r",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "min-w-0"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-heading-1n",
                                "type": "heading",
                                "options": {
                                  "text": "Customer Care",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mb-3 text-[13px] font-bold text-white lg:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "rr-address-1o",
                                "type": "address",
                                "options": {
                                  "phone": {
                                    "value": "+880 1712 345678",
                                    "icon": "IconPhone"
                                  },
                                  "email": {
                                    "value": "hello@rootandripe.com",
                                    "icon": "IconMail"
                                  },
                                  "location": {
                                    "value": "Rangpur City, Bangladesh",
                                    "icon": "IconMapPin"
                                  },
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  },
                                  "item": {
                                    "classes": "flex items-start gap-2 text-[12px] text-white/70 lg:text-[13px]"
                                  },
                                  "link": {
                                    "classes": "flex items-start gap-2 text-white/70 hover:text-white"
                                  },
                                  "phone-link": {
                                    "classes": ""
                                  },
                                  "email-link": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": "mt-px flex shrink-0 items-center text-white/50"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-1q",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-button-1p",
                                    "type": "button",
                                    "options": {
                                      "text": "chat on WhatsApp",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "https://wa.me/",
                                      "target": "",
                                      "icon": "IconBrandWhatsapp",
                                      "iconSize": 15
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2 text-[12px] text-white/70 hover:text-white lg:text-[13px]"
                                      },
                                      "icon": {
                                        "classes": "flex shrink-0 items-center text-white/50"
                                      },
                                      "label": {
                                        "classes": ""
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "rr-columnItem-21",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "col-span-2 flex min-w-0 flex-col gap-4 lg:col-span-1"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-container-1u",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-text-1s",
                                    "type": "text",
                                    "options": {
                                      "text": "We’re here for you",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[12px] text-white/70 lg:text-[13px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-button-1t",
                                    "type": "button",
                                    "options": {
                                      "text": "Order via WhatsApp",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "https://wa.me/",
                                      "target": "",
                                      "icon": "IconBrandWhatsapp",
                                      "iconSize": 17
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex w-max items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-[12px] font-semibold text-white hover:border-white/50 hover:bg-white/10"
                                      },
                                      "icon": {
                                        "classes": "flex items-center"
                                      },
                                      "label": {
                                        "classes": ""
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "rr-container-20",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-text-1v",
                                    "type": "text",
                                    "options": {
                                      "text": "Follow us",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[12px] text-white/70 lg:text-[13px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-container-1z",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-button-1w",
                                        "type": "button",
                                        "options": {
                                          "text": "",
                                          "tag": "button",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "https://facebook.com",
                                          "target": "",
                                          "icon": "IconBrandFacebook",
                                          "iconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                                          },
                                          "icon": {
                                            "classes": "flex items-center"
                                          },
                                          "label": {
                                            "classes": "hidden"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-button-1x",
                                        "type": "button",
                                        "options": {
                                          "text": "",
                                          "tag": "button",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "https://instagram.com",
                                          "target": "",
                                          "icon": "IconBrandInstagram",
                                          "iconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                                          },
                                          "icon": {
                                            "classes": "flex items-center"
                                          },
                                          "label": {
                                            "classes": "hidden"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-button-1y",
                                        "type": "button",
                                        "options": {
                                          "text": "",
                                          "tag": "button",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "https://youtube.com",
                                          "target": "",
                                          "icon": "IconBrandYoutube",
                                          "iconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                                          },
                                          "icon": {
                                            "classes": "flex items-center"
                                          },
                                          "label": {
                                            "classes": "hidden"
                                          }
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
                        "id": "rr-columns-2a",
                        "type": "columns",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-5 lg:mt-10 lg:flex-row lg:justify-between"
                          },
                          "column": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-columnItem-24",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "min-w-0"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-text-23",
                                "type": "text",
                                "options": {
                                  "text": "© 2025 Root & Ripe. All rights reserved.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[11px] text-white/50"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-columnItem-29",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "min-w-0"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-container-28",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-button-25",
                                    "type": "button",
                                    "options": {
                                      "text": "Privacy Policy",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/privacy-policy",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] text-white/50 hover:text-white"
                                      },
                                      "icon": {
                                        "classes": "flex items-center"
                                      },
                                      "label": {
                                        "classes": ""
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-text-26",
                                    "type": "text",
                                    "options": {
                                      "text": "|",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] text-white/25"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-button-27",
                                    "type": "button",
                                    "options": {
                                      "text": "Terms & Conditions",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/terms-conditions",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] text-white/50 hover:text-white"
                                      },
                                      "icon": {
                                        "classes": "flex items-center"
                                      },
                                      "label": {
                                        "classes": ""
                                      }
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
        "title": "Home",
        "type": "home",
        "meta": "",
        "content": [
          {
            "id": "rr-section-33",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden"
              }
            },
            "children": [
              {
                "id": "rr-image-2e",
                "type": "image",
                "options": {
                  "src": "https://placehold.co/1600x620/eef5ea/15602a?text=Orchard+Harvest",
                  "altText": "",
                  "width": "",
                  "height": ""
                },
                "cssSelectors": {
                  "*": {
                    "classes": "absolute inset-0"
                  },
                  "link": {
                    "classes": ""
                  },
                  "img": {
                    "classes": "size-full object-cover object-center"
                  }
                }
              },
              {
                "id": "rr-container-32",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative w-full bg-gradient-to-r from-[#e7ebc2] via-[#e7ebc2]/90 to-transparent"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-31",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-10 lg:py-16"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-container-30",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-xl flex-col gap-4 lg:gap-5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-text-2f",
                            "type": "text",
                            "options": {
                              "text": "Organic Products",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-bold uppercase tracking-[2.6px] text-[#357a43] lg:text-[11px]"
                              }
                            }
                          },
                          {
                            "id": "rr-container-2i",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-heading-2g",
                                "type": "heading",
                                "options": {
                                  "text": "Good food.",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-serif text-[30px] font-bold leading-[1.1] tracking-[-0.8px] text-[#0f3d26] lg:text-[50px]"
                                  }
                                }
                              },
                              {
                                "id": "rr-heading-2h",
                                "type": "heading",
                                "options": {
                                  "text": "Grown with care.",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-serif text-[30px] font-bold leading-[1.1] tracking-[-0.8px] text-[#0f3d26] lg:text-[50px]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-text-2j",
                            "type": "text",
                            "options": {
                              "text": "Fresh fruits and thoughtfully sourced organic\nessentials for everyday living.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md whitespace-pre-line text-[13px] leading-relaxed text-[#45544a] lg:text-[15px]"
                              }
                            }
                          },
                          {
                            "id": "rr-container-2m",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-button-2k",
                                "type": "button",
                                "options": {
                                  "text": "Shop fresh picks",
                                  "tag": "button",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowNarrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex flex-row-reverse items-center gap-2 rounded-full bg-[#0f3d26] px-6 py-3 text-[13px] font-semibold text-white hover:bg-[#15602a]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center"
                                  },
                                  "label": {
                                    "classes": "leading-none"
                                  }
                                }
                              },
                              {
                                "id": "rr-button-2l",
                                "type": "button",
                                "options": {
                                  "text": "Meet our growers",
                                  "tag": "button",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/our-farms",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center rounded-full border border-[#15602a] bg-white/70 px-6 py-3 text-[13px] font-semibold text-[#15602a] hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "flex items-center"
                                  },
                                  "label": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-container-2z",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex flex-wrap items-center gap-2.5 lg:mt-4 lg:gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-container-2q",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 rounded-full bg-white/90 py-1.5 pl-1.5 pr-3.5 backdrop-blur-sm"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-container-2o",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex size-6 items-center justify-center rounded-full bg-[#eef5ea] text-[#15602a]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-icon-2n",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconLeaf",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "rr-text-2p",
                                    "type": "text",
                                    "options": {
                                      "text": "Seasonal",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-medium text-[#0f2d1c]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "rr-container-2u",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 rounded-full bg-white/90 py-1.5 pl-1.5 pr-3.5 backdrop-blur-sm"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-container-2s",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex size-6 items-center justify-center rounded-full bg-[#eef5ea] text-[#15602a]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-icon-2r",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconMapPin",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "rr-text-2t",
                                    "type": "text",
                                    "options": {
                                      "text": "Traceable",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-medium text-[#0f2d1c]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "rr-container-2y",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 rounded-full bg-white/90 py-1.5 pl-1.5 pr-3.5 backdrop-blur-sm"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-container-2w",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex size-6 items-center justify-center rounded-full bg-[#eef5ea] text-[#15602a]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-icon-2v",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconPackage",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "rr-text-2x",
                                    "type": "text",
                                    "options": {
                                      "text": "Carefully packed",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-medium text-[#0f2d1c]"
                                      }
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
            "id": "rr-section-3g",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "rr-container-3f",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-38",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-container-36",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-text-34",
                            "type": "text",
                            "options": {
                              "text": "Shop by category",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                              }
                            }
                          },
                          {
                            "id": "rr-heading-35",
                            "type": "heading",
                            "options": {
                              "text": "Organic Goodness for Every Table",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-button-37",
                        "type": "button",
                        "options": {
                          "text": "View all categories",
                          "tag": "button",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowNarrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex flex-row-reverse items-center gap-1.5 text-[11px] font-semibold text-[#357a43] hover:text-[#15602a] lg:text-xs"
                          },
                          "icon": {
                            "classes": "flex items-center"
                          },
                          "label": {
                            "classes": "leading-none"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-termsGrid-3e",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "6",
                        "per_page": "6",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count",
                        "paged": 1
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 lg:mt-6"
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-xl bg-[#fdfcf0] transition hover:shadow-md"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-termsLoop-3d",
                        "type": "termsLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-termThumbnail-39",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f7f3e4]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "h-24 w-full object-contain p-3 transition group-hover:scale-[1.04] lg:h-28 lg:p-4"
                              }
                            }
                          },
                          {
                            "id": "rr-container-3c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-3 pb-3 pt-1 lg:px-4 lg:pb-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-termTitle-3a",
                                "type": "termTitle",
                                "options": {
                                  "text": "Term Title.",
                                  "tag": "h3",
                                  "linkTo": "termUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "min-w-0 text-[12px] font-semibold leading-snug text-[#0f2d1c] group-hover:text-[#15602a] lg:text-[13px]"
                                  },
                                  "link": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-icon-3b",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconArrowNarrowRight",
                                  "size": "15"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 items-center text-[#357a43]"
                                  }
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
          },
          {
            "id": "rr-section-3x",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "rr-container-3w",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 pb-9 lg:pb-14"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-3l",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-container-3j",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-text-3h",
                            "type": "text",
                            "options": {
                              "text": "Fresh & organic",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                              }
                            }
                          },
                          {
                            "id": "rr-heading-3i",
                            "type": "heading",
                            "options": {
                              "text": "Fresh from this week’s harvest",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-button-3k",
                        "type": "button",
                        "options": {
                          "text": "View all fruits",
                          "tag": "button",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/fruits",
                          "target": "",
                          "icon": "IconArrowNarrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex flex-row-reverse items-center gap-1.5 text-[11px] font-semibold text-[#357a43] hover:text-[#15602a] lg:text-xs"
                          },
                          "icon": {
                            "classes": "flex items-center"
                          },
                          "label": {
                            "classes": "leading-none"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-postGrid-3v",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "5",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 lg:mt-6"
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col overflow-hidden rounded-xl border border-[#e7e9e0] bg-white p-3 transition hover:shadow-md lg:p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-3u",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-productBadge-3m",
                            "type": "productBadge",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 z-10 lg:left-4 lg:top-4"
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "items": {
                                "classes": "flex flex-wrap gap-1"
                              },
                              "item": {
                                "classes": "rounded-full bg-[#15602a] px-2.5 py-1 text-[9px] font-semibold text-white"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "rr-postThumbnail-3n",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "mx-auto h-28 w-full object-contain transition group-hover:scale-[1.04] lg:h-32"
                              }
                            }
                          },
                          {
                            "id": "rr-container-3s",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-1 flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-3o",
                                "type": "postTitle",
                                "options": {
                                  "text": "Product Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-1 text-[13px] font-semibold text-[#0f2d1c] group-hover:text-[#15602a] lg:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-3p",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "",
                                  "maxWord": 8,
                                  "readMoreIcon": "",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-1 text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                  },
                                  "read-more": {
                                    "classes": "hidden"
                                  },
                                  "read-more-label": {
                                    "classes": ""
                                  },
                                  "read-more-icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-productPrice-3q",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-1.5"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c] lg:text-[19px]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6b7a71] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  }
                                }
                              },
                              {
                                "id": "rr-productRatings-3r",
                                "type": "productRatings",
                                "options": {
                                  "label": "",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  },
                                  "star-rate": {
                                    "classes": "flex items-center gap-px text-[#f0a020] [&_svg]:size-3.5"
                                  },
                                  "rate-count": {
                                    "classes": "flex items-center"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "avg-rating": {
                                    "classes": "hidden"
                                  },
                                  "total-reviews": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-addToCart-3t",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCart",
                              "iconSize": 15,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#15602a] text-[12px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "leading-none"
                              }
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
            "id": "rr-section-4c",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden"
              }
            },
            "children": [
              {
                "id": "rr-image-3y",
                "type": "image",
                "options": {
                  "src": "https://placehold.co/1600x420/eef5ea/15602a?text=Mangoes+and+Citrus",
                  "altText": "",
                  "width": "",
                  "height": ""
                },
                "cssSelectors": {
                  "*": {
                    "classes": "absolute inset-0"
                  },
                  "link": {
                    "classes": ""
                  },
                  "img": {
                    "classes": "size-full object-cover object-center"
                  }
                }
              },
              {
                "id": "rr-container-4b",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative w-full bg-gradient-to-r from-[#0f3d26] via-[#0f3d26]/80 to-transparent"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-4a",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-9 lg:py-12"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-columns-49",
                        "type": "columns",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
                          },
                          "column": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-columnItem-44",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 max-w-lg flex-col gap-3 lg:gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-text-3z",
                                "type": "text",
                                "options": {
                                  "text": "Seasonal Harvest",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] font-bold uppercase tracking-[2.6px] text-white/70 lg:text-[11px]"
                                  }
                                }
                              },
                              {
                                "id": "rr-heading-40",
                                "type": "heading",
                                "options": {
                                  "text": "Taste the season",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-serif text-[26px] font-bold leading-[1.12] tracking-[-0.5px] text-white lg:text-[38px]"
                                  }
                                }
                              },
                              {
                                "id": "rr-text-41",
                                "type": "text",
                                "options": {
                                  "text": "Enjoy the sweetest mangoes and fresh citrus\nof the season. Limited time only!",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "whitespace-pre-line text-[13px] leading-relaxed text-white/80 lg:text-[14px]"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-43",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-button-42",
                                    "type": "button",
                                    "options": {
                                      "text": "Shop seasonal fruit",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/seasonal-fruits",
                                      "target": "",
                                      "icon": "IconArrowNarrowRight",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex flex-row-reverse items-center gap-2 rounded-full bg-[#15602a] px-6 py-3 text-[13px] font-semibold text-white hover:bg-[#0e4a1f]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center"
                                      },
                                      "label": {
                                        "classes": "leading-none"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "rr-columnItem-48",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden min-w-0 shrink-0 lg:block"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-container-47",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex size-[8.5rem] flex-col items-center justify-center gap-1 rounded-[46%_54%_52%_48%/48%_46%_54%_52%] bg-[#eef5ea] px-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-text-45",
                                    "type": "text",
                                    "options": {
                                      "text": "Fresh\nMangoes\n& Citrus",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "whitespace-pre-line font-serif text-[17px] font-bold italic leading-[1.25] text-[#15602a]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-icon-46",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconLeaf",
                                      "size": "15"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center text-[#357a43]"
                                      }
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
            "id": "rr-section-58",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "rr-container-57",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 pb-9 lg:pb-12"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-4f",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-4d",
                        "type": "text",
                        "options": {
                          "text": "Our promise",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-4e",
                        "type": "heading",
                        "options": {
                          "text": "Know what you bring home",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-columns-56",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-5 flex flex-col gap-6 lg:mt-7 lg:flex-row lg:gap-10"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-columnItem-4l",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 flex-1"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-featurebox-4k",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Where it grows",
                                  "description": "We source directly from trusted farms and local growers.",
                                  "icon": "IconLeaf",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Harvest & packed",
                                  "description": "Picked at the right time and packed with care.",
                                  "icon": "IconTruckDelivery",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Ingredients you can read",
                                  "description": "No hidden additives. Just natural goodness.",
                                  "icon": "IconFileDescription",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Quality checked",
                                  "description": "We check for freshness, quality and safety.",
                                  "icon": "IconShieldCheck",
                                  "iconSize": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4 lg:gap-x-0"
                              },
                              "loop-item": {
                                "classes": "flex flex-col gap-3 lg:border-l lg:border-[#e7e9e0] lg:px-5 lg:first:border-l-0 lg:first:pl-0"
                              },
                              "title": {
                                "classes": "text-[13px] font-bold text-[#0f2d1c] lg:text-sm"
                              },
                              "description": {
                                "classes": "text-[11px] leading-relaxed text-[#45544a] lg:text-[12px]"
                              },
                              "icon": {
                                "classes": "flex size-12 items-center justify-center rounded-full bg-[#eef5ea] text-[#15602a] lg:size-14"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-icon-4g",
                                "type": "icon",
                                "options": {
                                  "iconName": "",
                                  "size": "24"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-container-4j",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-featureboxTitle-4h",
                                    "type": "featureboxTitle",
                                    "options": {
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-featureboxDetails-4i",
                                    "type": "featureboxDetails",
                                    "options": {
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "rr-columnItem-55",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 shrink-0 lg:w-[22rem]"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-54",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 rounded-xl border border-[#e7e9e0] bg-white p-3 lg:gap-4 lg:p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-image-4m",
                                "type": "image",
                                "options": {
                                  "src": "https://placehold.co/300x400/eef5ea/15602a?text=Mango",
                                  "altText": "",
                                  "width": "",
                                  "height": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0"
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "img": {
                                    "classes": "h-full max-h-40 w-24 rounded-lg object-cover lg:w-28"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-53",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex min-w-0 flex-1 flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-heading-4n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Product Details",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[13px] font-bold text-[#0f2d1c] lg:text-sm"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-text-4o",
                                    "type": "text",
                                    "options": {
                                      "text": "Himsagar Mango",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 text-[10px] text-[#6b7a71] lg:text-[11px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-container-51",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-2.5 flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-container-4r",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center justify-between gap-3 border-b border-[#e7e9e0] py-1.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "rr-text-4p",
                                            "type": "text",
                                            "options": {
                                              "text": "Source",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "text-[10px] text-[#6b7a71] lg:text-[11px]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "rr-text-4q",
                                            "type": "text",
                                            "options": {
                                              "text": "Rangpur, Bangladesh",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "text-[10px] font-medium text-[#0f2d1c] lg:text-[11px]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "rr-container-4u",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center justify-between gap-3 border-b border-[#e7e9e0] py-1.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "rr-text-4s",
                                            "type": "text",
                                            "options": {
                                              "text": "Harvest Date",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "text-[10px] text-[#6b7a71] lg:text-[11px]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "rr-text-4t",
                                            "type": "text",
                                            "options": {
                                              "text": "12 Apr 2025",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "text-[10px] font-medium text-[#0f2d1c] lg:text-[11px]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "rr-container-4x",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center justify-between gap-3 border-b border-[#e7e9e0] py-1.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "rr-text-4v",
                                            "type": "text",
                                            "options": {
                                              "text": "Batch No.",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "text-[10px] text-[#6b7a71] lg:text-[11px]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "rr-text-4w",
                                            "type": "text",
                                            "options": {
                                              "text": "MG-240412",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "text-[10px] font-medium text-[#0f2d1c] lg:text-[11px]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "rr-container-50",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center justify-between gap-3 border-b border-[#e7e9e0] py-1.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "rr-text-4y",
                                            "type": "text",
                                            "options": {
                                              "text": "Packed",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "text-[10px] text-[#6b7a71] lg:text-[11px]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "rr-text-4z",
                                            "type": "text",
                                            "options": {
                                              "text": "13 Apr 2025",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "text-[10px] font-medium text-[#0f2d1c] lg:text-[11px]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "rr-text-52",
                                    "type": "text",
                                    "options": {
                                      "text": "Fresh, natural and traceable\nfrom farm to you.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-2.5 whitespace-pre-line text-[10px] leading-relaxed text-[#6b7a71] lg:text-[11px]"
                                      }
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
            "id": "rr-section-5p",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden"
              }
            },
            "children": [
              {
                "id": "rr-columns-5o",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex flex-col lg:flex-row lg:items-stretch"
                  },
                  "column": {
                    "classes": ""
                  }
                },
                "children": [
                  {
                    "id": "rr-columnItem-5b",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative min-h-[12rem] min-w-0 lg:w-[38%]"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-image-59",
                        "type": "image",
                        "options": {
                          "src": "https://placehold.co/800x600/eef5ea/15602a?text=Farmer",
                          "altText": "",
                          "width": "",
                          "height": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-0"
                          },
                          "link": {
                            "classes": ""
                          },
                          "img": {
                            "classes": "size-full object-cover object-center"
                          }
                        }
                      },
                      {
                        "id": "rr-container-5a",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative size-full bg-gradient-to-r from-transparent via-transparent to-[#faf9f3]"
                          }
                        },
                        "children": []
                      }
                    ]
                  },
                  {
                    "id": "rr-columnItem-5n",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex min-w-0 flex-1 items-center bg-[#faf9f3]"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-container-5m",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col gap-6 px-4 py-9 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-12 lg:pr-[max(1rem,calc((100vw-75rem)/2))]"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-5h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 max-w-md flex-col gap-3 lg:gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-text-5c",
                                "type": "text",
                                "options": {
                                  "text": "Our Farmers",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] font-bold uppercase tracking-[2.6px] text-[#357a43] lg:text-[11px]"
                                  }
                                }
                              },
                              {
                                "id": "rr-heading-5d",
                                "type": "heading",
                                "options": {
                                  "text": "From good soil to your table",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[30px]"
                                  }
                                }
                              },
                              {
                                "id": "rr-text-5e",
                                "type": "text",
                                "options": {
                                  "text": "We work closely with local farmers who follow\nnatural farming practices, because better soil\nmeans better food — and a healthier future.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "whitespace-pre-line text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-5g",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-button-5f",
                                    "type": "button",
                                    "options": {
                                      "text": "Our sourcing promise",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/our-farms",
                                      "target": "",
                                      "icon": "IconArrowNarrowRight",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex flex-row-reverse items-center gap-2 rounded-full bg-[#15602a] px-6 py-2.5 text-[12.5px] font-semibold text-white hover:bg-[#0e4a1f]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center"
                                      },
                                      "label": {
                                        "classes": "leading-none"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "rr-container-5l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden shrink-0 flex-col gap-3 rounded-xl bg-[#eef5ea] px-7 py-6 lg:flex lg:w-[17rem]"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-text-5i",
                                "type": "text",
                                "options": {
                                  "text": "Real Farmers\nReal Food\nA Healthier Tomorrow",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "whitespace-pre-line font-serif text-[16px] font-semibold italic leading-[1.6] text-[#0f3d26]"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-5k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-end gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-icon-5j",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconPlant2",
                                      "size": "26"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center text-[#357a43]"
                                      }
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
            "id": "rr-section-64",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "rr-container-63",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-5u",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-container-5s",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-text-5q",
                            "type": "text",
                            "options": {
                              "text": "Curated for you",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                              }
                            }
                          },
                          {
                            "id": "rr-heading-5r",
                            "type": "heading",
                            "options": {
                              "text": "Family Fruit Boxes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-button-5t",
                        "type": "button",
                        "options": {
                          "text": "View all boxes",
                          "tag": "button",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/family-boxes",
                          "target": "",
                          "icon": "IconArrowNarrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex flex-row-reverse items-center gap-1.5 text-[11px] font-semibold text-[#357a43] hover:text-[#15602a] lg:text-xs"
                          },
                          "icon": {
                            "classes": "flex items-center"
                          },
                          "label": {
                            "classes": "leading-none"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-postGrid-62",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "3",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 lg:mt-6"
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group flex items-center gap-3 rounded-xl border border-[#e7e9e0] bg-white p-3 transition hover:shadow-md lg:gap-4 lg:p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-61",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-postThumbnail-5v",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "shrink-0"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "size-24 rounded-lg bg-[#f7f3e4] object-contain p-1.5 lg:size-28"
                              }
                            }
                          },
                          {
                            "id": "rr-container-60",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-1 flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-5w",
                                "type": "postTitle",
                                "options": {
                                  "text": "Product Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-1 text-[13px] font-semibold text-[#0f2d1c] group-hover:text-[#15602a] lg:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-5x",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "",
                                  "maxWord": 8,
                                  "readMoreIcon": "",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-1 text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                  },
                                  "read-more": {
                                    "classes": "hidden"
                                  },
                                  "read-more-label": {
                                    "classes": ""
                                  },
                                  "read-more-icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-productPrice-5y",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-1.5"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-serif text-[18px] font-bold text-[#0f2d1c] lg:text-[20px]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6b7a71] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-serif text-[18px] font-bold text-[#0f2d1c]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-serif text-[18px] font-bold text-[#0f2d1c]"
                                  }
                                }
                              },
                              {
                                "id": "rr-addToCart-5z",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Cart",
                                  "icon": "IconShoppingCart",
                                  "iconSize": 15,
                                  "hideQuanity": true,
                                  "hideButton": false
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-plus": {
                                    "classes": ""
                                  },
                                  "quantity-minus": {
                                    "classes": ""
                                  },
                                  "button-wrapper": {
                                    "classes": "flex h-8 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#15602a] text-[11.5px] font-semibold text-white hover:bg-[#0e4a1f]"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "button-label": {
                                    "classes": "leading-none"
                                  }
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
          },
          {
            "id": "rr-section-6e",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] pt-8 lg:pt-11"
              }
            },
            "children": [
              {
                "id": "rr-container-6d",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-67",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-65",
                        "type": "text",
                        "options": {
                          "text": "Why choose Root & Ripe",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-66",
                        "type": "heading",
                        "options": {
                          "text": "Why families choose Root & Ripe",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-featurebox-6c",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Careful sourcing",
                          "description": "From trusted farms & local growers.",
                          "icon": "IconLeaf",
                          "iconSize": ""
                        },
                        {
                          "title": "Honest product details",
                          "description": "Real information, always.",
                          "icon": "IconHeartHandshake",
                          "iconSize": ""
                        },
                        {
                          "title": "Less unnecessary packaging",
                          "description": "Better for the planet.",
                          "icon": "IconRecycle",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6"
                      },
                      "loop-item": {
                        "classes": "flex items-center gap-3 lg:gap-4"
                      },
                      "title": {
                        "classes": "text-[12.5px] font-bold text-[#0f2d1c] lg:text-[13.5px]"
                      },
                      "description": {
                        "classes": "text-[11px] text-[#6b7a71] lg:text-[12px]"
                      },
                      "icon": {
                        "classes": "flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#eef5ea] text-[#15602a] lg:size-14"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-icon-68",
                        "type": "icon",
                        "options": {
                          "iconName": "",
                          "size": "24"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "rr-container-6b",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-0.5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-featureboxTitle-69",
                            "type": "featureboxTitle",
                            "options": {
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-featureboxDetails-6a",
                            "type": "featureboxDetails",
                            "options": {
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
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
            "id": "rr-section-7s",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "rr-container-7r",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-6j",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-container-6h",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-text-6f",
                            "type": "text",
                            "options": {
                              "text": "Real stories",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                              }
                            }
                          },
                          {
                            "id": "rr-heading-6g",
                            "type": "heading",
                            "options": {
                              "text": "Loved by organic shoppers",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-button-6i",
                        "type": "button",
                        "options": {
                          "text": "View all reviews",
                          "tag": "button",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/reviews",
                          "target": "",
                          "icon": "IconArrowNarrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex flex-row-reverse items-center gap-1.5 text-[11px] font-semibold text-[#357a43] hover:text-[#15602a] lg:text-xs"
                          },
                          "icon": {
                            "classes": "flex items-center"
                          },
                          "label": {
                            "classes": "leading-none"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-grid-7q",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-4"
                      },
                      "grid-item": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-gridItem-6x",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-6w",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 rounded-xl border border-[#e7e9e0] bg-white p-4 lg:gap-4 lg:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-image-6k",
                                "type": "image",
                                "options": {
                                  "src": "https://placehold.co/120x120/eef5ea/15602a?text=SR",
                                  "altText": "",
                                  "width": "",
                                  "height": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0"
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "img": {
                                    "classes": "size-11 rounded-full object-cover lg:size-12"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-6v",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex min-w-0 flex-1 flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-container-6q",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-px text-[#f0a020]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-icon-6l",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-6m",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-6n",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-6o",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-6p",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "rr-text-6r",
                                    "type": "text",
                                    "options": {
                                      "text": "“The mangoes were incredibly fresh\nand flavorful. You can really taste\nthe difference with organic produce.”",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "whitespace-pre-line text-[11.5px] leading-relaxed text-[#45544a] lg:text-[12.5px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-container-6u",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 flex flex-col gap-0.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-text-6s",
                                        "type": "text",
                                        "options": {
                                          "text": "Sadia Rahman",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[11.5px] font-bold text-[#0f2d1c] lg:text-[12.5px]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-text-6t",
                                        "type": "text",
                                        "options": {
                                          "text": "Rangpur",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                          }
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
                        "id": "rr-gridItem-7b",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-7a",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 rounded-xl border border-[#e7e9e0] bg-white p-4 lg:gap-4 lg:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-image-6y",
                                "type": "image",
                                "options": {
                                  "src": "https://placehold.co/120x120/eef5ea/15602a?text=TH",
                                  "altText": "",
                                  "width": "",
                                  "height": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0"
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "img": {
                                    "classes": "size-11 rounded-full object-cover lg:size-12"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-79",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex min-w-0 flex-1 flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-container-74",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-px text-[#f0a020]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-icon-6z",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-70",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-71",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-72",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-73",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "rr-text-75",
                                    "type": "text",
                                    "options": {
                                      "text": "“Great quality and reliable delivery.\nI love that the products are\nnaturally grown and not chemically treated.”",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "whitespace-pre-line text-[11.5px] leading-relaxed text-[#45544a] lg:text-[12.5px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-container-78",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 flex flex-col gap-0.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-text-76",
                                        "type": "text",
                                        "options": {
                                          "text": "Tanvir Hasan",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[11.5px] font-bold text-[#0f2d1c] lg:text-[12.5px]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-text-77",
                                        "type": "text",
                                        "options": {
                                          "text": "Dhaka",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                          }
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
                        "id": "rr-gridItem-7p",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-container-7o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 rounded-xl border border-[#e7e9e0] bg-white p-4 lg:gap-4 lg:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-image-7c",
                                "type": "image",
                                "options": {
                                  "src": "https://placehold.co/120x120/eef5ea/15602a?text=NJ",
                                  "altText": "",
                                  "width": "",
                                  "height": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0"
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "img": {
                                    "classes": "size-11 rounded-full object-cover lg:size-12"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-7n",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex min-w-0 flex-1 flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-container-7i",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-px text-[#f0a020]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-icon-7d",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-7e",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-7f",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-7g",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-icon-7h",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": "13"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "rr-text-7j",
                                    "type": "text",
                                    "options": {
                                      "text": "“The fruit box is perfect for our family.\nFresh, healthy and well packed.\nWill definitely order again!”",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "whitespace-pre-line text-[11.5px] leading-relaxed text-[#45544a] lg:text-[12.5px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-container-7m",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 flex flex-col gap-0.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-text-7k",
                                        "type": "text",
                                        "options": {
                                          "text": "Nusrat Jahan",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[11.5px] font-bold text-[#0f2d1c] lg:text-[12.5px]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-text-7l",
                                        "type": "text",
                                        "options": {
                                          "text": "Rangpur",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                          }
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
            "id": "rr-section-85",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "rr-container-84",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 pb-10 lg:pb-14"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-7x",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-container-7v",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1.5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-text-7t",
                            "type": "text",
                            "options": {
                              "text": "From our journal",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                              }
                            }
                          },
                          {
                            "id": "rr-heading-7u",
                            "type": "heading",
                            "options": {
                              "text": "Helpful tips & fresh ideas",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-button-7w",
                        "type": "button",
                        "options": {
                          "text": "View all articles",
                          "tag": "button",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowNarrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex flex-row-reverse items-center gap-1.5 text-[11px] font-semibold text-[#357a43] hover:text-[#15602a] lg:text-xs"
                          },
                          "icon": {
                            "classes": "flex items-center"
                          },
                          "label": {
                            "classes": "leading-none"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-postGrid-83",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "post"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "3",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 lg:mt-6"
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group flex items-start gap-3 rounded-xl border border-[#e7e9e0] bg-white p-3 transition hover:shadow-md lg:gap-4 lg:p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-82",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-postThumbnail-7y",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "shrink-0"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "size-20 rounded-lg object-cover lg:size-24"
                              }
                            }
                          },
                          {
                            "id": "rr-container-81",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-1 flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-7z",
                                "type": "postTitle",
                                "options": {
                                  "text": "Post Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 text-[12.5px] font-bold leading-snug text-[#0f2d1c] group-hover:text-[#15602a] lg:text-[13.5px]"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-80",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "Read more",
                                  "maxWord": 14,
                                  "readMoreIcon": "IconArrowNarrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2 text-[11px] leading-relaxed text-[#6b7a71] lg:text-[11.5px]"
                                  },
                                  "read-more": {
                                    "classes": "inline-flex w-max flex-row-reverse items-center gap-1.5 text-[11px] font-semibold text-[#357a43] hover:text-[#15602a]"
                                  },
                                  "read-more-label": {
                                    "classes": "leading-none"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex items-center"
                                  }
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
        "title": "Shop",
        "type": "shop",
        "meta": "",
        "content": [
          {
            "id": "rr-section-8b",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-8a",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-89",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-86",
                        "type": "text",
                        "options": {
                          "text": "Shop",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-87",
                        "type": "heading",
                        "options": {
                          "text": "Everything we grow and source",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-88",
                        "type": "text",
                        "options": {
                          "text": "Every product we stock, newest first. Cash on delivery across Bangladesh.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-8p",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-8o",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-postGrid-8n",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "12",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col overflow-hidden rounded-xl border border-[#e7e9e0] bg-white p-3 transition hover:shadow-md lg:p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-8l",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-productDiscount-8c",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-3 top-3 z-10 lg:right-4 lg:top-4"
                              },
                              "discount": {
                                "classes": "rounded-full bg-[#0f3d26] px-2 py-1 text-[9px] font-semibold text-white"
                              },
                              "label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-productBadge-8d",
                            "type": "productBadge",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 z-10 lg:left-4 lg:top-4"
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "items": {
                                "classes": "flex flex-wrap gap-1"
                              },
                              "item": {
                                "classes": "rounded-full bg-[#15602a] px-2.5 py-1 text-[9px] font-semibold text-white"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "rr-postThumbnail-8e",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "mx-auto h-28 w-full object-contain transition group-hover:scale-[1.04] lg:h-32"
                              }
                            }
                          },
                          {
                            "id": "rr-container-8j",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-1 flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-8f",
                                "type": "postTitle",
                                "options": {
                                  "text": "Product Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-1 text-[13px] font-semibold text-[#0f2d1c] group-hover:text-[#15602a] lg:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-8g",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "",
                                  "maxWord": 8,
                                  "readMoreIcon": "",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-1 text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                  },
                                  "read-more": {
                                    "classes": "hidden"
                                  },
                                  "read-more-label": {
                                    "classes": ""
                                  },
                                  "read-more-icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-productPrice-8h",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-1.5"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c] lg:text-[19px]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6b7a71] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  }
                                }
                              },
                              {
                                "id": "rr-productRatings-8i",
                                "type": "productRatings",
                                "options": {
                                  "label": "",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  },
                                  "star-rate": {
                                    "classes": "flex items-center gap-px text-[#f0a020] [&_svg]:size-3.5"
                                  },
                                  "rate-count": {
                                    "classes": "flex items-center"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "avg-rating": {
                                    "classes": "hidden"
                                  },
                                  "total-reviews": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-addToCart-8k",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCart",
                              "iconSize": 15,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#15602a] text-[12px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "leading-none"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-postGridPagination-8m",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "IconChevronLeft",
                          "nextText": "Next",
                          "nextIcon": "IconChevronRight",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-7 flex items-center justify-center gap-2 lg:mt-9"
                          },
                          "previous": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "next": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "previous-icon": {
                            "classes": "flex items-center"
                          },
                          "next-icon": {
                            "classes": "flex items-center"
                          },
                          "current": {
                            "classes": "flex size-9 items-center justify-center rounded-full bg-[#15602a] text-[12px] font-semibold text-white"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-8w",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-t border-[#e7e9e0] bg-white py-7 lg:py-10"
              }
            },
            "children": [
              {
                "id": "rr-container-8v",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-featurebox-8u",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Fresh from the farm",
                          "description": "Picked and packed the same week",
                          "icon": "IconLeaf",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Pay when it reaches your door",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Careful cold handling",
                          "description": "Rangpur City & nearby areas",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "Not fresh? Tell us",
                          "description": "We replace or refund it",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Here to help",
                          "description": "Call or message any day",
                          "icon": "IconHeadset",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "flex items-center gap-2.5"
                      },
                      "title": {
                        "classes": "text-[12px] font-bold text-[#0f2d1c]"
                      },
                      "description": {
                        "classes": "text-[10.5px] text-[#6b7a71]"
                      },
                      "icon": {
                        "classes": "flex size-10 shrink-0 items-center justify-center rounded-full bg-[#eef5ea] text-[#15602a]"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-icon-8q",
                        "type": "icon",
                        "options": {
                          "iconName": "",
                          "size": "20"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "rr-container-8t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-0.5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-featureboxTitle-8r",
                            "type": "featureboxTitle",
                            "options": {
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-featureboxDetails-8s",
                            "type": "featureboxDetails",
                            "options": {
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
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
      },
      {
        "title": "Product",
        "type": "product",
        "meta": "",
        "content": [
          {
            "id": "rr-section-9g",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-9f",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-grid-9e",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-10"
                      },
                      "grid-item": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-gridItem-8y",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-productGallery-8x",
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
                              "*": {
                                "classes": "overflow-hidden rounded-xl border border-[#e7e9e0] bg-white p-3 lg:p-4"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": ""
                              },
                              "image": {
                                "classes": "size-full rounded-lg object-contain"
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "absolute left-2 top-1/2 z-10 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#0f2d1c] shadow hover:bg-white"
                              },
                              "next": {
                                "classes": "absolute right-2 top-1/2 z-10 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#0f2d1c] shadow hover:bg-white"
                              },
                              "pagination": {
                                "classes": "mt-3 flex items-center justify-center gap-1.5"
                              },
                              "dot": {
                                "classes": "size-1.5 rounded-full bg-[#e7e9e0]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-gridItem-9d",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-productCategories-8z",
                            "type": "productCategories",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "items": {
                                "classes": "flex flex-wrap gap-1.5"
                              },
                              "item": {
                                "classes": "rounded-full bg-[#eef5ea] px-2.5 py-1 text-[10px] font-medium text-[#15602a] hover:bg-[#dfeeda]"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "rr-postTitle-90",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h1",
                              "linkTo": "",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                              }
                            }
                          },
                          {
                            "id": "rr-productRatings-91",
                            "type": "productRatings",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              },
                              "star-rate": {
                                "classes": "flex items-center gap-px text-[#f0a020] [&_svg]:size-4"
                              },
                              "rate-count": {
                                "classes": "flex items-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "avg-rating": {
                                "classes": "text-[12px] font-semibold text-[#0f2d1c]"
                              },
                              "total-reviews": {
                                "classes": "text-[12px] text-[#6b7a71]"
                              }
                            }
                          },
                          {
                            "id": "rr-container-94",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-productPrice-92",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-serif text-[26px] font-bold text-[#0f2d1c] lg:text-[30px]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[14px] text-[#6b7a71] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-serif text-[26px] font-bold text-[#0f2d1c]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-serif text-[26px] font-bold text-[#0f2d1c]"
                                  }
                                }
                              },
                              {
                                "id": "rr-productDiscount-93",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF today",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "discount": {
                                    "classes": "rounded-full bg-[#0f3d26] px-3 py-1 text-[11px] font-semibold text-white"
                                  },
                                  "label": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-productVariablePrices-95",
                            "type": "productVariablePrices",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              },
                              "attr-wrap": {
                                "classes": "flex flex-col gap-2"
                              },
                              "attr-item": {
                                "classes": "flex flex-col gap-1.5"
                              },
                              "attr-title": {
                                "classes": "text-[11px] font-semibold uppercase tracking-[1.2px] text-[#6b7a71]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-full border border-[#e7e9e0] bg-white px-3.5 py-1.5 text-[12px] text-[#45544a] hover:border-[#15602a]"
                              },
                              "variation-price": {
                                "classes": "text-[12px] font-semibold text-[#0f2d1c]"
                              },
                              "variation-selected": {
                                "classes": "border-[#15602a] bg-[#eef5ea] text-[#15602a]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40"
                              }
                            }
                          },
                          {
                            "id": "rr-productStockStatus-96",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock",
                              "inStockText": "In stock, picked fresh",
                              "outOfStockIcon": "IconPointFilled",
                              "inStockIcon": "IconPointFilled",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "stock-status": {
                                "classes": "flex items-center gap-1.5"
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "label-text": {
                                "classes": ""
                              },
                              "label-icon": {
                                "classes": ""
                              },
                              "icon": {
                                "classes": "flex items-center"
                              },
                              "out-of-stock": {
                                "classes": "flex items-center gap-1.5 text-[12px] font-medium text-[#b3261e]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1.5 text-[12px] font-medium text-[#15602a]"
                              },
                              "in-stock-label": {
                                "classes": ""
                              },
                              "in-stock-icon": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-addToCart-97",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCart",
                              "iconSize": 18,
                              "hideQuanity": false,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-1 flex flex-wrap items-center gap-3"
                              },
                              "quantity-wrapper": {
                                "classes": "flex h-11 items-center overflow-hidden rounded-full border border-[#e7e9e0] bg-white"
                              },
                              "quantity-input": {
                                "classes": "h-full w-12 border-0 text-center text-[13px] font-semibold text-[#0f2d1c] focus:outline-none"
                              },
                              "quantity-plus": {
                                "classes": "flex size-10 cursor-pointer items-center justify-center text-[#45544a] hover:text-[#15602a]"
                              },
                              "quantity-minus": {
                                "classes": "flex size-10 cursor-pointer items-center justify-center text-[#45544a] hover:text-[#15602a]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-11 min-w-[12rem] flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#15602a] text-[13px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "leading-none"
                              }
                            }
                          },
                          {
                            "id": "rr-whatsappButton-98",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Ask about this product",
                              "phone": "",
                              "message": "Hi, I would like to ask about {product_title} {product_url}",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "inline-flex w-max items-center gap-2 rounded-full border border-[#15602a] px-5 py-2.5 text-[12.5px] font-semibold text-[#15602a] hover:bg-[#eef5ea]"
                              },
                              "icon": {
                                "classes": "flex items-center"
                              },
                              "label": {
                                "classes": "leading-none"
                              }
                            }
                          },
                          {
                            "id": "rr-list-99",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCheck",
                              "iconSize": 15,
                              "items": [
                                {
                                  "text": "Cash on delivery everywhere in Bangladesh",
                                  "icon": ""
                                },
                                {
                                  "text": "Inside Rangpur: usually next day",
                                  "icon": ""
                                },
                                {
                                  "text": "Outside Rangpur: two to three days by courier",
                                  "icon": ""
                                },
                                {
                                  "text": "Packed cool and cushioned so it travels well",
                                  "icon": ""
                                },
                                {
                                  "text": "Not fresh on arrival? Send a photo and we replace it",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex flex-col gap-2 rounded-xl border border-[#e7e9e0] bg-white p-4"
                              },
                              "li": {
                                "classes": "flex items-start gap-2 text-[11.5px] leading-relaxed text-[#45544a] lg:text-[12.5px]"
                              },
                              "icon": {
                                "classes": "mt-0.5 flex shrink-0 items-center text-[#15602a]"
                              },
                              "text": {
                                "classes": "min-w-0"
                              }
                            }
                          },
                          {
                            "id": "rr-container-9c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-1 flex flex-col gap-1.5 border-t border-[#e7e9e0] pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-productSku-9a",
                                "type": "productSku",
                                "options": {
                                  "label": "SKU:",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 text-[11px] text-[#6b7a71]"
                                  },
                                  "label": {
                                    "classes": "font-medium"
                                  },
                                  "sku": {
                                    "classes": "text-[#45544a]"
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-productTags-9b",
                                "type": "productTags",
                                "options": {
                                  "label": "Tags:",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap items-center gap-1.5 text-[11px] text-[#6b7a71]"
                                  },
                                  "label": {
                                    "classes": "font-medium"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap items-center gap-1.5"
                                  },
                                  "item": {
                                    "classes": "text-[#357a43] hover:underline"
                                  },
                                  "category-name": {
                                    "classes": ""
                                  },
                                  "separator": {
                                    "classes": "text-[#6b7a71]"
                                  }
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
          },
          {
            "id": "rr-section-9y",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-9x",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-tabs-9w",
                    "type": "tabs",
                    "options": {
                      "orientation": "",
                      "tabsItems": [
                        {
                          "label": "Description",
                          "icon": "IconFileDescription"
                        },
                        {
                          "label": "Storage & care",
                          "icon": "IconFridge"
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
                      "*": {
                        "classes": "flex flex-col gap-5"
                      },
                      "navs-items": {
                        "classes": "flex flex-wrap items-center gap-1 border-b border-[#e7e9e0]"
                      },
                      "nav-item": {
                        "classes": "flex cursor-pointer items-center gap-1.5 border-b-2 border-transparent px-3 py-2.5 text-[12.5px] font-medium text-[#6b7a71] hover:text-[#15602a]"
                      },
                      "nav-item-active": {
                        "classes": "border-[#15602a] text-[#15602a]"
                      },
                      "nav-item-label": {
                        "classes": "leading-none"
                      },
                      "nav-item-icon": {
                        "classes": "flex items-center"
                      },
                      "nav-item-content": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-tabsItem-9i",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-postContent-9h",
                            "type": "postContent",
                            "options": {
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "prose max-w-none text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-tabsItem-9k",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-list-9j",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconPointFilled",
                              "iconSize": 14,
                              "items": [
                                {
                                  "text": "Keep somewhere cool and out of direct sun",
                                  "icon": ""
                                },
                                {
                                  "text": "Rinse just before eating, not before storing",
                                  "icon": ""
                                },
                                {
                                  "text": "Ripen at room temperature, then refrigerate",
                                  "icon": ""
                                },
                                {
                                  "text": "Replace this list with the real care notes for this product",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              },
                              "li": {
                                "classes": "flex items-start gap-2 text-[12.5px] leading-relaxed text-[#45544a]"
                              },
                              "icon": {
                                "classes": "mt-0.5 flex shrink-0 items-center text-[#15602a]"
                              },
                              "text": {
                                "classes": "min-w-0"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-tabsItem-9m",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-list-9l",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconPointFilled",
                              "iconSize": 14,
                              "items": [
                                {
                                  "text": "Inside Rangpur City: usually next day",
                                  "icon": ""
                                },
                                {
                                  "text": "Outside Rangpur: two to three days by courier",
                                  "icon": ""
                                },
                                {
                                  "text": "Cash on delivery everywhere in Bangladesh",
                                  "icon": ""
                                },
                                {
                                  "text": "We call to confirm the address before the parcel leaves",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              },
                              "li": {
                                "classes": "flex items-start gap-2 text-[12.5px] leading-relaxed text-[#45544a]"
                              },
                              "icon": {
                                "classes": "mt-0.5 flex shrink-0 items-center text-[#15602a]"
                              },
                              "text": {
                                "classes": "min-w-0"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-tabsItem-9v",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-commentsGrid-9u",
                            "type": "commentsGrid",
                            "options": {
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-5"
                              },
                              "loop-items": {
                                "classes": "flex flex-col gap-4"
                              },
                              "loop-item": {
                                "classes": "flex gap-3 rounded-xl border border-[#e7e9e0] bg-[#faf9f3] p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-commentsLoop-9s",
                                "type": "commentsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "loop-items": {
                                    "classes": ""
                                  },
                                  "loop-item": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-commentAvatar-9n",
                                    "type": "commentAvatar",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0"
                                      },
                                      "link": {
                                        "classes": ""
                                      },
                                      "image": {
                                        "classes": "size-10 rounded-full object-cover"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-container-9r",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex min-w-0 flex-1 flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "rr-commentAuthor-9o",
                                        "type": "commentAuthor",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[12.5px] font-bold text-[#0f2d1c]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-commentRate-9p",
                                        "type": "commentRate",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center gap-px text-[#f0a020] [&_svg]:size-3.5"
                                          }
                                        }
                                      },
                                      {
                                        "id": "rr-commentContent-9q",
                                        "type": "commentContent",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[12px] leading-relaxed text-[#45544a]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "rr-commentsForm-9t",
                                "type": "commentsForm",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3 rounded-xl border border-[#e7e9e0] bg-white p-4"
                                  }
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
          },
          {
            "id": "rr-section-ae",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-ad",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-a1",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-9z",
                        "type": "text",
                        "options": {
                          "text": "More to try",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-a0",
                        "type": "heading",
                        "options": {
                          "text": "You may also like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-relatedProducts-ac",
                    "type": "relatedProducts",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "5",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 lg:mt-6"
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col overflow-hidden rounded-xl border border-[#e7e9e0] bg-white p-3 transition hover:shadow-md lg:p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-ab",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-productDiscount-a2",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-3 top-3 z-10 lg:right-4 lg:top-4"
                              },
                              "discount": {
                                "classes": "rounded-full bg-[#0f3d26] px-2 py-1 text-[9px] font-semibold text-white"
                              },
                              "label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-productBadge-a3",
                            "type": "productBadge",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 z-10 lg:left-4 lg:top-4"
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "items": {
                                "classes": "flex flex-wrap gap-1"
                              },
                              "item": {
                                "classes": "rounded-full bg-[#15602a] px-2.5 py-1 text-[9px] font-semibold text-white"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "rr-postThumbnail-a4",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "mx-auto h-28 w-full object-contain transition group-hover:scale-[1.04] lg:h-32"
                              }
                            }
                          },
                          {
                            "id": "rr-container-a9",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-1 flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-a5",
                                "type": "postTitle",
                                "options": {
                                  "text": "Product Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-1 text-[13px] font-semibold text-[#0f2d1c] group-hover:text-[#15602a] lg:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-a6",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "",
                                  "maxWord": 8,
                                  "readMoreIcon": "",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-1 text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                  },
                                  "read-more": {
                                    "classes": "hidden"
                                  },
                                  "read-more-label": {
                                    "classes": ""
                                  },
                                  "read-more-icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-productPrice-a7",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-1.5"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c] lg:text-[19px]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6b7a71] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  }
                                }
                              },
                              {
                                "id": "rr-productRatings-a8",
                                "type": "productRatings",
                                "options": {
                                  "label": "",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  },
                                  "star-rate": {
                                    "classes": "flex items-center gap-px text-[#f0a020] [&_svg]:size-3.5"
                                  },
                                  "rate-count": {
                                    "classes": "flex items-center"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "avg-rating": {
                                    "classes": "hidden"
                                  },
                                  "total-reviews": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-addToCart-aa",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCart",
                              "iconSize": 15,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#15602a] text-[12px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "leading-none"
                              }
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
      },
      {
        "title": "Categories Archive",
        "type": "categories",
        "meta": "",
        "content": [
          {
            "id": "rr-section-ak",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-aj",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-ai",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-af",
                        "type": "text",
                        "options": {
                          "text": "Categories",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-ag",
                        "type": "heading",
                        "options": {
                          "text": "Shop by category",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-ah",
                        "type": "text",
                        "options": {
                          "text": "Every category in the shop. Pick one to narrow things down.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-at",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-as",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-termsGrid-ar",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "18",
                        "per_page": "18",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count",
                        "paged": 1
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-xl bg-[#fdfcf0] transition hover:shadow-md"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-termsLoop-ap",
                        "type": "termsLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-termThumbnail-al",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f7f3e4]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "h-24 w-full object-contain p-3 transition group-hover:scale-[1.04] lg:h-28 lg:p-4"
                              }
                            }
                          },
                          {
                            "id": "rr-container-ao",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5 px-3 pb-3 pt-1 lg:px-4 lg:pb-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-termTitle-am",
                                "type": "termTitle",
                                "options": {
                                  "text": "Term Title.",
                                  "tag": "h3",
                                  "linkTo": "termUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[12px] font-semibold leading-snug text-[#0f2d1c] group-hover:text-[#15602a] lg:text-[13px]"
                                  },
                                  "link": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-termCount-an",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": " items",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "rr-termsGridPagination-aq",
                        "type": "termsGridPagination",
                        "options": {
                          "tag": "div"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-7 flex items-center justify-center gap-2 lg:mt-9"
                          },
                          "previous": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "next": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "previous-icon": {
                            "classes": "flex items-center"
                          },
                          "next-icon": {
                            "classes": "flex items-center"
                          },
                          "current": {
                            "classes": "flex size-9 items-center justify-center rounded-full bg-[#15602a] text-[12px] font-semibold text-white"
                          }
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
        "title": "Categories Single",
        "type": "categories_single",
        "meta": "",
        "content": [
          {
            "id": "rr-section-ay",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-ax",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-aw",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-archiveTitle-au",
                        "type": "archiveTitle",
                        "options": {
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-av",
                        "type": "text",
                        "options": {
                          "text": "Everything in this category, newest first. Cash on delivery on every order.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-bc",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-bb",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-postGrid-ba",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "12",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col overflow-hidden rounded-xl border border-[#e7e9e0] bg-white p-3 transition hover:shadow-md lg:p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-b8",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-productDiscount-az",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-3 top-3 z-10 lg:right-4 lg:top-4"
                              },
                              "discount": {
                                "classes": "rounded-full bg-[#0f3d26] px-2 py-1 text-[9px] font-semibold text-white"
                              },
                              "label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-productBadge-b0",
                            "type": "productBadge",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 z-10 lg:left-4 lg:top-4"
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "items": {
                                "classes": "flex flex-wrap gap-1"
                              },
                              "item": {
                                "classes": "rounded-full bg-[#15602a] px-2.5 py-1 text-[9px] font-semibold text-white"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "rr-postThumbnail-b1",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "mx-auto h-28 w-full object-contain transition group-hover:scale-[1.04] lg:h-32"
                              }
                            }
                          },
                          {
                            "id": "rr-container-b6",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-1 flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-b2",
                                "type": "postTitle",
                                "options": {
                                  "text": "Product Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-1 text-[13px] font-semibold text-[#0f2d1c] group-hover:text-[#15602a] lg:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-b3",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "",
                                  "maxWord": 8,
                                  "readMoreIcon": "",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-1 text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                  },
                                  "read-more": {
                                    "classes": "hidden"
                                  },
                                  "read-more-label": {
                                    "classes": ""
                                  },
                                  "read-more-icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-productPrice-b4",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-1.5"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c] lg:text-[19px]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6b7a71] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  }
                                }
                              },
                              {
                                "id": "rr-productRatings-b5",
                                "type": "productRatings",
                                "options": {
                                  "label": "",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  },
                                  "star-rate": {
                                    "classes": "flex items-center gap-px text-[#f0a020] [&_svg]:size-3.5"
                                  },
                                  "rate-count": {
                                    "classes": "flex items-center"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "avg-rating": {
                                    "classes": "hidden"
                                  },
                                  "total-reviews": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-addToCart-b7",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCart",
                              "iconSize": 15,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#15602a] text-[12px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "leading-none"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-postGridPagination-b9",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "IconChevronLeft",
                          "nextText": "Next",
                          "nextIcon": "IconChevronRight",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-7 flex items-center justify-center gap-2 lg:mt-9"
                          },
                          "previous": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "next": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "previous-icon": {
                            "classes": "flex items-center"
                          },
                          "next-icon": {
                            "classes": "flex items-center"
                          },
                          "current": {
                            "classes": "flex size-9 items-center justify-center rounded-full bg-[#15602a] text-[12px] font-semibold text-white"
                          }
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
        "title": "Tags Archive",
        "type": "tags",
        "meta": "",
        "content": [
          {
            "id": "rr-section-bi",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-bh",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-bg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-bd",
                        "type": "text",
                        "options": {
                          "text": "Tags",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-be",
                        "type": "heading",
                        "options": {
                          "text": "Browse by tag",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-bf",
                        "type": "text",
                        "options": {
                          "text": "Tags cut across categories: seasonal, chemical free, imported and the rest.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-br",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-bq",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-termsGrid-bp",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "18",
                        "per_page": "18",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count",
                        "paged": 1
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-xl bg-[#fdfcf0] transition hover:shadow-md"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-termsLoop-bn",
                        "type": "termsLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-termThumbnail-bj",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f7f3e4]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "h-24 w-full object-contain p-3 transition group-hover:scale-[1.04] lg:h-28 lg:p-4"
                              }
                            }
                          },
                          {
                            "id": "rr-container-bm",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5 px-3 pb-3 pt-1 lg:px-4 lg:pb-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-termTitle-bk",
                                "type": "termTitle",
                                "options": {
                                  "text": "Term Title.",
                                  "tag": "h3",
                                  "linkTo": "termUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[12px] font-semibold leading-snug text-[#0f2d1c] group-hover:text-[#15602a] lg:text-[13px]"
                                  },
                                  "link": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-termCount-bl",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": " items",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "rr-termsGridPagination-bo",
                        "type": "termsGridPagination",
                        "options": {
                          "tag": "div"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-7 flex items-center justify-center gap-2 lg:mt-9"
                          },
                          "previous": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "next": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "previous-icon": {
                            "classes": "flex items-center"
                          },
                          "next-icon": {
                            "classes": "flex items-center"
                          },
                          "current": {
                            "classes": "flex size-9 items-center justify-center rounded-full bg-[#15602a] text-[12px] font-semibold text-white"
                          }
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
        "title": "Tags Single",
        "type": "tags_single",
        "meta": "",
        "content": [
          {
            "id": "rr-section-bw",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-bv",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-bu",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-archiveTitle-bs",
                        "type": "archiveTitle",
                        "options": {
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-bt",
                        "type": "text",
                        "options": {
                          "text": "Everything carrying this tag, newest first.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-ca",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-c9",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-postGrid-c8",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "12",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col overflow-hidden rounded-xl border border-[#e7e9e0] bg-white p-3 transition hover:shadow-md lg:p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-c6",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-productDiscount-bx",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-3 top-3 z-10 lg:right-4 lg:top-4"
                              },
                              "discount": {
                                "classes": "rounded-full bg-[#0f3d26] px-2 py-1 text-[9px] font-semibold text-white"
                              },
                              "label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-productBadge-by",
                            "type": "productBadge",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 z-10 lg:left-4 lg:top-4"
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "items": {
                                "classes": "flex flex-wrap gap-1"
                              },
                              "item": {
                                "classes": "rounded-full bg-[#15602a] px-2.5 py-1 text-[9px] font-semibold text-white"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "rr-postThumbnail-bz",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "mx-auto h-28 w-full object-contain transition group-hover:scale-[1.04] lg:h-32"
                              }
                            }
                          },
                          {
                            "id": "rr-container-c4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-1 flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-c0",
                                "type": "postTitle",
                                "options": {
                                  "text": "Product Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-1 text-[13px] font-semibold text-[#0f2d1c] group-hover:text-[#15602a] lg:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-c1",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "",
                                  "maxWord": 8,
                                  "readMoreIcon": "",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-1 text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                  },
                                  "read-more": {
                                    "classes": "hidden"
                                  },
                                  "read-more-label": {
                                    "classes": ""
                                  },
                                  "read-more-icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-productPrice-c2",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-1.5"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c] lg:text-[19px]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6b7a71] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  }
                                }
                              },
                              {
                                "id": "rr-productRatings-c3",
                                "type": "productRatings",
                                "options": {
                                  "label": "",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  },
                                  "star-rate": {
                                    "classes": "flex items-center gap-px text-[#f0a020] [&_svg]:size-3.5"
                                  },
                                  "rate-count": {
                                    "classes": "flex items-center"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "avg-rating": {
                                    "classes": "hidden"
                                  },
                                  "total-reviews": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-addToCart-c5",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCart",
                              "iconSize": 15,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#15602a] text-[12px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "leading-none"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-postGridPagination-c7",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "IconChevronLeft",
                          "nextText": "Next",
                          "nextIcon": "IconChevronRight",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-7 flex items-center justify-center gap-2 lg:mt-9"
                          },
                          "previous": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "next": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "previous-icon": {
                            "classes": "flex items-center"
                          },
                          "next-icon": {
                            "classes": "flex items-center"
                          },
                          "current": {
                            "classes": "flex size-9 items-center justify-center rounded-full bg-[#15602a] text-[12px] font-semibold text-white"
                          }
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
        "title": "Brands Archive",
        "type": "brands",
        "meta": "",
        "content": [
          {
            "id": "rr-section-cg",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-cf",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-ce",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-cb",
                        "type": "text",
                        "options": {
                          "text": "Our farms",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-cc",
                        "type": "heading",
                        "options": {
                          "text": "The farms we buy from",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-cd",
                        "type": "text",
                        "options": {
                          "text": "The growers and producers behind what we sell. Pick one to see their produce.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-cp",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-co",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-termsGrid-cn",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "18",
                        "per_page": "18",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count",
                        "paged": 1
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-xl bg-[#fdfcf0] transition hover:shadow-md"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-termsLoop-cl",
                        "type": "termsLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-termThumbnail-ch",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f7f3e4]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "h-24 w-full object-contain p-3 transition group-hover:scale-[1.04] lg:h-28 lg:p-4"
                              }
                            }
                          },
                          {
                            "id": "rr-container-ck",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5 px-3 pb-3 pt-1 lg:px-4 lg:pb-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-termTitle-ci",
                                "type": "termTitle",
                                "options": {
                                  "text": "Term Title.",
                                  "tag": "h3",
                                  "linkTo": "termUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[12px] font-semibold leading-snug text-[#0f2d1c] group-hover:text-[#15602a] lg:text-[13px]"
                                  },
                                  "link": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-termCount-cj",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": " items",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "rr-termsGridPagination-cm",
                        "type": "termsGridPagination",
                        "options": {
                          "tag": "div"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-7 flex items-center justify-center gap-2 lg:mt-9"
                          },
                          "previous": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "next": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "previous-icon": {
                            "classes": "flex items-center"
                          },
                          "next-icon": {
                            "classes": "flex items-center"
                          },
                          "current": {
                            "classes": "flex size-9 items-center justify-center rounded-full bg-[#15602a] text-[12px] font-semibold text-white"
                          }
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
        "title": "Brands Single",
        "type": "brands_single",
        "meta": "",
        "content": [
          {
            "id": "rr-section-cu",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-ct",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-cs",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-archiveTitle-cq",
                        "type": "archiveTitle",
                        "options": {
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-cr",
                        "type": "text",
                        "options": {
                          "text": "Everything we currently carry from this farm, newest first.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-d8",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-d7",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-postGrid-d6",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "12",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col overflow-hidden rounded-xl border border-[#e7e9e0] bg-white p-3 transition hover:shadow-md lg:p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-d4",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-productDiscount-cv",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-3 top-3 z-10 lg:right-4 lg:top-4"
                              },
                              "discount": {
                                "classes": "rounded-full bg-[#0f3d26] px-2 py-1 text-[9px] font-semibold text-white"
                              },
                              "label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-productBadge-cw",
                            "type": "productBadge",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 z-10 lg:left-4 lg:top-4"
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "items": {
                                "classes": "flex flex-wrap gap-1"
                              },
                              "item": {
                                "classes": "rounded-full bg-[#15602a] px-2.5 py-1 text-[9px] font-semibold text-white"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "rr-postThumbnail-cx",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "mx-auto h-28 w-full object-contain transition group-hover:scale-[1.04] lg:h-32"
                              }
                            }
                          },
                          {
                            "id": "rr-container-d2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-1 flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-cy",
                                "type": "postTitle",
                                "options": {
                                  "text": "Product Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-1 text-[13px] font-semibold text-[#0f2d1c] group-hover:text-[#15602a] lg:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-cz",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "",
                                  "maxWord": 8,
                                  "readMoreIcon": "",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-1 text-[10.5px] text-[#6b7a71] lg:text-[11px]"
                                  },
                                  "read-more": {
                                    "classes": "hidden"
                                  },
                                  "read-more-label": {
                                    "classes": ""
                                  },
                                  "read-more-icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "rr-productPrice-d0",
                                "type": "productPrice",
                                "options": {
                                  "separator": "",
                                  "variablePriceViewType": "inline"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-1.5"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c] lg:text-[19px]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6b7a71] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-serif text-[17px] font-bold text-[#0f2d1c]"
                                  }
                                }
                              },
                              {
                                "id": "rr-productRatings-d1",
                                "type": "productRatings",
                                "options": {
                                  "label": "",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  },
                                  "star-rate": {
                                    "classes": "flex items-center gap-px text-[#f0a020] [&_svg]:size-3.5"
                                  },
                                  "rate-count": {
                                    "classes": "flex items-center"
                                  },
                                  "icon": {
                                    "classes": ""
                                  },
                                  "avg-rating": {
                                    "classes": "hidden"
                                  },
                                  "total-reviews": {
                                    "classes": "text-[10px] text-[#6b7a71]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-addToCart-d3",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCart",
                              "iconSize": 15,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3"
                              },
                              "quantity-wrapper": {
                                "classes": "hidden"
                              },
                              "quantity-input": {
                                "classes": ""
                              },
                              "quantity-plus": {
                                "classes": ""
                              },
                              "quantity-minus": {
                                "classes": ""
                              },
                              "button-wrapper": {
                                "classes": "flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#15602a] text-[12px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "leading-none"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "rr-postGridPagination-d5",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "IconChevronLeft",
                          "nextText": "Next",
                          "nextIcon": "IconChevronRight",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-7 flex items-center justify-center gap-2 lg:mt-9"
                          },
                          "previous": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "next": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "previous-icon": {
                            "classes": "flex items-center"
                          },
                          "next-icon": {
                            "classes": "flex items-center"
                          },
                          "current": {
                            "classes": "flex size-9 items-center justify-center rounded-full bg-[#15602a] text-[12px] font-semibold text-white"
                          }
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
        "title": "Blog Archive",
        "type": "blog",
        "meta": "",
        "content": [
          {
            "id": "rr-section-de",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-dd",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-dc",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-d9",
                        "type": "text",
                        "options": {
                          "text": "Journal",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-da",
                        "type": "heading",
                        "options": {
                          "text": "Helpful tips & fresh ideas",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-db",
                        "type": "text",
                        "options": {
                          "text": "How to store it, what is in season, and ideas for using up what you bought.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-do",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-dn",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-postGrid-dm",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "post"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "9",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-xl border border-[#e7e9e0] bg-white transition hover:shadow-md"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-dk",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-postThumbnail-df",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "h-40 w-full object-cover transition group-hover:scale-[1.03]"
                              }
                            }
                          },
                          {
                            "id": "rr-container-dj",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postDate-dg",
                                "type": "postDate",
                                "options": {
                                  "tag": "span",
                                  "linkTo": "",
                                  "dateFormat": "DD MMM YYYY"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] font-medium uppercase tracking-[1.2px] text-[#357a43]"
                                  }
                                }
                              },
                              {
                                "id": "rr-postTitle-dh",
                                "type": "postTitle",
                                "options": {
                                  "text": "Post Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-serif text-[16px] font-bold leading-snug text-[#0f2d1c] group-hover:text-[#15602a]"
                                  }
                                }
                              },
                              {
                                "id": "rr-postExcerpt-di",
                                "type": "postExcerpt",
                                "options": {
                                  "readMoreText": "Read more",
                                  "maxWord": 22,
                                  "readMoreIcon": "IconArrowNarrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-3"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3 text-[11.5px] leading-relaxed text-[#6b7a71]"
                                  },
                                  "read-more": {
                                    "classes": "inline-flex w-max flex-row-reverse items-center gap-1.5 text-[11px] font-semibold text-[#357a43] hover:text-[#15602a]"
                                  },
                                  "read-more-label": {
                                    "classes": "leading-none"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex items-center"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "rr-postGridPagination-dl",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "IconChevronLeft",
                          "nextText": "Next",
                          "nextIcon": "IconChevronRight",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-7 flex items-center justify-center gap-2 lg:mt-9"
                          },
                          "previous": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "next": {
                            "classes": "flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[#e7e9e0] bg-white px-4 text-[12px] font-medium text-[#45544a] hover:border-[#15602a] hover:text-[#15602a]"
                          },
                          "previous-icon": {
                            "classes": "flex items-center"
                          },
                          "next-icon": {
                            "classes": "flex items-center"
                          },
                          "current": {
                            "classes": "flex size-9 items-center justify-center rounded-full bg-[#15602a] text-[12px] font-semibold text-white"
                          }
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
        "title": "Blog Single",
        "type": "blog_single",
        "meta": "",
        "content": [
          {
            "id": "rr-section-dw",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "rr-container-dv",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-dt",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto flex max-w-3xl flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postTitle-dp",
                        "type": "postTitle",
                        "options": {
                          "text": "Post Title.",
                          "tag": "h1",
                          "linkTo": "",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[26px] font-bold leading-[1.15] tracking-[-0.5px] text-[#0f2d1c] lg:text-[36px]"
                          }
                        }
                      },
                      {
                        "id": "rr-container-ds",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center gap-3 text-[11.5px] text-[#6b7a71]"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-postAuthor-dq",
                            "type": "postAuthor",
                            "options": {
                              "tag": "span",
                              "linkTo": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-medium text-[#45544a]"
                              }
                            }
                          },
                          {
                            "id": "rr-postDate-dr",
                            "type": "postDate",
                            "options": {
                              "tag": "span",
                              "linkTo": "",
                              "dateFormat": "DD MMM YYYY"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "rr-postThumbnail-du",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-6 w-full"
                      },
                      "link": {
                        "classes": "block"
                      },
                      "image": {
                        "classes": "mx-auto h-56 w-full max-w-4xl rounded-xl object-cover lg:h-80"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-e0",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-10"
              }
            },
            "children": [
              {
                "id": "rr-container-dz",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-dy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto max-w-3xl"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postContent-dx",
                        "type": "postContent",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "prose max-w-none text-[13px] leading-[1.75] text-[#45544a] lg:text-[14px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-eb",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-ea",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-e9",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto flex max-w-3xl flex-col gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-heading-e1",
                        "type": "heading",
                        "options": {
                          "text": "Comments",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[20px] font-bold text-[#0f2d1c] lg:text-[24px]"
                          }
                        }
                      },
                      {
                        "id": "rr-commentsGrid-e8",
                        "type": "commentsGrid",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5"
                          },
                          "loop-items": {
                            "classes": "flex flex-col gap-4"
                          },
                          "loop-item": {
                            "classes": "flex gap-3 rounded-xl border border-[#e7e9e0] bg-[#faf9f3] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-commentsLoop-e6",
                            "type": "commentsLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": ""
                              },
                              "loop-item": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "rr-commentAvatar-e2",
                                "type": "commentAvatar",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0"
                                  },
                                  "link": {
                                    "classes": ""
                                  },
                                  "image": {
                                    "classes": "size-10 rounded-full object-cover"
                                  }
                                }
                              },
                              {
                                "id": "rr-container-e5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex min-w-0 flex-1 flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "rr-commentAuthor-e3",
                                    "type": "commentAuthor",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[12.5px] font-bold text-[#0f2d1c]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "rr-commentContent-e4",
                                    "type": "commentContent",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[12px] leading-relaxed text-[#45544a]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "rr-commentsForm-e7",
                            "type": "commentsForm",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 rounded-xl border border-[#e7e9e0] bg-white p-4"
                              }
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
            "id": "rr-section-em",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-container-el",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-ee",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-ec",
                        "type": "text",
                        "options": {
                          "text": "Keep reading",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-ed",
                        "type": "heading",
                        "options": {
                          "text": "More from the journal",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.3px] text-[#0f2d1c] lg:text-[30px]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "rr-postGrid-ek",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "post"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "4",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 lg:mt-6"
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-xl border border-[#e7e9e0] bg-white transition hover:shadow-md"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-postLoop-ej",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-postThumbnail-ef",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "h-32 w-full object-cover transition group-hover:scale-[1.03]"
                              }
                            }
                          },
                          {
                            "id": "rr-container-ei",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 p-3.5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-postTitle-eg",
                                "type": "postTitle",
                                "options": {
                                  "text": "Post Title.",
                                  "tag": "h3",
                                  "linkTo": "postUrl",
                                  "classes": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 text-[12.5px] font-bold leading-snug text-[#0f2d1c] group-hover:text-[#15602a]"
                                  }
                                }
                              },
                              {
                                "id": "rr-postDate-eh",
                                "type": "postDate",
                                "options": {
                                  "tag": "span",
                                  "linkTo": "",
                                  "dateFormat": "DD MMM YYYY"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10.5px] text-[#6b7a71]"
                                  }
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
        "title": "Account",
        "type": "account",
        "meta": "",
        "content": [
          {
            "id": "rr-section-es",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#e7e9e0] bg-[#faf9f3]"
              }
            },
            "children": [
              {
                "id": "rr-container-er",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-10"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-eq",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-text-en",
                        "type": "text",
                        "options": {
                          "text": "Account",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-bold uppercase tracking-[2.2px] text-[#357a43] lg:text-[11px]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-eo",
                        "type": "heading",
                        "options": {
                          "text": "My account",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0f2d1c] lg:text-[32px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-ep",
                        "type": "text",
                        "options": {
                          "text": "Your orders, your details and anything you have asked us about.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-[12.5px] leading-relaxed text-[#45544a] lg:text-[13.5px]"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rr-section-fa",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-8 lg:py-12"
              }
            },
            "children": [
              {
                "id": "rr-customerAccount-f9",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-customerAccountNotLogged-ey",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-grid-ex",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6"
                          },
                          "grid-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-gridItem-eu",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-xl border border-[#e7e9e0] bg-white p-5 lg:p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-register-et",
                                "type": "register",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-gridItem-ew",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-xl border border-[#e7e9e0] bg-white p-5 lg:p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-login-ev",
                                "type": "login",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "rr-customerAccountLogged-f8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "rr-tabs-f7",
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
                              "label": "Edit profile",
                              "icon": "IconUserEdit"
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5"
                          },
                          "navs-items": {
                            "classes": "flex flex-wrap items-center gap-1 border-b border-[#e7e9e0]"
                          },
                          "nav-item": {
                            "classes": "flex cursor-pointer items-center gap-1.5 border-b-2 border-transparent px-3 py-2.5 text-[12.5px] font-medium text-[#6b7a71] hover:text-[#15602a]"
                          },
                          "nav-item-active": {
                            "classes": "border-[#15602a] text-[#15602a]"
                          },
                          "nav-item-label": {
                            "classes": "leading-none"
                          },
                          "nav-item-icon": {
                            "classes": "flex items-center"
                          },
                          "nav-item-content": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "rr-tabsItem-f0",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-xl border border-[#e7e9e0] bg-white p-4 lg:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-customerOrders-ez",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-tabsItem-f2",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-xl border border-[#e7e9e0] bg-white p-4 lg:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-customerProfile-f1",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-tabsItem-f4",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-xl border border-[#e7e9e0] bg-white p-4 lg:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-customerSubscriptions-f3",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "rr-tabsItem-f6",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-xl border border-[#e7e9e0] bg-white p-4 lg:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "rr-customerProfileEdit-f5",
                                "type": "customerProfileEdit",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
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
        "title": "Thank you",
        "type": "thank_you",
        "meta": "",
        "content": [
          {
            "id": "rr-section-fj",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-12 lg:py-20"
              }
            },
            "children": [
              {
                "id": "rr-container-fi",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-fh",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto flex max-w-xl flex-col items-center gap-4 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-icon-fb",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCircleCheckFilled",
                          "size": "56"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center text-[#15602a]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-fc",
                        "type": "heading",
                        "options": {
                          "text": "Thank you for your order",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[26px] font-bold leading-[1.15] tracking-[-0.5px] text-[#0f2d1c] lg:text-[34px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-fd",
                        "type": "text",
                        "options": {
                          "text": "We have your order and will call to confirm the address before it is packed.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] leading-relaxed text-[#45544a] lg:text-[14px]"
                          }
                        }
                      },
                      {
                        "id": "rr-list-fe",
                        "type": "list",
                        "options": {
                          "tag": "ul",
                          "icon": "IconCheck",
                          "iconSize": 15,
                          "items": [
                            {
                              "text": "We call to confirm before the parcel leaves",
                              "icon": ""
                            },
                            {
                              "text": "Picked and packed the morning it ships",
                              "icon": ""
                            },
                            {
                              "text": "Inside Rangpur: usually next day",
                              "icon": ""
                            },
                            {
                              "text": "Pay cash when it reaches your door",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-2 flex w-full flex-col gap-2 rounded-xl border border-[#e7e9e0] bg-white p-5 text-left"
                          },
                          "li": {
                            "classes": "flex items-start gap-2 text-[12px] leading-relaxed text-[#45544a] lg:text-[13px]"
                          },
                          "icon": {
                            "classes": "mt-0.5 flex shrink-0 items-center text-[#15602a]"
                          },
                          "text": {
                            "classes": "min-w-0"
                          }
                        }
                      },
                      {
                        "id": "rr-container-fg",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-2"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-button-ff",
                            "type": "button",
                            "options": {
                              "text": "Keep shopping",
                              "tag": "button",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowNarrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex flex-row-reverse items-center gap-2 rounded-full bg-[#15602a] px-7 py-3 text-[13px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "icon": {
                                "classes": "flex items-center"
                              },
                              "label": {
                                "classes": "leading-none"
                              }
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
            "id": "rr-section-fq",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-t border-[#e7e9e0] bg-white py-7 lg:py-10"
              }
            },
            "children": [
              {
                "id": "rr-container-fp",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-featurebox-fo",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Fresh from the farm",
                          "description": "Picked and packed the same week",
                          "icon": "IconLeaf",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Pay when it reaches your door",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Careful cold handling",
                          "description": "Rangpur City & nearby areas",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "Not fresh? Tell us",
                          "description": "We replace or refund it",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "Here to help",
                          "description": "Call or message any day",
                          "icon": "IconHeadset",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "flex items-center gap-2.5"
                      },
                      "title": {
                        "classes": "text-[12px] font-bold text-[#0f2d1c]"
                      },
                      "description": {
                        "classes": "text-[10.5px] text-[#6b7a71]"
                      },
                      "icon": {
                        "classes": "flex size-10 shrink-0 items-center justify-center rounded-full bg-[#eef5ea] text-[#15602a]"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-icon-fk",
                        "type": "icon",
                        "options": {
                          "iconName": "",
                          "size": "20"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "rr-container-fn",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-0.5"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-featureboxTitle-fl",
                            "type": "featureboxTitle",
                            "options": {
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-featureboxDetails-fm",
                            "type": "featureboxDetails",
                            "options": {
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
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
      },
      {
        "title": "404",
        "type": "404",
        "meta": "",
        "content": [
          {
            "id": "rr-section-fz",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#faf9f3] py-14 lg:py-24"
              }
            },
            "children": [
              {
                "id": "rr-container-fy",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0"
                  }
                },
                "children": [
                  {
                    "id": "rr-container-fx",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto flex max-w-xl flex-col items-center gap-4 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "rr-icon-fr",
                        "type": "icon",
                        "options": {
                          "iconName": "IconMoodSad",
                          "size": "56"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center text-[#357a43]"
                          }
                        }
                      },
                      {
                        "id": "rr-heading-fs",
                        "type": "heading",
                        "options": {
                          "text": "We could not find that page",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-serif text-[26px] font-bold leading-[1.15] tracking-[-0.5px] text-[#0f2d1c] lg:text-[34px]"
                          }
                        }
                      },
                      {
                        "id": "rr-text-ft",
                        "type": "text",
                        "options": {
                          "text": "The link may be broken, or the product may be out of season. Try the shop, or start again from home.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] leading-relaxed text-[#45544a] lg:text-[14px]"
                          }
                        }
                      },
                      {
                        "id": "rr-container-fw",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-2 flex flex-wrap items-center justify-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "rr-button-fu",
                            "type": "button",
                            "options": {
                              "text": "Back to home",
                              "tag": "button",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center rounded-full bg-[#15602a] px-7 py-3 text-[13px] font-semibold text-white hover:bg-[#0e4a1f]"
                              },
                              "icon": {
                                "classes": "flex items-center"
                              },
                              "label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "rr-button-fv",
                            "type": "button",
                            "options": {
                              "text": "All products",
                              "tag": "button",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center rounded-full border border-[#15602a] px-7 py-3 text-[13px] font-semibold text-[#15602a] hover:bg-[#eef5ea]"
                              },
                              "icon": {
                                "classes": "flex items-center"
                              },
                              "label": {
                                "classes": ""
                              }
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
];

export default template;
