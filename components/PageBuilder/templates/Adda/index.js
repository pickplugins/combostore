/**
 * Template: Adda Coffee.
 *
 * A small-batch coffee roaster and café shop (adda: the long, unhurried
 * Bengali conversation over a cup): single origins, espresso blends, filter,
 * cold brew, decaf, brewing gear, mugs and gifts. Like the other complete
 * templates here it carries all sixteen page types - Header, Footer, Home,
 * Shop, Product, the six taxonomy archives, Blog Archive, Blog Single,
 * Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to ad-, palette remapped, copy
 * rewritten); the Header is restyled and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * A café letterboard: the promo line on a tomato awning, then the bar in
 * espresso felt with fine horizontal grooves (ad-hdr-board). The logo mark is
 * a tomato disc holding an espresso bean (before:/after: on the brand mark),
 * the menu is set in JetBrains Mono capitals with each slot numbered 01-08
 * (before:content on each item's own `link` classes), and square sticker-style
 * account and cart buttons sit on the right. A zigzag awning edge
 * (ad-hdr-awning) hangs over the top of the page.
 *
 * THE STYLE
 *
 * Retro café meets sticker graphics: 2px espresso outlines, hard offset
 * shadows that buttons press into on hover, dotted-grid paper, mono receipt
 * labels and Anton capitals. Coffee beans are drawn in CSS (an oval with its
 * crease) in five roast colours: light #C98B4E, medium-light #A86B37, medium
 * #8A5228, medium-dark #5E3519, dark #3A1F10.
 *
 * DESIGN
 *
 *   espresso  #2A1810  primary: header felt, outlines, shadows, dark cards  #1C100A deep  #EFE4D6 tint
 *   tomato    #D9472B  secondary: awning, buttons, prices, the roastery band  #B8361E dark  #FBE3DA tint
 *   caramel   #E3A857  accent: hero panel, menu numbers, badges            #FAEBD2 tint
 *   oat #F4ECE0   kraft #EADFCD   ink #1E1611   muted #75685C   line #E0D3C0   wood frame #8A5A33
 *
 * Fonts (template meta): Anton (headings, in capitals; one weight, so
 * headings carry font-normal), Outfit (body), JetBrains Mono via
 * `font-['JetBrains_Mono']` for labels, menu and prices on the board, and
 * Baloo Da 2 via `font-['Baloo_Da_2']` for the Bangla lines.
 *
 * Product cards are stickers: a 2px espresso outline on white that lifts onto
 * a hard shadow on hover, a kraft photo well with a dashed label line, a
 * tilted caramel discount tag, the name, one mono excerpt line (use it for
 * origin, process and roast, e.g. "Ethiopia · Washed · Light"), the price in
 * Anton and a tomato "Add" button.
 *
 * HOME
 *
 *   Sticker hero (bag and cup art, spinning "freshly roasted" badge, price
 *   tag) - pick your roast, the light-to-dark scale (#roast) - this week's
 *   roast - today's board, a framed letterboard price list (#menu-board) -
 *   the regulars' favourites (#bestsellers) - brew guide with grind-size
 *   scales (#brew-guide) - single origins - farm to cup in ten days
 *   (#roastery) - espresso blends - brewing gear - gift sets & mugs - reviews
 *   - the adda notes (#journal) - FAQ (#faq) - subscription (#subscribe).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: single-origin, espresso-blends, filter-coffee,
 *     cold-brew, decaf, brewing-gear, mugs-merch, gift-sets. Tag slugs:
 *     fresh-roast, bestseller, light-roast, medium-light-roast, medium-roast,
 *     medium-dark-roast, dark-roast. Origins/farms can be product_brand terms.
 *   - The prices on the menu board, the hero price tag (House blend ৳690),
 *     "Batch 214" and the roast day (Tuesday) are sample copy.
 *   - Brew ratios, times and grind sizes are common guidance; adjust them.
 *   - Contact details, promo code ADDA10, the 10% offer, the ৳1,500 free-
 *     delivery threshold, the subscription, "12,000+ coffee drinkers" and the
 *     six reviews are sample copy.
 */

var template = [
  {
    "name": "Adda Coffee",
    "description": "Small-batch coffee roaster and café shop in espresso, tomato and caramel on oat; Anton, Outfit, JetBrains Mono and Baloo Da 2: a café-letterboard header with numbered menu slots and a zigzag awning edge, a sticker-style hero with the bag, a spinning roast badge and a price tag, a light-to-dark roast scale, this week’s roast, a framed menu board, the regulars’ favourites, a brew guide with grind-size scales, single origins, a farm-to-cup band, espresso blends, gear, gifts, reviews, roastery notes, FAQ and a subscription card. All 16 pages.",
    "thumbnail": "/templates/adda.svg",
    "meta": {
      "fonts": [
        {
          "family": "Anton",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Anton&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Outfit",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "JetBrains Mono",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Baloo Da 2",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500;600&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Anton",
        "body": "Outfit"
      },
      "colors": {
        "primary": "#2A1810",
        "secondary": "#D9472B",
        "accent": "#E3A857",
        "background": "#F4ECE0",
        "foreground": "#1E1611",
        "muted": "#75685C"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "ad-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full"
              }
            },
            "children": [
              {
                "id": "ad-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#D9472B] px-4 py-2 text-center font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.12em] text-white"
                  }
                },
                "children": [
                  {
                    "id": "ad-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Fresh roast every Tuesday · Free delivery over ৳1,500 · 10% off your first bag with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "ad-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "ADDA10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-[4px] bg-[#2A1810] px-2 py-0.5 font-['JetBrains_Mono'] text-[11px] font-bold tracking-wider text-[#E3A857]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Brew guide",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#brew-guide",
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
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.12em] text-white underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "ad-hdr-board",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#2A1810] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.05)_0_2px,transparent_2px_9px)] border-b-2 border-[#E3A857]/40"
                  }
                },
                "children": [
                  {
                    "id": "ad-hdr-bar",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-hdr-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-[76px] items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-hdr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2.5 xl:gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-hdr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-12 w-12 shrink-0 rounded-full border-2 border-[#F4ECE0] bg-[#D9472B] before:absolute before:left-1/2 before:top-1/2 before:h-7 before:w-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[25deg] before:rounded-[50%] before:bg-[#2A1810] before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:h-5 after:w-[3px] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-[25deg] after:rounded-full after:bg-[#D9472B] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ad-hdr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-hdr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Adda",
                                      "src": "https://placehold.co/200x64?text=Adda",
                                      "altText": "Adda Coffee Roasters",
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
                                        "classes": "font-heading text-[30px] uppercase leading-none tracking-[0.04em] text-[#F4ECE0]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-hdr-brand-tag",
                                    "type": "text",
                                    "options": {
                                      "text": "Coffee roasters · Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 block font-['JetBrains_Mono'] text-[9px] font-medium uppercase leading-none tracking-[0.2em] text-[#E3A857]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ad-hdr-menu",
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
                                "classes": "flex items-center gap-3 xl:gap-6"
                              },
                              "menu-item": {
                                "classes": ""
                              },
                              "sub-menu": {
                                "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                              },
                              "menu-link": {
                                "classes": "flex items-start gap-1 whitespace-nowrap font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.06em] xl:text-[12px] xl:tracking-[0.12em] text-[#F4ECE0]/85 transition-colors hover:text-[#E3A857]"
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
                                "id": "ad-hdr-menu-i1",
                                "type": "menuItem",
                                "options": {
                                  "label": "Espresso",
                                  "url": "/categories/espresso-blends"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "before:content-['01'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#E3A857]"
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
                                "id": "ad-hdr-menu-i2",
                                "type": "menuItem",
                                "options": {
                                  "label": "Filter",
                                  "url": "/categories/filter-coffee"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "before:content-['02'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#E3A857]"
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
                                "id": "ad-hdr-menu-i3",
                                "type": "menuItem",
                                "options": {
                                  "label": "Single origin",
                                  "url": "/categories/single-origin"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "before:content-['03'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#E3A857]"
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
                                "id": "ad-hdr-menu-i4",
                                "type": "menuItem",
                                "options": {
                                  "label": "Cold brew",
                                  "url": "/categories/cold-brew"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "before:content-['04'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#E3A857]"
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
                                "id": "ad-hdr-menu-i5",
                                "type": "menuItem",
                                "options": {
                                  "label": "Decaf",
                                  "url": "/categories/decaf"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "before:content-['05'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#E3A857]"
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
                                "id": "ad-hdr-menu-i6",
                                "type": "menuItem",
                                "options": {
                                  "label": "Gear",
                                  "url": "/categories/brewing-gear"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "before:content-['06'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#E3A857]"
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
                                "id": "ad-hdr-menu-i7",
                                "type": "menuItem",
                                "options": {
                                  "label": "Mugs",
                                  "url": "/categories/mugs-merch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "before:content-['07'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#E3A857]"
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
                                "id": "ad-hdr-menu-i8",
                                "type": "menuItem",
                                "options": {
                                  "label": "Gifts",
                                  "url": "/categories/gift-sets"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "label": {
                                    "classes": ""
                                  },
                                  "link": {
                                    "classes": "before:content-['08'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#E3A857]"
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
                            "id": "ad-hdr-actions",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-hdr-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search coffee, gear...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden w-52 rounded-[10px] border-2 border-white/20 bg-white/5 py-0.5 pl-1 pr-3 transition-all focus-within:border-white/50 md:block lg:hidden 2xl:block"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-['JetBrains_Mono'] text-xs text-white placeholder:text-white/45 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex h-7 w-7 items-center justify-center text-[#E3A857]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#2A1810] focus:outline-none focus:ring-2 focus:ring-[#2A1810]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#2A1810]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#2A1810]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#2A1810] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1C100A]"
                                  }
                                }
                              },
                              {
                                "id": "ad-hdr-account",
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
                                    "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border-2 border-white/25 text-white transition-colors hover:border-white/60"
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
                                "id": "ad-hdr-cart",
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
                                    "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border-2 border-[#F4ECE0] bg-[#D9472B] text-white shadow-[3px_3px_0_#E3A857] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#E3A857]"
                                  },
                                  "trigger-badge": {
                                    "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#2A1810] px-1 text-[10px] font-bold text-white"
                                  },
                                  "header": {
                                    "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F4ECE0] px-5 py-4"
                                  },
                                  "title": {
                                    "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#1E1611]"
                                  },
                                  "title-icon": {
                                    "classes": "text-[#2A1810]"
                                  },
                                  "count-badge": {
                                    "classes": "rounded-full bg-[#2A1810] px-2 py-0.5 text-xs font-bold text-white"
                                  },
                                  "trigger": {
                                    "classes": "flex items-center gap-2 rounded-lg bg-[#2A1810] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1C100A]"
                                  },
                                  "close-button": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1810]/30"
                                  },
                                  "coupon-code-input": {
                                    "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#2A1810] focus:outline-none focus:ring-2 focus:ring-[#2A1810]/15"
                                  },
                                  "coupon-apply": {
                                    "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#2A1810] px-4 py-2 text-sm font-medium text-[#2A1810] transition-colors hover:bg-[#2A1810] hover:text-white disabled:opacity-60"
                                  },
                                  "checkout-button": {
                                    "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2A1810] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1C100A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1810]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "ad-hdr-mobile",
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
                                    "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border-2 border-white/25 text-white"
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
                                    "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F4ECE0] p-2 text-[#1E1611] transition-colors hover:bg-[#2A1810] hover:text-white"
                                  },
                                  "popover-content": {
                                    "classes": "flex flex-col gap-6 p-6 pt-16"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-hdr-m-brand",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group flex shrink-0 items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ad-hdr-m-brand-mark",
                                        "type": "text",
                                        "options": {
                                          "text": "",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative h-12 w-12 shrink-0 rounded-full border-2 border-[#F4ECE0] bg-[#D9472B] before:absolute before:left-1/2 before:top-1/2 before:h-7 before:w-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[25deg] before:rounded-[50%] before:bg-[#2A1810] before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:h-5 after:w-[3px] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-[25deg] after:rounded-full after:bg-[#D9472B] after:content-['']"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ad-hdr-m-brand-words",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ad-hdr-m-brand-logo",
                                            "type": "logo",
                                            "options": {
                                              "logoType": "text",
                                              "logoText": "Adda",
                                              "src": "https://placehold.co/200x64?text=Adda",
                                              "altText": "Adda Coffee Roasters",
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
                                                "classes": "font-heading text-[30px] uppercase leading-none tracking-[0.04em] text-[#2A1810]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ad-hdr-m-brand-tag",
                                            "type": "text",
                                            "options": {
                                              "text": "Coffee roasters · Dhaka",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mt-1 block font-['JetBrains_Mono'] text-[9px] font-medium uppercase leading-none tracking-[0.2em] text-[#D9472B]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "ad-hdr-m-search",
                                    "type": "quickSearch",
                                    "options": {
                                      "placeholder": "Search coffee...",
                                      "iconPosition": "",
                                      "icon": "IconSearch"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full border border-gray-200 bg-[#F4ECE0] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#D9472B] focus-within:ring-2 focus-within:ring-[#D9472B]/20 w-full"
                                      },
                                      "input-wrapper": {
                                        "classes": "flex items-center gap-2"
                                      },
                                      "input-search": {
                                        "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1E1611] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                      },
                                      "icon": {
                                        "classes": "flex items-center text-[#75685C]"
                                      },
                                      "filter-select": {
                                        "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#2A1810] focus:outline-none focus:ring-2 focus:ring-[#2A1810]/15"
                                      },
                                      "result-title": {
                                        "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#2A1810]"
                                      },
                                      "result-price": {
                                        "classes": "font-semibold text-[#2A1810]"
                                      },
                                      "add-button": {
                                        "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#2A1810] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1C100A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-hdr-m-menu",
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
                                        "classes": "flex items-start gap-2 border-b-2 border-dashed border-[#E0D3C0] py-3.5 font-['JetBrains_Mono'] text-sm font-bold uppercase tracking-[0.12em] text-[#1E1611] transition-colors hover:text-[#D9472B]"
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
                                        "id": "ad-hdr-m-menu-i1",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Espresso",
                                          "url": "/categories/espresso-blends"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "before:content-['01'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#D9472B]"
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
                                        "id": "ad-hdr-m-menu-i2",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Filter",
                                          "url": "/categories/filter-coffee"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "before:content-['02'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#D9472B]"
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
                                        "id": "ad-hdr-m-menu-i3",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Single origin",
                                          "url": "/categories/single-origin"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "before:content-['03'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#D9472B]"
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
                                        "id": "ad-hdr-m-menu-i4",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Cold brew",
                                          "url": "/categories/cold-brew"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "before:content-['04'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#D9472B]"
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
                                        "id": "ad-hdr-m-menu-i5",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Decaf",
                                          "url": "/categories/decaf"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "before:content-['05'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#D9472B]"
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
                                        "id": "ad-hdr-m-menu-i6",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Gear",
                                          "url": "/categories/brewing-gear"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "before:content-['06'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#D9472B]"
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
                                        "id": "ad-hdr-m-menu-i7",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Mugs",
                                          "url": "/categories/mugs-merch"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "before:content-['07'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#D9472B]"
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
                                        "id": "ad-hdr-m-menu-i8",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Gifts",
                                          "url": "/categories/gift-sets"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "before:content-['08'] before:text-[9px] before:font-bold before:tracking-normal before:text-[#D9472B]"
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
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ad-hdr-awning",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none h-2 w-full bg-[linear-gradient(135deg,#2A1810_25%,transparent_25%),linear-gradient(225deg,#2A1810_25%,transparent_25%)] bg-[length:16px_16px] bg-repeat-x"
                  }
                },
                "children": []
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
            "id": "ad-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1E1611] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "ad-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "ad-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[24px] border-2 border-[#2A1810] bg-[#D9472B] p-8 shadow-[6px_6px_0_#2A1810] sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Coffee subscription",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#FAEBD2]"
                              }
                            }
                          },
                          {
                            "id": "ad-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Never run out of beans",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "ad-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "A fresh bag every week, two weeks or month. Skip or pause any time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Subscribe",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconRepeat",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] border-2 border-[#2A1810] bg-white px-6 py-3 shadow-[4px_4px_0_#2A1810] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#2A1810]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#2A1810]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-[13px] font-bold uppercase tracking-wider text-[#2A1810] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ad-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "ad-ftr-grid",
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
                        "id": "ad-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-12 w-12 shrink-0 rounded-full border-2 border-[#F4ECE0] bg-[#D9472B] before:absolute before:left-1/2 before:top-1/2 before:h-7 before:w-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[25deg] before:rounded-[50%] before:bg-[#2A1810] before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:h-5 after:w-[3px] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-[25deg] after:rounded-full after:bg-[#D9472B] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ad-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Adda",
                                      "src": "https://placehold.co/200x64?text=Adda",
                                      "altText": "Adda Coffee Roasters",
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
                                        "classes": "font-heading text-[30px] uppercase leading-none tracking-[0.04em] text-[#F4ECE0]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ad-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Small-batch coffee roasted every Tuesday in Dhaka: single origins, espresso blends, cold brew and the gear to brew it, delivered across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "ad-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2A1810]"
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
                                "id": "ad-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2A1810]"
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
                                "id": "ad-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2A1810]"
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
                                "id": "ad-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2A1810]"
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
                        "id": "ad-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ad-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Coffee",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Single Origins",
                                  "icon": "",
                                  "slug": "/categories/single-origin"
                                },
                                {
                                  "text": "Espresso Blends",
                                  "icon": "",
                                  "slug": "/categories/espresso-blends"
                                },
                                {
                                  "text": "Filter Coffee",
                                  "icon": "",
                                  "slug": "/categories/filter-coffee"
                                },
                                {
                                  "text": "Cold Brew",
                                  "icon": "",
                                  "slug": "/categories/cold-brew"
                                },
                                {
                                  "text": "Decaf",
                                  "icon": "",
                                  "slug": "/categories/decaf"
                                },
                                {
                                  "text": "Brewing Gear",
                                  "icon": "",
                                  "slug": "/categories/brewing-gear"
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
                                "classes": "transition-colors hover:text-[#E3A857]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E3A857]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ad-ftr-ll-care",
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
                                  "text": "Brew Guide",
                                  "icon": "",
                                  "slug": "/#brew-guide"
                                },
                                {
                                  "text": "Delivery & FAQ",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Adda Notes",
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
                                "classes": "transition-colors hover:text-[#E3A857]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E3A857]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-ftr-contact-h",
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
                            "id": "ad-ftr-address",
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
                                "icon": "IconMapPin",
                                "label": "Roastery",
                                "value": "Dhaka, Bangladesh",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#E3A857]"
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
                                "classes": "shrink-0 text-[#2A1810]"
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
                "id": "ad-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "ad-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Adda Coffee Roasters. All rights reserved. Roasted for long conversations.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "ad-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-medium"
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
            "id": "ad-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-12 lg:pb-24 lg:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-start gap-6 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-hero-live",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 rounded-full border-2 border-[#2A1810] bg-white px-3 py-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-hero-live-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2.5 w-2.5 animate-pulse rounded-full bg-[#D9472B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ad-hero-live-t",
                                "type": "text",
                                "options": {
                                  "text": "Roasting today · Batch 214",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A1810]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-hero-bn",
                            "type": "text",
                            "options": {
                              "text": "এক কাপ কফি, অনেক আড্ডা",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Baloo_Da_2'] text-2xl font-semibold text-[#D9472B]"
                              }
                            }
                          },
                          {
                            "id": "ad-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Roasted for long conversations.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-6xl leading-[0.92] text-[#1E1611] sm:text-7xl xl:text-[88px]"
                              }
                            }
                          },
                          {
                            "id": "ad-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Small-batch coffee roasted every week in Dhaka: single origins from Ethiopia to the Bandarban hills, espresso blends for milk drinks, and the gear to brew them at home.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-lg leading-relaxed text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop coffee",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] border-2 border-[#2A1810] bg-[#D9472B] px-6 py-3 shadow-[4px_4px_0_#2A1810] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#2A1810]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-['JetBrains_Mono'] text-[13px] font-bold uppercase tracking-wider text-white whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "ad-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Find your roast",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#roast",
                                  "target": "",
                                  "icon": "IconFlame",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] border-2 border-[#2A1810] bg-white px-6 py-3 shadow-[4px_4px_0_#2A1810] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#2A1810]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#2A1810]"
                                  },
                                  "label": {
                                    "classes": "font-['JetBrains_Mono'] text-[13px] font-bold uppercase tracking-wider text-[#2A1810] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-hero-receipt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-2 grid w-full max-w-md grid-cols-3 border-y-2 border-dashed border-[#2A1810]/40 py-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-hero-fact-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-hero-fact-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Roasted",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.18em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-hero-fact-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Every Tuesday",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-hero-fact-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-l-2 border-dashed border-[#2A1810]/20 pl-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-hero-fact-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Ground",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.18em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-hero-fact-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "For your brewer",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-hero-fact-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-l-2 border-dashed border-[#2A1810]/20 pl-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-hero-fact-3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Delivered",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.18em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-hero-fact-3-v",
                                    "type": "text",
                                    "options": {
                                      "text": "In 24-48 hrs",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
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
                        "id": "ad-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-hero-panel",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mx-auto w-full max-w-[560px] rounded-[28px] border-2 border-[#2A1810] bg-[#E3A857] p-6 shadow-[8px_8px_0_#2A1810] sm:p-10"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-hero-panel-dots",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(rgba(42,24,16,0.18)_1.5px,transparent_2px)] bg-[length:22px_22px]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ad-hero-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/adda-hero.svg",
                                  "altText": "A kraft bag of Adda house blend coffee beside a takeaway cup with a tomato-red sleeve and scattered coffee beans",
                                  "link": "/shop",
                                  "newTab": false
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  },
                                  "link": {
                                    "classes": "block"
                                  },
                                  "img": {
                                    "classes": "h-auto w-full transition-transform duration-500 hover:-rotate-2 hover:scale-[1.02]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-hero-badge",
                            "type": "image",
                            "options": {
                              "src": "/templates/adda-badge.svg",
                              "altText": "Freshly roasted every Tuesday",
                              "link": "",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -left-2 -top-8 w-28 sm:-left-6 sm:w-36"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "img": {
                                "classes": "h-auto w-full animate-[spin_24s_linear_infinite]"
                              }
                            }
                          },
                          {
                            "id": "ad-hero-tag",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -bottom-6 right-2 flex rotate-[-5deg] flex-col items-start rounded-[12px] border-2 border-[#2A1810] bg-white px-4 py-3 shadow-[4px_4px_0_#2A1810] sm:right-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-hero-tag-k",
                                "type": "text",
                                "options": {
                                  "text": "House blend · 250 g",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.16em] text-[#75685C]"
                                  }
                                }
                              },
                              {
                                "id": "ad-hero-tag-v",
                                "type": "text",
                                "options": {
                                  "text": "৳690",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal uppercase text-3xl leading-none text-[#D9472B]"
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
            "id": "ad-roast",
            "type": "section",
            "options": {
              "anchor": "roast"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y-2 border-[#2A1810] bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-roast-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-roast-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-roast-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-roast-label",
                            "type": "text",
                            "options": {
                              "text": "Pick your roast",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-h",
                            "type": "heading",
                            "options": {
                              "text": "Light to dark, find your cup",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-sub",
                            "type": "text",
                            "options": {
                              "text": "Lighter roasts taste of the farm; darker roasts taste of the roaster. Every bag is labelled on this scale.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ad-roast-scale",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative mb-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-roast-bar",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "h-3 w-full rounded-full border-2 border-[#2A1810] bg-[linear-gradient(90deg,#C98B4E,#A86B37,#8A5228,#5E3519,#3A1F10)]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ad-roast-ticks",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-2 flex justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-roast-tick-1",
                            "type": "text",
                            "options": {
                              "text": "Farm",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-tick-2",
                            "type": "text",
                            "options": {
                              "text": "Balance",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-tick-3",
                            "type": "text",
                            "options": {
                              "text": "Roaster",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#75685C]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ad-roast-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-roast-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-5 pt-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0_#2A1810] "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-roast-1-n",
                            "type": "text",
                            "options": {
                              "text": "01",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 font-['JetBrains_Mono'] text-[10px] font-bold text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-1-bean",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-14 -rotate-[25deg] relative aspect-[3/4] rounded-[50%] bg-[#C98B4E] shadow-[inset_-4px_-6px_0_rgba(0,0,0,0.22)] after:absolute after:left-1/2 after:top-[14%] after:h-[72%] after:w-[12%] after:-translate-x-1/2 after:rounded-full after:bg-black/40 after:content-[''] transition-transform duration-500 group-hover:rotate-[20deg]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ad-roast-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Light",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/light-roast",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center justify-center"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-heading font-normal uppercase text-2xl text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-1-notes",
                            "type": "text",
                            "options": {
                              "text": "Bright, fruity, tea-like",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-1-best",
                            "type": "text",
                            "options": {
                              "text": "Pour-over · AeroPress",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto rounded-full bg-white px-3 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.1em] text-[#2A1810] ring-1 ring-[#E0D3C0]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-roast-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-5 pt-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0_#2A1810] "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-roast-2-n",
                            "type": "text",
                            "options": {
                              "text": "02",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 font-['JetBrains_Mono'] text-[10px] font-bold text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-2-bean",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-14 -rotate-[25deg] relative aspect-[3/4] rounded-[50%] bg-[#A86B37] shadow-[inset_-4px_-6px_0_rgba(0,0,0,0.22)] after:absolute after:left-1/2 after:top-[14%] after:h-[72%] after:w-[12%] after:-translate-x-1/2 after:rounded-full after:bg-black/40 after:content-[''] transition-transform duration-500 group-hover:rotate-[20deg]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ad-roast-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Medium-light",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/medium-light-roast",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center justify-center"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-heading font-normal uppercase text-2xl text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-2-notes",
                            "type": "text",
                            "options": {
                              "text": "Sweet citrus, caramel",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-2-best",
                            "type": "text",
                            "options": {
                              "text": "Filter · Chemex",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto rounded-full bg-white px-3 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.1em] text-[#2A1810] ring-1 ring-[#E0D3C0]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-roast-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-5 pt-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0_#2A1810] "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-roast-3-n",
                            "type": "text",
                            "options": {
                              "text": "03",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 font-['JetBrains_Mono'] text-[10px] font-bold text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-3-bean",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-14 -rotate-[25deg] relative aspect-[3/4] rounded-[50%] bg-[#8A5228] shadow-[inset_-4px_-6px_0_rgba(0,0,0,0.22)] after:absolute after:left-1/2 after:top-[14%] after:h-[72%] after:w-[12%] after:-translate-x-1/2 after:rounded-full after:bg-black/40 after:content-[''] transition-transform duration-500 group-hover:rotate-[20deg]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ad-roast-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Medium",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/medium-roast",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center justify-center"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-heading font-normal uppercase text-2xl text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-3-notes",
                            "type": "text",
                            "options": {
                              "text": "Chocolate, nutty, balanced",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-3-best",
                            "type": "text",
                            "options": {
                              "text": "Any brewer",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto rounded-full bg-white px-3 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.1em] text-[#2A1810] ring-1 ring-[#E0D3C0]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-roast-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-5 pt-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0_#2A1810] "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-roast-4-n",
                            "type": "text",
                            "options": {
                              "text": "04",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 font-['JetBrains_Mono'] text-[10px] font-bold text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-4-bean",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-14 -rotate-[25deg] relative aspect-[3/4] rounded-[50%] bg-[#5E3519] shadow-[inset_-4px_-6px_0_rgba(0,0,0,0.22)] after:absolute after:left-1/2 after:top-[14%] after:h-[72%] after:w-[12%] after:-translate-x-1/2 after:rounded-full after:bg-black/40 after:content-[''] transition-transform duration-500 group-hover:rotate-[20deg]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ad-roast-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Medium-dark",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/medium-dark-roast",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center justify-center"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-heading font-normal uppercase text-2xl text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-4-notes",
                            "type": "text",
                            "options": {
                              "text": "Cocoa, toffee, full body",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-4-best",
                            "type": "text",
                            "options": {
                              "text": "Espresso · Moka pot",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto rounded-full bg-white px-3 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.1em] text-[#2A1810] ring-1 ring-[#E0D3C0]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-roast-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-5 pt-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0_#2A1810] col-span-2 sm:col-span-1"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-roast-5-n",
                            "type": "text",
                            "options": {
                              "text": "05",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-3 top-3 font-['JetBrains_Mono'] text-[10px] font-bold text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-5-bean",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-14 -rotate-[25deg] relative aspect-[3/4] rounded-[50%] bg-[#3A1F10] shadow-[inset_-4px_-6px_0_rgba(0,0,0,0.22)] after:absolute after:left-1/2 after:top-[14%] after:h-[72%] after:w-[12%] after:-translate-x-1/2 after:rounded-full after:bg-black/40 after:content-[''] transition-transform duration-500 group-hover:rotate-[20deg]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ad-roast-5-btn",
                            "type": "button",
                            "options": {
                              "text": "Dark",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/dark-roast",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center justify-center"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-heading font-normal uppercase text-2xl text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-5-notes",
                            "type": "text",
                            "options": {
                              "text": "Smoky, bold, low acidity",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#75685C]"
                              }
                            }
                          },
                          {
                            "id": "ad-roast-5-best",
                            "type": "text",
                            "options": {
                              "text": "Milk drinks · French press",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto rounded-full bg-white px-3 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.1em] text-[#2A1810] ring-1 ring-[#E0D3C0]"
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
            "id": "ad-row-fresh-roast",
            "type": "section",
            "options": {
              "anchor": "fresh-roast"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-row-fresh-roast-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-row-fresh-roast-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-fresh-roast-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-fresh-roast-label",
                            "type": "text",
                            "options": {
                              "text": "Out of the roaster",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-row-fresh-roast-h",
                            "type": "heading",
                            "options": {
                              "text": "This week’s roast",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-row-fresh-roast-sub",
                            "type": "text",
                            "options": {
                              "text": "Roasted on Tuesday, in your cup by the weekend.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-row-fresh-roast-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/fresh-roast",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#2A1810] pb-1 transition-colors hover:border-[#D9472B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2A1810] group-hover:text-[#D9472B]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#2A1810] whitespace-nowrap group-hover:text-[#D9472B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-row-fresh-roast-slider",
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
                                "taxonomy": "product_tag",
                                "field": "slug",
                                "terms": [
                                  "fresh-roast"
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
                        "classes": "relative [&_.splide__track]:!-mx-2 [&_.splide__track]:!px-2 [&_.splide__track]:!py-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-[10px] !border-2 !border-[#2A1810] !bg-white !opacity-100 !shadow-[3px_3px_0_#2A1810] transition-colors hover:!bg-[#D9472B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1810] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[40%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[40%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-fresh-roast-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-fresh-roast-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-fresh-roast-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-fresh-roast-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-fresh-roast-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-row-fresh-roast-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-fresh-roast-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-row-fresh-roast-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-fresh-roast-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-row-fresh-roast-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-fresh-roast-slider-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-row-fresh-roast-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
            "id": "ad-board",
            "type": "section",
            "options": {
              "anchor": "menu-board"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-board-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-board-frame",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative rounded-[26px] border-[10px] border-[#8A5A33] bg-[#2A1810] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.05)_0_2px,transparent_2px_9px)] p-6 shadow-[8px_8px_0_#2A1810] sm:p-10 lg:p-14"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-board-sticker",
                        "type": "text",
                        "options": {
                          "text": "Ask about subscriptions",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute -top-5 right-4 rotate-[4deg] rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-3 py-1.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:right-10"
                          }
                        }
                      },
                      {
                        "id": "ad-board-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-board-bn",
                            "type": "text",
                            "options": {
                              "text": "আজকের মেনু",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Baloo_Da_2'] text-xl font-semibold text-[#E3A857]"
                              }
                            }
                          },
                          {
                            "id": "ad-board-h",
                            "type": "heading",
                            "options": {
                              "text": "Today’s board",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-5xl tracking-[0.06em] text-[#F4ECE0] sm:text-6xl"
                              }
                            }
                          },
                          {
                            "id": "ad-board-p",
                            "type": "text",
                            "options": {
                              "text": "Everything on the shelf, priced like the board above our counter.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-white/55"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-board-cols",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-board-c1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-board-c1-h",
                                "type": "text",
                                "options": {
                                  "text": "Beans",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mb-3 border-b-2 border-[#E3A857]/50 pb-2 font-['JetBrains_Mono'] text-sm font-bold uppercase tracking-[0.24em] text-[#E3A857]"
                                  }
                                }
                              },
                              {
                                "id": "ad-board-c1-r1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c1-r1-n",
                                    "type": "button",
                                    "options": {
                                      "text": "House blend 250 g",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/espresso-blends",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c1-r1-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c1-r1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "৳690",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-board-c1-r2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c1-r2-n",
                                    "type": "button",
                                    "options": {
                                      "text": "Single origins",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/single-origin",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c1-r2-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c1-r2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "from ৳850",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-board-c1-r3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c1-r3-n",
                                    "type": "button",
                                    "options": {
                                      "text": "Espresso blends",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/espresso-blends",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c1-r3-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c1-r3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "from ৳720",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-board-c1-r4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c1-r4-n",
                                    "type": "button",
                                    "options": {
                                      "text": "Decaf",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/decaf",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c1-r4-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c1-r4-p",
                                    "type": "text",
                                    "options": {
                                      "text": "৳790",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-board-c1-r5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c1-r5-n",
                                    "type": "button",
                                    "options": {
                                      "text": "Cold brew packs",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/cold-brew",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c1-r5-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c1-r5-p",
                                    "type": "text",
                                    "options": {
                                      "text": "৳550",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ad-board-c2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-board-c2-h",
                                "type": "text",
                                "options": {
                                  "text": "The bar at home",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mb-3 border-b-2 border-[#E3A857]/50 pb-2 font-['JetBrains_Mono'] text-sm font-bold uppercase tracking-[0.24em] text-[#E3A857]"
                                  }
                                }
                              },
                              {
                                "id": "ad-board-c2-r1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c2-r1-n",
                                    "type": "button",
                                    "options": {
                                      "text": "Pour-over kits",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/brewing-gear",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c2-r1-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c2-r1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "from ৳1,450",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-board-c2-r2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c2-r2-n",
                                    "type": "button",
                                    "options": {
                                      "text": "Moka pots",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/brewing-gear",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c2-r2-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c2-r2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "from ৳1,900",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-board-c2-r3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c2-r3-n",
                                    "type": "button",
                                    "options": {
                                      "text": "French presses",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/brewing-gear",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c2-r3-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c2-r3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "from ৳1,600",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-board-c2-r4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c2-r4-n",
                                    "type": "button",
                                    "options": {
                                      "text": "Hand grinders",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/brewing-gear",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c2-r4-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c2-r4-p",
                                    "type": "text",
                                    "options": {
                                      "text": "from ৳3,500",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-board-c2-r5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-3 py-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-board-c2-r5-n",
                                    "type": "button",
                                    "options": {
                                      "text": "Mugs & tumblers",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/mugs-merch",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 cursor-pointer items-center"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-['JetBrains_Mono'] text-sm font-medium uppercase tracking-[0.1em] text-[#F4ECE0] transition-colors hover:text-[#E3A857] sm:text-base"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-board-c2-r5-dots",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-white/30"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-board-c2-r5-p",
                                    "type": "text",
                                    "options": {
                                      "text": "from ৳450",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "shrink-0 font-['JetBrains_Mono'] text-sm font-bold text-[#E3A857] sm:text-base"
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
            "id": "ad-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-best-label",
                            "type": "text",
                            "options": {
                              "text": "Regulars’ orders",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-best-h",
                            "type": "heading",
                            "options": {
                              "text": "The usual, please",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The bags our regulars reorder every month.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#2A1810] pb-1 transition-colors hover:border-[#D9472B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2A1810] group-hover:text-[#D9472B]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#2A1810] whitespace-nowrap group-hover:text-[#D9472B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-best-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-best-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-best-grid-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
            "id": "ad-brew",
            "type": "section",
            "options": {
              "anchor": "brew-guide"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-brew-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-brew-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-brew-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-brew-label",
                            "type": "text",
                            "options": {
                              "text": "Brew guide",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-brew-h",
                            "type": "heading",
                            "options": {
                              "text": "How fine? How long?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-brew-sub",
                            "type": "text",
                            "options": {
                              "text": "Tell us your brewer at checkout and we grind for it. Or grind at home with this chart.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-brew-all",
                        "type": "button",
                        "options": {
                          "text": "Brewing gear",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/brewing-gear",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#2A1810] pb-1 transition-colors hover:border-[#D9472B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2A1810] group-hover:text-[#D9472B]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#2A1810] whitespace-nowrap group-hover:text-[#D9472B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-brew-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-brew-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 rounded-[18px] border-2 border-[#2A1810] bg-white p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-brew-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSnowflake",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#2A1810] text-[#E3A857]"
                                  }
                                }
                              },
                              {
                                "id": "ad-brew-1-ratio",
                                "type": "text",
                                "options": {
                                  "text": "1:8",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal uppercase text-3xl leading-none text-[#D9472B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Cold brew",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-2xl leading-none text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-brew-1-grind",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-1-segs",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-1-seg-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-4 bg-[#D9472B]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-1-seg-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3.5 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-1-seg-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-1-seg-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2.5 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-1-seg-5",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-1-g",
                                "type": "text",
                                "options": {
                                  "text": "Grind: Extra coarse",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.12em] text-[#75685C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-1-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto grid grid-cols-2 gap-2 border-t-2 border-dashed border-[#E0D3C0] pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-1-time",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-1-time-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Time",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-1-time-v",
                                    "type": "text",
                                    "options": {
                                      "text": "16 hrs",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-1-water",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-1-water-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Water",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-1-water-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Cold water",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
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
                        "id": "ad-brew-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 rounded-[18px] border-2 border-[#2A1810] bg-white p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-brew-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconClock",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#2A1810] text-[#E3A857]"
                                  }
                                }
                              },
                              {
                                "id": "ad-brew-2-ratio",
                                "type": "text",
                                "options": {
                                  "text": "1:15",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal uppercase text-3xl leading-none text-[#D9472B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-2-h",
                            "type": "heading",
                            "options": {
                              "text": "French press",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-2xl leading-none text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-brew-2-grind",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-2-segs",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-2-seg-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-4 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-2-seg-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3.5 bg-[#D9472B]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-2-seg-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-2-seg-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2.5 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-2-seg-5",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-2-g",
                                "type": "text",
                                "options": {
                                  "text": "Grind: Coarse",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.12em] text-[#75685C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-2-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto grid grid-cols-2 gap-2 border-t-2 border-dashed border-[#E0D3C0] pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-2-time",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-2-time-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Time",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-2-time-v",
                                    "type": "text",
                                    "options": {
                                      "text": "4 min",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-2-water",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-2-water-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Water",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-2-water-v",
                                    "type": "text",
                                    "options": {
                                      "text": "95°C",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
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
                        "id": "ad-brew-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 rounded-[18px] border-2 border-[#2A1810] bg-white p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-brew-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDroplet",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#2A1810] text-[#E3A857]"
                                  }
                                }
                              },
                              {
                                "id": "ad-brew-3-ratio",
                                "type": "text",
                                "options": {
                                  "text": "1:16",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal uppercase text-3xl leading-none text-[#D9472B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Pour-over",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-2xl leading-none text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-brew-3-grind",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-3-segs",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-3-seg-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-4 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-3-seg-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3.5 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-3-seg-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3 bg-[#D9472B]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-3-seg-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2.5 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-3-seg-5",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-3-g",
                                "type": "text",
                                "options": {
                                  "text": "Grind: Medium",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.12em] text-[#75685C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-3-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto grid grid-cols-2 gap-2 border-t-2 border-dashed border-[#E0D3C0] pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-3-time",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-3-time-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Time",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-3-time-v",
                                    "type": "text",
                                    "options": {
                                      "text": "3 min",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-3-water",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-3-water-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Water",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-3-water-v",
                                    "type": "text",
                                    "options": {
                                      "text": "94°C",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
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
                        "id": "ad-brew-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 rounded-[18px] border-2 border-[#2A1810] bg-white p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-brew-4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFlame",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#2A1810] text-[#E3A857]"
                                  }
                                }
                              },
                              {
                                "id": "ad-brew-4-ratio",
                                "type": "text",
                                "options": {
                                  "text": "1:7",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal uppercase text-3xl leading-none text-[#D9472B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-4-h",
                            "type": "heading",
                            "options": {
                              "text": "Moka pot",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-2xl leading-none text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-brew-4-grind",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-4-segs",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-4-seg-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-4 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-4-seg-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3.5 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-4-seg-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-4-seg-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2.5 bg-[#D9472B]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-4-seg-5",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-4-g",
                                "type": "text",
                                "options": {
                                  "text": "Grind: Fine",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.12em] text-[#75685C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-4-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto grid grid-cols-2 gap-2 border-t-2 border-dashed border-[#E0D3C0] pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-4-time",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-4-time-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Time",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-4-time-v",
                                    "type": "text",
                                    "options": {
                                      "text": "5 min",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-4-water",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-4-water-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Water",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-4-water-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Hot water",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
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
                        "id": "ad-brew-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 rounded-[18px] border-2 border-[#2A1810] bg-white p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-brew-5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-5-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCoffee",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#2A1810] text-[#E3A857]"
                                  }
                                }
                              },
                              {
                                "id": "ad-brew-5-ratio",
                                "type": "text",
                                "options": {
                                  "text": "1:2",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal uppercase text-3xl leading-none text-[#D9472B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-5-h",
                            "type": "heading",
                            "options": {
                              "text": "Espresso",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-2xl leading-none text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-brew-5-grind",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-5-segs",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-5-seg-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-4 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-5-seg-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3.5 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-5-seg-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-3 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-5-seg-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2.5 bg-[#E0D3C0]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ad-brew-5-seg-5",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex-1 rounded-full h-2 bg-[#D9472B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-5-g",
                                "type": "text",
                                "options": {
                                  "text": "Grind: Extra fine",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.12em] text-[#75685C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-brew-5-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-auto grid grid-cols-2 gap-2 border-t-2 border-dashed border-[#E0D3C0] pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brew-5-time",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-5-time-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Time",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-5-time-v",
                                    "type": "text",
                                    "options": {
                                      "text": "28 sec",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-brew-5-water",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brew-5-water-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Water",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#75685C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brew-5-water-v",
                                    "type": "text",
                                    "options": {
                                      "text": "93°C",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
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
                    "id": "ad-brew-note",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-6 flex items-center gap-3 font-['JetBrains_Mono'] text-xs text-[#75685C]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-brew-note-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconScale",
                          "size": 18,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex shrink-0 text-[#D9472B]"
                          }
                        }
                      },
                      {
                        "id": "ad-brew-note-t",
                        "type": "text",
                        "options": {
                          "text": "Ratio = coffee : water by weight. 1:16 means 15 g of coffee for 240 g of water.",
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
              }
            ]
          },
          {
            "id": "ad-row-single-origin",
            "type": "section",
            "options": {
              "anchor": "single-origin"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-row-single-origin-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-row-single-origin-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-single-origin-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-single-origin-label",
                            "type": "text",
                            "options": {
                              "text": "One farm, one bag",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-row-single-origin-h",
                            "type": "heading",
                            "options": {
                              "text": "Single origins",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-row-single-origin-sub",
                            "type": "text",
                            "options": {
                              "text": "Traceable lots from Ethiopia, Colombia, Sumatra and the hills of Bandarban.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-row-single-origin-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/single-origin",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#2A1810] pb-1 transition-colors hover:border-[#D9472B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2A1810] group-hover:text-[#D9472B]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#2A1810] whitespace-nowrap group-hover:text-[#D9472B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-row-single-origin-slider",
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
                                  "single-origin"
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
                        "classes": "relative [&_.splide__track]:!-mx-2 [&_.splide__track]:!px-2 [&_.splide__track]:!py-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-[10px] !border-2 !border-[#2A1810] !bg-white !opacity-100 !shadow-[3px_3px_0_#2A1810] transition-colors hover:!bg-[#D9472B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1810] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[40%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[40%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-single-origin-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-single-origin-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-single-origin-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-single-origin-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-single-origin-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-row-single-origin-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-single-origin-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-row-single-origin-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-single-origin-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-row-single-origin-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-single-origin-slider-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-row-single-origin-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
            "id": "ad-steps",
            "type": "section",
            "options": {
              "anchor": "roastery"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden border-y-2 border-[#2A1810] bg-[#D9472B] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-steps-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-steps-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-12 flex flex-col gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-steps-k",
                        "type": "text",
                        "options": {
                          "text": "From the roastery",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#FAEBD2]"
                          }
                        }
                      },
                      {
                        "id": "ad-steps-h",
                        "type": "heading",
                        "options": {
                          "text": "Farm to cup in ten days.",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal uppercase max-w-3xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-steps-track",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-steps-line",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-x-8 top-8 hidden border-t-2 border-dashed border-white/50 lg:block"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ad-step-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-step-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-step-1-n",
                                "type": "text",
                                "options": {
                                  "text": "1",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#F4ECE0] font-heading font-normal uppercase text-3xl text-[#2A1810] shadow-[4px_4px_0_#2A1810]"
                                  }
                                }
                              },
                              {
                                "id": "ad-step-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPlant",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-white/80"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-step-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Sourced",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-3xl leading-none text-white"
                              }
                            }
                          },
                          {
                            "id": "ad-step-1-p",
                            "type": "text",
                            "options": {
                              "text": "Green beans from small farms and co-ops, bought by the lot.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-base text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-step-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-step-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-step-2-n",
                                "type": "text",
                                "options": {
                                  "text": "2",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#F4ECE0] font-heading font-normal uppercase text-3xl text-[#2A1810] shadow-[4px_4px_0_#2A1810]"
                                  }
                                }
                              },
                              {
                                "id": "ad-step-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFlame",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-white/80"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-step-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Roasted Tuesday",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-3xl leading-none text-white"
                              }
                            }
                          },
                          {
                            "id": "ad-step-2-p",
                            "type": "text",
                            "options": {
                              "text": "Small batches on our drum roaster in Dhaka.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-base text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-step-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-step-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-step-3-n",
                                "type": "text",
                                "options": {
                                  "text": "3",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#F4ECE0] font-heading font-normal uppercase text-3xl text-[#2A1810] shadow-[4px_4px_0_#2A1810]"
                                  }
                                }
                              },
                              {
                                "id": "ad-step-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPackage",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-white/80"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-step-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Packed same day",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-3xl leading-none text-white"
                              }
                            }
                          },
                          {
                            "id": "ad-step-3-p",
                            "type": "text",
                            "options": {
                              "text": "One-way valve bags, roast date printed on every bag.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-base text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-step-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-step-4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-step-4-n",
                                "type": "text",
                                "options": {
                                  "text": "4",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#F4ECE0] font-heading font-normal uppercase text-3xl text-[#2A1810] shadow-[4px_4px_0_#2A1810]"
                                  }
                                }
                              },
                              {
                                "id": "ad-step-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruck",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-white/80"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-step-4-h",
                            "type": "heading",
                            "options": {
                              "text": "At your door",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-3xl leading-none text-white"
                              }
                            }
                          },
                          {
                            "id": "ad-step-4-p",
                            "type": "text",
                            "options": {
                              "text": "24-48 hours in Dhaka, 2-4 days nationwide.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-base text-white/85"
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
            "id": "ad-row-espresso",
            "type": "section",
            "options": {
              "anchor": "espresso"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-row-espresso-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-row-espresso-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-espresso-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-espresso-label",
                            "type": "text",
                            "options": {
                              "text": "For the milk drinkers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-row-espresso-h",
                            "type": "heading",
                            "options": {
                              "text": "Espresso blends",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-row-espresso-sub",
                            "type": "text",
                            "options": {
                              "text": "Chocolatey, syrupy and made to cut through milk.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-row-espresso-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/espresso-blends",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#2A1810] pb-1 transition-colors hover:border-[#D9472B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2A1810] group-hover:text-[#D9472B]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#2A1810] whitespace-nowrap group-hover:text-[#D9472B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-row-espresso-slider",
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
                                  "espresso-blends"
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
                        "classes": "relative [&_.splide__track]:!-mx-2 [&_.splide__track]:!px-2 [&_.splide__track]:!py-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-[10px] !border-2 !border-[#2A1810] !bg-white !opacity-100 !shadow-[3px_3px_0_#2A1810] transition-colors hover:!bg-[#D9472B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1810] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[40%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[40%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-espresso-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-espresso-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-espresso-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-espresso-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-espresso-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-row-espresso-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-espresso-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-row-espresso-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-espresso-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-row-espresso-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-espresso-slider-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-row-espresso-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
            "id": "ad-row-gear",
            "type": "section",
            "options": {
              "anchor": "gear"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-row-gear-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-row-gear-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-gear-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-gear-label",
                            "type": "text",
                            "options": {
                              "text": "The bar at home",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-row-gear-h",
                            "type": "heading",
                            "options": {
                              "text": "Brewing gear",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-row-gear-sub",
                            "type": "text",
                            "options": {
                              "text": "Drippers, presses, moka pots, grinders and scales.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-row-gear-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/brewing-gear",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#2A1810] pb-1 transition-colors hover:border-[#D9472B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2A1810] group-hover:text-[#D9472B]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#2A1810] whitespace-nowrap group-hover:text-[#D9472B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-row-gear-slider",
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
                                  "brewing-gear"
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
                        "classes": "relative [&_.splide__track]:!-mx-2 [&_.splide__track]:!px-2 [&_.splide__track]:!py-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-[10px] !border-2 !border-[#2A1810] !bg-white !opacity-100 !shadow-[3px_3px_0_#2A1810] transition-colors hover:!bg-[#D9472B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1810] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[40%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[40%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-gear-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-gear-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-gear-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-gear-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-gear-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-row-gear-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-gear-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-row-gear-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-gear-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-row-gear-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-gear-slider-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-row-gear-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
            "id": "ad-row-gifts",
            "type": "section",
            "options": {
              "anchor": "gifts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-row-gifts-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-row-gifts-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-gifts-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-gifts-label",
                            "type": "text",
                            "options": {
                              "text": "For the coffee friend",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-row-gifts-h",
                            "type": "heading",
                            "options": {
                              "text": "Gift sets & mugs",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-row-gifts-sub",
                            "type": "text",
                            "options": {
                              "text": "Tasting flights, mugs and boxes, ready to give.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-row-gifts-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/gift-sets",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#2A1810] pb-1 transition-colors hover:border-[#D9472B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2A1810] group-hover:text-[#D9472B]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#2A1810] whitespace-nowrap group-hover:text-[#D9472B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-row-gifts-slider",
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
                                  "gift-sets"
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
                        "classes": "relative [&_.splide__track]:!-mx-2 [&_.splide__track]:!px-2 [&_.splide__track]:!py-3"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-[10px] !border-2 !border-[#2A1810] !bg-white !opacity-100 !shadow-[3px_3px_0_#2A1810] transition-colors hover:!bg-[#D9472B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1810] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5 !top-[40%]"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5 !top-[40%]"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-row-gifts-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-row-gifts-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-gifts-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-gifts-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-gifts-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-row-gifts-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-row-gifts-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-row-gifts-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-row-gifts-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-row-gifts-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-row-gifts-slider-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-row-gifts-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
            "id": "ad-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-t-2 border-[#2A1810] bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-reviews-label",
                            "type": "text",
                            "options": {
                              "text": "Overheard at the counter",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "What the regulars say",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 12,000+ coffee drinkers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#75685C]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ad-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-[10px] !border-2 !border-[#2A1810] !bg-white !opacity-100 !shadow-[3px_3px_0_#2A1810] transition-colors hover:!bg-[#D9472B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1810] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#2A1810]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#D9472B]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Tastes like blueberries and jasmine. I didn’t know coffee could do that until this bag.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1E1611]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#E0D3C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "TR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#D9472B] font-['JetBrains_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tanvir Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Ethiopia Yirgacheffe",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#D9472B]"
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
                        "id": "ad-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“My morning flat white finally tastes like the café. Ground for my moka pot, perfectly.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1E1611]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#E0D3C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "NJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#E3A857] font-['JetBrains_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nusrat Jahan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "House blend",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#D9472B]"
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
                        "id": "ad-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Coffee from our own hills, roasted beautifully. Proud and caffeinated.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1E1611]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#E0D3C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "IH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#8A5228] font-['JetBrains_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imran Hossain",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Bandarban single origin",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#D9472B]"
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
                        "id": "ad-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“A fresh bag every two weeks and the roast date is always within days. Never going back.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1E1611]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#E0D3C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "SI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#D9472B] font-['JetBrains_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sadia Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Subscription",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#D9472B]"
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
                        "id": "ad-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Their brew chart plus this grinder fixed my bitter pour-overs in a week.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1E1611]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#E0D3C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "AC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#E3A857] font-['JetBrains_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Arif Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Hand grinder",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#D9472B]"
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
                        "id": "ad-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[18px] border-2 border-[#2A1810] bg-[#F4ECE0] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Sent the tasting flight to my brother in Sylhet. He now has opinions about Colombia.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1E1611]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#E0D3C0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "MK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#2A1810] bg-[#8A5228] font-['JetBrains_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ad-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Maliha Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Gift set",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#D9472B]"
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
            "id": "ad-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ad-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "ad-journal-label",
                            "type": "text",
                            "options": {
                              "text": "The adda notes",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ad-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Stories from the roastery",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#2A1810] pb-1 transition-colors hover:border-[#D9472B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#2A1810] group-hover:text-[#D9472B]"
                          },
                          "label": {
                            "classes": "font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#2A1810] whitespace-nowrap group-hover:text-[#D9472B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-journal-grid",
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
                        "id": "ad-journal-loop",
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
                            "id": "ad-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[18px] border-2 border-[#2A1810] bg-[#EADFCD] transition-shadow group-hover:shadow-[5px_5px_0_#2A1810]"
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
                            "id": "ad-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[10px] text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl uppercase leading-tight text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#75685C]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.12em] text-[#2A1810]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#D9472B] transition-transform group-hover/rm:translate-x-1"
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
            "id": "ad-faq",
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
                "id": "ad-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "ad-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "ad-faq-label",
                                "type": "text",
                                "options": {
                                  "text": "Questions",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B] before:h-2.5 before:w-2.5 before:rotate-45 before:bg-current before:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ad-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal uppercase text-4xl leading-[0.95] sm:text-5xl lg:text-6xl text-[#1E1611]"
                                  }
                                }
                              },
                              {
                                "id": "ad-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Freshness, grinding, roasts and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#75685C]"
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
                    "id": "ad-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How fresh is the coffee?",
                          "classes": ""
                        },
                        {
                          "label": "Whole bean or ground?",
                          "classes": ""
                        },
                        {
                          "label": "Which roast should I pick?",
                          "classes": ""
                        },
                        {
                          "label": "How should I store beans?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[12px] border-2 border-[#2A1810] bg-white px-6 py-5 font-body text-base font-semibold text-[#1E1611] transition-colors hover:bg-[#F4ECE0]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#2A1810] !text-[#F4ECE0]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#D9472B]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ad-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "We roast every Tuesday and ship from Wednesday. The roast date is printed on every bag; coffee tastes best 5 to 30 days after roasting.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ad-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Whole bean keeps freshest. If you choose ground, tell us your brewer at checkout and we grind for it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ad-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Light for pour-over and fruity cups, medium for any brewer, medium-dark or dark for espresso, moka pot and milk drinks.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ad-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "In the bag it came in, valve up and sealed, away from light and heat. Never in the fridge.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ad-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka 24-48 hours, 2-4 days elsewhere in Bangladesh, with cash on delivery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685C]"
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
            "id": "ad-cta",
            "type": "section",
            "options": {
              "anchor": "subscribe"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-16 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "ad-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] border-2 border-[#2A1810] bg-[#2A1810] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.05)_0_2px,transparent_2px_9px)] p-8 shadow-[8px_8px_0_#D9472B] sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-cta-beans",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-6 -top-6 hidden gap-3 lg:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-cta-bean-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-14 rotate-[20deg] relative aspect-[3/4] rounded-[50%] bg-[#C98B4E] shadow-[inset_-4px_-6px_0_rgba(0,0,0,0.22)] after:absolute after:left-1/2 after:top-[14%] after:h-[72%] after:w-[12%] after:-translate-x-1/2 after:rounded-full after:bg-black/40 after:content-[''] opacity-80"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ad-cta-bean-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-14 -rotate-[15deg] translate-y-6 relative aspect-[3/4] rounded-[50%] bg-[#8A5228] shadow-[inset_-4px_-6px_0_rgba(0,0,0,0.22)] after:absolute after:left-1/2 after:top-[14%] after:h-[72%] after:w-[12%] after:-translate-x-1/2 after:rounded-full after:bg-black/40 after:content-[''] opacity-80"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ad-cta-bean-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-14 rotate-[40deg] relative aspect-[3/4] rounded-[50%] bg-[#3A1F10] shadow-[inset_-4px_-6px_0_rgba(0,0,0,0.22)] after:absolute after:left-1/2 after:top-[14%] after:h-[72%] after:w-[12%] after:-translate-x-1/2 after:rounded-full after:bg-black/40 after:content-[''] opacity-80"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "ad-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-cta-k",
                            "type": "text",
                            "options": {
                              "text": "Coffee subscription",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#E3A857]"
                              }
                            }
                          },
                          {
                            "id": "ad-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Never run out of beans.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal uppercase text-5xl leading-[0.95] text-[#F4ECE0] sm:text-6xl"
                              }
                            }
                          },
                          {
                            "id": "ad-cta-p",
                            "type": "text",
                            "options": {
                              "text": "A fresh 250 g bag at the pace you drink, roasted the week it ships. Skip, swap or pause any time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/70"
                              }
                            }
                          },
                          {
                            "id": "ad-cta-chips",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-2 pt-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-cta-chip-1",
                                "type": "text",
                                "options": {
                                  "text": "Every week",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border-2 border-white/30 text-white/80 px-4 py-1.5 font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.12em]"
                                  }
                                }
                              },
                              {
                                "id": "ad-cta-chip-2",
                                "type": "text",
                                "options": {
                                  "text": "Every 2 weeks",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border-2 border-[#E3A857] bg-[#E3A857] text-[#2A1810] px-4 py-1.5 font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.12em]"
                                  }
                                }
                              },
                              {
                                "id": "ad-cta-chip-3",
                                "type": "text",
                                "options": {
                                  "text": "Every month",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border-2 border-white/30 text-white/80 px-4 py-1.5 font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.12em]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ad-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Start my subscription",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconRepeat",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] border-2 border-[#F4ECE0] bg-[#D9472B] px-6 py-3 shadow-[4px_4px_0_#E3A857] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#E3A857]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-[13px] font-bold uppercase tracking-wider text-white whitespace-nowrap"
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
            "id": "ad-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The shelf",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Coffee & Gear",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every bean, blend and brewer we stock, freshest roast first. Every bag carries its roast date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-shop-grid-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
                        "id": "ad-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2A1810] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ad-shop-promise",
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
                "id": "ad-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Roasted weekly",
                          "description": "Every Tuesday in Dhaka",
                          "icon": "IconFlame",
                          "iconSize": ""
                        },
                        {
                          "title": "Roast date on bag",
                          "description": "Fresh, never stale stock",
                          "icon": "IconCalendar",
                          "iconSize": ""
                        },
                        {
                          "title": "Ground to order",
                          "description": "For your brewer",
                          "icon": "IconCoffee",
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
                        "classes": "font-heading text-2xl uppercase text-[#1E1611]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] border-2 border-[#2A1810] bg-[#E3A857] text-[#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-shop-promise-fb-ic",
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
                        "id": "ad-shop-promise-fb-t",
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
                        "id": "ad-shop-promise-fb-d",
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
            "id": "ad-pd",
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
                "id": "ad-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-pd-grid",
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
                        "id": "ad-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#FBE3DA] via-white to-[#F4ECE0] p-4 shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-[20px] bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1E1611]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1E1611]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#2A1810]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-pd-cats",
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
                                "classes": "rounded-full bg-[#FBE3DA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#D9472B] hover:bg-[#D9472B] hover:text-white"
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
                            "id": "ad-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-normal leading-tight text-[#1E1611] sm:text-4xl uppercase"
                              }
                            }
                          },
                          {
                            "id": "ad-pd-rate",
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
                                "classes": "font-body font-bold text-[#1E1611]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "ad-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-price",
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
                                    "classes": "font-heading text-3xl font-normal text-[#1E1611] uppercase"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-normal text-[#1E1611] uppercase"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-normal text-[#1E1611] uppercase"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#2A1810] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "ad-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#75685C]"
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
                            "id": "ad-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#1E1611]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#1E1611] transition-colors hover:border-[#D9472B] hover:bg-[#FBE3DA]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#D9472B] !bg-[#FBE3DA] !text-[#B8361E]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "ad-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "This lot is sold out · next roast soon",
                              "inStockText": "Roasted this week · ships within 24 hours",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#2A1810]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#D9472B]"
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
                            "id": "ad-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#1E1611]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F4ECE0]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F4ECE0]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#2A1810] px-8 text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#1C100A]"
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
                            "id": "ad-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Roasted weekly",
                                  "description": "Date on bag",
                                  "icon": "IconFlame",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Ground to order",
                                  "description": "Or whole bean",
                                  "icon": "IconCoffee",
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
                                "classes": "font-body text-base font-bold text-[#1E1611]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE3DA] text-[#D9472B]"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-perks-ic",
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
                                "id": "ad-pd-perks-t",
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
                                "id": "ad-pd-perks-d",
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
                            "id": "ad-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-sku",
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
                                    "classes": "font-semibold text-[#1E1611]"
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
                                "id": "ad-pd-brands",
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
                                    "classes": "font-semibold text-[#1E1611]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#2A1810]"
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
                                "id": "ad-pd-tags",
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
                                    "classes": "font-semibold text-[#1E1611]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#2A1810]"
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
            "id": "ad-pd-tabs-sec",
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
                "id": "ad-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(30,22,17,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "About this coffee",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "How to brew",
                              "icon": "IconCoffee"
                            },
                            {
                              "label": "Delivery",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F4ECE0] px-5 py-2.5 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#1E1611] !text-white shadow-md"
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
                            "id": "ad-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#1E1611] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#1E1611] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#2A1810] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[20px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E3A857] [&_blockquote]:pl-4 [&_blockquote]:italic uppercase"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCoffee",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Origin, process, roast level and tasting notes are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Choose whole bean or the grind for your brewer before adding to cart",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Best 5-30 days after the roast date printed on the bag",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Store sealed, valve up, away from light and heat; never in the fridge",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#D9472B]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-ship-list",
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
                                      "text": "Free delivery on orders over ৳1,500",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Damaged bags or gear are replaced free",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#D9472B]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ad-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[20px] border border-gray-100 bg-[#F4ECE0] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[20px] border border-gray-100 bg-[#F4ECE0] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ad-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EFE4D6]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ad-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#1E1611]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ad-pd-reviews-rate",
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
                                        "id": "ad-pd-reviews-co",
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
                                    "id": "ad-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How did it taste? How did you brew it?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[20px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(30,22,17,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#1E1611]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F4ECE0] px-4 py-3 text-sm text-[#1E1611] placeholder:text-gray-400 focus:border-[#D9472B] focus:outline-none focus:ring-2 focus:ring-[#D9472B]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#2A1810] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#1C100A] disabled:opacity-50"
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
            "id": "ad-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-16"
              }
            },
            "children": [
              {
                "id": "ad-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Brew it next",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EFE4D6] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2A1810]"
                          }
                        }
                      },
                      {
                        "id": "ad-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#1E1611] uppercase"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-pd-rel-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
            "id": "ad-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The whole board",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Single origins, espresso blends, filter, cold brew, decaf, brewing gear, mugs and gifts.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[20px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[20px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#FBE3DA] transition-transform"
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
                            "id": "ad-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#1E1611] transition-colors group-hover:text-[#2A1810]"
                              }
                            }
                          },
                          {
                            "id": "ad-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " items",
                              "singularSuffix": " item",
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
                        "id": "ad-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2A1810] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ad-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ad-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#D9472B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-cat1-grid-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
                        "id": "ad-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2A1810] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ad-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group coffee by roast level, freshness and mood: light roast, fresh roast, bestsellers and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1E1611] group-hover:text-[#2A1810]"
                              }
                            }
                          },
                          {
                            "id": "ad-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F4ECE0] px-2 py-0.5 text-[10px] font-bold text-[#75685C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ad-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2A1810] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ad-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ad-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#D9472B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-tag1-grid-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
                        "id": "ad-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2A1810] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ad-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Where it grows",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Origins & Farms",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every country, farm and co-op we buy from.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[20px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[20px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F4ECE0] p-3"
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
                            "id": "ad-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#1E1611] group-hover:text-[#2A1810]"
                              }
                            }
                          },
                          {
                            "id": "ad-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " items",
                              "singularSuffix": " item",
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
                        "id": "ad-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2A1810] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ad-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ad-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#D9472B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-brand1-grid-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
                        "id": "ad-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2A1810] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ad-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The adda notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Stories From the Roastery",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Farm visits, brewing experiments, roast diaries and the long story of coffee in Bengal.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F4ECE0]"
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
                            "id": "ad-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#1E1611] transition-colors group-hover:text-[#2A1810]"
                                  }
                                }
                              },
                              {
                                "id": "ad-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#2A1810]"
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
                        "id": "ad-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1E1611] transition-colors hover:border-[#2A1810] hover:text-[#2A1810]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2A1810] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ad-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F4ECE0] via-white to-[#F4ECE0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ad-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-post-k",
                    "type": "text",
                    "options": {
                      "text": "The adda notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBE3DA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal leading-tight text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#75685C]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-post-author",
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
                            "classes": "font-body font-bold text-[#1E1611]"
                          }
                        }
                      },
                      {
                        "id": "ad-post-dot",
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
                        "id": "ad-post-date",
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
                    "id": "ad-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
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
            "id": "ad-post-body",
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
                "id": "ad-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#1E1611] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#1E1611] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#2A1810] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[20px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E3A857] [&_blockquote]:pl-4 [&_blockquote]:italic uppercase"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-16"
              }
            },
            "children": [
              {
                "id": "ad-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#1E1611] uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[20px] border border-gray-100 bg-[#F4ECE0] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[20px] border border-gray-100 bg-[#F4ECE0] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EFE4D6]"
                              }
                            }
                          },
                          {
                            "id": "ad-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1E1611]"
                              }
                            }
                          },
                          {
                            "id": "ad-post-cmt-co",
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
                        "id": "ad-post-cmt-form",
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
                            "classes": "rounded-[20px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(30,22,17,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1E1611]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F4ECE0] px-4 py-3 text-sm text-[#1E1611] placeholder:text-gray-400 focus:border-[#D9472B] focus:outline-none focus:ring-2 focus:ring-[#D9472B]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#2A1810] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#1C100A] disabled:opacity-50"
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
            "id": "ad-post-more",
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
                "id": "ad-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From the Roastery",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#1E1611] uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,22,17,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F4ECE0]"
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
                            "id": "ad-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#D9472B]"
                                  }
                                }
                              },
                              {
                                "id": "ad-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#1E1611] transition-colors group-hover:text-[#2A1810]"
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
            "id": "ad-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full border-b-2 border-[#2A1810] bg-[#F4ECE0] bg-[radial-gradient(rgba(42,24,16,0.13)_1px,transparent_1.5px)] bg-[length:18px_18px] pb-16 pt-14 sm:pb-20 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ad-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ad-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9472B]"
                      }
                    }
                  },
                  {
                    "id": "ad-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1E1611] sm:text-5xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage your coffee subscription and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ad-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-12"
              }
            },
            "children": [
              {
                "id": "ad-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#1E1611] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#E3A857]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-normal text-white uppercase"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#2A1810]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#2A1810]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#2A1810]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "ad-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ad-acc-3",
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
                                "id": "ad-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(30,22,17,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2A1810] focus:outline-none focus:ring-2 focus:ring-[#2A1810]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2A1810] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1C100A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1810]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "ad-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(30,22,17,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2A1810] focus:outline-none focus:ring-2 focus:ring-[#2A1810]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2A1810] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1C100A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1810]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "ad-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "ad-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F4ECE0] px-5 py-2.5 font-body text-sm font-semibold text-[#1E1611] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#1E1611] !text-white shadow-md"
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
                                "id": "ad-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2A1810]/10 text-[#2A1810]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ad-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#2A1810] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ad-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2A1810]/10 text-[#2A1810]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ad-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#2A1810]/40 hover:bg-[#2A1810]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2A1810]/10 text-[#2A1810]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ad-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2A1810]/10 text-[#2A1810]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2A1810] focus:outline-none focus:ring-2 focus:ring-[#2A1810]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#2A1810] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1C100A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1810]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1810]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "ad-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F4ECE0] via-white to-[#F4ECE0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ad-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(30,22,17,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FBE3DA] text-[#D9472B]"
                          }
                        }
                      },
                      {
                        "id": "ad-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EFE4D6] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2A1810]"
                          }
                        }
                      },
                      {
                        "id": "ad-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! Your Beans Are on the Way",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#1E1611] sm:text-4xl uppercase"
                          }
                        }
                      },
                      {
                        "id": "ad-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re bagging your coffee fresh. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#75685C] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "ad-ty-steps",
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
                              "text": "Your coffee is roasted, ground if you asked, and sealed",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[20px] bg-[#F4ECE0] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#2A1810]"
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
                        "id": "ad-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2A1810] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#1C100A] w-full sm:w-auto"
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
                            "id": "ad-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#D9472B] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#D9472B] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#D9472B] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#D9472B] whitespace-nowrap group-hover:text-white"
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
            "id": "ad-ty-promise",
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
                "id": "ad-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Roasted weekly",
                          "description": "Every Tuesday in Dhaka",
                          "icon": "IconFlame",
                          "iconSize": ""
                        },
                        {
                          "title": "Roast date on bag",
                          "description": "Fresh, never stale stock",
                          "icon": "IconCalendar",
                          "iconSize": ""
                        },
                        {
                          "title": "Ground to order",
                          "description": "For your brewer",
                          "icon": "IconCoffee",
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
                        "classes": "font-heading text-2xl uppercase text-[#1E1611]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] border-2 border-[#2A1810] bg-[#E3A857] text-[#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-ty-promise-fb-ic",
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
                        "id": "ad-ty-promise-fb-t",
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
                        "id": "ad-ty-promise-fb-d",
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
            "id": "ad-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F4ECE0] via-white to-[#F4ECE0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ad-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-normal text-[#2A1810] sm:text-9xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4ECE0] text-[#1E1611]"
                      }
                    }
                  },
                  {
                    "id": "ad-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Ran Out of Beans",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal text-[#1E1611] sm:text-4xl uppercase"
                      }
                    }
                  },
                  {
                    "id": "ad-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or this lot may have sold out. Head back home and pour another cup.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#75685C] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "ad-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2A1810] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(42,24,16,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#1C100A] w-full sm:w-auto"
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
                        "id": "ad-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Coffee",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#D9472B] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#D9472B] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#D9472B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#D9472B] whitespace-nowrap group-hover:text-white"
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
            "id": "ad-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4ECE0] py-16"
              }
            },
            "children": [
              {
                "id": "ad-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ad-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E3A857] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1E1611]"
                          }
                        }
                      },
                      {
                        "id": "ad-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#1E1611] sm:text-4xl uppercase"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ad-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                      }
                    },
                    "children": [
                      {
                        "id": "ad-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[16px] border-2 border-[#2A1810] bg-white p-2.5 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#2A1810]"
                          }
                        },
                        "children": [
                          {
                            "id": "ad-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EADFCD] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[6px] before:border before:border-dashed before:border-[#2A1810]/25 before:content-['']"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex -rotate-3 items-center gap-1 rounded-[6px] border-2 border-[#2A1810] bg-[#E3A857] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#2A1810]"
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
                                "id": "ad-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ad-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9472B]"
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
                                    "id": "ad-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1E1611] transition-colors group-hover:text-[#D9472B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ad-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-[0.12em] text-[#75685C]"
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
                            "id": "ad-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-[#E0D3C0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ad-nf-grid-c-price",
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
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['JetBrains_Mono'] text-xs text-[#75685C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl leading-none text-[#2A1810]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2A1810]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2A1810] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ad-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
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
                                    "classes": "inline-flex h-10 min-w-10 cursor-pointer items-center justify-center gap-1.5 rounded-[8px] border-2 border-[#2A1810] bg-[#D9472B] px-2.5 text-white transition-colors hover:bg-[#2A1810]"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider sm:not-sr-only"
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
