/**
 * Template: BikeParts Pro.
 *
 * Built from the design in templates/BikeParts.png -- a motorcycle parts and
 * accessories shop, cash on delivery, delivering around Rangpur City. Same
 * shape as the other files here: one template object, `pages` holding one entry
 * per page type, each `content` an ARRAY of builder blocks. The API stores a
 * page's content as a JSON STRING (Templates.jsx calls `isJsonString` and then
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
 * Sampled from the design, not invented. Unlike the other shops in this folder
 * there is no second brand colour: the chrome is near-black and red is the only
 * accent, so red is both the nav highlight and the thing that buys.
 *
 *   red        #ed1c2f  every button, badge, sale price, link hover
 *   red deep   #c21424  red hover
 *   red soft   #fdeaec  red tint (focus rings, soft pills)
 *   green      #12ab42  the one non-red badge: "% OFF"
 *   dark       #0f171c  utility strip, nav bar, hero, dark promos, footer
 *   dark 2     #19232a  raised surface on dark -- the part finder card
 *   ink        #0f171c  headings and body on white
 *   muted      #5b6670  secondary text
 *   faint      #9aa3ad  meta text and struck-out prices
 *   border     #e8eaef  the only border colour on white
 *   soft       #f1f3f7  image wells
 *   panel      #f7f8fb  the trust strip and the page-head bands
 *   star       #f5a623  rating stars
 *
 * LAYOUT AND SPACING
 *
 *   container     mx-auto w-full max-w-[75rem] px-4 xl:px-0
 *   section       pt-9 lg:pt-14, and pt-7 lg:pt-10 for the promo and trust rows
 *   head -> body  mt-4 lg:mt-6
 *   section head  an h2 at text-xl lg:text-[26px] font-extrabold over a muted
 *                 one-liner, with a red "View all ..." link pushed right
 *   cards         rounded-lg, 1px border, image flush via overflow-hidden
 *   buttons       rounded (4px), h-8 on product cards, h-10 in the finder
 *   category row  grid-cols-2 sm:grid-cols-4 lg:grid-cols-8
 *   product grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
 *   blog grid     grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
 *
 * The six-across product row and eight-across category row are the design's
 * own, which is why the product card type sits at 12.5px rather than the 15px
 * the other templates here use.
 *
 * WHAT THE BLOCKS DO AND DO NOT GIVE US
 *
 *   - The wordmark is two colours ("BikeParts" ink, "Pro" red) stacked over a
 *     tagline. LogoView renders one flat text node, so the logo block carries
 *     the mark alone and the words beside it are text blocks. The same lockup
 *     is reused in the footer with `onDark` flipped.
 *   - QuickSearchView hard-codes `flex gap-2 items-center` on the row holding
 *     the field and the icon, and appends `w-full lg:w-max px-3` to the input.
 *     The gap is cancelled from the wrapper so the red button butts against the
 *     field, and the input gets flex-1 plus `lg:w-full!`. No overflow-hidden on
 *     the wrapper -- the results popover is absolutely positioned inside it.
 *   - MenuView is `hidden xl:block`, so below xl the nav bar is just the red
 *     "All Categories" tab. menuItem draws its own chevron when it has
 *     children, which is where Products and Brands get theirs.
 *   - ProductPriceView prints the sale price before the struck-out regular one
 *     and the design puts the struck one first, so the price row is
 *     flex-row-reverse and justify-end (main-start is the right edge under
 *     row-reverse, so justify-end packs left).
 *   - ButtonView renders the icon before the label, so every trailing arrow
 *     needs flex-row-reverse.
 *   - featurebox renders its CHILDREN once per item and IconView reads
 *     `loop.icon`, so one icon child gives each item its own glyph. That is how
 *     the utility strip, the hero trust trio and the five-point trust strip are
 *     built.
 *   - The wishlist count has no store behind it, so its "0" bubble is drawn
 *     with an ::after, matching the cart's real `button-quantity` badge.
 *
 * WHAT THE STOREFRONT CANNOT RENDER
 *
 * BlockRender.jsx is the storefront switch and its default arm prints
 * "[blockType]" as literal text, so a block with no case there ships as
 * visible debug text. The five comment blocks -- commentsGrid, commentsLoop,
 * commentAvatar, commentAuthor, commentRate, commentContent and commentsForm --
 * are declared in ElementsDefinition.js and appear in the editor's
 * BlockPreview.jsx map, but none of them has a *View component or a case in
 * BlockRender. So the Product page here has no Reviews tab and Blog Single has
 * no comments section. messengerButton is in the same state, and is not used.
 *
 * The two badges on a product card come from different places:
 *
 *   - The red one is productBadge: the product's own badge terms, which cover
 *     "Best Seller", "Hot" and "New" in the design.
 *   - The green one is productDiscount, computed from regular_price against
 *     sale_price, so it only appears on a product that is actually marked
 *     down. ProductDiscountView prints the "%" itself and then the label, so
 *     the label is a bare suffix: "OFF" gives "20% OFF", while "% OFF" would
 *     give "20%% OFF".
 *
 * Four things in the design have no block that can carry them honestly:
 *
 *   - The hero's three slider dots imply a swipe track the builder has no
 *     block for, so they are left out rather than drawn as dead decoration.
 *   - The part finder's three fields are popoverButtons, not selects: `select`
 *     and `input` exist in ElementsDefinition.js but BlockRender.jsx has no
 *     case for either, so neither renders on the storefront. Each row opens a
 *     short list of real links instead, which reads the same and works.
 *   - The footer's email field is presentational for the same reason. The
 *     Subscribe button goes to /contact. Swap both for a real form block when
 *     one exists.
 *   - "View All" on a category tile and "Read More" on a blog card are static
 *     text, not links: the tile already links through its thumbnail and title,
 *     and PostExcerptView points its read-more at "#".
 *
 * The pages below Home -- Shop, Product, the six archive and single pages,
 * Blog, Account, Thank you and 404 -- are not in the design. They carry the
 * structure proven in IslamicLifestyle.js, retokenised to the palette above and
 * reworded for a parts shop, so the whole site holds together.
 *
 * Six things to fill in before this goes live: the logo image, the hero and
 * promo photography (all placehold.co today), the phone number in the utility
 * strip, the WhatsApp number on the Product page -- WhatsappButtonView renders
 * nothing until it has one, since a wa.me link with no number is a dead link --
 * the social URLs in the footer, the real category and brand slugs
 * behind the nav and the part finder, and the product spec rows on the Product
 * page, which ship as "add the ..." prompts.
 */

var template = [
  {
    "name": "BikeParts Pro",
    "description": "Motorcycle parts and accessories storefront: a dark utility strip and nav bar, a red action colour, a photo hero with a part finder, an eight-across category row, six-across product cards and a five-point trust strip.",
    "thumbnail": "/templates/bike-parts.svg",
    "meta": "",
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "bp-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white sticky top-0 z-40"
              }
            },
            "children": [
              {
                "id": "bp-hdr-strip",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#0f171c] text-white"
                  }
                },
                "children": [
                  {
                    "id": "bp-hdr-strip-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 flex items-center justify-center gap-4 py-2 lg:justify-between lg:gap-6"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hdr-strip-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hdr-strip-fb",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Free Home Delivery (within Rangpur City)",
                                  "description": "",
                                  "icon": "IconTruckDelivery",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Authentic & Genuine Products",
                                  "description": "",
                                  "icon": "IconShieldCheck",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Cash on Delivery (COD)",
                                  "description": "",
                                  "icon": "IconCash",
                                  "iconSize": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-5 overflow-x-auto [scrollbar-width:none] lg:gap-9 [&::-webkit-scrollbar]:hidden"
                              },
                              "loop-item": {
                                "classes": "flex shrink-0 items-center gap-2"
                              },
                              "title": {
                                "classes": "whitespace-nowrap text-[11px] font-medium text-white/80 lg:text-xs"
                              },
                              "description": {
                                "classes": "hidden"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center text-white/60"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hdr-strip-fb-i",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruckDelivery",
                                  "size": "15"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "bp-hdr-strip-fb-t",
                                "type": "featureboxTitle",
                                "options": {
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "img": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "bp-hdr-strip-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden shrink-0 items-center gap-6 lg:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hdr-strip-ll",
                            "type": "linkList",
                            "options": {
                              "headerText": "",
                              "tag": "ul",
                              "items": [
                                {
                                  "text": "Track Order",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "Help & Support",
                                  "icon": "",
                                  "slug": "/contact"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "header-text": {
                                "classes": "hidden"
                              },
                              "ul": {
                                "classes": "flex items-center gap-6"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-white"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "whitespace-nowrap text-xs text-white/80"
                              }
                            }
                          },
                          {
                            "id": "bp-hdr-strip-tel",
                            "type": "button",
                            "options": {
                              "text": "+880 1712 345678",
                              "tag": "button",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "tel:+8801712345678",
                              "target": "",
                              "icon": "IconPhone",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-xs font-semibold"
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
                "id": "bp-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-3.5 lg:py-4"
                  }
                },
                "children": [
                  {
                    "id": "bp-hdr-main-cols",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center gap-x-6 gap-y-3.5 lg:gap-x-8"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hdr-col-logo",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hdr-lock",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hdr-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "image",
                                  "logoText": "BikeParts Pro",
                                  "src": "https://placehold.co/160x112?text=Logo",
                                  "link": "/"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "flex items-center"
                                  },
                                  "img": {
                                    "classes": "h-10 w-auto object-contain lg:h-11"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "bp-hdr-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col leading-none"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hdr-name",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-baseline gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "bp-hdr-name-1",
                                        "type": "text",
                                        "options": {
                                          "text": "BikeParts",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[21px] font-extrabold tracking-[-0.4px] text-[#0f171c] lg:text-[23px]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "bp-hdr-name-2",
                                        "type": "text",
                                        "options": {
                                          "text": "Pro",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[21px] font-extrabold italic tracking-[-0.4px] text-[#ed1c2f] lg:text-[23px]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "bp-hdr-tag",
                                    "type": "text",
                                    "options": {
                                      "text": "Ride Better  ·  Go Further",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 text-[9px] font-semibold uppercase tracking-[1.6px] text-[#5b6670] lg:text-[10px]"
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
                        "id": "bp-hdr-col-search",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "order-3 w-full lg:order-none lg:flex-1"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search for parts, accessories, brands...",
                              "iconPosition": "",
                              "icon": "IconSearch",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-[42px] w-full items-center rounded-md border border-[#e8eaef] bg-white lg:max-w-[460px] [&>div:first-child]:w-full [&>div:first-child]:gap-0"
                              },
                              "input-search": {
                                "classes": "min-w-0 flex-1 border-0 bg-transparent text-sm text-[#0f171c] shadow-none! outline-none placeholder:text-[#9aa3ad] lg:w-full!"
                              },
                              "input-wrapper": {
                                "classes": "flex w-full flex-nowrap items-center"
                              },
                              "icon": {
                                "classes": "flex h-10 w-[52px] shrink-0 cursor-pointer items-center justify-center rounded-r-[5px] bg-[#ed1c2f] text-white transition-colors hover:bg-[#c21424]"
                              },
                              "popover": {
                                "classes": "bg-white shadow-xl rounded-lg border border-[#e8eaef]"
                              },
                              "reset": {
                                "classes": "text-[#ed1c2f] text-sm cursor-pointer"
                              },
                              "categories": {
                                "classes": ""
                              },
                              "brands": {
                                "classes": ""
                              },
                              "items": {
                                "classes": "divide-y divide-[#e8eaef]"
                              },
                              "item": {
                                "classes": "flex gap-3 text-sm items-center p-2 hover:bg-[#f1f3f7]"
                              },
                              "item-title": {
                                "classes": ""
                              },
                              "item-image": {
                                "classes": "object-cover w-14 h-14 rounded-md"
                              },
                              "pagination": {
                                "classes": "flex items-center justify-center gap-3 my-3"
                              },
                              "page-item": {
                                "classes": "border border-solid border-[#e8eaef] shadow-none! px-2 py-1 rounded-md cursor-pointer"
                              },
                              "page-count": {
                                "classes": "border border-solid border-[#e8eaef] shadow-none! px-2 py-1 rounded-md cursor-pointer w-16 text-center"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-hdr-col-actions",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-auto flex shrink-0 items-center gap-5 lg:gap-7"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hdr-acc",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden items-center gap-2 sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hdr-acc-i",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconUser",
                                  "size": "24"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "shrink-0 text-[#0f171c]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "bp-hdr-acc-txt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col leading-tight"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hdr-acc-t1",
                                    "type": "text",
                                    "options": {
                                      "text": "My Account",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[13px] font-semibold text-[#0f171c]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hdr-acc-t2",
                                    "type": "button",
                                    "options": {
                                      "text": "Login / Register",
                                      "tag": "button",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/account",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "transition-colors hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "text-[11px] text-[#5b6670]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "bp-hdr-wish",
                            "type": "button",
                            "options": {
                              "text": "Wishlist",
                              "tag": "button",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconHeart",
                              "iconSize": 24
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 text-[#0f171c] transition-colors hover:text-[#ed1c2f]"
                              },
                              "icon": {
                                "classes": "relative flex shrink-0 items-center after:absolute after:-right-2 after:-top-1.5 after:flex after:size-[15px] after:items-center after:justify-center after:rounded-full after:bg-[#ed1c2f] after:text-[9px] after:font-bold after:text-white after:content-['0']"
                              },
                              "label": {
                                "classes": "hidden text-[13px] font-semibold lg:block"
                              }
                            }
                          },
                          {
                            "id": "bp-hdr-cart-wrap",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hdr-cart",
                                "type": "cart",
                                "options": {
                                  "buttonIcon": "IconShoppingCart",
                                  "editMode": false
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "button": {
                                    "classes": "flex cursor-pointer items-center text-[#0f171c] transition-colors hover:text-[#ed1c2f]"
                                  },
                                  "button-quantity": {
                                    "classes": "absolute -right-2 -top-1.5 flex size-[15px] items-center justify-center rounded-full bg-[#ed1c2f] text-[9px] font-bold text-white"
                                  },
                                  "button-icon": {
                                    "classes": "relative flex size-6 shrink-0 items-center justify-center"
                                  },
                                  "popover": {
                                    "classes": "fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[460px] bg-white shadow-2xl overflow-y-auto"
                                  },
                                  "cart-header": {
                                    "classes": "flex justify-between items-center bg-[#0f171c] py-3 px-4 text-white"
                                  },
                                  "cart-total-items": {
                                    "classes": "font-semibold"
                                  },
                                  "cart-close": {
                                    "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-md text-sm"
                                  },
                                  "cart-reset": {
                                    "classes": "border border-white/40 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-md text-sm"
                                  },
                                  "go-to-checkout": {
                                    "classes": "text-white bg-[#ed1c2f] hover:bg-[#c21424] px-4 py-2.5 rounded-md font-bold cursor-pointer"
                                  },
                                  "coupon-input": {
                                    "classes": "w-28 border! border-solid border-[#e8eaef] shadow-none! text-center rounded-md"
                                  },
                                  "coupon-apply-button": {
                                    "classes": "text-white bg-[#0f171c] px-3 py-2 rounded-md cursor-pointer"
                                  },
                                  "back-to-cart": {
                                    "classes": "text-sm text-[#ed1c2f] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "bp-hdr-cart-label",
                                "type": "text",
                                "options": {
                                  "text": "Cart",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-[13px] font-semibold text-[#0f171c] lg:block"
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
                "id": "bp-hdr-nav",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#0f171c]"
                  }
                },
                "children": [
                  {
                    "id": "bp-hdr-nav-in",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 flex items-stretch"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hdr-nav-c1",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "shrink-0"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hdr-allcat",
                            "type": "button",
                            "options": {
                              "text": "All Categories",
                              "tag": "button",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories",
                              "target": "",
                              "icon": "IconMenu2",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 items-center gap-2.5 bg-[#ed1c2f] px-4 text-white transition-colors hover:bg-[#c21424] lg:h-12 lg:w-[185px] lg:px-5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "whitespace-nowrap text-[13px] font-semibold"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-hdr-nav-c2",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 flex-1"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hdr-menu",
                            "type": "menu",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "menu": {
                                "classes": "flex h-11 items-center gap-7 overflow-x-auto px-7 text-[13px] font-semibold [scrollbar-width:none] lg:h-12 [&::-webkit-scrollbar]:hidden"
                              },
                              "menu-item": {
                                "classes": "shrink-0"
                              },
                              "sub-menu": {
                                "classes": "rounded-md border border-[#e8eaef] bg-white py-2 shadow-lg min-w-52 text-[#0f171c]"
                              },
                              "menu-link": {
                                "classes": "whitespace-nowrap text-white/85 transition-colors hover:text-[#ed1c2f]"
                              },
                              "link-label": {
                                "classes": ""
                              },
                              "icon": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hdr-mi-1",
                                "type": "menuItem",
                                "options": {
                                  "label": "Home",
                                  "url": "/"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "text-white!"
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "bp-hdr-mi-2",
                                "type": "menuItem",
                                "options": {
                                  "label": "Products",
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
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hdr-mi-2-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Engine Parts",
                                      "url": "/categories/engine-parts"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block px-4 py-2 transition-colors hover:bg-[#f7f8fb] hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "bp-hdr-mi-2-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Brakes & Clutch",
                                      "url": "/categories/brakes-clutch"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block px-4 py-2 transition-colors hover:bg-[#f7f8fb] hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "bp-hdr-mi-2-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Tyres & Tubes",
                                      "url": "/categories/tyres-tubes"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block px-4 py-2 transition-colors hover:bg-[#f7f8fb] hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "bp-hdr-mi-2-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Riding Gear",
                                      "url": "/categories/riding-gear"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block px-4 py-2 transition-colors hover:bg-[#f7f8fb] hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "bp-hdr-mi-3",
                                "type": "menuItem",
                                "options": {
                                  "label": "Brands",
                                  "url": "/brands"
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
                                },
                                "children": [
                                  {
                                    "id": "bp-hdr-mi-3-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Honda",
                                      "url": "/brands/honda"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block px-4 py-2 transition-colors hover:bg-[#f7f8fb] hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "bp-hdr-mi-3-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Yamaha",
                                      "url": "/brands/yamaha"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block px-4 py-2 transition-colors hover:bg-[#f7f8fb] hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "bp-hdr-mi-3-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Suzuki",
                                      "url": "/brands/suzuki"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block px-4 py-2 transition-colors hover:bg-[#f7f8fb] hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "bp-hdr-mi-3-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Bajaj",
                                      "url": "/brands/bajaj"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block px-4 py-2 transition-colors hover:bg-[#f7f8fb] hover:text-[#ed1c2f]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "bp-hdr-mi-4",
                                "type": "menuItem",
                                "options": {
                                  "label": "Best Deals",
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
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "bp-hdr-mi-5",
                                "type": "menuItem",
                                "options": {
                                  "label": "Blog",
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
                                },
                                "children": []
                              },
                              {
                                "id": "bp-hdr-mi-6",
                                "type": "menuItem",
                                "options": {
                                  "label": "About Us",
                                  "url": "/about"
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
                                },
                                "children": []
                              },
                              {
                                "id": "bp-hdr-mi-7",
                                "type": "menuItem",
                                "options": {
                                  "label": "Contact",
                                  "url": "/contact"
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
                                },
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
        "meta": ""
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "bp-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#0f171c] text-white"
              }
            },
            "children": [
              {
                "id": "bp-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 flex flex-col gap-8 pb-6 pt-10 lg:gap-10 lg:pt-14"
                  }
                },
                "children": [
                  {
                    "id": "bp-ftr-top",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-8 lg:flex-row lg:gap-12"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ftr-col-brand",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3.5 lg:w-[290px] lg:shrink-0"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ftr-lock",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ftr-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "image",
                                  "logoText": "BikeParts Pro",
                                  "src": "https://placehold.co/160x112?text=Logo",
                                  "link": "/"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "flex items-center"
                                  },
                                  "img": {
                                    "classes": "h-10 w-auto object-contain lg:h-11"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "bp-ftr-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col leading-none"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-ftr-name",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-baseline gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "bp-ftr-name-1",
                                        "type": "text",
                                        "options": {
                                          "text": "BikeParts",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[21px] font-extrabold tracking-[-0.4px] text-white lg:text-[23px]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "bp-ftr-name-2",
                                        "type": "text",
                                        "options": {
                                          "text": "Pro",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[21px] font-extrabold italic tracking-[-0.4px] text-[#ed1c2f] lg:text-[23px]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "bp-ftr-tag",
                                    "type": "text",
                                    "options": {
                                      "text": "Ride Better  ·  Go Further",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 text-[9px] font-semibold uppercase tracking-[1.6px] text-white/55 lg:text-[10px]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "bp-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Your trusted online store for motorcycle parts and accessories. Genuine products, great prices, and fast delivery in Rangpur City.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[12.5px] leading-relaxed text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-ftr-col-links",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-1 flex-wrap gap-x-10 gap-y-8 lg:gap-x-14"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ftr-ll-quick",
                            "type": "linkList",
                            "options": {
                              "headerText": "Quick Links",
                              "tag": "ul",
                              "items": [
                                {
                                  "text": "Home",
                                  "icon": "",
                                  "slug": "/"
                                },
                                {
                                  "text": "Products",
                                  "icon": "",
                                  "slug": "/shop"
                                },
                                {
                                  "text": "Brands",
                                  "icon": "",
                                  "slug": "/brands"
                                },
                                {
                                  "text": "Blog",
                                  "icon": "",
                                  "slug": "/blog"
                                },
                                {
                                  "text": "About Us",
                                  "icon": "",
                                  "slug": "/about"
                                },
                                {
                                  "text": "Contact",
                                  "icon": "",
                                  "slug": "/contact"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              },
                              "header-text": {
                                "classes": "text-[13px] font-bold text-white"
                              },
                              "ul": {
                                "classes": "flex flex-col gap-2.5"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-white"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-[12.5px] text-white/60"
                              }
                            }
                          },
                          {
                            "id": "bp-ftr-ll-service",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Service",
                              "tag": "ul",
                              "items": [
                                {
                                  "text": "Track Order",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "Shipping Policy",
                                  "icon": "",
                                  "slug": "/shipping-policy"
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
                                  "text": "Help & Support",
                                  "icon": "",
                                  "slug": "/contact"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              },
                              "header-text": {
                                "classes": "text-[13px] font-bold text-white"
                              },
                              "ul": {
                                "classes": "flex flex-col gap-2.5"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-white"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-[12.5px] text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-ftr-col-connect",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3.5 lg:w-[300px] lg:shrink-0"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ftr-connect-h",
                            "type": "heading",
                            "options": {
                              "text": "Stay Connected",
                              "tag": "h4"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[13px] font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "bp-ftr-socials",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ftr-fb",
                                "type": "button",
                                "options": {
                                  "text": "Facebook",
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
                                    "classes": "flex size-8 items-center justify-center rounded-full bg-[#1877f2] text-white transition-opacity hover:opacity-80"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center"
                                  },
                                  "label": {
                                    "classes": "sr-only"
                                  }
                                }
                              },
                              {
                                "id": "bp-ftr-yt",
                                "type": "button",
                                "options": {
                                  "text": "YouTube",
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
                                    "classes": "flex size-8 items-center justify-center rounded-full bg-[#ff0000] text-white transition-opacity hover:opacity-80"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center"
                                  },
                                  "label": {
                                    "classes": "sr-only"
                                  }
                                }
                              },
                              {
                                "id": "bp-ftr-ig",
                                "type": "button",
                                "options": {
                                  "text": "Instagram",
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
                                    "classes": "flex size-8 items-center justify-center rounded-full bg-[#e1306c] text-white transition-opacity hover:opacity-80"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center"
                                  },
                                  "label": {
                                    "classes": "sr-only"
                                  }
                                }
                              },
                              {
                                "id": "bp-ftr-tt",
                                "type": "button",
                                "options": {
                                  "text": "TikTok",
                                  "tag": "button",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://tiktok.com",
                                  "target": "",
                                  "icon": "IconBrandTiktok",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex size-8 items-center justify-center rounded-full bg-white/15 text-white transition-opacity hover:opacity-80"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center"
                                  },
                                  "label": {
                                    "classes": "sr-only"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "bp-ftr-sub-label",
                            "type": "text",
                            "options": {
                              "text": "Subscribe to get updates",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pt-1 text-[12.5px] text-white/60"
                              }
                            }
                          },
                          {
                            "id": "bp-ftr-sub",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-9 w-full items-stretch overflow-hidden rounded border border-white/15 bg-white/5"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ftr-sub-ph",
                                "type": "text",
                                "options": {
                                  "text": "Your email address",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 items-center px-3 text-[12px] text-white/40"
                                  }
                                }
                              },
                              {
                                "id": "bp-ftr-sub-go",
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
                                    "classes": "flex shrink-0 items-center justify-center bg-[#ed1c2f] px-4 text-white transition-colors hover:bg-[#c21424]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "text-[11.5px] font-bold"
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
                    "id": "bp-ftr-bottom",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col-reverse gap-4 border-t border-white/10 pt-5 lg:flex-row lg:items-center lg:justify-between"
                      },
                      "column": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ftr-copy-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ftr-copy",
                            "type": "text",
                            "options": {
                              "text": "© 2026 BikeParts Pro. All rights reserved.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11.5px] text-white/45"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-ftr-pay-col",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ftr-pay",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ftr-pay-1",
                                "type": "text",
                                "options": {
                                  "text": "bKash",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded bg-white/10 px-2 py-1 text-[10px] font-bold tracking-[0.3px] text-white/70"
                                  }
                                }
                              },
                              {
                                "id": "bp-ftr-pay-2",
                                "type": "text",
                                "options": {
                                  "text": "VISA",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded bg-white/10 px-2 py-1 text-[10px] font-bold tracking-[0.3px] text-white/70"
                                  }
                                }
                              },
                              {
                                "id": "bp-ftr-pay-3",
                                "type": "text",
                                "options": {
                                  "text": "Mastercard",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded bg-white/10 px-2 py-1 text-[10px] font-bold tracking-[0.3px] text-white/70"
                                  }
                                }
                              },
                              {
                                "id": "bp-ftr-pay-4",
                                "type": "text",
                                "options": {
                                  "text": "COD",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded bg-white/10 px-2 py-1 text-[10px] font-bold tracking-[0.3px] text-white/70"
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
        ],
        "meta": ""
      },
      {
        "title": "Home",
        "type": "home",
        "content": [
          {
            "id": "bp-hm-hero",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0f171c]"
              }
            },
            "children": [
              {
                "id": "bp-hm-hero-img",
                "type": "image",
                "options": {
                  "src": "https://placehold.co/1600x600?text=Motorcycle",
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
                "id": "bp-hm-hero-scrim",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative w-full bg-gradient-to-r from-[#0f171c] via-[#0f171c]/85 to-[#0f171c]/20"
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-hero-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-9 lg:py-12"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-hero-cols",
                        "type": "columns",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10"
                          },
                          "column": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-hero-left",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-1 flex-col gap-4 lg:gap-5"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hm-hero-eyebrow",
                                "type": "text",
                                "options": {
                                  "text": "Premium Bike Parts & Accessories",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[11px] font-bold uppercase tracking-[2.4px] text-white/60 lg:text-xs"
                                  }
                                }
                              },
                              {
                                "id": "bp-hm-hero-title",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hm-hero-h1",
                                    "type": "heading",
                                    "options": {
                                      "text": "Keep Your Bike",
                                      "tag": "h1"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[32px] font-extrabold uppercase leading-[1.04] tracking-[-0.8px] text-white lg:text-[50px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-hero-h1b",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-wrap items-baseline gap-x-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "bp-hm-hero-h1b-1",
                                        "type": "text",
                                        "options": {
                                          "text": "In",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[32px] font-extrabold uppercase leading-[1.04] tracking-[-0.8px] text-white lg:text-[50px]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "bp-hm-hero-h1b-2",
                                        "type": "text",
                                        "options": {
                                          "text": "Top Shape",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[32px] font-extrabold uppercase leading-[1.04] tracking-[-0.8px] text-[#ed1c2f] lg:text-[50px]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "bp-hm-hero-sub",
                                "type": "text",
                                "options": {
                                  "text": "Genuine parts, trusted brands, and everything you need for a smoother, safer, and better ride.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-[30rem] text-sm leading-relaxed text-white/70 lg:text-[15px]"
                                  }
                                }
                              },
                              {
                                "id": "bp-hm-hero-cta",
                                "type": "button",
                                "options": {
                                  "text": "Shop Now",
                                  "tag": "button",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowNarrowRight",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-fit flex-row-reverse items-center gap-2 rounded bg-[#ed1c2f] px-5 py-3 text-white transition-colors hover:bg-[#c21424]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "text-sm font-bold"
                                  }
                                }
                              },
                              {
                                "id": "bp-hm-hero-fb",
                                "type": "featurebox",
                                "options": {
                                  "tag": "div",
                                  "icon": "",
                                  "iconSize": "",
                                  "items": [
                                    {
                                      "title": "Genuine Products",
                                      "description": "100% Authentic",
                                      "icon": "IconShieldCheck",
                                      "iconSize": ""
                                    },
                                    {
                                      "title": "Best Price",
                                      "description": "Great Deals Always",
                                      "icon": "IconDiscount2",
                                      "iconSize": ""
                                    },
                                    {
                                      "title": "Fast Delivery",
                                      "description": "Rangpur City & Nearby",
                                      "icon": "IconTruckDelivery",
                                      "iconSize": ""
                                    }
                                  ]
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-5 lg:mt-4 lg:gap-x-10"
                                  },
                                  "loop-item": {
                                    "classes": "flex items-center gap-2.5"
                                  },
                                  "title": {
                                    "classes": "text-[13px] font-bold leading-tight text-white"
                                  },
                                  "description": {
                                    "classes": "text-[11px] leading-tight text-white/55"
                                  },
                                  "icon": {
                                    "classes": "flex shrink-0 items-center text-white/80"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hm-hero-fb-i",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconShieldCheck",
                                      "size": "22"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "bp-hm-hero-fb-txt",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-0.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "bp-hm-hero-fb-t",
                                        "type": "featureboxTitle",
                                        "options": {
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "img": {
                                            "classes": ""
                                          }
                                        }
                                      },
                                      {
                                        "id": "bp-hm-hero-fb-d",
                                        "type": "featureboxDetails",
                                        "options": {
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "img": {
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
                            "id": "bp-hm-hero-right",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full lg:w-[310px] lg:shrink-0"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hm-find",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-xl border border-white/10 bg-[#19232a]/95 p-5 shadow-2xl"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hm-find-head",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "bp-hm-find-i",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconSettings",
                                          "size": "20"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#ed1c2f] text-white"
                                          }
                                        },
                                        "children": []
                                      },
                                      {
                                        "id": "bp-hm-find-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Find the Right Part for Your Bike",
                                          "tag": "h2"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[15px] font-bold leading-snug text-white"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "bp-hm-find-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Search by bike model or part name",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-3.5 text-xs text-white/55"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-find-rows",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-3.5 flex flex-col gap-2.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "bp-hm-find-brand",
                                        "type": "popoverButton",
                                        "options": {
                                          "buttonLabel": "Select Brand",
                                          "buttonIcon": "IconChevronDown",
                                          "iconSize": 16,
                                          "position": "bottomLeft",
                                          "slideIn": "fadeIn",
                                          "slideOut": "fadeOut"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "w-full"
                                          },
                                          "button": {
                                            "classes": "flex h-10 w-full cursor-pointer flex-row-reverse items-center justify-between rounded border border-white/15 bg-white/5 px-3 text-white/70 transition-colors hover:border-white/30"
                                          },
                                          "button-icon": {
                                            "classes": "flex shrink-0 items-center text-white/50"
                                          },
                                          "button-label": {
                                            "classes": "text-[13px]"
                                          },
                                          "popover": {
                                            "classes": "z-50 mt-1 w-full rounded-md border border-[#e8eaef] bg-white py-1 shadow-xl"
                                          },
                                          "popover-close": {
                                            "classes": "hidden"
                                          },
                                          "popover-content": {
                                            "classes": ""
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "bp-hm-find-brand-ll",
                                            "type": "linkList",
                                            "options": {
                                              "headerText": "",
                                              "tag": "ul",
                                              "items": [
                                                {
                                                  "text": "Honda",
                                                  "icon": "",
                                                  "slug": "/brands/honda"
                                                },
                                                {
                                                  "text": "Yamaha",
                                                  "icon": "",
                                                  "slug": "/brands/yamaha"
                                                },
                                                {
                                                  "text": "Suzuki",
                                                  "icon": "",
                                                  "slug": "/brands/suzuki"
                                                },
                                                {
                                                  "text": "Bajaj",
                                                  "icon": "",
                                                  "slug": "/brands/bajaj"
                                                },
                                                {
                                                  "text": "TVS",
                                                  "icon": "",
                                                  "slug": "/brands/tvs"
                                                }
                                              ]
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": ""
                                              },
                                              "header-text": {
                                                "classes": "hidden"
                                              },
                                              "ul": {
                                                "classes": "flex flex-col"
                                              },
                                              "li": {
                                                "classes": "list-none"
                                              },
                                              "link": {
                                                "classes": "block px-3 py-2 transition-colors hover:bg-[#f7f8fb]"
                                              },
                                              "icon": {
                                                "classes": ""
                                              },
                                              "text": {
                                                "classes": "text-[13px] text-[#0f171c]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "bp-hm-find-model",
                                        "type": "popoverButton",
                                        "options": {
                                          "buttonLabel": "Select Model",
                                          "buttonIcon": "IconChevronDown",
                                          "iconSize": 16,
                                          "position": "bottomLeft",
                                          "slideIn": "fadeIn",
                                          "slideOut": "fadeOut"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "w-full"
                                          },
                                          "button": {
                                            "classes": "flex h-10 w-full cursor-pointer flex-row-reverse items-center justify-between rounded border border-white/15 bg-white/5 px-3 text-white/70 transition-colors hover:border-white/30"
                                          },
                                          "button-icon": {
                                            "classes": "flex shrink-0 items-center text-white/50"
                                          },
                                          "button-label": {
                                            "classes": "text-[13px]"
                                          },
                                          "popover": {
                                            "classes": "z-50 mt-1 w-full rounded-md border border-[#e8eaef] bg-white py-1 shadow-xl"
                                          },
                                          "popover-close": {
                                            "classes": "hidden"
                                          },
                                          "popover-content": {
                                            "classes": ""
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "bp-hm-find-model-ll",
                                            "type": "linkList",
                                            "options": {
                                              "headerText": "",
                                              "tag": "ul",
                                              "items": [
                                                {
                                                  "text": "CB150R",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                },
                                                {
                                                  "text": "FZ / FZS",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                },
                                                {
                                                  "text": "R15",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                },
                                                {
                                                  "text": "Pulsar",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                },
                                                {
                                                  "text": "Apache RTR",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                }
                                              ]
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": ""
                                              },
                                              "header-text": {
                                                "classes": "hidden"
                                              },
                                              "ul": {
                                                "classes": "flex flex-col"
                                              },
                                              "li": {
                                                "classes": "list-none"
                                              },
                                              "link": {
                                                "classes": "block px-3 py-2 transition-colors hover:bg-[#f7f8fb]"
                                              },
                                              "icon": {
                                                "classes": ""
                                              },
                                              "text": {
                                                "classes": "text-[13px] text-[#0f171c]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "bp-hm-find-year",
                                        "type": "popoverButton",
                                        "options": {
                                          "buttonLabel": "Select Year",
                                          "buttonIcon": "IconChevronDown",
                                          "iconSize": 16,
                                          "position": "bottomLeft",
                                          "slideIn": "fadeIn",
                                          "slideOut": "fadeOut"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "w-full"
                                          },
                                          "button": {
                                            "classes": "flex h-10 w-full cursor-pointer flex-row-reverse items-center justify-between rounded border border-white/15 bg-white/5 px-3 text-white/70 transition-colors hover:border-white/30"
                                          },
                                          "button-icon": {
                                            "classes": "flex shrink-0 items-center text-white/50"
                                          },
                                          "button-label": {
                                            "classes": "text-[13px]"
                                          },
                                          "popover": {
                                            "classes": "z-50 mt-1 w-full rounded-md border border-[#e8eaef] bg-white py-1 shadow-xl"
                                          },
                                          "popover-close": {
                                            "classes": "hidden"
                                          },
                                          "popover-content": {
                                            "classes": ""
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "bp-hm-find-year-ll",
                                            "type": "linkList",
                                            "options": {
                                              "headerText": "",
                                              "tag": "ul",
                                              "items": [
                                                {
                                                  "text": "2026",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                },
                                                {
                                                  "text": "2025",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                },
                                                {
                                                  "text": "2024",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                },
                                                {
                                                  "text": "2023",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                },
                                                {
                                                  "text": "2022 and older",
                                                  "icon": "",
                                                  "slug": "/shop"
                                                }
                                              ]
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": ""
                                              },
                                              "header-text": {
                                                "classes": "hidden"
                                              },
                                              "ul": {
                                                "classes": "flex flex-col"
                                              },
                                              "li": {
                                                "classes": "list-none"
                                              },
                                              "link": {
                                                "classes": "block px-3 py-2 transition-colors hover:bg-[#f7f8fb]"
                                              },
                                              "icon": {
                                                "classes": ""
                                              },
                                              "text": {
                                                "classes": "text-[13px] text-[#0f171c]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "bp-hm-find-go",
                                    "type": "button",
                                    "options": {
                                      "text": "Search",
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
                                        "classes": "mt-3.5 flex h-10 w-full items-center justify-center rounded bg-[#ed1c2f] text-white transition-colors hover:bg-[#c21424]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "text-[13px] font-bold"
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
            "id": "bp-hm-cat",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 pt-9 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "bp-hm-cat-head",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex flex-wrap items-end justify-between gap-x-4 gap-y-2"
                  },
                  "column": {
                    "classes": ""
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-cat-head-c1",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex min-w-0 flex-col gap-1"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-cat-h",
                        "type": "heading",
                        "options": {
                          "text": "Shop by Category",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-xl font-extrabold tracking-[-0.4px] text-[#0f171c] lg:text-[26px]"
                          }
                        }
                      },
                      {
                        "id": "bp-hm-cat-sub",
                        "type": "text",
                        "options": {
                          "text": "Explore our wide range of bike parts and accessories",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] text-[#5b6670] lg:text-sm"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "bp-hm-cat-head-c2",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "shrink-0"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-cat-all",
                        "type": "button",
                        "options": {
                          "text": "View All Categories",
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
                            "classes": "flex flex-row-reverse items-center gap-1.5 text-[#ed1c2f] transition-colors hover:text-[#c21424]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "whitespace-nowrap text-[13px] font-semibold"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "bp-hm-cat-tg",
                "type": "termsGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "taxonomy": "product_cat",
                    "number": "8",
                    "per_page": "8",
                    "hide_empty": true,
                    "order": "ASC",
                    "orderby": "name"
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-6 lg:grid-cols-8 lg:gap-3.5"
                  },
                  "loop-item": {
                    "classes": "group flex flex-col items-center gap-2 rounded-lg border border-[#e8eaef] bg-white p-3 text-center transition-colors hover:border-[#ed1c2f]"
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-cat-loop",
                    "type": "termsLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-6 lg:grid-cols-8 lg:gap-3.5"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-2 rounded-lg border border-[#e8eaef] bg-white p-3 text-center transition-colors hover:border-[#ed1c2f]"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-cat-thumb",
                        "type": "termThumbnail",
                        "options": {
                          "linkTo": "termUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          },
                          "link": {
                            "classes": "flex h-[62px] items-center justify-center"
                          },
                          "image": {
                            "classes": "size-full object-contain"
                          }
                        }
                      },
                      {
                        "id": "bp-hm-cat-title",
                        "type": "termTitle",
                        "options": {
                          "text": "Term Title.",
                          "tag": "h3",
                          "linkTo": "termUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "line-clamp-2 text-[12px] font-semibold leading-snug text-[#0f171c] transition-colors group-hover:text-[#ed1c2f] lg:text-[13px]"
                          },
                          "link": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "bp-hm-cat-more",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-auto flex items-center gap-1 pt-0.5 text-[#ed1c2f]"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-cat-more-t",
                            "type": "text",
                            "options": {
                              "text": "View All",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-semibold"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-cat-more-i",
                            "type": "icon",
                            "options": {
                              "iconName": "IconArrowNarrowRight",
                              "size": "13"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 items-center"
                              }
                            },
                            "children": []
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
            "id": "bp-hm-feat",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 pt-9 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "bp-hm-feat-head",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex flex-wrap items-end justify-between gap-x-4 gap-y-2"
                  },
                  "column": {
                    "classes": ""
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-feat-head-c1",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex min-w-0 flex-col gap-1"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-feat-h",
                        "type": "heading",
                        "options": {
                          "text": "Featured Products",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-xl font-extrabold tracking-[-0.4px] text-[#0f171c] lg:text-[26px]"
                          }
                        }
                      },
                      {
                        "id": "bp-hm-feat-sub",
                        "type": "text",
                        "options": {
                          "text": "Top selling and most popular products",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] text-[#5b6670] lg:text-sm"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "bp-hm-feat-head-c2",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "shrink-0"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-feat-all",
                        "type": "button",
                        "options": {
                          "text": "View All Products",
                          "tag": "button",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowNarrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-row-reverse items-center gap-1.5 text-[#ed1c2f] transition-colors hover:text-[#c21424]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "whitespace-nowrap text-[13px] font-semibold"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "bp-hm-feat-pg",
                "type": "postGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "post_type": [
                      "product"
                    ],
                    "order": "DESC",
                    "orderby": "date",
                    "posts_per_page": "6",
                    "taxQuery": []
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-6 lg:grid-cols-6 lg:gap-3.5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#e8eaef] bg-white transition-shadow hover:shadow-md"
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-feat-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-6 lg:grid-cols-6 lg:gap-3.5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#e8eaef] bg-white transition-shadow hover:shadow-md"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-feat-badges",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute left-2 top-2 z-10 flex flex-col items-start gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-feat-badge",
                            "type": "productBadge",
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
                                "classes": "flex flex-wrap gap-1"
                              },
                              "item": {
                                "classes": "rounded bg-[#ed1c2f] px-1.5 py-[3px]"
                              },
                              "category-name": {
                                "classes": "text-[9px] font-bold uppercase tracking-[0.3px] text-white"
                              },
                              "separator": {
                                "classes": "hidden"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-feat-disc",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-fit items-baseline gap-0.5 rounded bg-[#12ab42] px-1.5 py-[3px] text-white"
                              },
                              "discount": {
                                "classes": "text-[9px] font-bold"
                              },
                              "label": {
                                "classes": "text-[9px] font-bold"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-hm-feat-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full bg-white"
                          },
                          "link": {
                            "classes": "relative block aspect-square p-3"
                          },
                          "image": {
                            "classes": "size-full object-contain"
                          }
                        }
                      },
                      {
                        "id": "bp-hm-feat-body",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-1 flex-col gap-1 px-3 pb-2"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-feat-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-2 text-[12.5px] font-semibold leading-snug text-[#0f171c] transition-colors hover:text-[#ed1c2f]"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-feat-brands",
                            "type": "productBrands",
                            "options": {
                              "label": "",
                              "separator": " / "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center"
                              },
                              "label": {
                                "classes": "hidden"
                              },
                              "items": {
                                "classes": "flex flex-wrap items-center"
                              },
                              "item": {
                                "classes": ""
                              },
                              "category-name": {
                                "classes": "text-[10.5px] text-[#9aa3ad]"
                              },
                              "separator": {
                                "classes": "text-[10.5px] text-[#9aa3ad]"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-feat-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex flex-row-reverse flex-wrap items-baseline justify-end gap-x-1.5 pt-1"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-row-reverse flex-wrap items-baseline justify-end gap-x-1.5"
                              },
                              "simple-price-sale": {
                                "classes": "text-[15px] font-extrabold text-[#ed1c2f]"
                              },
                              "simple-price-regular": {
                                "classes": "text-[11px] text-[#9aa3ad] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex items-baseline gap-x-1.5"
                              },
                              "variable-price-min": {
                                "classes": "text-[15px] font-extrabold text-[#ed1c2f]"
                              },
                              "variable-price-max": {
                                "classes": "text-[15px] font-extrabold text-[#ed1c2f]"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-feat-rate",
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
                                "classes": "flex items-center gap-px text-[#f5a623] [&_svg]:size-3"
                              },
                              "rate-count": {
                                "classes": ""
                              },
                              "icon": {
                                "classes": ""
                              },
                              "avg-rating": {
                                "classes": "hidden"
                              },
                              "total-reviews": {
                                "classes": "text-[10px] text-[#9aa3ad]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-hm-feat-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "px-3 pb-3"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-feat-atc",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCart",
                              "iconSize": 14,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              },
                              "quantity-wrapper": {
                                "classes": ""
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
                                "classes": "flex h-8 w-full cursor-pointer items-center justify-center gap-1.5 rounded bg-[#ed1c2f] text-white transition-colors hover:bg-[#c21424]"
                              },
                              "button-icon": {
                                "classes": "flex shrink-0 items-center empty:hidden"
                              },
                              "button-label": {
                                "classes": "whitespace-nowrap text-[11px] font-bold"
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
            "id": "bp-hm-promo",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 pt-7 lg:pt-10"
              }
            },
            "children": [
              {
                "id": "bp-hm-promo-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
                  },
                  "grid-item": {
                    "classes": ""
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-promo-1",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-promo-1-frame",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative h-[150px] overflow-hidden rounded-lg bg-[#0f171c] lg:h-[168px]"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-promo-1-img",
                            "type": "image",
                            "options": {
                              "src": "https://placehold.co/640x340?text=Brake+Parts",
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
                                "classes": "size-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-promo-1-scrim",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative h-full bg-gradient-to-r from-[#0f171c] via-[#0f171c]/85 to-transparent"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hm-promo-1-body",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-full max-w-[66%] flex-col justify-center gap-0.5 p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hm-promo-1-eyebrow",
                                    "type": "text",
                                    "options": {
                                      "text": "Up to 30% off",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold uppercase tracking-[1.2px] text-white/75"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-promo-1-t",
                                    "type": "heading",
                                    "options": {
                                      "text": "Brake Parts",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[17px] font-extrabold leading-tight text-white lg:text-xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-promo-1-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Ride Safer, Stop Better",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[12px] font-semibold text-white/85 lg:text-[13px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-promo-1-cta",
                                    "type": "button",
                                    "options": {
                                      "text": "Shop Now",
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
                                        "classes": "mt-2 flex w-fit items-center rounded bg-[#ed1c2f] px-3 py-1.5 text-white transition-colors hover:bg-[#c21424]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "text-[11px] font-bold"
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
                    "id": "bp-hm-promo-2",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-promo-2-frame",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative h-[150px] overflow-hidden rounded-lg bg-[#0f171c] lg:h-[168px]"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-promo-2-img",
                            "type": "image",
                            "options": {
                              "src": "https://placehold.co/640x340?text=Engine+Oil",
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
                                "classes": "size-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-promo-2-scrim",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative h-full bg-gradient-to-r from-[#ed1c2f] via-[#ed1c2f]/85 to-transparent"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hm-promo-2-body",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-full max-w-[66%] flex-col justify-center gap-0.5 p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hm-promo-2-t",
                                    "type": "heading",
                                    "options": {
                                      "text": "Keep Your Engine Happy",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[17px] font-extrabold leading-tight text-white lg:text-xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-promo-2-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Premium Engine Oils",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[12px] font-semibold text-white/85 lg:text-[13px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-promo-2-sub2",
                                    "type": "text",
                                    "options": {
                                      "text": "Starts from ৳ 450",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] text-white/65"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-promo-2-cta",
                                    "type": "button",
                                    "options": {
                                      "text": "Shop Now",
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
                                        "classes": "mt-2 flex w-fit items-center rounded bg-[#ed1c2f] px-3 py-1.5 text-white transition-colors hover:bg-[#c21424]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "text-[11px] font-bold"
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
                    "id": "bp-hm-promo-3",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-promo-3-frame",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative h-[150px] overflow-hidden rounded-lg bg-[#0f171c] lg:h-[168px]"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-promo-3-img",
                            "type": "image",
                            "options": {
                              "src": "https://placehold.co/640x340?text=Riding+Gear",
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
                                "classes": "size-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-promo-3-scrim",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative h-full bg-gradient-to-r from-[#0f171c] via-[#0f171c]/85 to-transparent"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hm-promo-3-body",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-full max-w-[66%] flex-col justify-center gap-0.5 p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "bp-hm-promo-3-t",
                                    "type": "heading",
                                    "options": {
                                      "text": "Riding Gear",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[17px] font-extrabold leading-tight text-white lg:text-xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-promo-3-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Stay Protected In Every Ride",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[12px] font-semibold text-white/85 lg:text-[13px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "bp-hm-promo-3-cta",
                                    "type": "button",
                                    "options": {
                                      "text": "Shop Now",
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
                                        "classes": "mt-2 flex w-fit items-center rounded bg-[#ed1c2f] px-3 py-1.5 text-white transition-colors hover:bg-[#c21424]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "text-[11px] font-bold"
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
            "id": "bp-hm-trust",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 pt-7 lg:pt-10"
              }
            },
            "children": [
              {
                "id": "bp-hm-trust-fb",
                "type": "featurebox",
                "options": {
                  "tag": "div",
                  "icon": "",
                  "iconSize": "",
                  "items": [
                    {
                      "title": "100% Genuine Products",
                      "description": "We only sell authentic parts",
                      "icon": "IconShieldCheck",
                      "iconSize": ""
                    },
                    {
                      "title": "Cash on Delivery",
                      "description": "Pay when you receive",
                      "icon": "IconCash",
                      "iconSize": ""
                    },
                    {
                      "title": "Fast & Reliable Delivery",
                      "description": "Rangpur City & Nearby Areas",
                      "icon": "IconTruckDelivery",
                      "iconSize": ""
                    },
                    {
                      "title": "Easy Return & Refund",
                      "description": "Hassle-free return policy",
                      "icon": "IconRefresh",
                      "iconSize": ""
                    },
                    {
                      "title": "Dedicated Support",
                      "description": "We're here to help",
                      "icon": "IconHeadset",
                      "iconSize": ""
                    }
                  ]
                },
                "cssSelectors": {
                  "*": {
                    "classes": "grid grid-cols-1 gap-x-4 gap-y-5 rounded-xl border border-[#e8eaef] bg-[#f7f8fb] px-5 py-5 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-[#e8eaef]"
                  },
                  "loop-item": {
                    "classes": "flex items-center gap-3 lg:px-3"
                  },
                  "title": {
                    "classes": "text-[12.5px] font-bold leading-tight text-[#0f171c]"
                  },
                  "description": {
                    "classes": "text-[11px] leading-tight text-[#5b6670]"
                  },
                  "icon": {
                    "classes": "flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#e8eaef] bg-white text-[#0f171c]"
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-trust-i",
                    "type": "icon",
                    "options": {
                      "iconName": "IconShieldCheck",
                      "size": "19"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": []
                  },
                  {
                    "id": "bp-hm-trust-txt",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex min-w-0 flex-col gap-0.5"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-trust-t",
                        "type": "featureboxTitle",
                        "options": {
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "img": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "bp-hm-trust-d",
                        "type": "featureboxDetails",
                        "options": {
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "img": {
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
            "id": "bp-hm-blog",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-9 lg:py-14"
              }
            },
            "children": [
              {
                "id": "bp-hm-blog-head",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex flex-wrap items-end justify-between gap-x-4 gap-y-2"
                  },
                  "column": {
                    "classes": ""
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-blog-head-c1",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex min-w-0 flex-col gap-1"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-blog-h",
                        "type": "heading",
                        "options": {
                          "text": "Latest from Our Blog",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-xl font-extrabold tracking-[-0.4px] text-[#0f171c] lg:text-[26px]"
                          }
                        }
                      },
                      {
                        "id": "bp-hm-blog-sub",
                        "type": "text",
                        "options": {
                          "text": "Tips, guides and news for every rider",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] text-[#5b6670] lg:text-sm"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "bp-hm-blog-head-c2",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "shrink-0"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-blog-all",
                        "type": "button",
                        "options": {
                          "text": "View All Articles",
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
                            "classes": "flex flex-row-reverse items-center gap-1.5 text-[#ed1c2f] transition-colors hover:text-[#c21424]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "whitespace-nowrap text-[13px] font-semibold"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "bp-hm-blog-pg",
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
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4"
                  },
                  "loop-item": {
                    "classes": "group flex h-full flex-col overflow-hidden rounded-lg border border-[#e8eaef] bg-white transition-shadow hover:shadow-md"
                  }
                },
                "children": [
                  {
                    "id": "bp-hm-blog-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group flex h-full flex-col overflow-hidden rounded-lg border border-[#e8eaef] bg-white transition-shadow hover:shadow-md"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-hm-blog-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full bg-[#f1f3f7]"
                          },
                          "link": {
                            "classes": "relative block aspect-[16/9]"
                          },
                          "image": {
                            "classes": "size-full object-cover"
                          }
                        }
                      },
                      {
                        "id": "bp-hm-blog-body",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-1 flex-col gap-1.5 p-3.5"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-hm-blog-date",
                            "type": "postDate",
                            "options": {
                              "format": "",
                              "dateFormat": "MMM DD, YYYY"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11px] text-[#9aa3ad]"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-blog-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Post Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-2 text-[13px] font-semibold leading-snug text-[#0f171c] transition-colors hover:text-[#ed1c2f]"
                              }
                            }
                          },
                          {
                            "id": "bp-hm-blog-more",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex items-center gap-1 pt-1 text-[#ed1c2f]"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-hm-blog-more-t",
                                "type": "text",
                                "options": {
                                  "text": "Read More",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[11px] font-semibold"
                                  }
                                }
                              },
                              {
                                "id": "bp-hm-blog-more-i",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconArrowNarrowRight",
                                  "size": "14"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex shrink-0 items-center"
                                  }
                                },
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
        "meta": ""
      },
      {
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "bp-sh-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-sh-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3"
                  }
                },
                "children": [
                  {
                    "id": "bp-sh-head-label",
                    "type": "text",
                    "options": {
                      "text": "Shop",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm font-bold text-[#ed1c2f]"
                      }
                    }
                  },
                  {
                    "id": "bp-sh-head-h",
                    "type": "heading",
                    "options": {
                      "text": "All products",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-sh-head-t",
                    "type": "text",
                    "options": {
                      "text": "Every part we stock, newest first. Tap a card for fitment, price and stock, or add it straight to the cart.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-2xl leading-relaxed"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-sh-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-sh-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12"
                  }
                },
                "children": [
                  {
                    "id": "bp-sh-body-pg",
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
                        "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-sh-body-pg-loop",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-sh-body-c-badge",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-2 top-2 z-10 flex items-baseline gap-0.5 rounded-md bg-[#ed1c2f] px-[7px] py-[3px] text-white"
                              },
                              "discount": {
                                "classes": "text-[11px] font-bold"
                              },
                              "label": {
                                "classes": "text-[11px] font-bold"
                              }
                            }
                          },
                          {
                            "id": "bp-sh-body-c-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": "relative block aspect-square"
                              },
                              "image": {
                                "classes": "size-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "bp-sh-body-c-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#0f171c] hover:text-[#ed1c2f] lg:px-3 lg:pt-3 lg:text-base"
                              }
                            }
                          },
                          {
                            "id": "bp-sh-body-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 px-2.5 pt-1 lg:px-3"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-baseline gap-x-1.5"
                              },
                              "simple-price-sale": {
                                "classes": "text-lg font-bold text-[#0f171c] lg:text-xl"
                              },
                              "simple-price-regular": {
                                "classes": "text-[13px] text-[#9aa3ad] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex items-baseline gap-x-1.5"
                              },
                              "variable-price-min": {
                                "classes": "text-base font-bold text-[#0f171c]"
                              },
                              "variable-price-max": {
                                "classes": "text-base font-bold text-[#0f171c]"
                              }
                            }
                          },
                          {
                            "id": "bp-sh-body-c-atc",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-2.5 pb-2.5 pt-2 lg:px-3 lg:pb-3"
                              },
                              "quantity-wrapper": {
                                "classes": ""
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
                                "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#ed1c2f] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10"
                              },
                              "button-icon": {
                                "classes": "empty:hidden flex items-center"
                              },
                              "button-label": {
                                "classes": "whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-sh-body-pg-pager",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": "",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-3 pt-10"
                          },
                          "previous": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "next": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "previous-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "next-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "current": {
                            "classes": "w-14 text-center text-sm"
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
            "id": "bp-sh-foot",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-t border-[#e8eaef] bg-[#f7f8fb]"
              }
            },
            "children": [
              {
                "id": "bp-sh-foot-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8"
                  }
                },
                "children": [
                  {
                    "id": "bp-sh-foot-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on delivery",
                          "description": "Pay when you receive.",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast & Reliable Delivery",
                          "description": "Rangpur City and nearby areas.",
                          "icon": "IconTruck",
                          "iconSize": ""
                        },
                        {
                          "title": "100% Genuine Products",
                          "description": "Authentic parts only.",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Dedicated Support",
                          "description": "We are here to help.",
                          "icon": "IconPhoneCall",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 rounded-xl border border-[#e8eaef] bg-white px-5 py-3"
                      },
                      "loop-item": {
                        "classes": "flex items-center gap-2"
                      },
                      "title": {
                        "classes": "text-xs font-semibold text-[#0f171c] whitespace-nowrap"
                      },
                      "description": {
                        "classes": ""
                      },
                      "icon": {
                        "classes": "text-[#ed1c2f] flex items-center justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-sh-foot-fb-2",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
                          "size": "18"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "bp-sh-foot-fb-3",
                        "type": "featureboxTitle",
                        "options": {
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "img": {
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
        ],
        "meta": ""
      },
      {
        "title": "Product",
        "type": "product",
        "content": [
          {
            "id": "bp-pd-main",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-pd-main-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12"
                  }
                },
                "children": [
                  {
                    "id": "bp-pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 lg:grid-cols-2 gap-10"
                      },
                      "grid-item": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "bp-pd-col-gallery",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-pd-gal-1",
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
                                "classes": ""
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "rounded-xl overflow-hidden bg-[#f1f3f7] [&_img]:aspect-square [&_img]:object-cover"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-[#0f171c]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-9! rounded-full! shadow-md [&>svg]:fill-[#0f171c]!"
                              },
                              "pagination": {
                                "classes": ""
                              },
                              "dot": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-pd-col-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full flex flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-pd-cat-1",
                            "type": "productCategories",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline gap-2 flex-wrap"
                              },
                              "label": {
                                "classes": "text-[11px] font-semibold uppercase tracking-widest text-[#9aa3ad]"
                              },
                              "items": {
                                "classes": "flex flex-wrap items-baseline"
                              },
                              "item": {
                                "classes": "text-[11px] font-bold uppercase tracking-widest text-[#ed1c2f] hover:text-[#c21424] transition-colors"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
                                "classes": "text-[#9aa3ad] mr-1"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f171c]"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-rate-1",
                            "type": "productRatings",
                            "options": {
                              "label": "",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-2 items-center"
                              },
                              "star-rate": {
                                "classes": "flex gap-0.5 items-center text-amber-500 [&_svg]:size-4"
                              },
                              "rate-count": {
                                "classes": "flex items-center"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "avg-rating": {
                                "classes": "text-sm font-bold text-[#0f171c]"
                              },
                              "total-reviews": {
                                "classes": "text-sm text-[#5b6670]"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-price-1",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 items-center"
                              },
                              "simple-price-wrap": {
                                "classes": "flex gap-3 items-baseline"
                              },
                              "simple-price-sale": {
                                "classes": "text-3xl font-extrabold text-[#0f171c]"
                              },
                              "simple-price-regular": {
                                "classes": "text-base line-through text-[#9aa3ad]"
                              },
                              "variable-price-wrap": {
                                "classes": "flex gap-2 items-center"
                              },
                              "variable-price-min": {
                                "classes": "text-base text-[#5b6670]"
                              },
                              "variable-price-max": {
                                "classes": "text-base text-[#5b6670]"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-disc-1",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF today",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit flex items-baseline gap-1 rounded-full bg-[#fdeaec] px-3 py-1 text-[#ed1c2f]"
                              },
                              "discount": {
                                "classes": "text-sm font-bold"
                              },
                              "label": {
                                "classes": "text-xs font-semibold"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-var-1",
                            "type": "productVariablePrices",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "attr-wrap": {
                                "classes": "flex flex-col gap-5"
                              },
                              "attr-item": {
                                "classes": "flex flex-col gap-2"
                              },
                              "attr-title": {
                                "classes": "text-xs font-semibold uppercase tracking-wide text-[#5b6670]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "min-w-14 px-4 py-2 text-sm font-medium text-center text-[#0f171c] bg-white border border-[#e8eaef] rounded-xl cursor-pointer hover:border-[#ed1c2f] transition-colors"
                              },
                              "variation-price": {
                                "classes": "text-2xl font-extrabold text-[#0f171c]"
                              },
                              "variation-selected": {
                                "classes": "border-[#ed1c2f] bg-[#ed1c2f] text-white"
                              },
                              "variation-disabled": {
                                "classes": "opacity-40 cursor-not-allowed line-through"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-stock-1",
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
                              "*": {
                                "classes": "flex items-center gap-3"
                              },
                              "stock-status": {
                                "classes": "flex items-center gap-1.5"
                              },
                              "label": {
                                "classes": "flex items-center gap-1.5"
                              },
                              "label-text": {
                                "classes": "text-sm font-medium"
                              },
                              "label-icon": {
                                "classes": "shrink-0 flex items-center [&_svg]:size-4"
                              },
                              "icon": {
                                "classes": "shrink-0 flex items-center [&_svg]:size-3"
                              },
                              "out-of-stock": {
                                "classes": "text-[#ed1c2f]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "text-[#ed1c2f]"
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
                            "id": "bp-pd-atc-1",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "IconShoppingCartPlus",
                              "iconSize": 18,
                              "hideQuanity": false,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 items-stretch"
                              },
                              "quantity-wrapper": {
                                "classes": "flex items-center justify-between gap-1 px-2 rounded-xl border border-[#e8eaef] text-[#5b6670]"
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
                                "classes": "flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ed1c2f] px-7 text-[15px] font-bold text-white cursor-pointer hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "text-sm font-bold whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-wa-1",
                            "type": "whatsappButton",
                            "options": {
                              "label": "Ask about this part",
                              "phone": "",
                              "message": "Hi, I would like to ask about {product_title} {product_url}",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit"
                              },
                              "link": {
                                "classes": "flex gap-2 items-center px-4 py-2.5 rounded-xl border border-[#25d366] bg-white text-[#1da851] cursor-pointer hover:bg-[#25d366]/5 transition-colors"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "text-sm font-medium whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-usp-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "IconCheck",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Cash on delivery across Bangladesh",
                                  "icon": ""
                                },
                                {
                                  "text": "No advance payment needed",
                                  "icon": ""
                                },
                                {
                                  "text": "Every part checked against its part number before packing",
                                  "icon": ""
                                },
                                {
                                  "text": "Call or WhatsApp us and we will place the order for you",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2 rounded-xl bg-[#f7f8fb] border border-[#e8eaef] p-4"
                              },
                              "li": {
                                "classes": "flex items-start gap-2"
                              },
                              "icon": {
                                "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-[#ed1c2f]"
                              },
                              "text": {
                                "classes": "text-sm text-[#0f171c] leading-relaxed"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-sku-1",
                            "type": "productSku",
                            "options": {
                              "label": "SKU:",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              },
                              "label": {
                                "classes": "empty:hidden text-sm text-[#5b6670]"
                              },
                              "sku": {
                                "classes": "text-sm font-medium text-[#0f171c] tracking-wide"
                              },
                              "icon": {
                                "classes": "shrink-0 flex items-center text-[#9aa3ad]"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-tags-1",
                            "type": "productTags",
                            "options": {
                              "label": "Tags:",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline gap-1.5 flex-wrap"
                              },
                              "label": {
                                "classes": "text-xs text-[#9aa3ad]"
                              },
                              "items": {
                                "classes": "flex flex-wrap items-baseline gap-1.5"
                              },
                              "item": {
                                "classes": "text-xs font-medium text-[#5b6670] hover:text-[#ed1c2f] transition-colors"
                              },
                              "category-name": {
                                "classes": ""
                              },
                              "separator": {
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
            "id": "bp-pd-tabs-sec",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-y border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14"
                  }
                },
                "children": [
                  {
                    "id": "bp-pd-tabs",
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
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "bg-white rounded-xl border border-[#e8eaef] p-5"
                      },
                      "navs-items": {
                        "classes": "gap-6 border-b border-[#e8eaef]"
                      },
                      "nav-item": {
                        "classes": "flex items-center gap-2 px-1 py-3 text-sm font-medium text-[#5b6670] border-b-2 border-transparent hover:text-[#0f171c] whitespace-nowrap cursor-pointer"
                      },
                      "nav-item-active": {
                        "classes": "text-[#ed1c2f]! border-[#ed1c2f]!"
                      },
                      "nav-item-label": {
                        "classes": ""
                      },
                      "nav-item-icon": {
                        "classes": "empty:hidden"
                      },
                      "nav-item-content": {
                        "classes": "pt-5"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-pd-tab-desc",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-pd-desc",
                            "type": "postContent",
                            "options": {
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#0f171c] leading-relaxed max-w-3xl [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3 [&_strong]:font-semibold"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-pd-tab-spec",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-pd-spec-1",
                            "type": "list",
                            "options": {
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Fits: add the bike models this part fits",
                                  "icon": ""
                                },
                                {
                                  "text": "Part number: add the OEM or aftermarket number",
                                  "icon": ""
                                },
                                {
                                  "text": "Part number: add the OEM or aftermarket number or finish",
                                  "icon": ""
                                },
                                {
                                  "text": "Warranty: add the warranty period",
                                  "icon": ""
                                },
                                {
                                  "text": "In the box: add what ships with it",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "ml-5 max-w-2xl"
                              },
                              "li": {
                                "classes": "list-disc py-1.5 border-b border-[#e8eaef] last:border-0 marker:text-[#9aa3ad]"
                              },
                              "icon": {
                                "classes": "empty:hidden"
                              },
                              "text": {
                                "classes": "text-sm text-[#0f171c]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-pd-tab-del",
                        "type": "tabsItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-pd-del-1",
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
                                  "text": "Wrong part or damaged in transit? Send a photo on WhatsApp and we will replace it",
                                  "icon": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2.5 max-w-2xl"
                              },
                              "li": {
                                "classes": "flex items-start gap-2"
                              },
                              "icon": {
                                "classes": "empty:hidden shrink-0 flex items-center mt-0.5 text-[#ed1c2f]"
                              },
                              "text": {
                                "classes": "text-sm text-[#0f171c] leading-relaxed"
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
            "id": "bp-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-pd-rel-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-16 flex flex-col gap-8"
                  }
                },
                "children": [
                  {
                    "id": "bp-pd-rel-h",
                    "type": "heading",
                    "options": {
                      "text": "You may also like",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-2xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-pd-rel-rp-1",
                    "type": "relatedProducts",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "8",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "loop-items": {
                        "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-pd-rel-rp-2",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-pd-rel-rp-3",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": "relative block aspect-square"
                              },
                              "image": {
                                "classes": "size-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-rel-rp-4",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#0f171c] hover:text-[#ed1c2f] lg:px-3 lg:pt-3 lg:text-base"
                              }
                            }
                          },
                          {
                            "id": "bp-pd-rel-rp-5",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-2 items-center"
                              },
                              "simple-price-wrap": {
                                "classes": "flex gap-2 items-baseline"
                              },
                              "simple-price-sale": {
                                "classes": "text-base font-extrabold text-[#0f171c]"
                              },
                              "simple-price-regular": {
                                "classes": "text-xs line-through text-[#9aa3ad]"
                              },
                              "variable-price-wrap": {
                                "classes": "flex gap-1.5 items-center"
                              },
                              "variable-price-min": {
                                "classes": "text-sm text-[#5b6670]"
                              },
                              "variable-price-max": {
                                "classes": "text-sm text-[#5b6670]"
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
        ],
        "meta": ""
      },
      {
        "title": "Categories Archive",
        "type": "categories",
        "content": [
          {
            "id": "bp-ca-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-ca-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3"
                  }
                },
                "children": [
                  {
                    "id": "bp-ca-head-label",
                    "type": "text",
                    "options": {
                      "text": "Categories",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm font-bold text-[#ed1c2f]"
                      }
                    }
                  },
                  {
                    "id": "bp-ca-head-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Category",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-ca-head-t",
                    "type": "text",
                    "options": {
                      "text": "Every category in the shop. Pick one to narrow things down.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-2xl leading-relaxed"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-ca-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-ca-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14"
                  }
                },
                "children": [
                  {
                    "id": "bp-ca-grid-1",
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
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
                      },
                      "loop-item": {
                        "classes": "h-full bg-white border border-[#e8eaef] rounded-xl p-4 flex flex-col gap-3 transition-colors hover:border-[#ed1c2f]"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ca-grid-2",
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
                            "classes": "h-full bg-white border border-[#e8eaef] rounded-xl p-4 flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ca-grid-3",
                            "type": "termThumbnail",
                            "options": {
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full aspect-square rounded-xl overflow-hidden bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": ""
                              },
                              "image": {
                                "classes": "object-cover w-full h-full"
                              }
                            }
                          },
                          {
                            "id": "bp-ca-grid-4",
                            "type": "termTitle",
                            "options": {
                              "text": "Term Title.",
                              "tag": "h3",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-bold text-[#0f171c] text-center line-clamp-2"
                              }
                            }
                          },
                          {
                            "id": "bp-ca-grid-5",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " items",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto text-xs font-semibold text-[#ed1c2f] bg-[#fdeaec] rounded-full px-2.5 py-1"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-ca-grid-6",
                        "type": "termsGridPagination",
                        "options": {
                          "tag": "div"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex gap-3 items-center justify-center mt-10"
                          },
                          "previous": {
                            "classes": "bg-[#ed1c2f] hover:bg-[#c21424] px-4 py-2 rounded-xl text-white cursor-pointer"
                          },
                          "next": {
                            "classes": "bg-[#ed1c2f] hover:bg-[#c21424] px-4 py-2 rounded-xl text-white cursor-pointer"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "current": {
                            "classes": "w-20 text-center border border-[#e8eaef] rounded-xl py-2"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": ""
      },
      {
        "title": "Categories Single",
        "type": "categories_single",
        "content": [
          {
            "id": "bp-cs-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-cs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3"
                  }
                },
                "children": [
                  {
                    "id": "bp-cs-head-h",
                    "type": "heading",
                    "options": {
                      "text": "Category",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-cs-head-t",
                    "type": "text",
                    "options": {
                      "text": "Parts in this category, newest first. Cash on delivery on every order.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-2xl leading-relaxed"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-cs-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-cs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12"
                  }
                },
                "children": [
                  {
                    "id": "bp-cs-body-pg",
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
                        "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-cs-body-pg-loop",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-cs-body-c-badge",
                            "type": "productDiscount",
                            "options": {
                              "label": "OFF",
                              "separator": ", "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-2 top-2 z-10 flex items-baseline gap-0.5 rounded-md bg-[#ed1c2f] px-[7px] py-[3px] text-white"
                              },
                              "discount": {
                                "classes": "text-[11px] font-bold"
                              },
                              "label": {
                                "classes": "text-[11px] font-bold"
                              }
                            }
                          },
                          {
                            "id": "bp-cs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": "relative block aspect-square"
                              },
                              "image": {
                                "classes": "size-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "bp-cs-body-c-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#0f171c] hover:text-[#ed1c2f] lg:px-3 lg:pt-3 lg:text-base"
                              }
                            }
                          },
                          {
                            "id": "bp-cs-body-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 px-2.5 pt-1 lg:px-3"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-baseline gap-x-1.5"
                              },
                              "simple-price-sale": {
                                "classes": "text-lg font-bold text-[#0f171c] lg:text-xl"
                              },
                              "simple-price-regular": {
                                "classes": "text-[13px] text-[#9aa3ad] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex items-baseline gap-x-1.5"
                              },
                              "variable-price-min": {
                                "classes": "text-base font-bold text-[#0f171c]"
                              },
                              "variable-price-max": {
                                "classes": "text-base font-bold text-[#0f171c]"
                              }
                            }
                          },
                          {
                            "id": "bp-cs-body-c-atc",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-2.5 pb-2.5 pt-2 lg:px-3 lg:pb-3"
                              },
                              "quantity-wrapper": {
                                "classes": ""
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
                                "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#ed1c2f] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10"
                              },
                              "button-icon": {
                                "classes": "empty:hidden flex items-center"
                              },
                              "button-label": {
                                "classes": "whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-cs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": "",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-3 pt-10"
                          },
                          "previous": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "next": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "previous-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "next-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "current": {
                            "classes": "w-14 text-center text-sm"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": ""
      },
      {
        "title": "Tags Archive",
        "type": "tags",
        "content": [
          {
            "id": "bp-ta-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-ta-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3"
                  }
                },
                "children": [
                  {
                    "id": "bp-ta-head-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-ta-head-t",
                    "type": "text",
                    "options": {
                      "text": "Tags group parts across categories, by bike, system or job.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-2xl leading-relaxed"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-ta-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-ta-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14"
                  }
                },
                "children": [
                  {
                    "id": "bp-ta-grid-1",
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
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "flex flex-wrap gap-3"
                      },
                      "loop-item": {
                        "classes": "flex items-center gap-2 rounded-full border border-[#e8eaef] bg-white px-4 py-2 transition-colors hover:border-[#ed1c2f] hover:bg-[#fdeaec]"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ta-grid-2",
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
                            "classes": "flex items-center gap-2 rounded-full border border-[#e8eaef] bg-white px-4 py-2"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ta-grid-3",
                            "type": "termTitle",
                            "options": {
                              "text": "Term Title.",
                              "tag": "h3",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-semibold text-[#0f171c]"
                              }
                            }
                          },
                          {
                            "id": "bp-ta-grid-4",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs font-semibold text-[#ed1c2f]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-ta-grid-5",
                        "type": "termsGridPagination",
                        "options": {
                          "tag": "div"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex gap-3 items-center justify-center mt-10"
                          },
                          "previous": {
                            "classes": "bg-[#ed1c2f] hover:bg-[#c21424] px-4 py-2 rounded-xl text-white cursor-pointer"
                          },
                          "next": {
                            "classes": "bg-[#ed1c2f] hover:bg-[#c21424] px-4 py-2 rounded-xl text-white cursor-pointer"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "current": {
                            "classes": "w-20 text-center border border-[#e8eaef] rounded-xl py-2"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": ""
      },
      {
        "title": "Tags Single",
        "type": "tags_single",
        "content": [
          {
            "id": "bp-ts-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-ts-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3"
                  }
                },
                "children": [
                  {
                    "id": "bp-ts-head-h",
                    "type": "heading",
                    "options": {
                      "text": "Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-ts-head-t",
                    "type": "text",
                    "options": {
                      "text": "Everything carrying this tag, newest first.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-2xl leading-relaxed"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-ts-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-ts-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12"
                  }
                },
                "children": [
                  {
                    "id": "bp-ts-body-pg",
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
                        "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ts-body-pg-loop",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ts-body-c-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": "relative block aspect-square"
                              },
                              "image": {
                                "classes": "size-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "bp-ts-body-c-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#0f171c] hover:text-[#ed1c2f] lg:px-3 lg:pt-3 lg:text-base"
                              }
                            }
                          },
                          {
                            "id": "bp-ts-body-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 px-2.5 pt-1 lg:px-3"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-baseline gap-x-1.5"
                              },
                              "simple-price-sale": {
                                "classes": "text-lg font-bold text-[#0f171c] lg:text-xl"
                              },
                              "simple-price-regular": {
                                "classes": "text-[13px] text-[#9aa3ad] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex items-baseline gap-x-1.5"
                              },
                              "variable-price-min": {
                                "classes": "text-base font-bold text-[#0f171c]"
                              },
                              "variable-price-max": {
                                "classes": "text-base font-bold text-[#0f171c]"
                              }
                            }
                          },
                          {
                            "id": "bp-ts-body-c-atc",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-2.5 pb-2.5 pt-2 lg:px-3 lg:pb-3"
                              },
                              "quantity-wrapper": {
                                "classes": ""
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
                                "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#ed1c2f] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10"
                              },
                              "button-icon": {
                                "classes": "empty:hidden flex items-center"
                              },
                              "button-label": {
                                "classes": "whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-ts-body-pg-pager",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": "",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-3 pt-10"
                          },
                          "previous": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "next": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "previous-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "next-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "current": {
                            "classes": "w-14 text-center text-sm"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": ""
      },
      {
        "title": "Brands Archive",
        "type": "brands",
        "content": [
          {
            "id": "bp-ba-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-ba-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3"
                  }
                },
                "children": [
                  {
                    "id": "bp-ba-head-h",
                    "type": "heading",
                    "options": {
                      "text": "Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-ba-head-t",
                    "type": "text",
                    "options": {
                      "text": "The manufacturers and suppliers behind the parts we stock.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-2xl leading-relaxed"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-ba-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-ba-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14"
                  }
                },
                "children": [
                  {
                    "id": "bp-ba-grid-1",
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
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
                      },
                      "loop-item": {
                        "classes": "flex flex-col items-center gap-3 rounded-xl border border-[#e8eaef] bg-white p-5 transition-colors hover:border-[#ed1c2f]"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ba-grid-2",
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
                            "classes": "flex flex-col items-center gap-3 rounded-xl border border-[#e8eaef] bg-white p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ba-grid-3",
                            "type": "termThumbnail",
                            "options": {
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "size-20 rounded-full overflow-hidden bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": ""
                              },
                              "image": {
                                "classes": "object-cover w-full h-full"
                              }
                            }
                          },
                          {
                            "id": "bp-ba-grid-4",
                            "type": "termTitle",
                            "options": {
                              "text": "Term Title.",
                              "tag": "h3",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-bold text-[#0f171c] text-center line-clamp-2"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-ba-grid-5",
                        "type": "termsGridPagination",
                        "options": {
                          "tag": "div"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex gap-3 items-center justify-center mt-10"
                          },
                          "previous": {
                            "classes": "bg-[#ed1c2f] hover:bg-[#c21424] px-4 py-2 rounded-xl text-white cursor-pointer"
                          },
                          "next": {
                            "classes": "bg-[#ed1c2f] hover:bg-[#c21424] px-4 py-2 rounded-xl text-white cursor-pointer"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "current": {
                            "classes": "w-20 text-center border border-[#e8eaef] rounded-xl py-2"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": ""
      },
      {
        "title": "Brands Single",
        "type": "brands_single",
        "content": [
          {
            "id": "bp-bs-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-bs-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3"
                  }
                },
                "children": [
                  {
                    "id": "bp-bs-head-h",
                    "type": "heading",
                    "options": {
                      "text": "Brand",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-bs-head-t",
                    "type": "text",
                    "options": {
                      "text": "Everything we stock from this brand, newest first.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-2xl leading-relaxed"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-bs-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-bs-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12"
                  }
                },
                "children": [
                  {
                    "id": "bp-bs-body-pg",
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
                        "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-bs-body-pg-loop",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e8eaef] bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-bs-body-c-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": "relative block aspect-square"
                              },
                              "image": {
                                "classes": "size-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "bp-bs-body-c-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-2 px-2.5 pt-2.5 text-[15px] font-semibold leading-[1.3] text-[#0f171c] hover:text-[#ed1c2f] lg:px-3 lg:pt-3 lg:text-base"
                              }
                            }
                          },
                          {
                            "id": "bp-bs-body-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex flex-wrap items-baseline gap-x-1.5 px-2.5 pt-1 lg:px-3"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-baseline gap-x-1.5"
                              },
                              "simple-price-sale": {
                                "classes": "text-lg font-bold text-[#0f171c] lg:text-xl"
                              },
                              "simple-price-regular": {
                                "classes": "text-[13px] text-[#9aa3ad] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex items-baseline gap-x-1.5"
                              },
                              "variable-price-min": {
                                "classes": "text-base font-bold text-[#0f171c]"
                              },
                              "variable-price-max": {
                                "classes": "text-base font-bold text-[#0f171c]"
                              }
                            }
                          },
                          {
                            "id": "bp-bs-body-c-atc",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-2.5 pb-2.5 pt-2 lg:px-3 lg:pb-3"
                              },
                              "quantity-wrapper": {
                                "classes": ""
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
                                "classes": "flex h-9 w-full items-center justify-center rounded-lg bg-[#ed1c2f] text-[13px] font-bold text-white cursor-pointer hover:opacity-90 lg:h-10"
                              },
                              "button-icon": {
                                "classes": "empty:hidden flex items-center"
                              },
                              "button-label": {
                                "classes": "whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-bs-body-pg-pager",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": "",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-3 pt-10"
                          },
                          "previous": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "next": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "previous-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "next-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "current": {
                            "classes": "w-14 text-center text-sm"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": ""
      },
      {
        "title": "Blog Archive",
        "type": "blog",
        "content": [
          {
            "id": "bp-bl-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-bl-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-3"
                  }
                },
                "children": [
                  {
                    "id": "bp-bl-head-h",
                    "type": "heading",
                    "options": {
                      "text": "Blog",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-bl-head-t",
                    "type": "text",
                    "options": {
                      "text": "Maintenance tips, fitment guides and news for every rider.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-2xl leading-relaxed"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-bl-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-bl-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12"
                  }
                },
                "children": [
                  {
                    "id": "bp-bl-grid-1",
                    "type": "postGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "post_type": [
                          "post"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "6",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col gap-3 bg-white border border-[#e8eaef] rounded-xl p-3 transition-shadow duration-300 hover:shadow-lg"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-bl-grid-2",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col gap-3 bg-white border border-[#e8eaef] rounded-xl p-3 transition-shadow duration-300 hover:shadow-lg"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-bl-grid-3",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "h-52 overflow-hidden rounded-xl bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": "block w-full h-full"
                              },
                              "image": {
                                "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "bp-bl-grid-4",
                            "type": "postDate",
                            "options": {
                              "tag": "span",
                              "linkTo": "",
                              "dateFormat": "DD-MM-YYYY"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs uppercase tracking-wide text-[#9aa3ad]"
                              }
                            }
                          },
                          {
                            "id": "bp-bl-grid-5",
                            "type": "postTitle",
                            "options": {
                              "text": "Post Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base font-bold text-[#0f171c] line-clamp-2 transition-colors duration-200 group-hover:text-[#ed1c2f]"
                              }
                            }
                          },
                          {
                            "id": "bp-bl-grid-6",
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
                              "*": {
                                "classes": "flex flex-col gap-3 mt-auto"
                              },
                              "excerpt": {
                                "classes": "text-sm text-[#5b6670] leading-relaxed line-clamp-3"
                              },
                              "read-more": {
                                "classes": "flex gap-2 items-center text-sm font-bold text-[#ed1c2f] hover:text-[#c21424]"
                              },
                              "read-more-icon": {
                                "classes": ""
                              },
                              "read-more-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "bp-bl-grid-7",
                        "type": "postGridPagination",
                        "options": {
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": "",
                          "sliderOptions": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-center gap-3 pt-10"
                          },
                          "previous": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "next": {
                            "classes": "px-4 py-2 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#5b6670] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f]"
                          },
                          "previous-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "next-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "current": {
                            "classes": "w-14 text-center text-sm"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": ""
      },
      {
        "title": "Blog Single",
        "type": "blog_single",
        "content": [
          {
            "id": "bp-bp-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-bp-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full max-w-3xl mx-auto px-4 pt-12 pb-8 flex flex-col gap-5"
                  }
                },
                "children": [
                  {
                    "id": "bp-bp-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f171c] leading-tight"
                      }
                    }
                  },
                  {
                    "id": "bp-bp-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#9aa3ad]"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-bp-author",
                        "type": "postAuthor",
                        "options": {
                          "linkTo": "",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-semibold text-[#5b6670]"
                          }
                        }
                      },
                      {
                        "id": "bp-bp-date",
                        "type": "postDate",
                        "options": {
                          "linkTo": "",
                          "dateFormat": "MMMM DD, YYYY"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[#9aa3ad]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "bp-bp-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": "postUrl"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full overflow-hidden rounded-xl"
                      },
                      "link": {
                        "classes": "block"
                      },
                      "image": {
                        "classes": "w-full aspect-video object-cover bg-[#f1f3f7]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-bp-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-bp-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full max-w-3xl mx-auto px-4 pb-14"
                  }
                },
                "children": [
                  {
                    "id": "bp-bp-content",
                    "type": "postContent",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-base text-[#0f171c] leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#0f171c] [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-4 [&_a]:text-[#ed1c2f] [&_a]:underline [&_img]:rounded-xl [&_img]:my-6"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-bp-more",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-bp-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8 lg:py-14 flex flex-col gap-6"
                  }
                },
                "children": [
                  {
                    "id": "bp-bp-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More from the blog",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-bp-more-pg-1",
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
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2"
                      },
                      "loop-item": {
                        "classes": "group flex gap-4 items-center bg-white border border-[#e8eaef] rounded-xl p-3 transition-colors duration-200 hover:border-[#ed1c2f]"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-bp-more-pg-2",
                        "type": "postLoop",
                        "options": {
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid gap-4 grid-cols-1 sm:grid-cols-2"
                          },
                          "loop-item": {
                            "classes": "group flex gap-4 items-center bg-white border border-[#e8eaef] rounded-xl p-3 transition-colors duration-200 hover:border-[#ed1c2f]"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-bp-more-pg-3",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-20 h-20 shrink-0 overflow-hidden rounded-xl bg-[#f1f3f7]"
                              },
                              "link": {
                                "classes": "block w-full h-full"
                              },
                              "image": {
                                "classes": "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "bp-bp-more-pg-4",
                            "type": "postTitle",
                            "options": {
                              "text": "Post Title.",
                              "tag": "h4",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-semibold text-[#0f171c] line-clamp-2 transition-colors duration-200 group-hover:text-[#ed1c2f]"
                              }
                            }
                          },
                          {
                            "id": "bp-bp-more-pg-5",
                            "type": "postDate",
                            "options": {
                              "tag": "span",
                              "linkTo": "",
                              "dateFormat": "DD-MM-YYYY"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs text-[#9aa3ad]"
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
        ],
        "meta": ""
      },
      {
        "title": "Account",
        "type": "account",
        "content": [
          {
            "id": "bp-ac-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb] border-b border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-ac-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12"
                  }
                },
                "children": [
                  {
                    "id": "bp-ac-head-h",
                    "type": "heading",
                    "options": {
                      "text": "My account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-ac-body",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-ac-ca-1",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-7 lg:py-12 flex flex-col gap-12"
                  }
                },
                "children": [
                  {
                    "id": "bp-ac-ca-2",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ac-ca-3",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 lg:grid-cols-2 gap-6"
                          },
                          "grid-item": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ac-ca-4",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-xl border border-[#e8eaef] bg-white p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ac-ca-5",
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
                                  "*": {
                                    "classes": ""
                                  },
                                  "form": {
                                    "classes": "flex flex-col gap-5"
                                  },
                                  "input-fields-wrap": {
                                    "classes": "flex flex-col gap-4"
                                  },
                                  "input-wrap": {
                                    "classes": "flex flex-col gap-1.5"
                                  },
                                  "input": {
                                    "classes": "w-full px-3 py-2.5 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#0f171c] placeholder:text-[#9aa3ad] focus:outline-none focus:border-[#ed1c2f] focus:ring-2 focus:ring-[#fdeaec]"
                                  },
                                  "input-username": {
                                    "classes": ""
                                  },
                                  "input-phone": {
                                    "classes": ""
                                  },
                                  "input-password": {
                                    "classes": ""
                                  },
                                  "input-email": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "label-username": {
                                    "classes": "text-xs font-semibold text-[#5b6670]"
                                  },
                                  "label-email": {
                                    "classes": "text-xs font-semibold text-[#5b6670]"
                                  },
                                  "label-phone": {
                                    "classes": ""
                                  },
                                  "label-password": {
                                    "classes": ""
                                  },
                                  "submit": {
                                    "classes": "w-full py-2.5 rounded-xl bg-[#ed1c2f] text-sm font-bold text-white text-center cursor-pointer hover:bg-[#c21424] transition-colors"
                                  },
                                  "have-account": {
                                    "classes": "text-xs text-[#5b6670] text-center"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bp-ac-ca-6",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-xl border border-[#e8eaef] bg-white p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ac-ca-7",
                                "type": "login",
                                "options": {
                                  "usernameLabel": "Email or phone",
                                  "passwordLabel": "Password",
                                  "loginLabel": "Log in",
                                  "forgetPasswordLabel": "Forgot your password?"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "form": {
                                    "classes": "flex flex-col gap-5"
                                  },
                                  "input-fields-wrap": {
                                    "classes": "flex flex-col gap-4"
                                  },
                                  "input-wrap": {
                                    "classes": "flex flex-col gap-1.5"
                                  },
                                  "input": {
                                    "classes": "w-full px-3 py-2.5 rounded-xl border border-[#e8eaef] bg-white text-sm text-[#0f171c] placeholder:text-[#9aa3ad] focus:outline-none focus:border-[#ed1c2f] focus:ring-2 focus:ring-[#fdeaec]"
                                  },
                                  "input-username": {
                                    "classes": ""
                                  },
                                  "input-email": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "label-username": {
                                    "classes": "text-xs font-semibold text-[#5b6670]"
                                  },
                                  "label-email": {
                                    "classes": "text-xs font-semibold text-[#5b6670]"
                                  },
                                  "submit": {
                                    "classes": "w-full py-2.5 rounded-xl bg-[#ed1c2f] text-sm font-bold text-white text-center cursor-pointer hover:bg-[#c21424] transition-colors"
                                  },
                                  "forget-password": {
                                    "classes": "text-xs text-[#5b6670] text-center"
                                  }
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
                    "id": "bp-ac-ca-8",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full rounded-xl border border-[#e8eaef] bg-white p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ac-ca-9",
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
                          "*": {
                            "classes": "w-full"
                          },
                          "navs-items": {
                            "classes": "flex gap-6 overflow-x-auto border-b border-[#e8eaef]"
                          },
                          "nav-item": {
                            "classes": "flex items-center gap-2 shrink-0 px-1 py-3 text-sm font-medium text-[#5b6670] border-b-2 border-transparent whitespace-nowrap cursor-pointer hover:text-[#0f171c]"
                          },
                          "nav-item-active": {
                            "classes": "text-[#ed1c2f]! border-[#ed1c2f]!"
                          },
                          "nav-item-label": {
                            "classes": ""
                          },
                          "nav-item-icon": {
                            "classes": "empty:hidden flex items-center"
                          },
                          "nav-item-content": {
                            "classes": "pt-6"
                          }
                        },
                        "children": [
                          {
                            "id": "bp-ac-ca-10",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ac-ca-11",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bp-ac-ca-12",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ac-ca-13",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bp-ac-ca-14",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ac-ca-15",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bp-ac-ca-16",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ac-ca-17",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "bp-ac-ca-18",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full"
                              }
                            },
                            "children": [
                              {
                                "id": "bp-ac-ca-19",
                                "type": "customerProfileEdit",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                },
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
        "meta": ""
      },
      {
        "title": "Thank you",
        "type": "thank_you",
        "content": [
          {
            "id": "bp-ty-main",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#f7f8fb]"
              }
            },
            "children": [
              {
                "id": "bp-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-5"
                  }
                },
                "children": [
                  {
                    "id": "bp-ty-icon",
                    "type": "icon",
                    "options": {
                      "iconName": "IconCircleCheckFilled",
                      "size": "56"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "w-fit flex items-center justify-center text-[#ed1c2f]"
                      }
                    }
                  },
                  {
                    "id": "bp-ty-h",
                    "type": "heading",
                    "options": {
                      "text": "Thank you for your order",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-ty-t",
                    "type": "text",
                    "options": {
                      "text": "We have your order and will call to confirm the address before the parcel leaves Rangpur. Pay the courier in cash when it arrives.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-lg leading-relaxed"
                      }
                    }
                  },
                  {
                    "id": "bp-ty-steps-1",
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
                          "text": "Your parts are checked and packed",
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
                      "*": {
                        "classes": "ml-6 flex flex-col gap-2.5 max-w-2xl text-left"
                      },
                      "li": {
                        "classes": "list-decimal pl-1 marker:font-bold marker:text-[#ed1c2f]"
                      },
                      "icon": {
                        "classes": "empty:hidden"
                      },
                      "text": {
                        "classes": "text-sm text-[#0f171c] leading-relaxed"
                      }
                    }
                  },
                  {
                    "id": "bp-ty-b",
                    "type": "button",
                    "options": {
                      "text": "Keep shopping",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/shop",
                      "target": "",
                      "icon": "IconArrowRight",
                      "iconSize": 16
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ed1c2f] text-white cursor-pointer hover:bg-[#c21424] transition-colors w-fit mt-2"
                      },
                      "icon": {
                        "classes": "flex items-center shrink-0"
                      },
                      "label": {
                        "classes": "text-sm font-bold"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "bp-ty-trust",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-t border-[#e8eaef]"
              }
            },
            "children": [
              {
                "id": "bp-ty-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[75rem] px-4 xl:px-0 py-8"
                  }
                },
                "children": [
                  {
                    "id": "bp-ty-fb-1",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on delivery",
                          "description": "Pay when you receive.",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast & Reliable Delivery",
                          "description": "Rangpur City and nearby areas.",
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
                          "title": "Wrong part or damaged?",
                          "description": "Send a photo and we replace it.",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 rounded-xl border border-[#e8eaef] bg-white px-5 py-3"
                      },
                      "loop-item": {
                        "classes": "flex items-center gap-2"
                      },
                      "title": {
                        "classes": "text-xs font-semibold text-[#0f171c] whitespace-nowrap"
                      },
                      "description": {
                        "classes": ""
                      },
                      "icon": {
                        "classes": "text-[#ed1c2f] flex items-center justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-ty-fb-2",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
                          "size": "18"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "bp-ty-fb-3",
                        "type": "featureboxTitle",
                        "options": {
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "img": {
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
        ],
        "meta": ""
      },
      {
        "title": "404",
        "type": "404",
        "content": [
          {
            "id": "bp-nf-main",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full"
              }
            },
            "children": [
              {
                "id": "bp-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full max-w-xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-5"
                  }
                },
                "children": [
                  {
                    "id": "bp-nf-icon",
                    "type": "icon",
                    "options": {
                      "iconName": "IconSearchOff",
                      "size": "48"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "w-fit flex items-center justify-center text-[#9aa3ad]"
                      }
                    }
                  },
                  {
                    "id": "bp-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "We could not find that page",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f171c]"
                      }
                    }
                  },
                  {
                    "id": "bp-nf-t",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the part may be out of stock. Try all products, or head back to the homepage.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5b6670] max-w-md leading-relaxed"
                      }
                    }
                  },
                  {
                    "id": "bp-nf-actions",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 pt-2"
                      }
                    },
                    "children": [
                      {
                        "id": "bp-nf-b1",
                        "type": "button",
                        "options": {
                          "text": "Back to home",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/",
                          "target": "",
                          "icon": "IconHome",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ed1c2f] text-white cursor-pointer hover:bg-[#c21424] transition-colors w-fit"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "text-sm font-bold"
                          }
                        }
                      },
                      {
                        "id": "bp-nf-b2",
                        "type": "button",
                        "options": {
                          "text": "All products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#e8eaef] bg-white text-[#0f171c] cursor-pointer hover:border-[#ed1c2f] hover:text-[#ed1c2f] transition-colors w-fit"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "text-sm font-semibold"
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "meta": ""
      }
    ]
  }
];

export default template;
