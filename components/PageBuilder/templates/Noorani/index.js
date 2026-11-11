/**
 * Template: Noorani Panjabi House.
 *
 * A modern Islamic menswear store for Bangladesh: panjabi, jubba and thobe,
 * kabli and pathani sets, plus attar, tupi and prayer essentials. Like
 * WonderJoy.js and Nexora.js it is a complete storefront carrying all sixteen
 * page types - Header, Footer, Home, Shop, Product, the six taxonomy
 * archives, Blog Archive, Blog Single, Account, Thank you and 404 - so
 * applying it replaces every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to nr-, palette remapped, radii calmed, copy
 * rewritten), so it uses only blocks and option shapes already proven on the
 * builder and the storefront. Home is built fresh from the same block types.
 * It is plain data: edit freely.
 *
 * DESIGN
 *
 *   emerald   #0F5B44  primary buttons, prices, links      #0A4533 hover  #E8F1EC tint
 *   gold      #8A6A2A  kickers, secondary text on light    #6F5420 hover  #F5EEDD tint
 *   gold lt   #D6B565  gold on dark: Arabic, CTAs, stats   #E6CF93 hover
 *   night     #0C2E24  hero, Eid banner, craft band, promo bar
 *   ink       #13281F  text, footer        muted #5E6A63   ivory #F8F5EE  cream #FBF6EA
 *
 * Fonts (template meta): Cormorant Garamond for display headings, Manrope for
 * body and every small label (Cormorant is thin under ~20px, so the build
 * moved small `font-heading` labels, buttons, prices and card titles to
 * `font-body`), and Amiri for the Arabic accents via `font-['Amiri']`.
 *
 * Islamic motifs: mihrab-arch frames (`rounded-t-[10rem]` / `rounded-t-full`)
 * on product images, category tiles, the hero, the brand mark and icon wells;
 * an eight-point star lattice (public/templates/noorani-pattern.svg) laid
 * over the dark bands and the inner page heads; Arabic calligraphy lines.
 *
 * HOME
 *
 *   Night-green hero with pattern, salam greeting and an arched panjabi
 *   illustration (public/templates/noorani-hero.svg) - four promises (COD,
 *   delivery, exchange, fabrics) - collections slider of product_cat in arch
 *   frames (#collections) - new arrivals slider (#new) - Eid banner (#eid) -
 *   rows for panjabi, jubba-thobe (#panjabi, #jubba-thobe) - craft story
 *   with the hadith "Allah is beautiful and loves beauty" (Sahih Muslim 91)
 *   (#craft) - rows for kabli-pathani, attar-tupi (#kabli-pathani,
 *   #essentials) - reviews slider - latest three journal posts (#journal) -
 *   FAQ (#faq) - "Join the Noorani Circle" CTA to /register (#join).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs the links and rows assume: panjabi, jubba-thobe,
 *     kabli-pathani, eid-collection, attar-tupi.
 *   - Contact details (+880 1700-000000, hello@example.com, hours), social
 *     URLs, the promo code EIDNOOR and the 10% welcome offer.
 *   - Hero numbers (25k+, 4.9) and the six reviews are sample copy.
 *   - Delivery times, COD coverage and the 7-day exchange: check they match
 *     how the shop actually works.
 */

var template = [
  {
    "name": "Noorani Panjabi House",
    "description": "Modern Islamic menswear store for panjabi, jubba, kabli sets, attar and tupi, in emerald, antique gold and ivory with Arabic calligraphy accents, geometric patterns and mihrab-arch product frames: dark hero, collections, new arrivals, an Eid banner, category rows, a hadith-led craft story, reviews, journal, FAQ and a members CTA. All 16 pages.",
    "thumbnail": "/templates/noorani.svg",
    "meta": {
      "fonts": [
        {
          "family": "Cormorant Garamond",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Manrope",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Amiri",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Cormorant Garamond",
        "body": "Manrope"
      },
      "colors": {
        "primary": "#0F5B44",
        "secondary": "#8A6A2A",
        "accent": "#D6B565",
        "background": "#F8F5EE",
        "foreground": "#13281F",
        "muted": "#5E6A63"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "nr-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "nr-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#0C2E24] px-4 py-2 text-center text-xs font-medium text-white/80 md:text-sm"
                  }
                },
                "children": [
                  {
                    "id": "nr-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "☾ The new Eid Collection is here. Free delivery in Dhaka over ৳3,000. Code:",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "nr-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "EIDNOOR",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#D6B565] px-2 py-0.5 font-mono text-xs font-bold text-[#0C2E24]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Shop now",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/shop",
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
                        "classes": "text-xs font-bold text-[#D6B565] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "nr-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-20 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "ن",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-11 text-3xl items-center justify-center rounded-t-full rounded-b-md border border-[#D6B565]/60 bg-[#0F5B44] pb-1 font-['Amiri'] font-bold leading-none text-[#D6B565]"
                              }
                            }
                          },
                          {
                            "id": "nr-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Noorani",
                                  "src": "https://placehold.co/200x64?text=Noorani",
                                  "altText": "Noorani Panjabi House",
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
                                    "classes": "font-heading text-2xl font-bold tracking-tight text-[#13281F]"
                                  }
                                }
                              },
                              {
                                "id": "nr-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Panjabi & Sunnah Wear",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#8A6A2A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nr-hdr-menu",
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
                            "classes": "flex items-center gap-7"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-base font-medium text-[#13281F] transition-colors hover:text-[#0F5B44]"
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
                            "id": "nr-hdr-mi-1",
                            "type": "menuItem",
                            "options": {
                              "label": "New Arrivals",
                              "url": "/#new"
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
                            "id": "nr-hdr-mi-2",
                            "type": "menuItem",
                            "options": {
                              "label": "Panjabi",
                              "url": "/categories/panjabi"
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
                            "id": "nr-hdr-mi-3",
                            "type": "menuItem",
                            "options": {
                              "label": "Jubba & Thobe",
                              "url": "/categories/jubba-thobe"
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
                            "id": "nr-hdr-mi-4",
                            "type": "menuItem",
                            "options": {
                              "label": "Eid Collection",
                              "url": "/#eid"
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
                            "id": "nr-hdr-mi-5",
                            "type": "menuItem",
                            "options": {
                              "label": "Essentials",
                              "url": "/categories/attar-tupi",
                              "icon": "IconGift",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "!text-[#0F5B44] font-bold"
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
                        "id": "nr-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search panjabi, jubba, attar...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full border border-gray-200 bg-[#F8F5EE] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#8A6A2A] focus-within:ring-2 focus-within:ring-[#8A6A2A]/20 ml-4 hidden max-w-xs flex-1 md:block xl:max-w-sm"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#13281F] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#5E6A63]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0F5B44] focus:outline-none focus:ring-2 focus:ring-[#0F5B44]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0F5B44]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#0F5B44]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0F5B44] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A4533]"
                          }
                        }
                      },
                      {
                        "id": "nr-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F8F5EE] text-[#13281F] transition-colors hover:bg-[#E8F1EC] hover:text-[#0F5B44]"
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
                            "id": "nr-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#8A6A2A] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#6F5420]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#0F5B44] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F8F5EE] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#13281F]"
                              },
                              "title-icon": {
                                "classes": "text-[#0F5B44]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#0F5B44] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#0F5B44] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0A4533]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5B44]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#0F5B44] focus:outline-none focus:ring-2 focus:ring-[#0F5B44]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#0F5B44] px-4 py-2 text-sm font-medium text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F5B44] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A4533] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5B44]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "nr-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F8F5EE] text-[#13281F]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F8F5EE] p-2 text-[#13281F] transition-colors hover:bg-[#0F5B44] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "ن",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-9 text-2xl items-center justify-center rounded-t-full rounded-b-md border border-[#D6B565]/60 bg-[#0F5B44] pb-1 font-['Amiri'] font-bold leading-none text-[#D6B565]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nr-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Noorani",
                                          "src": "https://placehold.co/200x64?text=Noorani",
                                          "altText": "Noorani Panjabi House",
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
                                            "classes": "font-heading text-2xl font-bold tracking-tight text-[#13281F]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nr-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Panjabi & Sunnah Wear",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#8A6A2A]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "nr-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search panjabi, jubba, attar...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F8F5EE] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#8A6A2A] focus-within:ring-2 focus-within:ring-[#8A6A2A]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#13281F] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#5E6A63]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0F5B44] focus:outline-none focus:ring-2 focus:ring-[#0F5B44]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0F5B44]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#0F5B44]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0F5B44] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A4533]"
                                  }
                                }
                              },
                              {
                                "id": "nr-hdr-m-menu",
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
                                    "classes": "min-w-52 rounded-xl border border-gray-100 bg-white py-2 shadow-lg"
                                  },
                                  "menu-link": {
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#13281F] transition-colors hover:text-[#0F5B44]"
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
                                    "id": "nr-hdr-mm-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "New Arrivals",
                                      "url": "/#new"
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
                                    "id": "nr-hdr-mm-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Panjabi",
                                      "url": "/categories/panjabi"
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
                                    "id": "nr-hdr-mm-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Jubba & Thobe",
                                      "url": "/categories/jubba-thobe"
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
                                    "id": "nr-hdr-mm-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Eid Collection",
                                      "url": "/#eid"
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
                                    "id": "nr-hdr-mm-5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Essentials",
                                      "url": "/categories/attar-tupi",
                                      "icon": "IconGift",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "!text-[#0F5B44] font-bold"
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
          }
        ],
        "meta": ""
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "nr-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#13281F] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "nr-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "nr-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-[#D6B565]/30 bg-[#0F5B44] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Join the Noorani Circle",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-xs font-bold uppercase tracking-[0.25em] text-[#D6B565]"
                              }
                            }
                          },
                          {
                            "id": "nr-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Get 10% Off Your First Panjabi",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-bold text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "nr-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account for your welcome code, early access to Eid drops and our monthly style & sunnah notes.",
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
                        "id": "nr-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Claim 10% Off",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconGift",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D6B565] px-8 py-4 shadow-[0_12px_30px_-10px_rgba(214,181,101,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#E6CF93] sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#0C2E24]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-[#0C2E24] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "nr-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "nr-ftr-grid",
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
                        "id": "nr-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "ن",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-9 text-2xl items-center justify-center rounded-t-full rounded-b-md border border-[#D6B565]/60 bg-[#0F5B44] pb-1 font-['Amiri'] font-bold leading-none text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Noorani",
                                      "src": "https://placehold.co/200x64?text=Noorani",
                                      "altText": "Noorani Panjabi House",
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
                                        "classes": "font-heading text-2xl font-bold tracking-tight text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "nr-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Modest, modern menswear for the Muslim gentleman: panjabis, jubbas and kabli sets tailored in Bangladesh from breathable cotton, linen and silk blends.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "nr-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0F5B44]"
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
                                "id": "nr-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0F5B44]"
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
                                "id": "nr-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0F5B44]"
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
                                "id": "nr-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0F5B44]"
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
                        "id": "nr-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nr-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Collections",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Panjabi",
                                  "icon": "",
                                  "slug": "/categories/panjabi"
                                },
                                {
                                  "text": "Jubba & Thobe",
                                  "icon": "",
                                  "slug": "/categories/jubba-thobe"
                                },
                                {
                                  "text": "Kabli & Pathani",
                                  "icon": "",
                                  "slug": "/categories/kabli-pathani"
                                },
                                {
                                  "text": "Eid Collection",
                                  "icon": "",
                                  "slug": "/categories/eid-collection"
                                },
                                {
                                  "text": "Attar, Tupi & Essentials",
                                  "icon": "",
                                  "slug": "/categories/attar-tupi"
                                },
                                {
                                  "text": "Shop All",
                                  "icon": "",
                                  "slug": "/shop"
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
                                "classes": "transition-colors hover:text-[#D6B565]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D6B565]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nr-ftr-ll-care",
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
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Delivery & Exchange",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "The Noorani Journal",
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
                                "classes": "transition-colors hover:text-[#D6B565]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D6B565]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-ftr-contact-h",
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
                            "id": "nr-ftr-address",
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
                                "value": "Sat-Thu: 10am - 9pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#D6B565]"
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
                                "classes": "shrink-0 text-[#0F5B44]"
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
                "id": "nr-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "nr-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Noorani Panjabi House. All rights reserved. Crafted with ihsan in Bangladesh.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "nr-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "Cash on Delivery · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-xs font-semibold uppercase tracking-wider"
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
            "id": "nr-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0C2E24] pb-20 pt-12 lg:pb-28 lg:pt-20"
              }
            },
            "children": [
              {
                "id": "nr-hero-pattern",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px] opacity-60"
                  }
                },
                "children": []
              },
              {
                "id": "nr-hero-glow",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] max-w-full rounded-full bg-[#0F5B44] opacity-50 blur-[120px]"
                  }
                },
                "children": []
              },
              {
                "id": "nr-hero-fade",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0C2E24] to-transparent"
                  }
                },
                "children": []
              },
              {
                "id": "nr-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "nr-hero-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-14 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-6 text-center lg:col-span-7 lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-hero-salam",
                            "type": "text",
                            "options": {
                              "text": "السَّلَامُ عَلَيْكُمْ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Amiri'] text-3xl leading-none text-[#D6B565] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "nr-hero-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 rounded-full border border-[#D6B565]/30 bg-white/5 px-4 py-2 backdrop-blur-sm"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-hero-badge-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMoonStars",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-hero-badge-t",
                                "type": "text",
                                "options": {
                                  "text": "The Eid Collection is here",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs font-bold uppercase tracking-[0.2em] text-white/90"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Elegance Rooted in Sunnah, Tailored for Today",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-semibold leading-[1.05] text-white sm:text-6xl xl:text-7xl"
                              }
                            }
                          },
                          {
                            "id": "nr-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Premium panjabis, jubbas and kabli sets in breathable cotton, linen and silk blends. Cut clean, finished by hand, made for Jummah, Eid and every day in between.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0"
                              }
                            }
                          },
                          {
                            "id": "nr-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-full flex-col items-center gap-4 pt-2 sm:flex-row lg:justify-start"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop the Eid Edit",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D6B565] px-8 py-4 shadow-[0_12px_30px_-10px_rgba(214,181,101,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#E6CF93] sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#0C2E24]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-[#0C2E24] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "nr-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Explore Collections",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#collections",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 transition-all hover:border-[#D6B565] hover:bg-white/5 sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white group-hover:text-[#D6B565]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap group-hover:text-[#D6B565]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-hero-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 grid w-full max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-hero-stat-0",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-hero-stat-0-v",
                                    "type": "text",
                                    "options": {
                                      "text": "25k+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-semibold text-[#D6B565]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-hero-stat-0-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Brothers served",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nr-hero-stat-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-hero-stat-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "100%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-semibold text-[#D6B565]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-hero-stat-1-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Natural fabrics",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nr-hero-stat-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-hero-stat-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "4.9★",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-semibold text-[#D6B565]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-hero-stat-2-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Avg. rating",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold uppercase tracking-wider text-white/60"
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
                        "id": "nr-hero-visual",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-hero-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative overflow-hidden rounded-t-[999px] rounded-b-3xl border border-[#D6B565]/40 bg-gradient-to-b from-[#0F5B44] to-[#0C2E24] p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-hero-arch-in",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "overflow-hidden rounded-t-[999px] rounded-b-2xl border border-[#D6B565]/25"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-hero-img",
                                    "type": "image",
                                    "options": {
                                      "src": "/templates/noorani-hero.svg",
                                      "altText": "An ivory panjabi framed in a mihrab arch under a crescent moon",
                                      "link": "/shop",
                                      "newTab": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "img": {
                                        "classes": "block h-auto w-full"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "nr-hero-float-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -left-4 top-1/3 hidden items-center gap-3 rounded-2xl border border-[#D6B565]/30 bg-[#0C2E24]/90 p-3.5 shadow-xl backdrop-blur-md sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-hero-float-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconNeedleThread",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-xl bg-[#D6B565]/15 text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-hero-float-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-hero-float-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Hand-finished",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-bold uppercase tracking-wider text-white/50"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-hero-float-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Embroidered collars",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "nr-hero-float-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -right-3 bottom-10 hidden items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-hero-float-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCash",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F1EC] text-[#0F5B44]"
                                  }
                                }
                              },
                              {
                                "id": "nr-hero-float-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-hero-float-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Pay on delivery",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-bold uppercase tracking-wider text-[#5E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-hero-float-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "All over Bangladesh",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm font-semibold text-[#13281F]"
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
            "id": "nr-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y border-[#8A6A2A]/15 bg-[#FBF6EA] py-10"
              }
            },
            "children": [
              {
                "id": "nr-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay when it arrives, anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast Delivery",
                          "description": "24h inside Dhaka, 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-Day Easy Exchange",
                          "description": "Wrong size? Swap it, no questions asked",
                          "icon": "IconArrowsExchange",
                          "iconSize": ""
                        },
                        {
                          "title": "Premium Fabrics",
                          "description": "Breathable cotton, linen and silk blends",
                          "icon": "IconNeedleThread",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-6 text-center md:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "flex flex-col items-center gap-2 p-3"
                      },
                      "title": {
                        "classes": "font-body text-sm font-bold uppercase tracking-wider text-[#13281F]"
                      },
                      "description": {
                        "classes": "text-xs text-[#5E6A63]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-t-full rounded-b-md border border-[#8A6A2A]/30 bg-white text-[#0F5B44]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
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
                        "id": "nr-promise-fb-t",
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
                        "id": "nr-promise-fb-d",
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
            "id": "nr-cols",
            "type": "section",
            "options": {
              "anchor": "collections"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nr-cols-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-cols-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-cols-ar",
                        "type": "text",
                        "options": {
                          "text": "مجموعات",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Amiri'] text-2xl leading-none text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-cols-k",
                        "type": "text",
                        "options": {
                          "text": "Shop by collection",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-cols-h",
                        "type": "heading",
                        "options": {
                          "text": "Curated for the Modern Muslim Man",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight text-[#13281F] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "nr-cols-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#8A6A2A]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-cols-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nr-cols-rule-star",
                            "type": "text",
                            "options": {
                              "text": "✦",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs leading-none"
                              }
                            }
                          },
                          {
                            "id": "nr-cols-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "nr-cols-p",
                        "type": "text",
                        "options": {
                          "text": "From everyday cotton panjabis to festive silk sets: find the piece for the occasion.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base leading-relaxed text-[#5E6A63]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-cols-slider",
                    "type": "termsSlider",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "12",
                        "per_page": "12",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count",
                        "paged": 1
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1.25rem",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(19,40,31,0.15)] transition-colors hover:!bg-[#0F5B44] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0F5B44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center gap-1 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-cols-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center gap-1 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-cols-slider-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mb-4 w-full overflow-hidden rounded-t-[10rem] rounded-b-xl border border-[#8A6A2A]/25 bg-[#F5EEDD] p-1.5 transition-all duration-300 group-hover:border-[#8A6A2A]/60 group-hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.35)]"
                              },
                              "link": {
                                "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-lg"
                              },
                              "image": {
                                "classes": "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "nr-cols-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                              }
                            }
                          },
                          {
                            "id": "nr-cols-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " items",
                              "singularSuffix": " item",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11px] font-bold uppercase tracking-wider text-[#8A6A2A]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nr-cols-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-cols-all",
                        "type": "button",
                        "options": {
                          "text": "View all collections",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 border-b border-[#8A6A2A]/40 pb-1 transition-colors hover:border-[#0F5B44]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#8A6A2A] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#8A6A2A] group-hover:text-[#0F5B44]"
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
            "id": "nr-row-new",
            "type": "section",
            "options": {
              "anchor": "new"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "nr-row-new-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-new-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-new-ar",
                        "type": "text",
                        "options": {
                          "text": "جديد",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Amiri'] text-2xl leading-none text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-new-k",
                        "type": "text",
                        "options": {
                          "text": "Fresh from the atelier",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-new-h",
                        "type": "heading",
                        "options": {
                          "text": "Signature Panjabis",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight text-[#13281F] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "nr-new-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#8A6A2A]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-new-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nr-new-rule-star",
                            "type": "text",
                            "options": {
                              "text": "✦",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs leading-none"
                              }
                            }
                          },
                          {
                            "id": "nr-new-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "nr-new-p",
                        "type": "text",
                        "options": {
                          "text": "Our newest cuts, fabrics and embroideries. Limited runs, so the good sizes go first.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base leading-relaxed text-[#5E6A63]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-row-new-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": []
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 4,
                        "perMove": 1,
                        "gap": "1.5rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(19,40,31,0.15)] transition-colors hover:!bg-[#0F5B44] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0F5B44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-new-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-new-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-new-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-new-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-new-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-row-new-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-new-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-row-new-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-new-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-row-new-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-new-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-new-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                  },
                  {
                    "id": "nr-new-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-new-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop all new arrivals",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0F5B44] px-8 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#0A4533]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap"
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
            "id": "nr-eid",
            "type": "section",
            "options": {
              "anchor": "eid"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "nr-eid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-eid-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 overflow-hidden rounded-3xl bg-[#0C2E24] lg:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-eid-pattern",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px] opacity-50"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "nr-eid-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex flex-col items-center gap-5 p-8 text-center sm:p-12 lg:items-start lg:p-16 lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-eid-k",
                            "type": "text",
                            "options": {
                              "text": "Limited Eid Edit",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#D6B565]"
                              }
                            }
                          },
                          {
                            "id": "nr-eid-h",
                            "type": "heading",
                            "options": {
                              "text": "Celebrate Eid in Silk, Zari and Quiet Luxury",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nr-eid-p",
                            "type": "text",
                            "options": {
                              "text": "Jamdani-inspired weaves, tone-on-tone embroidery and matching kids’ sets, so the whole family walks to the Eid prayer in harmony.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base leading-relaxed text-white/70"
                              }
                            }
                          },
                          {
                            "id": "nr-eid-list",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap justify-center gap-2 lg:justify-start"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-eid-chip-1",
                                "type": "text",
                                "options": {
                                  "text": "Silk blend",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#D6B565]/30 px-3 py-1 text-xs font-semibold text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-eid-chip-2",
                                "type": "text",
                                "options": {
                                  "text": "Hand embroidery",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#D6B565]/30 px-3 py-1 text-xs font-semibold text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-eid-chip-3",
                                "type": "text",
                                "options": {
                                  "text": "Father & son sets",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#D6B565]/30 px-3 py-1 text-xs font-semibold text-[#D6B565]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-eid-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop the Eid Collection",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/eid-collection",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D6B565] px-8 py-4 shadow-[0_12px_30px_-10px_rgba(214,181,101,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#E6CF93] sm:w-auto mt-2"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0C2E24]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-[#0C2E24] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-eid-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex min-h-[280px] items-center justify-center border-t border-[#D6B565]/15 p-10 lg:border-l lg:border-t-0"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-eid-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex aspect-[3/4] w-full max-w-[280px] flex-col items-center justify-center gap-4 rounded-t-[999px] rounded-b-2xl border border-[#D6B565]/40 bg-gradient-to-b from-[#0F5B44]/60 to-transparent px-6 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-eid-moon",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMoonStars",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-eid-ar",
                                "type": "text",
                                "options": {
                                  "text": "عِيد مُبَارَك",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Amiri'] text-5xl leading-tight text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-eid-en",
                                "type": "text",
                                "options": {
                                  "text": "Eid Mubarak",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs font-bold uppercase tracking-[0.3em] text-white/60"
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
            "id": "nr-row-panjabi",
            "type": "section",
            "options": {
              "anchor": "panjabi"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "nr-row-panjabi-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-row-panjabi-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-[#8A6A2A]/20 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-panjabi-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-panjabi-ic",
                            "type": "text",
                            "options": {
                              "text": "پ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-12 shrink-0 items-center justify-center rounded-t-full rounded-b-md border border-[#8A6A2A]/30 bg-white font-['Amiri'] text-2xl leading-none text-[#0F5B44] sm:h-16 sm:w-14"
                              }
                            }
                          },
                          {
                            "id": "nr-row-panjabi-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-panjabi-h",
                                "type": "heading",
                                "options": {
                                  "text": "Panjabi",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold text-[#13281F] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-panjabi-p",
                                "type": "text",
                                "options": {
                                  "text": "Cotton, linen and silk-blend panjabis for every day and every occasion.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-[#5E6A63] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nr-row-panjabi-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/panjabi",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#8A6A2A] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#8A6A2A] group-hover:text-[#6F5420]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-row-panjabi-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "panjabi"
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
                        "gap": "1.5rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(19,40,31,0.15)] transition-colors hover:!bg-[#0F5B44] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0F5B44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-panjabi-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-panjabi-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-panjabi-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-panjabi-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-panjabi-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-row-panjabi-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-panjabi-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-row-panjabi-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-panjabi-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-row-panjabi-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-panjabi-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-panjabi-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "nr-row-jubba",
            "type": "section",
            "options": {
              "anchor": "jubba-thobe"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "nr-row-jubba-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-row-jubba-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-[#8A6A2A]/20 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-jubba-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-jubba-ic",
                            "type": "text",
                            "options": {
                              "text": "ث",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-12 shrink-0 items-center justify-center rounded-t-full rounded-b-md border border-[#8A6A2A]/30 bg-white font-['Amiri'] text-2xl leading-none text-[#0F5B44] sm:h-16 sm:w-14"
                              }
                            }
                          },
                          {
                            "id": "nr-row-jubba-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-jubba-h",
                                "type": "heading",
                                "options": {
                                  "text": "Jubba & Thobe",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold text-[#13281F] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-jubba-p",
                                "type": "text",
                                "options": {
                                  "text": "Full-length, flowing and dignified: Arabian and Moroccan cuts.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-[#5E6A63] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nr-row-jubba-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/jubba-thobe",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#8A6A2A] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#8A6A2A] group-hover:text-[#6F5420]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-row-jubba-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "jubba-thobe"
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
                        "gap": "1.5rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(19,40,31,0.15)] transition-colors hover:!bg-[#0F5B44] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0F5B44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-jubba-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-jubba-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-jubba-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-jubba-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-jubba-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-row-jubba-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-jubba-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-row-jubba-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-jubba-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-row-jubba-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-jubba-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-jubba-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "nr-craft",
            "type": "section",
            "options": {
              "anchor": "craft"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0C2E24] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nr-craft-pattern",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px] opacity-30"
                  }
                },
                "children": []
              },
              {
                "id": "nr-craft-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "nr-craft-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-craft-quote",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col items-center gap-6 rounded-t-[12rem] rounded-b-3xl border border-[#D6B565]/30 bg-gradient-to-b from-[#0F5B44]/50 to-transparent px-8 pb-12 pt-20 text-center sm:px-12"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-craft-quote-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconQuote",
                              "size": 32,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#D6B565]"
                              }
                            }
                          },
                          {
                            "id": "nr-craft-quote-ar",
                            "type": "text",
                            "options": {
                              "text": "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Amiri'] text-4xl leading-[1.6] text-[#D6B565] sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nr-craft-quote-en",
                            "type": "text",
                            "options": {
                              "text": "“Indeed, Allah is beautiful and He loves beauty.”",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl italic text-white sm:text-3xl"
                              }
                            }
                          },
                          {
                            "id": "nr-craft-quote-src",
                            "type": "text",
                            "options": {
                              "text": "Sahih Muslim 91",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs font-bold uppercase tracking-[0.25em] text-white/50"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-craft-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-craft-k",
                            "type": "text",
                            "options": {
                              "text": "Our craft",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#D6B565]"
                              }
                            }
                          },
                          {
                            "id": "nr-craft-h",
                            "type": "heading",
                            "options": {
                              "text": "Modesty, Made Beautifully",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "nr-craft-p",
                            "type": "text",
                            "options": {
                              "text": "Every Noorani piece starts with a fabric we would wear to the masjid ourselves. We cut for a modest, comfortable fit, finish collars and plackets by hand, and keep each run small so quality never slips.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-white/70"
                              }
                            }
                          },
                          {
                            "id": "nr-craft-grid",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-craft-r1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-craft-r1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconShirt",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#D6B565]/15 text-[#D6B565]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-craft-r1-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nr-craft-r1-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Modest, easy fit",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-base font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nr-craft-r1-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Below-knee lengths and room to move through every salah.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm leading-relaxed text-white/60"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "nr-craft-r2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-craft-r2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconNeedleThread",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#D6B565]/15 text-[#D6B565]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-craft-r2-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nr-craft-r2-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Hand-finished",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-base font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nr-craft-r2-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Collars, cuffs and buttons finished by skilled karigars.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm leading-relaxed text-white/60"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "nr-craft-r3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-craft-r3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconSparkles",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#D6B565]/15 text-[#D6B565]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-craft-r3-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nr-craft-r3-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Breathable fabrics",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-base font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nr-craft-r3-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Cotton, linen and silk blends chosen for Bangladeshi summers.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm leading-relaxed text-white/60"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "nr-craft-r4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-craft-r4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconRuler2",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#D6B565]/15 text-[#D6B565]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-craft-r4-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nr-craft-r4-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "True-to-size",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-base font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nr-craft-r4-p",
                                        "type": "text",
                                        "options": {
                                          "text": "A clear size guide, and a free exchange if it is not right.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm leading-relaxed text-white/60"
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
            "id": "nr-row-kabli",
            "type": "section",
            "options": {
              "anchor": "kabli-pathani"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "nr-row-kabli-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-row-kabli-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-[#8A6A2A]/20 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-kabli-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-kabli-ic",
                            "type": "text",
                            "options": {
                              "text": "ك",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-12 shrink-0 items-center justify-center rounded-t-full rounded-b-md border border-[#8A6A2A]/30 bg-white font-['Amiri'] text-2xl leading-none text-[#0F5B44] sm:h-16 sm:w-14"
                              }
                            }
                          },
                          {
                            "id": "nr-row-kabli-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-kabli-h",
                                "type": "heading",
                                "options": {
                                  "text": "Kabli & Pathani Sets",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold text-[#13281F] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-kabli-p",
                                "type": "text",
                                "options": {
                                  "text": "Structured two-piece sets with a strong shoulder and easy trousers.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-[#5E6A63] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nr-row-kabli-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/kabli-pathani",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#8A6A2A] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#8A6A2A] group-hover:text-[#6F5420]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-row-kabli-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "kabli-pathani"
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
                        "gap": "1.5rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(19,40,31,0.15)] transition-colors hover:!bg-[#0F5B44] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0F5B44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-kabli-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-kabli-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-kabli-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-kabli-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-kabli-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-row-kabli-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-kabli-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-row-kabli-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-kabli-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-row-kabli-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-kabli-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-kabli-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "nr-row-acc",
            "type": "section",
            "options": {
              "anchor": "essentials"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "nr-row-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-row-acc-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-[#8A6A2A]/20 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-acc-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-acc-ic",
                            "type": "text",
                            "options": {
                              "text": "ع",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-12 shrink-0 items-center justify-center rounded-t-full rounded-b-md border border-[#8A6A2A]/30 bg-white font-['Amiri'] text-2xl leading-none text-[#0F5B44] sm:h-16 sm:w-14"
                              }
                            }
                          },
                          {
                            "id": "nr-row-acc-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-acc-h",
                                "type": "heading",
                                "options": {
                                  "text": "Attar, Tupi & Essentials",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold text-[#13281F] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-acc-p",
                                "type": "text",
                                "options": {
                                  "text": "Alcohol-free attar, prayer caps, tasbih and travel prayer mats.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-[#5E6A63] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "nr-row-acc-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/attar-tupi",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#8A6A2A] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#8A6A2A] group-hover:text-[#6F5420]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-row-acc-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "attar-tupi"
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
                        "gap": "1.5rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(19,40,31,0.15)] transition-colors hover:!bg-[#0F5B44] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0F5B44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-row-acc-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-row-acc-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-acc-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-acc-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-acc-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-row-acc-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-row-acc-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-row-acc-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-row-acc-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-row-acc-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-row-acc-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-row-acc-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "nr-reviews",
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
                "id": "nr-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-reviews-ar",
                        "type": "text",
                        "options": {
                          "text": "آراء",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Amiri'] text-2xl leading-none text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-reviews-k",
                        "type": "text",
                        "options": {
                          "text": "Trusted by 25,000+ brothers",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-reviews-h",
                        "type": "heading",
                        "options": {
                          "text": "Words From Our Community",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight text-[#13281F] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "nr-reviews-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#8A6A2A]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-reviews-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nr-reviews-rule-star",
                            "type": "text",
                            "options": {
                              "text": "✦",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs leading-none"
                              }
                            }
                          },
                          {
                            "id": "nr-reviews-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nr-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(19,40,31,0.15)] transition-colors hover:!bg-[#0F5B44] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0F5B44] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#8A6A2A]/30 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#0F5B44]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The off-white cotton panjabi is beautifully stitched. Wore it for Jummah and three people asked where it was from. Delivered in a day.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#13281F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8A6A2A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#0F5B44] font-body text-sm font-bold text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tanvir Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#13281F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#8A6A2A]"
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
                        "id": "nr-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered father and son Eid sets. Colours matched perfectly and the fabric breathed well even in the heat of the Eid prayer.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#13281F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8A6A2A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "RK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#0F5B44] font-body text-sm font-bold text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rashed Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#13281F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Chattogram",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#8A6A2A]"
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
                        "id": "nr-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Size guide was accurate. The jubba falls exactly to the ankle like I wanted. Cash on delivery made it easy to trust a first order.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#13281F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8A6A2A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "IH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#0F5B44] font-body text-sm font-bold text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imran Hossain",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#13281F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Sylhet",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#8A6A2A]"
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
                        "id": "nr-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Silk-blend panjabi feels premium without being heavy. The embroidery on the collar is subtle and elegant, not flashy.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#13281F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8A6A2A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "AM",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#0F5B44] font-body text-sm font-bold text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Abdullah Al Mamun",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#13281F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Rajshahi",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#8A6A2A]"
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
                        "id": "nr-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Exchanged a size within two days, no fuss. The attar they recommended is now my daily scent. JazakAllah khair.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#13281F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8A6A2A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "SR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#0F5B44] font-body text-sm font-bold text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sakib Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#13281F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Khulna",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#8A6A2A]"
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
                        "id": "nr-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Finally a brand that gets the modest-but-modern look. Clean cuts, good buttons, and it survived many washes.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#13281F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8A6A2A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "NC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-t-full rounded-b-md bg-[#0F5B44] font-body text-sm font-bold text-[#D6B565]"
                                  }
                                }
                              },
                              {
                                "id": "nr-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nafis Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#13281F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#8A6A2A]"
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
            "id": "nr-journal",
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
                "id": "nr-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-journal-ar",
                        "type": "text",
                        "options": {
                          "text": "مدونة",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Amiri'] text-2xl leading-none text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-journal-k",
                        "type": "text",
                        "options": {
                          "text": "The Noorani Journal",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-journal-h",
                        "type": "heading",
                        "options": {
                          "text": "Style, Sunnah & Stories",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight text-[#13281F] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "nr-journal-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#8A6A2A]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-journal-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nr-journal-rule-star",
                            "type": "text",
                            "options": {
                              "text": "✦",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs leading-none"
                              }
                            }
                          },
                          {
                            "id": "nr-journal-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "nr-journal-p",
                        "type": "text",
                        "options": {
                          "text": "Care guides, Eid styling notes and reflections on dressing with intention.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base leading-relaxed text-[#5E6A63]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-journal-grid",
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
                        "id": "nr-journal-loop",
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
                            "id": "nr-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "nr-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl font-semibold leading-snug text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                  }
                                }
                              },
                              {
                                "id": "nr-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 20,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#5E6A63]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F5B44]"
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
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "nr-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-faq-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-faq-ar",
                        "type": "text",
                        "options": {
                          "text": "أسئلة",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Amiri'] text-2xl leading-none text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-faq-k",
                        "type": "text",
                        "options": {
                          "text": "Good to know",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-faq-h",
                        "type": "heading",
                        "options": {
                          "text": "Frequently Asked Questions",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight text-[#13281F] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "nr-faq-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#8A6A2A]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-faq-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "nr-faq-rule-star",
                            "type": "text",
                            "options": {
                              "text": "✦",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs leading-none"
                              }
                            }
                          },
                          {
                            "id": "nr-faq-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-60"
                              }
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "nr-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How do I choose my panjabi size?",
                          "classes": ""
                        },
                        {
                          "label": "Is cash on delivery available everywhere?",
                          "classes": ""
                        },
                        {
                          "label": "How long does delivery take?",
                          "classes": ""
                        },
                        {
                          "label": "Can I exchange if the size is not right?",
                          "classes": ""
                        },
                        {
                          "label": "How should I wash my panjabi?",
                          "classes": ""
                        }
                      ],
                      "multiple": false
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-3xl"
                      },
                      "spacing": {
                        "classes": "p-0"
                      },
                      "accordion-items": {
                        "classes": "flex flex-col gap-3"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-[#8A6A2A]/20 bg-white px-6 py-5 font-body text-base font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44]/40"
                      },
                      "accordion-header-open": {
                        "classes": "!rounded-b-none !border-b-0 !border-[#0F5B44]/40 text-[#0F5B44]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#8A6A2A]"
                      },
                      "accordion-content": {
                        "classes": "-mt-3 rounded-b-xl border border-t-0 border-[#0F5B44]/40 bg-white px-6 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nr-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Measure the chest of a panjabi that fits you well, flat, from armpit to armpit, and double it. Match that to the size chart on each product page. Between sizes? Choose the larger one for a relaxed, modest fit.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nr-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. We deliver to all 64 districts and you can pay cash when the parcel arrives. bKash, Nagad and cards are also accepted at checkout.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nr-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka usually within 24 hours, and 48-72 hours to the rest of Bangladesh. During the last ten days before Eid, please order early.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nr-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Of course. Unworn items with tags can be exchanged within 7 days of delivery. Just contact us and we will arrange the swap.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nr-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Cotton and linen: gentle machine wash cold, inside out, and dry in shade. Silk blends and embroidered pieces: hand wash or dry clean, and iron on the reverse.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6A63]"
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
            "id": "nr-cta",
            "type": "section",
            "options": {
              "anchor": "join"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "nr-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center gap-5 overflow-hidden rounded-t-[12rem] rounded-b-3xl bg-[#0F5B44] px-6 pb-14 pt-20 text-center sm:px-12"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-cta-pattern",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px] opacity-40"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "nr-cta-ar",
                        "type": "text",
                        "options": {
                          "text": "أَهْلًا وَسَهْلًا",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-['Amiri'] text-4xl leading-none text-[#D6B565]"
                          }
                        }
                      },
                      {
                        "id": "nr-cta-h",
                        "type": "heading",
                        "options": {
                          "text": "Join the Noorani Circle",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-heading text-4xl font-semibold text-white sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "nr-cta-p",
                        "type": "text",
                        "options": {
                          "text": "Create a free account for 10% off your first order, early access to Eid drops and members-only restocks.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-lg text-base text-white/75"
                          }
                        }
                      },
                      {
                        "id": "nr-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex w-full flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Create my account",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconUserPlus",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D6B565] px-8 py-4 shadow-[0_12px_30px_-10px_rgba(214,181,101,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#E6CF93] sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0C2E24]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-[#0C2E24] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "nr-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Browse the shop",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 transition-all hover:border-[#D6B565] hover:bg-white/5 sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap group-hover:text-[#D6B565]"
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
            "id": "nr-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The Full Collection",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F5EEDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A]"
                      }
                    }
                  },
                  {
                    "id": "nr-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop Panjabi & Sunnah Wear",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every panjabi, jubba, kabli set and essential we carry, newest first. Open a piece for fabric, fit and size details, or add it straight to your bag.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "nr-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5B44] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nr-shop-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y border-[#8A6A2A]/15 bg-[#FBF6EA] py-10"
              }
            },
            "children": [
              {
                "id": "nr-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay when it arrives, anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast Delivery",
                          "description": "24h inside Dhaka, 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-Day Easy Exchange",
                          "description": "Wrong size? Swap it, no questions asked",
                          "icon": "IconArrowsExchange",
                          "iconSize": ""
                        },
                        {
                          "title": "Premium Fabrics",
                          "description": "Breathable cotton, linen and silk blends",
                          "icon": "IconNeedleThread",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-6 text-center md:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "flex flex-col items-center gap-2 p-3"
                      },
                      "title": {
                        "classes": "font-body text-sm font-bold uppercase tracking-wider text-[#13281F]"
                      },
                      "description": {
                        "classes": "text-xs text-[#5E6A63]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-t-full rounded-b-md border border-[#8A6A2A]/30 bg-white text-[#0F5B44]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-shop-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
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
                        "id": "nr-shop-promise-fb-t",
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
                        "id": "nr-shop-promise-fb-d",
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
            "id": "nr-pd",
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
                "id": "nr-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-pd-grid",
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
                        "id": "nr-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-pd-gallery",
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
                                "classes": "rounded-3xl border-4 border-white bg-gradient-to-tr from-[#F5EEDD] via-white to-[#FBF6EA] p-4 shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-2xl bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#13281F]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#13281F]!"
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
                                "classes": "overflow-hidden rounded-xl border-2 border-transparent hover:border-[#0F5B44]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-pd-cats",
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
                                "classes": "rounded-full bg-[#F5EEDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A] hover:bg-[#8A6A2A] hover:text-white"
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
                            "id": "nr-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#13281F] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "nr-pd-rate",
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
                                "classes": "font-body font-bold text-[#13281F]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "nr-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#13281F]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#13281F]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#13281F]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF today"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#0F5B44] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "nr-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6A63]"
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
                            "id": "nr-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#13281F]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#13281F] transition-colors hover:border-[#8A6A2A] hover:bg-[#F5EEDD]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#8A6A2A] !bg-[#F5EEDD] !text-[#6F5420]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "nr-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock: restocking soon, in sha Allah",
                              "inStockText": "In stock, ships within 24 hours",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#0F5B44]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#8A6A2A]"
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
                            "id": "nr-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-xl border-2 border-gray-200 bg-white px-3 text-[#13281F]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F8F5EE]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F8F5EE]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0F5B44] px-8 text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#0A4533]"
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
                            "id": "nr-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Cash on delivery",
                                  "description": "All over Bangladesh",
                                  "icon": "IconCash",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Fast delivery",
                                  "description": "24h inside Dhaka",
                                  "icon": "IconTruckDelivery",
                                  "iconSize": ""
                                },
                                {
                                  "title": "7-day exchange",
                                  "description": "Free size swap",
                                  "icon": "IconArrowsExchange",
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
                                "classes": "font-body text-base font-bold text-[#13281F]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5EEDD] text-[#8A6A2A]"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-perks-ic",
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
                                "id": "nr-pd-perks-t",
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
                                "id": "nr-pd-perks-d",
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
                            "id": "nr-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-sku",
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
                                    "classes": "font-semibold text-[#13281F]"
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
                                "id": "nr-pd-brands",
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
                                    "classes": "font-semibold text-[#13281F]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#0F5B44]"
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
                                "id": "nr-pd-tags",
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
                                    "classes": "font-semibold text-[#13281F]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#0F5B44]"
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
            "id": "nr-pd-tabs-sec",
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
                "id": "nr-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(19,40,31,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Fabric & Care",
                              "icon": "IconNeedleThread"
                            },
                            {
                              "label": "Delivery & Exchange",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F8F5EE] px-5 py-2.5 font-body text-sm font-semibold text-[#13281F] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#13281F] !text-white shadow-md"
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
                            "id": "nr-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#13281F] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#13281F] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#0F5B44] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D6B565] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconNeedleThread",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Fabric, weave and GSM are listed in the description above",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cotton and linen: gentle wash cold, inside out, dry in shade",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Silk blends and embroidery: hand wash or dry clean only",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Iron on the reverse; avoid direct heat on embroidery",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#8A6A2A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Inside Dhaka: delivery within 24 hours",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Outside Dhaka: 48-72 hours to all 64 districts",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cash on delivery, bKash, Nagad or card",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Unworn with tags? Exchange within 7 days of delivery",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#8A6A2A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "nr-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F8F5EE] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F8F5EE] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "nr-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E8F1EC]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nr-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#13281F]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "nr-pd-reviews-rate",
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
                                        "id": "nr-pd-reviews-co",
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
                                    "id": "nr-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "Share your thoughts on fit and fabric",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "JazakAllah khair! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(19,40,31,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#13281F]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-xl border border-gray-200 bg-[#F8F5EE] px-4 py-3 text-sm text-[#13281F] placeholder:text-gray-400 focus:border-[#8A6A2A] focus:outline-none focus:ring-2 focus:ring-[#8A6A2A]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#0F5B44] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0A4533] disabled:opacity-50"
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
            "id": "nr-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-16"
              }
            },
            "children": [
              {
                "id": "nr-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Complete the Look",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E8F1EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0F5B44]"
                          }
                        }
                      },
                      {
                        "id": "nr-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You May Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#13281F]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "nr-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Collections",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E8F1EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0F5B44]"
                      }
                    }
                  },
                  {
                    "id": "nr-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Collection",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Panjabi, jubba, kabli sets and the essentials that complete them. Choose a collection to begin.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-xl bg-[#F5EEDD] transition-transform"
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
                            "id": "nr-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                              }
                            }
                          },
                          {
                            "id": "nr-cat-grid-count",
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
                        "id": "nr-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5B44] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nr-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E8F1EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0F5B44]"
                      }
                    }
                  },
                  {
                    "id": "nr-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nr-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#8A6A2A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "nr-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5B44] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nr-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find It Fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#D6B565] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#13281F]"
                      }
                    }
                  },
                  {
                    "id": "nr-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group pieces across collections by fabric, colour and occasion: Jummah, Eid, wedding and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0F5B44]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0F5B44]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#13281F] group-hover:text-[#0F5B44]"
                              }
                            }
                          },
                          {
                            "id": "nr-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F8F5EE] px-2 py-0.5 text-[10px] font-bold text-[#5E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "nr-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5B44] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nr-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#D6B565] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#13281F]"
                      }
                    }
                  },
                  {
                    "id": "nr-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nr-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#8A6A2A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "nr-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5B44] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nr-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Makers & Ateliers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F5EEDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A]"
                      }
                    }
                  },
                  {
                    "id": "nr-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "The ateliers, weavers and perfumers behind every piece we carry.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-[#F8F5EE] p-3"
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
                            "id": "nr-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#13281F] group-hover:text-[#0F5B44]"
                              }
                            }
                          },
                          {
                            "id": "nr-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " pieces",
                              "singularSuffix": " piece",
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
                        "id": "nr-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5B44] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nr-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F5EEDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A]"
                      }
                    }
                  },
                  {
                    "id": "nr-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "nr-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#8A6A2A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "nr-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5B44] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nr-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Style, Sunnah & Stories",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F5EEDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A]"
                      }
                    }
                  },
                  {
                    "id": "nr-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "The Noorani Journal",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Care guides, Eid styling notes and reflections on dressing with intention.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FBF6EA]"
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
                            "id": "nr-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                  }
                                }
                              },
                              {
                                "id": "nr-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#0F5B44]"
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
                        "id": "nr-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#13281F] transition-colors hover:border-[#0F5B44] hover:text-[#0F5B44]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5B44] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "nr-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FBF6EA] via-white to-[#F8F5EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nr-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-post-k",
                    "type": "text",
                    "options": {
                      "text": "The Noorani Journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F5EEDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A]"
                      }
                    }
                  },
                  {
                    "id": "nr-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#5E6A63]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-post-author",
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
                            "classes": "font-body font-bold text-[#13281F]"
                          }
                        }
                      },
                      {
                        "id": "nr-post-dot",
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
                        "id": "nr-post-date",
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
                    "id": "nr-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
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
            "id": "nr-post-body",
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
                "id": "nr-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#13281F] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#13281F] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#0F5B44] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D6B565] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-16"
              }
            },
            "children": [
              {
                "id": "nr-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#13281F]"
                      }
                    }
                  },
                  {
                    "id": "nr-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F8F5EE] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F8F5EE] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E8F1EC]"
                              }
                            }
                          },
                          {
                            "id": "nr-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#13281F]"
                              }
                            }
                          },
                          {
                            "id": "nr-post-cmt-co",
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
                        "id": "nr-post-cmt-form",
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
                            "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(19,40,31,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#13281F]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-xl border border-gray-200 bg-[#F8F5EE] px-4 py-3 text-sm text-[#13281F] placeholder:text-gray-400 focus:border-[#8A6A2A] focus:outline-none focus:ring-2 focus:ring-[#8A6A2A]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#0F5B44] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0A4533] disabled:opacity-50"
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
            "id": "nr-post-more",
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
                "id": "nr-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From the Journal",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#13281F]"
                      }
                    }
                  },
                  {
                    "id": "nr-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(19,40,31,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FBF6EA]"
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
                            "id": "nr-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A]"
                                  }
                                }
                              },
                              {
                                "id": "nr-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
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
            "id": "nr-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FBF6EA] bg-[url('/templates/noorani-pattern.svg')] bg-[length:140px_140px]"
              }
            },
            "children": [
              {
                "id": "nr-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "nr-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Assalamu Alaikum",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F5EEDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#8A6A2A]"
                      }
                    }
                  },
                  {
                    "id": "nr-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#13281F] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "nr-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track your orders, manage exchanges and keep your measurements and address up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "nr-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-12"
              }
            },
            "children": [
              {
                "id": "nr-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#13281F] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#D6B565]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#0F5B44]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#0F5B44]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#0F5B44]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "nr-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "nr-acc-3",
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
                                "id": "nr-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(19,40,31,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0F5B44] focus:outline-none focus:ring-2 focus:ring-[#0F5B44]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F5B44] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A4533] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5B44]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "nr-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(19,40,31,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0F5B44] focus:outline-none focus:ring-2 focus:ring-[#0F5B44]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F5B44] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A4533] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5B44]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "nr-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "nr-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F8F5EE] px-5 py-2.5 font-body text-sm font-semibold text-[#13281F] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#13281F] !text-white shadow-md"
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
                                "id": "nr-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F5B44]/10 text-[#0F5B44]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "nr-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#0F5B44] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nr-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F5B44]/10 text-[#0F5B44]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nr-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#0F5B44]/40 hover:bg-[#0F5B44]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F5B44]/10 text-[#0F5B44]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "nr-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F5B44]/10 text-[#0F5B44]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0F5B44] focus:outline-none focus:ring-2 focus:ring-[#0F5B44]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F5B44] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A4533] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5B44]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5B44]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "nr-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FBF6EA] via-white to-[#F8F5EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nr-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(19,40,31,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#F5EEDD] text-[#8A6A2A]"
                          }
                        }
                      },
                      {
                        "id": "nr-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E8F1EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0F5B44]"
                          }
                        }
                      },
                      {
                        "id": "nr-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "JazakAllah Khair for Your Order",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#13281F] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "nr-ty-p",
                        "type": "text",
                        "options": {
                          "text": "May it bring you barakah. A confirmation is on its way, and you can follow the order from your account at any time.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#5E6A63] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "nr-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order by phone or SMS",
                              "icon": ""
                            },
                            {
                              "text": "Your pieces are pressed, folded and packed with care",
                              "icon": ""
                            },
                            {
                              "text": "Delivered in 24h inside Dhaka, 48-72h elsewhere: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-2xl bg-[#F8F5EE] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#0F5B44]"
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
                        "id": "nr-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-ty-shop",
                            "type": "button",
                            "options": {
                              "text": "Continue Shopping",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F5B44] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0A4533] w-full sm:w-auto"
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
                            "id": "nr-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#8A6A2A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#8A6A2A] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#8A6A2A] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#8A6A2A] whitespace-nowrap group-hover:text-white"
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
            "id": "nr-ty-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y border-[#8A6A2A]/15 bg-[#FBF6EA] py-10"
              }
            },
            "children": [
              {
                "id": "nr-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay when it arrives, anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast Delivery",
                          "description": "24h inside Dhaka, 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-Day Easy Exchange",
                          "description": "Wrong size? Swap it, no questions asked",
                          "icon": "IconArrowsExchange",
                          "iconSize": ""
                        },
                        {
                          "title": "Premium Fabrics",
                          "description": "Breathable cotton, linen and silk blends",
                          "icon": "IconNeedleThread",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-6 text-center md:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "flex flex-col items-center gap-2 p-3"
                      },
                      "title": {
                        "classes": "font-body text-sm font-bold uppercase tracking-wider text-[#13281F]"
                      },
                      "description": {
                        "classes": "text-xs text-[#5E6A63]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-t-full rounded-b-md border border-[#8A6A2A]/30 bg-white text-[#0F5B44]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-ty-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
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
                        "id": "nr-ty-promise-fb-t",
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
                        "id": "nr-ty-promise-fb-d",
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
            "id": "nr-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FBF6EA] via-white to-[#F8F5EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "nr-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#0F5B44] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "nr-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-xl bg-[#FBF6EA] text-[#13281F]"
                      }
                    }
                  },
                  {
                    "id": "nr-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Could Not Be Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#13281F] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "nr-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the piece may have sold out. Head back home or browse the full collection.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5E6A63] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "nr-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F5B44] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(15,91,68,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0A4533] w-full sm:w-auto"
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
                        "id": "nr-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop the Collection",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#8A6A2A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#8A6A2A] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#8A6A2A] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#8A6A2A] whitespace-nowrap group-hover:text-white"
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
            "id": "nr-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8F5EE] py-16"
              }
            },
            "children": [
              {
                "id": "nr-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "nr-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#D6B565] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#13281F]"
                          }
                        }
                      },
                      {
                        "id": "nr-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#13281F] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "nr-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                      }
                    },
                    "children": [
                      {
                        "id": "nr-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-[#8A6A2A]/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6A2A]/40 hover:shadow-[0_18px_40px_-18px_rgba(19,40,31,0.25)]"
                          }
                        },
                        "children": [
                          {
                            "id": "nr-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-[10rem] rounded-b-xl bg-[#F5EEDD]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0F5B44] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6B565]"
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
                                "id": "nr-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "nr-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-amber-400"
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
                                    "id": "nr-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#13281F] transition-colors group-hover:text-[#0F5B44]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "nr-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "nr-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-[#8A6A2A]/15 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "nr-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#0F5B44]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5B44]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5B44] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "nr-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#0F5B44] px-3.5 text-[#0F5B44] transition-colors hover:bg-[#0F5B44] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
