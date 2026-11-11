/**
 * Template: Nolen Gur Co.
 *
 * A misty-winter organic food store for date-palm jaggery (khejur gur) -
 * nolen, jhola, patali and dana gur - and the winter pantry: ghee, honey,
 * mustard oil, chinigura rice and pitha mixes. Like the other complete
 * templates here it carries all sixteen page types - Header, Footer, Home,
 * Shop, Product, the six taxonomy archives, Blog Archive, Blog Single,
 * Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to nl-, palette remapped, copy
 * rewritten); the Header is rebuilt and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * A molasses top bar with a pulsing "harvest live" line and a season ticker
 * (Nov-Mar, with the live months Dec-Feb lit in gur gold); then the logo -
 * a clay-pot-shaped mark with "গুড়" in Galada and the Nolen wordmark - the
 * menu (each link drips a little gold drop on hover), search, account and
 * cart; and a molasses edge with drips hanging below it (radial-gradient
 * drops, nl-hdr-drips) - the same drips recur on the strip, the season
 * chart, the CTA and on product cards when hovered.
 *
 * THE HERO
 *
 * A full-bleed winter dawn (public/templates/nolen-dawn.svg): fog over the
 * fields, the sun rising behind date palms tapped into clay hari pots. Fog
 * is washed over the left (top on phones) with two slowly pulsing fog bands;
 * on top: "Winter 2026 harvest is live", "নলেন গুড়" in Galada, "The first
 * sweetness of winter.", buttons and a weather card ("Jessore · 5:40 am ·
 * 9°C, foggy - perfect sap weather").
 *
 * DESIGN
 *
 *   molasses   #4A2C1A  primary: buttons, dark bands, text   #3B2416 deep  #6B4128 light
 *   gur gold   #E0A040  accent: drips, live months, stars    #C4842A dark  #FBEBCF tint
 *   clay       #B65C34  secondary: Bangla words, sale        #F6E1D3 tint
 *   palm leaf #3E5B3A / #E3EBDF   fog #EEF0EB / #E2E6DF   paper #F8F5EE
 *   muted #6F6358   line #E3DDD0
 *
 * Fonts (template meta): Young Serif (headings; one weight, so they carry
 * font-normal), Karla (body) and Galada via `font-['Galada']` for the Bangla
 * words above every section title.
 *
 * Product cards: white with a hairline, the photo on fog (gold drips appear
 * along its top edge on hover), a clay discount pill, the name in Young
 * Serif, one italic excerpt line (use it for weight, grove and harvest
 * date, e.g. "500 g · Jessore · harvested 12 Jan"), the price and a molasses
 * Add button.
 *
 * HOME
 *
 *   Dawn hero - drip strip - three ways to enjoy gur: jhola / patali / dana
 *   with CSS texture swatches (#forms) - this week's harvest - from tree to
 *   jar, an overnight 5 pm-to-noon timeline (#tree-to-jar) - winter
 *   favourites (#bestsellers) - real vs market gur purity table (#purity) -
 *   patali - season calendar Nov-Mar (#season) - the winter pantry as
 *   clay-pot tiles (#pantry) - pitha recipes (#recipes) - gift boxes -
 *   reviews - stories from the groves (#journal) - FAQ (#faq) - fortnightly
 *   gur subscription (#subscribe).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: jhola-gur, patali-gur, dana-gur, gift-boxes (plus your
 *     pantry categories: ghee, honey, mustard oil, rice, pitha mixes). Tag
 *     slugs: nolen, this-week, bestseller, pre-order.
 *   - The header's "harvest live" line, the season ticker and the hero
 *     weather card are static copy: update them through the season (and
 *     switch the ticker off in summer).
 *   - Lab testing, harvest dates on labels, insulated packing, the
 *     subscription, "14,000+ families", contact details and the six reviews
 *     are sample copy - make sure every claim matches what you do.
 */

var template = [
  {
    "name": "Nolen Gur Co.",
    "description": "Misty-winter organic store for date-palm jaggery (khejur gur) and winter pantry foods, in molasses, gur gold, clay and palm green on fog; Young Serif, Karla and Galada for Bangla: a header with a live season ticker and molasses drips, a full-bleed winter-dawn hero with tapped date palms and clay pots, three forms of gur, this week's harvest, an overnight tree-to-jar timeline, winter favourites, a real-vs-market purity table, patali, a season calendar, a clay-pot pantry, pitha recipes, gift boxes, reviews, grove stories, FAQ and a fortnightly gur subscription. All 16 pages.",
    "thumbnail": "/templates/nolen.svg",
    "meta": {
      "fonts": [
        {
          "family": "Young Serif",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Young+Serif&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Karla",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Galada",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Galada&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Young Serif",
        "body": "Karla"
      },
      "colors": {
        "primary": "#4A2C1A",
        "secondary": "#B65C34",
        "accent": "#E0A040",
        "background": "#EEF0EB",
        "foreground": "#3B2416",
        "muted": "#6F6358"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "nl-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-[#F8F5EE]/95 backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "nl-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#4A2C1A]"
                  }
                },
                "children": [
                  {
                    "id": "nl-hdr-season",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-10 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-hdr-season-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-hdr-season-dot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2 w-2 animate-pulse rounded-full bg-[#E0A040]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-hdr-season-t",
                            "type": "text",
                            "options": {
                              "text": "Harvest live: today’s batch boiled at 6 am in Jessore",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "truncate font-body text-xs font-semibold text-[#F8F5EE]/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-hdr-season-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden items-center gap-1 md:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-hdr-season-k",
                            "type": "text",
                            "options": {
                              "text": "Season",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mr-2 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/45"
                              }
                            }
                          },
                          {
                            "id": "nl-hdr-tick-1",
                            "type": "text",
                            "options": {
                              "text": "Nov",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full px-2.5 py-0.5 font-body text-[11px] font-bold text-white/40"
                              }
                            }
                          },
                          {
                            "id": "nl-hdr-tick-2",
                            "type": "text",
                            "options": {
                              "text": "Dec",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full px-2.5 py-0.5 font-body text-[11px] font-bold bg-[#E0A040] text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-hdr-tick-3",
                            "type": "text",
                            "options": {
                              "text": "Jan",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full px-2.5 py-0.5 font-body text-[11px] font-bold bg-[#E0A040] text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-hdr-tick-4",
                            "type": "text",
                            "options": {
                              "text": "Feb",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full px-2.5 py-0.5 font-body text-[11px] font-bold bg-[#E0A040] text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-hdr-tick-5",
                            "type": "text",
                            "options": {
                              "text": "Mar",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full px-2.5 py-0.5 font-body text-[11px] font-bold text-white/40"
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
                "id": "nl-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[78px] items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "গুড়",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-t-[45%] rounded-b-[50%] bg-[#4A2C1A] font-['Galada'] text-lg leading-none text-[#E0A040] shadow-[inset_0_-6px_10px_rgba(0,0,0,0.35)] ring-2 ring-[#E0A040]/40 transition-transform group-hover:-rotate-6"
                              }
                            }
                          },
                          {
                            "id": "nl-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Nolen",
                                  "src": "https://placehold.co/200x64?text=Nolen",
                                  "altText": "Nolen Gur Co.",
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
                                    "classes": "font-heading text-[30px] leading-none text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Date-palm jaggery · Jessore",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-[#B65C34]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nl-hdr-menu",
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
                            "classes": "flex items-center gap-6 xl:gap-7"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "relative flex items-center whitespace-nowrap font-body text-sm font-bold text-[#3B2416] transition-colors hover:text-[#B65C34] after:absolute after:-bottom-3 after:left-1/2 after:h-2 after:w-1.5 after:-translate-x-1/2 after:rounded-b-full after:bg-[#E0A040] after:opacity-0 after:transition-all after:content-[''] hover:after:-bottom-4 hover:after:opacity-100"
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
                            "id": "nl-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Nolen gur",
                              "url": "/tags/nolen"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "!text-[#B65C34]"
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
                            "id": "nl-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Jhola gur",
                              "url": "/categories/jhola-gur"
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
                            "id": "nl-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Patali gur",
                              "url": "/categories/patali-gur"
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
                            "id": "nl-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Dana gur",
                              "url": "/categories/dana-gur"
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
                            "id": "nl-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Winter pantry",
                              "url": "/categories"
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
                            "id": "nl-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Gift boxes",
                              "url": "/categories/gift-boxes"
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
                            "id": "nl-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Our story",
                              "url": "/#tree-to-jar"
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
                          }
                        ]
                      },
                      {
                        "id": "nl-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search gur, ghee, pitha...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden w-56 rounded-full bg-white py-1 pl-1 pr-3 ring-1 ring-[#E3DDD0] transition-all focus-within:ring-2 focus-within:ring-[#E0A040] md:block lg:hidden xl:block"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#3B2416] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#6F6358]"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#4A2C1A] focus:outline-none focus:ring-2 focus:ring-[#4A2C1A]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#4A2C1A]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#4A2C1A]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#4A2C1A] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-hdr-account",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-[#4A2C1A] ring-1 ring-[#E3DDD0] transition-colors hover:bg-[#FBEBCF]"
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
                            "id": "nl-hdr-cart",
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
                                "classes": "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#4A2C1A] text-[#E0A040] transition-colors hover:bg-[#B65C34] hover:text-white"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#4A2C1A] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#EEF0EB] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#3B2416]"
                              },
                              "title-icon": {
                                "classes": "text-[#4A2C1A]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#4A2C1A] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#4A2C1A] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3B2416]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2C1A]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#4A2C1A] focus:outline-none focus:ring-2 focus:ring-[#4A2C1A]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#4A2C1A] px-4 py-2 text-sm font-medium text-[#4A2C1A] transition-colors hover:bg-[#4A2C1A] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#4A2C1A] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3B2416] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2C1A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "nl-hdr-mobile",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-[#4A2C1A] ring-1 ring-[#E3DDD0]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#EEF0EB] p-2 text-[#3B2416] transition-colors hover:bg-[#4A2C1A] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "গুড়",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-12 w-12 items-center justify-center rounded-t-[45%] rounded-b-[50%] bg-[#4A2C1A] font-['Galada'] text-lg leading-none text-[#E0A040] shadow-[inset_0_-6px_10px_rgba(0,0,0,0.35)] ring-2 ring-[#E0A040]/40 transition-transform group-hover:-rotate-6"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nl-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Nolen",
                                          "src": "https://placehold.co/200x64?text=Nolen",
                                          "altText": "Nolen Gur Co.",
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
                                            "classes": "font-heading text-[30px] leading-none text-[#3B2416]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nl-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Date-palm jaggery · Jessore",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-[#B65C34]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "nl-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#EEF0EB] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#4A2C1A] focus-within:ring-2 focus-within:ring-[#4A2C1A]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#3B2416] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6F6358]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#4A2C1A] focus:outline-none focus:ring-2 focus:ring-[#4A2C1A]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#4A2C1A]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#4A2C1A]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#4A2C1A] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-dashed border-[#E3DDD0] py-3.5 font-heading text-xl text-[#3B2416] transition-colors hover:text-[#B65C34]"
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
                                    "id": "nl-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Nolen gur",
                                      "url": "/tags/nolen"
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
                                    "id": "nl-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Jhola gur",
                                      "url": "/categories/jhola-gur"
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
                                    "id": "nl-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Patali gur",
                                      "url": "/categories/patali-gur"
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
                                    "id": "nl-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Dana gur",
                                      "url": "/categories/dana-gur"
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
                                    "id": "nl-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Winter pantry",
                                      "url": "/categories"
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
                                    "id": "nl-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Gift boxes",
                                      "url": "/categories/gift-boxes"
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
                                    "id": "nl-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Our story",
                                      "url": "/#tree-to-jar"
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
                "id": "nl-hdr-edge",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative h-1 w-full bg-[#4A2C1A]"
                  }
                },
                "children": [
                  {
                    "id": "nl-hdr-drips",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "pointer-events-none absolute inset-x-0 top-full h-3.5 bg-[radial-gradient(7px_11px_at_50%_0,#4A2C1A_96%,transparent),radial-gradient(4px_7px_at_50%_0,#4A2C1A_96%,transparent)] bg-[length:56px_14px,23px_9px] bg-[position:0_0,11px_0] bg-repeat-x"
                      }
                    },
                    "children": []
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
            "id": "nl-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#3B2416] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "nl-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "nl-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[30px] bg-[#E0A040] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "সারা শীত, তাজা গুড়",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-['Galada'] text-2xl leading-none text-[#4A2C1A]"
                              }
                            }
                          },
                          {
                            "id": "nl-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "A fresh jar every two weeks, all winter",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#3B2416] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "nl-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Subscribe once for each fortnight’s freshest gur. Pause or cancel any time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm font-semibold text-[#4A2C1A]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Subscribe",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconCalendar",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#4A2C1A] px-7 py-3.5 transition-colors hover:bg-[#B65C34]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#E0A040]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "nl-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "nl-ftr-grid",
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
                        "id": "nl-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "গুড়",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-t-[45%] rounded-b-[50%] bg-[#4A2C1A] font-['Galada'] text-lg leading-none text-[#E0A040] shadow-[inset_0_-6px_10px_rgba(0,0,0,0.35)] ring-2 ring-[#E0A040]/40 transition-transform group-hover:-rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "nl-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Nolen",
                                      "src": "https://placehold.co/200x64?text=Nolen",
                                      "altText": "Nolen Gur Co.",
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
                                        "classes": "font-heading text-[30px] leading-none text-[#F8F5EE]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "nl-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Pure date-palm jaggery and winter pantry foods straight from the groves of Jessore. Tapped at dusk, boiled at dawn, labelled with the harvest date.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "nl-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4A2C1A]"
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
                                "id": "nl-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4A2C1A]"
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
                                "id": "nl-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4A2C1A]"
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
                                "id": "nl-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4A2C1A]"
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
                        "id": "nl-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nl-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Nolen Gur",
                                  "icon": "",
                                  "slug": "/tags/nolen"
                                },
                                {
                                  "text": "Jhola Gur",
                                  "icon": "",
                                  "slug": "/categories/jhola-gur"
                                },
                                {
                                  "text": "Patali Gur",
                                  "icon": "",
                                  "slug": "/categories/patali-gur"
                                },
                                {
                                  "text": "Dana Gur",
                                  "icon": "",
                                  "slug": "/categories/dana-gur"
                                },
                                {
                                  "text": "Winter Pantry",
                                  "icon": "",
                                  "slug": "/categories"
                                },
                                {
                                  "text": "Gift Boxes",
                                  "icon": "",
                                  "slug": "/categories/gift-boxes"
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
                                "classes": "transition-colors hover:text-[#E0A040]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E0A040]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nl-ftr-ll-care",
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
                                  "text": "How It’s Made",
                                  "icon": "",
                                  "slug": "/#tree-to-jar"
                                },
                                {
                                  "text": "Storage & FAQ",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Recipes & Stories",
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
                                "classes": "transition-colors hover:text-[#E0A040]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E0A040]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-ftr-contact-h",
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
                            "id": "nl-ftr-address",
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
                                "label": "Groves",
                                "value": "Jessore & Khulna, Bangladesh",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#E0A040]"
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
                                "classes": "shrink-0 text-[#4A2C1A]"
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
                "id": "nl-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "nl-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Nolen Gur Co. All rights reserved. The first sweetness of winter.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "nl-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-body text-xs font-semibold"
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
            "id": "nl-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EEF0EB]"
              }
            },
            "children": [
              {
                "id": "nl-hero-img",
                "type": "image",
                "options": {
                  "src": "/templates/nolen-dawn.svg",
                  "altText": "A foggy winter dawn over the fields, with date palms tapped into clay pots",
                  "link": "",
                  "newTab": false
                },
                "cssSelectors": {
                  "*": {
                    "classes": "absolute inset-0"
                  },
                  "link": {
                    "classes": "block h-full"
                  },
                  "img": {
                    "classes": "h-full w-full object-cover object-[72%_50%]"
                  }
                }
              },
              {
                "id": "nl-hero-wash",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(238,240,235,0.97)_0%,rgba(238,240,235,0.88)_38%,rgba(238,240,235,0)_68%)] max-lg:bg-[linear-gradient(180deg,rgba(238,240,235,0.95)_0%,rgba(238,240,235,0.85)_60%,rgba(238,240,235,0.3)_100%)]"
                  }
                },
                "children": []
              },
              {
                "id": "nl-fog-1",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-20 bottom-16 h-24 w-[70%] animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-white/60 blur-3xl"
                  }
                },
                "children": []
              },
              {
                "id": "nl-fog-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute bottom-0 right-0 h-20 w-[60%] animate-[pulse_11s_ease-in-out_infinite] rounded-full bg-white/50 blur-3xl"
                  }
                },
                "children": []
              },
              {
                "id": "nl-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[640px] flex-col justify-center py-16 lg:min-h-[720px]"
                  }
                },
                "children": [
                  {
                    "id": "nl-hero-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex max-w-xl flex-col gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-hero-live",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-hero-live-dot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2 w-2 animate-pulse rounded-full bg-[#B65C34]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-hero-live-t",
                            "type": "text",
                            "options": {
                              "text": "Winter 2026 harvest is live",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#4A2C1A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-hero-bn",
                        "type": "text",
                        "options": {
                          "text": "নলেন গুড়",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Galada'] text-6xl leading-none text-[#B65C34] sm:text-7xl"
                          }
                        }
                      },
                      {
                        "id": "nl-hero-h1",
                        "type": "heading",
                        "options": {
                          "text": "The first sweetness of winter.",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal text-5xl leading-[1.04] text-[#3B2416] sm:text-6xl"
                          }
                        }
                      },
                      {
                        "id": "nl-hero-p",
                        "type": "text",
                        "options": {
                          "text": "Pure date-palm jaggery from the groves of Jessore: tapped at dusk, collected before sunrise, boiled over a wood fire the same morning. No sugar, no chemicals, nothing else.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-lg text-lg leading-relaxed text-[#6F6358]"
                          }
                        }
                      },
                      {
                        "id": "nl-hero-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-hero-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Shop this week’s harvest",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/this-week",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#4A2C1A] px-7 py-3.5 transition-colors hover:bg-[#B65C34]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "nl-hero-btn-2",
                            "type": "button",
                            "options": {
                              "text": "How it’s made",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#tree-to-jar",
                              "target": "",
                              "icon": "IconSunrise",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#4A2C1A] px-7 py-3 transition-colors hover:bg-[#4A2C1A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#4A2C1A] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap group-hover:text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-hero-weather",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-2 flex w-fit items-center gap-4 rounded-2xl bg-white/85 px-4 py-3 shadow-[0_14px_28px_-20px_rgba(59,36,22,0.6)] backdrop-blur"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-hero-weather-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSnowflake",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#E2E6DF] text-[#3E5B3A]"
                              }
                            }
                          },
                          {
                            "id": "nl-hero-weather-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-hero-weather-a",
                                "type": "text",
                                "options": {
                                  "text": "Jessore · 5:40 am · 9°C, foggy",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-hero-weather-b",
                                "type": "text",
                                "options": {
                                  "text": "Perfect sap weather: the colder the night, the sweeter the gur.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-[#6F6358]"
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
            "id": "nl-strip",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-x-clip bg-[#4A2C1A] pb-6 pt-4"
              }
            },
            "children": [
              {
                "id": "nl-strip-row",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-max items-center gap-8 overflow-hidden whitespace-nowrap px-4"
                  }
                },
                "children": [
                  {
                    "id": "nl-strip-0",
                    "type": "text",
                    "options": {
                      "text": "Tapped at dusk  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#F8F5EE]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-1",
                    "type": "text",
                    "options": {
                      "text": "Collected before sunrise  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#E0A040]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-2",
                    "type": "text",
                    "options": {
                      "text": "Boiled the same morning  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#F8F5EE]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-3",
                    "type": "text",
                    "options": {
                      "text": "No sugar, no chemicals  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#F8F5EE]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-4",
                    "type": "text",
                    "options": {
                      "text": "Lab-tested every batch  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#E0A040]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-5",
                    "type": "text",
                    "options": {
                      "text": "Direct from Jessore gachhis  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#F8F5EE]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-6",
                    "type": "text",
                    "options": {
                      "text": "Tapped at dusk  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#F8F5EE]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-7",
                    "type": "text",
                    "options": {
                      "text": "Collected before sunrise  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#E0A040]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-8",
                    "type": "text",
                    "options": {
                      "text": "Boiled the same morning  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#F8F5EE]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-9",
                    "type": "text",
                    "options": {
                      "text": "No sugar, no chemicals  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#F8F5EE]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-10",
                    "type": "text",
                    "options": {
                      "text": "Lab-tested every batch  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#E0A040]"
                      }
                    }
                  },
                  {
                    "id": "nl-strip-11",
                    "type": "text",
                    "options": {
                      "text": "Direct from Jessore gachhis  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.16em] text-[#F8F5EE]"
                      }
                    }
                  }
                ]
              },
              {
                "id": "nl-strip-drips",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-x-0 -bottom-3 h-3.5 bg-[radial-gradient(7px_11px_at_50%_0,#4A2C1A_96%,transparent),radial-gradient(4px_7px_at_50%_0,#4A2C1A_96%,transparent)] bg-[length:56px_14px,23px_9px] bg-[position:0_0,11px_0] bg-repeat-x"
                  }
                },
                "children": []
              }
            ]
          },
          {
            "id": "nl-forms",
            "type": "section",
            "options": {
              "anchor": "forms"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-16 pt-20 lg:py-24 lg:pt-28"
              }
            },
            "children": [
              {
                "id": "nl-forms-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-forms-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-forms-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-forms-label",
                            "type": "text",
                            "options": {
                              "text": "তিন রকম",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-forms-h",
                            "type": "heading",
                            "options": {
                              "text": "Three ways to enjoy gur",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-forms-sub",
                            "type": "text",
                            "options": {
                              "text": "The same winter sap, cooked to three different textures.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nl-forms-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-5 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-form-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 rounded-[28px] bg-white p-8 text-center ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:ring-[#E0A040]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-form-1-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-32 w-32 rounded-b-[40%] rounded-t-[18px] bg-[linear-gradient(180deg,#F2C46E_0%,#E0A040_35%,#C4842A_70%,#6B4128_100%)] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.25),0_20px_30px_-18px_rgba(59,36,22,0.6)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-form-1-bn",
                            "type": "text",
                            "options": {
                              "text": "ঝোলা গুড়",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-3xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Jhola gur",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-1-p",
                            "type": "text",
                            "options": {
                              "text": "Liquid, pourable gur. Drizzle over pitha, rice pudding and hot ruti.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-sm leading-relaxed text-[#6F6358]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop jhola gur",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/jhola-gur",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#B65C34] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-form-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 rounded-[28px] bg-white p-8 text-center ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:ring-[#E0A040]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-form-2-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-32 w-32 rounded-full bg-[radial-gradient(circle_at_35%_30%,#D9A05A,#6B4128_70%)] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.25),0_20px_30px_-18px_rgba(59,36,22,0.6)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-form-2-bn",
                            "type": "text",
                            "options": {
                              "text": "পাটালি গুড়",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-3xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Patali gur",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-2-p",
                            "type": "text",
                            "options": {
                              "text": "Set into cakes in clay moulds. Break a piece with tea, or grate into payesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-sm leading-relaxed text-[#6F6358]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop patali gur",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/patali-gur",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#B65C34] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-form-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 rounded-[28px] bg-white p-8 text-center ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:ring-[#E0A040]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-form-3-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-32 w-32 rounded-[30%] bg-[radial-gradient(circle,#C4842A_2px,transparent_2.5px),radial-gradient(circle,#6B4128_2px,transparent_2.5px)] bg-[length:9px_9px,13px_13px] bg-[#FBEBCF] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.25),0_20px_30px_-18px_rgba(59,36,22,0.6)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-form-3-bn",
                            "type": "text",
                            "options": {
                              "text": "দানা গুড়",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-3xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Dana gur",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-3-p",
                            "type": "text",
                            "options": {
                              "text": "Granulated gur that spoons like sugar. For tea, coffee and baking.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-sm leading-relaxed text-[#6F6358]"
                              }
                            }
                          },
                          {
                            "id": "nl-form-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop dana gur",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/dana-gur",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#B65C34] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
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
            "id": "nl-row-this-week",
            "type": "section",
            "options": {
              "anchor": "this-week"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-row-this-week-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-row-this-week-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-row-this-week-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "nl-row-this-week-label",
                            "type": "text",
                            "options": {
                              "text": "এই সপ্তাহের",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-row-this-week-h",
                            "type": "heading",
                            "options": {
                              "text": "This week’s harvest",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-row-this-week-sub",
                            "type": "text",
                            "options": {
                              "text": "Fresh batches, each labelled with its harvest date.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-row-this-week-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/this-week",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#B65C34]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-row-this-week-slider",
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
                                  "this-week"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!py-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#4A2C1A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#3B2416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-row-this-week-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-row-this-week-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-row-this-week-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-row-this-week-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-row-this-week-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-row-this-week-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-row-this-week-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-row-this-week-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-row-this-week-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-row-this-week-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-row-this-week-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-row-this-week-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
            "id": "nl-tree",
            "type": "section",
            "options": {
              "anchor": "tree-to-jar"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#4A2C1A] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-tree-glow",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#E0A040]/20 blur-3xl"
                  }
                },
                "children": []
              },
              {
                "id": "nl-tree-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-tree-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-tree-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "nl-tree-label",
                            "type": "text",
                            "options": {
                              "text": "গাছ থেকে বয়ামে",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#E0A040]"
                              }
                            }
                          },
                          {
                            "id": "nl-tree-h",
                            "type": "heading",
                            "options": {
                              "text": "From tree to jar in a single night",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#F8F5EE]"
                              }
                            }
                          },
                          {
                            "id": "nl-tree-sub",
                            "type": "text",
                            "options": {
                              "text": "Every batch follows the same 19 hours, the way it has for generations.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-white/65"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nl-tree-line",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-tree-rail",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute left-0 right-0 top-[27px] hidden h-0.5 bg-[repeating-linear-gradient(90deg,#E0A040_0_8px,transparent_8px_14px)] lg:block"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "nl-step-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-step-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-step-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSun",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#E0A040] bg-[#4A2C1A] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-step-1-time",
                                "type": "text",
                                "options": {
                                  "text": "5:00 pm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-[#6B4128] px-3 py-1 font-body text-xs font-bold text-[#E0A040]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-step-1-h",
                            "type": "heading",
                            "options": {
                              "text": "The cut",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#F8F5EE]"
                              }
                            }
                          },
                          {
                            "id": "nl-step-1-p",
                            "type": "text",
                            "options": {
                              "text": "The gachhi climbs the palm, shaves a fresh cut under the crown and hangs a clean clay hari.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/65"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-step-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-step-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-step-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMoon",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#E0A040] bg-[#4A2C1A] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-step-2-time",
                                "type": "text",
                                "options": {
                                  "text": "All night",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-[#6B4128] px-3 py-1 font-body text-xs font-bold text-[#E0A040]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-step-2-h",
                            "type": "heading",
                            "options": {
                              "text": "The drip",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#F8F5EE]"
                              }
                            }
                          },
                          {
                            "id": "nl-step-2-p",
                            "type": "text",
                            "options": {
                              "text": "Sap drips slowly into the pot. Cold, clear nights of 6-10°C give the sweetest sap.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/65"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-step-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-step-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-step-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSunrise",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#E0A040] bg-[#4A2C1A] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-step-3-time",
                                "type": "text",
                                "options": {
                                  "text": "5:00 am",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-[#6B4128] px-3 py-1 font-body text-xs font-bold text-[#E0A040]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-step-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Before sunrise",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#F8F5EE]"
                              }
                            }
                          },
                          {
                            "id": "nl-step-3-p",
                            "type": "text",
                            "options": {
                              "text": "The pots come down before the sun warms them, so the sap never sours.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/65"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-step-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-step-4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-step-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFlame",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#E0A040] bg-[#4A2C1A] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-step-4-time",
                                "type": "text",
                                "options": {
                                  "text": "6:00 am",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-[#6B4128] px-3 py-1 font-body text-xs font-bold text-[#E0A040]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-step-4-h",
                            "type": "heading",
                            "options": {
                              "text": "The boil",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#F8F5EE]"
                              }
                            }
                          },
                          {
                            "id": "nl-step-4-p",
                            "type": "text",
                            "options": {
                              "text": "Hours over a wood fire in wide pans, stirred until it turns to deep amber gur.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/65"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-step-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-step-5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-step-5-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPackage",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#E0A040] bg-[#4A2C1A] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-step-5-time",
                                "type": "text",
                                "options": {
                                  "text": "Noon",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-[#6B4128] px-3 py-1 font-body text-xs font-bold text-[#E0A040]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-step-5-h",
                            "type": "heading",
                            "options": {
                              "text": "Same-day pack",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#F8F5EE]"
                              }
                            }
                          },
                          {
                            "id": "nl-step-5-p",
                            "type": "text",
                            "options": {
                              "text": "Poured, set or jarred, labelled with the harvest date and sent to you.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/65"
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
            "id": "nl-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-16 pt-20 lg:py-24 lg:pt-28"
              }
            },
            "children": [
              {
                "id": "nl-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "nl-best-label",
                            "type": "text",
                            "options": {
                              "text": "সবার প্রিয়",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Winter favourites",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-best-sub",
                            "type": "text",
                            "options": {
                              "text": "What families re-order every season.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#B65C34]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-best-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-best-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-best-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
            "id": "nl-purity",
            "type": "section",
            "options": {
              "anchor": "purity"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-purity-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "nl-purity-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-purity-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-purity-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-1 "
                              }
                            },
                            "children": [
                              {
                                "id": "nl-purity-label",
                                "type": "text",
                                "options": {
                                  "text": "খাঁটি না ভেজাল?",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-purity-h",
                                "type": "heading",
                                "options": {
                                  "text": "Real gur vs. market gur",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nl-purity-p",
                        "type": "text",
                        "options": {
                          "text": "Most winter gur in the market is stretched with sugar and bleached with hydros to look appealing. Ours is just sap and fire, and we will show you the lab report.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-base leading-relaxed text-[#6F6358]"
                          }
                        }
                      },
                      {
                        "id": "nl-purity-badge",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-fit items-center gap-3 rounded-2xl bg-[#E3EBDF] px-4 py-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-purity-badge-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMicroscope",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#3E5B3A]"
                              }
                            }
                          },
                          {
                            "id": "nl-purity-badge-t",
                            "type": "text",
                            "options": {
                              "text": "Every batch lab-tested",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3E5B3A]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nl-purity-table",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "overflow-hidden rounded-[24px] ring-1 ring-[#E3DDD0] lg:col-span-8"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-purity-th",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.3fr_1fr_1fr] items-center gap-3 bg-[#4A2C1A] px-5 py-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-purity-th-1",
                            "type": "text",
                            "options": {
                              "text": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            }
                          },
                          {
                            "id": "nl-purity-th-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-purity-th-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-purity-th-2-t",
                                "type": "text",
                                "options": {
                                  "text": "Nolen",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#E0A040]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-purity-th-3",
                            "type": "text",
                            "options": {
                              "text": "Typical market gur",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-pur-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.3fr_1fr_1fr] items-center gap-3 px-5 py-3.5 bg-[#F8F5EE]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pur-1-k",
                            "type": "text",
                            "options": {
                              "text": "Added sugar",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pur-1-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-1-o-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCheck",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#3E5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-1-o-t",
                                "type": "text",
                                "options": {
                                  "text": "Never",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pur-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-1-t-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconX",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-1-t-t",
                                "type": "text",
                                "options": {
                                  "text": "Often, to stretch the sap",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6F6358]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nl-pur-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.3fr_1fr_1fr] items-center gap-3 px-5 py-3.5 bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pur-2-k",
                            "type": "text",
                            "options": {
                              "text": "Hydros (sodium hydrosulphite)",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pur-2-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-2-o-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCheck",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#3E5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-2-o-t",
                                "type": "text",
                                "options": {
                                  "text": "Never",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pur-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-2-t-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconX",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-2-t-t",
                                "type": "text",
                                "options": {
                                  "text": "Used to make it look pale and bright",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6F6358]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nl-pur-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.3fr_1fr_1fr] items-center gap-3 px-5 py-3.5 bg-[#F8F5EE]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pur-3-k",
                            "type": "text",
                            "options": {
                              "text": "Colour",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pur-3-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-3-o-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCheck",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#3E5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-3-o-t",
                                "type": "text",
                                "options": {
                                  "text": "Deep, natural amber-brown",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pur-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-3-t-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconX",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-3-t-t",
                                "type": "text",
                                "options": {
                                  "text": "Unnaturally light or yellow",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6F6358]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nl-pur-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.3fr_1fr_1fr] items-center gap-3 px-5 py-3.5 bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pur-4-k",
                            "type": "text",
                            "options": {
                              "text": "Smell",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pur-4-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-4-o-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCheck",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#3E5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-4-o-t",
                                "type": "text",
                                "options": {
                                  "text": "Smoky, caramel, fresh sap",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pur-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-4-t-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconX",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-4-t-t",
                                "type": "text",
                                "options": {
                                  "text": "Flat or chemical",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6F6358]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nl-pur-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.3fr_1fr_1fr] items-center gap-3 px-5 py-3.5 bg-[#F8F5EE]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pur-5-k",
                            "type": "text",
                            "options": {
                              "text": "Lab test",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pur-5-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-5-o-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCheck",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#3E5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-5-o-t",
                                "type": "text",
                                "options": {
                                  "text": "Every batch, report on request",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pur-5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-5-t-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconX",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-5-t-t",
                                "type": "text",
                                "options": {
                                  "text": "Rarely",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6F6358]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nl-pur-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.3fr_1fr_1fr] items-center gap-3 px-5 py-3.5 bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pur-6-k",
                            "type": "text",
                            "options": {
                              "text": "Harvest date on label",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pur-6-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-6-o-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCheck",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#3E5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-6-o-t",
                                "type": "text",
                                "options": {
                                  "text": "Always",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pur-6-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pur-6-t-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconX",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 flex shrink-0 text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pur-6-t-t",
                                "type": "text",
                                "options": {
                                  "text": "Almost never",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6F6358]"
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
            "id": "nl-row-patali",
            "type": "section",
            "options": {
              "anchor": "patali"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-row-patali-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-row-patali-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-row-patali-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "nl-row-patali-label",
                            "type": "text",
                            "options": {
                              "text": "পাটালি",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-row-patali-h",
                            "type": "heading",
                            "options": {
                              "text": "Patali gur",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-row-patali-sub",
                            "type": "text",
                            "options": {
                              "text": "Clay-moulded cakes, the classic winter gift.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-row-patali-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/patali-gur",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#B65C34]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-row-patali-slider",
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
                                  "patali-gur"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!py-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#4A2C1A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#3B2416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-row-patali-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-row-patali-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-row-patali-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-row-patali-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-row-patali-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-row-patali-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-row-patali-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-row-patali-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-row-patali-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-row-patali-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-row-patali-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-row-patali-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
            "id": "nl-season",
            "type": "section",
            "options": {
              "anchor": "season"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-season-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-end gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "nl-season-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-season-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-season-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-1 "
                              }
                            },
                            "children": [
                              {
                                "id": "nl-season-label",
                                "type": "text",
                                "options": {
                                  "text": "মৌসুম",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-season-h",
                                "type": "heading",
                                "options": {
                                  "text": "Only as long as winter lasts",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nl-season-p",
                        "type": "text",
                        "options": {
                          "text": "Date palms only give sweet sap on cold nights. When the fog lifts for the year, the season closes, so stock up for summer or pre-order next winter’s first batch.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-base leading-relaxed text-[#6F6358]"
                          }
                        }
                      },
                      {
                        "id": "nl-season-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-season-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Stock up now",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#4A2C1A] px-7 py-3.5 transition-colors hover:bg-[#B65C34]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "nl-season-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Pre-order next season",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/pre-order",
                              "target": "",
                              "icon": "IconCalendar",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#4A2C1A] px-7 py-3 transition-colors hover:bg-[#4A2C1A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#4A2C1A] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap group-hover:text-white"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nl-season-chart",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-5 items-end gap-2 rounded-[28px] bg-white p-5 ring-1 ring-[#E3DDD0] sm:gap-4 sm:p-8 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-mon-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-mon-1-bar",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative w-full h-10 rounded-t-[16px] rounded-b-md bg-[#E2E6DF] "
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-mon-1-m",
                            "type": "text",
                            "options": {
                              "text": "Nov",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 font-heading font-normal text-xl text-[#6F6358]"
                              }
                            }
                          },
                          {
                            "id": "nl-mon-1-n",
                            "type": "text",
                            "options": {
                              "text": "First sap",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] leading-tight text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-mon-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-mon-2-bar",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative w-full h-28 rounded-t-[16px] rounded-b-md bg-[#E0A040] after:absolute after:inset-x-0 after:-bottom-2.5 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#6B4128_96%,transparent),radial-gradient(4px_7px_at_50%_0,#6B4128_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-mon-2-m",
                            "type": "text",
                            "options": {
                              "text": "Dec",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 font-heading font-normal text-xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-mon-2-n",
                            "type": "text",
                            "options": {
                              "text": "Nolen (first harvest)",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] leading-tight font-bold text-[#B65C34]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-mon-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-mon-3-bar",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative w-full h-40 rounded-t-[16px] rounded-b-md bg-[#C4842A] after:absolute after:inset-x-0 after:-bottom-2.5 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#6B4128_96%,transparent),radial-gradient(4px_7px_at_50%_0,#6B4128_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-mon-3-m",
                            "type": "text",
                            "options": {
                              "text": "Jan",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 font-heading font-normal text-xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-mon-3-n",
                            "type": "text",
                            "options": {
                              "text": "Peak sweetness",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] leading-tight font-bold text-[#B65C34]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-mon-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-mon-4-bar",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative w-full h-32 rounded-t-[16px] rounded-b-md bg-[#B65C34] after:absolute after:inset-x-0 after:-bottom-2.5 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#6B4128_96%,transparent),radial-gradient(4px_7px_at_50%_0,#6B4128_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-mon-4-m",
                            "type": "text",
                            "options": {
                              "text": "Feb",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 font-heading font-normal text-xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-mon-4-n",
                            "type": "text",
                            "options": {
                              "text": "Patali season",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] leading-tight font-bold text-[#B65C34]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-mon-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-mon-5-bar",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative w-full h-12 rounded-t-[16px] rounded-b-md bg-[#E2E6DF] "
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nl-mon-5-m",
                            "type": "text",
                            "options": {
                              "text": "Mar",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 font-heading font-normal text-xl text-[#6F6358]"
                              }
                            }
                          },
                          {
                            "id": "nl-mon-5-n",
                            "type": "text",
                            "options": {
                              "text": "Last drops",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] leading-tight text-[#6F6358]"
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
            "id": "nl-cats",
            "type": "section",
            "options": {
              "anchor": "pantry"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "nl-cats-label",
                            "type": "text",
                            "options": {
                              "text": "শীতের ভাঁড়ার",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "The winter pantry",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-cats-sub",
                            "type": "text",
                            "options": {
                              "text": "Gur, ghee, honey, mustard oil, chinigura rice and pitha mixes.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-cats-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#B65C34]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-cats-grid",
                    "type": "termsGrid",
                    "options": {
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
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-cats-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-cats-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative block w-full overflow-hidden rounded-t-[40%] rounded-b-[46%] bg-[#F6E1D3] ring-4 ring-white shadow-[0_18px_30px_-20px_rgba(59,36,22,0.6)] transition-transform duration-500 group-hover:-translate-y-1"
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
                            "id": "nl-cats-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-xl leading-tight text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-cats-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " items",
                              "singularSuffix": " item",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "-mt-2 font-body text-xs text-[#6F6358]"
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
            "id": "nl-pitha",
            "type": "section",
            "options": {
              "anchor": "recipes"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBEBCF] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-pitha-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-pitha-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-pitha-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pitha-label",
                            "type": "text",
                            "options": {
                              "text": "পিঠা-পুলির মৌসুম",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-pitha-h",
                            "type": "heading",
                            "options": {
                              "text": "Pitha season recipes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pitha-sub",
                            "type": "text",
                            "options": {
                              "text": "Grandmother-approved, with the gur to make them.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-pitha-all",
                        "type": "button",
                        "options": {
                          "text": "All recipes",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#B65C34]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-pitha-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-pitha-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-4 rounded-[24px] bg-white p-6 ring-1 ring-[#E3DDD0] transition-all hover:-translate-y-1 hover:ring-[#E0A040]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pitha-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pitha-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCookie",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBEBCF] text-[#4A2C1A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pitha-1-time",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 rounded-full bg-[#EEF0EB] px-3 py-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-pitha-1-time-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconClock",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#6F6358]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-pitha-1-time-t",
                                    "type": "text",
                                    "options": {
                                      "text": "30 min",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold text-[#6F6358]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "nl-pitha-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Bhapa pitha",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pitha-1-p",
                            "type": "text",
                            "options": {
                              "text": "Steamed rice cakes with grated coconut and patali.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#6F6358]"
                              }
                            }
                          },
                          {
                            "id": "nl-pitha-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Read the recipe",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/blog",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#B65C34] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-pitha-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-4 rounded-[24px] bg-white p-6 ring-1 ring-[#E3DDD0] transition-all hover:-translate-y-1 hover:ring-[#E0A040]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pitha-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pitha-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconChefHat",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBEBCF] text-[#4A2C1A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pitha-2-time",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 rounded-full bg-[#EEF0EB] px-3 py-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-pitha-2-time-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconClock",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#6F6358]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-pitha-2-time-t",
                                    "type": "text",
                                    "options": {
                                      "text": "40 min",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold text-[#6F6358]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "nl-pitha-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Patishapta",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pitha-2-p",
                            "type": "text",
                            "options": {
                              "text": "Thin crêpes rolled around kheer and jhola gur.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#6F6358]"
                              }
                            }
                          },
                          {
                            "id": "nl-pitha-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Read the recipe",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/blog",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#B65C34] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-pitha-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-4 rounded-[24px] bg-white p-6 ring-1 ring-[#E3DDD0] transition-all hover:-translate-y-1 hover:ring-[#E0A040]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pitha-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pitha-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBowl",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBEBCF] text-[#4A2C1A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-pitha-3-time",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 rounded-full bg-[#EEF0EB] px-3 py-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-pitha-3-time-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconClock",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#6F6358]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-pitha-3-time-t",
                                    "type": "text",
                                    "options": {
                                      "text": "1 hr",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold text-[#6F6358]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "nl-pitha-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Nolen gurer payesh",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-pitha-3-p",
                            "type": "text",
                            "options": {
                              "text": "Chinigura rice pudding finished with nolen gur.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#6F6358]"
                              }
                            }
                          },
                          {
                            "id": "nl-pitha-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Read the recipe",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/blog",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#B65C34] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
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
            "id": "nl-row-gift-boxes",
            "type": "section",
            "options": {
              "anchor": "gift-boxes"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-row-gift-boxes-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-row-gift-boxes-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-row-gift-boxes-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "nl-row-gift-boxes-label",
                            "type": "text",
                            "options": {
                              "text": "উপহার",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-row-gift-boxes-h",
                            "type": "heading",
                            "options": {
                              "text": "Winter gift boxes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-row-gift-boxes-sub",
                            "type": "text",
                            "options": {
                              "text": "Patali, jhola gur and pitha mixes in a clay-red box.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-row-gift-boxes-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/gift-boxes",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#B65C34]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-row-gift-boxes-slider",
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
                                  "gift-boxes"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!py-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#4A2C1A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#3B2416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-row-gift-boxes-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-row-gift-boxes-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-row-gift-boxes-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-row-gift-boxes-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-row-gift-boxes-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-row-gift-boxes-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-row-gift-boxes-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-row-gift-boxes-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-row-gift-boxes-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-row-gift-boxes-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-row-gift-boxes-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-row-gift-boxes-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
            "id": "nl-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-reviews-label",
                            "type": "text",
                            "options": {
                              "text": "মিষ্টি কথা",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Tastes like our childhood winters",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 14,000+ families.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nl-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#4A2C1A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#3B2416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#3B2416]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#E0A040]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E3DDD0]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The jhola gur smells exactly like my grandmother’s kitchen in Khulna. My children finally know what real gur tastes like.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg leading-snug text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3DDD0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "FB",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBEBCF] font-heading font-normal text-base text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Farida Begum",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-body text-xs text-[#6F6358]"
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
                        "id": "nl-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E3DDD0]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Dark, smoky, and you can taste it’s not mixed with sugar. The harvest date on the jar is a lovely touch.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg leading-snug text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3DDD0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "SI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6E1D3] font-heading font-normal text-base text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Shafiqul Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Chattogram",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-body text-xs text-[#6F6358]"
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
                        "id": "nl-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E3DDD0]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Made patishapta with the jhola gur for the whole family. Everyone asked where I bought it.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg leading-snug text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3DDD0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "TR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3EBDF] font-heading font-normal text-base text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tahmina Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Sylhet",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-body text-xs text-[#6F6358]"
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
                        "id": "nl-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E3DDD0]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered patali for my parents in Dhaka as a winter gift. They called to say it was the best in years.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg leading-snug text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3DDD0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "AM",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E2E6DF] font-heading font-normal text-base text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Arif Mahmud",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "London",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-body text-xs text-[#6F6358]"
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
                        "id": "nl-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E3DDD0]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“I asked for the lab report and they sent it the same day. That’s how I know it’s honest.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg leading-snug text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3DDD0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "SA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBEBCF] font-heading font-normal text-base text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sumi Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Rajshahi",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-body text-xs text-[#6F6358]"
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
                        "id": "nl-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E3DDD0]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0A040]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Pre-ordered last summer and the first nolen batch arrived in December, still warm in spirit. Worth the wait.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg leading-snug text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3DDD0] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "KH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6E1D3] font-heading font-normal text-base text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Kamal Hossain",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-body text-xs text-[#6F6358]"
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
            "id": "nl-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "nl-journal-label",
                            "type": "text",
                            "options": {
                              "text": "গল্প ও রেসিপি",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                              }
                            }
                          },
                          {
                            "id": "nl-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Stories from the groves",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-journal-sub",
                            "type": "text",
                            "options": {
                              "text": "Meet the gachhis, learn the craft, cook the classics.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-journal-all",
                        "type": "button",
                        "options": {
                          "text": "All stories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 border-b-2 border-[#E0A040] pb-1 transition-colors hover:border-[#4A2C1A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#B65C34]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#4A2C1A] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-journal-grid",
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
                        "id": "nl-journal-loop",
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
                            "id": "nl-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[24px] bg-[#E2E6DF]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[4/3] w-full object-cover sepia-[.25] transition-all duration-700 group-hover:scale-105 group-hover:sepia-0"
                              }
                            }
                          },
                          {
                            "id": "nl-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6F6358]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#4A2C1A]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#B65C34] transition-transform group-hover/rm:translate-x-1"
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
            "id": "nl-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nl-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "nl-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-1 "
                              }
                            },
                            "children": [
                              {
                                "id": "nl-faq-label",
                                "type": "text",
                                "options": {
                                  "text": "প্রশ্ন",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Galada'] text-2xl leading-none text-[#B65C34]"
                                  }
                                }
                              },
                              {
                                "id": "nl-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.08] sm:text-5xl text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "nl-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Storing, purity, the season and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 text-base text-[#6F6358]"
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
                    "id": "nl-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How do I store gur?",
                          "classes": ""
                        },
                        {
                          "label": "Why is your gur darker than the market’s?",
                          "classes": ""
                        },
                        {
                          "label": "Is there any sugar in it?",
                          "classes": ""
                        },
                        {
                          "label": "When is the season?",
                          "classes": ""
                        },
                        {
                          "label": "Do you deliver nationwide?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-5 font-heading text-lg text-[#3B2416] transition-colors hover:bg-[#FBEBCF]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#4A2C1A] !text-white"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#E0A040]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nl-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Keep jhola gur in the fridge and use it within 2-3 weeks; it is natural and can ferment if left warm. Patali and dana gur keep for months in an airtight jar in a cool place.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nl-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Because we don’t bleach it. Natural gur is deep amber to brown; very pale or bright yellow gur is usually treated with hydros.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nl-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "No. Our gur is only date-palm sap, boiled down. Ask for any batch’s lab report and we’ll send it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nl-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Roughly December to February, depending on how cold the winter is. Nolen (the first harvest) comes in December.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nl-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Inside Dhaka in 24-48 hours, 2-4 days elsewhere, packed in insulated boxes. Cash on delivery available.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6F6358]"
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
            "id": "nl-cta",
            "type": "section",
            "options": {
              "anchor": "subscribe"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] pb-16 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "nl-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] bg-[#4A2C1A] p-8 sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-cta-drips",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-x-0 top-0 h-3.5 bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] bg-[length:56px_14px,23px_9px] bg-[position:0_0,11px_0] bg-repeat-x"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "nl-cta-glow",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#E0A040]/25 blur-3xl"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "nl-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-cta-bn",
                            "type": "text",
                            "options": {
                              "text": "সারা শীত, তাজা গুড়",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Galada'] text-3xl leading-none text-[#E0A040]"
                              }
                            }
                          },
                          {
                            "id": "nl-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "A fresh jar every two weeks, all winter.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.08] text-[#F8F5EE] sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nl-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Subscribe once and we send each fortnight’s freshest jhola or patali gur, from first nolen to the last drops. Pause or cancel any time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Start my gur subscription",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconCalendar",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E0A040] px-7 py-3.5 transition-colors hover:bg-[#C4842A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#3B2416]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap"
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
            "id": "nl-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "This winter’s harvest",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Products",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every jar, patali and pantry staple, newest batch first. Each label carries its harvest date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-shop-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
                        "id": "nl-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A2C1A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nl-shop-promise",
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
                "id": "nl-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% pure",
                          "description": "No sugar, no hydros",
                          "icon": "IconLeaf",
                          "iconSize": ""
                        },
                        {
                          "title": "Lab-tested",
                          "description": "Every batch",
                          "icon": "IconMicroscope",
                          "iconSize": ""
                        },
                        {
                          "title": "Harvest-dated",
                          "description": "On every jar",
                          "icon": "IconCalendar",
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
                        "classes": "font-heading text-xl text-[#3B2416]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FBEBCF] text-[#4A2C1A]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-shop-promise-fb-ic",
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
                        "id": "nl-shop-promise-fb-t",
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
                        "id": "nl-shop-promise-fb-d",
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
            "id": "nl-pd",
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
                "id": "nl-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-pd-grid",
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
                        "id": "nl-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#E3EBDF] via-white to-[#F8F5EE] p-4 shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-[24px] bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#3B2416]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#3B2416]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#4A2C1A]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pd-cats",
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
                                "classes": "rounded-full bg-[#E3EBDF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#4A2C1A] hover:bg-[#4A2C1A] hover:text-white"
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
                            "id": "nl-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-normal leading-tight text-[#3B2416] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "nl-pd-rate",
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
                                "classes": "font-body font-bold text-[#3B2416]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "nl-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-price",
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
                                    "classes": "font-heading text-3xl font-normal text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-normal text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-normal text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#4A2C1A] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "nl-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6F6358]"
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
                            "id": "nl-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#3B2416]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:bg-[#E3EBDF]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#4A2C1A] !bg-[#E3EBDF] !text-[#6B4128]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "nl-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "This batch is gone · pre-order the next one",
                              "inStockText": "Fresh batch in stock · ships within 24 hours",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#4A2C1A]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#4A2C1A]"
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
                            "id": "nl-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Basket",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#3B2416]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#EEF0EB]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#EEF0EB]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#4A2C1A] px-8 text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#3B2416]"
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
                            "id": "nl-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "100% pure",
                                  "description": "Sap and fire only",
                                  "icon": "IconLeaf",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Lab-tested",
                                  "description": "Report on request",
                                  "icon": "IconMicroscope",
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
                                "classes": "font-body text-base font-bold text-[#3B2416]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E3EBDF] text-[#4A2C1A]"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-perks-ic",
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
                                "id": "nl-pd-perks-t",
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
                                "id": "nl-pd-perks-d",
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
                            "id": "nl-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-sku",
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
                                    "classes": "font-semibold text-[#3B2416]"
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
                                "id": "nl-pd-brands",
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
                                    "classes": "font-semibold text-[#3B2416]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#4A2C1A]"
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
                                "id": "nl-pd-tags",
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
                                    "classes": "font-semibold text-[#3B2416]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#4A2C1A]"
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
            "id": "nl-pd-tabs-sec",
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
                "id": "nl-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(59,36,22,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "About this batch",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Storage & use",
                              "icon": "IconSnowflake"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#EEF0EB] px-5 py-2.5 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#3B2416] !text-white shadow-md"
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
                            "id": "nl-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#3B2416] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#3B2416] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#4A2C1A] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E0A040] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconSnowflake",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Harvest date, grove and weight are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Jhola gur: refrigerate and use within 2-3 weeks",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Patali and dana gur: airtight jar, cool place, keeps for months",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Natural gur may crystallise; warm gently to loosen",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#4A2C1A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-ship-list",
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
                                      "text": "Packed in insulated boxes to stay fresh",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Leaked or damaged jars are replaced free",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#4A2C1A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nl-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#EEF0EB] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#EEF0EB] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nl-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FBEBCF]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nl-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#3B2416]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nl-pd-reviews-rate",
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
                                        "id": "nl-pd-reviews-co",
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
                                    "id": "nl-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How was the taste and aroma? What did you make with it?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(59,36,22,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#3B2416]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#EEF0EB] px-4 py-3 text-sm text-[#3B2416] placeholder:text-gray-400 focus:border-[#4A2C1A] focus:outline-none focus:ring-2 focus:ring-[#4A2C1A]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#4A2C1A] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#3B2416] disabled:opacity-50"
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
            "id": "nl-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-16"
              }
            },
            "children": [
              {
                "id": "nl-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "For the same table",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FBEBCF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#4A2C1A]"
                          }
                        }
                      },
                      {
                        "id": "nl-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#3B2416]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-pd-rel-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
            "id": "nl-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The winter pantry",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Gur in every form, plus ghee, honey, mustard oil, chinigura rice and pitha mixes.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#E3EBDF] transition-transform"
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
                            "id": "nl-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#3B2416] transition-colors group-hover:text-[#4A2C1A]"
                              }
                            }
                          },
                          {
                            "id": "nl-cat-grid-count",
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
                        "id": "nl-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A2C1A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nl-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nl-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#4A2C1A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-cat1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
                        "id": "nl-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A2C1A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nl-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group our harvest by batch and use: nolen, this week, bestsellers, gifts and pre-orders.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4A2C1A]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4A2C1A]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3B2416] group-hover:text-[#4A2C1A]"
                              }
                            }
                          },
                          {
                            "id": "nl-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#EEF0EB] px-2 py-0.5 text-[10px] font-bold text-[#6F6358]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nl-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A2C1A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nl-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nl-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#4A2C1A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-tag1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
                        "id": "nl-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A2C1A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nl-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Groves & makers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Groves",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every grove and partner maker we source from.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#EEF0EB] p-3"
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
                            "id": "nl-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#3B2416] group-hover:text-[#4A2C1A]"
                              }
                            }
                          },
                          {
                            "id": "nl-brand-grid-count",
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
                        "id": "nl-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A2C1A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nl-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nl-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#4A2C1A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-brand1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
                        "id": "nl-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A2C1A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nl-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Stories & recipes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Stories from the Groves",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Meet the gachhis, learn the craft and cook the winter classics.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F8F5EE]"
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
                            "id": "nl-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#4A2C1A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#3B2416] transition-colors group-hover:text-[#4A2C1A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#4A2C1A]"
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
                        "id": "nl-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#3B2416] transition-colors hover:border-[#4A2C1A] hover:text-[#4A2C1A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#4A2C1A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nl-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8F5EE] via-white to-[#EEF0EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nl-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-post-k",
                    "type": "text",
                    "options": {
                      "text": "Stories & recipes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E3EBDF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#4A2C1A]"
                      }
                    }
                  },
                  {
                    "id": "nl-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal leading-tight text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6F6358]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-post-author",
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
                            "classes": "font-body font-bold text-[#3B2416]"
                          }
                        }
                      },
                      {
                        "id": "nl-post-dot",
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
                        "id": "nl-post-date",
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
                    "id": "nl-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
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
            "id": "nl-post-body",
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
                "id": "nl-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#3B2416] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#3B2416] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#4A2C1A] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E0A040] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-16"
              }
            },
            "children": [
              {
                "id": "nl-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#3B2416]"
                      }
                    }
                  },
                  {
                    "id": "nl-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#EEF0EB] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#EEF0EB] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FBEBCF]"
                              }
                            }
                          },
                          {
                            "id": "nl-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "nl-post-cmt-co",
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
                        "id": "nl-post-cmt-form",
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
                            "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(59,36,22,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#EEF0EB] px-4 py-3 text-sm text-[#3B2416] placeholder:text-gray-400 focus:border-[#4A2C1A] focus:outline-none focus:ring-2 focus:ring-[#4A2C1A]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#4A2C1A] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#3B2416] disabled:opacity-50"
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
            "id": "nl-post-more",
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
                "id": "nl-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Stories",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#3B2416]"
                      }
                    }
                  },
                  {
                    "id": "nl-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,36,22,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F8F5EE]"
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
                            "id": "nl-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#4A2C1A]"
                                  }
                                }
                              },
                              {
                                "id": "nl-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#3B2416] transition-colors group-hover:text-[#4A2C1A]"
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
            "id": "nl-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] bg-[linear-gradient(180deg,#DCE3E3,#EEF0EB)] pb-14 pt-16 sm:pb-16 sm:pt-20"
              }
            },
            "children": [
              {
                "id": "nl-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nl-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B65C34]"
                      }
                    }
                  },
                  {
                    "id": "nl-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#3B2416] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nl-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage your gur subscription and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6F6358] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nl-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-12"
              }
            },
            "children": [
              {
                "id": "nl-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#3B2416] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#E0A040]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-normal text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#4A2C1A]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#4A2C1A]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#4A2C1A]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "nl-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nl-acc-3",
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
                                "id": "nl-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(59,36,22,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4A2C1A] focus:outline-none focus:ring-2 focus:ring-[#4A2C1A]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4A2C1A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3B2416] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2C1A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "nl-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(59,36,22,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4A2C1A] focus:outline-none focus:ring-2 focus:ring-[#4A2C1A]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4A2C1A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3B2416] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2C1A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "nl-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "nl-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#EEF0EB] px-5 py-2.5 font-body text-sm font-semibold text-[#3B2416] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#3B2416] !text-white shadow-md"
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
                                "id": "nl-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4A2C1A]/10 text-[#4A2C1A]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nl-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#4A2C1A] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nl-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4A2C1A]/10 text-[#4A2C1A]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nl-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#4A2C1A]/40 hover:bg-[#4A2C1A]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4A2C1A]/10 text-[#4A2C1A]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nl-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4A2C1A]/10 text-[#4A2C1A]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#4A2C1A] focus:outline-none focus:ring-2 focus:ring-[#4A2C1A]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#4A2C1A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3B2416] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2C1A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2C1A]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "nl-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8F5EE] via-white to-[#EEF0EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nl-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(59,36,22,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#E3EBDF] text-[#4A2C1A]"
                          }
                        }
                      },
                      {
                        "id": "nl-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FBEBCF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#4A2C1A]"
                          }
                        }
                      },
                      {
                        "id": "nl-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! Your Gur Is on Its Way",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#3B2416] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "nl-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re packing your order from the freshest batch. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6F6358] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "nl-ty-steps",
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
                              "text": "Your gur is packed from the freshest batch, with its harvest date",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[24px] bg-[#EEF0EB] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#4A2C1A]"
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
                        "id": "nl-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4A2C1A] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#3B2416] w-full sm:w-auto"
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
                            "id": "nl-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#4A2C1A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#4A2C1A] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#4A2C1A] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#4A2C1A] whitespace-nowrap group-hover:text-white"
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
            "id": "nl-ty-promise",
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
                "id": "nl-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% pure",
                          "description": "No sugar, no hydros",
                          "icon": "IconLeaf",
                          "iconSize": ""
                        },
                        {
                          "title": "Lab-tested",
                          "description": "Every batch",
                          "icon": "IconMicroscope",
                          "iconSize": ""
                        },
                        {
                          "title": "Harvest-dated",
                          "description": "On every jar",
                          "icon": "IconCalendar",
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
                        "classes": "font-heading text-xl text-[#3B2416]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FBEBCF] text-[#4A2C1A]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-ty-promise-fb-ic",
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
                        "id": "nl-ty-promise-fb-t",
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
                        "id": "nl-ty-promise-fb-d",
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
            "id": "nl-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8F5EE] via-white to-[#EEF0EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nl-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-normal text-[#4A2C1A] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "nl-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F5EE] text-[#3B2416]"
                      }
                    }
                  },
                  {
                    "id": "nl-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Melted Away",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal text-[#3B2416] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "nl-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or this batch may have sold out. Head back home or browse this week’s harvest.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6F6358] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "nl-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4A2C1A] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(74,44,26,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#3B2416] w-full sm:w-auto"
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
                        "id": "nl-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop the Harvest",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#4A2C1A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#4A2C1A] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#4A2C1A] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#4A2C1A] whitespace-nowrap group-hover:text-white"
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
            "id": "nl-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEF0EB] py-16"
              }
            },
            "children": [
              {
                "id": "nl-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nl-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E0A040] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#3B2416]"
                          }
                        }
                      },
                      {
                        "id": "nl-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#3B2416] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nl-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nl-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[24px] bg-white p-3 ring-1 ring-[#E3DDD0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_-26px_rgba(59,36,22,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nl-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[18px] bg-[#EEF0EB] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-3 after:bg-[radial-gradient(7px_11px_at_50%_0,#E0A040_96%,transparent),radial-gradient(4px_7px_at_50%_0,#E0A040_96%,transparent)] after:bg-[length:56px_14px,23px_9px] after:bg-[position:0_0,11px_0] after:bg-repeat-x after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:after:opacity-100"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#B65C34] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "nl-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nl-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0A040]"
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
                                    "id": "nl-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg leading-snug text-[#3B2416] transition-colors group-hover:text-[#B65C34]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nl-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#6F6358]"
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
                            "id": "nl-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3DDD0] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nl-nf-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6F6358] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#4A2C1A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#4A2C1A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#4A2C1A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nl-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#4A2C1A] px-4 text-white transition-colors hover:bg-[#B65C34]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold whitespace-nowrap"
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
