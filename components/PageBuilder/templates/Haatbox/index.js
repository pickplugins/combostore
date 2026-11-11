/**
 * Template: Haatbox Grocery.
 *
 * A friendly, modern grocery marketplace with quick delivery: fresh
 * vegetables and fruit, fish and meat, dairy, staples, snacks and household
 * essentials. Like the other complete templates here it carries all sixteen
 * page types - Header, Footer, Home, Shop, Product, the six taxonomy
 * archives, Blog Archive, Blog Single, Account, Thank you and 404 - so
 * applying it replaces every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to hb-, palette remapped, copy rewritten). The
 * header is reshaped: brand, a "Deliver to · Dhaka · in 60 min" pill, a wide
 * green-outlined search and the cart on one row; eight aisles (Deals in
 * orange) as pill links on a second row. Home is built fresh from the same
 * block types. Product cards everywhere are grocery cards: product image
 * contained on white, an orange corner discount flag, two-line title, a short
 * excerpt line (use it for pack size, e.g. "1 kg" or "500 ml"), price beside
 * the struck price, and a full-width outlined "+ Add" that fills green on
 * hover. It is plain data: edit freely.
 *
 * DESIGN
 *
 *   green   #12A150  primary: hero, add buttons, links       #0D8040 hover  #E7F7EE tint
 *   forest  #0B3B24  text on yellow, promo bar, how-it-works  #14532F hover  #EEF5F0 tint
 *   yellow  #FFC93C  CTAs on green, pills, CTA band           #FFDA70        #FFF6DB tint
 *   orange  #E8590C  deals panel, discount flags              #FFEDDF tint
 *   page    #F6F8F5  ink #14231A  muted #5E6B63  line #E3E8E4
 *
 * Fonts (template meta): Bricolage Grotesque (extrabold, tight) for headings,
 * Figtree for body and every small label.
 *
 * HOME
 *
 *   Green hero banner with a produce basket (public/templates/haatbox-hero.svg)
 *   and two offer cards - 12 aisle tiles with icons (#aisles) - today's deals
 *   panel (#deals) - vegetables and fruits rows - three offer cards
 *   (#offers) - fish & meat and dairy rows - how it works (#how-it-works) -
 *   staples, snacks and household rows - popular brands (#brands) - reviews -
 *   recipes (#recipes) - FAQ with a WhatsApp card (#faq) - yellow first-order
 *   CTA to /register (#join).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: vegetables, fruits, fish-meat, dairy-breakfast, bakery,
 *     staples, spices, snacks-beverages, beverages, baby-care, household,
 *     pet-care, bazaar-box. Tag slugs: deals, organic. The 12 aisle tiles are
 *     static links: add, remove or re-point them to match your categories.
 *   - "Deliver to Dhaka · in 60 min" in the header is static text, as are the
 *     60-minute promise, delivery zones and ৳999 free-delivery threshold:
 *     make them match how the shop really delivers.
 *   - "WhatsApp us" links to # . Contact details, promo code FRESH150, the
 *     ৳150 offer, "8,000+ products", "60,000+ families", 4.8 and the six
 *     reviews are sample copy.
 */

var template = [
  {
    "name": "Haatbox Grocery",
    "description": "Friendly, modern grocery marketplace in fresh green, forest, sunny yellow and deal orange with Bricolage Grotesque: delivery pill in the header, green hero banner with a produce basket, 12 aisle tiles, today’s deals, aisle-by-aisle product rows, offer cards, how-it-works, brands, reviews, recipes, FAQ and a first-order CTA. All 16 pages.",
    "thumbnail": "/templates/haatbox.svg",
    "meta": {
      "fonts": [
        {
          "family": "Bricolage Grotesque",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Figtree",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Bricolage Grotesque",
        "body": "Figtree"
      },
      "colors": {
        "primary": "#12A150",
        "secondary": "#0B3B24",
        "accent": "#FFC93C",
        "background": "#F6F8F5",
        "foreground": "#14231A",
        "muted": "#5E6B63"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "hb-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-[#E3E8E4] bg-white"
              }
            },
            "children": [
              {
                "id": "hb-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#0B3B24] px-4 py-2 text-center text-xs font-semibold text-white/90"
                  }
                },
                "children": [
                  {
                    "id": "hb-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free delivery over ৳999 · ৳150 off your first order with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "hb-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "FRESH150",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#FFC93C] px-2.5 py-0.5 font-mono text-xs font-bold text-[#0B3B24]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Shop deals",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#deals",
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
                        "classes": "text-xs font-bold text-[#FFC93C] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "hb-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 items-center justify-between gap-3 lg:h-[76px]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "h",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-11 w-11 text-2xl items-center justify-center rounded-2xl rounded-tr-md bg-[#12A150] pb-1 font-heading font-extrabold leading-none text-white after:absolute after:-right-1 after:-top-1 after:h-3.5 after:w-3.5 after:rounded-full after:bg-[#FFC93C] after:content-['']"
                              }
                            }
                          },
                          {
                            "id": "hb-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "haatbox",
                                  "src": "https://placehold.co/200x64?text=Haatbox",
                                  "altText": "Haatbox",
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
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#0B3B24]"
                                  }
                                }
                              },
                              {
                                "id": "hb-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Fresh groceries · 60 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block text-[10px] font-bold text-[#0D8040]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-hdr-deliver",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden shrink-0 items-center gap-2.5 rounded-2xl bg-[#E7F7EE] px-3.5 py-2 xl:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-hdr-deliver-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMapPin",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-hdr-deliver-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col leading-tight"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-hdr-deliver-k",
                                "type": "text",
                                "options": {
                                  "text": "Deliver to",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] font-bold uppercase tracking-wider text-[#5E6B63]"
                                  }
                                }
                              },
                              {
                                "id": "hb-hdr-deliver-v",
                                "type": "text",
                                "options": {
                                  "text": "Dhaka · in 60 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm font-extrabold text-[#0B3B24]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search for vegetables, fish, rice...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-2 hidden max-w-2xl flex-1 rounded-full border-2 border-[#12A150] bg-white py-1 pl-1 pr-3 transition-all focus-within:ring-4 focus-within:ring-[#12A150]/15 md:block"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#14231A] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#5E6B63]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#12A150] focus:outline-none focus:ring-2 focus:ring-[#12A150]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#12A150]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#12A150]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#12A150] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0D8040]"
                          }
                        }
                      },
                      {
                        "id": "hb-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F6F8F5] text-[#14231A] transition-colors hover:bg-[#E7F7EE] hover:text-[#12A150]"
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
                            "id": "hb-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0B3B24] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#14532F]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#12A150] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F6F8F5] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#14231A]"
                              },
                              "title-icon": {
                                "classes": "text-[#12A150]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#12A150] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#12A150] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0D8040]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A150]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#12A150] focus:outline-none focus:ring-2 focus:ring-[#12A150]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#12A150] px-4 py-2 text-sm font-medium text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#12A150] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0D8040] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A150]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "hb-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F6F8F5] text-[#14231A]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F6F8F5] p-2 text-[#14231A] transition-colors hover:bg-[#12A150] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "h",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-10 w-10 text-xl items-center justify-center rounded-2xl rounded-tr-md bg-[#12A150] pb-1 font-heading font-extrabold leading-none text-white after:absolute after:-right-1 after:-top-1 after:h-3.5 after:w-3.5 after:rounded-full after:bg-[#FFC93C] after:content-['']"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hb-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "haatbox",
                                          "src": "https://placehold.co/200x64?text=Haatbox",
                                          "altText": "Haatbox",
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
                                            "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#0B3B24]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hb-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Fresh groceries · 60 min",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#0B3B24]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "hb-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search groceries...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F6F8F5] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#0B3B24] focus-within:ring-2 focus-within:ring-[#0B3B24]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#14231A] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#5E6B63]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#12A150] focus:outline-none focus:ring-2 focus:ring-[#12A150]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#12A150]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#12A150]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#12A150] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0D8040]"
                                  }
                                }
                              },
                              {
                                "id": "hb-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#14231A] transition-colors hover:text-[#12A150]"
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
                                    "id": "hb-hdr-m-menu-i1",
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
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hb-hdr-m-menu-i2",
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
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hb-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Fish & Meat",
                                      "url": "/categories/fish-meat"
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
                                    "id": "hb-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Dairy & Eggs",
                                      "url": "/categories/dairy-breakfast"
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
                                    "id": "hb-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Rice, Dal & Oil",
                                      "url": "/categories/staples"
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
                                    "id": "hb-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Snacks",
                                      "url": "/categories/snacks-beverages"
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
                                    "id": "hb-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Household",
                                      "url": "/categories/household"
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
                                    "id": "hb-hdr-m-menu-i8",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Deals",
                                      "url": "/#deals"
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
                  },
                  {
                    "id": "hb-hdr-nav",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden border-t border-[#E3E8E4] lg:block"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-hdr-menu",
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
                            "classes": "flex h-12 items-center gap-1"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 font-body text-sm font-semibold text-[#14231A] transition-colors hover:bg-[#E7F7EE] hover:text-[#0D8040]"
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
                            "id": "hb-hdr-menu-i1",
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
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "hb-hdr-menu-i2",
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
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "hb-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Fish & Meat",
                              "url": "/categories/fish-meat"
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
                            "id": "hb-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Dairy & Eggs",
                              "url": "/categories/dairy-breakfast"
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
                            "id": "hb-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Rice, Dal & Oil",
                              "url": "/categories/staples"
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
                            "id": "hb-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Snacks",
                              "url": "/categories/snacks-beverages"
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
                            "id": "hb-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Household",
                              "url": "/categories/household"
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
                            "id": "hb-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Deals",
                              "url": "/#deals"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "text-[#E8590C]"
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
        ],
        "meta": ""
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "hb-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#14231A] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "hb-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "hb-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#12A150] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "First order offer",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                              }
                            }
                          },
                          {
                            "id": "hb-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "৳150 off + free delivery",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-extrabold tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "hb-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account, save your address and reorder your weekly list in one tap.",
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
                        "id": "hb-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Create account",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconUserPlus",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFC93C] px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:bg-[#FFDA70]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#0B3B24]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold text-[#0B3B24] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "hb-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "hb-ftr-grid",
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
                        "id": "hb-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "h",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-10 w-10 text-xl items-center justify-center rounded-2xl rounded-tr-md bg-[#12A150] pb-1 font-heading font-extrabold leading-none text-white after:absolute after:-right-1 after:-top-1 after:h-3.5 after:w-3.5 after:rounded-full after:bg-[#FFC93C] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "hb-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "haatbox",
                                      "src": "https://placehold.co/200x64?text=Haatbox",
                                      "altText": "Haatbox",
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
                                        "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#0B3B24]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hb-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Fresh groceries and daily essentials delivered in 60 minutes: farm-fresh produce, fish, meat and 8,000+ products at bazaar prices.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "hb-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#12A150]"
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
                                "id": "hb-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#12A150]"
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
                                "id": "hb-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#12A150]"
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
                                "id": "hb-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#12A150]"
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
                        "id": "hb-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hb-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Aisles",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Fresh Vegetables",
                                  "icon": "",
                                  "slug": "/categories/vegetables"
                                },
                                {
                                  "text": "Fruits",
                                  "icon": "",
                                  "slug": "/categories/fruits"
                                },
                                {
                                  "text": "Fish & Meat",
                                  "icon": "",
                                  "slug": "/categories/fish-meat"
                                },
                                {
                                  "text": "Dairy & Breakfast",
                                  "icon": "",
                                  "slug": "/categories/dairy-breakfast"
                                },
                                {
                                  "text": "Rice, Dal & Oil",
                                  "icon": "",
                                  "slug": "/categories/staples"
                                },
                                {
                                  "text": "All Categories",
                                  "icon": "",
                                  "slug": "/categories"
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
                                "classes": "transition-colors hover:text-[#FFC93C]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFC93C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hb-ftr-ll-care",
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
                                  "text": "Delivery Zones",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Returns & Refunds",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Recipes",
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
                                "classes": "transition-colors hover:text-[#FFC93C]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFC93C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-ftr-contact-h",
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
                            "id": "hb-ftr-address",
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
                                "value": "Every day: 7am - 11pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#FFC93C]"
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
                                "classes": "shrink-0 text-[#12A150]"
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
                "id": "hb-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "hb-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Haatbox. All rights reserved. Fresh from the haat, fast to your door.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "hb-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "Cash on Delivery · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-xs font-bold uppercase tracking-wider"
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
            "id": "hb-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] pb-6 pt-4 sm:pt-6"
              }
            },
            "children": [
              {
                "id": "hb-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 lg:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-hero-main",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative grid min-h-[420px] grid-cols-1 items-center overflow-hidden rounded-[2rem] bg-[#12A150] sm:grid-cols-2 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-hero-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0D8040]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "hb-hero-blob-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#FFC93C] opacity-20 blur-3xl"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "hb-hero-copy",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative z-10 flex flex-col items-start gap-5 p-7 sm:p-10"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-hero-k",
                                "type": "text",
                                "options": {
                                  "text": "60-minute delivery",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                                  }
                                }
                              },
                              {
                                "id": "hb-hero-h1",
                                "type": "heading",
                                "options": {
                                  "text": "Fresh groceries at your door in 60 minutes.",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-hero-p",
                                "type": "text",
                                "options": {
                                  "text": "Farm-fresh vegetables, fish, meat and 8,000+ daily essentials at bazaar prices. Pay cash when it arrives.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-md text-base leading-relaxed text-white/85"
                                  }
                                }
                              },
                              {
                                "id": "hb-hero-btns",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-hero-btn-1",
                                    "type": "button",
                                    "options": {
                                      "text": "Start shopping",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/shop",
                                      "target": "",
                                      "icon": "IconShoppingCart",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFC93C] px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:bg-[#FFDA70]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#0B3B24] transition-transform group-hover:translate-x-0.5"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-extrabold text-[#0B3B24] whitespace-nowrap"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-hero-btn-2",
                                    "type": "button",
                                    "options": {
                                      "text": "Today’s deals",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/#deals",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3 transition-colors hover:bg-white/10"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hb-hero-minis",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-wrap gap-x-5 gap-y-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-hero-m1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hb-hero-m1-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconPlant2",
                                          "size": 18,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#FFC93C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hb-hero-m1-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Farm-fresh daily",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm font-semibold text-white/90"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hb-hero-m2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hb-hero-m2-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconCash",
                                          "size": 18,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#FFC93C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hb-hero-m2-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Cash on delivery",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm font-semibold text-white/90"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hb-hero-m3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hb-hero-m3-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconRefresh",
                                          "size": 18,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#FFC93C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hb-hero-m3-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Easy returns",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm font-semibold text-white/90"
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
                            "id": "hb-hero-art",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative z-10 flex items-end justify-center self-end px-6 sm:px-0"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-hero-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/haatbox-hero.svg",
                                  "altText": "A basket of fresh vegetables, fruit, bread, milk and eggs",
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
                                    "classes": "h-auto w-full max-w-[420px]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-hero-side",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-offer-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[180px] flex-1 flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-[#FFEDDF] p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-offer-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconApple",
                                  "size": 110,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-5 -right-4 flex transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 text-[#E8590C]/20"
                                  }
                                }
                              },
                              {
                                "id": "hb-offer-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex max-w-[70%] flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-offer-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Up to 30% off",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#E8590C] px-3 py-1 font-body text-xs font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-offer-1-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Juicy seasonal fruits",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#14231A]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hb-offer-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop now",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/fruits",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative inline-flex cursor-pointer items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 shadow-sm transition-transform group-hover:translate-x-0.5"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#14231A]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#14231A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-offer-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[180px] flex-1 flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-[#FFF6DB] p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-offer-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruckDelivery",
                                  "size": 110,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-5 -right-4 flex transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 text-[#0B3B24]/10"
                                  }
                                }
                              },
                              {
                                "id": "hb-offer-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex max-w-[70%] flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-offer-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "New here?",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#0B3B24] px-3 py-1 font-body text-xs font-bold text-[#FFC93C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-offer-2-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Free delivery on your first order",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#14231A]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hb-offer-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop now",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/register",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative inline-flex cursor-pointer items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 shadow-sm transition-transform group-hover:translate-x-0.5"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#14231A]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#14231A]"
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
            "id": "hb-aisles",
            "type": "section",
            "options": {
              "anchor": "aisles"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-6"
              }
            },
            "children": [
              {
                "id": "hb-aisles-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-aisles-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-aisles-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-aisles-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-aisles-h",
                                "type": "heading",
                                "options": {
                                  "text": "Shop by aisle",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-aisles-sub",
                                "type": "text",
                                "options": {
                                  "text": "Everything for your kitchen and home",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-aisles-all",
                        "type": "button",
                        "options": {
                          "text": "All categories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-aisles-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-4 gap-2.5 sm:grid-cols-6 sm:gap-3 xl:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-aisle-1",
                        "type": "button",
                        "options": {
                          "text": "Vegetables",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/vegetables",
                          "target": "",
                          "icon": "IconCarrot",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-2",
                        "type": "button",
                        "options": {
                          "text": "Fruits",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/fruits",
                          "target": "",
                          "icon": "IconApple",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFEDDF] text-[#E8590C] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-3",
                        "type": "button",
                        "options": {
                          "text": "Fish & Meat",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/fish-meat",
                          "target": "",
                          "icon": "IconFish",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6F1FB] text-[#1C6FB8] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-4",
                        "type": "button",
                        "options": {
                          "text": "Dairy & Eggs",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/dairy-breakfast",
                          "target": "",
                          "icon": "IconEgg",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF6DB] text-[#B7791F] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-5",
                        "type": "button",
                        "options": {
                          "text": "Bakery",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/bakery",
                          "target": "",
                          "icon": "IconBread",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7EDE3] text-[#9A5B2E] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-6",
                        "type": "button",
                        "options": {
                          "text": "Rice, Dal & Oil",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/staples",
                          "target": "",
                          "icon": "IconBowl",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F1F0E6] text-[#6B6A2E] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-7",
                        "type": "button",
                        "options": {
                          "text": "Spices",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/spices",
                          "target": "",
                          "icon": "IconPepper",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FDEBEB] text-[#C2362B] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-8",
                        "type": "button",
                        "options": {
                          "text": "Snacks",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/snacks-beverages",
                          "target": "",
                          "icon": "IconCookie",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBEFE2] text-[#B4621B] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-9",
                        "type": "button",
                        "options": {
                          "text": "Beverages",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/beverages",
                          "target": "",
                          "icon": "IconCoffee",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFE9E4] text-[#6F4E37] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-10",
                        "type": "button",
                        "options": {
                          "text": "Baby Care",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/baby-care",
                          "target": "",
                          "icon": "IconBabyBottle",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3ECFB] text-[#7A4FC4] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-11",
                        "type": "button",
                        "options": {
                          "text": "Cleaning",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/household",
                          "target": "",
                          "icon": "IconSpray",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F6F7] text-[#127C86] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "hb-aisle-12",
                        "type": "button",
                        "options": {
                          "text": "Pet Care",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/pet-care",
                          "target": "",
                          "icon": "IconPaw",
                          "iconSize": 30
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-2xl bg-white p-3 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          },
                          "icon": {
                            "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2F2EE] text-[#55554B] transition-transform group-hover:scale-110"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold leading-tight text-[#14231A] sm:text-[13px]"
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
            "id": "hb-deals",
            "type": "section",
            "options": {
              "anchor": "deals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-deals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-deals-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] bg-[#FFEDDF] p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-deals-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-deals-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-deals-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFlame",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8590C] text-white"
                                  }
                                }
                              },
                              {
                                "id": "hb-deals-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-deals-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Today’s best deals",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-deals-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Fresh price drops every morning at 8 am",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#5E6B63]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hb-deals-all",
                            "type": "button",
                            "options": {
                              "text": "All deals",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/deals",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 15
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1 rounded-full bg-[#E8590C] px-4 py-2 transition-opacity hover:opacity-90"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-deals-slider",
                        "type": "postSlider",
                        "options": {
                          "queryPrams": {
                            "post_type": [
                              "cmb_product"
                            ],
                            "order": "DESC",
                            "orderby": "date",
                            "posts_per_page": "14",
                            "taxQuery": [
                              {
                                "title": "",
                                "collections": [
                                  {
                                    "taxonomy": "product_tag",
                                    "field": "slug",
                                    "terms": [
                                      "deals"
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
                            "perPage": 6,
                            "perMove": 2,
                            "gap": "0.875rem",
                            "arrows": true,
                            "pagination": false,
                            "rewind": false,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "479": {
                                "perPage": 2,
                                "perMove": 1,
                                "gap": "0.625rem",
                                "arrows": false
                              },
                              "767": {
                                "perPage": 3,
                                "arrows": false
                              },
                              "1023": {
                                "perPage": 4
                              },
                              "1279": {
                                "perPage": 5
                              }
                            }
                          }
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-1"
                          },
                          "arrows-wrap": {
                            "classes": ""
                          },
                          "arrow-item": {
                            "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
                          },
                          "arrow-prev": {
                            "classes": "!-left-3 lg:!-left-5"
                          },
                          "arrow-next": {
                            "classes": "!-right-3 lg:!-right-5"
                          },
                          "pagination": {
                            "classes": ""
                          },
                          "page-item": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-deals-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-deals-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-deals-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hb-deals-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block overflow-hidden rounded-xl bg-white"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "image": {
                                            "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hb-deals-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                    "id": "hb-deals-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-2 flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hb-deals-slider-c-rate",
                                        "type": "productRatings",
                                        "options": {
                                          "hideIfEmpty": true
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "hidden"
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
                                        "id": "hb-deals-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hb-deals-slider-c-ex",
                                        "type": "postExcerpt",
                                        "options": {
                                          "maxWord": 4,
                                          "readMoreText": "",
                                          "readMoreIcon": "",
                                          "readMoreIconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-xs text-[#5E6B63]"
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
                                "id": "hb-deals-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-deals-slider-c-price",
                                    "type": "productPrice",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "simple-price-wrap": {
                                        "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                      },
                                      "simple-price-sale": {
                                        "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "text-xs text-[#5E6B63] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#12A150]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#12A150] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-deals-slider-c-add",
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
                                        "classes": "flex w-full items-center"
                                      },
                                      "button-wrapper": {
                                        "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                      },
                                      "button-label": {
                                        "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            ]
          },
          {
            "id": "hb-row-vegetables",
            "type": "section",
            "options": {
              "anchor": "vegetables"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-row-vegetables-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-row-vegetables-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-vegetables-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-vegetables-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCarrot",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-row-vegetables-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-vegetables-h",
                                "type": "heading",
                                "options": {
                                  "text": "Fresh vegetables",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-vegetables-sub",
                                "type": "text",
                                "options": {
                                  "text": "Picked this morning, delivered today",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-row-vegetables-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/vegetables",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-row-vegetables-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "14",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "vegetables"
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
                        "perPage": 6,
                        "perMove": 2,
                        "gap": "0.875rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "perMove": 1,
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 4
                          },
                          "1279": {
                            "perPage": 5
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-vegetables-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-vegetables-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-vegetables-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-vegetables-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-vegetables-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-row-vegetables-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-vegetables-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-row-vegetables-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-vegetables-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-row-vegetables-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-vegetables-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-vegetables-slider-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            "id": "hb-row-fruits",
            "type": "section",
            "options": {
              "anchor": "fruits"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-row-fruits-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-row-fruits-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-fruits-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-fruits-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconApple",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-row-fruits-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-fruits-h",
                                "type": "heading",
                                "options": {
                                  "text": "Fruits",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-fruits-sub",
                                "type": "text",
                                "options": {
                                  "text": "Local and imported, always in season",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-row-fruits-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/fruits",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-row-fruits-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "14",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "fruits"
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
                        "perPage": 6,
                        "perMove": 2,
                        "gap": "0.875rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "perMove": 1,
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 4
                          },
                          "1279": {
                            "perPage": 5
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-fruits-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-fruits-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-fruits-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-fruits-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-fruits-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-row-fruits-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-fruits-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-row-fruits-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-fruits-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-row-fruits-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-fruits-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-fruits-slider-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            "id": "hb-promos",
            "type": "section",
            "options": {
              "anchor": "offers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-promos-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-4 md:grid-cols-3"
                  }
                },
                "children": [
                  {
                    "id": "hb-promo-1",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-[#0B3B24] p-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-promo-1-ring",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-[18px] border-white/10"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "hb-promo-1-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-promo-1-k",
                            "type": "text",
                            "options": {
                              "text": "Organic week",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-extrabold uppercase tracking-wider text-[#FFC93C]"
                              }
                            }
                          },
                          {
                            "id": "hb-promo-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Certified organic veg & staples",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-extrabold leading-tight tracking-tight text-white"
                              }
                            }
                          },
                          {
                            "id": "hb-promo-1-p",
                            "type": "text",
                            "options": {
                              "text": "Cleaner food for your family, up to 20% off this week.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-promo-1-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop now",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/organic",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFC93C] px-5 py-2.5 transition-all hover:-translate-y-0.5 hover:bg-[#FFDA70]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold text-[#0B3B24] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-promo-2",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-[#FFC93C] p-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-promo-2-ring",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-[18px] border-white/60"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "hb-promo-2-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-promo-2-k",
                            "type": "text",
                            "options": {
                              "text": "Weekly bazaar box",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-extrabold uppercase tracking-wider text-[#0D8040]"
                              }
                            }
                          },
                          {
                            "id": "hb-promo-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Your whole week’s veg in one box",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#14231A]"
                              }
                            }
                          },
                          {
                            "id": "hb-promo-2-p",
                            "type": "text",
                            "options": {
                              "text": "12 seasonal vegetables, hand-picked, from ৳699.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#5E6B63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-promo-2-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop now",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/bazaar-box",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#12A150] px-5 py-2.5 transition-colors hover:bg-[#0D8040]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-promo-3",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-[#E7F7EE] p-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-promo-3-ring",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-[18px] border-white/60"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "hb-promo-3-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-promo-3-k",
                            "type": "text",
                            "options": {
                              "text": "Free delivery",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-extrabold uppercase tracking-wider text-[#0D8040]"
                              }
                            }
                          },
                          {
                            "id": "hb-promo-3-h",
                            "type": "heading",
                            "options": {
                              "text": "On every order over ৳999",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#14231A]"
                              }
                            }
                          },
                          {
                            "id": "hb-promo-3-p",
                            "type": "text",
                            "options": {
                              "text": "Inside our delivery zones. No code needed.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#5E6B63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-promo-3-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop now",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#12A150] px-5 py-2.5 transition-colors hover:bg-[#0D8040]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
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
            "id": "hb-row-fish-meat",
            "type": "section",
            "options": {
              "anchor": "fish-meat"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-row-fish-meat-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-row-fish-meat-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-fish-meat-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-fish-meat-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconFish",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-row-fish-meat-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-fish-meat-h",
                                "type": "heading",
                                "options": {
                                  "text": "Fish & meat",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-fish-meat-sub",
                                "type": "text",
                                "options": {
                                  "text": "Cleaned, cut and cold-chain packed",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-row-fish-meat-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/fish-meat",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-row-fish-meat-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "14",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "fish-meat"
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
                        "perPage": 6,
                        "perMove": 2,
                        "gap": "0.875rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "perMove": 1,
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 4
                          },
                          "1279": {
                            "perPage": 5
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-fish-meat-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-fish-meat-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-fish-meat-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-fish-meat-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-fish-meat-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-row-fish-meat-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-fish-meat-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-row-fish-meat-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-fish-meat-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-row-fish-meat-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-fish-meat-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-fish-meat-slider-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            "id": "hb-row-dairy-breakfast",
            "type": "section",
            "options": {
              "anchor": "dairy-breakfast"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-row-dairy-breakfast-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-row-dairy-breakfast-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-dairy-breakfast-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-dairy-breakfast-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMilk",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-row-dairy-breakfast-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-dairy-breakfast-h",
                                "type": "heading",
                                "options": {
                                  "text": "Dairy, eggs & breakfast",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-dairy-breakfast-sub",
                                "type": "text",
                                "options": {
                                  "text": "Milk, eggs, bread, butter and more",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-row-dairy-breakfast-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/dairy-breakfast",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-row-dairy-breakfast-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "14",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "dairy-breakfast"
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
                        "perPage": 6,
                        "perMove": 2,
                        "gap": "0.875rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "perMove": 1,
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 4
                          },
                          "1279": {
                            "perPage": 5
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-dairy-breakfast-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-dairy-breakfast-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-dairy-breakfast-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-dairy-breakfast-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-dairy-breakfast-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-row-dairy-breakfast-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-dairy-breakfast-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-row-dairy-breakfast-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-dairy-breakfast-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-row-dairy-breakfast-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-dairy-breakfast-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-dairy-breakfast-slider-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            "id": "hb-how",
            "type": "section",
            "options": {
              "anchor": "how-it-works"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#0B3B24] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "hb-how-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-how-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-col gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-how-k",
                        "type": "text",
                        "options": {
                          "text": "How it works",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24] self-start"
                          }
                        }
                      },
                      {
                        "id": "hb-how-h",
                        "type": "heading",
                        "options": {
                          "text": "From the bazaar to your door, fast.",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-how-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-how-s1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-how-s1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-how-s1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconChecklist",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC93C] text-[#0B3B24]"
                                  }
                                }
                              },
                              {
                                "id": "hb-how-s1-n",
                                "type": "text",
                                "options": {
                                  "text": "01",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-extrabold text-white/15"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-how-s1-h",
                            "type": "heading",
                            "options": {
                              "text": "Fill your basket",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-extrabold text-white"
                              }
                            }
                          },
                          {
                            "id": "hb-how-s1-p",
                            "type": "text",
                            "options": {
                              "text": "Choose from 8,000+ products, or reorder your usual list in one tap.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-how-s2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-how-s2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-how-s2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBasket",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC93C] text-[#0B3B24]"
                                  }
                                }
                              },
                              {
                                "id": "hb-how-s2-n",
                                "type": "text",
                                "options": {
                                  "text": "02",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-extrabold text-white/15"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-how-s2-h",
                            "type": "heading",
                            "options": {
                              "text": "We pick it fresh",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-extrabold text-white"
                              }
                            }
                          },
                          {
                            "id": "hb-how-s2-p",
                            "type": "text",
                            "options": {
                              "text": "Our shoppers hand-pick produce and check every expiry date.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-how-s3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-how-s3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-how-s3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBike",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC93C] text-[#0B3B24]"
                                  }
                                }
                              },
                              {
                                "id": "hb-how-s3-n",
                                "type": "text",
                                "options": {
                                  "text": "03",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-extrabold text-white/15"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-how-s3-h",
                            "type": "heading",
                            "options": {
                              "text": "Delivered in 60 min",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-extrabold text-white"
                              }
                            }
                          },
                          {
                            "id": "hb-how-s3-p",
                            "type": "text",
                            "options": {
                              "text": "Track your rider live. Pay cash, bKash or card on arrival.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/70"
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
            "id": "hb-row-staples",
            "type": "section",
            "options": {
              "anchor": "staples"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-row-staples-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-row-staples-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-staples-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-staples-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBowl",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-row-staples-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-staples-h",
                                "type": "heading",
                                "options": {
                                  "text": "Rice, dal, oil & spices",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-staples-sub",
                                "type": "text",
                                "options": {
                                  "text": "Your monthly bazaar, sorted",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-row-staples-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/staples",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-row-staples-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "14",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "staples"
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
                        "perPage": 6,
                        "perMove": 2,
                        "gap": "0.875rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "perMove": 1,
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 4
                          },
                          "1279": {
                            "perPage": 5
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-staples-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-staples-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-staples-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-staples-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-staples-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-row-staples-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-staples-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-row-staples-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-staples-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-row-staples-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-staples-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-staples-slider-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            "id": "hb-row-snacks-beverages",
            "type": "section",
            "options": {
              "anchor": "snacks-beverages"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-row-snacks-beverages-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-row-snacks-beverages-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-snacks-beverages-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-snacks-beverages-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCookie",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-row-snacks-beverages-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-snacks-beverages-h",
                                "type": "heading",
                                "options": {
                                  "text": "Snacks & beverages",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-snacks-beverages-sub",
                                "type": "text",
                                "options": {
                                  "text": "Chips, biscuits, tea, coffee and juices",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-row-snacks-beverages-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/snacks-beverages",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-row-snacks-beverages-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "14",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "snacks-beverages"
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
                        "perPage": 6,
                        "perMove": 2,
                        "gap": "0.875rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "perMove": 1,
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 4
                          },
                          "1279": {
                            "perPage": 5
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-snacks-beverages-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-snacks-beverages-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-snacks-beverages-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-snacks-beverages-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-snacks-beverages-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-row-snacks-beverages-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-snacks-beverages-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-row-snacks-beverages-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-snacks-beverages-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-row-snacks-beverages-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-snacks-beverages-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-snacks-beverages-slider-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            "id": "hb-row-household",
            "type": "section",
            "options": {
              "anchor": "household"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-row-household-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-row-household-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-household-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-household-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSpray",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-row-household-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-household-h",
                                "type": "heading",
                                "options": {
                                  "text": "Household & cleaning",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-household-sub",
                                "type": "text",
                                "options": {
                                  "text": "Detergents, dishwash, tissues and more",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-row-household-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/household",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-row-household-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "14",
                        "taxQuery": [
                          {
                            "title": "",
                            "collections": [
                              {
                                "taxonomy": "product_cat",
                                "field": "slug",
                                "terms": [
                                  "household"
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
                        "perPage": 6,
                        "perMove": 2,
                        "gap": "0.875rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 2,
                            "perMove": 1,
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 4
                          },
                          "1279": {
                            "perPage": 5
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-row-household-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-row-household-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-household-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-household-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-household-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-row-household-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-row-household-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-row-household-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-row-household-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-row-household-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-row-household-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-row-household-slider-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            "id": "hb-brandsec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-brandsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-brandsec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-brandsec-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-brandsec-h",
                                "type": "heading",
                                "options": {
                                  "text": "Popular brands",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-brandsec-sub",
                                "type": "text",
                                "options": {
                                  "text": "Trusted names, genuine products",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-brandsec-all",
                        "type": "button",
                        "options": {
                          "text": "All brands",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/brands",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-brands-slider",
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
                        "perPage": 8,
                        "perMove": 1,
                        "gap": "0.75rem",
                        "arrows": true,
                        "pagination": false,
                        "rewind": false,
                        "mediaQuery": "max",
                        "breakpoints": {
                          "479": {
                            "perPage": 3,
                            "arrows": false
                          },
                          "767": {
                            "perPage": 4,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 6
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
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#E3E8E4] bg-white p-3 text-center transition-colors hover:border-[#12A150]/50"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-brands-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#E3E8E4] bg-white p-3 text-center transition-colors hover:border-[#12A150]/50"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-brands-slider-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-full items-center justify-center overflow-hidden rounded-xl"
                              },
                              "link": {
                                "classes": "flex h-full w-full items-center justify-center"
                              },
                              "image": {
                                "classes": "max-h-12 w-auto max-w-full object-contain"
                              }
                            }
                          },
                          {
                            "id": "hb-brands-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "line-clamp-1 font-body text-xs font-bold text-[#14231A]"
                              }
                            }
                          },
                          {
                            "id": "hb-brands-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " products",
                              "singularSuffix": " product",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11px] text-[#5E6B63]"
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
            "id": "hb-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-reviews-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconHeart",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-reviews-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-reviews-h",
                                "type": "heading",
                                "options": {
                                  "text": "Loved by 60,000+ families",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-reviews-sub",
                                "type": "text",
                                "options": {
                                  "text": "Rated 4.8 on our app and website",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
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
                    "id": "hb-reviews-slider",
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
                        "classes": "!h-10 !w-10 !rounded-full !border !border-[#E3E8E4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#12A150] hover:!border-[#12A150] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#14231A] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#14231A]/15 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#12A150]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl bg-[#F6F8F5] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC93C]"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The vegetables actually look like they came from the bazaar this morning. Fish was cleaned perfectly. Saves me two hours every week.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#14231A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E8E4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "SA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-extrabold text-white"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Shirin Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Regular customer • Mirpur",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#0D8040]"
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
                        "id": "hb-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl bg-[#F6F8F5] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC93C]"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered at 7 pm, delivered by 7:50. Prices are the same or lower than my local shop, and I pay cash at the door.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#14231A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E8E4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "KH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-extrabold text-white"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Kamrul Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Regular customer • Uttara",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#0D8040]"
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
                        "id": "hb-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl bg-[#F6F8F5] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC93C]"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“One item was missing and they refunded it to bKash within the hour. That kind of service keeps me coming back.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#14231A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E8E4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "NS",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-extrabold text-white"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nasrin Sultana",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Regular customer • Dhanmondi",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#0D8040]"
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
                        "id": "hb-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl bg-[#F6F8F5] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC93C]"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“The weekly bazaar box is brilliant. Twelve kinds of veg, all fresh, and my mother approves of the quality.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#14231A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E8E4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "FA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-extrabold text-white"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Faisal Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Regular customer • Mohammadpur",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#0D8040]"
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
                        "id": "hb-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl bg-[#F6F8F5] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC93C]"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Milk, eggs and bread every morning before school. The rider always calls first. Super reliable.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#14231A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E8E4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "RI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-extrabold text-white"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rumana Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Regular customer • Bashundhara",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#0D8040]"
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
                        "id": "hb-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl bg-[#F6F8F5] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC93C]"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Great selection of imported fruits and the deals section is genuinely good. App and website both easy to use.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#14231A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E8E4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "TR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-extrabold text-white"
                                  }
                                }
                              },
                              {
                                "id": "hb-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tanvir Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Regular customer • Gulshan",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#0D8040]"
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
            "id": "hb-journal",
            "type": "section",
            "options": {
              "anchor": "recipes"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-journal-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconToolsKitchen2",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-journal-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-journal-h",
                                "type": "heading",
                                "options": {
                                  "text": "Recipes & kitchen tips",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "hb-journal-sub",
                                "type": "text",
                                "options": {
                                  "text": "Cook something good tonight",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#5E6B63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hb-journal-all",
                        "type": "button",
                        "options": {
                          "text": "All recipes",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full bg-[#E7F7EE] px-4 py-2 transition-colors hover:bg-[#12A150]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0D8040] transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0D8040] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-journal-grid",
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
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-3xl bg-white transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-journal-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col overflow-hidden rounded-3xl bg-white transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,35,26,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#E7F7EE]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "hb-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "self-start rounded-full bg-[#E7F7EE] px-3 py-1 text-[11px] font-bold text-[#0D8040]"
                                  }
                                }
                              },
                              {
                                "id": "hb-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-lg font-extrabold leading-snug text-[#14231A] transition-colors group-hover:text-[#12A150]"
                                  }
                                }
                              },
                              {
                                "id": "hb-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Get the recipe",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#5E6B63]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1 font-body text-sm font-bold text-[#0D8040]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex transition-transform group-hover/rm:translate-x-0.5"
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
            "id": "hb-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-10 lg:py-14"
              }
            },
            "children": [
              {
                "id": "hb-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "hb-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-4 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-end justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-faq-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconHelpCircle",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                                  }
                                }
                              },
                              {
                                "id": "hb-faq-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-faq-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Need help?",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-extrabold tracking-tight text-[#14231A] sm:text-3xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-faq-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Answers to the most common questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#5E6B63]"
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
                        "id": "hb-faq-card",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 rounded-3xl bg-[#E7F7EE] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-faq-card-h",
                            "type": "heading",
                            "options": {
                              "text": "Talk to us",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-extrabold text-[#14231A]"
                              }
                            }
                          },
                          {
                            "id": "hb-faq-card-p",
                            "type": "text",
                            "options": {
                              "text": "Our support team is online every day from 7 am to 11 pm.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#5E6B63]"
                              }
                            }
                          },
                          {
                            "id": "hb-faq-card-btn",
                            "type": "button",
                            "options": {
                              "text": "WhatsApp us",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "#",
                              "target": "",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#12A150] px-7 py-3.5 transition-colors hover:bg-[#0D8040] self-start !px-5 !py-2.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hb-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Where do you deliver, and how fast?",
                          "classes": ""
                        },
                        {
                          "label": "Is there a minimum order or delivery fee?",
                          "classes": ""
                        },
                        {
                          "label": "How do you keep fish, meat and dairy fresh?",
                          "classes": ""
                        },
                        {
                          "label": "What if something is missing or not fresh?",
                          "classes": ""
                        },
                        {
                          "label": "Which payment methods do you accept?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-[#F6F8F5] px-5 py-4 font-body text-base font-bold text-[#14231A] transition-colors hover:bg-[#E7F7EE]"
                      },
                      "accordion-header-open": {
                        "classes": "!rounded-b-none !bg-[#E7F7EE] text-[#0D8040]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#12A150]"
                      },
                      "accordion-content": {
                        "classes": "-mt-3 rounded-b-2xl bg-[#E7F7EE] px-5 pb-5 pt-1"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hb-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "We deliver across our Dhaka zones within 60 minutes for most orders, or in a delivery slot you choose. Outside express zones, delivery is same-day or next-day. Enter your area at checkout to see options.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6B63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hb-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "There is no minimum order. Delivery is free on orders over ৳999; below that a small fee is shown at checkout before you pay.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6B63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hb-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Chilled and frozen items are packed in insulated bags with ice packs and kept cold until they reach your door.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6B63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hb-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Tell us within 24 hours with a photo and we will replace it or refund you to bKash or cash credit, no questions asked.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6B63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hb-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Cash on delivery, bKash, Nagad and Visa / Mastercard.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6B63]"
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
            "id": "hb-cta",
            "type": "section",
            "options": {
              "anchor": "join"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-12 lg:pb-16"
              }
            },
            "children": [
              {
                "id": "hb-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] bg-[#FFC93C] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-cta-ring",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[30px] border-white/40"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "hb-cta-ring-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-20 right-40 h-48 w-48 rounded-full bg-[#12A150]/15"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "hb-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex max-w-xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-cta-k",
                            "type": "text",
                            "options": {
                              "text": "First order offer",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#0B3B24] px-3 py-1 font-body text-xs font-bold text-[#FFC93C] self-start"
                              }
                            }
                          },
                          {
                            "id": "hb-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Get ৳150 off and free delivery on your first order.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B3B24] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "hb-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account, save your address and reorder your weekly list in one tap.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#0B3B24]/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Create free account",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconUserPlus",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0B3B24] px-7 py-3.5 transition-colors hover:bg-[#14532F]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#FFC93C]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-extrabold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "hb-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Browse aisles",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#0B3B24] px-7 py-3 transition-colors hover:bg-[#0B3B24]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-body text-sm font-extrabold text-[#0B3B24] whitespace-nowrap group-hover:text-white"
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
            "id": "hb-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "8,000+ products",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Groceries",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Fresh produce, staples, snacks and household essentials, newest first.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-shop-grid-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
                        "id": "hb-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hb-shop-promise",
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
                "id": "hb-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Farm-fresh daily",
                          "description": "Picked every morning",
                          "icon": "IconPlant2",
                          "iconSize": ""
                        },
                        {
                          "title": "60-minute delivery",
                          "description": "Across our Dhaka zones",
                          "icon": "IconBike",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Or bKash, Nagad, card",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Easy returns",
                          "description": "Not fresh? We refund",
                          "icon": "IconRefresh",
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
                        "classes": "font-body text-sm font-extrabold text-[#14231A]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-shop-promise-fb-ic",
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
                        "id": "hb-shop-promise-fb-t",
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
                        "id": "hb-shop-promise-fb-d",
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
            "id": "hb-pd",
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
                "id": "hb-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-pd-grid",
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
                        "id": "hb-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-pd-gallery",
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
                                "classes": "rounded-3xl border-4 border-white bg-gradient-to-tr from-[#EEF5F0] via-white to-[#FFF6DB] p-4 shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-3xl bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#14231A]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#14231A]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#12A150]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-pd-cats",
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
                                "classes": "rounded-full bg-[#EEF5F0] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0B3B24] hover:bg-[#0B3B24] hover:text-white"
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
                            "id": "hb-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#14231A] sm:text-4xl tracking-tight"
                              }
                            }
                          },
                          {
                            "id": "hb-pd-rate",
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
                                "classes": "font-body font-bold text-[#14231A]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "hb-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-price",
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
                                    "classes": "font-heading text-3xl font-extrabold text-[#14231A] tracking-tight"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-extrabold text-[#14231A] tracking-tight"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-extrabold text-[#14231A] tracking-tight"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#12A150] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "hb-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6B63]"
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
                            "id": "hb-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#14231A]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#14231A] transition-colors hover:border-[#0B3B24] hover:bg-[#EEF5F0]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#0B3B24] !bg-[#EEF5F0] !text-[#14532F]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "hb-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock today",
                              "inStockText": "In stock · delivered in 60 min",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#12A150]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#0B3B24]"
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
                            "id": "hb-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Basket",
                              "hideQuantity": false,
                              "hideButton": false,
                              "icon": "IconBasket",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-stretch gap-3"
                              },
                              "quantity-wrapper": {
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#14231A]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F6F8F5]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F6F8F5]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#12A150] px-8 text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#0D8040]"
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
                            "id": "hb-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Farm-fresh",
                                  "description": "Picked this morning",
                                  "icon": "IconPlant2",
                                  "iconSize": ""
                                },
                                {
                                  "title": "60-min delivery",
                                  "description": "Dhaka zones",
                                  "icon": "IconBike",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Freshness promise",
                                  "description": "Refund if not fresh",
                                  "icon": "IconRefresh",
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
                                "classes": "font-body text-base font-bold text-[#14231A]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF5F0] text-[#0B3B24]"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-perks-ic",
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
                                "id": "hb-pd-perks-t",
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
                                "id": "hb-pd-perks-d",
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
                            "id": "hb-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-sku",
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
                                    "classes": "font-semibold text-[#14231A]"
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
                                "id": "hb-pd-brands",
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
                                    "classes": "font-semibold text-[#14231A]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#12A150]"
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
                                "id": "hb-pd-tags",
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
                                    "classes": "font-semibold text-[#14231A]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#12A150]"
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
            "id": "hb-pd-tabs-sec",
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
                "id": "hb-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,35,26,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Storage & Use",
                              "icon": "IconLeaf"
                            },
                            {
                              "label": "Delivery & Returns",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F6F8F5] px-5 py-2.5 font-body text-sm font-semibold text-[#14231A] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#14231A] !text-white shadow-md"
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
                            "id": "hb-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#14231A] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#14231A] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#12A150] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC93C] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconLeaf",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Weight, size and origin are listed in the description; fresh items may vary slightly",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Refrigerate fish, meat and dairy as soon as they arrive",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Leafy greens keep best wrapped in a damp cloth in the fridge",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Check best-before dates on packaged goods; we never ship near-expiry stock",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#0B3B24]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Express delivery in 60 minutes across our Dhaka zones",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free delivery on orders over ৳999",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cash on delivery, bKash, Nagad or card",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Not fresh or missing? Tell us within 24 hours for a refund",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#0B3B24]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hb-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F6F8F5] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F6F8F5] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hb-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E7F7EE]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hb-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#14231A]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hb-pd-reviews-rate",
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
                                        "id": "hb-pd-reviews-co",
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
                                    "id": "hb-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How fresh was it? How was the quality?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thanks! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,35,26,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#14231A]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F6F8F5] px-4 py-3 text-sm text-[#14231A] placeholder:text-gray-400 focus:border-[#0B3B24] focus:outline-none focus:ring-2 focus:ring-[#0B3B24]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#12A150] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0D8040] disabled:opacity-50"
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
            "id": "hb-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-16"
              }
            },
            "children": [
              {
                "id": "hb-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Often bought together",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E7F7EE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#12A150]"
                          }
                        }
                      },
                      {
                        "id": "hb-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You May Also Need",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#14231A] tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-pd-rel-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
            "id": "hb-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "All aisles",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Category",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Vegetables, fruits, fish, meat, dairy, staples and household. Pick an aisle.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#EEF5F0] transition-transform"
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
                            "id": "hb-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#14231A] transition-colors group-hover:text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-cat-grid-count",
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
                        "id": "hb-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hb-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "hb-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B3B24] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-cat1-grid-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
                        "id": "hb-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hb-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group products by diet and deal: organic, deals, imported, sugar-free and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#12A150]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#12A150]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#14231A] group-hover:text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F6F8F5] px-2 py-0.5 text-[10px] font-bold text-[#5E6B63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hb-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hb-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "hb-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B3B24] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-tag1-grid-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
                        "id": "hb-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hb-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Trusted names",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every brand on our shelves, from local favourites to imports.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F6F8F5] p-3"
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
                            "id": "hb-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#14231A] group-hover:text-[#12A150]"
                              }
                            }
                          },
                          {
                            "id": "hb-brand-grid-count",
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
                        "id": "hb-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hb-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "hb-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B3B24] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-brand1-grid-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
                        "id": "hb-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hb-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Cook something good",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Recipes & Kitchen Tips",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Easy weeknight dinners, seasonal recipes and smart storage tips.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF6DB]"
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
                            "id": "hb-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#0B3B24]"
                                  }
                                }
                              },
                              {
                                "id": "hb-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#14231A] transition-colors group-hover:text-[#12A150]"
                                  }
                                }
                              },
                              {
                                "id": "hb-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Get the recipe",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#12A150]"
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
                        "id": "hb-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#14231A] transition-colors hover:border-[#12A150] hover:text-[#12A150]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#12A150] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hb-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF6DB] via-white to-[#F6F8F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "hb-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-post-k",
                    "type": "text",
                    "options": {
                      "text": "Recipes & tips",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EEF5F0] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#5E6B63]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-post-author",
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
                            "classes": "font-body font-bold text-[#14231A]"
                          }
                        }
                      },
                      {
                        "id": "hb-post-dot",
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
                        "id": "hb-post-date",
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
                    "id": "hb-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
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
            "id": "hb-post-body",
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
                "id": "hb-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#14231A] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#14231A] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#12A150] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC93C] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-16"
              }
            },
            "children": [
              {
                "id": "hb-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#14231A] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F6F8F5] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F6F8F5] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E7F7EE]"
                              }
                            }
                          },
                          {
                            "id": "hb-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#14231A]"
                              }
                            }
                          },
                          {
                            "id": "hb-post-cmt-co",
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
                        "id": "hb-post-cmt-form",
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
                            "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,35,26,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#14231A]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F6F8F5] px-4 py-3 text-sm text-[#14231A] placeholder:text-gray-400 focus:border-[#0B3B24] focus:outline-none focus:ring-2 focus:ring-[#0B3B24]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#12A150] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0D8040] disabled:opacity-50"
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
            "id": "hb-post-more",
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
                "id": "hb-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Recipes",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#14231A] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF6DB]"
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
                            "id": "hb-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#0B3B24]"
                                  }
                                }
                              },
                              {
                                "id": "hb-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#14231A] transition-colors group-hover:text-[#12A150]"
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
            "id": "hb-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E7F7EE] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "hb-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hb-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold text-[#0B3B24]"
                      }
                    }
                  },
                  {
                    "id": "hb-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#14231A] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, reorder your usual list and manage your saved addresses.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6B63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hb-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-12"
              }
            },
            "children": [
              {
                "id": "hb-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#14231A] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#FFC93C]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white tracking-tight"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#12A150]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#12A150]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#12A150]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "hb-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hb-acc-3",
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
                                "id": "hb-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,35,26,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#12A150] focus:outline-none focus:ring-2 focus:ring-[#12A150]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#12A150] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0D8040] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A150]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "hb-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,35,26,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#12A150] focus:outline-none focus:ring-2 focus:ring-[#12A150]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#12A150] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0D8040] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A150]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "hb-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "hb-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F6F8F5] px-5 py-2.5 font-body text-sm font-semibold text-[#14231A] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#14231A] !text-white shadow-md"
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
                                "id": "hb-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#12A150]/10 text-[#12A150]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hb-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#12A150] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "hb-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#12A150]/10 text-[#12A150]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "hb-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#12A150]/40 hover:bg-[#12A150]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#12A150]/10 text-[#12A150]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "hb-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#12A150]/10 text-[#12A150]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#12A150] focus:outline-none focus:ring-2 focus:ring-[#12A150]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#12A150] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0D8040] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A150]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A150]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "hb-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF6DB] via-white to-[#F6F8F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "hb-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(20,35,26,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF5F0] text-[#0B3B24]"
                          }
                        }
                      },
                      {
                        "id": "hb-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E7F7EE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#12A150]"
                          }
                        }
                      },
                      {
                        "id": "hb-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Your Basket Is On Its Way!",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#14231A] sm:text-4xl tracking-tight"
                          }
                        }
                      },
                      {
                        "id": "hb-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Our shopper is picking your groceries now. Follow your order live from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#5E6B63] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "hb-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order and assign a shopper",
                              "icon": ""
                            },
                            {
                              "text": "Your groceries are hand-picked, checked and packed cold where needed",
                              "icon": ""
                            },
                            {
                              "text": "Your rider delivers within your slot: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-3xl bg-[#F6F8F5] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#12A150]"
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
                        "id": "hb-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#12A150] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0D8040] w-full sm:w-auto"
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
                            "id": "hb-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0B3B24] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#0B3B24] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0B3B24] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#0B3B24] whitespace-nowrap group-hover:text-white"
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
            "id": "hb-ty-promise",
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
                "id": "hb-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Farm-fresh daily",
                          "description": "Picked every morning",
                          "icon": "IconPlant2",
                          "iconSize": ""
                        },
                        {
                          "title": "60-minute delivery",
                          "description": "Across our Dhaka zones",
                          "icon": "IconBike",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Or bKash, Nagad, card",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Easy returns",
                          "description": "Not fresh? We refund",
                          "icon": "IconRefresh",
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
                        "classes": "font-body text-sm font-extrabold text-[#14231A]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F7EE] text-[#12A150]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-ty-promise-fb-ic",
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
                        "id": "hb-ty-promise-fb-t",
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
                        "id": "hb-ty-promise-fb-d",
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
            "id": "hb-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF6DB] via-white to-[#F6F8F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "hb-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-extrabold text-[#12A150] sm:text-9xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF6DB] text-[#14231A]"
                      }
                    }
                  },
                  {
                    "id": "hb-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Page Not Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#14231A] sm:text-4xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "hb-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the item may be out of stock. Head back home or browse all aisles.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5E6B63] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "hb-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#12A150] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0D8040] w-full sm:w-auto"
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
                        "id": "hb-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Browse All Groceries",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0B3B24] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#0B3B24] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0B3B24] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#0B3B24] whitespace-nowrap group-hover:text-white"
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
            "id": "hb-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F6F8F5] py-16"
              }
            },
            "children": [
              {
                "id": "hb-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hb-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFC93C] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#14231A]"
                          }
                        }
                      },
                      {
                        "id": "hb-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#14231A] sm:text-4xl tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hb-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hb-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E8E4] bg-white p-3 transition-all duration-200 hover:border-[#12A150]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hb-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-white"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#E8590C] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "hb-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hb-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                                    "id": "hb-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#14231A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hb-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#5E6B63]"
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
                            "id": "hb-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hb-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline justify-end gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#5E6B63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#14231A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#12A150]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#12A150] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hb-nf-grid-c-add",
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
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#12A150] text-[#12A150] transition-colors hover:bg-[#12A150] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-extrabold whitespace-nowrap"
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
