/**
 * Template: Ehans Mart.
 *
 * Built from the rendered site at https://ehans-mart.vercel.app -- a
 * Bangladeshi cash-on-delivery storefront. Same shape as the other files here:
 * one template object, `pages` holding one entry per page type, each
 * `content` an ARRAY of builder blocks. The API stores a page's content as a
 * JSON STRING (Templates.jsx calls `isJsonString` and then `JSON.parse`), so
 * whatever applies this template must `JSON.stringify(page.content)` per page.
 *
 * WHERE THE DESIGN CAME FROM
 *
 * The source is a static site with hand-written CSS, so every value below was
 * read out of its stylesheets rather than guessed. The tokens are
 * `assets/css/main.css`:
 *
 *   #ff5554  --brand-color      announce bar, section titles, nav hover,
 *                               footer icons and links on hover, pagination
 *   #ff5454  --product-card-...  the card accent: discount badge, struck-through
 *                               previous price, and the ADD TO CART fill
 *   #211913  --black            every heading and every line of body copy
 *   #fcf7f5  --body-color       the page itself, and the icon hover tint
 *   #e8e3e1  --border-color2    every hairline: cards, nav rule, chips
 *   #988f8d  --border-color     the search field's border and placeholder
 *   #6c6c6c  --muted            counts and secondary copy
 *   #f5f5f5  --item-bg3         the backing behind a category tile
 *   #008000  --color-green      in-stock, and the thank-you check
 *   #fff8f7 -> #fde9e8          the blush gradient under the footer and every
 *                               inner-page banner, over a 1px rgba(237,32,36,.18)
 *
 * The type scale is the sheet's clamp() ladder, carried across verbatim as
 * arbitrary values so it stays fluid: h1 32->48, h2 28->38, h3 24->30,
 * h4 22->26, h5 20->22, h6 16->18, all at line-height 1.2, body 16/22.
 * `.container` is 1360px with a 20px gutter (16px under 575px) and `.section`
 * is 42px of padding (24px on mobile).
 *
 * Three details worth keeping if these blocks get edited, because they are
 * what make the cards read as the site's:
 *
 *   - the product image well is a square that uses `object-fit: contain`, not
 *     cover -- the site sells packaged goods shot on white
 *   - the card title is 16/1.3 with 0.6px letter-spacing and is NOT bold
 *   - ADD TO CART is 52px tall, uppercase, 1px tracking, full width, and fills
 *     with the accent red rather than outlining
 *
 * THE HOME PAGE, SECTION FOR SECTION
 *
 *   1. announce bar       "get Extra 500tk off on first order", brand red
 *   2. header             logo / search / icons, then the category nav
 *   3. hero               one rounded banner, full-bleed on mobile
 *   4. category strip     nine square tiles, label beneath
 *   5. promo banners      one tall left, two stacked right (747fr / 433fr)
 *   6. Women's Essentials    heading + View All products + six cards
 *   7. Baby Care             same
 *   8. Home & Kitchen        same
 *   9. Home Safety & Storage same
 *  10. Community Reviews   four portrait cards at 279/456
 *
 * The four product rows are scoped by `taxQuery` to `product_cat` slugs:
 * womens-essentials, baby-care, home-kitchen and home-safety-storage. Those
 * terms have to exist, or a row comes back empty. Same for the nine categories
 * the header nav and the footer's Shop column link to.
 *
 * WHAT THIS DOES NOT REPRODUCE, AND WHY
 *
 *   - FONTS. The site loads Figtree (headings), DM Sans (body) and
 *     HindSiliguri (the Bengali product titles) as local @font-face files.
 *     This project ships Geist, and a template is data -- it cannot add a
 *     font. Sizes, weights, line-heights, tracking and casing all match; the
 *     families do not until those three are loaded globally. That is the one
 *     visible difference from the original.
 *   - The hero and the promo trio are SLIDERS and a shine-swept grid on the
 *     site. There is no image-carousel block (`slide` is a value of
 *     `sliderOptions.type`, not a block), so the hero is a single banner and
 *     the promo grid is static -- the shine sweep survives as a hover
 *     pseudo-element. Swap in a slider block if one is added.
 *   - The product rows slide on the site. Six cards fill the 1360px container
 *     exactly, so the grid here matches what the slider shows at desktop and
 *     wraps below it instead of scrolling.
 *   - The header's mega-menu panels, the hide-on-scroll-down transform, the
 *     mobile bottom bar (`app-menu-section`) and the cart drawer have no
 *     blocks to carry them. Category children render as a plain sub-menu list.
 *   - The site's review cards are looping video; these are images.
 *
 * PLACEHOLDERS TO REPLACE BEFORE THIS GOES LIVE
 *
 * The logo (header and footer), the hero banner, the three promo banners and
 * the four review stills are all placehold.co stand-ins. The footer's address,
 * phone, email and hours are the site's real ones.
 */

var template = [
  {
    "name": "Ehans Mart",
    "description": "Bangladeshi cash-on-delivery storefront in coral on warm blush: a red announce bar, a two-row header with a wide search field and a category nav, a rounded hero banner, a nine-tile category strip, an asymmetric promo trio, four product rows of six, and portrait community reviews.",
    "thumbnail": "/templates/ehans-mart.svg",
    "meta": "",
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "em-announce",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#ff5554] py-[7px] sm:py-[10px]"
              }
            },
            "children": [
              {
                "id": "em-announce-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5"
                  }
                },
                "children": [
                  {
                    "id": "em-announce-t",
                    "type": "text",
                    "options": {
                      "text": "get Extra 500tk off on first order",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-center text-[12px] font-medium capitalize leading-[16px] tracking-[0.5px] text-white sm:text-[14px] sm:leading-[20px]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-50 w-full bg-white pt-[10px]"
              }
            },
            "children": [
              {
                "id": "em-hdr-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5"
                  }
                },
                "children": [
                  {
                    "id": "em-hdr-row",
                    "type": "columns",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-between gap-x-5 gap-y-[10px]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-hdr-brand",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex shrink-0 items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "em-hdr-logo",
                            "type": "logo",
                            "options": {
                              "logoType": "text",
                              "logoText": "Ehans Mart",
                              "src": "https://placehold.co/300x80?text=Ehans+Mart",
                              "link": "/"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "inline-flex"
                              },
                              "img": {
                                "classes": "h-auto w-[120px] object-contain sm:w-[150px]"
                              },
                              "text": {
                                "classes": "text-[20px] font-bold tracking-tight text-[#211913] sm:text-[24px]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em-hdr-search",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "order-3 w-full min-w-0 sm:order-2 sm:w-auto sm:flex-1 sm:max-w-[520px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-hdr-q",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "search for smart phone home decoration gadgets",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-h-[38px] w-full items-center gap-2 rounded-[8px] border border-[#988f8d] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(33,25,19,0.078)]"
                              },
                              "input-wrapper": {
                                "classes": "flex w-full items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full border-0 bg-transparent text-[14px] leading-[20px] capitalize text-[#211913] outline-none shadow-none! placeholder:text-[#988f8d]"
                              },
                              "icon": {
                                "classes": "flex size-4 shrink-0 items-center justify-center text-[#211913]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em-hdr-icons",
                        "type": "columnItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "order-2 flex shrink-0 items-center sm:order-3"
                          }
                        },
                        "children": [
                          {
                            "id": "em-hdr-acct",
                            "type": "button",
                            "options": {
                              "text": "",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[36px] w-[44px] items-center justify-center overflow-hidden rounded-[5px] text-[#211913] transition-colors hover:bg-[#fcf7f5] hover:text-[#ff5554]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "em-hdr-cart",
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
                                "classes": "relative flex h-[36px] w-[44px] items-center justify-center overflow-hidden rounded-[5px] text-[#211913] transition-colors hover:bg-[#fcf7f5] hover:text-[#ff5554] cursor-pointer"
                              },
                              "button-icon": {
                                "classes": "flex size-5 items-center justify-center"
                              },
                              "button-quantity": {
                                "classes": "absolute right-[3px] top-[3px] z-[1] flex size-4 items-center justify-center overflow-hidden rounded-full bg-[#ff5554] text-[10px] font-normal uppercase leading-none text-white"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-hdr-navwrap",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative mt-[10px] w-full before:absolute before:left-[calc((100%-100dvw)/2)] before:top-0 before:z-[1] before:h-px before:w-[100dvw] before:bg-[#e8e3e1] before:content-['']"
                      }
                    },
                    "children": [
                      {
                        "id": "em-hdr-menu",
                        "type": "menu",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          },
                          "menu": {
                            "classes": "flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                          },
                          "menu-item": {
                            "classes": "shrink-0"
                          },
                          "sub-menu": {
                            "classes": "rounded-[8px] border border-[#e8e3e1] bg-white py-2 shadow-[0_6px_20px_rgba(0,0,0,.08)] min-w-56"
                          },
                          "menu-link": {
                            "classes": "relative px-[14px] py-[6px] text-[14px] capitalize leading-[20px] text-[#211913] transition-all hover:text-[#ff5554]"
                          },
                          "link-label": {
                            "classes": "whitespace-nowrap"
                          },
                          "icon": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "em-hdr-mi-all",
                            "type": "menuItem",
                            "options": {
                              "label": "All Categories",
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
                                "id": "em-hdr-sub-1",
                                "type": "menuItem",
                                "options": {
                                  "label": "Baby Care",
                                  "url": "/product-category/baby-care"
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
                                "id": "em-hdr-sub-2",
                                "type": "menuItem",
                                "options": {
                                  "label": "Home & Kitchen",
                                  "url": "/product-category/home-kitchen"
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
                                "id": "em-hdr-sub-3",
                                "type": "menuItem",
                                "options": {
                                  "label": "Garden & Outdoor",
                                  "url": "/product-category/garden-outdoor"
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
                                "id": "em-hdr-sub-4",
                                "type": "menuItem",
                                "options": {
                                  "label": "Tools",
                                  "url": "/product-category/tools"
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
                                "id": "em-hdr-sub-5",
                                "type": "menuItem",
                                "options": {
                                  "label": "Lifestyle",
                                  "url": "/product-category/lifestyle"
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
                                "id": "em-hdr-sub-6",
                                "type": "menuItem",
                                "options": {
                                  "label": "Women’s Essentials",
                                  "url": "/product-category/womens-essentials"
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
                                "id": "em-hdr-sub-7",
                                "type": "menuItem",
                                "options": {
                                  "label": "Man’s Essentials",
                                  "url": "/product-category/mans-essentials"
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
                                "id": "em-hdr-sub-8",
                                "type": "menuItem",
                                "options": {
                                  "label": "Hair Accessories",
                                  "url": "/product-category/hair-accessories"
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
                                "id": "em-hdr-sub-9",
                                "type": "menuItem",
                                "options": {
                                  "label": "Baby Safety",
                                  "url": "/product-category/baby-safety"
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
                          },
                          {
                            "id": "em-hdr-mi-1",
                            "type": "menuItem",
                            "options": {
                              "label": "Baby Care",
                              "url": "/product-category/baby-care"
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
                            "id": "em-hdr-mi-2",
                            "type": "menuItem",
                            "options": {
                              "label": "Home & Kitchen",
                              "url": "/product-category/home-kitchen"
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
                            "id": "em-hdr-mi-3",
                            "type": "menuItem",
                            "options": {
                              "label": "Garden & Outdoor",
                              "url": "/product-category/garden-outdoor"
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
                            "id": "em-hdr-mi-4",
                            "type": "menuItem",
                            "options": {
                              "label": "Tools",
                              "url": "/product-category/tools"
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
                            "id": "em-hdr-mi-5",
                            "type": "menuItem",
                            "options": {
                              "label": "Lifestyle",
                              "url": "/product-category/lifestyle"
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
                            "id": "em-hdr-mi-pages",
                            "type": "menuItem",
                            "options": {
                              "label": "Pages",
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
                                "classes": ""
                              },
                              "icon": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em-hdr-pg-1",
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
                                "id": "em-hdr-pg-2",
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
                                "id": "em-hdr-pg-3",
                                "type": "menuItem",
                                "options": {
                                  "label": "FAQ",
                                  "url": "/faq"
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
                                "id": "em-hdr-pg-4",
                                "type": "menuItem",
                                "options": {
                                  "label": "Contact Us",
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
                              },
                              {
                                "id": "em-hdr-pg-5",
                                "type": "menuItem",
                                "options": {
                                  "label": "My Cart",
                                  "url": "/cart"
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
        ]
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "em-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-t border-[#ed202418] bg-[radial-gradient(50%_70%_at_100%_0%,#ed202414,transparent_70%),linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-ftr-main",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5"
                  }
                },
                "children": [
                  {
                    "id": "em-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ftr-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ftr-logo",
                            "type": "logo",
                            "options": {
                              "logoType": "text",
                              "logoText": "Ehans Mart",
                              "src": "https://placehold.co/300x80?text=Ehans+Mart",
                              "link": "/"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex"
                              },
                              "link": {
                                "classes": "inline-flex"
                              },
                              "img": {
                                "classes": "h-auto w-[150px] object-contain"
                              },
                              "text": {
                                "classes": "text-[22px] font-bold tracking-tight text-[#211913]"
                              }
                            }
                          },
                          {
                            "id": "em-ftr-tag",
                            "type": "text",
                            "options": {
                              "text": "Quality products, honest prices and cash on delivery — anywhere in Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 max-w-[340px] text-[14px] leading-[1.7] text-[#211913]"
                              }
                            }
                          },
                          {
                            "id": "em-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex flex-wrap gap-[10px]"
                              }
                            },
                            "children": [
                              {
                                "id": "em-ftr-s-1",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/",
                                  "target": "_blank",
                                  "icon": "IconBrandFacebook",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex size-[34px] items-center justify-center rounded-full border border-[#ed202418] bg-white text-[#ff5554] transition-colors hover:border-[#ff5554] hover:bg-[#ff5554] hover:text-white"
                                  },
                                  "icon": {
                                    "classes": "size-[15px]"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-s-2",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/",
                                  "target": "_blank",
                                  "icon": "IconBrandInstagram",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex size-[34px] items-center justify-center rounded-full border border-[#ed202418] bg-white text-[#ff5554] transition-colors hover:border-[#ff5554] hover:bg-[#ff5554] hover:text-white"
                                  },
                                  "icon": {
                                    "classes": "size-[15px]"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-s-3",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/",
                                  "target": "_blank",
                                  "icon": "IconBrandYoutube",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex size-[34px] items-center justify-center rounded-full border border-[#ed202418] bg-white text-[#ff5554] transition-colors hover:border-[#ff5554] hover:bg-[#ff5554] hover:text-white"
                                  },
                                  "icon": {
                                    "classes": "size-[15px]"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-s-4",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/",
                                  "target": "_blank",
                                  "icon": "IconBrandTiktok",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex size-[34px] items-center justify-center rounded-full border border-[#ed202418] bg-white text-[#ff5554] transition-colors hover:border-[#ff5554] hover:bg-[#ff5554] hover:text-white"
                                  },
                                  "icon": {
                                    "classes": "size-[15px]"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-s-5",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/",
                                  "target": "_blank",
                                  "icon": "IconBrandWhatsapp",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex size-[34px] items-center justify-center rounded-full border border-[#ed202418] bg-white text-[#ff5554] transition-colors hover:border-[#ff5554] hover:bg-[#ff5554] hover:text-white"
                                  },
                                  "icon": {
                                    "classes": "size-[15px]"
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
                        "id": "em-ftr-c1",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ftr-l1",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "items": [
                                {
                                  "text": "Baby Care",
                                  "icon": "",
                                  "slug": "/product-category/baby-care"
                                },
                                {
                                  "text": "Home & Kitchen",
                                  "icon": "",
                                  "slug": "/product-category/home-kitchen"
                                },
                                {
                                  "text": "Garden & Outdoor",
                                  "icon": "",
                                  "slug": "/product-category/garden-outdoor"
                                },
                                {
                                  "text": "Tools",
                                  "icon": "",
                                  "slug": "/product-category/tools"
                                },
                                {
                                  "text": "Lifestyle",
                                  "icon": "",
                                  "slug": "/product-category/lifestyle"
                                },
                                {
                                  "text": "Women’s Essentials",
                                  "icon": "",
                                  "slug": "/product-category/womens-essentials"
                                },
                                {
                                  "text": "Man’s Essentials",
                                  "icon": "",
                                  "slug": "/product-category/mans-essentials"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "header-text": {
                                "classes": "mb-4 text-[16px] font-semibold capitalize text-[#211913]"
                              },
                              "ul": {
                                "classes": "flex flex-col"
                              },
                              "li": {
                                "classes": "mb-[10px] last:mb-0"
                              },
                              "link": {
                                "classes": "text-[14px] font-normal leading-[21px] text-[#211913] transition-colors hover:text-[#ff5554] hover:underline"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em-ftr-c2",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ftr-l2",
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
                                  "text": "All Products",
                                  "icon": "",
                                  "slug": "/shop"
                                },
                                {
                                  "text": "About Us",
                                  "icon": "",
                                  "slug": "/about"
                                },
                                {
                                  "text": "Blog",
                                  "icon": "",
                                  "slug": "/blog"
                                },
                                {
                                  "text": "Contact Us",
                                  "icon": "",
                                  "slug": "/contact"
                                },
                                {
                                  "text": "FAQ",
                                  "icon": "",
                                  "slug": "/faq"
                                },
                                {
                                  "text": "My Cart",
                                  "icon": "",
                                  "slug": "/cart"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "header-text": {
                                "classes": "mb-4 text-[16px] font-semibold capitalize text-[#211913]"
                              },
                              "ul": {
                                "classes": "flex flex-col"
                              },
                              "li": {
                                "classes": "mb-[10px] last:mb-0"
                              },
                              "link": {
                                "classes": "text-[14px] font-normal leading-[21px] text-[#211913] transition-colors hover:text-[#ff5554] hover:underline"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em-ftr-c3",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ftr-l3",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Care",
                              "tag": "ul",
                              "items": [
                                {
                                  "text": "Shipping Policy",
                                  "icon": "",
                                  "slug": "/shipping-policy"
                                },
                                {
                                  "text": "Refund Policy",
                                  "icon": "",
                                  "slug": "/refund-policy"
                                },
                                {
                                  "text": "Exchange Policy",
                                  "icon": "",
                                  "slug": "/exchange-policy"
                                },
                                {
                                  "text": "Privacy Policy",
                                  "icon": "",
                                  "slug": "/privacy-policy"
                                },
                                {
                                  "text": "Terms of Service",
                                  "icon": "",
                                  "slug": "/terms-of-service"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "header-text": {
                                "classes": "mb-4 text-[16px] font-semibold capitalize text-[#211913]"
                              },
                              "ul": {
                                "classes": "flex flex-col"
                              },
                              "li": {
                                "classes": "mb-[10px] last:mb-0"
                              },
                              "link": {
                                "classes": "text-[14px] font-normal leading-[21px] text-[#211913] transition-colors hover:text-[#ff5554] hover:underline"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "em-ftr-c4",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ftr-c4-t",
                            "type": "text",
                            "options": {
                              "text": "Get In Touch",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-4 text-[16px] font-semibold capitalize text-[#211913]"
                              }
                            }
                          },
                          {
                            "id": "em-ftr-contact",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "em-ftr-addr",
                                "type": "address",
                                "options": {
                                  "text": "Kaunia, Rangpur 5400, Bangladesh",
                                  "icon": "IconMapPin",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-[10px] text-[14px] leading-[1.5] text-[#211913]"
                                  },
                                  "icon": {
                                    "classes": "mt-px size-[17px] shrink-0 text-[#ff5554]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-phone",
                                "type": "text",
                                "options": {
                                  "text": "+8801841650668",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-[10px] text-[14px] leading-[1.5] text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-email",
                                "type": "text",
                                "options": {
                                  "text": "info@ehansmart.com",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-[10px] text-[14px] leading-[1.5] text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-hours",
                                "type": "text",
                                "options": {
                                  "text": "Open 24 hours, 7 days a week",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-[10px] text-[14px] leading-[1.5] text-[#211913]"
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
                "id": "em-ftr-cr",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "border-t border-[#ed202418]"
                  }
                },
                "children": [
                  {
                    "id": "em-ftr-cr-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-5"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ftr-cr-row",
                        "type": "columns",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ftr-cr-l",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "min-w-0"
                              }
                            },
                            "children": [
                              {
                                "id": "em-ftr-cr-t",
                                "type": "text",
                                "options": {
                                  "text": "© 2026 Ehans Mart. All rights reserved. Made by Qualixe.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[14px] text-[#211913]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em-ftr-cr-r",
                            "type": "columnItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "em-ftr-pay-l",
                                "type": "text",
                                "options": {
                                  "text": "We accept Cash On Delivery",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[13px] text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-pay-1",
                                "type": "text",
                                "options": {
                                  "text": "bKash",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-[30px] items-center rounded-[4px] border border-[#e8e3e1] bg-white px-[10px] text-[12px] font-semibold text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em-ftr-pay-2",
                                "type": "text",
                                "options": {
                                  "text": "Nagad",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-[30px] items-center rounded-[4px] border border-[#e8e3e1] bg-white px-[10px] text-[12px] font-semibold text-[#211913]"
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
        "title": "Home",
        "type": "home",
        "content": [
          {
            "id": "em-hero",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full py-0 lg:py-5"
              }
            },
            "children": [
              {
                "id": "em-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-0 lg:px-5"
                  }
                },
                "children": [
                  {
                    "id": "em-hero-img",
                    "type": "image",
                    "options": {
                      "src": "https://placehold.co/1320x480/211913/ffffff?text=Bangladeshi+fast-growing+e-commerce+brand",
                      "altText": "Bangladeshi fast-growing e-commerce brand",
                      "width": "",
                      "height": "",
                      "linkTo": "custom",
                      "url": "/shop"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative block w-full overflow-hidden rounded-none lg:rounded-[20px]"
                      },
                      "link": {
                        "classes": "block h-full w-full"
                      },
                      "img": {
                        "classes": "h-full w-full object-cover"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-cats",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 lg:py-4"
              }
            },
            "children": [
              {
                "id": "em-cats-tg",
                "type": "termsGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "taxonomy": "product_cat",
                    "order": "ASC",
                    "orderby": "name",
                    "per_page": "9",
                    "hide_empty": false
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-4 gap-x-3 gap-y-4 sm:grid-cols-6 lg:grid-cols-9 lg:gap-x-4"
                  },
                  "loop-item": {
                    "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                  }
                },
                "children": [
                  {
                    "id": "em-cats-tg-loop",
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
                        "id": "em-cats-tg-thumb",
                        "type": "termThumbnail",
                        "options": {
                          "linkTo": "termUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full overflow-hidden rounded-[5px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)] sm:rounded-[8px]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "em-cats-tg-title",
                        "type": "termTitle",
                        "options": {
                          "text": "Term Title",
                          "tag": "h3",
                          "linkTo": "termUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "px-1 text-center text-[12px] font-medium capitalize leading-[14px] text-[#211913] transition-all duration-300 group-hover:underline sm:text-[14px] sm:leading-[18px]"
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
            "id": "em-banners",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6"
              }
            },
            "children": [
              {
                "id": "em-banners-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "grid grid-cols-2 gap-3 lg:grid-cols-[minmax(0,747fr)_minmax(0,433fr)] lg:gap-5"
                  }
                },
                "children": [
                  {
                    "id": "em-banners-g1",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative col-span-2 overflow-hidden lg:col-span-1 lg:row-span-2 before:absolute before:left-[-100%] before:top-0 before:z-[2] before:block before:h-full before:w-1/2 before:skew-x-[-25deg] before:bg-[linear-gradient(to_right,#fff0,#ffffff4d)] before:transition-all before:duration-[950ms] before:content-[''] hover:before:left-[125%]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-banners-i1",
                        "type": "image",
                        "options": {
                          "src": "https://placehold.co/747x560/fde9e8/211913?text=Women%E2%80%99s+Essentials",
                          "altText": "Women’s Essentials — beauty, care & style picks for every day",
                          "width": "",
                          "height": "",
                          "linkTo": "custom",
                          "url": "/product-category/womens-essentials"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "block h-full w-full overflow-hidden rounded-[10px]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "img": {
                            "classes": "h-full w-full object-cover"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em-banners-g2",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative overflow-hidden before:absolute before:left-[-100%] before:top-0 before:z-[2] before:block before:h-full before:w-1/2 before:skew-x-[-25deg] before:bg-[linear-gradient(to_right,#fff0,#ffffff4d)] before:transition-all before:duration-[950ms] before:content-[''] hover:before:left-[125%]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-banners-i2",
                        "type": "image",
                        "options": {
                          "src": "https://placehold.co/433x270/fff8f7/211913?text=Home+%26+Kitchen",
                          "altText": "Home & Kitchen — cook, serve & live better",
                          "width": "",
                          "height": "",
                          "linkTo": "custom",
                          "url": "/product-category/home-kitchen"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "block h-full w-full overflow-hidden rounded-[10px]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "img": {
                            "classes": "h-full w-full object-cover"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em-banners-g3",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative overflow-hidden before:absolute before:left-[-100%] before:top-0 before:z-[2] before:block before:h-full before:w-1/2 before:skew-x-[-25deg] before:bg-[linear-gradient(to_right,#fff0,#ffffff4d)] before:transition-all before:duration-[950ms] before:content-[''] hover:before:left-[125%]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-banners-i3",
                        "type": "image",
                        "options": {
                          "src": "https://placehold.co/433x270/f5f1f0/211913?text=Man%E2%80%99s+Essentials",
                          "altText": "Man’s Essentials — grooming & style for him",
                          "width": "",
                          "height": "",
                          "linkTo": "custom",
                          "url": "/product-category/mans-essentials"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "block h-full w-full overflow-hidden rounded-[10px]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "img": {
                            "classes": "h-full w-full object-cover"
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
            "id": "em-ps1",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6"
              }
            },
            "children": [
              {
                "id": "em-ps1-h",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mb-5 flex items-center justify-between gap-[10px] sm:gap-4"
                  }
                },
                "children": [
                  {
                    "id": "em-ps1-h-t",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "min-w-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps1-h-title",
                        "type": "heading",
                        "options": {
                          "text": "Women’s Essentials",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[18px] sm:text-[22px] font-semibold leading-[1.2] text-[#ff5554]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em-ps1-h-b",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "shrink-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps1-h-btn",
                        "type": "button",
                        "options": {
                          "text": "View All products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/product-category/womens-essentials",
                          "target": "",
                          "icon": "",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex shrink-0 items-center justify-center gap-[5px] whitespace-nowrap rounded-[5px] border border-[#211913] px-[10px] py-[7px] text-[12px] font-medium capitalize leading-none text-[#211913] transition-colors hover:bg-[#211913] hover:text-white sm:px-[14px] sm:py-2 sm:text-[13px]"
                          },
                          "icon": {
                            "classes": ""
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
                "id": "em-ps1-pg",
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
                    "taxQuery": [
                      {
                        "taxonomy": "product_cat",
                        "terms": [
                          "womens-essentials"
                        ],
                        "operator": "IN"
                      }
                    ]
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-ps1-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps1-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-ps1-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-ps1-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ps1-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-ps1-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-ps1-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
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
            "id": "em-ps2",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6"
              }
            },
            "children": [
              {
                "id": "em-ps2-h",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mb-5 flex items-center justify-between gap-[10px] sm:gap-4"
                  }
                },
                "children": [
                  {
                    "id": "em-ps2-h-t",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "min-w-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps2-h-title",
                        "type": "heading",
                        "options": {
                          "text": "Baby Care",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[18px] sm:text-[22px] font-semibold leading-[1.2] text-[#ff5554]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em-ps2-h-b",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "shrink-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps2-h-btn",
                        "type": "button",
                        "options": {
                          "text": "View All products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/product-category/baby-care",
                          "target": "",
                          "icon": "",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex shrink-0 items-center justify-center gap-[5px] whitespace-nowrap rounded-[5px] border border-[#211913] px-[10px] py-[7px] text-[12px] font-medium capitalize leading-none text-[#211913] transition-colors hover:bg-[#211913] hover:text-white sm:px-[14px] sm:py-2 sm:text-[13px]"
                          },
                          "icon": {
                            "classes": ""
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
                "id": "em-ps2-pg",
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
                    "taxQuery": [
                      {
                        "taxonomy": "product_cat",
                        "terms": [
                          "baby-care"
                        ],
                        "operator": "IN"
                      }
                    ]
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-ps2-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps2-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-ps2-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-ps2-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ps2-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-ps2-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-ps2-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
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
            "id": "em-ps3",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6"
              }
            },
            "children": [
              {
                "id": "em-ps3-h",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mb-5 flex items-center justify-between gap-[10px] sm:gap-4"
                  }
                },
                "children": [
                  {
                    "id": "em-ps3-h-t",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "min-w-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps3-h-title",
                        "type": "heading",
                        "options": {
                          "text": "Home & Kitchen",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[18px] sm:text-[22px] font-semibold leading-[1.2] text-[#ff5554]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em-ps3-h-b",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "shrink-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps3-h-btn",
                        "type": "button",
                        "options": {
                          "text": "View All products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/product-category/home-kitchen",
                          "target": "",
                          "icon": "",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex shrink-0 items-center justify-center gap-[5px] whitespace-nowrap rounded-[5px] border border-[#211913] px-[10px] py-[7px] text-[12px] font-medium capitalize leading-none text-[#211913] transition-colors hover:bg-[#211913] hover:text-white sm:px-[14px] sm:py-2 sm:text-[13px]"
                          },
                          "icon": {
                            "classes": ""
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
                "id": "em-ps3-pg",
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
                    "taxQuery": [
                      {
                        "taxonomy": "product_cat",
                        "terms": [
                          "home-kitchen"
                        ],
                        "operator": "IN"
                      }
                    ]
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-ps3-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps3-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-ps3-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-ps3-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ps3-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-ps3-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-ps3-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
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
            "id": "em-ps4",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6"
              }
            },
            "children": [
              {
                "id": "em-ps4-h",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mb-5 flex items-center justify-between gap-[10px] sm:gap-4"
                  }
                },
                "children": [
                  {
                    "id": "em-ps4-h-t",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "min-w-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps4-h-title",
                        "type": "heading",
                        "options": {
                          "text": "Home Safety & Storage",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[18px] sm:text-[22px] font-semibold leading-[1.2] text-[#ff5554]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em-ps4-h-b",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "shrink-0"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps4-h-btn",
                        "type": "button",
                        "options": {
                          "text": "View All products",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/product-category/home-safety-storage",
                          "target": "",
                          "icon": "",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex shrink-0 items-center justify-center gap-[5px] whitespace-nowrap rounded-[5px] border border-[#211913] px-[10px] py-[7px] text-[12px] font-medium capitalize leading-none text-[#211913] transition-colors hover:bg-[#211913] hover:text-white sm:px-[14px] sm:py-2 sm:text-[13px]"
                          },
                          "icon": {
                            "classes": ""
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
                "id": "em-ps4-pg",
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
                    "taxQuery": [
                      {
                        "taxonomy": "product_cat",
                        "terms": [
                          "home-safety-storage"
                        ],
                        "operator": "IN"
                      }
                    ]
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-ps4-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ps4-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-ps4-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-ps4-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-ps4-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-ps4-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-ps4-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
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
            "id": "em-reviews",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 pb-12 pt-6"
              }
            },
            "children": [
              {
                "id": "em-reviews-t",
                "type": "heading",
                "options": {
                  "text": "Community Reviews",
                  "tag": "h2"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "mb-5 text-[18px] font-semibold leading-[1.2] text-[#211913] sm:text-[22px]"
                  }
                }
              },
              {
                "id": "em-reviews-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  }
                },
                "children": [
                  {
                    "id": "em-rv-1",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative block aspect-[279/456] overflow-hidden rounded-[16px] bg-[#211913]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-rv-img-1",
                        "type": "image",
                        "options": {
                          "src": "https://placehold.co/279x456/211913/ffffff?text=trust",
                          "altText": "why 1000+ customers trust us",
                          "width": "",
                          "height": "",
                          "linkTo": "",
                          "url": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "img": {
                            "classes": "h-full w-full object-cover"
                          }
                        }
                      },
                      {
                        "id": "em-rv-c-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-x-0 bottom-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,.85)_100%)] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em-rv-t-1",
                            "type": "text",
                            "options": {
                              "text": "why 1000+ customers trust us",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-left text-[13px] font-bold leading-[1.3] text-white sm:text-[18px]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-rv-2",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative block aspect-[279/456] overflow-hidden rounded-[16px] bg-[#211913]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-rv-img-2",
                        "type": "image",
                        "options": {
                          "src": "https://placehold.co/279x456/211913/ffffff?text=comfort",
                          "altText": "Comfort you can feel instantly",
                          "width": "",
                          "height": "",
                          "linkTo": "",
                          "url": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "img": {
                            "classes": "h-full w-full object-cover"
                          }
                        }
                      },
                      {
                        "id": "em-rv-c-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-x-0 bottom-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,.85)_100%)] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em-rv-t-2",
                            "type": "text",
                            "options": {
                              "text": "Comfort you can feel instantly",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-left text-[13px] font-bold leading-[1.3] text-white sm:text-[18px]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-rv-3",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative block aspect-[279/456] overflow-hidden rounded-[16px] bg-[#211913]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-rv-img-3",
                        "type": "image",
                        "options": {
                          "src": "https://placehold.co/279x456/211913/ffffff?text=real",
                          "altText": "Real people. Real reviews",
                          "width": "",
                          "height": "",
                          "linkTo": "",
                          "url": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "img": {
                            "classes": "h-full w-full object-cover"
                          }
                        }
                      },
                      {
                        "id": "em-rv-c-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-x-0 bottom-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,.85)_100%)] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em-rv-t-3",
                            "type": "text",
                            "options": {
                              "text": "Real people. Real reviews",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-left text-[13px] font-bold leading-[1.3] text-white sm:text-[18px]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-rv-4",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative block aspect-[279/456] overflow-hidden rounded-[16px] bg-[#211913]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-rv-img-4",
                        "type": "image",
                        "options": {
                          "src": "https://placehold.co/279x456/211913/ffffff?text=premium",
                          "altText": "Premium product reviews",
                          "width": "",
                          "height": "",
                          "linkTo": "",
                          "url": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "img": {
                            "classes": "h-full w-full object-cover"
                          }
                        }
                      },
                      {
                        "id": "em-rv-c-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-x-0 bottom-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,.85)_100%)] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em-rv-t-4",
                            "type": "text",
                            "options": {
                              "text": "Premium product reviews",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-left text-[13px] font-bold leading-[1.3] text-white sm:text-[18px]"
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
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "em-shop-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-shop-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-shop-head-t",
                    "type": "heading",
                    "options": {
                      "text": "All Products",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-shop",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-shop-pg",
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
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-shop-pg-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-shop-pg-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-shop-pg-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-shop-pg-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-shop-pg-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-shop-pg-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-shop-pg-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-shop-pg-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] transition-colors hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Product",
        "type": "product",
        "content": [
          {
            "id": "em-pd",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-10"
              }
            },
            "children": [
              {
                "id": "em-pd-grid",
                "type": "grid",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
                  }
                },
                "children": [
                  {
                    "id": "em-pd-gal-c",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      }
                    },
                    "children": [
                      {
                        "id": "em-pd-gal",
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
                            "classes": "w-full overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-contain"
                          },
                          "thumbnail-item": {
                            "classes": "size-20 overflow-hidden rounded-[5px] border border-[#e8e3e1] bg-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em-pd-buy",
                    "type": "gridItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "em-pd-cats",
                        "type": "productCategories",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] font-medium uppercase tracking-[1px] text-[#6c6c6c]"
                          }
                        }
                      },
                      {
                        "id": "em-pd-title",
                        "type": "postTitle",
                        "options": {
                          "text": "Product Title.",
                          "tag": "h1",
                          "linkTo": "",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[24px] font-semibold capitalize leading-[1.3] tracking-[0.6px] text-[#211913] sm:text-[30px]"
                          }
                        }
                      },
                      {
                        "id": "em-pd-rate",
                        "type": "productRatings",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          },
                          "star-rate": {
                            "classes": "text-[#ff5554]"
                          },
                          "rate-count": {
                            "classes": "text-[13px] text-[#6c6c6c]"
                          },
                          "avg-rating": {
                            "classes": "text-[13px] font-semibold text-[#211913]"
                          },
                          "total-reviews": {
                            "classes": "text-[13px] text-[#6c6c6c]"
                          },
                          "icon": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-pd-price",
                        "type": "productPrice",
                        "options": {
                          "separator": "",
                          "variablePriceViewType": "inline"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center gap-3"
                          },
                          "simple-price-wrap": {
                            "classes": "flex flex-wrap items-baseline gap-3"
                          },
                          "simple-price-sale": {
                            "classes": "text-[28px] font-bold leading-none text-[#211913]"
                          },
                          "simple-price-regular": {
                            "classes": "text-[16px] leading-none text-[#ff5454] line-through"
                          },
                          "variable-price-wrap": {
                            "classes": "flex flex-wrap items-baseline gap-3"
                          }
                        }
                      },
                      {
                        "id": "em-pd-stock",
                        "type": "productStockStatus",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[14px] font-medium text-[#008000]"
                          }
                        }
                      },
                      {
                        "id": "em-pd-var",
                        "type": "productVariablePrices",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        }
                      },
                      {
                        "id": "em-pd-cart",
                        "type": "addToCart",
                        "options": {
                          "buttonText": "add to cart",
                          "icon": "IconShoppingCart",
                          "iconSize": 18,
                          "hideQuanity": false,
                          "hideButton": false
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center gap-3"
                          },
                          "quantity-wrapper": {
                            "classes": "flex items-center rounded-[5px] border border-[#e8e3e1] bg-white"
                          },
                          "quantity-input": {
                            "classes": "h-[52px] w-12 border-0 bg-transparent text-center text-[16px] text-[#211913] outline-none"
                          },
                          "quantity-plus": {
                            "classes": "flex size-[52px] items-center justify-center text-[#211913] hover:text-[#ff5554]"
                          },
                          "quantity-minus": {
                            "classes": "flex size-[52px] items-center justify-center text-[#211913] hover:text-[#ff5554]"
                          },
                          "button-wrapper": {
                            "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90 max-w-[320px] flex-1"
                          },
                          "button-icon": {
                            "classes": "mr-2 size-[18px]"
                          },
                          "button-label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-pd-wa",
                        "type": "whatsappButton",
                        "options": {
                          "label": "Order on WhatsApp",
                          "phone": "",
                          "message": "Hi, I would like to order this from Ehans Mart.",
                          "icon": "IconBrandWhatsapp",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-fit"
                          },
                          "link": {
                            "classes": "flex items-center gap-2 rounded-[5px] bg-[#25d366] px-5 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                          },
                          "icon": {
                            "classes": "size-[18px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-pd-sku",
                        "type": "productSku",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] text-[#6c6c6c]"
                          }
                        }
                      },
                      {
                        "id": "em-pd-brands",
                        "type": "productBrands",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[13px] text-[#6c6c6c]"
                          }
                        }
                      },
                      {
                        "id": "em-pd-content",
                        "type": "postContent",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-2 border-t border-[#e8e3e1] pt-5 text-[16px] leading-[22px] text-[#211913]"
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
            "id": "em-pd-rel",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 pb-12"
              }
            },
            "children": [
              {
                "id": "em-pd-rel-t",
                "type": "heading",
                "options": {
                  "text": "You may also like",
                  "tag": "h2"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "mb-5 text-[18px] font-semibold leading-[1.2] text-[#ff5554] sm:text-[22px]"
                  }
                }
              },
              {
                "id": "em-pd-rel-g",
                "type": "relatedProducts",
                "options": {
                  "posts_per_page": "6"
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-pd-rel-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-pd-rel-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-pd-rel-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-pd-rel-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-pd-rel-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-pd-rel-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-pd-rel-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
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
        "title": "Categories Archive",
        "type": "categories",
        "content": [
          {
            "id": "em-categories-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-categories-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-categories-head-t",
                    "type": "heading",
                    "options": {
                      "text": "Categories Archive",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-categories",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-categories-tg",
                "type": "termsGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "taxonomy": "product_cat",
                    "order": "ASC",
                    "orderby": "name",
                    "per_page": "24",
                    "hide_empty": false
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:grid-cols-8"
                  },
                  "loop-item": {
                    "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                  }
                },
                "children": [
                  {
                    "id": "em-categories-loop",
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
                        "id": "em-categories-thumb",
                        "type": "termThumbnail",
                        "options": {
                          "linkTo": "termUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full overflow-hidden rounded-[8px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "em-categories-title",
                        "type": "termTitle",
                        "options": {
                          "text": "Term Title",
                          "tag": "h3",
                          "linkTo": "termUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "px-1 text-center text-[14px] font-medium capitalize leading-[18px] text-[#211913] group-hover:underline"
                          }
                        }
                      },
                      {
                        "id": "em-categories-count",
                        "type": "termCount",
                        "options": {
                          "prefix": "",
                          "suffix": " items"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-center text-[14px] font-light leading-none text-[#6c6c6c]"
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
        "content": [
          {
            "id": "em-categories_single-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-categories_single-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-categories_single-head-t",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-categories_single",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-categories_single-pg",
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
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-categories_single-pg-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-categories_single-pg-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-categories_single-pg-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-categories_single-pg-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-categories_single-pg-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-categories_single-pg-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-categories_single-pg-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-categories_single-pg-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] transition-colors hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Tags Archive",
        "type": "tags",
        "content": [
          {
            "id": "em-tags-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-tags-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-tags-head-t",
                    "type": "heading",
                    "options": {
                      "text": "Tags Archive",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-tags",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-tags-tg",
                "type": "termsGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "taxonomy": "product_tag",
                    "order": "ASC",
                    "orderby": "name",
                    "per_page": "24",
                    "hide_empty": false
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:grid-cols-8"
                  },
                  "loop-item": {
                    "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                  }
                },
                "children": [
                  {
                    "id": "em-tags-loop",
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
                        "id": "em-tags-thumb",
                        "type": "termThumbnail",
                        "options": {
                          "linkTo": "termUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full overflow-hidden rounded-[8px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "em-tags-title",
                        "type": "termTitle",
                        "options": {
                          "text": "Term Title",
                          "tag": "h3",
                          "linkTo": "termUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "px-1 text-center text-[14px] font-medium capitalize leading-[18px] text-[#211913] group-hover:underline"
                          }
                        }
                      },
                      {
                        "id": "em-tags-count",
                        "type": "termCount",
                        "options": {
                          "prefix": "",
                          "suffix": " items"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-center text-[14px] font-light leading-none text-[#6c6c6c]"
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
        "content": [
          {
            "id": "em-tags_single-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-tags_single-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-tags_single-head-t",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-tags_single",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-tags_single-pg",
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
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-tags_single-pg-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-tags_single-pg-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-tags_single-pg-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-tags_single-pg-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-tags_single-pg-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-tags_single-pg-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-tags_single-pg-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-tags_single-pg-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] transition-colors hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Brands Archive",
        "type": "brands",
        "content": [
          {
            "id": "em-brands-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-brands-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-brands-head-t",
                    "type": "heading",
                    "options": {
                      "text": "Brands Archive",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-brands",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-brands-tg",
                "type": "termsGrid",
                "options": {
                  "classes": "",
                  "queryPrams": {
                    "taxonomy": "product_brand",
                    "order": "ASC",
                    "orderby": "name",
                    "per_page": "24",
                    "hide_empty": false
                  }
                },
                "cssSelectors": {
                  "*": {
                    "classes": ""
                  },
                  "loop-items": {
                    "classes": "grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:grid-cols-8"
                  },
                  "loop-item": {
                    "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                  }
                },
                "children": [
                  {
                    "id": "em-brands-loop",
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
                        "id": "em-brands-thumb",
                        "type": "termThumbnail",
                        "options": {
                          "linkTo": "termUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full overflow-hidden rounded-[8px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)]"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "em-brands-title",
                        "type": "termTitle",
                        "options": {
                          "text": "Term Title",
                          "tag": "h3",
                          "linkTo": "termUrl"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "px-1 text-center text-[14px] font-medium capitalize leading-[18px] text-[#211913] group-hover:underline"
                          }
                        }
                      },
                      {
                        "id": "em-brands-count",
                        "type": "termCount",
                        "options": {
                          "prefix": "",
                          "suffix": " items"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-center text-[14px] font-light leading-none text-[#6c6c6c]"
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
        "content": [
          {
            "id": "em-brands_single-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-brands_single-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-brands_single-head-t",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-brands_single",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-brands_single-pg",
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
                    "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                  },
                  "loop-item": {
                    "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-brands_single-pg-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-[10px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-brands_single-pg-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative block w-full overflow-hidden rounded-t-[8px] bg-white before:block before:pb-[100%] before:content-['']"
                          },
                          "link": {
                            "classes": "absolute inset-0 block h-full w-full"
                          },
                          "image": {
                            "classes": "h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          }
                        }
                      },
                      {
                        "id": "em-brands_single-pg-c-badge",
                        "type": "productDiscount",
                        "options": {
                          "label": "",
                          "separator": ", "
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute right-[8px] top-[8px] z-[2] inline-flex items-center rounded-[4px] bg-[#ff5454] px-[8px] py-[4px] leading-none text-white sm:right-[10px] sm:top-[10px] sm:px-[10px] sm:py-[5px]"
                          },
                          "discount": {
                            "classes": "text-[11px] font-bold tracking-[0.3px] before:content-['-_'] sm:text-[12px]"
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-brands_single-pg-c-content",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col px-[10px] pb-[10px] pt-[13px] sm:px-[13px]"
                          }
                        },
                        "children": [
                          {
                            "id": "em-brands_single-pg-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Product Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block text-[12px] font-normal capitalize leading-[1.2] tracking-[0.6px] text-black hover:underline [text-underline-offset:3px] sm:text-[16px] sm:leading-[1.3]"
                              }
                            }
                          },
                          {
                            "id": "em-brands_single-pg-c-price",
                            "type": "productPrice",
                            "options": {
                              "separator": "",
                              "variablePriceViewType": "inline"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-[7px] flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              },
                              "simple-price-sale": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-black"
                              },
                              "simple-price-regular": {
                                "classes": "flex items-start text-[14px] font-normal leading-none tracking-[1px] text-[#ff5454] line-through"
                              },
                              "variable-price-wrap": {
                                "classes": "flex flex-wrap items-center gap-[5px]"
                              }
                            }
                          },
                          {
                            "id": "em-brands_single-pg-c-cart",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "add to cart",
                              "icon": "",
                              "iconSize": 16,
                              "hideQuanity": true,
                              "hideButton": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex pt-[13px]"
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
                                "classes": "flex w-full min-h-[44px] sm:min-h-[52px] items-center justify-center rounded-[4px] bg-[#ff5454] p-2 text-[14px] sm:text-[18px] font-bold uppercase leading-none tracking-[1px] text-white transition-opacity hover:opacity-90"
                              },
                              "button-icon": {
                                "classes": ""
                              },
                              "button-label": {
                                "classes": ""
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-brands_single-pg-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] transition-colors hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Blog Archive",
        "type": "blog",
        "content": [
          {
            "id": "em-blog-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-blog-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-blog-head-t",
                    "type": "heading",
                    "options": {
                      "text": "Blog",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-blog",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-blog-pg",
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
                    "classes": "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  },
                  "loop-item": {
                    "classes": "group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                  }
                },
                "children": [
                  {
                    "id": "em-blog-loop",
                    "type": "postLoop",
                    "options": {
                      "classes": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white"
                      }
                    },
                    "children": [
                      {
                        "id": "em-blog-c-thumb",
                        "type": "postThumbnail",
                        "options": {
                          "linkTo": "postUrl",
                          "classes": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "block w-full overflow-hidden rounded-t-[8px] bg-white"
                          },
                          "link": {
                            "classes": "block h-full w-full"
                          },
                          "image": {
                            "classes": "aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          }
                        }
                      },
                      {
                        "id": "em-blog-c-body",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-grow flex-col p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em-blog-c-date",
                            "type": "postDate",
                            "options": {
                              "format": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[13px] text-[#6c6c6c]"
                              }
                            }
                          },
                          {
                            "id": "em-blog-c-title",
                            "type": "postTitle",
                            "options": {
                              "text": "Post Title.",
                              "tag": "h3",
                              "linkTo": "postUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-[16px] font-semibold leading-[1.3] text-[#211913] group-hover:text-[#ff5554]"
                              }
                            }
                          },
                          {
                            "id": "em-blog-c-ex",
                            "type": "postExcerpt",
                            "options": {
                              "length": 110
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-[14px] leading-[22px] text-[#6c6c6c]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-blog-pag",
                    "type": "postGridPagination",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex items-center justify-center gap-2"
                      },
                      "pagination-item": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#e8e3e1] bg-white text-[14px] text-[#211913] hover:border-[#ff5554] hover:text-[#ff5554]"
                      },
                      "pagination-item-active": {
                        "classes": "flex size-9 items-center justify-center rounded-[5px] border border-[#ff5554] bg-[#ff5554] text-[14px] text-white"
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
        "title": "Blog Single",
        "type": "blog_single",
        "content": [
          {
            "id": "em-bs",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[820px] px-4 py-10 sm:px-5"
              }
            },
            "children": [
              {
                "id": "em-bs-title",
                "type": "postTitle",
                "options": {
                  "text": "Post Title.",
                  "tag": "h1",
                  "linkTo": "",
                  "classes": ""
                },
                "cssSelectors": {
                  "*": {
                    "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                  }
                }
              },
              {
                "id": "em-bs-meta",
                "type": "columns",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-4 flex flex-wrap items-center gap-4"
                  }
                },
                "children": [
                  {
                    "id": "em-bs-m1",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "em-bs-author",
                        "type": "postAuthor",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[14px] text-[#6c6c6c]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "em-bs-m2",
                    "type": "columnItem",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "em-bs-date",
                        "type": "postDate",
                        "options": {
                          "format": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[14px] text-[#6c6c6c]"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "em-bs-thumb",
                "type": "postThumbnail",
                "options": {
                  "linkTo": "",
                  "classes": ""
                },
                "cssSelectors": {
                  "*": {
                    "classes": "mt-6 block w-full overflow-hidden rounded-[10px] bg-white"
                  },
                  "link": {
                    "classes": "block h-full w-full"
                  },
                  "image": {
                    "classes": "aspect-[16/9] h-full w-full object-cover"
                  }
                }
              },
              {
                "id": "em-bs-content",
                "type": "postContent",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-6 text-[16px] leading-[26px] text-[#211913]"
                  }
                }
              },
              {
                "id": "em-bs-comments",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-10 border-t border-[#e8e3e1] pt-8"
                  }
                },
                "children": [
                  {
                    "id": "em-bs-c-t",
                    "type": "heading",
                    "options": {
                      "text": "Comments",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-5 text-[22px] font-semibold text-[#211913]"
                      }
                    }
                  },
                  {
                    "id": "em-bs-cg",
                    "type": "commentsGrid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "flex flex-col gap-5"
                      },
                      "loop-item": {
                        "classes": "flex gap-3 rounded-[8px] border border-[#e8e3e1] bg-white p-4"
                      }
                    },
                    "children": [
                      {
                        "id": "em-bs-cl",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "flex flex-col gap-5"
                          },
                          "loop-item": {
                            "classes": "flex gap-3 rounded-[8px] border border-[#e8e3e1] bg-white p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "em-bs-ca",
                            "type": "commentAvatar",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "size-10 shrink-0 overflow-hidden rounded-full bg-[#f5f5f5]"
                              },
                              "image": {
                                "classes": "h-full w-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "em-bs-cau",
                            "type": "commentAuthor",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[14px] font-semibold text-[#211913]"
                              }
                            }
                          },
                          {
                            "id": "em-bs-crt",
                            "type": "commentRate",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[#ff5554]"
                              }
                            }
                          },
                          {
                            "id": "em-bs-cc",
                            "type": "commentContent",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[14px] leading-[22px] text-[#6c6c6c]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "em-bs-cf",
                    "type": "commentsForm",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-8"
                      },
                      "input": {
                        "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913]"
                      },
                      "textarea": {
                        "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913]"
                      },
                      "button": {
                        "classes": "mt-3 w-fit rounded-[5px] bg-[#ff5554] px-[30px] py-[10px] text-[14px] font-semibold capitalize text-white transition-opacity hover:opacity-90"
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
        "title": "Account",
        "type": "account",
        "content": [
          {
            "id": "em-acc-head",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#ed202418] bg-[linear-gradient(180deg,#fff8f7_0%,#fde9e8_100%)]"
              }
            },
            "children": [
              {
                "id": "em-acc-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-8 sm:py-12"
                  }
                },
                "children": [
                  {
                    "id": "em-acc-head-t",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.75rem,calc(1.55rem+1vw),2.375rem)] font-bold leading-[1.2] text-[#211913]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "em-acc",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-6 sm:py-[42px]"
              }
            },
            "children": [
              {
                "id": "em-acc-root",
                "type": "customerAccount",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full"
                  }
                },
                "children": [
                  {
                    "id": "em-acc-out",
                    "type": "customerAccountNotLogged",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      }
                    },
                    "children": [
                      {
                        "id": "em-acc-out-g",
                        "type": "grid",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto grid max-w-[900px] grid-cols-1 gap-6 lg:grid-cols-2"
                          }
                        },
                        "children": [
                          {
                            "id": "em-acc-login-c",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-[8px] border border-[#e8e3e1] bg-white p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "em-acc-login-t",
                                "type": "heading",
                                "options": {
                                  "text": "Login",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mb-4 text-[22px] font-semibold text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em-acc-login",
                                "type": "login",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3"
                                  },
                                  "input": {
                                    "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913] outline-none focus:border-[#ff5554]"
                                  },
                                  "button": {
                                    "classes": "w-full rounded-[5px] bg-[#ff5554] px-[30px] py-[12px] text-[14px] font-semibold capitalize text-white transition-opacity hover:opacity-90"
                                  },
                                  "label": {
                                    "classes": "text-[13px] font-medium text-[#211913]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em-acc-reg-c",
                            "type": "gridItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-[8px] border border-[#e8e3e1] bg-white p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "em-acc-reg-t",
                                "type": "heading",
                                "options": {
                                  "text": "Create account",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mb-4 text-[22px] font-semibold text-[#211913]"
                                  }
                                }
                              },
                              {
                                "id": "em-acc-reg",
                                "type": "register",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3"
                                  },
                                  "input": {
                                    "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913] outline-none focus:border-[#ff5554]"
                                  },
                                  "button": {
                                    "classes": "w-full rounded-[5px] bg-[#ff5554] px-[30px] py-[12px] text-[14px] font-semibold capitalize text-white transition-opacity hover:opacity-90"
                                  },
                                  "label": {
                                    "classes": "text-[13px] font-medium text-[#211913]"
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
                    "id": "em-acc-in",
                    "type": "customerAccountLogged",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      }
                    },
                    "children": [
                      {
                        "id": "em-acc-tabs",
                        "type": "tabs",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6"
                          },
                          "tabs-nav": {
                            "classes": "flex flex-wrap gap-2 border-b border-[#e8e3e1]"
                          },
                          "tabs-nav-item": {
                            "classes": "cursor-pointer px-4 py-3 text-[14px] font-medium capitalize text-[#6c6c6c] hover:text-[#ff5554]"
                          },
                          "tabs-nav-item-active": {
                            "classes": "cursor-pointer border-b-2 border-[#ff5554] px-4 py-3 text-[14px] font-semibold capitalize text-[#ff5554]"
                          },
                          "tabs-content": {
                            "classes": "pt-2"
                          }
                        },
                        "children": [
                          {
                            "id": "em-acc-tab-1",
                            "type": "tabsItem",
                            "options": {
                              "label": "Orders"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em-acc-orders",
                                "type": "customerOrders",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  },
                                  "table": {
                                    "classes": "w-full overflow-hidden rounded-[8px] border border-[#e8e3e1] bg-white text-[14px]"
                                  },
                                  "th": {
                                    "classes": "bg-[#fcf7f5] px-4 py-3 text-left text-[13px] font-semibold text-[#211913]"
                                  },
                                  "td": {
                                    "classes": "border-t border-[#e8e3e1] px-4 py-3 text-[#211913]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em-acc-tab-2",
                            "type": "tabsItem",
                            "options": {
                              "label": "Profile"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em-acc-profile",
                                "type": "customerProfile",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                }
                              },
                              {
                                "id": "em-acc-profile-e",
                                "type": "customerProfileEdit",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-3"
                                  },
                                  "input": {
                                    "classes": "w-full rounded-[8px] border border-[#e8e3e1] bg-white px-4 py-3 text-[14px] text-[#211913] outline-none focus:border-[#ff5554]"
                                  },
                                  "button": {
                                    "classes": "w-full rounded-[5px] bg-[#ff5554] px-[30px] py-[12px] text-[14px] font-semibold capitalize text-white transition-opacity hover:opacity-90"
                                  },
                                  "label": {
                                    "classes": "text-[13px] font-medium text-[#211913]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em-acc-tab-3",
                            "type": "tabsItem",
                            "options": {
                              "label": "Subscriptions"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em-acc-subs",
                                "type": "customerSubscriptions",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "em-acc-tab-4",
                            "type": "tabsItem",
                            "options": {
                              "label": "Support"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "em-acc-tickets",
                                "type": "customerTickets",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full"
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
        "content": [
          {
            "id": "em-ty",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-16"
              }
            },
            "children": [
              {
                "id": "em-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto max-w-[620px] rounded-[16px] border border-[#e8e3e1] bg-white p-8 text-center sm:p-12"
                  }
                },
                "children": [
                  {
                    "id": "em-ty-ic",
                    "type": "text",
                    "options": {
                      "text": "✓",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-[#008000] text-[26px] font-bold text-white"
                      }
                    }
                  },
                  {
                    "id": "em-ty-t",
                    "type": "heading",
                    "options": {
                      "text": "Thank you for your order",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-[clamp(1.5rem,calc(1.38rem+0.6vw),1.875rem)] font-semibold leading-[1.2] text-[#211913]"
                      }
                    }
                  },
                  {
                    "id": "em-ty-p",
                    "type": "text",
                    "options": {
                      "text": "We have your order and will call to confirm delivery. You can pay cash when it arrives.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mt-4 max-w-[460px] text-[16px] leading-[22px] text-[#6c6c6c]"
                      }
                    }
                  },
                  {
                    "id": "em-ty-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-7 flex flex-wrap items-center justify-center gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "em-ty-b1",
                        "type": "button",
                        "options": {
                          "text": "Continue shopping",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center justify-center gap-2 rounded-[5px] border border-[#211913] px-[30px] py-[10px] text-[14px] font-medium capitalize leading-none text-[#211913] transition-colors hover:bg-[#211913] hover:text-white w-auto"
                          },
                          "icon": {
                            "classes": ""
                          },
                          "label": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "em-ty-b2",
                        "type": "button",
                        "options": {
                          "text": "View my orders",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/account",
                          "target": "",
                          "icon": "",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-auto rounded-[5px] bg-[#ff5554] px-[30px] py-[10px] text-[14px] font-medium capitalize text-white transition-opacity hover:opacity-90"
                          },
                          "icon": {
                            "classes": ""
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
        "title": "404",
        "type": "404",
        "content": [
          {
            "id": "em-404",
            "type": "section",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "mx-auto w-full max-w-[1360px] px-4 sm:px-5 py-16 text-center"
              }
            },
            "children": [
              {
                "id": "em-404-n",
                "type": "text",
                "options": {
                  "text": "404",
                  "tag": "span"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "block text-[clamp(4rem,12vw,8rem)] font-bold leading-none text-[#ff5554]"
                  }
                }
              },
              {
                "id": "em-404-t",
                "type": "heading",
                "options": {
                  "text": "We could not find that page",
                  "tag": "h1"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "text-[clamp(1.5rem,calc(1.38rem+0.6vw),1.875rem)] font-semibold leading-[1.2] mt-4 text-[#211913]"
                  }
                }
              },
              {
                "id": "em-404-p",
                "type": "text",
                "options": {
                  "text": "The link may be old, or the product may have sold out. Try a search, or browse the shop.",
                  "tag": "p"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto mt-4 max-w-[480px] text-[16px] leading-[22px] text-[#6c6c6c]"
                  }
                }
              },
              {
                "id": "em-404-btns",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-7 flex flex-wrap items-center justify-center gap-3"
                  }
                },
                "children": [
                  {
                    "id": "em-404-b1",
                    "type": "button",
                    "options": {
                      "text": "Back to home",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/",
                      "target": "",
                      "icon": "",
                      "iconSize": 14
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center justify-center gap-2 rounded-[5px] border border-[#211913] px-[30px] py-[10px] text-[14px] font-medium capitalize leading-none text-[#211913] transition-colors hover:bg-[#211913] hover:text-white w-auto"
                      },
                      "icon": {
                        "classes": ""
                      },
                      "label": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "em-404-b2",
                    "type": "button",
                    "options": {
                      "text": "Shop all products",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/shop",
                      "target": "",
                      "icon": "",
                      "iconSize": 14
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "w-auto rounded-[5px] bg-[#ff5554] px-[30px] py-[10px] text-[14px] font-medium capitalize text-white transition-opacity hover:opacity-90"
                      },
                      "icon": {
                        "classes": ""
                      },
                      "label": {
                        "classes": ""
                      }
                    }
                  }
                ]
              },
              {
                "id": "em-404-cats",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mt-12"
                  }
                },
                "children": [
                  {
                    "id": "em-404-tg",
                    "type": "termsGrid",
                    "options": {
                      "classes": "",
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "order": "ASC",
                        "orderby": "name",
                        "per_page": "9",
                        "hide_empty": false
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-4 gap-x-3 gap-y-4 sm:grid-cols-6 lg:grid-cols-9 lg:gap-x-4"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center justify-center gap-y-[5px]"
                      }
                    },
                    "children": [
                      {
                        "id": "em-404-tg-loop",
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
                            "id": "em-404-tg-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl",
                              "classes": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-[5px] bg-[#f5f5f5] shadow-[0px_3px_12px_rgb(0_0_0/10%)] transition-all duration-300 group-hover:shadow-[-1px_3px_12px_rgb(0_0_0/20%)] sm:rounded-[8px]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "image": {
                                "classes": "aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "em-404-tg-title",
                            "type": "termTitle",
                            "options": {
                              "text": "Term Title",
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-1 text-center text-[12px] font-medium capitalize leading-[14px] text-[#211913] transition-all duration-300 group-hover:underline sm:text-[14px] sm:leading-[18px]"
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
