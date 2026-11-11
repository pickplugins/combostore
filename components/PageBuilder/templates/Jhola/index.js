/**
 * Template: Jhola Bags & Leather.
 *
 * A crafted, modern bag store (a jhola is the Bangla shoulder bag):
 * handbags, backpacks, laptop, office and travel bags, wallets and school
 * bags in leather, canvas and nylon. Like the other complete templates here
 * it carries all sixteen page types - Header, Footer, Home, Shop, Product,
 * the six taxonomy archives, Blog Archive, Blog Single, Account, Thank you
 * and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to jh-, palette remapped, copy
 * rewritten); the Header is restyled and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * A floating leather strap: a small promo line above, then a rounded
 * espresso bar (jh-hdr-bar) with a sheen and cognac saddle stitching inset
 * all round. The logo sits in a brass buckle - the brand container gets a
 * brass frame and the brand mark becomes the buckle's prong - then the menu,
 * search, account and cart, and three punched strap holes (jh-hdr-holes,
 * xl and up) at the end of the strap.
 *
 * THE HERO
 *
 * Headline, buttons and "Our Daily Tote fits:" chips (14″ laptop, 1 L
 * bottle, A4 files, umbrella) beside the tote (public/templates/
 * jhola-bag.svg) on a powder-blue arch with a stitched inset, a cognac
 * "full-grain leather" badge and a stitching-warranty card.
 *
 * DESIGN
 *
 *   cognac   #A6552B  primary: buttons, accents, monogram band   #8A4320 dark  #F4E3D6 tint
 *   espresso #2B211C  header strap, text, materials band         #3B2E27
 *   powder   #A9CBE6  accent: arch, discount pills, club CTA     #E5F0F8 tint
 *   olive #6E7448 / #E7E8DA   brass #C9A36A / #F0D28E
 *   canvas #EFE8DA / #E5DCCB   muted #776C61   line #DCD2C0
 *
 * Fonts (template meta): Syne (headings, extra-bold) and Work Sans (body).
 * Dashed "saddle stitch" outlines recur on buttons, badges, cards and bands.
 *
 * Product cards: a 4:5 photo on canvas that gains a dashed stitched inset on
 * hover, a powder-blue discount pill, the name, one excerpt line (use the
 * excerpt for material and fit, e.g. "Full-grain leather · fits 14″"), the
 * price in Syne and a round espresso add button.
 *
 * HOME
 *
 *   Hero - strap strip - shop by type, 8 tiles (#bag-types) - new arrivals -
 *   "what do you carry?" capacity guide (#capacity) - bestsellers
 *   (#bestsellers) - know your materials (#materials) - handbags & totes -
 *   free monogram band (#monogram) - backpacks - travel & duffels - brands
 *   (#brands) - reviews - the carry journal (#journal) - FAQ (#faq) - club
 *   CTA (#club).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: handbags, backpacks, laptop-bags, office-bags, travel,
 *     wallets, school-bags, kids-bags. Tag slugs: bestseller, sale, gift,
 *     monogram, the sizes size-mini, size-everyday, size-work, size-travel,
 *     and the materials full-grain, top-grain, vegan, canvas, nylon. Brands
 *     are product_brand terms.
 *   - "Our Daily Tote fits" and the hero badges describe the placeholder
 *     bag; match them to your hero product.
 *   - Contact details, promo code CARRY10, the 10% offer, free initials, the
 *     1-year stitching warranty, the ৳3,000 free-delivery threshold, the
 *     yearly clean & condition, "12,000+ customers" and the six reviews are
 *     sample copy.
 */

var template = [
  {
    "name": "Jhola Bags & Leather",
    "description": "Crafted-modern bag store on canvas cream with cognac leather, espresso, powder blue, olive and brass; Syne display and Work Sans, with saddle-stitch outlines throughout: a floating leather-strap header with the logo in a brass buckle and strap holes, a hero tote on a powder-blue arch with \"what fits inside\" chips, a bag-type grid, new arrivals, a capacity guide by what you carry, bestsellers, a materials guide, handbags, a free-monogram band, backpacks, travel, brands, reviews, the carry journal, FAQ and a club CTA. All 16 pages.",
    "thumbnail": "/templates/jhola.svg",
    "meta": {
      "fonts": [
        {
          "family": "Syne",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Work Sans",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Syne",
        "body": "Work Sans"
      },
      "colors": {
        "primary": "#A6552B",
        "secondary": "#2B211C",
        "accent": "#A9CBE6",
        "background": "#EFE8DA",
        "foreground": "#2B211C",
        "muted": "#776C61"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "jh-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-[#EFE8DA]/90 px-3 pb-3 backdrop-blur-md sm:px-5"
              }
            },
            "children": [
              {
                "id": "jh-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-center font-body text-xs text-[#2B211C]/75"
                  }
                },
                "children": [
                  {
                    "id": "jh-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free initials on leather · 1-year stitching warranty · 10% off your first bag with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "jh-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "CARRY10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#A6552B] px-2.5 py-0.5 font-body text-[11px] font-bold tracking-wider text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Size guide",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#capacity",
                      "target": "",
                      "icon": "",
                      "iconSize": 16
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden cursor-pointer items-center sm:inline-flex"
                      },
                      "icon": {
                        "classes": "flex items-center shrink-0"
                      },
                      "label": {
                        "classes": "font-body text-xs font-semibold text-[#8A4320] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "jh-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl rounded-full bg-[#2B211C] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_40%,rgba(0,0,0,0.2))] pl-3 pr-3 shadow-[0_14px_28px_-16px_rgba(43,33,28,0.8)] outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/80 sm:pl-4"
                  }
                },
                "children": [
                  {
                    "id": "jh-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[68px] items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2.5 rounded-xl border-[3px] border-[#C9A36A] bg-[linear-gradient(90deg,rgba(201,163,106,0.08),transparent)] py-1 pl-2 pr-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "h-8 w-1.5 rounded-full bg-[linear-gradient(180deg,#F0D28E,#C9A36A)] shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                              }
                            }
                          },
                          {
                            "id": "jh-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "jhola",
                                  "src": "https://placehold.co/200x64?text=Jhola",
                                  "altText": "Jhola Bags & Leather",
                                  "link": "/"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "inline-block"
                                  },
                                  "img": {
                                    "classes": "h-10 w-auto object-contain"
                                  },
                                  "text": {
                                    "classes": "font-heading text-[28px] font-bold leading-none tracking-tight text-[#EFE8DA]"
                                  }
                                }
                              },
                              {
                                "id": "jh-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Bags & leather goods",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 block font-body text-[9px] font-semibold uppercase leading-none tracking-[0.2em] text-[#F0D28E]/70"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jh-hdr-menu",
                        "type": "menu",
                        "options": {
                          "showFrom": "lg",
                          "label": "Main menu"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "menu": {
                            "classes": "flex items-center gap-1"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center whitespace-nowrap rounded-full px-3.5 py-2 font-body text-sm font-medium text-[#EFE8DA]/85 transition-colors hover:bg-white/10 hover:text-white"
                          },
                          "link-label": {
                            "classes": ""
                          },
                          "icon": {
                            "classes": "flex items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "New in",
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
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Handbags",
                              "url": "/categories/handbags"
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
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Backpacks",
                              "url": "/categories/backpacks"
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
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Laptop",
                              "url": "/categories/laptop-bags"
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
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Travel",
                              "url": "/categories/travel"
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
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Wallets",
                              "url": "/categories/wallets"
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
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Sale",
                              "url": "/tags/sale"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "!text-[#A9CBE6]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "jh-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search bags...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden w-48 rounded-full bg-white/10 py-1 pl-1 pr-3 transition-all focus-within:bg-white/15 md:block xl:w-56"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-body text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex h-7 w-7 items-center justify-center text-[#F0D28E]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#A6552B] focus:outline-none focus:ring-2 focus:ring-[#A6552B]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#A6552B]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#A6552B]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#A6552B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#8A4320]"
                          }
                        }
                      },
                      {
                        "id": "jh-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-hdr-account",
                            "type": "button",
                            "options": {
                              "text": "",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconUser",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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
                            "id": "jh-hdr-cart",
                            "type": "cart",
                            "options": {
                              "triggerStyle": "icon",
                              "editMode": true,
                              "countryCity": true,
                              "orderNotes": true,
                              "deliveryLocation": true,
                              "shippingAddress": true,
                              "orderSubscription": true,
                              "shippingMethods": true,
                              "crossSells": true,
                              "crossSellsTitle": "Frequently bought together",
                              "crossSellsLimit": 4
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative"
                              },
                              "trigger-icon": {
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#A6552B] text-white transition-colors hover:bg-[#C9A36A]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#A6552B] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#EFE8DA] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#2B211C]"
                              },
                              "title-icon": {
                                "classes": "text-[#A6552B]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#A6552B] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#A6552B] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#8A4320]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6552B]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#A6552B] focus:outline-none focus:ring-2 focus:ring-[#A6552B]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#A6552B] px-4 py-2 text-sm font-medium text-[#A6552B] transition-colors hover:bg-[#A6552B] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#A6552B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8A4320] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6552B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "jh-hdr-mobile",
                            "type": "popoverButton",
                            "options": {
                              "buttonLabel": "",
                              "buttonIcon": "IconMenu2",
                              "position": "fixedRight"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative lg:hidden"
                              },
                              "button": {
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white"
                              },
                              "button-icon": {
                                "classes": "flex"
                              },
                              "button-label": {
                                "classes": "hidden"
                              },
                              "popover": {
                                "classes": "z-[999] h-full w-80 max-w-[85vw] overflow-y-auto bg-white shadow-2xl"
                              },
                              "popover-close": {
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#EFE8DA] p-2 text-[#2B211C] transition-colors hover:bg-[#A6552B] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-8 w-1.5 rounded-full bg-[#C9A36A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jh-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "jhola",
                                          "src": "https://placehold.co/200x64?text=Jhola",
                                          "altText": "Jhola Bags & Leather",
                                          "link": "/"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "inline-block"
                                          },
                                          "img": {
                                            "classes": "h-10 w-auto object-contain"
                                          },
                                          "text": {
                                            "classes": "font-heading text-[28px] font-bold leading-none tracking-tight text-[#2B211C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Bags & leather goods",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-[9px] font-semibold uppercase leading-none tracking-[0.2em] text-[#776C61]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "jh-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search bags...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#EFE8DA] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#2B211C] focus-within:ring-2 focus-within:ring-[#2B211C]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2B211C] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#776C61]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#A6552B] focus:outline-none focus:ring-2 focus:ring-[#A6552B]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#A6552B]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#A6552B]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#A6552B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#8A4320]"
                                  }
                                }
                              },
                              {
                                "id": "jh-hdr-m-menu",
                                "type": "menu",
                                "options": {
                                  "showFrom": "all",
                                  "label": "Mobile menu"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "menu": {
                                    "classes": "flex flex-col"
                                  },
                                  "menu-item": {
                                    "classes": ""
                                  },
                                  "sub-menu": {
                                    "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                                  },
                                  "menu-link": {
                                    "classes": "flex items-center gap-1.5 border-b border-dashed border-[#DCD2C0] py-3.5 font-heading text-xl font-bold text-[#2B211C] transition-colors hover:text-[#A6552B]"
                                  },
                                  "link-label": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": "flex items-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "New in",
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
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "jh-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Handbags",
                                      "url": "/categories/handbags"
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
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "jh-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Backpacks",
                                      "url": "/categories/backpacks"
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
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "jh-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Laptop",
                                      "url": "/categories/laptop-bags"
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
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "jh-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Travel",
                                      "url": "/categories/travel"
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
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "jh-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Wallets",
                                      "url": "/categories/wallets"
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
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "jh-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Sale",
                                      "url": "/tags/sale"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "!text-[#A6552B]"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "sub-menu": {
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
                      },
                      {
                        "id": "jh-hdr-holes",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden items-center gap-2.5 pl-1 xl:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-hdr-hole-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2.5 w-2.5 rounded-full bg-black/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.12)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-hdr-hole-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2.5 w-2.5 rounded-full bg-black/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.12)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-hdr-hole-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2.5 w-2.5 rounded-full bg-black/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.12)]"
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
        ],
        "meta": ""
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "jh-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2B211C] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "jh-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "jh-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[#A6552B] p-8 sm:p-12 lg:flex-row outline-dashed outline-1 outline-offset-[-10px] outline-[#F0D28E]/60"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "The Jhola Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block rounded-full bg-white/15 px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#F0D28E]"
                              }
                            }
                          },
                          {
                            "id": "jh-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "A free clean & condition, every year",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-3xl text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "jh-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Join free for a yearly leather spa, early access to new drops and members-only prices.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-white/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Join free",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2B211C] px-7 py-4 transition-colors hover:bg-[#A6552B]"
                          },
                          "icon": {
                            "classes": "flex items-center text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "jh-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "jh-ftr-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5"
                      },
                      "grid-item": {
                        "classes": ""
                      }
                    },
                    "children": [
                      {
                        "id": "jh-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-8 w-1.5 rounded-full bg-[#C9A36A]"
                                  }
                                }
                              },
                              {
                                "id": "jh-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "jhola",
                                      "src": "https://placehold.co/200x64?text=Jhola",
                                      "altText": "Jhola Bags & Leather",
                                      "link": "/"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "inline-block"
                                      },
                                      "img": {
                                        "classes": "h-10 w-auto object-contain"
                                      },
                                      "text": {
                                        "classes": "font-heading text-[28px] font-bold leading-none tracking-tight text-[#EFE8DA]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jh-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Handbags, backpacks, laptop and travel bags and wallets in honest leather and tough canvas, stitched to last, monogrammed free and delivered across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "jh-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-ftr-fb",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://facebook.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandFacebook",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#A6552B]"
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
                                "id": "jh-ftr-ig",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://instagram.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandInstagram",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#A6552B]"
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
                                "id": "jh-ftr-yt",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://youtube.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandYoutube",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#A6552B]"
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
                                "id": "jh-ftr-pin",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://pinterest.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandPinterest",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#A6552B]"
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
                        "id": "jh-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Handbags & Totes",
                                  "icon": "",
                                  "slug": "/categories/handbags"
                                },
                                {
                                  "text": "Backpacks",
                                  "icon": "",
                                  "slug": "/categories/backpacks"
                                },
                                {
                                  "text": "Laptop Bags",
                                  "icon": "",
                                  "slug": "/categories/laptop-bags"
                                },
                                {
                                  "text": "Travel & Duffels",
                                  "icon": "",
                                  "slug": "/categories/travel"
                                },
                                {
                                  "text": "Wallets",
                                  "icon": "",
                                  "slug": "/categories/wallets"
                                },
                                {
                                  "text": "School Bags",
                                  "icon": "",
                                  "slug": "/categories/school-bags"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              },
                              "header-text": {
                                "classes": "font-body text-base font-bold text-white"
                              },
                              "ul": {
                                "classes": "flex flex-col gap-2"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-[#C9A36A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#C9A36A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-ftr-ll-care",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Care",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Track Your Order",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "My Account",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "Size Guide",
                                  "icon": "",
                                  "slug": "/#capacity"
                                },
                                {
                                  "text": "Warranty & Repairs",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Carry Journal",
                                  "icon": "",
                                  "slug": "/blog"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              },
                              "header-text": {
                                "classes": "font-body text-base font-bold text-white"
                              },
                              "ul": {
                                "classes": "flex flex-col gap-2"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-[#C9A36A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#C9A36A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-ftr-contact-h",
                            "type": "heading",
                            "options": {
                              "text": "Contact Us",
                              "tag": "h4"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "jh-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": {
                                "icon": "IconPhone",
                                "label": "Phone",
                                "value": "+880 1700-000000"
                              },
                              "email": {
                                "icon": "IconMail",
                                "label": "Email",
                                "value": "hello@example.com"
                              },
                              "location": {
                                "icon": "IconClock",
                                "label": "Hours",
                                "value": "Every day, 10am - 9pm",
                                "mapLink": false
                              },
                              "iconSize": 16,
                              "showLabels": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2 text-sm text-gray-400"
                              },
                              "item": {
                                "classes": "flex items-center gap-2"
                              },
                              "link": {
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#C9A36A]"
                              },
                              "phone-link": {
                                "classes": ""
                              },
                              "email-link": {
                                "classes": ""
                              },
                              "location-link": {
                                "classes": ""
                              },
                              "icon": {
                                "classes": "shrink-0 text-[#A6552B]"
                              },
                              "label": {
                                "classes": ""
                              },
                              "text": {
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
                "id": "jh-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "jh-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Jhola Bags & Leather. All rights reserved. Carry it all, beautifully.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "jh-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-body text-xs"
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
        "title": "Home",
        "type": "home",
        "content": [
          {
            "id": "jh-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE8DA] pb-16 pt-10 lg:pb-24 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "jh-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-7 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-hero-k",
                            "type": "text",
                            "options": {
                              "text": "New season · Leather & canvas",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Carry it all, beautifully.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-5xl leading-[0.98] text-[#2B211C] sm:text-6xl xl:text-7xl"
                              }
                            }
                          },
                          {
                            "id": "jh-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Handbags, backpacks, laptop and travel bags in full-grain leather and tough canvas, stitched to last and sized for the life you actually carry.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-lg leading-relaxed text-[#776C61]"
                              }
                            }
                          },
                          {
                            "id": "jh-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop new bags",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#A6552B] px-7 py-4 outline-dashed outline-1 outline-offset-[-4px] outline-[#F0D28E]/60 transition-colors hover:bg-[#8A4320]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-semibold text-white whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "jh-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Which size do I need?",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#capacity",
                                  "target": "",
                                  "icon": "IconRuler2",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#2B211C] px-7 py-3.5 transition-colors hover:bg-[#2B211C]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#2B211C] group-hover:text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-hero-fits",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 border-t border-dashed border-[#DCD2C0] pt-6"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-hero-fits-k",
                                "type": "text",
                                "options": {
                                  "text": "Our Daily Tote fits:",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-hero-fits-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-fit-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_6px_14px_-10px_rgba(43,33,28,0.4)]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jh-fit-1-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconDeviceLaptop",
                                          "size": 16,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#A6552B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-fit-1-t",
                                        "type": "text",
                                        "options": {
                                          "text": "14″ laptop",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-medium text-[#2B211C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-fit-1-ok",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconCheck",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#6E7448]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "jh-fit-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_6px_14px_-10px_rgba(43,33,28,0.4)]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jh-fit-2-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconBottle",
                                          "size": 16,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#A6552B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-fit-2-t",
                                        "type": "text",
                                        "options": {
                                          "text": "1 L bottle",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-medium text-[#2B211C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-fit-2-ok",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconCheck",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#6E7448]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "jh-fit-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_6px_14px_-10px_rgba(43,33,28,0.4)]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jh-fit-3-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconFiles",
                                          "size": 16,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#A6552B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-fit-3-t",
                                        "type": "text",
                                        "options": {
                                          "text": "A4 files",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-medium text-[#2B211C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-fit-3-ok",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconCheck",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#6E7448]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "jh-fit-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_6px_14px_-10px_rgba(43,33,28,0.4)]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jh-fit-4-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconUmbrella",
                                          "size": 16,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#A6552B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-fit-4-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Umbrella",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-medium text-[#2B211C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-fit-4-ok",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconCheck",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#6E7448]"
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
                        "id": "jh-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mx-auto aspect-[5/6] w-full max-w-[500px] overflow-hidden rounded-t-[260px] rounded-b-[40px] bg-[#A9CBE6] outline-dashed outline-1 outline-offset-[-14px] outline-white/60"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-arch-sun",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute left-1/2 top-[18%] h-48 w-48 -translate-x-1/2 rounded-full bg-[#E5F0F8]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jh-arch-floor",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-[#E5DCCB]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jh-hero-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/jhola-bag.svg",
                                  "altText": "A cognac leather tote with rolled handles, brass rivets and a luggage tag",
                                  "link": "/shop",
                                  "newTab": false
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-[6%] bottom-[4%]"
                                  },
                                  "link": {
                                    "classes": "block"
                                  },
                                  "img": {
                                    "classes": "h-auto w-full transition-transform duration-700 hover:-rotate-2 hover:scale-[1.02]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-hero-st1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -left-2 top-[18%] flex h-28 w-28 -rotate-12 flex-col items-center justify-center rounded-full bg-[#A6552B] text-center shadow-[0_18px_30px_-18px_rgba(43,33,28,0.7)] outline-dashed outline-1 outline-offset-[-6px] outline-[#F0D28E]/70 sm:left-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-hero-st1-a",
                                "type": "text",
                                "options": {
                                  "text": "Full-grain",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-base font-bold leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "jh-hero-st1-b",
                                "type": "text",
                                "options": {
                                  "text": "leather",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/80"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-hero-st2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -right-1 bottom-[14%] flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_30px_-18px_rgba(43,33,28,0.5)] sm:right-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-hero-st2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconShieldCheck",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7E8DA] text-[#6E7448]"
                                  }
                                }
                              },
                              {
                                "id": "jh-hero-st2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-hero-st2-a",
                                    "type": "text",
                                    "options": {
                                      "text": "1-year stitching warranty",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B211C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-hero-st2-b",
                                    "type": "text",
                                    "options": {
                                      "text": "Free repair if a seam lets go",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#776C61]"
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
            "id": "jh-strip",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full overflow-hidden bg-[#2B211C] py-4 outline-dashed outline-1 outline-offset-[-5px] outline-[#A6552B]/70"
              }
            },
            "children": [
              {
                "id": "jh-strip-row",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-max items-center gap-8 whitespace-nowrap px-4"
                  }
                },
                "children": [
                  {
                    "id": "jh-strip-0",
                    "type": "text",
                    "options": {
                      "text": "Free initials on leather  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#EFE8DA]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-1",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#F0D28E]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-2",
                    "type": "text",
                    "options": {
                      "text": "7-day exchange  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#EFE8DA]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-3",
                    "type": "text",
                    "options": {
                      "text": "1-year stitching warranty  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#EFE8DA]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-4",
                    "type": "text",
                    "options": {
                      "text": "Free delivery over ৳3,000  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#F0D28E]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-5",
                    "type": "text",
                    "options": {
                      "text": "New arrivals every week  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#EFE8DA]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-6",
                    "type": "text",
                    "options": {
                      "text": "Free initials on leather  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#EFE8DA]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-7",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#F0D28E]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-8",
                    "type": "text",
                    "options": {
                      "text": "7-day exchange  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#EFE8DA]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-9",
                    "type": "text",
                    "options": {
                      "text": "1-year stitching warranty  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#EFE8DA]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-10",
                    "type": "text",
                    "options": {
                      "text": "Free delivery over ৳3,000  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#F0D28E]"
                      }
                    }
                  },
                  {
                    "id": "jh-strip-11",
                    "type": "text",
                    "options": {
                      "text": "New arrivals every week  ●",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-base font-bold text-[#EFE8DA]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-types",
            "type": "section",
            "options": {
              "anchor": "bag-types"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-types-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-types-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-types-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-types-label",
                            "type": "text",
                            "options": {
                              "text": "Shop by type",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-types-h",
                            "type": "heading",
                            "options": {
                              "text": "Every bag for every day",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-types-all",
                        "type": "button",
                        "options": {
                          "text": "All categories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#2B211C]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-types-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-type-1",
                        "type": "button",
                        "options": {
                          "text": "Handbags",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/handbags",
                          "target": "",
                          "icon": "IconShoppingBag",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-start gap-6 rounded-[24px] bg-[#EFE8DA] p-5 transition-colors duration-300 hover:bg-[#A6552B] sm:p-6 outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/0 hover:outline-[#F0D28E]/70"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A6552B] transition-transform duration-300 group-hover:-rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-bold tracking-tight text-xl text-[#2B211C] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jh-type-2",
                        "type": "button",
                        "options": {
                          "text": "Backpacks",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/backpacks",
                          "target": "",
                          "icon": "IconBackpack",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-start gap-6 rounded-[24px] bg-[#EFE8DA] p-5 transition-colors duration-300 hover:bg-[#A6552B] sm:p-6 outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/0 hover:outline-[#F0D28E]/70"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A6552B] transition-transform duration-300 group-hover:-rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-bold tracking-tight text-xl text-[#2B211C] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jh-type-3",
                        "type": "button",
                        "options": {
                          "text": "Laptop bags",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/laptop-bags",
                          "target": "",
                          "icon": "IconDeviceLaptop",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-start gap-6 rounded-[24px] bg-[#EFE8DA] p-5 transition-colors duration-300 hover:bg-[#A6552B] sm:p-6 outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/0 hover:outline-[#F0D28E]/70"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A6552B] transition-transform duration-300 group-hover:-rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-bold tracking-tight text-xl text-[#2B211C] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jh-type-4",
                        "type": "button",
                        "options": {
                          "text": "Office",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/office-bags",
                          "target": "",
                          "icon": "IconBriefcase",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-start gap-6 rounded-[24px] bg-[#EFE8DA] p-5 transition-colors duration-300 hover:bg-[#A6552B] sm:p-6 outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/0 hover:outline-[#F0D28E]/70"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A6552B] transition-transform duration-300 group-hover:-rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-bold tracking-tight text-xl text-[#2B211C] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jh-type-5",
                        "type": "button",
                        "options": {
                          "text": "Travel",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/travel",
                          "target": "",
                          "icon": "IconLuggage",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-start gap-6 rounded-[24px] bg-[#EFE8DA] p-5 transition-colors duration-300 hover:bg-[#A6552B] sm:p-6 outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/0 hover:outline-[#F0D28E]/70"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A6552B] transition-transform duration-300 group-hover:-rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-bold tracking-tight text-xl text-[#2B211C] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jh-type-6",
                        "type": "button",
                        "options": {
                          "text": "Wallets",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/wallets",
                          "target": "",
                          "icon": "IconWallet",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-start gap-6 rounded-[24px] bg-[#EFE8DA] p-5 transition-colors duration-300 hover:bg-[#A6552B] sm:p-6 outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/0 hover:outline-[#F0D28E]/70"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A6552B] transition-transform duration-300 group-hover:-rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-bold tracking-tight text-xl text-[#2B211C] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jh-type-7",
                        "type": "button",
                        "options": {
                          "text": "School bags",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/school-bags",
                          "target": "",
                          "icon": "IconSchool",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-start gap-6 rounded-[24px] bg-[#EFE8DA] p-5 transition-colors duration-300 hover:bg-[#A6552B] sm:p-6 outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/0 hover:outline-[#F0D28E]/70"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A6552B] transition-transform duration-300 group-hover:-rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-bold tracking-tight text-xl text-[#2B211C] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jh-type-8",
                        "type": "button",
                        "options": {
                          "text": "Kids",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/kids-bags",
                          "target": "",
                          "icon": "IconMoodKid",
                          "iconSize": 26
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-start gap-6 rounded-[24px] bg-[#EFE8DA] p-5 transition-colors duration-300 hover:bg-[#A6552B] sm:p-6 outline-dashed outline-1 outline-offset-[-6px] outline-[#A6552B]/0 hover:outline-[#F0D28E]/70"
                          },
                          "icon": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A6552B] transition-transform duration-300 group-hover:-rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-bold tracking-tight text-xl text-[#2B211C] transition-colors group-hover:text-white sm:text-2xl"
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
            "id": "jh-row-new-arrivals",
            "type": "section",
            "options": {
              "anchor": "new-arrivals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-row-new-arrivals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-row-new-arrivals-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-row-new-arrivals-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-row-new-arrivals-label",
                            "type": "text",
                            "options": {
                              "text": "Just in",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-row-new-arrivals-h",
                            "type": "heading",
                            "options": {
                              "text": "New arrivals",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-row-new-arrivals-sub",
                            "type": "text",
                            "options": {
                              "text": "Fresh off the workbench this week.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-row-new-arrivals-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#2B211C]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-row-new-arrivals-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "12",
                        "taxQuery": []
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 4,
                        "perMove": 1,
                        "gap": "1.25rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "gap": "0.75rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B211C] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B211C] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[38%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[38%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-row-new-arrivals-slider-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-row-new-arrivals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-row-new-arrivals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-row-new-arrivals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-new-arrivals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-row-new-arrivals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-row-new-arrivals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-new-arrivals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-new-arrivals-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-row-new-arrivals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-row-new-arrivals-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-row-new-arrivals-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
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
            "id": "jh-capacity",
            "type": "section",
            "options": {
              "anchor": "capacity"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-capacity-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-capacity-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-capacity-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-capacity-label",
                            "type": "text",
                            "options": {
                              "text": "Size guide",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-capacity-h",
                            "type": "heading",
                            "options": {
                              "text": "What do you carry?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-capacity-sub",
                            "type": "text",
                            "options": {
                              "text": "Start with what goes inside, then pick the bag. Every product page lists its litres and laptop size.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#776C61]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "jh-capacity-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-kit-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 rounded-[28px] bg-[#E7E8DA] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-kit-1-art",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-44 items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-1-bag",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-14 w-16 rounded-b-2xl rounded-t-lg bg-[#A6552B] outline-dashed outline-1 outline-offset-[-4px] outline-[#F0D28E]/70 before:absolute before:-top-[45%] before:left-1/2 before:h-[60%] before:w-1/2 before:-translate-x-1/2 before:rounded-t-full before:border-[5px] before:border-b-0 before:border-[#8A4320] before:content-['']"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-1-h",
                                "type": "heading",
                                "options": {
                                  "text": "Mini",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-1-l",
                                "type": "text",
                                "options": {
                                  "text": "1–3 L",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-xs font-semibold text-[#8A4320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-1-items",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-1-i1",
                                "type": "text",
                                "options": {
                                  "text": "Phone",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-1-i2",
                                "type": "text",
                                "options": {
                                  "text": "Wallet",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-1-i3",
                                "type": "text",
                                "options": {
                                  "text": "Keys",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-1-i4",
                                "type": "text",
                                "options": {
                                  "text": "Lip balm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop mini bags",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/size-mini",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group mt-auto inline-flex w-fit cursor-pointer items-center gap-1.5 border-b-2 border-[#A6552B] pb-0.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-[#A6552B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-kit-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 rounded-[28px] bg-[#E5F0F8] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-kit-2-art",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-44 items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-2-bag",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-20 w-24 rounded-b-2xl rounded-t-lg bg-[#A6552B] outline-dashed outline-1 outline-offset-[-4px] outline-[#F0D28E]/70 before:absolute before:-top-[45%] before:left-1/2 before:h-[60%] before:w-1/2 before:-translate-x-1/2 before:rounded-t-full before:border-[5px] before:border-b-0 before:border-[#8A4320] before:content-['']"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-2-h",
                                "type": "heading",
                                "options": {
                                  "text": "Everyday",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-2-l",
                                "type": "text",
                                "options": {
                                  "text": "5–10 L",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-xs font-semibold text-[#8A4320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-2-items",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-2-i1",
                                "type": "text",
                                "options": {
                                  "text": "+ Tablet",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-2-i2",
                                "type": "text",
                                "options": {
                                  "text": "+ Sunglasses",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-2-i3",
                                "type": "text",
                                "options": {
                                  "text": "+ Water bottle",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop everyday bags",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/size-everyday",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group mt-auto inline-flex w-fit cursor-pointer items-center gap-1.5 border-b-2 border-[#A6552B] pb-0.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-[#A6552B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-kit-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 rounded-[28px] bg-[#F4E3D6] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-kit-3-art",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-44 items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-3-bag",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-28 w-28 rounded-b-2xl rounded-t-lg bg-[#A6552B] outline-dashed outline-1 outline-offset-[-4px] outline-[#F0D28E]/70 before:absolute before:-top-[45%] before:left-1/2 before:h-[60%] before:w-1/2 before:-translate-x-1/2 before:rounded-t-full before:border-[5px] before:border-b-0 before:border-[#8A4320] before:content-['']"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-3-h",
                                "type": "heading",
                                "options": {
                                  "text": "Work",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-3-l",
                                "type": "text",
                                "options": {
                                  "text": "12–20 L",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-xs font-semibold text-[#8A4320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-3-items",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-3-i1",
                                "type": "text",
                                "options": {
                                  "text": "+ 14–15″ laptop",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-3-i2",
                                "type": "text",
                                "options": {
                                  "text": "+ Charger",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-3-i3",
                                "type": "text",
                                "options": {
                                  "text": "+ A4 files",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop work bags",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/size-work",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group mt-auto inline-flex w-fit cursor-pointer items-center gap-1.5 border-b-2 border-[#A6552B] pb-0.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-[#A6552B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-kit-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 rounded-[28px] bg-[#E5DCCB] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-kit-4-art",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-44 items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-4-bag",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-36 w-36 rounded-b-2xl rounded-t-lg bg-[#A6552B] outline-dashed outline-1 outline-offset-[-4px] outline-[#F0D28E]/70 before:absolute before:-top-[45%] before:left-1/2 before:h-[60%] before:w-1/2 before:-translate-x-1/2 before:rounded-t-full before:border-[5px] before:border-b-0 before:border-[#8A4320] before:content-['']"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-4-h",
                                "type": "heading",
                                "options": {
                                  "text": "Travel",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-4-l",
                                "type": "text",
                                "options": {
                                  "text": "30–45 L",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-xs font-semibold text-[#8A4320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-4-items",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-kit-4-i1",
                                "type": "text",
                                "options": {
                                  "text": "+ Two days of clothes",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-4-i2",
                                "type": "text",
                                "options": {
                                  "text": "+ Shoes",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-kit-4-i3",
                                "type": "text",
                                "options": {
                                  "text": "+ Toiletries",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#2B211C]/10 bg-white/70 px-2.5 py-1 font-body text-xs text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-kit-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop travel bags",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/size-travel",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group mt-auto inline-flex w-fit cursor-pointer items-center gap-1.5 border-b-2 border-[#A6552B] pb-0.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-[#A6552B]"
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
            "id": "jh-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-best-label",
                            "type": "text",
                            "options": {
                              "text": "Most carried",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Bestsellers",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The bags our customers carry every single day.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-best-all",
                        "type": "button",
                        "options": {
                          "text": "All bestsellers",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/bestseller",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#2B211C]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-best-grid",
                    "type": "postGrid",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "8",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_tag",
                                "field": "slug",
                                "terms": [
                                  "bestseller"
                                ],
                                "operator": "IN"
                              }
                            ],
                            "relation": "OR"
                          }
                        ]
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-best-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-best-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
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
            "id": "jh-materials",
            "type": "section",
            "options": {
              "anchor": "materials"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#2B211C] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-materials-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-materials-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-materials-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-materials-label",
                            "type": "text",
                            "options": {
                              "text": "Material matters",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-white/10 text-[#F0D28E] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-white/25"
                              }
                            }
                          },
                          {
                            "id": "jh-materials-h",
                            "type": "heading",
                            "options": {
                              "text": "Know your materials",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#EFE8DA]"
                              }
                            }
                          },
                          {
                            "id": "jh-materials-sub",
                            "type": "text",
                            "options": {
                              "text": "What each one feels like, how it ages and how to look after it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-white/60"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "jh-materials-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-mat-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-white/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-mat-1-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-28 w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#C9773F,#A6552B_55%,#6E3519)] outline-dashed outline-1 outline-offset-[-6px] outline-[#F0D28E]/50 transition-transform duration-500 group-hover:scale-[1.02]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-mat-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Full-grain leather",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-xl text-[#EFE8DA]"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-1-p",
                            "type": "text",
                            "options": {
                              "text": "The toughest cut. Develops a rich patina as it ages.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/60"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-1-care",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex items-center gap-2 border-t border-dashed border-white/15 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-mat-1-care-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDroplet",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#A9CBE6]"
                                  }
                                }
                              },
                              {
                                "id": "jh-mat-1-care-t",
                                "type": "text",
                                "options": {
                                  "text": "Condition twice a year",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-mat-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/full-grain",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-fit cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F0D28E]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#F0D28E] whitespace-nowrap group-hover:underline"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-mat-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-white/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-mat-2-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-28 w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#D99A6C,#B46A3C_55%,#8A4A26)] outline-dashed outline-1 outline-offset-[-6px] outline-[#F0D28E]/50 transition-transform duration-500 group-hover:scale-[1.02]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-mat-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Top-grain leather",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-xl text-[#EFE8DA]"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-2-p",
                            "type": "text",
                            "options": {
                              "text": "Smoother and lighter, with a polished finish.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/60"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-2-care",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex items-center gap-2 border-t border-dashed border-white/15 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-mat-2-care-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDroplet",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#A9CBE6]"
                                  }
                                }
                              },
                              {
                                "id": "jh-mat-2-care-t",
                                "type": "text",
                                "options": {
                                  "text": "Wipe with a dry cloth",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-mat-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/top-grain",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-fit cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F0D28E]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#F0D28E] whitespace-nowrap group-hover:underline"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-mat-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-white/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-mat-3-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-28 w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#5A4A42,#3B2E27_55%,#2B211C)] outline-dashed outline-1 outline-offset-[-6px] outline-[#F0D28E]/50 transition-transform duration-500 group-hover:scale-[1.02]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-mat-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Vegan leather",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-xl text-[#EFE8DA]"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-3-p",
                            "type": "text",
                            "options": {
                              "text": "Animal-free PU that is light and easy to clean.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/60"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-3-care",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex items-center gap-2 border-t border-dashed border-white/15 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-mat-3-care-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDroplet",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#A9CBE6]"
                                  }
                                }
                              },
                              {
                                "id": "jh-mat-3-care-t",
                                "type": "text",
                                "options": {
                                  "text": "Mild soap and water",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-mat-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/vegan",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-fit cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F0D28E]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#F0D28E] whitespace-nowrap group-hover:underline"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-mat-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-white/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-mat-4-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-28 w-full rounded-2xl bg-[repeating-linear-gradient(45deg,#7E8456_0_3px,#6E7448_3px_6px)] outline-dashed outline-1 outline-offset-[-6px] outline-[#F0D28E]/50 transition-transform duration-500 group-hover:scale-[1.02]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-mat-4-h",
                            "type": "heading",
                            "options": {
                              "text": "Waxed canvas",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-xl text-[#EFE8DA]"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-4-p",
                            "type": "text",
                            "options": {
                              "text": "Cotton canvas, weather-proofed with wax.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/60"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-4-care",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex items-center gap-2 border-t border-dashed border-white/15 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-mat-4-care-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDroplet",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#A9CBE6]"
                                  }
                                }
                              },
                              {
                                "id": "jh-mat-4-care-t",
                                "type": "text",
                                "options": {
                                  "text": "Re-wax every year",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-mat-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/canvas",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-fit cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F0D28E]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#F0D28E] whitespace-nowrap group-hover:underline"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-mat-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-white/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-mat-5-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-28 w-full rounded-2xl bg-[repeating-linear-gradient(0deg,#2C3440_0_2px,#3A4452_2px_4px)] outline-dashed outline-1 outline-offset-[-6px] outline-[#F0D28E]/50 transition-transform duration-500 group-hover:scale-[1.02]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jh-mat-5-h",
                            "type": "heading",
                            "options": {
                              "text": "Ballistic nylon",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-xl text-[#EFE8DA]"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-5-p",
                            "type": "text",
                            "options": {
                              "text": "Water-resistant and nearly tear-proof for travel.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/60"
                              }
                            }
                          },
                          {
                            "id": "jh-mat-5-care",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto flex items-center gap-2 border-t border-dashed border-white/15 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-mat-5-care-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDroplet",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#A9CBE6]"
                                  }
                                }
                              },
                              {
                                "id": "jh-mat-5-care-t",
                                "type": "text",
                                "options": {
                                  "text": "Hand wash, air dry",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-mat-5-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/nylon",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-fit cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F0D28E]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#F0D28E] whitespace-nowrap group-hover:underline"
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
            "id": "jh-row-handbags",
            "type": "section",
            "options": {
              "anchor": "handbags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-row-handbags-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-row-handbags-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-row-handbags-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-row-handbags-label",
                            "type": "text",
                            "options": {
                              "text": "For her",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-row-handbags-h",
                            "type": "heading",
                            "options": {
                              "text": "Handbags & totes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-row-handbags-sub",
                            "type": "text",
                            "options": {
                              "text": "Totes, shoulder bags, crossbodies and clutches.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-row-handbags-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/handbags",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#2B211C]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-row-handbags-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "12",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "handbags"
                                ],
                                "operator": "IN"
                              }
                            ],
                            "relation": "OR"
                          }
                        ]
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 4,
                        "perMove": 1,
                        "gap": "1.25rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "gap": "0.75rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B211C] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B211C] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[38%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[38%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-row-handbags-slider-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-row-handbags-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-row-handbags-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-row-handbags-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-handbags-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-row-handbags-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-row-handbags-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-handbags-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-handbags-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-row-handbags-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-row-handbags-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-row-handbags-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
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
            "id": "jh-monogram",
            "type": "section",
            "options": {
              "anchor": "monogram"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-16 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "jh-monogram-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-monogram-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[36px] bg-[#A6552B] p-8 sm:p-12 lg:grid-cols-12 lg:p-16 outline-dashed outline-1 outline-offset-[-12px] outline-[#F0D28E]/60"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-monogram-letters",
                        "type": "text",
                        "options": {
                          "text": "N.H.",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-10 right-4 font-heading font-bold tracking-tight text-[12rem] leading-none text-[#8A4320] [text-shadow:0_2px_0_rgba(255,255,255,0.18),0_-2px_0_rgba(0,0,0,0.25)] lg:right-16"
                          }
                        }
                      },
                      {
                        "id": "jh-monogram-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-monogram-k",
                            "type": "text",
                            "options": {
                              "text": "Make it yours",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-white/15 px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#F0D28E]"
                              }
                            }
                          },
                          {
                            "id": "jh-monogram-h",
                            "type": "heading",
                            "options": {
                              "text": "Your initials, foil-stamped free.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "jh-monogram-p",
                            "type": "text",
                            "options": {
                              "text": "Add up to three letters in gold, silver or blind emboss on any leather bag or wallet. A gift they won’t mix up with anyone else’s.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base text-white/80"
                              }
                            }
                          },
                          {
                            "id": "jh-monogram-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-monogram-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop personalisable",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/monogram",
                                  "target": "",
                                  "icon": "IconLetterCase",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-4 transition-colors hover:bg-[#EFE8DA]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#A6552B]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "jh-monogram-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Gift ideas",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/gift",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 transition-colors hover:bg-white/10"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-semibold text-white whitespace-nowrap"
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
            "id": "jh-row-backpacks",
            "type": "section",
            "options": {
              "anchor": "backpacks"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-row-backpacks-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-row-backpacks-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-row-backpacks-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-row-backpacks-label",
                            "type": "text",
                            "options": {
                              "text": "For the commute",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-row-backpacks-h",
                            "type": "heading",
                            "options": {
                              "text": "Backpacks",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-row-backpacks-sub",
                            "type": "text",
                            "options": {
                              "text": "Laptop backpacks, rolltops and everyday daypacks.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-row-backpacks-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/backpacks",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#2B211C]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-row-backpacks-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "12",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "backpacks"
                                ],
                                "operator": "IN"
                              }
                            ],
                            "relation": "OR"
                          }
                        ]
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 4,
                        "perMove": 1,
                        "gap": "1.25rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "gap": "0.75rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B211C] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B211C] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[38%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[38%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-row-backpacks-slider-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-row-backpacks-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-row-backpacks-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-row-backpacks-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-backpacks-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-row-backpacks-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-row-backpacks-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-backpacks-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-backpacks-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-row-backpacks-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-row-backpacks-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-row-backpacks-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
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
            "id": "jh-row-travel",
            "type": "section",
            "options": {
              "anchor": "travel"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-row-travel-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-row-travel-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-row-travel-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-row-travel-label",
                            "type": "text",
                            "options": {
                              "text": "Out of office",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-row-travel-h",
                            "type": "heading",
                            "options": {
                              "text": "Travel & duffels",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-row-travel-sub",
                            "type": "text",
                            "options": {
                              "text": "Weekenders, duffels and cabin-size companions.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-row-travel-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/travel",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#2B211C]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-row-travel-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "12",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "travel"
                                ],
                                "operator": "IN"
                              }
                            ],
                            "relation": "OR"
                          }
                        ]
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 4,
                        "perMove": 1,
                        "gap": "1.25rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "gap": "0.75rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B211C] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B211C] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[38%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[38%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-row-travel-slider-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-row-travel-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-row-travel-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-row-travel-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-travel-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-row-travel-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-row-travel-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-travel-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-row-travel-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-row-travel-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-row-travel-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-row-travel-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
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
            "id": "jh-brandsec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "jh-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-brandsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-brandsec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-brandsec-label",
                            "type": "text",
                            "options": {
                              "text": "Labels we love",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-brandsec-h",
                            "type": "heading",
                            "options": {
                              "text": "Brands on our shelves",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-brandsec-all",
                        "type": "button",
                        "options": {
                          "text": "All brands",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/brands",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#2B211C]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-brands-slider",
                    "type": "termsSlider",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "24",
                        "per_page": "24",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count",
                        "paged": 1
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 6,
                        "perMove": 1,
                        "gap": "1rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "767": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 4
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B211C] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B211C] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-2 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-2 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[22px] bg-white p-5 text-center transition-colors hover:bg-[#F4E3D6]"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-brands-slider-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[22px] bg-white p-5 text-center transition-colors hover:bg-[#F4E3D6]"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-brands-slider-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-full items-center justify-center overflow-hidden"
                              },
                              "link": {
                                "classes": "flex h-full w-full items-center justify-center"
                              },
                              "image": {
                                "classes": "max-h-10 w-auto max-w-full object-contain grayscale transition-all group-hover:grayscale-0"
                              }
                            }
                          },
                          {
                            "id": "jh-brands-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-base text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-brands-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " bags",
                              "singularSuffix": " bag",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs text-[#776C61]"
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
            "id": "jh-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-reviews-label",
                            "type": "text",
                            "options": {
                              "text": "Carried & loved",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Bags that go the distance",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.8 by 12,000+ customers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#776C61]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "jh-reviews-slider",
                    "type": "contentSlider",
                    "options": {
                      "sliderOptions": {
                        "type": "loop",
                        "perPage": 3,
                        "perMove": 1,
                        "gap": "1.5rem",
                        "arrows": true,
                        "pagination": true,
                        "autoplay": true,
                        "interval": 6000,
                        "pauseOnHover": true,
                        "pauseOnFocus": true,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "767": {
                            "perPage": 1,
                            "gap": "1rem",
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 2
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!pt-1 [&_.splide__track]:!pb-2"
                      },
                      "slide": {
                        "classes": ""
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B211C] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B211C] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-2 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-2 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": "!static !mt-8 !gap-2 !p-0"
                      },
                      "page-item": {
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#2B211C]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#A6552B]"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#EFE8DA] p-8 outline-dashed outline-1 outline-offset-[-8px] outline-[#A6552B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Two years of daily rickshaw commutes and it only looks better. The patina is beautiful now.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#DCD2C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "MR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A6552B] font-heading font-bold tracking-tight text-sm text-white"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mahfuz Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B211C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Leather laptop bag",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#776C61]"
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
                        "id": "jh-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#EFE8DA] p-8 outline-dashed outline-1 outline-offset-[-8px] outline-[#A6552B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“It really does fit my 14″ laptop, a water bottle and lunch. Finally one bag for everything.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#DCD2C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "SA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A6552B] font-heading font-bold tracking-tight text-sm text-white"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sanjida Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B211C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Daily Tote",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#776C61]"
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
                        "id": "jh-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#EFE8DA] p-8 outline-dashed outline-1 outline-offset-[-8px] outline-[#A6552B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Got caught in a monsoon downpour on the way to office. Laptop stayed perfectly dry.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#DCD2C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "AC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A6552B] font-heading font-bold tracking-tight text-sm text-white"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Ashik Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B211C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Backpack",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#776C61]"
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
                        "id": "jh-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#EFE8DA] p-8 outline-dashed outline-1 outline-offset-[-8px] outline-[#A6552B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered a wallet with my husband’s initials for our anniversary. The gold foil is crisp and elegant.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#DCD2C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "RI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A6552B] font-heading font-bold tracking-tight text-sm text-white"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rumana Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B211C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Monogrammed wallet",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#776C61]"
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
                        "id": "jh-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#EFE8DA] p-8 outline-dashed outline-1 outline-offset-[-8px] outline-[#A6552B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Fits exactly the cabin size limit. Took it to Cox’s Bazar and Kolkata without a single scuff.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#DCD2C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "FH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A6552B] font-heading font-bold tracking-tight text-sm text-white"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Fahim Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B211C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Duffel",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#776C61]"
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
                        "id": "jh-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#EFE8DA] p-8 outline-dashed outline-1 outline-offset-[-8px] outline-[#A6552B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“A strap ring came loose after a year and they fixed it free under the stitching warranty. Real service.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#2B211C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#DCD2C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "TK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A6552B] font-heading font-bold tracking-tight text-sm text-white"
                                  }
                                }
                              },
                              {
                                "id": "jh-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tasnuva Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B211C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Crossbody",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#776C61]"
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
            "id": "jh-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "jh-journal-label",
                            "type": "text",
                            "options": {
                              "text": "The carry journal",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                              }
                            }
                          },
                          {
                            "id": "jh-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Care guides & packing tips",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-journal-all",
                        "type": "button",
                        "options": {
                          "text": "All articles",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#2B211C]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A6552B] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B211C] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-journal-grid",
                    "type": "postGrid",
                    "options": {
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
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-journal-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[26px] bg-[#E5DCCB]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "jh-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl font-bold leading-tight tracking-tight text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#776C61]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-semibold text-[#2B211C]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#A6552B] transition-transform group-hover/rm:translate-x-1"
                                  },
                                  "read-more-label": {
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
            "id": "jh-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jh-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "jh-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "jh-faq-label",
                                "type": "text",
                                "options": {
                                  "text": "Questions",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-fit rounded-full bg-[#F4E3D6] text-[#8A4320] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] outline-dashed outline-1 outline-offset-[-3px] outline-[#A6552B]/40"
                                  }
                                }
                              },
                              {
                                "id": "jh-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] sm:text-5xl text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Materials, sizes, warranty and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#776C61]"
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
                    "id": "jh-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Is it real leather?",
                          "classes": ""
                        },
                        {
                          "label": "Will my laptop fit?",
                          "classes": ""
                        },
                        {
                          "label": "How does the stitching warranty work?",
                          "classes": ""
                        },
                        {
                          "label": "Can I add initials?",
                          "classes": ""
                        },
                        {
                          "label": "How fast is delivery?",
                          "classes": ""
                        }
                      ],
                      "multiple": false
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full lg:col-span-8"
                      },
                      "spacing": {
                        "classes": "p-0"
                      },
                      "accordion-items": {
                        "classes": "flex flex-col gap-3"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[20px] bg-[#EFE8DA] px-6 py-5 font-body text-base font-semibold text-[#2B211C] transition-colors hover:bg-[#F4E3D6]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#2B211C] !text-white"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#A6552B]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Every product page names its material: full-grain, top-grain, vegan (PU), canvas or nylon. Leather is always labelled as leather.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Each laptop bag and backpack lists the largest laptop it holds (13″, 14″ or 15.6″) and its inside measurements.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "If a seam, strap ring or zip fails within a year of normal use, bring it in or courier it to us and we repair it free.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Yes, on most leather bags and wallets. Add up to three letters in the order note; it adds one day to delivery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka 24-48 hours, 2-4 days elsewhere in Bangladesh, with cash on delivery and a 7-day exchange.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#776C61]"
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
            "id": "jh-cta",
            "type": "section",
            "options": {
              "anchor": "club"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-16 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "jh-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[36px] bg-[#A9CBE6] p-8 sm:p-12 lg:grid-cols-12 lg:p-16 outline-dashed outline-1 outline-offset-[-12px] outline-white/70"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-cta-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconLuggage",
                          "size": 200,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-10 right-4 flex -rotate-12 text-[#2B211C]/10"
                          }
                        }
                      },
                      {
                        "id": "jh-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-cta-k",
                            "type": "text",
                            "options": {
                              "text": "The Jhola Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-white/60 px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "A free clean & condition, every year.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-4xl leading-[1] text-[#2B211C] sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "jh-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Join free for a yearly leather spa for your bag, early access to new drops and members-only prices.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#2B211C]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Join the club",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2B211C] px-7 py-4 transition-colors hover:bg-[#A6552B]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-white whitespace-nowrap"
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
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "jh-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The whole workshop",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Bags",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every bag, wallet and travel piece, newest first. Open one for its material, litres and laptop fit.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-shop-grid",
                    "type": "postGrid",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jh-shop-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#A6552B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
                          },
                          "ellipsis": {
                            "classes": "px-1 text-gray-400"
                          },
                          "current": {
                            "classes": ""
                          },
                          "total": {
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
            "id": "jh-shop-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y border-gray-100 bg-white py-12"
              }
            },
            "children": [
              {
                "id": "jh-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Honest materials",
                          "description": "Leather labelled as leather",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Stitching warranty",
                          "description": "1 year, free repair",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Free initials",
                          "description": "On leather pieces",
                          "icon": "IconLetterCase",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-6 text-center md:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "flex flex-col items-center gap-2 p-4"
                      },
                      "title": {
                        "classes": "font-heading text-lg font-bold text-[#2B211C]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F4E3D6] text-[#A6552B] outline-dashed outline-1 outline-offset-[-4px] outline-[#A6552B]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-shop-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconShield",
                          "size": 22,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "jh-shop-promise-fb-t",
                        "type": "featureboxTitle",
                        "options": {
                          "tag": "h4"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "jh-shop-promise-fb-d",
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
        ],
        "meta": ""
      },
      {
        "title": "Product",
        "type": "product",
        "content": [
          {
            "id": "jh-pd",
            "type": "section",
            "options": {
              "anchor": "product"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-10 sm:py-14"
              }
            },
            "children": [
              {
                "id": "jh-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-pd-grid",
                    "type": "grid",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14"
                      },
                      "grid-item": {
                        "classes": "min-w-0"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#E5F0F8] via-white to-[#EFE8DA] p-4 shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-[28px] bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2B211C]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2B211C]!"
                              },
                              "pagination": {
                                "classes": ""
                              },
                              "dot": {
                                "classes": ""
                              },
                              "thumbnails": {
                                "classes": "mt-4"
                              },
                              "thumbnail": {
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#A6552B]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-pd-cats",
                            "type": "productCategories",
                            "options": {
                              "label": "",
                              "separator": " "
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-2"
                              },
                              "label": {
                                "classes": ""
                              },
                              "items": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "item": {
                                "classes": "rounded-full bg-[#E5F0F8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B211C] hover:bg-[#2B211C] hover:text-white"
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
                            "id": "jh-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#2B211C] sm:text-4xl tracking-tight"
                              }
                            }
                          },
                          {
                            "id": "jh-pd-rate",
                            "type": "productRatings",
                            "options": {
                              "hideIfEmpty": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 text-sm"
                              },
                              "star-rate": {
                                "classes": "flex items-center gap-0.5 text-amber-400"
                              },
                              "rate-count": {
                                "classes": "text-xs font-semibold text-gray-500"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "avg-rating": {
                                "classes": "font-body font-bold text-[#2B211C]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "jh-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-3"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-3xl font-bold text-[#2B211C] tracking-tight"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-bold text-[#2B211C] tracking-tight"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-bold text-[#2B211C] tracking-tight"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#A6552B] px-3 py-1 text-xs font-extrabold uppercase text-white"
                                  },
                                  "discount": {
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
                            "id": "jh-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#776C61]"
                              },
                              "excerpt": {
                                "classes": ""
                              },
                              "read-more": {
                                "classes": "hidden"
                              },
                              "read-more-icon": {
                                "classes": ""
                              },
                              "read-more-label": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "jh-pd-vars",
                            "type": "productVariations",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "attr-wrap": {
                                "classes": "flex flex-col gap-5"
                              },
                              "attr-item": {
                                "classes": ""
                              },
                              "attr-title": {
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#2B211C]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#2B211C] transition-colors hover:border-[#2B211C] hover:bg-[#E5F0F8]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#2B211C] !bg-[#E5F0F8] !text-[#3B2E27]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "jh-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out · ask us when it’s back",
                              "inStockText": "In stock · ships within 24 hours",
                              "outOfStockIcon": "IconPointFilled",
                              "inStockIcon": "IconPointFilled",
                              "iconSize": 16,
                              "stock_status": "instock"
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
                                "classes": "flex shrink-0 items-center"
                              },
                              "icon": {
                                "classes": "flex shrink-0 items-center"
                              },
                              "out-of-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#A6552B]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#2B211C]"
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
                            "id": "jh-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Bag",
                              "hideQuantity": false,
                              "hideButton": false,
                              "icon": "IconShoppingBag",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-stretch gap-3"
                              },
                              "quantity-wrapper": {
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#2B211C]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#EFE8DA]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#EFE8DA]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#A6552B] px-8 text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#8A4320]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "font-body text-lg font-bold whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "jh-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Stitching warranty",
                                  "description": "1 year",
                                  "icon": "IconShieldCheck",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free initials",
                                  "description": "On leather",
                                  "icon": "IconLetterCase",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Cash on delivery",
                                  "description": "Nationwide",
                                  "icon": "IconCash",
                                  "iconSize": ""
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-2 gap-6 text-center md:grid-cols-4"
                              },
                              "loop-item": {
                                "classes": "flex flex-col items-center gap-2 p-4"
                              },
                              "title": {
                                "classes": "font-body text-base font-bold text-[#2B211C]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5F0F8] text-[#2B211C]"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-perks-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconShield",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "jh-pd-perks-t",
                                "type": "featureboxTitle",
                                "options": {
                                  "tag": "h4"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "jh-pd-perks-d",
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
                          },
                          {
                            "id": "jh-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-sku",
                                "type": "productSku",
                                "options": {
                                  "label": "SKU:",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  },
                                  "label": {
                                    "classes": "font-semibold text-[#2B211C]"
                                  },
                                  "sku": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "jh-pd-brands",
                                "type": "productBrands",
                                "options": {
                                  "label": "Brand:",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap items-center gap-1.5"
                                  },
                                  "label": {
                                    "classes": "font-semibold text-[#2B211C]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#A6552B]"
                                  },
                                  "category-name": {
                                    "classes": ""
                                  },
                                  "separator": {
                                    "classes": ""
                                  }
                                }
                              },
                              {
                                "id": "jh-pd-tags",
                                "type": "productTags",
                                "options": {
                                  "label": "Tags:",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap items-center gap-1.5"
                                  },
                                  "label": {
                                    "classes": "font-semibold text-[#2B211C]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#A6552B]"
                                  },
                                  "category-name": {
                                    "classes": ""
                                  },
                                  "separator": {
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
            "id": "jh-pd-tabs-sec",
            "type": "section",
            "options": {
              "anchor": "details"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-16"
              }
            },
            "children": [
              {
                "id": "jh-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,33,28,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Size & Material",
                              "icon": "IconRuler2"
                            },
                            {
                              "label": "Delivery & Warranty",
                              "icon": "IconTruckDelivery"
                            },
                            {
                              "label": "Reviews",
                              "icon": "IconStarFilled"
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          },
                          "spacing": {
                            "classes": ""
                          },
                          "navs-items": {
                            "classes": "mb-8 flex gap-2"
                          },
                          "navs-scroll": {
                            "classes": "overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none]"
                          },
                          "navs-vertical": {
                            "classes": ""
                          },
                          "nav-item": {
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#EFE8DA] px-5 py-2.5 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#2B211C] !text-white shadow-md"
                          },
                          "nav-item-icon": {
                            "classes": "flex [&_svg]:size-4"
                          },
                          "nav-item-label": {
                            "classes": ""
                          },
                          "nav-item-content": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#2B211C] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#2B211C] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-bold [&_a]:text-[#A6552B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#C9A36A] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconRuler2",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Outside measurements, capacity in litres and laptop size are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Material is named honestly: full-grain, top-grain, vegan, canvas or nylon",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Leather is a natural material; grain and shade vary a little",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Condition leather twice a year to keep it supple",
                                      "icon": ""
                                    }
                                  ]
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex max-w-3xl flex-col gap-3 text-sm text-gray-600"
                                  },
                                  "li": {
                                    "classes": "flex list-none items-start gap-2"
                                  },
                                  "icon": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#2B211C]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Inside Dhaka: 24-48 hours",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Outside Dhaka: 2-4 days nationwide",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free initials on leather add one day",
                                      "icon": ""
                                    },
                                    {
                                      "text": "7-day exchange; 1-year stitching warranty",
                                      "icon": ""
                                    }
                                  ]
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex max-w-3xl flex-col gap-3 text-sm text-gray-600"
                                  },
                                  "li": {
                                    "classes": "flex list-none items-start gap-2"
                                  },
                                  "icon": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#2B211C]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jh-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-reviews",
                                "type": "commentsGrid",
                                "options": {
                                  "queryPrams": {
                                    "per_page": 20,
                                    "order": "DESC"
                                  }
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid w-full gap-8 lg:grid-cols-[1fr_380px] lg:items-start"
                                  },
                                  "loop-items": {
                                    "classes": "flex flex-col gap-4"
                                  },
                                  "loop-item": {
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#EFE8DA] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-pd-reviews-loop",
                                    "type": "commentsLoop",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-4"
                                      },
                                      "loop-items": {
                                        "classes": "flex flex-col gap-4"
                                      },
                                      "loop-item": {
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#EFE8DA] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jh-pd-reviews-av",
                                        "type": "commentAvatar",
                                        "options": {
                                          "linkToAuthor": false
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "row-span-3 h-12 w-12"
                                          },
                                          "link": {
                                            "classes": "block h-full w-full"
                                          },
                                          "image": {
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F4E3D6]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#2B211C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-pd-reviews-rate",
                                        "type": "commentRate",
                                        "options": {
                                          "iconSize": 14,
                                          "showValue": false
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "star-loop": {
                                            "classes": "flex items-center gap-0.5"
                                          },
                                          "star": {
                                            "classes": "text-amber-400"
                                          },
                                          "avg-rating": {
                                            "classes": "hidden"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jh-pd-reviews-co",
                                        "type": "commentContent",
                                        "options": {
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm leading-relaxed text-gray-600"
                                          },
                                          "paragraph": {
                                            "classes": "mb-2 last:mb-0"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "jh-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How does it carry? Tell others what fits inside and how it has held up.",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,33,28,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#2B211C]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#EFE8DA] px-4 py-3 text-sm text-[#2B211C] placeholder:text-gray-400 focus:border-[#2B211C] focus:outline-none focus:ring-2 focus:ring-[#2B211C]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#A6552B] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#8A4320] disabled:opacity-50"
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
            "id": "jh-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-16"
              }
            },
            "children": [
              {
                "id": "jh-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Carry it with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F4E3D6] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A6552B]"
                          }
                        }
                      },
                      {
                        "id": "jh-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2B211C] tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-pd-related-grid",
                    "type": "relatedProducts",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
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
                        "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-pd-related-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
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
        ],
        "meta": ""
      },
      {
        "title": "Categories Archive",
        "type": "categories",
        "content": [
          {
            "id": "jh-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Shop by type",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Handbags, backpacks, laptop, office and travel bags, wallets and school bags.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-cat-grid",
                    "type": "termsGrid",
                    "options": {
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
                        "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-cat-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#E5F0F8] transition-transform"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "image": {
                                "classes": "h-full w-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "jh-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                              }
                            }
                          },
                          {
                            "id": "jh-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " bags",
                              "singularSuffix": " bag",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11px] font-medium text-gray-400"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-cat-grid-pg",
                        "type": "termsGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#A6552B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
                          },
                          "ellipsis": {
                            "classes": "px-1 text-gray-400"
                          },
                          "current": {
                            "classes": ""
                          },
                          "total": {
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
        "title": "Categories Single",
        "type": "categories_single",
        "content": [
          {
            "id": "jh-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "jh-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " bags",
                      "singularSuffix": " bag"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B211C] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-cat1-grid",
                    "type": "postGrid",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jh-cat1-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#A6552B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
                          },
                          "ellipsis": {
                            "classes": "px-1 text-gray-400"
                          },
                          "current": {
                            "classes": ""
                          },
                          "total": {
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
        "title": "Tags Archive",
        "type": "tags",
        "content": [
          {
            "id": "jh-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group bags by size, material and occasion: mini, work, travel, leather, gifts and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-tag-grid",
                    "type": "termsGrid",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_tag",
                        "number": "36",
                        "per_page": "36",
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
                        "classes": "flex flex-wrap justify-center gap-3"
                      },
                      "loop-item": {
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#A6552B]"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-tag-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "flex flex-wrap justify-center gap-3"
                          },
                          "loop-item": {
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#A6552B]"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2B211C] group-hover:text-[#A6552B]"
                              }
                            }
                          },
                          {
                            "id": "jh-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#EFE8DA] px-2 py-0.5 text-[10px] font-bold text-[#776C61]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-tag-grid-pg",
                        "type": "termsGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#A6552B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
                          },
                          "ellipsis": {
                            "classes": "px-1 text-gray-400"
                          },
                          "current": {
                            "classes": ""
                          },
                          "total": {
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
        "title": "Tags Single",
        "type": "tags_single",
        "content": [
          {
            "id": "jh-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "jh-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " bags",
                      "singularSuffix": " bag"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B211C] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-tag1-grid",
                    "type": "postGrid",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jh-tag1-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#A6552B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
                          },
                          "ellipsis": {
                            "classes": "px-1 text-gray-400"
                          },
                          "current": {
                            "classes": ""
                          },
                          "total": {
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
        "title": "Brands Archive",
        "type": "brands",
        "content": [
          {
            "id": "jh-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Labels we love",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every bag brand on our shelves.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-brand-grid",
                    "type": "termsGrid",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "15",
                        "per_page": "15",
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
                        "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-brand-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#EFE8DA] p-3"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "image": {
                                "classes": "h-full w-full object-contain transition-transform group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "jh-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2B211C] group-hover:text-[#A6552B]"
                              }
                            }
                          },
                          {
                            "id": "jh-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " bags",
                              "singularSuffix": " bag",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11px] font-medium text-gray-400"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-brand-grid-pg",
                        "type": "termsGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#A6552B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
                          },
                          "ellipsis": {
                            "classes": "px-1 text-gray-400"
                          },
                          "current": {
                            "classes": ""
                          },
                          "total": {
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
        "title": "Brands Single",
        "type": "brands_single",
        "content": [
          {
            "id": "jh-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "jh-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " bags",
                      "singularSuffix": " bag"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B211C] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-brand1-grid",
                    "type": "postGrid",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jh-brand1-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#A6552B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
                          },
                          "ellipsis": {
                            "classes": "px-1 text-gray-400"
                          },
                          "current": {
                            "classes": ""
                          },
                          "total": {
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
        "title": "Blog Archive",
        "type": "blog",
        "content": [
          {
            "id": "jh-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The carry journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Care Guides & Packing Tips",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "How to condition leather, pack a cabin bag and choose the right size.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-blog-grid",
                    "type": "postGrid",
                    "options": {
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
                        "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-blog-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#EFE8DA]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "jh-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                  }
                                }
                              },
                              {
                                "id": "jh-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-gray-500"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#A6552B]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex transition-transform group-hover/rm:translate-x-1"
                                  },
                                  "read-more-label": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jh-blog-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "Previous",
                          "prevIcon": "",
                          "nextText": "Next",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B211C] transition-colors hover:border-[#A6552B] hover:text-[#A6552B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#A6552B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
                          },
                          "ellipsis": {
                            "classes": "px-1 text-gray-400"
                          },
                          "current": {
                            "classes": ""
                          },
                          "total": {
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
        "title": "Blog Single",
        "type": "blog_single",
        "content": [
          {
            "id": "jh-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#EFE8DA] via-white to-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-post-k",
                    "type": "text",
                    "options": {
                      "text": "The carry journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E5F0F8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B211C]"
                      }
                    }
                  },
                  {
                    "id": "jh-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#776C61]"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-post-author",
                        "type": "postAuthor",
                        "options": {
                          "linkTo": "",
                          "label": "By",
                          "showAvatar": true
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          },
                          "avatar": {
                            "classes": "h-8 w-8 rounded-full object-cover"
                          },
                          "label": {
                            "classes": ""
                          },
                          "name": {
                            "classes": "font-body font-bold text-[#2B211C]"
                          }
                        }
                      },
                      {
                        "id": "jh-post-dot",
                        "type": "text",
                        "options": {
                          "text": "•",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-gray-300"
                          }
                        }
                      },
                      {
                        "id": "jh-post-date",
                        "type": "postDate",
                        "options": {
                          "dateFormat": "MMMM DD, YYYY",
                          "linkTo": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                      },
                      "link": {
                        "classes": "block"
                      },
                      "image": {
                        "classes": "aspect-[16/9] w-full object-cover"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-post-body",
            "type": "section",
            "options": {
              "anchor": "content"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12"
              }
            },
            "children": [
              {
                "id": "jh-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#2B211C] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#2B211C] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-bold [&_a]:text-[#A6552B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#C9A36A] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-16"
              }
            },
            "children": [
              {
                "id": "jh-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#2B211C] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-post-cmt",
                    "type": "commentsGrid",
                    "options": {
                      "queryPrams": {
                        "per_page": 20,
                        "order": "DESC"
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid w-full gap-8 lg:grid-cols-[1fr_380px] lg:items-start"
                      },
                      "loop-items": {
                        "classes": "flex flex-col gap-4"
                      },
                      "loop-item": {
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#EFE8DA] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-post-cmt-loop",
                        "type": "commentsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4"
                          },
                          "loop-items": {
                            "classes": "flex flex-col gap-4"
                          },
                          "loop-item": {
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#EFE8DA] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-post-cmt-av",
                            "type": "commentAvatar",
                            "options": {
                              "linkToAuthor": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "row-span-3 h-12 w-12"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "image": {
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F4E3D6]"
                              }
                            }
                          },
                          {
                            "id": "jh-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2B211C]"
                              }
                            }
                          },
                          {
                            "id": "jh-post-cmt-co",
                            "type": "commentContent",
                            "options": {
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-gray-600"
                              },
                              "paragraph": {
                                "classes": "mb-2 last:mb-0"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jh-post-cmt-form",
                        "type": "commentsForm",
                        "options": {
                          "showRate": false,
                          "rateLabel": "Your rating",
                          "commentLabel": "Leave a comment",
                          "placeholder": "",
                          "submitLabel": "Post comment",
                          "loadingLabel": "Please wait.",
                          "loginRequiredText": "Please log in to leave a review.",
                          "successText": "Thank you! Your note has been received."
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,33,28,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B211C]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#EFE8DA] px-4 py-3 text-sm text-[#2B211C] placeholder:text-gray-400 focus:border-[#2B211C] focus:outline-none focus:ring-2 focus:ring-[#2B211C]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#A6552B] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#8A4320] disabled:opacity-50"
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
            "id": "jh-post-more",
            "type": "section",
            "options": {
              "anchor": "more"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16"
              }
            },
            "children": [
              {
                "id": "jh-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More from the Journal",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#2B211C] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-post-more-grid",
                    "type": "postGrid",
                    "options": {
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
                        "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-post-more-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,33,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#EFE8DA]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "jh-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2B211C]"
                                  }
                                }
                              },
                              {
                                "id": "jh-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
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
        "title": "Account",
        "type": "account",
        "content": [
          {
            "id": "jh-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-dashed border-[#DCD2C0] bg-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jh-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#F4E3D6] px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4320]"
                      }
                    }
                  },
                  {
                    "id": "jh-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B211C] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, repairs and exchanges, and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#776C61] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jh-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-12"
              }
            },
            "children": [
              {
                "id": "jh-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#2B211C] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#C9A36A]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white tracking-tight"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#A6552B]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#A6552B]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#A6552B]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "jh-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jh-acc-3",
                            "type": "grid",
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-1 gap-8 lg:grid-cols-2"
                              },
                              "grid-item": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jh-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,33,28,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#A6552B] focus:outline-none focus:ring-2 focus:ring-[#A6552B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#A6552B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8A4320] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6552B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "jh-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,33,28,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#A6552B] focus:outline-none focus:ring-2 focus:ring-[#A6552B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#A6552B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8A4320] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6552B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              }
                            ],
                            "options": []
                          }
                        ]
                      },
                      {
                        "id": "jh-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "jh-acc-9",
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
                              "spacing": {
                                "classes": ""
                              },
                              "navs-items": {
                                "classes": "mb-8 flex gap-2"
                              },
                              "navs-scroll": {
                                "classes": "overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none]"
                              },
                              "navs-vertical": {
                                "classes": ""
                              },
                              "nav-item": {
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#EFE8DA] px-5 py-2.5 font-body text-sm font-semibold text-[#2B211C] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#2B211C] !text-white shadow-md"
                              },
                              "nav-item-icon": {
                                "classes": "flex [&_svg]:size-4"
                              },
                              "nav-item-label": {
                                "classes": ""
                              },
                              "nav-item-content": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jh-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#A6552B]/10 text-[#A6552B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jh-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#A6552B] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "jh-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#A6552B]/10 text-[#A6552B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "jh-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#A6552B]/40 hover:bg-[#A6552B]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#A6552B]/10 text-[#A6552B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "jh-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#A6552B]/10 text-[#A6552B]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#A6552B] focus:outline-none focus:ring-2 focus:ring-[#A6552B]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#A6552B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8A4320] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6552B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6552B]/30 disabled:cursor-not-allowed disabled:opacity-50"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              }
                            ]
                          }
                        ],
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
        ],
        "meta": ""
      },
      {
        "title": "Thank you",
        "type": "thank_you",
        "content": [
          {
            "id": "jh-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#EFE8DA] via-white to-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(43,33,28,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#E5F0F8] text-[#2B211C]"
                          }
                        }
                      },
                      {
                        "id": "jh-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F4E3D6] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A6552B]"
                          }
                        }
                      },
                      {
                        "id": "jh-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You. Your Bag Is on Its Way",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2B211C] sm:text-4xl tracking-tight"
                          }
                        }
                      },
                      {
                        "id": "jh-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re checking and wrapping your order. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#776C61] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "jh-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order by SMS",
                              "icon": ""
                            },
                            {
                              "text": "Your bag is checked, stamped with your initials if you asked, and wrapped",
                              "icon": ""
                            },
                            {
                              "text": "Delivered in 24-48 hours inside Dhaka: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[28px] bg-[#EFE8DA] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#A6552B]"
                          },
                          "icon": {
                            "classes": ""
                          },
                          "text": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "jh-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-ty-shop",
                            "type": "button",
                            "options": {
                              "text": "Keep Shopping",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#A6552B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#8A4320] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "jh-ty-orders",
                            "type": "button",
                            "options": {
                              "text": "My Orders",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconPackage",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2B211C] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2B211C] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2B211C] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#2B211C] whitespace-nowrap group-hover:text-white"
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
            "id": "jh-ty-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y border-gray-100 bg-white py-12"
              }
            },
            "children": [
              {
                "id": "jh-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Honest materials",
                          "description": "Leather labelled as leather",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Stitching warranty",
                          "description": "1 year, free repair",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Free initials",
                          "description": "On leather pieces",
                          "icon": "IconLetterCase",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-6 text-center md:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "flex flex-col items-center gap-2 p-4"
                      },
                      "title": {
                        "classes": "font-heading text-lg font-bold text-[#2B211C]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F4E3D6] text-[#A6552B] outline-dashed outline-1 outline-offset-[-4px] outline-[#A6552B]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-ty-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconShield",
                          "size": 22,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "jh-ty-promise-fb-t",
                        "type": "featureboxTitle",
                        "options": {
                          "tag": "h4"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "jh-ty-promise-fb-d",
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
        ],
        "meta": ""
      },
      {
        "title": "404",
        "type": "404",
        "content": [
          {
            "id": "jh-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#EFE8DA] via-white to-[#EFE8DA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jh-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-bold text-[#A6552B] sm:text-9xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFE8DA] text-[#2B211C]"
                      }
                    }
                  },
                  {
                    "id": "jh-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Packed Up and Left",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#2B211C] sm:text-4xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "jh-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the bag may have sold out. Head back home or browse the whole shop.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#776C61] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "jh-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-nf-home",
                        "type": "button",
                        "options": {
                          "text": "Back to Home",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#A6552B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(166,85,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#8A4320] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-white whitespace-nowrap"
                          }
                        }
                      },
                      {
                        "id": "jh-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Bags",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2B211C] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2B211C] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B211C] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#2B211C] whitespace-nowrap group-hover:text-white"
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
            "id": "jh-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EFE8DA] py-16"
              }
            },
            "children": [
              {
                "id": "jh-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jh-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#C9A36A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B211C]"
                          }
                        }
                      },
                      {
                        "id": "jh-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2B211C] sm:text-4xl tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jh-nf-grid",
                    "type": "postGrid",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
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
                        "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jh-nf-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "jh-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[26px] bg-[#E5DCCB] after:pointer-events-none after:absolute after:inset-2 after:rounded-[20px] after:border after:border-dashed after:border-white/0 after:transition-colors after:duration-300 after:content-[''] group-hover:after:border-white/80"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#A9CBE6] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-[#2B211C]"
                                      },
                                      "discount": {
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
                                "id": "jh-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jh-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#A6552B]"
                                      },
                                      "rate-count": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "icon": {
                                        "classes": ""
                                      },
                                      "avg-rating": {
                                        "classes": "text-[10px] font-semibold text-gray-400"
                                      },
                                      "total-reviews": {
                                        "classes": "text-[10px] text-gray-400"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-semibold text-[#2B211C] transition-colors group-hover:text-[#A6552B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jh-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] text-[#776C61]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "hidden"
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
                              }
                            ]
                          },
                          {
                            "id": "jh-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jh-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#776C61] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#2B211C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#A6552B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#A6552B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jh-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B211C] text-white transition-colors hover:bg-[#A6552B]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only"
                                  },
                                  "button-icon": {
                                    "classes": "flex items-center"
                                  },
                                  "quantity-wrapper": {
                                    "classes": "hidden"
                                  },
                                  "quantity-decrease": {
                                    "classes": ""
                                  },
                                  "quantity-input": {
                                    "classes": ""
                                  },
                                  "quantity-increase": {
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
        ],
        "meta": ""
      }
    ]
  }
];

export default template;
